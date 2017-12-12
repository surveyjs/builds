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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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
          name: "rangeMin:number",
          default: 0
        },
        {
          name: "rangeMax:number",
          default: 100
        },
        {
          name: "defaultRangeMin:number",
          default: 30
        },
        {
          name: "defaultRangeMax:number",
          default: 70
        }
      ]);
    },
    afterRender: function(question, el) {
      var startValue = question.value;
      if (!startValue || startValue.length != 2) {
        startValue = [question.defaultRangeMin, question.defaultRangeMax];
      }
      if (startValue[0] < question.rangeMin) startValue[0] = question.rangeMin;
      if (startValue[0] > question.rangeMax) startValue[0] = question.rangeMax;
      if (startValue[1] < startValue[0]) startValue[1] = startValue[0];
      if (startValue[1] > question.rangeMax) startValue[1] = question.rangeMax;
      question.value = startValue;

      el.style.marginBottom = "50px";
      var slider = __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a.create(el, {
        start: startValue,
        connect: true,
        pips: {
          mode: "steps",
          stepped: true,
          density: 4
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
      if (question.allowClear) {
        el.children[1].children[0].onclick = function() {
          signaturePad.clear();
        };
      } else {
        el.children[1].children[0].remove();
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
    areaStyle: "border: 1px solid #1ab394; width:100%; minHeight:50px",
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
      __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create($(resultEl)[0], {
        animation: 150,
        group: {
          name: "top3",
          pull: true,
          put: true
        },
        onSort: function(evt) {
          var result = [];
          if (evt.to.children.length === 1) {
            emptyEl.style.display = "";
          } else {
            emptyEl.style.display = "none";
            for (var i = 1; i < evt.to.children.length; i++) {
              result.push(evt.to.children[i].dataset.value);
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
          name: "top3",
          pull: true,
          put: true
        }
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
    title: "Autocomplete",
    iconName: "icon-autocomplete",
    widgetIsLoaded: function() {
      return typeof $ === "function" && !!$.fn.easyAutocomplete;
    },
    defaultJSON: {},
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
          return ItemValue.getData(obj.choices);
        },
        onSetValue: function(obj, value) {
          obj.choices = value;
        }
      });
      Survey.JsonObject.metaData.addProperty("text", {
        name: "choicesByUrl:restfull",
        className: "ChoicesRestfull",
        onGetValue: function(obj) {
          return obj.choicesByUrl.getData();
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
        data: question.choices,
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

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
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














/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhNzE5OWZlMTJkODMzMmZkZjQwNyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIklucHV0bWFza1wiLFwiY29tbW9uanMyXCI6XCJpbnB1dG1hc2tcIixcImNvbW1vbmpzXCI6XCJpbnB1dG1hc2tcIixcImFtZFwiOlwiaW5wdXRtYXNrXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcXVlcnktYmFyLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5LXVpLWRhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vdWlzbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm5vVWlTbGlkZXJcIixcImNvbW1vbmpzMlwiOlwibm91aXNsaWRlclwiLFwiY29tbW9uanNcIjpcIm5vdWlzbGlkZXJcIixcImFtZFwiOlwibm91aXNsaWRlclwifSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi10YWdib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpZ25hdHVyZV9wYWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlNpZ25hdHVyZVBhZFwiLFwiY29tbW9uanMyXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJjb21tb25qc1wiOlwic2lnbmF0dXJlX3BhZFwiLFwiYW1kXCI6XCJzaWduYXR1cmVfcGFkXCJ9Iiwid2VicGFjazovLy8uL3NyYy9zb3J0YWJsZWpzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJTb3J0YWJsZVwiLFwiY29tbW9uanMyXCI6XCJzb3J0YWJsZWpzXCIsXCJjb21tb25qc1wiOlwic29ydGFibGVqc1wiLFwiYW1kXCI6XCJzb3J0YWJsZWpzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9jay1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vhc3ktYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlqcy13aWRnZXRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsK0M7Ozs7Ozs7QUNBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0JBQW9COztBQUVsRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDL0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNsR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxvQkFBb0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFdBQVcsNENBQTRDO0FBQ3ZELFdBQVcsbUNBQW1DO0FBQzlDLFdBQVcsb0NBQW9DO0FBQy9DLFdBQVcseUNBQXlDO0FBQ3BELFdBQVcseUNBQXlDO0FBQ3BELFdBQVcsK0NBQStDO0FBQzFELFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsOENBQThDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN6RUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3BIQSwrQzs7Ozs7OztBQ0FBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZDQUE2QztBQUN4RCxXQUFXLG1DQUFtQztBQUM5QyxXQUFXLG9DQUFvQztBQUMvQyxXQUFXLHlDQUF5QztBQUNwRCxXQUFXLHlDQUF5QztBQUNwRCxXQUFXLCtDQUErQztBQUMxRCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0ZBQW9GO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxXQUFXLG9DQUFvQztBQUMvQyxXQUFXLHNDQUFzQztBQUNqRCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDM0VBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsRkEsK0M7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxrQkFBa0IsMENBQTBDO0FBQzVELGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0RUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx1TUFBdU0sb0JBQW9CLEVBQUUsbUJBQW1CLG9CQUFvQixTQUFTLFdBQVcsRUFBRSw0QkFBNEIsbUJBQW1CLEVBQUU7QUFDM1U7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0Q0FBNEM7QUFDckQsU0FBUyxxQ0FBcUM7QUFDOUMsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzlGQSxnRDs7Ozs7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtCQUFrQiwwQ0FBMEM7QUFDNUQsMENBQTBDLFlBQVk7QUFDdEQseUNBQXlDLFdBQVcsV0FBVyxhQUFhO0FBQzVFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUNBQW1DO0FBQzlDLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN2SEEsZ0Q7Ozs7Ozs7QUNBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw2Q0FBNkMsYUFBYTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDbERBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekU0QjtBQUNDO0FBQ0k7QUFDRjtBQUNNO0FBQ0c7QUFDUjtBQUNHO0FBQ0Q7QUFDRjtBQUNGO0FBQ0kiLCJmaWxlIjoic3VydmV5anMtd2lkZ2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcImlucHV0bWFza1wiKSwgcmVxdWlyZShcIm5vdWlzbGlkZXJcIiksIHJlcXVpcmUoXCJzaWduYXR1cmVfcGFkXCIpLCByZXF1aXJlKFwic29ydGFibGVqc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInN1cnZleWpzLXdpZGdldHNcIiwgW1wianF1ZXJ5XCIsIFwiaW5wdXRtYXNrXCIsIFwibm91aXNsaWRlclwiLCBcInNpZ25hdHVyZV9wYWRcIiwgXCJzb3J0YWJsZWpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1cnZleWpzLXdpZGdldHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJpbnB1dG1hc2tcIiksIHJlcXVpcmUoXCJub3Vpc2xpZGVyXCIpLCByZXF1aXJlKFwic2lnbmF0dXJlX3BhZFwiKSwgcmVxdWlyZShcInNvcnRhYmxlanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN1cnZleWpzLXdpZGdldHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJJbnB1dG1hc2tcIl0sIHJvb3RbXCJub1VpU2xpZGVyXCJdLCByb290W1wiU2lnbmF0dXJlUGFkXCJdLCByb290W1wiU29ydGFibGVcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE3MTk5ZmUxMmQ4MzMyZmRmNDA3IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcImlyYWRpb19zcXVhcmUtYmx1ZVwiLFxyXG4gICAgbmFtZTogXCJpY2hlY2tcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uaUNoZWNrO1xyXG4gICAgfSxcclxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgICB2YXIgdCA9IHF1ZXN0aW9uLmdldFR5cGUoKTtcclxuICAgICAgcmV0dXJuIHQgPT09IFwicmFkaW9ncm91cFwiIHx8IHQgPT09IFwiY2hlY2tib3hcIiB8fCB0ID09PSBcIm1hdHJpeFwiO1xyXG4gICAgfSxcclxuICAgIGlzRGVmYXVsdFJlbmRlcjogdHJ1ZSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xyXG4gICAgICB2YXIgJGVsID0gJChlbCk7XHJcbiAgICAgICRlbC5maW5kKFwiaW5wdXRcIikuZGF0YSh7IGlDaGVjazogdW5kZWZpbmVkIH0pO1xyXG5cclxuICAgICAgJGVsLmZpbmQoXCJpbnB1dFwiKS5pQ2hlY2soe1xyXG4gICAgICAgIGNoZWNrYm94Q2xhc3M6IHJvb3RXaWRnZXQuY2xhc3NOYW1lLFxyXG4gICAgICAgIHJhZGlvQ2xhc3M6IHJvb3RXaWRnZXQuY2xhc3NOYW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgc2VsZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSAhPSBcIm1hdHJpeFwiKSB7XHJcbiAgICAgICAgICAkZWwuZmluZChcImlucHV0W3ZhbHVlPVwiICsgcXVlc3Rpb24udmFsdWUgKyBcIl1cIikuaUNoZWNrKFwiY2hlY2tcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHF1ZXN0aW9uLmdlbmVyYXRlZFZpc2libGVSb3dzLmZvckVhY2goZnVuY3Rpb24ocm93LCBpbmRleCwgcm93cykge1xyXG4gICAgICAgICAgICBpZiAocm93LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgJChlbClcclxuICAgICAgICAgICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgICAgICAgICBcImlucHV0W25hbWU9J1wiICsgcm93LmZ1bGxOYW1lICsgXCInXVt2YWx1ZT1cIiArIHJvdy52YWx1ZSArIFwiXVwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuaUNoZWNrKFwiY2hlY2tcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgJGVsLmZpbmQoXCJpbnB1dFwiKS5vbihcImlmQ2hlY2tlZFwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgIT0gXCJtYXRyaXhcIikge1xyXG4gICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHF1ZXN0aW9uLmdlbmVyYXRlZFZpc2libGVSb3dzLmZvckVhY2goZnVuY3Rpb24ocm93LCBpbmRleCwgcm93cykge1xyXG4gICAgICAgICAgICBpZiAocm93LmZ1bGxOYW1lID09PSBldmVudC50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICAgIHJvdy52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBzZWxlY3Q7XHJcbiAgICAgIHNlbGVjdCgpO1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyICRlbCA9ICQoZWwpO1xyXG4gICAgICAkZWwuZmluZChcImlucHV0XCIpLmlDaGVjayhcImRlc3Ryb3lcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJ0eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaWNoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxMCIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIGFjdGl2YXRlZEJ5OiBcInByb3BlcnR5XCIsXHJcbiAgICBuYW1lOiBcInNlbGVjdDJcIixcclxuICAgIGh0bWxUZW1wbGF0ZTogXCI8c2VsZWN0IHN0eWxlPSd3aWR0aDogMTAwJTsnPjwvc2VsZWN0PlwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mICQgPT0gXCJmdW5jdGlvblwiICYmICEhJC5mbi5zZWxlY3QyO1xyXG4gICAgfSxcclxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgICBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwicHJvcGVydHlcIilcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgcXVlc3Rpb25bXCJyZW5kZXJBc1wiXSA9PT0gXCJzZWxlY3QyXCIgJiZcclxuICAgICAgICAgIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJkcm9wZG93blwiXHJcbiAgICAgICAgKTtcclxuICAgICAgaWYgKHdpZGdldC5hY3RpdmF0ZWRCeSA9PSBcInR5cGVcIilcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgdHlwZW9mIFNlbGVjdDIgIT09IHVuZGVmaW5lZCAmJiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiZHJvcGRvd25cIlxyXG4gICAgICAgICk7XHJcbiAgICAgIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT0gXCJjdXN0b210eXBlXCIpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJzZWxlY3QyXCI7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIGlmICghdGhpcy53aWRnZXRJc0xvYWRlZCgpKSByZXR1cm47XHJcbiAgICAgIHdpZGdldC5hY3RpdmF0ZWRCeSA9IGFjdGl2YXRlZEJ5O1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5yZW1vdmVQcm9wZXJ0eShcImRyb3Bkb3duXCIsIFwicmVuZGVyQXNcIik7XHJcbiAgICAgIGlmIChhY3RpdmF0ZWRCeSA9PSBcInByb3BlcnR5XCIpIHtcclxuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImRyb3Bkb3duXCIsIHtcclxuICAgICAgICAgIG5hbWU6IFwicmVuZGVyQXNcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IFwic3RhbmRhcmRcIixcclxuICAgICAgICAgIGNob2ljZXM6IFtcInN0YW5kYXJkXCIsIFwic2VsZWN0MlwiXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChhY3RpdmF0ZWRCeSA9PSBcImN1c3RvbXR5cGVcIikge1xyXG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic2VsZWN0MlwiLCBbXSwgbnVsbCwgXCJkcm9wZG93blwiKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICB2YXIgb3RoZXJzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgIG90aGVyc0VsLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgb3RoZXJzRWwuc3R5bGUubWFyZ2luVG9wID0gXCIzcHhcIjtcclxuICAgICAgb3RoZXJzRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBvdGhlcnNFbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAkZWxcclxuICAgICAgICAucGFyZW50KClcclxuICAgICAgICAuZ2V0KDApXHJcbiAgICAgICAgLmFwcGVuZENoaWxkKG90aGVyc0VsKTtcclxuICAgICAgdmFyIHdpZGdldCA9ICRlbC5zZWxlY3QyKHtcclxuICAgICAgICB0aGVtZTogXCJjbGFzc2ljXCJcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkZWwudmFsKHF1ZXN0aW9uLnZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgIG90aGVyc0VsLnN0eWxlLmRpc3BsYXkgPSAhcXVlc3Rpb24uaXNPdGhlclNlbGVjdGVkID8gXCJub25lXCIgOiBcIlwiO1xyXG4gICAgICB9O1xyXG4gICAgICB2YXIgdXBkYXRlQ29tbWVudEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBvdGhlcnNFbC52YWx1ZSA9IHF1ZXN0aW9uLmNvbW1lbnQgPyBxdWVzdGlvbi5jb21tZW50IDogXCJcIjtcclxuICAgICAgfTtcclxuICAgICAgdmFyIG90aGVyc0VsQ2hhbmdlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHF1ZXN0aW9uLmNvbW1lbnQgPSBvdGhlcnNFbC52YWx1ZTtcclxuICAgICAgfTtcclxuICAgICAgdmFyIHVwZGF0ZUNob2ljZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkZWwuc2VsZWN0Mih7XHJcbiAgICAgICAgICBkYXRhOiBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGlkOiBjaG9pY2UudmFsdWUsIHRleHQ6IGNob2ljZS50ZXh0IH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgICAgIHVwZGF0ZUNvbW1lbnRIYW5kbGVyKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHF1ZXN0aW9uLmNob2ljZXNDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVDaG9pY2VzO1xyXG4gICAgICB1cGRhdGVDaG9pY2VzKCk7XHJcbiAgICAgICRlbC5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgb3RoZXJzRWwub25jaGFuZ2UgPSBvdGhlcnNFbENoYW5nZWQ7XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICBxdWVzdGlvbi5jb21tZW50Q2hhbmdlZENhbGxiYWNrID0gdXBkYXRlQ29tbWVudEhhbmRsZXI7XHJcbiAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgICB1cGRhdGVDb21tZW50SGFuZGxlcigpO1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgJChlbClcclxuICAgICAgICAuZmluZChcInNlbGVjdFwiKVxyXG4gICAgICAgIC5vZmYoXCJzZWxlY3QyOnNlbGVjdFwiKVxyXG4gICAgICAgIC5zZWxlY3QyKFwiZGVzdHJveVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0KTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NlbGVjdDIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcImltYWdlcGlja2VyXCIsXHJcbiAgICB0aXRsZTogXCJJbWFnZSBwaWNrZXJcIixcclxuICAgIGljb25OYW1lOiBcImljb24taW1hZ2VwaWNrZXJcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uaW1hZ2VwaWNrZXI7XHJcbiAgICB9LFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiaW1hZ2VwaWNrZXJcIjtcclxuICAgIH0sXHJcbiAgICBpc0RlZmF1bHRSZW5kZXI6IHRydWUsXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFxyXG4gICAgICAgIFwiaW1hZ2VpdGVtdmFsdWVzXCIsXHJcbiAgICAgICAgW3sgbmFtZTogXCJpbWFnZUxpbmtcIiB9XSxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIFwiaXRlbXZhbHVlXCJcclxuICAgICAgKTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXHJcbiAgICAgICAgXCJpbWFnZXBpY2tlclwiLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJjaG9pY2VzOmltYWdlaXRlbXZhbHVlc1wiLFxyXG4gICAgICAgICAgICBvbkdldFZhbHVlOiBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICAgICAgICByZXR1cm4gU3VydmV5Lkl0ZW1WYWx1ZS5nZXREYXRhKG9iai5jaG9pY2VzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25TZXRWYWx1ZTogZnVuY3Rpb24ob2JqLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgIG9iai5jaG9pY2VzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwic2hvd0xhYmVsOmJvb2xlYW5cIiwgZGVmYXVsdDogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJoYXNPdGhlclwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIm90aGVyVGV4dFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIm9wdGlvbnNDYXB0aW9uXCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwib3RoZXJFcnJvclRleHRcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJzdG9yZU90aGVyc0FzQ29tbWVudFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInJlbmRlckFzXCIsIHZpc2libGU6IGZhbHNlIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgXCJkcm9wZG93blwiXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJzZWxlY3RcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XHJcbiAgICAgIHZhciBvcHRpb25zID0gJGVsLmZpbmQoXCJvcHRpb25cIik7XHJcbiAgICAgIHZhciBjaG9pY2VzID0gcXVlc3Rpb24uY2hvaWNlcztcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgb3B0aW9ucy5sZW5ndGggJiYgaSAtIDEgPCBjaG9pY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgJChvcHRpb25zW2ldKS5kYXRhKFwiaW1nU3JjXCIsIGNob2ljZXNbaSAtIDFdLmltYWdlTGluayk7XHJcbiAgICAgICAgb3B0aW9uc1tpXS5zZWxlY3RlZCA9IHF1ZXN0aW9uLnZhbHVlID09IG9wdGlvbnNbaV0udmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgJGVsLmltYWdlcGlja2VyKHtcclxuICAgICAgICBoaWRlX3NlbGVjdDogdHJ1ZSxcclxuICAgICAgICBzaG93X2xhYmVsOiBxdWVzdGlvbi5zaG93TGFiZWwsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGZ1bmN0aW9uKG9wdHMpIHtcclxuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gb3B0cy5waWNrZXIuc2VsZWN0WzBdLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgJGVsID0gJChlbCkuZmluZChcInNlbGVjdFwiKTtcclxuICAgICAgJGVsLmRhdGEoXCJwaWNrZXJcIikuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdlLXBpY2tlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgOSIsImltcG9ydCBJbnB1dG1hc2sgZnJvbSBcImlucHV0bWFza1wiO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgbmFtZTogXCJtYXNrZWRpdFwiLFxyXG4gICAgbnVtZXJpY0dyb3VwU2VwYXJhdG9yOiBcIixcIixcclxuICAgIG51bWVyaWNBdXRvR3JvdXA6IHRydWUsXHJcbiAgICBudW1lcmljRGlnaXRzOiAyLFxyXG4gICAgbnVtZXJpY0RpZ2l0c09wdGlvbmFsOiBmYWxzZSxcclxuICAgIG51bWVyaWNQcmVmaXg6IFwiJFwiLFxyXG4gICAgbnVtZXJpY1BsYWNlaG9sZGVyOiBcIjBcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBJbnB1dG1hc2sgIT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH0sXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PSBcIm11bHRpcGxldGV4dFwiKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBxdWVzdGlvbi5nZXRUeXBlKCkgPT0gXCJ0ZXh0XCIgJiZcclxuICAgICAgICAocXVlc3Rpb24uaW5wdXRNYXNrICE9IFwibm9uZVwiIHx8IHF1ZXN0aW9uLmlucHV0Rm9ybWF0KVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIGlzRGVmYXVsdFJlbmRlcjogdHJ1ZSxcclxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgaWYgKFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmZpbmRQcm9wZXJ0eShcInRleHRcIiwgXCJpbnB1dE1hc2tcIikpIHJldHVybjtcclxuICAgICAgdmFyIHByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgXCJpbnB1dEZvcm1hdFwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiaW5wdXRNYXNrXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiBcIm5vbmVcIixcclxuICAgICAgICAgIGNob2ljZXM6IFtcclxuICAgICAgICAgICAgXCJub25lXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZXRpbWVcIixcclxuICAgICAgICAgICAgXCJjdXJyZW5jeVwiLFxyXG4gICAgICAgICAgICBcImRlY2ltYWxcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiLFxyXG4gICAgICAgICAgICBcInBob25lXCIsXHJcbiAgICAgICAgICAgIFwiaXBcIlxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcInRleHRcIiwgcHJvcGVydGllcyk7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXHJcbiAgICAgICAgXCJtYXRyaXhkcm9wZG93bmNvbHVtblwiLFxyXG4gICAgICAgIHByb3BlcnRpZXNcclxuICAgICAgKTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcIm11bHRpcGxldGV4dGl0ZW1cIiwgcHJvcGVydGllcyk7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlJbnB1dE1hc2s6IGZ1bmN0aW9uKHN1cnZleUVsZW1lbnQsIGVsKSB7XHJcbiAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcclxuICAgICAgdmFyIG1hc2sgPVxyXG4gICAgICAgIHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrICE9IFwibm9uZVwiXHJcbiAgICAgICAgICA/IHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrXHJcbiAgICAgICAgICA6IHN1cnZleUVsZW1lbnQuaW5wdXRGb3JtYXQ7XHJcbiAgICAgIHZhciBvcHRpb25zID0ge307XHJcbiAgICAgIGlmIChzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayAhPSBcIm5vbmVcIilcclxuICAgICAgICBvcHRpb25zLmlucHV0Rm9ybWF0ID0gc3VydmV5RWxlbWVudC5pbnB1dEZvcm1hdDtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImN1cnJlbmN5XCIgfHxcclxuICAgICAgICBzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImRlY2ltYWxcIlxyXG4gICAgICApIHtcclxuICAgICAgICBvcHRpb25zLmdyb3VwU2VwYXJhdG9yID0gcm9vdFdpZGdldC5udW1lcmljR3JvdXBTZXBhcmF0b3I7XHJcbiAgICAgICAgb3B0aW9ucy5hdXRvR3JvdXAgPSByb290V2lkZ2V0Lm51bWVyaWNBdXRvR3JvdXA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiY3VycmVuY3lcIikge1xyXG4gICAgICAgIG9wdGlvbnMuZGlnaXRzID0gcm9vdFdpZGdldC5udW1lcmljRGlnaXRzO1xyXG4gICAgICAgIG9wdGlvbnMuZGlnaXRzT3B0aW9uYWwgPSByb290V2lkZ2V0Lm51bWVyaWNEaWdpdHNPcHRpb25hbDtcclxuICAgICAgICBvcHRpb25zLnByZWZpeCA9IHJvb3RXaWRnZXQubnVtZXJpY1ByZWZpeDtcclxuICAgICAgICBvcHRpb25zLnBsYWNlaG9sZGVyID0gcm9vdFdpZGdldC5udW1lcmljUGxhY2Vob2xkZXI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiZGF0ZXRpbWVcIikge1xyXG4gICAgICAgIG1hc2sgPSBzdXJ2ZXlFbGVtZW50LmlucHV0Rm9ybWF0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBJbnB1dG1hc2sobWFzaywgb3B0aW9ucykubWFzayhlbCk7XHJcblxyXG4gICAgICBlbC5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc3VydmV5RWxlbWVudC5jdXN0b21XaWRnZXREYXRhLmlzTmVlZFJlbmRlciA9IHRydWU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2YXIgdXBkYXRlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGVsLnZhbHVlID1cclxuICAgICAgICAgIHR5cGVvZiBzdXJ2ZXlFbGVtZW50LnZhbHVlID09PSBcInVuZGVmaW5lZFwiID8gXCJcIiA6IHN1cnZleUVsZW1lbnQudmFsdWU7XHJcbiAgICAgIH07XHJcbiAgICAgIHN1cnZleUVsZW1lbnQudmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVIYW5kbGVyO1xyXG4gICAgICB1cGRhdGVIYW5kbGVyKCk7XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpICE9IFwibXVsdGlwbGV0ZXh0XCIpIHtcclxuICAgICAgICB2YXIgaW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikgfHwgZWw7XHJcbiAgICAgICAgdGhpcy5hcHBseUlucHV0TWFzayhxdWVzdGlvbiwgaW5wdXQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlc3Rpb24uaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHZhciBpdGVtID0gcXVlc3Rpb24uaXRlbXNbaV07XHJcbiAgICAgICAgICBpZiAoaXRlbS5pbnB1dE1hc2sgIT0gXCJub25lXCIgfHwgaXRlbS5pbnB1dEZvcm1hdCkge1xyXG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgaXRlbS5pZCk7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuYXBwbHlJbnB1dE1hc2soaXRlbSwgaW5wdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgaW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikgfHwgZWw7XHJcbiAgICAgIGlucHV0LmlucHV0bWFzay5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0KTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2lucHV0bWFzay5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiSW5wdXRtYXNrXCIsXCJjb21tb25qczJcIjpcImlucHV0bWFza1wiLFwiY29tbW9uanNcIjpcImlucHV0bWFza1wiLFwiYW1kXCI6XCJpbnB1dG1hc2tcIn1cbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcImJhcnJhdGluZ1wiLFxyXG4gICAgdGl0bGU6IFwiQmFyIHJhdGluZ1wiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1iYXJyYXRpbmdcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiAkID09PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLmJhcnJhdGluZztcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0SlNPTjogeyBjaG9pY2VzOiBbMSwgMiwgMywgNCwgNV0gfSxcclxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImJhcnJhdGluZ1wiO1xyXG4gICAgfSxcclxuICAgIGlzRGVmYXVsdFJlbmRlcjogdHJ1ZSxcclxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXHJcbiAgICAgICAgXCJiYXJyYXRpbmdcIixcclxuICAgICAgICBbXHJcbiAgICAgICAgICB7IG5hbWU6IFwic2hvd1ZhbHVlczpib29sZWFuXCIsIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiaGFzT3RoZXJcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJvdGhlclRleHRcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJvcHRpb25zQ2FwdGlvblwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIm90aGVyRXJyb3JUZXh0XCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwic3RvcmVPdGhlcnNBc0NvbW1lbnRcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJyZW5kZXJBc1wiLCB2aXNpYmxlOiBmYWxzZSB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIFwiZHJvcGRvd25cIlxyXG4gICAgICApO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImJhcnJhdGluZ1wiLCB7XHJcbiAgICAgICAgbmFtZTogXCJyYXRpbmdUaGVtZVwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IFwiZm9udGF3ZXNvbWUtc3RhcnNcIixcclxuICAgICAgICBjaG9pY2VzOiBbXHJcbiAgICAgICAgICBcImZvbnRhd2Vzb21lLXN0YXJzXCIsXHJcbiAgICAgICAgICBcImNzcy1zdGFyc1wiLFxyXG4gICAgICAgICAgXCJiYXJzLXBpbGxcIixcclxuICAgICAgICAgIFwiYmFycy0xdG8xMFwiLFxyXG4gICAgICAgICAgXCJiYXJzLW1vdmllXCIsXHJcbiAgICAgICAgICBcImJhcnMtc3F1YXJlXCIsXHJcbiAgICAgICAgICBcImJhcnMtcmV2ZXJzZWRcIixcclxuICAgICAgICAgIFwiYmFycy1ob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICBcImJvb3RzdHJhcC1zdGFyc1wiLFxyXG4gICAgICAgICAgXCJmb250YXdlc29tZS1zdGFycy1vXCJcclxuICAgICAgICBdXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICAkZWwuYmFycmF0aW5nKFwic2hvd1wiLCB7XHJcbiAgICAgICAgdGhlbWU6IHF1ZXN0aW9uLnJhdGluZ1RoZW1lLFxyXG4gICAgICAgIGluaXRpYWxSYXRpbmc6IHF1ZXN0aW9uLnZhbHVlLFxyXG4gICAgICAgIHNob3dWYWx1ZXM6IHF1ZXN0aW9uLnNob3dWYWx1ZXMsXHJcbiAgICAgICAgc2hvd1NlbGVjdGVkUmF0aW5nOiBmYWxzZSxcclxuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24odmFsdWUsIHRleHQpIHtcclxuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKGVsKVxyXG4gICAgICAgICAgLmZpbmQoXCJzZWxlY3RcIilcclxuICAgICAgICAgIC5iYXJyYXRpbmcoXCJzZXRcIiwgcXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyICRlbCA9ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XHJcbiAgICAgICRlbC5iYXJyYXRpbmcoXCJkZXN0cm95XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pxdWVyeS1iYXItcmF0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA4IiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgbmFtZTogXCJkYXRlcGlja2VyXCIsXHJcbiAgICB0aXRsZTogXCJEYXRlIHBpY2tlclwiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1kYXRlcGlja2VyXCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLmRhdGVwaWNrZXI7XHJcbiAgICB9LFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiZGF0ZXBpY2tlclwiO1xyXG4gICAgfSxcclxuICAgIGh0bWxUZW1wbGF0ZTpcclxuICAgICAgXCI8aW5wdXQgY2xhc3M9J2Zvcm0tY29udHJvbCB3aWRnZXQtZGF0ZXBpY2tlcicgdHlwZT0ndGV4dCcgc3R5bGU9J3dpZHRoOiAxMDAlOyc+XCIsXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFxyXG4gICAgICAgIFwiZGF0ZXBpY2tlclwiLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJkYXRlRm9ybWF0XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwibW0vZGQveXlcIixcclxuICAgICAgICAgICAgY2hvaWNlczogW1xyXG4gICAgICAgICAgICAgIFwibW0vZGQveXlcIixcclxuICAgICAgICAgICAgICBcInl5LW1tLWRkXCIsXHJcbiAgICAgICAgICAgICAgXCJkIE0sIHlcIixcclxuICAgICAgICAgICAgICBcImQgTU0sIHlcIixcclxuICAgICAgICAgICAgICBcIkRELCBkIE1NLCB5eVwiLFxyXG4gICAgICAgICAgICAgIFwiJ2RheScgZCAnb2YnIE1NICdpbiB0aGUgeWVhcicgeXlcIlxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImlucHV0VHlwZVwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImlucHV0Rm9ybWF0XCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiaW5wdXRNYXNrXCIsIHZpc2libGU6IGZhbHNlIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgXCJ0ZXh0XCJcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcIi53aWRnZXQtZGF0ZXBpY2tlclwiKVxyXG4gICAgICAgID8gJChlbClcclxuICAgICAgICA6ICQoZWwpLmZpbmQoXCIud2lkZ2V0LWRhdGVwaWNrZXJcIik7XHJcbiAgICAgIHZhciBwaWNrZXJXaWRnZXQgPSAkZWwuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgZGF0ZUZvcm1hdDogcXVlc3Rpb24uZGF0ZUZvcm1hdCxcclxuICAgICAgICBvcHRpb246IHtcclxuICAgICAgICAgIG1pbkRhdGU6IG51bGwsXHJcbiAgICAgICAgICBtYXhEYXRlOiBudWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24oZGF0ZVRleHQpIHtcclxuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZGF0ZVRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAocXVlc3Rpb24udmFsdWUpIHtcclxuICAgICAgICAgIHBpY2tlcldpZGdldC5kYXRlcGlja2VyKFwic2V0RGF0ZVwiLCBuZXcgRGF0ZShxdWVzdGlvbi52YWx1ZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwaWNrZXJXaWRnZXQuZGF0ZXBpY2tlcihcInNldERhdGVcIiwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjaygpO1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwiLndpZGdldC1kYXRlcGlja2VyXCIpXHJcbiAgICAgICAgPyAkKGVsKVxyXG4gICAgICAgIDogJChlbCkuZmluZChcIi53aWRnZXQtZGF0ZXBpY2tlclwiKTtcclxuICAgICAgJGVsLmRhdGVwaWNrZXIoXCJkZXN0cm95XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pxdWVyeS11aS1kYXRlcGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IiwiaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSBcIm5vdWlzbGlkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwibm91aXNsaWRlclwiLFxyXG4gICAgdGl0bGU6IFwibm9VaVNsaWRlclwiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1ub3Vpc2xpZGVyXCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2Ygbm9VaVNsaWRlciAhPSBcInVuZGVmaW5lZFwiO1xyXG4gICAgfSxcclxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcIm5vdWlzbGlkZXJcIjtcclxuICAgIH0sXHJcbiAgICBodG1sVGVtcGxhdGU6IFwiPGRpdj48L2Rpdj5cIixcclxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJub3Vpc2xpZGVyXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwibm91aXNsaWRlclwiLCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJyYW5nZU1pbjpudW1iZXJcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwicmFuZ2VNYXg6bnVtYmVyXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiAxMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiZGVmYXVsdFJhbmdlTWluOm51bWJlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogMzBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiZGVmYXVsdFJhbmdlTWF4Om51bWJlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogNzBcclxuICAgICAgICB9XHJcbiAgICAgIF0pO1xyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyIHN0YXJ0VmFsdWUgPSBxdWVzdGlvbi52YWx1ZTtcclxuICAgICAgaWYgKCFzdGFydFZhbHVlIHx8IHN0YXJ0VmFsdWUubGVuZ3RoICE9IDIpIHtcclxuICAgICAgICBzdGFydFZhbHVlID0gW3F1ZXN0aW9uLmRlZmF1bHRSYW5nZU1pbiwgcXVlc3Rpb24uZGVmYXVsdFJhbmdlTWF4XTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc3RhcnRWYWx1ZVswXSA8IHF1ZXN0aW9uLnJhbmdlTWluKSBzdGFydFZhbHVlWzBdID0gcXVlc3Rpb24ucmFuZ2VNaW47XHJcbiAgICAgIGlmIChzdGFydFZhbHVlWzBdID4gcXVlc3Rpb24ucmFuZ2VNYXgpIHN0YXJ0VmFsdWVbMF0gPSBxdWVzdGlvbi5yYW5nZU1heDtcclxuICAgICAgaWYgKHN0YXJ0VmFsdWVbMV0gPCBzdGFydFZhbHVlWzBdKSBzdGFydFZhbHVlWzFdID0gc3RhcnRWYWx1ZVswXTtcclxuICAgICAgaWYgKHN0YXJ0VmFsdWVbMV0gPiBxdWVzdGlvbi5yYW5nZU1heCkgc3RhcnRWYWx1ZVsxXSA9IHF1ZXN0aW9uLnJhbmdlTWF4O1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZSA9IHN0YXJ0VmFsdWU7XHJcblxyXG4gICAgICBlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjUwcHhcIjtcclxuICAgICAgdmFyIHNsaWRlciA9IG5vVWlTbGlkZXIuY3JlYXRlKGVsLCB7XHJcbiAgICAgICAgc3RhcnQ6IHN0YXJ0VmFsdWUsXHJcbiAgICAgICAgY29ubmVjdDogdHJ1ZSxcclxuICAgICAgICBwaXBzOiB7XHJcbiAgICAgICAgICBtb2RlOiBcInN0ZXBzXCIsXHJcbiAgICAgICAgICBzdGVwcGVkOiB0cnVlLFxyXG4gICAgICAgICAgZGVuc2l0eTogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgIG1pbjogcXVlc3Rpb24ucmFuZ2VNaW4sXHJcbiAgICAgICAgICBtYXg6IHF1ZXN0aW9uLnJhbmdlTWF4XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2xpZGVyLm9uKFwic2V0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gc2xpZGVyLmdldCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNsaWRlci5zZXQocXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgICBxdWVzdGlvbi5ub1VpU2xpZGVyID0gc2xpZGVyO1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHF1ZXN0aW9uLm5vVWlTbGlkZXIuZGVzdHJveSgpO1xyXG4gICAgICBxdWVzdGlvbi5ub1VpU2xpZGVyID0gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ub3Vpc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJub1VpU2xpZGVyXCIsXCJjb21tb25qczJcIjpcIm5vdWlzbGlkZXJcIixcImNvbW1vbmpzXCI6XCJub3Vpc2xpZGVyXCIsXCJhbWRcIjpcIm5vdWlzbGlkZXJcIn1cbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcInRhZ2JveFwiLFxyXG4gICAgdGl0bGU6IFwiVGFnIGJveFwiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi10YWdib3hcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uc2VsZWN0MjtcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0SlNPTjogeyBjaG9pY2VzOiBbXCJJdGVtIDFcIiwgXCJJdGVtIDJcIiwgXCJJdGVtIDNcIl0gfSxcclxuICAgIGh0bWxUZW1wbGF0ZTogXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZScgc3R5bGU9J3dpZHRoOiAxMDAlOyc+PC9zZWxlY3Q+XCIsXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJ0YWdib3hcIjtcclxuICAgIH0sXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFxyXG4gICAgICAgIFwidGFnYm94XCIsXHJcbiAgICAgICAgW3sgbmFtZTogXCJoYXNPdGhlclwiLCB2aXNpYmxlOiBmYWxzZSB9XSxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIFwiY2hlY2tib3hcIlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICAkZWwuc2VsZWN0Mih7XHJcbiAgICAgICAgdGFnczogXCJ0cnVlXCIsXHJcbiAgICAgICAgdGhlbWU6IFwiY2xhc3NpY1wiXHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJGVsLnZhbChxdWVzdGlvbi52YWx1ZSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgfTtcclxuICAgICAgdmFyIHVwZGF0ZUNob2ljZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkZWwuc2VsZWN0Mih7XHJcbiAgICAgICAgICBkYXRhOiBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGlkOiBjaG9pY2UudmFsdWUsIHRleHQ6IGNob2ljZS50ZXh0IH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgICB9O1xyXG4gICAgICBxdWVzdGlvbi5jaG9pY2VzQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlQ2hvaWNlcztcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgICRlbC5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IChxdWVzdGlvbi52YWx1ZSB8fCBbXSkuY29uY2F0KGUucGFyYW1zLmRhdGEuaWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgJGVsLm9uKFwic2VsZWN0Mjp1bnNlbGVjdFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gKHF1ZXN0aW9uLnZhbHVlIHx8IFtdKS5pbmRleE9mKGUucGFyYW1zLmRhdGEuaWQpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgIHZhciB2YWwgPSBxdWVzdGlvbi52YWx1ZTtcclxuICAgICAgICAgIHZhbC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdXBkYXRlQ2hvaWNlcygpO1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgJChlbClcclxuICAgICAgICAuZmluZChcInNlbGVjdFwiKVxyXG4gICAgICAgIC5vZmYoXCJzZWxlY3QyOnNlbGVjdFwiKVxyXG4gICAgICAgIC5zZWxlY3QyKFwiZGVzdHJveVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZWxlY3QyLXRhZ2JveC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQiLCJpbXBvcnQgKiBhcyBTaWduYXR1cmVQYWQgZnJvbSBcInNpZ25hdHVyZV9wYWRcIjtcclxuXHJcbmZ1bmN0aW9uIHJlc2l6ZUNhbnZhcyhjYW52YXMpIHtcclxuICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgdmFyIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xyXG4gIHZhciBiYWNraW5nU3RvcmVSYXRpbyA9XHJcbiAgICBjb250ZXh0LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgIGNvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgIGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgIGNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgMTtcclxuXHJcbiAgdmFyIHJhdGlvID0gZGV2aWNlUGl4ZWxSYXRpbyAvIGJhY2tpbmdTdG9yZVJhdGlvO1xyXG5cclxuICB2YXIgb2xkV2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgdmFyIG9sZEhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gIGNhbnZhcy53aWR0aCA9IG9sZFdpZHRoICogcmF0aW87XHJcbiAgY2FudmFzLmhlaWdodCA9IG9sZEhlaWdodCAqIHJhdGlvO1xyXG5cclxuICBjYW52YXMuc3R5bGUud2lkdGggPSBvbGRXaWR0aCArIFwicHhcIjtcclxuICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gb2xkSGVpZ2h0ICsgXCJweFwiO1xyXG5cclxuICBjb250ZXh0LnNjYWxlKHJhdGlvLCByYXRpbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwic2lnbmF0dXJlcGFkXCIsXHJcbiAgICB0aXRsZTogXCJTaWduYXR1cmUgcGFkXCIsXHJcbiAgICBpY29uTmFtZTogXCJpY29uLXNpZ25hdHVyZXBhZFwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIFNpZ25hdHVyZVBhZCAhPSBcInVuZGVmaW5lZFwiO1xyXG4gICAgfSxcclxuICAgIHBlbkNvbG9yOiBcIiMxYWIzOTRcIixcclxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInNpZ25hdHVyZXBhZFwiO1xyXG4gICAgfSxcclxuICAgIGh0bWxUZW1wbGF0ZTpcclxuICAgICAgXCI8ZGl2IGNsYXNzPSdzanNfc3BfY29udGFpbmVyJz48ZGl2PjxjYW52YXM+PC9jYW52YXM+PC9kaXY+PGRpdiBjbGFzcz0nc2pzX3NwX2NvbnRyb2xzJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J3Nqc19zcF9jbGVhcicgdGl0bGU9J0NsZWFyJz7inJY8L2J1dHRvbj48L2Rpdj48L2Rpdj48c3R5bGU+LnNqc19zcF9jb250YWluZXIgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH0gLnNqc19zcF9jb250cm9scyB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgYm90dG9tOiAwOyB9IC5zanNfc3BfY29udHJvbHMgPiBidXR0b24geyB1c2VyLXNlbGVjdDogbm9uZTsgfTwvc3R5bGU+XCIsXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic2lnbmF0dXJlcGFkXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwic2lnbmF0dXJlcGFkXCIsIFtcclxuICAgICAgICB7IG5hbWU6IFwiYWxsb3dDbGVhcjpib29sZWFuXCIsIGRlZmF1bHQ6IHRydWUgfSxcclxuICAgICAgICB7IG5hbWU6IFwid2lkdGg6bnVtYmVyXCIsIGRlZmF1bHQ6IDMwMCB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJoZWlnaHQ6bnVtYmVyXCIsIGRlZmF1bHQ6IDIwMCB9XHJcbiAgICAgIF0pO1xyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xyXG4gICAgICB2YXIgY2FudmFzID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XHJcbiAgICAgIHZhciBzaWduYXR1cmVQYWQgPSBuZXcgU2lnbmF0dXJlUGFkKGNhbnZhcyk7XHJcbiAgICAgIGlmIChxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XHJcbiAgICAgICAgc2lnbmF0dXJlUGFkLm9mZigpO1xyXG4gICAgICB9XHJcbiAgICAgIHNpZ25hdHVyZVBhZC5wZW5Db2xvciA9IHJvb3RXaWRnZXQucGVuQ29sb3I7XHJcbiAgICAgIHNpZ25hdHVyZVBhZC5vbkVuZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgpO1xyXG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZGF0YTtcclxuICAgICAgfTtcclxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNpZ25hdHVyZVBhZC5jbGVhcigpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHF1ZXN0aW9uLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBxdWVzdGlvbi5oZWlnaHQ7XHJcbiAgICAgICAgcmVzaXplQ2FudmFzKGNhbnZhcyk7XHJcbiAgICAgICAgc2lnbmF0dXJlUGFkLmZyb21EYXRhVVJMKHF1ZXN0aW9uLnZhbHVlKTtcclxuICAgICAgfTtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQgPSBzaWduYXR1cmVQYWQ7XHJcbiAgICAgIGlmIChxdWVzdGlvbi5hbGxvd0NsZWFyKSB7XHJcbiAgICAgICAgZWwuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgc2lnbmF0dXJlUGFkLmNsZWFyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbC5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgaWYgKHF1ZXN0aW9uLnNpZ25hdHVyZVBhZCkge1xyXG4gICAgICAgIHF1ZXN0aW9uLnNpZ25hdHVyZVBhZC5vZmYoKTtcclxuICAgICAgfVxyXG4gICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NpZ25hdHVyZV9wYWQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU2lnbmF0dXJlUGFkXCIsXCJjb21tb25qczJcIjpcInNpZ25hdHVyZV9wYWRcIixcImNvbW1vbmpzXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJhbWRcIjpcInNpZ25hdHVyZV9wYWRcIn1cbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gXCJzb3J0YWJsZWpzXCI7XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcInNvcnRhYmxlbGlzdFwiLFxyXG4gICAgdGl0bGU6IFwiU29ydGFibGUgbGlzdFwiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1zb3J0YWJsZWxpc3RcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBTb3J0YWJsZSAhPSBcInVuZGVmaW5lZFwiO1xyXG4gICAgfSxcclxuICAgIGRlZmF1bHRKU09OOiB7IGNob2ljZXM6IFtcIkl0ZW0gMVwiLCBcIkl0ZW0gMlwiLCBcIkl0ZW0gM1wiXSB9LFxyXG4gICAgYXJlYVN0eWxlOiBcImJvcmRlcjogMXB4IHNvbGlkICMxYWIzOTQ7IHdpZHRoOjEwMCU7IG1pbkhlaWdodDo1MHB4XCIsXHJcbiAgICBpdGVtU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjojMWFiMzk0O2NvbG9yOiNmZmY7bWFyZ2luOjVweDtwYWRkaW5nOjEwcHg7XCIsXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJzb3J0YWJsZWxpc3RcIjtcclxuICAgIH0sXHJcbiAgICBodG1sVGVtcGxhdGU6IFwiPGRpdj48L2Rpdj5cIixcclxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXHJcbiAgICAgICAgXCJzb3J0YWJsZWxpc3RcIixcclxuICAgICAgICBbXHJcbiAgICAgICAgICB7IG5hbWU6IFwiaGFzT3RoZXJcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJzdG9yZU90aGVyc0FzQ29tbWVudFwiLCB2aXNpYmxlOiBmYWxzZSB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIFwiY2hlY2tib3hcIlxyXG4gICAgICApO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInNvcnRhYmxlbGlzdFwiLCB7XHJcbiAgICAgICAgbmFtZTogXCJlbXB0eVRleHRcIixcclxuICAgICAgICBkZWZhdWx0OiBcIk1vdmUgaXRlbXMgaGVyZS5cIlxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcclxuICAgICAgZWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgdmFyIHJlc3VsdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdmFyIGVtcHR5RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgdmFyIHNvdXJjZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcmVzdWx0RWwuc3R5bGUuY3NzVGV4dCA9IHJvb3RXaWRnZXQuYXJlYVN0eWxlO1xyXG4gICAgICBlbXB0eUVsLmlubmVySFRNTCA9IHF1ZXN0aW9uLmVtcHR5VGV4dDtcclxuICAgICAgcmVzdWx0RWwuYXBwZW5kQ2hpbGQoZW1wdHlFbCk7XHJcbiAgICAgIHNvdXJjZUVsLnN0eWxlLmNzc1RleHQgPSByb290V2lkZ2V0LmFyZWFTdHlsZTtcclxuICAgICAgc291cmNlRWwuc3R5bGUubWFyZ2luVG9wID0gXCIxMHB4XCI7XHJcbiAgICAgIGVsLmFwcGVuZENoaWxkKHJlc3VsdEVsKTtcclxuICAgICAgZWwuYXBwZW5kQ2hpbGQoc291cmNlRWwpO1xyXG4gICAgICB2YXIgaGFzVmFsdWVJblJlc3VsdHMgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICB2YXIgcmVzID0gcXVlc3Rpb24udmFsdWU7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlcykpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHJlc1tpXSA9PSB2YWwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH07XHJcbiAgICAgIHZhciBpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgcmVzdWx0RWwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICByZXN1bHRFbC5hcHBlbmRDaGlsZChlbXB0eUVsKTtcclxuICAgICAgICBzb3VyY2VFbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHZhciB3YXNJblJlc3VsdHMgPSBmYWxzZTtcclxuICAgICAgICBxdWVzdGlvbi5hY3RpdmVDaG9pY2VzLmZvckVhY2goZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICAgICAgICB2YXIgaW5SZXN1dGxzID0gaGFzVmFsdWVJblJlc3VsdHMoY2hvaWNlLnZhbHVlKTtcclxuICAgICAgICAgIHdhc0luUmVzdWx0cyA9IHdhc0luUmVzdWx0cyB8fCBpblJlc3V0bHM7XHJcbiAgICAgICAgICB2YXIgc3JjRWwgPSBpblJlc3V0bHMgPyByZXN1bHRFbCA6IHNvdXJjZUVsO1xyXG4gICAgICAgICAgdmFyIG5ld0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIG5ld0VsLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgIFwiPGRpdiBzdHlsZT0nXCIgK1xyXG4gICAgICAgICAgICByb290V2lkZ2V0Lml0ZW1TdHlsZSArXHJcbiAgICAgICAgICAgIFwiJz5cIiArXHJcbiAgICAgICAgICAgIGNob2ljZS50ZXh0ICtcclxuICAgICAgICAgICAgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgIG5ld0VsLmRhdGFzZXRbXCJ2YWx1ZVwiXSA9IGNob2ljZS52YWx1ZTtcclxuICAgICAgICAgIHNyY0VsLmFwcGVuZENoaWxkKG5ld0VsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSB3YXNJblJlc3VsdHMgPyBcIm5vbmVcIiA6IFwiXCI7XHJcbiAgICAgIH07XHJcbiAgICAgIFNvcnRhYmxlLmNyZWF0ZSgkKHJlc3VsdEVsKVswXSwge1xyXG4gICAgICAgIGFuaW1hdGlvbjogMTUwLFxyXG4gICAgICAgIGdyb3VwOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInRvcDNcIixcclxuICAgICAgICAgIHB1bGw6IHRydWUsXHJcbiAgICAgICAgICBwdXQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU29ydDogZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICBpZiAoZXZ0LnRvLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW1wdHlFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgZXZ0LnRvLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZXZ0LnRvLmNoaWxkcmVuW2ldLmRhdGFzZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHJlc3VsdDtcclxuICAgICAgICAgIGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgU29ydGFibGUuY3JlYXRlKCQoc291cmNlRWwpWzBdLCB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiAxNTAsXHJcbiAgICAgICAgZ3JvdXA6IHtcclxuICAgICAgICAgIG5hbWU6IFwidG9wM1wiLFxyXG4gICAgICAgICAgcHVsbDogdHJ1ZSxcclxuICAgICAgICAgIHB1dDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7fVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NvcnRhYmxlanMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU29ydGFibGVcIixcImNvbW1vbmpzMlwiOlwic29ydGFibGVqc1wiLFwiY29tbW9uanNcIjpcInNvcnRhYmxlanNcIixcImFtZFwiOlwic29ydGFibGVqc1wifVxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcImVkaXRvclwiLFxyXG4gICAgdGl0bGU6IFwiRWRpdG9yXCIsXHJcbiAgICBpY29uTmFtZTogXCJpY29uLWVkaXRvclwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIENLRURJVE9SICE9IFwidW5kZWZpbmVkXCI7XHJcbiAgICB9LFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiZWRpdG9yXCI7XHJcbiAgICB9LFxyXG4gICAgaHRtbFRlbXBsYXRlOlxyXG4gICAgICBcIjx0ZXh0YXJlYSByb3dzPScxMCcgY29scz0nODAnIHN0eWxlOiB7d2lkdGg6JzEwMCUnfT48L3RleHRhcmVhPlwiLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImVkaXRvclwiLCBbXSwgbnVsbCwgXCJlbXB0eVwiKTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJlZGl0b3JcIiwge1xyXG4gICAgICAgIG5hbWU6IFwiaGVpZ2h0XCIsXHJcbiAgICAgICAgZGVmYXVsdDogMzAwXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgQ0tFRElUT1IuZWRpdG9yQ29uZmlnID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnLmxhbmd1YWdlID0gXCJlc1wiO1xyXG4gICAgICAgIGNvbmZpZy5oZWlnaHQgPSBxdWVzdGlvbi5oZWlnaHQ7XHJcbiAgICAgICAgY29uZmlnLnRvb2xiYXJDYW5Db2xsYXBzZSA9IHRydWU7XHJcbiAgICAgIH07XHJcbiAgICAgIHZhciBlZGl0b3IgPSBDS0VESVRPUi5yZXBsYWNlKGVsKTtcclxuICAgICAgdmFyIGlzVmFsdWVDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGlzVmFsdWVDaGFuZ2luZykgcmV0dXJuO1xyXG4gICAgICAgIGVkaXRvci5zZXREYXRhKHF1ZXN0aW9uLnZhbHVlKTtcclxuICAgICAgfTtcclxuICAgICAgZWRpdG9yLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlzVmFsdWVDaGFuZ2luZyA9IHRydWU7XHJcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBlZGl0b3IuZ2V0RGF0YSgpO1xyXG4gICAgICAgIGlzVmFsdWVDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHt9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2stZWRpdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTIiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcImF1dG9jb21wbGV0ZVwiLFxyXG4gICAgdGl0bGU6IFwiQXV0b2NvbXBsZXRlXCIsXHJcbiAgICBpY29uTmFtZTogXCJpY29uLWF1dG9jb21wbGV0ZVwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mICQgPT09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uZWFzeUF1dG9jb21wbGV0ZTtcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0SlNPTjoge30sXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJ0ZXh0XCI7XHJcbiAgICB9LFxyXG4gICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZmluZFByb3BlcnR5KFwidGV4dFwiLCBcImNob2ljZXNcIikgIT09IG51bGwgfHxcclxuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5maW5kUHJvcGVydHkoXCJ0ZXh0XCIsIFwiY2hvaWNlc0J5VXJsXCIpICE9PSBudWxsXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInRleHRcIiwge1xyXG4gICAgICAgIG5hbWU6IFwiY2hvaWNlczppdGVtdmFsdWVzXCIsXHJcbiAgICAgICAgb25HZXRWYWx1ZTogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgICByZXR1cm4gSXRlbVZhbHVlLmdldERhdGEob2JqLmNob2ljZXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TZXRWYWx1ZTogZnVuY3Rpb24ob2JqLCB2YWx1ZSkge1xyXG4gICAgICAgICAgb2JqLmNob2ljZXMgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInRleHRcIiwge1xyXG4gICAgICAgIG5hbWU6IFwiY2hvaWNlc0J5VXJsOnJlc3RmdWxsXCIsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcIkNob2ljZXNSZXN0ZnVsbFwiLFxyXG4gICAgICAgIG9uR2V0VmFsdWU6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgICAgcmV0dXJuIG9iai5jaG9pY2VzQnlVcmwuZ2V0RGF0YSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TZXRWYWx1ZTogZnVuY3Rpb24ob2JqLCB2YWx1ZSkge1xyXG4gICAgICAgICAgaWYgKCFvYmouY2hvaWNlc0J5VXJsKSB7XHJcbiAgICAgICAgICAgIG9iai5jaG9pY2VzQnlVcmwgPSBuZXcgU3VydmV5LkNob2ljZXNSZXN0ZnVsbCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb2JqLmNob2ljZXNCeVVybC5zZXREYXRhKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwiaW5wdXRcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgZGF0YTogcXVlc3Rpb24uY2hvaWNlcyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogcXVlc3Rpb24ucGxhY2Vob2xkZXJcclxuICAgICAgfTtcclxuICAgICAgaWYgKCEhcXVlc3Rpb24uY2hvaWNlc0J5VXJsKSB7XHJcbiAgICAgICAgb3B0aW9ucy51cmwgPSBmdW5jdGlvbihwaHJhc2UpIHtcclxuICAgICAgICAgIHJldHVybiBxdWVzdGlvbi5jaG9pY2VzQnlVcmwudXJsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb3B0aW9ucy5nZXRWYWx1ZSA9IHF1ZXN0aW9uLmNob2ljZXNCeVVybC52YWx1ZU5hbWU7XHJcbiAgICAgICAgLy8gb3B0aW9ucy5hamF4U2V0dGluZ3MgPSB7XHJcbiAgICAgICAgLy8gICBkYXRhVHlwZTogXCJqc29ucFwiXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgfVxyXG4gICAgICAkZWwuZWFzeUF1dG9jb21wbGV0ZShvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIC8vIHZhciAkZWwgPSAkKGVsKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgIC8vICRlbC5hdXRvY29tcGxldGUoXCJkZXN0cm95XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Vhc3ktYXV0b2NvbXBsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTEiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGljaGVjayB9IGZyb20gXCIuL2ljaGVjay5qc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNlbGVjdDIgfSBmcm9tIFwiLi9zZWxlY3QyLmpzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW1hZ2VwaWNrZXIgfSBmcm9tIFwiLi9pbWFnZS1waWNrZXIuanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnB1dG1hc2sgfSBmcm9tIFwiLi9pbnB1dG1hc2suanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBqcXVlcnliYXJyYXRpbmcgfSBmcm9tIFwiLi9qcXVlcnktYmFyLXJhdGluZy5qc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGpxdWVyeXVpZGF0ZXBpY2tlciB9IGZyb20gXCIuL2pxdWVyeS11aS1kYXRlcGlja2VyLmpzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbm91aXNsaWRlciB9IGZyb20gXCIuL25vdWlzbGlkZXIuanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzZWxlY3QydGFnYm94IH0gZnJvbSBcIi4vc2VsZWN0Mi10YWdib3guanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzaWduYXR1cmVwYWQgfSBmcm9tIFwiLi9zaWduYXR1cmVfcGFkLmpzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc29ydGFibGVqcyB9IGZyb20gXCIuL3NvcnRhYmxlanMuanNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBja2VkaXRvciB9IGZyb20gXCIuL2NrLWVkaXRvci5qc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGF1dG9jb21wbGV0ZSB9IGZyb20gXCIuL2Vhc3ktYXV0b2NvbXBsZXRlLmpzXCI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N1cnZleWpzLXdpZGdldHMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=