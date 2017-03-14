(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"), require("survey-knockout"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyEditor", ["knockout", "survey-knockout"], factory);
	else if(typeof exports === 'object')
		exports["SurveyEditor"] = factory(require("knockout"), require("survey-knockout"));
	else
		root["SurveyEditor"] = factory(root["ko"], root["Survey"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
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
        var loc = locale ? this.locales[this.currentLocale] : defaultStrings;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyEditors_propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionEditorGeneralProperties__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionEditorDefinition__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_survey_knockout__);
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
        var jQuery = window["jQuery"];
        jQuery("#surveyquestioneditorwindow").modal("show");
        editor.onHideWindow = function () { jQuery("#surveyquestioneditorwindow").modal("hide"); };
    };
    return SurveyPropertyEditorShowWindow;
}());

var SurveyQuestionProperties = (function () {
    function SurveyQuestionProperties(obj, onCanShowPropertyCallback) {
        this.obj = obj;
        this.onCanShowPropertyCallback = onCanShowPropertyCallback;
        this.properties = __WEBPACK_IMPORTED_MODULE_6_survey_knockout__["JsonObject"].metaData.getProperties(this.obj.getType());
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
            this.koTitle(__WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString("pe.qEditorTitle")["format"](this.obj["name"]));
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
        var properties = new __WEBPACK_IMPORTED_MODULE_4__questionEditorGeneralProperties__["a" /* SurveyQuestionEditorGeneralProperties */](this.obj, __WEBPACK_IMPORTED_MODULE_5__questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].getProperties(this.className), this.onCanShowPropertyCallback);
        tabs.push(new SurveyQuestionEditorTabGeneral(this.obj, properties));
        this.addPropertiesTabs(tabs);
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].onCanShowPropertyCallback = this.onCanShowPropertyCallback;
        }
        return tabs;
    };
    SurveyQuestionEditor.prototype.addPropertiesTabs = function (tabs) {
        var tabNames = __WEBPACK_IMPORTED_MODULE_5__questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].getTabs(this.className);
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
            var str = __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString("pe.tabs." + this.name);
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
        _this.properties = properties ? properties : new __WEBPACK_IMPORTED_MODULE_4__questionEditorGeneralProperties__["a" /* SurveyQuestionEditorGeneralProperties */](obj, __WEBPACK_IMPORTED_MODULE_5__questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].getProperties(obj.getType()), null);
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
        _this.propertyEditorValue = __WEBPACK_IMPORTED_MODULE_2__propertyEditors_propertyEditorBase__["a" /* SurveyPropertyEditorBase */].createEditor(_this.property.type, null);
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
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagesEditor__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyEmbedingWindow__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surveyObjects__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__objectVerbs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__questionEditors_questionEditor__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__surveyJSONEditor__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__textWorker__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__undoredo__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__surveyHelper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dragdrophelper__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__questionToolbox__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__json5__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyEditor; });















var templateEditorHtml = __webpack_require__(55);
var templatePageHtml = __webpack_require__(53);
var templateQuestionHtml = __webpack_require__(54);

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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svd_container\">\r\n    <ul class=\"navbar-default container-fluid nav nav-tabs svd_menu\">\r\n        <li data-bind=\"css: {active: koViewType() == 'designer'}\"><a href=\"#\" data-bind=\"click:selectDesignerClick, text: $root.getLocString('ed.designer')\"></a></li>\r\n        <li data-bind=\"visible: showJSONEditorTab, css: {active: koViewType() == 'editor'}\"><a href=\"#\" data-bind=\"click:selectEditorClick, text: $root.getLocString('ed.jsonEditor')\"></a></li>\r\n        <li data-bind=\"visible: showTestSurveyTab, css: {active: koViewType() == 'test'}\"><a href=\"#\" data-bind=\"click:selectTestClick, text: $root.getLocString('ed.testSurvey')\"></a></li>\r\n        <li data-bind=\"visible: showEmbededSurveyTab, css: {active: koViewType() == 'embed'}\"><a href=\"#\" data-bind=\"click:selectEmbedClick, text: $root.getLocString('ed.embedSurvey')\"></a></li>\r\n\r\n        <li class=\"svd_actions\" data-bind=\"visible: koIsShowDesigner\">\r\n            <button type=\"button\" class=\"btn btn-primary\" data-bind=\"enable:undoRedo.koCanUndo, click: doUndoClick\"><span data-bind=\"text: $root.getLocString('ed.undo')\"></span></button>\r\n        </li>\r\n        <li class=\"svd_actions\" data-bind=\"visible: koIsShowDesigner\">\r\n            <button type=\"button\" class=\"btn btn-primary\" data-bind=\"enable:undoRedo.koCanRedo, click: doRedoClick\"><span data-bind=\"text: $root.getLocString('ed.redo')\"></span></button>\r\n        </li>\r\n        <li class=\"svd_actions\" data-bind=\"visible: (koIsShowDesigner() && koShowOptions())\">\r\n            <div class=\"btn-group inline\">\r\n                <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" data-bind=\"text: $root.getLocString('ed.options')\">\r\n                    Options \r\n                    <span class=\"caret\"></span>\r\n                </button>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li data-bind=\"css: {active: koGenerateValidJSON}\"><a href=\"#\" data-bind=\"click:generateValidJSONClick, text: $root.getLocString('ed.generateValidJSON')\"></a></li>\r\n                    <li data-bind=\"css: {active: !koGenerateValidJSON()}\"><a href=\"#\" data-bind=\"click:generateReadableJSONClick, text: $root.getLocString('ed.generateReadableJSON')\"></a></li>\r\n                </ul>\r\n            </div>\r\n        </li>\r\n        <li class=\"svd_actions\" data-bind=\"visible: koViewType() == 'test'\">\r\n            <div class=\"btn-group inline\">\r\n                <button type=\"button\" id=\"surveyTestWidth\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n                    <span data-bind=\"text: $root.getLocString('ed.testSurveyWidth') + ' ' + $root.koTestSurveyWidth()\"></span>\r\n                    <span class=\"caret\"></span>\r\n                </button>\r\n                <ul class=\"dropdown-menu\" aria-labelledby=\"surveyTestWidth\">\r\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '100%')\">100%</a></li>\r\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '1200px')\">1200px</a></li>\r\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '1000px')\">1000px</a></li>\r\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '800px')\">800px</a></li>\r\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '600px')\">600px</a></li>\r\n                    <li><a href=\"#\" data-bind=\"click: koTestSurveyWidth.bind($data, '400px')\">400px</a></li>\r\n                </ul>\r\n            </div>\r\n        </li>\r\n        <li class=\"svd_actions\">\r\n            <button type=\"button\" class=\"btn btn-primary svd_save_btn\" data-bind=\"click: saveButtonClick, visible: koShowSaveButton\"><span data-bind=\"text: $root.getLocString('ed.saveSurvey')\"></span></button>\r\n        </li>\r\n    </ul>\r\n\r\n    <div class=\"panel svd_content\">\r\n        <div class=\"row svd_survey_designer\"  data-bind=\"visible: koViewType() == 'designer'\">\r\n            <div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-1 panel panel-default svd_toolbox\">\r\n                <div class=\"btn-group-vertical\" style=\"width:100%;padding-right:2px\">\r\n                    <!-- ko foreach: toolbox.koItems -->\r\n                    <div class=\"btn btn-default\" style=\"text-align:left; margin:1px;min-height:37px; width:100%\" draggable=\"true\" data-bind=\"click: $root.clickToolboxItem, event:{dragstart: function(el, e) { $root.draggingToolboxItem($data, e); return true;}, dragend: function(el, e) { $root.dragEnd(); }}\">\r\n                        <span data-bind=\"css: iconName, attr: {title: title}\"></span>\r\n                        <span class=\"svd_toolbox_item_text hidden-sm hidden-xs\" data-bind=\"text:title\"></span>\r\n                    </div>\r\n                    <!-- /ko  -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-7 col-md-7 col-sm-8 col-xs-11 svd_editors\">\r\n                <div class=\"svd_pages_editor\" data-bind=\"template: { name: 'pageeditor', data: pagesEditor }\"></div>\r\n                <div class=\"svd_questions_editor\" id=\"scrollableDiv\" data-bind=\"style: {height: koDesignerHeight}\">\r\n                    <div id=\"surveyjs\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-3 hidden-xs panel panel-default svd_properties\">\r\n                <div class=\"panel-heading input-group\">\r\n                    <div class=\"custom-select\">\r\n                        <select class=\"form-control\" data-bind=\"options: koObjects, optionsText: 'text', value: koSelectedObject\"></select>\r\n                    </div>\r\n                    <div class=\"input-group-btn\">\r\n                        <button class=\"btn btn-default\" type=\"button\" data-bind=\"enable: koCanDeleteObject, click: deleteCurrentObject, attr: { title: $root.getLocString('ed.delSelObject')}\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"svd_object_editor\" data-bind=\"style: {height: koDesignerHeight}\">\r\n                    <div data-bind=\"template: { name: 'objecteditor', data: selectedObjectEditor }\"></div>\r\n                </div>\r\n                <div class=\"panel-footer\" data-bind=\"visible:surveyVerbs.koHasVerbs\">\r\n                    <div data-bind=\"template: { name: 'objectverbs', data: surveyVerbs }\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div data-bind=\"visible: koViewType() == 'editor'\">\r\n            <div data-bind=\"template: { name: 'jsoneditor', data: jsonEditor }\"></div>\r\n        </div>\r\n\r\n        <div id=\"surveyjsTest\" data-bind=\"visible: koViewType() == 'test', style: {width: koTestSurveyWidth}\">\r\n            <div id=\"surveyjsExample\"></div>\r\n            <div id=\"surveyjsExampleResults\"></div>\r\n            <button id=\"surveyjsExamplereRun\" data-bind=\"click:selectTestClick, text: $root.getLocString('ed.testSurveyAgain')\" style=\"display:none\">Test Again</button>\r\n        </div>\r\n\r\n        <div id=\"surveyjsEmbed\" data-bind=\"visible: koViewType() == 'embed'\">\r\n            <div data-bind=\"template: { name: 'surveyembeding', data: surveyEmbeding }\"></div>\r\n        </div>\r\n    </div>\r\n    <div data-bind=\"template: { name: 'questioneditor', data: questionEditorWindow }\"></div>\r\n</div>";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"jsoneditor\">\r\n    <div data-bind=\"visible: !hasAceEditor\">\r\n        <textarea class=\"svd_json_editor_area\" data-bind=\"textInput:koText\"></textarea>\r\n        <!-- ko foreach: koErrors -->\r\n        <div>\r\n            <span>Error: </span><span data-bind=\"text: text\"></span>\r\n        </div>\r\n        <!-- /ko  -->\r\n    </div>\r\n    <div id=\"surveyjsJSONEditor\" class=\"svd_json_editor\"></div>\r\n</script>";

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"objecteditor\">\r\n    <table class=\"table svd_table-nowrap\">\r\n        <tbody data-bind=\"foreach: koProperties\">\r\n            <tr data-bind=\"click: $parent.changeActiveProperty($data), css: {'active': $parent.koActiveProperty() == $data}\">\r\n                <td data-bind=\"text: displayName, attr: {title: title}\" width=\"50%\"></td>\r\n                <td width=\"50%\">\r\n                    <span data-bind=\"text: koText, visible: $parent.koActiveProperty() != $data || disabled, attr: {title: koText}\" style=\"text-overflow:ellipsis;white-space:nowrap;overflow:hidden\"></span>\r\n                    <div data-bind=\"visible: $parent.koActiveProperty() == $data && !disabled\">\r\n                        <!-- ko template: { name: 'propertyeditor-' + editorType, data: $data } -->\r\n                        <!-- /ko -->\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</script>";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"objectverbs\">\r\n    <!-- ko foreach: koVerbs -->\r\n        <div class=\"row\">\r\n            <div class=\"input-group\">\r\n                <span  class=\"input-group-addon\" data-bind=\"text:text\"></span>\r\n                <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'text', optionsValue:'value', value: koSelectedItem\"></select>\r\n            </div>\r\n        </div>\r\n    <!-- /ko  -->\r\n</script>";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"pageeditor\">\r\n    <ul class=\"nav nav-tabs\" data-bind=\"tabs:true\">\r\n        <!-- ko foreach: koPages -->\r\n        <li data-bind=\"css: {active: koSelected()},event:{\r\n           keydown:function(el, e){ $parent.keyDown(el, e); },\r\n           dragstart:function(el, e){ $parent.dragStart(el); return true; },\r\n           dragover:function(el, e){ $parent.dragOver(el);},\r\n           dragend:function(el, e){ $parent.dragEnd();},\r\n           drop:function(el, e){ $parent.dragDrop(el);}\r\n         }\"> \r\n            <a class=\"svd_page_nav\" href=\"#\" data-bind=\"click:$parent.selectPageClick\">\r\n                <span data-bind=\"text: title\"></span>\r\n            </a>\r\n        </li>\r\n        <!-- /ko  -->\r\n        <li><button class=\"btn btn-default svd_add_new_page_btn\" data-bind=\"click:addNewPageClick\"><span class=\"glyphicon glyphicon-plus\"></span></button></li>\r\n    </ul>\r\n</script>";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-boolean\">\r\n    <input class=\"form-control\" type=\"checkbox\" data-bind=\"checked: koValue\" />\r\n</script>";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-dropdown\">\r\n    <div class=\"custom-select\">\r\n        <select class=\"form-control\" data-bind=\"value: koValue, options: choices\"  style=\"width:100%\"></select>\r\n    </div>\r\n</script>";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-expression\">\r\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\r\n</script>\r\n\r\n<script type=\"text/html\" id=\"propertyeditorcontent-expression\">\r\n    <div>\r\n        <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"8\" autofocus=\"autofocus\"></textarea>\r\n        <span data-bind=\"text:$root.getLocString('pe.expressionHelp')\" style=\"white-space:normal\"></span>\r\n    </div>\r\n</script>\r\n";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-html\">\r\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\r\n</script>\r\n\r\n<script type=\"text/html\" id=\"propertyeditorcontent-html\">\r\n    <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"10\" autofocus=\"autofocus\"></textarea>\r\n</script>\r\n";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-itemvalues\">\r\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\r\n</script>\r\n<script type=\"text/html\" class=\"btn-xs\" id=\"propertyeditorcontent-itemvalues\">\r\n    <div style=\"margin-bottom:3px\">\r\n        <button class=\"btn-xs\" data-bind=\"css: {'btn btn-primary':koActiveView() == 'form', 'btn-link':koActiveView() != 'form'}, click:changeToFormViewClick, text: $root.getLocString('pe.formEntry')\"></button>\r\n        <button class=\"btn-xs\" data-bind=\"css: {'btn btn-primary':koActiveView() != 'form', 'btn-link':koActiveView() == 'form'}, click:changeToTextViewClick, text: $root.getLocString('pe.fastEntry')\"></button>\r\n    </div>\r\n    <div data-bind=\"visible:koActiveView() == 'form'\" style=\"overflow-y: auto; overflow-x:hidden; max-height:400px;min-height:200px\">\r\n        <table class=\"table\" >\r\n            <thead>\r\n                <tr>\r\n                    <th></th>\r\n                    <th data-bind=\"text: $root.getLocString('pe.value')\"></th>\r\n                    <th data-bind=\"text: $root.getLocString('pe.text')\"></th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <!-- ko foreach: koItems -->\r\n                <tr>\r\n                    <td>\r\n                        <div class=\"btn-group\" role=\"group\">\r\n                            <button type=\"button\" class=\"btn btn-xs\" data-bind=\"visible: $index() > 0, click: $parent.onMoveUpClick\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"true\"></span></button>\r\n                            <button type=\"button\" class=\"btn btn-xs\" style=\"float:none\" data-bind=\"visible: $index() < $parent.koItems().length - 1, click: $parent.onMoveDownClick\"><span class=\"glyphicon glyphicon-arrow-down\" aria-hidden=\"true\"></span></button>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"text\" class=\"form-control\" data-bind=\"value:koValue\" style=\"width:200px\" />\r\n                        <div class=\"alert alert-danger no-padding\" role=\"alert\" data-bind=\"visible:koHasError, text: $root.getLocString('pe.enterNewValue')\"></div>\r\n                    </td>\r\n                    <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koText\" style=\"width:200px\" /></td>\r\n                    <td><button type=\"button\" class=\"btn btn-xs\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\r\n                </tr>\r\n                <!-- /ko -->\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class=\"row btn-toolbar\" data-bind=\"visible:koActiveView() == 'form'\">\r\n        <input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\" />\r\n        <input type=\"button\" class=\"btn btn-danger\" data-bind=\"click: onClearClick, value: $root.getLocString('pe.removeAll')\" />\r\n    </div>\r\n    <div data-bind=\"visible:koActiveView() != 'form'\">\r\n        <textarea class=\"form-control\" data-bind=\"textInput: koItemsText\" style=\"overflow-y: auto; overflow-x:hidden; max-height:400px; min-height:250px; width:100%\"></textarea>\r\n    </div>\r\n</script>\r\n";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-matrixdropdowncolumns\">\r\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\r\n</script>\r\n<script type=\"text/html\" id=\"propertyeditorcontent-matrixdropdowncolumns\">\r\n    <table class=\"table\" data-bind=\"visible: koIsList\">\r\n        <thead>\r\n            <tr>\r\n                <th data-bind=\"text: $root.getLocString('pe.required')\"></th>\r\n                <th data-bind=\"text: $root.getLocString('pe.cellType')\"></th>\r\n                <th data-bind=\"text: $root.getLocString('pe.name')\"></th>\r\n                <th data-bind=\"text: $root.getLocString('pe.title')\"></th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <!-- ko foreach: koItems -->\r\n            <tr>\r\n                <td>\r\n                    <input type=\"checkbox\" data-bind=\"checked: koIsRequired\" />\r\n                    <button type=\"button\" class=\"btn\" data-bind=\"visible: koCanEdit, click: $parent.onEditItemClick\">\r\n                        <span class=\"glyphicon glyphicon-edit\"></span>\r\n                    </button>\r\n                </td>\r\n                <td>\r\n                    <select class=\"form-control\" data-bind=\"options: cellTypeChoices, value: koCellType\"  style=\"width:110px\"></select>\r\n                </td>\r\n                <td>\r\n                    <input type=\"text\" class=\"form-control\" data-bind=\"value:koName\" style=\"width:100px\" />\r\n                    <div class=\"alert alert-danger no-padding\" role=\"alert\" data-bind=\"visible:koHasError, text: $root.getLocString('pe.enterNewValue')\"></div>\r\n                </td>\r\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koTitle\" style=\"width:120px\" /></td>\r\n                <td><button type=\"button\" class=\"btn\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\r\n            </tr>\r\n            <!-- /ko -->\r\n            <tr>\r\n                <td colspan=\"3\">\r\n                    <div class=\"row btn-toolbar\">\r\n                        <input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\"/>\r\n                        <input type=\"button\" class=\"btn btn-danger\" data-bind=\"click: onClearClick, value: $root.getLocString('pe.removeAll')\"\" />\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n     <!-- ko if: !koIsList() -->\r\n        <div style=\"padding: 5px\">\r\n            <button type=\"button\" class=\"btn\" data-bind=\"click: onCancelEditItemClick\">\r\n                <span class=\"glyphicon glyphicon-list-alt\"></span>\r\n            </button>\r\n            <span data-bind=\"text: koEditItem().koEditorName\"></span>\r\n        </div>\r\n        <!-- ko template: { name: \"questioneditor-content\", data: columnEditor } -->\r\n        <!-- /ko -->\r\n    <!-- /ko -->\r\n</script>\r\n";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-modal\">\r\n    <div class=\"input-group\" data-bind=\"visible:!editor.isEditable\">\r\n        <a data-toggle=\"modal\" data-bind=\"attr: {'data-target' : modalNameTarget}\"><span data-bind=\"text: koText\"></span></a>\r\n        <div class=\"input-group-btn\">\r\n            <button class=\"btn btn-default\" data-toggle=\"modal\" style=\"padding: 2px;\" data-bind=\"attr: {'data-target' : modalNameTarget}\">\r\n                <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"input-group\" data-bind=\"visible:editor.isEditable\" style=\"display:table\">\r\n        <input class=\"form-control\" type=\"text\" data-bind=\"value: koValue\" style=\"display:table-cell; width:100%\" />\r\n        <div class=\"input-group-btn\">\r\n            <button type=\"button\" class=\"btn btn-default\" style=\"display:table-cell; padding: 2px;\"  data-toggle=\"modal\" data-bind=\"attr: {'data-target' : modalNameTarget}\">\r\n                <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div data-bind=\"attr: {id : modalName}\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\" data-bind=\"text:editor.title\"></h4>\r\n                </div>  \r\n                <div class=\"modal-body svd_notopbottompaddings\">\r\n                    <!-- ko template: { name: 'propertyeditorcontent-' + editorType, data: editor } -->\r\n                    <!-- /ko -->\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <input type=\"button\" class=\"btn btn-primary\" data-bind=\"click: editor.onApplyClick, value: $root.getLocString('pe.apply')\" style=\"width:100px\" />\r\n                    <input type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" data-bind=\"click: editor.onApplyClick, value: $root.getLocString('pe.ok')\" style=\"width:100px\" />\r\n                    <input type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" data-bind=\"click: editor.onResetClick, value: $root.getLocString('pe.cancel')\" style=\"width:100px\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</script>\r\n";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-number\">\r\n    <input class=\"form-control\" type=\"number\" data-bind=\"value: koValue\" style=\"width:100%\" />\r\n</script>";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-restfull\">\r\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\r\n</script>\r\n\r\n<script type=\"text/html\" id=\"propertyeditorcontent-restfull\">\r\n    <form>\r\n        <div class=\"form-group\">\r\n            <label for=\"url\">Url:</label>\r\n            <input id=\"url\" type=\"text\" data-bind=\"value:koUrl\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"path\">Path:</label>\r\n            <input id=\"path\" type=\"text\" data-bind=\"value:koPath\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"valueName\">valueName:</label>\r\n            <input id=\"valueName\" type=\"text\" data-bind=\"value:koValueName\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"titleName\">titleName:</label>\r\n            <input id=\"titleName\" type=\"text\" data-bind=\"value:koTitleName\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"titleName\"><span data-bind=\"text:$root.getLocString('pe.testService')\"></span></label>\r\n            <select class=\"form-control\" data-bind=\"options: question.koVisibleChoices, optionsText: 'text', optionsValue: 'value', optionsCaption: question.optionsCaption\"></select>\r\n        </div>\r\n    </form>\r\n</script>\r\n";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-string\">\r\n    <input class=\"form-control\" type=\"text\" data-bind=\"value: koValue\" style=\"width:100%\" />\r\n</script>";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-text\">\r\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\r\n</script>\r\n\r\n<script type=\"text/html\" id=\"propertyeditorcontent-text\">\r\n    <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"10\" autofocus=\"autofocus\"></textarea>\r\n</script>\r\n";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-textitems\">\r\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\r\n</script>\r\n<script type=\"text/html\" id=\"propertyeditorcontent-textitems\">\r\n<div class=\"panel\">\r\n    <table class=\"table\">\r\n        <thead>\r\n            <tr>\r\n                <th data-bind=\"text: $root.getLocString('pe.name')\"></th>\r\n                <th data-bind=\"text: $root.getLocString('pe.title')\"></th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <!-- ko foreach: koItems -->\r\n            <tr>\r\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koName\" style=\"width:200px\" /></td>\r\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koTitle\" style=\"width:200px\" /></td>\r\n                <td><button type=\"button\" class=\"btn\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\r\n            </tr>\r\n            <!-- /ko -->\r\n            <tr>\r\n                <td colspan=\"4\"><input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\"/></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n</script>";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-triggers\">\r\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\r\n</script>\r\n<script type=\"text/html\" id=\"propertyeditorcontent-triggers\">\r\n<div class=\"panel\">\r\n    <div class=\"row\" style=\"margin-bottom:10px\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"input-group form-inline\">\r\n                <div class=\"input-group-btn\">\r\n                    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span class=\"glyphicon glyphicon-plus\"></span>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <!-- ko foreach: availableTriggers -->\r\n                        <li><a data-bind=\"click: $parent.onAddClick($data)\"><span data-bind=\"text:$data\"></span></a></li>\r\n                        <!-- /ko  -->\r\n                    </ul>\r\n                </div>\r\n                <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'koText', value: koSelected\"></select>\r\n                <span class=\"input-group-btn\">\r\n                    <button type=\"button\" data-bind=\"enable: koSelected() != null, click: onDeleteClick\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div data-bind=\"visible: koSelected() == null\">\r\n        <div data-bind=\"visible: koQuestions().length == 0, text: $root.getLocString('pe.noquestions')\"></div>\r\n        <div data-bind=\"visible: koQuestions().length > 0, text: $root.getLocString('pe.createtrigger')\"></div>\r\n    </div>\r\n    <div data-bind=\"visible: koSelected() != null\">\r\n        <div data-bind=\"with: koSelected\">\r\n            <div class=\"row\"  style=\"margin-bottom:10px\">\r\n                <div class=\"col-lg-4 col-sm-4\">\r\n                    <div class=\"input-group  form-inline\">\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group\" data-bind=\"text: $root.getLocString('pe.triggerOn')\"></span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <select class=\"form-control\" data-bind=\"options:$parent.koQuestions, value: koName\"></select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4 col-sm-4\">\r\n                    <div class=\"input-group\">\r\n                        <select class=\"form-control\" data-bind=\"options:availableOperators, optionsValue: 'name', optionsText: 'text', value:koOperator\"></select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4 col-sm-4\">\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" type=\"text\" data-bind=\"visible: koRequireValue, value:koValue\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- ko if: koType() == 'visibletrigger' -->\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-sm-6\">\r\n                    <!-- ko template: { name: 'propertyeditor-triggersitems', data: pages } -->\r\n                    <!-- /ko -->\r\n                </div>\r\n                <div class=\"col-lg-6 col-sm-6\">\r\n                    <!-- ko template: { name: 'propertyeditor-triggersitems', data: questions } -->\r\n                    <!-- /ko -->\r\n                </div>\r\n            </div>\r\n            <!-- /ko -->\r\n            <!-- ko if: koType() == 'completetrigger' -->\r\n            <div class=\"row\">\r\n               <div style=\"margin: 10px\" data-bind=\"text: $root.getLocString('pe.triggerCompleteText')\"></div>\r\n            </div>\r\n            <!-- /ko -->\r\n            <!-- ko if: koType() == 'setvaluetrigger' -->\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4 col-sm-4\">\r\n                    <div class=\"input-group form-inline\">\r\n                        <div>\r\n                            <span data-bind=\"text: $root.getLocString('pe.triggerSetToName')\"></span>\r\n                        </div>\r\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value:kosetToName\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4 col-sm-4\">\r\n                    <div class=\"input-group form-inline\">\r\n                        <div>\r\n                            <span data-bind=\"text: $root.getLocString('pe.triggerSetValue')\"></span>\r\n                        </div>\r\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value:kosetValue\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4 col-sm-4\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"checkbox\" data-bind=\"checked: koisVariable\" /> <span data-bind=\"text: $root.getLocString('pe.triggerIsVariable')\"></span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-8 col-sm-8\">\r\n                </div>\r\n            </div>\r\n            <!-- /ko -->\r\n        </div>\r\n    </div>\r\n</div>\r\n</script>";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-triggersitems\">\r\n    <div class=\"panel no-margins no-padding\">\r\n        <div data-bind=\"text: title\" style=\"margin-bottom:10px\"></div>\r\n        <div class=\"input-group\">\r\n            <select class=\"form-control\" multiple=\"multiple\" data-bind=\"options:koChoosen, value: koChoosenSelected\"></select>\r\n            <span class=\"input-group-btn\" style=\"vertical-align:top\">\r\n                <button type=\"button\" data-bind=\"enable: koChoosenSelected() != null, click: onDeleteClick\" class=\"btn\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n            </span>\r\n        </div>\r\n        <div class=\"input-group\" style=\"margin-top:5px\">\r\n            <select class=\"form-control\" data-bind=\"options:koObjects, value: koSelected\"></select>\r\n            <span class=\"input-group-btn\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-bind=\"enable: koSelected() != null, click: onAddClick\" class=\"btn btn-success\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</script>";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-validators\">\r\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\r\n</script>\r\n<script type=\"text/html\" id=\"propertyeditorcontent-validators\">\r\n<div class=\"panel\">\r\n    <div class=\"panel-heading\">\r\n        <div class=\"row input-group\">\r\n            <button type=\"button\" class=\"dropdown-toggle input-group-addon\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <span class=\"glyphicon glyphicon-plus\"></span>\r\n            </button>\r\n            <ul class=\"dropdown-menu input-group\">\r\n                <!-- ko foreach: availableValidators -->\r\n                <li><a href=\"#\" data-bind=\"click: $parent.onAddClick($data)\"><span data-bind=\"text:$data\"></span></a></li>\r\n                <!-- /ko  -->\r\n            </ul>\r\n            <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'text', value: koSelected\"></select>\r\n            <span class=\"input-group-btn\">\r\n                <button type=\"button\" data-bind=\"enable: koSelected() != null, click: onDeleteClick\" class=\"btn\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div data-bind=\"template: { name: 'objecteditor', data: selectedObjectEditor }\"></div>\r\n</div>\r\n</script>";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditor-content\">\r\n    <ul class=\"nav nav-tabs\" data-bind=\"foreach: koTabs\">\r\n        <li role=\"presentation\" data-bind=\"css: {active: $parent.koActiveTab() == $data.name}, click: $parent.onTabClick\"><a><span data-bind=\"text:$data.title\"></span></a></li>\r\n    </ul>               \r\n    <!-- ko foreach: koTabs -->\r\n    <div data-bind=\"visible:$parent.koActiveTab() == $data.name\" style=\"margin-top:5px\">\r\n        <!-- ko template: { name: $data.htmlTemplate, data: $data.templateObject } -->\r\n        <!-- /ko -->\r\n    </div>\r\n    <!-- /ko  -->\r\n</script>";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditor\">\r\n    <div id=\"surveyquestioneditorwindow\" class=\"modal fade\" role=\"dialog\"data-bind=\"with:koEditor\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\" data-bind=\"text:koTitle\"></h4>\r\n                </div>  \r\n                <div class=\"modal-body svd_notopbottompaddings\">\r\n                    <!-- ko template: { name: \"questioneditor-content\", data: $data } -->\r\n                    <!-- /ko -->\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <input type=\"button\" class=\"btn btn-primary\" data-bind=\"click: onApplyClick, value: $root.getLocString('pe.apply')\" style=\"width:100px\" />\r\n                    <input type=\"button\" class=\"btn btn-default\" data-bind=\"click: onOkClick, value: $root.getLocString('pe.ok')\" style=\"width:100px\" />\r\n                    <input type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" data-bind=\"click: onResetClick, value: $root.getLocString('pe.cancel')\" style=\"width:100px\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</script>\r\n";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditortab-general\">\r\n    <div>\r\n        <!-- ko foreach: properties.rows -->\r\n        <div class=\"form-group\">\r\n            <!-- ko foreach: properties -->\r\n                    <div class=\"alert alert-danger\" role=\"alert\" data-bind=\"visible:koHasError\">\r\n                        <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\r\n                        <span class=\"sr-only\">Error:</span>\r\n                        <span  data-bind=\"text:koErrorText\"></span>\r\n                    </div>            \r\n                    <!-- ko if: editType != 'check' -->\r\n                        <label data-bind=\"text:title\"></label>\r\n                    <!-- /ko -->\r\n                    <!-- ko if: editType == 'text' -->\r\n                        <input type=\"text\" class=\"form-control\" data-bind=\"value: koValue, disable: disabled\" />\r\n                    <!-- /ko -->\r\n                    <!-- ko if: editType == 'textarea' -->\r\n                        <textarea type=\"text\" rows=\"2\" class=\"form-control\" data-bind=\"value: koValue, disable: disabled\"></textarea>\r\n                    <!-- /ko -->\r\n                    <!-- ko if: editType == 'check' -->\r\n                        <span class=\"checkbox-inline\"><input type=\"checkbox\" data-bind=\"checked: koValue, disable: disabled\"><label data-bind=\"text:title\"></label></span>\r\n                    <!-- /ko -->\r\n                    <!-- ko if: editType == 'dropdown' -->\r\n                        <select class=\"form-control\"  data-bind=\"value: koValue, options: choices, disable: disabled\"></select>\r\n                    <!-- /ko -->\r\n            <!-- /ko  -->\r\n        </div>\r\n        <!-- /ko  -->\r\n    </div>\r\n</script>\r\n";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"surveyembeding\">\r\n    <div class=\"row\">\r\n        <select data-bind=\"value:koLibraryVersion\">\r\n            <option value=\"angular\" data-bind=\"text: $root.getLocString('ew.angular')\"></option>\r\n            <option value=\"jquery\" data-bind=\"text: $root.getLocString('ew.jquery')\"></option>\r\n            <option value=\"knockout\" data-bind=\"text: $root.getLocString('ew.knockout')\"></option>\r\n            <option value=\"react\" data-bind=\"text: $root.getLocString('ew.react')\"></option>\r\n            <option value=\"vue\" data-bind=\"text: $root.getLocString('ew.vue')\"></option>\r\n        </select>\r\n        <select data-bind=\"value:koScriptUsing\">\r\n            <option value=\"bootstrap\" data-bind=\"text: $root.getLocString('ew.bootstrap')\"></option>\r\n            <option value=\"standard\" data-bind=\"text: $root.getLocString('ew.standard')\"></option>\r\n        </select>\r\n        <select data-bind=\"value:koShowAsWindow\">\r\n            <option value=\"page\" data-bind=\"text: $root.getLocString('ew.showOnPage')\"></option>\r\n            <option value=\"window\" data-bind=\"text: $root.getLocString('ew.showInWindow')\"></option>\r\n        </select>\r\n        <label class=\"checkbox-inline\" data-bind=\"visible:koHasIds\">\r\n            <input type=\"checkbox\" data-bind=\"checked:koLoadSurvey\" />\r\n            <span data-bind=\"text: $root.getLocString('ew.loadFromServer')\"></span>\r\n        </label>\r\n    </div>\r\n    <div class=\"panel\">\r\n        <div class=\"panel-heading\" data-bind=\"text: $root.getLocString('ew.titleScript')\"></div>\r\n        <div data-bind=\"visible:hasAceEditor\">\r\n            <div id=\"surveyEmbedingHead\" style=\"height:70px;width:100%\"></div>\r\n        </div>\r\n        <textarea data-bind=\"visible:!hasAceEditor, text: koHeadText\" style=\"height:70px;width:100%\"></textarea>\r\n    </div>\r\n    <div class=\"panel\" data-bind=\"visible: koVisibleHtml\">\r\n        <div class=\"panel-heading\"  data-bind=\"text: $root.getLocString('ew.titleHtml')\"></div>\r\n        <div data-bind=\"visible:hasAceEditor\">\r\n            <div id=\"surveyEmbedingBody\" style=\"height:30px;width:100%\"></div>\r\n        </div>\r\n        <textarea data-bind=\"visible:!hasAceEditor, text: koBodyText\" style=\"height:30px;width:100%\"></textarea>\r\n    </div>\r\n    <div class=\"panel\">\r\n        <div class=\"panel-heading\"  data-bind=\"text: $root.getLocString('ew.titleJavaScript')\"></div>\r\n        <div data-bind=\"visible:hasAceEditor\">\r\n            <div id=\"surveyEmbedingJava\" style=\"height:300px;width:100%\"></div>\r\n        </div>\r\n        <textarea data-bind=\"visible:!hasAceEditor, text: koJavaText\" style=\"height:300px;width:100%\"></textarea>\r\n    </div>\r\n</script>";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<div data-bind=\"event:{\n           dragenter:function(el, e){ dragEnter(e);},\n           dragleave:function(el, e){ dragLeave(e);},\n           dragover:function(el, e){ return false;},\n           drop:function(el, e){ dragDrop(e);}}\n     \">\n    <h4 data-bind=\"visible: (title.length > 0) && data.showPageTitles, text: koNo() + processedTitle, css: $root.css.pageTitle\"></h4>\n    <!-- ko foreach: { data: rows, as: 'row'} -->\n    <div class=\"svd_question_container\" data-bind=\"visible: row.koVisible, css: $root.css.row\">\n        <!-- ko foreach: { data: row.questions, as: 'question' , afterRender: row.koAfterRender } -->\n            <div data-bind=\"visible: question.koIsDragging\">\n                <!-- ko template: { if: $root.koDraggingSource(), name: 'survey-question', data: $root.koDraggingSource(), as: 'question', templateOptions: { isDragging: true } } -->\n                <!-- /ko -->\n            </div>\n            <!-- ko template: { name: 'survey-question', data: question, templateOptions: { isDragging: false } } -->\n            <!-- /ko -->\n        <!-- /ko -->\n    </div>\n    <!-- /ko -->\n    <div class=\"well\" data-bind=\"visible:$root.isDesignMode && questions.length == 0\">\n        <span data-bind=\"visible: !koDraggingBottom(), text:$root.getEditorLocString('survey.dropQuestion')\"></span>\n        <div data-bind=\"visible: koDraggingBottom\">\n            <!-- ko template: { if: $root.koDraggingSource(), name: 'survey-question', data: $root.koDraggingSource(), as: 'question', templateOptions: { isDragging: true } } -->\n            <!-- /ko -->\n        </div>\n    </div>\n    <div data-bind=\"visible: questions.length > 0 && koDraggingBottom()\">\n        <!-- ko template: { if: $root.koDraggingSource(), name: 'survey-question', data: $root.koDraggingSource(), as: 'question', templateOptions: { isDragging: true } } -->\n        <!-- /ko -->\n    </div>\n</div>";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svd_question\" style=\"vertical-align:top\" data-bind=\"style: {display: question.koVisible()|| $root.isDesignMode ? 'inline-block': 'none', marginLeft: question.koMarginLeft, paddingRight: question.koPaddingRight, width: question.koRenderWidth },\n     attr : {id: id, draggable: $root.isDesignMode}, click: $root.isDesignMode ? koOnClick: null, \n         event:{\n           keydown: function(el, e) { if(e.witch == 46) $root.deleteCurrentObjectClick(); return true; },\n           dragstart:function(el, e){ dragStart(e); return true; },\n           dragover:function(el, e){ if(!question.isDragging) dragOver(e);},\n           dragend:function(el, e){ dragEnd(e);},\n           drop:function(el, e){ dragDrop(e);}\n         }, css:{svd_q_design_border: $root.isDesignMode, svd_q_selected : koIsSelected, 'well well-sm': $root.isDesignMode}\">\n    <div data-bind=\"css:{svd_q_design: $root.isDesignMode}, style:{opacity: question.koIsDraggingSource() ? 0.4 : 1}\">\n        <div class=\"alert alert-danger\" role=\"alert\" data-bind=\"visible: koErrors().length > 0, foreach: koErrors\">\n            <div>\n                <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                <span data-bind=\"text:$data.getText()\"></span>\n            </div>\n        </div>\n        <!-- ko if: question.hasTitle -->\n        <h5 data-bind=\"visible: $root.questionTitleLocation == 'top', text: question.koTitle(), css: $root.css.question.title\"></h5>\n        <!-- /ko -->\n        <!-- ko template: { name: 'survey-question-errors', data: question } -->\n        <!-- /ko -->\n        <!-- ko template: { name: question.koTemplateName(), data: question, afterRender: question.koQuestionAfterRender } -->\n        <!-- /ko -->\n        <div data-bind=\"visible: question.hasComment\">\n            <div data-bind=\"text:question.commentText\"></div>\n            <div data-bind=\"template: { name: 'survey-comment', data: {'question': question, 'visible': true } }\"></div>\n        </div>\n        <!-- ko if: question.hasTitle -->\n        <h5 data-bind=\"visible: $root.questionTitleLocation == 'bottom', text: question.koTitle(), css: $root.css.question.title\"></h5>\n        <!-- /ko -->\n    </div>\n\n    <div class=\"svd_question_menu\" data-bind=\"visible: koIsSelected\">\n        <div class=\"btn-group\" role=\"group\">\n            <button type=\"button\" class=\"btn btn-primary  btn-xs\" data-bind=\"click: $root.editQuestionClick\"><span>Edit</span></button>\n            <button type=\"button\" class=\"btn btn-primary  btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <span class=\"glyphicon glyphicon-option-horizontal\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n                <li>\n                    <button class=\"btn btn-primary btn-xs\" data-bind=\"click: $root.copyQuestionClick, text:$root.getEditorLocString('survey.addToToolbox')\"></button>\n                </li>\n                <li>\n                    <button class=\"btn btn-primary btn-xs\" data-bind=\"click: $root.fastCopyQuestionClick, text:$root.getEditorLocString('survey.copy')\"></button>\n                </li>\n                <li>\n                    <button class=\"btn btn-primary btn-xs\" data-bind=\"click: $root.deleteCurrentObjectClick, text:$root.getEditorLocString('survey.deleteQuestion')\"></button>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "" + __webpack_require__(29) + "\n" + __webpack_require__(30) + "\n" + __webpack_require__(31) + "\n" + __webpack_require__(32) + "\n" + __webpack_require__(33) + "\n" + __webpack_require__(52) + "\n" + __webpack_require__(50) + "\n" + __webpack_require__(49) + "\n" + __webpack_require__(51) + "\n" + __webpack_require__(34) + "\n" + __webpack_require__(35) + "\n" + __webpack_require__(37) + "\n" + __webpack_require__(36) + "\n" + __webpack_require__(38) + "\n" + __webpack_require__(39) + "\n" + __webpack_require__(40) + "\n" + __webpack_require__(41) + "\n" + __webpack_require__(42) + "\n" + __webpack_require__(43) + "\n" + __webpack_require__(44) + "\n" + __webpack_require__(45) + "\n" + __webpack_require__(46) + "\n" + __webpack_require__(47) + "\n" + __webpack_require__(48) + "";

/***/ }),
/* 56 */
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
        this.aceEditor.setTheme("ace/theme/monokai");
        this.aceEditor.session.setMode("ace/mode/json");
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
/* 57 */
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dragdrophelper__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropHelper", function() { return __WEBPACK_IMPORTED_MODULE_1__dragdrophelper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyEditors_propertyEditorBase__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyEditorBase", function() { return __WEBPACK_IMPORTED_MODULE_2__propertyEditors_propertyEditorBase__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyStringPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_2__propertyEditors_propertyEditorBase__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDropdownPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_2__propertyEditors_propertyEditorBase__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyBooleanPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_2__propertyEditors_propertyEditorBase__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNumberPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_2__propertyEditors_propertyEditorBase__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditors_propertyTextItemsEditor__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyTextItemsEditor", function() { return __WEBPACK_IMPORTED_MODULE_3__propertyEditors_propertyTextItemsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyItemsEditor__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyItemsEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyItemsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyEditors_propertyItemValuesEditor__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyItemValuesEditor", function() { return __WEBPACK_IMPORTED_MODULE_5__propertyEditors_propertyItemValuesEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__propertyEditors_propertyMatrixDropdownColumnsEditor__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyDropdownColumnsEditor", function() { return __WEBPACK_IMPORTED_MODULE_6__propertyEditors_propertyMatrixDropdownColumnsEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyMatrixDropdownColumnsItem", function() { return __WEBPACK_IMPORTED_MODULE_6__propertyEditors_propertyMatrixDropdownColumnsEditor__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__propertyEditors_propertyModalEditor__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyModalEditor", function() { return __WEBPACK_IMPORTED_MODULE_7__propertyEditors_propertyModalEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyRestfullEditor__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyResultfullEditor", function() { return __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyRestfullEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyTriggersEditor__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyTriggersEditor", function() { return __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyTriggersEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__propertyEditors_propertyValidatorsEditor__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyValidatorsEditor", function() { return __WEBPACK_IMPORTED_MODULE_10__propertyEditors_propertyValidatorsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__editorLocalization__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "editorLocalization", function() { return __WEBPACK_IMPORTED_MODULE_11__editorLocalization__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__questionEditors_questionEditorGeneralProperties__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorGeneralProperties", function() { return __WEBPACK_IMPORTED_MODULE_12__questionEditors_questionEditorGeneralProperties__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorGeneralRow", function() { return __WEBPACK_IMPORTED_MODULE_12__questionEditors_questionEditorGeneralProperties__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorGeneralProperty", function() { return __WEBPACK_IMPORTED_MODULE_12__questionEditors_questionEditorGeneralProperties__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__questionEditors_questionEditorDefinition__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorDefinition", function() { return __WEBPACK_IMPORTED_MODULE_13__questionEditors_questionEditorDefinition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__questionEditors_questionEditor__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyEditorShowWindow", function() { return __WEBPACK_IMPORTED_MODULE_14__questionEditors_questionEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditor", function() { return __WEBPACK_IMPORTED_MODULE_14__questionEditors_questionEditor__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorTabGeneral", function() { return __WEBPACK_IMPORTED_MODULE_14__questionEditors_questionEditor__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorTabProperty", function() { return __WEBPACK_IMPORTED_MODULE_14__questionEditors_questionEditor__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__questionToolbox__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionToolbox", function() { return __WEBPACK_IMPORTED_MODULE_15__questionToolbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__objectProperty__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyObjectProperty", function() { return __WEBPACK_IMPORTED_MODULE_16__objectProperty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__objectEditor__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyObjectEditor", function() { return __WEBPACK_IMPORTED_MODULE_17__objectEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pagesEditor__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPagesEditor", function() { return __WEBPACK_IMPORTED_MODULE_18__pagesEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__textWorker__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyTextWorker", function() { return __WEBPACK_IMPORTED_MODULE_19__textWorker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__surveyHelper__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ObjType", function() { return __WEBPACK_IMPORTED_MODULE_20__surveyHelper__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyHelper", function() { return __WEBPACK_IMPORTED_MODULE_20__surveyHelper__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__surveyEmbedingWindow__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyEmbedingWindow", function() { return __WEBPACK_IMPORTED_MODULE_21__surveyEmbedingWindow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__objectVerbs__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbs", function() { return __WEBPACK_IMPORTED_MODULE_22__objectVerbs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbItem", function() { return __WEBPACK_IMPORTED_MODULE_22__objectVerbs__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbChangeTypeItem", function() { return __WEBPACK_IMPORTED_MODULE_22__objectVerbs__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbChangePageItem", function() { return __WEBPACK_IMPORTED_MODULE_22__objectVerbs__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__undoredo__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyUndoRedo", function() { return __WEBPACK_IMPORTED_MODULE_23__undoredo__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UndoRedoItem", function() { return __WEBPACK_IMPORTED_MODULE_23__undoredo__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__editor__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyEditor", function() { return __WEBPACK_IMPORTED_MODULE_24__editor__["a"]; });
// styles



























/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2YWY5OWY5MDM5NjRmODkwZjlmMyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwia29cIixcImNvbW1vbmpzMlwiOlwia25vY2tvdXRcIixcImNvbW1vbmpzXCI6XCJrbm9ja291dFwiLFwiYW1kXCI6XCJrbm9ja291dFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1rbm9ja291dFwiLFwiY29tbW9uanNcIjpcInN1cnZleS1rbm9ja291dFwiLFwiYW1kXCI6XCJzdXJ2ZXkta25vY2tvdXRcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvckxvY2FsaXphdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlJdGVtc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VydmV5SGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1vZGFsRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHRXb3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzb241LnRzIiwid2VicGFjazovLy8uL3NyYy9kcmFnZHJvcGhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0UHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdFZlcmJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VmFsaWRhdG9yc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uVG9vbGJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VydmV5RW1iZWRpbmdXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuZG9yZWRvLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbVZhbHVlc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlSZXN0ZnVsbEVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VGV4dEl0ZW1zRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUcmlnZ2Vyc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9qc29uZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9vYmplY3RlZGl0b3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL29iamVjdHZlcmJzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wYWdlZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItYm9vbGVhbi5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWRyb3Bkb3duLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItZXhwcmVzc2lvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWh0bWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1pdGVtdmFsdWVzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbWF0cml4ZHJvcGRvd25jb2x1bW5zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbW9kYWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1udW1iZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1yZXN0ZnVsbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXN0cmluZy5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRleHQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10ZXh0aXRlbXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10cmlnZ2Vycy5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRyaWdnZXJzaXRlbXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci12YWxpZGF0b3JzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3ItY29udGVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3J0YWItZ2VuZXJhbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvc3VydmV5ZW1iZWRpbmcuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzLnN1cnZleS90ZW1wbGF0ZV9wYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy5zdXJ2ZXkvdGVtcGxhdGVfcXVlc3Rpb24uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2VudHJ5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleUpTT05FZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleU9iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJpZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNW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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z6QztBQUFBLFNBQVM7QUFDYTtBQUUyQjtBQUlGO0FBQzBDO0FBQ1I7QUFDVTtBQUV6QjtBQUNlO0FBQ1E7QUFDRjtBQUNJO0FBRWxDO0FBRXFIO0FBQ25GO0FBQzZFO0FBRXJIO0FBQ0k7QUFDSjtBQUNGO0FBQ0Y7QUFDTztBQUNPO0FBQ2tEO0FBQ3REO0FBQ2xCIiwiZmlsZSI6Ii4vcGFja2FnZS9zdXJ2ZXllZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dFwiKSwgcmVxdWlyZShcInN1cnZleS1rbm9ja291dFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN1cnZleUVkaXRvclwiLCBbXCJrbm9ja291dFwiLCBcInN1cnZleS1rbm9ja291dFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlFZGl0b3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dFwiKSwgcmVxdWlyZShcInN1cnZleS1rbm9ja291dFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3VydmV5RWRpdG9yXCJdID0gZmFjdG9yeShyb290W1wia29cIl0sIHJvb3RbXCJTdXJ2ZXlcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDU4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2YWY5OWY5MDM5NjRmODkwZjlmMyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwia29cIixcImNvbW1vbmpzMlwiOlwia25vY2tvdXRcIixcImNvbW1vbmpzXCI6XCJrbm9ja291dFwiLFwiYW1kXCI6XCJrbm9ja291dFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlN1cnZleVwiLFwiY29tbW9uanMyXCI6XCJzdXJ2ZXkta25vY2tvdXRcIixcImNvbW1vbmpzXCI6XCJzdXJ2ZXkta25vY2tvdXRcIixcImFtZFwiOlwic3VydmV5LWtub2Nrb3V0XCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgZWRpdG9yTG9jYWxpemF0aW9uID0ge1xyXG4gICAgY3VycmVudExvY2FsZTogXCJcIixcclxuICAgIGxvY2FsZXM6IHt9LFxyXG4gICAgZ2V0U3RyaW5nOiBmdW5jdGlvbiAoc3RyTmFtZTogc3RyaW5nLCBsb2NhbGU6IHN0cmluZyA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIWxvY2FsZSkgbG9jYWxlID0gdGhpcy5jdXJyZW50TG9jYWxlO1xyXG4gICAgICAgIHZhciBsb2MgPSBsb2NhbGUgPyB0aGlzLmxvY2FsZXNbdGhpcy5jdXJyZW50TG9jYWxlXSA6IGRlZmF1bHRTdHJpbmdzO1xyXG4gICAgICAgIGlmICghbG9jKSBsb2MgPSBkZWZhdWx0U3RyaW5ncztcclxuICAgICAgICB2YXIgcGF0aCA9IHN0ck5hbWUuc3BsaXQoJy4nKTtcclxuICAgICAgICB2YXIgb2JqID0gbG9jO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBvYmogPSBvYmpbcGF0aFtpXV07XHJcbiAgICAgICAgICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9jID09PSBkZWZhdWx0U3RyaW5ncykgcmV0dXJuIHBhdGhbaV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmcoc3RyTmFtZSwgXCJlblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSxcclxuICAgIGdldFByb3BlcnR5TmFtZTogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZywgbG9jYWw6IHN0cmluZyA9IG51bGwpIHtcclxuICAgICAgICB2YXIgb2JqID0gdGhpcy5nZXRQcm9wZXJ0eShzdHJOYW1lLCBsb2NhbCk7XHJcbiAgICAgICAgaWYgKG9ialtcIm5hbWVcIl0pIHJldHVybiBvYmpbXCJuYW1lXCJdO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvcGVydHlUaXRsZTogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZywgbG9jYWw6IHN0cmluZyA9IG51bGwpIHtcclxuICAgICAgICB2YXIgb2JqID0gdGhpcy5nZXRQcm9wZXJ0eShzdHJOYW1lLCBsb2NhbCk7XHJcbiAgICAgICAgaWYgKG9ialtcInRpdGxlXCJdKSByZXR1cm4gb2JqW1widGl0bGVcIl07XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvcGVydHk6IGZ1bmN0aW9uIChzdHJOYW1lOiBzdHJpbmcsIGxvY2FsOiBzdHJpbmcgPSBudWxsKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0U3RyaW5nKFwicC5cIiArIHN0ck5hbWUsIGxvY2FsKTtcclxuICAgICAgICBpZiAob2JqICE9PSBzdHJOYW1lKSByZXR1cm4gb2JqO1xyXG4gICAgICAgIHZhciBwb3MgPSBzdHJOYW1lLmluZGV4T2YoJ18nKTtcclxuICAgICAgICBpZiAocG9zIDwgLTEpIHJldHVybiBvYmo7XHJcbiAgICAgICAgc3RyTmFtZSA9IHN0ck5hbWUuc3Vic3RyKHBvcyArIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0cmluZyhcInAuXCIgKyBzdHJOYW1lLCBsb2NhbCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0TG9jYWxlczogZnVuY3Rpb24gKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHZhciByZXMgPSBbXTtcclxuICAgICAgICByZXMucHVzaChcIlwiKTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XHJcbiAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIGRlZmF1bHRTdHJpbmdzID0ge1xyXG4gICAgLy9zdXJ2ZXkgdGVtcGxhdGVzXHJcbiAgICBzdXJ2ZXk6IHtcclxuICAgICAgICBkcm9wUXVlc3Rpb246IFwiUGxlYXNlIGRyb3AgYSBxdWVzdGlvbiBoZXJlLlwiLFxyXG4gICAgICAgIGNvcHk6IFwiQ29weVwiLFxyXG4gICAgICAgIGFkZFRvVG9vbGJveDogXCJBZGQgdG8gdG9vbGJveFwiLFxyXG4gICAgICAgIGRlbGV0ZVF1ZXN0aW9uOiBcIkRlbGV0ZSBRdWVzdGlvblwiXHJcbiAgICB9LFxyXG4gICAgLy9xdWVzdGlvblR5cGVzXHJcbiAgICBxdDoge1xyXG4gICAgICAgIGNoZWNrYm94OiBcIkNoZWNrYm94XCIsXHJcbiAgICAgICAgY29tbWVudDogXCJDb21tZW50XCIsXHJcbiAgICAgICAgZHJvcGRvd246IFwiRHJvcGRvd25cIixcclxuICAgICAgICBmaWxlOiBcIkZpbGVcIixcclxuICAgICAgICBodG1sOiBcIkh0bWxcIixcclxuICAgICAgICBtYXRyaXg6IFwiTWF0cml4IChzaW5nbGUgY2hvaWNlKVwiLFxyXG4gICAgICAgIG1hdHJpeGRyb3Bkb3duOiBcIk1hdHJpeCAobXVsdGlwbGUgY2hvaWNlKVwiLFxyXG4gICAgICAgIG1hdHJpeGR5bmFtaWM6IFwiTWF0cml4IChkeW5hbWljIHJvd3MpXCIsXHJcbiAgICAgICAgbXVsdGlwbGV0ZXh0OiBcIk11bHRpcGxlIFRleHRcIixcclxuICAgICAgICByYWRpb2dyb3VwOiBcIlJhZGlvZ3JvdXBcIixcclxuICAgICAgICByYXRpbmc6IFwiUmF0aW5nXCIsXHJcbiAgICAgICAgdGV4dDogXCJTaW5nbGUgSW5wdXRcIlxyXG4gICAgfSxcclxuICAgIC8vU3RyaW5ncyBpbiBFZGl0b3JcclxuICAgIGVkOiB7XHJcbiAgICAgICAgbmV3UGFnZU5hbWU6IFwicGFnZVwiLFxyXG4gICAgICAgIG5ld1F1ZXN0aW9uTmFtZTogXCJxdWVzdGlvblwiLFxyXG4gICAgICAgIHRlc3RTdXJ2ZXk6IFwiVGVzdCBTdXJ2ZXlcIixcclxuICAgICAgICB0ZXN0U3VydmV5QWdhaW46IFwiVGVzdCBTdXJ2ZXkgQWdhaW5cIixcclxuICAgICAgICB0ZXN0U3VydmV5V2lkdGg6IFwiU3VydmV5IHdpZHRoOiBcIixcclxuICAgICAgICBlbWJlZFN1cnZleTogXCJFbWJlZCBTdXJ2ZXlcIixcclxuICAgICAgICBzYXZlU3VydmV5OiBcIlNhdmUgU3VydmV5XCIsXHJcbiAgICAgICAgZGVzaWduZXI6IFwiU3VydmV5IERlc2lnbmVyXCIsXHJcbiAgICAgICAganNvbkVkaXRvcjogXCJKU09OIEVkaXRvclwiLFxyXG4gICAgICAgIHVuZG86IFwiVW5kb1wiLFxyXG4gICAgICAgIHJlZG86IFwiUmVkb1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFwiT3B0aW9uc1wiLFxyXG4gICAgICAgIGdlbmVyYXRlVmFsaWRKU09OOiBcIkdlbmVyYXRlIFZhbGlkIEpTT05cIixcclxuICAgICAgICBnZW5lcmF0ZVJlYWRhYmxlSlNPTjogXCJHZW5lcmF0ZSBSZWFkYWJsZSBKU09OXCIsXHJcbiAgICAgICAgdG9vbGJveDogXCJUb29sYm94XCIsXHJcbiAgICAgICAgZGVsU2VsT2JqZWN0OiBcIkRlbGV0ZSBzZWxlY3RlZCBvYmplY3RcIixcclxuICAgICAgICBjb3JyZWN0SlNPTjogXCJQbGVhc2UgY29ycmVjdCBKU09OLlwiLFxyXG4gICAgICAgIHN1cnZleVJlc3VsdHM6IFwiU3VydmV5IFJlc3VsdDogXCJcclxuICAgIH0sXHJcbiAgICAvL1Byb3BlcnR5IEVkaXRvcnNcclxuICAgIHBlOiB7XHJcbiAgICAgICAgYXBwbHk6IFwiQXBwbHlcIixcclxuICAgICAgICBvazogXCJPS1wiLFxyXG4gICAgICAgIGNhbmNlbDogXCJDYW5jZWxcIixcclxuICAgICAgICByZXNldDogXCJSZXNldFwiLFxyXG4gICAgICAgIGNsb3NlOiBcIkNsb3NlXCIsXHJcbiAgICAgICAgZGVsZXRlOiBcIkRlbGV0ZVwiLFxyXG4gICAgICAgIGFkZE5ldzogXCJBZGQgTmV3XCIsXHJcbiAgICAgICAgcmVtb3ZlQWxsOiBcIlJlbW92ZSBBbGxcIixcclxuICAgICAgICBlZGl0OiBcIkVkaXRcIixcclxuICAgICAgICBlbXB0eTogXCI8ZW1wdHk+XCIsXHJcbiAgICAgICAgZmFzdEVudHJ5OiBcIkZhc3QgRW50cnlcIixcclxuICAgICAgICBmb3JtRW50cnk6IFwiRm9ybSBFbnRyeVwiLFxyXG4gICAgICAgIHRlc3RTZXJ2aWNlOiBcIlRlc3QgdGhlIHNlcnZpY2VcIixcclxuICAgICAgICBleHByZXNzaW9uSGVscDogXCJQbGVhc2UgZW50ZXIgYSBib29sZWFuIGV4cHJlc3Npb24uIEl0IHNob3VsZCByZXR1cm4gdHJ1ZSB0byBrZWVwIHRoZSBxdWVzdGlvbi9wYWdlIHZpc2libGUuIEZvciBleGFtcGxlOiB7cXVlc3Rpb24xfSA9ICd2YWx1ZTEnIG9yICh7cXVlc3Rpb24yfSA9IDMgYW5kIHtxdWVzdGlvbjN9IDwgNSlcIixcclxuXHJcbiAgICAgICAgcHJvcGVydHlJc0VtcHR5OiBcIlBsZWFzZSBlbnRlciB2YWx1ZSBpbnRvIHRoZSBwcm9wZXJ0eVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlZhbHVlXCIsXHJcbiAgICAgICAgdGV4dDogXCJUZXh0XCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFwiUmVxdWlyZWQ/XCIsXHJcbiAgICAgICAgY29sdW1uRWRpdDogXCJFZGl0IGNvbHVtbjogezB9XCIsXHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFzT3RoZXI6IFwiSGFzIG90aGVyIGl0ZW1cIixcclxuICAgICAgICBuYW1lOiBcIk5hbWVcIixcclxuICAgICAgICB0aXRsZTogXCJUaXRsZVwiLFxyXG4gICAgICAgIGNlbGxUeXBlOiBcIkNlbGwgdHlwZVwiLFxyXG4gICAgICAgIGNvbENvdW50OiBcIkNvbHVtbiBjb3VudFwiLFxyXG4gICAgICAgIGNob2ljZXNPcmRlcjogXCJTZWxlY3QgY2hvaWNlcyBvcmRlclwiLFxyXG4gICAgICAgIHZpc2libGU6IFwiSXMgdmlzaWJsZT9cIixcclxuICAgICAgICBpc1JlcXVpcmVkOiBcIklzIHJlcXVpcmVkP1wiLFxyXG4gICAgICAgIHN0YXJ0V2l0aE5ld0xpbmU6IFwiSXMgc3RhcnQgd2l0aCBuZXcgbGluZT9cIixcclxuICAgICAgICByb3dzOiBcIlJvdyBjb3VudFwiLFxyXG4gICAgICAgIHBsYWNlSG9sZGVyOiBcIklucHV0IHBsYWNlIGhvbGRlclwiLFxyXG4gICAgICAgIHNob3dQcmV2aWV3OiBcIklzIGltYWdlIHByZXZpZXcgc2hvd24/XCIsXHJcbiAgICAgICAgc3RvcmVEYXRhQXNUZXh0OiBcIlN0b3JlIGZpbGUgY29udGVudCBpbiBKU09OIHJlc3VsdCBhcyB0ZXh0XCIsXHJcbiAgICAgICAgbWF4U2l6ZTogXCJNYXhpbXVtIGZpbGUgc2l6ZSBpbiBieXRlc1wiLFxyXG4gICAgICAgIGltYWdlSGVpZ2h0OiBcIkltYWdlIGhlaWdodFwiLFxyXG4gICAgICAgIGltYWdlV2lkdGg6IFwiSW1hZ2Ugd2lkdGhcIixcclxuICAgICAgICByb3dDb3VudDogXCJSb3cgY291bnRcIiwgXHJcbiAgICAgICAgYWRkUm93VGV4dDogXCJBZGQgcm93IGJ1dHRvbiB0ZXh0XCIsIFxyXG4gICAgICAgIHJlbW92ZVJvd1RleHQ6IFwiUmVtb3ZlIHJvdyBidXR0b24gdGV4dFwiLFxyXG4gICAgICAgIG1pblJhdGVEZXNjcmlwdGlvbjogXCJNaW5pbXVtIHJhdGUgZGVzY3JpcHRpb25cIiwgXHJcbiAgICAgICAgbWF4UmF0ZURlc2NyaXB0aW9uOiBcIk1heGltdW0gcmF0ZSBkZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIGlucHV0VHlwZTogXCJJbnB1dCB0eXBlXCIsXHJcbiAgICAgICAgb3B0aW9uc0NhcHRpb246IFwiT3B0aW9ucyBjYXB0aW9uXCIsXHJcblxyXG4gICAgICAgIHFFZGl0b3JUaXRsZTogXCJFZGl0IHF1ZXN0aW9uOiB7MH1cIixcclxuICAgICAgICB0YWJzOiB7XHJcbiAgICAgICAgICAgIGdlbmVyYWw6IFwiR2VuZXJhbFwiLFxyXG4gICAgICAgICAgICBmaWxlT3B0aW9uczogXCJPcHRpb25zXCIsXHJcbiAgICAgICAgICAgIGh0bWw6IFwiSHRtbCBFZGl0b3JcIixcclxuICAgICAgICAgICAgY29sdW1uczogXCJDb2x1bW5zXCIsXHJcbiAgICAgICAgICAgIHJvd3M6IFwiUm93c1wiLFxyXG4gICAgICAgICAgICBjaG9pY2VzOiBcIkNob2ljZXNcIixcclxuICAgICAgICAgICAgdmlzaWJsZUlmOiBcIlZpc2libGUgSWZcIixcclxuICAgICAgICAgICAgcmF0ZVZhbHVlczogXCJSYXRlIFZhbHVlc1wiLFxyXG4gICAgICAgICAgICBjaG9pY2VzQnlVcmw6IFwiQ2hvaWNlcyBmcm9tIFdlYlwiLFxyXG4gICAgICAgICAgICBtYXRyaXhDaG9pY2VzOiBcIkRlZmF1bHQgQ2hvaWNlc1wiLFxyXG4gICAgICAgICAgICBtdWx0aXBsZVRleHRJdGVtczogXCJUZXh0IElucHV0c1wiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZWRpdFByb3BlcnR5OiBcIkVkaXQgcHJvcGVydHkgJ3swfSdcIixcclxuICAgICAgICBpdGVtczogXCJbIEl0ZW1zOiB7MH0gXVwiLFxyXG5cclxuICAgICAgICBlbnRlck5ld1ZhbHVlOiBcIlBsZWFzZSwgZW50ZXIgdGhlIHZhbHVlLlwiLFxyXG4gICAgICAgIG5vcXVlc3Rpb25zOiBcIlRoZXJlIGlzIG5vIGFueSBxdWVzdGlvbiBpbiB0aGUgc3VydmV5LlwiLFxyXG4gICAgICAgIGNyZWF0ZXRyaWdnZXI6IFwiUGxlYXNlIGNyZWF0ZSBhIHRyaWdnZXJcIixcclxuICAgICAgICB0cmlnZ2VyT246IFwiT24gXCIsXHJcbiAgICAgICAgdHJpZ2dlck1ha2VQYWdlc1Zpc2libGU6IFwiTWFrZSBwYWdlcyB2aXNpYmxlOlwiLFxyXG4gICAgICAgIHRyaWdnZXJNYWtlUXVlc3Rpb25zVmlzaWJsZTogXCJNYWtlIHF1ZXN0aW9ucyB2aXNpYmxlOlwiLFxyXG4gICAgICAgIHRyaWdnZXJDb21wbGV0ZVRleHQ6IFwiQ29tcGxldGUgdGhlIHN1cnZleSBpZiBzdWNjZWVkLlwiLFxyXG4gICAgICAgIHRyaWdnZXJOb3RTZXQ6IFwiVGhlIHRyaWdnZXIgaXMgbm90IHNldFwiLFxyXG4gICAgICAgIHRyaWdnZXJSdW5JZjogXCJSdW4gaWZcIixcclxuICAgICAgICB0cmlnZ2VyU2V0VG9OYW1lOiBcIkNoYW5nZSB2YWx1ZSBvZjogXCIsXHJcbiAgICAgICAgdHJpZ2dlclNldFZhbHVlOiBcInRvOiBcIixcclxuICAgICAgICB0cmlnZ2VySXNWYXJpYWJsZTogXCJEbyBub3QgcHV0IHRoZSB2YXJpYWJsZSBpbnRvIHRoZSBzdXJ2ZXkgcmVzdWx0LlwiLFxyXG4gICAgICAgIHZlcmJDaGFuZ2VUeXBlOiBcIkNoYW5nZSB0eXBlIFwiLFxyXG4gICAgICAgIHZlcmJDaGFuZ2VQYWdlOiBcIkNoYW5nZSBwYWdlIFwiXHJcbiAgICB9LFxyXG4gICAgLy9PcGVyYXRvcnNcclxuICAgIG9wOiB7XHJcbiAgICAgICAgZW1wdHk6IFwiaXMgZW1wdHlcIixcclxuICAgICAgICBub3RlbXB0eTogXCJpcyBub3QgZW1wdHlcIixcclxuICAgICAgICBlcXVhbDogXCJlcXVhbHNcIixcclxuICAgICAgICBub3RlcXVhbDogXCJub3QgZXF1YWxzXCIsXHJcbiAgICAgICAgY29udGFpbnM6IFwiY29udGFpbnNcIixcclxuICAgICAgICBub3Rjb250YWluczogXCJub3QgY29udGFpbnNcIixcclxuICAgICAgICBncmVhdGVyOiBcImdyZWF0ZXJcIixcclxuICAgICAgICBsZXNzOiBcImxlc3NcIixcclxuICAgICAgICBncmVhdGVyb3JlcXVhbDogXCJncmVhdGVyIG9yIGVxdWFsc1wiLFxyXG4gICAgICAgIGxlc3NvcmVxdWFsOiBcIkxlc3Mgb3IgRXF1YWxzXCJcclxuICAgIH0sXHJcbiAgICAvL0VtYmVkIHdpbmRvd1xyXG4gICAgZXc6IHtcclxuICAgICAgICBhbmd1bGFyOiBcIlVzZSBBbmd1bGFyIHZlcnNpb25cIixcclxuICAgICAgICBqcXVlcnk6IFwiVXNlIGpRdWVyeSB2ZXJzaW9uXCIsXHJcbiAgICAgICAga25vY2tvdXQ6IFwiVXNlIEtub2Nrb3V0IHZlcnNpb25cIixcclxuICAgICAgICByZWFjdDogXCJVc2UgUmVhY3QgdmVyc2lvblwiLFxyXG4gICAgICAgIHZ1ZTogXCJVc2UgVnVlIHZlcnNpb25cIixcclxuICAgICAgICBib290c3RyYXA6IFwiRm9yIGJvb3RzdHJhcCBmcmFtZXdvcmtcIixcclxuICAgICAgICBzdGFuZGFyZDogXCJObyBib290c3RyYXBcIixcclxuICAgICAgICBzaG93T25QYWdlOiBcIlNob3cgc3VydmV5IG9uIGEgcGFnZVwiLFxyXG4gICAgICAgIHNob3dJbldpbmRvdzogXCJTaG93IHN1cnZleSBpbiBhIHdpbmRvd1wiLFxyXG4gICAgICAgIGxvYWRGcm9tU2VydmVyOiBcIkxvYWQgU3VydmV5IEpTT04gZnJvbSBzZXJ2ZXJcIixcclxuICAgICAgICB0aXRsZVNjcmlwdDogXCJTY3JpcHRzIGFuZCBzdHlsZXNcIixcclxuICAgICAgICB0aXRsZUh0bWw6IFwiSFRNTFwiLFxyXG4gICAgICAgIHRpdGxlSmF2YVNjcmlwdDogXCJKYXZhU2NyaXB0XCJcclxuICAgIH0sXHJcbiAgICAvL1Byb3BlcnRpZXNcclxuICAgIHA6IHtcclxuICAgICAgICBuYW1lOiBcIm5hbWVcIixcclxuICAgICAgICB0aXRsZTogeyBuYW1lOiBcInRpdGxlXCIsIHRpdGxlOiBcIkxlYXZlIGl0IGVtcHR5LCBpZiBpdCBpcyB0aGUgc2FtZSBhcyAnTmFtZSdcIiB9LFxyXG4gICAgICAgIHN1cnZleV90aXRsZTogeyBuYW1lOiBcInRpdGxlXCIsIHRpdGxlOiBcIkl0IHdpbGwgYmUgc2hvd24gb24gZXZlcnkgcGFnZS5cIiB9LFxyXG4gICAgICAgIHBhZ2VfdGl0bGU6IHsgbmFtZTogXCJ0aXRsZVwiLCB0aXRsZTogXCJQYWdlIHRpdGxlXCIgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZWRpdG9yTG9jYWxpemF0aW9uLmxvY2FsZXNbXCJlblwiXSA9IGRlZmF1bHRTdHJpbmdzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lZGl0b3JMb2NhbGl6YXRpb24udHMiLCJleHBvcnQgdmFyIF9fYXNzaWduID0gT2JqZWN0W1wiYXNzaWduXCJdIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0YXJnZXRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHModGhpc0NsYXNzLCBiYXNlQ2xhc3MpIHtcclxuICAgIGZvciAodmFyIHAgaW4gYmFzZUNsYXNzKSBpZiAoYmFzZUNsYXNzLmhhc093blByb3BlcnR5KHApKSB0aGlzQ2xhc3NbcF0gPSBiYXNlQ2xhc3NbcF07XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzczsgfVxyXG4gICAgdGhpc0NsYXNzLnByb3RvdHlwZSA9IGJhc2VDbGFzcyA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYmFzZUNsYXNzKSA6IChfXy5wcm90b3R5cGUgPSBiYXNlQ2xhc3MucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VudHJpZXMvaGVscGVycy50cyIsImV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0RWRpdG9yOiBzdHJpbmcgPSBcInN0cmluZ1wiO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZWRpdG9yUmVnaXN0ZXJlZExpc3QgPSB7fTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJFZGl0b3IobmFtZTogc3RyaW5nLCBjcmVhdG9yOiAoKSA9PiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UpIHtcclxuICAgICAgICBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuZWRpdG9yUmVnaXN0ZXJlZExpc3RbbmFtZV0gPSBjcmVhdG9yO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVFZGl0b3IoZWRpdG9yVHlwZTogc3RyaW5nLCBmdW5jOiAobmV3VmFsdWU6IGFueSkgPT4gYW55KTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHtcclxuICAgICAgICB2YXIgY3JlYXRvciA9IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5lZGl0b3JSZWdpc3RlcmVkTGlzdFtlZGl0b3JUeXBlXTtcclxuICAgICAgICBpZiAoIWNyZWF0b3IpIGNyZWF0b3IgPSBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuZWRpdG9yUmVnaXN0ZXJlZExpc3RbU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLmRlZmF1bHRFZGl0b3JdO1xyXG4gICAgICAgIHZhciBwcm9wZXJ0eUVkaXRvciA9IGNyZWF0b3IoKTtcclxuICAgICAgICBwcm9wZXJ0eUVkaXRvci5vbkNoYW5nZWQgPSBmdW5jO1xyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0eUVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbHVlXzogYW55ID0gbnVsbDtcclxuICAgIHB1YmxpYyBvcHRpb25zOiBhbnkgPSBudWxsO1xyXG4gICAgcHVibGljIG9uQ2hhbmdlZDogKG5ld1ZhbHVlOiBhbnkpID0+IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHRocm93IFwiZWRpdG9yVHlwZSBpcyBub3QgZGVmaW5lZFwiOyB9XHJcbiAgICBwdWJsaWMgZ2V0VmFsdWVUZXh0KHZhbHVlOiBhbnkpOiBzdHJpbmcgeyByZXR1cm4gdmFsdWU7IH1cclxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMudmFsdWVfOyB9XHJcbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0Q29ycmVjdGVkVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWVDb3JlKHZhbHVlKTtcclxuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0VmFsdWVDb3JlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnZhbHVlXyA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldFRpdGxlKHZhbHVlOiBzdHJpbmcpIHsgfVxyXG4gICAgcHVibGljIHNldE9iamVjdCh2YWx1ZTogYW55KSB7IH1cclxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXRDb3JyZWN0ZWRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHsgIHJldHVybiB2YWx1ZTsgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgU3VydmV5U3RyaW5nUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJzdHJpbmdcIjsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlEcm9wZG93blByb3BlcnR5RWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiZHJvcGRvd25cIjsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlCb29sZWFuUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJib29sZWFuXCI7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgU3VydmV5TnVtYmVyUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJudW1iZXJcIjsgfVxyXG59XHJcblxyXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJzdHJpbmdcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5U3RyaW5nUHJvcGVydHlFZGl0b3IoKTsgfSk7XHJcblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcImRyb3Bkb3duXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleURyb3Bkb3duUHJvcGVydHlFZGl0b3IoKTsgfSk7XHJcblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcImJvb2xlYW5cIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5Qm9vbGVhblByb3BlcnR5RWRpdG9yKCk7IH0pO1xyXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJudW1iZXJcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5TnVtYmVyUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUVkaXRvckJhc2UudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eU1vZGFsRWRpdG9yXCI7XHJcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3Ige1xyXG4gICAgcHVibGljIGtvSXRlbXM6IGFueTtcclxuICAgIHB1YmxpYyBvbkRlbGV0ZUNsaWNrOiBhbnk7XHJcbiAgICBwdWJsaWMgb25Nb3ZlVXBDbGljazogYW55O1xyXG4gICAgcHVibGljIG9uTW92ZURvd25DbGljazogYW55O1xyXG4gICAgcHVibGljIG9uQWRkQ2xpY2s6IGFueTtcclxuICAgIHB1YmxpYyBvbkNsZWFyQ2xpY2s6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMua29JdGVtcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBbXTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5vbkRlbGV0ZUNsaWNrID0gZnVuY3Rpb24gKGl0ZW0pIHsgc2VsZi5rb0l0ZW1zLnJlbW92ZShpdGVtKTsgfTtcclxuICAgICAgICBzZWxmLm9uQ2xlYXJDbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYua29JdGVtcy5yZW1vdmVBbGwoKTsgfTtcclxuICAgICAgICBzZWxmLm9uQWRkQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuQWRkSXRlbSgpOyB9O1xyXG4gICAgICAgIHNlbGYub25Nb3ZlVXBDbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYubW92ZVVwKGl0ZW0pOyB9O1xyXG4gICAgICAgIHNlbGYub25Nb3ZlRG93bkNsaWNrID0gZnVuY3Rpb24gKGl0ZW0pIHsgc2VsZi5tb3ZlRG93bihpdGVtKTsgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRWYWx1ZVRleHQodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGxlbiA9IHZhbHVlID8gdmFsdWUubGVuZ3RoIDogMDtcclxuICAgICAgICByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLml0ZW1zXCIpW1wiZm9ybWF0XCJdKGxlbik7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0Q29ycmVjdGVkVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtdO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBBZGRJdGVtKCkge1xyXG4gICAgICAgIHRoaXMua29JdGVtcy5wdXNoKHRoaXMuY3JlYXRlTmV3RWRpdG9ySXRlbSgpKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBtb3ZlVXAoaXRlbTogYW55KSB7XHJcbiAgICAgICAgdmFyIGFyciA9IHRoaXMua29JdGVtcygpO1xyXG4gICAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDEpIHJldHVybjtcclxuICAgICAgICBhcnJbaW5kZXhdID0gYXJyW2luZGV4IC0gMV07XHJcbiAgICAgICAgYXJyW2luZGV4IC0gMV0gPSBpdGVtO1xyXG4gICAgICAgIHRoaXMua29JdGVtcyhhcnIpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG1vdmVEb3duKGl0ZW06IGFueSkge1xyXG4gICAgICAgIHZhciBhcnIgPSB0aGlzLmtvSXRlbXMoKTtcclxuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IGFyci5sZW5ndGggLSAxKSByZXR1cm47XHJcbiAgICAgICAgYXJyW2luZGV4XSA9IGFycltpbmRleCArIDFdO1xyXG4gICAgICAgIGFycltpbmRleCArIDFdID0gaXRlbTtcclxuICAgICAgICB0aGlzLmtvSXRlbXMoYXJyKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLmtvSXRlbXModGhpcy5nZXRJdGVtc0Zyb21WYWx1ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbXNGcm9tVmFsdWUodmFsdWU6IGFueSA9IG51bGwpOiBBcnJheTxhbnk+IHtcclxuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcclxuICAgICAgICBpZighdmFsdWUpIHZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVFZGl0b3JJdGVtKHZhbHVlW2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkge1xyXG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICAgIHZhciBpbnRlcm5hbEl0ZW1zID0gdGhpcy5rb0l0ZW1zKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnRlcm5hbEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oaW50ZXJuYWxJdGVtc1tpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFZhbHVlQ29yZShpdGVtcyk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3RWRpdG9ySXRlbSgpOiBhbnkgeyB0aHJvdyBcIk92ZXJyaWRlICdjcmVhdGVOZXdFZGl0b3JJdGVtJyBtZXRob2RcIjsgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7IHJldHVybiBpdGVtOyB9XHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkgeyAgcmV0dXJuIGVkaXRvckl0ZW07ICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbXNFZGl0b3IudHMiLCJpbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XHJcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XHJcblxyXG5leHBvcnQgZW51bSBPYmpUeXBlIHsgVW5rbm93biwgU3VydmV5LCBQYWdlLCBRdWVzdGlvbiB9XHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlIZWxwZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXROZXdQYWdlTmFtZShvYmpzOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgcmV0dXJuIFN1cnZleUhlbHBlci5nZXROZXdOYW1lKG9ianMsIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJlZC5uZXdQYWdlTmFtZVwiKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5ld1F1ZXN0aW9uTmFtZShvYmpzOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgcmV0dXJuIFN1cnZleUhlbHBlci5nZXROZXdOYW1lKG9ianMsIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJlZC5uZXdRdWVzdGlvbk5hbWVcIikpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXROZXdOYW1lKG9ianM6IEFycmF5PGFueT4sIGJhc2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBoYXNoID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGhhc2hbb2Jqc1tpXS5uYW1lXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBudW0gPSAxO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICghaGFzaFtiYXNlTmFtZSArIG51bS50b1N0cmluZygpXSkgYnJlYWs7XHJcbiAgICAgICAgICAgIG51bSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmFzZU5hbWUgKyBudW0udG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0T2JqZWN0VHlwZShvYmo6IGFueSk6IE9ialR5cGUge1xyXG4gICAgICAgIGlmICghb2JqIHx8ICFvYmpbXCJnZXRUeXBlXCJdKSByZXR1cm4gT2JqVHlwZS5Vbmtub3duO1xyXG4gICAgICAgIGlmIChvYmouZ2V0VHlwZSgpID09IFwicGFnZVwiKSByZXR1cm4gT2JqVHlwZS5QYWdlO1xyXG4gICAgICAgIGlmIChvYmouZ2V0VHlwZSgpID09IFwic3VydmV5XCIpIHJldHVybiBPYmpUeXBlLlN1cnZleTtcclxuICAgICAgICBpZiAob2JqW1wibmFtZVwiXSkgcmV0dXJuIE9ialR5cGUuUXVlc3Rpb247XHJcbiAgICAgICAgcmV0dXJuIE9ialR5cGUuVW5rbm93bjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0T2JqZWN0TmFtZShvYmo6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKG9ialtcIm5hbWVcIl0pIHJldHVybiBvYmpbXCJuYW1lXCJdO1xyXG4gICAgICAgIHZhciBvYmpUeXBlID0gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKTtcclxuICAgICAgICBpZiAob2JqVHlwZSAhPSBPYmpUeXBlLlBhZ2UpIHJldHVybiBcIlwiO1xyXG4gICAgICAgIHZhciBkYXRhID0gPFN1cnZleS5TdXJ2ZXk+KDxTdXJ2ZXkuUGFnZT5vYmopLmRhdGE7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gZGF0YS5wYWdlcy5pbmRleE9mKDxTdXJ2ZXkuUGFnZT5vYmopO1xyXG4gICAgICAgIHJldHVybiBcIltQYWdlIFwiICsgKGluZGV4ICsgMSkgKyBcIl1cIjtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdXJ2ZXlIZWxwZXIudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHtTdXJ2ZXlPYmplY3RQcm9wZXJ0eX0gZnJvbSBcIi4vb2JqZWN0UHJvcGVydHlcIjtcclxuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuL2VkaXRvckxvY2FsaXphdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleU9iamVjdEVkaXRvciB7XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkT2JqZWN0VmFsdWU6IGFueTtcclxuICAgIHB1YmxpYyBwcm9wZXJ0eUVkaXRvck9wdGlvbnM6IGFueSA9IG51bGw7XHJcbiAgICBwdWJsaWMga29Qcm9wZXJ0aWVzOiBhbnk7XHJcbiAgICBwdWJsaWMga29BY3RpdmVQcm9wZXJ0eTogYW55O1xyXG4gICAgcHVibGljIGtvSGFzT2JqZWN0OiBhbnk7XHJcbiAgICBwdWJsaWMgb25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZDogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleU9iamVjdEVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleU9iamVjdEVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcclxuICAgIHB1YmxpYyBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrOiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSA9PiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnR5RWRpdG9yT3B0aW9uczogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhwcm9wZXJ0eUVkaXRvck9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMua29Qcm9wZXJ0aWVzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5rb0FjdGl2ZVByb3BlcnR5ID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgICAgIHRoaXMua29IYXNPYmplY3QgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkT2JqZWN0KCk6IGFueSB7IHJldHVybiB0aGlzLnNlbGVjdGVkT2JqZWN0VmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgc2VsZWN0ZWRPYmplY3QodmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT2JqZWN0VmFsdWUgPT0gdmFsdWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmtvSGFzT2JqZWN0KHZhbHVlICE9IG51bGwpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllc09iamVjdCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldE9wdGlvbnMocHJvcGVydHlFZGl0b3JPcHRpb25zOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnByb3BlcnR5RWRpdG9yT3B0aW9ucyA9IHByb3BlcnR5RWRpdG9yT3B0aW9ucztcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRQcm9wZXJ0eUVkaXRvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IHRoaXMua29Qcm9wZXJ0aWVzKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2ldLm5hbWUgPT0gbmFtZSkgcmV0dXJuIHByb3BlcnRpZXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNoYW5nZUFjdGl2ZVByb3BlcnR5KHByb3BlcnR5OiBTdXJ2ZXlPYmplY3RQcm9wZXJ0eSkge1xyXG4gICAgICAgIHRoaXMua29BY3RpdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgT2JqZWN0Q2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNPYmplY3QoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB1cGRhdGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZE9iamVjdCB8fCAhdGhpcy5zZWxlY3RlZE9iamVjdC5nZXRUeXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMua29Qcm9wZXJ0aWVzKFtdKTtcclxuICAgICAgICAgICAgdGhpcy5rb0FjdGl2ZVByb3BlcnR5KG51bGwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0UHJvcGVydGllcyh0aGlzLnNlbGVjdGVkT2JqZWN0LmdldFR5cGUoKSk7XHJcbiAgICAgICAgcHJvcGVydGllcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhLm5hbWUgPT0gYi5uYW1lKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgaWYgKGEubmFtZSA+IGIubmFtZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgb2JqZWN0UHJvcGVydGllcyA9IFtdO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgcHJvcEV2ZW50ID0gKHByb3BlcnR5OiBTdXJ2ZXlPYmplY3RQcm9wZXJ0eSwgbmV3VmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQuZmlyZSh0aGlzLCB7IHByb3BlcnR5OiBwcm9wZXJ0eS5wcm9wZXJ0eSwgb2JqZWN0OiBwcm9wZXJ0eS5vYmplY3QsIG5ld1ZhbHVlOiBuZXdWYWx1ZSB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuU2hvd1Byb3BlcnR5KHByb3BlcnRpZXNbaV0pKSBjb250aW51ZTtcclxuICAgICAgICAgICAgdmFyIG9iamVjdFByb3BlcnR5ID0gbmV3IFN1cnZleU9iamVjdFByb3BlcnR5KHByb3BlcnRpZXNbaV0sIHByb3BFdmVudCwgdGhpcy5wcm9wZXJ0eUVkaXRvck9wdGlvbnMpO1xyXG4gICAgICAgICAgICB2YXIgbG9jTmFtZSA9IHRoaXMuc2VsZWN0ZWRPYmplY3QuZ2V0VHlwZSgpICsgJ18nICsgcHJvcGVydGllc1tpXS5uYW1lO1xyXG4gICAgICAgICAgICBvYmplY3RQcm9wZXJ0eS5kaXNwbGF5TmFtZSA9IGVkaXRvckxvY2FsaXphdGlvbi5nZXRQcm9wZXJ0eU5hbWUobG9jTmFtZSk7XHJcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IGVkaXRvckxvY2FsaXphdGlvbi5nZXRQcm9wZXJ0eVRpdGxlKGxvY05hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIXRpdGxlKSB0aXRsZSA9IG9iamVjdFByb3BlcnR5LmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICBvYmplY3RQcm9wZXJ0eS50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgICBvYmplY3RQcm9wZXJ0aWVzLnB1c2gob2JqZWN0UHJvcGVydHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtvUHJvcGVydGllcyhvYmplY3RQcm9wZXJ0aWVzKTtcclxuICAgICAgICB0aGlzLmtvQWN0aXZlUHJvcGVydHkodGhpcy5nZXRQcm9wZXJ0eUVkaXRvcihcIm5hbWVcIikpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNhblNob3dQcm9wZXJ0eShwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciBuYW1lID0gcHJvcGVydHkubmFtZTtcclxuICAgICAgICBpZiAobmFtZSA9PSAncXVlc3Rpb25zJyB8fCBuYW1lID09ICdwYWdlcycpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKSByZXR1cm4gdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWRPYmplY3QsIHByb3BlcnR5KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB1cGRhdGVQcm9wZXJ0aWVzT2JqZWN0KCkge1xyXG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5rb1Byb3BlcnRpZXMoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcHJvcGVydGllc1tpXS5vYmplY3QgPSB0aGlzLnNlbGVjdGVkT2JqZWN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vYmplY3RFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xyXG4gICAgcHVibGljIG9iamVjdDogYW55O1xyXG4gICAgcHVibGljIHRpdGxlOiBhbnk7XHJcbiAgICBwdWJsaWMgb25BcHBseUNsaWNrOiBhbnk7XHJcbiAgICBwdWJsaWMgb25SZXNldENsaWNrOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYub25BcHBseUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmFwcGx5KCk7IH07XHJcbiAgICAgICAgc2VsZi5vblJlc2V0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYucmVzZXQoKTsgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRUaXRsZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudGl0bGUodmFsdWUpOyB9XHJcbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgcHJvdGVjdGVkIG9uQmVmb3JlQXBwbHkoKSB7IH1cclxuICAgIHByaXZhdGUgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0T2JqZWN0KHZhbHVlOiBhbnkpIHsgdGhpcy5vYmplY3QgPSB2YWx1ZTsgfVxyXG4gICAgcHVibGljIGdldCBpc0VkaXRhYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cclxuICAgIHB1YmxpYyBhcHBseSgpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcigpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5vbkJlZm9yZUFwcGx5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMub25DaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2VkKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VGV4dEVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3Ige1xyXG4gICAgcHVibGljIGtvVmFsdWU6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMua29WYWx1ZSA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ0ZXh0XCI7IH1cclxuICAgIHB1YmxpYyBnZXQgaXNFZGl0YWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIHB1YmxpYyBnZXRWYWx1ZVRleHQodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgdmFyIHN0ciA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gMjApIHtcclxuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cigwLCAyMCkgKyBcIi4uLlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xyXG4gICAgICAgIHRoaXMua29WYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWVDb3JlKHRoaXMua29WYWx1ZSgpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5SHRtbEVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5VGV4dEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcImh0bWxcIjsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlFeHByZXNzaW9uRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlUZXh0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiZXhwcmVzc2lvblwiOyB9XHJcbn1cclxuXHJcblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcInRleHRcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlUZXh0RWRpdG9yKCk7IH0pO1xyXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJodG1sXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5SHRtbEVkaXRvcigpOyB9KTtcclxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwiZXhwcmVzc2lvblwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eUV4cHJlc3Npb25FZGl0b3IoKTsgfSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNb2RhbEVkaXRvci50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5pbXBvcnQge1N1cnZleVByb3BlcnR5TW9kYWxFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNb2RhbEVkaXRvclwiO1xyXG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcclxuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcclxuaW1wb3J0IHtTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0eSwgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUm93LCBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzfSBmcm9tIFwiLi9xdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCB7U3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9ufSBmcm9tIFwiLi9xdWVzdGlvbkVkaXRvckRlZmluaXRpb25cIjtcclxuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvclNob3dXaW5kb3cge1xyXG4gICAga29WaXNpYmxlOiBhbnk7XHJcbiAgICBrb0VkaXRvcjogYW55O1xyXG4gICAgcHVibGljIG9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2s6IChvYmplY3Q6IGFueSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpID0+IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmtvVmlzaWJsZSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMua29FZGl0b3IgPSBrby5vYnNlcnZhYmxlKG51bGwpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3cocXVlc3Rpb25CYXNlOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBvbkNoYW5nZWQ6IChxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkgPT4gYW55KSB7XHJcbiAgICAgICAgdmFyIGVkaXRvciA9IG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvcihxdWVzdGlvbkJhc2UsIHRoaXMub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayk7XHJcbiAgICAgICAgZWRpdG9yLm9uQ2hhbmdlZCA9IG9uQ2hhbmdlZFxyXG4gICAgICAgIHRoaXMua29FZGl0b3IoZWRpdG9yKTtcclxuICAgICAgICB0aGlzLmtvVmlzaWJsZSh0cnVlKTtcclxuICAgICAgICB2YXIgalF1ZXJ5ID0gd2luZG93W1wialF1ZXJ5XCJdO1xyXG4gICAgICAgIGpRdWVyeShcIiNzdXJ2ZXlxdWVzdGlvbmVkaXRvcndpbmRvd1wiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgZWRpdG9yLm9uSGlkZVdpbmRvdyA9IGZ1bmN0aW9uKCkge2pRdWVyeShcIiNzdXJ2ZXlxdWVzdGlvbmVkaXRvcndpbmRvd1wiKS5tb2RhbChcImhpZGVcIik7fTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uUHJvcGVydGllcyB7XHJcbiAgICBwcml2YXRlIHByb3BlcnRpZXM6IEFycmF5PFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHk+O1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG9iajogU3VydmV5LkJhc2UsIHB1YmxpYyBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrOiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0UHJvcGVydGllcyh0aGlzLm9iai5nZXRUeXBlKCkpOyBcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRQcm9wZXJ0eShwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkge1xyXG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcGVydGllc1tpXS5uYW1lID09IHByb3BlcnR5TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcGVydHkgJiYgdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKHRoaXMub2JqLCBwcm9wZXJ0eSkpIHByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xyXG4gICAgfSBcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yIHtcclxuICAgIHByb3RlY3RlZCBwcm9wZXJ0aWVzOiBTdXJ2ZXlRdWVzdGlvblByb3BlcnRpZXM7XHJcbiAgICBwdWJsaWMgb25DaGFuZ2VkOiAob2JqOiBTdXJ2ZXkuQmFzZSkgPT4gYW55O1xyXG4gICAgcHVibGljIG9uSGlkZVdpbmRvdzogKCk9PiBhbnk7XHJcbiAgICBwdWJsaWMgb25Pa0NsaWNrOiBhbnk7XHJcbiAgICBwdWJsaWMgb25BcHBseUNsaWNrOiBhbnk7XHJcbiAgICBwdWJsaWMgb25SZXNldENsaWNrOiBhbnk7XHJcbiAgICBrb1RhYnM6IGFueTsga29BY3RpdmVUYWI6IGFueTsga29UaXRsZTogYW55O1xyXG4gICAgb25UYWJDbGljazogYW55O1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG9iajogU3VydmV5LkJhc2UsIHB1YmxpYyBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrOiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSA9PiBib29sZWFuLCBwdWJsaWMgY2xhc3NOYW1lOiBzdHJpbmcgPSBudWxsKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmKCF0aGlzLmNsYXNzTmFtZSkgdGhpcy5jbGFzc05hbWUgPSB0aGlzLm9iai5nZXRUeXBlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IFN1cnZleVF1ZXN0aW9uUHJvcGVydGllcyhvYmosIG9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2spO1xyXG4gICAgICAgIHNlbGYub25BcHBseUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmFwcGx5KCk7IH07XHJcbiAgICAgICAgc2VsZi5vbk9rQ2xpY2sgPSBmdW5jdGlvbigpIHtzZWxmLmFwcGx5KCk7IGlmKCFzZWxmLmhhc0Vycm9yKCkgJiYgc2VsZi5vbkhpZGVXaW5kb3cpIHNlbGYub25IaWRlV2luZG93KCk7IH07XHJcbiAgICAgICAgc2VsZi5vblJlc2V0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYucmVzZXQoKTsgfTtcclxuICAgICAgICB0aGlzLm9uVGFiQ2xpY2sgPSBmdW5jdGlvbiAodGFiKSB7IHNlbGYua29BY3RpdmVUYWIodGFiLm5hbWUpOyB9O1xyXG4gICAgICAgIHZhciB0YWJzID0gdGhpcy5idWlsZFRhYnMoKTtcclxuICAgICAgICB0aGlzLmtvQWN0aXZlVGFiID0ga28ub2JzZXJ2YWJsZSh0YWJzWzBdLm5hbWUpO1xyXG4gICAgICAgIHRoaXMua29UYWJzID0ga28ub2JzZXJ2YWJsZUFycmF5KHRhYnMpO1xyXG4gICAgICAgIHRoaXMua29UaXRsZSA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgICAgICBpZih0aGlzLm9ialtcIm5hbWVcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5rb1RpdGxlKGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5xRWRpdG9yVGl0bGVcIilbXCJmb3JtYXRcIl0odGhpcy5vYmpbXCJuYW1lXCJdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciB0YWJzID0gdGhpcy5rb1RhYnMoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRhYnNbaV0uaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rb0FjdGl2ZVRhYih0YWJzW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHZhciB0YWJzID0gdGhpcy5rb1RhYnMoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGFic1tpXS5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBhcHBseSgpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcigpKSByZXR1cm47XHJcbiAgICAgICAgdmFyIHRhYnMgPSB0aGlzLmtvVGFicygpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0YWJzW2ldLmFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlZCh0aGlzLm9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBidWlsZFRhYnMoKTogQXJyYXk8U3VydmV5UXVlc3Rpb25FZGl0b3JUYWJCYXNlPiB7XHJcbiAgICAgICAgdmFyIHRhYnMgPSBbXTtcclxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzKHRoaXMub2JqLCBTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZ2V0UHJvcGVydGllcyh0aGlzLmNsYXNzTmFtZSksIHRoaXMub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayk7XHJcbiAgICAgICAgdGFicy5wdXNoKG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYkdlbmVyYWwodGhpcy5vYmosIHByb3BlcnRpZXMpKTtcclxuICAgICAgICB0aGlzLmFkZFByb3BlcnRpZXNUYWJzKHRhYnMpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0YWJzW2ldLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2sgPSB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YWJzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGRQcm9wZXJ0aWVzVGFicyh0YWJzOiBBcnJheTxTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYkJhc2U+KSB7XHJcbiAgICAgICAgdmFyIHRhYk5hbWVzID0gU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLmdldFRhYnModGhpcy5jbGFzc05hbWUpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFiTmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRhYkl0ZW0gPSB0YWJOYW1lc1tpXTtcclxuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzLmdldFByb3BlcnR5KHRhYkl0ZW0ubmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghcHJvcGVydHkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB2YXIgZWRpdG9yVGFiID0gbmV3IFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiUHJvcGVydHkodGhpcy5vYmosIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgaWYgKHRhYkl0ZW0udGl0bGUpIGVkaXRvclRhYi50aXRsZSA9IHRhYkl0ZW0udGl0bGU7XHJcbiAgICAgICAgICAgIHRhYnMucHVzaChlZGl0b3JUYWIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiQmFzZSB7XHJcbiAgICBwcml2YXRlIHRpdGxlVmFsdWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvYmo6IFN1cnZleS5CYXNlKSB7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwibmFtZVwiOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHRpdGxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpdGxlVmFsdWUpIHJldHVybiB0aGlzLnRpdGxlVmFsdWU7XHJcbiAgICAgICAgdmFyIHN0ciA9IGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50YWJzLlwiICsgdGhpcy5uYW1lKTtcclxuICAgICAgICByZXR1cm4gc3RyID8gc3RyIDogdGhpcy5uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudGl0bGVWYWx1ZSA9IHZhbHVlOyB9XHJcbiAgICBwdWJsaWMgZ2V0IGh0bWxUZW1wbGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJxdWVzdGlvbmVkaXRvcnRhYi1cIiArIHRoaXMubmFtZTsgfVxyXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZU9iamVjdCgpOiBhbnkgeyByZXR1cm4gdGhpczsgfVxyXG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cclxuICAgIHB1YmxpYyByZXNldCgpIHsgfVxyXG4gICAgcHVibGljIGFwcGx5KCkgeyB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0VmFsdWUocHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpOiBhbnkge1xyXG4gICAgICAgIGlmIChwcm9wZXJ0eS5oYXNUb1VzZUdldFZhbHVlKSByZXR1cm4gcHJvcGVydHkuZ2V0VmFsdWUodGhpcy5vYmopO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9ialtwcm9wZXJ0eS5uYW1lXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiR2VuZXJhbCBleHRlbmRzIFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JqOiBTdXJ2ZXkuQmFzZSwgcHVibGljIHByb3BlcnRpZXM6IFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXMgPSBudWxsKSB7XHJcbiAgICAgICAgc3VwZXIob2JqKTtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzID8gcHJvcGVydGllcyA6IG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzKG9iaiwgU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLmdldFByb3BlcnRpZXMob2JqLmdldFR5cGUoKSksIG51bGwpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcImdlbmVyYWxcIjsgfVxyXG4gICAgcHVibGljIGdldCBodG1sVGVtcGxhdGUoKTogc3RyaW5nIHsgcmV0dXJuIFwicXVlc3Rpb25lZGl0b3J0YWItZ2VuZXJhbFwiOyB9XHJcbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnByb3BlcnRpZXMuaGFzRXJyb3IoKTsgfSBcclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMucmVzZXQoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhcHBseSgpIHtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMuYXBwbHkoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiUHJvcGVydHkgZXh0ZW5kcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYkJhc2Uge1xyXG4gICAgcHJpdmF0ZSBwcm9wZXJ0eUVkaXRvclZhbHVlOiBTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG9iajogU3VydmV5LkJhc2UsIHB1YmxpYyBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkge1xyXG4gICAgICAgIHN1cGVyKG9iaik7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvclZhbHVlID0gPFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3I+U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLmNyZWF0ZUVkaXRvcih0aGlzLnByb3BlcnR5LnR5cGUsIG51bGwpO1xyXG4gICAgICAgIHRoaXMucHJvcGVydHlFZGl0b3JWYWx1ZS52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUodGhpcy5wcm9wZXJ0eSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMucHJvcGVydHkubmFtZTsgfVxyXG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5wcm9wZXJ0eUVkaXRvci5oYXNFcnJvcigpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IGh0bWxUZW1wbGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtXCIgKyB0aGlzLnByb3BlcnR5LnR5cGU7IH1cclxuICAgIHB1YmxpYyBnZXQgdGVtcGxhdGVPYmplY3QoKTogYW55IHsgcmV0dXJuIHRoaXMucHJvcGVydHlFZGl0b3I7IH1cclxuICAgIHB1YmxpYyBnZXQgcHJvcGVydHlFZGl0b3IoKTogU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvciB7IHJldHVybiB0aGlzLnByb3BlcnR5RWRpdG9yVmFsdWU7IH1cclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnByb3BlcnR5RWRpdG9yVmFsdWUudmFsdWUgPSB0aGlzLmdldFZhbHVlKHRoaXMucHJvcGVydHkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFwcGx5KCkge1xyXG4gICAgICAgIHRoaXMucHJvcGVydHlFZGl0b3IuYXBwbHkoKTtcclxuICAgICAgICB0aGlzLm9ialt0aGlzLnByb3BlcnR5Lm5hbWVdID0gdGhpcy5wcm9wZXJ0eUVkaXRvclZhbHVlLnZhbHVlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvci50cyIsImltcG9ydCB7U3VydmV5SlNPTjV9IGZyb20gXCIuL2pzb241XCI7XHJcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XHJcblxyXG5jbGFzcyBUZXh0UGFyc2VyUHJvcGVyeSB7XHJcbiAgICBpc0ZvdW5kOiBib29sZWFuO1xyXG4gICAgcHJvcGVydGllc0NvdW50OiBudW1iZXI7XHJcbiAgICBzdGFydDogbnVtYmVyO1xyXG4gICAgZW5kOiBudW1iZXI7XHJcbiAgICB2YWx1ZVN0YXJ0OiBudW1iZXI7XHJcbiAgICB2YWx1ZUVuZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3VydmV5VGV4dFdvcmtlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld0xpbmVDaGFyOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZXJyb3JzOiBBcnJheTxhbnk+O1xyXG4gICAgcHJpdmF0ZSBzdXJ2ZXlWYWx1ZTogU3VydmV5LlN1cnZleTtcclxuICAgIHByaXZhdGUganNvblZhbHVlOiBhbnk7XHJcbiAgICBwcml2YXRlIHN1cnZleU9iamVjdHM6IEFycmF5PGFueT47XHJcbiAgICBwcml2YXRlIGlzU3VydmV5QXNQYWdlOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGV4dCB8fCB0aGlzLnRleHQudHJpbSgpID09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gXCJ7fVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xyXG4gICAgICAgIHRoaXMucHJvY2VzcygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlOyB9XHJcbiAgICBwdWJsaWMgZ2V0IGlzSnNvbkNvcnJlY3QoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlICE9IG51bGw7IH1cclxuICAgIHByb3RlY3RlZCBwcm9jZXNzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuanNvblZhbHVlID0gbmV3IFN1cnZleUpTT041KDEpLnBhcnNlKHRoaXMudGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHsgcG9zOiB7IHN0YXJ0OiBlcnJvci5hdCwgZW5kOiAtMSB9LCB0ZXh0OiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5qc29uVmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUpzb25Qb3NpdGlvbnModGhpcy5qc29uVmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gbmV3IFN1cnZleS5TdXJ2ZXkodGhpcy5qc29uVmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdXJ2ZXlWYWx1ZS5qc29uRXJyb3JzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXlWYWx1ZS5qc29uRXJyb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gdGhpcy5zdXJ2ZXlWYWx1ZS5qc29uRXJyb3JzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goeyBwb3M6IHsgc3RhcnQ6IGVycm9yLmF0LCBlbmQ6IC0xIH0sIHRleHQ6IGVycm9yLmdldEZ1bGxEZXNjcmlwdGlvbigpIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cyA9IHRoaXMuY3JlYXRlU3VydmV5T2JqZWN0cygpO1xyXG4gICAgICAgIHRoaXMuc2V0RWRpdG9yUG9zaXRpb25CeUNoYXJ0QXQodGhpcy5zdXJ2ZXlPYmplY3RzKTtcclxuICAgICAgICB0aGlzLnNldEVkaXRvclBvc2l0aW9uQnlDaGFydEF0KHRoaXMuZXJyb3JzKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlSnNvblBvc2l0aW9ucyhqc29uT2JqOiBhbnkpIHtcclxuICAgICAgICBqc29uT2JqW1wicG9zXCJdW1wic2VsZlwiXSA9IGpzb25PYmo7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb25PYmopIHtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IGpzb25PYmpba2V5XTtcclxuICAgICAgICAgICAgaWYgKG9iaiAmJiBvYmpbXCJwb3NcIl0pIHtcclxuICAgICAgICAgICAgICAgIGpzb25PYmpbXCJwb3NcIl1ba2V5XSA9IG9ialtcInBvc1wiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSnNvblBvc2l0aW9ucyhvYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVTdXJ2ZXlPYmplY3RzKCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdXJ2ZXlWYWx1ZSA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIHRoaXMuaXNTdXJ2ZXlBc1BhZ2UgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VydmV5VmFsdWUucGFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleVZhbHVlLnBhZ2VzW2ldO1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwICYmICFwYWdlW1wicG9zXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlW1wicG9zXCJdID0gdGhpcy5zdXJ2ZXlWYWx1ZVtcInBvc1wiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdXJ2ZXlBc1BhZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhZ2UpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhZ2UucXVlc3Rpb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYWdlLnF1ZXN0aW9uc1tqXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0RWRpdG9yUG9zaXRpb25CeUNoYXJ0QXQob2JqZWN0czogYW55W10pIHtcclxuICAgICAgICBpZiAob2JqZWN0cyA9PSBudWxsIHx8IG9iamVjdHMubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSB7IHJvdzogMCwgY29sdW1uOiAwIH07XHJcbiAgICAgICAgdmFyIGF0T2JqZWN0c0FycmF5ID0gdGhpcy5nZXRBdEFycmF5KG9iamVjdHMpO1xyXG4gICAgICAgIHZhciBzdGFydEF0OiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXRPYmplY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGF0ID0gYXRPYmplY3RzQXJyYXlbaV0uYXQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRQb3N0aW9uQnlDaGFydEF0KHBvc2l0aW9uLCBzdGFydEF0LCBhdCk7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBhdE9iamVjdHNBcnJheVtpXS5vYmo7XHJcbiAgICAgICAgICAgIGlmICghb2JqLnBvc2l0aW9uKSBvYmoucG9zaXRpb24gPSB7fTtcclxuICAgICAgICAgICAgaWYgKGF0ID09IG9iai5wb3Muc3RhcnQpIHtcclxuICAgICAgICAgICAgICAgIG9iai5wb3NpdGlvbi5zdGFydCA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGF0ID09IG9iai5wb3MuZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnBvc2l0aW9uLmVuZCA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXJ0QXQgPSBhdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFBvc3Rpb25CeUNoYXJ0QXQoc3RhcnRQb3NpdGlvbjogYW55LCBzdGFydEF0OiBudW1iZXIsIGF0OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7IHJvdzogc3RhcnRQb3NpdGlvbi5yb3csIGNvbHVtbjogc3RhcnRQb3NpdGlvbi5jb2x1bW4gfTtcclxuICAgICAgICB2YXIgY3VyQ2hhciA9IHN0YXJ0QXQ7XHJcbiAgICAgICAgd2hpbGUgKGN1ckNoYXIgPCBhdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0LmNoYXJBdChjdXJDaGFyKSA9PSBTdXJ2ZXlUZXh0V29ya2VyLm5ld0xpbmVDaGFyKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucm93Kys7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuY29sdW1uID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5jb2x1bW4rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJDaGFyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEF0QXJyYXkob2JqZWN0czogYW55W10pOiBhbnlbXSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gb2JqZWN0c1tpXTtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IG9iai5wb3M7XHJcbiAgICAgICAgICAgIGlmICghcG9zKSBjb250aW51ZTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBhdDogcG9zLnN0YXJ0LCBvYmo6IG9iaiB9KTtcclxuICAgICAgICAgICAgaWYgKHBvcy5lbmQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7IGF0OiBwb3MuZW5kLCBvYmo6IG9iaiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0LnNvcnQoKGVsMSwgZWwyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbDEuYXQgPiBlbDIuYXQpIHJldHVybiAxO1xyXG4gICAgICAgICAgICBpZiAoZWwxLmF0IDwgZWwyLmF0KSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RleHRXb3JrZXIudHMiLCIvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gSlNPTjUsIGh0dHA6Ly9qc29uNS5vcmcvXHJcbi8vIFRoZSBtb2RpZmljYXRpb24gZm9yIGdldHRpbmcgb2JqZWN0IGFuZCBwcm9wZXJ0aWVzIGxvY2F0aW9uICdhdCcgd2VyZSBtYWRlbi5cclxuXHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlKU09ONSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHBvc2l0aW9uTmFtZSA9IFwicG9zXCI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBlc2NhcGVlID0ge1xyXG4gICAgICAgIFwiJ1wiOiBcIidcIixcclxuICAgICAgICAnXCInOiAnXCInLFxyXG4gICAgICAgICdcXFxcJzogJ1xcXFwnLFxyXG4gICAgICAgICcvJzogJy8nLFxyXG4gICAgICAgICdcXG4nOiAnJywgICAgICAgLy8gUmVwbGFjZSBlc2NhcGVkIG5ld2xpbmVzIGluIHN0cmluZ3Mgdy8gZW1wdHkgc3RyaW5nXHJcbiAgICAgICAgYjogJ1xcYicsXHJcbiAgICAgICAgZjogJ1xcZicsXHJcbiAgICAgICAgbjogJ1xcbicsXHJcbiAgICAgICAgcjogJ1xccicsXHJcbiAgICAgICAgdDogJ1xcdCdcclxuICAgIH07XHJcbiAgICBwcml2YXRlIHN0YXRpYyB3cyA9IFtcclxuICAgICAgICAnICcsXHJcbiAgICAgICAgJ1xcdCcsXHJcbiAgICAgICAgJ1xccicsXHJcbiAgICAgICAgJ1xcbicsXHJcbiAgICAgICAgJ1xcdicsXHJcbiAgICAgICAgJ1xcZicsXHJcbiAgICAgICAgJ1xceEEwJyxcclxuICAgICAgICAnXFx1RkVGRidcclxuICAgIF07XHJcbiAgICBwcml2YXRlIGVuZEF0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGF0OiBudW1iZXI7ICAgICAvLyBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgY2hhcmFjdGVyXHJcbiAgICBwcml2YXRlIGNoOiBhbnk7ICAgICAvLyBUaGUgY3VycmVudCBjaGFyYWN0ZXJcclxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwYXJzZVR5cGU6IG51bWJlcjsgLy8gMCAtIHN0YWRhcmQsIDEgLSBnZXQgaW5mb3JtYXRpb24gYWJvdXQgb2JqZWN0cywgMiAtIGdldCBpbmZvcm1hdGlvbiBhYm91dCBhbGwgcHJvcGVydGllc1xyXG4gICAgY29uc3RydWN0b3IocGFyc2VUeXBlOiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgdGhpcy5wYXJzZVR5cGUgPSBwYXJzZVR5cGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcGFyc2Uoc291cmNlOiBhbnksIHJldml2ZXI6IGFueSA9IG51bGwsIHN0YXJ0RnJvbTogbnVtYmVyID0gMCwgZW5kQXQ6IG51bWJlciA9IC0xKTogYW55IHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSBTdHJpbmcoc291cmNlKTtcclxuICAgICAgICB0aGlzLmF0ID0gc3RhcnRGcm9tO1xyXG4gICAgICAgIHRoaXMuZW5kQXQgPSBlbmRBdDtcclxuICAgICAgICB0aGlzLmNoID0gJyAnO1xyXG4gICAgICAgIHJlc3VsdCA9IHRoaXMudmFsdWUoKTtcclxuICAgICAgICB0aGlzLndoaXRlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2gpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihcIlN5bnRheCBlcnJvclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgcmV2aXZlciBmdW5jdGlvbiwgd2UgcmVjdXJzaXZlbHkgd2FsayB0aGUgbmV3IHN0cnVjdHVyZSxcclxuICAgICAgICAvLyBwYXNzaW5nIGVhY2ggbmFtZS92YWx1ZSBwYWlyIHRvIHRoZSByZXZpdmVyIGZ1bmN0aW9uIGZvciBwb3NzaWJsZVxyXG4gICAgICAgIC8vIHRyYW5zZm9ybWF0aW9uLCBzdGFydGluZyB3aXRoIGEgdGVtcG9yYXJ5IHJvb3Qgb2JqZWN0IHRoYXQgaG9sZHMgdGhlIHJlc3VsdFxyXG4gICAgICAgIC8vIGluIGFuIGVtcHR5IGtleS4gSWYgdGhlcmUgaXMgbm90IGEgcmV2aXZlciBmdW5jdGlvbiwgd2Ugc2ltcGx5IHJldHVybiB0aGVcclxuICAgICAgICAvLyByZXN1bHQuXHJcblxyXG4gICAgICAgIHJldHVybiB0eXBlb2YgcmV2aXZlciA9PT0gJ2Z1bmN0aW9uJyA/IChmdW5jdGlvbiB3YWxrKGhvbGRlciwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBrLCB2LCB2YWx1ZSA9IGhvbGRlcltrZXldO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHdhbGsodmFsdWUsIGspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtrXSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsdWVba107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJldml2ZXIuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0gKHsgJyc6IHJlc3VsdCB9LCAnJykpIDogcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBlcnJvcihtOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBDYWxsIGVycm9yIHdoZW4gc29tZXRoaW5nIGlzIHdyb25nLlxyXG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBTeW50YXhFcnJvcigpO1xyXG4gICAgICAgIGVycm9yLm1lc3NhZ2UgPSBtO1xyXG4gICAgICAgIGVycm9yW1wiYXRcIl0gPSB0aGlzLmF0O1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBuZXh0KGM6IGFueSA9IG51bGwpIHtcclxuICAgICAgICAvLyBJZiBhIGMgcGFyYW1ldGVyIGlzIHByb3ZpZGVkLCB2ZXJpZnkgdGhhdCBpdCBtYXRjaGVzIHRoZSBjdXJyZW50IGNoYXJhY3Rlci5cclxuICAgICAgICBpZiAoYyAmJiBjICE9PSB0aGlzLmNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJFeHBlY3RlZCAnXCIgKyBjICsgXCInIGluc3RlYWQgb2YgJ1wiICsgdGhpcy5jaCArIFwiJ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gR2V0IHRoZSB0aGlzLm5leHQgY2hhcmFjdGVyLiBXaGVuIHRoZXJlIGFyZSBubyBtb3JlIGNoYXJhY3RlcnMsXHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBlbXB0eSBzdHJpbmcuXHJcbiAgICAgICAgdGhpcy5jaCA9IHRoaXMuY2hhcnRBdCgpO1xyXG4gICAgICAgIHRoaXMuYXQgKz0gMTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcGVlaygpIHtcclxuICAgICAgICAvLyBHZXQgdGhlIHRoaXMubmV4dCBjaGFyYWN0ZXIgd2l0aG91dCBjb25zdW1pbmcgaXQgb3JcclxuICAgICAgICAvLyBhc3NpZ25pbmcgaXQgdG8gdGhlIHRoaXMuY2ggdmFyYWlibGUuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcnRBdCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjaGFydEF0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVuZEF0ID4gLTEgJiYgdGhpcy5hdCA+PSB0aGlzLmVuZEF0KSByZXR1cm4gJyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dC5jaGFyQXQodGhpcy5hdCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlkZW50aWZpZXIoKSB7XHJcbiAgICAgICAgLy8gUGFyc2UgYW4gaWRlbnRpZmllci4gTm9ybWFsbHksIHJlc2VydmVkIHdvcmRzIGFyZSBkaXNhbGxvd2VkIGhlcmUsIGJ1dCB3ZVxyXG4gICAgICAgIC8vIG9ubHkgdXNlIHRoaXMgZm9yIHVucXVvdGVkIG9iamVjdCBrZXlzLCB3aGVyZSByZXNlcnZlZCB3b3JkcyBhcmUgYWxsb3dlZCxcclxuICAgICAgICAvLyBzbyB3ZSBkb24ndCBjaGVjayBmb3IgdGhvc2UgaGVyZS4gUmVmZXJlbmNlczpcclxuICAgICAgICAvLyAtIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDcuNlxyXG4gICAgICAgIC8vIC0gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vQ29yZV9KYXZhU2NyaXB0XzEuNV9HdWlkZS9Db3JlX0xhbmd1YWdlX0ZlYXR1cmVzI1ZhcmlhYmxlc1xyXG4gICAgICAgIC8vIC0gaHR0cDovL2RvY3N0b3JlLm1pay51YS9vcmVsbHkvd2VicHJvZy9qc2NyaXB0L2NoMDJfMDcuaHRtXHJcbiAgICAgICAgLy8gVE9ETyBJZGVudGlmaWVycyBjYW4gaGF2ZSBVbmljb2RlIFwibGV0dGVyc1wiIGluIHRoZW07IGFkZCBzdXBwb3J0IGZvciB0aG9zZS5cclxuICAgICAgICB2YXIga2V5ID0gdGhpcy5jaDtcclxuXHJcbiAgICAgICAgLy8gSWRlbnRpZmllcnMgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLCBfIG9yICQuXHJcbiAgICAgICAgaWYgKCh0aGlzLmNoICE9PSAnXycgJiYgdGhpcy5jaCAhPT0gJyQnKSAmJlxyXG4gICAgICAgICAgICAodGhpcy5jaCA8ICdhJyB8fCB0aGlzLmNoID4gJ3onKSAmJlxyXG4gICAgICAgICAgICAodGhpcy5jaCA8ICdBJyB8fCB0aGlzLmNoID4gJ1onKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiQmFkIGlkZW50aWZpZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdWJzZXF1ZW50IGNoYXJhY3RlcnMgY2FuIGNvbnRhaW4gZGlnaXRzLlxyXG4gICAgICAgIHdoaWxlICh0aGlzLm5leHQoKSAmJiAoXHJcbiAgICAgICAgdGhpcy5jaCA9PT0gJ18nIHx8IHRoaXMuY2ggPT09ICckJyB8fFxyXG4gICAgICAgICh0aGlzLmNoID49ICdhJyAmJiB0aGlzLmNoIDw9ICd6JykgfHxcclxuICAgICAgICAodGhpcy5jaCA+PSAnQScgJiYgdGhpcy5jaCA8PSAnWicpIHx8XHJcbiAgICAgICAgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSkpIHtcclxuICAgICAgICAgICAga2V5ICs9IHRoaXMuY2g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBudW1iZXIoKSB7XHJcblxyXG4gICAgICAgIC8vIFBhcnNlIGEgbnVtYmVyIHZhbHVlLlxyXG5cclxuICAgICAgICB2YXIgbnVtYmVyLFxyXG4gICAgICAgICAgICBzaWduID0gJycsXHJcbiAgICAgICAgICAgIHN0cmluZyA9ICcnLFxyXG4gICAgICAgICAgICBiYXNlID0gMTA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnLScgfHwgdGhpcy5jaCA9PT0gJysnKSB7XHJcbiAgICAgICAgICAgIHNpZ24gPSB0aGlzLmNoO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQodGhpcy5jaCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdXBwb3J0IGZvciBJbmZpbml0eSAoY291bGQgdHdlYWsgdG8gYWxsb3cgb3RoZXIgd29yZHMpOlxyXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnSScpIHtcclxuICAgICAgICAgICAgbnVtYmVyID0gdGhpcy53b3JkKCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnbnVtYmVyJyB8fCBpc05hTihudW1iZXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdVbmV4cGVjdGVkIHdvcmQgZm9yIG51bWJlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoc2lnbiA9PT0gJy0nKSA/IC1udW1iZXIgOiBudW1iZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdXBwb3J0IGZvciBOYU5cclxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ04nKSB7XHJcbiAgICAgICAgICAgIG51bWJlciA9IHRoaXMud29yZCgpO1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKG51bWJlcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ2V4cGVjdGVkIHdvcmQgdG8gYmUgTmFOJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWdub3JlIHNpZ24gYXMgLU5hTiBhbHNvIGlzIE5hTlxyXG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcwJykge1xyXG4gICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAneCcgfHwgdGhpcy5jaCA9PT0gJ1gnKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgYmFzZSA9IDE2O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdPY3RhbCBsaXRlcmFsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoYmFzZSkge1xyXG4gICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9ICcuJztcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5uZXh0KCkgJiYgdGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdlJyB8fCB0aGlzLmNoID09PSAnRScpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy0nIHx8IHRoaXMuY2ggPT09ICcrJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScgfHwgdGhpcy5jaCA+PSAnQScgJiYgdGhpcy5jaCA8PSAnRicgfHwgdGhpcy5jaCA+PSAnYScgJiYgdGhpcy5jaCA8PSAnZicpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNpZ24gPT09ICctJykge1xyXG4gICAgICAgICAgICBudW1iZXIgPSAtc3RyaW5nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG51bWJlciA9ICtzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzRmluaXRlKG51bWJlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihcIkJhZCBudW1iZXJcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHN0cmluZygpIHtcclxuXHJcbiAgICAgICAgLy8gUGFyc2UgYSBzdHJpbmcgdmFsdWUuXHJcblxyXG4gICAgICAgIHZhciBoZXgsXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIHN0cmluZyA9ICcnLFxyXG4gICAgICAgICAgICBkZWxpbSwgICAgICAvLyBkb3VibGUgcXVvdGUgb3Igc2luZ2xlIHF1b3RlXHJcbiAgICAgICAgICAgIHVmZmZmO1xyXG5cclxuICAgICAgICAvLyBXaGVuIHBhcnNpbmcgZm9yIHN0cmluZyB2YWx1ZXMsIHdlIG11c3QgbG9vayBmb3IgJyBvciBcIiBhbmQgXFwgY2hhcmFjdGVycy5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdcIicgfHwgdGhpcy5jaCA9PT0gXCInXCIpIHtcclxuICAgICAgICAgICAgZGVsaW0gPSB0aGlzLmNoO1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSBkZWxpbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPT09ICdcXFxcJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAndScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWZmZmYgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXggPSBwYXJzZUludCh0aGlzLm5leHQoKSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0Zpbml0ZShoZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ZmZmZiA9IHVmZmZmICogMTYgKyBoZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodWZmZmYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaCA9PT0gJ1xccicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnXFxuJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBTdXJ2ZXlKU09ONS5lc2NhcGVlW3RoaXMuY2hdID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3VydmV5SlNPTjUuZXNjYXBlZVt0aGlzLmNoXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPT09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5lc2NhcGVkIG5ld2xpbmVzIGFyZSBpbnZhbGlkOyBzZWU6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FzZWVtay9qc29uNS9pc3N1ZXMvMjRcclxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIHRoaXMgZmVlbHMgc3BlY2lhbC1jYXNlZDsgYXJlIHRoZXJlIG90aGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW52YWxpZCB1bmVzY2FwZWQgY2hhcnM/XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgc3RyaW5nXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpbmxpbmVDb21tZW50KCkge1xyXG5cclxuICAgICAgICAvLyBTa2lwIGFuIGlubGluZSBjb21tZW50LCBhc3N1bWluZyB0aGlzIGlzIG9uZS4gVGhlIGN1cnJlbnQgY2hhcmFjdGVyIHNob3VsZFxyXG4gICAgICAgIC8vIGJlIHRoZSBzZWNvbmQgLyBjaGFyYWN0ZXIgaW4gdGhlIC8vIHBhaXIgdGhhdCBiZWdpbnMgdGhpcyBpbmxpbmUgY29tbWVudC5cclxuICAgICAgICAvLyBUbyBmaW5pc2ggdGhlIGlubGluZSBjb21tZW50LCB3ZSBsb29rIGZvciBhIG5ld2xpbmUgb3IgdGhlIGVuZCBvZiB0aGUgdGV4dC5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2ggIT09ICcvJykge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiTm90IGFuIGlubGluZSBjb21tZW50XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdcXG4nIHx8IHRoaXMuY2ggPT09ICdcXHInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuY2gpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBibG9ja0NvbW1lbnQoKSB7XHJcblxyXG4gICAgICAgIC8vIFNraXAgYSBibG9jayBjb21tZW50LCBhc3N1bWluZyB0aGlzIGlzIG9uZS4gVGhlIGN1cnJlbnQgY2hhcmFjdGVyIHNob3VsZCBiZVxyXG4gICAgICAgIC8vIHRoZSAqIGNoYXJhY3RlciBpbiB0aGUgLyogcGFpciB0aGF0IGJlZ2lucyB0aGlzIGJsb2NrIGNvbW1lbnQuXHJcbiAgICAgICAgLy8gVG8gZmluaXNoIHRoZSBibG9jayBjb21tZW50LCB3ZSBsb29rIGZvciBhbiBlbmRpbmcgKi8gcGFpciBvZiBjaGFyYWN0ZXJzLFxyXG4gICAgICAgIC8vIGJ1dCB3ZSBhbHNvIHdhdGNoIGZvciB0aGUgZW5kIG9mIHRleHQgYmVmb3JlIHRoZSBjb21tZW50IGlzIHRlcm1pbmF0ZWQuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoICE9PSAnKicpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihcIk5vdCBhIGJsb2NrIGNvbW1lbnRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaCA9PT0gJyonKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJyonKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnLycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoJy8nKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlICh0aGlzLmNoKTtcclxuXHJcbiAgICAgICAgdGhpcy5lcnJvcihcIlVudGVybWluYXRlZCBibG9jayBjb21tZW50XCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjb21tZW50KCkge1xyXG5cclxuICAgICAgICAvLyBTa2lwIGEgY29tbWVudCwgd2hldGhlciBpbmxpbmUgb3IgYmxvY2stbGV2ZWwsIGFzc3VtaW5nIHRoaXMgaXMgb25lLlxyXG4gICAgICAgIC8vIENvbW1lbnRzIGFsd2F5cyBiZWdpbiB3aXRoIGEgLyBjaGFyYWN0ZXIuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoICE9PSAnLycpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihcIk5vdCBhIGNvbW1lbnRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5leHQoJy8nKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcvJykge1xyXG4gICAgICAgICAgICB0aGlzLmlubGluZUNvbW1lbnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPT09ICcqJykge1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrQ29tbWVudCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJVbnJlY29nbml6ZWQgY29tbWVudFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHdoaXRlKCkge1xyXG5cclxuICAgICAgICAvLyBTa2lwIHdoaXRlc3BhY2UgYW5kIGNvbW1lbnRzLlxyXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSdyZSBkZXRlY3RpbmcgY29tbWVudHMgYnkgb25seSBhIHNpbmdsZSAvIGNoYXJhY3Rlci5cclxuICAgICAgICAvLyBUaGlzIHdvcmtzIHNpbmNlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgYXJlIG5vdCB2YWxpZCBKU09OKDUpLCBidXQgdGhpcyB3aWxsXHJcbiAgICAgICAgLy8gYnJlYWsgaWYgdGhlcmUgYXJlIG90aGVyIHZhbGlkIHZhbHVlcyB0aGF0IGJlZ2luIHdpdGggYSAvIGNoYXJhY3RlciFcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuY2gpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcvJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoU3VydmV5SlNPTjUud3MuaW5kZXhPZih0aGlzLmNoKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgd29yZCgpOiBhbnkge1xyXG5cclxuICAgICAgICAvLyB0cnVlLCBmYWxzZSwgb3IgbnVsbC5cclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmNoKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3QnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3InKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgndScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdlJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgY2FzZSAnZic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2YnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnYScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdsJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3MnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnZScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd1Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2wnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNhc2UgJ0knOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdJJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ24nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnZicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdpJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ24nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnaScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3knKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBJbmZpbml0eTtcclxuICAgICAgICAgICAgY2FzZSAnTic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ04nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnYScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdOJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmFOO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVycm9yKFwiVW5leHBlY3RlZCAnXCIgKyB0aGlzLmNoICsgXCInXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhcnJheSgpIHtcclxuXHJcbiAgICAgICAgLy8gUGFyc2UgYW4gYXJyYXkgdmFsdWUuXHJcblxyXG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ1snKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgnWycpO1xyXG4gICAgICAgICAgICB0aGlzLndoaXRlKCk7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ10nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCddJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5OyAgIC8vIFBvdGVudGlhbGx5IGVtcHR5IGFycmF5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBFUzUgYWxsb3dzIG9taXR0aW5nIGVsZW1lbnRzIGluIGFycmF5cywgZS5nLiBbLF0gYW5kXHJcbiAgICAgICAgICAgICAgICAvLyBbLG51bGxdLiBXZSBkb24ndCBhbGxvdyB0aGlzIGluIEpTT041LlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJNaXNzaW5nIGFycmF5IGVsZW1lbnRcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2godGhpcy52YWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gY29tbWEgYWZ0ZXIgdGhpcyB2YWx1ZSwgdGhpcyBuZWVkcyB0b1xyXG4gICAgICAgICAgICAgICAgLy8gYmUgdGhlIGVuZCBvZiB0aGUgYXJyYXkuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCAhPT0gJywnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCddJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lcnJvcihcIkJhZCBhcnJheVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb2JqZWN0KCkge1xyXG5cclxuICAgICAgICAvLyBQYXJzZSBhbiBvYmplY3QgdmFsdWUuXHJcblxyXG4gICAgICAgIHZhciBrZXksXHJcbiAgICAgICAgICAgIHN0YXJ0LFxyXG4gICAgICAgICAgICBpc0ZpcnN0UHJvcGVydHkgPSB0cnVlLFxyXG4gICAgICAgICAgICBvYmplY3QgPSB7fTtcclxuICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAwKSB7XHJcbiAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdID0geyBzdGFydDogdGhpcy5hdCAtIDEgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICd7Jykge1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoJ3snKTtcclxuICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xyXG4gICAgICAgICAgICBzdGFydCA9IHRoaXMuYXQgLSAxO1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICd9Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV0uZW5kID0gc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnfScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7ICAgLy8gUG90ZW50aWFsbHkgZW1wdHkgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gS2V5cyBjYW4gYmUgdW5xdW90ZWQuIElmIHRoZXkgYXJlLCB0aGV5IG5lZWQgdG8gYmVcclxuICAgICAgICAgICAgICAgIC8vIHZhbGlkIEpTIGlkZW50aWZpZXJzLlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdcIicgfHwgdGhpcy5jaCA9PT0gXCInXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XSA9IHsgc3RhcnQ6IHN0YXJ0LCB2YWx1ZVN0YXJ0OiB0aGlzLmF0IH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJzonKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gdGhpcy52YWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5hdCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS52YWx1ZUVuZCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0uZW5kID0gc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGNvbW1hIGFmdGVyIHRoaXMgcGFpciwgdGhpcyBuZWVkcyB0byBiZVxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGVuZCBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggIT09ICcsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS52YWx1ZUVuZC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLmVuZC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdLmVuZCA9IHRoaXMuYXQgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ30nKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0udmFsdWVFbmQtLTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRmlyc3RQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLmVuZC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaXNGaXJzdFByb3BlcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lcnJvcihcIkJhZCBvYmplY3RcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHZhbHVlKCk6IGFueSB7XHJcblxyXG4gICAgICAgIC8vIFBhcnNlIGEgSlNPTiB2YWx1ZS4gSXQgY291bGQgYmUgYW4gb2JqZWN0LCBhbiBhcnJheSwgYSBzdHJpbmcsIGEgbnVtYmVyLFxyXG4gICAgICAgIC8vIG9yIGEgd29yZC5cclxuXHJcbiAgICAgICAgdGhpcy53aGl0ZSgpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jaCkge1xyXG4gICAgICAgICAgICBjYXNlICd7JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9iamVjdCgpO1xyXG4gICAgICAgICAgICBjYXNlICdbJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFycmF5KCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1wiJzpcclxuICAgICAgICAgICAgY2FzZSBcIidcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZygpO1xyXG4gICAgICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyKCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScgPyB0aGlzLm51bWJlcigpIDogdGhpcy53b3JkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVwbGFjZXI6IGFueTtcclxuICAgIHByaXZhdGUgaW5kZW50U3RyOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIG9ialN0YWNrO1xyXG5cclxuICAgIHB1YmxpYyBzdHJpbmdpZnkob2JqOiBhbnksIHJlcGxhY2VyOiBhbnkgPSBudWxsLCBzcGFjZTogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGlmIChyZXBsYWNlciAmJiAodHlwZW9mIChyZXBsYWNlcikgIT09IFwiZnVuY3Rpb25cIiAmJiAhdGhpcy5pc0FycmF5KHJlcGxhY2VyKSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXBsYWNlciBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlciA9IHJlcGxhY2VyO1xyXG4gICAgICAgIHRoaXMuaW5kZW50U3RyID0gdGhpcy5nZXRJbmRlbnQoc3BhY2UpO1xyXG4gICAgICAgIHRoaXMub2JqU3RhY2sgPSBbXTtcclxuICAgICAgICAvLyBzcGVjaWFsIGNhc2UuLi53aGVuIHVuZGVmaW5lZCBpcyB1c2VkIGluc2lkZSBvZlxyXG4gICAgICAgIC8vIGEgY29tcG91bmQgb2JqZWN0L2FycmF5LCByZXR1cm4gbnVsbC5cclxuICAgICAgICAvLyBidXQgd2hlbiB0b3AtbGV2ZWwsIHJldHVybiB1bmRlZmluZWRcclxuICAgICAgICB2YXIgdG9wTGV2ZWxIb2xkZXIgPSB7IFwiXCI6IG9iaiB9O1xyXG4gICAgICAgIGlmIChvYmogPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZXBsYWNlZFZhbHVlT3JVbmRlZmluZWQodG9wTGV2ZWxIb2xkZXIsICcnLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdHJpbmdpZnkodG9wTGV2ZWxIb2xkZXIsICcnLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0SW5kZW50KHNwYWNlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChzcGFjZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNwYWNlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3BhY2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwYWNlID09PSBcIm51bWJlclwiICYmIHNwYWNlID49IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VJbmRlbnQoXCIgXCIsIHNwYWNlLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0UmVwbGFjZWRWYWx1ZU9yVW5kZWZpbmVkKGhvbGRlcjogYW55LCBrZXk6IGFueSwgaXNUb3BMZXZlbDogYm9vbGVhbikge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGhvbGRlcltrZXldO1xyXG5cclxuICAgICAgICAvLyBSZXBsYWNlIHRoZSB2YWx1ZSB3aXRoIGl0cyB0b0pTT04gdmFsdWUgZmlyc3QsIGlmIHBvc3NpYmxlXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLnRvSlNPTiAmJiB0eXBlb2YgdmFsdWUudG9KU09OID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0pTT04oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSB1c2VyLXN1cHBsaWVkIHJlcGxhY2VyIGlmIGEgZnVuY3Rpb24sIGNhbGwgaXQuIElmIGl0J3MgYW4gYXJyYXksIGNoZWNrIG9iamVjdHMnIHN0cmluZyBrZXlzIGZvclxyXG4gICAgICAgIC8vIHByZXNlbmNlIGluIHRoZSBhcnJheSAocmVtb3ZpbmcgdGhlIGtleS92YWx1ZSBwYWlyIGZyb20gdGhlIHJlc3VsdGluZyBKU09OIGlmIHRoZSBrZXkgaXMgbWlzc2luZykuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5yZXBsYWNlcikgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlci5jYWxsKGhvbGRlciwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlcGxhY2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1RvcExldmVsIHx8IHRoaXMuaXNBcnJheShob2xkZXIpIHx8IHRoaXMucmVwbGFjZXIuaW5kZXhPZihrZXkpID49IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNXb3JkQ2hhcihjaGFyOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ3onKSB8fFxyXG4gICAgICAgICAgICAoY2hhciA+PSAnQScgJiYgY2hhciA8PSAnWicpIHx8XHJcbiAgICAgICAgICAgIChjaGFyID49ICcwJyAmJiBjaGFyIDw9ICc5JykgfHxcclxuICAgICAgICAgICAgY2hhciA9PT0gJ18nIHx8IGNoYXIgPT09ICckJztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzV29yZFN0YXJ0KGNoYXI6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoY2hhciA+PSAnYScgJiYgY2hhciA8PSAneicpIHx8XHJcbiAgICAgICAgICAgIChjaGFyID49ICdBJyAmJiBjaGFyIDw9ICdaJykgfHxcclxuICAgICAgICAgICAgY2hhciA9PT0gJ18nIHx8IGNoYXIgPT09ICckJztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzV29yZChrZXk6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc1dvcmRTdGFydChrZXlbMF0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGkgPSAxLCBsZW5ndGggPSBrZXkubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1dvcmRDaGFyKGtleVtpXSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gcG9seWZpbGxzXHJcbiAgICBwcml2YXRlIGlzQXJyYXkob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0RhdGUob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzTmFOKHZhbDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmIHZhbCAhPT0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tGb3JDaXJjdWxhcihvYmo6IGFueSkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vYmpTdGFjay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vYmpTdGFja1tpXSA9PT0gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ29udmVydGluZyBjaXJjdWxhciBzdHJ1Y3R1cmUgdG8gSlNPTlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgbWFrZUluZGVudChzdHI6IHN0cmluZywgbnVtOiBudW1iZXIsIG5vTmV3TGluZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKCFzdHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGluZGVudGF0aW9uIG5vIG1vcmUgdGhhbiAxMCBjaGFyc1xyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCAxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaW5kZW50ID0gbm9OZXdMaW5lID8gXCJcIiA6IFwiXFxuXCI7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICAgICAgICBpbmRlbnQgKz0gc3RyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluZGVudDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb3BpZWQgZnJvbSBDcm9rZm9yZCdzIGltcGxlbWVudGF0aW9uIG9mIEpTT05cclxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZG91Z2xhc2Nyb2NrZm9yZC9KU09OLWpzL2Jsb2IvZTM5ZGI0YjdlNjI0OWYwNGExOTVlN2RkMDg0MGU2MTBjYzllOTQxZS9qc29uMi5qcyNMMTk1XHJcbiAgICAvLyBCZWdpblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3ggPSAvW1xcdTAwMDBcXHUwMGFkXFx1MDYwMC1cXHUwNjA0XFx1MDcwZlxcdTE3YjRcXHUxN2I1XFx1MjAwYy1cXHUyMDBmXFx1MjAyOC1cXHUyMDJmXFx1MjA2MC1cXHUyMDZmXFx1ZmVmZlxcdWZmZjAtXFx1ZmZmZl0vZztcclxuICAgIHByaXZhdGUgc3RhdGljIGVzY2FwYWJsZSA9IC9bXFxcXFxcXCJcXHgwMC1cXHgxZlxceDdmLVxceDlmXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2c7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtZXRhID0geyAvLyB0YWJsZSBvZiBjaGFyYWN0ZXIgc3Vic3RpdHV0aW9uc1xyXG4gICAgICAgICdcXGInOiAnXFxcXGInLFxyXG4gICAgICAgICdcXHQnOiAnXFxcXHQnLFxyXG4gICAgICAgICdcXG4nOiAnXFxcXG4nLFxyXG4gICAgICAgICdcXGYnOiAnXFxcXGYnLFxyXG4gICAgICAgICdcXHInOiAnXFxcXHInLFxyXG4gICAgICAgICdcIic6ICdcXFxcXCInLFxyXG4gICAgICAgICdcXFxcJzogJ1xcXFxcXFxcJ1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgZXNjYXBlU3RyaW5nKHN0cjogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBzdHJpbmcgY29udGFpbnMgbm8gY29udHJvbCBjaGFyYWN0ZXJzLCBubyBxdW90ZSBjaGFyYWN0ZXJzLCBhbmQgbm9cclxuICAgICAgICAvLyBiYWNrc2xhc2ggY2hhcmFjdGVycywgdGhlbiB3ZSBjYW4gc2FmZWx5IHNsYXAgc29tZSBxdW90ZXMgYXJvdW5kIGl0LlxyXG4gICAgICAgIC8vIE90aGVyd2lzZSB3ZSBtdXN0IGFsc28gcmVwbGFjZSB0aGUgb2ZmZW5kaW5nIGNoYXJhY3RlcnMgd2l0aCBzYWZlIGVzY2FwZVxyXG4gICAgICAgIC8vIHNlcXVlbmNlcy5cclxuICAgICAgICBTdXJ2ZXlKU09ONS5lc2NhcGFibGUubGFzdEluZGV4ID0gMDtcclxuICAgICAgICByZXR1cm4gU3VydmV5SlNPTjUuZXNjYXBhYmxlLnRlc3Qoc3RyKSA/ICdcIicgKyBzdHIucmVwbGFjZShTdXJ2ZXlKU09ONS5lc2NhcGFibGUsIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gU3VydmV5SlNPTjUubWV0YVthXTtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBjID09PSAnc3RyaW5nJyA/XHJcbiAgICAgICAgICAgICAgICBjIDpcclxuICAgICAgICAgICAgJ1xcXFx1JyArICgnMDAwMCcgKyBhLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtNCk7XHJcbiAgICAgICAgfSkgKyAnXCInIDogJ1wiJyArIHN0ciArICdcIic7XHJcbiAgICB9XHJcbiAgICAvLyBFbmRcclxuXHJcbiAgICBwcml2YXRlIGludGVybmFsU3RyaW5naWZ5KGhvbGRlcjogYW55LCBrZXk6IGFueSwgaXNUb3BMZXZlbDogYm9vbGVhbikge1xyXG4gICAgICAgIHZhciBidWZmZXIsIHJlcztcclxuXHJcbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgdmFsdWUsIGlmIG5lY2Vzc2FyeVxyXG4gICAgICAgIHZhciBvYmpfcGFydCA9IHRoaXMuZ2V0UmVwbGFjZWRWYWx1ZU9yVW5kZWZpbmVkKGhvbGRlciwga2V5LCBpc1RvcExldmVsKTtcclxuXHJcbiAgICAgICAgaWYgKG9ial9wYXJ0ICYmICF0aGlzLmlzRGF0ZShvYmpfcGFydCkpIHtcclxuICAgICAgICAgICAgLy8gdW5ib3ggb2JqZWN0c1xyXG4gICAgICAgICAgICAvLyBkb24ndCB1bmJveCBkYXRlcywgc2luY2Ugd2lsbCB0dXJuIGl0IGludG8gbnVtYmVyXHJcbiAgICAgICAgICAgIG9ial9wYXJ0ID0gb2JqX3BhcnQudmFsdWVPZigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBvYmpfcGFydCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ial9wYXJ0LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4ob2JqX3BhcnQpIHx8ICFpc0Zpbml0ZShvYmpfcGFydCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJudWxsXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqX3BhcnQudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVzY2FwZVN0cmluZyhvYmpfcGFydC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcclxuICAgICAgICAgICAgICAgIGlmIChvYmpfcGFydCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm51bGxcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FycmF5KG9ial9wYXJ0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JDaXJjdWxhcihvYmpfcGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gXCJbXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGFjay5wdXNoKG9ial9wYXJ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpfcGFydC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSB0aGlzLmludGVybmFsU3RyaW5naWZ5KG9ial9wYXJ0LCBpLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLm1ha2VJbmRlbnQodGhpcy5pbmRlbnRTdHIsIHRoaXMub2JqU3RhY2subGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCJudWxsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgb2JqX3BhcnQubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IFwiLFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZW50U3RyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLm1ha2VJbmRlbnQodGhpcy5pbmRlbnRTdHIsIHRoaXMub2JqU3RhY2subGVuZ3RoLCB0cnVlKSArIFwiXVwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9yQ2lyY3VsYXIob2JqX3BhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IFwie1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBub25FbXB0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqU3RhY2sucHVzaChvYmpfcGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmpfcGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqX3BhcnQuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuaW50ZXJuYWxTdHJpbmdpZnkob2JqX3BhcnQsIHByb3AsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9wTGV2ZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5tYWtlSW5kZW50KHRoaXMuaW5kZW50U3RyLCB0aGlzLm9ialN0YWNrLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uRW1wdHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wS2V5ID0gdGhpcy5pc1dvcmQocHJvcCkgPyBwcm9wIDogdGhpcy5lc2NhcGVTdHJpbmcocHJvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IHByb3BLZXkgKyBcIjpcIiArICh0aGlzLmluZGVudFN0ciA/ICcgJyA6ICcnKSArIHZhbHVlICsgXCIsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9uRW1wdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gYnVmZmVyLnN1YnN0cmluZygwLCBidWZmZXIubGVuZ3RoIC0gMSkgKyB0aGlzLm1ha2VJbmRlbnQodGhpcy5pbmRlbnRTdHIsIHRoaXMub2JqU3RhY2subGVuZ3RoKSArIFwifVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9ICd7fSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9ucyBhbmQgdW5kZWZpbmVkIHNob3VsZCBiZSBpZ25vcmVkXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc29uNS50cyIsImltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BIZWxwZXIge1xyXG4gICAgc3RhdGljIGRhdGFTdGFydDogc3RyaW5nID0gXCJzdXJ2ZXlqcyxcIjtcclxuICAgIHN0YXRpYyBkcmFnRGF0YTogYW55ID0ge3RleHQ6IFwiXCIsIGpzb246IG51bGwgfTtcclxuICAgIHN0YXRpYyBwcmV2RXZlbnQgPSB7IHF1ZXN0aW9uOiBudWxsLCB4OiAtMSwgeTogLTEgfTtcclxuICAgIHByaXZhdGUgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnk7XHJcbiAgICBwcml2YXRlIHNjcm9sbGFibGVFbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNvdXJjZUluZGV4OiBudW1iZXIgPSAtMTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRhOiBTdXJ2ZXkuSVN1cnZleSwgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnksIHNjcm9sbGFibGVFbE5hbWU6IHN0cmluZyA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLm9uTW9kaWZpZWRDYWxsYmFjayA9IG9uTW9kaWZpZWRDYWxsYmFjaztcclxuICAgICAgICB0aGlzLnNjcm9sbGFibGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoKHNjcm9sbGFibGVFbE5hbWUgPyBzY3JvbGxhYmxlRWxOYW1lIDogXCJzY3JvbGxhYmxlRGl2XCIpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgc3VydmV5KCk6IFN1cnZleS5TdXJ2ZXkgeyByZXR1cm4gPFN1cnZleS5TdXJ2ZXk+dGhpcy5kYXRhOyB9XHJcbiAgICBwdWJsaWMgc3RhcnREcmFnTmV3UXVlc3Rpb24oZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb25UeXBlOiBzdHJpbmcsIHF1ZXN0aW9uTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlRGF0YShldmVudCwgcXVlc3Rpb25UeXBlLCBxdWVzdGlvbk5hbWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXJ0RHJhZ1F1ZXN0aW9uKGV2ZW50OiBEcmFnRXZlbnQsIHF1ZXN0aW9uTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlRGF0YShldmVudCwgbnVsbCwgcXVlc3Rpb25OYW1lKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGFydERyYWdUb29sYm94SXRlbShldmVudDogRHJhZ0V2ZW50LCBxdWVzdGlvbk5hbWU6IHN0cmluZywgcXVlc3Rpb25Kc29uOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnByZXBhcmVEYXRhKGV2ZW50LCBudWxsLCBxdWVzdGlvbk5hbWUsIHF1ZXN0aW9uSnNvbik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaXNTdXJ2ZXlEcmFnZ2luZyhldmVudDogRHJhZ0V2ZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFldmVudCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5nZXREYXRhKGV2ZW50KS50ZXh0O1xyXG4gICAgICAgIHJldHVybiBkYXRhICYmIGRhdGEuaW5kZXhPZihEcmFnRHJvcEhlbHBlci5kYXRhU3RhcnQpID09IDA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZG9EcmFnRHJvcE92ZXIoZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcclxuICAgICAgICBldmVudCA9IHRoaXMuZ2V0RXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGxZKGV2ZW50KTtcclxuICAgICAgICB2YXIgdGFyZ2V0UXVlc3Rpb24gPSBEcmFnRHJvcEhlbHBlci5kcmFnRGF0YS50YXJnZXRRdWVzdGlvbjtcclxuICAgICAgICBpZiAoIXF1ZXN0aW9uIHx8IHF1ZXN0aW9uID09IHRhcmdldFF1ZXN0aW9uIHx8ICF0aGlzLmlzU3VydmV5RHJhZ2dpbmcoZXZlbnQpIHx8IHRoaXMuaXNTYW1lUGxhY2UoZXZlbnQsIHF1ZXN0aW9uKSkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0UXVlc3Rpb25JbmRleChldmVudCwgcXVlc3Rpb24pO1xyXG4gICAgICAgIGlmICh0aGlzLnNvdXJjZUluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc291cmNlSW5kZXggPT0gaW5kZXggfHwgdGhpcy5zb3VyY2VJbmRleCArIDEgPT0gaW5kZXgpICBpbmRleCA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZVtcImtvRHJhZ2dpbmdcIl0oaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGVuZCgpIHtcclxuICAgICAgICB0aGlzLmlzU2Nyb2xsU3RvcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRJc0RyYWdnaW5nU291cmNlKHRoaXMuc3VydmV5W1wia29EcmFnZ2luZ1NvdXJjZVwiXSgpLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zdXJ2ZXlbXCJrb0RyYWdnaW5nU291cmNlXCJdKG51bGwpO1xyXG4gICAgICAgIHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlW1wia29EcmFnZ2luZ1wiXSgtMSk7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VJbmRleCA9IC0xO1xyXG4gICAgICAgIHRoaXMuY2xlYXJEYXRhKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZG9Ecm9wKGV2ZW50OiBEcmFnRXZlbnQsIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlID0gbnVsbCkge1xyXG4gICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3VydmV5RHJhZ2dpbmcoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlW1wia29EcmFnZ2luZ1wiXSgpO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0UXVlc3Rpb24gPSBEcmFnRHJvcEhlbHBlci5kcmFnRGF0YS50YXJnZXRRdWVzdGlvbjtcclxuICAgICAgICAgICAgaWYgKHRhcmdldFF1ZXN0aW9uICYmIGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvbGRJbmRleCA9IHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlLnF1ZXN0aW9ucy5pbmRleE9mKHRhcmdldFF1ZXN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChvbGRJbmRleCA+IC0xICYmIG9sZEluZGV4IDwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlUXVlc3Rpb25Ubyh0YXJnZXRRdWVzdGlvbiwgaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZG9MZWF2ZVBhZ2UoZXZlbnQ6IERyYWdFdmVudCkge1xyXG4gICAgICAgIGV2ZW50ID0gdGhpcy5nZXRFdmVudChldmVudCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbGFibGVFbGVtZW50KSByZXR1cm47XHJcbiAgICAgICAgaWYgKGV2ZW50LmNsaWVudFggPD0gMCB8fCBldmVudC5jbGllbnRZIDw9IDAgfHxcclxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA+PSB0aGlzLnNjcm9sbGFibGVFbGVtZW50Lm9mZnNldFdpZHRoIHx8IGV2ZW50LmNsaWVudFkgPj0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudC5vZmZzZXRIZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2VbXCJrb0RyYWdnaW5nXCJdKC0xKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2Nyb2xsVG9FbGVtZW50KGVsOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxhYmxlRWxlbWVudCB8fCAhZWwpIHJldHVybjtcclxuICAgICAgICBlbC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNyZWF0ZVRhcmdldFF1ZXN0aW9uKHF1ZXN0aW9uVHlwZTogc3RyaW5nLCBxdWVzdGlvbk5hbWU6IHN0cmluZywganNvbjogYW55KTogU3VydmV5LlF1ZXN0aW9uQmFzZSB7XHJcbiAgICAgICAgaWYgKCFxdWVzdGlvbk5hbWUpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHZhciB0YXJnZXRRdWVzdGlvbiA9IDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPnRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKHF1ZXN0aW9uTmFtZSk7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VJbmRleCA9IC0xO1xyXG4gICAgICAgIGlmICh0YXJnZXRRdWVzdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZUluZGV4ID0gdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UucXVlc3Rpb25zLmluZGV4T2YodGFyZ2V0UXVlc3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRhcmdldFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChqc29uKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRRdWVzdGlvbiA9IFN1cnZleS5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24oanNvbltcInR5cGVcIl0sIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9PYmplY3QoanNvbiwgdGFyZ2V0UXVlc3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0UXVlc3Rpb24ubmFtZSA9IHF1ZXN0aW9uTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRhcmdldFF1ZXN0aW9uICYmIHF1ZXN0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0UXVlc3Rpb24gPSBTdXJ2ZXkuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLmNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uVHlwZSwgcXVlc3Rpb25OYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YXJnZXRRdWVzdGlvbi5zZXREYXRhKHRoaXMuc3VydmV5KTtcclxuICAgICAgICAgICAgdGFyZ2V0UXVlc3Rpb24ucmVuZGVyV2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRJc0RyYWdnaW5nU291cmNlKHRhcmdldFF1ZXN0aW9uLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0UXVlc3Rpb247XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldElzRHJhZ2dpbmdTb3VyY2UocXVlc3Rpb246IGFueSwgdmFsOiBhbnkpIHtcclxuICAgICAgICBpZiAocXVlc3Rpb24gJiYgcXVlc3Rpb25bXCJrb0lzRHJhZ2dpbmdTb3VyY2VcIl0pIHF1ZXN0aW9uW1wia29Jc0RyYWdnaW5nU291cmNlXCJdKHZhbCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFF1ZXN0aW9uSW5kZXgoZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcclxuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlO1xyXG4gICAgICAgIGlmICghcXVlc3Rpb24pIHJldHVybiBwYWdlLnF1ZXN0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gcGFnZS5xdWVzdGlvbnMuaW5kZXhPZihxdWVzdGlvbik7XHJcbiAgICAgICAgZXZlbnQgPSB0aGlzLmdldEV2ZW50KGV2ZW50KTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gPG51bWJlcj5ldmVudC5jdXJyZW50VGFyZ2V0W1wiY2xpZW50SGVpZ2h0XCJdO1xyXG4gICAgICAgIHZhciB5ID0gZXZlbnQub2Zmc2V0WTtcclxuICAgICAgICBpZiAoZXZlbnQuaGFzT3duUHJvcGVydHkoJ2xheWVyWCcpKSB7XHJcbiAgICAgICAgICAgIHkgPSBldmVudC5sYXllclkgLSA8bnVtYmVyPmV2ZW50LmN1cnJlbnRUYXJnZXRbXCJvZmZzZXRUb3BcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh5ID4gaGVpZ2h0IC8gMikgaW5kZXgrKztcclxuICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzU2FtZVBsYWNlKGV2ZW50OiBEcmFnRXZlbnQsIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHByZXYgPSBEcmFnRHJvcEhlbHBlci5wcmV2RXZlbnQ7XHJcbiAgICAgICAgaWYgKHByZXYucXVlc3Rpb24gIT0gcXVlc3Rpb24gfHwgTWF0aC5hYnMoZXZlbnQuY2xpZW50WCAtIHByZXYueCkgPiA1IHx8IE1hdGguYWJzKGV2ZW50LmNsaWVudFkgLSBwcmV2LnkpID4gNSkge1xyXG4gICAgICAgICAgICBwcmV2LnF1ZXN0aW9uID0gcXVlc3Rpb247XHJcbiAgICAgICAgICAgIHByZXYueCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgICAgIHByZXYueSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzU2Nyb2xsU3RvcDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBTY3JvbGxEZWxheTogbnVtYmVyID0gMzA7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBTY3JvbGxPZmZzZXQ6IG51bWJlciA9IDEwMDtcclxuICAgIHByaXZhdGUgY2hlY2tTY3JvbGxZKGU6IERyYWdFdmVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxhYmxlRWxlbWVudCkgcmV0dXJuO1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5nZXRTY3JvbGxhYmxlRWxlbWVudFBvc1koZSk7XHJcbiAgICAgICAgaWYgKHkgPCAwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1Njcm9sbFN0b3AgPSB0cnVlO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSA8bnVtYmVyPnRoaXMuc2Nyb2xsYWJsZUVsZW1lbnRbXCJjbGllbnRIZWlnaHRcIl07XHJcbiAgICAgICAgaWYgKHkgPCBEcmFnRHJvcEhlbHBlci5TY3JvbGxPZmZzZXQgJiYgeSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TY3JvbGxZKC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGhlaWdodCAtIHkgPCBEcmFnRHJvcEhlbHBlci5TY3JvbGxPZmZzZXQgJiYgaGVpZ2h0ID49IHkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1Njcm9sbFN0b3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kb1Njcm9sbFkoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkb1Njcm9sbFkoc3RlcDogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIGVsID0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudDtcclxuICAgICAgICB2YXIgc2Nyb2xsWSA9IGVsLnNjcm9sbFRvcCArIHN0ZXA7XHJcbiAgICAgICAgaWYgKHNjcm9sbFkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbC5zY3JvbGxUb3AgPSBzY3JvbGxZO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMuaXNTY3JvbGxTdG9wKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZWxmLmRvU2Nyb2xsWShzdGVwKSB9LCBEcmFnRHJvcEhlbHBlci5TY3JvbGxEZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRTY3JvbGxhYmxlRWxlbWVudFBvc1koZTogRHJhZ0V2ZW50KTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQgfHwgIWUuY3VycmVudFRhcmdldCkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiBlLm9mZnNldFkgKyA8bnVtYmVyPmUuY3VycmVudFRhcmdldFtcIm9mZnNldFRvcFwiXSAtIHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQub2Zmc2V0VG9wIC0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEV2ZW50KGV2ZW50OiBEcmFnRXZlbnQpOiBEcmFnRXZlbnQge1xyXG4gICAgICAgIHJldHVybiBldmVudFtcIm9yaWdpbmFsRXZlbnRcIl0gPyBldmVudFtcIm9yaWdpbmFsRXZlbnRcIl0gOiBldmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVRdWVzdGlvblRvKHRhcmdldFF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRhcmdldFF1ZXN0aW9uID09IG51bGwpIHJldHVybjtcclxuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LmdldFBhZ2VCeVF1ZXN0aW9uKHRhcmdldFF1ZXN0aW9uKTtcclxuICAgICAgICBpZiAocGFnZSA9PSB0aGlzLnN1cnZleS5jdXJyZW50UGFnZSAmJiBpbmRleCA9PSBwYWdlLnF1ZXN0aW9ucy5pbmRleE9mKHRhcmdldFF1ZXN0aW9uKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChwYWdlKSB7XHJcbiAgICAgICAgICAgIHBhZ2UucmVtb3ZlUXVlc3Rpb24odGFyZ2V0UXVlc3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZS5hZGRRdWVzdGlvbih0YXJnZXRRdWVzdGlvbiwgaW5kZXgpO1xyXG4gICAgICAgIGlmICh0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaykgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2soKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0RGF0YUluZm8oZXZlbnQ6IERyYWdFdmVudCk6IGFueSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldERhdGEoZXZlbnQpO1xyXG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgdmFyIHRleHQgPSBkYXRhLnRleHQuc3Vic3RyKERyYWdEcm9wSGVscGVyLmRhdGFTdGFydC5sZW5ndGgpO1xyXG4gICAgICAgIHZhciBhcnJheSA9IHRleHQuc3BsaXQoJywnKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge2pzb246IG51bGx9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBhcnJheVtpXS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICByZXN1bHRbaXRlbVswXV0gPSBpdGVtWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQuanNvbiA9IGRhdGEuanNvbjtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRZKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IChlbGVtZW50Lm9mZnNldFRvcCAtIGVsZW1lbnQuc2Nyb2xsVG9wICsgZWxlbWVudC5jbGllbnRUb3ApO1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gPEhUTUxFbGVtZW50PmVsZW1lbnQub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBwcmVwYXJlRGF0YShldmVudDogRHJhZ0V2ZW50LCBxdWVzdGlvblR5cGU6IHN0cmluZywgcXVlc3Rpb25OYW1lOiBzdHJpbmcsIGpzb246IGFueSA9IG51bGwpIHtcclxuICAgICAgICB2YXIgc3RyID0gRHJhZ0Ryb3BIZWxwZXIuZGF0YVN0YXJ0O1xyXG4gICAgICAgIGlmIChxdWVzdGlvblR5cGUpIHN0ciArPSBcInF1ZXN0aW9udHlwZTpcIiArIHF1ZXN0aW9uVHlwZSArICcsJztcclxuICAgICAgICBzdHIgKz0gXCJxdWVzdGlvbm5hbWU6XCIgKyBxdWVzdGlvbk5hbWU7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKGV2ZW50LCBzdHIsIGpzb24pO1xyXG4gICAgICAgIHZhciB0YXJnZXRRdWVzdGlvbiA9IHRoaXMuY3JlYXRlVGFyZ2V0UXVlc3Rpb24ocXVlc3Rpb25UeXBlLCBxdWVzdGlvbk5hbWUsIGpzb24pO1xyXG4gICAgICAgIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhLnRhcmdldFF1ZXN0aW9uID0gdGFyZ2V0UXVlc3Rpb247XHJcbiAgICAgICAgdGhpcy5zdXJ2ZXlbXCJrb0RyYWdnaW5nU291cmNlXCJdKHRhcmdldFF1ZXN0aW9uKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0RGF0YShldmVudDogRHJhZ0V2ZW50LCB0ZXh0OiBzdHJpbmcsIGpzb246IGFueSA9IG51bGwpIHtcclxuICAgICAgICBpZiAoZXZlbnRbXCJvcmlnaW5hbEV2ZW50XCJdKSB7XHJcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnRbXCJvcmlnaW5hbEV2ZW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiVGV4dFwiLCB0ZXh0KTtcclxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcImNvcHlcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEgPSB7IHRleHQ6IHRleHQsIGpzb246IGpzb24gfTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0RGF0YShldmVudDogRHJhZ0V2ZW50KTogYW55IHtcclxuICAgICAgICBpZiAoZXZlbnRbXCJvcmlnaW5hbEV2ZW50XCJdKSB7XHJcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnRbXCJvcmlnaW5hbEV2ZW50XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJUZXh0XCIpO1xyXG4gICAgICAgICAgICBpZiAodGV4dCkge1xyXG4gICAgICAgICAgICAgICAgRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XHJcbiAgICAgICAgRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEgPSB7dGV4dDogXCJcIiwganNvbjogbnVsbCwgdGFyZ2V0UXVlc3Rpb246IG51bGx9O1xyXG4gICAgICAgIHZhciBwcmV2ID0gRHJhZ0Ryb3BIZWxwZXIucHJldkV2ZW50O1xyXG4gICAgICAgIHByZXYucXVlc3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHByZXYueCA9IC0xO1xyXG4gICAgICAgIHByZXYueSA9IC0xO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RyYWdkcm9waGVscGVyLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlXCI7XHJcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcclxuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgU3VydmV5T25Qcm9wZXJ0eUNoYW5nZWRDYWxsYmFjayA9IChwcm9wZXJ0eTogU3VydmV5T2JqZWN0UHJvcGVydHksIG5ld1ZhbHVlOiBhbnkpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgU3VydmV5T2JqZWN0UHJvcGVydHkge1xyXG4gICAgcHJpdmF0ZSBvYmplY3RWYWx1ZTogYW55O1xyXG4gICAgcHJpdmF0ZSBpc1ZhbHVlVXBkYXRpbmc6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIG9uUHJvcGVydHlDaGFuZ2VkOiBTdXJ2ZXlPblByb3BlcnR5Q2hhbmdlZENhbGxiYWNrO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMga29WYWx1ZTogYW55O1xyXG4gICAgcHVibGljIGtvVGV4dDogYW55O1xyXG4gICAgcHVibGljIG1vZGFsTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIG1vZGFsTmFtZVRhcmdldDogc3RyaW5nO1xyXG4gICAgcHVibGljIGtvSXNEZWZhdWx0OiBhbnk7XHJcbiAgICBwdWJsaWMgZWRpdG9yOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2U7XHJcbiAgICBwdWJsaWMgZWRpdG9yVHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGJhc2VFZGl0b3JUeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2hvaWNlczogQXJyYXk8YW55PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIG9uUHJvcGVydHlDaGFuZ2VkOiBTdXJ2ZXlPblByb3BlcnR5Q2hhbmdlZENhbGxiYWNrID0gbnVsbCwgcHJvcGVydHlFZGl0b3JPcHRpb25zOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlZCA9IG9uUHJvcGVydHlDaGFuZ2VkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMucHJvcGVydHkubmFtZTtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gcHJvcGVydHlbXCJyZWFkT25seVwiXTtcclxuICAgICAgICB0aGlzLmtvVmFsdWUgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5jaG9pY2VzID0gcHJvcGVydHkuY2hvaWNlcztcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5lZGl0b3JUeXBlID0gcHJvcGVydHkudHlwZTtcclxuICAgICAgICAvL1RPRE9cclxuICAgICAgICBpZiAodGhpcy5jaG9pY2VzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5lZGl0b3JUeXBlID0gXCJkcm9wZG93blwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb25JdGVtQ2hhbmdlZCA9IGZ1bmN0aW9uIChuZXdWYWx1ZTogYW55KSB7IHNlbGYub25BcHBseUVkaXRvclZhbHVlKG5ld1ZhbHVlKTsgfTtcclxuICAgICAgICB0aGlzLmVkaXRvciA9IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5jcmVhdGVFZGl0b3IodGhpcy5lZGl0b3JUeXBlLCBvbkl0ZW1DaGFuZ2VkKTtcclxuICAgICAgICB0aGlzLmVkaXRvci5vcHRpb25zID0gcHJvcGVydHlFZGl0b3JPcHRpb25zO1xyXG4gICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IHRoaXMuZWRpdG9yLmVkaXRvclR5cGU7XHJcbiAgICAgICAgdGhpcy5tb2RhbE5hbWUgPSBcIm1vZGVsRWRpdG9yXCIgKyB0aGlzLmVkaXRvclR5cGUgKyB0aGlzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5tb2RhbE5hbWVUYXJnZXQgPSBcIiNcIiArIHRoaXMubW9kYWxOYW1lO1xyXG4gICAgICAgIHRoaXMua29WYWx1ZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYub25rb1ZhbHVlQ2hhbmdlZChuZXdWYWx1ZSk7IH0pO1xyXG4gICAgICAgIHRoaXMua29UZXh0ID0ga28uY29tcHV0ZWQoKCkgPT4geyByZXR1cm4gc2VsZi5nZXRWYWx1ZVRleHQoc2VsZi5rb1ZhbHVlKCkpOyB9KTtcclxuICAgICAgICB0aGlzLmtvSXNEZWZhdWx0ID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5wcm9wZXJ0eS5pc0RlZmF1bHRWYWx1ZShzZWxmLmtvVmFsdWUoKSk7IH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBvYmplY3QoKTogYW55IHsgcmV0dXJuIHRoaXMub2JqZWN0VmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgb2JqZWN0KHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9iamVjdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKCkge1xyXG4gICAgICAgIHRoaXMuaXNWYWx1ZVVwZGF0aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmtvVmFsdWUodGhpcy5nZXRWYWx1ZSgpKTtcclxuICAgICAgICB0aGlzLmVkaXRvci5zZXRPYmplY3QodGhpcy5vYmplY3QpO1xyXG4gICAgICAgIHRoaXMuZWRpdG9yLnNldFRpdGxlKGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5lZGl0UHJvcGVydHlcIilbXCJmb3JtYXRcIl0odGhpcy5wcm9wZXJ0eS5uYW1lKSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3JEYXRhKHRoaXMua29WYWx1ZSgpKTtcclxuICAgICAgICB0aGlzLmlzVmFsdWVVcGRhdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc0FwcGx5aW5nTmV3VmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgb25BcHBseUVkaXRvclZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmlzQXBwbHlpbmdOZXdWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5rb1ZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICB0aGlzLmlzQXBwbHlpbmdOZXdWYWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbmtvVmFsdWVDaGFuZ2VkKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBcHBseWluZ05ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWRpdG9yRGF0YShuZXdWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9iamVjdCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0VmFsdWUoKSA9PSBuZXdWYWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLm9uUHJvcGVydHlDaGFuZ2VkICE9IG51bGwgJiYgIXRoaXMuaXNWYWx1ZVVwZGF0aW5nKSB0aGlzLm9uUHJvcGVydHlDaGFuZ2VkKHRoaXMsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlRWRpdG9yRGF0YShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5lZGl0b3IudmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXRWYWx1ZSgpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5Lmhhc1RvVXNlR2V0VmFsdWUpIHJldHVybiB0aGlzLnByb3BlcnR5LmdldFZhbHVlKHRoaXMub2JqZWN0KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RbdGhpcy5uYW1lXTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXRWYWx1ZVRleHQodmFsdWU6IGFueSk6IHN0cmluZyB7IHJldHVybiB0aGlzLmVkaXRvci5nZXRWYWx1ZVRleHQodmFsdWUpOyB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2JqZWN0UHJvcGVydHkudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuL2VkaXRvckxvY2FsaXphdGlvblwiO1xyXG5pbXBvcnQge1N1cnZleUhlbHBlciwgT2JqVHlwZX0gZnJvbSBcIi4vc3VydmV5SGVscGVyXCI7XHJcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3VydmV5VmVyYnMge1xyXG4gICAgcHJpdmF0ZSBzdXJ2ZXlWYWx1ZTogU3VydmV5LlN1cnZleTtcclxuICAgIHByaXZhdGUgb2JqVmFsdWU6IGFueTtcclxuICAgIHByaXZhdGUgY2hvaWNlc0NsYXNzZXM6IEFycmF5PHN0cmluZz47XHJcbiAgICBrb1ZlcmJzOiBhbnk7XHJcbiAgICBrb0hhc1ZlcmJzOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnkpIHtcclxuICAgICAgICB0aGlzLmtvVmVyYnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmtvSGFzVmVyYnMgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRDaGlsZHJlbkNsYXNzZXMoXCJzZWxlY3RiYXNlXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2hvaWNlc0NsYXNzZXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jaG9pY2VzQ2xhc3Nlcy5wdXNoKGNsYXNzZXNbaV0ubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc2V0IHN1cnZleSh2YWx1ZTogU3VydmV5LlN1cnZleSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN1cnZleSA9PSB2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgb2JqKCk6IGFueSB7IHJldHVybiB0aGlzLm9ialZhbHVlIH1cclxuICAgIHB1YmxpYyBzZXQgb2JqKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5vYmpWYWx1ZSA9PSB2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMub2JqVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmJ1aWxkVmVyYnMoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYnVpbGRWZXJicygpIHtcclxuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcclxuICAgICAgICB2YXIgb2JqVHlwZSA9IFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKHRoaXMub2JqKTtcclxuICAgICAgICBpZiAob2JqVHlwZSA9PSBPYmpUeXBlLlF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbiA9IDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPnRoaXMub2JqO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdXJ2ZXkucGFnZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChuZXcgU3VydmV5VmVyYkNoYW5nZVBhZ2VJdGVtKHRoaXMuc3VydmV5LCBxdWVzdGlvbiwgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2spKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jaG9pY2VzQ2xhc3Nlcy5pbmRleE9mKHF1ZXN0aW9uLmdldFR5cGUoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChuZXcgU3VydmV5VmVyYkNoYW5nZVR5cGVJdGVtKHRoaXMuc3VydmV5LCBxdWVzdGlvbiwgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2spKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtvVmVyYnMoYXJyYXkpO1xyXG4gICAgICAgIHRoaXMua29IYXNWZXJicyhhcnJheS5sZW5ndGggPiAwKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgU3VydmV5VmVyYkl0ZW0ge1xyXG4gICAga29JdGVtczogYW55O1xyXG4gICAga29TZWxlY3RlZEl0ZW06IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdXJ2ZXk6IFN1cnZleS5TdXJ2ZXksIHB1YmxpYyBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSwgcHVibGljIG9uTW9kaWZpZWRDYWxsYmFjazogKCkgPT4gYW55KSB7XHJcbiAgICAgICAgdGhpcy5rb0l0ZW1zID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkSXRlbSA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gXCJcIjsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlWZXJiQ2hhbmdlVHlwZUl0ZW0gZXh0ZW5kcyBTdXJ2ZXlWZXJiSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc3VydmV5OiBTdXJ2ZXkuU3VydmV5LCBwdWJsaWMgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UsIHB1YmxpYyBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHN1cnZleSwgcXVlc3Rpb24sIG9uTW9kaWZpZWRDYWxsYmFjayk7XHJcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRDaGlsZHJlbkNsYXNzZXMoXCJzZWxlY3RiYXNlXCIsIHRydWUpO1xyXG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKHsgdmFsdWU6IGNsYXNzZXNbaV0ubmFtZSwgdGV4dDogZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInF0LlwiICsgY2xhc3Nlc1tpXS5uYW1lKSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5rb0l0ZW1zKGFycmF5KTtcclxuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtKHF1ZXN0aW9uLmdldFR5cGUoKSk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMua29TZWxlY3RlZEl0ZW0uc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLmNoYW5nZVR5cGUobmV3VmFsdWUpOyB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnZlcmJDaGFuZ2VUeXBlXCIpOyB9XHJcbiAgICBwcml2YXRlIGNoYW5nZVR5cGUocXVlc3Rpb25UeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAocXVlc3Rpb25UeXBlID09IHRoaXMucXVlc3Rpb24uZ2V0VHlwZSgpKSByZXR1cm47XHJcbiAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5nZXRQYWdlQnlRdWVzdGlvbih0aGlzLnF1ZXN0aW9uKTtcclxuICAgICAgICB2YXIgaW5kZXggPSBwYWdlLnF1ZXN0aW9ucy5pbmRleE9mKHRoaXMucXVlc3Rpb24pO1xyXG4gICAgICAgIHZhciBuZXdRdWVzdGlvbiA9IFN1cnZleS5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24ocXVlc3Rpb25UeXBlLCB0aGlzLnF1ZXN0aW9uLm5hbWUpO1xyXG4gICAgICAgIHZhciBqc29uT2JqID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCk7XHJcbiAgICAgICAgdmFyIGpzb24gPSBqc29uT2JqLnRvSnNvbk9iamVjdCh0aGlzLnF1ZXN0aW9uKTtcclxuICAgICAgICBqc29uT2JqLnRvT2JqZWN0KGpzb24sIG5ld1F1ZXN0aW9uKTtcclxuICAgICAgICBwYWdlLnJlbW92ZVF1ZXN0aW9uKHRoaXMucXVlc3Rpb24pO1xyXG4gICAgICAgIHBhZ2UuYWRkUXVlc3Rpb24obmV3UXVlc3Rpb24sIGluZGV4KTtcclxuICAgICAgICBpZiAodGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2spIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN1cnZleVZlcmJDaGFuZ2VQYWdlSXRlbSBleHRlbmRzIFN1cnZleVZlcmJJdGVtIHtcclxuICAgIHByaXZhdGUgcHJldlBhZ2U6IFN1cnZleS5QYWdlO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHN1cnZleTogU3VydmV5LlN1cnZleSwgcHVibGljIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBwdWJsaWMgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnkpIHtcclxuICAgICAgICBzdXBlcihzdXJ2ZXksIHF1ZXN0aW9uLCBvbk1vZGlmaWVkQ2FsbGJhY2spO1xyXG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXkucGFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5wYWdlc1tpXTtcclxuICAgICAgICAgICAgYXJyYXkucHVzaCh7IHZhbHVlOiBwYWdlLCB0ZXh0OiBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0TmFtZShwYWdlKSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5rb0l0ZW1zKGFycmF5KTtcclxuICAgICAgICB0aGlzLnByZXZQYWdlID0gPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LmdldFBhZ2VCeVF1ZXN0aW9uKHF1ZXN0aW9uKTtcclxuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtKHRoaXMucHJldlBhZ2UpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5jaGFuZ2VQYWdlKG5ld1ZhbHVlKTsgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS52ZXJiQ2hhbmdlUGFnZVwiKTsgfVxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VQYWdlKG5ld1BhZ2U6IFN1cnZleS5QYWdlKSB7XHJcbiAgICAgICAgaWYgKG5ld1BhZ2UgPT0gbnVsbCB8fCBuZXdQYWdlID09IHRoaXMucHJldlBhZ2UpIHJldHVybjtcclxuICAgICAgICB0aGlzLnByZXZQYWdlLnJlbW92ZVF1ZXN0aW9uKHRoaXMucXVlc3Rpb24pO1xyXG4gICAgICAgIG5ld1BhZ2UuYWRkUXVlc3Rpb24odGhpcy5xdWVzdGlvbik7XHJcbiAgICAgICAgaWYgKHRoaXMub25Nb2RpZmllZENhbGxiYWNrKSB0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaygpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29iamVjdFZlcmJzLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7U3VydmV5SGVscGVyfSBmcm9tIFwiLi9zdXJ2ZXlIZWxwZXJcIjtcclxuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgU3VydmV5QWRkTmV3UGFnZUNhbGxiYWNrID0gKCkgPT4gdm9pZDtcclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBTdXJ2ZXlTZWxlY3RQYWdlQ2FsbGJhY2sgPSAocGFnZTogU3VydmV5LlBhZ2UpID0+IHZvaWQ7XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgU3VydmV5TW92ZVBhZ2VDYWxsYmFjayA9IChpbmRleEZyb206IG51bWJlciwgaW5kZXhUbzogbnVtYmVyKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVBhZ2VzRWRpdG9yIHtcclxuICAgIHN1cnZleVZhbHVlOiBTdXJ2ZXkuU3VydmV5O1xyXG4gICAga29QYWdlczogYW55O1xyXG4gICAga29Jc1ZhbGlkOiBhbnk7XHJcbiAgICBzZWxlY3RQYWdlQ2xpY2s6IGFueTtcclxuICAgIG9uQWRkTmV3UGFnZUNhbGxiYWNrOiBTdXJ2ZXlBZGROZXdQYWdlQ2FsbGJhY2s7XHJcbiAgICBvblNlbGVjdFBhZ2VDYWxsYmFjazogU3VydmV5U2VsZWN0UGFnZUNhbGxiYWNrO1xyXG4gICAgb25EZWxldGVQYWdlQ2FsbGJhY2s6IFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjaztcclxuICAgIG9uTW92ZVBhZ2VDYWxsYmFjazogU3VydmV5TW92ZVBhZ2VDYWxsYmFjaztcclxuICAgIGRyYWdnaW5nUGFnZTogYW55ID0gbnVsbDtcclxuICAgIGRyYWdTdGFydDogYW55OyBkcmFnT3ZlcjogYW55OyBkcmFnRW5kOiBhbnk7IGRyYWdEcm9wOiBhbnk7IGtleURvd246IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvbkFkZE5ld1BhZ2VDYWxsYmFjazogU3VydmV5QWRkTmV3UGFnZUNhbGxiYWNrID0gbnVsbCwgb25TZWxlY3RQYWdlQ2FsbGJhY2s6IFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjayA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvbk1vdmVQYWdlQ2FsbGJhY2s6IFN1cnZleU1vdmVQYWdlQ2FsbGJhY2sgPSBudWxsLCBvbkRlbGV0ZVBhZ2VDYWxsYmFjazogU3VydmV5U2VsZWN0UGFnZUNhbGxiYWNrID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMua29QYWdlcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xyXG4gICAgICAgIHRoaXMua29Jc1ZhbGlkID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5vbkFkZE5ld1BhZ2VDYWxsYmFjayA9IG9uQWRkTmV3UGFnZUNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMub25TZWxlY3RQYWdlQ2FsbGJhY2sgPSBvblNlbGVjdFBhZ2VDYWxsYmFjaztcclxuICAgICAgICB0aGlzLm9uTW92ZVBhZ2VDYWxsYmFjayA9IG9uTW92ZVBhZ2VDYWxsYmFjaztcclxuICAgICAgICB0aGlzLm9uRGVsZXRlUGFnZUNhbGxiYWNrID0gb25EZWxldGVQYWdlQ2FsbGJhY2s7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGFnZUNsaWNrID0gZnVuY3Rpb24ocGFnZUl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYub25TZWxlY3RQYWdlQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHNlbGYub25TZWxlY3RQYWdlQ2FsbGJhY2socGFnZUl0ZW0ucGFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMua2V5RG93biA9IGZ1bmN0aW9uIChlbDogYW55LCBlOiBLZXlib2FyZEV2ZW50KSB7IHNlbGYub25LZXlEb3duKGVsLCBlKTsgfVxyXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGVsOiBhbnkpIHsgc2VsZi5kcmFnZ2luZ1BhZ2UgPSBlbDsgfTtcclxuICAgICAgICB0aGlzLmRyYWdPdmVyID0gZnVuY3Rpb24gKGVsOiBhbnkpIHsgIH07XHJcbiAgICAgICAgdGhpcy5kcmFnRW5kID0gZnVuY3Rpb24gKCkgeyBzZWxmLmRyYWdnaW5nUGFnZSA9IG51bGw7IH07XHJcbiAgICAgICAgdGhpcy5kcmFnRHJvcCA9IGZ1bmN0aW9uIChlbDogYW55KSB7IHNlbGYubW92ZURyYWdnaW5nUGFnZVRvKGVsKTsgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgc3VydmV5KCk6IFN1cnZleS5TdXJ2ZXkgeyByZXR1cm4gdGhpcy5zdXJ2ZXlWYWx1ZTsgfVxyXG4gICAgcHVibGljIHNldCBzdXJ2ZXkodmFsdWU6IFN1cnZleS5TdXJ2ZXkpIHtcclxuICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5rb0lzVmFsaWQodGhpcy5zdXJ2ZXlWYWx1ZSAhPSBudWxsKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VzKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0U2VsZWN0ZWRQYWdlKHBhZ2U6IFN1cnZleS5QYWdlKSB7XHJcbiAgICAgICAgdmFyIHBhZ2VzID0gdGhpcy5rb1BhZ2VzKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwYWdlc1tpXS5rb1NlbGVjdGVkKHBhZ2VzW2ldLnBhZ2UgPT0gcGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZE5ld1BhZ2VDbGljaygpIHtcclxuICAgICAgICBpZiAodGhpcy5vbkFkZE5ld1BhZ2VDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLm9uQWRkTmV3UGFnZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZVBhZ2UocGFnZTogU3VydmV5LlBhZ2UpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4QnlQYWdlKHBhZ2UpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMua29QYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBjaGFuZ2VOYW1lKHBhZ2U6IFN1cnZleS5QYWdlKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJbmRleEJ5UGFnZShwYWdlKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmtvUGFnZXMoKVtpbmRleF0udGl0bGUoU3VydmV5SGVscGVyLmdldE9iamVjdE5hbWUocGFnZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXRJbmRleEJ5UGFnZShwYWdlOiBTdXJ2ZXkuUGFnZSk6IG51bWJlciB7XHJcbiAgICAgICAgdmFyIHBhZ2VzID0gdGhpcy5rb1BhZ2VzKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocGFnZXNbaV0ucGFnZSA9PSBwYWdlKSByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uS2V5RG93bihlbDogYW55LCBlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMua29QYWdlcygpLmxlbmd0aCA8PSAxKSByZXR1cm47XHJcbiAgICAgICAgdmFyIHBhZ2VzID0gdGhpcy5rb1BhZ2VzKCk7XHJcbiAgICAgICAgdmFyIHBhZ2VJbmRleCA9IC0xO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHBhZ2VzW2ldLnBhZ2UgJiYgcGFnZXNbaV0ua29TZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlSW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYWdlSW5kZXggPCAwKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSA0NiAmJiB0aGlzLm9uRGVsZXRlUGFnZUNhbGxiYWNrKSB0aGlzLm9uRGVsZXRlUGFnZUNhbGxiYWNrKGVsLnBhZ2UpO1xyXG4gICAgICAgIGlmICgoZS5rZXlDb2RlID09IDM3IHx8IGUua2V5Q29kZSA9PSAzOSkgJiYgdGhpcy5vblNlbGVjdFBhZ2VDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwYWdlSW5kZXggKz0gKGUua2V5Q29kZSA9PSAzNyA/IC0xIDogMSk7XHJcbiAgICAgICAgICAgIGlmIChwYWdlSW5kZXggPCAwKSBwYWdlSW5kZXggPSBwYWdlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBpZiAocGFnZUluZGV4ID49IHBhZ2VzLmxlbmd0aCkgcGFnZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlSW5kZXhdLnBhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3RQYWdlQ2FsbGJhY2socGFnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRQYWdlKHBhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB1cGRhdGVQYWdlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5zdXJ2ZXlWYWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMua29QYWdlcyhbXSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhZ2VzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cnZleVZhbHVlLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXlWYWx1ZS5wYWdlc1tpXTtcclxuICAgICAgICAgICAgcGFnZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToga28ub2JzZXJ2YWJsZShTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0TmFtZShwYWdlKSksIHBhZ2U6IHBhZ2UsIGtvU2VsZWN0ZWQ6IGtvLm9ic2VydmFibGUoZmFsc2UpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtvUGFnZXMocGFnZXMpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBtb3ZlRHJhZ2dpbmdQYWdlVG8odG9QYWdlOiBhbnkpIHtcclxuICAgICAgICBpZiAodG9QYWdlID09IG51bGwgfHwgdG9QYWdlID09IHRoaXMuZHJhZ2dpbmdQYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdQYWdlID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kcmFnZ2luZ1BhZ2UgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMua29QYWdlcygpLmluZGV4T2YodGhpcy5kcmFnZ2luZ1BhZ2UpO1xyXG4gICAgICAgIHZhciBpbmRleFRvID0gdGhpcy5rb1BhZ2VzKCkuaW5kZXhPZih0b1BhZ2UpO1xyXG4gICAgICAgIGlmICh0aGlzLm9uTW92ZVBhZ2VDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLm9uTW92ZVBhZ2VDYWxsYmFjayhpbmRleCwgaW5kZXhUbyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzRWRpdG9yLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xyXG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XHJcbmltcG9ydCB7U3VydmV5T2JqZWN0RWRpdG9yfSBmcm9tIFwiLi4vb2JqZWN0RWRpdG9yXCI7XHJcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciB7XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkT2JqZWN0RWRpdG9yOiBTdXJ2ZXlPYmplY3RFZGl0b3I7XHJcbiAgICBwdWJsaWMga29TZWxlY3RlZDogYW55O1xyXG4gICAgcHVibGljIGF2YWlsYWJsZVZhbGlkYXRvcnM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIHByaXZhdGUgdmFsaWRhdG9yQ2xhc3NlczogQXJyYXk8U3VydmV5Lkpzb25NZXRhZGF0YUNsYXNzPiA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdEVkaXRvciA9IG5ldyBTdXJ2ZXlPYmplY3RFZGl0b3IoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQuYWRkKChzZW5kZXIsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5vblByb3BlcnR5VmFsdWVDaGFuZ2VkKG9wdGlvbnMucHJvcGVydHksIG9wdGlvbnMub2JqZWN0LCBvcHRpb25zLm5ld1ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKG51bGwpO1xyXG4gICAgICAgIHRoaXMua29TZWxlY3RlZC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2VsZWN0ZWRPYmplY3RFZGl0b3Iuc2VsZWN0ZWRPYmplY3QgPSBuZXdWYWx1ZSAhPSBudWxsID8gbmV3VmFsdWUudmFsaWRhdG9yIDogbnVsbDsgfSk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3JDbGFzc2VzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0Q2hpbGRyZW5DbGFzc2VzKFwic3VydmV5dmFsaWRhdG9yXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlVmFsaWRhdG9ycyA9IHRoaXMuZ2V0QXZhaWxhYmxlVmFsaWRhdG9ycygpO1xyXG4gICAgICAgIHRoaXMub25EZWxldGVDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb0l0ZW1zLnJlbW92ZShzZWxmLmtvU2VsZWN0ZWQoKSk7IH07XHJcbiAgICAgICAgdGhpcy5vbkFkZENsaWNrID0gZnVuY3Rpb24gKHZhbGlkYXRvclR5cGUpIHsgc2VsZi5hZGRJdGVtKHZhbGlkYXRvclR5cGUpOyB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInZhbGlkYXRvcnNcIjsgfVxyXG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xyXG4gICAgICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2VkKCk7XHJcbiAgICAgICAgaWYgKHRoaXMua29TZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmtvU2VsZWN0ZWQodGhpcy5rb0l0ZW1zKCkubGVuZ3RoID4gMCA/IHRoaXMua29JdGVtcygpWzBdIDogbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7XHJcbiAgICAgICAgdmFyIGpzb25PYmogPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKTtcclxuICAgICAgICB2YXIgdmFsaWRhdG9yID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3MoaXRlbS5nZXRUeXBlKCkpO1xyXG4gICAgICAgIGpzb25PYmoudG9PYmplY3QoaXRlbSwgdmFsaWRhdG9yKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5VmFsaWRhdG9ySXRlbSh2YWxpZGF0b3IpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHtcclxuICAgICAgICB2YXIgaXRlbSA9IDxTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvckl0ZW0+ZWRpdG9ySXRlbTtcclxuICAgICAgICByZXR1cm4gaXRlbS52YWxpZGF0b3I7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFkZEl0ZW0odmFsaWRhdG9yVHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIG5ld1ZhbGlkYXRvciA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvckl0ZW0oU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3ModmFsaWRhdG9yVHlwZSkpO1xyXG4gICAgICAgIHRoaXMua29JdGVtcy5wdXNoKG5ld1ZhbGlkYXRvcik7XHJcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKG5ld1ZhbGlkYXRvcik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEF2YWlsYWJsZVZhbGlkYXRvcnMoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWxpZGF0b3JDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMudmFsaWRhdG9yQ2xhc3Nlc1tpXS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSwgb2JqOiBhbnksIG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5rb1NlbGVjdGVkKCkgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMua29TZWxlY3RlZCgpLnZhbGlkYXRvcltwcm9wZXJ0eS5uYW1lXSA9IG5ld1ZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JJdGVtIHtcclxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsaWRhdG9yOiBTdXJ2ZXkuU3VydmV5VmFsaWRhdG9yKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdmFsaWRhdG9yLmdldFR5cGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcInZhbGlkYXRvcnNcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yLnRzIiwiaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24ge1xyXG4gICAgcHVibGljIHN0YXRpYyBkZWZpbml0aW9uOiBhbnkgPSB7XHJcbiAgICAgICAgXCJxdWVzdGlvbmJhc2VcIiA6IHtcclxuICAgICAgICAgICAgcHJvcGVydGllczogW1wibmFtZVwiLCBcInRpdGxlXCIsIHtuYW1lOiBcInZpc2libGVcIiwgY2F0ZWdvcnk6IFwiY2hlY2tzXCJ9LCB7bmFtZTogXCJpc1JlcXVpcmVkXCIsIGNhdGVnb3J5OiBcImNoZWNrc1wifSwge25hbWU6IFwic3RhcnRXaXRoTmV3TGluZVwiLCBjYXRlZ29yeTogXCJjaGVja3NcIn0gXSxcclxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcInZpc2libGVJZlwiLCBpbmRleDogMTAwfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY29tbWVudFwiOiB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcInJvd3NcIiwgXCJwbGFjZUhvbGRlclwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJmaWxlXCI6IHtcclxuICAgICAgICAgICAgcHJvcGVydGllczogW3tuYW1lOiBcInNob3dQcmV2aWV3XCIsIGNhdGVnb3J5OiBcImltYWdlQ2hlY2tzXCJ9LCB7bmFtZTogXCJzdG9yZURhdGFBc1RleHRcIiwgY2F0ZWdvcnk6IFwiaW1hZ2VDaGVja3NcIn0sIFwibWF4U2l6ZVwiLCBcImltYWdlSGVpZ2h0XCIsIFwiaW1hZ2VXaWR0aFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJodG1sXCI6IHtcclxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcImh0bWxcIiwgaW5kZXg6IDEwfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25iYXNlXCI6IHtcclxuICAgICAgICAgICAgcHJvcGVydGllczogW1wiY2VsbFR5cGVcIl0sXHJcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJjb2x1bW5zXCIsIGluZGV4OiAxMH0sIHtuYW1lOiBcInJvd3NcIiwgaW5kZXg6IDExfSwge25hbWU6IFwiY2hvaWNlc1wiLCBpbmRleDogMTJ9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtYXRyaXhkeW5hbWljXCI6IHtcclxuICAgICAgICAgICAgcHJvcGVydGllczogW1wicm93Q291bnRcIiwgXCJhZGRSb3dUZXh0XCIsIFwicmVtb3ZlUm93VGV4dFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtYXRyaXhcIjoge1xyXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwiY29sdW1uc1wiLCBpbmRleDogMTB9LCB7bmFtZTogXCJyb3dzXCIsIGluZGV4OiAxMX1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm11bHRpcGxlaXRlbXNcIjoge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJjb2xDb3VudFwiXSxcclxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcIml0ZW1zXCIsIGluZGV4OiAxMH1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJhdGluZ1wiIDoge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJtaW5SYXRlRGVzY3JpcHRpb25cIiwgXCJtYXhSYXRlRGVzY3JpcHRpb25cIl0sXHJcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJyYXRlVmFsdWVzXCIsIGluZGV4OiAxMH1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNlbGVjdGJhc2VcIiA6IHtcclxuICAgICAgICAgICAgcHJvcGVydGllczogW1wiaGFzT3RoZXJcIiwgXCJjaG9pY2VzT3JkZXJcIiwgXCJjb2xDb3VudFwiXSxcclxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcImNob2ljZXNcIiwgaW5kZXg6IDEwfSwge25hbWU6IFwiY2hvaWNlc0J5VXJsXCIsIGluZGV4OiAxMX1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRyb3Bkb3duXCI6IHtcclxuICAgICAgICAgICAgcHJvcGVydGllczogW1wib3B0aW9uc0NhcHRpb25cIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidGV4dFwiIDoge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJpbnB1dFR5cGVcIiwgXCJwbGFjZUhvbGRlclwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtYXRyaXhkcm9wZG93bmNvbHVtbkBjaGVja2JveFwiIDoge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJoYXNPdGhlclwiLCBcImNob2ljZXNPcmRlclwiLCBcImNvbENvdW50XCJdLFxyXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwiY2hvaWNlc1wiLCBpbmRleDogMTB9LCB7bmFtZTogXCJjaG9pY2VzQnlVcmxcIiwgaW5kZXg6IDExfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25jb2x1bW5AcmFkaW9ncm91cFwiIDoge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJoYXNPdGhlclwiLCBcImNob2ljZXNPcmRlclwiLCBcImNvbENvdW50XCJdLFxyXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwiY2hvaWNlc1wiLCBpbmRleDogMTB9LCB7bmFtZTogXCJjaG9pY2VzQnlVcmxcIiwgaW5kZXg6IDExfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25jb2x1bW5AZHJvcGRvd25cIiA6IHtcclxuICAgICAgICAgICAgcHJvcGVydGllczogW1wiaGFzT3RoZXJcIiwgXCJjaG9pY2VzT3JkZXJcIiwgXCJvcHRpb25zQ2FwdGlvblwiXSxcclxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcImNob2ljZXNcIiwgaW5kZXg6IDEwfSwge25hbWU6IFwiY2hvaWNlc0J5VXJsXCIsIGluZGV4OiAxMX1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1hdHJpeGRyb3Bkb3duY29sdW1uQHRleHRcIiA6IHtcclxuICAgICAgICAgICAgcHJvcGVydGllczogW1wiaW5wdXRUeXBlXCIsIFwicGxhY2VIb2xkZXJcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25jb2x1bW5AY29tbWVudFwiIDoge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJwbGFjZUhvbGRlclwiXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UHJvcGVydGllcyhjbGFzc05hbWU6IHN0cmluZyk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gW107XHJcbiAgICAgICAgdmFyIGFsbERlZmluaXRpb25zID0gU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLmdldEFsbERlZmluaXRpb25zQnlDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IGFsbERlZmluaXRpb25zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtLSkge1xyXG4gICAgICAgICAgICB2YXIgZGVmID0gYWxsRGVmaW5pdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGlmKGRlZi5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgZGVmLnByb3BlcnRpZXMubGVuZ3RoOyBqICsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKGRlZi5wcm9wZXJ0aWVzW2pdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvcGVydGllcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VGFicyhjbGFzc05hbWU6IHN0cmluZyk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHZhciB0YWJzID0gW107XHJcbiAgICAgICAgdmFyIGFsbERlZmluaXRpb25zID0gU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLmdldEFsbERlZmluaXRpb25zQnlDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IGFsbERlZmluaXRpb25zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtLSkge1xyXG4gICAgICAgICAgICB2YXIgZGVmID0gYWxsRGVmaW5pdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGlmKGRlZi50YWJzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgZGVmLnRhYnMubGVuZ3RoOyBqICsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFicy5wdXNoKGRlZi50YWJzW2pdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaW5kZXggPCBiLmluZGV4ID8gLTEgOiAoYS5pbmRleCA+IGIuaW5kZXggPyAxIDogMCk7IH0pO1xyXG4gICAgICAgIHJldHVybiB0YWJzO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEFsbERlZmluaXRpb25zQnlDbGFzcyhjbGFzc05hbWU6IHN0cmluZykgOiBBcnJheTxhbnk+IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaWYoY2xhc3NOYW1lLmluZGV4T2YoJ0AnKSA+IC0xICYmIFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi5kZWZpbml0aW9uW2NsYXNzTmFtZV0pIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLmRlZmluaXRpb25bY2xhc3NOYW1lXSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgdmFyIG1ldGFDbGFzcyA9IDxTdXJ2ZXkuSnNvbk1ldGFkYXRhQ2xhc3M+U3VydmV5Lkpzb25PYmplY3QubWV0YURhdGFbXCJmaW5kQ2xhc3NcIl0oY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFtZXRhQ2xhc3MpIGJyZWFrO1xyXG4gICAgICAgICAgICBpZihTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZGVmaW5pdGlvblttZXRhQ2xhc3MubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi5kZWZpbml0aW9uW21ldGFDbGFzcy5uYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0gbWV0YUNsYXNzLnBhcmVudE5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XHJcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0eSB7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZWRpdFR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBrb1ZhbHVlOiBhbnk7IGtvRXJyb3JUZXh0OiBhbnk7IGtvSGFzRXJyb3I6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvYmo6IFN1cnZleS5CYXNlLCBwdWJsaWMgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIHB1YmxpYyBpc1JlcXVpcmVkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wZXJ0eS5uYW1lO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBwcm9wZXJ0eVtcInJlYWRPbmx5XCJdO1xyXG4gICAgICAgIHRoaXMuZWRpdFR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBpZihwcm9wZXJ0eS50eXBlID09IFwidGV4dFwiKSB0aGlzLmVkaXRUeXBlID0gXCJ0ZXh0YXJlYVwiO1xyXG4gICAgICAgIGlmKHByb3BlcnR5LnR5cGUgPT0gXCJib29sZWFuXCIpIHRoaXMuZWRpdFR5cGUgPSBcImNoZWNrXCI7XHJcbiAgICAgICAgaWYocHJvcGVydHkuY2hvaWNlcykge1xyXG4gICAgICAgICAgICB0aGlzLmNob2ljZXMgPSBwcm9wZXJ0eS5jaG9pY2VzO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRUeXBlID0gXCJkcm9wZG93blwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtvVmFsdWUgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5rb0Vycm9yVGV4dCA9IGtvLm9ic2VydmFibGUoXCJcIik7XHJcbiAgICAgICAgdGhpcy5rb0hhc0Vycm9yID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5cIiArIHRoaXMubmFtZSk7XHJcbiAgICAgICAgaWYoIXRoaXMudGl0bGUpIHRoaXMudGl0bGUgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciBpc0Vycm9yID0gdGhpcy5pc1JlcXVpcmVkICYmICh0aGlzLmtvVmFsdWUoKSAhPT0gZmFsc2UpICYmICF0aGlzLmtvVmFsdWUoKTtcclxuICAgICAgICB0aGlzLmtvRXJyb3JUZXh0KGlzRXJyb3IgPyBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUucHJvcGVydHlJc0VtcHR5XCIpOiBcIlwiKTtcclxuICAgICAgICB0aGlzLmtvSGFzRXJyb3IoaXNFcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIGlzRXJyb3I7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXBwbHkoKSB7XHJcbiAgICAgICAgdGhpcy5vYmpbdGhpcy5uYW1lXSA9IHRoaXMua29WYWx1ZSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMua29WYWx1ZSh0aGlzLmdldFZhbHVlKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRWYWx1ZSgpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5Lmhhc1RvVXNlR2V0VmFsdWUpIHJldHVybiB0aGlzLnByb3BlcnR5LmdldFZhbHVlKHRoaXMub2JqKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmpbdGhpcy5uYW1lXTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxSb3cge1xyXG4gICAgcHVibGljIGNhdGVnb3J5OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcHJvcGVydGllczogQXJyYXk8U3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydHk+ID0gW107XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JqOiBTdXJ2ZXkuQmFzZSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIGlzUHJvcGVydHlSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5hZGRQcm9wZXJ0eShwcm9wZXJ0eSwgaXNQcm9wZXJ0eVJlcXVpcmVkKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRQcm9wZXJ0eShwcm9wZXJ0eTogYW55LCBpc1Byb3BlcnR5UmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcy5wdXNoKG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0eSh0aGlzLm9iaiwgcHJvcGVydHksIGlzUHJvcGVydHlSZXF1aXJlZCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhhc0Vycm9yKCkgOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgaXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgIGlzRXJyb3IgPSB0aGlzLnByb3BlcnRpZXNbaV0uaGFzRXJyb3IoKSB8fCBpc0Vycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNFcnJvcjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXMge1xyXG4gICAgcHJpdmF0ZSBwcm9wZXJ0aWVzOiBBcnJheTxTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5PjtcclxuICAgIHByaXZhdGUgb25DYW5TaG93UHJvcGVydHlDYWxsYmFjazogKG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkgPT4gYm9vbGVhbjtcclxuICAgIHB1YmxpYyByb3dzOiBBcnJheTxTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxSb3c+ID0gW107XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JqOiBTdXJ2ZXkuQmFzZSwgcHJvcGVydGllczogQXJyYXk8YW55Piwgb25DYW5TaG93UHJvcGVydHlDYWxsYmFjazogKG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkgPT4gYm9vbGVhbiA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2sgPSBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldFByb3BlcnRpZXModGhpcy5vYmouZ2V0VHlwZSgpKTsgXHJcbiAgICAgICAgdGhpcy5idWlsZFJvd3MocHJvcGVydGllcyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXBwbHkoKSB7XHJcbiAgICAgICAgdGhpcy5hcHBseU9yUmVzZXQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5hcHBseU9yUmVzZXQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhhc0Vycm9yKCkgOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgaXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3MubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgIGlzRXJyb3IgPSB0aGlzLnJvd3NbaV0uaGFzRXJyb3IoKSB8fCBpc0Vycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNFcnJvcjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBhcHBseU9yUmVzZXQoaXNBcHBseTogYm9vbGVhbikge1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3MubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCB0aGlzLnJvd3NbaV0ucHJvcGVydGllcy5sZW5ndGg7IGogKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzQXBwbHkpIHRoaXMucm93c1tpXS5wcm9wZXJ0aWVzW2pdLmFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMucm93c1tpXS5wcm9wZXJ0aWVzW2pdLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgYnVpbGRSb3dzKHByb3BlcnRpZXMpIHtcclxuICAgICAgICB2YXIgcmVxdWlyZWRQcm9wZXJ0aWVzOiBBcnJheTxzdHJpbmc+ID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0UmVxdWlyZWRQcm9wZXJ0aWVzKHRoaXMub2JqLmdldFR5cGUoKSk7XHJcbiAgICAgICAgaWYoIXJlcXVpcmVkUHJvcGVydGllcykgcmVxdWlyZWRQcm9wZXJ0aWVzID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMuZ2V0TmFtZShwcm9wZXJ0aWVzW2ldKTtcclxuICAgICAgICAgICAgdmFyIGpzb25Qcm9wZXJ0eSA9IHRoaXMuZ2V0UHJvcGVydHkobmFtZSk7XHJcbiAgICAgICAgICAgIGlmKCFqc29uUHJvcGVydHkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB2YXIgaXNQcm9wZXJ0eVJlcXVpcmVkOiBib29sZWFuID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmluZGV4T2YobmFtZSkgPiAtMTtcclxuICAgICAgICAgICAgdmFyIHJvdyA9IHRoaXMuZ2V0Um93QnlDYXRlZ29yeShwcm9wZXJ0aWVzW2ldLmNhdGVnb3J5KTtcclxuICAgICAgICAgICAgaWYocm93KSByb3cuYWRkUHJvcGVydHkoanNvblByb3BlcnR5LCBpc1Byb3BlcnR5UmVxdWlyZWQpO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvdyA9IG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxSb3codGhpcy5vYmosIGpzb25Qcm9wZXJ0eSwgaXNQcm9wZXJ0eVJlcXVpcmVkKTtcclxuICAgICAgICAgICAgICAgIGlmKHByb3BlcnRpZXNbaV0uY2F0ZWdvcnkpIHJvdy5jYXRlZ29yeSA9IHByb3BlcnRpZXNbaV0uY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHByb3BlcnRpZXNbaV0udGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHJvdy5wcm9wZXJ0aWVzW3Jvdy5wcm9wZXJ0aWVzLmxlbmd0aCAtIDFdLnRpdGxlID0gcHJvcGVydGllc1tpXS50aXRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgfVxyXG4gICBwcml2YXRlIGdldE5hbWUocHJvcDogYW55KTogc3RyaW5nIHtcclxuICAgICAgIGlmKCFwcm9wKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBpZih0eXBlb2YgcHJvcCA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHByb3A7XHJcbiAgICAgICAgaWYocHJvcC5uYW1lKSByZXR1cm4gcHJvcC5uYW1lO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICB9XHJcbiAgIHByaXZhdGUgZ2V0Um93QnlDYXRlZ29yeShjYXRlZ29yeTogc3RyaW5nKSB7XHJcbiAgICAgICBpZighY2F0ZWdvcnkpIHJldHVybiBudWxsO1xyXG4gICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucm93cy5sZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICBpZih0aGlzLnJvd3NbaV0uY2F0ZWdvcnkgPT0gY2F0ZWdvcnkpIHJldHVybiB0aGlzLnJvd3NbaV07XHJcbiAgICAgICB9XHJcbiAgICAgICByZXR1cm4gbnVsbDtcclxuICAgfVxyXG4gICBwcml2YXRlIGdldFByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nKTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSB7XHJcbiAgICAgICBpZighcHJvcGVydHlOYW1lKSByZXR1cm4gbnVsbDtcclxuICAgICAgICB2YXIgcHJvcGVydHkgPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXNbaV0ubmFtZSA9PSBwcm9wZXJ0eU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BlcnR5ICYmIHRoaXMub25DYW5TaG93UHJvcGVydHlDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayh0aGlzLm9iaiwgcHJvcGVydHkpKSBwcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0eTtcclxuICAgIH0gXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XHJcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXN0aW9uVG9vbGJveEl0ZW0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaWNvbk5hbWU6IHN0cmluZztcclxuICAgIGpzb246IGFueTtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpc0NvcGllZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uVG9vbGJveCB7XHJcbiAgICBwdWJsaWMgb3JkZXJlZFF1ZXN0aW9ucyA9IFtcInRleHRcIiwgXCJjaGVja2JveFwiLCBcInJhZGlvZ3JvdXBcIiwgXCJkcm9wZG93blwiLCBcImNvbW1lbnRcIiwgXCJyYXRpbmdcIiwgXCJodG1sXCJdO1xyXG4gICAgcHVibGljIGNvcGllZEl0ZW1NYXhDb3VudDogbnVtYmVyID0gMztcclxuICAgIHByaXZhdGUgaXRlbXNWYWx1ZTogQXJyYXk8SVF1ZXN0aW9uVG9vbGJveEl0ZW0+ID0gW107XHJcblxyXG4gICAga29JdGVtczogYW55O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihzdXBwb3J0ZWRRdWVzdGlvbnM6IEFycmF5PHN0cmluZz4gPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5rb0l0ZW1zID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEZWZhdWx0SXRlbXMoc3VwcG9ydGVkUXVlc3Rpb25zKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQganNvblRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbXNWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGpzb25UZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLml0ZW1zVmFsdWUgPSAodmFsdWUpID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiBbXTtcclxuICAgICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGNvcGllZEpzb25UZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuY29waWVkSXRlbXMpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBjb3BpZWRKc29uVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIG5ld0l0ZW1zID0gKHZhbHVlKSA/IEpTT04ucGFyc2UodmFsdWUpIDogW107XHJcbiAgICAgICAgdGhpcy5jbGVhckNvcGllZEl0ZW1zKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBuZXdJdGVtc1tpXS5pc0NvcGllZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbShuZXdJdGVtc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBpdGVtcygpOiBBcnJheTxJUXVlc3Rpb25Ub29sYm94SXRlbT4geyByZXR1cm4gdGhpcy5pdGVtc1ZhbHVlOyB9XHJcbiAgICBwdWJsaWMgZ2V0IGNvcGllZEl0ZW1zKCk6IEFycmF5PElRdWVzdGlvblRvb2xib3hJdGVtPiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtc1ZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zVmFsdWVbaV0uaXNDb3BpZWQpIHJlc3VsdC5wdXNoKHRoaXMuaXRlbXNWYWx1ZVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkSXRlbXMoaXRlbXM6IEFycmF5PElRdWVzdGlvblRvb2xib3hJdGVtPiwgY2xlYXJBbGw6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChjbGVhckFsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFySXRlbXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZENvcGllZEl0ZW0ocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcclxuICAgICAgICB2YXIgaXRlbSA9IHsgbmFtZTogcXVlc3Rpb24ubmFtZSwgdGl0bGU6IHF1ZXN0aW9uLm5hbWUsIGlzQ29waWVkOiB0cnVlLCBpY29uTmFtZTogXCJpY29uLWRlZmF1bHRcIiwganNvbjogdGhpcy5nZXRRdWVzdGlvbkpTT04ocXVlc3Rpb24pIH07XHJcbiAgICAgICAgaWYgKHRoaXMucmVwbGFjZUl0ZW0oaXRlbSkpIHJldHVybjtcclxuICAgICAgICB2YXIgY29waWVkID0gdGhpcy5jb3BpZWRJdGVtcztcclxuICAgICAgICBpZiAodGhpcy5jb3BpZWRJdGVtTWF4Q291bnQgPiAwICYmIGNvcGllZC5sZW5ndGggPT0gdGhpcy5jb3BpZWRJdGVtTWF4Q291bnQpIHRoaXMucmVtb3ZlSXRlbShjb3BpZWRbdGhpcy5jb3BpZWRJdGVtTWF4Q291bnQgLSAxXS5uYW1lKTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oaXRlbSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtOiBJUXVlc3Rpb25Ub29sYm94SXRlbSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXNWYWx1ZS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZXBsYWNlSXRlbShpdGVtOiBJUXVlc3Rpb25Ub29sYm94SXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXhPZihpdGVtLm5hbWUpO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLml0ZW1zVmFsdWVbaW5kZXhdID0gaXRlbTtcclxuICAgICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2YobmFtZSk7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXRlbXNWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjbGVhckl0ZW1zKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbXNWYWx1ZSA9IFtdO1xyXG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjbGVhckNvcGllZEl0ZW1zKCkge1xyXG4gICAgICAgIHZhciByZW1vdmVkSXRlbXMgPSB0aGlzLmNvcGllZEl0ZW1zO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtb3ZlZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShyZW1vdmVkSXRlbXNbaV0ubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uSXRlbXNDaGFuZ2VkKCkge1xyXG4gICAgICAgIHRoaXMua29JdGVtcyh0aGlzLml0ZW1zVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpbmRleE9mKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtc1ZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zVmFsdWVbaV0ubmFtZSA9PSBuYW1lKSByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVEZWZhdWx0SXRlbXMoc3VwcG9ydGVkUXVlc3Rpb25zOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0UXVlc3Rpb25UeXBlcyhzdXBwb3J0ZWRRdWVzdGlvbnMpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gcXVlc3Rpb25zW2ldO1xyXG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSBTdXJ2ZXkuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLmNyZWF0ZVF1ZXN0aW9uKG5hbWUsIFwicTFcIik7XHJcbiAgICAgICAgICAgIHZhciBqc29uID0gdGhpcy5nZXRRdWVzdGlvbkpTT04ocXVlc3Rpb24pO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHsgbmFtZTogbmFtZSwgaWNvbk5hbWU6ICdpY29uLScgKyBuYW1lLCB0aXRsZTogZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZygncXQuJyArIG5hbWUpLCBqc29uOiBqc29uLCBpc0NvcGllZDogZmFsc2UgfTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1ZhbHVlLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0UXVlc3Rpb25KU09OKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKTogYW55IHtcclxuICAgICAgICB2YXIganNvbiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdChxdWVzdGlvbik7XHJcbiAgICAgICAganNvbi50eXBlID0gcXVlc3Rpb24uZ2V0VHlwZSgpO1xyXG4gICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRRdWVzdGlvblR5cGVzKHN1cHBvcnRlZFF1ZXN0aW9uczogQXJyYXk8c3RyaW5nPik6IHN0cmluZ1tdIHtcclxuICAgICAgICB2YXIgYWxsVHlwZXMgPSBTdXJ2ZXkuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLmdldEFsbFR5cGVzKCk7XHJcbiAgICAgICAgaWYgKCFzdXBwb3J0ZWRRdWVzdGlvbnMgfHwgc3VwcG9ydGVkUXVlc3Rpb25zLmxlbmd0aCA9PSAwKSBzdXBwb3J0ZWRRdWVzdGlvbnMgPSBhbGxUeXBlcztcclxuICAgICAgICB2YXIgcXVlc3Rpb25zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9yZGVyZWRRdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLm9yZGVyZWRRdWVzdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGlmIChzdXBwb3J0ZWRRdWVzdGlvbnMuaW5kZXhPZihuYW1lKSA+IC0xICYmIGFsbFR5cGVzLmluZGV4T2YobmFtZSkgPiAtMSkgcXVlc3Rpb25zLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3VwcG9ydGVkUXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gc3VwcG9ydGVkUXVlc3Rpb25zW2ldO1xyXG4gICAgICAgICAgICBpZiAocXVlc3Rpb25zLmluZGV4T2Yoc3VwcG9ydGVkUXVlc3Rpb25zW2ldKSA8IDAgJiYgYWxsVHlwZXMuaW5kZXhPZihuYW1lKSA+IC0xKSBxdWVzdGlvbnMucHVzaChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9ucztcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25Ub29sYm94LnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7U3VydmV5SlNPTjV9IGZyb20gXCIuL2pzb241XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3VydmV5RW1iZWRpbmdXaW5kb3cge1xyXG4gICAgcHJpdmF0ZSBqc29uVmFsdWU6IGFueTtcclxuICAgIHByaXZhdGUgc3VydmV5RW1iZWRpbmdIZWFkOiBBY2VBamF4LkVkaXRvcjtcclxuICAgIHByaXZhdGUgc3VydmV5RW1iZWRpbmdKYXZhOiBBY2VBamF4LkVkaXRvcjtcclxuICAgIHByaXZhdGUgc3VydmV5RW1iZWRpbmdCb2R5OiBBY2VBamF4LkVkaXRvcjtcclxuICAgIGtvSGVhZFRleHQ6IGFueTtcclxuICAgIGtvQm9keVRleHQ6IGFueTtcclxuICAgIGtvSmF2YVRleHQ6IGFueTtcclxuICAgIHB1YmxpYyBzdXJ2ZXlJZDogc3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdXJ2ZXlQb3N0SWQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2VuZXJhdGVWYWxpZEpTT046IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzdXJ2ZXlKU1ZlcnNpb246IHN0cmluZyA9IFwiMC4xMi4zXCI7IC8vVE9ET1xyXG4gICAgcHVibGljIHN1cnZleUNETlBhdGg6IHN0cmluZyA9IFwiaHR0cHM6Ly9zdXJ2ZXlqcy5henVyZWVkZ2UubmV0L1wiO1xyXG4gICAga29TaG93QXNXaW5kb3c6IGFueTtcclxuICAgIGtvU2NyaXB0VXNpbmc6IGFueTtcclxuICAgIGtvSGFzSWRzOiBhbnk7XHJcbiAgICBrb0xvYWRTdXJ2ZXk6IGFueTtcclxuICAgIGtvTGlicmFyeVZlcnNpb246IGFueTtcclxuICAgIGtvVmlzaWJsZUh0bWw6IGFueTtcclxuICAgIHByaXZhdGUgcGxhdGZvcm1TdXJ2ZXlKU1ByZWZpeCA9IHtcclxuICAgICAgICBcImFuZ3VsYXJcIjogXCJhbmd1bGFyXCIsXHJcbiAgICAgICAgXCJqcXVlcnlcIjogXCJqcXVlcnlcIixcclxuICAgICAgICBcImtub2Nrb3V0XCI6IFwia29cIixcclxuICAgICAgICBcInJlYWN0XCI6IFwicmVhY3RcIixcclxuICAgICAgICBcInZ1ZVwiOiBcInZ1ZVwiXHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUhlYWRlcnMgPSB7XHJcbiAgICAgICAgXCJhbmd1bGFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJqcXVlcnlcIjogXCI8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuMS4xL2pxdWVyeS5taW4uanNcXFwiPjwvc2NyaXB0PlwiLFxyXG4gICAgICAgIFwia25vY2tvdXRcIjogXCI8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMva25vY2tvdXQvMy4zLjAva25vY2tvdXQtbWluLmpzXFxcIj48L3NjcmlwdD5cIixcclxuICAgICAgICBcInJlYWN0XCI6IFwiXCIsXHJcbiAgICAgICAgXCJ2dWVcIjogXCI8c2NyaXB0IHNyYz0naHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvdnVlLzIuMS4xMC92dWUubWluLmpzJz48L3NjcmlwdD5cIlxyXG4gICAgfTsqL1xyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUpTb25QYWdlID0ge1xyXG4gICAgICAgIFwiYW5ndWxhclwiOiBcIkBDb21wb25lbnQoe1xcbiAgc2VsZWN0b3I6ICduZy1hcHAnLFxcbiAgICAgICAgdGVtcGxhdGU6IFxcbiAgICAgICAgPGRpdiBpZD0nc3VydmV5RWxlbWVudCc+PC9kaXY+XFxcIixcXG59KVxcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xcbiAgICBuZ09uSW5pdCgpIHtcXG4gICAgICAgIHZhciBzdXJ2ZXkgPSBuZXcgU3VydmV5Lk1vZGVsKHN1cnZleUpTT04pO1xcbiAgICAgICAgc3VydmV5Lm9uQ29tcGxldGUuYWRkKHNlbmREYXRhVG9TZXJ2ZXIpO1xcbiAgICAgICBTdXJ2ZXkuU3VydmV5TkcucmVuZGVyKFxcXCJzdXJ2ZXlFbGVtZW50XFxcIiwgeyBtb2RlbDogc3VydmV5IH0pO1xcbiAgICB9XFxufVwiLFxyXG4gICAgICAgIFwianF1ZXJ5XCI6IFwidmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5SlNPTik7XFxuJChcXFwiI3N1cnZleUNvbnRhaW5lclxcXCIpLlN1cnZleSh7XFxuICAgIG1vZGVsOiBzdXJ2ZXksXFxuICAgIG9uQ29tcGxldGU6IHNlbmREYXRhVG9TZXJ2ZXJcXG59KTtcIixcclxuICAgICAgICBcImtub2Nrb3V0XCI6IFwidmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5SlNPTiwgXFxcInN1cnZleUNvbnRhaW5lclxcXCIpO1xcbnN1cnZleS5vbkNvbXBsZXRlLmFkZChzZW5kRGF0YVRvU2VydmVyKTtcIixcclxuICAgICAgICBcInJlYWN0XCI6IFwiUmVhY3RET00ucmVuZGVyKFxcbiAgICA8U3VydmV5LlN1cnZleSBqc29uPXsgc3VydmV5SlNPTiB9IG9uQ29tcGxldGU9eyBzZW5kRGF0YVRvU2VydmVyIH0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJzdXJ2ZXlDb250YWluZXJcXFwiKSk7XCIsXHJcbiAgICAgICAgXCJ2dWVcIjogXCJ2YXIgc3VydmV5ID0gbmV3IFN1cnZleS5Nb2RlbChzdXJ2ZXlKU09OKTtcXG5uZXcgVnVlKHsgZWw6ICcjc3VydmV5Q29udGFpbmVyJywgZGF0YTogeyBzdXJ2ZXk6IHN1cnZleSB9IH0pO1wiXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUpTb25XaW5kb3cgPSB7XHJcbiAgICAgICAgXCJhbmd1bGFyXCI6IFwiQENvbXBvbmVudCh7XFxuICBzZWxlY3RvcjogJ25nLWFwcCcsXFxuICAgICAgICB0ZW1wbGF0ZTogXFxuICAgICAgICA8ZGl2IGlkPSdzdXJ2ZXlFbGVtZW50Jz48L2Rpdj5cXFwiLFxcbn0pXFxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XFxuICAgIG5nT25Jbml0KCkge1xcbiAgICAgICAgdmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5SlNPTik7XFxuICAgICAgICBzdXJ2ZXkub25Db21wbGV0ZS5hZGQoc2VuZERhdGFUb1NlcnZlcik7XFxuICAgICAgIFN1cnZleS5TdXJ2ZXlXaW5kb3dORy5yZW5kZXIoXFxcInN1cnZleUVsZW1lbnRcXFwiLCB7IG1vZGVsOiBzdXJ2ZXkgfSk7XFxuICAgIH1cXG59XCIsXHJcbiAgICAgICAgXCJqcXVlcnlcIjogXCJ2YXIgc3VydmV5ID0gbmV3IFN1cnZleS5Nb2RlbChzdXJ2ZXlKU09OKTtcXG4kKFxcXCIjc3VydmV5Q29udGFpbmVyXFxcIikuU3VydmV5V2luZG93KHtcXG4gICAgbW9kZWw6IHN1cnZleSxcXG4gICAgb25Db21wbGV0ZTogc2VuZERhdGFUb1NlcnZlclxcbn0pO1wiLFxyXG4gICAgICAgIFwia25vY2tvdXRcIjogXCJ2YXIgc3VydmV5ID0gbmV3IFN1cnZleS5Nb2RlbChzdXJ2ZXlKU09OKTtcXG5zdXJ2ZXlXaW5kb3cuc2hvdygpO1xcbnN1cnZleS5vbkNvbXBsZXRlLmFkZChzZW5kRGF0YVRvU2VydmVyKTtcIixcclxuICAgICAgICBcInJlYWN0XCI6IFwiUmVhY3RET00ucmVuZGVyKFxcbiAgICA8U3VydmV5LlN1cnZleVdpbmRvdyBqc29uPXsgc3VydmV5SlNPTiB9IG9uQ29tcGxldGU9eyBzZW5kRGF0YVRvU2VydmVyIH0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJzdXJ2ZXlDb250YWluZXJcXFwiKSk7XCIsXHJcbiAgICAgICAgXCJ2dWVcIjogXCJcIlxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgcGxhdGZvcm1IdG1sb25QYWdlID0ge1xyXG4gICAgICAgIFwiYW5ndWxhclwiOiBcIjxuZy1hcHA+PC9uZy1hcHA+XCIsXHJcbiAgICAgICAgXCJqcXVlcnlcIjogXCI8ZGl2IGlkPVxcXCJzdXJ2ZXlDb250YWluZXJcXFwiPjwvZGl2PlwiLFxyXG4gICAgICAgIFwia25vY2tvdXRcIjogXCI8ZGl2IGlkPVxcXCJzdXJ2ZXlDb250YWluZXJcXFwiPjwvZGl2PlwiLFxyXG4gICAgICAgIFwicmVhY3RcIjogXCI8ZGl2IGlkPVxcXCJzdXJ2ZXlDb250YWluZXJcXFwiPjwvZGl2PlwiLFxyXG4gICAgICAgIFwidnVlXCI6IFwiPGRpdiBpZD1cXFwic3VydmV5Q29udGFpbmVyXFxcIj48c3VydmV5IDpzdXJ2ZXk9XFxcInN1cnZleVxcXCI+PC9zdXJ2ZXk+PC9kaXY+XCJcclxuICAgIH07XHJcbiAgICBwcml2YXRlIHBsYXRmb3JtSHRtbG9uV2luZG93ID0ge1xyXG4gICAgICAgIFwiYW5ndWxhclwiOiBcIjxuZy1hcHA+PC9uZy1hcHA+XCIsXHJcbiAgICAgICAgXCJqcXVlcnlcIjogXCI8ZGl2IGlkPVxcXCJzdXJ2ZXlDb250YWluZXJcXFwiPjwvZGl2PlwiLFxyXG4gICAgICAgIFwia25vY2tvdXRcIjogXCJcIixcclxuICAgICAgICBcInJlYWN0XCI6IFwiPGRpdiBpZD1cXFwic3VydmV5Q29udGFpbmVyXFxcIj48L2Rpdj5cIixcclxuICAgICAgICBcInZ1ZVwiOiBcIjxkaXYgaWQ9J3N1cnZleUNvbnRhaW5lcic+PHN1cnZleS13aW5kb3cgOnN1cnZleT0nc3VydmV5Jz48L3N1cnZleS13aW5kb3c+PC9kaXY+XCJcclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5rb0xpYnJhcnlWZXJzaW9uID0ga28ub2JzZXJ2YWJsZShcImpxdWVyeVwiKTtcclxuICAgICAgICB0aGlzLmtvU2hvd0FzV2luZG93ID0ga28ub2JzZXJ2YWJsZShcInBhZ2VcIik7XHJcbiAgICAgICAgdGhpcy5rb1NjcmlwdFVzaW5nID0ga28ub2JzZXJ2YWJsZShcImJvb3RzdHJhcFwiKTtcclxuICAgICAgICB0aGlzLmtvSGFzSWRzID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5rb0xvYWRTdXJ2ZXkgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5rb0hlYWRUZXh0ID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcclxuICAgICAgICB0aGlzLmtvSmF2YVRleHQgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xyXG4gICAgICAgIHRoaXMua29Cb2R5VGV4dCA9IGtvLm9ic2VydmFibGUoXCJcIik7XHJcblxyXG4gICAgICAgIHRoaXMua29WaXNpYmxlSHRtbCA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYua29TaG93QXNXaW5kb3coKSA9PSBcInBhZ2VcIiB8fCBzZWxmLnBsYXRmb3JtSHRtbG9uV2luZG93W3NlbGYua29MaWJyYXJ5VmVyc2lvbigpXSAhPSBcIlwiOyB9KTtcclxuICAgICAgICB0aGlzLmtvTGlicmFyeVZlcnNpb24uc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnNldEhlYWRUZXh0KCk7IHNlbGYuc2V0SmF2YVRlc3QoKTsgc2VsZi5zZXRCb2R5VGV4dCgpOyB9KTtcclxuICAgICAgICB0aGlzLmtvU2hvd0FzV2luZG93LnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zZXRKYXZhVGVzdCgpOyBzZWxmLnNldEJvZHlUZXh0KCk7IH0pO1xyXG4gICAgICAgIHRoaXMua29TY3JpcHRVc2luZy5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2V0SGVhZFRleHQoKTsgc2VsZi5zZXRKYXZhVGVzdCgpOyB9KTtcclxuICAgICAgICB0aGlzLmtvTG9hZFN1cnZleS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2V0SmF2YVRlc3QoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZ0hlYWQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBqc29uKCk6IGFueSB7IHJldHVybiB0aGlzLmpzb25WYWx1ZTsgfVxyXG4gICAgcHVibGljIHNldCBqc29uKHZhbHVlOiBhbnkpIHsgdGhpcy5qc29uVmFsdWUgPSB2YWx1ZTsgfVxyXG4gICAgcHVibGljIGdldCBoYXNBY2VFZGl0b3IoKTogYm9vbGVhbiB7IHJldHVybiB0eXBlb2YgYWNlICE9PSBcInVuZGVmaW5lZFwiOyB9XHJcbiAgICBwdWJsaWMgc2hvdygpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNBY2VFZGl0b3IgJiYgdGhpcy5zdXJ2ZXlFbWJlZGluZ0hlYWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nSGVhZCA9IHRoaXMuY3JlYXRlRWRpdG9yKFwic3VydmV5RW1iZWRpbmdIZWFkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nQm9keSA9IHRoaXMuY3JlYXRlRWRpdG9yKFwic3VydmV5RW1iZWRpbmdCb2R5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nSmF2YSA9IHRoaXMuY3JlYXRlRWRpdG9yKFwic3VydmV5RW1iZWRpbmdKYXZhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtvSGFzSWRzKHRoaXMuc3VydmV5SWQgJiYgdGhpcy5zdXJ2ZXlQb3N0SWQpO1xyXG4gICAgICAgIHRoaXMuc2V0Qm9keVRleHQoKTtcclxuICAgICAgICB0aGlzLnNldEhlYWRUZXh0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRKYXZhVGVzdCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXRCb2R5VGV4dCgpIHtcclxuICAgICAgICB0aGlzLnNldFRleHRUb0VkaXRvcih0aGlzLnN1cnZleUVtYmVkaW5nQm9keSwgdGhpcy5rb0JvZHlUZXh0LCB0aGlzLnBsYXRmb3JtSHRtbG9uUGFnZVt0aGlzLmtvTGlicmFyeVZlcnNpb24oKV0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXQgZ2V0Q0ROUGF0aCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zdXJ2ZXlDRE5QYXRoICsgdGhpcy5zdXJ2ZXlKU1ZlcnNpb24gKyBcIi9cIjsgfVxyXG4gICAgcHJpdmF0ZSBzZXRIZWFkVGV4dCgpIHtcclxuICAgICAgICB2YXIgc3RyID0gXCI8IS0tIFlvdXIgcGxhdGZvcm0gKFwiICsgdGhpcy5rb0xpYnJhcnlWZXJzaW9uKCkgKyBcIikgc2NyaXB0cy4gLS0+XFxuXCI7XHJcbiAgICAgICAgaWYgKHRoaXMua29TY3JpcHRVc2luZygpICE9IFwiYm9vdHN0cmFwXCIpIHtcclxuICAgICAgICAgICAgc3RyICs9IFwiXFxuPGxpbmsgaHJlZj1cXFwiXCIgKyB0aGlzLmdldENETlBhdGggKyAgXCJzdXJ2ZXkuY3NzXFxcIiB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCIgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiAvPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHIgKz0gXCJcXG48c2NyaXB0IHNyYz1cXFwiXCIgKyB0aGlzLmdldENETlBhdGggKyAgIFwic3VydmV5LlwiICsgdGhpcy5wbGF0Zm9ybVN1cnZleUpTUHJlZml4W3RoaXMua29MaWJyYXJ5VmVyc2lvbigpXSArICBcIiAubWluLmpzXFxcIj48L3NjcmlwdD5cIjtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRUZXh0VG9FZGl0b3IodGhpcy5zdXJ2ZXlFbWJlZGluZ0hlYWQsIHRoaXMua29IZWFkVGV4dCwgc3RyKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0SmF2YVRlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRUZXh0VG9FZGl0b3IodGhpcy5zdXJ2ZXlFbWJlZGluZ0phdmEsIHRoaXMua29KYXZhVGV4dCwgdGhpcy5nZXRKYXZhVGV4dCgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY3JlYXRlRWRpdG9yKGVsZW1lbnROYW1lOiBzdHJpbmcpOiBBY2VBamF4LkVkaXRvciB7XHJcbiAgICAgICAgdmFyIGVkaXRvciA9IGFjZS5lZGl0KGVsZW1lbnROYW1lKTtcclxuICAgICAgICBlZGl0b3Iuc2V0VGhlbWUoXCJhY2UvdGhlbWUvbW9ub2thaVwiKTtcclxuICAgICAgICBlZGl0b3Iuc2Vzc2lvbi5zZXRNb2RlKFwiYWNlL21vZGUvanNvblwiKTtcclxuICAgICAgICBlZGl0b3Iuc2V0U2hvd1ByaW50TWFyZ2luKGZhbHNlKTtcclxuICAgICAgICBlZGl0b3IucmVuZGVyZXIuc2V0U2hvd0d1dHRlcihmYWxzZSk7XHJcbiAgICAgICAgZWRpdG9yLnNldFJlYWRPbmx5KHRydWUpO1xyXG4gICAgICAgIHJldHVybiBlZGl0b3I7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEphdmFUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGlzT25QYWdlID0gdGhpcy5rb1Nob3dBc1dpbmRvdygpID09IFwicGFnZVwiO1xyXG4gICAgICAgIHZhciBzdHIgPSB0aGlzLmdldFNhdmVGdW5jKCkgKyBcIlxcblxcblwiO1xyXG4gICAgICAgIHN0ciArPSBpc09uUGFnZSA/IHRoaXMucGxhdGZvcm1KU29uUGFnZVt0aGlzLmtvTGlicmFyeVZlcnNpb24oKV0gOiB0aGlzLnBsYXRmb3JtSlNvbldpbmRvd1t0aGlzLmtvTGlicmFyeVZlcnNpb24oKV07XHJcbiAgICAgICAgdmFyIGpzb25UZXh0ID0gXCJ2YXIgc3VydmV5SlNPTiA9IFwiICsgdGhpcy5nZXRKc29uVGV4dCgpICsgXCJcXG5cXG5cIjtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTZXRDc3MoKSArIFwiXFxuXCIgKyBqc29uVGV4dCArIHN0cjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0U2V0Q3NzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMua29TY3JpcHRVc2luZygpICE9IFwiYm9vdHN0cmFwXCIpIHJldHVybiBcIlwiO1xyXG4gICAgICAgIHJldHVybiBcIlN1cnZleS5TdXJ2ZXkuY3NzVHlwZSA9IFxcXCJib290c3RyYXBcXFwiO1xcblwiO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRTYXZlRnVuYygpIHtcclxuICAgICAgICByZXR1cm4gXCJmdW5jdGlvbiBzZW5kRGF0YVRvU2VydmVyKHN1cnZleSkge1xcblwiICsgdGhpcy5nZXRTYXZlRnVuY0NvZGUoKSArIFwiXFxufVwiO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRTYXZlRnVuY0NvZGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMua29IYXNJZHMoKSkgcmV0dXJuIFwiICAgIHN1cnZleS5zZW5kUmVzdWx0KCdcIiArIHRoaXMuc3VydmV5UG9zdElkICsgXCInKTtcIjtcclxuICAgICAgICByZXR1cm4gXCIgICAgLy9zZW5kIEFqYXggcmVxdWVzdCB0byB5b3VyIHdlYiBzZXJ2ZXIuXFxuICAgIGFsZXJ0KFxcXCJUaGUgcmVzdWx0cyBhcmU6XFxcIiArIEpTT04uc3RyaW5naWZ5KHMuZGF0YSkpO1wiO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRKc29uVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmtvSGFzSWRzKCkgJiYgdGhpcy5rb0xvYWRTdXJ2ZXkoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ7IHN1cnZleUlkOiAnXCIgKyB0aGlzLnN1cnZleUlkICsgXCInfVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nZW5lcmF0ZVZhbGlkSlNPTikgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuanNvbik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdXJ2ZXlKU09ONSgpLnN0cmluZ2lmeSh0aGlzLmpzb24pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXRUZXh0VG9FZGl0b3IoZWRpdG9yOiBBY2VBamF4LkVkaXRvciwga29UZXh0OiBhbnksIHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChlZGl0b3IpIGVkaXRvci5zZXRWYWx1ZSh0ZXh0KTtcclxuICAgICAgICBpZiAoa29UZXh0KSBrb1RleHQodGV4dCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3VydmV5RW1iZWRpbmdXaW5kb3cudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlVbmRvUmVkbyB7XHJcbiAgICBwcml2YXRlIGl0ZW1zOiBBcnJheTxVbmRvUmVkb0l0ZW0+O1xyXG4gICAgcHJpdmF0ZSBpbmRleDogbnVtYmVyID0gLTE7XHJcbiAgICBwdWJsaWMga29DYW5VbmRvOiBhbnk7IGtvQ2FuUmVkbzogYW55O1xyXG4gICAgcHVibGljIG1heGltdW1Db3VudDogbnVtYmVyID0gMTA7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5rb0NhblVuZG8gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmtvQ2FuUmVkbyA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLmtvQ2FuVW5kbyhmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5rb0NhblJlZG8oZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEN1cnJlbnQoc3VydmV5OiBTdXJ2ZXkuU3VydmV5LCBzZWxlY3RlZE9iak5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHZhciBpdGVtID0gbmV3IFVuZG9SZWRvSXRlbSgpO1xyXG4gICAgICAgIGl0ZW0uc3VydmV5SlNPTiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdChzdXJ2ZXkpO1xyXG4gICAgICAgIGl0ZW0uc2VsZWN0ZWRPYmpOYW1lID0gc2VsZWN0ZWRPYmpOYW1lO1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuaW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlT2xkRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDYW5VbmRvUmVkbygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVuZG8oKTogVW5kb1JlZG9JdGVtIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuVW5kbykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9VbmRvUmVkbygtMSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVkbygpOiBVbmRvUmVkb0l0ZW0gIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuUmVkbykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9VbmRvUmVkbygxKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlQ2FuVW5kb1JlZG8oKSB7XHJcbiAgICAgICAgdGhpcy5rb0NhblVuZG8odGhpcy5jYW5VbmRvKTtcclxuICAgICAgICB0aGlzLmtvQ2FuUmVkbyh0aGlzLmNhblJlZG8pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkb1VuZG9SZWRvKGRJbmRleDogbnVtYmVyKTogVW5kb1JlZG9JdGVtIHtcclxuICAgICAgICB0aGlzLmluZGV4ICs9IGRJbmRleDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhblVuZG9SZWRvKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggPj0gMCAmJiB0aGlzLmluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGggPyB0aGlzLml0ZW1zW3RoaXMuaW5kZXhdIDogbnVsbDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgY2FuVW5kbygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCA+PSAxICYmIHRoaXMuaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgY2FuUmVkbygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGggPiAxICYmIHRoaXMuaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlbW92ZU9sZERhdGEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoIC0gMSA8IHRoaXMubWF4aW11bUNvdW50KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoMCwgdGhpcy5pdGVtcy5sZW5ndGggLSB0aGlzLm1heGltdW1Db3VudCAtIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVW5kb1JlZG9JdGVtIHtcclxuICAgIHN1cnZleUpTT046IGFueTtcclxuICAgIHNlbGVjdGVkT2JqTmFtZTogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VuZG9yZWRvLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XHJcbmltcG9ydCB7U3VydmV5T2JqZWN0RWRpdG9yfSBmcm9tIFwiLi9vYmplY3RFZGl0b3JcIjtcclxuaW1wb3J0IHtTdXJ2ZXlQYWdlc0VkaXRvcn0gZnJvbSBcIi4vcGFnZXNFZGl0b3JcIjtcclxuaW1wb3J0IHtTdXJ2ZXlFbWJlZGluZ1dpbmRvd30gZnJvbSBcIi4vc3VydmV5RW1iZWRpbmdXaW5kb3dcIjtcclxuaW1wb3J0IHtTdXJ2ZXlPYmplY3RzfSBmcm9tIFwiLi9zdXJ2ZXlPYmplY3RzXCI7XHJcbmltcG9ydCB7U3VydmV5VmVyYnN9IGZyb20gXCIuL29iamVjdFZlcmJzXCI7XHJcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JTaG93V2luZG93fSBmcm9tIFwiLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3JcIjtcclxuaW1wb3J0IHtTdXJ2ZXlKU09ORWRpdG9yfSBmcm9tIFwiLi9zdXJ2ZXlKU09ORWRpdG9yXCI7XHJcbmltcG9ydCB7U3VydmV5VGV4dFdvcmtlcn0gZnJvbSBcIi4vdGV4dFdvcmtlclwiXHJcbmltcG9ydCB7U3VydmV5VW5kb1JlZG8sIFVuZG9SZWRvSXRlbX0gZnJvbSBcIi4vdW5kb3JlZG9cIjtcclxuaW1wb3J0IHtTdXJ2ZXlIZWxwZXIsIE9ialR5cGV9IGZyb20gXCIuL3N1cnZleUhlbHBlclwiO1xyXG5pbXBvcnQge0RyYWdEcm9wSGVscGVyfSBmcm9tIFwiLi9kcmFnZHJvcGhlbHBlclwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uVG9vbGJveH0gZnJvbSBcIi4vcXVlc3Rpb25Ub29sYm94XCI7XHJcbmltcG9ydCB7U3VydmV5SlNPTjV9IGZyb20gXCIuL2pzb241XCI7XHJcbnZhciB0ZW1wbGF0ZUVkaXRvckh0bWwgPSByZXF1aXJlKFwiaHRtbC1sb2FkZXI/aW50ZXJwb2xhdGUhdmFsLWxvYWRlciEuL3RlbXBsYXRlcy9lbnRyeS5odG1sXCIpO1xyXG52YXIgdGVtcGxhdGVQYWdlSHRtbCA9IHJlcXVpcmUoXCJodG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSF2YWwtbG9hZGVyIS4vdGVtcGxhdGVzLnN1cnZleS90ZW1wbGF0ZV9wYWdlLmh0bWxcIik7XHJcbnZhciB0ZW1wbGF0ZVF1ZXN0aW9uSHRtbCA9IHJlcXVpcmUoXCJodG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSF2YWwtbG9hZGVyIS4vdGVtcGxhdGVzLnN1cnZleS90ZW1wbGF0ZV9xdWVzdGlvbi5odG1sXCIpO1xyXG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleUVkaXRvciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHROZXdTdXJ2ZXlUZXh0OiBzdHJpbmcgPSBcInsgcGFnZXM6IFsgeyBuYW1lOiAncGFnZTEnfV0gfVwiO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBzdXJ2ZXlqczogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHN1cnZleWpzRXhhbXBsZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBqc29uRWRpdG9yOiBTdXJ2ZXlKU09ORWRpdG9yO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZE9iamVjdEVkaXRvcjogU3VydmV5T2JqZWN0RWRpdG9yO1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvbkVkaXRvcldpbmRvdzogU3VydmV5UHJvcGVydHlFZGl0b3JTaG93V2luZG93O1xyXG4gICAgcHJpdmF0ZSBwYWdlc0VkaXRvcjogU3VydmV5UGFnZXNFZGl0b3I7XHJcbiAgICBwcml2YXRlIHN1cnZleUVtYmVkaW5nOiBTdXJ2ZXlFbWJlZGluZ1dpbmRvdztcclxuICAgIHByaXZhdGUgc3VydmV5T2JqZWN0czogU3VydmV5T2JqZWN0cztcclxuICAgIHByaXZhdGUgdG9vbGJveFZhbHVlOiBRdWVzdGlvblRvb2xib3g7XHJcbiAgICBwcml2YXRlIHN1cnZleVZlcmJzOiBTdXJ2ZXlWZXJicztcclxuICAgIHByaXZhdGUgdW5kb1JlZG86IFN1cnZleVVuZG9SZWRvO1xyXG4gICAgcHJpdmF0ZSBzdXJ2ZXlWYWx1ZTogU3VydmV5LlN1cnZleTtcclxuICAgIHByaXZhdGUgc2F2ZVN1cnZleUZ1bmNWYWx1ZTogKG5vOiBudW1iZXIsIG9uU2F2ZUNhbGxiYWNrOiAobm86IG51bWJlciwgaXNTdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBhbnk7XHJcbiAgICBwcml2YXRlIHN0YXRlVmFsdWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGRyYWdEcm9wSGVscGVyOiBEcmFnRHJvcEhlbHBlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNob3dKU09ORWRpdG9yVGFiVmFsdWU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHNob3dUZXN0U3VydmV5VGFiVmFsdWU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHNob3dFbWJlZGVkU3VydmV5VGFiVmFsdWU6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHN1cnZleUlkOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHN1cnZleVBvc3RJZDogc3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZW5lcmF0ZVZhbGlkSlNPTkNoYW5nZWRDYWxsYmFjazogKGdlbmVyYXRlVmFsaWRKU09OOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIGFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9yczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIG9uQ2FuU2hvd1Byb3BlcnR5OiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xyXG4gICAgcHVibGljIG9uUXVlc3Rpb25BZGRlZDogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleUVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleUVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcclxuICAgIHB1YmxpYyBvbk1vZGlmaWVkOiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xyXG5cclxuICAgIGtvSXNTaG93RGVzaWduZXI6IGFueTtcclxuICAgIGtvVmlld1R5cGU6IGFueTtcclxuICAgIGtvQ2FuRGVsZXRlT2JqZWN0OiBhbnk7XHJcbiAgICBrb09iamVjdHM6IGFueTsga29TZWxlY3RlZE9iamVjdDogYW55O1xyXG4gICAga29TaG93U2F2ZUJ1dHRvbjogYW55O1xyXG4gICAga29HZW5lcmF0ZVZhbGlkSlNPTjogYW55OyBrb1Nob3dPcHRpb25zOiBhbnk7IGtvVGVzdFN1cnZleVdpZHRoOiBhbnk7IGtvRGVzaWduZXJIZWlnaHQ6IGFueTtcclxuICAgIHNlbGVjdERlc2lnbmVyQ2xpY2s6IGFueTsgc2VsZWN0RWRpdG9yQ2xpY2s6IGFueTsgc2VsZWN0VGVzdENsaWNrOiBhbnk7IHNlbGVjdEVtYmVkQ2xpY2s6IGFueTtcclxuICAgIGdlbmVyYXRlVmFsaWRKU09OQ2xpY2s6IGFueTsgZ2VuZXJhdGVSZWFkYWJsZUpTT05DbGljazogYW55O1xyXG4gICAgZG9VbmRvQ2xpY2s6IGFueTsgZG9SZWRvQ2xpY2s6IGFueTtcclxuICAgIGRlbGV0ZU9iamVjdENsaWNrOiBhbnk7XHJcbiAgICBrb1N0YXRlOiBhbnk7XHJcbiAgICBydW5TdXJ2ZXlDbGljazogYW55OyBlbWJlZGluZ1N1cnZleUNsaWNrOiBhbnk7XHJcbiAgICBzYXZlQnV0dG9uQ2xpY2s6IGFueTtcclxuICAgIGRyYWdnaW5nVG9vbGJveEl0ZW06IGFueTsgY2xpY2tUb29sYm94SXRlbTogYW55O1xyXG4gICAgZHJhZ0VuZDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVkRWxlbWVudDogYW55ID0gbnVsbCwgb3B0aW9uczogYW55ID0gbnVsbCkge1xyXG5cclxuICAgICAgICB0aGlzLmtvU2hvd09wdGlvbnMgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5rb0dlbmVyYXRlVmFsaWRKU09OID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgICAgIHRoaXMua29EZXNpZ25lckhlaWdodCA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5rb0NhbkRlbGV0ZU9iamVjdCA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMua29TdGF0ZSA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgICAgICB0aGlzLmtvU2hvd1NhdmVCdXR0b24gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmtvVGVzdFN1cnZleVdpZHRoID0ga28ub2JzZXJ2YWJsZShcIjEwMCVcIik7XHJcbiAgICAgICAgdGhpcy5zYXZlQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZG9TYXZlKCk7IH07XHJcbiAgICAgICAgdGhpcy5rb09iamVjdHMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRPYmplY3QgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkT2JqZWN0LnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zZWxlY3RlZE9iamVjdENoYW5nZWQobmV3VmFsdWUgIT0gbnVsbCA/IG5ld1ZhbHVlLnZhbHVlIDogbnVsbCk7IH0pO1xyXG4gICAgICAgIHRoaXMua29HZW5lcmF0ZVZhbGlkSlNPTi5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5vcHRpb25zKSBzZWxmLm9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgc2VsZi5vcHRpb25zLmdlbmVyYXRlVmFsaWRKU09OID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmdlbmVyYXRlVmFsaWRKU09OQ2hhbmdlZENhbGxiYWNrKSBzZWxmLmdlbmVyYXRlVmFsaWRKU09OQ2hhbmdlZENhbGxiYWNrKG5ld1ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMgPSBuZXcgU3VydmV5T2JqZWN0cyh0aGlzLmtvT2JqZWN0cywgdGhpcy5rb1NlbGVjdGVkT2JqZWN0KTtcclxuICAgICAgICB0aGlzLnVuZG9SZWRvID0gbmV3IFN1cnZleVVuZG9SZWRvKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3VydmV5VmVyYnMgPSBuZXcgU3VydmV5VmVyYnMoZnVuY3Rpb24gKCkgeyBzZWxmLnNldE1vZGlmaWVkKCk7IH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yID0gbmV3IFN1cnZleU9iamVjdEVkaXRvcih0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayA9IGZ1bmN0aW9uIChvYmplY3Q6IGFueSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYub25DYW5TaG93T2JqZWN0UHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZC5hZGQoKHNlbmRlciwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQob3B0aW9ucy5wcm9wZXJ0eSwgb3B0aW9ucy5vYmplY3QsIG9wdGlvbnMubmV3VmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25FZGl0b3JXaW5kb3cgPSBuZXcgU3VydmV5UHJvcGVydHlFZGl0b3JTaG93V2luZG93KCk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbkVkaXRvcldpbmRvdy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrID0gZnVuY3Rpb24gKG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5vbkNhblNob3dPYmplY3RQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWdlc0VkaXRvciA9IG5ldyBTdXJ2ZXlQYWdlc0VkaXRvcigoKSA9PiB7IHNlbGYuYWRkUGFnZSgpOyB9LCAocGFnZTogU3VydmV5LlBhZ2UpID0+IHsgc2VsZi5zdXJ2ZXlPYmplY3RzLnNlbGVjdE9iamVjdChwYWdlKTsgfSxcclxuICAgICAgICAgICAgKGluZGV4RnJvbTogbnVtYmVyLCBpbmRleFRvOiBudW1iZXIpID0+IHsgc2VsZi5tb3ZlUGFnZShpbmRleEZyb20sIGluZGV4VG8pOyB9LCAocGFnZTogU3VydmV5LlBhZ2UpID0+IHsgc2VsZi5kZWxldGVDdXJyZW50T2JqZWN0KCk7IH0pO1xyXG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcgPSBuZXcgU3VydmV5RW1iZWRpbmdXaW5kb3coKTtcclxuICAgICAgICB0aGlzLnRvb2xib3hWYWx1ZSA9IG5ldyBRdWVzdGlvblRvb2xib3godGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5xdWVzdGlvblR5cGVzID8gdGhpcy5vcHRpb25zLnF1ZXN0aW9uVHlwZXMgOiBudWxsKTtcclxuXHJcbiAgICAgICAgdGhpcy5rb1ZpZXdUeXBlID0ga28ub2JzZXJ2YWJsZShcImRlc2lnbmVyXCIpO1xyXG4gICAgICAgIHRoaXMua29Jc1Nob3dEZXNpZ25lciA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYua29WaWV3VHlwZSgpID09IFwiZGVzaWduZXJcIjsgfSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3REZXNpZ25lckNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dEZXNpZ25lcigpOyB9O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RWRpdG9yQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd0pzb25FZGl0b3IoKTsgfTtcclxuICAgICAgICB0aGlzLnNlbGVjdFRlc3RDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93VGVzdFN1cnZleSgpOyB9O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RW1iZWRDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93RW1iZWRFZGl0b3IoKTsgfTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlVmFsaWRKU09OQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29HZW5lcmF0ZVZhbGlkSlNPTih0cnVlKTsgfTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlUmVhZGFibGVKU09OQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29HZW5lcmF0ZVZhbGlkSlNPTihmYWxzZSk7IH07XHJcbiAgICAgICAgdGhpcy5ydW5TdXJ2ZXlDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93TGl2ZVN1cnZleSgpOyB9O1xyXG4gICAgICAgIHRoaXMuZW1iZWRpbmdTdXJ2ZXlDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93U3VydmV5RW1iZWRpbmcoKTsgfTtcclxuICAgICAgICB0aGlzLmRlbGV0ZU9iamVjdENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmRlbGV0ZUN1cnJlbnRPYmplY3QoKTsgfTtcclxuICAgICAgICB0aGlzLmRyYWdnaW5nVG9vbGJveEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSwgZSkgeyBzZWxmLmRvRHJhZ2dpbmdUb29sYm94SXRlbShpdGVtLmpzb24sIGUpOyB9O1xyXG4gICAgICAgIHRoaXMuY2xpY2tUb29sYm94SXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYuZG9DbGlja1Rvb2xib3hJdGVtKGl0ZW0uanNvbik7IH07XHJcbiAgICAgICAgdGhpcy5kcmFnRW5kID0gZnVuY3Rpb24gKGl0ZW0sIGUpIHsgc2VsZi5kcmFnRHJvcEhlbHBlci5lbmQoKTsgfTtcclxuXHJcbiAgICAgICAgdGhpcy5kb1VuZG9DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kb1VuZG9SZWRvKHNlbGYudW5kb1JlZG8udW5kbygpKTsgfTtcclxuICAgICAgICB0aGlzLmRvUmVkb0NsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmRvVW5kb1JlZG8oc2VsZi51bmRvUmVkby5yZWRvKCkpOyB9O1xyXG5cclxuICAgICAgICB0aGlzLmpzb25FZGl0b3IgPSBuZXcgU3VydmV5SlNPTkVkaXRvcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGV4dCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChyZW5kZXJlZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIocmVuZGVyZWRFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuc2hvd0pTT05FZGl0b3JUYWJWYWx1ZSA9IG9wdGlvbnMgJiYgdHlwZW9mIChvcHRpb25zLnNob3dKU09ORWRpdG9yVGFiKSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLnNob3dKU09ORWRpdG9yVGFiIDogdHJ1ZTtcclxuICAgICAgICB0aGlzLnNob3dUZXN0U3VydmV5VGFiVmFsdWUgPSBvcHRpb25zICYmIHR5cGVvZiAob3B0aW9ucy5zaG93VGVzdFN1cnZleVRhYikgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5zaG93VGVzdFN1cnZleVRhYiA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93RW1iZWRlZFN1cnZleVRhYlZhbHVlID0gb3B0aW9ucyAmJiB0eXBlb2YgKG9wdGlvbnMuc2hvd0VtYmVkZWRTdXJ2ZXlUYWIpICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuc2hvd0VtYmVkZWRTdXJ2ZXlUYWIgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmtvU2hvd09wdGlvbnMob3B0aW9ucyAmJiB0eXBlb2YgKG9wdGlvbnMuc2hvd09wdGlvbnMpICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuc2hvd09wdGlvbnMgOiBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5rb0dlbmVyYXRlVmFsaWRKU09OKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuZ2VuZXJhdGVWYWxpZEpTT04pO1xyXG4gICAgICAgIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5kZXNpZ25lckhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmtvRGVzaWduZXJIZWlnaHQob3B0aW9ucy5kZXNpZ25lckhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua29EZXNpZ25lckhlaWdodCgpXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3IpIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iuc2V0T3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgc3VydmV5KCk6IFN1cnZleS5TdXJ2ZXkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN1cnZleVZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbmRlcihlbGVtZW50OiBhbnkgPSBudWxsLCBvcHRpb25zOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudCA9IHRoaXMucmVuZGVyZWRFbGVtZW50O1xyXG4gICAgICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGVtcGxhdGVFZGl0b3JIdG1sO1xyXG4gICAgICAgIHNlbGYuYXBwbHlCaW5kaW5nKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbG9hZFN1cnZleShzdXJ2ZXlJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIG5ldyBTdXJ2ZXkuZHhTdXJ2ZXlTZXJ2aWNlKCkubG9hZFN1cnZleShzdXJ2ZXlJZCwgZnVuY3Rpb24gKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3VsdDogc3RyaW5nLCByZXNwb25zZTogYW55KSB7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzICYmIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi50ZXh0ID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCB0ZXh0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtvSXNTaG93RGVzaWduZXIoKSkgcmV0dXJuIHRoaXMuZ2V0U3VydmV5VGV4dEZyb21EZXNpZ25lcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmpzb25FZGl0b3IudGV4dDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHRleHRXb3JrZXIgPSBuZXcgU3VydmV5VGV4dFdvcmtlcih2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHRleHRXb3JrZXIuaXNKc29uQ29ycmVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRTdXJ2ZXkobmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHRleHRXb3JrZXIuc3VydmV5KSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Rlc2lnbmVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJlZGl0b3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCB0b29sYm94KCk6IFF1ZXN0aW9uVG9vbGJveCB7IHJldHVybiB0aGlzLnRvb2xib3hWYWx1ZTsgfVxyXG4gICAgcHVibGljIGdldCBjdXN0b21Ub29sYm94UXVlc3Rpb25NYXhDb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy50b29sYm94LmNvcGllZEl0ZW1NYXhDb3VudDsgfVxyXG4gICAgcHVibGljIHNldCBjdXN0b21Ub29sYm94UXVlc3Rpb25NYXhDb3VudCh2YWx1ZTogbnVtYmVyKSB7IHRoaXMudG9vbGJveC5jb3BpZWRJdGVtTWF4Q291bnQgPSB2YWx1ZTsgfVxyXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zdGF0ZVZhbHVlOyB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0U3RhdGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc3RhdGVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMua29TdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgIH1cclxuICAgIHNhdmVObzogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBkb1NhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcInNhdmluZ1wiKTtcclxuICAgICAgICBpZiAodGhpcy5zYXZlU3VydmV5RnVuYykge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVObysrO1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVN1cnZleUZ1bmModGhpcy5zYXZlTm8sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkb1NhdmVDYWxsYmFjayhubzogbnVtYmVyLCBpc1N1Y2Nlc3M6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKFwic2F2ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuc2F2ZU5vID09IG5vKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3MpIHNlbGYuc2V0U3RhdGUoXCJzYXZlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9lbHNlIFRPRE9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0TW9kaWZpZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcIm1vZGlmaWVkXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUoKTtcclxuICAgICAgICB0aGlzLm9uTW9kaWZpZWQuZmlyZSh0aGlzLCBudWxsKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUoY2xlYXJTdGF0ZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKGNsZWFyU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy51bmRvUmVkby5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VsT2JqID0gdGhpcy5rb1NlbGVjdGVkT2JqZWN0KCkgPyB0aGlzLmtvU2VsZWN0ZWRPYmplY3QoKS52YWx1ZSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy51bmRvUmVkby5zZXRDdXJyZW50KHRoaXMuc3VydmV5VmFsdWUsIHNlbE9iaiA/IHNlbE9iai5uYW1lIDogbnVsbCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHNhdmVTdXJ2ZXlGdW5jKCkgeyByZXR1cm4gdGhpcy5zYXZlU3VydmV5RnVuY1ZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc2V0IHNhdmVTdXJ2ZXlGdW5jKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnNhdmVTdXJ2ZXlGdW5jVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmtvU2hvd1NhdmVCdXR0b24odmFsdWUgIT0gbnVsbCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHNob3dPcHRpb25zKCkgeyByZXR1cm4gdGhpcy5rb1Nob3dPcHRpb25zKCk7IH1cclxuICAgIHB1YmxpYyBzZXQgc2hvd09wdGlvbnModmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5rb1Nob3dPcHRpb25zKHZhbHVlKTsgfVxyXG4gICAgcHVibGljIGdldCBzaG93SlNPTkVkaXRvclRhYigpIHsgcmV0dXJuIHRoaXMuc2hvd0pTT05FZGl0b3JUYWJWYWx1ZTsgfVxyXG4gICAgcHVibGljIHNldCBzaG93SlNPTkVkaXRvclRhYih2YWx1ZTogYm9vbGVhbikgeyB0aGlzLnNob3dKU09ORWRpdG9yVGFiVmFsdWUgPSB2YWx1ZTsgfVxyXG4gICAgcHVibGljIGdldCBzaG93VGVzdFN1cnZleVRhYigpIHsgcmV0dXJuIHRoaXMuc2hvd1Rlc3RTdXJ2ZXlUYWJWYWx1ZTsgfVxyXG4gICAgcHVibGljIHNldCBzaG93VGVzdFN1cnZleVRhYih2YWx1ZTogYm9vbGVhbikgeyB0aGlzLnNob3dUZXN0U3VydmV5VGFiVmFsdWUgPSB2YWx1ZTsgfVxyXG4gICAgcHVibGljIGdldCBzaG93RW1iZWRlZFN1cnZleVRhYigpIHsgcmV0dXJuIHRoaXMuc2hvd0VtYmVkZWRTdXJ2ZXlUYWJWYWx1ZTsgfVxyXG4gICAgcHVibGljIHNldCBzaG93RW1iZWRlZFN1cnZleVRhYih2YWx1ZTogYm9vbGVhbikgeyB0aGlzLnNob3dFbWJlZGVkU3VydmV5VGFiVmFsdWUgPSB2YWx1ZTsgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkNhblNob3dPYmplY3RQcm9wZXJ0eShvYmplY3Q6IGFueSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHsgb2JqOiBvYmplY3QsIHByb3BlcnR5OiBwcm9wZXJ0eSwgY2FuU2hvdzogdHJ1ZSB9O1xyXG4gICAgICAgIHRoaXMub25DYW5TaG93UHJvcGVydHkuZmlyZSh0aGlzLCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gb3B0aW9ucy5jYW5TaG93O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VGV4dFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmpzb25FZGl0b3IudGV4dCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZFBhZ2UoKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBTdXJ2ZXlIZWxwZXIuZ2V0TmV3UGFnZU5hbWUodGhpcy5zdXJ2ZXkucGFnZXMpO1xyXG4gICAgICAgIHZhciBwYWdlID0gPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5VmFsdWUuYWRkTmV3UGFnZShuYW1lKTtcclxuICAgICAgICB0aGlzLmFkZFBhZ2VUb1VJKHBhZ2UpO1xyXG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRMb2NTdHJpbmcoc3RyOiBzdHJpbmcpIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoc3RyKTsgfVxyXG4gICAgcHJpdmF0ZSBtb3ZlUGFnZShpbmRleEZyb206IG51bWJlciwgaW5kZXhUbzogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIHBhZ2UgPSA8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkucGFnZXNbaW5kZXhGcm9tXTtcclxuICAgICAgICB0aGlzLnN1cnZleS5wYWdlcy5zcGxpY2UoaW5kZXhGcm9tLCAxKTtcclxuICAgICAgICB0aGlzLnN1cnZleS5wYWdlcy5zcGxpY2UoaW5kZXhUbywgMCwgcGFnZSk7XHJcbiAgICAgICAgdGhpcy5wYWdlc0VkaXRvci5zdXJ2ZXkgPSB0aGlzLnN1cnZleTtcclxuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHBhZ2UpXHJcbiAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGRQYWdlVG9VSShwYWdlOiBTdXJ2ZXkuUGFnZSkge1xyXG4gICAgICAgIHRoaXMucGFnZXNFZGl0b3Iuc3VydmV5ID0gdGhpcy5zdXJ2ZXlWYWx1ZTtcclxuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuYWRkUGFnZShwYWdlKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9PblF1ZXN0aW9uQWRkZWQocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcclxuICAgICAgICB2YXIgcGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleS5nZXRQYWdlQnlRdWVzdGlvbihxdWVzdGlvbik7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHF1ZXN0aW9uOiBxdWVzdGlvbiwgcGFnZTogcGFnZSB9O1xyXG4gICAgICAgIHRoaXMub25RdWVzdGlvbkFkZGVkLmZpcmUodGhpcywgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLmFkZFF1ZXN0aW9uKHBhZ2UsIHF1ZXN0aW9uKTtcclxuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9PblF1ZXN0aW9uUmVtb3ZlZChxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xyXG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5yZW1vdmVPYmplY3QocXVlc3Rpb24pO1xyXG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvblByb3BlcnR5VmFsdWVDaGFuZ2VkKHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5LCBvYmo6IGFueSwgbmV3VmFsdWU6IGFueSkge1xyXG4gICAgICAgIHZhciBpc0RlZmF1bHQgPSBwcm9wZXJ0eS5pc0RlZmF1bHRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgb2JqW3Byb3BlcnR5Lm5hbWVdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgaWYgKHByb3BlcnR5Lm5hbWUgPT0gXCJuYW1lXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLm5hbWVDaGFuZ2VkKG9iaik7XHJcbiAgICAgICAgICAgIGlmIChTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmopID09IE9ialR5cGUuUGFnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlc0VkaXRvci5jaGFuZ2VOYW1lKDxTdXJ2ZXkuUGFnZT5vYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcclxuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9VbmRvUmVkbyhpdGVtOiBVbmRvUmVkb0l0ZW0pIHtcclxuICAgICAgICB0aGlzLmluaXRTdXJ2ZXkoaXRlbS5zdXJ2ZXlKU09OKTtcclxuICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZE9iak5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIHNlbE9iaiA9IHRoaXMuZmluZE9iakJ5TmFtZShpdGVtLnNlbGVjdGVkT2JqTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChzZWxPYmopIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5zZWxlY3RPYmplY3Qoc2VsT2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMudW5kb1JlZG8ua29DYW5VbmRvKCkgPyBcIm1vZGlmaWVkXCIgOiBcInNhdmVkXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmaW5kT2JqQnlOYW1lKG5hbWU6IHN0cmluZyk6IFN1cnZleS5CYXNlIHtcclxuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LmdldFBhZ2VCeU5hbWUobmFtZSk7XHJcbiAgICAgICAgaWYgKHBhZ2UpIHJldHVybiBwYWdlO1xyXG4gICAgICAgIHZhciBxdWVzdGlvbiA9IDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPnRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKG5hbWUpO1xyXG4gICAgICAgIGlmIChxdWVzdGlvbikgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjYW5Td2l0Y2hWaWV3VHlwZShuZXdUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAobmV3VHlwZSAmJiB0aGlzLmtvVmlld1R5cGUoKSA9PSBuZXdUeXBlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMua29WaWV3VHlwZSgpID09IFwiZGVzaWduZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmpzb25FZGl0b3IudGV4dCA9IHRoaXMuZ2V0U3VydmV5VGV4dEZyb21EZXNpZ25lcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5rb1ZpZXdUeXBlKCkgIT0gXCJlZGl0b3JcIikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLmpzb25FZGl0b3IuaXNKc29uQ29ycmVjdCkge1xyXG4gICAgICAgICAgICBhbGVydCh0aGlzLmdldExvY1N0cmluZyhcImVkLmNvcnJlY3RKU09OXCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRTdXJ2ZXkobmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHRoaXMuanNvbkVkaXRvci5zdXJ2ZXkpKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93RGVzaWduZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblN3aXRjaFZpZXdUeXBlKFwiZGVzaWduZXJcIikpIHJldHVybjtcclxuICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJkZXNpZ25lclwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93SnNvbkVkaXRvcigpIHtcclxuICAgICAgICBpZiAodGhpcy5rb1ZpZXdUeXBlKCkgPT0gXCJlZGl0b3JcIikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuanNvbkVkaXRvci5zaG93KHRoaXMuZ2V0U3VydmV5VGV4dEZyb21EZXNpZ25lcigpKTtcclxuICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJlZGl0b3JcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2hvd1Rlc3RTdXJ2ZXkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblN3aXRjaFZpZXdUeXBlKG51bGwpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zaG93TGl2ZVN1cnZleSgpO1xyXG4gICAgICAgIHRoaXMua29WaWV3VHlwZShcInRlc3RcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2hvd0VtYmVkRWRpdG9yKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5Td2l0Y2hWaWV3VHlwZShcImVtYmVkXCIpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zaG93U3VydmV5RW1iZWRpbmcoKTtcclxuICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJlbWJlZFwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0U3VydmV5VGV4dEZyb21EZXNpZ25lcigpIHtcclxuICAgICAgICB2YXIganNvbiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLnN1cnZleSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuZ2VuZXJhdGVWYWxpZEpTT04pIHJldHVybiBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAxKTtcclxuICAgICAgICByZXR1cm4gbmV3IFN1cnZleUpTT041KCkuc3RyaW5naWZ5KGpzb24sIG51bGwsIDEpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZE9iamVjdENoYW5nZWQob2JqOiBTdXJ2ZXkuQmFzZSkge1xyXG4gICAgICAgIHZhciBjYW5EZWxldGVPYmplY3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yLnNlbGVjdGVkT2JqZWN0ID0gb2JqO1xyXG4gICAgICAgIHRoaXMuc3VydmV5VmVyYnMub2JqID0gb2JqO1xyXG4gICAgICAgIHZhciBvYmpUeXBlID0gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKTtcclxuICAgICAgICBpZiAob2JqVHlwZSA9PSBPYmpUeXBlLlBhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UgPSA8U3VydmV5LlBhZ2U+b2JqO1xyXG4gICAgICAgICAgICBjYW5EZWxldGVPYmplY3QgPSB0aGlzLnN1cnZleS5wYWdlcy5sZW5ndGggPiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqVHlwZSA9PSBPYmpUeXBlLlF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VydmV5W1wic2V0c2VsZWN0ZWRRdWVzdGlvblwiXShvYmopO1xyXG4gICAgICAgICAgICBjYW5EZWxldGVPYmplY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZSA9IHRoaXMuc3VydmV5LmdldFBhZ2VCeVF1ZXN0aW9uKHRoaXMuc3VydmV5W1wic2VsZWN0ZWRRdWVzdGlvblZhbHVlXCJdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN1cnZleVtcInNldHNlbGVjdGVkUXVlc3Rpb25cIl0obnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua29DYW5EZWxldGVPYmplY3QoY2FuRGVsZXRlT2JqZWN0KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXBwbHlCaW5kaW5nKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRWxlbWVudCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAga28uY2xlYW5Ob2RlKHRoaXMucmVuZGVyZWRFbGVtZW50KTtcclxuICAgICAgICBrby5hcHBseUJpbmRpbmdzKHRoaXMsIHRoaXMucmVuZGVyZWRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLnN1cnZleWpzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJ2ZXlqc1wiKTtcclxuICAgICAgICBpZiAodGhpcy5zdXJ2ZXlqcykge1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuc3VydmV5anMub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSA0Nikgc2VsZi5kZWxldGVRdWVzdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAzOCB8fCBlLmtleUNvZGUgPT0gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdFF1ZXN0aW9uKGUua2V5Q29kZSA9PSAzOCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3VydmV5anNFeGFtcGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJ2ZXlqc0V4YW1wbGVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFN1cnZleShuZXcgU3VydmV5SlNPTjUoKS5wYXJzZShTdXJ2ZXlFZGl0b3IuZGVmYXVsdE5ld1N1cnZleVRleHQpKTtcclxuICAgICAgICB0aGlzLnNldFVuZG9SZWRvQ3VycmVudFN0YXRlKHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLmpzb25FZGl0b3IuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpbml0U3VydmV5KGpzb246IGFueSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gbmV3IFN1cnZleS5TdXJ2ZXkoKTtcclxuICAgICAgICB0aGlzLmRyYWdEcm9wSGVscGVyID0gbmV3IERyYWdEcm9wSGVscGVyKDxTdXJ2ZXkuSVN1cnZleT50aGlzLnN1cnZleSwgZnVuY3Rpb24gKCkgeyBzZWxmLnNldE1vZGlmaWVkKCkgfSk7XHJcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZVtcInNldEpzb25PYmplY3RcIl0oanNvbik7IC8vVE9ET1xyXG4gICAgICAgIGlmICh0aGlzLnN1cnZleVZhbHVlLmlzRW1wdHkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZVtcInNldEpzb25PYmplY3RcIl0obmV3IFN1cnZleUpTT041KCkucGFyc2UoU3VydmV5RWRpdG9yLmRlZmF1bHROZXdTdXJ2ZXlUZXh0KSk7IC8vVE9ET1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN1cnZleVZhbHVlW1wiZHJhZ0Ryb3BIZWxwZXJcIl0gPSB0aGlzLmRyYWdEcm9wSGVscGVyO1xyXG4gICAgICAgIC8vVE9ETyByZW1vdmUgdGhlIGxpbmUgYWJvdmUgYW5kIGNhbGwgdGhlIG1ldGhvZCBkaXJlY3RseS5cclxuICAgICAgICBpZiAodGhpcy5zdXJ2ZXlbXCJzZXREZXNpZ25Nb2RlXCJdKSB0aGlzLnN1cnZleVtcInNldERlc2lnbk1vZGVcIl0odHJ1ZSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnN1cnZleS5tb2RlID0gXCJkZXNpZ25lclwiO1xyXG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcih0aGlzLnN1cnZleWpzKTtcclxuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc3VydmV5ID0gdGhpcy5zdXJ2ZXk7XHJcbiAgICAgICAgdGhpcy5wYWdlc0VkaXRvci5zdXJ2ZXkgPSB0aGlzLnN1cnZleTtcclxuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnNldFNlbGVjdGVkUGFnZSg8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHRoaXMuc3VydmV5VmVyYnMuc3VydmV5ID0gdGhpcy5zdXJ2ZXk7XHJcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZVtcIm9uU2VsZWN0ZWRRdWVzdGlvbkNoYW5nZWRcIl0uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5zdXJ2ZXlPYmplY3RzLnNlbGVjdE9iamVjdChzZW5kZXJbXCJzZWxlY3RlZFF1ZXN0aW9uVmFsdWVcIl0pOyB9KTtcclxuICAgICAgICB0aGlzLnN1cnZleVZhbHVlW1wib25FZGl0UXVlc3Rpb25cIl0uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5zaG93UXVlc3Rpb25FZGl0b3Ioc2VsZi5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWUpOyB9KTtcclxuICAgICAgICB0aGlzLnN1cnZleVZhbHVlW1wib25Db3B5UXVlc3Rpb25cIl0uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5hZGRDdXN0b21Ub29sYm94UXVlc3Rpb24oc2VsZi5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWUpOyB9KTtcclxuICAgICAgICB0aGlzLnN1cnZleVZhbHVlW1wib25GYXN0Q29weVF1ZXN0aW9uXCJdLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuZmFzdENvcHlRdWVzdGlvbihzZWxmLmtvU2VsZWN0ZWRPYmplY3QoKS52YWx1ZSk7IH0pO1xyXG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJvbkRlbGV0ZUN1cnJlbnRPYmplY3RcIl0uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5kZWxldGVDdXJyZW50T2JqZWN0KCk7IH0pO1xyXG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25Qcm9jZXNzSHRtbC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBvcHRpb25zLmh0bWwgPSBzZWxmLnByb2Nlc3NIdG1sKG9wdGlvbnMuaHRtbCk7IH0pO1xyXG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25DdXJyZW50UGFnZUNoYW5nZWQuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5wYWdlc0VkaXRvci5zZXRTZWxlY3RlZFBhZ2UoPFN1cnZleS5QYWdlPnNlbmRlci5jdXJyZW50UGFnZSk7IH0pO1xyXG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25RdWVzdGlvbkFkZGVkLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuZG9PblF1ZXN0aW9uQWRkZWQob3B0aW9ucy5xdWVzdGlvbik7IH0pO1xyXG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25RdWVzdGlvblJlbW92ZWQuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5kb09uUXVlc3Rpb25SZW1vdmVkKG9wdGlvbnMucXVlc3Rpb24pOyB9KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcHJvY2Vzc0h0bWwoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIWh0bWwpIHJldHVybiBodG1sO1xyXG4gICAgICAgIHZhciBzY3JpcHRSZWdFeCA9IC88c2NyaXB0XFxiW148XSooPzooPyE8XFwvc2NyaXB0Pik8W148XSopKjxcXC9zY3JpcHQ+L2dpO1xyXG4gICAgICAgIHdoaWxlIChzY3JpcHRSZWdFeC50ZXN0KGh0bWwpKSB7XHJcbiAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2Uoc2NyaXB0UmVnRXgsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9EcmFnZ2luZ1Rvb2xib3hJdGVtKGpzb246IGFueSwgZSkge1xyXG4gICAgICAgIHRoaXMuZHJhZ0Ryb3BIZWxwZXIuc3RhcnREcmFnVG9vbGJveEl0ZW0oZSwgdGhpcy5nZXROZXdRdWVzdGlvbk5hbWUoKSwganNvbik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRvQ2xpY2tUb29sYm94SXRlbShqc29uOiBhbnkpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuZ2V0TmV3UXVlc3Rpb25OYW1lKCk7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gU3VydmV5LlF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5jcmVhdGVRdWVzdGlvbihqc29uW1widHlwZVwiXSwgbmFtZSk7XHJcbiAgICAgICAgbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9PYmplY3QoanNvbiwgcXVlc3Rpb24pO1xyXG4gICAgICAgIHF1ZXN0aW9uLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZG9DbGlja1F1ZXN0aW9uQ29yZShxdWVzdGlvbik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldE5ld1F1ZXN0aW9uTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3UXVlc3Rpb25OYW1lKHRoaXMuc3VydmV5LmdldEFsbFF1ZXN0aW9ucygpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9DbGlja1F1ZXN0aW9uQ29yZShxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xyXG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2U7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gLTE7XHJcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5W1wic2VsZWN0ZWRRdWVzdGlvblZhbHVlXCJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaW5kZXggPSBwYWdlLnF1ZXN0aW9ucy5pbmRleE9mKHRoaXMuc3VydmV5W1wic2VsZWN0ZWRRdWVzdGlvblZhbHVlXCJdKSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhZ2UuYWRkUXVlc3Rpb24ocXVlc3Rpb24sIGluZGV4KTtcclxuICAgICAgICB0aGlzLmRyYWdEcm9wSGVscGVyLnNjcm9sbFRvRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChxdWVzdGlvbi5pZCkpO1xyXG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZGVsZXRlUXVlc3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRTZWxlY3RlZE9iakFzUXVlc3Rpb24oKTtcclxuICAgICAgICBpZiAocXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJyZW50T2JqZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZWxlY3RRdWVzdGlvbihpc1VwOiBib29sZWFuKSB7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRTZWxlY3RlZE9iakFzUXVlc3Rpb24oKTtcclxuICAgICAgICBpZiAocXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnNlbGVjdE5leHRRdWVzdGlvbihpc1VwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRPYmpBc1F1ZXN0aW9uKCk6IFN1cnZleS5RdWVzdGlvbkJhc2Uge1xyXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtvU2VsZWN0ZWRPYmplY3QoKS52YWx1ZTtcclxuICAgICAgICBpZiAoIW9iaikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaikgPT0gT2JqVHlwZS5RdWVzdGlvbiA/IDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPihvYmopOiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkZWxldGVDdXJyZW50T2JqZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlT2JqZWN0KHRoaXMua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93UXVlc3Rpb25FZGl0b3IocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbkVkaXRvcldpbmRvdy5zaG93KHF1ZXN0aW9uLCBmdW5jdGlvbiAocXVlc3Rpb24pIHsgc2VsZi5vblF1ZXN0aW9uRWRpdG9yQ2hhbmdlZChxdWVzdGlvbik7IH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvblF1ZXN0aW9uRWRpdG9yQ2hhbmdlZChxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xyXG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5uYW1lQ2hhbmdlZChxdWVzdGlvbik7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdEVkaXRvci5PYmplY3RDaGFuZ2VkKCk7XHJcbiAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xyXG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZEN1c3RvbVRvb2xib3hRdWVzdGlvbihxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xyXG4gICAgICAgIHRoaXMudG9vbGJveC5hZGRDb3BpZWRJdGVtKHF1ZXN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmFzdENvcHlRdWVzdGlvbihxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xyXG4gICAgICAgIHZhciBqc29uID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHF1ZXN0aW9uKTtcclxuICAgICAgICBqc29uLnR5cGUgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XHJcbiAgICAgICAgdGhpcy5kb0NsaWNrVG9vbGJveEl0ZW0oIGpzb24gKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGV0ZU9iamVjdChvYmo6IGFueSkge1xyXG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5yZW1vdmVPYmplY3Qob2JqKTtcclxuICAgICAgICB2YXIgb2JqVHlwZSA9IFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaik7XHJcbiAgICAgICAgaWYgKG9ialR5cGUgPT0gT2JqVHlwZS5QYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LnJlbW92ZVBhZ2Uob2JqKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlc0VkaXRvci5yZW1vdmVQYWdlKG9iaik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9ialR5cGUgPT0gT2JqVHlwZS5RdWVzdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZS5yZW1vdmVRdWVzdGlvbihvYmopO1xyXG4gICAgICAgICAgICB0aGlzLnN1cnZleVtcInNldHNlbGVjdGVkUXVlc3Rpb25cIl0obnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5zZWxlY3RPYmplY3QodGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vZGlmaWVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzaG93TGl2ZVN1cnZleSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3VydmV5anNFeGFtcGxlKSByZXR1cm47XHJcbiAgICAgICAgdmFyIGpzb24gPSB0aGlzLmdldFN1cnZleUpTT04oKTtcclxuICAgICAgICBpZiAoanNvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChqc29uLmNvb2tpZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBqc29uLmNvb2tpZU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuU3VydmV5KGpzb24pO1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzXCIpO1xyXG4gICAgICAgICAgICB2YXIgc3VydmV5anNFeGFtcGxlcmVSdW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnZleWpzRXhhbXBsZXJlUnVuXCIpO1xyXG4gICAgICAgICAgICBpZiAoc3VydmV5anNFeGFtcGxlUmVzdWx0cykgc3VydmV5anNFeGFtcGxlUmVzdWx0cy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoc3VydmV5anNFeGFtcGxlcmVSdW4pIHN1cnZleWpzRXhhbXBsZXJlUnVuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgc3VydmV5Lm9uQ29tcGxldGUuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXkpID0+IHsgaWYgKHN1cnZleWpzRXhhbXBsZVJlc3VsdHMpIHN1cnZleWpzRXhhbXBsZVJlc3VsdHMuaW5uZXJIVE1MID0gdGhpcy5nZXRMb2NTdHJpbmcoXCJlZC5zdXJ2ZXlSZXN1bHRzXCIpICsgSlNPTi5zdHJpbmdpZnkoc3VydmV5LmRhdGEpOyBpZiAoc3VydmV5anNFeGFtcGxlcmVSdW4pIHN1cnZleWpzRXhhbXBsZXJlUnVuLnN0eWxlLmRpc3BsYXkgPSBcIlwiOyB9KTtcclxuICAgICAgICAgICAgc3VydmV5LnJlbmRlcih0aGlzLnN1cnZleWpzRXhhbXBsZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlqc0V4YW1wbGUuaW5uZXJIVE1MID0gdGhpcy5nZXRMb2NTdHJpbmcoXCJlZC5jb3JyZWN0SlNPTlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNob3dTdXJ2ZXlFbWJlZGluZygpIHtcclxuICAgICAgICB2YXIganNvbiA9IHRoaXMuZ2V0U3VydmV5SlNPTigpO1xyXG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcuanNvbiA9IGpzb247XHJcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZy5zdXJ2ZXlJZCA9IHRoaXMuc3VydmV5SWQ7XHJcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZy5zdXJ2ZXlQb3N0SWQgPSB0aGlzLnN1cnZleVBvc3RJZDtcclxuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nLmdlbmVyYXRlVmFsaWRKU09OID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5nZW5lcmF0ZVZhbGlkSlNPTjtcclxuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nLnNob3coKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0U3VydmV5SlNPTigpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLmtvSXNTaG93RGVzaWduZXIoKSkgcmV0dXJuIG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLnN1cnZleSk7XHJcbiAgICAgICAgaWYgKHRoaXMuanNvbkVkaXRvci5pc0pzb25Db3JyZWN0KSByZXR1cm4gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHRoaXMuanNvbkVkaXRvci5zdXJ2ZXkpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVBbm5vdGF0aW9ucyh0ZXh0OiBzdHJpbmcsIGVycm9yczogYW55W10pOiBBY2VBamF4LkFubm90YXRpb25bXSB7XHJcbiAgICAgICAgdmFyIGFubm90YXRpb25zID0gbmV3IEFycmF5PEFjZUFqYXguQW5ub3RhdGlvbj4oKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBlcnJvcnNbaV07XHJcbiAgICAgICAgICAgIHZhciBhbm5vdGF0aW9uOiBBY2VBamF4LkFubm90YXRpb24gPSB7IHJvdzogZXJyb3IucG9zaXRpb24uc3RhcnQucm93LCBjb2x1bW46IGVycm9yLnBvc2l0aW9uLnN0YXJ0LmNvbHVtbiwgdGV4dDogZXJyb3IudGV4dCwgdHlwZTogXCJlcnJvclwiIH07XHJcbiAgICAgICAgICAgIGFubm90YXRpb25zLnB1c2goYW5ub3RhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbm5vdGF0aW9ucztcclxuICAgIH1cclxufVxyXG5cclxuU3VydmV5LlN1cnZleS5jc3NUeXBlID0gXCJib290c3RyYXBcIjtcclxubmV3IFN1cnZleS5TdXJ2ZXlUZW1wbGF0ZVRleHQoKS5yZXBsYWNlVGV4dCh0ZW1wbGF0ZVBhZ2VIdG1sLCBcInBhZ2VcIik7XHJcbm5ldyBTdXJ2ZXkuU3VydmV5VGVtcGxhdGVUZXh0KCkucmVwbGFjZVRleHQodGVtcGxhdGVRdWVzdGlvbkh0bWwsIFwicXVlc3Rpb25cIik7XHJcblxyXG5TdXJ2ZXkuU3VydmV5LnByb3RvdHlwZVtcIm9uQ3JlYXRpbmdcIl0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkUXVlc3Rpb25WYWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLm9uU2VsZWN0ZWRRdWVzdGlvbkNoYW5nZWQgPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XHJcbiAgICB0aGlzLm9uRWRpdFF1ZXN0aW9uID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xyXG4gICAgdGhpcy5vbkNvcHlRdWVzdGlvbiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcclxuICAgIHRoaXMub25GYXN0Q29weVF1ZXN0aW9uID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xyXG4gICAgdGhpcy5vbkRlbGV0ZUN1cnJlbnRPYmplY3QgPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmVkaXRRdWVzdGlvbkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uRWRpdFF1ZXN0aW9uLmZpcmUoc2VsZik7IH07XHJcbiAgICB0aGlzLmNvcHlRdWVzdGlvbkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uQ29weVF1ZXN0aW9uLmZpcmUoc2VsZik7IH07XHJcbiAgICB0aGlzLmZhc3RDb3B5UXVlc3Rpb25DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkZhc3RDb3B5UXVlc3Rpb24uZmlyZShzZWxmKTsgfTtcclxuICAgIHRoaXMuZGVsZXRlQ3VycmVudE9iamVjdENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uRGVsZXRlQ3VycmVudE9iamVjdC5maXJlKHNlbGYpOyB9XHJcbiAgICB0aGlzLmtvRHJhZ2dpbmdTb3VyY2UgPSBrby5vYnNlcnZhYmxlKG51bGwpO1xyXG59O1xyXG5TdXJ2ZXkuU3VydmV5LnByb3RvdHlwZVtcInNldHNlbGVjdGVkUXVlc3Rpb25cIl0gPSBmdW5jdGlvbih2YWx1ZTogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xyXG4gICAgaWYgKHZhbHVlID09IHRoaXMuc2VsZWN0ZWRRdWVzdGlvblZhbHVlKSByZXR1cm47XHJcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnNlbGVjdGVkUXVlc3Rpb25WYWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRRdWVzdGlvblZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAob2xkVmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgIG9sZFZhbHVlW1wib25TZWxlY3RlZFF1ZXN0aW9uQ2hhbmdlZFwiXSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRRdWVzdGlvblZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUXVlc3Rpb25WYWx1ZVtcIm9uU2VsZWN0ZWRRdWVzdGlvbkNoYW5nZWRcIl0oKTtcclxuICAgIH1cclxuICAgIHRoaXMub25TZWxlY3RlZFF1ZXN0aW9uQ2hhbmdlZC5maXJlKHRoaXMsIHsgJ29sZFNlbGVjdGVkUXVlc3Rpb24nOiBvbGRWYWx1ZSwgJ25ld1NlbGVjdGVkUXVlc3Rpb24nOiB2YWx1ZSB9KTtcclxufTtcclxuU3VydmV5LlN1cnZleS5wcm90b3R5cGVbXCJnZXRFZGl0b3JMb2NTdHJpbmdcIl0gPSBmdW5jdGlvbiAodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyh2YWx1ZSk7XHJcbn07XHJcblxyXG5TdXJ2ZXkuUGFnZS5wcm90b3R5cGVbXCJvbkNyZWF0aW5nXCJdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5kcmFnRW50ZXJDb3VudGVyID0gMDtcclxuICAgIHRoaXMua29EcmFnZ2luZyA9IGtvLm9ic2VydmFibGUoLTEpO1xyXG4gICAgdGhpcy5rb0RyYWdnaW5nUXVlc3Rpb24gPSBrby5vYnNlcnZhYmxlKG51bGwpO1xyXG4gICAgdGhpcy5rb0RyYWdnaW5nQm90dG9tID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XHJcbiAgICB0aGlzLmtvRHJhZ2dpbmcuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgc2VsZi5kcmFnRW50ZXJDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgc2VsZi5rb0RyYWdnaW5nUXVlc3Rpb24obnVsbCk7XHJcbiAgICAgICAgICAgIHNlbGYua29EcmFnZ2luZ0JvdHRvbShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSBuZXdWYWx1ZSA+PSAwICYmIG5ld1ZhbHVlIDwgc2VsZi5xdWVzdGlvbnMubGVuZ3RoID8gc2VsZi5xdWVzdGlvbnNbbmV3VmFsdWVdIDogbnVsbDtcclxuICAgICAgICAgICAgc2VsZi5rb0RyYWdnaW5nUXVlc3Rpb24ocXVlc3Rpb24pO1xyXG4gICAgICAgICAgICBzZWxmLmtvRHJhZ2dpbmdCb3R0b20obmV3VmFsdWUgPT0gc2VsZi5xdWVzdGlvbnMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMua29EcmFnZ2luZ1F1ZXN0aW9uLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgaWYgKG5ld1ZhbHVlKSBuZXdWYWx1ZS5rb0lzRHJhZ2dpbmcodHJ1ZSk7IH0pO1xyXG4gICAgdGhpcy5rb0RyYWdnaW5nUXVlc3Rpb24uc3Vic2NyaWJlKGZ1bmN0aW9uIChvbGRWYWx1ZSkgeyBpZiAob2xkVmFsdWUpIG9sZFZhbHVlLmtvSXNEcmFnZ2luZyhmYWxzZSk7IH0sIHRoaXMsIFwiYmVmb3JlQ2hhbmdlXCIpO1xyXG4gICAgdGhpcy5kcmFnRW50ZXIgPSBmdW5jdGlvbiAoZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IHNlbGYuZHJhZ0VudGVyQ291bnRlcisrOyBzZWxmLmRvRHJhZ0VudGVyKGUpOyB9O1xyXG4gICAgdGhpcy5kcmFnTGVhdmUgPSBmdW5jdGlvbiAoZSkgeyBzZWxmLmRyYWdFbnRlckNvdW50ZXItLTsgaWYgKHNlbGYuZHJhZ0VudGVyQ291bnRlciA9PT0gMCkgc2VsZi5kb0RyYWdMZWF2ZShlKTsgfTtcclxuICAgIHRoaXMuZHJhZ0Ryb3AgPSBmdW5jdGlvbiAoZSkgeyBzZWxmLmRvRHJvcChlKTsgfTtcclxufTtcclxuU3VydmV5LlBhZ2UucHJvdG90eXBlW1wiZG9Ecm9wXCJdID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBkcmFnRHJvcEhlbHBlciA9IHRoaXMuZGF0YVtcImRyYWdEcm9wSGVscGVyXCJdO1xyXG4gICAgaWYgKGRyYWdEcm9wSGVscGVyKSB7XHJcbiAgICAgICAgZHJhZ0Ryb3BIZWxwZXIuZG9Ecm9wKGUpO1xyXG4gICAgfVxyXG59O1xyXG5TdXJ2ZXkuUGFnZS5wcm90b3R5cGVbXCJkb0RyYWdFbnRlclwiXSA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmICh0aGlzLnF1ZXN0aW9ucy5sZW5ndGggPiAwIHx8IHRoaXMua29EcmFnZ2luZygpID4gMCkgcmV0dXJuO1xyXG4gICAgdmFyIGRyYWdEcm9wSGVscGVyID0gdGhpcy5kYXRhW1wiZHJhZ0Ryb3BIZWxwZXJcIl07XHJcbiAgICBpZiAoZHJhZ0Ryb3BIZWxwZXIgJiYgZHJhZ0Ryb3BIZWxwZXIuaXNTdXJ2ZXlEcmFnZ2luZyhlKSkge1xyXG4gICAgICAgIHRoaXMua29EcmFnZ2luZygwKTtcclxuICAgIH1cclxufTtcclxuU3VydmV5LlBhZ2UucHJvdG90eXBlW1wiZG9EcmFnTGVhdmVcIl0gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGRyYWdEcm9wSGVscGVyID0gdGhpcy5kYXRhW1wiZHJhZ0Ryb3BIZWxwZXJcIl07XHJcbiAgICBpZiAoZHJhZ0Ryb3BIZWxwZXIpIHtcclxuICAgICAgICBkcmFnRHJvcEhlbHBlci5kb0xlYXZlUGFnZShlKTtcclxuICAgIH1cclxufTtcclxuXHJcblN1cnZleS5RdWVzdGlvbkJhc2UucHJvdG90eXBlW1wib25DcmVhdGluZ1wiXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuZHJhZ0Ryb3BIZWxwZXJWYWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLmtvSXNEcmFnZ2luZyA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xyXG4gICAgdGhpcy5rb0lzRHJhZ2dpbmdTb3VyY2UgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcclxuICAgIHRoaXMuZHJhZ0Ryb3BIZWxwZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuZHJhZ0Ryb3BIZWxwZXJWYWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNlbGYuZHJhZ0Ryb3BIZWxwZXJWYWx1ZSA9IHNlbGYuZGF0YVtcImRyYWdEcm9wSGVscGVyXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VsZi5kcmFnRHJvcEhlbHBlclZhbHVlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZHJhZ092ZXIgPSBmdW5jdGlvbiAoZSkgeyBzZWxmLmRyYWdEcm9wSGVscGVyKCkuZG9EcmFnRHJvcE92ZXIoZSwgc2VsZik7IH07XHJcbiAgICB0aGlzLmRyYWdEcm9wID0gZnVuY3Rpb24gKGUpIHsgc2VsZi5kcmFnRHJvcEhlbHBlcigpLmRvRHJvcChlLCBzZWxmKTsgfTtcclxuICAgIHRoaXMuZHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGUpIHsgc2VsZi5kcmFnRHJvcEhlbHBlcigpLnN0YXJ0RHJhZ1F1ZXN0aW9uKGUsIHNlbGYubmFtZSk7IH07XHJcbiAgICB0aGlzLmRyYWdFbmQgPSBmdW5jdGlvbiAoZSkgeyBzZWxmLmRyYWdEcm9wSGVscGVyKCkuZW5kKCk7IH07XHJcbiAgICB0aGlzLmtvSXNTZWxlY3RlZCA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xyXG4gICAgdGhpcy5rb09uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuZGF0YSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgc2VsZi5kYXRhW1wic2V0c2VsZWN0ZWRRdWVzdGlvblwiXSh0aGlzKTtcclxuICAgIH1cclxufTtcclxuXHJcblN1cnZleS5RdWVzdGlvbkJhc2UucHJvdG90eXBlW1wib25TZWxlY3RlZFF1ZXN0aW9uQ2hhbmdlZFwiXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YSA9PSBudWxsKSByZXR1cm47XHJcbiAgICB0aGlzLmtvSXNTZWxlY3RlZCh0aGlzLmRhdGFbXCJzZWxlY3RlZFF1ZXN0aW9uVmFsdWVcIl0gPT0gdGhpcyk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XHJcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcclxuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIHtcclxuICAgIGtvQWN0aXZlVmlldzogYW55O1xyXG4gICAga29JdGVtc1RleHQ6IGFueTtcclxuICAgIGNoYW5nZVRvVGV4dFZpZXdDbGljazogYW55O1xyXG4gICAgY2hhbmdlVG9Gb3JtVmlld0NsaWNrOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmtvQWN0aXZlVmlldyA9IGtvLm9ic2VydmFibGUoXCJmb3JtXCIpO1xyXG4gICAgICAgIHRoaXMua29JdGVtc1RleHQgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xyXG4gICAgICAgIHRoaXMua29BY3RpdmVWaWV3LnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09IFwiZm9ybVwiKSBzZWxmLnVwZGF0ZUl0ZW1zKHNlbGYua29JdGVtc1RleHQoKSk7XHJcbiAgICAgICAgICAgIGVsc2Ugc2VsZi5rb0l0ZW1zVGV4dChzZWxmLmdldEl0ZW1zVGV4dCgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNoYW5nZVRvVGV4dFZpZXdDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb0FjdGl2ZVZpZXcoXCJ0ZXh0XCIpOyB9O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlVG9Gb3JtVmlld0NsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvQWN0aXZlVmlldyhcImZvcm1cIik7IH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiaXRlbXZhbHVlc1wiOyB9XHJcbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5rb0l0ZW1zKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmtvSXRlbXMoKVtpXTtcclxuICAgICAgICAgICAgaXRlbS5rb0hhc0Vycm9yKHRoaXMuaXNWYWx1ZUVtcHR5KGl0ZW0ua29WYWx1ZSgpKSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCBpdGVtLmtvSGFzRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdFZGl0b3JJdGVtKCk6IGFueSB7IHJldHVybiB7IGtvVmFsdWU6IGtvLm9ic2VydmFibGUoKSwga29UZXh0OiBrby5vYnNlcnZhYmxlKCksIGtvSGFzRXJyb3I6IGtvLm9ic2VydmFibGUoZmFsc2UpIH07IH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkge1xyXG4gICAgICAgIHZhciBpdGVtVmFsdWUgPSBpdGVtO1xyXG4gICAgICAgIHZhciBpdGVtVGV4dCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGl0ZW0udmFsdWUpIHtcclxuICAgICAgICAgICAgaXRlbVZhbHVlID0gaXRlbS52YWx1ZTtcclxuICAgICAgICAgICAgaXRlbVRleHQgPSBpdGVtLnRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IGtvVmFsdWU6IGtvLm9ic2VydmFibGUoaXRlbVZhbHVlKSwga29UZXh0OiBrby5vYnNlcnZhYmxlKGl0ZW1UZXh0KSwga29IYXNFcnJvcjoga28ub2JzZXJ2YWJsZShmYWxzZSkgfTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7XHJcbiAgICAgICAgdmFyIGFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9ycyA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuYWx3YXlTYXZlVGV4dEluUHJvcGVydHlFZGl0b3JzO1xyXG4gICAgICAgIHZhciB0ZXh0ID0gZWRpdG9ySXRlbS5rb1RleHQoKTtcclxuICAgICAgICBpZiAoIWFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9ycyAmJiBlZGl0b3JJdGVtLmtvVGV4dCgpID09IGVkaXRvckl0ZW0ua29WYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB2YWx1ZTogZWRpdG9ySXRlbS5rb1ZhbHVlKCksIHRleHQ6IHRleHQgfTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtvQWN0aXZlVmlldygpICE9IFwiZm9ybVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbXModGhpcy5rb0l0ZW1zVGV4dCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIub25CZWZvcmVBcHBseSgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUl0ZW1zKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0cyA9IHRleHQuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGV4dHNbaV0pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlSXRlbSA9IG5ldyBTdXJ2ZXkuSXRlbVZhbHVlKHRleHRzW2ldKTtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0geyB2YWx1ZTogdmFsdWVJdGVtLnZhbHVlLCB0ZXh0OiAodmFsdWVJdGVtLmhhc1RleHQgPyB2YWx1ZUl0ZW0udGV4dCA6IFwiXCIpIH07XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua29JdGVtcyh0aGlzLmdldEl0ZW1zRnJvbVZhbHVlKGl0ZW1zKSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbXNUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIHRleHQgPSBbXTtcclxuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmtvSXRlbXMoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWVFbXB0eShpdGVtLmtvVmFsdWUoKSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB2YXIgaXRlbVRleHQgPSBpdGVtLmtvVmFsdWUoKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ua29UZXh0KCkpIGl0ZW1UZXh0ICs9IFN1cnZleS5JdGVtVmFsdWUuU2VwYXJhdG9yICsgaXRlbS5rb1RleHQoKTtcclxuICAgICAgICAgICAgdGV4dC5wdXNoKGl0ZW1UZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRleHQuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBpc1ZhbHVlRW1wdHkodmFsOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gIXZhbDtcclxuICAgIH1cclxufVxyXG5cclxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwiaXRlbXZhbHVlc1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XHJcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcclxuaW1wb3J0IHtTdXJ2ZXlRdWVzdGlvbkVkaXRvcn0gZnJvbSBcIi4uL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvclwiO1xyXG5pbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbVZhbHVlc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yXCI7XHJcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XHJcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlEcm9wZG93bkNvbHVtbnNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIHtcclxuICAgIGtvRWRpdEl0ZW06IGFueTsga29Jc0xpc3Q6IGFueTtcclxuICAgIG9uRWRpdEl0ZW1DbGljazogYW55OyBvbkNhbmNlbEVkaXRJdGVtQ2xpY2s6IGFueTtcclxuICAgIGNvbHVtbkVkaXRvcjogU3VydmV5UXVlc3Rpb25FZGl0b3I7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmtvRWRpdEl0ZW0gPSBrby5vYnNlcnZhYmxlKG51bGwpO1xyXG4gICAgICAgIHRoaXMua29Jc0xpc3QgPSBrby5vYnNlcnZhYmxlKHRydWUpO1xyXG4gICAgICAgIHRoaXMua29FZGl0SXRlbS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IFxyXG4gICAgICAgICAgICBpZihzZWxmLmtvRWRpdEl0ZW0oKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbHVtbkVkaXRvciA9IG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvcihzZWxmLmtvRWRpdEl0ZW0oKS5lZGl0Q29sdW1uLCBudWxsLCBcIm1hdHJpeGRyb3Bkb3duY29sdW1uQFwiICsgc2VsZi5rb0VkaXRJdGVtKCkua29DZWxsVHlwZSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKHNlbGYuY29sdW1uRWRpdG9yKSBzZWxmLmNvbHVtbkVkaXRvci5hcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb2x1bW5FZGl0b3IgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYua29Jc0xpc3Qoc2VsZi5rb0VkaXRJdGVtKCkgPT0gbnVsbCk7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub25FZGl0SXRlbUNsaWNrID0gZnVuY3Rpb24gKGl0ZW0pIHsgc2VsZi5rb0VkaXRJdGVtKGl0ZW0pOyB9O1xyXG4gICAgICAgIHRoaXMub25DYW5jZWxFZGl0SXRlbUNsaWNrID0gZnVuY3Rpb24gKCkgeyBcclxuICAgICAgICAgICAgaWYoc2VsZi5jb2x1bW5FZGl0b3IgJiYgc2VsZi5jb2x1bW5FZGl0b3IuaGFzRXJyb3IoKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBzZWxmLmtvRWRpdEl0ZW0obnVsbCk7IFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwibWF0cml4ZHJvcGRvd25jb2x1bW5zXCI7IH1cclxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5jb2x1bW5FZGl0b3IgIT0gbnVsbCA/IHRoaXMuY29sdW1uRWRpdG9yLmhhc0Vycm9yKCkgOiBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMua29JdGVtcygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCB0aGlzLmtvSXRlbXMoKVtpXS5oYXNFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uQmVmb3JlQXBwbHkoKSB7XHJcbiAgICAgICAgaWYodGhpcy5jb2x1bW5FZGl0b3IpIHRoaXMuY29sdW1uRWRpdG9yLmFwcGx5KCk7XHJcbiAgICAgICAgc3VwZXIub25CZWZvcmVBcHBseSgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld0VkaXRvckl0ZW0oKTogYW55IHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0l0ZW0obmV3IFN1cnZleS5NYXRyaXhEcm9wZG93bkNvbHVtbihcIlwiLCB0aGlzLm9wdGlvbnMpKTsgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtKGl0ZW0sIHRoaXMub3B0aW9ucyk7IH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7XHJcbiAgICAgICAgdmFyIGNvbHVtSXRlbSA9IDxTdXJ2ZXlQcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0l0ZW0+ZWRpdG9ySXRlbTtcclxuICAgICAgICBjb2x1bUl0ZW0uYXBwbHkoKTtcclxuICAgICAgICByZXR1cm4gY29sdW1JdGVtLmNvbHVtbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zSXRlbSB7XHJcbiAgICBwdWJsaWMgZWRpdENvbHVtbjogU3VydmV5Lk1hdHJpeERyb3Bkb3duQ29sdW1uO1xyXG4gICAga29OYW1lOiBhbnk7IGtvVGl0bGU6IGFueTsga29DZWxsVHlwZTogYW55OyAga29Jc1JlcXVpcmVkOiBhbnk7XHJcbiAgICBrb0VkaXRvck5hbWU6IGFueTsga29IYXNFcnJvcjogYW55OyBrb0NhbkVkaXQ6IGFueTsgXHJcbiAgICBwdWJsaWMgb25TaG93Q2hvaWNlc0NsaWNrOiBhbnk7XHJcbiAgICBwdWJsaWMgY2VsbFR5cGVDaG9pY2VzOiBBcnJheTxhbnk+O1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbHVtbjogU3VydmV5Lk1hdHJpeERyb3Bkb3duQ29sdW1uLCBwdWJsaWMgb3B0aW9ucyA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVkaXRDb2x1bW4gPSBuZXcgU3VydmV5Lk1hdHJpeERyb3Bkb3duQ29sdW1uKGNvbHVtbi5uYW1lLCBjb2x1bW4udGl0bGUpO1xyXG4gICAgICAgIHRoaXMuY29weUNvbHVtbih0aGlzLmNvbHVtbiwgdGhpcy5lZGl0Q29sdW1uKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNlbGxUeXBlQ2hvaWNlcyA9IHRoaXMuZ2V0UHJvcGVydHlDaG9pY2VzKFwiY2VsbFR5cGVcIik7XHJcbiAgICAgICAgdGhpcy5rb05hbWUgPSBrby5vYnNlcnZhYmxlKGNvbHVtbi5uYW1lKTtcclxuICAgICAgICB0aGlzLmtvQ2VsbFR5cGUgPSBrby5vYnNlcnZhYmxlKGNvbHVtbi5jZWxsVHlwZSk7XHJcbiAgICAgICAgdGhpcy5rb1RpdGxlID0ga28ub2JzZXJ2YWJsZShjb2x1bW4ubmFtZSA9PT0gY29sdW1uLnRpdGxlID8gXCJcIiA6IGNvbHVtbi50aXRsZSk7XHJcbiAgICAgICAgdGhpcy5rb0lzUmVxdWlyZWQgPSBrby5vYnNlcnZhYmxlKHRoaXMuY29sdW1uLmlzUmVxdWlyZWQpO1xyXG4gICAgICAgIHRoaXMua29IYXNFcnJvciA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5rb0NhbkVkaXQgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmtvQ2VsbFR5cGUoKSAhPSBcImRlZmF1bHRcIjsgfSk7XHJcbiAgICAgICAgdGhpcy5rb0VkaXRvck5hbWUgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5jb2x1bW5FZGl0XCIpW1wiZm9ybWF0XCJdKHNlbGYua29OYW1lKCkpO30pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMua29IYXNFcnJvcighdGhpcy5rb05hbWUoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua29IYXNFcnJvcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFwcGx5KCkge1xyXG4gICAgICAgIHRoaXMuY29weUNvbHVtbih0aGlzLmVkaXRDb2x1bW4sIHRoaXMuY29sdW1uKTtcclxuICAgICAgICB0aGlzLmNvbHVtbi5uYW1lID0gdGhpcy5rb05hbWUoKTtcclxuICAgICAgICB0aGlzLmNvbHVtbi50aXRsZSA9IHRoaXMua29UaXRsZSgpO1xyXG4gICAgICAgIHRoaXMuY29sdW1uLmNlbGxUeXBlID0gdGhpcy5rb0NlbGxUeXBlKCk7XHJcbiAgICAgICAgdGhpcy5jb2x1bW4uaXNSZXF1aXJlZCA9IHRoaXMua29Jc1JlcXVpcmVkKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNvcHlDb2x1bW4oc3JjOiBTdXJ2ZXkuTWF0cml4RHJvcGRvd25Db2x1bW4sIGRlc3Q6IFN1cnZleS5NYXRyaXhEcm9wZG93bkNvbHVtbikge1xyXG4gICAgICAgIGRlc3QuaGFzT3RoZXIgPSBzcmMuaGFzT3RoZXI7XHJcbiAgICAgICAgZGVzdC5jaG9pY2VzID0gc3JjLmNob2ljZXM7XHJcbiAgICAgICAgZGVzdC5jb2xDb3VudCA9IHNyYy5jb2xDb3VudDtcclxuICAgICAgICBkZXN0Lm9wdGlvbnNDYXB0aW9uID0gc3JjLm9wdGlvbnNDYXB0aW9uO1xyXG4gICAgICAgIC8vVE9ETyBjaGFuZ2UgdG8gcHJvcGVydGllc1xyXG4gICAgICAgIGlmKHNyY1tcImNob2ljZXNPcmRlclwiXSkgZGVzdFtcImNob2ljZXNPcmRlclwiXSA9IHNyY1tcImNob2ljZXNPcmRlclwiXTtcclxuICAgICAgICBpZihzcmNbXCJpbnB1dFR5cGVcIl0pIGRlc3RbXCJpbnB1dFR5cGVcIl0gPSBzcmNbXCJpbnB1dFR5cGVcIl07XHJcbiAgICAgICAgaWYoc3JjW1wicGxhY2VIb2xkZXJcIl0pIGRlc3RbXCJwbGFjZUhvbGRlclwiXSA9IHNyY1tcInBsYWNlSG9sZGVyXCJdO1xyXG4gICAgICAgIGlmKHNyY1tcImNob2ljZXNCeVVybFwiXSkgZGVzdFtcImNob2ljZXNCeVVybFwiXS5zZXREYXRhKHNyY1tcImNob2ljZXNCeVVybFwiXSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFByb3BlcnR5Q2hvaWNlcyhwcm9wZXR5TmFtZTogc3RyaW5nKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRQcm9wZXJ0aWVzKFwibWF0cml4ZHJvcGRvd25jb2x1bW5cIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2ldLm5hbWUgPT0gcHJvcGV0eU5hbWUpIHJldHVybiBwcm9wZXJ0aWVzW2ldLmNob2ljZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwibWF0cml4ZHJvcGRvd25jb2x1bW5zXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5RHJvcGRvd25Db2x1bW5zRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eU1vZGFsRWRpdG9yXCI7XHJcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcclxuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcclxuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVJlc3VsdGZ1bGxFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yIHtcclxuICAgIGtvVXJsOiBhbnk7IGtvUGF0aDogYW55OyBrb1ZhbHVlTmFtZTogYW55OyBrb1RpdGxlTmFtZTogYW55OyBcclxuICAgIHB1YmxpYyBzdXJ2ZXk6IFN1cnZleS5TdXJ2ZXk7XHJcbiAgICBwdWJsaWMgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkRyb3Bkb3duO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5rb1VybCA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgICAgICB0aGlzLmtvUGF0aCA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgICAgICB0aGlzLmtvVmFsdWVOYW1lID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgICAgIHRoaXMua29UaXRsZU5hbWUgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVTdXJ2ZXkoKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5rb1VybC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnVybCA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcclxuICAgICAgICB0aGlzLmtvUGF0aC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnBhdGggPSBuZXdWYWx1ZTsgc2VsZi5ydW4oKTsgfSk7XHJcbiAgICAgICAgdGhpcy5rb1ZhbHVlTmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnZhbHVlTmFtZSA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcclxuICAgICAgICB0aGlzLmtvVGl0bGVOYW1lLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5xdWVzdGlvbi5jaG9pY2VzQnlVcmwudGl0bGVOYW1lID0gbmV3VmFsdWU7IHNlbGYucnVuKCk7IH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInJlc3RmdWxsXCI7IH1cclxuICAgIHB1YmxpYyBnZXQgcmVzdGZ1bGxWYWx1ZSgpIHsgcmV0dXJuIDxTdXJ2ZXkuQ2hvaWNlc1Jlc3RmdWxsPnRoaXMudmFsdWU7IH1cclxuICAgIHB1YmxpYyBnZXRWYWx1ZVRleHQodmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudXJsKSByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLmVtcHR5XCIpO1xyXG4gICAgICAgIHZhciBzdHIgPSB2YWx1ZS51cmw7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPiAyMCkge1xyXG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDAsIDIwKSArIFwiLi4uXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9IHRoaXMucmVzdGZ1bGxWYWx1ZTtcclxuICAgICAgICB0aGlzLmtvVXJsKHZhbCA/IHZhbC51cmwgOiBcIlwiKTtcclxuICAgICAgICB0aGlzLmtvUGF0aCh2YWwgPyB2YWwucGF0aCA6IFwiXCIpO1xyXG4gICAgICAgIHRoaXMua29WYWx1ZU5hbWUodmFsID8gdmFsLnZhbHVlTmFtZSA6IFwiXCIpO1xyXG4gICAgICAgIHRoaXMua29UaXRsZU5hbWUodmFsID8gdmFsLnRpdGxlTmFtZSA6IFwiXCIpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uQmVmb3JlQXBwbHkoKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9IG5ldyBTdXJ2ZXkuQ2hvaWNlc1Jlc3RmdWxsKCk7XHJcbiAgICAgICAgdmFsLnVybCA9IHRoaXMua29VcmwoKTtcclxuICAgICAgICB2YWwucGF0aCA9IHRoaXMua29QYXRoKCk7XHJcbiAgICAgICAgdmFsLnZhbHVlTmFtZSA9IHRoaXMua29WYWx1ZU5hbWUoKTtcclxuICAgICAgICB2YWwudGl0bGVOYW1lID0gdGhpcy5rb1RpdGxlTmFtZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWVDb3JlKHZhbCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJ1bigpIHtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uLmNob2ljZXNCeVVybC5ydW4oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY3JlYXRlU3VydmV5KCkge1xyXG4gICAgICAgIHRoaXMuc3VydmV5ID0gbmV3IFN1cnZleS5TdXJ2ZXkoKTtcclxuICAgICAgICB0aGlzLnN1cnZleS5zaG93TmF2aWdhdGlvbkJ1dHRvbnMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN1cnZleS5zaG93UXVlc3Rpb25OdW1iZXJzID0gXCJvZmZcIjtcclxuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LmFkZE5ld1BhZ2UoXCJwYWdlMVwiKTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gPFN1cnZleS5RdWVzdGlvbkRyb3Bkb3duPnBhZ2UuYWRkTmV3UXVlc3Rpb24oXCJkcm9wZG93blwiLCBcInExXCIpO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb24udGl0bGUgPSBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudGVzdFNlcnZpY2VcIilcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uLmNob2ljZXMgPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwicmVzdGZ1bGxcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlSZXN1bHRmdWxsRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlSZXN0ZnVsbEVkaXRvci50cyIsImltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xyXG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XHJcbmltcG9ydCB7U3VydmV5SGVscGVyfSBmcm9tIFwiLi4vc3VydmV5SGVscGVyXCI7XHJcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XHJcbmltcG9ydCB7U3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3JcIjtcclxuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRleHRJdGVtc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5SXRlbXNFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ0ZXh0aXRlbXNcIjsgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld0VkaXRvckl0ZW0oKTogYW55IHtcclxuICAgICAgICB2YXIgb2JqcyA9IFtdO1xyXG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMua29JdGVtcygpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgb2Jqcy5wdXNoKHsgbmFtZTogaXRlbXNbaV0ua29OYW1lKCkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlZGl0SXRlbSA9IHsga29OYW1lOiBrby5vYnNlcnZhYmxlKFN1cnZleUhlbHBlci5nZXROZXdOYW1lKG9ianMsIFwidGV4dFwiKSksIGtvVGl0bGU6IGtvLm9ic2VydmFibGUoKSB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVmFsaWRhdG9yc0VkaXRvcihlZGl0SXRlbSwgW10pO1xyXG4gICAgICAgIHJldHVybiBlZGl0SXRlbTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkge1xyXG4gICAgICAgIHZhciBlZGl0SXRlbSA9IHsga29OYW1lOiBrby5vYnNlcnZhYmxlKGl0ZW0ubmFtZSksIGtvVGl0bGU6IGtvLm9ic2VydmFibGUoaXRlbS50aXRsZSkgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVZhbGlkYXRvcnNFZGl0b3IoZWRpdEl0ZW0sIGl0ZW0udmFsaWRhdG9ycyk7XHJcbiAgICAgICAgcmV0dXJuIGVkaXRJdGVtO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHtcclxuICAgICAgICB2YXIgaXRlbVRleHQgPSBuZXcgU3VydmV5Lk11bHRpcGxlVGV4dEl0ZW0oZWRpdG9ySXRlbS5rb05hbWUoKSwgZWRpdG9ySXRlbS5rb1RpdGxlKCkpO1xyXG4gICAgICAgIGl0ZW1UZXh0LnZhbGlkYXRvcnMgPSBlZGl0b3JJdGVtLnZhbGlkYXRvcnM7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1UZXh0O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVWYWxpZGF0b3JzRWRpdG9yKGl0ZW06IGFueSwgdmFsaWRhdG9yczogQXJyYXk8YW55Pikge1xyXG4gICAgICAgIGl0ZW0udmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMuc2xpY2UoKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG9uSXRlbUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3VmFsdWU6IGFueSkgeyBpdGVtLnZhbGlkYXRvcnMgPSBuZXdWYWx1ZTsgaXRlbS5rb1RleHQoc2VsZi5nZXRUZXh0KG5ld1ZhbHVlLmxlbmd0aCkpOyB9O1xyXG4gICAgICAgIHZhciBwcm9wZXJ0eUVkaXRvciA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3IoKTtcclxuICAgICAgICBpdGVtLmVkaXRvciA9IHByb3BlcnR5RWRpdG9yO1xyXG4gICAgICAgIHByb3BlcnR5RWRpdG9yLm9uQ2hhbmdlZCA9IChuZXdWYWx1ZTogYW55KSA9PiB7IG9uSXRlbUNoYW5nZWQobmV3VmFsdWUpOyB9O1xyXG4gICAgICAgIHByb3BlcnR5RWRpdG9yLm9iamVjdCA9IGl0ZW07XHJcbiAgICAgICAgcHJvcGVydHlFZGl0b3IudGl0bGUoZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLmVkaXRQcm9wZXJ0eVwiKVtcImZvcm1hdFwiXShcIlZhbGlkYXRvcnNcIikpO1xyXG4gICAgICAgIHByb3BlcnR5RWRpdG9yLnZhbHVlID0gaXRlbS52YWxpZGF0b3JzO1xyXG4gICAgICAgIGl0ZW0ua29UZXh0ID0ga28ub2JzZXJ2YWJsZSh0aGlzLmdldFRleHQodmFsaWRhdG9ycy5sZW5ndGgpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0VGV4dChsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5pdGVtc1wiKVtcImZvcm1hdFwiXShsZW5ndGgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJ0ZXh0aXRlbXNcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlUZXh0SXRlbXNFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRleHRJdGVtc0VkaXRvci50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5pbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcclxuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xyXG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VHJpZ2dlcnNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIHtcclxuICAgIGtvUXVlc3Rpb25zOiBhbnk7IGtvUGFnZXM6IGFueTtcclxuICAgIHB1YmxpYyBrb1NlbGVjdGVkOiBhbnk7XHJcbiAgICBwdWJsaWMgYXZhaWxhYmxlVHJpZ2dlcnM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIHByaXZhdGUgdHJpZ2dlckNsYXNzZXM6IEFycmF5PFN1cnZleS5Kc29uTWV0YWRhdGFDbGFzcz4gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub25EZWxldGVDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb0l0ZW1zLnJlbW92ZShzZWxmLmtvU2VsZWN0ZWQoKSk7IH07XHJcbiAgICAgICAgdGhpcy5vbkFkZENsaWNrID0gZnVuY3Rpb24gKHRyaWdnZXJUeXBlKSB7IHNlbGYuYWRkSXRlbSh0cmlnZ2VyVHlwZSk7IH07XHJcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkID0ga28ub2JzZXJ2YWJsZShudWxsKTtcclxuICAgICAgICB0aGlzLmtvUGFnZXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmtvUXVlc3Rpb25zID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2xhc3NlcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldENoaWxkcmVuQ2xhc3NlcyhcInN1cnZleXRyaWdnZXJcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVUcmlnZ2VycyA9IHRoaXMuZ2V0QXZhaWxhYmxlVHJpZ2dlcnMoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ0cmlnZ2Vyc1wiOyB9XHJcbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMua29QYWdlcyh0aGlzLmdldE5hbWVzKCg8U3VydmV5LlN1cnZleT50aGlzLm9iamVjdCkucGFnZXMpKTtcclxuICAgICAgICAgICAgdGhpcy5rb1F1ZXN0aW9ucyh0aGlzLmdldE5hbWVzKCg8U3VydmV5LlN1cnZleT50aGlzLm9iamVjdCkuZ2V0QWxsUXVlc3Rpb25zKCkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIub25WYWx1ZUNoYW5nZWQoKTtcclxuICAgICAgICBpZiAodGhpcy5rb1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMua29TZWxlY3RlZCh0aGlzLmtvSXRlbXMoKS5sZW5ndGggPiAwID8gdGhpcy5rb0l0ZW1zKClbMF0gOiBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRJdGVtKHRyaWdnZXJUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgdHJpZ2dlciA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKHRyaWdnZXJUeXBlKTtcclxuICAgICAgICB2YXIgdHJpZ2dlckl0ZW0gPSB0aGlzLmNyZWF0ZVByb3BlcnR5VHJpZ2dlcih0cmlnZ2VyKTtcclxuICAgICAgICB0aGlzLmtvSXRlbXMucHVzaCh0cmlnZ2VySXRlbSk7XHJcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKHRyaWdnZXJJdGVtKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkge1xyXG4gICAgICAgIHZhciBqc29uT2JqID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCk7XHJcbiAgICAgICAgdmFyIHRyaWdnZXIgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyhpdGVtLmdldFR5cGUoKSk7XHJcbiAgICAgICAganNvbk9iai50b09iamVjdChpdGVtLCB0cmlnZ2VyKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVQcm9wZXJ0eVRyaWdnZXIoPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyPnRyaWdnZXIpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHtcclxuICAgICAgICB2YXIgZWRpdG9yVHJpZ2dlciA9IDxTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXI+ZWRpdG9ySXRlbTtcclxuICAgICAgICByZXR1cm4gZWRpdG9yVHJpZ2dlci5jcmVhdGVUcmlnZ2VyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEF2YWlsYWJsZVRyaWdnZXJzKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHJpZ2dlckNsYXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy50cmlnZ2VyQ2xhc3Nlc1tpXS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0TmFtZXMoaXRlbXM6IEFycmF5PGFueT4pOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICB2YXIgbmFtZXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgIGlmIChpdGVtW1wibmFtZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgbmFtZXMucHVzaChpdGVtW1wibmFtZVwiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5hbWVzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVQcm9wZXJ0eVRyaWdnZXIodHJpZ2dlcjogU3VydmV5LlN1cnZleVRyaWdnZXIpOiBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXIge1xyXG4gICAgICAgIHZhciB0cmlnZ2VySXRlbSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRyaWdnZXIuZ2V0VHlwZSgpID09IFwidmlzaWJsZXRyaWdnZXJcIikge1xyXG4gICAgICAgICAgICB0cmlnZ2VySXRlbSA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVZpc2libGVUcmlnZ2VyKDxTdXJ2ZXkuU3VydmV5VHJpZ2dlclZpc2libGU+dHJpZ2dlciwgdGhpcy5rb1BhZ2VzLCB0aGlzLmtvUXVlc3Rpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyaWdnZXIuZ2V0VHlwZSgpID09IFwic2V0dmFsdWV0cmlnZ2VyXCIpIHtcclxuICAgICAgICAgICAgdHJpZ2dlckl0ZW0gPSBuZXcgU3VydmV5UHJvcGVydHlTZXRWYWx1ZVRyaWdnZXIoPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyU2V0VmFsdWU+dHJpZ2dlciwgdGhpcy5rb1F1ZXN0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdHJpZ2dlckl0ZW0pIHtcclxuICAgICAgICAgICAgdHJpZ2dlckl0ZW0gPSBuZXcgU3VydmV5UHJvcGVydHlUcmlnZ2VyKHRyaWdnZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJpZ2dlckl0ZW07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VHJpZ2dlciB7XHJcbiAgICBwcml2YXRlIG9wZXJhdG9ycyA9IFtcImVtcHR5XCIsIFwibm90ZW1wdHlcIiwgXCJlcXVhbFwiLCBcIm5vdGVxdWFsXCIsIFwiY29udGFpbnNcIiwgXCJub3Rjb250YWluc1wiLCBcImdyZWF0ZXJcIiwgXCJsZXNzXCIsIFwiZ3JlYXRlcm9yZXF1YWxcIiwgXCJsZXNzb3JlcXVhbFwiXTtcclxuICAgIHByaXZhdGUgdHJpZ2dlclR5cGU6IHN0cmluZztcclxuICAgIGF2YWlsYWJsZU9wZXJhdG9ycyA9IFtdO1xyXG4gICAga29OYW1lOiBhbnk7IGtvT3BlcmF0b3I6IGFueTsga29WYWx1ZTogYW55OyBrb1R5cGU6IGFueTtcclxuICAgIGtvVGV4dDogYW55OyBrb0lzVmFsaWQ6IGFueTsga29SZXF1aXJlVmFsdWU6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJpZ2dlcjogU3VydmV5LlN1cnZleVRyaWdnZXIpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZU9wZXJhdG9ycygpO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclR5cGUgPSB0cmlnZ2VyLmdldFR5cGUoKTtcclxuICAgICAgICB0aGlzLmtvVHlwZSA9IGtvLm9ic2VydmFibGUodGhpcy50cmlnZ2VyVHlwZSk7XHJcbiAgICAgICAgdGhpcy5rb05hbWUgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIubmFtZSk7XHJcbiAgICAgICAgdGhpcy5rb09wZXJhdG9yID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLm9wZXJhdG9yKTtcclxuICAgICAgICB0aGlzLmtvVmFsdWUgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIudmFsdWUpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmtvUmVxdWlyZVZhbHVlID0ga28uY29tcHV0ZWQoKCkgPT4geyByZXR1cm4gc2VsZi5rb09wZXJhdG9yKCkgIT0gXCJlbXB0eVwiICYmIHNlbGYua29PcGVyYXRvcigpICE9IFwibm90ZW1wdHlcIjsgfSk7XHJcbiAgICAgICAgdGhpcy5rb0lzVmFsaWQgPSBrby5jb21wdXRlZCgoKSA9PiB7IGlmIChzZWxmLmtvTmFtZSgpICYmICghc2VsZi5rb1JlcXVpcmVWYWx1ZSgpIHx8IHNlbGYua29WYWx1ZSgpKSkgcmV0dXJuIHRydWU7IHJldHVybiBmYWxzZTsgfSk7XHJcbiAgICAgICAgdGhpcy5rb1RleHQgPSBrby5jb21wdXRlZCgoKSA9PiB7IHNlbGYua29OYW1lKCk7IHNlbGYua29PcGVyYXRvcigpOyBzZWxmLmtvVmFsdWUoKTsgcmV0dXJuIHNlbGYuZ2V0VGV4dCgpOyB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjcmVhdGVUcmlnZ2VyKCk6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyIHtcclxuICAgICAgICB2YXIgdHJpZ2dlciA9IDxTdXJ2ZXkuU3VydmV5VHJpZ2dlcj5TdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyh0aGlzLnRyaWdnZXJUeXBlKTtcclxuICAgICAgICB0cmlnZ2VyLm5hbWUgPSB0aGlzLmtvTmFtZSgpO1xyXG4gICAgICAgIHRyaWdnZXIub3BlcmF0b3IgPSB0aGlzLmtvT3BlcmF0b3IoKTtcclxuICAgICAgICB0cmlnZ2VyLnZhbHVlID0gdGhpcy5rb1ZhbHVlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRyaWdnZXI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNyZWF0ZU9wZXJhdG9ycygpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3BlcmF0b3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5vcGVyYXRvcnNbaV07XHJcbiAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlT3BlcmF0b3JzLnB1c2goeyBuYW1lOiBuYW1lLCB0ZXh0OiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3AuXCIgKyBuYW1lKSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXRoaXMua29Jc1ZhbGlkKCkpIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudHJpZ2dlck5vdFNldFwiKTtcclxuICAgICAgICByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRyaWdnZXJSdW5JZlwiKSArIFwiICdcIiArIHRoaXMua29OYW1lKCkgKyBcIicgXCIgKyB0aGlzLmdldE9wZXJhdG9yVGV4dCgpICsgdGhpcy5nZXRWYWx1ZVRleHQoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0T3BlcmF0b3JUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIG9wID0gdGhpcy5rb09wZXJhdG9yKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmF2YWlsYWJsZU9wZXJhdG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hdmFpbGFibGVPcGVyYXRvcnNbaV0ubmFtZSA9PSBvcCkgcmV0dXJuIHRoaXMuYXZhaWxhYmxlT3BlcmF0b3JzW2ldLnRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvcDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0VmFsdWVUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtvUmVxdWlyZVZhbHVlKCkpIHJldHVybiBcIlwiO1xyXG4gICAgICAgIHJldHVybiBcIiBcIiArIHRoaXMua29WYWx1ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlWaXNpYmxlVHJpZ2dlciBleHRlbmRzIFN1cnZleVByb3BlcnR5VHJpZ2dlciB7XHJcbiAgICBwdWJsaWMgcGFnZXM6IFN1cnZleVByb3BlcnR5VHJpZ2dlck9iamVjdHM7XHJcbiAgICBwdWJsaWMgcXVlc3Rpb25zOiBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJPYmplY3RzO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRyaWdnZXI6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyVmlzaWJsZSwga29QYWdlczogYW55LCBrb1F1ZXN0aW9uczogYW55KSB7XHJcbiAgICAgICAgc3VwZXIodHJpZ2dlcik7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJPYmplY3RzKGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50cmlnZ2VyTWFrZVBhZ2VzVmlzaWJsZVwiKSwga29QYWdlcygpLCB0cmlnZ2VyLnBhZ2VzKTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJPYmplY3RzKGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50cmlnZ2VyTWFrZVF1ZXN0aW9uc1Zpc2libGVcIiksIGtvUXVlc3Rpb25zKCksIHRyaWdnZXIucXVlc3Rpb25zKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjcmVhdGVUcmlnZ2VyKCk6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyIHtcclxuICAgICAgICB2YXIgdHJpZ2dlciA9IDxTdXJ2ZXkuU3VydmV5VHJpZ2dlclZpc2libGU+c3VwZXIuY3JlYXRlVHJpZ2dlcigpO1xyXG4gICAgICAgIHRyaWdnZXIucGFnZXMgPSB0aGlzLnBhZ2VzLmtvQ2hvb3NlbigpO1xyXG4gICAgICAgIHRyaWdnZXIucXVlc3Rpb25zID0gdGhpcy5xdWVzdGlvbnMua29DaG9vc2VuKCk7XHJcbiAgICAgICAgcmV0dXJuIHRyaWdnZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVNldFZhbHVlVHJpZ2dlciBleHRlbmRzIFN1cnZleVByb3BlcnR5VHJpZ2dlciB7XHJcbiAgICBrb1F1ZXN0aW9uczogYW55OyBrb3NldFRvTmFtZTogYW55OyBrb3NldFZhbHVlOiBhbnk7IGtvaXNWYXJpYWJsZTogYW55O1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRyaWdnZXI6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyU2V0VmFsdWUsIGtvUXVlc3Rpb25zOiBhbnkpIHtcclxuICAgICAgICBzdXBlcih0cmlnZ2VyKTtcclxuICAgICAgICB0aGlzLmtvUXVlc3Rpb25zID0ga29RdWVzdGlvbnM7XHJcbiAgICAgICAgdGhpcy5rb3NldFRvTmFtZSA9IGtvLm9ic2VydmFibGUodHJpZ2dlci5zZXRUb05hbWUpO1xyXG4gICAgICAgIHRoaXMua29zZXRWYWx1ZSA9IGtvLm9ic2VydmFibGUodHJpZ2dlci5zZXRWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5rb2lzVmFyaWFibGUgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIuaXNWYXJpYWJsZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY3JlYXRlVHJpZ2dlcigpOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlciB7XHJcbiAgICAgICAgdmFyIHRyaWdnZXIgPSA8U3VydmV5LlN1cnZleVRyaWdnZXJTZXRWYWx1ZT5zdXBlci5jcmVhdGVUcmlnZ2VyKCk7XHJcbiAgICAgICAgdHJpZ2dlci5zZXRUb05hbWUgPSB0aGlzLmtvc2V0VG9OYW1lKCk7XHJcbiAgICAgICAgdHJpZ2dlci5zZXRWYWx1ZSA9IHRoaXMua29zZXRWYWx1ZSgpO1xyXG4gICAgICAgIHRyaWdnZXIuaXNWYXJpYWJsZSA9IHRoaXMua29pc1ZhcmlhYmxlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRyaWdnZXI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VHJpZ2dlck9iamVjdHMge1xyXG4gICAga29PYmplY3RzOiBhbnk7XHJcbiAgICBrb0Nob29zZW46IGFueTtcclxuICAgIGtvU2VsZWN0ZWQ6IGFueTtcclxuICAgIGtvQ2hvb3NlblNlbGVjdGVkOiBhbnk7XHJcbiAgICBwdWJsaWMgb25EZWxldGVDbGljazogYW55O1xyXG4gICAgcHVibGljIG9uQWRkQ2xpY2s6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nLCBhbGxPYmplY3RzOiBBcnJheTxzdHJpbmc+LCBjaG9vc2VuT2JqZWN0czogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIHRoaXMua29DaG9vc2VuID0ga28ub2JzZXJ2YWJsZUFycmF5KGNob29zZW5PYmplY3RzKTtcclxuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE9iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBhbGxPYmplY3RzW2ldO1xyXG4gICAgICAgICAgICBpZiAoY2hvb3Nlbk9iamVjdHMuaW5kZXhPZihpdGVtKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5rb09iamVjdHMgPSBrby5vYnNlcnZhYmxlQXJyYXkoYXJyYXkpO1xyXG4gICAgICAgIHRoaXMua29TZWxlY3RlZCA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgICAgICB0aGlzLmtvQ2hvb3NlblNlbGVjdGVkID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm9uRGVsZXRlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZGVsZXRlSXRlbSgpOyB9O1xyXG4gICAgICAgIHRoaXMub25BZGRDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5hZGRJdGVtKCk7IH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZGVsZXRlSXRlbSgpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZUl0ZW1zKHRoaXMua29DaG9vc2VuU2VsZWN0ZWQoKSwgdGhpcy5rb0Nob29zZW4sIHRoaXMua29PYmplY3RzKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRkSXRlbSgpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZUl0ZW1zKHRoaXMua29TZWxlY3RlZCgpLCB0aGlzLmtvT2JqZWN0cywgdGhpcy5rb0Nob29zZW4pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VJdGVtcyhpdGVtOiBzdHJpbmcsIHJlbW92ZWRGcm9tOiBhbnksIGFkZFRvOiBhbnkpIHtcclxuICAgICAgICByZW1vdmVkRnJvbS5yZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgYWRkVG8ucHVzaChpdGVtKTtcclxuICAgICAgICByZW1vdmVkRnJvbS5zb3J0KCk7XHJcbiAgICAgICAgYWRkVG8uc29ydCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJ0cmlnZ2Vyc1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJzRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUcmlnZ2Vyc0VkaXRvci50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJzdmRfY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJuYXZiYXItZGVmYXVsdCBjb250YWluZXItZmx1aWQgbmF2IG5hdi10YWJzIHN2ZF9tZW51XFxcIj5cXHJcXG4gICAgICAgIDxsaSBkYXRhLWJpbmQ9XFxcImNzczoge2FjdGl2ZToga29WaWV3VHlwZSgpID09ICdkZXNpZ25lcid9XFxcIj48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOnNlbGVjdERlc2lnbmVyQ2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQuZGVzaWduZXInKVxcXCI+PC9hPjwvbGk+XFxyXFxuICAgICAgICA8bGkgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBzaG93SlNPTkVkaXRvclRhYiwgY3NzOiB7YWN0aXZlOiBrb1ZpZXdUeXBlKCkgPT0gJ2VkaXRvcid9XFxcIj48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOnNlbGVjdEVkaXRvckNsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2VkLmpzb25FZGl0b3InKVxcXCI+PC9hPjwvbGk+XFxyXFxuICAgICAgICA8bGkgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBzaG93VGVzdFN1cnZleVRhYiwgY3NzOiB7YWN0aXZlOiBrb1ZpZXdUeXBlKCkgPT0gJ3Rlc3QnfVxcXCI+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazpzZWxlY3RUZXN0Q2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQudGVzdFN1cnZleScpXFxcIj48L2E+PC9saT5cXHJcXG4gICAgICAgIDxsaSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHNob3dFbWJlZGVkU3VydmV5VGFiLCBjc3M6IHthY3RpdmU6IGtvVmlld1R5cGUoKSA9PSAnZW1iZWQnfVxcXCI+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazpzZWxlY3RFbWJlZENsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2VkLmVtYmVkU3VydmV5JylcXFwiPjwvYT48L2xpPlxcclxcblxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJzdmRfYWN0aW9uc1xcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb0lzU2hvd0Rlc2lnbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgZGF0YS1iaW5kPVxcXCJlbmFibGU6dW5kb1JlZG8ua29DYW5VbmRvLCBjbGljazogZG9VbmRvQ2xpY2tcXFwiPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC51bmRvJylcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGkgY2xhc3M9XFxcInN2ZF9hY3Rpb25zXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvSXNTaG93RGVzaWduZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLWJpbmQ9XFxcImVuYWJsZTp1bmRvUmVkby5rb0NhblJlZG8sIGNsaWNrOiBkb1JlZG9DbGlja1xcXCI+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2VkLnJlZG8nKVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaSBjbGFzcz1cXFwic3ZkX2FjdGlvbnNcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogKGtvSXNTaG93RGVzaWduZXIoKSAmJiBrb1Nob3dPcHRpb25zKCkpXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgaW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtaGFzcG9wdXA9XFxcInRydWVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQub3B0aW9ucycpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIE9wdGlvbnMgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS1iaW5kPVxcXCJjc3M6IHthY3RpdmU6IGtvR2VuZXJhdGVWYWxpZEpTT059XFxcIj48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOmdlbmVyYXRlVmFsaWRKU09OQ2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQuZ2VuZXJhdGVWYWxpZEpTT04nKVxcXCI+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS1iaW5kPVxcXCJjc3M6IHthY3RpdmU6ICFrb0dlbmVyYXRlVmFsaWRKU09OKCl9XFxcIj48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOmdlbmVyYXRlUmVhZGFibGVKU09OQ2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQuZ2VuZXJhdGVSZWFkYWJsZUpTT04nKVxcXCI+PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJzdmRfYWN0aW9uc1xcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gJ3Rlc3QnXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgaW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJzdXJ2ZXlUZXN0V2lkdGhcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtaGFzcG9wdXA9XFxcInRydWVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2VkLnRlc3RTdXJ2ZXlXaWR0aCcpICsgJyAnICsgJHJvb3Qua29UZXN0U3VydmV5V2lkdGgoKVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwic3VydmV5VGVzdFdpZHRoXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBrb1Rlc3RTdXJ2ZXlXaWR0aC5iaW5kKCRkYXRhLCAnMTAwJScpXFxcIj4xMDAlPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazoga29UZXN0U3VydmV5V2lkdGguYmluZCgkZGF0YSwgJzEyMDBweCcpXFxcIj4xMjAwcHg8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBrb1Rlc3RTdXJ2ZXlXaWR0aC5iaW5kKCRkYXRhLCAnMTAwMHB4JylcXFwiPjEwMDBweDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGtvVGVzdFN1cnZleVdpZHRoLmJpbmQoJGRhdGEsICc4MDBweCcpXFxcIj44MDBweDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGtvVGVzdFN1cnZleVdpZHRoLmJpbmQoJGRhdGEsICc2MDBweCcpXFxcIj42MDBweDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGtvVGVzdFN1cnZleVdpZHRoLmJpbmQoJGRhdGEsICc0MDBweCcpXFxcIj40MDBweDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaSBjbGFzcz1cXFwic3ZkX2FjdGlvbnNcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHN2ZF9zYXZlX2J0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogc2F2ZUJ1dHRvbkNsaWNrLCB2aXNpYmxlOiBrb1Nob3dTYXZlQnV0dG9uXFxcIj48c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQuc2F2ZVN1cnZleScpXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBzdmRfY29udGVudFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgc3ZkX3N1cnZleV9kZXNpZ25lclxcXCIgIGRhdGEtYmluZD1cXFwidmlzaWJsZToga29WaWV3VHlwZSgpID09ICdkZXNpZ25lcidcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0yIGNvbC1tZC0yIGNvbC1zbS0xIGNvbC14cy0xIHBhbmVsIHBhbmVsLWRlZmF1bHQgc3ZkX3Rvb2xib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAtdmVydGljYWxcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlO3BhZGRpbmctcmlnaHQ6MnB4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogdG9vbGJveC5rb0l0ZW1zIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBzdHlsZT1cXFwidGV4dC1hbGlnbjpsZWZ0OyBtYXJnaW46MXB4O21pbi1oZWlnaHQ6MzdweDsgd2lkdGg6MTAwJVxcXCIgZHJhZ2dhYmxlPVxcXCJ0cnVlXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcm9vdC5jbGlja1Rvb2xib3hJdGVtLCBldmVudDp7ZHJhZ3N0YXJ0OiBmdW5jdGlvbihlbCwgZSkgeyAkcm9vdC5kcmFnZ2luZ1Rvb2xib3hJdGVtKCRkYXRhLCBlKTsgcmV0dXJuIHRydWU7fSwgZHJhZ2VuZDogZnVuY3Rpb24oZWwsIGUpIHsgJHJvb3QuZHJhZ0VuZCgpOyB9fVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJjc3M6IGljb25OYW1lLCBhdHRyOiB7dGl0bGU6IHRpdGxlfVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzdmRfdG9vbGJveF9pdGVtX3RleHQgaGlkZGVuLXNtIGhpZGRlbi14c1xcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OnRpdGxlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvICAtLT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTcgY29sLW1kLTcgY29sLXNtLTggY29sLXhzLTExIHN2ZF9lZGl0b3JzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3ZkX3BhZ2VzX2VkaXRvclxcXCIgZGF0YS1iaW5kPVxcXCJ0ZW1wbGF0ZTogeyBuYW1lOiAncGFnZWVkaXRvcicsIGRhdGE6IHBhZ2VzRWRpdG9yIH1cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdmRfcXVlc3Rpb25zX2VkaXRvclxcXCIgaWQ9XFxcInNjcm9sbGFibGVEaXZcXFwiIGRhdGEtYmluZD1cXFwic3R5bGU6IHtoZWlnaHQ6IGtvRGVzaWduZXJIZWlnaHR9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcInN1cnZleWpzXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTMgaGlkZGVuLXhzIHBhbmVsIHBhbmVsLWRlZmF1bHQgc3ZkX3Byb3BlcnRpZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nIGlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImN1c3RvbS1zZWxlY3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBrb09iamVjdHMsIG9wdGlvbnNUZXh0OiAndGV4dCcsIHZhbHVlOiBrb1NlbGVjdGVkT2JqZWN0XFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1iaW5kPVxcXCJlbmFibGU6IGtvQ2FuRGVsZXRlT2JqZWN0LCBjbGljazogZGVsZXRlQ3VycmVudE9iamVjdCwgYXR0cjogeyB0aXRsZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5kZWxTZWxPYmplY3QnKX1cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdmRfb2JqZWN0X2VkaXRvclxcXCIgZGF0YS1iaW5kPVxcXCJzdHlsZToge2hlaWdodDoga29EZXNpZ25lckhlaWdodH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdvYmplY3RlZGl0b3InLCBkYXRhOiBzZWxlY3RlZE9iamVjdEVkaXRvciB9XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOnN1cnZleVZlcmJzLmtvSGFzVmVyYnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdvYmplY3R2ZXJicycsIGRhdGE6IHN1cnZleVZlcmJzIH1cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSAnZWRpdG9yJ1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdqc29uZWRpdG9yJywgZGF0YToganNvbkVkaXRvciB9XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5anNUZXN0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSAndGVzdCcsIHN0eWxlOiB7d2lkdGg6IGtvVGVzdFN1cnZleVdpZHRofVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5anNFeGFtcGxlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJzdXJ2ZXlqc0V4YW1wbGVyZVJ1blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazpzZWxlY3RUZXN0Q2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQudGVzdFN1cnZleUFnYWluJylcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmVcXFwiPlRlc3QgQWdhaW48L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5anNFbWJlZFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gJ2VtYmVkJ1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdzdXJ2ZXllbWJlZGluZycsIGRhdGE6IHN1cnZleUVtYmVkaW5nIH1cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwidGVtcGxhdGU6IHsgbmFtZTogJ3F1ZXN0aW9uZWRpdG9yJywgZGF0YTogcXVlc3Rpb25FZGl0b3JXaW5kb3cgfVxcXCI+PC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL2luZGV4Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcImpzb25lZGl0b3JcXFwiPlxcclxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZTogIWhhc0FjZUVkaXRvclxcXCI+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcInN2ZF9qc29uX2VkaXRvcl9hcmVhXFxcIiBkYXRhLWJpbmQ9XFxcInRleHRJbnB1dDprb1RleHRcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGtvRXJyb3JzIC0tPlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICA8c3Bhbj5FcnJvcjogPC9zcGFuPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogdGV4dFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8IS0tIC9rbyAgLS0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlqc0pTT05FZGl0b3JcXFwiIGNsYXNzPVxcXCJzdmRfanNvbl9lZGl0b3JcXFwiPjwvZGl2Plxcclxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9qc29uZWRpdG9yLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcIm9iamVjdGVkaXRvclxcXCI+XFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgc3ZkX3RhYmxlLW5vd3JhcFxcXCI+XFxyXFxuICAgICAgICA8dGJvZHkgZGF0YS1iaW5kPVxcXCJmb3JlYWNoOiBrb1Byb3BlcnRpZXNcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ciBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LmNoYW5nZUFjdGl2ZVByb3BlcnR5KCRkYXRhKSwgY3NzOiB7J2FjdGl2ZSc6ICRwYXJlbnQua29BY3RpdmVQcm9wZXJ0eSgpID09ICRkYXRhfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XFxcInRleHQ6IGRpc3BsYXlOYW1lLCBhdHRyOiB7dGl0bGU6IHRpdGxlfVxcXCIgd2lkdGg9XFxcIjUwJVxcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIHdpZHRoPVxcXCI1MCVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiBrb1RleHQsIHZpc2libGU6ICRwYXJlbnQua29BY3RpdmVQcm9wZXJ0eSgpICE9ICRkYXRhIHx8IGRpc2FibGVkLCBhdHRyOiB7dGl0bGU6IGtvVGV4dH1cXFwiIHN0eWxlPVxcXCJ0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW5cXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiAkcGFyZW50LmtvQWN0aXZlUHJvcGVydHkoKSA9PSAkZGF0YSAmJiAhZGlzYWJsZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLScgKyBlZGl0b3JUeXBlLCBkYXRhOiAkZGF0YSB9IC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGJvZHk+XFxyXFxuICAgIDwvdGFibGU+XFxyXFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL29iamVjdGVkaXRvci5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJvYmplY3R2ZXJic1xcXCI+XFxyXFxuICAgIDwhLS0ga28gZm9yZWFjaDoga29WZXJicyAtLT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiAgY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6dGV4dFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczoga29JdGVtcywgb3B0aW9uc1RleHQ6ICd0ZXh0Jywgb3B0aW9uc1ZhbHVlOid2YWx1ZScsIHZhbHVlOiBrb1NlbGVjdGVkSXRlbVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPCEtLSAva28gIC0tPlxcclxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9vYmplY3R2ZXJicy5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwYWdlZWRpdG9yXFxcIj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiIGRhdGEtYmluZD1cXFwidGFiczp0cnVlXFxcIj5cXHJcXG4gICAgICAgIDwhLS0ga28gZm9yZWFjaDoga29QYWdlcyAtLT5cXHJcXG4gICAgICAgIDxsaSBkYXRhLWJpbmQ9XFxcImNzczoge2FjdGl2ZToga29TZWxlY3RlZCgpfSxldmVudDp7XFxyXFxuICAgICAgICAgICBrZXlkb3duOmZ1bmN0aW9uKGVsLCBlKXsgJHBhcmVudC5rZXlEb3duKGVsLCBlKTsgfSxcXHJcXG4gICAgICAgICAgIGRyYWdzdGFydDpmdW5jdGlvbihlbCwgZSl7ICRwYXJlbnQuZHJhZ1N0YXJ0KGVsKTsgcmV0dXJuIHRydWU7IH0sXFxyXFxuICAgICAgICAgICBkcmFnb3ZlcjpmdW5jdGlvbihlbCwgZSl7ICRwYXJlbnQuZHJhZ092ZXIoZWwpO30sXFxyXFxuICAgICAgICAgICBkcmFnZW5kOmZ1bmN0aW9uKGVsLCBlKXsgJHBhcmVudC5kcmFnRW5kKCk7fSxcXHJcXG4gICAgICAgICAgIGRyb3A6ZnVuY3Rpb24oZWwsIGUpeyAkcGFyZW50LmRyYWdEcm9wKGVsKTt9XFxyXFxuICAgICAgICAgfVxcXCI+IFxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJzdmRfcGFnZV9uYXZcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6JHBhcmVudC5zZWxlY3RQYWdlQ2xpY2tcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6IHRpdGxlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwhLS0gL2tvICAtLT5cXHJcXG4gICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgc3ZkX2FkZF9uZXdfcGFnZV9idG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6YWRkTmV3UGFnZUNsaWNrXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+PC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcGFnZWVkaXRvci5odG1sXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1ib29sZWFuXFxcIj5cXHJcXG4gICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLWJpbmQ9XFxcImNoZWNrZWQ6IGtvVmFsdWVcXFwiIC8+XFxyXFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1ib29sZWFuLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLWRyb3Bkb3duXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY3VzdG9tLXNlbGVjdFxcXCI+XFxyXFxuICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGtvVmFsdWUsIG9wdGlvbnM6IGNob2ljZXNcXFwiICBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgIDwvZGl2Plxcclxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItZHJvcGRvd24uaHRtbFxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItZXhwcmVzc2lvblxcXCI+XFxyXFxuICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT5cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yY29udGVudC1leHByZXNzaW9uXFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVmFsdWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiByb3dzPVxcXCI4XFxcIiBhdXRvZm9jdXM9XFxcImF1dG9mb2N1c1xcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDokcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmV4cHJlc3Npb25IZWxwJylcXFwiIHN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTpub3JtYWxcXFwiPjwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1leHByZXNzaW9uLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLWh0bWxcXFwiPlxcclxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtaHRtbFxcXCI+XFxyXFxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVmFsdWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiByb3dzPVxcXCIxMFxcXCIgYXV0b2ZvY3VzPVxcXCJhdXRvZm9jdXNcXFwiPjwvdGV4dGFyZWE+XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1odG1sLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLWl0ZW12YWx1ZXNcXFwiPlxcclxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxyXFxuPC9zY3JpcHQ+XFxyXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGNsYXNzPVxcXCJidG4teHNcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtaXRlbXZhbHVlc1xcXCI+XFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206M3B4XFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0bi14c1xcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IHsnYnRuIGJ0bi1wcmltYXJ5Jzprb0FjdGl2ZVZpZXcoKSA9PSAnZm9ybScsICdidG4tbGluayc6a29BY3RpdmVWaWV3KCkgIT0gJ2Zvcm0nfSwgY2xpY2s6Y2hhbmdlVG9Gb3JtVmlld0NsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmZvcm1FbnRyeScpXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0bi14c1xcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IHsnYnRuIGJ0bi1wcmltYXJ5Jzprb0FjdGl2ZVZpZXcoKSAhPSAnZm9ybScsICdidG4tbGluayc6a29BY3RpdmVWaWV3KCkgPT0gJ2Zvcm0nfSwgY2xpY2s6Y2hhbmdlVG9UZXh0Vmlld0NsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmZhc3RFbnRyeScpXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmtvQWN0aXZlVmlldygpID09ICdmb3JtJ1xcXCIgc3R5bGU9XFxcIm92ZXJmbG93LXk6IGF1dG87IG92ZXJmbG93LXg6aGlkZGVuOyBtYXgtaGVpZ2h0OjQwMHB4O21pbi1oZWlnaHQ6MjAwcHhcXFwiPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgPlxcclxcbiAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnZhbHVlJylcXFwiPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnRleHQnKVxcXCI+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGtvSXRlbXMgLS0+XFxyXFxuICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiIHJvbGU9XFxcImdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXhzXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6ICRpbmRleCgpID4gMCwgY2xpY2s6ICRwYXJlbnQub25Nb3ZlVXBDbGlja1xcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctdXBcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi14c1xcXCIgc3R5bGU9XFxcImZsb2F0Om5vbmVcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogJGluZGV4KCkgPCAkcGFyZW50LmtvSXRlbXMoKS5sZW5ndGggLSAxLCBjbGljazogJHBhcmVudC5vbk1vdmVEb3duQ2xpY2tcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LWRvd25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVmFsdWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyMDBweFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXIgbm8tcGFkZGluZ1xcXCIgcm9sZT1cXFwiYWxlcnRcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTprb0hhc0Vycm9yLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmVudGVyTmV3VmFsdWUnKVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVGV4dFxcXCIgc3R5bGU9XFxcIndpZHRoOjIwMHB4XFxcIiAvPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXhzXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50Lm9uRGVsZXRlQ2xpY2tcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcclxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IGJ0bi10b29sYmFyXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6a29BY3RpdmVWaWV3KCkgPT0gJ2Zvcm0nXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uQWRkQ2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmFkZE5ldycpXFxcIiAvPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkNsZWFyQ2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnJlbW92ZUFsbCcpXFxcIiAvPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6a29BY3RpdmVWaWV3KCkgIT0gJ2Zvcm0nXFxcIj5cXHJcXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInRleHRJbnB1dDoga29JdGVtc1RleHRcXFwiIHN0eWxlPVxcXCJvdmVyZmxvdy15OiBhdXRvOyBvdmVyZmxvdy14OmhpZGRlbjsgbWF4LWhlaWdodDo0MDBweDsgbWluLWhlaWdodDoyNTBweDsgd2lkdGg6MTAwJVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1pdGVtdmFsdWVzLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLW1hdHJpeGRyb3Bkb3duY29sdW1uc1xcXCI+XFxyXFxuICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT5cXHJcXG48L3NjcmlwdD5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yY29udGVudC1tYXRyaXhkcm9wZG93bmNvbHVtbnNcXFwiPlxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvSXNMaXN0XFxcIj5cXHJcXG4gICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUucmVxdWlyZWQnKVxcXCI+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5jZWxsVHlwZScpXFxcIj48L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLm5hbWUnKVxcXCI+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50aXRsZScpXFxcIj48L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+PC90aD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGtvSXRlbXMgLS0+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEtYmluZD1cXFwiY2hlY2tlZDoga29Jc1JlcXVpcmVkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZToga29DYW5FZGl0LCBjbGljazogJHBhcmVudC5vbkVkaXRJdGVtQ2xpY2tcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVkaXRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczogY2VsbFR5cGVDaG9pY2VzLCB2YWx1ZToga29DZWxsVHlwZVxcXCIgIHN0eWxlPVxcXCJ3aWR0aDoxMTBweFxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvTmFtZVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMHB4XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyIG5vLXBhZGRpbmdcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6a29IYXNFcnJvciwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5lbnRlck5ld1ZhbHVlJylcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29UaXRsZVxcXCIgc3R5bGU9XFxcIndpZHRoOjEyMHB4XFxcIiAvPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5vbkRlbGV0ZUNsaWNrXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj48L2J1dHRvbj48L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPCEtLSAva28gLS0+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cXFwiM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYnRuLXRvb2xiYXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uQWRkQ2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmFkZE5ldycpXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkNsZWFyQ2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnJlbW92ZUFsbCcpXFxcIlxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbiAgICAgPCEtLSBrbyBpZjogIWtvSXNMaXN0KCkgLS0+XFxyXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJwYWRkaW5nOiA1cHhcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkNhbmNlbEVkaXRJdGVtQ2xpY2tcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0LWFsdFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDoga29FZGl0SXRlbSgpLmtvRWRpdG9yTmFtZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcXCJxdWVzdGlvbmVkaXRvci1jb250ZW50XFxcIiwgZGF0YTogY29sdW1uRWRpdG9yIH0gLS0+XFxyXFxuICAgICAgICA8IS0tIC9rbyAtLT5cXHJcXG4gICAgPCEtLSAva28gLS0+XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1tYXRyaXhkcm9wZG93bmNvbHVtbnMuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItbW9kYWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiFlZGl0b3IuaXNFZGl0YWJsZVxcXCI+XFxyXFxuICAgICAgICA8YSBkYXRhLXRvZ2dsZT1cXFwibW9kYWxcXFwiIGRhdGEtYmluZD1cXFwiYXR0cjogeydkYXRhLXRhcmdldCcgOiBtb2RhbE5hbWVUYXJnZXR9XFxcIj48c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6IGtvVGV4dFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLXRvZ2dsZT1cXFwibW9kYWxcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOiAycHg7XFxcIiBkYXRhLWJpbmQ9XFxcImF0dHI6IHsnZGF0YS10YXJnZXQnIDogbW9kYWxOYW1lVGFyZ2V0fVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVkaXRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6ZWRpdG9yLmlzRWRpdGFibGVcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OnRhYmxlXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiBrb1ZhbHVlXFxcIiBzdHlsZT1cXFwiZGlzcGxheTp0YWJsZS1jZWxsOyB3aWR0aDoxMDAlXFxcIiAvPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgc3R5bGU9XFxcImRpc3BsYXk6dGFibGUtY2VsbDsgcGFkZGluZzogMnB4O1xcXCIgIGRhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCIgZGF0YS1iaW5kPVxcXCJhdHRyOiB7J2RhdGEtdGFyZ2V0JyA6IG1vZGFsTmFtZVRhcmdldH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwiYXR0cjoge2lkIDogbW9kYWxOYW1lfVxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+JnRpbWVzOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmVkaXRvci50aXRsZVxcXCI+PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keSBzdmRfbm90b3Bib3R0b21wYWRkaW5nc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtJyArIGVkaXRvclR5cGUsIGRhdGE6IGVkaXRvciB9IC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogZWRpdG9yLm9uQXBwbHlDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZygncGUuYXBwbHknKVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMHB4XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogZWRpdG9yLm9uQXBwbHlDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZygncGUub2snKVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMHB4XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogZWRpdG9yLm9uUmVzZXRDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZygncGUuY2FuY2VsJylcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDBweFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1tb2RhbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1udW1iZXJcXFwiPlxcclxcbiAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiBrb1ZhbHVlXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgLz5cXHJcXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW51bWJlci5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1yZXN0ZnVsbFxcXCI+XFxyXFxuICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT5cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yY29udGVudC1yZXN0ZnVsbFxcXCI+XFxyXFxuICAgIDxmb3JtPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXJsXFxcIj5Vcmw6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInVybFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1VybFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGF0aFxcXCI+UGF0aDo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwicGF0aFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1BhdGhcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInZhbHVlTmFtZVxcXCI+dmFsdWVOYW1lOjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ2YWx1ZU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29WYWx1ZU5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInRpdGxlTmFtZVxcXCI+dGl0bGVOYW1lOjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ0aXRsZU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29UaXRsZU5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInRpdGxlTmFtZVxcXCI+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiRyb290LmdldExvY1N0cmluZygncGUudGVzdFNlcnZpY2UnKVxcXCI+PC9zcGFuPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6IHF1ZXN0aW9uLmtvVmlzaWJsZUNob2ljZXMsIG9wdGlvbnNUZXh0OiAndGV4dCcsIG9wdGlvbnNWYWx1ZTogJ3ZhbHVlJywgb3B0aW9uc0NhcHRpb246IHF1ZXN0aW9uLm9wdGlvbnNDYXB0aW9uXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1yZXN0ZnVsbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1zdHJpbmdcXFwiPlxcclxcbiAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZToga29WYWx1ZVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIC8+XFxyXFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1zdHJpbmcuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItdGV4dFxcXCI+XFxyXFxuICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT5cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yY29udGVudC10ZXh0XFxcIj5cXHJcXG4gICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29WYWx1ZVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIHJvd3M9XFxcIjEwXFxcIiBhdXRvZm9jdXM9XFxcImF1dG9mb2N1c1xcXCI+PC90ZXh0YXJlYT5cXHJcXG48L3NjcmlwdD5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRleHQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItdGV4dGl0ZW1zXFxcIj5cXHJcXG4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItbW9kYWwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPlxcclxcbjwvc2NyaXB0PlxcclxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LXRleHRpdGVtc1xcXCI+XFxyXFxuPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIj5cXHJcXG4gICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUubmFtZScpXFxcIj48L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnRpdGxlJylcXFwiPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDoga29JdGVtcyAtLT5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb05hbWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyMDBweFxcXCIgLz48L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29UaXRsZVxcXCIgc3R5bGU9XFxcIndpZHRoOjIwMHB4XFxcIiAvPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5vbkRlbGV0ZUNsaWNrXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj48L2J1dHRvbj48L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPCEtLSAva28gLS0+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cXFwiNFxcXCI+PGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogb25BZGRDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZygncGUuYWRkTmV3JylcXFwiLz48L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbjwvZGl2Plxcclxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdGV4dGl0ZW1zLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLXRyaWdnZXJzXFxcIj5cXHJcXG4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItbW9kYWwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPlxcclxcbjwvc2NyaXB0PlxcclxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LXRyaWdnZXJzXFxcIj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206MTBweFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGZvcm0taW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWhhc3BvcHVwPVxcXCJ0cnVlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogYXZhaWxhYmxlVHJpZ2dlcnMgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQub25BZGRDbGljaygkZGF0YSlcXFwiPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDokZGF0YVxcXCI+PC9zcGFuPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvICAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczoga29JdGVtcywgb3B0aW9uc1RleHQ6ICdrb1RleHQnLCB2YWx1ZToga29TZWxlY3RlZFxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYmluZD1cXFwiZW5hYmxlOiBrb1NlbGVjdGVkKCkgIT0gbnVsbCwgY2xpY2s6IG9uRGVsZXRlQ2xpY2tcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1NlbGVjdGVkKCkgPT0gbnVsbFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZToga29RdWVzdGlvbnMoKS5sZW5ndGggPT0gMCwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5ub3F1ZXN0aW9ucycpXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1F1ZXN0aW9ucygpLmxlbmd0aCA+IDAsIHRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUuY3JlYXRldHJpZ2dlcicpXFxcIj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1NlbGVjdGVkKCkgIT0gbnVsbFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwid2l0aDoga29TZWxlY3RlZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206MTBweFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00IGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwICBmb3JtLWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnRyaWdnZXJPbicpXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiRwYXJlbnQua29RdWVzdGlvbnMsIHZhbHVlOiBrb05hbWVcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctNCBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6YXZhaWxhYmxlT3BlcmF0b3JzLCBvcHRpb25zVmFsdWU6ICduYW1lJywgb3B0aW9uc1RleHQ6ICd0ZXh0JywgdmFsdWU6a29PcGVyYXRvclxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00IGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1JlcXVpcmVWYWx1ZSwgdmFsdWU6a29WYWx1ZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8IS0tIGtvIGlmOiBrb1R5cGUoKSA9PSAndmlzaWJsZXRyaWdnZXInIC0tPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy02IGNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLXRyaWdnZXJzaXRlbXMnLCBkYXRhOiBwYWdlcyB9IC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctNiBjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci10cmlnZ2Vyc2l0ZW1zJywgZGF0YTogcXVlc3Rpb25zIH0gLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPCEtLSAva28gLS0+XFxyXFxuICAgICAgICAgICAgPCEtLSBrbyBpZjoga29UeXBlKCkgPT0gJ2NvbXBsZXRldHJpZ2dlcicgLS0+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVxcXCJtYXJnaW46IDEwcHhcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50cmlnZ2VyQ29tcGxldGVUZXh0JylcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcclxcbiAgICAgICAgICAgIDwhLS0ga28gaWY6IGtvVHlwZSgpID09ICdzZXR2YWx1ZXRyaWdnZXInIC0tPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00IGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGZvcm0taW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudHJpZ2dlclNldFRvTmFtZScpXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29zZXRUb05hbWVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00IGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGZvcm0taW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudHJpZ2dlclNldFZhbHVlJylcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb3NldFZhbHVlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00IGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEtYmluZD1cXFwiY2hlY2tlZDoga29pc1ZhcmlhYmxlXFxcIiAvPiA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudHJpZ2dlcklzVmFyaWFibGUnKVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctOCBjb2wtc20tOFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2Plxcclxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdHJpZ2dlcnMuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIG5vLW1hcmdpbnMgbm8tcGFkZGluZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidGV4dDogdGl0bGVcXFwiIHN0eWxlPVxcXCJtYXJnaW4tYm90dG9tOjEwcHhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbXVsdGlwbGU9XFxcIm11bHRpcGxlXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6a29DaG9vc2VuLCB2YWx1ZToga29DaG9vc2VuU2VsZWN0ZWRcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiIHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjp0b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1iaW5kPVxcXCJlbmFibGU6IGtvQ2hvb3NlblNlbGVjdGVkKCkgIT0gbnVsbCwgY2xpY2s6IG9uRGVsZXRlQ2xpY2tcXFwiIGNsYXNzPVxcXCJidG5cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOjVweFxcXCI+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6a29PYmplY3RzLCB2YWx1ZToga29TZWxlY3RlZFxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWJpbmQ9XFxcImVuYWJsZToga29TZWxlY3RlZCgpICE9IG51bGwsIGNsaWNrOiBvbkFkZENsaWNrXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2Plxcclxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtcy5odG1sXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci12YWxpZGF0b3JzXFxcIj5cXHJcXG4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItbW9kYWwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPlxcclxcbjwvc2NyaXB0PlxcclxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LXZhbGlkYXRvcnNcXFwiPlxcclxcbjxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgaW5wdXQtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlIGlucHV0LWdyb3VwLWFkZG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtaGFzcG9wdXA9XFxcInRydWVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudSBpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogYXZhaWxhYmxlVmFsaWRhdG9ycyAtLT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQub25BZGRDbGljaygkZGF0YSlcXFwiPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDokZGF0YVxcXCI+PC9zcGFuPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tIC9rbyAgLS0+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczoga29JdGVtcywgb3B0aW9uc1RleHQ6ICd0ZXh0JywgdmFsdWU6IGtvU2VsZWN0ZWRcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1iaW5kPVxcXCJlbmFibGU6IGtvU2VsZWN0ZWQoKSAhPSBudWxsLCBjbGljazogb25EZWxldGVDbGlja1xcXCIgY2xhc3M9XFxcImJ0blxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwidGVtcGxhdGU6IHsgbmFtZTogJ29iamVjdGVkaXRvcicsIGRhdGE6IHNlbGVjdGVkT2JqZWN0RWRpdG9yIH1cXFwiPjwvZGl2PlxcclxcbjwvZGl2Plxcclxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdmFsaWRhdG9ycy5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJxdWVzdGlvbmVkaXRvci1jb250ZW50XFxcIj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiIGRhdGEtYmluZD1cXFwiZm9yZWFjaDoga29UYWJzXFxcIj5cXHJcXG4gICAgICAgIDxsaSByb2xlPVxcXCJwcmVzZW50YXRpb25cXFwiIGRhdGEtYmluZD1cXFwiY3NzOiB7YWN0aXZlOiAkcGFyZW50LmtvQWN0aXZlVGFiKCkgPT0gJGRhdGEubmFtZX0sIGNsaWNrOiAkcGFyZW50Lm9uVGFiQ2xpY2tcXFwiPjxhPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDokZGF0YS50aXRsZVxcXCI+PC9zcGFuPjwvYT48L2xpPlxcclxcbiAgICA8L3VsPiAgICAgICAgICAgICAgIFxcclxcbiAgICA8IS0tIGtvIGZvcmVhY2g6IGtvVGFicyAtLT5cXHJcXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6JHBhcmVudC5rb0FjdGl2ZVRhYigpID09ICRkYXRhLm5hbWVcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOjVweFxcXCI+XFxyXFxuICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICRkYXRhLmh0bWxUZW1wbGF0ZSwgZGF0YTogJGRhdGEudGVtcGxhdGVPYmplY3QgfSAtLT5cXHJcXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPCEtLSAva28gIC0tPlxcclxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3ItY29udGVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJxdWVzdGlvbmVkaXRvclxcXCI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcInN1cnZleXF1ZXN0aW9uZWRpdG9yd2luZG93XFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcImRhdGEtYmluZD1cXFwid2l0aDprb0VkaXRvclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+JnRpbWVzOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmtvVGl0bGVcXFwiPjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHkgc3ZkX25vdG9wYm90dG9tcGFkZGluZ3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXFwicXVlc3Rpb25lZGl0b3ItY29udGVudFxcXCIsIGRhdGE6ICRkYXRhIH0gLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkFwcGx5Q2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmFwcGx5JylcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDBweFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uT2tDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZygncGUub2snKVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMHB4XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogb25SZXNldENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5jYW5jZWwnKVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMHB4XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3NjcmlwdD5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uZWRpdG9yLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInF1ZXN0aW9uZWRpdG9ydGFiLWdlbmVyYWxcXFwiPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBwcm9wZXJ0aWVzLnJvd3MgLS0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHByb3BlcnRpZXMgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6a29IYXNFcnJvclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZXhjbGFtYXRpb24tc2lnblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+RXJyb3I6PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBkYXRhLWJpbmQ9XFxcInRleHQ6a29FcnJvclRleHRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBpZjogZWRpdFR5cGUgIT0gJ2NoZWNrJyAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1iaW5kPVxcXCJ0ZXh0OnRpdGxlXFxcIj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiBlZGl0VHlwZSA9PSAndGV4dCcgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGtvVmFsdWUsIGRpc2FibGU6IGRpc2FibGVkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiBlZGl0VHlwZSA9PSAndGV4dGFyZWEnIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVxcXCJ0ZXh0XFxcIiByb3dzPVxcXCIyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiBrb1ZhbHVlLCBkaXNhYmxlOiBkaXNhYmxlZFxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBpZjogZWRpdFR5cGUgPT0gJ2NoZWNrJyAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2hlY2tib3gtaW5saW5lXFxcIj48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEtYmluZD1cXFwiY2hlY2tlZDoga29WYWx1ZSwgZGlzYWJsZTogZGlzYWJsZWRcXFwiPjxsYWJlbCBkYXRhLWJpbmQ9XFxcInRleHQ6dGl0bGVcXFwiPjwvbGFiZWw+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiBlZGl0VHlwZSA9PSAnZHJvcGRvd24nIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgIGRhdGEtYmluZD1cXFwidmFsdWU6IGtvVmFsdWUsIG9wdGlvbnM6IGNob2ljZXMsIGRpc2FibGU6IGRpc2FibGVkXFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcclxcbiAgICAgICAgICAgIDwhLS0gL2tvICAtLT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPCEtLSAva28gIC0tPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3NjcmlwdD5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uZWRpdG9ydGFiLWdlbmVyYWwuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwic3VydmV5ZW1iZWRpbmdcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPHNlbGVjdCBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvTGlicmFyeVZlcnNpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImFuZ3VsYXJcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy5hbmd1bGFyJylcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImpxdWVyeVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3LmpxdWVyeScpXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJrbm9ja291dFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3Lmtub2Nrb3V0JylcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcInJlYWN0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcucmVhY3QnKVxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwidnVlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcudnVlJylcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICA8c2VsZWN0IGRhdGEtYmluZD1cXFwidmFsdWU6a29TY3JpcHRVc2luZ1xcXCI+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiYm9vdHN0cmFwXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcuYm9vdHN0cmFwJylcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcInN0YW5kYXJkXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcuc3RhbmRhcmQnKVxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDxzZWxlY3QgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1Nob3dBc1dpbmRvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwicGFnZVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3LnNob3dPblBhZ2UnKVxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwid2luZG93XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcuc2hvd0luV2luZG93JylcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNoZWNrYm94LWlubGluZVxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmtvSGFzSWRzXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEtYmluZD1cXFwiY2hlY2tlZDprb0xvYWRTdXJ2ZXlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3LmxvYWRGcm9tU2VydmVyJylcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcudGl0bGVTY3JpcHQnKVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZTpoYXNBY2VFZGl0b3JcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcInN1cnZleUVtYmVkaW5nSGVhZFxcXCIgc3R5bGU9XFxcImhlaWdodDo3MHB4O3dpZHRoOjEwMCVcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiFoYXNBY2VFZGl0b3IsIHRleHQ6IGtvSGVhZFRleHRcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6NzBweDt3aWR0aDoxMDAlXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZToga29WaXNpYmxlSHRtbFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIiAgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3LnRpdGxlSHRtbCcpXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmhhc0FjZUVkaXRvclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5RW1iZWRpbmdCb2R5XFxcIiBzdHlsZT1cXFwiaGVpZ2h0OjMwcHg7d2lkdGg6MTAwJVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDx0ZXh0YXJlYSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IWhhc0FjZUVkaXRvciwgdGV4dDoga29Cb2R5VGV4dFxcXCIgc3R5bGU9XFxcImhlaWdodDozMHB4O3dpZHRoOjEwMCVcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIiAgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3LnRpdGxlSmF2YVNjcmlwdCcpXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmhhc0FjZUVkaXRvclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5RW1iZWRpbmdKYXZhXFxcIiBzdHlsZT1cXFwiaGVpZ2h0OjMwMHB4O3dpZHRoOjEwMCVcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiFoYXNBY2VFZGl0b3IsIHRleHQ6IGtvSmF2YVRleHRcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6MzAwcHg7d2lkdGg6MTAwJVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3N1cnZleWVtYmVkaW5nLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGRhdGEtYmluZD1cXFwiZXZlbnQ6e1xcbiAgICAgICAgICAgZHJhZ2VudGVyOmZ1bmN0aW9uKGVsLCBlKXsgZHJhZ0VudGVyKGUpO30sXFxuICAgICAgICAgICBkcmFnbGVhdmU6ZnVuY3Rpb24oZWwsIGUpeyBkcmFnTGVhdmUoZSk7fSxcXG4gICAgICAgICAgIGRyYWdvdmVyOmZ1bmN0aW9uKGVsLCBlKXsgcmV0dXJuIGZhbHNlO30sXFxuICAgICAgICAgICBkcm9wOmZ1bmN0aW9uKGVsLCBlKXsgZHJhZ0Ryb3AoZSk7fX1cXG4gICAgIFxcXCI+XFxuICAgIDxoNCBkYXRhLWJpbmQ9XFxcInZpc2libGU6ICh0aXRsZS5sZW5ndGggPiAwKSAmJiBkYXRhLnNob3dQYWdlVGl0bGVzLCB0ZXh0OiBrb05vKCkgKyBwcm9jZXNzZWRUaXRsZSwgY3NzOiAkcm9vdC5jc3MucGFnZVRpdGxlXFxcIj48L2g0PlxcbiAgICA8IS0tIGtvIGZvcmVhY2g6IHsgZGF0YTogcm93cywgYXM6ICdyb3cnfSAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwic3ZkX3F1ZXN0aW9uX2NvbnRhaW5lclxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiByb3cua29WaXNpYmxlLCBjc3M6ICRyb290LmNzcy5yb3dcXFwiPlxcbiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiB7IGRhdGE6IHJvdy5xdWVzdGlvbnMsIGFzOiAncXVlc3Rpb24nICwgYWZ0ZXJSZW5kZXI6IHJvdy5rb0FmdGVyUmVuZGVyIH0gLS0+XFxuICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHF1ZXN0aW9uLmtvSXNEcmFnZ2luZ1xcXCI+XFxuICAgICAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgaWY6ICRyb290LmtvRHJhZ2dpbmdTb3VyY2UoKSwgbmFtZTogJ3N1cnZleS1xdWVzdGlvbicsIGRhdGE6ICRyb290LmtvRHJhZ2dpbmdTb3VyY2UoKSwgYXM6ICdxdWVzdGlvbicsIHRlbXBsYXRlT3B0aW9uczogeyBpc0RyYWdnaW5nOiB0cnVlIH0gfSAtLT5cXG4gICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAnc3VydmV5LXF1ZXN0aW9uJywgZGF0YTogcXVlc3Rpb24sIHRlbXBsYXRlT3B0aW9uczogeyBpc0RyYWdnaW5nOiBmYWxzZSB9IH0gLS0+XFxuICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWxsXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6JHJvb3QuaXNEZXNpZ25Nb2RlICYmIHF1ZXN0aW9ucy5sZW5ndGggPT0gMFxcXCI+XFxuICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInZpc2libGU6ICFrb0RyYWdnaW5nQm90dG9tKCksIHRleHQ6JHJvb3QuZ2V0RWRpdG9yTG9jU3RyaW5nKCdzdXJ2ZXkuZHJvcFF1ZXN0aW9uJylcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb0RyYWdnaW5nQm90dG9tXFxcIj5cXG4gICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IGlmOiAkcm9vdC5rb0RyYWdnaW5nU291cmNlKCksIG5hbWU6ICdzdXJ2ZXktcXVlc3Rpb24nLCBkYXRhOiAkcm9vdC5rb0RyYWdnaW5nU291cmNlKCksIGFzOiAncXVlc3Rpb24nLCB0ZW1wbGF0ZU9wdGlvbnM6IHsgaXNEcmFnZ2luZzogdHJ1ZSB9IH0gLS0+XFxuICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBxdWVzdGlvbnMubGVuZ3RoID4gMCAmJiBrb0RyYWdnaW5nQm90dG9tKClcXFwiPlxcbiAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBpZjogJHJvb3Qua29EcmFnZ2luZ1NvdXJjZSgpLCBuYW1lOiAnc3VydmV5LXF1ZXN0aW9uJywgZGF0YTogJHJvb3Qua29EcmFnZ2luZ1NvdXJjZSgpLCBhczogJ3F1ZXN0aW9uJywgdGVtcGxhdGVPcHRpb25zOiB7IGlzRHJhZ2dpbmc6IHRydWUgfSB9IC0tPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9odG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSEuL34vdmFsLWxvYWRlciEuL3NyYy90ZW1wbGF0ZXMuc3VydmV5L3RlbXBsYXRlX3BhZ2UuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInN2ZF9xdWVzdGlvblxcXCIgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOnRvcFxcXCIgZGF0YS1iaW5kPVxcXCJzdHlsZToge2Rpc3BsYXk6IHF1ZXN0aW9uLmtvVmlzaWJsZSgpfHwgJHJvb3QuaXNEZXNpZ25Nb2RlID8gJ2lubGluZS1ibG9jayc6ICdub25lJywgbWFyZ2luTGVmdDogcXVlc3Rpb24ua29NYXJnaW5MZWZ0LCBwYWRkaW5nUmlnaHQ6IHF1ZXN0aW9uLmtvUGFkZGluZ1JpZ2h0LCB3aWR0aDogcXVlc3Rpb24ua29SZW5kZXJXaWR0aCB9LFxcbiAgICAgYXR0ciA6IHtpZDogaWQsIGRyYWdnYWJsZTogJHJvb3QuaXNEZXNpZ25Nb2RlfSwgY2xpY2s6ICRyb290LmlzRGVzaWduTW9kZSA/IGtvT25DbGljazogbnVsbCwgXFxuICAgICAgICAgZXZlbnQ6e1xcbiAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oZWwsIGUpIHsgaWYoZS53aXRjaCA9PSA0NikgJHJvb3QuZGVsZXRlQ3VycmVudE9iamVjdENsaWNrKCk7IHJldHVybiB0cnVlOyB9LFxcbiAgICAgICAgICAgZHJhZ3N0YXJ0OmZ1bmN0aW9uKGVsLCBlKXsgZHJhZ1N0YXJ0KGUpOyByZXR1cm4gdHJ1ZTsgfSxcXG4gICAgICAgICAgIGRyYWdvdmVyOmZ1bmN0aW9uKGVsLCBlKXsgaWYoIXF1ZXN0aW9uLmlzRHJhZ2dpbmcpIGRyYWdPdmVyKGUpO30sXFxuICAgICAgICAgICBkcmFnZW5kOmZ1bmN0aW9uKGVsLCBlKXsgZHJhZ0VuZChlKTt9LFxcbiAgICAgICAgICAgZHJvcDpmdW5jdGlvbihlbCwgZSl7IGRyYWdEcm9wKGUpO31cXG4gICAgICAgICB9LCBjc3M6e3N2ZF9xX2Rlc2lnbl9ib3JkZXI6ICRyb290LmlzRGVzaWduTW9kZSwgc3ZkX3Ffc2VsZWN0ZWQgOiBrb0lzU2VsZWN0ZWQsICd3ZWxsIHdlbGwtc20nOiAkcm9vdC5pc0Rlc2lnbk1vZGV9XFxcIj5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcImNzczp7c3ZkX3FfZGVzaWduOiAkcm9vdC5pc0Rlc2lnbk1vZGV9LCBzdHlsZTp7b3BhY2l0eTogcXVlc3Rpb24ua29Jc0RyYWdnaW5nU291cmNlKCkgPyAwLjQgOiAxfVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvRXJyb3JzKCkubGVuZ3RoID4gMCwgZm9yZWFjaDoga29FcnJvcnNcXFwiPlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWV4Y2xhbWF0aW9uLXNpZ25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDokZGF0YS5nZXRUZXh0KClcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPCEtLSBrbyBpZjogcXVlc3Rpb24uaGFzVGl0bGUgLS0+XFxuICAgICAgICA8aDUgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiAkcm9vdC5xdWVzdGlvblRpdGxlTG9jYXRpb24gPT0gJ3RvcCcsIHRleHQ6IHF1ZXN0aW9uLmtvVGl0bGUoKSwgY3NzOiAkcm9vdC5jc3MucXVlc3Rpb24udGl0bGVcXFwiPjwvaDU+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3N1cnZleS1xdWVzdGlvbi1lcnJvcnMnLCBkYXRhOiBxdWVzdGlvbiB9IC0tPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IHF1ZXN0aW9uLmtvVGVtcGxhdGVOYW1lKCksIGRhdGE6IHF1ZXN0aW9uLCBhZnRlclJlbmRlcjogcXVlc3Rpb24ua29RdWVzdGlvbkFmdGVyUmVuZGVyIH0gLS0+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBxdWVzdGlvbi5oYXNDb21tZW50XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cXFwidGV4dDpxdWVzdGlvbi5jb21tZW50VGV4dFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdzdXJ2ZXktY29tbWVudCcsIGRhdGE6IHsncXVlc3Rpb24nOiBxdWVzdGlvbiwgJ3Zpc2libGUnOiB0cnVlIH0gfVxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwhLS0ga28gaWY6IHF1ZXN0aW9uLmhhc1RpdGxlIC0tPlxcbiAgICAgICAgPGg1IGRhdGEtYmluZD1cXFwidmlzaWJsZTogJHJvb3QucXVlc3Rpb25UaXRsZUxvY2F0aW9uID09ICdib3R0b20nLCB0ZXh0OiBxdWVzdGlvbi5rb1RpdGxlKCksIGNzczogJHJvb3QuY3NzLnF1ZXN0aW9uLnRpdGxlXFxcIj48L2g1PlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdmRfcXVlc3Rpb25fbWVudVxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb0lzU2VsZWN0ZWRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIiByb2xlPVxcXCJncm91cFxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgIGJ0bi14c1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHJvb3QuZWRpdFF1ZXN0aW9uQ2xpY2tcXFwiPjxzcGFuPkVkaXQ8L3NwYW4+PC9idXR0b24+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgIGJ0bi14cyBkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1vcHRpb24taG9yaXpvbnRhbFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxuICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4teHNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRyb290LmNvcHlRdWVzdGlvbkNsaWNrLCB0ZXh0OiRyb290LmdldEVkaXRvckxvY1N0cmluZygnc3VydmV5LmFkZFRvVG9vbGJveCcpXFxcIj48L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHJvb3QuZmFzdENvcHlRdWVzdGlvbkNsaWNrLCB0ZXh0OiRyb290LmdldEVkaXRvckxvY1N0cmluZygnc3VydmV5LmNvcHknKVxcXCI+PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4teHNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRyb290LmRlbGV0ZUN1cnJlbnRPYmplY3RDbGljaywgdGV4dDokcm9vdC5nZXRFZGl0b3JMb2NTdHJpbmcoJ3N1cnZleS5kZWxldGVRdWVzdGlvbicpXFxcIj48L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9odG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSEuL34vdmFsLWxvYWRlciEuL3NyYy90ZW1wbGF0ZXMuc3VydmV5L3RlbXBsYXRlX3F1ZXN0aW9uLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiArIHJlcXVpcmUoJy4vaW5kZXguaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vanNvbmVkaXRvci5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9vYmplY3RlZGl0b3IuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vb2JqZWN0dmVyYnMuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcGFnZWVkaXRvci5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9zdXJ2ZXllbWJlZGluZy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3IuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uZWRpdG9yLWNvbnRlbnQuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uZWRpdG9ydGFiLWdlbmVyYWwuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWJvb2xlYW4uaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWRyb3Bkb3duLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1odG1sLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1leHByZXNzaW9uLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1pdGVtdmFsdWVzLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1tYXRyaXhkcm9wZG93bmNvbHVtbnMuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW1vZGFsLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1udW1iZXIuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXJlc3RmdWxsLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1zdHJpbmcuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRleHQuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRleHRpdGVtcy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdHJpZ2dlcnMuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRyaWdnZXJzaXRlbXMuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXZhbGlkYXRvcnMuaHRtbCcpICsgXCJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHRtbC1sb2FkZXI/aW50ZXJwb2xhdGUhLi9+L3ZhbC1sb2FkZXIhLi9zcmMvdGVtcGxhdGVzL2VudHJ5Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5pbXBvcnQge1N1cnZleVRleHRXb3JrZXJ9IGZyb20gXCIuL3RleHRXb3JrZXJcIjtcclxuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlKU09ORWRpdG9yIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgdXBkYXRlVGV4dFRpbWVvdXQ6IG51bWJlciA9IDEwMDA7XHJcblxyXG4gICAgcHJpdmF0ZSBpc1Byb2Nlc3NpbmdJbW1lZGlhdGVseTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBhY2VFZGl0b3I6IEFjZUFqYXguRWRpdG9yO1xyXG4gICAgcHJpdmF0ZSB0ZXh0V29ya2VyOiBTdXJ2ZXlUZXh0V29ya2VyO1xyXG4gICAga29UZXh0OiBhbnk7XHJcbiAgICBrb0Vycm9yczogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMua29UZXh0ID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcclxuICAgICAgICB0aGlzLmtvRXJyb3JzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMua29UZXh0LnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgc2VsZi5vbkpzb25FZGl0b3JDaGFuZ2VkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzQWNlRWRpdG9yKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5hY2VFZGl0b3IgPSBhY2UuZWRpdChcInN1cnZleWpzSlNPTkVkaXRvclwiKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hY2VFZGl0b3Iuc2V0VGhlbWUoXCJhY2UvdGhlbWUvbW9ub2thaVwiKTtcclxuICAgICAgICB0aGlzLmFjZUVkaXRvci5zZXNzaW9uLnNldE1vZGUoXCJhY2UvbW9kZS9qc29uXCIpO1xyXG4gICAgICAgIHRoaXMuYWNlRWRpdG9yLnNldFNob3dQcmludE1hcmdpbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5hY2VFZGl0b3IuZ2V0U2Vzc2lvbigpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5vbkpzb25FZGl0b3JDaGFuZ2VkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hY2VFZGl0b3IuZ2V0U2Vzc2lvbigpLnNldFVzZVdvcmtlcih0cnVlKTtcclxuICAgICAgICBTdXJ2ZXlUZXh0V29ya2VyLm5ld0xpbmVDaGFyID0gdGhpcy5hY2VFZGl0b3Iuc2Vzc2lvbi5kb2MuZ2V0TmV3TGluZUNoYXJhY3RlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBoYXNBY2VFZGl0b3IoKTogYm9vbGVhbiB7IHJldHVybiB0eXBlb2YgYWNlICE9PSBcInVuZGVmaW5lZFwiOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzQWNlRWRpdG9yKSByZXR1cm4gdGhpcy5rb1RleHQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY2VFZGl0b3IuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pc1Byb2Nlc3NpbmdJbW1lZGlhdGVseSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5rb1RleHQodmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmFjZUVkaXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLmFjZUVkaXRvci5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWNlRWRpdG9yLnJlbmRlcmVyLnVwZGF0ZUZ1bGwodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvY2Vzc0pzb24odmFsdWUpO1xyXG4gICAgICAgIHRoaXMuaXNQcm9jZXNzaW5nSW1tZWRpYXRlbHkgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB2YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5hY2VFZGl0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5hY2VFZGl0b3IuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGlzSnNvbkNvcnJlY3QoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy50ZXh0V29ya2VyID0gbmV3IFN1cnZleVRleHRXb3JrZXIodGhpcy50ZXh0KTtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0V29ya2VyLmlzSnNvbkNvcnJlY3Q7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMudGV4dFdvcmtlci5zdXJ2ZXk7IH1cclxuICAgIHByaXZhdGUgdGltZW91dElkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgb25Kc29uRWRpdG9yQ2hhbmdlZCgpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJZCA+IC0xKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzUHJvY2Vzc2luZ0ltbWVkaWF0ZWx5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi50aW1lb3V0SWQgPSAtMTtcclxuICAgICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0pzb24oc2VsZi50ZXh0KTtcclxuICAgICAgICAgICAgfSwgU3VydmV5SlNPTkVkaXRvci51cGRhdGVUZXh0VGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzSnNvbih0ZXh0OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHRoaXMudGV4dFdvcmtlciA9IG5ldyBTdXJ2ZXlUZXh0V29ya2VyKHRleHQpO1xyXG4gICAgICAgIGlmICh0aGlzLmFjZUVkaXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLmFjZUVkaXRvci5nZXRTZXNzaW9uKCkuc2V0QW5ub3RhdGlvbnModGhpcy5jcmVhdGVBbm5vdGF0aW9ucyh0ZXh0LCB0aGlzLnRleHRXb3JrZXIuZXJyb3JzKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5rb0Vycm9ycyh0aGlzLnRleHRXb3JrZXIuZXJyb3JzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNyZWF0ZUFubm90YXRpb25zKHRleHQ6IHN0cmluZywgZXJyb3JzOiBhbnlbXSk6IEFjZUFqYXguQW5ub3RhdGlvbltdIHtcclxuICAgICAgICB2YXIgYW5ub3RhdGlvbnMgPSBuZXcgQXJyYXk8QWNlQWpheC5Bbm5vdGF0aW9uPigpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXJyb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGVycm9yc1tpXTtcclxuICAgICAgICAgICAgdmFyIGFubm90YXRpb246IEFjZUFqYXguQW5ub3RhdGlvbiA9IHsgcm93OiBlcnJvci5wb3NpdGlvbi5zdGFydC5yb3csIGNvbHVtbjogZXJyb3IucG9zaXRpb24uc3RhcnQuY29sdW1uLCB0ZXh0OiBlcnJvci50ZXh0LCB0eXBlOiBcImVycm9yXCIgfTtcclxuICAgICAgICAgICAgYW5ub3RhdGlvbnMucHVzaChhbm5vdGF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFubm90YXRpb25zO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleUpTT05FZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHtTdXJ2ZXlIZWxwZXIsIE9ialR5cGV9IGZyb20gXCIuL3N1cnZleUhlbHBlclwiO1xyXG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleU9iamVjdEl0ZW0ge1xyXG4gICAgcHVibGljIHZhbHVlOiBTdXJ2ZXkuQmFzZTtcclxuICAgIHB1YmxpYyB0ZXh0OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlPYmplY3RzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW50ZW5kOiBzdHJpbmcgPSBcIi4uLlwiO1xyXG4gICAgc3VydmV5VmFsdWU6IFN1cnZleS5TdXJ2ZXk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGtvT2JqZWN0czogYW55LCBwdWJsaWMga29TZWxlY3RlZDogYW55KSB7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgc3VydmV5KHZhbHVlOiBTdXJ2ZXkuU3VydmV5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5ID09IHZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMucmVidWlsZCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZFBhZ2UocGFnZTogU3VydmV5LlBhZ2UpIHtcclxuICAgICAgICB2YXIgcGFnZUl0ZW0gPSB0aGlzLmNyZWF0ZVBhZ2UocGFnZSk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdXJ2ZXkucGFnZXMuaW5kZXhPZihwYWdlKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHRoaXMuc3VydmV5LnBhZ2VzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgocHJldlBhZ2UpICsgMTtcclxuICAgICAgICAgICAgaW5kZXggKz0gcHJldlBhZ2UucXVlc3Rpb25zLmxlbmd0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbmRleCA9IDE7IC8vMCAtIFN1cnZleVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZEl0ZW0ocGFnZUl0ZW0sIGluZGV4KTtcclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZS5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZVF1ZXN0aW9uKHBhZ2UucXVlc3Rpb25zW2ldKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGl0ZW0sIGluZGV4ICsgaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua29TZWxlY3RlZChwYWdlSXRlbSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkUXVlc3Rpb24ocGFnZTogU3VydmV5LlBhZ2UsIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgocGFnZSk7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBxdWVzdGlvbkluZGV4ID0gcGFnZS5xdWVzdGlvbnMuaW5kZXhPZihxdWVzdGlvbikgKyAxO1xyXG4gICAgICAgIGluZGV4ICs9IHF1ZXN0aW9uSW5kZXg7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uKTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oaXRlbSwgaW5kZXgpO1xyXG4gICAgICAgIHRoaXMua29TZWxlY3RlZChpdGVtKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZWxlY3RPYmplY3Qob2JqOiBTdXJ2ZXkuQmFzZSkge1xyXG4gICAgICAgIHZhciBvYmpzID0gdGhpcy5rb09iamVjdHMoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG9ianNbaV0udmFsdWUgPT0gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtvU2VsZWN0ZWQob2Jqc1tpXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlT2JqZWN0KG9iajogU3VydmV5LkJhc2UpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChvYmopO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcclxuICAgICAgICB2YXIgY291bnRUb1JlbW92ZSA9IDE7XHJcbiAgICAgICAgaWYgKFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaikgPT0gT2JqVHlwZS5QYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBwYWdlOiBTdXJ2ZXkuUGFnZSA9IDxTdXJ2ZXkuUGFnZT5vYmo7XHJcbiAgICAgICAgICAgIGNvdW50VG9SZW1vdmUgKz0gcGFnZS5xdWVzdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtvT2JqZWN0cy5zcGxpY2UoaW5kZXgsIGNvdW50VG9SZW1vdmUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5hbWVDaGFuZ2VkKG9iajogU3VydmV5LkJhc2UpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChvYmopO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLmtvT2JqZWN0cygpW2luZGV4XS50ZXh0KHRoaXMuZ2V0VGV4dChvYmopKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZWxlY3ROZXh0UXVlc3Rpb24oaXNVcDogYm9vbGVhbikge1xyXG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuZ2V0U2VsZWN0ZWRRdWVzdGlvbigpO1xyXG4gICAgICAgIHZhciBpdGVtSW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChxdWVzdGlvbik7XHJcbiAgICAgICAgaWYgKGl0ZW1JbmRleCA8IDApIHJldHVybiBxdWVzdGlvbjtcclxuICAgICAgICB2YXIgb2JqcyA9IHRoaXMua29PYmplY3RzKCk7XHJcbiAgICAgICAgdmFyIG5ld0l0ZW1JbmRleCA9IGl0ZW1JbmRleCArIChpc1VwID8gLTEgOiAxKTtcclxuICAgICAgICBpZiAobmV3SXRlbUluZGV4IDwgb2Jqcy5sZW5ndGggJiYgU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2Jqc1tuZXdJdGVtSW5kZXhdLnZhbHVlKSA9PSBPYmpUeXBlLlF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgIGl0ZW1JbmRleCA9IG5ld0l0ZW1JbmRleDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdJdGVtSW5kZXggPSBpdGVtSW5kZXg7XHJcbiAgICAgICAgICAgIHdoaWxlIChuZXdJdGVtSW5kZXggPCBvYmpzLmxlbmd0aCAmJiBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmpzW25ld0l0ZW1JbmRleF0udmFsdWUpID09IE9ialR5cGUuUXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1JbmRleCA9IG5ld0l0ZW1JbmRleDtcclxuICAgICAgICAgICAgICAgIG5ld0l0ZW1JbmRleCArPSAoaXNVcCA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKG9ianNbaXRlbUluZGV4XSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFNlbGVjdGVkUXVlc3Rpb24oKTogU3VydmV5LlF1ZXN0aW9uQmFzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtvU2VsZWN0ZWQoKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMua29TZWxlY3RlZCgpLnZhbHVlO1xyXG4gICAgICAgIGlmICghb2JqKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKSA9PSBPYmpUeXBlLlF1ZXN0aW9uID8gPFN1cnZleS5RdWVzdGlvbkJhc2U+KG9iaikgOiBudWxsO1xyXG5cclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRkSXRlbShpdGVtOiBTdXJ2ZXlPYmplY3RJdGVtLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gdGhpcy5rb09iamVjdHMoKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5rb09iamVjdHMucHVzaChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmtvT2JqZWN0cy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVidWlsZCgpIHtcclxuICAgICAgICB2YXIgb2JqcyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnN1cnZleSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMua29PYmplY3RzKG9ianMpO1xyXG4gICAgICAgICAgICB0aGlzLmtvU2VsZWN0ZWQobnVsbCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2Jqcy5wdXNoKHRoaXMuY3JlYXRlSXRlbSh0aGlzLnN1cnZleSwgXCJTdXJ2ZXlcIikpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXkucGFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhZ2UgPSA8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkucGFnZXNbaV07XHJcbiAgICAgICAgICAgIG9ianMucHVzaCh0aGlzLmNyZWF0ZVBhZ2UocGFnZSkpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhZ2UucXVlc3Rpb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpzLnB1c2godGhpcy5jcmVhdGVRdWVzdGlvbihwYWdlLnF1ZXN0aW9uc1tqXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua29PYmplY3RzKG9ianMpO1xyXG4gICAgICAgIHRoaXMua29TZWxlY3RlZCh0aGlzLnN1cnZleSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNyZWF0ZVBhZ2UocGFnZTogU3VydmV5LlBhZ2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJdGVtKHBhZ2UsIHRoaXMuZ2V0VGV4dChwYWdlKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSXRlbShxdWVzdGlvbiwgdGhpcy5nZXRUZXh0KHF1ZXN0aW9uKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNyZWF0ZUl0ZW0odmFsdWU6IFN1cnZleS5CYXNlLCB0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgaXRlbSA9IG5ldyBTdXJ2ZXlPYmplY3RJdGVtKCk7XHJcbiAgICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGl0ZW0udGV4dCA9IGtvLm9ic2VydmFibGUodGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEl0ZW1JbmRleCh2YWx1ZTogU3VydmV5LkJhc2UpOiBudW1iZXIge1xyXG4gICAgICAgIHZhciBvYmpzID0gdGhpcy5rb09iamVjdHMoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG9ianNbaV0udmFsdWUgPT0gdmFsdWUpIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFRleHQob2JqOiBTdXJ2ZXkuQmFzZSk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGludGVuZCA9IFN1cnZleU9iamVjdHMuaW50ZW5kO1xyXG4gICAgICAgIGlmIChTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmopICE9IE9ialR5cGUuUGFnZSkge1xyXG4gICAgICAgICAgICBpbnRlbmQgKz0gU3VydmV5T2JqZWN0cy5pbnRlbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnRlbmQgKyBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0TmFtZShvYmopO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleU9iamVjdHMudHMiLCIvLyBzdHlsZXNcclxuaW1wb3J0IFwiLi4vbWFpbi5zY3NzXCI7XHJcblxyXG5leHBvcnQge0RyYWdEcm9wSGVscGVyfSBmcm9tIFwiLi4vZHJhZ2Ryb3BoZWxwZXJcIjtcclxuZXhwb3J0IHtcclxuICAgIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSwgU3VydmV5U3RyaW5nUHJvcGVydHlFZGl0b3IsXHJcbiAgICBTdXJ2ZXlEcm9wZG93blByb3BlcnR5RWRpdG9yLCBTdXJ2ZXlCb29sZWFuUHJvcGVydHlFZGl0b3IsIFN1cnZleU51bWJlclByb3BlcnR5RWRpdG9yXHJcbn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcclxuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eVRleHRJdGVtc0VkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRleHRJdGVtc0VkaXRvclwiO1xyXG5leHBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlJdGVtc0VkaXRvclwiO1xyXG5leHBvcnQge1N1cnZleVByb3BlcnR5SXRlbVZhbHVlc0VkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3JcIjtcclxuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eURyb3Bkb3duQ29sdW1uc0VkaXRvciwgU3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtfVxyXG4gICAgZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0VkaXRvclwiO1xyXG5leHBvcnQge1N1cnZleVByb3BlcnR5TW9kYWxFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNb2RhbEVkaXRvclwiO1xyXG5leHBvcnQge1N1cnZleVByb3BlcnR5UmVzdWx0ZnVsbEVkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVJlc3RmdWxsRWRpdG9yXCI7XHJcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlUcmlnZ2Vyc0VkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRyaWdnZXJzRWRpdG9yXCI7XHJcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VmFsaWRhdG9yc0VkaXRvclwiO1xyXG5cclxuZXhwb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcclxuXHJcbmV4cG9ydCB7U3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydGllcywgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUm93LCBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0eX0gZnJvbSBcIi4uL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzXCI7XHJcbmV4cG9ydCB7U3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9ufSBmcm9tIFwiLi4vcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvblwiO1xyXG5leHBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yU2hvd1dpbmRvdywgU3VydmV5UXVlc3Rpb25FZGl0b3IsIFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiR2VuZXJhbCwgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJQcm9wZXJ0eX0gZnJvbSBcIi4uL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvclwiO1xyXG5cclxuZXhwb3J0IHtRdWVzdGlvblRvb2xib3h9IGZyb20gXCIuLi9xdWVzdGlvblRvb2xib3hcIjtcclxuZXhwb3J0IHtTdXJ2ZXlPYmplY3RQcm9wZXJ0eX0gZnJvbSBcIi4uL29iamVjdFByb3BlcnR5XCI7XHJcbmV4cG9ydCB7U3VydmV5T2JqZWN0RWRpdG9yfSBmcm9tIFwiLi4vb2JqZWN0RWRpdG9yXCI7XHJcbmV4cG9ydCB7U3VydmV5UGFnZXNFZGl0b3J9IGZyb20gXCIuLi9wYWdlc0VkaXRvclwiO1xyXG5leHBvcnQge1N1cnZleVRleHRXb3JrZXJ9IGZyb20gXCIuLi90ZXh0V29ya2VyXCI7XHJcbmV4cG9ydCB7T2JqVHlwZSwgU3VydmV5SGVscGVyfSBmcm9tIFwiLi4vc3VydmV5SGVscGVyXCI7XHJcbmV4cG9ydCB7U3VydmV5RW1iZWRpbmdXaW5kb3d9IGZyb20gXCIuLi9zdXJ2ZXlFbWJlZGluZ1dpbmRvd1wiO1xyXG5leHBvcnQge1N1cnZleVZlcmJzLCBTdXJ2ZXlWZXJiSXRlbSwgU3VydmV5VmVyYkNoYW5nZVR5cGVJdGVtLCBTdXJ2ZXlWZXJiQ2hhbmdlUGFnZUl0ZW19IGZyb20gXCIuLi9vYmplY3RWZXJic1wiO1xyXG5leHBvcnQge1N1cnZleVVuZG9SZWRvLCBVbmRvUmVkb0l0ZW19IGZyb20gXCIuLi91bmRvcmVkb1wiO1xyXG5leHBvcnQge1N1cnZleUVkaXRvcn0gZnJvbSBcIi4uL2VkaXRvclwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyaWVzL2luZGV4LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==