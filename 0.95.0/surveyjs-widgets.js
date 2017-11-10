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
        isFit : function(question) {  
            if(typeof iCheck == undefined && typeof _iCheck == undefined) return false;
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
        isFit : function(question) {
            if(widget.activatedBy == "property") return question["renderAs"] === 'select2' && question.getType() === 'dropdown'; 
            if(widget.activatedBy == "type") return  typeof Select2 !== undefined && question.getType() === 'dropdown'; 
            if(widget.activatedBy == "customtype") return question.getType() === 'select2';
            return false;
        },
        activatedByChanged: function(activatedBy) {
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
        widgetIsLoaded: function() { return !!$.fn.imagepicker; },
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
        isFit : function(question) { 
            if(typeof __WEBPACK_IMPORTED_MODULE_0_inputmask___default.a == undefined) return false;
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
        widgetIsLoaded: function() { return typeof Barrating !== undefined; },
        defaultJSON: {choices: [1, 2, 3, 4, 5]},
        isFit : function(question) { return question.getType() === 'barrating'; },
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
        widgetIsLoaded: function() { return typeof DatePicker !== undefined; },
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
                onSelect: function(dateText) {
                    question.value = dateText;
                }
            });
            question.valueChangedCallback = function() {
                pickerWidget.datepicker('setDate', new Date(question.value));
            }
            question.valueChangedCallback();
            if(!question.value) question.value = new Date();
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
        widgetIsLoaded: function() { return typeof __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a !== undefined; },
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
        widgetIsLoaded: function() { return typeof Select2 !== undefined; },
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
        widgetIsLoaded: function() { return typeof __WEBPACK_IMPORTED_MODULE_0_signature_pad__ !== undefined; },
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
        widgetIsLoaded: function() { return typeof __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a !== undefined; },
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
        widgetIsLoaded: function() { return typeof CKEDITOR !== undefined; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhMzU0NTA3NTNkNmU1NDNhM2Y1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIklucHV0bWFza1wiLFwiY29tbW9uanMyXCI6XCJpbnB1dG1hc2tcIixcImNvbW1vbmpzXCI6XCJpbnB1dG1hc2tcIixcImFtZFwiOlwiaW5wdXRtYXNrXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcXVlcnktYmFyLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5LXVpLWRhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vdWlzbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm5vVWlTbGlkZXJcIixcImNvbW1vbmpzMlwiOlwibm91aXNsaWRlclwiLFwiY29tbW9uanNcIjpcIm5vdWlzbGlkZXJcIixcImFtZFwiOlwibm91aXNsaWRlclwifSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi10YWdib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpZ25hdHVyZV9wYWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlNpZ25hdHVyZVBhZFwiLFwiY29tbW9uanMyXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJjb21tb25qc1wiOlwic2lnbmF0dXJlX3BhZFwiLFwiYW1kXCI6XCJzaWduYXR1cmVfcGFkXCJ9Iiwid2VicGFjazovLy8uL3NyYy9zb3J0YWJsZWpzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJTb3J0YWJsZVwiLFwiY29tbW9uanMyXCI6XCJzb3J0YWJsZWpzXCIsXCJjb21tb25qc1wiOlwic29ydGFibGVqc1wiLFwiYW1kXCI6XCJzb3J0YWJsZWpzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9jay1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleWpzLXdpZGdldHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSwrQzs7Ozs7OztBQ0FBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQztBQUNBO0FBQ0EsdUNBQXVDLGlFO0FBQ3ZDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvQkFBb0I7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsRTtBQUNyQjtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTs7QUFFQSxxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0MwQjtBQUNDO0FBQ0k7QUFDRjtBQUNNO0FBQ0c7QUFDUjtBQUNHO0FBQ0Q7QUFDRiIsImZpbGUiOiJzdXJ2ZXlqcy13aWRnZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiaW5wdXRtYXNrXCIpLCByZXF1aXJlKFwibm91aXNsaWRlclwiKSwgcmVxdWlyZShcInNpZ25hdHVyZV9wYWRcIiksIHJlcXVpcmUoXCJzb3J0YWJsZWpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwic3VydmV5anMtd2lkZ2V0c1wiLCBbXCJqcXVlcnlcIiwgXCJpbnB1dG1hc2tcIiwgXCJub3Vpc2xpZGVyXCIsIFwic2lnbmF0dXJlX3BhZFwiLCBcInNvcnRhYmxlanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VydmV5anMtd2lkZ2V0c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImlucHV0bWFza1wiKSwgcmVxdWlyZShcIm5vdWlzbGlkZXJcIiksIHJlcXVpcmUoXCJzaWduYXR1cmVfcGFkXCIpLCByZXF1aXJlKFwic29ydGFibGVqc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VydmV5anMtd2lkZ2V0c1wiXSA9IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcIklucHV0bWFza1wiXSwgcm9vdFtcIm5vVWlTbGlkZXJcIl0sIHJvb3RbXCJTaWduYXR1cmVQYWRcIl0sIHJvb3RbXCJTb3J0YWJsZVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTM1NDUwNzUzZDZlNTQzYTNmNWUiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDQiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gICAgdmFyIHdpZGdldCA9IHtcclxuICAgICAgICBjbGFzc05hbWU6IFwiaXJhZGlvX3NxdWFyZS1ibHVlXCIsXHJcbiAgICAgICAgbmFtZTogXCJpY2hlY2tcIixcclxuICAgICAgICBpc0ZpdCA6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7ICBcclxuICAgICAgICAgICAgaWYodHlwZW9mIGlDaGVjayA9PSB1bmRlZmluZWQgJiYgdHlwZW9mIF9pQ2hlY2sgPT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciB0ID0gcXVlc3Rpb24uZ2V0VHlwZSgpOyByZXR1cm4gdCA9PT0gJ3JhZGlvZ3JvdXAnIHx8IHQgPT09ICdjaGVja2JveCcgfHwgdCA9PT0gJ21hdHJpeCc7IFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgJGVsID0gJChlbCk7XHJcbiAgICAgICAgICAgICRlbC5maW5kKCdpbnB1dCcpLmRhdGEoe1wiaUNoZWNrXCI6IHVuZGVmaW5lZH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJGVsLmZpbmQoJ2lucHV0JykuaUNoZWNrKHtcclxuICAgICAgICAgICAgY2hlY2tib3hDbGFzczogcm9vdFdpZGdldC5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgIHJhZGlvQ2xhc3M6IHJvb3RXaWRnZXQuY2xhc3NOYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZihxdWVzdGlvbi5nZXRUeXBlKCkgIT0gXCJtYXRyaXhcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICRlbC5maW5kKFwiaW5wdXRbdmFsdWU9XCIgKyBxdWVzdGlvbi52YWx1ZSArIFwiXVwiKS5pQ2hlY2soJ2NoZWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLmdlbmVyYXRlZFZpc2libGVSb3dzLmZvckVhY2goZnVuY3Rpb24ocm93LCBpbmRleCwgcm93cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZWwpLmZpbmQoXCJpbnB1dFtuYW1lPSdcIiArIHJvdy5mdWxsTmFtZSAgKyBcIiddW3ZhbHVlPVwiICsgcm93LnZhbHVlICsgXCJdXCIpLmlDaGVjaygnY2hlY2snKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkZWwuZmluZCgnaW5wdXQnKS5vbignaWZDaGVja2VkJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmKHF1ZXN0aW9uLmdldFR5cGUoKSAhPSBcIm1hdHJpeFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLmdlbmVyYXRlZFZpc2libGVSb3dzLmZvckVhY2goZnVuY3Rpb24ocm93LCBpbmRleCwgcm93cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LmZ1bGxOYW1lID09PSBldmVudC50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBzZWxlY3Q7XHJcbiAgICAgICAgICAgIHNlbGVjdCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsID0gJChlbCk7XHJcbiAgICAgICAgICAgICRlbC5maW5kKCdpbnB1dCcpLmlDaGVjaygnZGVzdHJveScpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJ0eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ljaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTAiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSB7XHJcbiAgICAgICAgYWN0aXZhdGVkQnk6IFwicHJvcGVydHlcIixcclxuICAgICAgICBuYW1lOiBcInNlbGVjdDJcIixcclxuICAgICAgICBodG1sVGVtcGxhdGU6IFwiPHNlbGVjdCBzdHlsZT0nd2lkdGg6IDEwMCU7Jz48L3NlbGVjdD5cIixcclxuICAgICAgICBpc0ZpdCA6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmKHdpZGdldC5hY3RpdmF0ZWRCeSA9PSBcInByb3BlcnR5XCIpIHJldHVybiBxdWVzdGlvbltcInJlbmRlckFzXCJdID09PSAnc2VsZWN0MicgJiYgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnZHJvcGRvd24nOyBcclxuICAgICAgICAgICAgaWYod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwidHlwZVwiKSByZXR1cm4gIHR5cGVvZiBTZWxlY3QyICE9PSB1bmRlZmluZWQgJiYgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnZHJvcGRvd24nOyBcclxuICAgICAgICAgICAgaWYod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwiY3VzdG9tdHlwZVwiKSByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnc2VsZWN0Mic7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgICAgICAgd2lkZ2V0LmFjdGl2YXRlZEJ5ID0gYWN0aXZhdGVkQnk7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLnJlbW92ZVByb3BlcnR5KFwiZHJvcGRvd25cIiwgXCJyZW5kZXJBc1wiKTtcclxuICAgICAgICAgICAgaWYoYWN0aXZhdGVkQnkgPT0gXCJwcm9wZXJ0eVwiKSB7XHJcbiAgICAgICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImRyb3Bkb3duXCIsIHtuYW1lOiBcInJlbmRlckFzXCIsIGRlZmF1bHQ6IFwic3RhbmRhcmRcIiwgY2hvaWNlczogW1wic3RhbmRhcmRcIiwgXCJzZWxlY3QyXCJdfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYWN0aXZhdGVkQnkgPT0gXCJjdXN0b210eXBlXCIpIHtcclxuICAgICAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic2VsZWN0MlwiLCBbXSwgbnVsbCwgXCJkcm9wZG93blwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJzZWxlY3RcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgICAgIHZhciBvdGhlcnNFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgb3RoZXJzRWwudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICBvdGhlcnNFbC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjNweFwiO1xyXG4gICAgICAgICAgICBvdGhlcnNFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIG90aGVyc0VsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICRlbC5wYXJlbnQoKS5nZXQoMCkuYXBwZW5kQ2hpbGQob3RoZXJzRWwpO1xyXG4gICAgICAgICAgICB2YXIgd2lkZ2V0ID0gJGVsLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICAgICAgdGhlbWU6IFwiY2xhc3NpY1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwudmFsKHF1ZXN0aW9uLnZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXJzRWwuc3R5bGUuZGlzcGxheSA9ICFxdWVzdGlvbi5pc090aGVyU2VsZWN0ZWQgPyBcIm5vbmVcIjogXCJcIjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHVwZGF0ZUNvbW1lbnRIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBvdGhlcnNFbC52YWx1ZSA9IHF1ZXN0aW9uLmNvbW1lbnQgPyBxdWVzdGlvbi5jb21tZW50IDogXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgb3RoZXJzRWxDaGFuZ2VkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi5jb21tZW50ID0gb3RoZXJzRWwudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHVwZGF0ZUNob2ljZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICRlbC5zZWxlY3QyKHtkYXRhOiBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24oY2hvaWNlKSB7IHJldHVybiB7IGlkOiBjaG9pY2UudmFsdWUsIHRleHQ6IGNob2ljZS50ZXh0IH07IH0pfSk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUNvbW1lbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcXVlc3Rpb24uY2hvaWNlc0NoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZUNob2ljZXM7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNob2ljZXMoKTtcclxuICAgICAgICAgICAgJGVsLm9uKCdzZWxlY3QyOnNlbGVjdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb3RoZXJzRWwub25jaGFuZ2UgPSBvdGhlcnNFbENoYW5nZWQ7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICAgICAgICBxdWVzdGlvbi5jb21tZW50Q2hhbmdlZENhbGxiYWNrID0gdXBkYXRlQ29tbWVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB1cGRhdGVDb21tZW50SGFuZGxlcigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICAkKGVsKS5maW5kKFwic2VsZWN0XCIpLm9mZignc2VsZWN0MjpzZWxlY3QnKS5zZWxlY3QyKFwiZGVzdHJveVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCk7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VsZWN0Mi5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiaW1hZ2VwaWNrZXJcIixcclxuICAgICAgICB0aXRsZTogXCJJbWFnZSBwaWNrZXJcIixcclxuICAgICAgICBpY29uTmFtZTogXCJpY29uLWltYWdlcGlja2VyXCIsXHJcbiAgICAgICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gISEkLmZuLmltYWdlcGlja2VyOyB9LFxyXG4gICAgICAgIGlzRml0IDogZnVuY3Rpb24ocXVlc3Rpb24pIHsgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gJ2ltYWdlcGlja2VyJzsgfSxcclxuICAgICAgICBpc0RlZmF1bHRSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImltYWdlaXRlbXZhbHVlc1wiLCBbe25hbWU6IFwiaW1hZ2VMaW5rXCJ9XSwgbnVsbCwgXCJpdGVtdmFsdWVcIik7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiaW1hZ2VwaWNrZXJcIiwgW3tuYW1lOiBcImNob2ljZXM6aW1hZ2VpdGVtdmFsdWVzXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIFN1cnZleS5JdGVtVmFsdWUuZ2V0RGF0YShvYmouY2hvaWNlcyk7IH0sIG9uU2V0VmFsdWU6IGZ1bmN0aW9uIChvYmosIHZhbHVlKSB7IG9iai5jaG9pY2VzID0gdmFsdWU7IH19LCBcclxuICAgICAgICAgICAgICAgIHtuYW1lOlwic2hvd0xhYmVsOmJvb2xlYW5cIiwgZGVmYXVsdDogZmFsc2V9LCB7bmFtZTpcImhhc090aGVyXCIsIHZpc2libGU6IGZhbHNlfSwge25hbWU6IFwib3RoZXJUZXh0XCIsIHZpc2libGU6IGZhbHNlfSwge25hbWU6IFwib3B0aW9uc0NhcHRpb25cIiwgdmlzaWJsZTogZmFsc2V9LCBcclxuICAgICAgICAgICAgICAgIHtuYW1lOiBcIm90aGVyRXJyb3JUZXh0XCIsIHZpc2libGU6IGZhbHNlfSwge25hbWU6IFwic3RvcmVPdGhlcnNBc0NvbW1lbnRcIiwgdmlzaWJsZTogZmFsc2V9LCB7bmFtZTogXCJyZW5kZXJBc1wiLCB2aXNpYmxlOiBmYWxzZX1dLCBudWxsLCBcImRyb3Bkb3duXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJzZWxlY3RcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gJGVsLmZpbmQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICB2YXIgY2hvaWNlcyA9IHF1ZXN0aW9uLmNob2ljZXM7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpPTE7IGkgPCBvcHRpb25zLmxlbmd0aCAmJiBpLTEgPCBjaG9pY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAkKG9wdGlvbnNbaV0pLmRhdGEoXCJpbWdTcmNcIiwgY2hvaWNlc1tpLTFdLmltYWdlTGluayk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zW2ldLnNlbGVjdGVkID0gcXVlc3Rpb24udmFsdWUgPT0gb3B0aW9uc1tpXS52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkZWwuaW1hZ2VwaWNrZXIoe1xyXG4gICAgICAgICAgICAgICAgaGlkZV9zZWxlY3QgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd19sYWJlbCAgOiBxdWVzdGlvbi5zaG93TGFiZWwsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogZnVuY3Rpb24ob3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gb3B0cy5waWNrZXIuc2VsZWN0WzBdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsID0gJChlbCkuZmluZChcInNlbGVjdFwiKTtcclxuICAgICAgICAgICAgJGVsLmRhdGEoJ3BpY2tlcicpLmRlc3Ryb3koKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZS1waWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDkiLCJpbXBvcnQgSW5wdXRtYXNrIGZyb20gXCJpbnB1dG1hc2tcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwibWFza2VkaXRcIixcclxuICAgICAgICBudW1lcmljR3JvdXBTZXBhcmF0b3I6ICcsJyxcclxuICAgICAgICBudW1lcmljQXV0b0dyb3VwOiB0cnVlLFxyXG4gICAgICAgIG51bWVyaWNEaWdpdHM6IDIsXHJcbiAgICAgICAgbnVtZXJpY0RpZ2l0c09wdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICBudW1lcmljUHJlZml4OiAnJCcsXHJcbiAgICAgICAgbnVtZXJpY1BsYWNlaG9sZGVyOiAnMCcsXHJcbiAgICAgICAgaXNGaXQgOiBmdW5jdGlvbihxdWVzdGlvbikgeyBcclxuICAgICAgICAgICAgaWYodHlwZW9mIElucHV0bWFzayA9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYocXVlc3Rpb24uZ2V0VHlwZSgpID09IFwibXVsdGlwbGV0ZXh0XCIpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09IFwidGV4dFwiICYmIChxdWVzdGlvbi5pbnB1dE1hc2sgIT0gXCJub25lXCIgfHwgcXVlc3Rpb24uaW5wdXRGb3JtYXQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgICAgICAgaWYoU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZmluZFByb3BlcnR5KFwidGV4dFwiLCBcImlucHV0TWFza1wiKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtcImlucHV0Rm9ybWF0XCIsIHtuYW1lOiBcImlucHV0TWFza1wiLCBkZWZhdWx0OiBcIm5vbmVcIiwgY2hvaWNlczogW1wibm9uZVwiLCBcImRhdGV0aW1lXCIsIFwiY3VycmVuY3lcIiwgXCJkZWNpbWFsXCIsIFwiZW1haWxcIiwgXCJwaG9uZVwiLCBcImlwXCJdfV07XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJ0ZXh0XCIsIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwibWF0cml4ZHJvcGRvd25jb2x1bW5cIiwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJtdWx0aXBsZXRleHRpdGVtXCIsIHByb3BlcnRpZXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXBwbHlJbnB1dE1hc2s6IGZ1bmN0aW9uKHN1cnZleUVsZW1lbnQsIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIG1hc2sgPSBzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayAhPSBcIm5vbmVcIiA/IHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrIDogc3VydmV5RWxlbWVudC5pbnB1dEZvcm1hdDtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgaWYoc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgIT0gXCJub25lXCIpIG9wdGlvbnMuaW5wdXRGb3JtYXQgPSBzdXJ2ZXlFbGVtZW50LmlucHV0Rm9ybWF0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgPT0gXCJjdXJyZW5jeVwiIHx8IHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiZGVjaW1hbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmdyb3VwU2VwYXJhdG9yID0gcm9vdFdpZGdldC5udW1lcmljR3JvdXBTZXBhcmF0b3I7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmF1dG9Hcm91cCA9IHJvb3RXaWRnZXQubnVtZXJpY0F1dG9Hcm91cDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImN1cnJlbmN5XCIpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZGlnaXRzID0gcm9vdFdpZGdldC5udW1lcmljRGlnaXRzO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kaWdpdHNPcHRpb25hbCA9IHJvb3RXaWRnZXQubnVtZXJpY0RpZ2l0c09wdGlvbmFsO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wcmVmaXggPSByb290V2lkZ2V0Lm51bWVyaWNQcmVmaXg7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnBsYWNlaG9sZGVyID0gcm9vdFdpZGdldC5udW1lcmljUGxhY2Vob2xkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiZGF0ZXRpbWVcIikge1xyXG4gICAgICAgICAgICAgICAgbWFzayA9IHN1cnZleUVsZW1lbnQuaW5wdXRGb3JtYXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIElucHV0bWFzayhtYXNrLCBvcHRpb25zKS5tYXNrKGVsKTtcclxuXHJcbiAgICAgICAgICAgIGVsLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1cnZleUVsZW1lbnQuY3VzdG9tV2lkZ2V0RGF0YS5pc05lZWRSZW5kZXIgPSB0cnVlOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHVwZGF0ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGVsLnZhbHVlID0gdHlwZW9mIHN1cnZleUVsZW1lbnQudmFsdWUgPT09IFwidW5kZWZpbmVkXCIgPyBcIlwiIDogc3VydmV5RWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3VydmV5RWxlbWVudC52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZUhhbmRsZXI7XHJcbiAgICAgICAgICAgIHVwZGF0ZUhhbmRsZXIoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgaWYocXVlc3Rpb24uZ2V0VHlwZSgpICE9IFwibXVsdGlwbGV0ZXh0XCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSB8fCBlbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlJbnB1dE1hc2socXVlc3Rpb24sIGlucHV0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbi5pdGVtcy5sZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHF1ZXN0aW9uLml0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uaW5wdXRNYXNrICE9IFwibm9uZVwiIHx8IGl0ZW0uaW5wdXRGb3JtYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gIGVsLnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBpdGVtLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5SW5wdXRNYXNrKGl0ZW0sIGlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikgfHwgZWw7XHJcbiAgICAgICAgICAgIGlucHV0LmlucHV0bWFzay5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCk7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5wdXRtYXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJJbnB1dG1hc2tcIixcImNvbW1vbmpzMlwiOlwiaW5wdXRtYXNrXCIsXCJjb21tb25qc1wiOlwiaW5wdXRtYXNrXCIsXCJhbWRcIjpcImlucHV0bWFza1wifVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiYmFycmF0aW5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQmFyIHJhdGluZ1wiLFxyXG4gICAgICAgIGljb25OYW1lOiBcImljb24tYmFycmF0aW5nXCIsXHJcbiAgICAgICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHlwZW9mIEJhcnJhdGluZyAhPT0gdW5kZWZpbmVkOyB9LFxyXG4gICAgICAgIGRlZmF1bHRKU09OOiB7Y2hvaWNlczogWzEsIDIsIDMsIDQsIDVdfSxcclxuICAgICAgICBpc0ZpdCA6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7IHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09ICdiYXJyYXRpbmcnOyB9LFxyXG4gICAgICAgIGlzRGVmYXVsdFJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiYmFycmF0aW5nXCIsIFsge25hbWU6IFwic2hvd1ZhbHVlczpib29sZWFuXCIsIGRlZmF1bHQ6IGZhbHNlfSwgXHJcbiAgICAgICAgICAgIHtuYW1lOlwiaGFzT3RoZXJcIiwgdmlzaWJsZTogZmFsc2V9LCB7bmFtZTogXCJvdGhlclRleHRcIiwgdmlzaWJsZTogZmFsc2V9LCB7bmFtZTogXCJvcHRpb25zQ2FwdGlvblwiLCB2aXNpYmxlOiBmYWxzZX0sIFxyXG4gICAgICAgICAgICB7bmFtZTogXCJvdGhlckVycm9yVGV4dFwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOiBcInN0b3JlT3RoZXJzQXNDb21tZW50XCIsIHZpc2libGU6IGZhbHNlfSwge25hbWU6IFwicmVuZGVyQXNcIiwgdmlzaWJsZTogZmFsc2V9XSwgbnVsbCwgXCJkcm9wZG93blwiKTtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJiYXJyYXRpbmdcIiwge25hbWU6IFwicmF0aW5nVGhlbWVcIiwgZGVmYXVsdDogXCJmb250YXdlc29tZS1zdGFyc1wiLCBjaG9pY2VzOiBbXCJmb250YXdlc29tZS1zdGFyc1wiLCBcImNzcy1zdGFyc1wiLCBcImJhcnMtcGlsbFwiLCBcImJhcnMtMXRvMTBcIiwgXCJiYXJzLW1vdmllXCIsIFwiYmFycy1zcXVhcmVcIiwgXCJiYXJzLXJldmVyc2VkXCIsIFwiYmFycy1ob3Jpem9udGFsXCIsIFwiYm9vdHN0cmFwLXN0YXJzXCIsIFwiZm9udGF3ZXNvbWUtc3RhcnMtb1wiXX0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJzZWxlY3RcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgICAgICRlbC5iYXJyYXRpbmcoJ3Nob3cnLCB7XHJcbiAgICAgICAgICAgICAgICB0aGVtZTogcXVlc3Rpb24ucmF0aW5nVGhlbWUsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsUmF0aW5nOiBxdWVzdGlvbi52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dWYWx1ZXM6IHF1ZXN0aW9uLnNob3dWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBzaG93U2VsZWN0ZWRSYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uKHZhbHVlLCB0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKGVsKS5maW5kKCdzZWxlY3QnKS5iYXJyYXRpbmcoJ3NldCcsIHF1ZXN0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsID0gJChlbCkuZmluZChcInNlbGVjdFwiKTtcclxuICAgICAgICAgICAgJGVsLmJhcnJhdGluZygnZGVzdHJveScpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pxdWVyeS1iYXItcmF0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA4IiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSB7XHJcbiAgICAgICAgbmFtZTogXCJkYXRlcGlja2VyXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiRGF0ZSBwaWNrZXJcIixcclxuICAgICAgICBpY29uTmFtZTogXCJpY29uLWRhdGVwaWNrZXJcIixcclxuICAgICAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7IHJldHVybiB0eXBlb2YgRGF0ZVBpY2tlciAhPT0gdW5kZWZpbmVkOyB9LFxyXG4gICAgICAgIGlzRml0IDogZnVuY3Rpb24ocXVlc3Rpb24pIHsgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gJ2RhdGVwaWNrZXInOyB9LFxyXG4gICAgICAgIGh0bWxUZW1wbGF0ZTogXCI8aW5wdXQgY2xhc3M9J3dpZGdldC1kYXRlcGlja2VyJyB0eXBlPSd0ZXh0JyBzdHlsZT0nd2lkdGg6IDEwMCU7Jz5cIixcclxuICAgICAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiZGF0ZXBpY2tlclwiLCBcclxuICAgICAgICAgICAgICAgIFt7bmFtZTogXCJkYXRlRm9ybWF0XCIsIGRlZmF1bHQ6IFwibW0vZGQveXlcIiwgY2hvaWNlczogW1wibW0vZGQveXlcIiwgXCJ5eS1tbS1kZFwiLCBcImQgTSwgeVwiLCBcImQgTU0sIHlcIiwgXCJERCwgZCBNTSwgeXlcIiwgXCInZGF5JyBkICdvZicgTU0gJ2luIHRoZSB5ZWFyJyB5eVwiXX0sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTpcImlucHV0VHlwZVwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOlwiaW5wdXRGb3JtYXRcIiwgdmlzaWJsZTogZmFsc2V9LCB7bmFtZTogXCJpbnB1dE1hc2tcIiwgdmlzaWJsZTogZmFsc2V9XSwgbnVsbCwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCIud2lkZ2V0LWRhdGVwaWNrZXJcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCIud2lkZ2V0LWRhdGVwaWNrZXJcIik7XHJcbiAgICAgICAgICAgIHZhciBwaWNrZXJXaWRnZXQgPSAkZWwuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0OiBxdWVzdGlvbi5kYXRlRm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uKGRhdGVUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBkYXRlVGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBwaWNrZXJXaWRnZXQuZGF0ZXBpY2tlcignc2V0RGF0ZScsIG5ldyBEYXRlKHF1ZXN0aW9uLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgaWYoIXF1ZXN0aW9uLnZhbHVlKSBxdWVzdGlvbi52YWx1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcIi53aWRnZXQtZGF0ZXBpY2tlclwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcIi53aWRnZXQtZGF0ZXBpY2tlclwiKTtcclxuICAgICAgICAgICAgJGVsLmRhdGVwaWNrZXIoXCJkZXN0cm95XCIpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pxdWVyeS11aS1kYXRlcGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IiwiaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gICAgdmFyIHdpZGdldCA9IHtcclxuICAgICAgICBuYW1lOiBcIm5vdWlzbGlkZXJcIixcclxuICAgICAgICB0aXRsZTogXCJub1VpU2xpZGVyXCIsXHJcbiAgICAgICAgaWNvbk5hbWU6IFwiaWNvbi1ub3Vpc2xpZGVyXCIsXHJcbiAgICAgICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHlwZW9mIG5vVWlTbGlkZXIgIT09IHVuZGVmaW5lZDsgfSxcclxuICAgICAgICBpc0ZpdCA6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7IHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09ICdub3Vpc2xpZGVyJzsgfSxcclxuICAgICAgICBodG1sVGVtcGxhdGU6IFwiPGRpdj48L2Rpdj5cIixcclxuICAgICAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibm91aXNsaWRlclwiLCBbXSwgbnVsbCwgXCJlbXB0eVwiKTtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcIm5vdWlzbGlkZXJcIiwgW3tuYW1lOiBcInJhbmdlTWluOm51bWJlclwiLCBkZWZhdWx0OiAwfSwge25hbWU6IFwicmFuZ2VNYXg6bnVtYmVyXCIsIGRlZmF1bHQ6IDEwMH0sXHJcbiAgICAgICAgICAgIHtuYW1lOiBcImRlZmF1bHRSYW5nZU1pbjpudW1iZXJcIiwgZGVmYXVsdDogMzB9LCB7bmFtZTogXCJkZWZhdWx0UmFuZ2VNYXg6bnVtYmVyXCIsIGRlZmF1bHQ6IDcwfV0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRWYWx1ZSA9IHF1ZXN0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICBpZighc3RhcnRWYWx1ZSB8fCBzdGFydFZhbHVlLmxlbmd0aCAhPSAyKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFZhbHVlID0gW3F1ZXN0aW9uLmRlZmF1bHRSYW5nZU1pbiwgcXVlc3Rpb24uZGVmYXVsdFJhbmdlTWF4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihzdGFydFZhbHVlWzBdIDwgcXVlc3Rpb24ucmFuZ2VNaW4pIHN0YXJ0VmFsdWVbMF0gPSBxdWVzdGlvbi5yYW5nZU1pbjtcclxuICAgICAgICAgICAgaWYoc3RhcnRWYWx1ZVswXSA+IHF1ZXN0aW9uLnJhbmdlTWF4KSBzdGFydFZhbHVlWzBdID0gcXVlc3Rpb24ucmFuZ2VNYXg7XHJcbiAgICAgICAgICAgIGlmKHN0YXJ0VmFsdWVbMV0gPCBzdGFydFZhbHVlWzBdKSBzdGFydFZhbHVlWzFdID0gc3RhcnRWYWx1ZVswXTtcclxuICAgICAgICAgICAgaWYoc3RhcnRWYWx1ZVsxXSA+IHF1ZXN0aW9uLnJhbmdlTWF4KSBzdGFydFZhbHVlWzFdID0gcXVlc3Rpb24ucmFuZ2VNYXg7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gc3RhcnRWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNTBweFwiO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyID0gbm9VaVNsaWRlci5jcmVhdGUoZWwsIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBzdGFydFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY29ubmVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBpcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnc3RlcHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBwZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVuc2l0eTogNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ21pbic6IHF1ZXN0aW9uLnJhbmdlTWluLFxyXG4gICAgICAgICAgICAgICAgICAgICdtYXgnOiBxdWVzdGlvbi5yYW5nZU1heFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLm9uKCdzZXQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBzbGlkZXIuZ2V0KCk7XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyLnNldChxdWVzdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLm5vVWlTbGlkZXIgPSBzbGlkZXI7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICBxdWVzdGlvbi5ub1VpU2xpZGVyLmRlc3Ryb3koKTsgXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLm5vVWlTbGlkZXIgPSBudWxsO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL25vdWlzbGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIm5vVWlTbGlkZXJcIixcImNvbW1vbmpzMlwiOlwibm91aXNsaWRlclwiLFwiY29tbW9uanNcIjpcIm5vdWlzbGlkZXJcIixcImFtZFwiOlwibm91aXNsaWRlclwifVxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gICAgdmFyIHdpZGdldCA9IHtcclxuICAgICAgICBuYW1lOiBcInRhZ2JveFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlRhZyBib3hcIixcclxuICAgICAgICBpY29uTmFtZTogXCJpY29uLXRhZ2JveFwiLFxyXG4gICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHsgcmV0dXJuIHR5cGVvZiBTZWxlY3QyICE9PSB1bmRlZmluZWQ7IH0sXHJcbiAgICAgICAgZGVmYXVsdEpTT046IHtjaG9pY2VzOiBbXCJJdGVtIDFcIiwgXCJJdGVtIDJcIiwgXCJJdGVtIDNcIl19LFxyXG4gICAgICAgIGh0bWxUZW1wbGF0ZTogXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZScgc3R5bGU9J3dpZHRoOiAxMDAlOyc+PC9zZWxlY3Q+XCIsXHJcbiAgICAgICAgaXNGaXQgOiBmdW5jdGlvbihxdWVzdGlvbikgeyByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAndGFnYm94JzsgIH0sXHJcbiAgICAgICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInRhZ2JveFwiLCBbe25hbWU6XCJoYXNPdGhlclwiLCB2aXNpYmxlOiBmYWxzZX1dLCBudWxsLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJzZWxlY3RcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgICAgICRlbC5zZWxlY3QyKHtcclxuICAgICAgICAgICAgICAgIHRhZ3M6IFwidHJ1ZVwiLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6IFwiY2xhc3NpY1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwudmFsKHF1ZXN0aW9uLnZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgdXBkYXRlQ2hvaWNlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJGVsLnNlbGVjdDIoe2RhdGE6IHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzLm1hcChmdW5jdGlvbihjaG9pY2UpIHsgcmV0dXJuIHsgaWQ6IGNob2ljZS52YWx1ZSwgdGV4dDogY2hvaWNlLnRleHQgfTsgfSl9KTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLmNob2ljZXNDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVDaG9pY2VzO1xyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgICAgICAgJGVsLm9uKCdzZWxlY3QyOnNlbGVjdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IChxdWVzdGlvbi52YWx1ZSB8fCBbXSkuY29uY2F0KGUucGFyYW1zLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJGVsLm9uKCdzZWxlY3QyOnVuc2VsZWN0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IChxdWVzdGlvbi52YWx1ZSB8fCBbXSkuaW5kZXhPZihlLnBhcmFtcy5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBxdWVzdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YWwuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7ICAgICAgICAgXHJcbiAgICAgICAgICAgIHVwZGF0ZUNob2ljZXMoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgJChlbCkuZmluZChcInNlbGVjdFwiKS5vZmYoJ3NlbGVjdDI6c2VsZWN0Jykuc2VsZWN0MihcImRlc3Ryb3lcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZWxlY3QyLXRhZ2JveC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQiLCJpbXBvcnQgKiBhcyBTaWduYXR1cmVQYWQgZnJvbSAnc2lnbmF0dXJlX3BhZCc7XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gICAgdmFyIHdpZGdldCA9IHtcclxuICAgICAgICBuYW1lOiBcInNpZ25hdHVyZXBhZFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlNpZ25hdHVyZSBwYWRcIixcclxuICAgICAgICBpY29uTmFtZTogXCJpY29uLXNpZ25hdHVyZXBhZFwiLFxyXG4gICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHsgcmV0dXJuIHR5cGVvZiBTaWduYXR1cmVQYWQgIT09IHVuZGVmaW5lZDsgfSxcclxuICAgICAgICBwZW5Db2xvcjogXCIxYWIzOTRcIixcclxuICAgICAgICBpc0ZpdCA6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7IHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09ICdzaWduYXR1cmVwYWQnOyB9LFxyXG4gICAgICAgIGh0bWxUZW1wbGF0ZTogXCI8ZGl2PjwvZGl2PlwiLFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJzaWduYXR1cmVwYWRcIiwgW10sIG51bGwsIFwiZW1wdHlcIik7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJzaWduYXR1cmVwYWRcIiwgW3tuYW1lOiBcIndpZHRoOm51bWJlclwiLCBkZWZhdWx0OiAzMDB9LCB7bmFtZTogXCJoZWlnaHQ6bnVtYmVyXCIsIGRlZmF1bHQ6IDIwMH1dKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCAgPSBxdWVzdGlvbi53aWR0aDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHF1ZXN0aW9uLmhlaWdodDsgICAgICAgIFxyXG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgICAgICAgICB2YXIgc2lnbmF0dXJlUGFkID0gbmV3IFNpZ25hdHVyZVBhZChjYW52YXMpO1xyXG4gICAgICAgICAgICBpZihxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICBzaWduYXR1cmVQYWQub2ZmKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2lnbmF0dXJlUGFkLnBlbkNvbG9yID0gcm9vdFdpZGdldC5wZW5Db2xvcjtcclxuICAgICAgICAgICAgc2lnbmF0dXJlUGFkLm9uRW5kID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHNpZ25hdHVyZVBhZC50b0RhdGFVUkwoKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzaWduYXR1cmVQYWQuZnJvbURhdGFVUkwocXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnNpZ25hdHVyZVBhZCA9IHNpZ25hdHVyZVBhZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgaWYocXVlc3Rpb24uc2lnbmF0dXJlUGFkKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQub2ZmKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcXVlc3Rpb24uc2lnbmF0dXJlUGFkID0gbnVsbDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaWduYXR1cmVfcGFkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlNpZ25hdHVyZVBhZFwiLFwiY29tbW9uanMyXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJjb21tb25qc1wiOlwic2lnbmF0dXJlX3BhZFwiLFwiYW1kXCI6XCJzaWduYXR1cmVfcGFkXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwic29ydGFibGVsaXN0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiU29ydGFibGUgbGlzdFwiLFxyXG4gICAgICAgIGljb25OYW1lOiBcImljb24tc29ydGFibGVsaXN0XCIsXHJcbiAgICAgICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHlwZW9mIFNvcnRhYmxlICE9PSB1bmRlZmluZWQ7IH0sXHJcbiAgICAgICAgZGVmYXVsdEpTT046IHtjaG9pY2VzOiBbXCJJdGVtIDFcIiwgXCJJdGVtIDJcIiwgXCJJdGVtIDNcIl19LFxyXG4gICAgICAgIGFyZWFTdHlsZTogXCJib3JkZXI6IDFweCBzb2xpZCAjMWFiMzk0OyB3aWR0aDoxMDAlOyBtaW5IZWlnaHQ6NTBweFwiLFxyXG4gICAgICAgIGl0ZW1TdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOiMxYWIzOTQ7Y29sb3I6I2ZmZjttYXJnaW46NXB4O3BhZGRpbmc6MTBweDtcIixcclxuICAgICAgICBpc0ZpdCA6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7IHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09ICdzb3J0YWJsZWxpc3QnOyB9LFxyXG4gICAgICAgIGh0bWxUZW1wbGF0ZTogXCI8ZGl2PjwvZGl2PlwiLFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJzb3J0YWJsZWxpc3RcIiwgW3tuYW1lOlwiaGFzT3RoZXJcIiwgdmlzaWJsZTogZmFsc2V9LCB7bmFtZTpcInN0b3JlT3RoZXJzQXNDb21tZW50XCIsIHZpc2libGU6IGZhbHNlfV0sIG51bGwsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwic29ydGFibGVsaXN0XCIsIHtuYW1lOiBcImVtcHR5VGV4dFwiLCBkZWZhdWx0OiBcIk1vdmUgaXRlbXMgaGVyZS5cIn0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgcm9vdFdpZGdldCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHZhciBlbXB0eUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHZhciBzb3VyY2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHJlc3VsdEVsLnN0eWxlLmNzc1RleHQgPSByb290V2lkZ2V0LmFyZWFTdHlsZTtcclxuICAgICAgICAgICAgZW1wdHlFbC5pbm5lckhUTUwgPSBxdWVzdGlvbi5lbXB0eVRleHQ7XHJcbiAgICAgICAgICAgIHJlc3VsdEVsLmFwcGVuZENoaWxkKGVtcHR5RWwpO1xyXG4gICAgICAgICAgICBzb3VyY2VFbC5zdHlsZS5jc3NUZXh0ID0gcm9vdFdpZGdldC5hcmVhU3R5bGU7XHJcbiAgICAgICAgICAgIHNvdXJjZUVsLnN0eWxlLm1hcmdpblRvcCA9IFwiMTBweFwiO1xyXG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChyZXN1bHRFbCk7XHJcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKHNvdXJjZUVsKTtcclxuICAgICAgICAgICAgdmFyIGhhc1ZhbHVlSW5SZXN1bHRzID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gcXVlc3Rpb24udmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZighQXJyYXkuaXNBcnJheShyZXMpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSArKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzW2ldID09IHZhbCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0RWwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHJlc3VsdEVsLmFwcGVuZENoaWxkKGVtcHR5RWwpO1xyXG4gICAgICAgICAgICAgICAgc291cmNlRWwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHZhciB3YXNJblJlc3VsdHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLmFjdGl2ZUNob2ljZXMuZm9yRWFjaChmdW5jdGlvbihjaG9pY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5SZXN1dGxzID0gaGFzVmFsdWVJblJlc3VsdHMoY2hvaWNlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB3YXNJblJlc3VsdHMgPSB3YXNJblJlc3VsdHMgfHwgaW5SZXN1dGxzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcmNFbCA9IGluUmVzdXRscyA/IHJlc3VsdEVsIDogc291cmNlRWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdFbC5pbm5lckhUTUwgPSBcIjxkaXYgc3R5bGU9J1wiICsgcm9vdFdpZGdldC5pdGVtU3R5bGUgKyAgXCInPlwiICsgY2hvaWNlLnRleHQgKyBcIjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsW1wiZGF0YS12YWx1ZVwiXSA9IGNob2ljZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzcmNFbC5hcHBlbmRDaGlsZChuZXdFbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGVtcHR5RWwuc3R5bGUuZGlzcGxheSA9IHdhc0luUmVzdWx0cyA/ICBcIm5vbmVcIiA6IFwiXCI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFNvcnRhYmxlLmNyZWF0ZSgkKHJlc3VsdEVsKVswXSwge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTAsXHJcbiAgICAgICAgICAgICAgICBncm91cDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0b3AzJyxcclxuICAgICAgICAgICAgICAgICAgICBwdWxsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHB1dDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uU29ydDogZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LnRvLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5RWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGV2dC50by5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZXZ0LnRvLmNoaWxkcmVuW2ldLmRhdGFzZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBTb3J0YWJsZS5jcmVhdGUoJChzb3VyY2VFbClbMF0sIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXA6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAndG9wMycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHVsbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwdXQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zb3J0YWJsZWpzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlNvcnRhYmxlXCIsXCJjb21tb25qczJcIjpcInNvcnRhYmxlanNcIixcImNvbW1vbmpzXCI6XCJzb3J0YWJsZWpzXCIsXCJhbWRcIjpcInNvcnRhYmxlanNcIn1cbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSB7XHJcbiAgICAgICAgbmFtZTogXCJlZGl0b3JcIixcclxuICAgICAgICB0aXRsZTogXCJFZGl0b3JcIixcclxuICAgICAgICBpY29uTmFtZTogXCJpY29uLWVkaXRvclwiLFxyXG4gICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHsgcmV0dXJuIHR5cGVvZiBDS0VESVRPUiAhPT0gdW5kZWZpbmVkOyB9LFxyXG4gICAgICAgIGlzRml0IDogZnVuY3Rpb24ocXVlc3Rpb24pIHsgXHJcbiAgICAgICAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09ICdlZGl0b3InOyBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGh0bWxUZW1wbGF0ZTogXCI8dGV4dGFyZWEgcm93cz0nMTAnIGNvbHM9JzgwJyBzdHlsZToge3dpZHRoOicxMDAlJ30+PC90ZXh0YXJlYT5cIixcclxuICAgICAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiZWRpdG9yXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImVkaXRvclwiLCB7bmFtZTogXCJoZWlnaHRcIiwgZGVmYXVsdDogMzAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIENLRURJVE9SLmVkaXRvckNvbmZpZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5sYW5ndWFnZSA9ICdlcyc7XHJcbiAgICAgICAgICAgICAgICBjb25maWcuaGVpZ2h0ID0gcXVlc3Rpb24uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLnRvb2xiYXJDYW5Db2xsYXBzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBlZGl0b3IgPSBDS0VESVRPUi5yZXBsYWNlKGVsKTtcclxuICAgICAgICAgICAgdmFyIGlzVmFsdWVDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc1ZhbHVlQ2hhbmdpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGVkaXRvci5zZXREYXRhKHF1ZXN0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZWRpdG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgICAgICAgICBpc1ZhbHVlQ2hhbmdpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBlZGl0b3IuZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgaXNWYWx1ZUNoYW5naW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2stZWRpdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTEiLCJleHBvcnQge2RlZmF1bHQgYXMgaWNoZWNrfSBmcm9tIFwiLi9pY2hlY2suanNcIjtcclxuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdDJ9IGZyb20gXCIuL3NlbGVjdDIuanNcIjtcclxuZXhwb3J0IHtkZWZhdWx0IGFzIGltYWdlcGlja2VyfSBmcm9tIFwiLi9pbWFnZS1waWNrZXIuanNcIjtcclxuZXhwb3J0IHtkZWZhdWx0IGFzIGlucHV0bWFza30gZnJvbSBcIi4vaW5wdXRtYXNrLmpzXCI7XHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBqcXVlcnliYXJyYXRpbmd9IGZyb20gXCIuL2pxdWVyeS1iYXItcmF0aW5nLmpzXCI7XHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBqcXVlcnl1aWRhdGVwaWNrZXJ9IGZyb20gXCIuL2pxdWVyeS11aS1kYXRlcGlja2VyLmpzXCI7XHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBub3Vpc2xpZGVyfSBmcm9tIFwiLi9ub3Vpc2xpZGVyLmpzXCI7XHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3QydGFnYm94fSBmcm9tIFwiLi9zZWxlY3QyLXRhZ2JveC5qc1wiO1xyXG5leHBvcnQge2RlZmF1bHQgYXMgc2lnbmF0dXJlcGFkfSBmcm9tIFwiLi9zaWduYXR1cmVfcGFkLmpzXCI7XHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzb3J0YWJsZWpzfSBmcm9tIFwiLi9zb3J0YWJsZWpzLmpzXCI7XHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBja2VkaXRvcn0gZnJvbSBcIi4vY2stZWRpdG9yLmpzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3VydmV5anMtd2lkZ2V0cy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==