(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("inputmask"), require("nouislider"), require("signature_pad"), require("sortablejs"));
	else if(typeof define === 'function' && define.amd)
		define("surveyjs-widgets", ["jquery", "inputmask", "nouislider", "signature_pad", "sortablejs"], factory);
	else if(typeof exports === 'object')
		exports["surveyjs-widgets"] = factory(require("jquery"), require("inputmask"), require("nouislider"), require("signature_pad"), require("sortablejs"));
	else
		root["surveyjs-widgets"] = factory(root["jQuery"], root["Inputmask"], root["noUiSlider"], root["SignaturePad"], root["Sortable"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_14__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey) {
    var widget = {
        className: "iradio_square-blue",
        name: "icheck",
        widgetIsLoaded: function() { return typeof $ == 'function' && !!$.fn.iCheck; },
        isFit : function(question) {  
            var t = question.getType(); return t === 'radiogroup' || t === 'checkbox' || t === 'matrix'; 
        },
        isDefaultRender: true,
        afterRender: function(question, el) {
            var rootWidget = this;
            var $el = $(el);
            $el.find('input').data({"iCheck": undefined});
            
            $el.find('input').iCheck({
            checkboxClass: rootWidget.className,
            radioClass: rootWidget.className
            });
            var select = function() {
                if(question.getType() != "matrix") {
                    $el.find("input[value=" + question.value + "]").iCheck('check');
                } else {
                    question.generatedVisibleRows.forEach(function(row, index, rows) {
                        if (row.value) {
                        $(el).find("input[name='" + row.fullName  + "'][value=" + row.value + "]").iCheck('check');
                        }
                    });                
                }
            }
            $el.find('input').on('ifChecked', function(event) {
                if(question.getType() != "matrix") {
                    question.value = event.target.value;
                } else {
                    question.generatedVisibleRows.forEach(function(row, index, rows) {
                        if (row.fullName === event.target.name) {
                        row.value = event.target.value
                        }
                    });
                }
            });
            question.valueChangedCallback = select;
            select();
        },
        willUnmount: function(question, el) {
            var $el = $(el);
            $el.find('input').iCheck('destroy');
        } 
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "type");
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);


function init(Survey) {
    var widget = {
        activatedBy: "property",
        name: "select2",
        htmlTemplate: "<select style='width: 100%;'></select>",
        widgetIsLoaded: function() { return typeof __WEBPACK_IMPORTED_MODULE_0_jquery___default.a == 'function' && !!__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn.select2; },
        isFit : function(question) {
            if(widget.activatedBy == "property") return question["renderAs"] === 'select2' && question.getType() === 'dropdown'; 
            if(widget.activatedBy == "type") return  typeof Select2 !== undefined && question.getType() === 'dropdown'; 
            if(widget.activatedBy == "customtype") return question.getType() === 'select2';
            return false;
        },
        activatedByChanged: function(activatedBy) {
            if(!this.widgetIsLoaded()) return;
            widget.activatedBy = activatedBy;
            Survey.JsonObject.metaData.removeProperty("dropdown", "renderAs");
            if(activatedBy == "property") {
                Survey.JsonObject.metaData.addProperty("dropdown", {name: "renderAs", default: "standard", choices: ["standard", "select2"]});
            }
            if(activatedBy == "customtype") {
                Survey.JsonObject.metaData.addClass("select2", [], null, "dropdown");
            }
        },
        afterRender: function(question, el) {
            var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).is("select") ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el) : __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).find("select");
            var othersEl = document.createElement("input");
            othersEl.type = "text";
            othersEl.style.marginTop = "3px";
            othersEl.style.display = "none";
            othersEl.style.width = "100%";
            $el.parent().get(0).appendChild(othersEl);
            var widget = $el.select2({
                theme: "classic"
            });
            var updateValueHandler = function() {
                $el.val(question.value).trigger("change");
                othersEl.style.display = !question.isOtherSelected ? "none": "";
            };
            var updateCommentHandler = function() {
                othersEl.value = question.comment ? question.comment : "";
            }
            var othersElChanged = function() {
                question.comment = othersEl.value;
            }
            var updateChoices = function() {
                $el.select2({data: question.visibleChoices.map(function(choice) { return { id: choice.value, text: choice.text }; })});
                updateValueHandler();
                updateCommentHandler();
            }
            question.choicesChangedCallback = updateChoices;
            updateChoices();
            $el.on('select2:select', function (e) {
                question.value = e.target.value;
            });
            othersEl.onchange = othersElChanged;
            question.valueChangedCallback = updateValueHandler;
            question.commentChangedCallback = updateCommentHandler;
            updateValueHandler();
            updateCommentHandler();
        },
        willUnmount: function(question, el) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).find("select").off('select2:select').select2("destroy");
        }
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget);
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey) {
    var widget = {
        name: "imagepicker",
        title: "Image picker",
        iconName: "icon-imagepicker",
        widgetIsLoaded: function() { return typeof $ == 'function' && !!$.fn.imagepicker; },
        isFit : function(question) { return question.getType() === 'imagepicker'; },
        isDefaultRender: true,
        activatedByChanged: function(activatedBy) {
            Survey.JsonObject.metaData.addClass("imageitemvalues", [{name: "imageLink"}], null, "itemvalue");
            Survey.JsonObject.metaData.addClass("imagepicker", [{name: "choices:imageitemvalues", onGetValue: function (obj) { return Survey.ItemValue.getData(obj.choices); }, onSetValue: function (obj, value) { obj.choices = value; }}, 
                {name:"showLabel:boolean", default: false}, {name:"hasOther", visible: false}, {name: "otherText", visible: false}, {name: "optionsCaption", visible: false}, 
                {name: "otherErrorText", visible: false}, {name: "storeOthersAsComment", visible: false}, {name: "renderAs", visible: false}], null, "dropdown");
        },
        afterRender: function(question, el) {
            var $el = $(el).is("select") ? $(el) : $(el).find("select");
            var options = $el.find('option');
            var choices = question.choices;

            for (var i=1; i < options.length && i-1 < choices.length; i++) {
                $(options[i]).data("imgSrc", choices[i-1].imageLink);
                options[i].selected = question.value == options[i].value;
            }
            $el.imagepicker({
                hide_select : true,
                show_label  : question.showLabel,
                selected: function(opts) {
                    question.value = opts.picker.select[0].value;
                }
            })
        },
        willUnmount: function(question, el) {
            var $el = $(el).find("select");
            $el.data('picker').destroy();
        } 
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inputmask__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inputmask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inputmask__);


function init(Survey) {
    var widget = {
        name: "maskedit",
        numericGroupSeparator: ',',
        numericAutoGroup: true,
        numericDigits: 2,
        numericDigitsOptional: false,
        numericPrefix: '$',
        numericPlaceholder: '0',
        widgetIsLoaded: function() { return typeof __WEBPACK_IMPORTED_MODULE_0_inputmask___default.a != "undefined"; },
        isFit : function(question) { 
            if(question.getType() == "multipletext") return true;
            return question.getType() == "text" && (question.inputMask != "none" || question.inputFormat);
        },
        isDefaultRender: true,
        activatedByChanged: function(activatedBy) {
            if(Survey.JsonObject.metaData.findProperty("text", "inputMask")) return;
            var properties = ["inputFormat", {name: "inputMask", default: "none", choices: ["none", "datetime", "currency", "decimal", "email", "phone", "ip"]}];
            Survey.JsonObject.metaData.addProperties("text", properties);
            Survey.JsonObject.metaData.addProperties("matrixdropdowncolumn", properties);
            Survey.JsonObject.metaData.addProperties("multipletextitem", properties);
        },
        applyInputMask: function(surveyElement, el) {
            var rootWidget = this;
            var mask = surveyElement.inputMask != "none" ? surveyElement.inputMask : surveyElement.inputFormat;
            var options = {};
            if(surveyElement.inputMask != "none") options.inputFormat = surveyElement.inputFormat;
            
            if(surveyElement.inputMask == "currency" || surveyElement.inputMask == "decimal") {
                options.groupSeparator = rootWidget.numericGroupSeparator;
                options.autoGroup = rootWidget.numericAutoGroup;
            }
            if(surveyElement.inputMask == "currency") {
                options.digits = rootWidget.numericDigits;
                options.digitsOptional = rootWidget.numericDigitsOptional;
                options.prefix = rootWidget.numericPrefix;
                options.placeholder = rootWidget.numericPlaceholder;
            }
            if (surveyElement.inputMask == "datetime") {
                mask = surveyElement.inputFormat;
            }

            __WEBPACK_IMPORTED_MODULE_0_inputmask___default()(mask, options).mask(el);

            el.oninput = function() {
                surveyElement.customWidgetData.isNeedRender = true; 
            }

            var updateHandler = function() {               
                el.value = typeof surveyElement.value === "undefined" ? "" : surveyElement.value;
            };
            surveyElement.valueChangedCallback = updateHandler;
            updateHandler();
        },
        afterRender: function(question, el) {
            if(question.getType() != "multipletext") {
                var input = el.querySelector("input") || el;
                this.applyInputMask(question, input);
            } else {
                for(var i = 0; i < question.items.length; i ++) {
                    var item = question.items[i];
                    if(item.inputMask != "none" || item.inputFormat) {
                        var input =  el.querySelector("#" + item.id);
                        if (input) {
                            this.applyInputMask(item, input);
                        }
                    }
                }
            }
        },
        willUnmount: function(question, el) {
            var input = el.querySelector("input") || el;
            input.inputmask.remove();
        }
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget);
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey) {
    var widget = {
        name: "barrating",
        title: "Bar rating",
        iconName: "icon-barrating",
        widgetIsLoaded: function() { return typeof $ === 'function' && !!$.fn.barrating; },
        defaultJSON: {choices: [1, 2, 3, 4, 5]},
        isFit : function(question) { 
            return question.getType() === 'barrating'; 
        },
        isDefaultRender: true,
        activatedByChanged: function(activatedBy) {
            Survey.JsonObject.metaData.addClass("barrating", [ {name: "showValues:boolean", default: false}, 
            {name:"hasOther", visible: false}, {name: "otherText", visible: false}, {name: "optionsCaption", visible: false}, 
            {name: "otherErrorText", visible: false}, {name: "storeOthersAsComment", visible: false}, {name: "renderAs", visible: false}], null, "dropdown");
            Survey.JsonObject.metaData.addProperty("barrating", {name: "ratingTheme", default: "fontawesome-stars", choices: ["fontawesome-stars", "css-stars", "bars-pill", "bars-1to10", "bars-movie", "bars-square", "bars-reversed", "bars-horizontal", "bootstrap-stars", "fontawesome-stars-o"]});
        },
        afterRender: function(question, el) {
            var $el = $(el).is("select") ? $(el) : $(el).find("select");
            $el.barrating('show', {
                theme: question.ratingTheme,
                initialRating: question.value,
                showValues: question.showValues,
                showSelectedRating: false,
                onSelect: function(value, text) {
                    question.value = value;
                }
            });
            question.valueChangedCallback = function() {
                $(el).find('select').barrating('set', question.value);
            }
        },
        willUnmount: function(question, el) {
            var $el = $(el).find("select");
            $el.barrating('destroy');
        } 
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey) {
    var widget = {
        name: "datepicker",
        title: "Date picker",
        iconName: "icon-datepicker",
        widgetIsLoaded: function() { return typeof $ == 'function' && !!$.fn.datepicker; },
        isFit : function(question) { return question.getType() === 'datepicker'; },
        htmlTemplate: "<input class='form-control widget-datepicker' type='text' style='width: 100%;'>",
        activatedByChanged: function(activatedBy) {
            Survey.JsonObject.metaData.addClass("datepicker", 
                [{name: "dateFormat", default: "mm/dd/yy", choices: ["mm/dd/yy", "yy-mm-dd", "d M, y", "d MM, y", "DD, d MM, yy", "'day' d 'of' MM 'in the year' yy"]},
                {name:"inputType", visible: false}, {name:"inputFormat", visible: false}, {name: "inputMask", visible: false}], null, "text");
        },
        afterRender: function(question, el) {
            var $el = $(el).is(".widget-datepicker") ? $(el) : $(el).find(".widget-datepicker");
            var pickerWidget = $el.datepicker({
                dateFormat: question.dateFormat,
                option: { 
                    minDate: null,
                    maxDate: null
                },
                onSelect: function(dateText) {
                    question.value = dateText;
                }
            });
            question.valueChangedCallback = function() {
                if(question.value) {
                    pickerWidget.datepicker('setDate', new Date(question.value));
                } else {
                    pickerWidget.datepicker('setDate', null);
                }
            }
            question.valueChangedCallback();
        },
        willUnmount: function(question, el) {
            var $el = $(el).is(".widget-datepicker") ? $(el) : $(el).find(".widget-datepicker");
            $el.datepicker("destroy");
        } 
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nouislider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nouislider__);


function init(Survey) {
    var widget = {
        name: "nouislider",
        title: "noUiSlider",
        iconName: "icon-nouislider",
        widgetIsLoaded: function() { return typeof __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a != "undefined"; },
        isFit : function(question) { return question.getType() === 'nouislider'; },
        htmlTemplate: "<div></div>",
        activatedByChanged: function(activatedBy) {
            Survey.JsonObject.metaData.addClass("nouislider", [], null, "empty");
            Survey.JsonObject.metaData.addProperties("nouislider", [{name: "rangeMin:number", default: 0}, {name: "rangeMax:number", default: 100},
            {name: "defaultRangeMin:number", default: 30}, {name: "defaultRangeMax:number", default: 70}]);
        },
        afterRender: function(question, el) {
            var startValue = question.value;
            if(!startValue || startValue.length != 2) {
                startValue = [question.defaultRangeMin, question.defaultRangeMax];
            }
            if(startValue[0] < question.rangeMin) startValue[0] = question.rangeMin;
            if(startValue[0] > question.rangeMax) startValue[0] = question.rangeMax;
            if(startValue[1] < startValue[0]) startValue[1] = startValue[0];
            if(startValue[1] > question.rangeMax) startValue[1] = question.rangeMax;
            question.value = startValue;

            el.style.marginBottom = "50px";
            var slider = __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a.create(el, {
                start: startValue,
                connect: true,
                pips: {
                    mode: 'steps',
                    stepped: true,
                    density: 4
                },
                range: {
                    'min': question.rangeMin,
                    'max': question.rangeMax
                }
            });
            slider.on('set', function(){
                question.value = slider.get();
            }); 
            var updateValueHandler = function() {
                slider.set(question.value);
            };
            question.noUiSlider = slider;
            question.valueChangedCallback = updateValueHandler;
        },
        willUnmount: function(question, el) {
            question.noUiSlider.destroy(); 
            question.noUiSlider = null;
        } 
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);


function init(Survey) {
    var widget = {
        name: "tagbox",
        title: "Tag box",
        iconName: "icon-tagbox",
        widgetIsLoaded: function() { return typeof __WEBPACK_IMPORTED_MODULE_0_jquery___default.a == 'function' && !!__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn.select2; },
        defaultJSON: {choices: ["Item 1", "Item 2", "Item 3"]},
        htmlTemplate: "<select multiple='multiple' style='width: 100%;'></select>",
        isFit : function(question) { return question.getType() === 'tagbox';  },
        activatedByChanged: function(activatedBy) {
            Survey.JsonObject.metaData.addClass("tagbox", [{name:"hasOther", visible: false}], null, "checkbox");
        },
        afterRender: function(question, el) {
            var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).is("select") ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el) : __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).find("select");
            $el.select2({
                tags: "true",
                theme: "classic"
            });
            var updateValueHandler = function() {
                $el.val(question.value).trigger("change");
            };
            var updateChoices = function() {
                $el.select2({data: question.visibleChoices.map(function(choice) { return { id: choice.value, text: choice.text }; })});
                updateValueHandler();
            }
            question.choicesChangedCallback = updateChoices;
            question.valueChangedCallback = updateValueHandler;
            $el.on('select2:select', function (e) {
                question.value = (question.value || []).concat(e.params.data.id);
            });
            $el.on('select2:unselect', function (e) {
                var index = (question.value || []).indexOf(e.params.data.id);
                if(index !== -1) {
                    var val = question.value;
                    val.splice(index, 1);
                    question.value = val;
                }
            });         
            updateChoices();
        },
        willUnmount: function(question, el) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).find("select").off('select2:select').select2("destroy");
        }
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_signature_pad__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_signature_pad__);


function init(Survey) {
    var widget = {
        name: "signaturepad",
        title: "Signature pad",
        iconName: "icon-signaturepad",
        widgetIsLoaded: function() { return typeof __WEBPACK_IMPORTED_MODULE_0_signature_pad__ != "undefined"; },
        penColor: "1ab394",
        isFit : function(question) { return question.getType() === 'signaturepad'; },
        htmlTemplate: "<div></div>",
        activatedByChanged: function(activatedBy) {
            Survey.JsonObject.metaData.addClass("signaturepad", [], null, "empty");
            Survey.JsonObject.metaData.addProperties("signaturepad", [{name: "width:number", default: 300}, {name: "height:number", default: 200}]);
        },
        afterRender: function(question, el) {
            var rootWidget = this;
            var canvas = document.createElement('canvas');
            canvas.width  = question.width;
            canvas.height = question.height;        
            el.appendChild(canvas);
            var signaturePad = new __WEBPACK_IMPORTED_MODULE_0_signature_pad__(canvas);
            if(question.isReadOnly) {
                signaturePad.off();
            }
            signaturePad.penColor = rootWidget.penColor;
            signaturePad.onEnd = function() {
                var data = signaturePad.toDataURL();
                question.value = data;
            }
            var updateValueHandler = function() {
                signaturePad.fromDataURL(question.value);
            };
            question.valueChangedCallback = updateValueHandler;
            updateValueHandler();
            question.signaturePad = signaturePad;
        },
        willUnmount: function(question, el) {
            if(question.signaturePad) {
                question.signaturePad.off();
            }
            question.signaturePad = null;
        } 
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sortablejs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sortablejs__);


function init(Survey) {
    var widget = {
        name: "sortablelist",
        title: "Sortable list",
        iconName: "icon-sortablelist",
        widgetIsLoaded: function() { return typeof __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a != "undefined"; },
        defaultJSON: {choices: ["Item 1", "Item 2", "Item 3"]},
        areaStyle: "border: 1px solid #1ab394; width:100%; minHeight:50px",
        itemStyle: "background-color:#1ab394;color:#fff;margin:5px;padding:10px;",
        isFit : function(question) { return question.getType() === 'sortablelist'; },
        htmlTemplate: "<div></div>",
        activatedByChanged: function(activatedBy) {
            Survey.JsonObject.metaData.addClass("sortablelist", [{name:"hasOther", visible: false}, {name:"storeOthersAsComment", visible: false}], null, "checkbox");
            Survey.JsonObject.metaData.addProperty("sortablelist", {name: "emptyText", default: "Move items here."});
        },
        afterRender: function(question, el) {
            var rootWidget = this;
            el.style.width = "100%";
            var resultEl = document.createElement("div");
            var emptyEl = document.createElement("span");
            var sourceEl = document.createElement("div");
            resultEl.style.cssText = rootWidget.areaStyle;
            emptyEl.innerHTML = question.emptyText;
            resultEl.appendChild(emptyEl);
            sourceEl.style.cssText = rootWidget.areaStyle;
            sourceEl.style.marginTop = "10px";
            el.appendChild(resultEl);
            el.appendChild(sourceEl);
            var hasValueInResults = function(val) {
                var res = question.value;
                if(!Array.isArray(res)) return false;
                for(var i = 0; i < res.length; i ++){
                    if(res[i] == val) return true;
                }
                return false;
            };
            var isUpdatingQuestionValue = false;
            var updateValueHandler = function() {
                if(isUpdatingQuestionValue) return;
                resultEl.innerHTML = "";
                resultEl.appendChild(emptyEl);
                sourceEl.innerHTML = "";
                var wasInResults = false;
                question.activeChoices.forEach(function(choice) {
                    var inResutls = hasValueInResults(choice.value);
                    wasInResults = wasInResults || inResutls;
                    var srcEl = inResutls ? resultEl : sourceEl;
                    var newEl = document.createElement("div");
                    newEl.innerHTML = "<div style='" + rootWidget.itemStyle +  "'>" + choice.text + "</div>";
                    newEl.dataset["value"] = choice.value;
                    srcEl.appendChild(newEl);
                });
                emptyEl.style.display = wasInResults ?  "none" : "";
            };
            __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create($(resultEl)[0], {
                animation: 150,
                group: {
                    name: 'top3',
                    pull: true,
                    put: true
                },
                onSort: function (evt) {
                    var result = [];
                    if (evt.to.children.length === 1) {
                        emptyEl.style.display = "";
                    } else {
                        emptyEl.style.display = "none";
                        for (var i = 1; i < evt.to.children.length; i++) {
                            result.push(evt.to.children[i].dataset.value)
                        }
                    }
                    isUpdatingQuestionValue = true;
                    question.value = result;
                    isUpdatingQuestionValue = false;
                }
            });
            __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create($(sourceEl)[0], {
                animation: 150,
                group: {
                    name: 'top3',
                    pull: true,
                    put: true
                }
            });
            question.valueChangedCallback = updateValueHandler;
            updateValueHandler();
        },
        willUnmount: function(question, el) {
        } 
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey) {
    var widget = {
        name: "editor",
        title: "Editor",
        iconName: "icon-editor",
        widgetIsLoaded: function() { return typeof CKEDITOR != "undefined"; },
        isFit : function(question) { 
            return question.getType() === 'editor'; 
        },
        htmlTemplate: "<textarea rows='10' cols='80' style: {width:'100%'}></textarea>",
        activatedByChanged: function(activatedBy) {
            Survey.JsonObject.metaData.addClass("editor", [], null, "empty");
            Survey.JsonObject.metaData.addProperty("editor", {name: "height", default: 300});
        },
        afterRender: function(question, el) {
            CKEDITOR.editorConfig = function (config) {
                config.language = 'es';
                config.height = question.height;
                config.toolbarCanCollapse = true;
            };
            var editor = CKEDITOR.replace(el);
            var isValueChanging = false;
            var updateValueHandler = function() {
                if(isValueChanging) return;
                editor.setData(question.value);
            };
            editor.on('change', function() { 
                isValueChanging = true;
                question.value = editor.getData();
                isValueChanging = false;
            });
            question.valueChangedCallback = updateValueHandler;
            updateValueHandler();
        },
        willUnmount: function(question, el) {
        } 
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icheck_js__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "icheck", function() { return __WEBPACK_IMPORTED_MODULE_0__icheck_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select2_js__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select2", function() { return __WEBPACK_IMPORTED_MODULE_1__select2_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_picker_js__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "imagepicker", function() { return __WEBPACK_IMPORTED_MODULE_2__image_picker_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputmask_js__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "inputmask", function() { return __WEBPACK_IMPORTED_MODULE_3__inputmask_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jquery_bar_rating_js__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "jquerybarrating", function() { return __WEBPACK_IMPORTED_MODULE_4__jquery_bar_rating_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jquery_ui_datepicker_js__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "jqueryuidatepicker", function() { return __WEBPACK_IMPORTED_MODULE_5__jquery_ui_datepicker_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nouislider_js__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "nouislider", function() { return __WEBPACK_IMPORTED_MODULE_6__nouislider_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select2_tagbox_js__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select2tagbox", function() { return __WEBPACK_IMPORTED_MODULE_7__select2_tagbox_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signature_pad_js__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "signaturepad", function() { return __WEBPACK_IMPORTED_MODULE_8__signature_pad_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sortablejs_js__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sortablejs", function() { return __WEBPACK_IMPORTED_MODULE_9__sortablejs_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ck_editor_js__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ckeditor", function() { return __WEBPACK_IMPORTED_MODULE_10__ck_editor_js__["default"]; });












/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1NTQyYzk4ZjY2NjE2NjlkZjlhZCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIklucHV0bWFza1wiLFwiY29tbW9uanMyXCI6XCJpbnB1dG1hc2tcIixcImNvbW1vbmpzXCI6XCJpbnB1dG1hc2tcIixcImFtZFwiOlwiaW5wdXRtYXNrXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcXVlcnktYmFyLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5LXVpLWRhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vdWlzbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm5vVWlTbGlkZXJcIixcImNvbW1vbmpzMlwiOlwibm91aXNsaWRlclwiLFwiY29tbW9uanNcIjpcIm5vdWlzbGlkZXJcIixcImFtZFwiOlwibm91aXNsaWRlclwifSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi10YWdib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpZ25hdHVyZV9wYWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlNpZ25hdHVyZVBhZFwiLFwiY29tbW9uanMyXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJjb21tb25qc1wiOlwic2lnbmF0dXJlX3BhZFwiLFwiYW1kXCI6XCJzaWduYXR1cmVfcGFkXCJ9Iiwid2VicGFjazovLy8uL3NyYy9zb3J0YWJsZWpzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJTb3J0YWJsZVwiLFwiY29tbW9uanMyXCI6XCJzb3J0YWJsZWpzXCIsXCJjb21tb25qc1wiOlwic29ydGFibGVqc1wiLFwiYW1kXCI6XCJzb3J0YWJsZWpzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9jay1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleWpzLXdpZGdldHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSwrQzs7Ozs7OztBQ0FBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0RBQWdELEVBQUU7QUFDdEYsb0M7QUFDQSx1Q0FBdUMsaUU7QUFDdkMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixF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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QzBCO0FBQ0M7QUFDSTtBQUNGO0FBQ007QUFDRztBQUNSO0FBQ0c7QUFDRDtBQUNGIiwiZmlsZSI6InN1cnZleWpzLXdpZGdldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJpbnB1dG1hc2tcIiksIHJlcXVpcmUoXCJub3Vpc2xpZGVyXCIpLCByZXF1aXJlKFwic2lnbmF0dXJlX3BhZFwiKSwgcmVxdWlyZShcInNvcnRhYmxlanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJzdXJ2ZXlqcy13aWRnZXRzXCIsIFtcImpxdWVyeVwiLCBcImlucHV0bWFza1wiLCBcIm5vdWlzbGlkZXJcIiwgXCJzaWduYXR1cmVfcGFkXCIsIFwic29ydGFibGVqc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzdXJ2ZXlqcy13aWRnZXRzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiaW5wdXRtYXNrXCIpLCByZXF1aXJlKFwibm91aXNsaWRlclwiKSwgcmVxdWlyZShcInNpZ25hdHVyZV9wYWRcIiksIHJlcXVpcmUoXCJzb3J0YWJsZWpzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzdXJ2ZXlqcy13aWRnZXRzXCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdLCByb290W1wiSW5wdXRtYXNrXCJdLCByb290W1wibm9VaVNsaWRlclwiXSwgcm9vdFtcIlNpZ25hdHVyZVBhZFwiXSwgcm9vdFtcIlNvcnRhYmxlXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NTQyYzk4ZjY2NjE2NjlkZjlhZCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogXCJpcmFkaW9fc3F1YXJlLWJsdWVcIixcclxuICAgICAgICBuYW1lOiBcImljaGVja1wiLFxyXG4gICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHsgcmV0dXJuIHR5cGVvZiAkID09ICdmdW5jdGlvbicgJiYgISEkLmZuLmlDaGVjazsgfSxcclxuICAgICAgICBpc0ZpdCA6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7ICBcclxuICAgICAgICAgICAgdmFyIHQgPSBxdWVzdGlvbi5nZXRUeXBlKCk7IHJldHVybiB0ID09PSAncmFkaW9ncm91cCcgfHwgdCA9PT0gJ2NoZWNrYm94JyB8fCB0ID09PSAnbWF0cml4JzsgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0RlZmF1bHRSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgcm9vdFdpZGdldCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKTtcclxuICAgICAgICAgICAgJGVsLmZpbmQoJ2lucHV0JykuZGF0YSh7XCJpQ2hlY2tcIjogdW5kZWZpbmVkfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkZWwuZmluZCgnaW5wdXQnKS5pQ2hlY2soe1xyXG4gICAgICAgICAgICBjaGVja2JveENsYXNzOiByb290V2lkZ2V0LmNsYXNzTmFtZSxcclxuICAgICAgICAgICAgcmFkaW9DbGFzczogcm9vdFdpZGdldC5jbGFzc05hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmKHF1ZXN0aW9uLmdldFR5cGUoKSAhPSBcIm1hdHJpeFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGVsLmZpbmQoXCJpbnB1dFt2YWx1ZT1cIiArIHF1ZXN0aW9uLnZhbHVlICsgXCJdXCIpLmlDaGVjaygnY2hlY2snKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24uZ2VuZXJhdGVkVmlzaWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbihyb3csIGluZGV4LCByb3dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChlbCkuZmluZChcImlucHV0W25hbWU9J1wiICsgcm93LmZ1bGxOYW1lICArIFwiJ11bdmFsdWU9XCIgKyByb3cudmFsdWUgKyBcIl1cIikuaUNoZWNrKCdjaGVjaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRlbC5maW5kKCdpbnB1dCcpLm9uKCdpZkNoZWNrZWQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYocXVlc3Rpb24uZ2V0VHlwZSgpICE9IFwibWF0cml4XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24uZ2VuZXJhdGVkVmlzaWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbihyb3csIGluZGV4LCByb3dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cuZnVsbE5hbWUgPT09IGV2ZW50LnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHNlbGVjdDtcclxuICAgICAgICAgICAgc2VsZWN0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKTtcclxuICAgICAgICAgICAgJGVsLmZpbmQoJ2lucHV0JykuaUNoZWNrKCdkZXN0cm95Jyk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcInR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaWNoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxMCIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gICAgdmFyIHdpZGdldCA9IHtcclxuICAgICAgICBhY3RpdmF0ZWRCeTogXCJwcm9wZXJ0eVwiLFxyXG4gICAgICAgIG5hbWU6IFwic2VsZWN0MlwiLFxyXG4gICAgICAgIGh0bWxUZW1wbGF0ZTogXCI8c2VsZWN0IHN0eWxlPSd3aWR0aDogMTAwJTsnPjwvc2VsZWN0PlwiLFxyXG4gICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHsgcmV0dXJuIHR5cGVvZiAkID09ICdmdW5jdGlvbicgJiYgISEkLmZuLnNlbGVjdDI7IH0sXHJcbiAgICAgICAgaXNGaXQgOiBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgICAgICAgICBpZih3aWRnZXQuYWN0aXZhdGVkQnkgPT0gXCJwcm9wZXJ0eVwiKSByZXR1cm4gcXVlc3Rpb25bXCJyZW5kZXJBc1wiXSA9PT0gJ3NlbGVjdDInICYmIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gJ2Ryb3Bkb3duJzsgXHJcbiAgICAgICAgICAgIGlmKHdpZGdldC5hY3RpdmF0ZWRCeSA9PSBcInR5cGVcIikgcmV0dXJuICB0eXBlb2YgU2VsZWN0MiAhPT0gdW5kZWZpbmVkICYmIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gJ2Ryb3Bkb3duJzsgXHJcbiAgICAgICAgICAgIGlmKHdpZGdldC5hY3RpdmF0ZWRCeSA9PSBcImN1c3RvbXR5cGVcIikgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gJ3NlbGVjdDInO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLndpZGdldElzTG9hZGVkKCkpIHJldHVybjtcclxuICAgICAgICAgICAgd2lkZ2V0LmFjdGl2YXRlZEJ5ID0gYWN0aXZhdGVkQnk7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLnJlbW92ZVByb3BlcnR5KFwiZHJvcGRvd25cIiwgXCJyZW5kZXJBc1wiKTtcclxuICAgICAgICAgICAgaWYoYWN0aXZhdGVkQnkgPT0gXCJwcm9wZXJ0eVwiKSB7XHJcbiAgICAgICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImRyb3Bkb3duXCIsIHtuYW1lOiBcInJlbmRlckFzXCIsIGRlZmF1bHQ6IFwic3RhbmRhcmRcIiwgY2hvaWNlczogW1wic3RhbmRhcmRcIiwgXCJzZWxlY3QyXCJdfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYWN0aXZhdGVkQnkgPT0gXCJjdXN0b210eXBlXCIpIHtcclxuICAgICAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic2VsZWN0MlwiLCBbXSwgbnVsbCwgXCJkcm9wZG93blwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJzZWxlY3RcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgICAgIHZhciBvdGhlcnNFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgb3RoZXJzRWwudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICBvdGhlcnNFbC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjNweFwiO1xyXG4gICAgICAgICAgICBvdGhlcnNFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIG90aGVyc0VsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICRlbC5wYXJlbnQoKS5nZXQoMCkuYXBwZW5kQ2hpbGQob3RoZXJzRWwpO1xyXG4gICAgICAgICAgICB2YXIgd2lkZ2V0ID0gJGVsLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICAgICAgdGhlbWU6IFwiY2xhc3NpY1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwudmFsKHF1ZXN0aW9uLnZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXJzRWwuc3R5bGUuZGlzcGxheSA9ICFxdWVzdGlvbi5pc090aGVyU2VsZWN0ZWQgPyBcIm5vbmVcIjogXCJcIjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHVwZGF0ZUNvbW1lbnRIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBvdGhlcnNFbC52YWx1ZSA9IHF1ZXN0aW9uLmNvbW1lbnQgPyBxdWVzdGlvbi5jb21tZW50IDogXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgb3RoZXJzRWxDaGFuZ2VkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi5jb21tZW50ID0gb3RoZXJzRWwudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHVwZGF0ZUNob2ljZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICRlbC5zZWxlY3QyKHtkYXRhOiBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24oY2hvaWNlKSB7IHJldHVybiB7IGlkOiBjaG9pY2UudmFsdWUsIHRleHQ6IGNob2ljZS50ZXh0IH07IH0pfSk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUNvbW1lbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcXVlc3Rpb24uY2hvaWNlc0NoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZUNob2ljZXM7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNob2ljZXMoKTtcclxuICAgICAgICAgICAgJGVsLm9uKCdzZWxlY3QyOnNlbGVjdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb3RoZXJzRWwub25jaGFuZ2UgPSBvdGhlcnNFbENoYW5nZWQ7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICAgICAgICBxdWVzdGlvbi5jb21tZW50Q2hhbmdlZENhbGxiYWNrID0gdXBkYXRlQ29tbWVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB1cGRhdGVDb21tZW50SGFuZGxlcigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICAkKGVsKS5maW5kKFwic2VsZWN0XCIpLm9mZignc2VsZWN0MjpzZWxlY3QnKS5zZWxlY3QyKFwiZGVzdHJveVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCk7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VsZWN0Mi5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiaW1hZ2VwaWNrZXJcIixcclxuICAgICAgICB0aXRsZTogXCJJbWFnZSBwaWNrZXJcIixcclxuICAgICAgICBpY29uTmFtZTogXCJpY29uLWltYWdlcGlja2VyXCIsXHJcbiAgICAgICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHlwZW9mICQgPT0gJ2Z1bmN0aW9uJyAmJiAhISQuZm4uaW1hZ2VwaWNrZXI7IH0sXHJcbiAgICAgICAgaXNGaXQgOiBmdW5jdGlvbihxdWVzdGlvbikgeyByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnaW1hZ2VwaWNrZXInOyB9LFxyXG4gICAgICAgIGlzRGVmYXVsdFJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiaW1hZ2VpdGVtdmFsdWVzXCIsIFt7bmFtZTogXCJpbWFnZUxpbmtcIn1dLCBudWxsLCBcIml0ZW12YWx1ZVwiKTtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJpbWFnZXBpY2tlclwiLCBbe25hbWU6IFwiY2hvaWNlczppbWFnZWl0ZW12YWx1ZXNcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gU3VydmV5Lkl0ZW1WYWx1ZS5nZXREYXRhKG9iai5jaG9pY2VzKTsgfSwgb25TZXRWYWx1ZTogZnVuY3Rpb24gKG9iaiwgdmFsdWUpIHsgb2JqLmNob2ljZXMgPSB2YWx1ZTsgfX0sIFxyXG4gICAgICAgICAgICAgICAge25hbWU6XCJzaG93TGFiZWw6Ym9vbGVhblwiLCBkZWZhdWx0OiBmYWxzZX0sIHtuYW1lOlwiaGFzT3RoZXJcIiwgdmlzaWJsZTogZmFsc2V9LCB7bmFtZTogXCJvdGhlclRleHRcIiwgdmlzaWJsZTogZmFsc2V9LCB7bmFtZTogXCJvcHRpb25zQ2FwdGlvblwiLCB2aXNpYmxlOiBmYWxzZX0sIFxyXG4gICAgICAgICAgICAgICAge25hbWU6IFwib3RoZXJFcnJvclRleHRcIiwgdmlzaWJsZTogZmFsc2V9LCB7bmFtZTogXCJzdG9yZU90aGVyc0FzQ29tbWVudFwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOiBcInJlbmRlckFzXCIsIHZpc2libGU6IGZhbHNlfV0sIG51bGwsIFwiZHJvcGRvd25cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcInNlbGVjdFwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcInNlbGVjdFwiKTtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSAkZWwuZmluZCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIHZhciBjaG9pY2VzID0gcXVlc3Rpb24uY2hvaWNlcztcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGk9MTsgaSA8IG9wdGlvbnMubGVuZ3RoICYmIGktMSA8IGNob2ljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICQob3B0aW9uc1tpXSkuZGF0YShcImltZ1NyY1wiLCBjaG9pY2VzW2ktMV0uaW1hZ2VMaW5rKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnNbaV0uc2VsZWN0ZWQgPSBxdWVzdGlvbi52YWx1ZSA9PSBvcHRpb25zW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRlbC5pbWFnZXBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBoaWRlX3NlbGVjdCA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93X2xhYmVsICA6IHF1ZXN0aW9uLnNob3dMYWJlbCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmdW5jdGlvbihvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBvcHRzLnBpY2tlci5zZWxlY3RbMF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICAgICAgICAkZWwuZGF0YSgncGlja2VyJykuZGVzdHJveSgpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdlLXBpY2tlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgOSIsImltcG9ydCBJbnB1dG1hc2sgZnJvbSBcImlucHV0bWFza1wiO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSB7XHJcbiAgICAgICAgbmFtZTogXCJtYXNrZWRpdFwiLFxyXG4gICAgICAgIG51bWVyaWNHcm91cFNlcGFyYXRvcjogJywnLFxyXG4gICAgICAgIG51bWVyaWNBdXRvR3JvdXA6IHRydWUsXHJcbiAgICAgICAgbnVtZXJpY0RpZ2l0czogMixcclxuICAgICAgICBudW1lcmljRGlnaXRzT3B0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgIG51bWVyaWNQcmVmaXg6ICckJyxcclxuICAgICAgICBudW1lcmljUGxhY2Vob2xkZXI6ICcwJyxcclxuICAgICAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7IHJldHVybiB0eXBlb2YgSW5wdXRtYXNrICE9IFwidW5kZWZpbmVkXCI7IH0sXHJcbiAgICAgICAgaXNGaXQgOiBmdW5jdGlvbihxdWVzdGlvbikgeyBcclxuICAgICAgICAgICAgaWYocXVlc3Rpb24uZ2V0VHlwZSgpID09IFwibXVsdGlwbGV0ZXh0XCIpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09IFwidGV4dFwiICYmIChxdWVzdGlvbi5pbnB1dE1hc2sgIT0gXCJub25lXCIgfHwgcXVlc3Rpb24uaW5wdXRGb3JtYXQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgICAgICAgaWYoU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZmluZFByb3BlcnR5KFwidGV4dFwiLCBcImlucHV0TWFza1wiKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtcImlucHV0Rm9ybWF0XCIsIHtuYW1lOiBcImlucHV0TWFza1wiLCBkZWZhdWx0OiBcIm5vbmVcIiwgY2hvaWNlczogW1wibm9uZVwiLCBcImRhdGV0aW1lXCIsIFwiY3VycmVuY3lcIiwgXCJkZWNpbWFsXCIsIFwiZW1haWxcIiwgXCJwaG9uZVwiLCBcImlwXCJdfV07XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJ0ZXh0XCIsIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwibWF0cml4ZHJvcGRvd25jb2x1bW5cIiwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJtdWx0aXBsZXRleHRpdGVtXCIsIHByb3BlcnRpZXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXBwbHlJbnB1dE1hc2s6IGZ1bmN0aW9uKHN1cnZleUVsZW1lbnQsIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIG1hc2sgPSBzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayAhPSBcIm5vbmVcIiA/IHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrIDogc3VydmV5RWxlbWVudC5pbnB1dEZvcm1hdDtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgaWYoc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgIT0gXCJub25lXCIpIG9wdGlvbnMuaW5wdXRGb3JtYXQgPSBzdXJ2ZXlFbGVtZW50LmlucHV0Rm9ybWF0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgPT0gXCJjdXJyZW5jeVwiIHx8IHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiZGVjaW1hbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmdyb3VwU2VwYXJhdG9yID0gcm9vdFdpZGdldC5udW1lcmljR3JvdXBTZXBhcmF0b3I7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmF1dG9Hcm91cCA9IHJvb3RXaWRnZXQubnVtZXJpY0F1dG9Hcm91cDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImN1cnJlbmN5XCIpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZGlnaXRzID0gcm9vdFdpZGdldC5udW1lcmljRGlnaXRzO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kaWdpdHNPcHRpb25hbCA9IHJvb3RXaWRnZXQubnVtZXJpY0RpZ2l0c09wdGlvbmFsO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wcmVmaXggPSByb290V2lkZ2V0Lm51bWVyaWNQcmVmaXg7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnBsYWNlaG9sZGVyID0gcm9vdFdpZGdldC5udW1lcmljUGxhY2Vob2xkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiZGF0ZXRpbWVcIikge1xyXG4gICAgICAgICAgICAgICAgbWFzayA9IHN1cnZleUVsZW1lbnQuaW5wdXRGb3JtYXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIElucHV0bWFzayhtYXNrLCBvcHRpb25zKS5tYXNrKGVsKTtcclxuXHJcbiAgICAgICAgICAgIGVsLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1cnZleUVsZW1lbnQuY3VzdG9tV2lkZ2V0RGF0YS5pc05lZWRSZW5kZXIgPSB0cnVlOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHVwZGF0ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGVsLnZhbHVlID0gdHlwZW9mIHN1cnZleUVsZW1lbnQudmFsdWUgPT09IFwidW5kZWZpbmVkXCIgPyBcIlwiIDogc3VydmV5RWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3VydmV5RWxlbWVudC52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZUhhbmRsZXI7XHJcbiAgICAgICAgICAgIHVwZGF0ZUhhbmRsZXIoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgaWYocXVlc3Rpb24uZ2V0VHlwZSgpICE9IFwibXVsdGlwbGV0ZXh0XCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSB8fCBlbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlJbnB1dE1hc2socXVlc3Rpb24sIGlucHV0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbi5pdGVtcy5sZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHF1ZXN0aW9uLml0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uaW5wdXRNYXNrICE9IFwibm9uZVwiIHx8IGl0ZW0uaW5wdXRGb3JtYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gIGVsLnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBpdGVtLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5SW5wdXRNYXNrKGl0ZW0sIGlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikgfHwgZWw7XHJcbiAgICAgICAgICAgIGlucHV0LmlucHV0bWFzay5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCk7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5wdXRtYXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJJbnB1dG1hc2tcIixcImNvbW1vbmpzMlwiOlwiaW5wdXRtYXNrXCIsXCJjb21tb25qc1wiOlwiaW5wdXRtYXNrXCIsXCJhbWRcIjpcImlucHV0bWFza1wifVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiYmFycmF0aW5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQmFyIHJhdGluZ1wiLFxyXG4gICAgICAgIGljb25OYW1lOiBcImljb24tYmFycmF0aW5nXCIsXHJcbiAgICAgICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHlwZW9mICQgPT09ICdmdW5jdGlvbicgJiYgISEkLmZuLmJhcnJhdGluZzsgfSxcclxuICAgICAgICBkZWZhdWx0SlNPTjoge2Nob2ljZXM6IFsxLCAyLCAzLCA0LCA1XX0sXHJcbiAgICAgICAgaXNGaXQgOiBmdW5jdGlvbihxdWVzdGlvbikgeyBcclxuICAgICAgICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gJ2JhcnJhdGluZyc7IFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJiYXJyYXRpbmdcIiwgWyB7bmFtZTogXCJzaG93VmFsdWVzOmJvb2xlYW5cIiwgZGVmYXVsdDogZmFsc2V9LCBcclxuICAgICAgICAgICAge25hbWU6XCJoYXNPdGhlclwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOiBcIm90aGVyVGV4dFwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOiBcIm9wdGlvbnNDYXB0aW9uXCIsIHZpc2libGU6IGZhbHNlfSwgXHJcbiAgICAgICAgICAgIHtuYW1lOiBcIm90aGVyRXJyb3JUZXh0XCIsIHZpc2libGU6IGZhbHNlfSwge25hbWU6IFwic3RvcmVPdGhlcnNBc0NvbW1lbnRcIiwgdmlzaWJsZTogZmFsc2V9LCB7bmFtZTogXCJyZW5kZXJBc1wiLCB2aXNpYmxlOiBmYWxzZX1dLCBudWxsLCBcImRyb3Bkb3duXCIpO1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImJhcnJhdGluZ1wiLCB7bmFtZTogXCJyYXRpbmdUaGVtZVwiLCBkZWZhdWx0OiBcImZvbnRhd2Vzb21lLXN0YXJzXCIsIGNob2ljZXM6IFtcImZvbnRhd2Vzb21lLXN0YXJzXCIsIFwiY3NzLXN0YXJzXCIsIFwiYmFycy1waWxsXCIsIFwiYmFycy0xdG8xMFwiLCBcImJhcnMtbW92aWVcIiwgXCJiYXJzLXNxdWFyZVwiLCBcImJhcnMtcmV2ZXJzZWRcIiwgXCJiYXJzLWhvcml6b250YWxcIiwgXCJib290c3RyYXAtc3RhcnNcIiwgXCJmb250YXdlc29tZS1zdGFycy1vXCJdfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcInNlbGVjdFwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcInNlbGVjdFwiKTtcclxuICAgICAgICAgICAgJGVsLmJhcnJhdGluZygnc2hvdycsIHtcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBxdWVzdGlvbi5yYXRpbmdUaGVtZSxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxSYXRpbmc6IHF1ZXN0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd1ZhbHVlczogcXVlc3Rpb24uc2hvd1ZhbHVlcyxcclxuICAgICAgICAgICAgICAgIHNob3dTZWxlY3RlZFJhdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24odmFsdWUsIHRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoZWwpLmZpbmQoJ3NlbGVjdCcpLmJhcnJhdGluZygnc2V0JywgcXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICAgICAgICAkZWwuYmFycmF0aW5nKCdkZXN0cm95Jyk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanF1ZXJ5LWJhci1yYXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDgiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gICAgdmFyIHdpZGdldCA9IHtcclxuICAgICAgICBuYW1lOiBcImRhdGVwaWNrZXJcIixcclxuICAgICAgICB0aXRsZTogXCJEYXRlIHBpY2tlclwiLFxyXG4gICAgICAgIGljb25OYW1lOiBcImljb24tZGF0ZXBpY2tlclwiLFxyXG4gICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHsgcmV0dXJuIHR5cGVvZiAkID09ICdmdW5jdGlvbicgJiYgISEkLmZuLmRhdGVwaWNrZXI7IH0sXHJcbiAgICAgICAgaXNGaXQgOiBmdW5jdGlvbihxdWVzdGlvbikgeyByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnZGF0ZXBpY2tlcic7IH0sXHJcbiAgICAgICAgaHRtbFRlbXBsYXRlOiBcIjxpbnB1dCBjbGFzcz0nZm9ybS1jb250cm9sIHdpZGdldC1kYXRlcGlja2VyJyB0eXBlPSd0ZXh0JyBzdHlsZT0nd2lkdGg6IDEwMCU7Jz5cIixcclxuICAgICAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiZGF0ZXBpY2tlclwiLCBcclxuICAgICAgICAgICAgICAgIFt7bmFtZTogXCJkYXRlRm9ybWF0XCIsIGRlZmF1bHQ6IFwibW0vZGQveXlcIiwgY2hvaWNlczogW1wibW0vZGQveXlcIiwgXCJ5eS1tbS1kZFwiLCBcImQgTSwgeVwiLCBcImQgTU0sIHlcIiwgXCJERCwgZCBNTSwgeXlcIiwgXCInZGF5JyBkICdvZicgTU0gJ2luIHRoZSB5ZWFyJyB5eVwiXX0sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTpcImlucHV0VHlwZVwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOlwiaW5wdXRGb3JtYXRcIiwgdmlzaWJsZTogZmFsc2V9LCB7bmFtZTogXCJpbnB1dE1hc2tcIiwgdmlzaWJsZTogZmFsc2V9XSwgbnVsbCwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCIud2lkZ2V0LWRhdGVwaWNrZXJcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCIud2lkZ2V0LWRhdGVwaWNrZXJcIik7XHJcbiAgICAgICAgICAgIHZhciBwaWNrZXJXaWRnZXQgPSAkZWwuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0OiBxdWVzdGlvbi5kYXRlRm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uOiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkRhdGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4RGF0ZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbihkYXRlVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZGF0ZVRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYocXVlc3Rpb24udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwaWNrZXJXaWRnZXQuZGF0ZXBpY2tlcignc2V0RGF0ZScsIG5ldyBEYXRlKHF1ZXN0aW9uLnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlcldpZGdldC5kYXRlcGlja2VyKCdzZXREYXRlJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2soKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwiLndpZGdldC1kYXRlcGlja2VyXCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwiLndpZGdldC1kYXRlcGlja2VyXCIpO1xyXG4gICAgICAgICAgICAkZWwuZGF0ZXBpY2tlcihcImRlc3Ryb3lcIik7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanF1ZXJ5LXVpLWRhdGVwaWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDciLCJpbXBvcnQgbm9VaVNsaWRlciBmcm9tICdub3Vpc2xpZGVyJztcclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwibm91aXNsaWRlclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIm5vVWlTbGlkZXJcIixcclxuICAgICAgICBpY29uTmFtZTogXCJpY29uLW5vdWlzbGlkZXJcIixcclxuICAgICAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7IHJldHVybiB0eXBlb2Ygbm9VaVNsaWRlciAhPSBcInVuZGVmaW5lZFwiOyB9LFxyXG4gICAgICAgIGlzRml0IDogZnVuY3Rpb24ocXVlc3Rpb24pIHsgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gJ25vdWlzbGlkZXInOyB9LFxyXG4gICAgICAgIGh0bWxUZW1wbGF0ZTogXCI8ZGl2PjwvZGl2PlwiLFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJub3Vpc2xpZGVyXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwibm91aXNsaWRlclwiLCBbe25hbWU6IFwicmFuZ2VNaW46bnVtYmVyXCIsIGRlZmF1bHQ6IDB9LCB7bmFtZTogXCJyYW5nZU1heDpudW1iZXJcIiwgZGVmYXVsdDogMTAwfSxcclxuICAgICAgICAgICAge25hbWU6IFwiZGVmYXVsdFJhbmdlTWluOm51bWJlclwiLCBkZWZhdWx0OiAzMH0sIHtuYW1lOiBcImRlZmF1bHRSYW5nZU1heDpudW1iZXJcIiwgZGVmYXVsdDogNzB9XSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydFZhbHVlID0gcXVlc3Rpb24udmFsdWU7XHJcbiAgICAgICAgICAgIGlmKCFzdGFydFZhbHVlIHx8IHN0YXJ0VmFsdWUubGVuZ3RoICE9IDIpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWUgPSBbcXVlc3Rpb24uZGVmYXVsdFJhbmdlTWluLCBxdWVzdGlvbi5kZWZhdWx0UmFuZ2VNYXhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHN0YXJ0VmFsdWVbMF0gPCBxdWVzdGlvbi5yYW5nZU1pbikgc3RhcnRWYWx1ZVswXSA9IHF1ZXN0aW9uLnJhbmdlTWluO1xyXG4gICAgICAgICAgICBpZihzdGFydFZhbHVlWzBdID4gcXVlc3Rpb24ucmFuZ2VNYXgpIHN0YXJ0VmFsdWVbMF0gPSBxdWVzdGlvbi5yYW5nZU1heDtcclxuICAgICAgICAgICAgaWYoc3RhcnRWYWx1ZVsxXSA8IHN0YXJ0VmFsdWVbMF0pIHN0YXJ0VmFsdWVbMV0gPSBzdGFydFZhbHVlWzBdO1xyXG4gICAgICAgICAgICBpZihzdGFydFZhbHVlWzFdID4gcXVlc3Rpb24ucmFuZ2VNYXgpIHN0YXJ0VmFsdWVbMV0gPSBxdWVzdGlvbi5yYW5nZU1heDtcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBzdGFydFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgZWwuc3R5bGUubWFyZ2luQm90dG9tID0gXCI1MHB4XCI7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShlbCwge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGlwczoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICdzdGVwcycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcHBlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZW5zaXR5OiA0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAnbWluJzogcXVlc3Rpb24ucmFuZ2VNaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgJ21heCc6IHF1ZXN0aW9uLnJhbmdlTWF4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbGlkZXIub24oJ3NldCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHNsaWRlci5nZXQoKTtcclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuc2V0KHF1ZXN0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcXVlc3Rpb24ubm9VaVNsaWRlciA9IHNsaWRlcjtcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLm5vVWlTbGlkZXIuZGVzdHJveSgpOyBcclxuICAgICAgICAgICAgcXVlc3Rpb24ubm9VaVNsaWRlciA9IG51bGw7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbm91aXNsaWRlci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibm9VaVNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJub3Vpc2xpZGVyXCIsXCJjb21tb25qc1wiOlwibm91aXNsaWRlclwiLFwiYW1kXCI6XCJub3Vpc2xpZGVyXCJ9XG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwidGFnYm94XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVGFnIGJveFwiLFxyXG4gICAgICAgIGljb25OYW1lOiBcImljb24tdGFnYm94XCIsXHJcbiAgICAgICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHlwZW9mICQgPT0gJ2Z1bmN0aW9uJyAmJiAhISQuZm4uc2VsZWN0MjsgfSxcclxuICAgICAgICBkZWZhdWx0SlNPTjoge2Nob2ljZXM6IFtcIkl0ZW0gMVwiLCBcIkl0ZW0gMlwiLCBcIkl0ZW0gM1wiXX0sXHJcbiAgICAgICAgaHRtbFRlbXBsYXRlOiBcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJyBzdHlsZT0nd2lkdGg6IDEwMCU7Jz48L3NlbGVjdD5cIixcclxuICAgICAgICBpc0ZpdCA6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7IHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09ICd0YWdib3gnOyAgfSxcclxuICAgICAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwidGFnYm94XCIsIFt7bmFtZTpcImhhc090aGVyXCIsIHZpc2libGU6IGZhbHNlfV0sIG51bGwsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcInNlbGVjdFwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcInNlbGVjdFwiKTtcclxuICAgICAgICAgICAgJGVsLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICAgICAgdGFnczogXCJ0cnVlXCIsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogXCJjbGFzc2ljXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICRlbC52YWwocXVlc3Rpb24udmFsdWUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciB1cGRhdGVDaG9pY2VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwuc2VsZWN0Mih7ZGF0YTogcXVlc3Rpb24udmlzaWJsZUNob2ljZXMubWFwKGZ1bmN0aW9uKGNob2ljZSkgeyByZXR1cm4geyBpZDogY2hvaWNlLnZhbHVlLCB0ZXh0OiBjaG9pY2UudGV4dCB9OyB9KX0pO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcXVlc3Rpb24uY2hvaWNlc0NoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZUNob2ljZXM7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICAgICAgICAkZWwub24oJ3NlbGVjdDI6c2VsZWN0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gKHF1ZXN0aW9uLnZhbHVlIHx8IFtdKS5jb25jYXQoZS5wYXJhbXMuZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkZWwub24oJ3NlbGVjdDI6dW5zZWxlY3QnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gKHF1ZXN0aW9uLnZhbHVlIHx8IFtdKS5pbmRleE9mKGUucGFyYW1zLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHF1ZXN0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgICAgICAgICBcclxuICAgICAgICAgICAgdXBkYXRlQ2hvaWNlcygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICAkKGVsKS5maW5kKFwic2VsZWN0XCIpLm9mZignc2VsZWN0MjpzZWxlY3QnKS5zZWxlY3QyKFwiZGVzdHJveVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NlbGVjdDItdGFnYm94LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCIsImltcG9ydCAqIGFzIFNpZ25hdHVyZVBhZCBmcm9tICdzaWduYXR1cmVfcGFkJztcclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwic2lnbmF0dXJlcGFkXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiU2lnbmF0dXJlIHBhZFwiLFxyXG4gICAgICAgIGljb25OYW1lOiBcImljb24tc2lnbmF0dXJlcGFkXCIsXHJcbiAgICAgICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHlwZW9mIFNpZ25hdHVyZVBhZCAhPSBcInVuZGVmaW5lZFwiOyB9LFxyXG4gICAgICAgIHBlbkNvbG9yOiBcIjFhYjM5NFwiLFxyXG4gICAgICAgIGlzRml0IDogZnVuY3Rpb24ocXVlc3Rpb24pIHsgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gJ3NpZ25hdHVyZXBhZCc7IH0sXHJcbiAgICAgICAgaHRtbFRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXHJcbiAgICAgICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInNpZ25hdHVyZXBhZFwiLCBbXSwgbnVsbCwgXCJlbXB0eVwiKTtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcInNpZ25hdHVyZXBhZFwiLCBbe25hbWU6IFwid2lkdGg6bnVtYmVyXCIsIGRlZmF1bHQ6IDMwMH0sIHtuYW1lOiBcImhlaWdodDpudW1iZXJcIiwgZGVmYXVsdDogMjAwfV0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgcm9vdFdpZGdldCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoICA9IHF1ZXN0aW9uLndpZHRoO1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gcXVlc3Rpb24uaGVpZ2h0OyAgICAgICAgXHJcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICAgICAgICAgIHZhciBzaWduYXR1cmVQYWQgPSBuZXcgU2lnbmF0dXJlUGFkKGNhbnZhcyk7XHJcbiAgICAgICAgICAgIGlmKHF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgICAgIHNpZ25hdHVyZVBhZC5vZmYoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaWduYXR1cmVQYWQucGVuQ29sb3IgPSByb290V2lkZ2V0LnBlbkNvbG9yO1xyXG4gICAgICAgICAgICBzaWduYXR1cmVQYWQub25FbmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHNpZ25hdHVyZVBhZC5mcm9tRGF0YVVSTChxdWVzdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgICAgICAgICAgcXVlc3Rpb24uc2lnbmF0dXJlUGFkID0gc2lnbmF0dXJlUGFkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICBpZihxdWVzdGlvbi5zaWduYXR1cmVQYWQpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnNpZ25hdHVyZVBhZC5vZmYoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQgPSBudWxsO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NpZ25hdHVyZV9wYWQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU2lnbmF0dXJlUGFkXCIsXCJjb21tb25qczJcIjpcInNpZ25hdHVyZV9wYWRcIixcImNvbW1vbmpzXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJhbWRcIjpcInNpZ25hdHVyZV9wYWRcIn1cbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSB7XHJcbiAgICAgICAgbmFtZTogXCJzb3J0YWJsZWxpc3RcIixcclxuICAgICAgICB0aXRsZTogXCJTb3J0YWJsZSBsaXN0XCIsXHJcbiAgICAgICAgaWNvbk5hbWU6IFwiaWNvbi1zb3J0YWJsZWxpc3RcIixcclxuICAgICAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7IHJldHVybiB0eXBlb2YgU29ydGFibGUgIT0gXCJ1bmRlZmluZWRcIjsgfSxcclxuICAgICAgICBkZWZhdWx0SlNPTjoge2Nob2ljZXM6IFtcIkl0ZW0gMVwiLCBcIkl0ZW0gMlwiLCBcIkl0ZW0gM1wiXX0sXHJcbiAgICAgICAgYXJlYVN0eWxlOiBcImJvcmRlcjogMXB4IHNvbGlkICMxYWIzOTQ7IHdpZHRoOjEwMCU7IG1pbkhlaWdodDo1MHB4XCIsXHJcbiAgICAgICAgaXRlbVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6IzFhYjM5NDtjb2xvcjojZmZmO21hcmdpbjo1cHg7cGFkZGluZzoxMHB4O1wiLFxyXG4gICAgICAgIGlzRml0IDogZnVuY3Rpb24ocXVlc3Rpb24pIHsgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gJ3NvcnRhYmxlbGlzdCc7IH0sXHJcbiAgICAgICAgaHRtbFRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXHJcbiAgICAgICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInNvcnRhYmxlbGlzdFwiLCBbe25hbWU6XCJoYXNPdGhlclwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOlwic3RvcmVPdGhlcnNBc0NvbW1lbnRcIiwgdmlzaWJsZTogZmFsc2V9XSwgbnVsbCwgXCJjaGVja2JveFwiKTtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJzb3J0YWJsZWxpc3RcIiwge25hbWU6IFwiZW1wdHlUZXh0XCIsIGRlZmF1bHQ6IFwiTW92ZSBpdGVtcyBoZXJlLlwifSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcclxuICAgICAgICAgICAgZWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdmFyIGVtcHR5RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgdmFyIHNvdXJjZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcmVzdWx0RWwuc3R5bGUuY3NzVGV4dCA9IHJvb3RXaWRnZXQuYXJlYVN0eWxlO1xyXG4gICAgICAgICAgICBlbXB0eUVsLmlubmVySFRNTCA9IHF1ZXN0aW9uLmVtcHR5VGV4dDtcclxuICAgICAgICAgICAgcmVzdWx0RWwuYXBwZW5kQ2hpbGQoZW1wdHlFbCk7XHJcbiAgICAgICAgICAgIHNvdXJjZUVsLnN0eWxlLmNzc1RleHQgPSByb290V2lkZ2V0LmFyZWFTdHlsZTtcclxuICAgICAgICAgICAgc291cmNlRWwuc3R5bGUubWFyZ2luVG9wID0gXCIxMHB4XCI7XHJcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKHJlc3VsdEVsKTtcclxuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoc291cmNlRWwpO1xyXG4gICAgICAgICAgICB2YXIgaGFzVmFsdWVJblJlc3VsdHMgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXMgPSBxdWVzdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHJlcykpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpICsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNbaV0gPT0gdmFsKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICByZXN1bHRFbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0RWwuYXBwZW5kQ2hpbGQoZW1wdHlFbCk7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VFbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdhc0luUmVzdWx0cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24uYWN0aXZlQ2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uKGNob2ljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpblJlc3V0bHMgPSBoYXNWYWx1ZUluUmVzdWx0cyhjaG9pY2UudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdhc0luUmVzdWx0cyA9IHdhc0luUmVzdWx0cyB8fCBpblJlc3V0bHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNyY0VsID0gaW5SZXN1dGxzID8gcmVzdWx0RWwgOiBzb3VyY2VFbDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsLmlubmVySFRNTCA9IFwiPGRpdiBzdHlsZT0nXCIgKyByb290V2lkZ2V0Lml0ZW1TdHlsZSArICBcIic+XCIgKyBjaG9pY2UudGV4dCArIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RWwuZGF0YXNldFtcInZhbHVlXCJdID0gY2hvaWNlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNyY0VsLmFwcGVuZENoaWxkKG5ld0VsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZW1wdHlFbC5zdHlsZS5kaXNwbGF5ID0gd2FzSW5SZXN1bHRzID8gIFwibm9uZVwiIDogXCJcIjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgU29ydGFibGUuY3JlYXRlKCQocmVzdWx0RWwpWzBdLCB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IDE1MCxcclxuICAgICAgICAgICAgICAgIGdyb3VwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RvcDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHB1bGw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHV0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Tb3J0OiBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQudG8uY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5RWwuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgZXZ0LnRvLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChldnQudG8uY2hpbGRyZW5baV0uZGF0YXNldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFNvcnRhYmxlLmNyZWF0ZSgkKHNvdXJjZUVsKVswXSwge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTAsXHJcbiAgICAgICAgICAgICAgICBncm91cDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0b3AzJyxcclxuICAgICAgICAgICAgICAgICAgICBwdWxsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHB1dDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NvcnRhYmxlanMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU29ydGFibGVcIixcImNvbW1vbmpzMlwiOlwic29ydGFibGVqc1wiLFwiY29tbW9uanNcIjpcInNvcnRhYmxlanNcIixcImFtZFwiOlwic29ydGFibGVqc1wifVxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gICAgdmFyIHdpZGdldCA9IHtcclxuICAgICAgICBuYW1lOiBcImVkaXRvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkVkaXRvclwiLFxyXG4gICAgICAgIGljb25OYW1lOiBcImljb24tZWRpdG9yXCIsXHJcbiAgICAgICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHlwZW9mIENLRURJVE9SICE9IFwidW5kZWZpbmVkXCI7IH0sXHJcbiAgICAgICAgaXNGaXQgOiBmdW5jdGlvbihxdWVzdGlvbikgeyBcclxuICAgICAgICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gJ2VkaXRvcic7IFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaHRtbFRlbXBsYXRlOiBcIjx0ZXh0YXJlYSByb3dzPScxMCcgY29scz0nODAnIHN0eWxlOiB7d2lkdGg6JzEwMCUnfT48L3RleHRhcmVhPlwiLFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJlZGl0b3JcIiwgW10sIG51bGwsIFwiZW1wdHlcIik7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwiZWRpdG9yXCIsIHtuYW1lOiBcImhlaWdodFwiLCBkZWZhdWx0OiAzMDB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgQ0tFRElUT1IuZWRpdG9yQ29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmxhbmd1YWdlID0gJ2VzJztcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5oZWlnaHQgPSBxdWVzdGlvbi5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjb25maWcudG9vbGJhckNhbkNvbGxhcHNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGVkaXRvciA9IENLRURJVE9SLnJlcGxhY2UoZWwpO1xyXG4gICAgICAgICAgICB2YXIgaXNWYWx1ZUNoYW5naW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzVmFsdWVDaGFuZ2luZykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yLnNldERhdGEocXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBlZGl0b3Iub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkgeyBcclxuICAgICAgICAgICAgICAgIGlzVmFsdWVDaGFuZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGVkaXRvci5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jay1lZGl0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxMSIsImV4cG9ydCB7ZGVmYXVsdCBhcyBpY2hlY2t9IGZyb20gXCIuL2ljaGVjay5qc1wiO1xyXG5leHBvcnQge2RlZmF1bHQgYXMgc2VsZWN0Mn0gZnJvbSBcIi4vc2VsZWN0Mi5qc1wiO1xyXG5leHBvcnQge2RlZmF1bHQgYXMgaW1hZ2VwaWNrZXJ9IGZyb20gXCIuL2ltYWdlLXBpY2tlci5qc1wiO1xyXG5leHBvcnQge2RlZmF1bHQgYXMgaW5wdXRtYXNrfSBmcm9tIFwiLi9pbnB1dG1hc2suanNcIjtcclxuZXhwb3J0IHtkZWZhdWx0IGFzIGpxdWVyeWJhcnJhdGluZ30gZnJvbSBcIi4vanF1ZXJ5LWJhci1yYXRpbmcuanNcIjtcclxuZXhwb3J0IHtkZWZhdWx0IGFzIGpxdWVyeXVpZGF0ZXBpY2tlcn0gZnJvbSBcIi4vanF1ZXJ5LXVpLWRhdGVwaWNrZXIuanNcIjtcclxuZXhwb3J0IHtkZWZhdWx0IGFzIG5vdWlzbGlkZXJ9IGZyb20gXCIuL25vdWlzbGlkZXIuanNcIjtcclxuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdDJ0YWdib3h9IGZyb20gXCIuL3NlbGVjdDItdGFnYm94LmpzXCI7XHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzaWduYXR1cmVwYWR9IGZyb20gXCIuL3NpZ25hdHVyZV9wYWQuanNcIjtcclxuZXhwb3J0IHtkZWZhdWx0IGFzIHNvcnRhYmxlanN9IGZyb20gXCIuL3NvcnRhYmxlanMuanNcIjtcclxuZXhwb3J0IHtkZWZhdWx0IGFzIGNrZWRpdG9yfSBmcm9tIFwiLi9jay1lZGl0b3IuanNcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdXJ2ZXlqcy13aWRnZXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9