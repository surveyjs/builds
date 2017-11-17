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
        widgetIsLoaded: function() { return !!$.fn.barrating; },
        defaultJSON: {choices: [1, 2, 3, 4, 5]},
        isFit : function(question) { return typeof $ == 'function' && !!$.fn.barrating; },
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
        htmlTemplate: "<input class='widget-datepicker' type='text' style='width: 100%;'>",
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
                    newEl["data-value"] = choice.value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5YTgxNGIxN2I1ZTI2OTIyN2RkYSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIklucHV0bWFza1wiLFwiY29tbW9uanMyXCI6XCJpbnB1dG1hc2tcIixcImNvbW1vbmpzXCI6XCJpbnB1dG1hc2tcIixcImFtZFwiOlwiaW5wdXRtYXNrXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcXVlcnktYmFyLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5LXVpLWRhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vdWlzbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm5vVWlTbGlkZXJcIixcImNvbW1vbmpzMlwiOlwibm91aXNsaWRlclwiLFwiY29tbW9uanNcIjpcIm5vdWlzbGlkZXJcIixcImFtZFwiOlwibm91aXNsaWRlclwifSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi10YWdib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpZ25hdHVyZV9wYWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlNpZ25hdHVyZVBhZFwiLFwiY29tbW9uanMyXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJjb21tb25qc1wiOlwic2lnbmF0dXJlX3BhZFwiLFwiYW1kXCI6XCJzaWduYXR1cmVfcGFkXCJ9Iiwid2VicGFjazovLy8uL3NyYy9zb3J0YWJsZWpzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJTb3J0YWJsZVwiLFwiY29tbW9uanMyXCI6XCJzb3J0YWJsZWpzXCIsXCJjb21tb25qc1wiOlwic29ydGFibGVqc1wiLFwiYW1kXCI6XCJzb3J0YWJsZWpzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9jay1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleWpzLXdpZGdldHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSwrQzs7Ozs7OztBQ0FBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0RBQWdELEVBQUU7QUFDdEYsb0M7QUFDQSx1Q0FBdUMsaUU7QUFDdkMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixF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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDMEI7QUFDQztBQUNJO0FBQ0Y7QUFDTTtBQUNHO0FBQ1I7QUFDRztBQUNEO0FBQ0YiLCJmaWxlIjoic3VydmV5anMtd2lkZ2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImlucHV0bWFza1wiKSwgcmVxdWlyZShcIm5vdWlzbGlkZXJcIiksIHJlcXVpcmUoXCJzaWduYXR1cmVfcGFkXCIpLCByZXF1aXJlKFwic29ydGFibGVqc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInN1cnZleWpzLXdpZGdldHNcIiwgW1wianF1ZXJ5XCIsIFwiaW5wdXRtYXNrXCIsIFwibm91aXNsaWRlclwiLCBcInNpZ25hdHVyZV9wYWRcIiwgXCJzb3J0YWJsZWpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1cnZleWpzLXdpZGdldHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJpbnB1dG1hc2tcIiksIHJlcXVpcmUoXCJub3Vpc2xpZGVyXCIpLCByZXF1aXJlKFwic2lnbmF0dXJlX3BhZFwiKSwgcmVxdWlyZShcInNvcnRhYmxlanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN1cnZleWpzLXdpZGdldHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJJbnB1dG1hc2tcIl0sIHJvb3RbXCJub1VpU2xpZGVyXCJdLCByb290W1wiU2lnbmF0dXJlUGFkXCJdLCByb290W1wiU29ydGFibGVcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDlhODE0YjE3YjVlMjY5MjI3ZGRhIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBcImlyYWRpb19zcXVhcmUtYmx1ZVwiLFxyXG4gICAgICAgIG5hbWU6IFwiaWNoZWNrXCIsXHJcbiAgICAgICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHlwZW9mICQgPT0gJ2Z1bmN0aW9uJyAmJiAhISQuZm4uaUNoZWNrOyB9LFxyXG4gICAgICAgIGlzRml0IDogZnVuY3Rpb24ocXVlc3Rpb24pIHsgIFxyXG4gICAgICAgICAgICB2YXIgdCA9IHF1ZXN0aW9uLmdldFR5cGUoKTsgcmV0dXJuIHQgPT09ICdyYWRpb2dyb3VwJyB8fCB0ID09PSAnY2hlY2tib3gnIHx8IHQgPT09ICdtYXRyaXgnOyBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzRGVmYXVsdFJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcclxuICAgICAgICAgICAgdmFyICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICAkZWwuZmluZCgnaW5wdXQnKS5kYXRhKHtcImlDaGVja1wiOiB1bmRlZmluZWR9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICRlbC5maW5kKCdpbnB1dCcpLmlDaGVjayh7XHJcbiAgICAgICAgICAgIGNoZWNrYm94Q2xhc3M6IHJvb3RXaWRnZXQuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICByYWRpb0NsYXNzOiByb290V2lkZ2V0LmNsYXNzTmFtZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYocXVlc3Rpb24uZ2V0VHlwZSgpICE9IFwibWF0cml4XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkZWwuZmluZChcImlucHV0W3ZhbHVlPVwiICsgcXVlc3Rpb24udmFsdWUgKyBcIl1cIikuaUNoZWNrKCdjaGVjaycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5nZW5lcmF0ZWRWaXNpYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uKHJvdywgaW5kZXgsIHJvd3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGVsKS5maW5kKFwiaW5wdXRbbmFtZT0nXCIgKyByb3cuZnVsbE5hbWUgICsgXCInXVt2YWx1ZT1cIiArIHJvdy52YWx1ZSArIFwiXVwiKS5pQ2hlY2soJ2NoZWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGVsLmZpbmQoJ2lucHV0Jykub24oJ2lmQ2hlY2tlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZihxdWVzdGlvbi5nZXRUeXBlKCkgIT0gXCJtYXRyaXhcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5nZW5lcmF0ZWRWaXNpYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uKHJvdywgaW5kZXgsIHJvd3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5mdWxsTmFtZSA9PT0gZXZlbnQudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gc2VsZWN0O1xyXG4gICAgICAgICAgICBzZWxlY3QoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgdmFyICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICAkZWwuZmluZCgnaW5wdXQnKS5pQ2hlY2soJ2Rlc3Ryb3knKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwidHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pY2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEwIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgICAgIGFjdGl2YXRlZEJ5OiBcInByb3BlcnR5XCIsXHJcbiAgICAgICAgbmFtZTogXCJzZWxlY3QyXCIsXHJcbiAgICAgICAgaHRtbFRlbXBsYXRlOiBcIjxzZWxlY3Qgc3R5bGU9J3dpZHRoOiAxMDAlOyc+PC9zZWxlY3Q+XCIsXHJcbiAgICAgICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHlwZW9mICQgPT0gJ2Z1bmN0aW9uJyAmJiAhISQuZm4uc2VsZWN0MjsgfSxcclxuICAgICAgICBpc0ZpdCA6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmKHdpZGdldC5hY3RpdmF0ZWRCeSA9PSBcInByb3BlcnR5XCIpIHJldHVybiBxdWVzdGlvbltcInJlbmRlckFzXCJdID09PSAnc2VsZWN0MicgJiYgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnZHJvcGRvd24nOyBcclxuICAgICAgICAgICAgaWYod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwidHlwZVwiKSByZXR1cm4gIHR5cGVvZiBTZWxlY3QyICE9PSB1bmRlZmluZWQgJiYgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnZHJvcGRvd24nOyBcclxuICAgICAgICAgICAgaWYod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwiY3VzdG9tdHlwZVwiKSByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnc2VsZWN0Mic7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMud2lkZ2V0SXNMb2FkZWQoKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB3aWRnZXQuYWN0aXZhdGVkQnkgPSBhY3RpdmF0ZWRCeTtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEucmVtb3ZlUHJvcGVydHkoXCJkcm9wZG93blwiLCBcInJlbmRlckFzXCIpO1xyXG4gICAgICAgICAgICBpZihhY3RpdmF0ZWRCeSA9PSBcInByb3BlcnR5XCIpIHtcclxuICAgICAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwiZHJvcGRvd25cIiwge25hbWU6IFwicmVuZGVyQXNcIiwgZGVmYXVsdDogXCJzdGFuZGFyZFwiLCBjaG9pY2VzOiBbXCJzdGFuZGFyZFwiLCBcInNlbGVjdDJcIl19KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihhY3RpdmF0ZWRCeSA9PSBcImN1c3RvbXR5cGVcIikge1xyXG4gICAgICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJzZWxlY3QyXCIsIFtdLCBudWxsLCBcImRyb3Bkb3duXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcInNlbGVjdFwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcInNlbGVjdFwiKTtcclxuICAgICAgICAgICAgdmFyIG90aGVyc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBvdGhlcnNFbC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgIG90aGVyc0VsLnN0eWxlLm1hcmdpblRvcCA9IFwiM3B4XCI7XHJcbiAgICAgICAgICAgIG90aGVyc0VsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgb3RoZXJzRWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgJGVsLnBhcmVudCgpLmdldCgwKS5hcHBlbmRDaGlsZChvdGhlcnNFbCk7XHJcbiAgICAgICAgICAgIHZhciB3aWRnZXQgPSAkZWwuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgICAgICB0aGVtZTogXCJjbGFzc2ljXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICRlbC52YWwocXVlc3Rpb24udmFsdWUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICBvdGhlcnNFbC5zdHlsZS5kaXNwbGF5ID0gIXF1ZXN0aW9uLmlzT3RoZXJTZWxlY3RlZCA/IFwibm9uZVwiOiBcIlwiO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgdXBkYXRlQ29tbWVudEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIG90aGVyc0VsLnZhbHVlID0gcXVlc3Rpb24uY29tbWVudCA/IHF1ZXN0aW9uLmNvbW1lbnQgOiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvdGhlcnNFbENoYW5nZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLmNvbW1lbnQgPSBvdGhlcnNFbC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdXBkYXRlQ2hvaWNlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJGVsLnNlbGVjdDIoe2RhdGE6IHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzLm1hcChmdW5jdGlvbihjaG9pY2UpIHsgcmV0dXJuIHsgaWQ6IGNob2ljZS52YWx1ZSwgdGV4dDogY2hvaWNlLnRleHQgfTsgfSl9KTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQ29tbWVudEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBxdWVzdGlvbi5jaG9pY2VzQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlQ2hvaWNlcztcclxuICAgICAgICAgICAgdXBkYXRlQ2hvaWNlcygpO1xyXG4gICAgICAgICAgICAkZWwub24oJ3NlbGVjdDI6c2VsZWN0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvdGhlcnNFbC5vbmNoYW5nZSA9IG90aGVyc0VsQ2hhbmdlZDtcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLmNvbW1lbnRDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVDb21tZW50SGFuZGxlcjtcclxuICAgICAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNvbW1lbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgICQoZWwpLmZpbmQoXCJzZWxlY3RcIikub2ZmKCdzZWxlY3QyOnNlbGVjdCcpLnNlbGVjdDIoXCJkZXN0cm95XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0KTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZWxlY3QyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSB7XHJcbiAgICAgICAgbmFtZTogXCJpbWFnZXBpY2tlclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkltYWdlIHBpY2tlclwiLFxyXG4gICAgICAgIGljb25OYW1lOiBcImljb24taW1hZ2VwaWNrZXJcIixcclxuICAgICAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7IHJldHVybiB0eXBlb2YgJCA9PSAnZnVuY3Rpb24nICYmICEhJC5mbi5pbWFnZXBpY2tlcjsgfSxcclxuICAgICAgICBpc0ZpdCA6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7IHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09ICdpbWFnZXBpY2tlcic7IH0sXHJcbiAgICAgICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJpbWFnZWl0ZW12YWx1ZXNcIiwgW3tuYW1lOiBcImltYWdlTGlua1wifV0sIG51bGwsIFwiaXRlbXZhbHVlXCIpO1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImltYWdlcGlja2VyXCIsIFt7bmFtZTogXCJjaG9pY2VzOmltYWdlaXRlbXZhbHVlc1wiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBTdXJ2ZXkuSXRlbVZhbHVlLmdldERhdGEob2JqLmNob2ljZXMpOyB9LCBvblNldFZhbHVlOiBmdW5jdGlvbiAob2JqLCB2YWx1ZSkgeyBvYmouY2hvaWNlcyA9IHZhbHVlOyB9fSwgXHJcbiAgICAgICAgICAgICAgICB7bmFtZTpcInNob3dMYWJlbDpib29sZWFuXCIsIGRlZmF1bHQ6IGZhbHNlfSwge25hbWU6XCJoYXNPdGhlclwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOiBcIm90aGVyVGV4dFwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOiBcIm9wdGlvbnNDYXB0aW9uXCIsIHZpc2libGU6IGZhbHNlfSwgXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJvdGhlckVycm9yVGV4dFwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOiBcInN0b3JlT3RoZXJzQXNDb21tZW50XCIsIHZpc2libGU6IGZhbHNlfSwge25hbWU6IFwicmVuZGVyQXNcIiwgdmlzaWJsZTogZmFsc2V9XSwgbnVsbCwgXCJkcm9wZG93blwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9ICRlbC5maW5kKCdvcHRpb24nKTtcclxuICAgICAgICAgICAgdmFyIGNob2ljZXMgPSBxdWVzdGlvbi5jaG9pY2VzO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaT0xOyBpIDwgb3B0aW9ucy5sZW5ndGggJiYgaS0xIDwgY2hvaWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgJChvcHRpb25zW2ldKS5kYXRhKFwiaW1nU3JjXCIsIGNob2ljZXNbaS0xXS5pbWFnZUxpbmspO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uc1tpXS5zZWxlY3RlZCA9IHF1ZXN0aW9uLnZhbHVlID09IG9wdGlvbnNbaV0udmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGVsLmltYWdlcGlja2VyKHtcclxuICAgICAgICAgICAgICAgIGhpZGVfc2VsZWN0IDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dfbGFiZWwgIDogcXVlc3Rpb24uc2hvd0xhYmVsLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZ1bmN0aW9uKG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IG9wdHMucGlja2VyLnNlbGVjdFswXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgdmFyICRlbCA9ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgICAgICRlbC5kYXRhKCdwaWNrZXInKS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1hZ2UtcGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA5IiwiaW1wb3J0IElucHV0bWFzayBmcm9tIFwiaW5wdXRtYXNrXCI7XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gICAgdmFyIHdpZGdldCA9IHtcclxuICAgICAgICBuYW1lOiBcIm1hc2tlZGl0XCIsXHJcbiAgICAgICAgbnVtZXJpY0dyb3VwU2VwYXJhdG9yOiAnLCcsXHJcbiAgICAgICAgbnVtZXJpY0F1dG9Hcm91cDogdHJ1ZSxcclxuICAgICAgICBudW1lcmljRGlnaXRzOiAyLFxyXG4gICAgICAgIG51bWVyaWNEaWdpdHNPcHRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgbnVtZXJpY1ByZWZpeDogJyQnLFxyXG4gICAgICAgIG51bWVyaWNQbGFjZWhvbGRlcjogJzAnLFxyXG4gICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHsgcmV0dXJuIHR5cGVvZiBJbnB1dG1hc2sgIT0gXCJ1bmRlZmluZWRcIjsgfSxcclxuICAgICAgICBpc0ZpdCA6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7IFxyXG4gICAgICAgICAgICBpZihxdWVzdGlvbi5nZXRUeXBlKCkgPT0gXCJtdWx0aXBsZXRleHRcIikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT0gXCJ0ZXh0XCIgJiYgKHF1ZXN0aW9uLmlucHV0TWFzayAhPSBcIm5vbmVcIiB8fCBxdWVzdGlvbi5pbnB1dEZvcm1hdCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0RlZmF1bHRSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICAgICAgICBpZihTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5maW5kUHJvcGVydHkoXCJ0ZXh0XCIsIFwiaW5wdXRNYXNrXCIpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gW1wiaW5wdXRGb3JtYXRcIiwge25hbWU6IFwiaW5wdXRNYXNrXCIsIGRlZmF1bHQ6IFwibm9uZVwiLCBjaG9pY2VzOiBbXCJub25lXCIsIFwiZGF0ZXRpbWVcIiwgXCJjdXJyZW5jeVwiLCBcImRlY2ltYWxcIiwgXCJlbWFpbFwiLCBcInBob25lXCIsIFwiaXBcIl19XTtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcInRleHRcIiwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJtYXRyaXhkcm9wZG93bmNvbHVtblwiLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcIm11bHRpcGxldGV4dGl0ZW1cIiwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcHBseUlucHV0TWFzazogZnVuY3Rpb24oc3VydmV5RWxlbWVudCwgZWwpIHtcclxuICAgICAgICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgbWFzayA9IHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrICE9IFwibm9uZVwiID8gc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgOiBzdXJ2ZXlFbGVtZW50LmlucHV0Rm9ybWF0O1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICBpZihzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayAhPSBcIm5vbmVcIikgb3B0aW9ucy5pbnB1dEZvcm1hdCA9IHN1cnZleUVsZW1lbnQuaW5wdXRGb3JtYXQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImN1cnJlbmN5XCIgfHwgc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgPT0gXCJkZWNpbWFsXCIpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZ3JvdXBTZXBhcmF0b3IgPSByb290V2lkZ2V0Lm51bWVyaWNHcm91cFNlcGFyYXRvcjtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuYXV0b0dyb3VwID0gcm9vdFdpZGdldC5udW1lcmljQXV0b0dyb3VwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiY3VycmVuY3lcIikge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kaWdpdHMgPSByb290V2lkZ2V0Lm51bWVyaWNEaWdpdHM7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmRpZ2l0c09wdGlvbmFsID0gcm9vdFdpZGdldC5udW1lcmljRGlnaXRzT3B0aW9uYWw7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnByZWZpeCA9IHJvb3RXaWRnZXQubnVtZXJpY1ByZWZpeDtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMucGxhY2Vob2xkZXIgPSByb290V2lkZ2V0Lm51bWVyaWNQbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgPT0gXCJkYXRldGltZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBtYXNrID0gc3VydmV5RWxlbWVudC5pbnB1dEZvcm1hdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgSW5wdXRtYXNrKG1hc2ssIG9wdGlvbnMpLm1hc2soZWwpO1xyXG5cclxuICAgICAgICAgICAgZWwub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc3VydmV5RWxlbWVudC5jdXN0b21XaWRnZXREYXRhLmlzTmVlZFJlbmRlciA9IHRydWU7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdXBkYXRlSGFuZGxlciA9IGZ1bmN0aW9uKCkgeyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZWwudmFsdWUgPSB0eXBlb2Ygc3VydmV5RWxlbWVudC52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiXCIgOiBzdXJ2ZXlFbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdXJ2ZXlFbGVtZW50LnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlSGFuZGxlcjtcclxuICAgICAgICAgICAgdXBkYXRlSGFuZGxlcigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICBpZihxdWVzdGlvbi5nZXRUeXBlKCkgIT0gXCJtdWx0aXBsZXRleHRcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcImlucHV0XCIpIHx8IGVsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUlucHV0TWFzayhxdWVzdGlvbiwgaW5wdXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXN0aW9uLml0ZW1zLmxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcXVlc3Rpb24uaXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5pbnB1dE1hc2sgIT0gXCJub25lXCIgfHwgaXRlbS5pbnB1dEZvcm1hdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSAgZWwucXVlcnlTZWxlY3RvcihcIiNcIiArIGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlJbnB1dE1hc2soaXRlbSwgaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSB8fCBlbDtcclxuICAgICAgICAgICAgaW5wdXQuaW5wdXRtYXNrLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0KTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbnB1dG1hc2suanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIklucHV0bWFza1wiLFwiY29tbW9uanMyXCI6XCJpbnB1dG1hc2tcIixcImNvbW1vbmpzXCI6XCJpbnB1dG1hc2tcIixcImFtZFwiOlwiaW5wdXRtYXNrXCJ9XG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSB7XHJcbiAgICAgICAgbmFtZTogXCJiYXJyYXRpbmdcIixcclxuICAgICAgICB0aXRsZTogXCJCYXIgcmF0aW5nXCIsXHJcbiAgICAgICAgaWNvbk5hbWU6IFwiaWNvbi1iYXJyYXRpbmdcIixcclxuICAgICAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7IHJldHVybiAhISQuZm4uYmFycmF0aW5nOyB9LFxyXG4gICAgICAgIGRlZmF1bHRKU09OOiB7Y2hvaWNlczogWzEsIDIsIDMsIDQsIDVdfSxcclxuICAgICAgICBpc0ZpdCA6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7IHJldHVybiB0eXBlb2YgJCA9PSAnZnVuY3Rpb24nICYmICEhJC5mbi5iYXJyYXRpbmc7IH0sXHJcbiAgICAgICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJiYXJyYXRpbmdcIiwgWyB7bmFtZTogXCJzaG93VmFsdWVzOmJvb2xlYW5cIiwgZGVmYXVsdDogZmFsc2V9LCBcclxuICAgICAgICAgICAge25hbWU6XCJoYXNPdGhlclwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOiBcIm90aGVyVGV4dFwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOiBcIm9wdGlvbnNDYXB0aW9uXCIsIHZpc2libGU6IGZhbHNlfSwgXHJcbiAgICAgICAgICAgIHtuYW1lOiBcIm90aGVyRXJyb3JUZXh0XCIsIHZpc2libGU6IGZhbHNlfSwge25hbWU6IFwic3RvcmVPdGhlcnNBc0NvbW1lbnRcIiwgdmlzaWJsZTogZmFsc2V9LCB7bmFtZTogXCJyZW5kZXJBc1wiLCB2aXNpYmxlOiBmYWxzZX1dLCBudWxsLCBcImRyb3Bkb3duXCIpO1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImJhcnJhdGluZ1wiLCB7bmFtZTogXCJyYXRpbmdUaGVtZVwiLCBkZWZhdWx0OiBcImZvbnRhd2Vzb21lLXN0YXJzXCIsIGNob2ljZXM6IFtcImZvbnRhd2Vzb21lLXN0YXJzXCIsIFwiY3NzLXN0YXJzXCIsIFwiYmFycy1waWxsXCIsIFwiYmFycy0xdG8xMFwiLCBcImJhcnMtbW92aWVcIiwgXCJiYXJzLXNxdWFyZVwiLCBcImJhcnMtcmV2ZXJzZWRcIiwgXCJiYXJzLWhvcml6b250YWxcIiwgXCJib290c3RyYXAtc3RhcnNcIiwgXCJmb250YXdlc29tZS1zdGFycy1vXCJdfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcInNlbGVjdFwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcInNlbGVjdFwiKTtcclxuICAgICAgICAgICAgJGVsLmJhcnJhdGluZygnc2hvdycsIHtcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBxdWVzdGlvbi5yYXRpbmdUaGVtZSxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxSYXRpbmc6IHF1ZXN0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd1ZhbHVlczogcXVlc3Rpb24uc2hvd1ZhbHVlcyxcclxuICAgICAgICAgICAgICAgIHNob3dTZWxlY3RlZFJhdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24odmFsdWUsIHRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoZWwpLmZpbmQoJ3NlbGVjdCcpLmJhcnJhdGluZygnc2V0JywgcXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICAgICAgICAkZWwuYmFycmF0aW5nKCdkZXN0cm95Jyk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanF1ZXJ5LWJhci1yYXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDgiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gICAgdmFyIHdpZGdldCA9IHtcclxuICAgICAgICBuYW1lOiBcImRhdGVwaWNrZXJcIixcclxuICAgICAgICB0aXRsZTogXCJEYXRlIHBpY2tlclwiLFxyXG4gICAgICAgIGljb25OYW1lOiBcImljb24tZGF0ZXBpY2tlclwiLFxyXG4gICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHsgcmV0dXJuIHR5cGVvZiAkID09ICdmdW5jdGlvbicgJiYgISEkLmZuLmRhdGVwaWNrZXI7IH0sXHJcbiAgICAgICAgaXNGaXQgOiBmdW5jdGlvbihxdWVzdGlvbikgeyByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnZGF0ZXBpY2tlcic7IH0sXHJcbiAgICAgICAgaHRtbFRlbXBsYXRlOiBcIjxpbnB1dCBjbGFzcz0nd2lkZ2V0LWRhdGVwaWNrZXInIHR5cGU9J3RleHQnIHN0eWxlPSd3aWR0aDogMTAwJTsnPlwiLFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJkYXRlcGlja2VyXCIsIFxyXG4gICAgICAgICAgICAgICAgW3tuYW1lOiBcImRhdGVGb3JtYXRcIiwgZGVmYXVsdDogXCJtbS9kZC95eVwiLCBjaG9pY2VzOiBbXCJtbS9kZC95eVwiLCBcInl5LW1tLWRkXCIsIFwiZCBNLCB5XCIsIFwiZCBNTSwgeVwiLCBcIkRELCBkIE1NLCB5eVwiLCBcIidkYXknIGQgJ29mJyBNTSAnaW4gdGhlIHllYXInIHl5XCJdfSxcclxuICAgICAgICAgICAgICAgIHtuYW1lOlwiaW5wdXRUeXBlXCIsIHZpc2libGU6IGZhbHNlfSwge25hbWU6XCJpbnB1dEZvcm1hdFwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOiBcImlucHV0TWFza1wiLCB2aXNpYmxlOiBmYWxzZX1dLCBudWxsLCBcInRleHRcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcIi53aWRnZXQtZGF0ZXBpY2tlclwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcIi53aWRnZXQtZGF0ZXBpY2tlclwiKTtcclxuICAgICAgICAgICAgdmFyIHBpY2tlcldpZGdldCA9ICRlbC5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ6IHF1ZXN0aW9uLmRhdGVGb3JtYXQsXHJcbiAgICAgICAgICAgICAgICBvcHRpb246IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgbWluRGF0ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBtYXhEYXRlOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uKGRhdGVUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBkYXRlVGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZihxdWVzdGlvbi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlcldpZGdldC5kYXRlcGlja2VyKCdzZXREYXRlJywgbmV3IERhdGUocXVlc3Rpb24udmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyV2lkZ2V0LmRhdGVwaWNrZXIoJ3NldERhdGUnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjaygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCIud2lkZ2V0LWRhdGVwaWNrZXJcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCIud2lkZ2V0LWRhdGVwaWNrZXJcIik7XHJcbiAgICAgICAgICAgICRlbC5kYXRlcGlja2VyKFwiZGVzdHJveVwiKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcXVlcnktdWktZGF0ZXBpY2tlci5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyIsImltcG9ydCBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSB7XHJcbiAgICAgICAgbmFtZTogXCJub3Vpc2xpZGVyXCIsXHJcbiAgICAgICAgdGl0bGU6IFwibm9VaVNsaWRlclwiLFxyXG4gICAgICAgIGljb25OYW1lOiBcImljb24tbm91aXNsaWRlclwiLFxyXG4gICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHsgcmV0dXJuIHR5cGVvZiBub1VpU2xpZGVyICE9IFwidW5kZWZpbmVkXCI7IH0sXHJcbiAgICAgICAgaXNGaXQgOiBmdW5jdGlvbihxdWVzdGlvbikgeyByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnbm91aXNsaWRlcic7IH0sXHJcbiAgICAgICAgaHRtbFRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXHJcbiAgICAgICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm5vdWlzbGlkZXJcIiwgW10sIG51bGwsIFwiZW1wdHlcIik7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJub3Vpc2xpZGVyXCIsIFt7bmFtZTogXCJyYW5nZU1pbjpudW1iZXJcIiwgZGVmYXVsdDogMH0sIHtuYW1lOiBcInJhbmdlTWF4Om51bWJlclwiLCBkZWZhdWx0OiAxMDB9LFxyXG4gICAgICAgICAgICB7bmFtZTogXCJkZWZhdWx0UmFuZ2VNaW46bnVtYmVyXCIsIGRlZmF1bHQ6IDMwfSwge25hbWU6IFwiZGVmYXVsdFJhbmdlTWF4Om51bWJlclwiLCBkZWZhdWx0OiA3MH1dKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0VmFsdWUgPSBxdWVzdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgaWYoIXN0YXJ0VmFsdWUgfHwgc3RhcnRWYWx1ZS5sZW5ndGggIT0gMikge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZSA9IFtxdWVzdGlvbi5kZWZhdWx0UmFuZ2VNaW4sIHF1ZXN0aW9uLmRlZmF1bHRSYW5nZU1heF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoc3RhcnRWYWx1ZVswXSA8IHF1ZXN0aW9uLnJhbmdlTWluKSBzdGFydFZhbHVlWzBdID0gcXVlc3Rpb24ucmFuZ2VNaW47XHJcbiAgICAgICAgICAgIGlmKHN0YXJ0VmFsdWVbMF0gPiBxdWVzdGlvbi5yYW5nZU1heCkgc3RhcnRWYWx1ZVswXSA9IHF1ZXN0aW9uLnJhbmdlTWF4O1xyXG4gICAgICAgICAgICBpZihzdGFydFZhbHVlWzFdIDwgc3RhcnRWYWx1ZVswXSkgc3RhcnRWYWx1ZVsxXSA9IHN0YXJ0VmFsdWVbMF07XHJcbiAgICAgICAgICAgIGlmKHN0YXJ0VmFsdWVbMV0gPiBxdWVzdGlvbi5yYW5nZU1heCkgc3RhcnRWYWx1ZVsxXSA9IHF1ZXN0aW9uLnJhbmdlTWF4O1xyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHN0YXJ0VmFsdWU7XHJcblxyXG4gICAgICAgICAgICBlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjUwcHhcIjtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9IG5vVWlTbGlkZXIuY3JlYXRlKGVsLCB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogc3RhcnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwaXBzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ3N0ZXBzJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGVwcGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbnNpdHk6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICAgICAgICAgICdtaW4nOiBxdWVzdGlvbi5yYW5nZU1pbixcclxuICAgICAgICAgICAgICAgICAgICAnbWF4JzogcXVlc3Rpb24ucmFuZ2VNYXhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5vbignc2V0JywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gc2xpZGVyLmdldCgpO1xyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5zZXQocXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBxdWVzdGlvbi5ub1VpU2xpZGVyID0gc2xpZGVyO1xyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgcXVlc3Rpb24ubm9VaVNsaWRlci5kZXN0cm95KCk7IFxyXG4gICAgICAgICAgICBxdWVzdGlvbi5ub1VpU2xpZGVyID0gbnVsbDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ub3Vpc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJub1VpU2xpZGVyXCIsXCJjb21tb25qczJcIjpcIm5vdWlzbGlkZXJcIixcImNvbW1vbmpzXCI6XCJub3Vpc2xpZGVyXCIsXCJhbWRcIjpcIm5vdWlzbGlkZXJcIn1cbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSB7XHJcbiAgICAgICAgbmFtZTogXCJ0YWdib3hcIixcclxuICAgICAgICB0aXRsZTogXCJUYWcgYm94XCIsXHJcbiAgICAgICAgaWNvbk5hbWU6IFwiaWNvbi10YWdib3hcIixcclxuICAgICAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7IHJldHVybiB0eXBlb2YgJCA9PSAnZnVuY3Rpb24nICYmICEhJC5mbi5zZWxlY3QyOyB9LFxyXG4gICAgICAgIGRlZmF1bHRKU09OOiB7Y2hvaWNlczogW1wiSXRlbSAxXCIsIFwiSXRlbSAyXCIsIFwiSXRlbSAzXCJdfSxcclxuICAgICAgICBodG1sVGVtcGxhdGU6IFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnIHN0eWxlPSd3aWR0aDogMTAwJTsnPjwvc2VsZWN0PlwiLFxyXG4gICAgICAgIGlzRml0IDogZnVuY3Rpb24ocXVlc3Rpb24pIHsgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gJ3RhZ2JveCc7ICB9LFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJ0YWdib3hcIiwgW3tuYW1lOlwiaGFzT3RoZXJcIiwgdmlzaWJsZTogZmFsc2V9XSwgbnVsbCwgXCJjaGVja2JveFwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICAgICAgICAkZWwuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgICAgICB0YWdzOiBcInRydWVcIixcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBcImNsYXNzaWNcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJGVsLnZhbChxdWVzdGlvbi52YWx1ZSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHVwZGF0ZUNob2ljZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICRlbC5zZWxlY3QyKHtkYXRhOiBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24oY2hvaWNlKSB7IHJldHVybiB7IGlkOiBjaG9pY2UudmFsdWUsIHRleHQ6IGNob2ljZS50ZXh0IH07IH0pfSk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBxdWVzdGlvbi5jaG9pY2VzQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlQ2hvaWNlcztcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgICAgICAgICRlbC5vbignc2VsZWN0MjpzZWxlY3QnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSAocXVlc3Rpb24udmFsdWUgfHwgW10pLmNvbmNhdChlLnBhcmFtcy5kYXRhLmlkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRlbC5vbignc2VsZWN0Mjp1bnNlbGVjdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSAocXVlc3Rpb24udmFsdWUgfHwgW10pLmluZGV4T2YoZS5wYXJhbXMuZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gcXVlc3Rpb24udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgIFxyXG4gICAgICAgICAgICB1cGRhdGVDaG9pY2VzKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgICQoZWwpLmZpbmQoXCJzZWxlY3RcIikub2ZmKCdzZWxlY3QyOnNlbGVjdCcpLnNlbGVjdDIoXCJkZXN0cm95XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VsZWN0Mi10YWdib3guanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IiwiaW1wb3J0ICogYXMgU2lnbmF0dXJlUGFkIGZyb20gJ3NpZ25hdHVyZV9wYWQnO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSB7XHJcbiAgICAgICAgbmFtZTogXCJzaWduYXR1cmVwYWRcIixcclxuICAgICAgICB0aXRsZTogXCJTaWduYXR1cmUgcGFkXCIsXHJcbiAgICAgICAgaWNvbk5hbWU6IFwiaWNvbi1zaWduYXR1cmVwYWRcIixcclxuICAgICAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7IHJldHVybiB0eXBlb2YgU2lnbmF0dXJlUGFkICE9IFwidW5kZWZpbmVkXCI7IH0sXHJcbiAgICAgICAgcGVuQ29sb3I6IFwiMWFiMzk0XCIsXHJcbiAgICAgICAgaXNGaXQgOiBmdW5jdGlvbihxdWVzdGlvbikgeyByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnc2lnbmF0dXJlcGFkJzsgfSxcclxuICAgICAgICBodG1sVGVtcGxhdGU6IFwiPGRpdj48L2Rpdj5cIixcclxuICAgICAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic2lnbmF0dXJlcGFkXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwic2lnbmF0dXJlcGFkXCIsIFt7bmFtZTogXCJ3aWR0aDpudW1iZXJcIiwgZGVmYXVsdDogMzAwfSwge25hbWU6IFwiaGVpZ2h0Om51bWJlclwiLCBkZWZhdWx0OiAyMDB9XSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggID0gcXVlc3Rpb24ud2lkdGg7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBxdWVzdGlvbi5oZWlnaHQ7ICAgICAgICBcclxuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgICAgICAgICAgdmFyIHNpZ25hdHVyZVBhZCA9IG5ldyBTaWduYXR1cmVQYWQoY2FudmFzKTtcclxuICAgICAgICAgICAgaWYocXVlc3Rpb24uaXNSZWFkT25seSkge1xyXG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlUGFkLm9mZigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNpZ25hdHVyZVBhZC5wZW5Db2xvciA9IHJvb3RXaWRnZXQucGVuQ29sb3I7XHJcbiAgICAgICAgICAgIHNpZ25hdHVyZVBhZC5vbkVuZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBzaWduYXR1cmVQYWQudG9EYXRhVVJMKCk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlUGFkLmZyb21EYXRhVVJMKHF1ZXN0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgICAgICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQgPSBzaWduYXR1cmVQYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIGlmKHF1ZXN0aW9uLnNpZ25hdHVyZVBhZCkge1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24uc2lnbmF0dXJlUGFkLm9mZigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnNpZ25hdHVyZVBhZCA9IG51bGw7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2lnbmF0dXJlX3BhZC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJTaWduYXR1cmVQYWRcIixcImNvbW1vbmpzMlwiOlwic2lnbmF0dXJlX3BhZFwiLFwiY29tbW9uanNcIjpcInNpZ25hdHVyZV9wYWRcIixcImFtZFwiOlwic2lnbmF0dXJlX3BhZFwifVxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gICAgdmFyIHdpZGdldCA9IHtcclxuICAgICAgICBuYW1lOiBcInNvcnRhYmxlbGlzdFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlNvcnRhYmxlIGxpc3RcIixcclxuICAgICAgICBpY29uTmFtZTogXCJpY29uLXNvcnRhYmxlbGlzdFwiLFxyXG4gICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHsgcmV0dXJuIHR5cGVvZiBTb3J0YWJsZSAhPSBcInVuZGVmaW5lZFwiOyB9LFxyXG4gICAgICAgIGRlZmF1bHRKU09OOiB7Y2hvaWNlczogW1wiSXRlbSAxXCIsIFwiSXRlbSAyXCIsIFwiSXRlbSAzXCJdfSxcclxuICAgICAgICBhcmVhU3R5bGU6IFwiYm9yZGVyOiAxcHggc29saWQgIzFhYjM5NDsgd2lkdGg6MTAwJTsgbWluSGVpZ2h0OjUwcHhcIixcclxuICAgICAgICBpdGVtU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjojMWFiMzk0O2NvbG9yOiNmZmY7bWFyZ2luOjVweDtwYWRkaW5nOjEwcHg7XCIsXHJcbiAgICAgICAgaXNGaXQgOiBmdW5jdGlvbihxdWVzdGlvbikgeyByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnc29ydGFibGVsaXN0JzsgfSxcclxuICAgICAgICBodG1sVGVtcGxhdGU6IFwiPGRpdj48L2Rpdj5cIixcclxuICAgICAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic29ydGFibGVsaXN0XCIsIFt7bmFtZTpcImhhc090aGVyXCIsIHZpc2libGU6IGZhbHNlfSwge25hbWU6XCJzdG9yZU90aGVyc0FzQ29tbWVudFwiLCB2aXNpYmxlOiBmYWxzZX1dLCBudWxsLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInNvcnRhYmxlbGlzdFwiLCB7bmFtZTogXCJlbXB0eVRleHRcIiwgZGVmYXVsdDogXCJNb3ZlIGl0ZW1zIGhlcmUuXCJ9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB2YXIgZW1wdHlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICB2YXIgc291cmNlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByZXN1bHRFbC5zdHlsZS5jc3NUZXh0ID0gcm9vdFdpZGdldC5hcmVhU3R5bGU7XHJcbiAgICAgICAgICAgIGVtcHR5RWwuaW5uZXJIVE1MID0gcXVlc3Rpb24uZW1wdHlUZXh0O1xyXG4gICAgICAgICAgICByZXN1bHRFbC5hcHBlbmRDaGlsZChlbXB0eUVsKTtcclxuICAgICAgICAgICAgc291cmNlRWwuc3R5bGUuY3NzVGV4dCA9IHJvb3RXaWRnZXQuYXJlYVN0eWxlO1xyXG4gICAgICAgICAgICBzb3VyY2VFbC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjEwcHhcIjtcclxuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQocmVzdWx0RWwpO1xyXG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChzb3VyY2VFbCk7XHJcbiAgICAgICAgICAgIHZhciBoYXNWYWx1ZUluUmVzdWx0cyA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IHF1ZXN0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkocmVzKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkgKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc1tpXSA9PSB2YWwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHJlc3VsdEVsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRFbC5hcHBlbmRDaGlsZChlbXB0eUVsKTtcclxuICAgICAgICAgICAgICAgIHNvdXJjZUVsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2FzSW5SZXN1bHRzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi5hY3RpdmVDaG9pY2VzLmZvckVhY2goZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluUmVzdXRscyA9IGhhc1ZhbHVlSW5SZXN1bHRzKGNob2ljZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FzSW5SZXN1bHRzID0gd2FzSW5SZXN1bHRzIHx8IGluUmVzdXRscztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3JjRWwgPSBpblJlc3V0bHMgPyByZXN1bHRFbCA6IHNvdXJjZUVsO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RWwuaW5uZXJIVE1MID0gXCI8ZGl2IHN0eWxlPSdcIiArIHJvb3RXaWRnZXQuaXRlbVN0eWxlICsgIFwiJz5cIiArIGNob2ljZS50ZXh0ICsgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICAgICBuZXdFbFtcImRhdGEtdmFsdWVcIl0gPSBjaG9pY2UudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjRWwuYXBwZW5kQ2hpbGQobmV3RWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSB3YXNJblJlc3VsdHMgPyAgXCJub25lXCIgOiBcIlwiO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBTb3J0YWJsZS5jcmVhdGUoJChyZXN1bHRFbClbMF0sIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXA6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAndG9wMycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHVsbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwdXQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblNvcnQ6IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC50by5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlFbC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBldnQudG8uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGV2dC50by5jaGlsZHJlbltpXS5kYXRhc2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICBpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgU29ydGFibGUuY3JlYXRlKCQoc291cmNlRWwpWzBdLCB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IDE1MCxcclxuICAgICAgICAgICAgICAgIGdyb3VwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RvcDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHB1bGw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHV0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc29ydGFibGVqcy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJTb3J0YWJsZVwiLFwiY29tbW9uanMyXCI6XCJzb3J0YWJsZWpzXCIsXCJjb21tb25qc1wiOlwic29ydGFibGVqc1wiLFwiYW1kXCI6XCJzb3J0YWJsZWpzXCJ9XG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiZWRpdG9yXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiRWRpdG9yXCIsXHJcbiAgICAgICAgaWNvbk5hbWU6IFwiaWNvbi1lZGl0b3JcIixcclxuICAgICAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7IHJldHVybiB0eXBlb2YgQ0tFRElUT1IgIT0gXCJ1bmRlZmluZWRcIjsgfSxcclxuICAgICAgICBpc0ZpdCA6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7IFxyXG4gICAgICAgICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnZWRpdG9yJzsgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBodG1sVGVtcGxhdGU6IFwiPHRleHRhcmVhIHJvd3M9JzEwJyBjb2xzPSc4MCcgc3R5bGU6IHt3aWR0aDonMTAwJSd9PjwvdGV4dGFyZWE+XCIsXHJcbiAgICAgICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImVkaXRvclwiLCBbXSwgbnVsbCwgXCJlbXB0eVwiKTtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJlZGl0b3JcIiwge25hbWU6IFwiaGVpZ2h0XCIsIGRlZmF1bHQ6IDMwMH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICBDS0VESVRPUi5lZGl0b3JDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcubGFuZ3VhZ2UgPSAnZXMnO1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmhlaWdodCA9IHF1ZXN0aW9uLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy50b29sYmFyQ2FuQ29sbGFwc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgZWRpdG9yID0gQ0tFRElUT1IucmVwbGFjZShlbCk7XHJcbiAgICAgICAgICAgIHZhciBpc1ZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNWYWx1ZUNoYW5naW5nKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBlZGl0b3Iuc2V0RGF0YShxdWVzdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGVkaXRvci5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IFxyXG4gICAgICAgICAgICAgICAgaXNWYWx1ZUNoYW5naW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZWRpdG9yLmdldERhdGEoKTtcclxuICAgICAgICAgICAgICAgIGlzVmFsdWVDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NrLWVkaXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDExIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGljaGVja30gZnJvbSBcIi4vaWNoZWNrLmpzXCI7XHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3QyfSBmcm9tIFwiLi9zZWxlY3QyLmpzXCI7XHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbWFnZXBpY2tlcn0gZnJvbSBcIi4vaW1hZ2UtcGlja2VyLmpzXCI7XHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnB1dG1hc2t9IGZyb20gXCIuL2lucHV0bWFzay5qc1wiO1xyXG5leHBvcnQge2RlZmF1bHQgYXMganF1ZXJ5YmFycmF0aW5nfSBmcm9tIFwiLi9qcXVlcnktYmFyLXJhdGluZy5qc1wiO1xyXG5leHBvcnQge2RlZmF1bHQgYXMganF1ZXJ5dWlkYXRlcGlja2VyfSBmcm9tIFwiLi9qcXVlcnktdWktZGF0ZXBpY2tlci5qc1wiO1xyXG5leHBvcnQge2RlZmF1bHQgYXMgbm91aXNsaWRlcn0gZnJvbSBcIi4vbm91aXNsaWRlci5qc1wiO1xyXG5leHBvcnQge2RlZmF1bHQgYXMgc2VsZWN0MnRhZ2JveH0gZnJvbSBcIi4vc2VsZWN0Mi10YWdib3guanNcIjtcclxuZXhwb3J0IHtkZWZhdWx0IGFzIHNpZ25hdHVyZXBhZH0gZnJvbSBcIi4vc2lnbmF0dXJlX3BhZC5qc1wiO1xyXG5leHBvcnQge2RlZmF1bHQgYXMgc29ydGFibGVqc30gZnJvbSBcIi4vc29ydGFibGVqcy5qc1wiO1xyXG5leHBvcnQge2RlZmF1bHQgYXMgY2tlZGl0b3J9IGZyb20gXCIuL2NrLWVkaXRvci5qc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N1cnZleWpzLXdpZGdldHMuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=