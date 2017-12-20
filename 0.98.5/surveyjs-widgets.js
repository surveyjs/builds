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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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
    widgetIsLoaded: function() {
      return typeof $ == "function" && !!$.fn.iCheck;
    },
    isFit: function(question) {
      var t = question.getType();
      return t === "radiogroup" || t === "checkbox" || t === "matrix";
    },
    isDefaultRender: true,
    afterRender: function(question, el) {
      var rootWidget = this;
      var $el = $(el);
      $el.find("input").data({ iCheck: undefined });

      $el.find("input").iCheck({
        checkboxClass: rootWidget.className,
        radioClass: rootWidget.className
      });
      var select = function() {
        if (question.getType() != "matrix") {
          $el.find("input[value=" + question.value + "]").iCheck("check");
        } else {
          question.generatedVisibleRows.forEach(function(row, index, rows) {
            if (row.value) {
              $(el)
                .find(
                  "input[name='" + row.fullName + "'][value=" + row.value + "]"
                )
                .iCheck("check");
            }
          });
        }
      };
      $el.find("input").on("ifChecked", function(event) {
        if (question.getType() != "matrix") {
          question.value = event.target.value;
        } else {
          question.generatedVisibleRows.forEach(function(row, index, rows) {
            if (row.fullName === event.target.name) {
              row.value = event.target.value;
            }
          });
        }
      });
      question.valueChangedCallback = select;
      select();
    },
    willUnmount: function(question, el) {
      var $el = $(el);
      $el.find("input").iCheck("destroy");
    }
  };

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
    widgetIsLoaded: function() {
      return typeof __WEBPACK_IMPORTED_MODULE_0_jquery___default.a == "function" && !!__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn.select2;
    },
    isFit: function(question) {
      if (widget.activatedBy == "property")
        return (
          question["renderAs"] === "select2" &&
          question.getType() === "dropdown"
        );
      if (widget.activatedBy == "type")
        return (
          typeof Select2 !== undefined && question.getType() === "dropdown"
        );
      if (widget.activatedBy == "customtype")
        return question.getType() === "select2";
      return false;
    },
    activatedByChanged: function(activatedBy) {
      if (!this.widgetIsLoaded()) return;
      widget.activatedBy = activatedBy;
      Survey.JsonObject.metaData.removeProperty("dropdown", "renderAs");
      if (activatedBy == "property") {
        Survey.JsonObject.metaData.addProperty("dropdown", {
          name: "renderAs",
          default: "standard",
          choices: ["standard", "select2"]
        });
      }
      if (activatedBy == "customtype") {
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
      $el
        .parent()
        .get(0)
        .appendChild(othersEl);
      var widget = $el.select2({
        theme: "classic"
      });
      var updateValueHandler = function() {
        $el.val(question.value).trigger("change");
        othersEl.style.display = !question.isOtherSelected ? "none" : "";
      };
      var updateCommentHandler = function() {
        othersEl.value = question.comment ? question.comment : "";
      };
      var othersElChanged = function() {
        question.comment = othersEl.value;
      };
      var updateChoices = function() {
        $el.select2({
          data: question.visibleChoices.map(function(choice) {
            return { id: choice.value, text: choice.text };
          })
        });
        updateValueHandler();
        updateCommentHandler();
      };
      question.choicesChangedCallback = updateChoices;
      updateChoices();
      $el.on("select2:select", function(e) {
        question.value = e.target.value;
      });
      othersEl.onchange = othersElChanged;
      question.valueChangedCallback = updateValueHandler;
      question.commentChangedCallback = updateCommentHandler;
      updateValueHandler();
      updateCommentHandler();
    },
    willUnmount: function(question, el) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el)
        .find("select")
        .off("select2:select")
        .select2("destroy");
    }
  };

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
    widgetIsLoaded: function() {
      return typeof $ == "function" && !!$.fn.imagepicker;
    },
    isFit: function(question) {
      return question.getType() === "imagepicker";
    },
    isDefaultRender: true,
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass(
        "imageitemvalues",
        [{ name: "imageLink" }],
        null,
        "itemvalue"
      );
      Survey.JsonObject.metaData.addClass(
        "imagepicker",
        [
          {
            name: "choices:imageitemvalues",
            onGetValue: function(obj) {
              return Survey.ItemValue.getData(obj.choices);
            },
            onSetValue: function(obj, value) {
              obj.choices = value;
            }
          },
          { name: "showLabel:boolean", default: false },
          { name: "hasOther", visible: false },
          { name: "otherText", visible: false },
          { name: "optionsCaption", visible: false },
          { name: "otherErrorText", visible: false },
          { name: "storeOthersAsComment", visible: false },
          { name: "renderAs", visible: false }
        ],
        null,
        "dropdown"
      );
    },
    afterRender: function(question, el) {
      var $el = $(el).is("select") ? $(el) : $(el).find("select");
      var options = $el.find("option");
      var choices = question.choices;

      for (var i = 1; i < options.length && i - 1 < choices.length; i++) {
        $(options[i]).data("imgSrc", choices[i - 1].imageLink);
        options[i].selected = question.value == options[i].value;
      }
      $el.imagepicker({
        hide_select: true,
        show_label: question.showLabel,
        selected: function(opts) {
          question.value = opts.picker.select[0].value;
        }
      });
    },
    willUnmount: function(question, el) {
      var $el = $(el).find("select");
      $el.data("picker").destroy();
    }
  };

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
    numericGroupSeparator: ",",
    numericAutoGroup: true,
    numericDigits: 2,
    numericDigitsOptional: false,
    numericPrefix: "$",
    numericPlaceholder: "0",
    widgetIsLoaded: function() {
      return typeof __WEBPACK_IMPORTED_MODULE_0_inputmask___default.a != "undefined";
    },
    isFit: function(question) {
      if (question.getType() == "multipletext") return true;
      return (
        question.getType() == "text" &&
        (question.inputMask != "none" || question.inputFormat)
      );
    },
    isDefaultRender: true,
    activatedByChanged: function(activatedBy) {
      if (Survey.JsonObject.metaData.findProperty("text", "inputMask")) return;
      var properties = [
        "inputFormat",
        {
          name: "inputMask",
          default: "none",
          choices: [
            "none",
            "datetime",
            "currency",
            "decimal",
            "email",
            "phone",
            "ip"
          ]
        }
      ];
      Survey.JsonObject.metaData.addProperties("text", properties);
      Survey.JsonObject.metaData.addProperties(
        "matrixdropdowncolumn",
        properties
      );
      Survey.JsonObject.metaData.addProperties("multipletextitem", properties);
    },
    applyInputMask: function(surveyElement, el) {
      var rootWidget = this;
      var mask =
        surveyElement.inputMask != "none"
          ? surveyElement.inputMask
          : surveyElement.inputFormat;
      var options = {};
      if (surveyElement.inputMask != "none")
        options.inputFormat = surveyElement.inputFormat;

      if (
        surveyElement.inputMask == "currency" ||
        surveyElement.inputMask == "decimal"
      ) {
        options.groupSeparator = rootWidget.numericGroupSeparator;
        options.autoGroup = rootWidget.numericAutoGroup;
      }
      if (surveyElement.inputMask == "currency") {
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
      };

      var updateHandler = function() {
        el.value =
          typeof surveyElement.value === "undefined" ? "" : surveyElement.value;
      };
      surveyElement.valueChangedCallback = updateHandler;
      updateHandler();
    },
    afterRender: function(question, el) {
      if (question.getType() != "multipletext") {
        var input = el.querySelector("input") || el;
        this.applyInputMask(question, input);
      } else {
        for (var i = 0; i < question.items.length; i++) {
          var item = question.items[i];
          if (item.inputMask != "none" || item.inputFormat) {
            var input = el.querySelector("#" + item.id);
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
  };

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
    widgetIsLoaded: function() {
      return typeof $ === "function" && !!$.fn.barrating;
    },
    defaultJSON: { choices: [1, 2, 3, 4, 5] },
    isFit: function(question) {
      return question.getType() === "barrating";
    },
    isDefaultRender: true,
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass(
        "barrating",
        [
          { name: "showValues:boolean", default: false },
          { name: "hasOther", visible: false },
          { name: "otherText", visible: false },
          { name: "optionsCaption", visible: false },
          { name: "otherErrorText", visible: false },
          { name: "storeOthersAsComment", visible: false },
          { name: "renderAs", visible: false }
        ],
        null,
        "dropdown"
      );
      Survey.JsonObject.metaData.addProperty("barrating", {
        name: "ratingTheme",
        default: "fontawesome-stars",
        choices: [
          "fontawesome-stars",
          "css-stars",
          "bars-pill",
          "bars-1to10",
          "bars-movie",
          "bars-square",
          "bars-reversed",
          "bars-horizontal",
          "bootstrap-stars",
          "fontawesome-stars-o"
        ]
      });
    },
    afterRender: function(question, el) {
      var $el = $(el).is("select") ? $(el) : $(el).find("select");
      $el.barrating("show", {
        theme: question.ratingTheme,
        initialRating: question.value,
        showValues: question.showValues,
        showSelectedRating: false,
        onSelect: function(value, text) {
          question.value = value;
        }
      });
      question.valueChangedCallback = function() {
        $(el)
          .find("select")
          .barrating("set", question.value);
      };
    },
    willUnmount: function(question, el) {
      var $el = $(el).find("select");
      $el.barrating("destroy");
    }
  };

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
    widgetIsLoaded: function() {
      return typeof $ == "function" && !!$.fn.datepicker;
    },
    isFit: function(question) {
      return question.getType() === "datepicker";
    },
    htmlTemplate:
      "<input class='form-control widget-datepicker' type='text' style='width: 100%;'>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass(
        "datepicker",
        [
          {
            name: "dateFormat",
            default: "mm/dd/yy",
            choices: [
              "mm/dd/yy",
              "yy-mm-dd",
              "d M, y",
              "d MM, y",
              "DD, d MM, yy",
              "'day' d 'of' MM 'in the year' yy"
            ]
          },
          { name: "inputType", visible: false },
          { name: "inputFormat", visible: false },
          { name: "inputMask", visible: false }
        ],
        null,
        "text"
      );
    },
    afterRender: function(question, el) {
      var $el = $(el).is(".widget-datepicker")
        ? $(el)
        : $(el).find(".widget-datepicker");
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
        if (question.value) {
          pickerWidget.datepicker("setDate", new Date(question.value));
        } else {
          pickerWidget.datepicker("setDate", null);
        }
      };
      question.valueChangedCallback();
    },
    willUnmount: function(question, el) {
      var $el = $(el).is(".widget-datepicker")
        ? $(el)
        : $(el).find(".widget-datepicker");
      $el.datepicker("destroy");
    }
  };

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
    widgetIsLoaded: function() {
      return typeof __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a != "undefined";
    },
    isFit: function(question) {
      return question.getType() === "nouislider";
    },
    htmlTemplate: "<div></div>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass("nouislider", [], null, "empty");
      Survey.JsonObject.metaData.addProperties("nouislider", [
        {
          name: "step:number",
          default: 1
        },
        {
          name: "rangeMin:number",
          default: 0
        },
        {
          name: "rangeMax:number",
          default: 100
        }
      ]);
    },
    afterRender: function(question, el) {
      question.value = (question.rangeMin+question.rangeMax)/2;

      el.style.marginBottom = "50px";
      var slider = __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a.create(el, {
        start: question.value,
        connect: [true, false],
        step: question.step,
        tooltips: true,
        pips: {
          mode: "positions",
          values: [0,25,50,75,100],
          density: 5
        },
        range: {
          min: question.rangeMin,
          max: question.rangeMax
        }
      });
      slider.on("set", function() {
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
  };

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
    widgetIsLoaded: function() {
      return typeof __WEBPACK_IMPORTED_MODULE_0_jquery___default.a == "function" && !!__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn.select2;
    },
    defaultJSON: { choices: ["Item 1", "Item 2", "Item 3"] },
    htmlTemplate: "<select multiple='multiple' style='width: 100%;'></select>",
    isFit: function(question) {
      return question.getType() === "tagbox";
    },
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass(
        "tagbox",
        [{ name: "hasOther", visible: false }],
        null,
        "checkbox"
      );
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
        $el.select2({
          data: question.visibleChoices.map(function(choice) {
            return { id: choice.value, text: choice.text };
          })
        });
        updateValueHandler();
      };
      question.choicesChangedCallback = updateChoices;
      question.valueChangedCallback = updateValueHandler;
      $el.on("select2:select", function(e) {
        question.value = (question.value || []).concat(e.params.data.id);
      });
      $el.on("select2:unselect", function(e) {
        var index = (question.value || []).indexOf(e.params.data.id);
        if (index !== -1) {
          var val = question.value;
          val.splice(index, 1);
          question.value = val;
        }
      });
      updateChoices();
    },
    willUnmount: function(question, el) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el)
        .find("select")
        .off("select2:select")
        .select2("destroy");
    }
  };

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


function resizeCanvas(canvas) {
  var context = canvas.getContext("2d");
  var devicePixelRatio = window.devicePixelRatio || 1;
  var backingStoreRatio =
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  var ratio = devicePixelRatio / backingStoreRatio;

  var oldWidth = canvas.width;
  var oldHeight = canvas.height;

  canvas.width = oldWidth * ratio;
  canvas.height = oldHeight * ratio;

  canvas.style.width = oldWidth + "px";
  canvas.style.height = oldHeight + "px";

  context.scale(ratio, ratio);
}

function init(Survey) {
  var widget = {
    name: "signaturepad",
    title: "Signature pad",
    iconName: "icon-signaturepad",
    widgetIsLoaded: function() {
      return typeof __WEBPACK_IMPORTED_MODULE_0_signature_pad__ != "undefined";
    },
    penColor: "#1ab394",
    isFit: function(question) {
      return question.getType() === "signaturepad";
    },
    htmlTemplate:
      "<div class='sjs_sp_container'><div><canvas></canvas></div><div class='sjs_sp_controls'><button type='button' class='sjs_sp_clear' title='Clear'>✖</button></div></div><style>.sjs_sp_container { position: relative; } .sjs_sp_controls { position: absolute; left: 0; bottom: 0; } .sjs_sp_controls > button { user-select: none; }</style>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass("signaturepad", [], null, "empty");
      Survey.JsonObject.metaData.addProperties("signaturepad", [
        { name: "allowClear:boolean", default: true },
        { name: "width:number", default: 300 },
        { name: "height:number", default: 200 }
      ]);
    },
    afterRender: function(question, el) {
      var rootWidget = this;
      var canvas = el.getElementsByTagName("canvas")[0];
      var signaturePad = new __WEBPACK_IMPORTED_MODULE_0_signature_pad__(canvas);
      if (question.isReadOnly) {
        signaturePad.off();
      }
      signaturePad.penColor = rootWidget.penColor;
      signaturePad.onEnd = function() {
        var data = signaturePad.toDataURL();
        question.value = data;
      };
      var updateValueHandler = function() {
        signaturePad.clear();
        canvas.width = question.width;
        canvas.height = question.height;
        resizeCanvas(canvas);
        signaturePad.fromDataURL(question.value);
      };
      question.valueChangedCallback = updateValueHandler;
      updateValueHandler();
      question.signaturePad = signaturePad;
      if (question.allowClear && !question.isReadOnly) {
        el.getElementsByTagName("button")[0].onclick = function() {
          signaturePad.clear();
        };
      } else {
        el.getElementsByTagName("button")[0].remove();
      }
    },
    willUnmount: function(question, el) {
      if (question.signaturePad) {
        question.signaturePad.off();
      }
      question.signaturePad = null;
    }
  };

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
    widgetIsLoaded: function() {
      return typeof __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a != "undefined";
    },
    defaultJSON: { choices: ["Item 1", "Item 2", "Item 3"] },
    areaStyle: "border: 1px solid #1ab394; width:100%; min-height:50px",
    itemStyle: "background-color:#1ab394;color:#fff;margin:5px;padding:10px;",
    isFit: function(question) {
      return question.getType() === "sortablelist";
    },
    htmlTemplate: "<div></div>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass(
        "sortablelist",
        [
          { name: "hasOther", visible: false },
          { name: "storeOthersAsComment", visible: false }
        ],
        null,
        "checkbox"
      );
      Survey.JsonObject.metaData.addProperty("sortablelist", {
        name: "emptyText",
        default: "Move items here."
      });
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
        if (!Array.isArray(res)) return false;
        for (var i = 0; i < res.length; i++) {
          if (res[i] == val) return true;
        }
        return false;
      };
      var isUpdatingQuestionValue = false;
      var updateValueHandler = function() {
        if (isUpdatingQuestionValue) return;
        resultEl.innerHTML = "";
        resultEl.appendChild(emptyEl);
        sourceEl.innerHTML = "";
        var wasInResults = false;
        question.activeChoices.forEach(function(choice) {
          var inResutls = hasValueInResults(choice.value);
          wasInResults = wasInResults || inResutls;
          var srcEl = inResutls ? resultEl : sourceEl;
          var newEl = document.createElement("div");
          newEl.innerHTML =
            "<div style='" +
            rootWidget.itemStyle +
            "'>" +
            choice.text +
            "</div>";
          newEl.dataset["value"] = choice.value;
          srcEl.appendChild(newEl);
        });
        emptyEl.style.display = wasInResults ? "none" : "";
      };
      question.resultEl = __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create($(resultEl)[0], {
        animation: 150,
        group: question.name,
        onSort: function(evt) {
          var result = [];
          if (resultEl.children.length === 1) {
            emptyEl.style.display = "";
          } else {
            emptyEl.style.display = "none";
            for (var i = 0; i < resultEl.children.length; i++) {
              if(typeof resultEl.children[i].dataset.value === 'undefined') continue;
              result.push(resultEl.children[i].dataset.value);
            }
          }
          isUpdatingQuestionValue = true;
          question.value = result;
          isUpdatingQuestionValue = false;
        }
      });
      question.sourceEl = __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create($(sourceEl)[0], {
        animation: 150,
        group: question.name
      });
      question.valueChangedCallback = updateValueHandler;
      updateValueHandler();
    },
    willUnmount: function(question, el) {
      question.resultEl.destroy();
      question.sourceEl.destroy();
    }
  };

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
    widgetIsLoaded: function() {
      return typeof CKEDITOR != "undefined";
    },
    isFit: function(question) {
      return question.getType() === "editor";
    },
    htmlTemplate:
      "<textarea rows='10' cols='80' style: {width:'100%'}></textarea>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass("editor", [], null, "empty");
      Survey.JsonObject.metaData.addProperty("editor", {
        name: "height",
        default: 300
      });
    },
    afterRender: function(question, el) {
      CKEDITOR.editorConfig = function(config) {
        config.language = "es";
        config.height = question.height;
        config.toolbarCanCollapse = true;
      };
      var editor = CKEDITOR.replace(el);
      var isValueChanging = false;
      var updateValueHandler = function() {
        if (isValueChanging) return;
        editor.setData(question.value);
      };
      editor.on("change", function() {
        isValueChanging = true;
        question.value = editor.getData();
        isValueChanging = false;
      });
      question.valueChangedCallback = updateValueHandler;
      updateValueHandler();
    },
    willUnmount: function(question, el) {}
  };

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
function init(Survey) {
  var widget = {
    name: "autocomplete",
    widgetIsLoaded: function() {
      return typeof $ === "function" && !!$.fn.easyAutocomplete;
    },
    isFit: function(question) {
      return question.getType() === "text";
    },
    isDefaultRender: true,
    activatedByChanged: function(activatedBy) {
      if (
        Survey.JsonObject.metaData.findProperty("text", "choices") !== null ||
        Survey.JsonObject.metaData.findProperty("text", "choicesByUrl") !== null
      ) {
        return;
      }
      Survey.JsonObject.metaData.addProperty("text", {
        name: "choices:itemvalues",
        onGetValue: function(obj) {
          return Survey.ItemValue.getData(obj.choices || []);
        },
        onSetValue: function(obj, value) {
          if (!obj.choices) {
            obj.choices = obj.createItemValues("choices");
          }
          obj.choices = value;
        }
      });
      Survey.JsonObject.metaData.addProperty("text", {
        name: "choicesByUrl:restfull",
        className: "ChoicesRestfull",
        onGetValue: function(obj) {
          return obj && obj.choicesByUrl && obj.choicesByUrl.getData();
        },
        onSetValue: function(obj, value) {
          if (!obj.choicesByUrl) {
            obj.choicesByUrl = new Survey.ChoicesRestfull();
          }
          obj.choicesByUrl.setData(value);
        }
      });
    },
    afterRender: function(question, el) {
      var $el = $(el).is("input") ? $(el) : $(el).find("input");
      var options = {
        data: (question.choices || []).map(function(item) {
          return item.getData();
        }),
        adjustWidth: false,
        list: {
          sort: {
            enabled: true
          },
          match: {
            enabled: true
          }
        },
        placeholder: question.placeholder
      };
      if (!!question.choicesByUrl) {
        options.url = function(phrase) {
          return question.choicesByUrl.url;
        };
        options.getValue = question.choicesByUrl.valueName;
        // options.ajaxSettings = {
        //   dataType: "jsonp"
        // };
      }
      $el.easyAutocomplete(options);
    },
    willUnmount: function(question, el) {
      // var $el = $(el).find("input");
      // $el.autocomplete("destroy");
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "type");
}

if (typeof Survey !== "undefined") {
  init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey) {
  var widget = {
    settings: {
      radiogroup: {
        rootClass: "pretty p-default p-round",
        inputType: "radio",
        titleClass: "state p-success"
      },
      checkbox: {
        rootClass: "pretty p-default",
        inputType: "checkbox",
        titleClass: "state p-success"
      }
    },
    name: "pretty-checkbox",
    widgetIsLoaded: function () {
      for (var i = 0; i < document.styleSheets.length; i++) {
        var href = document.styleSheets[i].ownerNode["href"];
        if (!!href && href.indexOf("pretty-checkbox") != -1) {
          return true;
        }
      }
      return false;
    },
    htmlTemplate: "<fieldset></fieldset>",
    isFit: function (question) {
      var type = question.getType();
      return type === "radiogroup" || type === "checkbox"; // || type === "matrix";
    },
    isDefaultRender: false,
    afterRender: function (question, el) {
      var itemInputs = {};
      var options = this.settings[question.getType()];
      var inChangeHandler = false;
      var changeHandler = function (event) {
        inChangeHandler = true;
        try {
          var value = arguments[0].target.value;
          if (question.getType() === "checkbox") {
            var qValue = question.value || [];
            if (arguments[0].target.checked) {
              if (qValue.indexOf(value) === -1) {
                qValue.push(value);
              }
            } else {
              if (qValue.indexOf(value) !== -1) {
                qValue.splice(qValue.indexOf(value), 1);
              }
            }
            question.value = qValue;
          } else {
            question.value = value;
          }
        } finally {
          inChangeHandler = false;
        }
      };
      question.choices.forEach(function (choiceItem, index) {
        var itemRoot = document.createElement("div");
        itemRoot.className = options.rootClass;
        var input = document.createElement("input");
        input.type = options.inputType;
        input.name =
          question.name + (question.getType() === "checkbox" ? "" + index : "");
        input.onchange = changeHandler;
        input.value = choiceItem.value;
        var titleRoot = document.createElement("div");
        titleRoot.className = options.titleClass;
        var label = document.createElement("label");
        label.textContent = choiceItem.text;
        titleRoot.appendChild(label);
        itemRoot.appendChild(input);
        itemRoot.appendChild(titleRoot);
        el.appendChild(itemRoot);

        itemInputs[choiceItem.value] = input;
      });
      var updateValueHandler = function (newValue) {
        if (!inChangeHandler) {
          var checkedItems = newValue || [];
          if (question.getType() === "radiogroup") {
            checkedItems = [newValue];
          }
          Object.values(itemInputs).forEach(function (inputItem) {
            if (checkedItems.indexOf(inputItem.value) !== -1) {
              inputItem.setAttribute("checked", undefined);
            } else {
              inputItem.removeAttribute("checked");
            }
          });
        }
      };
      question.valueChangedCallback = updateValueHandler;
      updateValueHandler(question.value);
    },
    willUnmount: function (question, el) {
      question.valueChangedCallback = undefined;
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "type");
}

if (typeof Survey !== "undefined") {
  init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var Slider = __webpack_require__(19);

function init(Survey) {
  var widget = {
    name: "bootstrap-slider",
    title: "Bootstrap Slider",
    iconName: "icon-bootstrap-slider",
    widgetIsLoaded: function() {
      return typeof Slider != "undefined";
    },
    isFit: function(question) {
      return question.getType() === "bootstrapslider";
    },
    htmlTemplate: "<div></div>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass("bootstrapslider", [], null, "empty");
      Survey.JsonObject.metaData.addProperties("bootstrapslider", [
        {
          name: "step:number",
          default: 1
        },
        {
          name: "rangeMin:number",
          default: 0
        },
        {
          name: "rangeMax:number",
          default: 100
        }
      ]);
    },
    afterRender: function(question, el) {
      var inputEl = document.createElement("input");
      inputEl.id = question.id;
      inputEl.type = "text";
      inputEl.setAttribute("data-slider-id", question.name + "_" + question.id);
      inputEl.setAttribute("data-slider-min", question.rangeMin);
      inputEl.setAttribute("data-slider-max", question.rangeMax);
      inputEl.setAttribute("data-slider-step", question.step);
      inputEl.setAttribute("data-slider-value", question.value);
      el.appendChild(inputEl);
      var slider = new Slider(inputEl, {});

      slider.on("change", function(valueObj) {
        question.value = slider.getValue();
      });
      var updateValueHandler = function() {
        slider.setValue(question.value);
      };
      question.bootstrapSlider = slider;
      question.valueChangedCallback = updateValueHandler;
    },
    willUnmount: function(question, el) {
      question.bootstrapSlider.destroy();
      question.bootstrapSlider = null;
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! =======================================================
                      VERSION  10.0.0              
========================================================= */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! =========================================================
 * bootstrap-slider.js
 *
 * Maintainers:
 *		Kyle Kemp
 *			- Twitter: @seiyria
 *			- Github:  seiyria
 *		Rohit Kalkur
 *			- Twitter: @Rovolutionary
 *			- Github:  rovolution
 *
 * =========================================================
 *
 * bootstrap-slider is released under the MIT License
 * Copyright (c) 2017 Kyle Kemp, Rohit Kalkur, and contributors
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * ========================================================= */

/**
 * Bridget makes jQuery widgets
 * v1.0.1
 * MIT license
 */
var windowIsDefined = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";

(function (factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
		var jQuery;
		try {
			jQuery = require("jquery");
		} catch (err) {
			jQuery = null;
		}
		module.exports = factory(jQuery);
	} else if (window) {
		window.Slider = factory(window.jQuery);
	}
})(function ($) {
	// Constants
	var NAMESPACE_MAIN = 'slider';
	var NAMESPACE_ALTERNATE = 'bootstrapSlider';

	// Polyfill console methods
	if (windowIsDefined && !window.console) {
		window.console = {};
	}
	if (windowIsDefined && !window.console.log) {
		window.console.log = function () {};
	}
	if (windowIsDefined && !window.console.warn) {
		window.console.warn = function () {};
	}

	// Reference to Slider constructor
	var Slider;

	(function ($) {

		'use strict';

		// -------------------------- utils -------------------------- //

		var slice = Array.prototype.slice;

		function noop() {}

		// -------------------------- definition -------------------------- //

		function defineBridget($) {

			// bail if no jQuery
			if (!$) {
				return;
			}

			// -------------------------- addOptionMethod -------------------------- //

			/**
    * adds option method -> $().plugin('option', {...})
    * @param {Function} PluginClass - constructor class
    */
			function addOptionMethod(PluginClass) {
				// don't overwrite original option method
				if (PluginClass.prototype.option) {
					return;
				}

				// option setter
				PluginClass.prototype.option = function (opts) {
					// bail out if not an object
					if (!$.isPlainObject(opts)) {
						return;
					}
					this.options = $.extend(true, this.options, opts);
				};
			}

			// -------------------------- plugin bridge -------------------------- //

			// helper function for logging errors
			// $.error breaks jQuery chaining
			var logError = typeof console === 'undefined' ? noop : function (message) {
				console.error(message);
			};

			/**
    * jQuery plugin bridge, access methods like $elem.plugin('method')
    * @param {String} namespace - plugin name
    * @param {Function} PluginClass - constructor class
    */
			function bridge(namespace, PluginClass) {
				// add to jQuery fn namespace
				$.fn[namespace] = function (options) {
					if (typeof options === 'string') {
						// call plugin method when first argument is a string
						// get arguments for method
						var args = slice.call(arguments, 1);

						for (var i = 0, len = this.length; i < len; i++) {
							var elem = this[i];
							var instance = $.data(elem, namespace);
							if (!instance) {
								logError("cannot call methods on " + namespace + " prior to initialization; " + "attempted to call '" + options + "'");
								continue;
							}
							if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
								logError("no such method '" + options + "' for " + namespace + " instance");
								continue;
							}

							// trigger method with arguments
							var returnValue = instance[options].apply(instance, args);

							// break look and return first value if provided
							if (returnValue !== undefined && returnValue !== instance) {
								return returnValue;
							}
						}
						// return this if no return value
						return this;
					} else {
						var objects = this.map(function () {
							var instance = $.data(this, namespace);
							if (instance) {
								// apply options & init
								instance.option(options);
								instance._init();
							} else {
								// initialize new instance
								instance = new PluginClass(this, options);
								$.data(this, namespace, instance);
							}
							return $(this);
						});

						if (!objects || objects.length > 1) {
							return objects;
						} else {
							return objects[0];
						}
					}
				};
			}

			// -------------------------- bridget -------------------------- //

			/**
    * converts a Prototypical class into a proper jQuery plugin
    *   the class must have a ._init method
    * @param {String} namespace - plugin name, used in $().pluginName
    * @param {Function} PluginClass - constructor class
    */
			$.bridget = function (namespace, PluginClass) {
				addOptionMethod(PluginClass);
				bridge(namespace, PluginClass);
			};

			return $.bridget;
		}

		// get jquery from browser global
		defineBridget($);
	})($);

	/*************************************************
 			BOOTSTRAP-SLIDER SOURCE CODE
 	**************************************************/

	(function ($) {

		var ErrorMsgs = {
			formatInvalidInputErrorMsg: function formatInvalidInputErrorMsg(input) {
				return "Invalid input value '" + input + "' passed in";
			},
			callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
		};

		var SliderScale = {
			linear: {
				toValue: function toValue(percentage) {
					var rawValue = percentage / 100 * (this.options.max - this.options.min);
					var shouldAdjustWithBase = true;
					if (this.options.ticks_positions.length > 0) {
						var minv,
						    maxv,
						    minp,
						    maxp = 0;
						for (var i = 1; i < this.options.ticks_positions.length; i++) {
							if (percentage <= this.options.ticks_positions[i]) {
								minv = this.options.ticks[i - 1];
								minp = this.options.ticks_positions[i - 1];
								maxv = this.options.ticks[i];
								maxp = this.options.ticks_positions[i];

								break;
							}
						}
						var partialPercentage = (percentage - minp) / (maxp - minp);
						rawValue = minv + partialPercentage * (maxv - minv);
						shouldAdjustWithBase = false;
					}

					var adjustment = shouldAdjustWithBase ? this.options.min : 0;
					var value = adjustment + Math.round(rawValue / this.options.step) * this.options.step;
					if (value < this.options.min) {
						return this.options.min;
					} else if (value > this.options.max) {
						return this.options.max;
					} else {
						return value;
					}
				},
				toPercentage: function toPercentage(value) {
					if (this.options.max === this.options.min) {
						return 0;
					}

					if (this.options.ticks_positions.length > 0) {
						var minv,
						    maxv,
						    minp,
						    maxp = 0;
						for (var i = 0; i < this.options.ticks.length; i++) {
							if (value <= this.options.ticks[i]) {
								minv = i > 0 ? this.options.ticks[i - 1] : 0;
								minp = i > 0 ? this.options.ticks_positions[i - 1] : 0;
								maxv = this.options.ticks[i];
								maxp = this.options.ticks_positions[i];

								break;
							}
						}
						if (i > 0) {
							var partialPercentage = (value - minv) / (maxv - minv);
							return minp + partialPercentage * (maxp - minp);
						}
					}

					return 100 * (value - this.options.min) / (this.options.max - this.options.min);
				}
			},

			logarithmic: {
				/* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
				toValue: function toValue(percentage) {
					var min = this.options.min === 0 ? 0 : Math.log(this.options.min);
					var max = Math.log(this.options.max);
					var value = Math.exp(min + (max - min) * percentage / 100);
					if (Math.round(value) === this.options.max) {
						return this.options.max;
					}
					value = this.options.min + Math.round((value - this.options.min) / this.options.step) * this.options.step;
					/* Rounding to the nearest step could exceed the min or
      * max, so clip to those values. */
					if (value < this.options.min) {
						return this.options.min;
					} else if (value > this.options.max) {
						return this.options.max;
					} else {
						return value;
					}
				},
				toPercentage: function toPercentage(value) {
					if (this.options.max === this.options.min) {
						return 0;
					} else {
						var max = Math.log(this.options.max);
						var min = this.options.min === 0 ? 0 : Math.log(this.options.min);
						var v = value === 0 ? 0 : Math.log(value);
						return 100 * (v - min) / (max - min);
					}
				}
			}
		};

		/*************************************************
  						CONSTRUCTOR
  	**************************************************/
		Slider = function Slider(element, options) {
			createNewSlider.call(this, element, options);
			return this;
		};

		function createNewSlider(element, options) {

			/*
   	The internal state object is used to store data about the current 'state' of slider.
   	This includes values such as the `value`, `enabled`, etc...
   */
			this._state = {
				value: null,
				enabled: null,
				offset: null,
				size: null,
				percentage: null,
				inDrag: false,
				over: false
			};

			// The objects used to store the reference to the tick methods if ticks_tooltip is on
			this.ticksCallbackMap = {};
			this.handleCallbackMap = {};

			if (typeof element === "string") {
				this.element = document.querySelector(element);
			} else if (element instanceof HTMLElement) {
				this.element = element;
			}

			/*************************************************
   					Process Options
   	**************************************************/
			options = options ? options : {};
			var optionTypes = Object.keys(this.defaultOptions);

			for (var i = 0; i < optionTypes.length; i++) {
				var optName = optionTypes[i];

				// First check if an option was passed in via the constructor
				var val = options[optName];
				// If no data attrib, then check data atrributes
				val = typeof val !== 'undefined' ? val : getDataAttrib(this.element, optName);
				// Finally, if nothing was specified, use the defaults
				val = val !== null ? val : this.defaultOptions[optName];

				// Set all options on the instance of the Slider
				if (!this.options) {
					this.options = {};
				}
				this.options[optName] = val;
			}

			// Check options.rtl
			if (this.options.rtl === 'auto') {
				this.options.rtl = window.getComputedStyle(this.element).direction === 'rtl';
			}

			/*
   	Validate `tooltip_position` against 'orientation`
   	- if `tooltip_position` is incompatible with orientation, swith it to a default compatible with specified `orientation`
   		-- default for "vertical" -> "right", "left" if rtl
   		-- default for "horizontal" -> "top"
   */
			if (this.options.orientation === "vertical" && (this.options.tooltip_position === "top" || this.options.tooltip_position === "bottom")) {
				if (this.options.rtl) {
					this.options.tooltip_position = "left";
				} else {
					this.options.tooltip_position = "right";
				}
			} else if (this.options.orientation === "horizontal" && (this.options.tooltip_position === "left" || this.options.tooltip_position === "right")) {

				this.options.tooltip_position = "top";
			}

			function getDataAttrib(element, optName) {
				var dataName = "data-slider-" + optName.replace(/_/g, '-');
				var dataValString = element.getAttribute(dataName);

				try {
					return JSON.parse(dataValString);
				} catch (err) {
					return dataValString;
				}
			}

			/*************************************************
   					Create Markup
   	**************************************************/

			var origWidth = this.element.style.width;
			var updateSlider = false;
			var parent = this.element.parentNode;
			var sliderTrackSelection;
			var sliderTrackLow, sliderTrackHigh;
			var sliderMinHandle;
			var sliderMaxHandle;

			if (this.sliderElem) {
				updateSlider = true;
			} else {
				/* Create elements needed for slider */
				this.sliderElem = document.createElement("div");
				this.sliderElem.className = "slider";

				/* Create slider track elements */
				var sliderTrack = document.createElement("div");
				sliderTrack.className = "slider-track";

				sliderTrackLow = document.createElement("div");
				sliderTrackLow.className = "slider-track-low";

				sliderTrackSelection = document.createElement("div");
				sliderTrackSelection.className = "slider-selection";

				sliderTrackHigh = document.createElement("div");
				sliderTrackHigh.className = "slider-track-high";

				sliderMinHandle = document.createElement("div");
				sliderMinHandle.className = "slider-handle min-slider-handle";
				sliderMinHandle.setAttribute('role', 'slider');
				sliderMinHandle.setAttribute('aria-valuemin', this.options.min);
				sliderMinHandle.setAttribute('aria-valuemax', this.options.max);

				sliderMaxHandle = document.createElement("div");
				sliderMaxHandle.className = "slider-handle max-slider-handle";
				sliderMaxHandle.setAttribute('role', 'slider');
				sliderMaxHandle.setAttribute('aria-valuemin', this.options.min);
				sliderMaxHandle.setAttribute('aria-valuemax', this.options.max);

				sliderTrack.appendChild(sliderTrackLow);
				sliderTrack.appendChild(sliderTrackSelection);
				sliderTrack.appendChild(sliderTrackHigh);

				/* Create highlight range elements */
				this.rangeHighlightElements = [];
				var rangeHighlightsOpts = this.options.rangeHighlights;
				if (Array.isArray(rangeHighlightsOpts) && rangeHighlightsOpts.length > 0) {
					for (var j = 0; j < rangeHighlightsOpts.length; j++) {
						var rangeHighlightElement = document.createElement("div");
						var customClassString = rangeHighlightsOpts[j].class || "";
						rangeHighlightElement.className = "slider-rangeHighlight slider-selection " + customClassString;
						this.rangeHighlightElements.push(rangeHighlightElement);
						sliderTrack.appendChild(rangeHighlightElement);
					}
				}

				/* Add aria-labelledby to handle's */
				var isLabelledbyArray = Array.isArray(this.options.labelledby);
				if (isLabelledbyArray && this.options.labelledby[0]) {
					sliderMinHandle.setAttribute('aria-labelledby', this.options.labelledby[0]);
				}
				if (isLabelledbyArray && this.options.labelledby[1]) {
					sliderMaxHandle.setAttribute('aria-labelledby', this.options.labelledby[1]);
				}
				if (!isLabelledbyArray && this.options.labelledby) {
					sliderMinHandle.setAttribute('aria-labelledby', this.options.labelledby);
					sliderMaxHandle.setAttribute('aria-labelledby', this.options.labelledby);
				}

				/* Create ticks */
				this.ticks = [];
				if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
					this.ticksContainer = document.createElement('div');
					this.ticksContainer.className = 'slider-tick-container';

					for (i = 0; i < this.options.ticks.length; i++) {
						var tick = document.createElement('div');
						tick.className = 'slider-tick';
						if (this.options.ticks_tooltip) {
							var tickListenerReference = this._addTickListener();
							var enterCallback = tickListenerReference.addMouseEnter(this, tick, i);
							var leaveCallback = tickListenerReference.addMouseLeave(this, tick);

							this.ticksCallbackMap[i] = {
								mouseEnter: enterCallback,
								mouseLeave: leaveCallback
							};
						}
						this.ticks.push(tick);
						this.ticksContainer.appendChild(tick);
					}

					sliderTrackSelection.className += " tick-slider-selection";
				}

				this.tickLabels = [];
				if (Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0) {
					this.tickLabelContainer = document.createElement('div');
					this.tickLabelContainer.className = 'slider-tick-label-container';

					for (i = 0; i < this.options.ticks_labels.length; i++) {
						var label = document.createElement('div');
						var noTickPositionsSpecified = this.options.ticks_positions.length === 0;
						var tickLabelsIndex = this.options.reversed && noTickPositionsSpecified ? this.options.ticks_labels.length - (i + 1) : i;
						label.className = 'slider-tick-label';
						label.innerHTML = this.options.ticks_labels[tickLabelsIndex];

						this.tickLabels.push(label);
						this.tickLabelContainer.appendChild(label);
					}
				}

				var createAndAppendTooltipSubElements = function createAndAppendTooltipSubElements(tooltipElem) {
					var arrow = document.createElement("div");
					arrow.className = "tooltip-arrow";

					var inner = document.createElement("div");
					inner.className = "tooltip-inner";

					tooltipElem.appendChild(arrow);
					tooltipElem.appendChild(inner);
				};

				/* Create tooltip elements */
				var sliderTooltip = document.createElement("div");
				sliderTooltip.className = "tooltip tooltip-main";
				sliderTooltip.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltip);

				var sliderTooltipMin = document.createElement("div");
				sliderTooltipMin.className = "tooltip tooltip-min";
				sliderTooltipMin.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltipMin);

				var sliderTooltipMax = document.createElement("div");
				sliderTooltipMax.className = "tooltip tooltip-max";
				sliderTooltipMax.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltipMax);

				/* Append components to sliderElem */
				this.sliderElem.appendChild(sliderTrack);
				this.sliderElem.appendChild(sliderTooltip);
				this.sliderElem.appendChild(sliderTooltipMin);
				this.sliderElem.appendChild(sliderTooltipMax);

				if (this.tickLabelContainer) {
					this.sliderElem.appendChild(this.tickLabelContainer);
				}
				if (this.ticksContainer) {
					this.sliderElem.appendChild(this.ticksContainer);
				}

				this.sliderElem.appendChild(sliderMinHandle);
				this.sliderElem.appendChild(sliderMaxHandle);

				/* Append slider element to parent container, right before the original <input> element */
				parent.insertBefore(this.sliderElem, this.element);

				/* Hide original <input> element */
				this.element.style.display = "none";
			}
			/* If JQuery exists, cache JQ references */
			if ($) {
				this.$element = $(this.element);
				this.$sliderElem = $(this.sliderElem);
			}

			/*************************************************
   						Setup
   	**************************************************/
			this.eventToCallbackMap = {};
			this.sliderElem.id = this.options.id;

			this.touchCapable = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;

			this.touchX = 0;
			this.touchY = 0;

			this.tooltip = this.sliderElem.querySelector('.tooltip-main');
			this.tooltipInner = this.tooltip.querySelector('.tooltip-inner');

			this.tooltip_min = this.sliderElem.querySelector('.tooltip-min');
			this.tooltipInner_min = this.tooltip_min.querySelector('.tooltip-inner');

			this.tooltip_max = this.sliderElem.querySelector('.tooltip-max');
			this.tooltipInner_max = this.tooltip_max.querySelector('.tooltip-inner');

			if (SliderScale[this.options.scale]) {
				this.options.scale = SliderScale[this.options.scale];
			}

			if (updateSlider === true) {
				// Reset classes
				this._removeClass(this.sliderElem, 'slider-horizontal');
				this._removeClass(this.sliderElem, 'slider-vertical');
				this._removeClass(this.sliderElem, 'slider-rtl');
				this._removeClass(this.tooltip, 'hide');
				this._removeClass(this.tooltip_min, 'hide');
				this._removeClass(this.tooltip_max, 'hide');

				// Undo existing inline styles for track
				["left", "right", "top", "width", "height"].forEach(function (prop) {
					this._removeProperty(this.trackLow, prop);
					this._removeProperty(this.trackSelection, prop);
					this._removeProperty(this.trackHigh, prop);
				}, this);

				// Undo inline styles on handles
				[this.handle1, this.handle2].forEach(function (handle) {
					this._removeProperty(handle, 'left');
					this._removeProperty(handle, 'right');
					this._removeProperty(handle, 'top');
				}, this);

				// Undo inline styles and classes on tooltips
				[this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function (tooltip) {
					this._removeProperty(tooltip, 'left');
					this._removeProperty(tooltip, 'right');
					this._removeProperty(tooltip, 'top');

					this._removeClass(tooltip, 'right');
					this._removeClass(tooltip, 'left');
					this._removeClass(tooltip, 'top');
				}, this);
			}

			if (this.options.orientation === 'vertical') {
				this._addClass(this.sliderElem, 'slider-vertical');
				this.stylePos = 'top';
				this.mousePos = 'pageY';
				this.sizePos = 'offsetHeight';
			} else {
				this._addClass(this.sliderElem, 'slider-horizontal');
				this.sliderElem.style.width = origWidth;
				this.options.orientation = 'horizontal';
				if (this.options.rtl) {
					this.stylePos = 'right';
				} else {
					this.stylePos = 'left';
				}
				this.mousePos = 'pageX';
				this.sizePos = 'offsetWidth';
			}
			// specific rtl class
			if (this.options.rtl) {
				this._addClass(this.sliderElem, 'slider-rtl');
			}
			this._setTooltipPosition();
			/* In case ticks are specified, overwrite the min and max bounds */
			if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
				this.options.max = Math.max.apply(Math, this.options.ticks);
				this.options.min = Math.min.apply(Math, this.options.ticks);
			}

			if (Array.isArray(this.options.value)) {
				this.options.range = true;
				this._state.value = this.options.value;
			} else if (this.options.range) {
				// User wants a range, but value is not an array
				this._state.value = [this.options.value, this.options.max];
			} else {
				this._state.value = this.options.value;
			}

			this.trackLow = sliderTrackLow || this.trackLow;
			this.trackSelection = sliderTrackSelection || this.trackSelection;
			this.trackHigh = sliderTrackHigh || this.trackHigh;

			if (this.options.selection === 'none') {
				this._addClass(this.trackLow, 'hide');
				this._addClass(this.trackSelection, 'hide');
				this._addClass(this.trackHigh, 'hide');
			} else if (this.options.selection === 'after' || this.options.selection === 'before') {
				this._removeClass(this.trackLow, 'hide');
				this._removeClass(this.trackSelection, 'hide');
				this._removeClass(this.trackHigh, 'hide');
			}

			this.handle1 = sliderMinHandle || this.handle1;
			this.handle2 = sliderMaxHandle || this.handle2;

			if (updateSlider === true) {
				// Reset classes
				this._removeClass(this.handle1, 'round triangle');
				this._removeClass(this.handle2, 'round triangle hide');

				for (i = 0; i < this.ticks.length; i++) {
					this._removeClass(this.ticks[i], 'round triangle hide');
				}
			}

			var availableHandleModifiers = ['round', 'triangle', 'custom'];
			var isValidHandleType = availableHandleModifiers.indexOf(this.options.handle) !== -1;
			if (isValidHandleType) {
				this._addClass(this.handle1, this.options.handle);
				this._addClass(this.handle2, this.options.handle);

				for (i = 0; i < this.ticks.length; i++) {
					this._addClass(this.ticks[i], this.options.handle);
				}
			}

			this._state.offset = this._offset(this.sliderElem);
			this._state.size = this.sliderElem[this.sizePos];
			this.setValue(this._state.value);

			/******************************************
   				Bind Event Listeners
   	******************************************/

			// Bind keyboard handlers
			this.handle1Keydown = this._keydown.bind(this, 0);
			this.handle1.addEventListener("keydown", this.handle1Keydown, false);

			this.handle2Keydown = this._keydown.bind(this, 1);
			this.handle2.addEventListener("keydown", this.handle2Keydown, false);

			this.mousedown = this._mousedown.bind(this);
			this.touchstart = this._touchstart.bind(this);
			this.touchmove = this._touchmove.bind(this);

			if (this.touchCapable) {
				// Test for passive event support
				var supportsPassive = false;
				try {
					var opts = Object.defineProperty({}, 'passive', {
						get: function get() {
							supportsPassive = true;
						}
					});
					window.addEventListener("test", null, opts);
				} catch (e) {}
				// Use our detect's results. passive applied if supported, capture will be false either way.
				var eventOptions = supportsPassive ? { passive: true } : false;
				// Bind touch handlers
				this.sliderElem.addEventListener("touchstart", this.touchstart, eventOptions);
				this.sliderElem.addEventListener("touchmove", this.touchmove, eventOptions);
			}
			this.sliderElem.addEventListener("mousedown", this.mousedown, false);

			// Bind window handlers
			this.resize = this._resize.bind(this);
			window.addEventListener("resize", this.resize, false);

			// Bind tooltip-related handlers
			if (this.options.tooltip === 'hide') {
				this._addClass(this.tooltip, 'hide');
				this._addClass(this.tooltip_min, 'hide');
				this._addClass(this.tooltip_max, 'hide');
			} else if (this.options.tooltip === 'always') {
				this._showTooltip();
				this._alwaysShowTooltip = true;
			} else {
				this.showTooltip = this._showTooltip.bind(this);
				this.hideTooltip = this._hideTooltip.bind(this);

				if (this.options.ticks_tooltip) {
					var callbackHandle = this._addTickListener();
					//create handle1 listeners and store references in map
					var mouseEnter = callbackHandle.addMouseEnter(this, this.handle1);
					var mouseLeave = callbackHandle.addMouseLeave(this, this.handle1);
					this.handleCallbackMap.handle1 = {
						mouseEnter: mouseEnter,
						mouseLeave: mouseLeave
					};
					//create handle2 listeners and store references in map
					mouseEnter = callbackHandle.addMouseEnter(this, this.handle2);
					mouseLeave = callbackHandle.addMouseLeave(this, this.handle2);
					this.handleCallbackMap.handle2 = {
						mouseEnter: mouseEnter,
						mouseLeave: mouseLeave
					};
				} else {
					this.sliderElem.addEventListener("mouseenter", this.showTooltip, false);
					this.sliderElem.addEventListener("mouseleave", this.hideTooltip, false);
				}

				this.handle1.addEventListener("focus", this.showTooltip, false);
				this.handle1.addEventListener("blur", this.hideTooltip, false);

				this.handle2.addEventListener("focus", this.showTooltip, false);
				this.handle2.addEventListener("blur", this.hideTooltip, false);
			}

			if (this.options.enabled) {
				this.enable();
			} else {
				this.disable();
			}
		}

		/*************************************************
  				INSTANCE PROPERTIES/METHODS
  	- Any methods bound to the prototype are considered
  part of the plugin's `public` interface
  	**************************************************/
		Slider.prototype = {
			_init: function _init() {}, // NOTE: Must exist to support bridget

			constructor: Slider,

			defaultOptions: {
				id: "",
				min: 0,
				max: 10,
				step: 1,
				precision: 0,
				orientation: 'horizontal',
				value: 5,
				range: false,
				selection: 'before',
				tooltip: 'show',
				tooltip_split: false,
				handle: 'round',
				reversed: false,
				rtl: 'auto',
				enabled: true,
				formatter: function formatter(val) {
					if (Array.isArray(val)) {
						return val[0] + " : " + val[1];
					} else {
						return val;
					}
				},
				natural_arrow_keys: false,
				ticks: [],
				ticks_positions: [],
				ticks_labels: [],
				ticks_snap_bounds: 0,
				ticks_tooltip: false,
				scale: 'linear',
				focus: false,
				tooltip_position: null,
				labelledby: null,
				rangeHighlights: []
			},

			getElement: function getElement() {
				return this.sliderElem;
			},

			getValue: function getValue() {
				if (this.options.range) {
					return this._state.value;
				} else {
					return this._state.value[0];
				}
			},

			setValue: function setValue(val, triggerSlideEvent, triggerChangeEvent) {
				if (!val) {
					val = 0;
				}
				var oldValue = this.getValue();
				this._state.value = this._validateInputValue(val);
				var applyPrecision = this._applyPrecision.bind(this);

				if (this.options.range) {
					this._state.value[0] = applyPrecision(this._state.value[0]);
					this._state.value[1] = applyPrecision(this._state.value[1]);

					this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0]));
					this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]));
				} else {
					this._state.value = applyPrecision(this._state.value);
					this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))];
					this._addClass(this.handle2, 'hide');
					if (this.options.selection === 'after') {
						this._state.value[1] = this.options.max;
					} else {
						this._state.value[1] = this.options.min;
					}
				}

				if (this.options.max > this.options.min) {
					this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), this.options.step * 100 / (this.options.max - this.options.min)];
				} else {
					this._state.percentage = [0, 0, 100];
				}

				this._layout();
				var newValue = this.options.range ? this._state.value : this._state.value[0];

				this._setDataVal(newValue);
				if (triggerSlideEvent === true) {
					this._trigger('slide', newValue);
				}
				if (oldValue !== newValue && triggerChangeEvent === true) {
					this._trigger('change', {
						oldValue: oldValue,
						newValue: newValue
					});
				}

				return this;
			},

			destroy: function destroy() {
				// Remove event handlers on slider elements
				this._removeSliderEventHandlers();

				// Remove the slider from the DOM
				this.sliderElem.parentNode.removeChild(this.sliderElem);
				/* Show original <input> element */
				this.element.style.display = "";

				// Clear out custom event bindings
				this._cleanUpEventCallbacksMap();

				// Remove data values
				this.element.removeAttribute("data");

				// Remove JQuery handlers/data
				if ($) {
					this._unbindJQueryEventHandlers();
					this.$element.removeData('slider');
				}
			},

			disable: function disable() {
				this._state.enabled = false;
				this.handle1.removeAttribute("tabindex");
				this.handle2.removeAttribute("tabindex");
				this._addClass(this.sliderElem, 'slider-disabled');
				this._trigger('slideDisabled');

				return this;
			},

			enable: function enable() {
				this._state.enabled = true;
				this.handle1.setAttribute("tabindex", 0);
				this.handle2.setAttribute("tabindex", 0);
				this._removeClass(this.sliderElem, 'slider-disabled');
				this._trigger('slideEnabled');

				return this;
			},

			toggle: function toggle() {
				if (this._state.enabled) {
					this.disable();
				} else {
					this.enable();
				}
				return this;
			},

			isEnabled: function isEnabled() {
				return this._state.enabled;
			},

			on: function on(evt, callback) {
				this._bindNonQueryEventHandler(evt, callback);
				return this;
			},

			off: function off(evt, callback) {
				if ($) {
					this.$element.off(evt, callback);
					this.$sliderElem.off(evt, callback);
				} else {
					this._unbindNonQueryEventHandler(evt, callback);
				}
			},

			getAttribute: function getAttribute(attribute) {
				if (attribute) {
					return this.options[attribute];
				} else {
					return this.options;
				}
			},

			setAttribute: function setAttribute(attribute, value) {
				this.options[attribute] = value;
				return this;
			},

			refresh: function refresh() {
				this._removeSliderEventHandlers();
				createNewSlider.call(this, this.element, this.options);
				if ($) {
					// Bind new instance of slider to the element
					$.data(this.element, 'slider', this);
				}
				return this;
			},

			relayout: function relayout() {
				this._resize();
				this._layout();
				return this;
			},

			/******************************+
   				HELPERS
   	- Any method that is not part of the public interface.
   - Place it underneath this comment block and write its signature like so:
   		_fnName : function() {...}
   	********************************/
			_removeSliderEventHandlers: function _removeSliderEventHandlers() {
				// Remove keydown event listeners
				this.handle1.removeEventListener("keydown", this.handle1Keydown, false);
				this.handle2.removeEventListener("keydown", this.handle2Keydown, false);

				//remove the listeners from the ticks and handles if they had their own listeners
				if (this.options.ticks_tooltip) {
					var ticks = this.ticksContainer.getElementsByClassName('slider-tick');
					for (var i = 0; i < ticks.length; i++) {
						ticks[i].removeEventListener('mouseenter', this.ticksCallbackMap[i].mouseEnter, false);
						ticks[i].removeEventListener('mouseleave', this.ticksCallbackMap[i].mouseLeave, false);
					}
					this.handle1.removeEventListener('mouseenter', this.handleCallbackMap.handle1.mouseEnter, false);
					this.handle2.removeEventListener('mouseenter', this.handleCallbackMap.handle2.mouseEnter, false);
					this.handle1.removeEventListener('mouseleave', this.handleCallbackMap.handle1.mouseLeave, false);
					this.handle2.removeEventListener('mouseleave', this.handleCallbackMap.handle2.mouseLeave, false);
				}

				this.handleCallbackMap = null;
				this.ticksCallbackMap = null;

				if (this.showTooltip) {
					this.handle1.removeEventListener("focus", this.showTooltip, false);
					this.handle2.removeEventListener("focus", this.showTooltip, false);
				}
				if (this.hideTooltip) {
					this.handle1.removeEventListener("blur", this.hideTooltip, false);
					this.handle2.removeEventListener("blur", this.hideTooltip, false);
				}

				// Remove event listeners from sliderElem
				if (this.showTooltip) {
					this.sliderElem.removeEventListener("mouseenter", this.showTooltip, false);
				}
				if (this.hideTooltip) {
					this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, false);
				}
				this.sliderElem.removeEventListener("touchstart", this.touchstart, false);
				this.sliderElem.removeEventListener("touchmove", this.touchmove, false);
				this.sliderElem.removeEventListener("mousedown", this.mousedown, false);

				// Remove window event listener
				window.removeEventListener("resize", this.resize, false);
			},
			_bindNonQueryEventHandler: function _bindNonQueryEventHandler(evt, callback) {
				if (this.eventToCallbackMap[evt] === undefined) {
					this.eventToCallbackMap[evt] = [];
				}
				this.eventToCallbackMap[evt].push(callback);
			},
			_unbindNonQueryEventHandler: function _unbindNonQueryEventHandler(evt, callback) {
				var callbacks = this.eventToCallbackMap[evt];
				if (callbacks !== undefined) {
					for (var i = 0; i < callbacks.length; i++) {
						if (callbacks[i] === callback) {
							callbacks.splice(i, 1);
							break;
						}
					}
				}
			},
			_cleanUpEventCallbacksMap: function _cleanUpEventCallbacksMap() {
				var eventNames = Object.keys(this.eventToCallbackMap);
				for (var i = 0; i < eventNames.length; i++) {
					var eventName = eventNames[i];
					delete this.eventToCallbackMap[eventName];
				}
			},
			_showTooltip: function _showTooltip() {
				if (this.options.tooltip_split === false) {
					this._addClass(this.tooltip, 'in');
					this.tooltip_min.style.display = 'none';
					this.tooltip_max.style.display = 'none';
				} else {
					this._addClass(this.tooltip_min, 'in');
					this._addClass(this.tooltip_max, 'in');
					this.tooltip.style.display = 'none';
				}
				this._state.over = true;
			},
			_hideTooltip: function _hideTooltip() {
				if (this._state.inDrag === false && this.alwaysShowTooltip !== true) {
					this._removeClass(this.tooltip, 'in');
					this._removeClass(this.tooltip_min, 'in');
					this._removeClass(this.tooltip_max, 'in');
				}
				this._state.over = false;
			},
			_setToolTipOnMouseOver: function _setToolTipOnMouseOver(tempState) {
				var formattedTooltipVal = this.options.formatter(!tempState ? this._state.value[0] : tempState.value[0]);
				var positionPercentages = !tempState ? getPositionPercentages(this._state, this.options.reversed) : getPositionPercentages(tempState, this.options.reversed);
				this._setText(this.tooltipInner, formattedTooltipVal);

				this.tooltip.style[this.stylePos] = positionPercentages[0] + "%";

				function getPositionPercentages(state, reversed) {
					if (reversed) {
						return [100 - state.percentage[0], this.options.range ? 100 - state.percentage[1] : state.percentage[1]];
					}
					return [state.percentage[0], state.percentage[1]];
				}
			},
			_addTickListener: function _addTickListener() {
				return {
					addMouseEnter: function addMouseEnter(reference, tick, index) {
						var enter = function enter() {
							var tempState = reference._state;
							var idString = index >= 0 ? index : this.attributes['aria-valuenow'].value;
							var hoverIndex = parseInt(idString, 10);
							tempState.value[0] = hoverIndex;
							tempState.percentage[0] = reference.options.ticks_positions[hoverIndex];
							reference._setToolTipOnMouseOver(tempState);
							reference._showTooltip();
						};
						tick.addEventListener("mouseenter", enter, false);
						return enter;
					},
					addMouseLeave: function addMouseLeave(reference, tick) {
						var leave = function leave() {
							reference._hideTooltip();
						};
						tick.addEventListener("mouseleave", leave, false);
						return leave;
					}
				};
			},
			_layout: function _layout() {
				var positionPercentages;

				if (this.options.reversed) {
					positionPercentages = [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]];
				} else {
					positionPercentages = [this._state.percentage[0], this._state.percentage[1]];
				}

				this.handle1.style[this.stylePos] = positionPercentages[0] + "%";
				this.handle1.setAttribute('aria-valuenow', this._state.value[0]);
				if (isNaN(this.options.formatter(this._state.value[0]))) {
					this.handle1.setAttribute('aria-valuetext', this.options.formatter(this._state.value[0]));
				}

				this.handle2.style[this.stylePos] = positionPercentages[1] + "%";
				this.handle2.setAttribute('aria-valuenow', this._state.value[1]);
				if (isNaN(this.options.formatter(this._state.value[1]))) {
					this.handle2.setAttribute('aria-valuetext', this.options.formatter(this._state.value[1]));
				}

				/* Position highlight range elements */
				if (this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0) {
					for (var _i = 0; _i < this.options.rangeHighlights.length; _i++) {
						var startPercent = this._toPercentage(this.options.rangeHighlights[_i].start);
						var endPercent = this._toPercentage(this.options.rangeHighlights[_i].end);

						if (this.options.reversed) {
							var sp = 100 - endPercent;
							endPercent = 100 - startPercent;
							startPercent = sp;
						}

						var currentRange = this._createHighlightRange(startPercent, endPercent);

						if (currentRange) {
							if (this.options.orientation === 'vertical') {
								this.rangeHighlightElements[_i].style.top = currentRange.start + "%";
								this.rangeHighlightElements[_i].style.height = currentRange.size + "%";
							} else {
								if (this.options.rtl) {
									this.rangeHighlightElements[_i].style.right = currentRange.start + "%";
								} else {
									this.rangeHighlightElements[_i].style.left = currentRange.start + "%";
								}
								this.rangeHighlightElements[_i].style.width = currentRange.size + "%";
							}
						} else {
							this.rangeHighlightElements[_i].style.display = "none";
						}
					}
				}

				/* Position ticks and labels */
				if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {

					var styleSize = this.options.orientation === 'vertical' ? 'height' : 'width';
					var styleMargin;
					if (this.options.orientation === 'vertical') {
						styleMargin = 'marginTop';
					} else {
						if (this.options.rtl) {
							styleMargin = 'marginRight';
						} else {
							styleMargin = 'marginLeft';
						}
					}
					var labelSize = this._state.size / (this.options.ticks.length - 1);

					if (this.tickLabelContainer) {
						var extraMargin = 0;
						if (this.options.ticks_positions.length === 0) {
							if (this.options.orientation !== 'vertical') {
								this.tickLabelContainer.style[styleMargin] = -labelSize / 2 + "px";
							}

							extraMargin = this.tickLabelContainer.offsetHeight;
						} else {
							/* Chidren are position absolute, calculate height by finding the max offsetHeight of a child */
							for (i = 0; i < this.tickLabelContainer.childNodes.length; i++) {
								if (this.tickLabelContainer.childNodes[i].offsetHeight > extraMargin) {
									extraMargin = this.tickLabelContainer.childNodes[i].offsetHeight;
								}
							}
						}
						if (this.options.orientation === 'horizontal') {
							this.sliderElem.style.marginBottom = extraMargin + "px";
						}
					}
					for (var i = 0; i < this.options.ticks.length; i++) {

						var percentage = this.options.ticks_positions[i] || this._toPercentage(this.options.ticks[i]);

						if (this.options.reversed) {
							percentage = 100 - percentage;
						}

						this.ticks[i].style[this.stylePos] = percentage + "%";

						/* Set class labels to denote whether ticks are in the selection */
						this._removeClass(this.ticks[i], 'in-selection');
						if (!this.options.range) {
							if (this.options.selection === 'after' && percentage >= positionPercentages[0]) {
								this._addClass(this.ticks[i], 'in-selection');
							} else if (this.options.selection === 'before' && percentage <= positionPercentages[0]) {
								this._addClass(this.ticks[i], 'in-selection');
							}
						} else if (percentage >= positionPercentages[0] && percentage <= positionPercentages[1]) {
							this._addClass(this.ticks[i], 'in-selection');
						}

						if (this.tickLabels[i]) {
							this.tickLabels[i].style[styleSize] = labelSize + "px";

							if (this.options.orientation !== 'vertical' && this.options.ticks_positions[i] !== undefined) {
								this.tickLabels[i].style.position = 'absolute';
								this.tickLabels[i].style[this.stylePos] = percentage + "%";
								this.tickLabels[i].style[styleMargin] = -labelSize / 2 + 'px';
							} else if (this.options.orientation === 'vertical') {
								if (this.options.rtl) {
									this.tickLabels[i].style['marginRight'] = this.sliderElem.offsetWidth + "px";
								} else {
									this.tickLabels[i].style['marginLeft'] = this.sliderElem.offsetWidth + "px";
								}
								this.tickLabelContainer.style[styleMargin] = this.sliderElem.offsetWidth / 2 * -1 + 'px';
							}
						}
					}
				}

				var formattedTooltipVal;

				if (this.options.range) {
					formattedTooltipVal = this.options.formatter(this._state.value);
					this._setText(this.tooltipInner, formattedTooltipVal);
					this.tooltip.style[this.stylePos] = (positionPercentages[1] + positionPercentages[0]) / 2 + "%";

					var innerTooltipMinText = this.options.formatter(this._state.value[0]);
					this._setText(this.tooltipInner_min, innerTooltipMinText);

					var innerTooltipMaxText = this.options.formatter(this._state.value[1]);
					this._setText(this.tooltipInner_max, innerTooltipMaxText);

					this.tooltip_min.style[this.stylePos] = positionPercentages[0] + "%";

					this.tooltip_max.style[this.stylePos] = positionPercentages[1] + "%";
				} else {
					formattedTooltipVal = this.options.formatter(this._state.value[0]);
					this._setText(this.tooltipInner, formattedTooltipVal);

					this.tooltip.style[this.stylePos] = positionPercentages[0] + "%";
				}

				if (this.options.orientation === 'vertical') {
					this.trackLow.style.top = '0';
					this.trackLow.style.height = Math.min(positionPercentages[0], positionPercentages[1]) + '%';

					this.trackSelection.style.top = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					this.trackSelection.style.height = Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					this.trackHigh.style.bottom = '0';
					this.trackHigh.style.height = 100 - Math.min(positionPercentages[0], positionPercentages[1]) - Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';
				} else {
					if (this.stylePos === 'right') {
						this.trackLow.style.right = '0';
					} else {
						this.trackLow.style.left = '0';
					}
					this.trackLow.style.width = Math.min(positionPercentages[0], positionPercentages[1]) + '%';

					if (this.stylePos === 'right') {
						this.trackSelection.style.right = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					} else {
						this.trackSelection.style.left = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					}
					this.trackSelection.style.width = Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					if (this.stylePos === 'right') {
						this.trackHigh.style.left = '0';
					} else {
						this.trackHigh.style.right = '0';
					}
					this.trackHigh.style.width = 100 - Math.min(positionPercentages[0], positionPercentages[1]) - Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					var offset_min = this.tooltip_min.getBoundingClientRect();
					var offset_max = this.tooltip_max.getBoundingClientRect();

					if (this.options.tooltip_position === 'bottom') {
						if (offset_min.right > offset_max.left) {
							this._removeClass(this.tooltip_max, 'bottom');
							this._addClass(this.tooltip_max, 'top');
							this.tooltip_max.style.top = '';
							this.tooltip_max.style.bottom = 22 + 'px';
						} else {
							this._removeClass(this.tooltip_max, 'top');
							this._addClass(this.tooltip_max, 'bottom');
							this.tooltip_max.style.top = this.tooltip_min.style.top;
							this.tooltip_max.style.bottom = '';
						}
					} else {
						if (offset_min.right > offset_max.left) {
							this._removeClass(this.tooltip_max, 'top');
							this._addClass(this.tooltip_max, 'bottom');
							this.tooltip_max.style.top = 18 + 'px';
						} else {
							this._removeClass(this.tooltip_max, 'bottom');
							this._addClass(this.tooltip_max, 'top');
							this.tooltip_max.style.top = this.tooltip_min.style.top;
						}
					}
				}
			},
			_createHighlightRange: function _createHighlightRange(start, end) {
				if (this._isHighlightRange(start, end)) {
					if (start > end) {
						return { 'start': end, 'size': start - end };
					}
					return { 'start': start, 'size': end - start };
				}
				return null;
			},
			_isHighlightRange: function _isHighlightRange(start, end) {
				if (0 <= start && start <= 100 && 0 <= end && end <= 100) {
					return true;
				} else {
					return false;
				}
			},
			_resize: function _resize(ev) {
				/*jshint unused:false*/
				this._state.offset = this._offset(this.sliderElem);
				this._state.size = this.sliderElem[this.sizePos];
				this._layout();
			},
			_removeProperty: function _removeProperty(element, prop) {
				if (element.style.removeProperty) {
					element.style.removeProperty(prop);
				} else {
					element.style.removeAttribute(prop);
				}
			},
			_mousedown: function _mousedown(ev) {
				if (!this._state.enabled) {
					return false;
				}

				this._state.offset = this._offset(this.sliderElem);
				this._state.size = this.sliderElem[this.sizePos];

				var percentage = this._getPercentage(ev);

				if (this.options.range) {
					var diff1 = Math.abs(this._state.percentage[0] - percentage);
					var diff2 = Math.abs(this._state.percentage[1] - percentage);
					this._state.dragged = diff1 < diff2 ? 0 : 1;
					this._adjustPercentageForRangeSliders(percentage);
				} else {
					this._state.dragged = 0;
				}

				this._state.percentage[this._state.dragged] = percentage;
				this._layout();

				if (this.touchCapable) {
					document.removeEventListener("touchmove", this.mousemove, false);
					document.removeEventListener("touchend", this.mouseup, false);
				}

				if (this.mousemove) {
					document.removeEventListener("mousemove", this.mousemove, false);
				}
				if (this.mouseup) {
					document.removeEventListener("mouseup", this.mouseup, false);
				}

				this.mousemove = this._mousemove.bind(this);
				this.mouseup = this._mouseup.bind(this);

				if (this.touchCapable) {
					// Touch: Bind touch events:
					document.addEventListener("touchmove", this.mousemove, false);
					document.addEventListener("touchend", this.mouseup, false);
				}
				// Bind mouse events:
				document.addEventListener("mousemove", this.mousemove, false);
				document.addEventListener("mouseup", this.mouseup, false);

				this._state.inDrag = true;
				var newValue = this._calculateValue();

				this._trigger('slideStart', newValue);

				this._setDataVal(newValue);
				this.setValue(newValue, false, true);

				ev.returnValue = false;

				if (this.options.focus) {
					this._triggerFocusOnHandle(this._state.dragged);
				}

				return true;
			},
			_touchstart: function _touchstart(ev) {
				if (ev.changedTouches === undefined) {
					this._mousedown(ev);
					return;
				}

				var touch = ev.changedTouches[0];
				this.touchX = touch.pageX;
				this.touchY = touch.pageY;
			},
			_triggerFocusOnHandle: function _triggerFocusOnHandle(handleIdx) {
				if (handleIdx === 0) {
					this.handle1.focus();
				}
				if (handleIdx === 1) {
					this.handle2.focus();
				}
			},
			_keydown: function _keydown(handleIdx, ev) {
				if (!this._state.enabled) {
					return false;
				}

				var dir;
				switch (ev.keyCode) {
					case 37: // left
					case 40:
						// down
						dir = -1;
						break;
					case 39: // right
					case 38:
						// up
						dir = 1;
						break;
				}
				if (!dir) {
					return;
				}

				// use natural arrow keys instead of from min to max
				if (this.options.natural_arrow_keys) {
					var ifVerticalAndNotReversed = this.options.orientation === 'vertical' && !this.options.reversed;
					var ifHorizontalAndReversed = this.options.orientation === 'horizontal' && this.options.reversed; // @todo control with rtl

					if (ifVerticalAndNotReversed || ifHorizontalAndReversed) {
						dir = -dir;
					}
				}

				var val = this._state.value[handleIdx] + dir * this.options.step;
				var percentage = val / this.options.max * 100;
				this._state.keyCtrl = handleIdx;
				if (this.options.range) {
					this._adjustPercentageForRangeSliders(percentage);
					var val1 = !this._state.keyCtrl ? val : this._state.value[0];
					var val2 = this._state.keyCtrl ? val : this._state.value[1];
					val = [val1, val2];
				}

				this._trigger('slideStart', val);
				this._setDataVal(val);
				this.setValue(val, true, true);

				this._setDataVal(val);
				this._trigger('slideStop', val);
				this._layout();

				this._pauseEvent(ev);
				delete this._state.keyCtrl;

				return false;
			},
			_pauseEvent: function _pauseEvent(ev) {
				if (ev.stopPropagation) {
					ev.stopPropagation();
				}
				if (ev.preventDefault) {
					ev.preventDefault();
				}
				ev.cancelBubble = true;
				ev.returnValue = false;
			},
			_mousemove: function _mousemove(ev) {
				if (!this._state.enabled) {
					return false;
				}

				var percentage = this._getPercentage(ev);
				this._adjustPercentageForRangeSliders(percentage);
				this._state.percentage[this._state.dragged] = percentage;
				this._layout();

				var val = this._calculateValue(true);
				this.setValue(val, true, true);

				return false;
			},
			_touchmove: function _touchmove(ev) {
				if (ev.changedTouches === undefined) {
					return;
				}

				var touch = ev.changedTouches[0];

				var xDiff = touch.pageX - this.touchX;
				var yDiff = touch.pageY - this.touchY;

				if (!this._state.inDrag) {
					// Vertical Slider
					if (this.options.orientation === 'vertical' && xDiff <= 5 && xDiff >= -5 && (yDiff >= 15 || yDiff <= -15)) {
						this._mousedown(ev);
					}
					// Horizontal slider.
					else if (yDiff <= 5 && yDiff >= -5 && (xDiff >= 15 || xDiff <= -15)) {
							this._mousedown(ev);
						}
				}
			},
			_adjustPercentageForRangeSliders: function _adjustPercentageForRangeSliders(percentage) {
				if (this.options.range) {
					var precision = this._getNumDigitsAfterDecimalPlace(percentage);
					precision = precision ? precision - 1 : 0;
					var percentageWithAdjustedPrecision = this._applyToFixedAndParseFloat(percentage, precision);
					if (this._state.dragged === 0 && this._applyToFixedAndParseFloat(this._state.percentage[1], precision) < percentageWithAdjustedPrecision) {
						this._state.percentage[0] = this._state.percentage[1];
						this._state.dragged = 1;
					} else if (this._state.dragged === 1 && this._applyToFixedAndParseFloat(this._state.percentage[0], precision) > percentageWithAdjustedPrecision) {
						this._state.percentage[1] = this._state.percentage[0];
						this._state.dragged = 0;
					} else if (this._state.keyCtrl === 0 && this._state.value[1] / this.options.max * 100 < percentage) {
						this._state.percentage[0] = this._state.percentage[1];
						this._state.keyCtrl = 1;
						this.handle2.focus();
					} else if (this._state.keyCtrl === 1 && this._state.value[0] / this.options.max * 100 > percentage) {
						this._state.percentage[1] = this._state.percentage[0];
						this._state.keyCtrl = 0;
						this.handle1.focus();
					}
				}
			},
			_mouseup: function _mouseup() {
				if (!this._state.enabled) {
					return false;
				}
				if (this.touchCapable) {
					// Touch: Unbind touch event handlers:
					document.removeEventListener("touchmove", this.mousemove, false);
					document.removeEventListener("touchend", this.mouseup, false);
				}
				// Unbind mouse event handlers:
				document.removeEventListener("mousemove", this.mousemove, false);
				document.removeEventListener("mouseup", this.mouseup, false);

				this._state.inDrag = false;
				if (this._state.over === false) {
					this._hideTooltip();
				}
				var val = this._calculateValue(true);

				this._layout();
				this._setDataVal(val);
				this._trigger('slideStop', val);

				return false;
			},
			_calculateValue: function _calculateValue(snapToClosestTick) {
				var val;
				if (this.options.range) {
					val = [this.options.min, this.options.max];
					if (this._state.percentage[0] !== 0) {
						val[0] = this._toValue(this._state.percentage[0]);
						val[0] = this._applyPrecision(val[0]);
					}
					if (this._state.percentage[1] !== 100) {
						val[1] = this._toValue(this._state.percentage[1]);
						val[1] = this._applyPrecision(val[1]);
					}
				} else {
					val = this._toValue(this._state.percentage[0]);
					val = parseFloat(val);
					val = this._applyPrecision(val);
				}

				if (snapToClosestTick) {
					var min = [val, Infinity];
					for (var i = 0; i < this.options.ticks.length; i++) {
						var diff = Math.abs(this.options.ticks[i] - val);
						if (diff <= min[1]) {
							min = [this.options.ticks[i], diff];
						}
					}
					if (min[1] <= this.options.ticks_snap_bounds) {
						return min[0];
					}
				}

				return val;
			},
			_applyPrecision: function _applyPrecision(val) {
				var precision = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
				return this._applyToFixedAndParseFloat(val, precision);
			},
			_getNumDigitsAfterDecimalPlace: function _getNumDigitsAfterDecimalPlace(num) {
				var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
				if (!match) {
					return 0;
				}
				return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
			},
			_applyToFixedAndParseFloat: function _applyToFixedAndParseFloat(num, toFixedInput) {
				var truncatedNum = num.toFixed(toFixedInput);
				return parseFloat(truncatedNum);
			},
			/*
   	Credits to Mike Samuel for the following method!
   	Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
   */
			_getPercentage: function _getPercentage(ev) {
				if (this.touchCapable && (ev.type === 'touchstart' || ev.type === 'touchmove')) {
					ev = ev.touches[0];
				}

				var eventPosition = ev[this.mousePos];
				var sliderOffset = this._state.offset[this.stylePos];
				var distanceToSlide = eventPosition - sliderOffset;
				if (this.stylePos === 'right') {
					distanceToSlide = -distanceToSlide;
				}
				// Calculate what percent of the length the slider handle has slid
				var percentage = distanceToSlide / this._state.size * 100;
				percentage = Math.round(percentage / this._state.percentage[2]) * this._state.percentage[2];
				if (this.options.reversed) {
					percentage = 100 - percentage;
				}

				// Make sure the percent is within the bounds of the slider.
				// 0% corresponds to the 'min' value of the slide
				// 100% corresponds to the 'max' value of the slide
				return Math.max(0, Math.min(100, percentage));
			},
			_validateInputValue: function _validateInputValue(val) {
				if (!isNaN(+val)) {
					return +val;
				} else if (Array.isArray(val)) {
					this._validateArray(val);
					return val;
				} else {
					throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(val));
				}
			},
			_validateArray: function _validateArray(val) {
				for (var i = 0; i < val.length; i++) {
					var input = val[i];
					if (typeof input !== 'number') {
						throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(input));
					}
				}
			},
			_setDataVal: function _setDataVal(val) {
				this.element.setAttribute('data-value', val);
				this.element.setAttribute('value', val);
				this.element.value = val;
			},
			_trigger: function _trigger(evt, val) {
				val = val || val === 0 ? val : undefined;

				var callbackFnArray = this.eventToCallbackMap[evt];
				if (callbackFnArray && callbackFnArray.length) {
					for (var i = 0; i < callbackFnArray.length; i++) {
						var callbackFn = callbackFnArray[i];
						callbackFn(val);
					}
				}

				/* If JQuery exists, trigger JQuery events */
				if ($) {
					this._triggerJQueryEvent(evt, val);
				}
			},
			_triggerJQueryEvent: function _triggerJQueryEvent(evt, val) {
				var eventData = {
					type: evt,
					value: val
				};
				this.$element.trigger(eventData);
				this.$sliderElem.trigger(eventData);
			},
			_unbindJQueryEventHandlers: function _unbindJQueryEventHandlers() {
				this.$element.off();
				this.$sliderElem.off();
			},
			_setText: function _setText(element, text) {
				if (typeof element.textContent !== "undefined") {
					element.textContent = text;
				} else if (typeof element.innerText !== "undefined") {
					element.innerText = text;
				}
			},
			_removeClass: function _removeClass(element, classString) {
				var classes = classString.split(" ");
				var newClasses = element.className;

				for (var i = 0; i < classes.length; i++) {
					var classTag = classes[i];
					var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
					newClasses = newClasses.replace(regex, " ");
				}

				element.className = newClasses.trim();
			},
			_addClass: function _addClass(element, classString) {
				var classes = classString.split(" ");
				var newClasses = element.className;

				for (var i = 0; i < classes.length; i++) {
					var classTag = classes[i];
					var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
					var ifClassExists = regex.test(newClasses);

					if (!ifClassExists) {
						newClasses += " " + classTag;
					}
				}

				element.className = newClasses.trim();
			},
			_offsetLeft: function _offsetLeft(obj) {
				return obj.getBoundingClientRect().left;
			},
			_offsetRight: function _offsetRight(obj) {
				return obj.getBoundingClientRect().right;
			},
			_offsetTop: function _offsetTop(obj) {
				var offsetTop = obj.offsetTop;
				while ((obj = obj.offsetParent) && !isNaN(obj.offsetTop)) {
					offsetTop += obj.offsetTop;
					if (obj.tagName !== 'BODY') {
						offsetTop -= obj.scrollTop;
					}
				}
				return offsetTop;
			},
			_offset: function _offset(obj) {
				return {
					left: this._offsetLeft(obj),
					right: this._offsetRight(obj),
					top: this._offsetTop(obj)
				};
			},
			_css: function _css(elementRef, styleName, value) {
				if ($) {
					$.style(elementRef, styleName, value);
				} else {
					var style = styleName.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (all, letter) {
						return letter.toUpperCase();
					});
					elementRef.style[style] = value;
				}
			},
			_toValue: function _toValue(percentage) {
				return this.options.scale.toValue.apply(this, [percentage]);
			},
			_toPercentage: function _toPercentage(value) {
				return this.options.scale.toPercentage.apply(this, [value]);
			},
			_setTooltipPosition: function _setTooltipPosition() {
				var tooltips = [this.tooltip, this.tooltip_min, this.tooltip_max];
				if (this.options.orientation === 'vertical') {
					var tooltipPos;
					if (this.options.tooltip_position) {
						tooltipPos = this.options.tooltip_position;
					} else {
						if (this.options.rtl) {
							tooltipPos = 'left';
						} else {
							tooltipPos = 'right';
						}
					}
					var oppositeSide = tooltipPos === 'left' ? 'right' : 'left';
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, tooltipPos);
						tooltip.style[oppositeSide] = '100%';
					}.bind(this));
				} else if (this.options.tooltip_position === 'bottom') {
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, 'bottom');
						tooltip.style.top = 22 + 'px';
					}.bind(this));
				} else {
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, 'top');
						tooltip.style.top = -this.tooltip.outerHeight - 14 + 'px';
					}.bind(this));
				}
			}
		};

		/*********************************
  		Attach to global namespace
  	*********************************/
		if ($ && $.fn) {
			var autoRegisterNamespace = void 0;

			if (!$.fn.slider) {
				$.bridget(NAMESPACE_MAIN, Slider);
				autoRegisterNamespace = NAMESPACE_MAIN;
			} else {
				if (windowIsDefined) {
					window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead.");
				}
				autoRegisterNamespace = NAMESPACE_ALTERNATE;
			}
			$.bridget(NAMESPACE_ALTERNATE, Slider);

			// Auto-Register data-provide="slider" Elements
			$(function () {
				$("input[data-provide=slider]")[autoRegisterNamespace]();
			});
		}
	})($);

	return Slider;
});


/***/ }),
/* 20 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__easy_autocomplete_js__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "autocomplete", function() { return __WEBPACK_IMPORTED_MODULE_11__easy_autocomplete_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pretty_checkbox_js__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "prettycheckbox", function() { return __WEBPACK_IMPORTED_MODULE_12__pretty_checkbox_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bootstrap_slider_js__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapslider", function() { return __WEBPACK_IMPORTED_MODULE_13__bootstrap_slider_js__["default"]; });
















/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5Yjc0ZTkzNGNiMTNkZWRmMmE1NiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIklucHV0bWFza1wiLFwiY29tbW9uanMyXCI6XCJpbnB1dG1hc2tcIixcImNvbW1vbmpzXCI6XCJpbnB1dG1hc2tcIixcImFtZFwiOlwiaW5wdXRtYXNrXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcXVlcnktYmFyLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5LXVpLWRhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vdWlzbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm5vVWlTbGlkZXJcIixcImNvbW1vbmpzMlwiOlwibm91aXNsaWRlclwiLFwiY29tbW9uanNcIjpcIm5vdWlzbGlkZXJcIixcImFtZFwiOlwibm91aXNsaWRlclwifSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi10YWdib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpZ25hdHVyZV9wYWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlNpZ25hdHVyZVBhZFwiLFwiY29tbW9uanMyXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJjb21tb25qc1wiOlwic2lnbmF0dXJlX3BhZFwiLFwiYW1kXCI6XCJzaWduYXR1cmVfcGFkXCJ9Iiwid2VicGFjazovLy8uL3NyYy9zb3J0YWJsZWpzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJTb3J0YWJsZVwiLFwiY29tbW9uanMyXCI6XCJzb3J0YWJsZWpzXCIsXCJjb21tb25qc1wiOlwic29ydGFibGVqc1wiLFwiYW1kXCI6XCJzb3J0YWJsZWpzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9jay1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vhc3ktYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcmV0dHktY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zbGlkZXIvZGlzdC9ib290c3RyYXAtc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlqcy13aWRnZXRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsK0M7Ozs7Ozs7QUNBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0JBQW9COztBQUVsRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDL0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNsR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxvQkFBb0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFdBQVcsNENBQTRDO0FBQ3ZELFdBQVcsbUNBQW1DO0FBQzlDLFdBQVcsb0NBQW9DO0FBQy9DLFdBQVcseUNBQXlDO0FBQ3BELFdBQVcseUNBQXlDO0FBQ3BELFdBQVcsK0NBQStDO0FBQzFELFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsOENBQThDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN6RUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3BIQSwrQzs7Ozs7OztBQ0FBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZDQUE2QztBQUN4RCxXQUFXLG1DQUFtQztBQUM5QyxXQUFXLG9DQUFvQztBQUMvQyxXQUFXLHlDQUF5QztBQUNwRCxXQUFXLHlDQUF5QztBQUNwRCxXQUFXLCtDQUErQztBQUMxRCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0ZBQW9GO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxXQUFXLG9DQUFvQztBQUMvQyxXQUFXLHNDQUFzQztBQUNqRCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDM0VBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3hFQSwrQzs7Ozs7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtCQUFrQiwwQ0FBMEM7QUFDNUQsa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtQ0FBbUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHVNQUF1TSxvQkFBb0IsRUFBRSxtQkFBbUIsb0JBQW9CLFNBQVMsV0FBVyxFQUFFLDRCQUE0QixtQkFBbUIsRUFBRTtBQUMzVTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDRDQUE0QztBQUNyRCxTQUFTLHFDQUFxQztBQUM5QyxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDOUZBLGdEOzs7Ozs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0JBQWtCLDBDQUEwQztBQUM1RCwwQ0FBMEMsWUFBWTtBQUN0RCx5Q0FBeUMsV0FBVyxXQUFXLGFBQWE7QUFDNUU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUMsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLDJCQUEyQiw4QkFBOEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkhBLGdEOzs7Ozs7O0FDQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNkNBQTZDLGFBQWE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2xEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNwRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxRTs7Ozs7OztBQzNHQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtEQUFrRCxJQUFJO0FBQ3RELGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseUNBQXlDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLCtCQUErQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzQ0FBc0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esa0JBQWtCLCtDQUErQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCOztBQUVuRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNHQUFzRzs7QUFFdEc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFOztBQUVGO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2oxRDJCO0FBQ0M7QUFDSTtBQUNGO0FBQ007QUFDRztBQUNSO0FBQ0c7QUFDRDtBQUNGO0FBQ0Y7QUFDSTtBQUNFO0FBQ0MiLCJmaWxlIjoic3VydmV5anMtd2lkZ2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImlucHV0bWFza1wiKSwgcmVxdWlyZShcIm5vdWlzbGlkZXJcIiksIHJlcXVpcmUoXCJzaWduYXR1cmVfcGFkXCIpLCByZXF1aXJlKFwic29ydGFibGVqc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInN1cnZleWpzLXdpZGdldHNcIiwgW1wianF1ZXJ5XCIsIFwiaW5wdXRtYXNrXCIsIFwibm91aXNsaWRlclwiLCBcInNpZ25hdHVyZV9wYWRcIiwgXCJzb3J0YWJsZWpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1cnZleWpzLXdpZGdldHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJpbnB1dG1hc2tcIiksIHJlcXVpcmUoXCJub3Vpc2xpZGVyXCIpLCByZXF1aXJlKFwic2lnbmF0dXJlX3BhZFwiKSwgcmVxdWlyZShcInNvcnRhYmxlanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN1cnZleWpzLXdpZGdldHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJJbnB1dG1hc2tcIl0sIHJvb3RbXCJub1VpU2xpZGVyXCJdLCByb290W1wiU2lnbmF0dXJlUGFkXCJdLCByb290W1wiU29ydGFibGVcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDliNzRlOTM0Y2IxM2RlZGYyYTU2IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwiaXJhZGlvX3NxdWFyZS1ibHVlXCIsXHJcbiAgICBuYW1lOiBcImljaGVja1wiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mICQgPT0gXCJmdW5jdGlvblwiICYmICEhJC5mbi5pQ2hlY2s7XHJcbiAgICB9LFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHZhciB0ID0gcXVlc3Rpb24uZ2V0VHlwZSgpO1xyXG4gICAgICByZXR1cm4gdCA9PT0gXCJyYWRpb2dyb3VwXCIgfHwgdCA9PT0gXCJjaGVja2JveFwiIHx8IHQgPT09IFwibWF0cml4XCI7XHJcbiAgICB9LFxyXG4gICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgcm9vdFdpZGdldCA9IHRoaXM7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcclxuICAgICAgJGVsLmZpbmQoXCJpbnB1dFwiKS5kYXRhKHsgaUNoZWNrOiB1bmRlZmluZWQgfSk7XHJcblxyXG4gICAgICAkZWwuZmluZChcImlucHV0XCIpLmlDaGVjayh7XHJcbiAgICAgICAgY2hlY2tib3hDbGFzczogcm9vdFdpZGdldC5jbGFzc05hbWUsXHJcbiAgICAgICAgcmFkaW9DbGFzczogcm9vdFdpZGdldC5jbGFzc05hbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciBzZWxlY3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpICE9IFwibWF0cml4XCIpIHtcclxuICAgICAgICAgICRlbC5maW5kKFwiaW5wdXRbdmFsdWU9XCIgKyBxdWVzdGlvbi52YWx1ZSArIFwiXVwiKS5pQ2hlY2soXCJjaGVja1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcXVlc3Rpb24uZ2VuZXJhdGVkVmlzaWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbihyb3csIGluZGV4LCByb3dzKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3cudmFsdWUpIHtcclxuICAgICAgICAgICAgICAkKGVsKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgIFwiaW5wdXRbbmFtZT0nXCIgKyByb3cuZnVsbE5hbWUgKyBcIiddW3ZhbHVlPVwiICsgcm93LnZhbHVlICsgXCJdXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5pQ2hlY2soXCJjaGVja1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICAkZWwuZmluZChcImlucHV0XCIpLm9uKFwiaWZDaGVja2VkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSAhPSBcIm1hdHJpeFwiKSB7XHJcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcXVlc3Rpb24uZ2VuZXJhdGVkVmlzaWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbihyb3csIGluZGV4LCByb3dzKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3cuZnVsbE5hbWUgPT09IGV2ZW50LnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgcm93LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHNlbGVjdDtcclxuICAgICAgc2VsZWN0KCk7XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgJGVsID0gJChlbCk7XHJcbiAgICAgICRlbC5maW5kKFwiaW5wdXRcIikuaUNoZWNrKFwiZGVzdHJveVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcInR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pY2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEyIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgYWN0aXZhdGVkQnk6IFwicHJvcGVydHlcIixcclxuICAgIG5hbWU6IFwic2VsZWN0MlwiLFxyXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxzZWxlY3Qgc3R5bGU9J3dpZHRoOiAxMDAlOyc+PC9zZWxlY3Q+XCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLnNlbGVjdDI7XHJcbiAgICB9LFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT0gXCJwcm9wZXJ0eVwiKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBxdWVzdGlvbltcInJlbmRlckFzXCJdID09PSBcInNlbGVjdDJcIiAmJlxyXG4gICAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImRyb3Bkb3duXCJcclxuICAgICAgICApO1xyXG4gICAgICBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwidHlwZVwiKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICB0eXBlb2YgU2VsZWN0MiAhPT0gdW5kZWZpbmVkICYmIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJkcm9wZG93blwiXHJcbiAgICAgICAgKTtcclxuICAgICAgaWYgKHdpZGdldC5hY3RpdmF0ZWRCeSA9PSBcImN1c3RvbXR5cGVcIilcclxuICAgICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInNlbGVjdDJcIjtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgaWYgKCF0aGlzLndpZGdldElzTG9hZGVkKCkpIHJldHVybjtcclxuICAgICAgd2lkZ2V0LmFjdGl2YXRlZEJ5ID0gYWN0aXZhdGVkQnk7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLnJlbW92ZVByb3BlcnR5KFwiZHJvcGRvd25cIiwgXCJyZW5kZXJBc1wiKTtcclxuICAgICAgaWYgKGFjdGl2YXRlZEJ5ID09IFwicHJvcGVydHlcIikge1xyXG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwiZHJvcGRvd25cIiwge1xyXG4gICAgICAgICAgbmFtZTogXCJyZW5kZXJBc1wiLFxyXG4gICAgICAgICAgZGVmYXVsdDogXCJzdGFuZGFyZFwiLFxyXG4gICAgICAgICAgY2hvaWNlczogW1wic3RhbmRhcmRcIiwgXCJzZWxlY3QyXCJdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFjdGl2YXRlZEJ5ID09IFwiY3VzdG9tdHlwZVwiKSB7XHJcbiAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJzZWxlY3QyXCIsIFtdLCBudWxsLCBcImRyb3Bkb3duXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJzZWxlY3RcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XHJcbiAgICAgIHZhciBvdGhlcnNFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgb3RoZXJzRWwudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICBvdGhlcnNFbC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjNweFwiO1xyXG4gICAgICBvdGhlcnNFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIG90aGVyc0VsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICRlbFxyXG4gICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgIC5nZXQoMClcclxuICAgICAgICAuYXBwZW5kQ2hpbGQob3RoZXJzRWwpO1xyXG4gICAgICB2YXIgd2lkZ2V0ID0gJGVsLnNlbGVjdDIoe1xyXG4gICAgICAgIHRoZW1lOiBcImNsYXNzaWNcIlxyXG4gICAgICB9KTtcclxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRlbC52YWwocXVlc3Rpb24udmFsdWUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgb3RoZXJzRWwuc3R5bGUuZGlzcGxheSA9ICFxdWVzdGlvbi5pc090aGVyU2VsZWN0ZWQgPyBcIm5vbmVcIiA6IFwiXCI7XHJcbiAgICAgIH07XHJcbiAgICAgIHZhciB1cGRhdGVDb21tZW50SGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG90aGVyc0VsLnZhbHVlID0gcXVlc3Rpb24uY29tbWVudCA/IHF1ZXN0aW9uLmNvbW1lbnQgOiBcIlwiO1xyXG4gICAgICB9O1xyXG4gICAgICB2YXIgb3RoZXJzRWxDaGFuZ2VkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcXVlc3Rpb24uY29tbWVudCA9IG90aGVyc0VsLnZhbHVlO1xyXG4gICAgICB9O1xyXG4gICAgICB2YXIgdXBkYXRlQ2hvaWNlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRlbC5zZWxlY3QyKHtcclxuICAgICAgICAgIGRhdGE6IHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzLm1hcChmdW5jdGlvbihjaG9pY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IGNob2ljZS52YWx1ZSwgdGV4dDogY2hvaWNlLnRleHQgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XHJcbiAgICAgICAgdXBkYXRlQ29tbWVudEhhbmRsZXIoKTtcclxuICAgICAgfTtcclxuICAgICAgcXVlc3Rpb24uY2hvaWNlc0NoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZUNob2ljZXM7XHJcbiAgICAgIHVwZGF0ZUNob2ljZXMoKTtcclxuICAgICAgJGVsLm9uKFwic2VsZWN0MjpzZWxlY3RcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBvdGhlcnNFbC5vbmNoYW5nZSA9IG90aGVyc0VsQ2hhbmdlZDtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgIHF1ZXN0aW9uLmNvbW1lbnRDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVDb21tZW50SGFuZGxlcjtcclxuICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XHJcbiAgICAgIHVwZGF0ZUNvbW1lbnRIYW5kbGVyKCk7XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAkKGVsKVxyXG4gICAgICAgIC5maW5kKFwic2VsZWN0XCIpXHJcbiAgICAgICAgLm9mZihcInNlbGVjdDI6c2VsZWN0XCIpXHJcbiAgICAgICAgLnNlbGVjdDIoXCJkZXN0cm95XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VsZWN0Mi5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwiaW1hZ2VwaWNrZXJcIixcclxuICAgIHRpdGxlOiBcIkltYWdlIHBpY2tlclwiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1pbWFnZXBpY2tlclwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mICQgPT0gXCJmdW5jdGlvblwiICYmICEhJC5mbi5pbWFnZXBpY2tlcjtcclxuICAgIH0sXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJpbWFnZXBpY2tlclwiO1xyXG4gICAgfSxcclxuICAgIGlzRGVmYXVsdFJlbmRlcjogdHJ1ZSxcclxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXHJcbiAgICAgICAgXCJpbWFnZWl0ZW12YWx1ZXNcIixcclxuICAgICAgICBbeyBuYW1lOiBcImltYWdlTGlua1wiIH1dLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgXCJpdGVtdmFsdWVcIlxyXG4gICAgICApO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcclxuICAgICAgICBcImltYWdlcGlja2VyXCIsXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImNob2ljZXM6aW1hZ2VpdGVtdmFsdWVzXCIsXHJcbiAgICAgICAgICAgIG9uR2V0VmFsdWU6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBTdXJ2ZXkuSXRlbVZhbHVlLmdldERhdGEob2JqLmNob2ljZXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblNldFZhbHVlOiBmdW5jdGlvbihvYmosIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgb2JqLmNob2ljZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJzaG93TGFiZWw6Ym9vbGVhblwiLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImhhc090aGVyXCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwib3RoZXJUZXh0XCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwib3B0aW9uc0NhcHRpb25cIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJvdGhlckVycm9yVGV4dFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInN0b3JlT3RoZXJzQXNDb21tZW50XCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwicmVuZGVyQXNcIiwgdmlzaWJsZTogZmFsc2UgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBcImRyb3Bkb3duXCJcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcInNlbGVjdFwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcInNlbGVjdFwiKTtcclxuICAgICAgdmFyIG9wdGlvbnMgPSAkZWwuZmluZChcIm9wdGlvblwiKTtcclxuICAgICAgdmFyIGNob2ljZXMgPSBxdWVzdGlvbi5jaG9pY2VzO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBvcHRpb25zLmxlbmd0aCAmJiBpIC0gMSA8IGNob2ljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAkKG9wdGlvbnNbaV0pLmRhdGEoXCJpbWdTcmNcIiwgY2hvaWNlc1tpIC0gMV0uaW1hZ2VMaW5rKTtcclxuICAgICAgICBvcHRpb25zW2ldLnNlbGVjdGVkID0gcXVlc3Rpb24udmFsdWUgPT0gb3B0aW9uc1tpXS52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICAkZWwuaW1hZ2VwaWNrZXIoe1xyXG4gICAgICAgIGhpZGVfc2VsZWN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dfbGFiZWw6IHF1ZXN0aW9uLnNob3dMYWJlbCxcclxuICAgICAgICBzZWxlY3RlZDogZnVuY3Rpb24ob3B0cykge1xyXG4gICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBvcHRzLnBpY2tlci5zZWxlY3RbMF0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICAkZWwuZGF0YShcInBpY2tlclwiKS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1hZ2UtcGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxMSIsImltcG9ydCBJbnB1dG1hc2sgZnJvbSBcImlucHV0bWFza1wiO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgbmFtZTogXCJtYXNrZWRpdFwiLFxyXG4gICAgbnVtZXJpY0dyb3VwU2VwYXJhdG9yOiBcIixcIixcclxuICAgIG51bWVyaWNBdXRvR3JvdXA6IHRydWUsXHJcbiAgICBudW1lcmljRGlnaXRzOiAyLFxyXG4gICAgbnVtZXJpY0RpZ2l0c09wdGlvbmFsOiBmYWxzZSxcclxuICAgIG51bWVyaWNQcmVmaXg6IFwiJFwiLFxyXG4gICAgbnVtZXJpY1BsYWNlaG9sZGVyOiBcIjBcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBJbnB1dG1hc2sgIT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH0sXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PSBcIm11bHRpcGxldGV4dFwiKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBxdWVzdGlvbi5nZXRUeXBlKCkgPT0gXCJ0ZXh0XCIgJiZcclxuICAgICAgICAocXVlc3Rpb24uaW5wdXRNYXNrICE9IFwibm9uZVwiIHx8IHF1ZXN0aW9uLmlucHV0Rm9ybWF0KVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIGlzRGVmYXVsdFJlbmRlcjogdHJ1ZSxcclxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgaWYgKFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmZpbmRQcm9wZXJ0eShcInRleHRcIiwgXCJpbnB1dE1hc2tcIikpIHJldHVybjtcclxuICAgICAgdmFyIHByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgXCJpbnB1dEZvcm1hdFwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiaW5wdXRNYXNrXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiBcIm5vbmVcIixcclxuICAgICAgICAgIGNob2ljZXM6IFtcclxuICAgICAgICAgICAgXCJub25lXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZXRpbWVcIixcclxuICAgICAgICAgICAgXCJjdXJyZW5jeVwiLFxyXG4gICAgICAgICAgICBcImRlY2ltYWxcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiLFxyXG4gICAgICAgICAgICBcInBob25lXCIsXHJcbiAgICAgICAgICAgIFwiaXBcIlxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcInRleHRcIiwgcHJvcGVydGllcyk7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXHJcbiAgICAgICAgXCJtYXRyaXhkcm9wZG93bmNvbHVtblwiLFxyXG4gICAgICAgIHByb3BlcnRpZXNcclxuICAgICAgKTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcIm11bHRpcGxldGV4dGl0ZW1cIiwgcHJvcGVydGllcyk7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlJbnB1dE1hc2s6IGZ1bmN0aW9uKHN1cnZleUVsZW1lbnQsIGVsKSB7XHJcbiAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcclxuICAgICAgdmFyIG1hc2sgPVxyXG4gICAgICAgIHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrICE9IFwibm9uZVwiXHJcbiAgICAgICAgICA/IHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrXHJcbiAgICAgICAgICA6IHN1cnZleUVsZW1lbnQuaW5wdXRGb3JtYXQ7XHJcbiAgICAgIHZhciBvcHRpb25zID0ge307XHJcbiAgICAgIGlmIChzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayAhPSBcIm5vbmVcIilcclxuICAgICAgICBvcHRpb25zLmlucHV0Rm9ybWF0ID0gc3VydmV5RWxlbWVudC5pbnB1dEZvcm1hdDtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImN1cnJlbmN5XCIgfHxcclxuICAgICAgICBzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImRlY2ltYWxcIlxyXG4gICAgICApIHtcclxuICAgICAgICBvcHRpb25zLmdyb3VwU2VwYXJhdG9yID0gcm9vdFdpZGdldC5udW1lcmljR3JvdXBTZXBhcmF0b3I7XHJcbiAgICAgICAgb3B0aW9ucy5hdXRvR3JvdXAgPSByb290V2lkZ2V0Lm51bWVyaWNBdXRvR3JvdXA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiY3VycmVuY3lcIikge1xyXG4gICAgICAgIG9wdGlvbnMuZGlnaXRzID0gcm9vdFdpZGdldC5udW1lcmljRGlnaXRzO1xyXG4gICAgICAgIG9wdGlvbnMuZGlnaXRzT3B0aW9uYWwgPSByb290V2lkZ2V0Lm51bWVyaWNEaWdpdHNPcHRpb25hbDtcclxuICAgICAgICBvcHRpb25zLnByZWZpeCA9IHJvb3RXaWRnZXQubnVtZXJpY1ByZWZpeDtcclxuICAgICAgICBvcHRpb25zLnBsYWNlaG9sZGVyID0gcm9vdFdpZGdldC5udW1lcmljUGxhY2Vob2xkZXI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiZGF0ZXRpbWVcIikge1xyXG4gICAgICAgIG1hc2sgPSBzdXJ2ZXlFbGVtZW50LmlucHV0Rm9ybWF0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBJbnB1dG1hc2sobWFzaywgb3B0aW9ucykubWFzayhlbCk7XHJcblxyXG4gICAgICBlbC5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc3VydmV5RWxlbWVudC5jdXN0b21XaWRnZXREYXRhLmlzTmVlZFJlbmRlciA9IHRydWU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2YXIgdXBkYXRlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGVsLnZhbHVlID1cclxuICAgICAgICAgIHR5cGVvZiBzdXJ2ZXlFbGVtZW50LnZhbHVlID09PSBcInVuZGVmaW5lZFwiID8gXCJcIiA6IHN1cnZleUVsZW1lbnQudmFsdWU7XHJcbiAgICAgIH07XHJcbiAgICAgIHN1cnZleUVsZW1lbnQudmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVIYW5kbGVyO1xyXG4gICAgICB1cGRhdGVIYW5kbGVyKCk7XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpICE9IFwibXVsdGlwbGV0ZXh0XCIpIHtcclxuICAgICAgICB2YXIgaW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikgfHwgZWw7XHJcbiAgICAgICAgdGhpcy5hcHBseUlucHV0TWFzayhxdWVzdGlvbiwgaW5wdXQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlc3Rpb24uaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHZhciBpdGVtID0gcXVlc3Rpb24uaXRlbXNbaV07XHJcbiAgICAgICAgICBpZiAoaXRlbS5pbnB1dE1hc2sgIT0gXCJub25lXCIgfHwgaXRlbS5pbnB1dEZvcm1hdCkge1xyXG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgaXRlbS5pZCk7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuYXBwbHlJbnB1dE1hc2soaXRlbSwgaW5wdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgaW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikgfHwgZWw7XHJcbiAgICAgIGlucHV0LmlucHV0bWFzay5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0KTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2lucHV0bWFzay5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiSW5wdXRtYXNrXCIsXCJjb21tb25qczJcIjpcImlucHV0bWFza1wiLFwiY29tbW9uanNcIjpcImlucHV0bWFza1wiLFwiYW1kXCI6XCJpbnB1dG1hc2tcIn1cbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDciLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcImJhcnJhdGluZ1wiLFxyXG4gICAgdGl0bGU6IFwiQmFyIHJhdGluZ1wiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1iYXJyYXRpbmdcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiAkID09PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLmJhcnJhdGluZztcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0SlNPTjogeyBjaG9pY2VzOiBbMSwgMiwgMywgNCwgNV0gfSxcclxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImJhcnJhdGluZ1wiO1xyXG4gICAgfSxcclxuICAgIGlzRGVmYXVsdFJlbmRlcjogdHJ1ZSxcclxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXHJcbiAgICAgICAgXCJiYXJyYXRpbmdcIixcclxuICAgICAgICBbXHJcbiAgICAgICAgICB7IG5hbWU6IFwic2hvd1ZhbHVlczpib29sZWFuXCIsIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiaGFzT3RoZXJcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJvdGhlclRleHRcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJvcHRpb25zQ2FwdGlvblwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIm90aGVyRXJyb3JUZXh0XCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwic3RvcmVPdGhlcnNBc0NvbW1lbnRcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJyZW5kZXJBc1wiLCB2aXNpYmxlOiBmYWxzZSB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIFwiZHJvcGRvd25cIlxyXG4gICAgICApO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImJhcnJhdGluZ1wiLCB7XHJcbiAgICAgICAgbmFtZTogXCJyYXRpbmdUaGVtZVwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IFwiZm9udGF3ZXNvbWUtc3RhcnNcIixcclxuICAgICAgICBjaG9pY2VzOiBbXHJcbiAgICAgICAgICBcImZvbnRhd2Vzb21lLXN0YXJzXCIsXHJcbiAgICAgICAgICBcImNzcy1zdGFyc1wiLFxyXG4gICAgICAgICAgXCJiYXJzLXBpbGxcIixcclxuICAgICAgICAgIFwiYmFycy0xdG8xMFwiLFxyXG4gICAgICAgICAgXCJiYXJzLW1vdmllXCIsXHJcbiAgICAgICAgICBcImJhcnMtc3F1YXJlXCIsXHJcbiAgICAgICAgICBcImJhcnMtcmV2ZXJzZWRcIixcclxuICAgICAgICAgIFwiYmFycy1ob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICBcImJvb3RzdHJhcC1zdGFyc1wiLFxyXG4gICAgICAgICAgXCJmb250YXdlc29tZS1zdGFycy1vXCJcclxuICAgICAgICBdXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICAkZWwuYmFycmF0aW5nKFwic2hvd1wiLCB7XHJcbiAgICAgICAgdGhlbWU6IHF1ZXN0aW9uLnJhdGluZ1RoZW1lLFxyXG4gICAgICAgIGluaXRpYWxSYXRpbmc6IHF1ZXN0aW9uLnZhbHVlLFxyXG4gICAgICAgIHNob3dWYWx1ZXM6IHF1ZXN0aW9uLnNob3dWYWx1ZXMsXHJcbiAgICAgICAgc2hvd1NlbGVjdGVkUmF0aW5nOiBmYWxzZSxcclxuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24odmFsdWUsIHRleHQpIHtcclxuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKGVsKVxyXG4gICAgICAgICAgLmZpbmQoXCJzZWxlY3RcIilcclxuICAgICAgICAgIC5iYXJyYXRpbmcoXCJzZXRcIiwgcXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyICRlbCA9ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XHJcbiAgICAgICRlbC5iYXJyYXRpbmcoXCJkZXN0cm95XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pxdWVyeS1iYXItcmF0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxMCIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwiZGF0ZXBpY2tlclwiLFxyXG4gICAgdGl0bGU6IFwiRGF0ZSBwaWNrZXJcIixcclxuICAgIGljb25OYW1lOiBcImljb24tZGF0ZXBpY2tlclwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mICQgPT0gXCJmdW5jdGlvblwiICYmICEhJC5mbi5kYXRlcGlja2VyO1xyXG4gICAgfSxcclxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImRhdGVwaWNrZXJcIjtcclxuICAgIH0sXHJcbiAgICBodG1sVGVtcGxhdGU6XHJcbiAgICAgIFwiPGlucHV0IGNsYXNzPSdmb3JtLWNvbnRyb2wgd2lkZ2V0LWRhdGVwaWNrZXInIHR5cGU9J3RleHQnIHN0eWxlPSd3aWR0aDogMTAwJTsnPlwiLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcclxuICAgICAgICBcImRhdGVwaWNrZXJcIixcclxuICAgICAgICBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZGF0ZUZvcm1hdFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIm1tL2RkL3l5XCIsXHJcbiAgICAgICAgICAgIGNob2ljZXM6IFtcclxuICAgICAgICAgICAgICBcIm1tL2RkL3l5XCIsXHJcbiAgICAgICAgICAgICAgXCJ5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICAgIFwiZCBNLCB5XCIsXHJcbiAgICAgICAgICAgICAgXCJkIE1NLCB5XCIsXHJcbiAgICAgICAgICAgICAgXCJERCwgZCBNTSwgeXlcIixcclxuICAgICAgICAgICAgICBcIidkYXknIGQgJ29mJyBNTSAnaW4gdGhlIHllYXInIHl5XCJcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJpbnB1dFR5cGVcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJpbnB1dEZvcm1hdFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImlucHV0TWFza1wiLCB2aXNpYmxlOiBmYWxzZSB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIFwidGV4dFwiXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCIud2lkZ2V0LWRhdGVwaWNrZXJcIilcclxuICAgICAgICA/ICQoZWwpXHJcbiAgICAgICAgOiAkKGVsKS5maW5kKFwiLndpZGdldC1kYXRlcGlja2VyXCIpO1xyXG4gICAgICB2YXIgcGlja2VyV2lkZ2V0ID0gJGVsLmRhdGVwaWNrZXIoe1xyXG4gICAgICAgIGRhdGVGb3JtYXQ6IHF1ZXN0aW9uLmRhdGVGb3JtYXQsXHJcbiAgICAgICAgb3B0aW9uOiB7XHJcbiAgICAgICAgICBtaW5EYXRlOiBudWxsLFxyXG4gICAgICAgICAgbWF4RGF0ZTogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uKGRhdGVUZXh0KSB7XHJcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGRhdGVUZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uLnZhbHVlKSB7XHJcbiAgICAgICAgICBwaWNrZXJXaWRnZXQuZGF0ZXBpY2tlcihcInNldERhdGVcIiwgbmV3IERhdGUocXVlc3Rpb24udmFsdWUpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGlja2VyV2lkZ2V0LmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2soKTtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcIi53aWRnZXQtZGF0ZXBpY2tlclwiKVxyXG4gICAgICAgID8gJChlbClcclxuICAgICAgICA6ICQoZWwpLmZpbmQoXCIud2lkZ2V0LWRhdGVwaWNrZXJcIik7XHJcbiAgICAgICRlbC5kYXRlcGlja2VyKFwiZGVzdHJveVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcXVlcnktdWktZGF0ZXBpY2tlci5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgOSIsImltcG9ydCBub1VpU2xpZGVyIGZyb20gXCJub3Vpc2xpZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcIm5vdWlzbGlkZXJcIixcclxuICAgIHRpdGxlOiBcIm5vVWlTbGlkZXJcIixcclxuICAgIGljb25OYW1lOiBcImljb24tbm91aXNsaWRlclwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIG5vVWlTbGlkZXIgIT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH0sXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJub3Vpc2xpZGVyXCI7XHJcbiAgICB9LFxyXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibm91aXNsaWRlclwiLCBbXSwgbnVsbCwgXCJlbXB0eVwiKTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcIm5vdWlzbGlkZXJcIiwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwic3RlcDpudW1iZXJcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwicmFuZ2VNaW46bnVtYmVyXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInJhbmdlTWF4Om51bWJlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogMTAwXHJcbiAgICAgICAgfVxyXG4gICAgICBdKTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlID0gKHF1ZXN0aW9uLnJhbmdlTWluK3F1ZXN0aW9uLnJhbmdlTWF4KS8yO1xyXG5cclxuICAgICAgZWwuc3R5bGUubWFyZ2luQm90dG9tID0gXCI1MHB4XCI7XHJcbiAgICAgIHZhciBzbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShlbCwge1xyXG4gICAgICAgIHN0YXJ0OiBxdWVzdGlvbi52YWx1ZSxcclxuICAgICAgICBjb25uZWN0OiBbdHJ1ZSwgZmFsc2VdLFxyXG4gICAgICAgIHN0ZXA6IHF1ZXN0aW9uLnN0ZXAsXHJcbiAgICAgICAgdG9vbHRpcHM6IHRydWUsXHJcbiAgICAgICAgcGlwczoge1xyXG4gICAgICAgICAgbW9kZTogXCJwb3NpdGlvbnNcIixcclxuICAgICAgICAgIHZhbHVlczogWzAsMjUsNTAsNzUsMTAwXSxcclxuICAgICAgICAgIGRlbnNpdHk6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICBtaW46IHF1ZXN0aW9uLnJhbmdlTWluLFxyXG4gICAgICAgICAgbWF4OiBxdWVzdGlvbi5yYW5nZU1heFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNsaWRlci5vbihcInNldFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHNsaWRlci5nZXQoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBzbGlkZXIuc2V0KHF1ZXN0aW9uLnZhbHVlKTtcclxuICAgICAgfTtcclxuICAgICAgcXVlc3Rpb24ubm9VaVNsaWRlciA9IHNsaWRlcjtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICBxdWVzdGlvbi5ub1VpU2xpZGVyLmRlc3Ryb3koKTtcclxuICAgICAgcXVlc3Rpb24ubm9VaVNsaWRlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbm91aXNsaWRlci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibm9VaVNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJub3Vpc2xpZGVyXCIsXCJjb21tb25qc1wiOlwibm91aXNsaWRlclwiLFwiYW1kXCI6XCJub3Vpc2xpZGVyXCJ9XG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgbmFtZTogXCJ0YWdib3hcIixcclxuICAgIHRpdGxlOiBcIlRhZyBib3hcIixcclxuICAgIGljb25OYW1lOiBcImljb24tdGFnYm94XCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLnNlbGVjdDI7XHJcbiAgICB9LFxyXG4gICAgZGVmYXVsdEpTT046IHsgY2hvaWNlczogW1wiSXRlbSAxXCIsIFwiSXRlbSAyXCIsIFwiSXRlbSAzXCJdIH0sXHJcbiAgICBodG1sVGVtcGxhdGU6IFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnIHN0eWxlPSd3aWR0aDogMTAwJTsnPjwvc2VsZWN0PlwiLFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwidGFnYm94XCI7XHJcbiAgICB9LFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcclxuICAgICAgICBcInRhZ2JveFwiLFxyXG4gICAgICAgIFt7IG5hbWU6IFwiaGFzT3RoZXJcIiwgdmlzaWJsZTogZmFsc2UgfV0sXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBcImNoZWNrYm94XCJcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcInNlbGVjdFwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcInNlbGVjdFwiKTtcclxuICAgICAgJGVsLnNlbGVjdDIoe1xyXG4gICAgICAgIHRhZ3M6IFwidHJ1ZVwiLFxyXG4gICAgICAgIHRoZW1lOiBcImNsYXNzaWNcIlxyXG4gICAgICB9KTtcclxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRlbC52YWwocXVlc3Rpb24udmFsdWUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgIH07XHJcbiAgICAgIHZhciB1cGRhdGVDaG9pY2VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJGVsLnNlbGVjdDIoe1xyXG4gICAgICAgICAgZGF0YTogcXVlc3Rpb24udmlzaWJsZUNob2ljZXMubWFwKGZ1bmN0aW9uKGNob2ljZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBpZDogY2hvaWNlLnZhbHVlLCB0ZXh0OiBjaG9pY2UudGV4dCB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgICAgfTtcclxuICAgICAgcXVlc3Rpb24uY2hvaWNlc0NoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZUNob2ljZXM7XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICAkZWwub24oXCJzZWxlY3QyOnNlbGVjdFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSAocXVlc3Rpb24udmFsdWUgfHwgW10pLmNvbmNhdChlLnBhcmFtcy5kYXRhLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICAgICRlbC5vbihcInNlbGVjdDI6dW5zZWxlY3RcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IChxdWVzdGlvbi52YWx1ZSB8fCBbXSkuaW5kZXhPZihlLnBhcmFtcy5kYXRhLmlkKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICB2YXIgdmFsID0gcXVlc3Rpb24udmFsdWU7XHJcbiAgICAgICAgICB2YWwuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHVwZGF0ZUNob2ljZXMoKTtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICQoZWwpXHJcbiAgICAgICAgLmZpbmQoXCJzZWxlY3RcIilcclxuICAgICAgICAub2ZmKFwic2VsZWN0MjpzZWxlY3RcIilcclxuICAgICAgICAuc2VsZWN0MihcImRlc3Ryb3lcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VsZWN0Mi10YWdib3guanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwiaW1wb3J0ICogYXMgU2lnbmF0dXJlUGFkIGZyb20gXCJzaWduYXR1cmVfcGFkXCI7XHJcblxyXG5mdW5jdGlvbiByZXNpemVDYW52YXMoY2FudmFzKSB7XHJcbiAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIHZhciBkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcclxuICB2YXIgYmFja2luZ1N0b3JlUmF0aW8gPVxyXG4gICAgY29udGV4dC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICBjb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgIGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICBjb250ZXh0Lm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgIDE7XHJcblxyXG4gIHZhciByYXRpbyA9IGRldmljZVBpeGVsUmF0aW8gLyBiYWNraW5nU3RvcmVSYXRpbztcclxuXHJcbiAgdmFyIG9sZFdpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gIHZhciBvbGRIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG5cclxuICBjYW52YXMud2lkdGggPSBvbGRXaWR0aCAqIHJhdGlvO1xyXG4gIGNhbnZhcy5oZWlnaHQgPSBvbGRIZWlnaHQgKiByYXRpbztcclxuXHJcbiAgY2FudmFzLnN0eWxlLndpZHRoID0gb2xkV2lkdGggKyBcInB4XCI7XHJcbiAgY2FudmFzLnN0eWxlLmhlaWdodCA9IG9sZEhlaWdodCArIFwicHhcIjtcclxuXHJcbiAgY29udGV4dC5zY2FsZShyYXRpbywgcmF0aW8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcInNpZ25hdHVyZXBhZFwiLFxyXG4gICAgdGl0bGU6IFwiU2lnbmF0dXJlIHBhZFwiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1zaWduYXR1cmVwYWRcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBTaWduYXR1cmVQYWQgIT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH0sXHJcbiAgICBwZW5Db2xvcjogXCIjMWFiMzk0XCIsXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJzaWduYXR1cmVwYWRcIjtcclxuICAgIH0sXHJcbiAgICBodG1sVGVtcGxhdGU6XHJcbiAgICAgIFwiPGRpdiBjbGFzcz0nc2pzX3NwX2NvbnRhaW5lcic+PGRpdj48Y2FudmFzPjwvY2FudmFzPjwvZGl2PjxkaXYgY2xhc3M9J3Nqc19zcF9jb250cm9scyc+PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdzanNfc3BfY2xlYXInIHRpdGxlPSdDbGVhcic+4pyWPC9idXR0b24+PC9kaXY+PC9kaXY+PHN0eWxlPi5zanNfc3BfY29udGFpbmVyIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9IC5zanNfc3BfY29udHJvbHMgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IGJvdHRvbTogMDsgfSAuc2pzX3NwX2NvbnRyb2xzID4gYnV0dG9uIHsgdXNlci1zZWxlY3Q6IG5vbmU7IH08L3N0eWxlPlwiLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInNpZ25hdHVyZXBhZFwiLCBbXSwgbnVsbCwgXCJlbXB0eVwiKTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcInNpZ25hdHVyZXBhZFwiLCBbXHJcbiAgICAgICAgeyBuYW1lOiBcImFsbG93Q2xlYXI6Ym9vbGVhblwiLCBkZWZhdWx0OiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIndpZHRoOm51bWJlclwiLCBkZWZhdWx0OiAzMDAgfSxcclxuICAgICAgICB7IG5hbWU6IFwiaGVpZ2h0Om51bWJlclwiLCBkZWZhdWx0OiAyMDAgfVxyXG4gICAgICBdKTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcclxuICAgICAgdmFyIGNhbnZhcyA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xyXG4gICAgICB2YXIgc2lnbmF0dXJlUGFkID0gbmV3IFNpZ25hdHVyZVBhZChjYW52YXMpO1xyXG4gICAgICBpZiAocXVlc3Rpb24uaXNSZWFkT25seSkge1xyXG4gICAgICAgIHNpZ25hdHVyZVBhZC5vZmYoKTtcclxuICAgICAgfVxyXG4gICAgICBzaWduYXR1cmVQYWQucGVuQ29sb3IgPSByb290V2lkZ2V0LnBlbkNvbG9yO1xyXG4gICAgICBzaWduYXR1cmVQYWQub25FbmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHNpZ25hdHVyZVBhZC50b0RhdGFVUkwoKTtcclxuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGRhdGE7XHJcbiAgICAgIH07XHJcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBzaWduYXR1cmVQYWQuY2xlYXIoKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBxdWVzdGlvbi53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gcXVlc3Rpb24uaGVpZ2h0O1xyXG4gICAgICAgIHJlc2l6ZUNhbnZhcyhjYW52YXMpO1xyXG4gICAgICAgIHNpZ25hdHVyZVBhZC5mcm9tRGF0YVVSTChxdWVzdGlvbi52YWx1ZSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgICAgcXVlc3Rpb24uc2lnbmF0dXJlUGFkID0gc2lnbmF0dXJlUGFkO1xyXG4gICAgICBpZiAocXVlc3Rpb24uYWxsb3dDbGVhciAmJiAhcXVlc3Rpb24uaXNSZWFkT25seSkge1xyXG4gICAgICAgIGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYnV0dG9uXCIpWzBdLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHNpZ25hdHVyZVBhZC5jbGVhcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJidXR0b25cIilbMF0ucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIGlmIChxdWVzdGlvbi5zaWduYXR1cmVQYWQpIHtcclxuICAgICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQub2ZmKCk7XHJcbiAgICAgIH1cclxuICAgICAgcXVlc3Rpb24uc2lnbmF0dXJlUGFkID0gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaWduYXR1cmVfcGFkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlNpZ25hdHVyZVBhZFwiLFwiY29tbW9uanMyXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJjb21tb25qc1wiOlwic2lnbmF0dXJlX3BhZFwiLFwiYW1kXCI6XCJzaWduYXR1cmVfcGFkXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsImltcG9ydCBTb3J0YWJsZSBmcm9tIFwic29ydGFibGVqc1wiO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgbmFtZTogXCJzb3J0YWJsZWxpc3RcIixcclxuICAgIHRpdGxlOiBcIlNvcnRhYmxlIGxpc3RcIixcclxuICAgIGljb25OYW1lOiBcImljb24tc29ydGFibGVsaXN0XCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgU29ydGFibGUgIT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0SlNPTjogeyBjaG9pY2VzOiBbXCJJdGVtIDFcIiwgXCJJdGVtIDJcIiwgXCJJdGVtIDNcIl0gfSxcclxuICAgIGFyZWFTdHlsZTogXCJib3JkZXI6IDFweCBzb2xpZCAjMWFiMzk0OyB3aWR0aDoxMDAlOyBtaW4taGVpZ2h0OjUwcHhcIixcclxuICAgIGl0ZW1TdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOiMxYWIzOTQ7Y29sb3I6I2ZmZjttYXJnaW46NXB4O3BhZGRpbmc6MTBweDtcIixcclxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInNvcnRhYmxlbGlzdFwiO1xyXG4gICAgfSxcclxuICAgIGh0bWxUZW1wbGF0ZTogXCI8ZGl2PjwvZGl2PlwiLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcclxuICAgICAgICBcInNvcnRhYmxlbGlzdFwiLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIHsgbmFtZTogXCJoYXNPdGhlclwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInN0b3JlT3RoZXJzQXNDb21tZW50XCIsIHZpc2libGU6IGZhbHNlIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgXCJjaGVja2JveFwiXHJcbiAgICAgICk7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwic29ydGFibGVsaXN0XCIsIHtcclxuICAgICAgICBuYW1lOiBcImVtcHR5VGV4dFwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IFwiTW92ZSBpdGVtcyBoZXJlLlwiXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xyXG4gICAgICBlbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICB2YXIgcmVzdWx0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB2YXIgZW1wdHlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICB2YXIgc291cmNlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICByZXN1bHRFbC5zdHlsZS5jc3NUZXh0ID0gcm9vdFdpZGdldC5hcmVhU3R5bGU7XHJcbiAgICAgIGVtcHR5RWwuaW5uZXJIVE1MID0gcXVlc3Rpb24uZW1wdHlUZXh0O1xyXG4gICAgICByZXN1bHRFbC5hcHBlbmRDaGlsZChlbXB0eUVsKTtcclxuICAgICAgc291cmNlRWwuc3R5bGUuY3NzVGV4dCA9IHJvb3RXaWRnZXQuYXJlYVN0eWxlO1xyXG4gICAgICBzb3VyY2VFbC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjEwcHhcIjtcclxuICAgICAgZWwuYXBwZW5kQ2hpbGQocmVzdWx0RWwpO1xyXG4gICAgICBlbC5hcHBlbmRDaGlsZChzb3VyY2VFbCk7XHJcbiAgICAgIHZhciBoYXNWYWx1ZUluUmVzdWx0cyA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgIHZhciByZXMgPSBxdWVzdGlvbi52YWx1ZTtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAocmVzW2ldID09IHZhbCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfTtcclxuICAgICAgdmFyIGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlID0gZmFsc2U7XHJcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUpIHJldHVybjtcclxuICAgICAgICByZXN1bHRFbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHJlc3VsdEVsLmFwcGVuZENoaWxkKGVtcHR5RWwpO1xyXG4gICAgICAgIHNvdXJjZUVsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIHdhc0luUmVzdWx0cyA9IGZhbHNlO1xyXG4gICAgICAgIHF1ZXN0aW9uLmFjdGl2ZUNob2ljZXMuZm9yRWFjaChmdW5jdGlvbihjaG9pY2UpIHtcclxuICAgICAgICAgIHZhciBpblJlc3V0bHMgPSBoYXNWYWx1ZUluUmVzdWx0cyhjaG9pY2UudmFsdWUpO1xyXG4gICAgICAgICAgd2FzSW5SZXN1bHRzID0gd2FzSW5SZXN1bHRzIHx8IGluUmVzdXRscztcclxuICAgICAgICAgIHZhciBzcmNFbCA9IGluUmVzdXRscyA/IHJlc3VsdEVsIDogc291cmNlRWw7XHJcbiAgICAgICAgICB2YXIgbmV3RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgbmV3RWwuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgXCI8ZGl2IHN0eWxlPSdcIiArXHJcbiAgICAgICAgICAgIHJvb3RXaWRnZXQuaXRlbVN0eWxlICtcclxuICAgICAgICAgICAgXCInPlwiICtcclxuICAgICAgICAgICAgY2hvaWNlLnRleHQgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgICAgbmV3RWwuZGF0YXNldFtcInZhbHVlXCJdID0gY2hvaWNlLnZhbHVlO1xyXG4gICAgICAgICAgc3JjRWwuYXBwZW5kQ2hpbGQobmV3RWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVtcHR5RWwuc3R5bGUuZGlzcGxheSA9IHdhc0luUmVzdWx0cyA/IFwibm9uZVwiIDogXCJcIjtcclxuICAgICAgfTtcclxuICAgICAgcXVlc3Rpb24ucmVzdWx0RWwgPSBTb3J0YWJsZS5jcmVhdGUoJChyZXN1bHRFbClbMF0sIHtcclxuICAgICAgICBhbmltYXRpb246IDE1MCxcclxuICAgICAgICBncm91cDogcXVlc3Rpb24ubmFtZSxcclxuICAgICAgICBvblNvcnQ6IGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdEVsLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW1wdHlFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0RWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBpZih0eXBlb2YgcmVzdWx0RWwuY2hpbGRyZW5baV0uZGF0YXNldC52YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJlc3VsdEVsLmNoaWxkcmVuW2ldLmRhdGFzZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHJlc3VsdDtcclxuICAgICAgICAgIGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcXVlc3Rpb24uc291cmNlRWwgPSBTb3J0YWJsZS5jcmVhdGUoJChzb3VyY2VFbClbMF0sIHtcclxuICAgICAgICBhbmltYXRpb246IDE1MCxcclxuICAgICAgICBncm91cDogcXVlc3Rpb24ubmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgcXVlc3Rpb24ucmVzdWx0RWwuZGVzdHJveSgpO1xyXG4gICAgICBxdWVzdGlvbi5zb3VyY2VFbC5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc29ydGFibGVqcy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJTb3J0YWJsZVwiLFwiY29tbW9uanMyXCI6XCJzb3J0YWJsZWpzXCIsXCJjb21tb25qc1wiOlwic29ydGFibGVqc1wiLFwiYW1kXCI6XCJzb3J0YWJsZWpzXCJ9XG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwiZWRpdG9yXCIsXHJcbiAgICB0aXRsZTogXCJFZGl0b3JcIixcclxuICAgIGljb25OYW1lOiBcImljb24tZWRpdG9yXCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgQ0tFRElUT1IgIT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH0sXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJlZGl0b3JcIjtcclxuICAgIH0sXHJcbiAgICBodG1sVGVtcGxhdGU6XHJcbiAgICAgIFwiPHRleHRhcmVhIHJvd3M9JzEwJyBjb2xzPSc4MCcgc3R5bGU6IHt3aWR0aDonMTAwJSd9PjwvdGV4dGFyZWE+XCIsXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiZWRpdG9yXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImVkaXRvclwiLCB7XHJcbiAgICAgICAgbmFtZTogXCJoZWlnaHRcIixcclxuICAgICAgICBkZWZhdWx0OiAzMDBcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICBDS0VESVRPUi5lZGl0b3JDb25maWcgPSBmdW5jdGlvbihjb25maWcpIHtcclxuICAgICAgICBjb25maWcubGFuZ3VhZ2UgPSBcImVzXCI7XHJcbiAgICAgICAgY29uZmlnLmhlaWdodCA9IHF1ZXN0aW9uLmhlaWdodDtcclxuICAgICAgICBjb25maWcudG9vbGJhckNhbkNvbGxhcHNlID0gdHJ1ZTtcclxuICAgICAgfTtcclxuICAgICAgdmFyIGVkaXRvciA9IENLRURJVE9SLnJlcGxhY2UoZWwpO1xyXG4gICAgICB2YXIgaXNWYWx1ZUNoYW5naW5nID0gZmFsc2U7XHJcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaXNWYWx1ZUNoYW5naW5nKSByZXR1cm47XHJcbiAgICAgICAgZWRpdG9yLnNldERhdGEocXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgICBlZGl0b3Iub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaXNWYWx1ZUNoYW5naW5nID0gdHJ1ZTtcclxuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGVkaXRvci5nZXREYXRhKCk7XHJcbiAgICAgICAgaXNWYWx1ZUNoYW5naW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge31cclxuICB9O1xyXG5cclxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jay1lZGl0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxNCIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwiYXV0b2NvbXBsZXRlXCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PT0gXCJmdW5jdGlvblwiICYmICEhJC5mbi5lYXN5QXV0b2NvbXBsZXRlO1xyXG4gICAgfSxcclxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInRleHRcIjtcclxuICAgIH0sXHJcbiAgICBpc0RlZmF1bHRSZW5kZXI6IHRydWUsXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5maW5kUHJvcGVydHkoXCJ0ZXh0XCIsIFwiY2hvaWNlc1wiKSAhPT0gbnVsbCB8fFxyXG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmZpbmRQcm9wZXJ0eShcInRleHRcIiwgXCJjaG9pY2VzQnlVcmxcIikgIT09IG51bGxcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwidGV4dFwiLCB7XHJcbiAgICAgICAgbmFtZTogXCJjaG9pY2VzOml0ZW12YWx1ZXNcIixcclxuICAgICAgICBvbkdldFZhbHVlOiBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICAgIHJldHVybiBTdXJ2ZXkuSXRlbVZhbHVlLmdldERhdGEob2JqLmNob2ljZXMgfHwgW10pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TZXRWYWx1ZTogZnVuY3Rpb24ob2JqLCB2YWx1ZSkge1xyXG4gICAgICAgICAgaWYgKCFvYmouY2hvaWNlcykge1xyXG4gICAgICAgICAgICBvYmouY2hvaWNlcyA9IG9iai5jcmVhdGVJdGVtVmFsdWVzKFwiY2hvaWNlc1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9iai5jaG9pY2VzID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJ0ZXh0XCIsIHtcclxuICAgICAgICBuYW1lOiBcImNob2ljZXNCeVVybDpyZXN0ZnVsbFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZTogXCJDaG9pY2VzUmVzdGZ1bGxcIixcclxuICAgICAgICBvbkdldFZhbHVlOiBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICAgIHJldHVybiBvYmogJiYgb2JqLmNob2ljZXNCeVVybCAmJiBvYmouY2hvaWNlc0J5VXJsLmdldERhdGEoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU2V0VmFsdWU6IGZ1bmN0aW9uKG9iaiwgdmFsdWUpIHtcclxuICAgICAgICAgIGlmICghb2JqLmNob2ljZXNCeVVybCkge1xyXG4gICAgICAgICAgICBvYmouY2hvaWNlc0J5VXJsID0gbmV3IFN1cnZleS5DaG9pY2VzUmVzdGZ1bGwoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9iai5jaG9pY2VzQnlVcmwuc2V0RGF0YSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcImlucHV0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgIGRhdGE6IChxdWVzdGlvbi5jaG9pY2VzIHx8IFtdKS5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uZ2V0RGF0YSgpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGFkanVzdFdpZHRoOiBmYWxzZSxcclxuICAgICAgICBsaXN0OiB7XHJcbiAgICAgICAgICBzb3J0OiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtYXRjaDoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogcXVlc3Rpb24ucGxhY2Vob2xkZXJcclxuICAgICAgfTtcclxuICAgICAgaWYgKCEhcXVlc3Rpb24uY2hvaWNlc0J5VXJsKSB7XHJcbiAgICAgICAgb3B0aW9ucy51cmwgPSBmdW5jdGlvbihwaHJhc2UpIHtcclxuICAgICAgICAgIHJldHVybiBxdWVzdGlvbi5jaG9pY2VzQnlVcmwudXJsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb3B0aW9ucy5nZXRWYWx1ZSA9IHF1ZXN0aW9uLmNob2ljZXNCeVVybC52YWx1ZU5hbWU7XHJcbiAgICAgICAgLy8gb3B0aW9ucy5hamF4U2V0dGluZ3MgPSB7XHJcbiAgICAgICAgLy8gICBkYXRhVHlwZTogXCJqc29ucFwiXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgfVxyXG4gICAgICAkZWwuZWFzeUF1dG9jb21wbGV0ZShvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIC8vIHZhciAkZWwgPSAkKGVsKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgIC8vICRlbC5hdXRvY29tcGxldGUoXCJkZXN0cm95XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwidHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Vhc3ktYXV0b2NvbXBsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTMiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBzZXR0aW5nczoge1xyXG4gICAgICByYWRpb2dyb3VwOiB7XHJcbiAgICAgICAgcm9vdENsYXNzOiBcInByZXR0eSBwLWRlZmF1bHQgcC1yb3VuZFwiLFxyXG4gICAgICAgIGlucHV0VHlwZTogXCJyYWRpb1wiLFxyXG4gICAgICAgIHRpdGxlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzXCJcclxuICAgICAgfSxcclxuICAgICAgY2hlY2tib3g6IHtcclxuICAgICAgICByb290Q2xhc3M6IFwicHJldHR5IHAtZGVmYXVsdFwiLFxyXG4gICAgICAgIGlucHV0VHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgIHRpdGxlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzXCJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5hbWU6IFwicHJldHR5LWNoZWNrYm94XCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGhyZWYgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGVbXCJocmVmXCJdO1xyXG4gICAgICAgIGlmICghIWhyZWYgJiYgaHJlZi5pbmRleE9mKFwicHJldHR5LWNoZWNrYm94XCIpICE9IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGh0bWxUZW1wbGF0ZTogXCI8ZmllbGRzZXQ+PC9maWVsZHNldD5cIixcclxuICAgIGlzRml0OiBmdW5jdGlvbiAocXVlc3Rpb24pIHtcclxuICAgICAgdmFyIHR5cGUgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XHJcbiAgICAgIHJldHVybiB0eXBlID09PSBcInJhZGlvZ3JvdXBcIiB8fCB0eXBlID09PSBcImNoZWNrYm94XCI7IC8vIHx8IHR5cGUgPT09IFwibWF0cml4XCI7XHJcbiAgICB9LFxyXG4gICAgaXNEZWZhdWx0UmVuZGVyOiBmYWxzZSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciBpdGVtSW5wdXRzID0ge307XHJcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5zZXR0aW5nc1txdWVzdGlvbi5nZXRUeXBlKCldO1xyXG4gICAgICB2YXIgaW5DaGFuZ2VIYW5kbGVyID0gZmFsc2U7XHJcbiAgICAgIHZhciBjaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaW5DaGFuZ2VIYW5kbGVyID0gdHJ1ZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgdmFyIHZhbHVlID0gYXJndW1lbnRzWzBdLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiY2hlY2tib3hcIikge1xyXG4gICAgICAgICAgICB2YXIgcVZhbHVlID0gcXVlc3Rpb24udmFsdWUgfHwgW107XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHNbMF0udGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICBpZiAocVZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcVZhbHVlLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAocVZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcVZhbHVlLnNwbGljZShxVmFsdWUuaW5kZXhPZih2YWx1ZSksIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHFWYWx1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIGluQ2hhbmdlSGFuZGxlciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgcXVlc3Rpb24uY2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2VJdGVtLCBpbmRleCkge1xyXG4gICAgICAgIHZhciBpdGVtUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaXRlbVJvb3QuY2xhc3NOYW1lID0gb3B0aW9ucy5yb290Q2xhc3M7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSBvcHRpb25zLmlucHV0VHlwZTtcclxuICAgICAgICBpbnB1dC5uYW1lID1cclxuICAgICAgICAgIHF1ZXN0aW9uLm5hbWUgKyAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImNoZWNrYm94XCIgPyBcIlwiICsgaW5kZXggOiBcIlwiKTtcclxuICAgICAgICBpbnB1dC5vbmNoYW5nZSA9IGNoYW5nZUhhbmRsZXI7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBjaG9pY2VJdGVtLnZhbHVlO1xyXG4gICAgICAgIHZhciB0aXRsZVJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpdGxlUm9vdC5jbGFzc05hbWUgPSBvcHRpb25zLnRpdGxlQ2xhc3M7XHJcbiAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY2hvaWNlSXRlbS50ZXh0O1xyXG4gICAgICAgIHRpdGxlUm9vdC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgaXRlbVJvb3QuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIGl0ZW1Sb290LmFwcGVuZENoaWxkKHRpdGxlUm9vdCk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoaXRlbVJvb3QpO1xyXG5cclxuICAgICAgICBpdGVtSW5wdXRzW2Nob2ljZUl0ZW0udmFsdWVdID0gaW5wdXQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFpbkNoYW5nZUhhbmRsZXIpIHtcclxuICAgICAgICAgIHZhciBjaGVja2VkSXRlbXMgPSBuZXdWYWx1ZSB8fCBbXTtcclxuICAgICAgICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwicmFkaW9ncm91cFwiKSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWRJdGVtcyA9IFtuZXdWYWx1ZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBPYmplY3QudmFsdWVzKGl0ZW1JbnB1dHMpLmZvckVhY2goZnVuY3Rpb24gKGlucHV0SXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZEl0ZW1zLmluZGV4T2YoaW5wdXRJdGVtLnZhbHVlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICBpbnB1dEl0ZW0uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlucHV0SXRlbS5yZW1vdmVBdHRyaWJ1dGUoXCJjaGVja2VkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIocXVlc3Rpb24udmFsdWUpO1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwidHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcHJldHR5LWNoZWNrYm94LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgOCIsInZhciBTbGlkZXIgPSByZXF1aXJlKFwiYm9vdHN0cmFwLXNsaWRlclwiKTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwiYm9vdHN0cmFwLXNsaWRlclwiLFxyXG4gICAgdGl0bGU6IFwiQm9vdHN0cmFwIFNsaWRlclwiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1ib290c3RyYXAtc2xpZGVyXCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgU2xpZGVyICE9IFwidW5kZWZpbmVkXCI7XHJcbiAgICB9LFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiYm9vdHN0cmFwc2xpZGVyXCI7XHJcbiAgICB9LFxyXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiYm9vdHN0cmFwc2xpZGVyXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwiYm9vdHN0cmFwc2xpZGVyXCIsIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInN0ZXA6bnVtYmVyXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInJhbmdlTWluOm51bWJlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJyYW5nZU1heDpudW1iZXJcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IDEwMFxyXG4gICAgICAgIH1cclxuICAgICAgXSk7XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgaW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgaW5wdXRFbC5pZCA9IHF1ZXN0aW9uLmlkO1xyXG4gICAgICBpbnB1dEVsLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlci1pZFwiLCBxdWVzdGlvbi5uYW1lICsgXCJfXCIgKyBxdWVzdGlvbi5pZCk7XHJcbiAgICAgIGlucHV0RWwuc2V0QXR0cmlidXRlKFwiZGF0YS1zbGlkZXItbWluXCIsIHF1ZXN0aW9uLnJhbmdlTWluKTtcclxuICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlci1tYXhcIiwgcXVlc3Rpb24ucmFuZ2VNYXgpO1xyXG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVyLXN0ZXBcIiwgcXVlc3Rpb24uc3RlcCk7XHJcbiAgICAgIGlucHV0RWwuc2V0QXR0cmlidXRlKFwiZGF0YS1zbGlkZXItdmFsdWVcIiwgcXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICBlbC5hcHBlbmRDaGlsZChpbnB1dEVsKTtcclxuICAgICAgdmFyIHNsaWRlciA9IG5ldyBTbGlkZXIoaW5wdXRFbCwge30pO1xyXG5cclxuICAgICAgc2xpZGVyLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKHZhbHVlT2JqKSB7XHJcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBzbGlkZXIuZ2V0VmFsdWUoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBzbGlkZXIuc2V0VmFsdWUocXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgICBxdWVzdGlvbi5ib290c3RyYXBTbGlkZXIgPSBzbGlkZXI7XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgcXVlc3Rpb24uYm9vdHN0cmFwU2xpZGVyLmRlc3Ryb3koKTtcclxuICAgICAgcXVlc3Rpb24uYm9vdHN0cmFwU2xpZGVyID0gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ib290c3RyYXAtc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qISA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICAgICAgICAgICAgVkVSU0lPTiAgMTAuMC4wICAgICAgICAgICAgICBcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuLyohID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogYm9vdHN0cmFwLXNsaWRlci5qc1xuICpcbiAqIE1haW50YWluZXJzOlxuICpcdFx0S3lsZSBLZW1wXG4gKlx0XHRcdC0gVHdpdHRlcjogQHNlaXlyaWFcbiAqXHRcdFx0LSBHaXRodWI6ICBzZWl5cmlhXG4gKlx0XHRSb2hpdCBLYWxrdXJcbiAqXHRcdFx0LSBUd2l0dGVyOiBAUm92b2x1dGlvbmFyeVxuICpcdFx0XHQtIEdpdGh1YjogIHJvdm9sdXRpb25cbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBib290c3RyYXAtc2xpZGVyIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IEt5bGUgS2VtcCwgUm9oaXQgS2Fsa3VyLCBhbmQgY29udHJpYnV0b3JzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcbiAqIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAqIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAqIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcbiAqIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICogSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gKiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAqIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBCcmlkZ2V0IG1ha2VzIGpRdWVyeSB3aWRnZXRzXG4gKiB2MS4wLjFcbiAqIE1JVCBsaWNlbnNlXG4gKi9cbnZhciB3aW5kb3dJc0RlZmluZWQgPSAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHdpbmRvdykpID09PSBcIm9iamVjdFwiO1xuXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdH0gZWxzZSBpZiAoKHR5cGVvZiBtb2R1bGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihtb2R1bGUpKSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdHZhciBqUXVlcnk7XG5cdFx0dHJ5IHtcblx0XHRcdGpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRqUXVlcnkgPSBudWxsO1xuXHRcdH1cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoalF1ZXJ5KTtcblx0fSBlbHNlIGlmICh3aW5kb3cpIHtcblx0XHR3aW5kb3cuU2xpZGVyID0gZmFjdG9yeSh3aW5kb3cualF1ZXJ5KTtcblx0fVxufSkoZnVuY3Rpb24gKCQpIHtcblx0Ly8gQ29uc3RhbnRzXG5cdHZhciBOQU1FU1BBQ0VfTUFJTiA9ICdzbGlkZXInO1xuXHR2YXIgTkFNRVNQQUNFX0FMVEVSTkFURSA9ICdib290c3RyYXBTbGlkZXInO1xuXG5cdC8vIFBvbHlmaWxsIGNvbnNvbGUgbWV0aG9kc1xuXHRpZiAod2luZG93SXNEZWZpbmVkICYmICF3aW5kb3cuY29uc29sZSkge1xuXHRcdHdpbmRvdy5jb25zb2xlID0ge307XG5cdH1cblx0aWYgKHdpbmRvd0lzRGVmaW5lZCAmJiAhd2luZG93LmNvbnNvbGUubG9nKSB7XG5cdFx0d2luZG93LmNvbnNvbGUubG9nID0gZnVuY3Rpb24gKCkge307XG5cdH1cblx0aWYgKHdpbmRvd0lzRGVmaW5lZCAmJiAhd2luZG93LmNvbnNvbGUud2Fybikge1xuXHRcdHdpbmRvdy5jb25zb2xlLndhcm4gPSBmdW5jdGlvbiAoKSB7fTtcblx0fVxuXG5cdC8vIFJlZmVyZW5jZSB0byBTbGlkZXIgY29uc3RydWN0b3Jcblx0dmFyIFNsaWRlcjtcblxuXHQoZnVuY3Rpb24gKCQpIHtcblxuXHRcdCd1c2Ugc3RyaWN0JztcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0XHR2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cblx0XHRmdW5jdGlvbiBub29wKCkge31cblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRlZmluaXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHRcdGZ1bmN0aW9uIGRlZmluZUJyaWRnZXQoJCkge1xuXG5cdFx0XHQvLyBiYWlsIGlmIG5vIGpRdWVyeVxuXHRcdFx0aWYgKCEkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYWRkT3B0aW9uTWV0aG9kIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0XHRcdC8qKlxuICAgICogYWRkcyBvcHRpb24gbWV0aG9kIC0+ICQoKS5wbHVnaW4oJ29wdGlvbicsIHsuLi59KVxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gUGx1Z2luQ2xhc3MgLSBjb25zdHJ1Y3RvciBjbGFzc1xuICAgICovXG5cdFx0XHRmdW5jdGlvbiBhZGRPcHRpb25NZXRob2QoUGx1Z2luQ2xhc3MpIHtcblx0XHRcdFx0Ly8gZG9uJ3Qgb3ZlcndyaXRlIG9yaWdpbmFsIG9wdGlvbiBtZXRob2Rcblx0XHRcdFx0aWYgKFBsdWdpbkNsYXNzLnByb3RvdHlwZS5vcHRpb24pIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBvcHRpb24gc2V0dGVyXG5cdFx0XHRcdFBsdWdpbkNsYXNzLnByb3RvdHlwZS5vcHRpb24gPSBmdW5jdGlvbiAob3B0cykge1xuXHRcdFx0XHRcdC8vIGJhaWwgb3V0IGlmIG5vdCBhbiBvYmplY3Rcblx0XHRcdFx0XHRpZiAoISQuaXNQbGFpbk9iamVjdChvcHRzKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB0aGlzLm9wdGlvbnMsIG9wdHMpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwbHVnaW4gYnJpZGdlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0XHRcdC8vIGhlbHBlciBmdW5jdGlvbiBmb3IgbG9nZ2luZyBlcnJvcnNcblx0XHRcdC8vICQuZXJyb3IgYnJlYWtzIGpRdWVyeSBjaGFpbmluZ1xuXHRcdFx0dmFyIGxvZ0Vycm9yID0gdHlwZW9mIGNvbnNvbGUgPT09ICd1bmRlZmluZWQnID8gbm9vcCA6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG5cdFx0XHR9O1xuXG5cdFx0XHQvKipcbiAgICAqIGpRdWVyeSBwbHVnaW4gYnJpZGdlLCBhY2Nlc3MgbWV0aG9kcyBsaWtlICRlbGVtLnBsdWdpbignbWV0aG9kJylcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBwbHVnaW4gbmFtZVxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gUGx1Z2luQ2xhc3MgLSBjb25zdHJ1Y3RvciBjbGFzc1xuICAgICovXG5cdFx0XHRmdW5jdGlvbiBicmlkZ2UobmFtZXNwYWNlLCBQbHVnaW5DbGFzcykge1xuXHRcdFx0XHQvLyBhZGQgdG8galF1ZXJ5IGZuIG5hbWVzcGFjZVxuXHRcdFx0XHQkLmZuW25hbWVzcGFjZV0gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdFx0XHRcdGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdC8vIGNhbGwgcGx1Z2luIG1ldGhvZCB3aGVuIGZpcnN0IGFyZ3VtZW50IGlzIGEgc3RyaW5nXG5cdFx0XHRcdFx0XHQvLyBnZXQgYXJndW1lbnRzIGZvciBtZXRob2Rcblx0XHRcdFx0XHRcdHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZWxlbSA9IHRoaXNbaV07XG5cdFx0XHRcdFx0XHRcdHZhciBpbnN0YW5jZSA9ICQuZGF0YShlbGVtLCBuYW1lc3BhY2UpO1xuXHRcdFx0XHRcdFx0XHRpZiAoIWluc3RhbmNlKSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9nRXJyb3IoXCJjYW5ub3QgY2FsbCBtZXRob2RzIG9uIFwiICsgbmFtZXNwYWNlICsgXCIgcHJpb3IgdG8gaW5pdGlhbGl6YXRpb247IFwiICsgXCJhdHRlbXB0ZWQgdG8gY2FsbCAnXCIgKyBvcHRpb25zICsgXCInXCIpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghJC5pc0Z1bmN0aW9uKGluc3RhbmNlW29wdGlvbnNdKSB8fCBvcHRpb25zLmNoYXJBdCgwKSA9PT0gJ18nKSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9nRXJyb3IoXCJubyBzdWNoIG1ldGhvZCAnXCIgKyBvcHRpb25zICsgXCInIGZvciBcIiArIG5hbWVzcGFjZSArIFwiIGluc3RhbmNlXCIpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Ly8gdHJpZ2dlciBtZXRob2Qgd2l0aCBhcmd1bWVudHNcblx0XHRcdFx0XHRcdFx0dmFyIHJldHVyblZhbHVlID0gaW5zdGFuY2Vbb3B0aW9uc10uYXBwbHkoaW5zdGFuY2UsIGFyZ3MpO1xuXG5cdFx0XHRcdFx0XHRcdC8vIGJyZWFrIGxvb2sgYW5kIHJldHVybiBmaXJzdCB2YWx1ZSBpZiBwcm92aWRlZFxuXHRcdFx0XHRcdFx0XHRpZiAocmV0dXJuVmFsdWUgIT09IHVuZGVmaW5lZCAmJiByZXR1cm5WYWx1ZSAhPT0gaW5zdGFuY2UpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuVmFsdWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIHJldHVybiB0aGlzIGlmIG5vIHJldHVybiB2YWx1ZVxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBvYmplY3RzID0gdGhpcy5tYXAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgaW5zdGFuY2UgPSAkLmRhdGEodGhpcywgbmFtZXNwYWNlKTtcblx0XHRcdFx0XHRcdFx0aWYgKGluc3RhbmNlKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gYXBwbHkgb3B0aW9ucyAmIGluaXRcblx0XHRcdFx0XHRcdFx0XHRpbnN0YW5jZS5vcHRpb24ob3B0aW9ucyk7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFuY2UuX2luaXQoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBpbml0aWFsaXplIG5ldyBpbnN0YW5jZVxuXHRcdFx0XHRcdFx0XHRcdGluc3RhbmNlID0gbmV3IFBsdWdpbkNsYXNzKHRoaXMsIG9wdGlvbnMpO1xuXHRcdFx0XHRcdFx0XHRcdCQuZGF0YSh0aGlzLCBuYW1lc3BhY2UsIGluc3RhbmNlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJCh0aGlzKTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRpZiAoIW9iamVjdHMgfHwgb2JqZWN0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBvYmplY3RzO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG9iamVjdHNbMF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBicmlkZ2V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0XHRcdC8qKlxuICAgICogY29udmVydHMgYSBQcm90b3R5cGljYWwgY2xhc3MgaW50byBhIHByb3BlciBqUXVlcnkgcGx1Z2luXG4gICAgKiAgIHRoZSBjbGFzcyBtdXN0IGhhdmUgYSAuX2luaXQgbWV0aG9kXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIC0gcGx1Z2luIG5hbWUsIHVzZWQgaW4gJCgpLnBsdWdpbk5hbWVcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFBsdWdpbkNsYXNzIC0gY29uc3RydWN0b3IgY2xhc3NcbiAgICAqL1xuXHRcdFx0JC5icmlkZ2V0ID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgUGx1Z2luQ2xhc3MpIHtcblx0XHRcdFx0YWRkT3B0aW9uTWV0aG9kKFBsdWdpbkNsYXNzKTtcblx0XHRcdFx0YnJpZGdlKG5hbWVzcGFjZSwgUGx1Z2luQ2xhc3MpO1xuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuICQuYnJpZGdldDtcblx0XHR9XG5cblx0XHQvLyBnZXQganF1ZXJ5IGZyb20gYnJvd3NlciBnbG9iYWxcblx0XHRkZWZpbmVCcmlkZ2V0KCQpO1xuXHR9KSgkKTtcblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIFx0XHRcdEJPT1RTVFJBUC1TTElERVIgU09VUkNFIENPREVcbiBcdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdChmdW5jdGlvbiAoJCkge1xuXG5cdFx0dmFyIEVycm9yTXNncyA9IHtcblx0XHRcdGZvcm1hdEludmFsaWRJbnB1dEVycm9yTXNnOiBmdW5jdGlvbiBmb3JtYXRJbnZhbGlkSW5wdXRFcnJvck1zZyhpbnB1dCkge1xuXHRcdFx0XHRyZXR1cm4gXCJJbnZhbGlkIGlucHV0IHZhbHVlICdcIiArIGlucHV0ICsgXCInIHBhc3NlZCBpblwiO1xuXHRcdFx0fSxcblx0XHRcdGNhbGxpbmdDb250ZXh0Tm90U2xpZGVySW5zdGFuY2U6IFwiQ2FsbGluZyBjb250ZXh0IGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBpbnN0YW5jZSBvZiBTbGlkZXIgYm91bmQgdG8gaXQuIENoZWNrIHlvdXIgY29kZSB0byBtYWtlIHN1cmUgdGhlIEpRdWVyeSBvYmplY3QgcmV0dXJuZWQgZnJvbSB0aGUgY2FsbCB0byB0aGUgc2xpZGVyKCkgaW5pdGlhbGl6ZXIgaXMgY2FsbGluZyB0aGUgbWV0aG9kXCJcblx0XHR9O1xuXG5cdFx0dmFyIFNsaWRlclNjYWxlID0ge1xuXHRcdFx0bGluZWFyOiB7XG5cdFx0XHRcdHRvVmFsdWU6IGZ1bmN0aW9uIHRvVmFsdWUocGVyY2VudGFnZSkge1xuXHRcdFx0XHRcdHZhciByYXdWYWx1ZSA9IHBlcmNlbnRhZ2UgLyAxMDAgKiAodGhpcy5vcHRpb25zLm1heCAtIHRoaXMub3B0aW9ucy5taW4pO1xuXHRcdFx0XHRcdHZhciBzaG91bGRBZGp1c3RXaXRoQmFzZSA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy50aWNrc19wb3NpdGlvbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0dmFyIG1pbnYsXG5cdFx0XHRcdFx0XHQgICAgbWF4dixcblx0XHRcdFx0XHRcdCAgICBtaW5wLFxuXHRcdFx0XHRcdFx0ICAgIG1heHAgPSAwO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLm9wdGlvbnMudGlja3NfcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChwZXJjZW50YWdlIDw9IHRoaXMub3B0aW9ucy50aWNrc19wb3NpdGlvbnNbaV0pIHtcblx0XHRcdFx0XHRcdFx0XHRtaW52ID0gdGhpcy5vcHRpb25zLnRpY2tzW2kgLSAxXTtcblx0XHRcdFx0XHRcdFx0XHRtaW5wID0gdGhpcy5vcHRpb25zLnRpY2tzX3Bvc2l0aW9uc1tpIC0gMV07XG5cdFx0XHRcdFx0XHRcdFx0bWF4diA9IHRoaXMub3B0aW9ucy50aWNrc1tpXTtcblx0XHRcdFx0XHRcdFx0XHRtYXhwID0gdGhpcy5vcHRpb25zLnRpY2tzX3Bvc2l0aW9uc1tpXTtcblxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR2YXIgcGFydGlhbFBlcmNlbnRhZ2UgPSAocGVyY2VudGFnZSAtIG1pbnApIC8gKG1heHAgLSBtaW5wKTtcblx0XHRcdFx0XHRcdHJhd1ZhbHVlID0gbWludiArIHBhcnRpYWxQZXJjZW50YWdlICogKG1heHYgLSBtaW52KTtcblx0XHRcdFx0XHRcdHNob3VsZEFkanVzdFdpdGhCYXNlID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIGFkanVzdG1lbnQgPSBzaG91bGRBZGp1c3RXaXRoQmFzZSA/IHRoaXMub3B0aW9ucy5taW4gOiAwO1xuXHRcdFx0XHRcdHZhciB2YWx1ZSA9IGFkanVzdG1lbnQgKyBNYXRoLnJvdW5kKHJhd1ZhbHVlIC8gdGhpcy5vcHRpb25zLnN0ZXApICogdGhpcy5vcHRpb25zLnN0ZXA7XG5cdFx0XHRcdFx0aWYgKHZhbHVlIDwgdGhpcy5vcHRpb25zLm1pbikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5taW47XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA+IHRoaXMub3B0aW9ucy5tYXgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLm9wdGlvbnMubWF4O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0b1BlcmNlbnRhZ2U6IGZ1bmN0aW9uIHRvUGVyY2VudGFnZSh2YWx1ZSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMubWF4ID09PSB0aGlzLm9wdGlvbnMubWluKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnRpY2tzX3Bvc2l0aW9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHR2YXIgbWludixcblx0XHRcdFx0XHRcdCAgICBtYXh2LFxuXHRcdFx0XHRcdFx0ICAgIG1pbnAsXG5cdFx0XHRcdFx0XHQgICAgbWF4cCA9IDA7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy50aWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRpZiAodmFsdWUgPD0gdGhpcy5vcHRpb25zLnRpY2tzW2ldKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWludiA9IGkgPiAwID8gdGhpcy5vcHRpb25zLnRpY2tzW2kgLSAxXSA6IDA7XG5cdFx0XHRcdFx0XHRcdFx0bWlucCA9IGkgPiAwID8gdGhpcy5vcHRpb25zLnRpY2tzX3Bvc2l0aW9uc1tpIC0gMV0gOiAwO1xuXHRcdFx0XHRcdFx0XHRcdG1heHYgPSB0aGlzLm9wdGlvbnMudGlja3NbaV07XG5cdFx0XHRcdFx0XHRcdFx0bWF4cCA9IHRoaXMub3B0aW9ucy50aWNrc19wb3NpdGlvbnNbaV07XG5cblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGkgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwYXJ0aWFsUGVyY2VudGFnZSA9ICh2YWx1ZSAtIG1pbnYpIC8gKG1heHYgLSBtaW52KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG1pbnAgKyBwYXJ0aWFsUGVyY2VudGFnZSAqIChtYXhwIC0gbWlucCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIDEwMCAqICh2YWx1ZSAtIHRoaXMub3B0aW9ucy5taW4pIC8gKHRoaXMub3B0aW9ucy5tYXggLSB0aGlzLm9wdGlvbnMubWluKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0bG9nYXJpdGhtaWM6IHtcblx0XHRcdFx0LyogQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84NDYyMjEvbG9nYXJpdGhtaWMtc2xpZGVyICovXG5cdFx0XHRcdHRvVmFsdWU6IGZ1bmN0aW9uIHRvVmFsdWUocGVyY2VudGFnZSkge1xuXHRcdFx0XHRcdHZhciBtaW4gPSB0aGlzLm9wdGlvbnMubWluID09PSAwID8gMCA6IE1hdGgubG9nKHRoaXMub3B0aW9ucy5taW4pO1xuXHRcdFx0XHRcdHZhciBtYXggPSBNYXRoLmxvZyh0aGlzLm9wdGlvbnMubWF4KTtcblx0XHRcdFx0XHR2YXIgdmFsdWUgPSBNYXRoLmV4cChtaW4gKyAobWF4IC0gbWluKSAqIHBlcmNlbnRhZ2UgLyAxMDApO1xuXHRcdFx0XHRcdGlmIChNYXRoLnJvdW5kKHZhbHVlKSA9PT0gdGhpcy5vcHRpb25zLm1heCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5tYXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhbHVlID0gdGhpcy5vcHRpb25zLm1pbiArIE1hdGgucm91bmQoKHZhbHVlIC0gdGhpcy5vcHRpb25zLm1pbikgLyB0aGlzLm9wdGlvbnMuc3RlcCkgKiB0aGlzLm9wdGlvbnMuc3RlcDtcblx0XHRcdFx0XHQvKiBSb3VuZGluZyB0byB0aGUgbmVhcmVzdCBzdGVwIGNvdWxkIGV4Y2VlZCB0aGUgbWluIG9yXG4gICAgICAqIG1heCwgc28gY2xpcCB0byB0aG9zZSB2YWx1ZXMuICovXG5cdFx0XHRcdFx0aWYgKHZhbHVlIDwgdGhpcy5vcHRpb25zLm1pbikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5taW47XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA+IHRoaXMub3B0aW9ucy5tYXgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLm9wdGlvbnMubWF4O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0b1BlcmNlbnRhZ2U6IGZ1bmN0aW9uIHRvUGVyY2VudGFnZSh2YWx1ZSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMubWF4ID09PSB0aGlzLm9wdGlvbnMubWluKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIG1heCA9IE1hdGgubG9nKHRoaXMub3B0aW9ucy5tYXgpO1xuXHRcdFx0XHRcdFx0dmFyIG1pbiA9IHRoaXMub3B0aW9ucy5taW4gPT09IDAgPyAwIDogTWF0aC5sb2codGhpcy5vcHRpb25zLm1pbik7XG5cdFx0XHRcdFx0XHR2YXIgdiA9IHZhbHVlID09PSAwID8gMCA6IE1hdGgubG9nKHZhbHVlKTtcblx0XHRcdFx0XHRcdHJldHVybiAxMDAgKiAodiAtIG1pbikgLyAobWF4IC0gbWluKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgXHRcdFx0XHRcdFx0Q09OU1RSVUNUT1JcbiAgXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblx0XHRTbGlkZXIgPSBmdW5jdGlvbiBTbGlkZXIoZWxlbWVudCwgb3B0aW9ucykge1xuXHRcdFx0Y3JlYXRlTmV3U2xpZGVyLmNhbGwodGhpcywgZWxlbWVudCwgb3B0aW9ucyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gY3JlYXRlTmV3U2xpZGVyKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuXHRcdFx0LypcbiAgIFx0VGhlIGludGVybmFsIHN0YXRlIG9iamVjdCBpcyB1c2VkIHRvIHN0b3JlIGRhdGEgYWJvdXQgdGhlIGN1cnJlbnQgJ3N0YXRlJyBvZiBzbGlkZXIuXG4gICBcdFRoaXMgaW5jbHVkZXMgdmFsdWVzIHN1Y2ggYXMgdGhlIGB2YWx1ZWAsIGBlbmFibGVkYCwgZXRjLi4uXG4gICAqL1xuXHRcdFx0dGhpcy5fc3RhdGUgPSB7XG5cdFx0XHRcdHZhbHVlOiBudWxsLFxuXHRcdFx0XHRlbmFibGVkOiBudWxsLFxuXHRcdFx0XHRvZmZzZXQ6IG51bGwsXG5cdFx0XHRcdHNpemU6IG51bGwsXG5cdFx0XHRcdHBlcmNlbnRhZ2U6IG51bGwsXG5cdFx0XHRcdGluRHJhZzogZmFsc2UsXG5cdFx0XHRcdG92ZXI6IGZhbHNlXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBUaGUgb2JqZWN0cyB1c2VkIHRvIHN0b3JlIHRoZSByZWZlcmVuY2UgdG8gdGhlIHRpY2sgbWV0aG9kcyBpZiB0aWNrc190b29sdGlwIGlzIG9uXG5cdFx0XHR0aGlzLnRpY2tzQ2FsbGJhY2tNYXAgPSB7fTtcblx0XHRcdHRoaXMuaGFuZGxlQ2FsbGJhY2tNYXAgPSB7fTtcblxuXHRcdFx0aWYgKHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG5cdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXHRcdFx0fVxuXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgXHRcdFx0XHRcdFByb2Nlc3MgT3B0aW9uc1xuICAgXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xuXHRcdFx0dmFyIG9wdGlvblR5cGVzID0gT2JqZWN0LmtleXModGhpcy5kZWZhdWx0T3B0aW9ucyk7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9uVHlwZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIG9wdE5hbWUgPSBvcHRpb25UeXBlc1tpXTtcblxuXHRcdFx0XHQvLyBGaXJzdCBjaGVjayBpZiBhbiBvcHRpb24gd2FzIHBhc3NlZCBpbiB2aWEgdGhlIGNvbnN0cnVjdG9yXG5cdFx0XHRcdHZhciB2YWwgPSBvcHRpb25zW29wdE5hbWVdO1xuXHRcdFx0XHQvLyBJZiBubyBkYXRhIGF0dHJpYiwgdGhlbiBjaGVjayBkYXRhIGF0cnJpYnV0ZXNcblx0XHRcdFx0dmFsID0gdHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgPyB2YWwgOiBnZXREYXRhQXR0cmliKHRoaXMuZWxlbWVudCwgb3B0TmFtZSk7XG5cdFx0XHRcdC8vIEZpbmFsbHksIGlmIG5vdGhpbmcgd2FzIHNwZWNpZmllZCwgdXNlIHRoZSBkZWZhdWx0c1xuXHRcdFx0XHR2YWwgPSB2YWwgIT09IG51bGwgPyB2YWwgOiB0aGlzLmRlZmF1bHRPcHRpb25zW29wdE5hbWVdO1xuXG5cdFx0XHRcdC8vIFNldCBhbGwgb3B0aW9ucyBvbiB0aGUgaW5zdGFuY2Ugb2YgdGhlIFNsaWRlclxuXHRcdFx0XHRpZiAoIXRoaXMub3B0aW9ucykge1xuXHRcdFx0XHRcdHRoaXMub3B0aW9ucyA9IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMub3B0aW9uc1tvcHROYW1lXSA9IHZhbDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2hlY2sgb3B0aW9ucy5ydGxcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMucnRsID09PSAnYXV0bycpIHtcblx0XHRcdFx0dGhpcy5vcHRpb25zLnJ0bCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJztcblx0XHRcdH1cblxuXHRcdFx0LypcbiAgIFx0VmFsaWRhdGUgYHRvb2x0aXBfcG9zaXRpb25gIGFnYWluc3QgJ29yaWVudGF0aW9uYFxuICAgXHQtIGlmIGB0b29sdGlwX3Bvc2l0aW9uYCBpcyBpbmNvbXBhdGlibGUgd2l0aCBvcmllbnRhdGlvbiwgc3dpdGggaXQgdG8gYSBkZWZhdWx0IGNvbXBhdGlibGUgd2l0aCBzcGVjaWZpZWQgYG9yaWVudGF0aW9uYFxuICAgXHRcdC0tIGRlZmF1bHQgZm9yIFwidmVydGljYWxcIiAtPiBcInJpZ2h0XCIsIFwibGVmdFwiIGlmIHJ0bFxuICAgXHRcdC0tIGRlZmF1bHQgZm9yIFwiaG9yaXpvbnRhbFwiIC0+IFwidG9wXCJcbiAgICovXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgJiYgKHRoaXMub3B0aW9ucy50b29sdGlwX3Bvc2l0aW9uID09PSBcInRvcFwiIHx8IHRoaXMub3B0aW9ucy50b29sdGlwX3Bvc2l0aW9uID09PSBcImJvdHRvbVwiKSkge1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJ0bCkge1xuXHRcdFx0XHRcdHRoaXMub3B0aW9ucy50b29sdGlwX3Bvc2l0aW9uID0gXCJsZWZ0XCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zLnRvb2x0aXBfcG9zaXRpb24gPSBcInJpZ2h0XCI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiAmJiAodGhpcy5vcHRpb25zLnRvb2x0aXBfcG9zaXRpb24gPT09IFwibGVmdFwiIHx8IHRoaXMub3B0aW9ucy50b29sdGlwX3Bvc2l0aW9uID09PSBcInJpZ2h0XCIpKSB7XG5cblx0XHRcdFx0dGhpcy5vcHRpb25zLnRvb2x0aXBfcG9zaXRpb24gPSBcInRvcFwiO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBnZXREYXRhQXR0cmliKGVsZW1lbnQsIG9wdE5hbWUpIHtcblx0XHRcdFx0dmFyIGRhdGFOYW1lID0gXCJkYXRhLXNsaWRlci1cIiArIG9wdE5hbWUucmVwbGFjZSgvXy9nLCAnLScpO1xuXHRcdFx0XHR2YXIgZGF0YVZhbFN0cmluZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGRhdGFOYW1lKTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKGRhdGFWYWxTdHJpbmcpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRyZXR1cm4gZGF0YVZhbFN0cmluZztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgXHRcdFx0XHRcdENyZWF0ZSBNYXJrdXBcbiAgIFx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdHZhciBvcmlnV2lkdGggPSB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGg7XG5cdFx0XHR2YXIgdXBkYXRlU2xpZGVyID0gZmFsc2U7XG5cdFx0XHR2YXIgcGFyZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0XHR2YXIgc2xpZGVyVHJhY2tTZWxlY3Rpb247XG5cdFx0XHR2YXIgc2xpZGVyVHJhY2tMb3csIHNsaWRlclRyYWNrSGlnaDtcblx0XHRcdHZhciBzbGlkZXJNaW5IYW5kbGU7XG5cdFx0XHR2YXIgc2xpZGVyTWF4SGFuZGxlO1xuXG5cdFx0XHRpZiAodGhpcy5zbGlkZXJFbGVtKSB7XG5cdFx0XHRcdHVwZGF0ZVNsaWRlciA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvKiBDcmVhdGUgZWxlbWVudHMgbmVlZGVkIGZvciBzbGlkZXIgKi9cblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLmNsYXNzTmFtZSA9IFwic2xpZGVyXCI7XG5cblx0XHRcdFx0LyogQ3JlYXRlIHNsaWRlciB0cmFjayBlbGVtZW50cyAqL1xuXHRcdFx0XHR2YXIgc2xpZGVyVHJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRzbGlkZXJUcmFjay5jbGFzc05hbWUgPSBcInNsaWRlci10cmFja1wiO1xuXG5cdFx0XHRcdHNsaWRlclRyYWNrTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0c2xpZGVyVHJhY2tMb3cuY2xhc3NOYW1lID0gXCJzbGlkZXItdHJhY2stbG93XCI7XG5cblx0XHRcdFx0c2xpZGVyVHJhY2tTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRzbGlkZXJUcmFja1NlbGVjdGlvbi5jbGFzc05hbWUgPSBcInNsaWRlci1zZWxlY3Rpb25cIjtcblxuXHRcdFx0XHRzbGlkZXJUcmFja0hpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRzbGlkZXJUcmFja0hpZ2guY2xhc3NOYW1lID0gXCJzbGlkZXItdHJhY2staGlnaFwiO1xuXG5cdFx0XHRcdHNsaWRlck1pbkhhbmRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHNsaWRlck1pbkhhbmRsZS5jbGFzc05hbWUgPSBcInNsaWRlci1oYW5kbGUgbWluLXNsaWRlci1oYW5kbGVcIjtcblx0XHRcdFx0c2xpZGVyTWluSGFuZGxlLnNldEF0dHJpYnV0ZSgncm9sZScsICdzbGlkZXInKTtcblx0XHRcdFx0c2xpZGVyTWluSGFuZGxlLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW1pbicsIHRoaXMub3B0aW9ucy5taW4pO1xuXHRcdFx0XHRzbGlkZXJNaW5IYW5kbGUuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbWF4JywgdGhpcy5vcHRpb25zLm1heCk7XG5cblx0XHRcdFx0c2xpZGVyTWF4SGFuZGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0c2xpZGVyTWF4SGFuZGxlLmNsYXNzTmFtZSA9IFwic2xpZGVyLWhhbmRsZSBtYXgtc2xpZGVyLWhhbmRsZVwiO1xuXHRcdFx0XHRzbGlkZXJNYXhIYW5kbGUuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3NsaWRlcicpO1xuXHRcdFx0XHRzbGlkZXJNYXhIYW5kbGUuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbWluJywgdGhpcy5vcHRpb25zLm1pbik7XG5cdFx0XHRcdHNsaWRlck1heEhhbmRsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVtYXgnLCB0aGlzLm9wdGlvbnMubWF4KTtcblxuXHRcdFx0XHRzbGlkZXJUcmFjay5hcHBlbmRDaGlsZChzbGlkZXJUcmFja0xvdyk7XG5cdFx0XHRcdHNsaWRlclRyYWNrLmFwcGVuZENoaWxkKHNsaWRlclRyYWNrU2VsZWN0aW9uKTtcblx0XHRcdFx0c2xpZGVyVHJhY2suYXBwZW5kQ2hpbGQoc2xpZGVyVHJhY2tIaWdoKTtcblxuXHRcdFx0XHQvKiBDcmVhdGUgaGlnaGxpZ2h0IHJhbmdlIGVsZW1lbnRzICovXG5cdFx0XHRcdHRoaXMucmFuZ2VIaWdobGlnaHRFbGVtZW50cyA9IFtdO1xuXHRcdFx0XHR2YXIgcmFuZ2VIaWdobGlnaHRzT3B0cyA9IHRoaXMub3B0aW9ucy5yYW5nZUhpZ2hsaWdodHM7XG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KHJhbmdlSGlnaGxpZ2h0c09wdHMpICYmIHJhbmdlSGlnaGxpZ2h0c09wdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgcmFuZ2VIaWdobGlnaHRzT3B0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0dmFyIHJhbmdlSGlnaGxpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0XHR2YXIgY3VzdG9tQ2xhc3NTdHJpbmcgPSByYW5nZUhpZ2hsaWdodHNPcHRzW2pdLmNsYXNzIHx8IFwiXCI7XG5cdFx0XHRcdFx0XHRyYW5nZUhpZ2hsaWdodEVsZW1lbnQuY2xhc3NOYW1lID0gXCJzbGlkZXItcmFuZ2VIaWdobGlnaHQgc2xpZGVyLXNlbGVjdGlvbiBcIiArIGN1c3RvbUNsYXNzU3RyaW5nO1xuXHRcdFx0XHRcdFx0dGhpcy5yYW5nZUhpZ2hsaWdodEVsZW1lbnRzLnB1c2gocmFuZ2VIaWdobGlnaHRFbGVtZW50KTtcblx0XHRcdFx0XHRcdHNsaWRlclRyYWNrLmFwcGVuZENoaWxkKHJhbmdlSGlnaGxpZ2h0RWxlbWVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyogQWRkIGFyaWEtbGFiZWxsZWRieSB0byBoYW5kbGUncyAqL1xuXHRcdFx0XHR2YXIgaXNMYWJlbGxlZGJ5QXJyYXkgPSBBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucy5sYWJlbGxlZGJ5KTtcblx0XHRcdFx0aWYgKGlzTGFiZWxsZWRieUFycmF5ICYmIHRoaXMub3B0aW9ucy5sYWJlbGxlZGJ5WzBdKSB7XG5cdFx0XHRcdFx0c2xpZGVyTWluSGFuZGxlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgdGhpcy5vcHRpb25zLmxhYmVsbGVkYnlbMF0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpc0xhYmVsbGVkYnlBcnJheSAmJiB0aGlzLm9wdGlvbnMubGFiZWxsZWRieVsxXSkge1xuXHRcdFx0XHRcdHNsaWRlck1heEhhbmRsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIHRoaXMub3B0aW9ucy5sYWJlbGxlZGJ5WzFdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWlzTGFiZWxsZWRieUFycmF5ICYmIHRoaXMub3B0aW9ucy5sYWJlbGxlZGJ5KSB7XG5cdFx0XHRcdFx0c2xpZGVyTWluSGFuZGxlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgdGhpcy5vcHRpb25zLmxhYmVsbGVkYnkpO1xuXHRcdFx0XHRcdHNsaWRlck1heEhhbmRsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIHRoaXMub3B0aW9ucy5sYWJlbGxlZGJ5KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qIENyZWF0ZSB0aWNrcyAqL1xuXHRcdFx0XHR0aGlzLnRpY2tzID0gW107XG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucy50aWNrcykgJiYgdGhpcy5vcHRpb25zLnRpY2tzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHR0aGlzLnRpY2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0dGhpcy50aWNrc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnc2xpZGVyLXRpY2stY29udGFpbmVyJztcblxuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMudGlja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHZhciB0aWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0XHR0aWNrLmNsYXNzTmFtZSA9ICdzbGlkZXItdGljayc7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnRpY2tzX3Rvb2x0aXApIHtcblx0XHRcdFx0XHRcdFx0dmFyIHRpY2tMaXN0ZW5lclJlZmVyZW5jZSA9IHRoaXMuX2FkZFRpY2tMaXN0ZW5lcigpO1xuXHRcdFx0XHRcdFx0XHR2YXIgZW50ZXJDYWxsYmFjayA9IHRpY2tMaXN0ZW5lclJlZmVyZW5jZS5hZGRNb3VzZUVudGVyKHRoaXMsIHRpY2ssIGkpO1xuXHRcdFx0XHRcdFx0XHR2YXIgbGVhdmVDYWxsYmFjayA9IHRpY2tMaXN0ZW5lclJlZmVyZW5jZS5hZGRNb3VzZUxlYXZlKHRoaXMsIHRpY2spO1xuXG5cdFx0XHRcdFx0XHRcdHRoaXMudGlja3NDYWxsYmFja01hcFtpXSA9IHtcblx0XHRcdFx0XHRcdFx0XHRtb3VzZUVudGVyOiBlbnRlckNhbGxiYWNrLFxuXHRcdFx0XHRcdFx0XHRcdG1vdXNlTGVhdmU6IGxlYXZlQ2FsbGJhY2tcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMudGlja3MucHVzaCh0aWNrKTtcblx0XHRcdFx0XHRcdHRoaXMudGlja3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGljayk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c2xpZGVyVHJhY2tTZWxlY3Rpb24uY2xhc3NOYW1lICs9IFwiIHRpY2stc2xpZGVyLXNlbGVjdGlvblwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy50aWNrTGFiZWxzID0gW107XG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucy50aWNrc19sYWJlbHMpICYmIHRoaXMub3B0aW9ucy50aWNrc19sYWJlbHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHRoaXMudGlja0xhYmVsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0dGhpcy50aWNrTGFiZWxDb250YWluZXIuY2xhc3NOYW1lID0gJ3NsaWRlci10aWNrLWxhYmVsLWNvbnRhaW5lcic7XG5cblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLnRpY2tzX2xhYmVscy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0XHR2YXIgbm9UaWNrUG9zaXRpb25zU3BlY2lmaWVkID0gdGhpcy5vcHRpb25zLnRpY2tzX3Bvc2l0aW9ucy5sZW5ndGggPT09IDA7XG5cdFx0XHRcdFx0XHR2YXIgdGlja0xhYmVsc0luZGV4ID0gdGhpcy5vcHRpb25zLnJldmVyc2VkICYmIG5vVGlja1Bvc2l0aW9uc1NwZWNpZmllZCA/IHRoaXMub3B0aW9ucy50aWNrc19sYWJlbHMubGVuZ3RoIC0gKGkgKyAxKSA6IGk7XG5cdFx0XHRcdFx0XHRsYWJlbC5jbGFzc05hbWUgPSAnc2xpZGVyLXRpY2stbGFiZWwnO1xuXHRcdFx0XHRcdFx0bGFiZWwuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLnRpY2tzX2xhYmVsc1t0aWNrTGFiZWxzSW5kZXhdO1xuXG5cdFx0XHRcdFx0XHR0aGlzLnRpY2tMYWJlbHMucHVzaChsYWJlbCk7XG5cdFx0XHRcdFx0XHR0aGlzLnRpY2tMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGNyZWF0ZUFuZEFwcGVuZFRvb2x0aXBTdWJFbGVtZW50cyA9IGZ1bmN0aW9uIGNyZWF0ZUFuZEFwcGVuZFRvb2x0aXBTdWJFbGVtZW50cyh0b29sdGlwRWxlbSkge1xuXHRcdFx0XHRcdHZhciBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0YXJyb3cuY2xhc3NOYW1lID0gXCJ0b29sdGlwLWFycm93XCI7XG5cblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRcdGlubmVyLmNsYXNzTmFtZSA9IFwidG9vbHRpcC1pbm5lclwiO1xuXG5cdFx0XHRcdFx0dG9vbHRpcEVsZW0uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuXHRcdFx0XHRcdHRvb2x0aXBFbGVtLmFwcGVuZENoaWxkKGlubmVyKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvKiBDcmVhdGUgdG9vbHRpcCBlbGVtZW50cyAqL1xuXHRcdFx0XHR2YXIgc2xpZGVyVG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHNsaWRlclRvb2x0aXAuY2xhc3NOYW1lID0gXCJ0b29sdGlwIHRvb2x0aXAtbWFpblwiO1xuXHRcdFx0XHRzbGlkZXJUb29sdGlwLnNldEF0dHJpYnV0ZSgncm9sZScsICdwcmVzZW50YXRpb24nKTtcblx0XHRcdFx0Y3JlYXRlQW5kQXBwZW5kVG9vbHRpcFN1YkVsZW1lbnRzKHNsaWRlclRvb2x0aXApO1xuXG5cdFx0XHRcdHZhciBzbGlkZXJUb29sdGlwTWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0c2xpZGVyVG9vbHRpcE1pbi5jbGFzc05hbWUgPSBcInRvb2x0aXAgdG9vbHRpcC1taW5cIjtcblx0XHRcdFx0c2xpZGVyVG9vbHRpcE1pbi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncHJlc2VudGF0aW9uJyk7XG5cdFx0XHRcdGNyZWF0ZUFuZEFwcGVuZFRvb2x0aXBTdWJFbGVtZW50cyhzbGlkZXJUb29sdGlwTWluKTtcblxuXHRcdFx0XHR2YXIgc2xpZGVyVG9vbHRpcE1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHNsaWRlclRvb2x0aXBNYXguY2xhc3NOYW1lID0gXCJ0b29sdGlwIHRvb2x0aXAtbWF4XCI7XG5cdFx0XHRcdHNsaWRlclRvb2x0aXBNYXguc2V0QXR0cmlidXRlKCdyb2xlJywgJ3ByZXNlbnRhdGlvbicpO1xuXHRcdFx0XHRjcmVhdGVBbmRBcHBlbmRUb29sdGlwU3ViRWxlbWVudHMoc2xpZGVyVG9vbHRpcE1heCk7XG5cblx0XHRcdFx0LyogQXBwZW5kIGNvbXBvbmVudHMgdG8gc2xpZGVyRWxlbSAqL1xuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uYXBwZW5kQ2hpbGQoc2xpZGVyVHJhY2spO1xuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uYXBwZW5kQ2hpbGQoc2xpZGVyVG9vbHRpcCk7XG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5hcHBlbmRDaGlsZChzbGlkZXJUb29sdGlwTWluKTtcblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLmFwcGVuZENoaWxkKHNsaWRlclRvb2x0aXBNYXgpO1xuXG5cdFx0XHRcdGlmICh0aGlzLnRpY2tMYWJlbENvbnRhaW5lcikge1xuXHRcdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRpY2tMYWJlbENvbnRhaW5lcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMudGlja3NDb250YWluZXIpIHtcblx0XHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uYXBwZW5kQ2hpbGQodGhpcy50aWNrc0NvbnRhaW5lcik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uYXBwZW5kQ2hpbGQoc2xpZGVyTWluSGFuZGxlKTtcblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLmFwcGVuZENoaWxkKHNsaWRlck1heEhhbmRsZSk7XG5cblx0XHRcdFx0LyogQXBwZW5kIHNsaWRlciBlbGVtZW50IHRvIHBhcmVudCBjb250YWluZXIsIHJpZ2h0IGJlZm9yZSB0aGUgb3JpZ2luYWwgPGlucHV0PiBlbGVtZW50ICovXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUodGhpcy5zbGlkZXJFbGVtLCB0aGlzLmVsZW1lbnQpO1xuXG5cdFx0XHRcdC8qIEhpZGUgb3JpZ2luYWwgPGlucHV0PiBlbGVtZW50ICovXG5cdFx0XHRcdHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHR9XG5cdFx0XHQvKiBJZiBKUXVlcnkgZXhpc3RzLCBjYWNoZSBKUSByZWZlcmVuY2VzICovXG5cdFx0XHRpZiAoJCkge1xuXHRcdFx0XHR0aGlzLiRlbGVtZW50ID0gJCh0aGlzLmVsZW1lbnQpO1xuXHRcdFx0XHR0aGlzLiRzbGlkZXJFbGVtID0gJCh0aGlzLnNsaWRlckVsZW0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgXHRcdFx0XHRcdFx0U2V0dXBcbiAgIFx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cdFx0XHR0aGlzLmV2ZW50VG9DYWxsYmFja01hcCA9IHt9O1xuXHRcdFx0dGhpcy5zbGlkZXJFbGVtLmlkID0gdGhpcy5vcHRpb25zLmlkO1xuXG5cdFx0XHR0aGlzLnRvdWNoQ2FwYWJsZSA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoO1xuXG5cdFx0XHR0aGlzLnRvdWNoWCA9IDA7XG5cdFx0XHR0aGlzLnRvdWNoWSA9IDA7XG5cblx0XHRcdHRoaXMudG9vbHRpcCA9IHRoaXMuc2xpZGVyRWxlbS5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1tYWluJyk7XG5cdFx0XHR0aGlzLnRvb2x0aXBJbm5lciA9IHRoaXMudG9vbHRpcC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1pbm5lcicpO1xuXG5cdFx0XHR0aGlzLnRvb2x0aXBfbWluID0gdGhpcy5zbGlkZXJFbGVtLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLW1pbicpO1xuXHRcdFx0dGhpcy50b29sdGlwSW5uZXJfbWluID0gdGhpcy50b29sdGlwX21pbi5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1pbm5lcicpO1xuXG5cdFx0XHR0aGlzLnRvb2x0aXBfbWF4ID0gdGhpcy5zbGlkZXJFbGVtLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLW1heCcpO1xuXHRcdFx0dGhpcy50b29sdGlwSW5uZXJfbWF4ID0gdGhpcy50b29sdGlwX21heC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1pbm5lcicpO1xuXG5cdFx0XHRpZiAoU2xpZGVyU2NhbGVbdGhpcy5vcHRpb25zLnNjYWxlXSkge1xuXHRcdFx0XHR0aGlzLm9wdGlvbnMuc2NhbGUgPSBTbGlkZXJTY2FsZVt0aGlzLm9wdGlvbnMuc2NhbGVdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodXBkYXRlU2xpZGVyID09PSB0cnVlKSB7XG5cdFx0XHRcdC8vIFJlc2V0IGNsYXNzZXNcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy5zbGlkZXJFbGVtLCAnc2xpZGVyLWhvcml6b250YWwnKTtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy5zbGlkZXJFbGVtLCAnc2xpZGVyLXZlcnRpY2FsJyk7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMuc2xpZGVyRWxlbSwgJ3NsaWRlci1ydGwnKTtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50b29sdGlwLCAnaGlkZScpO1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRvb2x0aXBfbWluLCAnaGlkZScpO1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRvb2x0aXBfbWF4LCAnaGlkZScpO1xuXG5cdFx0XHRcdC8vIFVuZG8gZXhpc3RpbmcgaW5saW5lIHN0eWxlcyBmb3IgdHJhY2tcblx0XHRcdFx0W1wibGVmdFwiLCBcInJpZ2h0XCIsIFwidG9wXCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIl0uZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZVByb3BlcnR5KHRoaXMudHJhY2tMb3csIHByb3ApO1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZVByb3BlcnR5KHRoaXMudHJhY2tTZWxlY3Rpb24sIHByb3ApO1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZVByb3BlcnR5KHRoaXMudHJhY2tIaWdoLCBwcm9wKTtcblx0XHRcdFx0fSwgdGhpcyk7XG5cblx0XHRcdFx0Ly8gVW5kbyBpbmxpbmUgc3R5bGVzIG9uIGhhbmRsZXNcblx0XHRcdFx0W3RoaXMuaGFuZGxlMSwgdGhpcy5oYW5kbGUyXS5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUpIHtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVQcm9wZXJ0eShoYW5kbGUsICdsZWZ0Jyk7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlUHJvcGVydHkoaGFuZGxlLCAncmlnaHQnKTtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVQcm9wZXJ0eShoYW5kbGUsICd0b3AnKTtcblx0XHRcdFx0fSwgdGhpcyk7XG5cblx0XHRcdFx0Ly8gVW5kbyBpbmxpbmUgc3R5bGVzIGFuZCBjbGFzc2VzIG9uIHRvb2x0aXBzXG5cdFx0XHRcdFt0aGlzLnRvb2x0aXAsIHRoaXMudG9vbHRpcF9taW4sIHRoaXMudG9vbHRpcF9tYXhdLmZvckVhY2goZnVuY3Rpb24gKHRvb2x0aXApIHtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVQcm9wZXJ0eSh0b29sdGlwLCAnbGVmdCcpO1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZVByb3BlcnR5KHRvb2x0aXAsICdyaWdodCcpO1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZVByb3BlcnR5KHRvb2x0aXAsICd0b3AnKTtcblxuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRvb2x0aXAsICdyaWdodCcpO1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRvb2x0aXAsICdsZWZ0Jyk7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModG9vbHRpcCwgJ3RvcCcpO1xuXHRcdFx0XHR9LCB0aGlzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnNsaWRlckVsZW0sICdzbGlkZXItdmVydGljYWwnKTtcblx0XHRcdFx0dGhpcy5zdHlsZVBvcyA9ICd0b3AnO1xuXHRcdFx0XHR0aGlzLm1vdXNlUG9zID0gJ3BhZ2VZJztcblx0XHRcdFx0dGhpcy5zaXplUG9zID0gJ29mZnNldEhlaWdodCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnNsaWRlckVsZW0sICdzbGlkZXItaG9yaXpvbnRhbCcpO1xuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uc3R5bGUud2lkdGggPSBvcmlnV2lkdGg7XG5cdFx0XHRcdHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5ydGwpIHtcblx0XHRcdFx0XHR0aGlzLnN0eWxlUG9zID0gJ3JpZ2h0Jztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnN0eWxlUG9zID0gJ2xlZnQnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubW91c2VQb3MgPSAncGFnZVgnO1xuXHRcdFx0XHR0aGlzLnNpemVQb3MgPSAnb2Zmc2V0V2lkdGgnO1xuXHRcdFx0fVxuXHRcdFx0Ly8gc3BlY2lmaWMgcnRsIGNsYXNzXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnJ0bCkge1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnNsaWRlckVsZW0sICdzbGlkZXItcnRsJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9zZXRUb29sdGlwUG9zaXRpb24oKTtcblx0XHRcdC8qIEluIGNhc2UgdGlja3MgYXJlIHNwZWNpZmllZCwgb3ZlcndyaXRlIHRoZSBtaW4gYW5kIG1heCBib3VuZHMgKi9cblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucy50aWNrcykgJiYgdGhpcy5vcHRpb25zLnRpY2tzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy5vcHRpb25zLm1heCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHRoaXMub3B0aW9ucy50aWNrcyk7XG5cdFx0XHRcdHRoaXMub3B0aW9ucy5taW4gPSBNYXRoLm1pbi5hcHBseShNYXRoLCB0aGlzLm9wdGlvbnMudGlja3MpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMudmFsdWUpKSB7XG5cdFx0XHRcdHRoaXMub3B0aW9ucy5yYW5nZSA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX3N0YXRlLnZhbHVlID0gdGhpcy5vcHRpb25zLnZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wdGlvbnMucmFuZ2UpIHtcblx0XHRcdFx0Ly8gVXNlciB3YW50cyBhIHJhbmdlLCBidXQgdmFsdWUgaXMgbm90IGFuIGFycmF5XG5cdFx0XHRcdHRoaXMuX3N0YXRlLnZhbHVlID0gW3RoaXMub3B0aW9ucy52YWx1ZSwgdGhpcy5vcHRpb25zLm1heF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9zdGF0ZS52YWx1ZSA9IHRoaXMub3B0aW9ucy52YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy50cmFja0xvdyA9IHNsaWRlclRyYWNrTG93IHx8IHRoaXMudHJhY2tMb3c7XG5cdFx0XHR0aGlzLnRyYWNrU2VsZWN0aW9uID0gc2xpZGVyVHJhY2tTZWxlY3Rpb24gfHwgdGhpcy50cmFja1NlbGVjdGlvbjtcblx0XHRcdHRoaXMudHJhY2tIaWdoID0gc2xpZGVyVHJhY2tIaWdoIHx8IHRoaXMudHJhY2tIaWdoO1xuXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnNlbGVjdGlvbiA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudHJhY2tMb3csICdoaWRlJyk7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudHJhY2tTZWxlY3Rpb24sICdoaWRlJyk7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudHJhY2tIaWdoLCAnaGlkZScpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0aW9uID09PSAnYWZ0ZXInIHx8IHRoaXMub3B0aW9ucy5zZWxlY3Rpb24gPT09ICdiZWZvcmUnKSB7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudHJhY2tMb3csICdoaWRlJyk7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudHJhY2tTZWxlY3Rpb24sICdoaWRlJyk7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudHJhY2tIaWdoLCAnaGlkZScpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmhhbmRsZTEgPSBzbGlkZXJNaW5IYW5kbGUgfHwgdGhpcy5oYW5kbGUxO1xuXHRcdFx0dGhpcy5oYW5kbGUyID0gc2xpZGVyTWF4SGFuZGxlIHx8IHRoaXMuaGFuZGxlMjtcblxuXHRcdFx0aWYgKHVwZGF0ZVNsaWRlciA9PT0gdHJ1ZSkge1xuXHRcdFx0XHQvLyBSZXNldCBjbGFzc2VzXG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMuaGFuZGxlMSwgJ3JvdW5kIHRyaWFuZ2xlJyk7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMuaGFuZGxlMiwgJ3JvdW5kIHRyaWFuZ2xlIGhpZGUnKTtcblxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGhpcy50aWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudGlja3NbaV0sICdyb3VuZCB0cmlhbmdsZSBoaWRlJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIGF2YWlsYWJsZUhhbmRsZU1vZGlmaWVycyA9IFsncm91bmQnLCAndHJpYW5nbGUnLCAnY3VzdG9tJ107XG5cdFx0XHR2YXIgaXNWYWxpZEhhbmRsZVR5cGUgPSBhdmFpbGFibGVIYW5kbGVNb2RpZmllcnMuaW5kZXhPZih0aGlzLm9wdGlvbnMuaGFuZGxlKSAhPT0gLTE7XG5cdFx0XHRpZiAoaXNWYWxpZEhhbmRsZVR5cGUpIHtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy5oYW5kbGUxLCB0aGlzLm9wdGlvbnMuaGFuZGxlKTtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy5oYW5kbGUyLCB0aGlzLm9wdGlvbnMuaGFuZGxlKTtcblxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGhpcy50aWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudGlja3NbaV0sIHRoaXMub3B0aW9ucy5oYW5kbGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3N0YXRlLm9mZnNldCA9IHRoaXMuX29mZnNldCh0aGlzLnNsaWRlckVsZW0pO1xuXHRcdFx0dGhpcy5fc3RhdGUuc2l6ZSA9IHRoaXMuc2xpZGVyRWxlbVt0aGlzLnNpemVQb3NdO1xuXHRcdFx0dGhpcy5zZXRWYWx1ZSh0aGlzLl9zdGF0ZS52YWx1ZSk7XG5cblx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgIFx0XHRcdFx0QmluZCBFdmVudCBMaXN0ZW5lcnNcbiAgIFx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHQvLyBCaW5kIGtleWJvYXJkIGhhbmRsZXJzXG5cdFx0XHR0aGlzLmhhbmRsZTFLZXlkb3duID0gdGhpcy5fa2V5ZG93bi5iaW5kKHRoaXMsIDApO1xuXHRcdFx0dGhpcy5oYW5kbGUxLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlMUtleWRvd24sIGZhbHNlKTtcblxuXHRcdFx0dGhpcy5oYW5kbGUyS2V5ZG93biA9IHRoaXMuX2tleWRvd24uYmluZCh0aGlzLCAxKTtcblx0XHRcdHRoaXMuaGFuZGxlMi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZTJLZXlkb3duLCBmYWxzZSk7XG5cblx0XHRcdHRoaXMubW91c2Vkb3duID0gdGhpcy5fbW91c2Vkb3duLmJpbmQodGhpcyk7XG5cdFx0XHR0aGlzLnRvdWNoc3RhcnQgPSB0aGlzLl90b3VjaHN0YXJ0LmJpbmQodGhpcyk7XG5cdFx0XHR0aGlzLnRvdWNobW92ZSA9IHRoaXMuX3RvdWNobW92ZS5iaW5kKHRoaXMpO1xuXG5cdFx0XHRpZiAodGhpcy50b3VjaENhcGFibGUpIHtcblx0XHRcdFx0Ly8gVGVzdCBmb3IgcGFzc2l2ZSBldmVudCBzdXBwb3J0XG5cdFx0XHRcdHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG5cdFx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0XHRcdFx0XHRcdFx0c3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIiwgbnVsbCwgb3B0cyk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHRcdC8vIFVzZSBvdXIgZGV0ZWN0J3MgcmVzdWx0cy4gcGFzc2l2ZSBhcHBsaWVkIGlmIHN1cHBvcnRlZCwgY2FwdHVyZSB3aWxsIGJlIGZhbHNlIGVpdGhlciB3YXkuXG5cdFx0XHRcdHZhciBldmVudE9wdGlvbnMgPSBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlO1xuXHRcdFx0XHQvLyBCaW5kIHRvdWNoIGhhbmRsZXJzXG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLnRvdWNoc3RhcnQsIGV2ZW50T3B0aW9ucyk7XG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMudG91Y2htb3ZlLCBldmVudE9wdGlvbnMpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zbGlkZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5tb3VzZWRvd24sIGZhbHNlKTtcblxuXHRcdFx0Ly8gQmluZCB3aW5kb3cgaGFuZGxlcnNcblx0XHRcdHRoaXMucmVzaXplID0gdGhpcy5fcmVzaXplLmJpbmQodGhpcyk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZSwgZmFsc2UpO1xuXG5cdFx0XHQvLyBCaW5kIHRvb2x0aXAtcmVsYXRlZCBoYW5kbGVyc1xuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy50b29sdGlwID09PSAnaGlkZScpIHtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50b29sdGlwLCAnaGlkZScpO1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRvb2x0aXBfbWluLCAnaGlkZScpO1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRvb2x0aXBfbWF4LCAnaGlkZScpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcCA9PT0gJ2Fsd2F5cycpIHtcblx0XHRcdFx0dGhpcy5fc2hvd1Rvb2x0aXAoKTtcblx0XHRcdFx0dGhpcy5fYWx3YXlzU2hvd1Rvb2x0aXAgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zaG93VG9vbHRpcCA9IHRoaXMuX3Nob3dUb29sdGlwLmJpbmQodGhpcyk7XG5cdFx0XHRcdHRoaXMuaGlkZVRvb2x0aXAgPSB0aGlzLl9oaWRlVG9vbHRpcC5iaW5kKHRoaXMpO1xuXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMudGlja3NfdG9vbHRpcCkge1xuXHRcdFx0XHRcdHZhciBjYWxsYmFja0hhbmRsZSA9IHRoaXMuX2FkZFRpY2tMaXN0ZW5lcigpO1xuXHRcdFx0XHRcdC8vY3JlYXRlIGhhbmRsZTEgbGlzdGVuZXJzIGFuZCBzdG9yZSByZWZlcmVuY2VzIGluIG1hcFxuXHRcdFx0XHRcdHZhciBtb3VzZUVudGVyID0gY2FsbGJhY2tIYW5kbGUuYWRkTW91c2VFbnRlcih0aGlzLCB0aGlzLmhhbmRsZTEpO1xuXHRcdFx0XHRcdHZhciBtb3VzZUxlYXZlID0gY2FsbGJhY2tIYW5kbGUuYWRkTW91c2VMZWF2ZSh0aGlzLCB0aGlzLmhhbmRsZTEpO1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlQ2FsbGJhY2tNYXAuaGFuZGxlMSA9IHtcblx0XHRcdFx0XHRcdG1vdXNlRW50ZXI6IG1vdXNlRW50ZXIsXG5cdFx0XHRcdFx0XHRtb3VzZUxlYXZlOiBtb3VzZUxlYXZlXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHQvL2NyZWF0ZSBoYW5kbGUyIGxpc3RlbmVycyBhbmQgc3RvcmUgcmVmZXJlbmNlcyBpbiBtYXBcblx0XHRcdFx0XHRtb3VzZUVudGVyID0gY2FsbGJhY2tIYW5kbGUuYWRkTW91c2VFbnRlcih0aGlzLCB0aGlzLmhhbmRsZTIpO1xuXHRcdFx0XHRcdG1vdXNlTGVhdmUgPSBjYWxsYmFja0hhbmRsZS5hZGRNb3VzZUxlYXZlKHRoaXMsIHRoaXMuaGFuZGxlMik7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGVDYWxsYmFja01hcC5oYW5kbGUyID0ge1xuXHRcdFx0XHRcdFx0bW91c2VFbnRlcjogbW91c2VFbnRlcixcblx0XHRcdFx0XHRcdG1vdXNlTGVhdmU6IG1vdXNlTGVhdmVcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLnNob3dUb29sdGlwLCBmYWxzZSk7XG5cdFx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMuaGlkZVRvb2x0aXAsIGZhbHNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuaGFuZGxlMS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgdGhpcy5zaG93VG9vbHRpcCwgZmFsc2UpO1xuXHRcdFx0XHR0aGlzLmhhbmRsZTEuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy5oaWRlVG9vbHRpcCwgZmFsc2UpO1xuXG5cdFx0XHRcdHRoaXMuaGFuZGxlMi5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgdGhpcy5zaG93VG9vbHRpcCwgZmFsc2UpO1xuXHRcdFx0XHR0aGlzLmhhbmRsZTIuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy5oaWRlVG9vbHRpcCwgZmFsc2UpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmVuYWJsZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZGlzYWJsZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIFx0XHRcdFx0SU5TVEFOQ0UgUFJPUEVSVElFUy9NRVRIT0RTXG4gIFx0LSBBbnkgbWV0aG9kcyBib3VuZCB0byB0aGUgcHJvdG90eXBlIGFyZSBjb25zaWRlcmVkXG4gIHBhcnQgb2YgdGhlIHBsdWdpbidzIGBwdWJsaWNgIGludGVyZmFjZVxuICBcdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXHRcdFNsaWRlci5wcm90b3R5cGUgPSB7XG5cdFx0XHRfaW5pdDogZnVuY3Rpb24gX2luaXQoKSB7fSwgLy8gTk9URTogTXVzdCBleGlzdCB0byBzdXBwb3J0IGJyaWRnZXRcblxuXHRcdFx0Y29uc3RydWN0b3I6IFNsaWRlcixcblxuXHRcdFx0ZGVmYXVsdE9wdGlvbnM6IHtcblx0XHRcdFx0aWQ6IFwiXCIsXG5cdFx0XHRcdG1pbjogMCxcblx0XHRcdFx0bWF4OiAxMCxcblx0XHRcdFx0c3RlcDogMSxcblx0XHRcdFx0cHJlY2lzaW9uOiAwLFxuXHRcdFx0XHRvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxuXHRcdFx0XHR2YWx1ZTogNSxcblx0XHRcdFx0cmFuZ2U6IGZhbHNlLFxuXHRcdFx0XHRzZWxlY3Rpb246ICdiZWZvcmUnLFxuXHRcdFx0XHR0b29sdGlwOiAnc2hvdycsXG5cdFx0XHRcdHRvb2x0aXBfc3BsaXQ6IGZhbHNlLFxuXHRcdFx0XHRoYW5kbGU6ICdyb3VuZCcsXG5cdFx0XHRcdHJldmVyc2VkOiBmYWxzZSxcblx0XHRcdFx0cnRsOiAnYXV0bycsXG5cdFx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRcdGZvcm1hdHRlcjogZnVuY3Rpb24gZm9ybWF0dGVyKHZhbCkge1xuXHRcdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWxbMF0gKyBcIiA6IFwiICsgdmFsWzFdO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0bmF0dXJhbF9hcnJvd19rZXlzOiBmYWxzZSxcblx0XHRcdFx0dGlja3M6IFtdLFxuXHRcdFx0XHR0aWNrc19wb3NpdGlvbnM6IFtdLFxuXHRcdFx0XHR0aWNrc19sYWJlbHM6IFtdLFxuXHRcdFx0XHR0aWNrc19zbmFwX2JvdW5kczogMCxcblx0XHRcdFx0dGlja3NfdG9vbHRpcDogZmFsc2UsXG5cdFx0XHRcdHNjYWxlOiAnbGluZWFyJyxcblx0XHRcdFx0Zm9jdXM6IGZhbHNlLFxuXHRcdFx0XHR0b29sdGlwX3Bvc2l0aW9uOiBudWxsLFxuXHRcdFx0XHRsYWJlbGxlZGJ5OiBudWxsLFxuXHRcdFx0XHRyYW5nZUhpZ2hsaWdodHM6IFtdXG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRFbGVtZW50OiBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zbGlkZXJFbGVtO1xuXHRcdFx0fSxcblxuXHRcdFx0Z2V0VmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJhbmdlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX3N0YXRlLnZhbHVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9zdGF0ZS52YWx1ZVswXTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0c2V0VmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKHZhbCwgdHJpZ2dlclNsaWRlRXZlbnQsIHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuXHRcdFx0XHRpZiAoIXZhbCkge1xuXHRcdFx0XHRcdHZhbCA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIG9sZFZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXHRcdFx0XHR0aGlzLl9zdGF0ZS52YWx1ZSA9IHRoaXMuX3ZhbGlkYXRlSW5wdXRWYWx1ZSh2YWwpO1xuXHRcdFx0XHR2YXIgYXBwbHlQcmVjaXNpb24gPSB0aGlzLl9hcHBseVByZWNpc2lvbi5iaW5kKHRoaXMpO1xuXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucmFuZ2UpIHtcblx0XHRcdFx0XHR0aGlzLl9zdGF0ZS52YWx1ZVswXSA9IGFwcGx5UHJlY2lzaW9uKHRoaXMuX3N0YXRlLnZhbHVlWzBdKTtcblx0XHRcdFx0XHR0aGlzLl9zdGF0ZS52YWx1ZVsxXSA9IGFwcGx5UHJlY2lzaW9uKHRoaXMuX3N0YXRlLnZhbHVlWzFdKTtcblxuXHRcdFx0XHRcdHRoaXMuX3N0YXRlLnZhbHVlWzBdID0gTWF0aC5tYXgodGhpcy5vcHRpb25zLm1pbiwgTWF0aC5taW4odGhpcy5vcHRpb25zLm1heCwgdGhpcy5fc3RhdGUudmFsdWVbMF0pKTtcblx0XHRcdFx0XHR0aGlzLl9zdGF0ZS52YWx1ZVsxXSA9IE1hdGgubWF4KHRoaXMub3B0aW9ucy5taW4sIE1hdGgubWluKHRoaXMub3B0aW9ucy5tYXgsIHRoaXMuX3N0YXRlLnZhbHVlWzFdKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fc3RhdGUudmFsdWUgPSBhcHBseVByZWNpc2lvbih0aGlzLl9zdGF0ZS52YWx1ZSk7XG5cdFx0XHRcdFx0dGhpcy5fc3RhdGUudmFsdWUgPSBbTWF0aC5tYXgodGhpcy5vcHRpb25zLm1pbiwgTWF0aC5taW4odGhpcy5vcHRpb25zLm1heCwgdGhpcy5fc3RhdGUudmFsdWUpKV07XG5cdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy5oYW5kbGUyLCAnaGlkZScpO1xuXHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0aW9uID09PSAnYWZ0ZXInKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGF0ZS52YWx1ZVsxXSA9IHRoaXMub3B0aW9ucy5tYXg7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXRlLnZhbHVlWzFdID0gdGhpcy5vcHRpb25zLm1pbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLm1heCA+IHRoaXMub3B0aW9ucy5taW4pIHtcblx0XHRcdFx0XHR0aGlzLl9zdGF0ZS5wZXJjZW50YWdlID0gW3RoaXMuX3RvUGVyY2VudGFnZSh0aGlzLl9zdGF0ZS52YWx1ZVswXSksIHRoaXMuX3RvUGVyY2VudGFnZSh0aGlzLl9zdGF0ZS52YWx1ZVsxXSksIHRoaXMub3B0aW9ucy5zdGVwICogMTAwIC8gKHRoaXMub3B0aW9ucy5tYXggLSB0aGlzLm9wdGlvbnMubWluKV07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fc3RhdGUucGVyY2VudGFnZSA9IFswLCAwLCAxMDBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fbGF5b3V0KCk7XG5cdFx0XHRcdHZhciBuZXdWYWx1ZSA9IHRoaXMub3B0aW9ucy5yYW5nZSA/IHRoaXMuX3N0YXRlLnZhbHVlIDogdGhpcy5fc3RhdGUudmFsdWVbMF07XG5cblx0XHRcdFx0dGhpcy5fc2V0RGF0YVZhbChuZXdWYWx1ZSk7XG5cdFx0XHRcdGlmICh0cmlnZ2VyU2xpZGVFdmVudCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ3NsaWRlJywgbmV3VmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUgJiYgdHJpZ2dlckNoYW5nZUV2ZW50ID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlJywge1xuXHRcdFx0XHRcdFx0b2xkVmFsdWU6IG9sZFZhbHVlLFxuXHRcdFx0XHRcdFx0bmV3VmFsdWU6IG5ld1ZhbHVlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0XHRcdC8vIFJlbW92ZSBldmVudCBoYW5kbGVycyBvbiBzbGlkZXIgZWxlbWVudHNcblx0XHRcdFx0dGhpcy5fcmVtb3ZlU2xpZGVyRXZlbnRIYW5kbGVycygpO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSB0aGUgc2xpZGVyIGZyb20gdGhlIERPTVxuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNsaWRlckVsZW0pO1xuXHRcdFx0XHQvKiBTaG93IG9yaWdpbmFsIDxpbnB1dD4gZWxlbWVudCAqL1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cblx0XHRcdFx0Ly8gQ2xlYXIgb3V0IGN1c3RvbSBldmVudCBiaW5kaW5nc1xuXHRcdFx0XHR0aGlzLl9jbGVhblVwRXZlbnRDYWxsYmFja3NNYXAoKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgZGF0YSB2YWx1ZXNcblx0XHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGFcIik7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIEpRdWVyeSBoYW5kbGVycy9kYXRhXG5cdFx0XHRcdGlmICgkKSB7XG5cdFx0XHRcdFx0dGhpcy5fdW5iaW5kSlF1ZXJ5RXZlbnRIYW5kbGVycygpO1xuXHRcdFx0XHRcdHRoaXMuJGVsZW1lbnQucmVtb3ZlRGF0YSgnc2xpZGVyJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGRpc2FibGU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0XHRcdHRoaXMuX3N0YXRlLmVuYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5oYW5kbGUxLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuXHRcdFx0XHR0aGlzLmhhbmRsZTIucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMuc2xpZGVyRWxlbSwgJ3NsaWRlci1kaXNhYmxlZCcpO1xuXHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdzbGlkZURpc2FibGVkJyk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRlbmFibGU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcblx0XHRcdFx0dGhpcy5fc3RhdGUuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdHRoaXMuaGFuZGxlMS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKTtcblx0XHRcdFx0dGhpcy5oYW5kbGUyLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnNsaWRlckVsZW0sICdzbGlkZXItZGlzYWJsZWQnKTtcblx0XHRcdFx0dGhpcy5fdHJpZ2dlcignc2xpZGVFbmFibGVkJyk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHR0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcblx0XHRcdFx0aWYgKHRoaXMuX3N0YXRlLmVuYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLmRpc2FibGUoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmVuYWJsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0aXNFbmFibGVkOiBmdW5jdGlvbiBpc0VuYWJsZWQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9zdGF0ZS5lbmFibGVkO1xuXHRcdFx0fSxcblxuXHRcdFx0b246IGZ1bmN0aW9uIG9uKGV2dCwgY2FsbGJhY2spIHtcblx0XHRcdFx0dGhpcy5fYmluZE5vblF1ZXJ5RXZlbnRIYW5kbGVyKGV2dCwgY2FsbGJhY2spO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdG9mZjogZnVuY3Rpb24gb2ZmKGV2dCwgY2FsbGJhY2spIHtcblx0XHRcdFx0aWYgKCQpIHtcblx0XHRcdFx0XHR0aGlzLiRlbGVtZW50Lm9mZihldnQsIGNhbGxiYWNrKTtcblx0XHRcdFx0XHR0aGlzLiRzbGlkZXJFbGVtLm9mZihldnQsIGNhbGxiYWNrKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl91bmJpbmROb25RdWVyeUV2ZW50SGFuZGxlcihldnQsIGNhbGxiYWNrKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0QXR0cmlidXRlOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSB7XG5cdFx0XHRcdGlmIChhdHRyaWJ1dGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25zW2F0dHJpYnV0ZV07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMub3B0aW9ucztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0c2V0QXR0cmlidXRlOiBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLm9wdGlvbnNbYXR0cmlidXRlXSA9IHZhbHVlO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdHJlZnJlc2g6IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZVNsaWRlckV2ZW50SGFuZGxlcnMoKTtcblx0XHRcdFx0Y3JlYXRlTmV3U2xpZGVyLmNhbGwodGhpcywgdGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuXHRcdFx0XHRpZiAoJCkge1xuXHRcdFx0XHRcdC8vIEJpbmQgbmV3IGluc3RhbmNlIG9mIHNsaWRlciB0byB0aGUgZWxlbWVudFxuXHRcdFx0XHRcdCQuZGF0YSh0aGlzLmVsZW1lbnQsICdzbGlkZXInLCB0aGlzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdHJlbGF5b3V0OiBmdW5jdGlvbiByZWxheW91dCgpIHtcblx0XHRcdFx0dGhpcy5fcmVzaXplKCk7XG5cdFx0XHRcdHRoaXMuX2xheW91dCgpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiorXG4gICBcdFx0XHRcdEhFTFBFUlNcbiAgIFx0LSBBbnkgbWV0aG9kIHRoYXQgaXMgbm90IHBhcnQgb2YgdGhlIHB1YmxpYyBpbnRlcmZhY2UuXG4gICAtIFBsYWNlIGl0IHVuZGVybmVhdGggdGhpcyBjb21tZW50IGJsb2NrIGFuZCB3cml0ZSBpdHMgc2lnbmF0dXJlIGxpa2Ugc286XG4gICBcdFx0X2ZuTmFtZSA6IGZ1bmN0aW9uKCkgey4uLn1cbiAgIFx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cdFx0XHRfcmVtb3ZlU2xpZGVyRXZlbnRIYW5kbGVyczogZnVuY3Rpb24gX3JlbW92ZVNsaWRlckV2ZW50SGFuZGxlcnMoKSB7XG5cdFx0XHRcdC8vIFJlbW92ZSBrZXlkb3duIGV2ZW50IGxpc3RlbmVyc1xuXHRcdFx0XHR0aGlzLmhhbmRsZTEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGUxS2V5ZG93biwgZmFsc2UpO1xuXHRcdFx0XHR0aGlzLmhhbmRsZTIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGUyS2V5ZG93biwgZmFsc2UpO1xuXG5cdFx0XHRcdC8vcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgZnJvbSB0aGUgdGlja3MgYW5kIGhhbmRsZXMgaWYgdGhleSBoYWQgdGhlaXIgb3duIGxpc3RlbmVyc1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnRpY2tzX3Rvb2x0aXApIHtcblx0XHRcdFx0XHR2YXIgdGlja3MgPSB0aGlzLnRpY2tzQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlci10aWNrJyk7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dGlja3NbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMudGlja3NDYWxsYmFja01hcFtpXS5tb3VzZUVudGVyLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHR0aWNrc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy50aWNrc0NhbGxiYWNrTWFwW2ldLm1vdXNlTGVhdmUsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGUxLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZUNhbGxiYWNrTWFwLmhhbmRsZTEubW91c2VFbnRlciwgZmFsc2UpO1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlMi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oYW5kbGVDYWxsYmFja01hcC5oYW5kbGUyLm1vdXNlRW50ZXIsIGZhbHNlKTtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZTEucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuaGFuZGxlQ2FsbGJhY2tNYXAuaGFuZGxlMS5tb3VzZUxlYXZlLCBmYWxzZSk7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGUyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZUNhbGxiYWNrTWFwLmhhbmRsZTIubW91c2VMZWF2ZSwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5oYW5kbGVDYWxsYmFja01hcCA9IG51bGw7XG5cdFx0XHRcdHRoaXMudGlja3NDYWxsYmFja01hcCA9IG51bGw7XG5cblx0XHRcdFx0aWYgKHRoaXMuc2hvd1Rvb2x0aXApIHtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZTEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMuc2hvd1Rvb2x0aXAsIGZhbHNlKTtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZTIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMuc2hvd1Rvb2x0aXAsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5oaWRlVG9vbHRpcCkge1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlMS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCB0aGlzLmhpZGVUb29sdGlwLCBmYWxzZSk7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGUyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuaGlkZVRvb2x0aXAsIGZhbHNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgZnJvbSBzbGlkZXJFbGVtXG5cdFx0XHRcdGlmICh0aGlzLnNob3dUb29sdGlwKSB7XG5cdFx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMuc2hvd1Rvb2x0aXAsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5oaWRlVG9vbHRpcCkge1xuXHRcdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLmhpZGVUb29sdGlwLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMudG91Y2hzdGFydCwgZmFsc2UpO1xuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLnRvdWNobW92ZSwgZmFsc2UpO1xuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLm1vdXNlZG93biwgZmFsc2UpO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSB3aW5kb3cgZXZlbnQgbGlzdGVuZXJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemUsIGZhbHNlKTtcblx0XHRcdH0sXG5cdFx0XHRfYmluZE5vblF1ZXJ5RXZlbnRIYW5kbGVyOiBmdW5jdGlvbiBfYmluZE5vblF1ZXJ5RXZlbnRIYW5kbGVyKGV2dCwgY2FsbGJhY2spIHtcblx0XHRcdFx0aWYgKHRoaXMuZXZlbnRUb0NhbGxiYWNrTWFwW2V2dF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMuZXZlbnRUb0NhbGxiYWNrTWFwW2V2dF0gPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmV2ZW50VG9DYWxsYmFja01hcFtldnRdLnB1c2goY2FsbGJhY2spO1xuXHRcdFx0fSxcblx0XHRcdF91bmJpbmROb25RdWVyeUV2ZW50SGFuZGxlcjogZnVuY3Rpb24gX3VuYmluZE5vblF1ZXJ5RXZlbnRIYW5kbGVyKGV2dCwgY2FsbGJhY2spIHtcblx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IHRoaXMuZXZlbnRUb0NhbGxiYWNrTWFwW2V2dF07XG5cdFx0XHRcdGlmIChjYWxsYmFja3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzW2ldID09PSBjYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfY2xlYW5VcEV2ZW50Q2FsbGJhY2tzTWFwOiBmdW5jdGlvbiBfY2xlYW5VcEV2ZW50Q2FsbGJhY2tzTWFwKCkge1xuXHRcdFx0XHR2YXIgZXZlbnROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuZXZlbnRUb0NhbGxiYWNrTWFwKTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBldmVudE5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGV2ZW50TmFtZSA9IGV2ZW50TmFtZXNbaV07XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZXZlbnRUb0NhbGxiYWNrTWFwW2V2ZW50TmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfc2hvd1Rvb2x0aXA6IGZ1bmN0aW9uIF9zaG93VG9vbHRpcCgpIHtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy50b29sdGlwX3NwbGl0ID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudG9vbHRpcCwgJ2luJyk7XG5cdFx0XHRcdFx0dGhpcy50b29sdGlwX21pbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdHRoaXMudG9vbHRpcF9tYXguc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRvb2x0aXBfbWluLCAnaW4nKTtcblx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRvb2x0aXBfbWF4LCAnaW4nKTtcblx0XHRcdFx0XHR0aGlzLnRvb2x0aXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9zdGF0ZS5vdmVyID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRfaGlkZVRvb2x0aXA6IGZ1bmN0aW9uIF9oaWRlVG9vbHRpcCgpIHtcblx0XHRcdFx0aWYgKHRoaXMuX3N0YXRlLmluRHJhZyA9PT0gZmFsc2UgJiYgdGhpcy5hbHdheXNTaG93VG9vbHRpcCAhPT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudG9vbHRpcCwgJ2luJyk7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50b29sdGlwX21pbiwgJ2luJyk7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50b29sdGlwX21heCwgJ2luJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fc3RhdGUub3ZlciA9IGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdF9zZXRUb29sVGlwT25Nb3VzZU92ZXI6IGZ1bmN0aW9uIF9zZXRUb29sVGlwT25Nb3VzZU92ZXIodGVtcFN0YXRlKSB7XG5cdFx0XHRcdHZhciBmb3JtYXR0ZWRUb29sdGlwVmFsID0gdGhpcy5vcHRpb25zLmZvcm1hdHRlcighdGVtcFN0YXRlID8gdGhpcy5fc3RhdGUudmFsdWVbMF0gOiB0ZW1wU3RhdGUudmFsdWVbMF0pO1xuXHRcdFx0XHR2YXIgcG9zaXRpb25QZXJjZW50YWdlcyA9ICF0ZW1wU3RhdGUgPyBnZXRQb3NpdGlvblBlcmNlbnRhZ2VzKHRoaXMuX3N0YXRlLCB0aGlzLm9wdGlvbnMucmV2ZXJzZWQpIDogZ2V0UG9zaXRpb25QZXJjZW50YWdlcyh0ZW1wU3RhdGUsIHRoaXMub3B0aW9ucy5yZXZlcnNlZCk7XG5cdFx0XHRcdHRoaXMuX3NldFRleHQodGhpcy50b29sdGlwSW5uZXIsIGZvcm1hdHRlZFRvb2x0aXBWYWwpO1xuXG5cdFx0XHRcdHRoaXMudG9vbHRpcC5zdHlsZVt0aGlzLnN0eWxlUG9zXSA9IHBvc2l0aW9uUGVyY2VudGFnZXNbMF0gKyBcIiVcIjtcblxuXHRcdFx0XHRmdW5jdGlvbiBnZXRQb3NpdGlvblBlcmNlbnRhZ2VzKHN0YXRlLCByZXZlcnNlZCkge1xuXHRcdFx0XHRcdGlmIChyZXZlcnNlZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFsxMDAgLSBzdGF0ZS5wZXJjZW50YWdlWzBdLCB0aGlzLm9wdGlvbnMucmFuZ2UgPyAxMDAgLSBzdGF0ZS5wZXJjZW50YWdlWzFdIDogc3RhdGUucGVyY2VudGFnZVsxXV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBbc3RhdGUucGVyY2VudGFnZVswXSwgc3RhdGUucGVyY2VudGFnZVsxXV07XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfYWRkVGlja0xpc3RlbmVyOiBmdW5jdGlvbiBfYWRkVGlja0xpc3RlbmVyKCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGFkZE1vdXNlRW50ZXI6IGZ1bmN0aW9uIGFkZE1vdXNlRW50ZXIocmVmZXJlbmNlLCB0aWNrLCBpbmRleCkge1xuXHRcdFx0XHRcdFx0dmFyIGVudGVyID0gZnVuY3Rpb24gZW50ZXIoKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0ZW1wU3RhdGUgPSByZWZlcmVuY2UuX3N0YXRlO1xuXHRcdFx0XHRcdFx0XHR2YXIgaWRTdHJpbmcgPSBpbmRleCA+PSAwID8gaW5kZXggOiB0aGlzLmF0dHJpYnV0ZXNbJ2FyaWEtdmFsdWVub3cnXS52YWx1ZTtcblx0XHRcdFx0XHRcdFx0dmFyIGhvdmVySW5kZXggPSBwYXJzZUludChpZFN0cmluZywgMTApO1xuXHRcdFx0XHRcdFx0XHR0ZW1wU3RhdGUudmFsdWVbMF0gPSBob3ZlckluZGV4O1xuXHRcdFx0XHRcdFx0XHR0ZW1wU3RhdGUucGVyY2VudGFnZVswXSA9IHJlZmVyZW5jZS5vcHRpb25zLnRpY2tzX3Bvc2l0aW9uc1tob3ZlckluZGV4XTtcblx0XHRcdFx0XHRcdFx0cmVmZXJlbmNlLl9zZXRUb29sVGlwT25Nb3VzZU92ZXIodGVtcFN0YXRlKTtcblx0XHRcdFx0XHRcdFx0cmVmZXJlbmNlLl9zaG93VG9vbHRpcCgpO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHRpY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZW50ZXIsIGZhbHNlKTtcblx0XHRcdFx0XHRcdHJldHVybiBlbnRlcjtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGFkZE1vdXNlTGVhdmU6IGZ1bmN0aW9uIGFkZE1vdXNlTGVhdmUocmVmZXJlbmNlLCB0aWNrKSB7XG5cdFx0XHRcdFx0XHR2YXIgbGVhdmUgPSBmdW5jdGlvbiBsZWF2ZSgpIHtcblx0XHRcdFx0XHRcdFx0cmVmZXJlbmNlLl9oaWRlVG9vbHRpcCgpO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHRpY2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbGVhdmUsIGZhbHNlKTtcblx0XHRcdFx0XHRcdHJldHVybiBsZWF2ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9LFxuXHRcdFx0X2xheW91dDogZnVuY3Rpb24gX2xheW91dCgpIHtcblx0XHRcdFx0dmFyIHBvc2l0aW9uUGVyY2VudGFnZXM7XG5cblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5yZXZlcnNlZCkge1xuXHRcdFx0XHRcdHBvc2l0aW9uUGVyY2VudGFnZXMgPSBbMTAwIC0gdGhpcy5fc3RhdGUucGVyY2VudGFnZVswXSwgdGhpcy5vcHRpb25zLnJhbmdlID8gMTAwIC0gdGhpcy5fc3RhdGUucGVyY2VudGFnZVsxXSA6IHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMV1dO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBvc2l0aW9uUGVyY2VudGFnZXMgPSBbdGhpcy5fc3RhdGUucGVyY2VudGFnZVswXSwgdGhpcy5fc3RhdGUucGVyY2VudGFnZVsxXV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmhhbmRsZTEuc3R5bGVbdGhpcy5zdHlsZVBvc10gPSBwb3NpdGlvblBlcmNlbnRhZ2VzWzBdICsgXCIlXCI7XG5cdFx0XHRcdHRoaXMuaGFuZGxlMS5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnLCB0aGlzLl9zdGF0ZS52YWx1ZVswXSk7XG5cdFx0XHRcdGlmIChpc05hTih0aGlzLm9wdGlvbnMuZm9ybWF0dGVyKHRoaXMuX3N0YXRlLnZhbHVlWzBdKSkpIHtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZTEuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVldGV4dCcsIHRoaXMub3B0aW9ucy5mb3JtYXR0ZXIodGhpcy5fc3RhdGUudmFsdWVbMF0pKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuaGFuZGxlMi5zdHlsZVt0aGlzLnN0eWxlUG9zXSA9IHBvc2l0aW9uUGVyY2VudGFnZXNbMV0gKyBcIiVcIjtcblx0XHRcdFx0dGhpcy5oYW5kbGUyLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycsIHRoaXMuX3N0YXRlLnZhbHVlWzFdKTtcblx0XHRcdFx0aWYgKGlzTmFOKHRoaXMub3B0aW9ucy5mb3JtYXR0ZXIodGhpcy5fc3RhdGUudmFsdWVbMV0pKSkge1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlMi5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWV0ZXh0JywgdGhpcy5vcHRpb25zLmZvcm1hdHRlcih0aGlzLl9zdGF0ZS52YWx1ZVsxXSkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyogUG9zaXRpb24gaGlnaGxpZ2h0IHJhbmdlIGVsZW1lbnRzICovXG5cdFx0XHRcdGlmICh0aGlzLnJhbmdlSGlnaGxpZ2h0RWxlbWVudHMubGVuZ3RoID4gMCAmJiBBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucy5yYW5nZUhpZ2hsaWdodHMpICYmIHRoaXMub3B0aW9ucy5yYW5nZUhpZ2hsaWdodHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLm9wdGlvbnMucmFuZ2VIaWdobGlnaHRzLmxlbmd0aDsgX2krKykge1xuXHRcdFx0XHRcdFx0dmFyIHN0YXJ0UGVyY2VudCA9IHRoaXMuX3RvUGVyY2VudGFnZSh0aGlzLm9wdGlvbnMucmFuZ2VIaWdobGlnaHRzW19pXS5zdGFydCk7XG5cdFx0XHRcdFx0XHR2YXIgZW5kUGVyY2VudCA9IHRoaXMuX3RvUGVyY2VudGFnZSh0aGlzLm9wdGlvbnMucmFuZ2VIaWdobGlnaHRzW19pXS5lbmQpO1xuXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJldmVyc2VkKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBzcCA9IDEwMCAtIGVuZFBlcmNlbnQ7XG5cdFx0XHRcdFx0XHRcdGVuZFBlcmNlbnQgPSAxMDAgLSBzdGFydFBlcmNlbnQ7XG5cdFx0XHRcdFx0XHRcdHN0YXJ0UGVyY2VudCA9IHNwO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2YXIgY3VycmVudFJhbmdlID0gdGhpcy5fY3JlYXRlSGlnaGxpZ2h0UmFuZ2Uoc3RhcnRQZXJjZW50LCBlbmRQZXJjZW50KTtcblxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnRSYW5nZSkge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yYW5nZUhpZ2hsaWdodEVsZW1lbnRzW19pXS5zdHlsZS50b3AgPSBjdXJyZW50UmFuZ2Uuc3RhcnQgKyBcIiVcIjtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJhbmdlSGlnaGxpZ2h0RWxlbWVudHNbX2ldLnN0eWxlLmhlaWdodCA9IGN1cnJlbnRSYW5nZS5zaXplICsgXCIlXCI7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5ydGwpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucmFuZ2VIaWdobGlnaHRFbGVtZW50c1tfaV0uc3R5bGUucmlnaHQgPSBjdXJyZW50UmFuZ2Uuc3RhcnQgKyBcIiVcIjtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5yYW5nZUhpZ2hsaWdodEVsZW1lbnRzW19pXS5zdHlsZS5sZWZ0ID0gY3VycmVudFJhbmdlLnN0YXJ0ICsgXCIlXCI7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmFuZ2VIaWdobGlnaHRFbGVtZW50c1tfaV0uc3R5bGUud2lkdGggPSBjdXJyZW50UmFuZ2Uuc2l6ZSArIFwiJVwiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnJhbmdlSGlnaGxpZ2h0RWxlbWVudHNbX2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKiBQb3NpdGlvbiB0aWNrcyBhbmQgbGFiZWxzICovXG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucy50aWNrcykgJiYgdGhpcy5vcHRpb25zLnRpY2tzLmxlbmd0aCA+IDApIHtcblxuXHRcdFx0XHRcdHZhciBzdHlsZVNpemUgPSB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cdFx0XHRcdFx0dmFyIHN0eWxlTWFyZ2luO1xuXHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcblx0XHRcdFx0XHRcdHN0eWxlTWFyZ2luID0gJ21hcmdpblRvcCc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucnRsKSB7XG5cdFx0XHRcdFx0XHRcdHN0eWxlTWFyZ2luID0gJ21hcmdpblJpZ2h0Jztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHN0eWxlTWFyZ2luID0gJ21hcmdpbkxlZnQnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgbGFiZWxTaXplID0gdGhpcy5fc3RhdGUuc2l6ZSAvICh0aGlzLm9wdGlvbnMudGlja3MubGVuZ3RoIC0gMSk7XG5cblx0XHRcdFx0XHRpZiAodGhpcy50aWNrTGFiZWxDb250YWluZXIpIHtcblx0XHRcdFx0XHRcdHZhciBleHRyYU1hcmdpbiA9IDA7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnRpY2tzX3Bvc2l0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiAhPT0gJ3ZlcnRpY2FsJykge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMudGlja0xhYmVsQ29udGFpbmVyLnN0eWxlW3N0eWxlTWFyZ2luXSA9IC1sYWJlbFNpemUgLyAyICsgXCJweFwiO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0ZXh0cmFNYXJnaW4gPSB0aGlzLnRpY2tMYWJlbENvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvKiBDaGlkcmVuIGFyZSBwb3NpdGlvbiBhYnNvbHV0ZSwgY2FsY3VsYXRlIGhlaWdodCBieSBmaW5kaW5nIHRoZSBtYXggb2Zmc2V0SGVpZ2h0IG9mIGEgY2hpbGQgKi9cblx0XHRcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRoaXMudGlja0xhYmVsQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy50aWNrTGFiZWxDb250YWluZXIuY2hpbGROb2Rlc1tpXS5vZmZzZXRIZWlnaHQgPiBleHRyYU1hcmdpbikge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXh0cmFNYXJnaW4gPSB0aGlzLnRpY2tMYWJlbENvbnRhaW5lci5jaGlsZE5vZGVzW2ldLm9mZnNldEhlaWdodDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uc3R5bGUubWFyZ2luQm90dG9tID0gZXh0cmFNYXJnaW4gKyBcInB4XCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLnRpY2tzLmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdFx0XHRcdHZhciBwZXJjZW50YWdlID0gdGhpcy5vcHRpb25zLnRpY2tzX3Bvc2l0aW9uc1tpXSB8fCB0aGlzLl90b1BlcmNlbnRhZ2UodGhpcy5vcHRpb25zLnRpY2tzW2ldKTtcblxuXHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5yZXZlcnNlZCkge1xuXHRcdFx0XHRcdFx0XHRwZXJjZW50YWdlID0gMTAwIC0gcGVyY2VudGFnZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy50aWNrc1tpXS5zdHlsZVt0aGlzLnN0eWxlUG9zXSA9IHBlcmNlbnRhZ2UgKyBcIiVcIjtcblxuXHRcdFx0XHRcdFx0LyogU2V0IGNsYXNzIGxhYmVscyB0byBkZW5vdGUgd2hldGhlciB0aWNrcyBhcmUgaW4gdGhlIHNlbGVjdGlvbiAqL1xuXHRcdFx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50aWNrc1tpXSwgJ2luLXNlbGVjdGlvbicpO1xuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMucmFuZ2UpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5zZWxlY3Rpb24gPT09ICdhZnRlcicgJiYgcGVyY2VudGFnZSA+PSBwb3NpdGlvblBlcmNlbnRhZ2VzWzBdKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50aWNrc1tpXSwgJ2luLXNlbGVjdGlvbicpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3Rpb24gPT09ICdiZWZvcmUnICYmIHBlcmNlbnRhZ2UgPD0gcG9zaXRpb25QZXJjZW50YWdlc1swXSkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudGlja3NbaV0sICdpbi1zZWxlY3Rpb24nKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChwZXJjZW50YWdlID49IHBvc2l0aW9uUGVyY2VudGFnZXNbMF0gJiYgcGVyY2VudGFnZSA8PSBwb3NpdGlvblBlcmNlbnRhZ2VzWzFdKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudGlja3NbaV0sICdpbi1zZWxlY3Rpb24nKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKHRoaXMudGlja0xhYmVsc1tpXSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRpY2tMYWJlbHNbaV0uc3R5bGVbc3R5bGVTaXplXSA9IGxhYmVsU2l6ZSArIFwicHhcIjtcblxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLm9yaWVudGF0aW9uICE9PSAndmVydGljYWwnICYmIHRoaXMub3B0aW9ucy50aWNrc19wb3NpdGlvbnNbaV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMudGlja0xhYmVsc1tpXS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy50aWNrTGFiZWxzW2ldLnN0eWxlW3RoaXMuc3R5bGVQb3NdID0gcGVyY2VudGFnZSArIFwiJVwiO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMudGlja0xhYmVsc1tpXS5zdHlsZVtzdHlsZU1hcmdpbl0gPSAtbGFiZWxTaXplIC8gMiArICdweCc7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5ydGwpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudGlja0xhYmVsc1tpXS5zdHlsZVsnbWFyZ2luUmlnaHQnXSA9IHRoaXMuc2xpZGVyRWxlbS5vZmZzZXRXaWR0aCArIFwicHhcIjtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50aWNrTGFiZWxzW2ldLnN0eWxlWydtYXJnaW5MZWZ0J10gPSB0aGlzLnNsaWRlckVsZW0ub2Zmc2V0V2lkdGggKyBcInB4XCI7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudGlja0xhYmVsQ29udGFpbmVyLnN0eWxlW3N0eWxlTWFyZ2luXSA9IHRoaXMuc2xpZGVyRWxlbS5vZmZzZXRXaWR0aCAvIDIgKiAtMSArICdweCc7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZm9ybWF0dGVkVG9vbHRpcFZhbDtcblxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJhbmdlKSB7XG5cdFx0XHRcdFx0Zm9ybWF0dGVkVG9vbHRpcFZhbCA9IHRoaXMub3B0aW9ucy5mb3JtYXR0ZXIodGhpcy5fc3RhdGUudmFsdWUpO1xuXHRcdFx0XHRcdHRoaXMuX3NldFRleHQodGhpcy50b29sdGlwSW5uZXIsIGZvcm1hdHRlZFRvb2x0aXBWYWwpO1xuXHRcdFx0XHRcdHRoaXMudG9vbHRpcC5zdHlsZVt0aGlzLnN0eWxlUG9zXSA9IChwb3NpdGlvblBlcmNlbnRhZ2VzWzFdICsgcG9zaXRpb25QZXJjZW50YWdlc1swXSkgLyAyICsgXCIlXCI7XG5cblx0XHRcdFx0XHR2YXIgaW5uZXJUb29sdGlwTWluVGV4dCA9IHRoaXMub3B0aW9ucy5mb3JtYXR0ZXIodGhpcy5fc3RhdGUudmFsdWVbMF0pO1xuXHRcdFx0XHRcdHRoaXMuX3NldFRleHQodGhpcy50b29sdGlwSW5uZXJfbWluLCBpbm5lclRvb2x0aXBNaW5UZXh0KTtcblxuXHRcdFx0XHRcdHZhciBpbm5lclRvb2x0aXBNYXhUZXh0ID0gdGhpcy5vcHRpb25zLmZvcm1hdHRlcih0aGlzLl9zdGF0ZS52YWx1ZVsxXSk7XG5cdFx0XHRcdFx0dGhpcy5fc2V0VGV4dCh0aGlzLnRvb2x0aXBJbm5lcl9tYXgsIGlubmVyVG9vbHRpcE1heFRleHQpO1xuXG5cdFx0XHRcdFx0dGhpcy50b29sdGlwX21pbi5zdHlsZVt0aGlzLnN0eWxlUG9zXSA9IHBvc2l0aW9uUGVyY2VudGFnZXNbMF0gKyBcIiVcIjtcblxuXHRcdFx0XHRcdHRoaXMudG9vbHRpcF9tYXguc3R5bGVbdGhpcy5zdHlsZVBvc10gPSBwb3NpdGlvblBlcmNlbnRhZ2VzWzFdICsgXCIlXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9ybWF0dGVkVG9vbHRpcFZhbCA9IHRoaXMub3B0aW9ucy5mb3JtYXR0ZXIodGhpcy5fc3RhdGUudmFsdWVbMF0pO1xuXHRcdFx0XHRcdHRoaXMuX3NldFRleHQodGhpcy50b29sdGlwSW5uZXIsIGZvcm1hdHRlZFRvb2x0aXBWYWwpO1xuXG5cdFx0XHRcdFx0dGhpcy50b29sdGlwLnN0eWxlW3RoaXMuc3R5bGVQb3NdID0gcG9zaXRpb25QZXJjZW50YWdlc1swXSArIFwiJVwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuXHRcdFx0XHRcdHRoaXMudHJhY2tMb3cuc3R5bGUudG9wID0gJzAnO1xuXHRcdFx0XHRcdHRoaXMudHJhY2tMb3cuc3R5bGUuaGVpZ2h0ID0gTWF0aC5taW4ocG9zaXRpb25QZXJjZW50YWdlc1swXSwgcG9zaXRpb25QZXJjZW50YWdlc1sxXSkgKyAnJSc7XG5cblx0XHRcdFx0XHR0aGlzLnRyYWNrU2VsZWN0aW9uLnN0eWxlLnRvcCA9IE1hdGgubWluKHBvc2l0aW9uUGVyY2VudGFnZXNbMF0sIHBvc2l0aW9uUGVyY2VudGFnZXNbMV0pICsgJyUnO1xuXHRcdFx0XHRcdHRoaXMudHJhY2tTZWxlY3Rpb24uc3R5bGUuaGVpZ2h0ID0gTWF0aC5hYnMocG9zaXRpb25QZXJjZW50YWdlc1swXSAtIHBvc2l0aW9uUGVyY2VudGFnZXNbMV0pICsgJyUnO1xuXG5cdFx0XHRcdFx0dGhpcy50cmFja0hpZ2guc3R5bGUuYm90dG9tID0gJzAnO1xuXHRcdFx0XHRcdHRoaXMudHJhY2tIaWdoLnN0eWxlLmhlaWdodCA9IDEwMCAtIE1hdGgubWluKHBvc2l0aW9uUGVyY2VudGFnZXNbMF0sIHBvc2l0aW9uUGVyY2VudGFnZXNbMV0pIC0gTWF0aC5hYnMocG9zaXRpb25QZXJjZW50YWdlc1swXSAtIHBvc2l0aW9uUGVyY2VudGFnZXNbMV0pICsgJyUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICh0aGlzLnN0eWxlUG9zID09PSAncmlnaHQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRyYWNrTG93LnN0eWxlLnJpZ2h0ID0gJzAnO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRyYWNrTG93LnN0eWxlLmxlZnQgPSAnMCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMudHJhY2tMb3cuc3R5bGUud2lkdGggPSBNYXRoLm1pbihwb3NpdGlvblBlcmNlbnRhZ2VzWzBdLCBwb3NpdGlvblBlcmNlbnRhZ2VzWzFdKSArICclJztcblxuXHRcdFx0XHRcdGlmICh0aGlzLnN0eWxlUG9zID09PSAncmlnaHQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRyYWNrU2VsZWN0aW9uLnN0eWxlLnJpZ2h0ID0gTWF0aC5taW4ocG9zaXRpb25QZXJjZW50YWdlc1swXSwgcG9zaXRpb25QZXJjZW50YWdlc1sxXSkgKyAnJSc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMudHJhY2tTZWxlY3Rpb24uc3R5bGUubGVmdCA9IE1hdGgubWluKHBvc2l0aW9uUGVyY2VudGFnZXNbMF0sIHBvc2l0aW9uUGVyY2VudGFnZXNbMV0pICsgJyUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnRyYWNrU2VsZWN0aW9uLnN0eWxlLndpZHRoID0gTWF0aC5hYnMocG9zaXRpb25QZXJjZW50YWdlc1swXSAtIHBvc2l0aW9uUGVyY2VudGFnZXNbMV0pICsgJyUnO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMuc3R5bGVQb3MgPT09ICdyaWdodCcpIHtcblx0XHRcdFx0XHRcdHRoaXMudHJhY2tIaWdoLnN0eWxlLmxlZnQgPSAnMCc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMudHJhY2tIaWdoLnN0eWxlLnJpZ2h0ID0gJzAnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnRyYWNrSGlnaC5zdHlsZS53aWR0aCA9IDEwMCAtIE1hdGgubWluKHBvc2l0aW9uUGVyY2VudGFnZXNbMF0sIHBvc2l0aW9uUGVyY2VudGFnZXNbMV0pIC0gTWF0aC5hYnMocG9zaXRpb25QZXJjZW50YWdlc1swXSAtIHBvc2l0aW9uUGVyY2VudGFnZXNbMV0pICsgJyUnO1xuXG5cdFx0XHRcdFx0dmFyIG9mZnNldF9taW4gPSB0aGlzLnRvb2x0aXBfbWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRcdHZhciBvZmZzZXRfbWF4ID0gdGhpcy50b29sdGlwX21heC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcF9wb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcblx0XHRcdFx0XHRcdGlmIChvZmZzZXRfbWluLnJpZ2h0ID4gb2Zmc2V0X21heC5sZWZ0KSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudG9vbHRpcF9tYXgsICdib3R0b20nKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50b29sdGlwX21heCwgJ3RvcCcpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXBfbWF4LnN0eWxlLnRvcCA9ICcnO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXBfbWF4LnN0eWxlLmJvdHRvbSA9IDIyICsgJ3B4Jztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudG9vbHRpcF9tYXgsICd0b3AnKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50b29sdGlwX21heCwgJ2JvdHRvbScpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXBfbWF4LnN0eWxlLnRvcCA9IHRoaXMudG9vbHRpcF9taW4uc3R5bGUudG9wO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRvb2x0aXBfbWF4LnN0eWxlLmJvdHRvbSA9ICcnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob2Zmc2V0X21pbi5yaWdodCA+IG9mZnNldF9tYXgubGVmdCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRvb2x0aXBfbWF4LCAndG9wJyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudG9vbHRpcF9tYXgsICdib3R0b20nKTtcblx0XHRcdFx0XHRcdFx0dGhpcy50b29sdGlwX21heC5zdHlsZS50b3AgPSAxOCArICdweCc7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRvb2x0aXBfbWF4LCAnYm90dG9tJyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudG9vbHRpcF9tYXgsICd0b3AnKTtcblx0XHRcdFx0XHRcdFx0dGhpcy50b29sdGlwX21heC5zdHlsZS50b3AgPSB0aGlzLnRvb2x0aXBfbWluLnN0eWxlLnRvcDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfY3JlYXRlSGlnaGxpZ2h0UmFuZ2U6IGZ1bmN0aW9uIF9jcmVhdGVIaWdobGlnaHRSYW5nZShzdGFydCwgZW5kKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9pc0hpZ2hsaWdodFJhbmdlKHN0YXJ0LCBlbmQpKSB7XG5cdFx0XHRcdFx0aWYgKHN0YXJ0ID4gZW5kKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4geyAnc3RhcnQnOiBlbmQsICdzaXplJzogc3RhcnQgLSBlbmQgfTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHsgJ3N0YXJ0Jzogc3RhcnQsICdzaXplJzogZW5kIC0gc3RhcnQgfTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0XHRfaXNIaWdobGlnaHRSYW5nZTogZnVuY3Rpb24gX2lzSGlnaGxpZ2h0UmFuZ2Uoc3RhcnQsIGVuZCkge1xuXHRcdFx0XHRpZiAoMCA8PSBzdGFydCAmJiBzdGFydCA8PSAxMDAgJiYgMCA8PSBlbmQgJiYgZW5kIDw9IDEwMCkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9yZXNpemU6IGZ1bmN0aW9uIF9yZXNpemUoZXYpIHtcblx0XHRcdFx0Lypqc2hpbnQgdW51c2VkOmZhbHNlKi9cblx0XHRcdFx0dGhpcy5fc3RhdGUub2Zmc2V0ID0gdGhpcy5fb2Zmc2V0KHRoaXMuc2xpZGVyRWxlbSk7XG5cdFx0XHRcdHRoaXMuX3N0YXRlLnNpemUgPSB0aGlzLnNsaWRlckVsZW1bdGhpcy5zaXplUG9zXTtcblx0XHRcdFx0dGhpcy5fbGF5b3V0KCk7XG5cdFx0XHR9LFxuXHRcdFx0X3JlbW92ZVByb3BlcnR5OiBmdW5jdGlvbiBfcmVtb3ZlUHJvcGVydHkoZWxlbWVudCwgcHJvcCkge1xuXHRcdFx0XHRpZiAoZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSkge1xuXHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfbW91c2Vkb3duOiBmdW5jdGlvbiBfbW91c2Vkb3duKGV2KSB7XG5cdFx0XHRcdGlmICghdGhpcy5fc3RhdGUuZW5hYmxlZCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX3N0YXRlLm9mZnNldCA9IHRoaXMuX29mZnNldCh0aGlzLnNsaWRlckVsZW0pO1xuXHRcdFx0XHR0aGlzLl9zdGF0ZS5zaXplID0gdGhpcy5zbGlkZXJFbGVtW3RoaXMuc2l6ZVBvc107XG5cblx0XHRcdFx0dmFyIHBlcmNlbnRhZ2UgPSB0aGlzLl9nZXRQZXJjZW50YWdlKGV2KTtcblxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJhbmdlKSB7XG5cdFx0XHRcdFx0dmFyIGRpZmYxID0gTWF0aC5hYnModGhpcy5fc3RhdGUucGVyY2VudGFnZVswXSAtIHBlcmNlbnRhZ2UpO1xuXHRcdFx0XHRcdHZhciBkaWZmMiA9IE1hdGguYWJzKHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMV0gLSBwZXJjZW50YWdlKTtcblx0XHRcdFx0XHR0aGlzLl9zdGF0ZS5kcmFnZ2VkID0gZGlmZjEgPCBkaWZmMiA/IDAgOiAxO1xuXHRcdFx0XHRcdHRoaXMuX2FkanVzdFBlcmNlbnRhZ2VGb3JSYW5nZVNsaWRlcnMocGVyY2VudGFnZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fc3RhdGUuZHJhZ2dlZCA9IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9zdGF0ZS5wZXJjZW50YWdlW3RoaXMuX3N0YXRlLmRyYWdnZWRdID0gcGVyY2VudGFnZTtcblx0XHRcdFx0dGhpcy5fbGF5b3V0KCk7XG5cblx0XHRcdFx0aWYgKHRoaXMudG91Y2hDYXBhYmxlKSB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm1vdXNlbW92ZSwgZmFsc2UpO1xuXHRcdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm1vdXNldXAsIGZhbHNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLm1vdXNlbW92ZSkge1xuXHRcdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZW1vdmUsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5tb3VzZXVwKSB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZXVwLCBmYWxzZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLm1vdXNlbW92ZSA9IHRoaXMuX21vdXNlbW92ZS5iaW5kKHRoaXMpO1xuXHRcdFx0XHR0aGlzLm1vdXNldXAgPSB0aGlzLl9tb3VzZXVwLmJpbmQodGhpcyk7XG5cblx0XHRcdFx0aWYgKHRoaXMudG91Y2hDYXBhYmxlKSB7XG5cdFx0XHRcdFx0Ly8gVG91Y2g6IEJpbmQgdG91Y2ggZXZlbnRzOlxuXHRcdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3VzZW1vdmUsIGZhbHNlKTtcblx0XHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5tb3VzZXVwLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQmluZCBtb3VzZSBldmVudHM6XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZW1vdmUsIGZhbHNlKTtcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZXVwLCBmYWxzZSk7XG5cblx0XHRcdFx0dGhpcy5fc3RhdGUuaW5EcmFnID0gdHJ1ZTtcblx0XHRcdFx0dmFyIG5ld1ZhbHVlID0gdGhpcy5fY2FsY3VsYXRlVmFsdWUoKTtcblxuXHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdzbGlkZVN0YXJ0JywgbmV3VmFsdWUpO1xuXG5cdFx0XHRcdHRoaXMuX3NldERhdGFWYWwobmV3VmFsdWUpO1xuXHRcdFx0XHR0aGlzLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSwgdHJ1ZSk7XG5cblx0XHRcdFx0ZXYucmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmZvY3VzKSB7XG5cdFx0XHRcdFx0dGhpcy5fdHJpZ2dlckZvY3VzT25IYW5kbGUodGhpcy5fc3RhdGUuZHJhZ2dlZCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRfdG91Y2hzdGFydDogZnVuY3Rpb24gX3RvdWNoc3RhcnQoZXYpIHtcblx0XHRcdFx0aWYgKGV2LmNoYW5nZWRUb3VjaGVzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLl9tb3VzZWRvd24oZXYpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB0b3VjaCA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdO1xuXHRcdFx0XHR0aGlzLnRvdWNoWCA9IHRvdWNoLnBhZ2VYO1xuXHRcdFx0XHR0aGlzLnRvdWNoWSA9IHRvdWNoLnBhZ2VZO1xuXHRcdFx0fSxcblx0XHRcdF90cmlnZ2VyRm9jdXNPbkhhbmRsZTogZnVuY3Rpb24gX3RyaWdnZXJGb2N1c09uSGFuZGxlKGhhbmRsZUlkeCkge1xuXHRcdFx0XHRpZiAoaGFuZGxlSWR4ID09PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGUxLmZvY3VzKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGhhbmRsZUlkeCA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlMi5mb2N1cygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X2tleWRvd246IGZ1bmN0aW9uIF9rZXlkb3duKGhhbmRsZUlkeCwgZXYpIHtcblx0XHRcdFx0aWYgKCF0aGlzLl9zdGF0ZS5lbmFibGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGRpcjtcblx0XHRcdFx0c3dpdGNoIChldi5rZXlDb2RlKSB7XG5cdFx0XHRcdFx0Y2FzZSAzNzogLy8gbGVmdFxuXHRcdFx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdFx0XHQvLyBkb3duXG5cdFx0XHRcdFx0XHRkaXIgPSAtMTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMzk6IC8vIHJpZ2h0XG5cdFx0XHRcdFx0Y2FzZSAzODpcblx0XHRcdFx0XHRcdC8vIHVwXG5cdFx0XHRcdFx0XHRkaXIgPSAxO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFkaXIpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyB1c2UgbmF0dXJhbCBhcnJvdyBrZXlzIGluc3RlYWQgb2YgZnJvbSBtaW4gdG8gbWF4XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMubmF0dXJhbF9hcnJvd19rZXlzKSB7XG5cdFx0XHRcdFx0dmFyIGlmVmVydGljYWxBbmROb3RSZXZlcnNlZCA9IHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiAhdGhpcy5vcHRpb25zLnJldmVyc2VkO1xuXHRcdFx0XHRcdHZhciBpZkhvcml6b250YWxBbmRSZXZlcnNlZCA9IHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIHRoaXMub3B0aW9ucy5yZXZlcnNlZDsgLy8gQHRvZG8gY29udHJvbCB3aXRoIHJ0bFxuXG5cdFx0XHRcdFx0aWYgKGlmVmVydGljYWxBbmROb3RSZXZlcnNlZCB8fCBpZkhvcml6b250YWxBbmRSZXZlcnNlZCkge1xuXHRcdFx0XHRcdFx0ZGlyID0gLWRpcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgdmFsID0gdGhpcy5fc3RhdGUudmFsdWVbaGFuZGxlSWR4XSArIGRpciAqIHRoaXMub3B0aW9ucy5zdGVwO1xuXHRcdFx0XHR2YXIgcGVyY2VudGFnZSA9IHZhbCAvIHRoaXMub3B0aW9ucy5tYXggKiAxMDA7XG5cdFx0XHRcdHRoaXMuX3N0YXRlLmtleUN0cmwgPSBoYW5kbGVJZHg7XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucmFuZ2UpIHtcblx0XHRcdFx0XHR0aGlzLl9hZGp1c3RQZXJjZW50YWdlRm9yUmFuZ2VTbGlkZXJzKHBlcmNlbnRhZ2UpO1xuXHRcdFx0XHRcdHZhciB2YWwxID0gIXRoaXMuX3N0YXRlLmtleUN0cmwgPyB2YWwgOiB0aGlzLl9zdGF0ZS52YWx1ZVswXTtcblx0XHRcdFx0XHR2YXIgdmFsMiA9IHRoaXMuX3N0YXRlLmtleUN0cmwgPyB2YWwgOiB0aGlzLl9zdGF0ZS52YWx1ZVsxXTtcblx0XHRcdFx0XHR2YWwgPSBbdmFsMSwgdmFsMl07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdzbGlkZVN0YXJ0JywgdmFsKTtcblx0XHRcdFx0dGhpcy5fc2V0RGF0YVZhbCh2YWwpO1xuXHRcdFx0XHR0aGlzLnNldFZhbHVlKHZhbCwgdHJ1ZSwgdHJ1ZSk7XG5cblx0XHRcdFx0dGhpcy5fc2V0RGF0YVZhbCh2YWwpO1xuXHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdzbGlkZVN0b3AnLCB2YWwpO1xuXHRcdFx0XHR0aGlzLl9sYXlvdXQoKTtcblxuXHRcdFx0XHR0aGlzLl9wYXVzZUV2ZW50KGV2KTtcblx0XHRcdFx0ZGVsZXRlIHRoaXMuX3N0YXRlLmtleUN0cmw7XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdF9wYXVzZUV2ZW50OiBmdW5jdGlvbiBfcGF1c2VFdmVudChldikge1xuXHRcdFx0XHRpZiAoZXYuc3RvcFByb3BhZ2F0aW9uKSB7XG5cdFx0XHRcdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGV2LnByZXZlbnREZWZhdWx0KSB7XG5cdFx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRldi5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXHRcdFx0XHRldi5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdF9tb3VzZW1vdmU6IGZ1bmN0aW9uIF9tb3VzZW1vdmUoZXYpIHtcblx0XHRcdFx0aWYgKCF0aGlzLl9zdGF0ZS5lbmFibGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHBlcmNlbnRhZ2UgPSB0aGlzLl9nZXRQZXJjZW50YWdlKGV2KTtcblx0XHRcdFx0dGhpcy5fYWRqdXN0UGVyY2VudGFnZUZvclJhbmdlU2xpZGVycyhwZXJjZW50YWdlKTtcblx0XHRcdFx0dGhpcy5fc3RhdGUucGVyY2VudGFnZVt0aGlzLl9zdGF0ZS5kcmFnZ2VkXSA9IHBlcmNlbnRhZ2U7XG5cdFx0XHRcdHRoaXMuX2xheW91dCgpO1xuXG5cdFx0XHRcdHZhciB2YWwgPSB0aGlzLl9jYWxjdWxhdGVWYWx1ZSh0cnVlKTtcblx0XHRcdFx0dGhpcy5zZXRWYWx1ZSh2YWwsIHRydWUsIHRydWUpO1xuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRfdG91Y2htb3ZlOiBmdW5jdGlvbiBfdG91Y2htb3ZlKGV2KSB7XG5cdFx0XHRcdGlmIChldi5jaGFuZ2VkVG91Y2hlcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHRvdWNoID0gZXYuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHRcdFx0dmFyIHhEaWZmID0gdG91Y2gucGFnZVggLSB0aGlzLnRvdWNoWDtcblx0XHRcdFx0dmFyIHlEaWZmID0gdG91Y2gucGFnZVkgLSB0aGlzLnRvdWNoWTtcblxuXHRcdFx0XHRpZiAoIXRoaXMuX3N0YXRlLmluRHJhZykge1xuXHRcdFx0XHRcdC8vIFZlcnRpY2FsIFNsaWRlclxuXHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgJiYgeERpZmYgPD0gNSAmJiB4RGlmZiA+PSAtNSAmJiAoeURpZmYgPj0gMTUgfHwgeURpZmYgPD0gLTE1KSkge1xuXHRcdFx0XHRcdFx0dGhpcy5fbW91c2Vkb3duKGV2KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSG9yaXpvbnRhbCBzbGlkZXIuXG5cdFx0XHRcdFx0ZWxzZSBpZiAoeURpZmYgPD0gNSAmJiB5RGlmZiA+PSAtNSAmJiAoeERpZmYgPj0gMTUgfHwgeERpZmYgPD0gLTE1KSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9tb3VzZWRvd24oZXYpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X2FkanVzdFBlcmNlbnRhZ2VGb3JSYW5nZVNsaWRlcnM6IGZ1bmN0aW9uIF9hZGp1c3RQZXJjZW50YWdlRm9yUmFuZ2VTbGlkZXJzKHBlcmNlbnRhZ2UpIHtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5yYW5nZSkge1xuXHRcdFx0XHRcdHZhciBwcmVjaXNpb24gPSB0aGlzLl9nZXROdW1EaWdpdHNBZnRlckRlY2ltYWxQbGFjZShwZXJjZW50YWdlKTtcblx0XHRcdFx0XHRwcmVjaXNpb24gPSBwcmVjaXNpb24gPyBwcmVjaXNpb24gLSAxIDogMDtcblx0XHRcdFx0XHR2YXIgcGVyY2VudGFnZVdpdGhBZGp1c3RlZFByZWNpc2lvbiA9IHRoaXMuX2FwcGx5VG9GaXhlZEFuZFBhcnNlRmxvYXQocGVyY2VudGFnZSwgcHJlY2lzaW9uKTtcblx0XHRcdFx0XHRpZiAodGhpcy5fc3RhdGUuZHJhZ2dlZCA9PT0gMCAmJiB0aGlzLl9hcHBseVRvRml4ZWRBbmRQYXJzZUZsb2F0KHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMV0sIHByZWNpc2lvbikgPCBwZXJjZW50YWdlV2l0aEFkanVzdGVkUHJlY2lzaW9uKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzBdID0gdGhpcy5fc3RhdGUucGVyY2VudGFnZVsxXTtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXRlLmRyYWdnZWQgPSAxO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fc3RhdGUuZHJhZ2dlZCA9PT0gMSAmJiB0aGlzLl9hcHBseVRvRml4ZWRBbmRQYXJzZUZsb2F0KHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMF0sIHByZWNpc2lvbikgPiBwZXJjZW50YWdlV2l0aEFkanVzdGVkUHJlY2lzaW9uKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzFdID0gdGhpcy5fc3RhdGUucGVyY2VudGFnZVswXTtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXRlLmRyYWdnZWQgPSAwO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fc3RhdGUua2V5Q3RybCA9PT0gMCAmJiB0aGlzLl9zdGF0ZS52YWx1ZVsxXSAvIHRoaXMub3B0aW9ucy5tYXggKiAxMDAgPCBwZXJjZW50YWdlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzBdID0gdGhpcy5fc3RhdGUucGVyY2VudGFnZVsxXTtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXRlLmtleUN0cmwgPSAxO1xuXHRcdFx0XHRcdFx0dGhpcy5oYW5kbGUyLmZvY3VzKCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl9zdGF0ZS5rZXlDdHJsID09PSAxICYmIHRoaXMuX3N0YXRlLnZhbHVlWzBdIC8gdGhpcy5vcHRpb25zLm1heCAqIDEwMCA+IHBlcmNlbnRhZ2UpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMV0gPSB0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzBdO1xuXHRcdFx0XHRcdFx0dGhpcy5fc3RhdGUua2V5Q3RybCA9IDA7XG5cdFx0XHRcdFx0XHR0aGlzLmhhbmRsZTEuZm9jdXMoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfbW91c2V1cDogZnVuY3Rpb24gX21vdXNldXAoKSB7XG5cdFx0XHRcdGlmICghdGhpcy5fc3RhdGUuZW5hYmxlZCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy50b3VjaENhcGFibGUpIHtcblx0XHRcdFx0XHQvLyBUb3VjaDogVW5iaW5kIHRvdWNoIGV2ZW50IGhhbmRsZXJzOlxuXHRcdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3VzZW1vdmUsIGZhbHNlKTtcblx0XHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5tb3VzZXVwLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gVW5iaW5kIG1vdXNlIGV2ZW50IGhhbmRsZXJzOlxuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2Vtb3ZlLCBmYWxzZSk7XG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMubW91c2V1cCwgZmFsc2UpO1xuXG5cdFx0XHRcdHRoaXMuX3N0YXRlLmluRHJhZyA9IGZhbHNlO1xuXHRcdFx0XHRpZiAodGhpcy5fc3RhdGUub3ZlciA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLl9oaWRlVG9vbHRpcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB2YWwgPSB0aGlzLl9jYWxjdWxhdGVWYWx1ZSh0cnVlKTtcblxuXHRcdFx0XHR0aGlzLl9sYXlvdXQoKTtcblx0XHRcdFx0dGhpcy5fc2V0RGF0YVZhbCh2YWwpO1xuXHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdzbGlkZVN0b3AnLCB2YWwpO1xuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRfY2FsY3VsYXRlVmFsdWU6IGZ1bmN0aW9uIF9jYWxjdWxhdGVWYWx1ZShzbmFwVG9DbG9zZXN0VGljaykge1xuXHRcdFx0XHR2YXIgdmFsO1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJhbmdlKSB7XG5cdFx0XHRcdFx0dmFsID0gW3RoaXMub3B0aW9ucy5taW4sIHRoaXMub3B0aW9ucy5tYXhdO1xuXHRcdFx0XHRcdGlmICh0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzBdICE9PSAwKSB7XG5cdFx0XHRcdFx0XHR2YWxbMF0gPSB0aGlzLl90b1ZhbHVlKHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMF0pO1xuXHRcdFx0XHRcdFx0dmFsWzBdID0gdGhpcy5fYXBwbHlQcmVjaXNpb24odmFsWzBdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMV0gIT09IDEwMCkge1xuXHRcdFx0XHRcdFx0dmFsWzFdID0gdGhpcy5fdG9WYWx1ZSh0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzFdKTtcblx0XHRcdFx0XHRcdHZhbFsxXSA9IHRoaXMuX2FwcGx5UHJlY2lzaW9uKHZhbFsxXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbCA9IHRoaXMuX3RvVmFsdWUodGhpcy5fc3RhdGUucGVyY2VudGFnZVswXSk7XG5cdFx0XHRcdFx0dmFsID0gcGFyc2VGbG9hdCh2YWwpO1xuXHRcdFx0XHRcdHZhbCA9IHRoaXMuX2FwcGx5UHJlY2lzaW9uKHZhbCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoc25hcFRvQ2xvc2VzdFRpY2spIHtcblx0XHRcdFx0XHR2YXIgbWluID0gW3ZhbCwgSW5maW5pdHldO1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLnRpY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgZGlmZiA9IE1hdGguYWJzKHRoaXMub3B0aW9ucy50aWNrc1tpXSAtIHZhbCk7XG5cdFx0XHRcdFx0XHRpZiAoZGlmZiA8PSBtaW5bMV0pIHtcblx0XHRcdFx0XHRcdFx0bWluID0gW3RoaXMub3B0aW9ucy50aWNrc1tpXSwgZGlmZl07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChtaW5bMV0gPD0gdGhpcy5vcHRpb25zLnRpY2tzX3NuYXBfYm91bmRzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbWluWzBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB2YWw7XG5cdFx0XHR9LFxuXHRcdFx0X2FwcGx5UHJlY2lzaW9uOiBmdW5jdGlvbiBfYXBwbHlQcmVjaXNpb24odmFsKSB7XG5cdFx0XHRcdHZhciBwcmVjaXNpb24gPSB0aGlzLm9wdGlvbnMucHJlY2lzaW9uIHx8IHRoaXMuX2dldE51bURpZ2l0c0FmdGVyRGVjaW1hbFBsYWNlKHRoaXMub3B0aW9ucy5zdGVwKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2FwcGx5VG9GaXhlZEFuZFBhcnNlRmxvYXQodmFsLCBwcmVjaXNpb24pO1xuXHRcdFx0fSxcblx0XHRcdF9nZXROdW1EaWdpdHNBZnRlckRlY2ltYWxQbGFjZTogZnVuY3Rpb24gX2dldE51bURpZ2l0c0FmdGVyRGVjaW1hbFBsYWNlKG51bSkge1xuXHRcdFx0XHR2YXIgbWF0Y2ggPSAoJycgKyBudW0pLm1hdGNoKC8oPzpcXC4oXFxkKykpPyg/OltlRV0oWystXT9cXGQrKSk/JC8pO1xuXHRcdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIE1hdGgubWF4KDAsIChtYXRjaFsxXSA/IG1hdGNoWzFdLmxlbmd0aCA6IDApIC0gKG1hdGNoWzJdID8gK21hdGNoWzJdIDogMCkpO1xuXHRcdFx0fSxcblx0XHRcdF9hcHBseVRvRml4ZWRBbmRQYXJzZUZsb2F0OiBmdW5jdGlvbiBfYXBwbHlUb0ZpeGVkQW5kUGFyc2VGbG9hdChudW0sIHRvRml4ZWRJbnB1dCkge1xuXHRcdFx0XHR2YXIgdHJ1bmNhdGVkTnVtID0gbnVtLnRvRml4ZWQodG9GaXhlZElucHV0KTtcblx0XHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQodHJ1bmNhdGVkTnVtKTtcblx0XHRcdH0sXG5cdFx0XHQvKlxuICAgXHRDcmVkaXRzIHRvIE1pa2UgU2FtdWVsIGZvciB0aGUgZm9sbG93aW5nIG1ldGhvZCFcbiAgIFx0U291cmNlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNDU0NTE4L2phdmFzY3JpcHQtaG93LXRvLXJldHJpZXZlLXRoZS1udW1iZXItb2YtZGVjaW1hbHMtb2YtYS1zdHJpbmctbnVtYmVyXG4gICAqL1xuXHRcdFx0X2dldFBlcmNlbnRhZ2U6IGZ1bmN0aW9uIF9nZXRQZXJjZW50YWdlKGV2KSB7XG5cdFx0XHRcdGlmICh0aGlzLnRvdWNoQ2FwYWJsZSAmJiAoZXYudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGV2LnR5cGUgPT09ICd0b3VjaG1vdmUnKSkge1xuXHRcdFx0XHRcdGV2ID0gZXYudG91Y2hlc1swXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBldmVudFBvc2l0aW9uID0gZXZbdGhpcy5tb3VzZVBvc107XG5cdFx0XHRcdHZhciBzbGlkZXJPZmZzZXQgPSB0aGlzLl9zdGF0ZS5vZmZzZXRbdGhpcy5zdHlsZVBvc107XG5cdFx0XHRcdHZhciBkaXN0YW5jZVRvU2xpZGUgPSBldmVudFBvc2l0aW9uIC0gc2xpZGVyT2Zmc2V0O1xuXHRcdFx0XHRpZiAodGhpcy5zdHlsZVBvcyA9PT0gJ3JpZ2h0Jykge1xuXHRcdFx0XHRcdGRpc3RhbmNlVG9TbGlkZSA9IC1kaXN0YW5jZVRvU2xpZGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHdoYXQgcGVyY2VudCBvZiB0aGUgbGVuZ3RoIHRoZSBzbGlkZXIgaGFuZGxlIGhhcyBzbGlkXG5cdFx0XHRcdHZhciBwZXJjZW50YWdlID0gZGlzdGFuY2VUb1NsaWRlIC8gdGhpcy5fc3RhdGUuc2l6ZSAqIDEwMDtcblx0XHRcdFx0cGVyY2VudGFnZSA9IE1hdGgucm91bmQocGVyY2VudGFnZSAvIHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMl0pICogdGhpcy5fc3RhdGUucGVyY2VudGFnZVsyXTtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5yZXZlcnNlZCkge1xuXHRcdFx0XHRcdHBlcmNlbnRhZ2UgPSAxMDAgLSBwZXJjZW50YWdlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHRoZSBwZXJjZW50IGlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBzbGlkZXIuXG5cdFx0XHRcdC8vIDAlIGNvcnJlc3BvbmRzIHRvIHRoZSAnbWluJyB2YWx1ZSBvZiB0aGUgc2xpZGVcblx0XHRcdFx0Ly8gMTAwJSBjb3JyZXNwb25kcyB0byB0aGUgJ21heCcgdmFsdWUgb2YgdGhlIHNsaWRlXG5cdFx0XHRcdHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHBlcmNlbnRhZ2UpKTtcblx0XHRcdH0sXG5cdFx0XHRfdmFsaWRhdGVJbnB1dFZhbHVlOiBmdW5jdGlvbiBfdmFsaWRhdGVJbnB1dFZhbHVlKHZhbCkge1xuXHRcdFx0XHRpZiAoIWlzTmFOKCt2YWwpKSB7XG5cdFx0XHRcdFx0cmV0dXJuICt2YWw7XG5cdFx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHRcdFx0dGhpcy5fdmFsaWRhdGVBcnJheSh2YWwpO1xuXHRcdFx0XHRcdHJldHVybiB2YWw7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKEVycm9yTXNncy5mb3JtYXRJbnZhbGlkSW5wdXRFcnJvck1zZyh2YWwpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF92YWxpZGF0ZUFycmF5OiBmdW5jdGlvbiBfdmFsaWRhdGVBcnJheSh2YWwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgaW5wdXQgPSB2YWxbaV07XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpbnB1dCAhPT0gJ251bWJlcicpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihFcnJvck1zZ3MuZm9ybWF0SW52YWxpZElucHV0RXJyb3JNc2coaW5wdXQpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfc2V0RGF0YVZhbDogZnVuY3Rpb24gX3NldERhdGFWYWwodmFsKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCB2YWwpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC52YWx1ZSA9IHZhbDtcblx0XHRcdH0sXG5cdFx0XHRfdHJpZ2dlcjogZnVuY3Rpb24gX3RyaWdnZXIoZXZ0LCB2YWwpIHtcblx0XHRcdFx0dmFsID0gdmFsIHx8IHZhbCA9PT0gMCA/IHZhbCA6IHVuZGVmaW5lZDtcblxuXHRcdFx0XHR2YXIgY2FsbGJhY2tGbkFycmF5ID0gdGhpcy5ldmVudFRvQ2FsbGJhY2tNYXBbZXZ0XTtcblx0XHRcdFx0aWYgKGNhbGxiYWNrRm5BcnJheSAmJiBjYWxsYmFja0ZuQXJyYXkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja0ZuQXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHZhciBjYWxsYmFja0ZuID0gY2FsbGJhY2tGbkFycmF5W2ldO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2tGbih2YWwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qIElmIEpRdWVyeSBleGlzdHMsIHRyaWdnZXIgSlF1ZXJ5IGV2ZW50cyAqL1xuXHRcdFx0XHRpZiAoJCkge1xuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXJKUXVlcnlFdmVudChldnQsIHZhbCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfdHJpZ2dlckpRdWVyeUV2ZW50OiBmdW5jdGlvbiBfdHJpZ2dlckpRdWVyeUV2ZW50KGV2dCwgdmFsKSB7XG5cdFx0XHRcdHZhciBldmVudERhdGEgPSB7XG5cdFx0XHRcdFx0dHlwZTogZXZ0LFxuXHRcdFx0XHRcdHZhbHVlOiB2YWxcblx0XHRcdFx0fTtcblx0XHRcdFx0dGhpcy4kZWxlbWVudC50cmlnZ2VyKGV2ZW50RGF0YSk7XG5cdFx0XHRcdHRoaXMuJHNsaWRlckVsZW0udHJpZ2dlcihldmVudERhdGEpO1xuXHRcdFx0fSxcblx0XHRcdF91bmJpbmRKUXVlcnlFdmVudEhhbmRsZXJzOiBmdW5jdGlvbiBfdW5iaW5kSlF1ZXJ5RXZlbnRIYW5kbGVycygpIHtcblx0XHRcdFx0dGhpcy4kZWxlbWVudC5vZmYoKTtcblx0XHRcdFx0dGhpcy4kc2xpZGVyRWxlbS5vZmYoKTtcblx0XHRcdH0sXG5cdFx0XHRfc2V0VGV4dDogZnVuY3Rpb24gX3NldFRleHQoZWxlbWVudCwgdGV4dCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGVsZW1lbnQudGV4dENvbnRlbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5pbm5lclRleHQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIF9yZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc1N0cmluZykge1xuXHRcdFx0XHR2YXIgY2xhc3NlcyA9IGNsYXNzU3RyaW5nLnNwbGl0KFwiIFwiKTtcblx0XHRcdFx0dmFyIG5ld0NsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZTtcblxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgY2xhc3NUYWcgPSBjbGFzc2VzW2ldO1xuXHRcdFx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCIoPzpcXFxcc3xeKVwiICsgY2xhc3NUYWcgKyBcIig/OlxcXFxzfCQpXCIpO1xuXHRcdFx0XHRcdG5ld0NsYXNzZXMgPSBuZXdDbGFzc2VzLnJlcGxhY2UocmVnZXgsIFwiIFwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gbmV3Q2xhc3Nlcy50cmltKCk7XG5cdFx0XHR9LFxuXHRcdFx0X2FkZENsYXNzOiBmdW5jdGlvbiBfYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NTdHJpbmcpIHtcblx0XHRcdFx0dmFyIGNsYXNzZXMgPSBjbGFzc1N0cmluZy5zcGxpdChcIiBcIik7XG5cdFx0XHRcdHZhciBuZXdDbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWU7XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGNsYXNzVGFnID0gY2xhc3Nlc1tpXTtcblx0XHRcdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiKD86XFxcXHN8XilcIiArIGNsYXNzVGFnICsgXCIoPzpcXFxcc3wkKVwiKTtcblx0XHRcdFx0XHR2YXIgaWZDbGFzc0V4aXN0cyA9IHJlZ2V4LnRlc3QobmV3Q2xhc3Nlcyk7XG5cblx0XHRcdFx0XHRpZiAoIWlmQ2xhc3NFeGlzdHMpIHtcblx0XHRcdFx0XHRcdG5ld0NsYXNzZXMgKz0gXCIgXCIgKyBjbGFzc1RhZztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IG5ld0NsYXNzZXMudHJpbSgpO1xuXHRcdFx0fSxcblx0XHRcdF9vZmZzZXRMZWZ0OiBmdW5jdGlvbiBfb2Zmc2V0TGVmdChvYmopIHtcblx0XHRcdFx0cmV0dXJuIG9iai5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuXHRcdFx0fSxcblx0XHRcdF9vZmZzZXRSaWdodDogZnVuY3Rpb24gX29mZnNldFJpZ2h0KG9iaikge1xuXHRcdFx0XHRyZXR1cm4gb2JqLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0O1xuXHRcdFx0fSxcblx0XHRcdF9vZmZzZXRUb3A6IGZ1bmN0aW9uIF9vZmZzZXRUb3Aob2JqKSB7XG5cdFx0XHRcdHZhciBvZmZzZXRUb3AgPSBvYmoub2Zmc2V0VG9wO1xuXHRcdFx0XHR3aGlsZSAoKG9iaiA9IG9iai5vZmZzZXRQYXJlbnQpICYmICFpc05hTihvYmoub2Zmc2V0VG9wKSkge1xuXHRcdFx0XHRcdG9mZnNldFRvcCArPSBvYmoub2Zmc2V0VG9wO1xuXHRcdFx0XHRcdGlmIChvYmoudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG5cdFx0XHRcdFx0XHRvZmZzZXRUb3AgLT0gb2JqLnNjcm9sbFRvcDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9mZnNldFRvcDtcblx0XHRcdH0sXG5cdFx0XHRfb2Zmc2V0OiBmdW5jdGlvbiBfb2Zmc2V0KG9iaikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGxlZnQ6IHRoaXMuX29mZnNldExlZnQob2JqKSxcblx0XHRcdFx0XHRyaWdodDogdGhpcy5fb2Zmc2V0UmlnaHQob2JqKSxcblx0XHRcdFx0XHR0b3A6IHRoaXMuX29mZnNldFRvcChvYmopXG5cdFx0XHRcdH07XG5cdFx0XHR9LFxuXHRcdFx0X2NzczogZnVuY3Rpb24gX2NzcyhlbGVtZW50UmVmLCBzdHlsZU5hbWUsIHZhbHVlKSB7XG5cdFx0XHRcdGlmICgkKSB7XG5cdFx0XHRcdFx0JC5zdHlsZShlbGVtZW50UmVmLCBzdHlsZU5hbWUsIHZhbHVlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgc3R5bGUgPSBzdHlsZU5hbWUucmVwbGFjZSgvXi1tcy0vLCBcIm1zLVwiKS5yZXBsYWNlKC8tKFtcXGRhLXpdKS9naSwgZnVuY3Rpb24gKGFsbCwgbGV0dGVyKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0ZWxlbWVudFJlZi5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF90b1ZhbHVlOiBmdW5jdGlvbiBfdG9WYWx1ZShwZXJjZW50YWdlKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wdGlvbnMuc2NhbGUudG9WYWx1ZS5hcHBseSh0aGlzLCBbcGVyY2VudGFnZV0pO1xuXHRcdFx0fSxcblx0XHRcdF90b1BlcmNlbnRhZ2U6IGZ1bmN0aW9uIF90b1BlcmNlbnRhZ2UodmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5zY2FsZS50b1BlcmNlbnRhZ2UuYXBwbHkodGhpcywgW3ZhbHVlXSk7XG5cdFx0XHR9LFxuXHRcdFx0X3NldFRvb2x0aXBQb3NpdGlvbjogZnVuY3Rpb24gX3NldFRvb2x0aXBQb3NpdGlvbigpIHtcblx0XHRcdFx0dmFyIHRvb2x0aXBzID0gW3RoaXMudG9vbHRpcCwgdGhpcy50b29sdGlwX21pbiwgdGhpcy50b29sdGlwX21heF07XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcblx0XHRcdFx0XHR2YXIgdG9vbHRpcFBvcztcblx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBfcG9zaXRpb24pIHtcblx0XHRcdFx0XHRcdHRvb2x0aXBQb3MgPSB0aGlzLm9wdGlvbnMudG9vbHRpcF9wb3NpdGlvbjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5ydGwpIHtcblx0XHRcdFx0XHRcdFx0dG9vbHRpcFBvcyA9ICdsZWZ0Jztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRvb2x0aXBQb3MgPSAncmlnaHQnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgb3Bwb3NpdGVTaWRlID0gdG9vbHRpcFBvcyA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdFx0XHR0b29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uICh0b29sdGlwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0b29sdGlwLCB0b29sdGlwUG9zKTtcblx0XHRcdFx0XHRcdHRvb2x0aXAuc3R5bGVbb3Bwb3NpdGVTaWRlXSA9ICcxMDAlJztcblx0XHRcdFx0XHR9LmJpbmQodGhpcykpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwX3Bvc2l0aW9uID09PSAnYm90dG9tJykge1xuXHRcdFx0XHRcdHRvb2x0aXBzLmZvckVhY2goZnVuY3Rpb24gKHRvb2x0aXApIHtcblx0XHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRvb2x0aXAsICdib3R0b20nKTtcblx0XHRcdFx0XHRcdHRvb2x0aXAuc3R5bGUudG9wID0gMjIgKyAncHgnO1xuXHRcdFx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dG9vbHRpcHMuZm9yRWFjaChmdW5jdGlvbiAodG9vbHRpcCkge1xuXHRcdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModG9vbHRpcCwgJ3RvcCcpO1xuXHRcdFx0XHRcdFx0dG9vbHRpcC5zdHlsZS50b3AgPSAtdGhpcy50b29sdGlwLm91dGVySGVpZ2h0IC0gMTQgKyAncHgnO1xuXHRcdFx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBcdFx0QXR0YWNoIHRvIGdsb2JhbCBuYW1lc3BhY2VcbiAgXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cdFx0aWYgKCQgJiYgJC5mbikge1xuXHRcdFx0dmFyIGF1dG9SZWdpc3Rlck5hbWVzcGFjZSA9IHZvaWQgMDtcblxuXHRcdFx0aWYgKCEkLmZuLnNsaWRlcikge1xuXHRcdFx0XHQkLmJyaWRnZXQoTkFNRVNQQUNFX01BSU4sIFNsaWRlcik7XG5cdFx0XHRcdGF1dG9SZWdpc3Rlck5hbWVzcGFjZSA9IE5BTUVTUEFDRV9NQUlOO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHdpbmRvd0lzRGVmaW5lZCkge1xuXHRcdFx0XHRcdHdpbmRvdy5jb25zb2xlLndhcm4oXCJib290c3RyYXAtc2xpZGVyLmpzIC0gV0FSTklORzogJC5mbi5zbGlkZXIgbmFtZXNwYWNlIGlzIGFscmVhZHkgYm91bmQuIFVzZSB0aGUgJC5mbi5ib290c3RyYXBTbGlkZXIgbmFtZXNwYWNlIGluc3RlYWQuXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF1dG9SZWdpc3Rlck5hbWVzcGFjZSA9IE5BTUVTUEFDRV9BTFRFUk5BVEU7XG5cdFx0XHR9XG5cdFx0XHQkLmJyaWRnZXQoTkFNRVNQQUNFX0FMVEVSTkFURSwgU2xpZGVyKTtcblxuXHRcdFx0Ly8gQXV0by1SZWdpc3RlciBkYXRhLXByb3ZpZGU9XCJzbGlkZXJcIiBFbGVtZW50c1xuXHRcdFx0JChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQoXCJpbnB1dFtkYXRhLXByb3ZpZGU9c2xpZGVyXVwiKVthdXRvUmVnaXN0ZXJOYW1lc3BhY2VdKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pKCQpO1xuXG5cdHJldHVybiBTbGlkZXI7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zbGlkZXIvZGlzdC9ib290c3RyYXAtc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgaWNoZWNrIH0gZnJvbSBcIi4vaWNoZWNrLmpzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2VsZWN0MiB9IGZyb20gXCIuL3NlbGVjdDIuanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbWFnZXBpY2tlciB9IGZyb20gXCIuL2ltYWdlLXBpY2tlci5qc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlucHV0bWFzayB9IGZyb20gXCIuL2lucHV0bWFzay5qc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGpxdWVyeWJhcnJhdGluZyB9IGZyb20gXCIuL2pxdWVyeS1iYXItcmF0aW5nLmpzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMganF1ZXJ5dWlkYXRlcGlja2VyIH0gZnJvbSBcIi4vanF1ZXJ5LXVpLWRhdGVwaWNrZXIuanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBub3Vpc2xpZGVyIH0gZnJvbSBcIi4vbm91aXNsaWRlci5qc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNlbGVjdDJ0YWdib3ggfSBmcm9tIFwiLi9zZWxlY3QyLXRhZ2JveC5qc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNpZ25hdHVyZXBhZCB9IGZyb20gXCIuL3NpZ25hdHVyZV9wYWQuanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzb3J0YWJsZWpzIH0gZnJvbSBcIi4vc29ydGFibGVqcy5qc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNrZWRpdG9yIH0gZnJvbSBcIi4vY2stZWRpdG9yLmpzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXV0b2NvbXBsZXRlIH0gZnJvbSBcIi4vZWFzeS1hdXRvY29tcGxldGUuanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV0dHljaGVja2JveCB9IGZyb20gXCIuL3ByZXR0eS1jaGVja2JveC5qc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvb3RzdHJhcHNsaWRlciB9IGZyb20gXCIuL2Jvb3RzdHJhcC1zbGlkZXIuanNcIjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3VydmV5anMtd2lkZ2V0cy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==