(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("inputmask"), require("nouislider"), require("signature_pad"), require("sortablejs"), require("bootstrap-slider"));
	else if(typeof define === 'function' && define.amd)
		define("surveyjs-widgets", ["inputmask", "nouislider", "signature_pad", "sortablejs", "bootstrap-slider"], factory);
	else if(typeof exports === 'object')
		exports["surveyjs-widgets"] = factory(require("inputmask"), require("nouislider"), require("signature_pad"), require("sortablejs"), require("bootstrap-slider"));
	else
		root["surveyjs-widgets"] = factory(root["Inputmask"], root["noUiSlider"], root["SignaturePad"], root["Sortable"], root["Slider"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_18__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey, $) {
  $ = $ || window.$;
  var widget = {
    className: "iradio_square-blue",
    name: "icheck",
    widgetIsLoaded: function() {
      return !!$.fn.iCheck;
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
        if (question.getType() !== "matrix") {
          var values = question.value;
          if (!Array.isArray(values)) {
            values = [values];
          }
          values.forEach(function(value) {
            $el.find("input[value=" + value + "]").iCheck("check");
          });
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
        if (question.getType() === "matrix") {
          question.generatedVisibleRows.forEach(function(row, index, rows) {
            if (row.fullName === event.target.name) {
              row.value = event.target.value;
            }
          });
        } else if (question.getType() === "checkbox") {
          var oldValue = question.value || [];
          question.value = oldValue.concat([event.target.value]);
        } else {
          question.value = event.target.value;
        }
      });
      $el.find("input").on("ifUnchecked", function(event) {
        if (question.getType() === "checkbox") {
          var oldValue = question.value || [];
          var index = oldValue.indexOf(event.target.value);
          if (index >= 0) {
            question.value = oldValue.splice(index, 1);
          }
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
  init(Survey, window.$);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey, $) {
  $ = $ || window.$;
  var widget = {
    activatedBy: "property",
    name: "select2",
    htmlTemplate: "<select style='width: 100%;'></select>",
    widgetIsLoaded: function() {
      return typeof $ == "function" && !!$.fn.select2;
    },
    isFit: function(question) {
      if (widget.activatedBy == "property")
        return (
          question["renderAs"] === "select2" &&
          question.getType() === "dropdown"
        );
      if (widget.activatedBy == "type")
        return typeof question.getType() === "dropdown";
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
      var $el = $(el).is("select") ? $(el) : $(el).find("select");
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
        $el.select2().empty();
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
      $(el)
        .find("select")
        .off("select2:select")
        .select2("destroy");
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget);
}

if (typeof Survey !== "undefined") {
  init(Survey, window.$);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey, $) {
  $ = $ || window.$;
  var widget = {
    name: "imagepicker",
    title: "Image picker",
    iconName: "icon-imagepicker",
    widgetIsLoaded: function() {
      return !!$.fn.imagepicker;
    },
    isFit: function(question) {
      return question.getType() === "imagepicker";
    },
    isDefaultRender: true,
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass(
        "imageitemvalues",
        [],
        null,
        "itemvalue"
      );
      Survey.JsonObject.metaData.addProperty("imagepicker", {
        name: "imageLink"
      });
      Survey.JsonObject.metaData.addClass(
        "imagepicker",
        [
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
      Survey.JsonObject.metaData.addProperty("imagepicker", {
        name: "showLabel:boolean",
        default: false
      });
      Survey.JsonObject.metaData.addProperty("imagepicker", {
        name: "choices:imageitemvalues",
        onGetValue: function(obj) {
          return Survey.ItemValue.getData(obj.choices);
        },
        onSetValue: function(obj, value) {
          obj.choices = value;
        }
      });
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
  init(Survey, window.$);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inputmask__ = __webpack_require__(4);
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
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey, $) {
  $ = $ || window.$;
  var widget = {
    name: "barrating",
    title: "Bar rating",
    iconName: "icon-barrating",
    widgetIsLoaded: function() {
      return !!$.fn.barrating;
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
        name: "showValues:boolean",
        default: false
      });
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
  init(Survey, window.$);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey, $) {
  $ = $ || window.$;
  var widget = {
    name: "datepicker",
    title: "Date picker",
    iconName: "icon-datepicker",
    widgetIsLoaded: function() {
      return !!$.fn.datepicker;
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
          { name: "inputType", visible: false },
          { name: "inputFormat", visible: false },
          { name: "inputMask", visible: false }
        ],
        null,
        "text"
      );
      Survey.JsonObject.metaData.addProperty("datepicker", {
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
      });
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
  init(Survey, window.$);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nouislider__ = __webpack_require__(8);
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
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey, $) {
  $ = $ || window.$;
  var widget = {
    name: "tagbox",
    title: "Tag box",
    iconName: "icon-tagbox",
    widgetIsLoaded: function() {
      return typeof $ == "function" && !!$.fn.select2;
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
      var $el = $(el).is("select") ? $(el) : $(el).find("select");
      $el.select2({
        tags: "true",
        theme: "classic"
      });
      var updateValueHandler = function() {
        $el.val(question.value).trigger("change");
      };
      var updateChoices = function() {
        $el.select2().empty();
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
      $(el)
        .find("select")
        .off("select2:select")
        .select2("destroy");
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey, window.$);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_signature_pad__ = __webpack_require__(11);
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
      return typeof __WEBPACK_IMPORTED_MODULE_0_signature_pad___default.a != "undefined";
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
      var signaturePad = new __WEBPACK_IMPORTED_MODULE_0_signature_pad___default.a(canvas);
      if (question.isReadOnly) {
        signaturePad.off();
      }
      signaturePad.penColor = rootWidget.penColor;
      signaturePad.onEnd = function() {
        var data = signaturePad.toDataURL();
        question.value = data;
      };
      var updateValueHandler = function() {
        canvas.width = question.width;
        canvas.height = question.height;
        resizeCanvas(canvas);
        signaturePad.fromDataURL(
          question.value || "data:image/gif;base64,R0lGODlhAQABAIAAAP"
        );
      };
      question.valueChangedCallback = updateValueHandler;
      updateValueHandler();
      question.signaturePad = signaturePad;
      var buttonEl = el.getElementsByTagName("button")[0];
      if (question.allowClear && !question.isReadOnly) {
        buttonEl.onclick = function() {
          question.value = undefined;
        };
      } else {
        buttonEl.parentNode.removeChild(buttonEl);
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
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sortablejs__ = __webpack_require__(13);
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
      question.resultEl = __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create(resultEl, {
        animation: 150,
        group: question.name,
        onSort: function(evt) {
          var result = [];
          if (resultEl.children.length === 1) {
            emptyEl.style.display = "";
          } else {
            emptyEl.style.display = "none";
            for (var i = 0; i < resultEl.children.length; i++) {
              if (typeof resultEl.children[i].dataset.value === "undefined")
                continue;
              result.push(resultEl.children[i].dataset.value);
            }
          }
          isUpdatingQuestionValue = true;
          question.value = result;
          isUpdatingQuestionValue = false;
        }
      });
      question.sourceEl = __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create(sourceEl, {
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
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey, $) {
  $ = $ || window.$;
  var widget = {
    name: "autocomplete",
    widgetIsLoaded: function() {
      return !!$.fn.easyAutocomplete;
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
  init(Survey, window.$);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey) {
  var widget = {
    settings: {
      radiogroup: {
        rootClass: "pretty p-default p-round",
        inputType: "radio",
        addOn: "",
        titleClass: "state p-success"
      },
      checkbox: {
        rootClass: "pretty p-default",
        inputType: "checkbox",
        addOn: "",
        titleClass: "state p-success"
      }
    },
    name: "pretty-checkbox",
    activatedBy: "property",
    widgetIsLoaded: function() {
      for (var i = 0; i < document.styleSheets.length; i++) {
        var href = document.styleSheets[i].ownerNode["href"];
        if (!!href && href.indexOf("pretty-checkbox") != -1) {
          return true;
        }
      }
      return false;
    },
    htmlTemplate: "<fieldset></fieldset>",
    isFit: function(question) {
      var isFitByType =
        question.getType() === "radiogroup" ||
        question.getType() === "checkbox";
      if (widget.activatedBy === "property")
        return question["renderAs"] === "prettycheckbox" && isFitByType;
      if (widget.activatedBy === "type") return isFitByType;
      return false;
    },
    activatedByChanged: function(activatedBy) {
      if (!this.widgetIsLoaded()) return;
      widget.activatedBy = activatedBy;
      Survey.JsonObject.metaData.removeProperty("radiogroup", "renderAs");
      Survey.JsonObject.metaData.removeProperty("checkbox", "renderAs");
      if (activatedBy === "property") {
        Survey.JsonObject.metaData.addProperty("radiogroup", {
          name: "renderAs",
          default: "standard",
          choices: ["standard", "prettycheckbox"]
        });
        Survey.JsonObject.metaData.addProperty("checkbox", {
          name: "renderAs",
          default: "standard",
          choices: ["standard", "prettycheckbox"]
        });
      }
    },
    isDefaultRender: false,
    afterRender: function(question, el) {
      var itemInputs = {};
      var options = this.settings[question.getType()];
      var inChangeHandler = false;
      var changeHandler = function(event) {
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
      var itemWidth =
        question.colCount > 0 ? 100 / question.colCount + "%" : "";
      question.choices.forEach(function(choiceItem, index) {
        var itemRoot = document.createElement("div");
        itemRoot.className = "sv_cw_pretty_checkbox_" + question.getType();
        itemRoot.style.display = "inline-block";
        itemRoot.style.width = itemWidth;
        var controlRoot = document.createElement("div");
        controlRoot.className = options.rootClass;
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
        controlRoot.appendChild(input);
        controlRoot.appendChild(titleRoot);
        if (!!options.addOn) {
          titleRoot.insertAdjacentHTML("afterbegin", options.addOn);
        }
        itemRoot.appendChild(controlRoot);
        el.appendChild(itemRoot);

        itemInputs[choiceItem.value] = input;
      });
      var updateValueHandler = function(newValue) {
        if (!inChangeHandler) {
          var checkedItems = newValue || [];
          if (question.getType() === "radiogroup") {
            checkedItems = [newValue];
          }
          Object.values(itemInputs).forEach(function(inputItem) {
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
    willUnmount: function(question, el) {
      question.valueChangedCallback = undefined;
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "property");
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
var Slider = __webpack_require__(18);

function init(Survey) {
  var widget = {
    name: "bootstrapslider",
    title: "Bootstrap Slider",
    iconName: "icon-bootstrap-slider",
    widgetIsLoaded: function() {
      return typeof Slider !== "undefined";
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
      inputEl.setAttribute(
        "data-slider-value",
        question.value || question.rangeMin
      );
      el.appendChild(inputEl);
      var slider = new Slider(inputEl, {
        id: question.name + "_" + question.id,
        min: question.rangeMin,
        max: question.rangeMax,
        step: question.step,
        value: question.value || question.rangeMin
      });

      slider.on("change", function(valueObj) {
        question.value = slider.getValue();
      });
      var updateValueHandler = function() {
        slider.setValue(question.value || question.rangeMin);
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
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icheck_js__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "icheck", function() { return __WEBPACK_IMPORTED_MODULE_0__icheck_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select2_js__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select2", function() { return __WEBPACK_IMPORTED_MODULE_1__select2_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_picker_js__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "imagepicker", function() { return __WEBPACK_IMPORTED_MODULE_2__image_picker_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputmask_js__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "inputmask", function() { return __WEBPACK_IMPORTED_MODULE_3__inputmask_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jquery_bar_rating_js__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "jquerybarrating", function() { return __WEBPACK_IMPORTED_MODULE_4__jquery_bar_rating_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jquery_ui_datepicker_js__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "jqueryuidatepicker", function() { return __WEBPACK_IMPORTED_MODULE_5__jquery_ui_datepicker_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nouislider_js__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "nouislider", function() { return __WEBPACK_IMPORTED_MODULE_6__nouislider_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select2_tagbox_js__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select2tagbox", function() { return __WEBPACK_IMPORTED_MODULE_7__select2_tagbox_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signature_pad_js__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "signaturepad", function() { return __WEBPACK_IMPORTED_MODULE_8__signature_pad_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sortablejs_js__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sortablejs", function() { return __WEBPACK_IMPORTED_MODULE_9__sortablejs_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ck_editor_js__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ckeditor", function() { return __WEBPACK_IMPORTED_MODULE_10__ck_editor_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__easy_autocomplete_js__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "autocomplete", function() { return __WEBPACK_IMPORTED_MODULE_11__easy_autocomplete_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pretty_checkbox_js__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "prettycheckbox", function() { return __WEBPACK_IMPORTED_MODULE_12__pretty_checkbox_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bootstrap_slider_js__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapslider", function() { return __WEBPACK_IMPORTED_MODULE_13__bootstrap_slider_js__["default"]; });
















/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkYWY3NGJjYWFlNTc1Y2E4MmU1OCIsIndlYnBhY2s6Ly8vLi9zcmMvaWNoZWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0bWFzay5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSW5wdXRtYXNrXCIsXCJjb21tb25qczJcIjpcImlucHV0bWFza1wiLFwiY29tbW9uanNcIjpcImlucHV0bWFza1wiLFwiYW1kXCI6XCJpbnB1dG1hc2tcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pxdWVyeS1iYXItcmF0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9qcXVlcnktdWktZGF0ZXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbm91aXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibm9VaVNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJub3Vpc2xpZGVyXCIsXCJjb21tb25qc1wiOlwibm91aXNsaWRlclwiLFwiYW1kXCI6XCJub3Vpc2xpZGVyXCJ9Iiwid2VicGFjazovLy8uL3NyYy9zZWxlY3QyLXRhZ2JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2lnbmF0dXJlX3BhZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU2lnbmF0dXJlUGFkXCIsXCJjb21tb25qczJcIjpcInNpZ25hdHVyZV9wYWRcIixcImNvbW1vbmpzXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJhbWRcIjpcInNpZ25hdHVyZV9wYWRcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvcnRhYmxlanMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlNvcnRhYmxlXCIsXCJjb21tb25qczJcIjpcInNvcnRhYmxlanNcIixcImNvbW1vbmpzXCI6XCJzb3J0YWJsZWpzXCIsXCJhbWRcIjpcInNvcnRhYmxlanNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2NrLWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWFzeS1hdXRvY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByZXR0eS1jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9vdHN0cmFwLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU2xpZGVyXCIsXCJjb21tb25qczJcIjpcImJvb3RzdHJhcC1zbGlkZXJcIixcImNvbW1vbmpzXCI6XCJib290c3RyYXAtc2xpZGVyXCIsXCJhbWRcIjpcImJvb3RzdHJhcC1zbGlkZXJcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleWpzLXdpZGdldHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FB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QTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNsREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDL0lBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMxRUEsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNDO0FBQ0k7QUFDRjtBQUNNO0FBQ0c7QUFDUjtBQUNHO0FBQ0Q7QUFDRjtBQUNGO0FBQ0k7QUFDRTtBQUNDIiwiZmlsZSI6InN1cnZleWpzLXdpZGdldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJpbnB1dG1hc2tcIiksIHJlcXVpcmUoXCJub3Vpc2xpZGVyXCIpLCByZXF1aXJlKFwic2lnbmF0dXJlX3BhZFwiKSwgcmVxdWlyZShcInNvcnRhYmxlanNcIiksIHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwic3VydmV5anMtd2lkZ2V0c1wiLCBbXCJpbnB1dG1hc2tcIiwgXCJub3Vpc2xpZGVyXCIsIFwic2lnbmF0dXJlX3BhZFwiLCBcInNvcnRhYmxlanNcIiwgXCJib290c3RyYXAtc2xpZGVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1cnZleWpzLXdpZGdldHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJpbnB1dG1hc2tcIiksIHJlcXVpcmUoXCJub3Vpc2xpZGVyXCIpLCByZXF1aXJlKFwic2lnbmF0dXJlX3BhZFwiKSwgcmVxdWlyZShcInNvcnRhYmxlanNcIiksIHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzdXJ2ZXlqcy13aWRnZXRzXCJdID0gZmFjdG9yeShyb290W1wiSW5wdXRtYXNrXCJdLCByb290W1wibm9VaVNsaWRlclwiXSwgcm9vdFtcIlNpZ25hdHVyZVBhZFwiXSwgcm9vdFtcIlNvcnRhYmxlXCJdLCByb290W1wiU2xpZGVyXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE4X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGRhZjc0YmNhYWU1NzVjYTgyZTU4IiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcclxuICAkID0gJCB8fCB3aW5kb3cuJDtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcImlyYWRpb19zcXVhcmUtYmx1ZVwiLFxyXG4gICAgbmFtZTogXCJpY2hlY2tcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuICEhJC5mbi5pQ2hlY2s7XHJcbiAgICB9LFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHZhciB0ID0gcXVlc3Rpb24uZ2V0VHlwZSgpO1xyXG4gICAgICByZXR1cm4gdCA9PT0gXCJyYWRpb2dyb3VwXCIgfHwgdCA9PT0gXCJjaGVja2JveFwiIHx8IHQgPT09IFwibWF0cml4XCI7XHJcbiAgICB9LFxyXG4gICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgcm9vdFdpZGdldCA9IHRoaXM7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcclxuICAgICAgJGVsLmZpbmQoXCJpbnB1dFwiKS5kYXRhKHsgaUNoZWNrOiB1bmRlZmluZWQgfSk7XHJcblxyXG4gICAgICAkZWwuZmluZChcImlucHV0XCIpLmlDaGVjayh7XHJcbiAgICAgICAgY2hlY2tib3hDbGFzczogcm9vdFdpZGdldC5jbGFzc05hbWUsXHJcbiAgICAgICAgcmFkaW9DbGFzczogcm9vdFdpZGdldC5jbGFzc05hbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciBzZWxlY3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpICE9PSBcIm1hdHJpeFwiKSB7XHJcbiAgICAgICAgICB2YXIgdmFsdWVzID0gcXVlc3Rpb24udmFsdWU7XHJcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xyXG4gICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICRlbC5maW5kKFwiaW5wdXRbdmFsdWU9XCIgKyB2YWx1ZSArIFwiXVwiKS5pQ2hlY2soXCJjaGVja1wiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBxdWVzdGlvbi5nZW5lcmF0ZWRWaXNpYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uKHJvdywgaW5kZXgsIHJvd3MpIHtcclxuICAgICAgICAgICAgaWYgKHJvdy52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICQoZWwpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcclxuICAgICAgICAgICAgICAgICAgXCJpbnB1dFtuYW1lPSdcIiArIHJvdy5mdWxsTmFtZSArIFwiJ11bdmFsdWU9XCIgKyByb3cudmFsdWUgKyBcIl1cIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmlDaGVjayhcImNoZWNrXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgICRlbC5maW5kKFwiaW5wdXRcIikub24oXCJpZkNoZWNrZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcIm1hdHJpeFwiKSB7XHJcbiAgICAgICAgICBxdWVzdGlvbi5nZW5lcmF0ZWRWaXNpYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uKHJvdywgaW5kZXgsIHJvd3MpIHtcclxuICAgICAgICAgICAgaWYgKHJvdy5mdWxsTmFtZSA9PT0gZXZlbnQudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgICByb3cudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHF1ZXN0aW9uLnZhbHVlIHx8IFtdO1xyXG4gICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBvbGRWYWx1ZS5jb25jYXQoW2V2ZW50LnRhcmdldC52YWx1ZV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAkZWwuZmluZChcImlucHV0XCIpLm9uKFwiaWZVbmNoZWNrZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHF1ZXN0aW9uLnZhbHVlIHx8IFtdO1xyXG4gICAgICAgICAgdmFyIGluZGV4ID0gb2xkVmFsdWUuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBvbGRWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gc2VsZWN0O1xyXG4gICAgICBzZWxlY3QoKTtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcclxuICAgICAgJGVsLmZpbmQoXCJpbnB1dFwiKS5pQ2hlY2soXCJkZXN0cm95XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwidHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSwgd2luZG93LiQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pY2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEyIiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcclxuICAkID0gJCB8fCB3aW5kb3cuJDtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgYWN0aXZhdGVkQnk6IFwicHJvcGVydHlcIixcclxuICAgIG5hbWU6IFwic2VsZWN0MlwiLFxyXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxzZWxlY3Qgc3R5bGU9J3dpZHRoOiAxMDAlOyc+PC9zZWxlY3Q+XCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLnNlbGVjdDI7XHJcbiAgICB9LFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT0gXCJwcm9wZXJ0eVwiKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBxdWVzdGlvbltcInJlbmRlckFzXCJdID09PSBcInNlbGVjdDJcIiAmJlxyXG4gICAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImRyb3Bkb3duXCJcclxuICAgICAgICApO1xyXG4gICAgICBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwidHlwZVwiKVxyXG4gICAgICAgIHJldHVybiB0eXBlb2YgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImRyb3Bkb3duXCI7XHJcbiAgICAgIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT0gXCJjdXN0b210eXBlXCIpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJzZWxlY3QyXCI7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIGlmICghdGhpcy53aWRnZXRJc0xvYWRlZCgpKSByZXR1cm47XHJcbiAgICAgIHdpZGdldC5hY3RpdmF0ZWRCeSA9IGFjdGl2YXRlZEJ5O1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5yZW1vdmVQcm9wZXJ0eShcImRyb3Bkb3duXCIsIFwicmVuZGVyQXNcIik7XHJcbiAgICAgIGlmIChhY3RpdmF0ZWRCeSA9PSBcInByb3BlcnR5XCIpIHtcclxuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImRyb3Bkb3duXCIsIHtcclxuICAgICAgICAgIG5hbWU6IFwicmVuZGVyQXNcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IFwic3RhbmRhcmRcIixcclxuICAgICAgICAgIGNob2ljZXM6IFtcInN0YW5kYXJkXCIsIFwic2VsZWN0MlwiXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChhY3RpdmF0ZWRCeSA9PSBcImN1c3RvbXR5cGVcIikge1xyXG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic2VsZWN0MlwiLCBbXSwgbnVsbCwgXCJkcm9wZG93blwiKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICB2YXIgb3RoZXJzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgIG90aGVyc0VsLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgb3RoZXJzRWwuc3R5bGUubWFyZ2luVG9wID0gXCIzcHhcIjtcclxuICAgICAgb3RoZXJzRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBvdGhlcnNFbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAkZWxcclxuICAgICAgICAucGFyZW50KClcclxuICAgICAgICAuZ2V0KDApXHJcbiAgICAgICAgLmFwcGVuZENoaWxkKG90aGVyc0VsKTtcclxuICAgICAgdmFyIHdpZGdldCA9ICRlbC5zZWxlY3QyKHtcclxuICAgICAgICB0aGVtZTogXCJjbGFzc2ljXCJcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkZWwudmFsKHF1ZXN0aW9uLnZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgIG90aGVyc0VsLnN0eWxlLmRpc3BsYXkgPSAhcXVlc3Rpb24uaXNPdGhlclNlbGVjdGVkID8gXCJub25lXCIgOiBcIlwiO1xyXG4gICAgICB9O1xyXG4gICAgICB2YXIgdXBkYXRlQ29tbWVudEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBvdGhlcnNFbC52YWx1ZSA9IHF1ZXN0aW9uLmNvbW1lbnQgPyBxdWVzdGlvbi5jb21tZW50IDogXCJcIjtcclxuICAgICAgfTtcclxuICAgICAgdmFyIG90aGVyc0VsQ2hhbmdlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHF1ZXN0aW9uLmNvbW1lbnQgPSBvdGhlcnNFbC52YWx1ZTtcclxuICAgICAgfTtcclxuICAgICAgdmFyIHVwZGF0ZUNob2ljZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkZWwuc2VsZWN0MigpLmVtcHR5KCk7XHJcbiAgICAgICAgJGVsLnNlbGVjdDIoe1xyXG4gICAgICAgICAgZGF0YTogcXVlc3Rpb24udmlzaWJsZUNob2ljZXMubWFwKGZ1bmN0aW9uKGNob2ljZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBpZDogY2hvaWNlLnZhbHVlLCB0ZXh0OiBjaG9pY2UudGV4dCB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgICAgICB1cGRhdGVDb21tZW50SGFuZGxlcigpO1xyXG4gICAgICB9O1xyXG4gICAgICBxdWVzdGlvbi5jaG9pY2VzQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlQ2hvaWNlcztcclxuICAgICAgdXBkYXRlQ2hvaWNlcygpO1xyXG4gICAgICAkZWwub24oXCJzZWxlY3QyOnNlbGVjdFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIG90aGVyc0VsLm9uY2hhbmdlID0gb3RoZXJzRWxDaGFuZ2VkO1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgcXVlc3Rpb24uY29tbWVudENoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZUNvbW1lbnRIYW5kbGVyO1xyXG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgICAgdXBkYXRlQ29tbWVudEhhbmRsZXIoKTtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICQoZWwpXHJcbiAgICAgICAgLmZpbmQoXCJzZWxlY3RcIilcclxuICAgICAgICAub2ZmKFwic2VsZWN0MjpzZWxlY3RcIilcclxuICAgICAgICAuc2VsZWN0MihcImRlc3Ryb3lcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCk7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXksIHdpbmRvdy4kKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VsZWN0Mi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsImZ1bmN0aW9uIGluaXQoU3VydmV5LCAkKSB7XHJcbiAgJCA9ICQgfHwgd2luZG93LiQ7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwiaW1hZ2VwaWNrZXJcIixcclxuICAgIHRpdGxlOiBcIkltYWdlIHBpY2tlclwiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1pbWFnZXBpY2tlclwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gISEkLmZuLmltYWdlcGlja2VyO1xyXG4gICAgfSxcclxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImltYWdlcGlja2VyXCI7XHJcbiAgICB9LFxyXG4gICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcclxuICAgICAgICBcImltYWdlaXRlbXZhbHVlc1wiLFxyXG4gICAgICAgIFtdLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgXCJpdGVtdmFsdWVcIlxyXG4gICAgICApO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImltYWdlcGlja2VyXCIsIHtcclxuICAgICAgICBuYW1lOiBcImltYWdlTGlua1wiXHJcbiAgICAgIH0pO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcclxuICAgICAgICBcImltYWdlcGlja2VyXCIsXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgeyBuYW1lOiBcImhhc090aGVyXCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwib3RoZXJUZXh0XCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwib3B0aW9uc0NhcHRpb25cIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJvdGhlckVycm9yVGV4dFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInN0b3JlT3RoZXJzQXNDb21tZW50XCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwicmVuZGVyQXNcIiwgdmlzaWJsZTogZmFsc2UgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBcImRyb3Bkb3duXCJcclxuICAgICAgKTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJpbWFnZXBpY2tlclwiLCB7XHJcbiAgICAgICAgbmFtZTogXCJzaG93TGFiZWw6Ym9vbGVhblwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImltYWdlcGlja2VyXCIsIHtcclxuICAgICAgICBuYW1lOiBcImNob2ljZXM6aW1hZ2VpdGVtdmFsdWVzXCIsXHJcbiAgICAgICAgb25HZXRWYWx1ZTogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgICByZXR1cm4gU3VydmV5Lkl0ZW1WYWx1ZS5nZXREYXRhKG9iai5jaG9pY2VzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU2V0VmFsdWU6IGZ1bmN0aW9uKG9iaiwgdmFsdWUpIHtcclxuICAgICAgICAgIG9iai5jaG9pY2VzID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcInNlbGVjdFwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcInNlbGVjdFwiKTtcclxuICAgICAgdmFyIG9wdGlvbnMgPSAkZWwuZmluZChcIm9wdGlvblwiKTtcclxuICAgICAgdmFyIGNob2ljZXMgPSBxdWVzdGlvbi5jaG9pY2VzO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBvcHRpb25zLmxlbmd0aCAmJiBpIC0gMSA8IGNob2ljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAkKG9wdGlvbnNbaV0pLmRhdGEoXCJpbWdTcmNcIiwgY2hvaWNlc1tpIC0gMV0uaW1hZ2VMaW5rKTtcclxuICAgICAgICBvcHRpb25zW2ldLnNlbGVjdGVkID0gcXVlc3Rpb24udmFsdWUgPT0gb3B0aW9uc1tpXS52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICAkZWwuaW1hZ2VwaWNrZXIoe1xyXG4gICAgICAgIGhpZGVfc2VsZWN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dfbGFiZWw6IHF1ZXN0aW9uLnNob3dMYWJlbCxcclxuICAgICAgICBzZWxlY3RlZDogZnVuY3Rpb24ob3B0cykge1xyXG4gICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBvcHRzLnBpY2tlci5zZWxlY3RbMF0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICAkZWwuZGF0YShcInBpY2tlclwiKS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGluaXQoU3VydmV5LCB3aW5kb3cuJCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdlLXBpY2tlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTEiLCJpbXBvcnQgSW5wdXRtYXNrIGZyb20gXCJpbnB1dG1hc2tcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwibWFza2VkaXRcIixcclxuICAgIG51bWVyaWNHcm91cFNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICBudW1lcmljQXV0b0dyb3VwOiB0cnVlLFxyXG4gICAgbnVtZXJpY0RpZ2l0czogMixcclxuICAgIG51bWVyaWNEaWdpdHNPcHRpb25hbDogZmFsc2UsXHJcbiAgICBudW1lcmljUHJlZml4OiBcIiRcIixcclxuICAgIG51bWVyaWNQbGFjZWhvbGRlcjogXCIwXCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgSW5wdXRtYXNrICE9IFwidW5kZWZpbmVkXCI7XHJcbiAgICB9LFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT0gXCJtdWx0aXBsZXRleHRcIikgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpID09IFwidGV4dFwiICYmXHJcbiAgICAgICAgKHF1ZXN0aW9uLmlucHV0TWFzayAhPSBcIm5vbmVcIiB8fCBxdWVzdGlvbi5pbnB1dEZvcm1hdClcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBpc0RlZmF1bHRSZW5kZXI6IHRydWUsXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIGlmIChTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5maW5kUHJvcGVydHkoXCJ0ZXh0XCIsIFwiaW5wdXRNYXNrXCIpKSByZXR1cm47XHJcbiAgICAgIHZhciBwcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIFwiaW5wdXRGb3JtYXRcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImlucHV0TWFza1wiLFxyXG4gICAgICAgICAgZGVmYXVsdDogXCJub25lXCIsXHJcbiAgICAgICAgICBjaG9pY2VzOiBbXHJcbiAgICAgICAgICAgIFwibm9uZVwiLFxyXG4gICAgICAgICAgICBcImRhdGV0aW1lXCIsXHJcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIixcclxuICAgICAgICAgICAgXCJkZWNpbWFsXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiLFxyXG4gICAgICAgICAgICBcImlwXCJcclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIF07XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJ0ZXh0XCIsIHByb3BlcnRpZXMpO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFxyXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25jb2x1bW5cIixcclxuICAgICAgICBwcm9wZXJ0aWVzXHJcbiAgICAgICk7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJtdWx0aXBsZXRleHRpdGVtXCIsIHByb3BlcnRpZXMpO1xyXG4gICAgfSxcclxuICAgIGFwcGx5SW5wdXRNYXNrOiBmdW5jdGlvbihzdXJ2ZXlFbGVtZW50LCBlbCkge1xyXG4gICAgICB2YXIgcm9vdFdpZGdldCA9IHRoaXM7XHJcbiAgICAgIHZhciBtYXNrID1cclxuICAgICAgICBzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayAhPSBcIm5vbmVcIlxyXG4gICAgICAgICAgPyBzdXJ2ZXlFbGVtZW50LmlucHV0TWFza1xyXG4gICAgICAgICAgOiBzdXJ2ZXlFbGVtZW50LmlucHV0Rm9ybWF0O1xyXG4gICAgICB2YXIgb3B0aW9ucyA9IHt9O1xyXG4gICAgICBpZiAoc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgIT0gXCJub25lXCIpXHJcbiAgICAgICAgb3B0aW9ucy5pbnB1dEZvcm1hdCA9IHN1cnZleUVsZW1lbnQuaW5wdXRGb3JtYXQ7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgPT0gXCJjdXJyZW5jeVwiIHx8XHJcbiAgICAgICAgc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgPT0gXCJkZWNpbWFsXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgb3B0aW9ucy5ncm91cFNlcGFyYXRvciA9IHJvb3RXaWRnZXQubnVtZXJpY0dyb3VwU2VwYXJhdG9yO1xyXG4gICAgICAgIG9wdGlvbnMuYXV0b0dyb3VwID0gcm9vdFdpZGdldC5udW1lcmljQXV0b0dyb3VwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImN1cnJlbmN5XCIpIHtcclxuICAgICAgICBvcHRpb25zLmRpZ2l0cyA9IHJvb3RXaWRnZXQubnVtZXJpY0RpZ2l0cztcclxuICAgICAgICBvcHRpb25zLmRpZ2l0c09wdGlvbmFsID0gcm9vdFdpZGdldC5udW1lcmljRGlnaXRzT3B0aW9uYWw7XHJcbiAgICAgICAgb3B0aW9ucy5wcmVmaXggPSByb290V2lkZ2V0Lm51bWVyaWNQcmVmaXg7XHJcbiAgICAgICAgb3B0aW9ucy5wbGFjZWhvbGRlciA9IHJvb3RXaWRnZXQubnVtZXJpY1BsYWNlaG9sZGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImRhdGV0aW1lXCIpIHtcclxuICAgICAgICBtYXNrID0gc3VydmV5RWxlbWVudC5pbnB1dEZvcm1hdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgSW5wdXRtYXNrKG1hc2ssIG9wdGlvbnMpLm1hc2soZWwpO1xyXG5cclxuICAgICAgZWwub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHN1cnZleUVsZW1lbnQuY3VzdG9tV2lkZ2V0RGF0YS5pc05lZWRSZW5kZXIgPSB0cnVlO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIHVwZGF0ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBlbC52YWx1ZSA9XHJcbiAgICAgICAgICB0eXBlb2Ygc3VydmV5RWxlbWVudC52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiXCIgOiBzdXJ2ZXlFbGVtZW50LnZhbHVlO1xyXG4gICAgICB9O1xyXG4gICAgICBzdXJ2ZXlFbGVtZW50LnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlSGFuZGxlcjtcclxuICAgICAgdXBkYXRlSGFuZGxlcigpO1xyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSAhPSBcIm11bHRpcGxldGV4dFwiKSB7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcImlucHV0XCIpIHx8IGVsO1xyXG4gICAgICAgIHRoaXMuYXBwbHlJbnB1dE1hc2socXVlc3Rpb24sIGlucHV0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXN0aW9uLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgaXRlbSA9IHF1ZXN0aW9uLml0ZW1zW2ldO1xyXG4gICAgICAgICAgaWYgKGl0ZW0uaW5wdXRNYXNrICE9IFwibm9uZVwiIHx8IGl0ZW0uaW5wdXRGb3JtYXQpIHtcclxuICAgICAgICAgICAgdmFyIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcIiNcIiArIGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmFwcGx5SW5wdXRNYXNrKGl0ZW0sIGlucHV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcImlucHV0XCIpIHx8IGVsO1xyXG4gICAgICBpbnB1dC5pbnB1dG1hc2sucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCk7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbnB1dG1hc2suanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIklucHV0bWFza1wiLFwiY29tbW9uanMyXCI6XCJpbnB1dG1hc2tcIixcImNvbW1vbmpzXCI6XCJpbnB1dG1hc2tcIixcImFtZFwiOlwiaW5wdXRtYXNrXCJ9XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcclxuICAkID0gJCB8fCB3aW5kb3cuJDtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgbmFtZTogXCJiYXJyYXRpbmdcIixcclxuICAgIHRpdGxlOiBcIkJhciByYXRpbmdcIixcclxuICAgIGljb25OYW1lOiBcImljb24tYmFycmF0aW5nXCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiAhISQuZm4uYmFycmF0aW5nO1xyXG4gICAgfSxcclxuICAgIGRlZmF1bHRKU09OOiB7IGNob2ljZXM6IFsxLCAyLCAzLCA0LCA1XSB9LFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiYmFycmF0aW5nXCI7XHJcbiAgICB9LFxyXG4gICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcclxuICAgICAgICBcImJhcnJhdGluZ1wiLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIHsgbmFtZTogXCJoYXNPdGhlclwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIm90aGVyVGV4dFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIm9wdGlvbnNDYXB0aW9uXCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwib3RoZXJFcnJvclRleHRcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJzdG9yZU90aGVyc0FzQ29tbWVudFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInJlbmRlckFzXCIsIHZpc2libGU6IGZhbHNlIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgXCJkcm9wZG93blwiXHJcbiAgICAgICk7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwiYmFycmF0aW5nXCIsIHtcclxuICAgICAgICBuYW1lOiBcInNob3dWYWx1ZXM6Ym9vbGVhblwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImJhcnJhdGluZ1wiLCB7XHJcbiAgICAgICAgbmFtZTogXCJyYXRpbmdUaGVtZVwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IFwiZm9udGF3ZXNvbWUtc3RhcnNcIixcclxuICAgICAgICBjaG9pY2VzOiBbXHJcbiAgICAgICAgICBcImZvbnRhd2Vzb21lLXN0YXJzXCIsXHJcbiAgICAgICAgICBcImNzcy1zdGFyc1wiLFxyXG4gICAgICAgICAgXCJiYXJzLXBpbGxcIixcclxuICAgICAgICAgIFwiYmFycy0xdG8xMFwiLFxyXG4gICAgICAgICAgXCJiYXJzLW1vdmllXCIsXHJcbiAgICAgICAgICBcImJhcnMtc3F1YXJlXCIsXHJcbiAgICAgICAgICBcImJhcnMtcmV2ZXJzZWRcIixcclxuICAgICAgICAgIFwiYmFycy1ob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICBcImJvb3RzdHJhcC1zdGFyc1wiLFxyXG4gICAgICAgICAgXCJmb250YXdlc29tZS1zdGFycy1vXCJcclxuICAgICAgICBdXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICAkZWwuYmFycmF0aW5nKFwic2hvd1wiLCB7XHJcbiAgICAgICAgdGhlbWU6IHF1ZXN0aW9uLnJhdGluZ1RoZW1lLFxyXG4gICAgICAgIGluaXRpYWxSYXRpbmc6IHF1ZXN0aW9uLnZhbHVlLFxyXG4gICAgICAgIHNob3dWYWx1ZXM6IHF1ZXN0aW9uLnNob3dWYWx1ZXMsXHJcbiAgICAgICAgc2hvd1NlbGVjdGVkUmF0aW5nOiBmYWxzZSxcclxuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24odmFsdWUsIHRleHQpIHtcclxuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKGVsKVxyXG4gICAgICAgICAgLmZpbmQoXCJzZWxlY3RcIilcclxuICAgICAgICAgIC5iYXJyYXRpbmcoXCJzZXRcIiwgcXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyICRlbCA9ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XHJcbiAgICAgICRlbC5iYXJyYXRpbmcoXCJkZXN0cm95XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSwgd2luZG93LiQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcXVlcnktYmFyLXJhdGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTAiLCJmdW5jdGlvbiBpbml0KFN1cnZleSwgJCkge1xyXG4gICQgPSAkIHx8IHdpbmRvdy4kO1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcImRhdGVwaWNrZXJcIixcclxuICAgIHRpdGxlOiBcIkRhdGUgcGlja2VyXCIsXHJcbiAgICBpY29uTmFtZTogXCJpY29uLWRhdGVwaWNrZXJcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuICEhJC5mbi5kYXRlcGlja2VyO1xyXG4gICAgfSxcclxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImRhdGVwaWNrZXJcIjtcclxuICAgIH0sXHJcbiAgICBodG1sVGVtcGxhdGU6XHJcbiAgICAgIFwiPGlucHV0IGNsYXNzPSdmb3JtLWNvbnRyb2wgd2lkZ2V0LWRhdGVwaWNrZXInIHR5cGU9J3RleHQnIHN0eWxlPSd3aWR0aDogMTAwJTsnPlwiLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcclxuICAgICAgICBcImRhdGVwaWNrZXJcIixcclxuICAgICAgICBbXHJcbiAgICAgICAgICB7IG5hbWU6IFwiaW5wdXRUeXBlXCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiaW5wdXRGb3JtYXRcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJpbnB1dE1hc2tcIiwgdmlzaWJsZTogZmFsc2UgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBcInRleHRcIlxyXG4gICAgICApO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImRhdGVwaWNrZXJcIiwge1xyXG4gICAgICAgIG5hbWU6IFwiZGF0ZUZvcm1hdFwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IFwibW0vZGQveXlcIixcclxuICAgICAgICBjaG9pY2VzOiBbXHJcbiAgICAgICAgICBcIm1tL2RkL3l5XCIsXHJcbiAgICAgICAgICBcInl5LW1tLWRkXCIsXHJcbiAgICAgICAgICBcImQgTSwgeVwiLFxyXG4gICAgICAgICAgXCJkIE1NLCB5XCIsXHJcbiAgICAgICAgICBcIkRELCBkIE1NLCB5eVwiLFxyXG4gICAgICAgICAgXCInZGF5JyBkICdvZicgTU0gJ2luIHRoZSB5ZWFyJyB5eVwiXHJcbiAgICAgICAgXVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcIi53aWRnZXQtZGF0ZXBpY2tlclwiKVxyXG4gICAgICAgID8gJChlbClcclxuICAgICAgICA6ICQoZWwpLmZpbmQoXCIud2lkZ2V0LWRhdGVwaWNrZXJcIik7XHJcbiAgICAgIHZhciBwaWNrZXJXaWRnZXQgPSAkZWwuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgZGF0ZUZvcm1hdDogcXVlc3Rpb24uZGF0ZUZvcm1hdCxcclxuICAgICAgICBvcHRpb246IHtcclxuICAgICAgICAgIG1pbkRhdGU6IG51bGwsXHJcbiAgICAgICAgICBtYXhEYXRlOiBudWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24oZGF0ZVRleHQpIHtcclxuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZGF0ZVRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAocXVlc3Rpb24udmFsdWUpIHtcclxuICAgICAgICAgIHBpY2tlcldpZGdldC5kYXRlcGlja2VyKFwic2V0RGF0ZVwiLCBuZXcgRGF0ZShxdWVzdGlvbi52YWx1ZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwaWNrZXJXaWRnZXQuZGF0ZXBpY2tlcihcInNldERhdGVcIiwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjaygpO1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwiLndpZGdldC1kYXRlcGlja2VyXCIpXHJcbiAgICAgICAgPyAkKGVsKVxyXG4gICAgICAgIDogJChlbCkuZmluZChcIi53aWRnZXQtZGF0ZXBpY2tlclwiKTtcclxuICAgICAgJGVsLmRhdGVwaWNrZXIoXCJkZXN0cm95XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSwgd2luZG93LiQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcXVlcnktdWktZGF0ZXBpY2tlci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgOSIsImltcG9ydCBub1VpU2xpZGVyIGZyb20gXCJub3Vpc2xpZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcIm5vdWlzbGlkZXJcIixcclxuICAgIHRpdGxlOiBcIm5vVWlTbGlkZXJcIixcclxuICAgIGljb25OYW1lOiBcImljb24tbm91aXNsaWRlclwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIG5vVWlTbGlkZXIgIT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH0sXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJub3Vpc2xpZGVyXCI7XHJcbiAgICB9LFxyXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibm91aXNsaWRlclwiLCBbXSwgbnVsbCwgXCJlbXB0eVwiKTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcIm5vdWlzbGlkZXJcIiwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwic3RlcDpudW1iZXJcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwicmFuZ2VNaW46bnVtYmVyXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInJhbmdlTWF4Om51bWJlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogMTAwXHJcbiAgICAgICAgfVxyXG4gICAgICBdKTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlID0gKHF1ZXN0aW9uLnJhbmdlTWluK3F1ZXN0aW9uLnJhbmdlTWF4KS8yO1xyXG5cclxuICAgICAgZWwuc3R5bGUubWFyZ2luQm90dG9tID0gXCI1MHB4XCI7XHJcbiAgICAgIHZhciBzbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShlbCwge1xyXG4gICAgICAgIHN0YXJ0OiBxdWVzdGlvbi52YWx1ZSxcclxuICAgICAgICBjb25uZWN0OiBbdHJ1ZSwgZmFsc2VdLFxyXG4gICAgICAgIHN0ZXA6IHF1ZXN0aW9uLnN0ZXAsXHJcbiAgICAgICAgdG9vbHRpcHM6IHRydWUsXHJcbiAgICAgICAgcGlwczoge1xyXG4gICAgICAgICAgbW9kZTogXCJwb3NpdGlvbnNcIixcclxuICAgICAgICAgIHZhbHVlczogWzAsMjUsNTAsNzUsMTAwXSxcclxuICAgICAgICAgIGRlbnNpdHk6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICBtaW46IHF1ZXN0aW9uLnJhbmdlTWluLFxyXG4gICAgICAgICAgbWF4OiBxdWVzdGlvbi5yYW5nZU1heFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNsaWRlci5vbihcInNldFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHNsaWRlci5nZXQoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBzbGlkZXIuc2V0KHF1ZXN0aW9uLnZhbHVlKTtcclxuICAgICAgfTtcclxuICAgICAgcXVlc3Rpb24ubm9VaVNsaWRlciA9IHNsaWRlcjtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICBxdWVzdGlvbi5ub1VpU2xpZGVyLmRlc3Ryb3koKTtcclxuICAgICAgcXVlc3Rpb24ubm9VaVNsaWRlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbm91aXNsaWRlci5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibm9VaVNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJub3Vpc2xpZGVyXCIsXCJjb21tb25qc1wiOlwibm91aXNsaWRlclwiLFwiYW1kXCI6XCJub3Vpc2xpZGVyXCJ9XG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcclxuICAkID0gJCB8fCB3aW5kb3cuJDtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgbmFtZTogXCJ0YWdib3hcIixcclxuICAgIHRpdGxlOiBcIlRhZyBib3hcIixcclxuICAgIGljb25OYW1lOiBcImljb24tdGFnYm94XCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLnNlbGVjdDI7XHJcbiAgICB9LFxyXG4gICAgZGVmYXVsdEpTT046IHsgY2hvaWNlczogW1wiSXRlbSAxXCIsIFwiSXRlbSAyXCIsIFwiSXRlbSAzXCJdIH0sXHJcbiAgICBodG1sVGVtcGxhdGU6IFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnIHN0eWxlPSd3aWR0aDogMTAwJTsnPjwvc2VsZWN0PlwiLFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwidGFnYm94XCI7XHJcbiAgICB9LFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcclxuICAgICAgICBcInRhZ2JveFwiLFxyXG4gICAgICAgIFt7IG5hbWU6IFwiaGFzT3RoZXJcIiwgdmlzaWJsZTogZmFsc2UgfV0sXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBcImNoZWNrYm94XCJcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcInNlbGVjdFwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcInNlbGVjdFwiKTtcclxuICAgICAgJGVsLnNlbGVjdDIoe1xyXG4gICAgICAgIHRhZ3M6IFwidHJ1ZVwiLFxyXG4gICAgICAgIHRoZW1lOiBcImNsYXNzaWNcIlxyXG4gICAgICB9KTtcclxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRlbC52YWwocXVlc3Rpb24udmFsdWUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgIH07XHJcbiAgICAgIHZhciB1cGRhdGVDaG9pY2VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJGVsLnNlbGVjdDIoKS5lbXB0eSgpO1xyXG4gICAgICAgICRlbC5zZWxlY3QyKHtcclxuICAgICAgICAgIGRhdGE6IHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzLm1hcChmdW5jdGlvbihjaG9pY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IGNob2ljZS52YWx1ZSwgdGV4dDogY2hvaWNlLnRleHQgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHF1ZXN0aW9uLmNob2ljZXNDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVDaG9pY2VzO1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgJGVsLm9uKFwic2VsZWN0MjpzZWxlY3RcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gKHF1ZXN0aW9uLnZhbHVlIHx8IFtdKS5jb25jYXQoZS5wYXJhbXMuZGF0YS5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkZWwub24oXCJzZWxlY3QyOnVuc2VsZWN0XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSAocXVlc3Rpb24udmFsdWUgfHwgW10pLmluZGV4T2YoZS5wYXJhbXMuZGF0YS5pZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgdmFyIHZhbCA9IHF1ZXN0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgdmFsLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB1cGRhdGVDaG9pY2VzKCk7XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAkKGVsKVxyXG4gICAgICAgIC5maW5kKFwic2VsZWN0XCIpXHJcbiAgICAgICAgLm9mZihcInNlbGVjdDI6c2VsZWN0XCIpXHJcbiAgICAgICAgLnNlbGVjdDIoXCJkZXN0cm95XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSwgd2luZG93LiQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZWxlY3QyLXRhZ2JveC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyIsImltcG9ydCBTaWduYXR1cmVQYWQgZnJvbSBcInNpZ25hdHVyZV9wYWRcIjtcclxuXHJcbmZ1bmN0aW9uIHJlc2l6ZUNhbnZhcyhjYW52YXMpIHtcclxuICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgdmFyIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xyXG4gIHZhciBiYWNraW5nU3RvcmVSYXRpbyA9XHJcbiAgICBjb250ZXh0LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgIGNvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgIGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgIGNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgMTtcclxuXHJcbiAgdmFyIHJhdGlvID0gZGV2aWNlUGl4ZWxSYXRpbyAvIGJhY2tpbmdTdG9yZVJhdGlvO1xyXG5cclxuICB2YXIgb2xkV2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgdmFyIG9sZEhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gIGNhbnZhcy53aWR0aCA9IG9sZFdpZHRoICogcmF0aW87XHJcbiAgY2FudmFzLmhlaWdodCA9IG9sZEhlaWdodCAqIHJhdGlvO1xyXG5cclxuICBjYW52YXMuc3R5bGUud2lkdGggPSBvbGRXaWR0aCArIFwicHhcIjtcclxuICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gb2xkSGVpZ2h0ICsgXCJweFwiO1xyXG5cclxuICBjb250ZXh0LnNjYWxlKHJhdGlvLCByYXRpbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwic2lnbmF0dXJlcGFkXCIsXHJcbiAgICB0aXRsZTogXCJTaWduYXR1cmUgcGFkXCIsXHJcbiAgICBpY29uTmFtZTogXCJpY29uLXNpZ25hdHVyZXBhZFwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIFNpZ25hdHVyZVBhZCAhPSBcInVuZGVmaW5lZFwiO1xyXG4gICAgfSxcclxuICAgIHBlbkNvbG9yOiBcIiMxYWIzOTRcIixcclxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInNpZ25hdHVyZXBhZFwiO1xyXG4gICAgfSxcclxuICAgIGh0bWxUZW1wbGF0ZTpcclxuICAgICAgXCI8ZGl2IGNsYXNzPSdzanNfc3BfY29udGFpbmVyJz48ZGl2PjxjYW52YXM+PC9jYW52YXM+PC9kaXY+PGRpdiBjbGFzcz0nc2pzX3NwX2NvbnRyb2xzJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J3Nqc19zcF9jbGVhcicgdGl0bGU9J0NsZWFyJz7inJY8L2J1dHRvbj48L2Rpdj48L2Rpdj48c3R5bGU+LnNqc19zcF9jb250YWluZXIgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH0gLnNqc19zcF9jb250cm9scyB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgYm90dG9tOiAwOyB9IC5zanNfc3BfY29udHJvbHMgPiBidXR0b24geyB1c2VyLXNlbGVjdDogbm9uZTsgfTwvc3R5bGU+XCIsXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic2lnbmF0dXJlcGFkXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwic2lnbmF0dXJlcGFkXCIsIFtcclxuICAgICAgICB7IG5hbWU6IFwiYWxsb3dDbGVhcjpib29sZWFuXCIsIGRlZmF1bHQ6IHRydWUgfSxcclxuICAgICAgICB7IG5hbWU6IFwid2lkdGg6bnVtYmVyXCIsIGRlZmF1bHQ6IDMwMCB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJoZWlnaHQ6bnVtYmVyXCIsIGRlZmF1bHQ6IDIwMCB9XHJcbiAgICAgIF0pO1xyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xyXG4gICAgICB2YXIgY2FudmFzID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XHJcbiAgICAgIHZhciBzaWduYXR1cmVQYWQgPSBuZXcgU2lnbmF0dXJlUGFkKGNhbnZhcyk7XHJcbiAgICAgIGlmIChxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XHJcbiAgICAgICAgc2lnbmF0dXJlUGFkLm9mZigpO1xyXG4gICAgICB9XHJcbiAgICAgIHNpZ25hdHVyZVBhZC5wZW5Db2xvciA9IHJvb3RXaWRnZXQucGVuQ29sb3I7XHJcbiAgICAgIHNpZ25hdHVyZVBhZC5vbkVuZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgpO1xyXG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZGF0YTtcclxuICAgICAgfTtcclxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHF1ZXN0aW9uLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBxdWVzdGlvbi5oZWlnaHQ7XHJcbiAgICAgICAgcmVzaXplQ2FudmFzKGNhbnZhcyk7XHJcbiAgICAgICAgc2lnbmF0dXJlUGFkLmZyb21EYXRhVVJMKFxyXG4gICAgICAgICAgcXVlc3Rpb24udmFsdWUgfHwgXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQXCJcclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XHJcbiAgICAgIHF1ZXN0aW9uLnNpZ25hdHVyZVBhZCA9IHNpZ25hdHVyZVBhZDtcclxuICAgICAgdmFyIGJ1dHRvbkVsID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJidXR0b25cIilbMF07XHJcbiAgICAgIGlmIChxdWVzdGlvbi5hbGxvd0NsZWFyICYmICFxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XHJcbiAgICAgICAgYnV0dG9uRWwub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidXR0b25FbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJ1dHRvbkVsKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgaWYgKHF1ZXN0aW9uLnNpZ25hdHVyZVBhZCkge1xyXG4gICAgICAgIHF1ZXN0aW9uLnNpZ25hdHVyZVBhZC5vZmYoKTtcclxuICAgICAgfVxyXG4gICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NpZ25hdHVyZV9wYWQuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU2lnbmF0dXJlUGFkXCIsXCJjb21tb25qczJcIjpcInNpZ25hdHVyZV9wYWRcIixcImNvbW1vbmpzXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJhbWRcIjpcInNpZ25hdHVyZV9wYWRcIn1cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gXCJzb3J0YWJsZWpzXCI7XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcInNvcnRhYmxlbGlzdFwiLFxyXG4gICAgdGl0bGU6IFwiU29ydGFibGUgbGlzdFwiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1zb3J0YWJsZWxpc3RcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBTb3J0YWJsZSAhPSBcInVuZGVmaW5lZFwiO1xyXG4gICAgfSxcclxuICAgIGRlZmF1bHRKU09OOiB7IGNob2ljZXM6IFtcIkl0ZW0gMVwiLCBcIkl0ZW0gMlwiLCBcIkl0ZW0gM1wiXSB9LFxyXG4gICAgYXJlYVN0eWxlOiBcImJvcmRlcjogMXB4IHNvbGlkICMxYWIzOTQ7IHdpZHRoOjEwMCU7IG1pbi1oZWlnaHQ6NTBweFwiLFxyXG4gICAgaXRlbVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6IzFhYjM5NDtjb2xvcjojZmZmO21hcmdpbjo1cHg7cGFkZGluZzoxMHB4O1wiLFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwic29ydGFibGVsaXN0XCI7XHJcbiAgICB9LFxyXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFxyXG4gICAgICAgIFwic29ydGFibGVsaXN0XCIsXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgeyBuYW1lOiBcImhhc090aGVyXCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwic3RvcmVPdGhlcnNBc0NvbW1lbnRcIiwgdmlzaWJsZTogZmFsc2UgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBcImNoZWNrYm94XCJcclxuICAgICAgKTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJzb3J0YWJsZWxpc3RcIiwge1xyXG4gICAgICAgIG5hbWU6IFwiZW1wdHlUZXh0XCIsXHJcbiAgICAgICAgZGVmYXVsdDogXCJNb3ZlIGl0ZW1zIGhlcmUuXCJcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgcm9vdFdpZGdldCA9IHRoaXM7XHJcbiAgICAgIGVsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgIHZhciByZXN1bHRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHZhciBlbXB0eUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIHZhciBzb3VyY2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHJlc3VsdEVsLnN0eWxlLmNzc1RleHQgPSByb290V2lkZ2V0LmFyZWFTdHlsZTtcclxuICAgICAgZW1wdHlFbC5pbm5lckhUTUwgPSBxdWVzdGlvbi5lbXB0eVRleHQ7XHJcbiAgICAgIHJlc3VsdEVsLmFwcGVuZENoaWxkKGVtcHR5RWwpO1xyXG4gICAgICBzb3VyY2VFbC5zdHlsZS5jc3NUZXh0ID0gcm9vdFdpZGdldC5hcmVhU3R5bGU7XHJcbiAgICAgIHNvdXJjZUVsLnN0eWxlLm1hcmdpblRvcCA9IFwiMTBweFwiO1xyXG4gICAgICBlbC5hcHBlbmRDaGlsZChyZXN1bHRFbCk7XHJcbiAgICAgIGVsLmFwcGVuZENoaWxkKHNvdXJjZUVsKTtcclxuICAgICAgdmFyIGhhc1ZhbHVlSW5SZXN1bHRzID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgdmFyIHJlcyA9IHF1ZXN0aW9uLnZhbHVlO1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZXMpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChyZXNbaV0gPT0gdmFsKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9O1xyXG4gICAgICB2YXIgaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUgPSBmYWxzZTtcclxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHJlc3VsdEVsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgcmVzdWx0RWwuYXBwZW5kQ2hpbGQoZW1wdHlFbCk7XHJcbiAgICAgICAgc291cmNlRWwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB2YXIgd2FzSW5SZXN1bHRzID0gZmFsc2U7XHJcbiAgICAgICAgcXVlc3Rpb24uYWN0aXZlQ2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uKGNob2ljZSkge1xyXG4gICAgICAgICAgdmFyIGluUmVzdXRscyA9IGhhc1ZhbHVlSW5SZXN1bHRzKGNob2ljZS52YWx1ZSk7XHJcbiAgICAgICAgICB3YXNJblJlc3VsdHMgPSB3YXNJblJlc3VsdHMgfHwgaW5SZXN1dGxzO1xyXG4gICAgICAgICAgdmFyIHNyY0VsID0gaW5SZXN1dGxzID8gcmVzdWx0RWwgOiBzb3VyY2VFbDtcclxuICAgICAgICAgIHZhciBuZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBuZXdFbC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICBcIjxkaXYgc3R5bGU9J1wiICtcclxuICAgICAgICAgICAgcm9vdFdpZGdldC5pdGVtU3R5bGUgK1xyXG4gICAgICAgICAgICBcIic+XCIgK1xyXG4gICAgICAgICAgICBjaG9pY2UudGV4dCArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICBuZXdFbC5kYXRhc2V0W1widmFsdWVcIl0gPSBjaG9pY2UudmFsdWU7XHJcbiAgICAgICAgICBzcmNFbC5hcHBlbmRDaGlsZChuZXdFbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZW1wdHlFbC5zdHlsZS5kaXNwbGF5ID0gd2FzSW5SZXN1bHRzID8gXCJub25lXCIgOiBcIlwiO1xyXG4gICAgICB9O1xyXG4gICAgICBxdWVzdGlvbi5yZXN1bHRFbCA9IFNvcnRhYmxlLmNyZWF0ZShyZXN1bHRFbCwge1xyXG4gICAgICAgIGFuaW1hdGlvbjogMTUwLFxyXG4gICAgICAgIGdyb3VwOiBxdWVzdGlvbi5uYW1lLFxyXG4gICAgICAgIG9uU29ydDogZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICBpZiAocmVzdWx0RWwuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGVtcHR5RWwuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRFbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0RWwuY2hpbGRyZW5baV0uZGF0YXNldC52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJlc3VsdEVsLmNoaWxkcmVuW2ldLmRhdGFzZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHJlc3VsdDtcclxuICAgICAgICAgIGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcXVlc3Rpb24uc291cmNlRWwgPSBTb3J0YWJsZS5jcmVhdGUoc291cmNlRWwsIHtcclxuICAgICAgICBhbmltYXRpb246IDE1MCxcclxuICAgICAgICBncm91cDogcXVlc3Rpb24ubmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgcXVlc3Rpb24ucmVzdWx0RWwuZGVzdHJveSgpO1xyXG4gICAgICBxdWVzdGlvbi5zb3VyY2VFbC5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc29ydGFibGVqcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJTb3J0YWJsZVwiLFwiY29tbW9uanMyXCI6XCJzb3J0YWJsZWpzXCIsXCJjb21tb25qc1wiOlwic29ydGFibGVqc1wiLFwiYW1kXCI6XCJzb3J0YWJsZWpzXCJ9XG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwiZWRpdG9yXCIsXHJcbiAgICB0aXRsZTogXCJFZGl0b3JcIixcclxuICAgIGljb25OYW1lOiBcImljb24tZWRpdG9yXCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgQ0tFRElUT1IgIT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH0sXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJlZGl0b3JcIjtcclxuICAgIH0sXHJcbiAgICBodG1sVGVtcGxhdGU6XHJcbiAgICAgIFwiPHRleHRhcmVhIHJvd3M9JzEwJyBjb2xzPSc4MCcgc3R5bGU6IHt3aWR0aDonMTAwJSd9PjwvdGV4dGFyZWE+XCIsXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiZWRpdG9yXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImVkaXRvclwiLCB7XHJcbiAgICAgICAgbmFtZTogXCJoZWlnaHRcIixcclxuICAgICAgICBkZWZhdWx0OiAzMDBcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICBDS0VESVRPUi5lZGl0b3JDb25maWcgPSBmdW5jdGlvbihjb25maWcpIHtcclxuICAgICAgICBjb25maWcubGFuZ3VhZ2UgPSBcImVzXCI7XHJcbiAgICAgICAgY29uZmlnLmhlaWdodCA9IHF1ZXN0aW9uLmhlaWdodDtcclxuICAgICAgICBjb25maWcudG9vbGJhckNhbkNvbGxhcHNlID0gdHJ1ZTtcclxuICAgICAgfTtcclxuICAgICAgdmFyIGVkaXRvciA9IENLRURJVE9SLnJlcGxhY2UoZWwpO1xyXG4gICAgICB2YXIgaXNWYWx1ZUNoYW5naW5nID0gZmFsc2U7XHJcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaXNWYWx1ZUNoYW5naW5nKSByZXR1cm47XHJcbiAgICAgICAgZWRpdG9yLnNldERhdGEocXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgICBlZGl0b3Iub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaXNWYWx1ZUNoYW5naW5nID0gdHJ1ZTtcclxuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGVkaXRvci5nZXREYXRhKCk7XHJcbiAgICAgICAgaXNWYWx1ZUNoYW5naW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge31cclxuICB9O1xyXG5cclxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jay1lZGl0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxNCIsImZ1bmN0aW9uIGluaXQoU3VydmV5LCAkKSB7XHJcbiAgJCA9ICQgfHwgd2luZG93LiQ7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwiYXV0b2NvbXBsZXRlXCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiAhISQuZm4uZWFzeUF1dG9jb21wbGV0ZTtcclxuICAgIH0sXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJ0ZXh0XCI7XHJcbiAgICB9LFxyXG4gICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZmluZFByb3BlcnR5KFwidGV4dFwiLCBcImNob2ljZXNcIikgIT09IG51bGwgfHxcclxuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5maW5kUHJvcGVydHkoXCJ0ZXh0XCIsIFwiY2hvaWNlc0J5VXJsXCIpICE9PSBudWxsXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInRleHRcIiwge1xyXG4gICAgICAgIG5hbWU6IFwiY2hvaWNlczppdGVtdmFsdWVzXCIsXHJcbiAgICAgICAgb25HZXRWYWx1ZTogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgICByZXR1cm4gU3VydmV5Lkl0ZW1WYWx1ZS5nZXREYXRhKG9iai5jaG9pY2VzIHx8IFtdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU2V0VmFsdWU6IGZ1bmN0aW9uKG9iaiwgdmFsdWUpIHtcclxuICAgICAgICAgIGlmICghb2JqLmNob2ljZXMpIHtcclxuICAgICAgICAgICAgb2JqLmNob2ljZXMgPSBvYmouY3JlYXRlSXRlbVZhbHVlcyhcImNob2ljZXNcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvYmouY2hvaWNlcyA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwidGV4dFwiLCB7XHJcbiAgICAgICAgbmFtZTogXCJjaG9pY2VzQnlVcmw6cmVzdGZ1bGxcIixcclxuICAgICAgICBjbGFzc05hbWU6IFwiQ2hvaWNlc1Jlc3RmdWxsXCIsXHJcbiAgICAgICAgb25HZXRWYWx1ZTogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgICByZXR1cm4gb2JqICYmIG9iai5jaG9pY2VzQnlVcmwgJiYgb2JqLmNob2ljZXNCeVVybC5nZXREYXRhKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblNldFZhbHVlOiBmdW5jdGlvbihvYmosIHZhbHVlKSB7XHJcbiAgICAgICAgICBpZiAoIW9iai5jaG9pY2VzQnlVcmwpIHtcclxuICAgICAgICAgICAgb2JqLmNob2ljZXNCeVVybCA9IG5ldyBTdXJ2ZXkuQ2hvaWNlc1Jlc3RmdWxsKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvYmouY2hvaWNlc0J5VXJsLnNldERhdGEodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJpbnB1dFwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcImlucHV0XCIpO1xyXG4gICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICBkYXRhOiAocXVlc3Rpb24uY2hvaWNlcyB8fCBbXSkubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgIHJldHVybiBpdGVtLmdldERhdGEoKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBhZGp1c3RXaWR0aDogZmFsc2UsXHJcbiAgICAgICAgbGlzdDoge1xyXG4gICAgICAgICAgc29ydDoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWF0Y2g6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IHF1ZXN0aW9uLnBsYWNlaG9sZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICghIXF1ZXN0aW9uLmNob2ljZXNCeVVybCkge1xyXG4gICAgICAgIG9wdGlvbnMudXJsID0gZnVuY3Rpb24ocGhyYXNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcXVlc3Rpb24uY2hvaWNlc0J5VXJsLnVybDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9wdGlvbnMuZ2V0VmFsdWUgPSBxdWVzdGlvbi5jaG9pY2VzQnlVcmwudmFsdWVOYW1lO1xyXG4gICAgICAgIC8vIG9wdGlvbnMuYWpheFNldHRpbmdzID0ge1xyXG4gICAgICAgIC8vICAgZGF0YVR5cGU6IFwianNvbnBcIlxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgIH1cclxuICAgICAgJGVsLmVhc3lBdXRvY29tcGxldGUob3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAvLyB2YXIgJGVsID0gJChlbCkuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAvLyAkZWwuYXV0b2NvbXBsZXRlKFwiZGVzdHJveVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcInR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXksIHdpbmRvdy4kKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWFzeS1hdXRvY29tcGxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxMyIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIHNldHRpbmdzOiB7XHJcbiAgICAgIHJhZGlvZ3JvdXA6IHtcclxuICAgICAgICByb290Q2xhc3M6IFwicHJldHR5IHAtZGVmYXVsdCBwLXJvdW5kXCIsXHJcbiAgICAgICAgaW5wdXRUeXBlOiBcInJhZGlvXCIsXHJcbiAgICAgICAgYWRkT246IFwiXCIsXHJcbiAgICAgICAgdGl0bGVDbGFzczogXCJzdGF0ZSBwLXN1Y2Nlc3NcIlxyXG4gICAgICB9LFxyXG4gICAgICBjaGVja2JveDoge1xyXG4gICAgICAgIHJvb3RDbGFzczogXCJwcmV0dHkgcC1kZWZhdWx0XCIsXHJcbiAgICAgICAgaW5wdXRUeXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgYWRkT246IFwiXCIsXHJcbiAgICAgICAgdGl0bGVDbGFzczogXCJzdGF0ZSBwLXN1Y2Nlc3NcIlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmFtZTogXCJwcmV0dHktY2hlY2tib3hcIixcclxuICAgIGFjdGl2YXRlZEJ5OiBcInByb3BlcnR5XCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgaHJlZiA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZVtcImhyZWZcIl07XHJcbiAgICAgICAgaWYgKCEhaHJlZiAmJiBocmVmLmluZGV4T2YoXCJwcmV0dHktY2hlY2tib3hcIikgIT0gLTEpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxmaWVsZHNldD48L2ZpZWxkc2V0PlwiLFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHZhciBpc0ZpdEJ5VHlwZSA9XHJcbiAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInJhZGlvZ3JvdXBcIiB8fFxyXG4gICAgICAgIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJjaGVja2JveFwiO1xyXG4gICAgICBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09PSBcInByb3BlcnR5XCIpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9uW1wicmVuZGVyQXNcIl0gPT09IFwicHJldHR5Y2hlY2tib3hcIiAmJiBpc0ZpdEJ5VHlwZTtcclxuICAgICAgaWYgKHdpZGdldC5hY3RpdmF0ZWRCeSA9PT0gXCJ0eXBlXCIpIHJldHVybiBpc0ZpdEJ5VHlwZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgaWYgKCF0aGlzLndpZGdldElzTG9hZGVkKCkpIHJldHVybjtcclxuICAgICAgd2lkZ2V0LmFjdGl2YXRlZEJ5ID0gYWN0aXZhdGVkQnk7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLnJlbW92ZVByb3BlcnR5KFwicmFkaW9ncm91cFwiLCBcInJlbmRlckFzXCIpO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5yZW1vdmVQcm9wZXJ0eShcImNoZWNrYm94XCIsIFwicmVuZGVyQXNcIik7XHJcbiAgICAgIGlmIChhY3RpdmF0ZWRCeSA9PT0gXCJwcm9wZXJ0eVwiKSB7XHJcbiAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJyYWRpb2dyb3VwXCIsIHtcclxuICAgICAgICAgIG5hbWU6IFwicmVuZGVyQXNcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IFwic3RhbmRhcmRcIixcclxuICAgICAgICAgIGNob2ljZXM6IFtcInN0YW5kYXJkXCIsIFwicHJldHR5Y2hlY2tib3hcIl1cclxuICAgICAgICB9KTtcclxuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImNoZWNrYm94XCIsIHtcclxuICAgICAgICAgIG5hbWU6IFwicmVuZGVyQXNcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IFwic3RhbmRhcmRcIixcclxuICAgICAgICAgIGNob2ljZXM6IFtcInN0YW5kYXJkXCIsIFwicHJldHR5Y2hlY2tib3hcIl1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGlzRGVmYXVsdFJlbmRlcjogZmFsc2UsXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciBpdGVtSW5wdXRzID0ge307XHJcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5zZXR0aW5nc1txdWVzdGlvbi5nZXRUeXBlKCldO1xyXG4gICAgICB2YXIgaW5DaGFuZ2VIYW5kbGVyID0gZmFsc2U7XHJcbiAgICAgIHZhciBjaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpbkNoYW5nZUhhbmRsZXIgPSB0cnVlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHNbMF0udGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJjaGVja2JveFwiKSB7XHJcbiAgICAgICAgICAgIHZhciBxVmFsdWUgPSBxdWVzdGlvbi52YWx1ZSB8fCBbXTtcclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1swXS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgIGlmIChxVmFsdWUuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBxVmFsdWUucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChxVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBxVmFsdWUuc3BsaWNlKHFWYWx1ZS5pbmRleE9mKHZhbHVlKSwgMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gcVZhbHVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgaW5DaGFuZ2VIYW5kbGVyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB2YXIgaXRlbVdpZHRoID1cclxuICAgICAgICBxdWVzdGlvbi5jb2xDb3VudCA+IDAgPyAxMDAgLyBxdWVzdGlvbi5jb2xDb3VudCArIFwiJVwiIDogXCJcIjtcclxuICAgICAgcXVlc3Rpb24uY2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uKGNob2ljZUl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgdmFyIGl0ZW1Sb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpdGVtUm9vdC5jbGFzc05hbWUgPSBcInN2X2N3X3ByZXR0eV9jaGVja2JveF9cIiArIHF1ZXN0aW9uLmdldFR5cGUoKTtcclxuICAgICAgICBpdGVtUm9vdC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICBpdGVtUm9vdC5zdHlsZS53aWR0aCA9IGl0ZW1XaWR0aDtcclxuICAgICAgICB2YXIgY29udHJvbFJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRyb2xSb290LmNsYXNzTmFtZSA9IG9wdGlvbnMucm9vdENsYXNzO1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dC50eXBlID0gb3B0aW9ucy5pbnB1dFR5cGU7XHJcbiAgICAgICAgaW5wdXQubmFtZSA9XHJcbiAgICAgICAgICBxdWVzdGlvbi5uYW1lICsgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJjaGVja2JveFwiID8gXCJcIiArIGluZGV4IDogXCJcIik7XHJcbiAgICAgICAgaW5wdXQub25jaGFuZ2UgPSBjaGFuZ2VIYW5kbGVyO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gY2hvaWNlSXRlbS52YWx1ZTtcclxuICAgICAgICB2YXIgdGl0bGVSb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aXRsZVJvb3QuY2xhc3NOYW1lID0gb3B0aW9ucy50aXRsZUNsYXNzO1xyXG4gICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNob2ljZUl0ZW0udGV4dDtcclxuICAgICAgICB0aXRsZVJvb3QuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgICAgIGNvbnRyb2xSb290LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICBjb250cm9sUm9vdC5hcHBlbmRDaGlsZCh0aXRsZVJvb3QpO1xyXG4gICAgICAgIGlmICghIW9wdGlvbnMuYWRkT24pIHtcclxuICAgICAgICAgIHRpdGxlUm9vdC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIG9wdGlvbnMuYWRkT24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtUm9vdC5hcHBlbmRDaGlsZChjb250cm9sUm9vdCk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoaXRlbVJvb3QpO1xyXG5cclxuICAgICAgICBpdGVtSW5wdXRzW2Nob2ljZUl0ZW0udmFsdWVdID0gaW5wdXQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24obmV3VmFsdWUpIHtcclxuICAgICAgICBpZiAoIWluQ2hhbmdlSGFuZGxlcikge1xyXG4gICAgICAgICAgdmFyIGNoZWNrZWRJdGVtcyA9IG5ld1ZhbHVlIHx8IFtdO1xyXG4gICAgICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJyYWRpb2dyb3VwXCIpIHtcclxuICAgICAgICAgICAgY2hlY2tlZEl0ZW1zID0gW25ld1ZhbHVlXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIE9iamVjdC52YWx1ZXMoaXRlbUlucHV0cykuZm9yRWFjaChmdW5jdGlvbihpbnB1dEl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrZWRJdGVtcy5pbmRleE9mKGlucHV0SXRlbS52YWx1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgaW5wdXRJdGVtLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpbnB1dEl0ZW0ucmVtb3ZlQXR0cmlidXRlKFwiY2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKHF1ZXN0aW9uLnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwicHJvcGVydHlcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wcmV0dHktY2hlY2tib3guanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA4IiwidmFyIFNsaWRlciA9IHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgbmFtZTogXCJib290c3RyYXBzbGlkZXJcIixcclxuICAgIHRpdGxlOiBcIkJvb3RzdHJhcCBTbGlkZXJcIixcclxuICAgIGljb25OYW1lOiBcImljb24tYm9vdHN0cmFwLXNsaWRlclwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIFNsaWRlciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH0sXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJib290c3RyYXBzbGlkZXJcIjtcclxuICAgIH0sXHJcbiAgICBodG1sVGVtcGxhdGU6IFwiPGRpdj48L2Rpdj5cIixcclxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJib290c3RyYXBzbGlkZXJcIiwgW10sIG51bGwsIFwiZW1wdHlcIik7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJib290c3RyYXBzbGlkZXJcIiwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwic3RlcDpudW1iZXJcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwicmFuZ2VNaW46bnVtYmVyXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInJhbmdlTWF4Om51bWJlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogMTAwXHJcbiAgICAgICAgfVxyXG4gICAgICBdKTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciBpbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICBpbnB1dEVsLmlkID0gcXVlc3Rpb24uaWQ7XHJcbiAgICAgIGlucHV0RWwudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVyLWlkXCIsIHF1ZXN0aW9uLm5hbWUgKyBcIl9cIiArIHF1ZXN0aW9uLmlkKTtcclxuICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlci1taW5cIiwgcXVlc3Rpb24ucmFuZ2VNaW4pO1xyXG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVyLW1heFwiLCBxdWVzdGlvbi5yYW5nZU1heCk7XHJcbiAgICAgIGlucHV0RWwuc2V0QXR0cmlidXRlKFwiZGF0YS1zbGlkZXItc3RlcFwiLCBxdWVzdGlvbi5zdGVwKTtcclxuICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJkYXRhLXNsaWRlci12YWx1ZVwiLFxyXG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlIHx8IHF1ZXN0aW9uLnJhbmdlTWluXHJcbiAgICAgICk7XHJcbiAgICAgIGVsLmFwcGVuZENoaWxkKGlucHV0RWwpO1xyXG4gICAgICB2YXIgc2xpZGVyID0gbmV3IFNsaWRlcihpbnB1dEVsLCB7XHJcbiAgICAgICAgaWQ6IHF1ZXN0aW9uLm5hbWUgKyBcIl9cIiArIHF1ZXN0aW9uLmlkLFxyXG4gICAgICAgIG1pbjogcXVlc3Rpb24ucmFuZ2VNaW4sXHJcbiAgICAgICAgbWF4OiBxdWVzdGlvbi5yYW5nZU1heCxcclxuICAgICAgICBzdGVwOiBxdWVzdGlvbi5zdGVwLFxyXG4gICAgICAgIHZhbHVlOiBxdWVzdGlvbi52YWx1ZSB8fCBxdWVzdGlvbi5yYW5nZU1pblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNsaWRlci5vbihcImNoYW5nZVwiLCBmdW5jdGlvbih2YWx1ZU9iaikge1xyXG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gc2xpZGVyLmdldFZhbHVlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2xpZGVyLnNldFZhbHVlKHF1ZXN0aW9uLnZhbHVlIHx8IHF1ZXN0aW9uLnJhbmdlTWluKTtcclxuICAgICAgfTtcclxuICAgICAgcXVlc3Rpb24uYm9vdHN0cmFwU2xpZGVyID0gc2xpZGVyO1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHF1ZXN0aW9uLmJvb3RzdHJhcFNsaWRlci5kZXN0cm95KCk7XHJcbiAgICAgIHF1ZXN0aW9uLmJvb3RzdHJhcFNsaWRlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYm9vdHN0cmFwLXNsaWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMThfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJTbGlkZXJcIixcImNvbW1vbmpzMlwiOlwiYm9vdHN0cmFwLXNsaWRlclwiLFwiY29tbW9uanNcIjpcImJvb3RzdHJhcC1zbGlkZXJcIixcImFtZFwiOlwiYm9vdHN0cmFwLXNsaWRlclwifVxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGljaGVjayB9IGZyb20gXCIuL2ljaGVjay5qc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNlbGVjdDIgfSBmcm9tIFwiLi9zZWxlY3QyLmpzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW1hZ2VwaWNrZXIgfSBmcm9tIFwiLi9pbWFnZS1waWNrZXIuanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnB1dG1hc2sgfSBmcm9tIFwiLi9pbnB1dG1hc2suanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBqcXVlcnliYXJyYXRpbmcgfSBmcm9tIFwiLi9qcXVlcnktYmFyLXJhdGluZy5qc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGpxdWVyeXVpZGF0ZXBpY2tlciB9IGZyb20gXCIuL2pxdWVyeS11aS1kYXRlcGlja2VyLmpzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbm91aXNsaWRlciB9IGZyb20gXCIuL25vdWlzbGlkZXIuanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzZWxlY3QydGFnYm94IH0gZnJvbSBcIi4vc2VsZWN0Mi10YWdib3guanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzaWduYXR1cmVwYWQgfSBmcm9tIFwiLi9zaWduYXR1cmVfcGFkLmpzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc29ydGFibGVqcyB9IGZyb20gXCIuL3NvcnRhYmxlanMuanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBja2VkaXRvciB9IGZyb20gXCIuL2NrLWVkaXRvci5qc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGF1dG9jb21wbGV0ZSB9IGZyb20gXCIuL2Vhc3ktYXV0b2NvbXBsZXRlLmpzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJldHR5Y2hlY2tib3ggfSBmcm9tIFwiLi9wcmV0dHktY2hlY2tib3guanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBib290c3RyYXBzbGlkZXIgfSBmcm9tIFwiLi9ib290c3RyYXAtc2xpZGVyLmpzXCI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N1cnZleWpzLXdpZGdldHMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=