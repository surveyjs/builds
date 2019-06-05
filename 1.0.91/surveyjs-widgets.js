(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("inputmask"), require("nouislider"), require("signature_pad"), require("sortablejs"), require("bootstrap-slider"));
	else if(typeof define === 'function' && define.amd)
		define("surveyjs-widgets", ["inputmask", "nouislider", "signature_pad", "sortablejs", "bootstrap-slider"], factory);
	else if(typeof exports === 'object')
		exports["surveyjs-widgets"] = factory(require("inputmask"), require("nouislider"), require("signature_pad"), require("sortablejs"), require("bootstrap-slider"));
	else
		root["surveyjs-widgets"] = factory(root["Inputmask"], root["noUiSlider"], root["SignaturePad"], root["Sortable"], root["Slider"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_17__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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
    checkboxClass: "iradio_square-blue",
    radioClass: "iradio_square-blue",
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
      $el.find("input").data({
        iCheck: undefined
      });

      $el.find("input").iCheck({
        checkboxClass:
          question.checkboxClass ||
          rootWidget.checkboxClass ||
          rootWidget.className,
        radioClass:
          question.radioClass || rootWidget.radioClass || rootWidget.className
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
                  "input[name='" +
                    row.fullName +
                    "'][value='" +
                    row.value +
                    "']"
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
          var index = oldValue.indexOf(event.target.value);
          if (index === -1) {
            question.value = oldValue.concat([event.target.value]);
          }
        } else {
          question.value = event.target.value;
        }
      });
      $el.find("input").on("ifUnchecked", function(event) {
        if (question.getType() === "checkbox") {
          var oldValue = question.value || [];
          var index = oldValue.indexOf(event.target.value);
          if (index >= 0) {
            oldValue.splice(index, 1);
            question.value = oldValue;
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

  Survey.JsonObject.metaData.addProperty("radiogroup", "radioClass");
  Survey.JsonObject.metaData.addProperty("checkbox", "checkboxClass");
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
    widgetIsLoaded: function () {
      return typeof $ == "function" && !!$.fn.select2;
    },
    isFit: function (question) {
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
    activatedByChanged: function (activatedBy) {
      if (!this.widgetIsLoaded()) return;
      widget.activatedBy = activatedBy;
      Survey.JsonObject.metaData.removeProperty("dropdown", "renderAs");
      if (activatedBy == "property") {
        Survey.JsonObject.metaData.addProperty("dropdown", {
          name: "renderAs",
          default: "standard",
          choices: ["standard", "select2"]
        });
        Survey.JsonObject.metaData.addProperty("dropdown", {
          name: "select2Config",
          default: null
        });
      }
      if (activatedBy == "customtype") {
        Survey.JsonObject.metaData.addClass("select2", [], null, "dropdown");
        Survey.JsonObject.metaData.addProperty("select2", {
          name: "select2Config",
          default: null
        });
      }
    },
    afterRender: function (question, el) {
      var settings = question.select2Config;
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

      var updateValueHandler = function () {
        var qText = (typeof question.value === "object")

        if ($el.find("option[value='" + question.value + "']").length) {
          $el.val(question.value).trigger("change");
        } else {
          var newOption = new Option(
            question.value, //TODO if question value is object then need to improve
            question.value,
            true,
            true
          );
          $el.append(newOption).trigger("change");
        }

        othersEl.style.display = !question.isOtherSelected ? "none" : "";
      };
      var updateCommentHandler = function () {
        othersEl.value = question.comment ? question.comment : "";
      };
      var othersElChanged = function () {
        question.comment = othersEl.value;
      };
      var updateChoices = function () {
        $el.select2().empty();

        if (settings) {
          if (settings.ajax) {
            $el.select2(settings);
            question.clearIncorrectValuesCallback = function () { };
          } else {
            settings.data = question.visibleChoices.map(function (choice) {
              return {
                id: choice.value,
                text: choice.text
              };
            });
            $el.select2(settings);
          }
        } else {
          $el.select2({
            theme: "classic",
            disabled: question.isReadOnly,
            data: question.visibleChoices.map(function (choice) {
              return {
                id: choice.value,
                text: choice.text
              };
            })
          });
        }

        updateValueHandler();
        updateCommentHandler();
      };

      question.readOnlyChangedCallback = function () {
        $el.prop("disabled", question.isReadOnly);
      };

      question.registerFunctionOnPropertyValueChanged(
        "visibleChoices",
        function () {
          updateChoices();
        }
      );
      updateChoices();
      $el.on("select2:select", function (e) {
        question.value = e.target.value;
      });
      $el.on("select2:unselecting", function (e) {
        question.value = null;
      });
      othersEl.onchange = othersElChanged;
      question.valueChangedCallback = updateValueHandler;
      question.commentChangedCallback = updateCommentHandler;
      updateValueHandler();
      updateCommentHandler();
    },
    willUnmount: function (question, el) {
      $(el)
        .find("select")
        .off("select2:select")
        .select2("destroy");
      question.readOnlyChangedCallback = null;
      question.clearIncorrectValuesCallback = null;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inputmask__ = __webpack_require__(3);
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
    autoUnmask: true,
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
          name: "prefix",
          default: "$"
        },
        {
          name: "autoUnmask:boolean",
          default: true
        },
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
      var options = {
        autoUnmask:
          typeof surveyElement.autoUnmask !== "undefined"
            ? surveyElement.autoUnmask
            : rootWidget.autoUnmask
      };
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
        options.prefix = surveyElement.prefix || rootWidget.numericPrefix;
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
      if (!!input && !!input.inputmask) {
        input.inputmask.remove();
      }
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
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
      return typeof $ == "function" && !!$.fn.barrating;
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
        default: "css-stars",
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
      var valueChangingByWidget = false;
      var creator = function() {
        $el.barrating("show", {
          theme: question.ratingTheme,
          initialRating: question.value,
          showValues: question.showValues,
          showSelectedRating: false,
          onSelect: function(value, text) {
            valueChangingByWidget = true;
            question.value = value;
            valueChangingByWidget = false;
          }
        });
      };
      creator();
      question.valueChangedCallback = function() {
        if (!valueChangingByWidget && $(el).find("select")[0].value !== question.value) {
          $(el)
            .find("select")
            .barrating("set", question.value);
        }
      };
      question.__barratingOnPropertyChangedCallback = function(
        sender,
        options
      ) {
        if (options.name == "ratingTheme") {
          $el.barrating("destroy");
          creator();
        }
      };
      question.onPropertyChanged.add(
        question.__barratingOnPropertyChangedCallback
      );
    },
    willUnmount: function(question, el) {
      var $el = $(el).find("select");
      $el.barrating("destroy");
      question.valueChangedCallback = undefined;
      question.onPropertyChanged.remove(
        question.__barratingOnPropertyChangedCallback
      );
      question.__barratingOnPropertyChangedCallback = undefined;
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey, window.$);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),
/* 5 */
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
      return !!$ && !!$.fn.datepicker;
    },
    isFit: function(question) {
      return question.getType() === "datepicker";
    },
    htmlTemplate: "<input class='form-control widget-datepicker' type='text'>",
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
        name: "dateFormat"
      });
      Survey.JsonObject.metaData.addProperty("datepicker", {
        name: "config",
        default: null
      });
    },
    afterRender: function(question, el) {
      var $el = $(el).is(".widget-datepicker")
        ? $(el)
        : $(el).find(".widget-datepicker");
      var isSelecting = false;
      var config = $.extend(true, {}, question.config || {});
      if (!!question.placeHolder) {
        $el.attr("placeholder", question.placeHolder);
      }
      if (config.dateFormat === undefined) {
        config.dateFormat = !!question.dateFormat
          ? question.dateFormat
          : undefined;
      }
      if (config.option === undefined) {
        config.option = {
          minDate: null,
          maxDate: null
        };
      }
      if (config.onSelect === undefined) {
        config.onSelect = function(dateText) {
          isSelecting = true;
          question.value = dateText;
          isSelecting = false;
          this.fixFocusIE = true;
        };
      }
      config.fixFocusIE = false;
      config.onClose = function(dateText, inst) {
        this.fixFocusIE = true;
      };
      config.beforeShow = function(input, inst) {
        var result = !!navigator.userAgent.match(/Trident\/7\./)
          ? !this.fixFocusIE
          : true;
        this.fixFocusIE = false;
        return result;
      };
      var pickerWidget = $el.datepicker(config);

      $el.keyup(function(e) {
        if (e.keyCode == 8 || e.keyCode == 46) {
          $.datepicker._clearDate(this);
        }
      });

      question.readOnlyChangedCallback = function() {
        $el.datepicker("option", "disabled", question.isReadOnly);
      };
      question.readOnlyChangedCallback();

      question.valueChangedCallback = function() {
        if (!isSelecting) {
          if (question.value) {
            pickerWidget.datepicker("setDate", question.value);
          } else {
            pickerWidget.datepicker("setDate", null);
          }
          $el.blur();
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

  Survey.matrixDropdownColumnTypes.datepicker = { properties: ["placeHolder"] };
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nouislider__ = __webpack_require__(7);
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
        },
        {
          name: "pipsMode",
          default: "positions"
        },
        {
          name: "pipsValues:itemvalues",
          default: [0, 25, 50, 75, 100]
        },
        {
          name: "pipsDensity:number",
          default: 5
        }
      ]);
    },
    afterRender: function(question, el) {
      el.style.marginBottom = "60px";
      var slider = __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a.create(el, {
        start: question.value || (question.rangeMin + question.rangeMax) / 2,
        connect: [true, false],
        step: question.step,
        tooltips: true,
        pips: {
          mode: question.pipsMode || "positions",
          values: question.pipsValues.map(function(pVal) {
            return parseInt((pVal.value !== undefined && pVal.value) || pVal);
          }),
          density: question.pipsDensity || 5
        },
        range: {
          min: question.rangeMin,
          max: question.rangeMax
        }
      });
      slider.on("change", function() {
        question.value = slider.get();
      });
      var updateValueHandler = function() {
        slider.set(question.value);
      };
      if (question.isReadOnly) {
        el.setAttribute("disabled", true);
      }
      updateValueHandler();
      question.noUiSlider = slider;
      question.valueChangedCallback = updateValueHandler;
      question.readOnlyChangedCallback = function() {
        if (question.isReadOnly) {
          el.setAttribute("disabled", true);
        } else {
          el.removeAttribute("disabled");
        }
      };
    },
    willUnmount: function(question, el) {
      question.noUiSlider.destroy();
      question.noUiSlider = null;
      question.readOnlyChangedCallback = null;
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
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
    defaultJSON: {
      choices: ["Item 1", "Item 2", "Item 3"]
    },
    htmlTemplate: "<select multiple='multiple' style='width: 100%;'></select>",
    isFit: function(question) {
      return question.getType() === "tagbox";
    },
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass(
        "tagbox",
        [
          {
            name: "hasOther",
            visible: false
          }
        ],
        null,
        "checkbox"
      );
      Survey.JsonObject.metaData.addProperty("tagbox", {
        name: "select2Config",
        default: null
      });
      Survey.matrixDropdownColumnTypes.tagbox = {
        properties: [
          "choices",
          "choicesOrder",
          "choicesByUrl",
          "optionsCaption",
          "otherText",
          "choicesVisibleIf"
        ]
      };
    },
    fixStyles: function(el) {
      el.parentElement.querySelector(".select2-search__field").style.border =
        "none";
    },
    afterRender: function(question, el) {
      var self = this;
      var settings = question.select2Config;
      var $el = $(el).is("select") ? $(el) : $(el).find("select");

      self.willUnmount(question, el);

      $el.select2({
        tags: "true",
        disabled: question.isReadOnly,
        theme: "classic"
      });

      self.fixStyles(el);

      var updateValueHandler = function() {
        $el.val(question.value).trigger("change");
        self.fixStyles(el);
      };
      var updateChoices = function() {
        $el.select2().empty();

        if (settings) {
          if (settings.ajax) {
            $el.select2(settings);
          } else {
            settings.data = question.visibleChoices.map(function(choice) {
              return {
                id: choice.value,
                text: choice.text
              };
            });
            $el.select2(settings);
          }
        } else {
          $el.select2({
            data: question.visibleChoices.map(function(choice) {
              return {
                id: choice.value,
                text: choice.text
              };
            })
          });
        }

        updateValueHandler();
      };

      question._propertyValueChangedFnSelect2 = function() {
        updateChoices();
      };

      question.readOnlyChangedCallback = function() {
        $el.prop("disabled", question.isReadOnly);
      };
      question.registerFunctionOnPropertyValueChanged(
        "visibleChoices",
        question._propertyValueChangedFnSelect2
      );
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
      if (!question._propertyValueChangedFnSelect2) return;

      $(el)
        .find("select")
        .off("select2:select")
        .select2("destroy");
      question.readOnlyChangedCallback = null;
      question.valueChangedCallback = null;
      question.unRegisterFunctionOnPropertyValueChanged(
        "visibleChoices",
        question._propertyValueChangedFnSelect2
      );
      question._propertyValueChangedFnSelect2 = undefined;
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey, window.$);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_signature_pad__ = __webpack_require__(10);
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
        {
          name: "allowClear:boolean",
          default: true
        },
        {
          name: "width:number",
          default: 300
        },
        {
          name: "height:number",
          default: 200
        }
      ]);
    },
    afterRender: function(question, el) {
      var rootWidget = this;
      var canvas = el.getElementsByTagName("canvas")[0];
      var buttonEl = el.getElementsByTagName("button")[0];
      var signaturePad = new __WEBPACK_IMPORTED_MODULE_0_signature_pad___default.a(canvas);
      if (question.isReadOnly) {
        signaturePad.off();
      }

      buttonEl.onclick = function() {
        question.value = undefined;
      };

      question.readOnlyChangedCallback = function() {
        if (!question.allowClear || question.isReadOnly) {
          signaturePad.off();
          buttonEl.style.display = "none";
        } else {
          signaturePad.on();
          buttonEl.style.display = "block";
        }
      };

      signaturePad.penColor = rootWidget.penColor;
      signaturePad.onEnd = function() {
        var data = signaturePad.toDataURL();
        question.value = data;
      };
      var updateValueHandler = function() {
        var data = question.value;
        canvas.width = question.width;
        canvas.height = question.height;
        resizeCanvas(canvas);
        signaturePad.fromDataURL(
          data || "data:image/gif;base64,R0lGODlhAQABAIAAAP"
        );
      };
      question.valueChangedCallback = updateValueHandler;
      updateValueHandler();
      question.readOnlyChangedCallback();
      question.signaturePad = signaturePad;
      var propertyChangedHandler = function(sender, options) {
        if (options.name === "width" || options.name === "height") {
          updateValueHandler();
        }
      };
      question.onPropertyChanged.add(propertyChangedHandler);
      question.signaturePad.propertyChangedHandler = propertyChangedHandler;
    },
    willUnmount: function(question, el) {
      if (question.signaturePad) {
        question.onPropertyChanged.remove(
          question.signaturePad.propertyChangedHandler
        );
        question.signaturePad.off();
      }
      question.readOnlyChangedCallback = null;
      question.signaturePad = null;
      question.readOnlyChangedCallback = null;
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sortablejs__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sortablejs__);


function init(Survey) {
  var widget = {
    name: "sortablelist",
    title: "Sortable list",
    iconName: "icon-sortablejs",
    widgetIsLoaded: function () {
      return typeof __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a != "undefined";
    },
    defaultJSON: { choices: ["Item 1", "Item 2", "Item 3"] },
    rootStyle: "width:100%:",
    areaStyle:
      "border: 1px solid #1ab394; width:100%; min-height:50px; margin-top:10px;",
    itemStyle: "background-color:#1ab394;color:#fff;margin:5px;padding:10px;",
    isFit: function (question) {
      return question.getType() === "sortablelist";
    },
    htmlTemplate: "<div></div>",
    activatedByChanged: function (activatedBy) {
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
      Survey.JsonObject.metaData.addProperty("sortablelist", {
        name: "useDefaultTheme",
        default: true
      });
      Survey.JsonObject.metaData.addProperty("sortablelist", {
        name: "maxAnswersCount:number",
        default: -1
      });

    },
    afterRender: function (question, el) {
      var self = this;

      if (!question.useDefaultTheme) {
        self.rootStyle = "";
        self.itemStyle = "";
        self.areaStyle = "";
      }
      el.style.cssText = self.rootStyle;
      el.className = "sjs-sortablejs-root";
      var source, result;
      var resultEl = document.createElement("div");
      var emptyEl = document.createElement("span");
      var sourceEl = document.createElement("div");

      resultEl.style.cssText = self.areaStyle;
      resultEl.className = "sjs-sortablejs-result";

      emptyEl.innerHTML = question.emptyText;
      resultEl.appendChild(emptyEl);

      sourceEl.style.cssText = self.areaStyle;
      sourceEl.className = "sjs-sortablejs-source";

      el.appendChild(resultEl);
      el.appendChild(sourceEl);
      var hasValueInResults = function (val) {
        var res = question.value;
        if (!Array.isArray(res)) return false;
        for (var i = 0; i < res.length; i++) {
          if (res[i] == val) return true;
        }
        return false;
      };
      var addChoiceToWidget = function (choice, inResults) {
        var srcEl = inResults ? resultEl : sourceEl;
        var newEl = document.createElement("div");
        newEl.innerHTML =
          "<div class='sjs-sortablejs-item' style='" +
          self.itemStyle +
          "'>" +
          choice.text +
          "</div>";
        newEl.dataset["value"] = choice.value;
        srcEl.appendChild(newEl);
      };
      var getChoicesNotInResults = function () {
        var res = [];
        question.activeChoices.forEach(function (choice) {
          if (!hasValueInResults(choice.value)) {
            res.push(choice);
          }
        });
        return res;
      };
      var getChoicesInResults = function () {
        var res = [];
        var val = question.value;
        if (!Array.isArray(val)) return res;
        for (var i = 0; i < val.length; i++) {
          var item = Survey.ItemValue.getItemByValue(
            question.activeChoices,
            val[i]
          );
          if (!!item) {
            res.push(item);
          }
        }
        return res;
      };
      var isUpdatingQuestionValue = false;
      var updateValueHandler = function () {
        if (isUpdatingQuestionValue) return;
        resultEl.innerHTML = "";
        resultEl.appendChild(emptyEl);
        sourceEl.innerHTML = "";
        var notInResults = getChoicesNotInResults();
        var inResults = getChoicesInResults();
        emptyEl.style.display = inResults.length > 0 ? "none" : "";
        inResults.forEach(function (choice) {
          addChoiceToWidget(choice, true);
        });
        notInResults.forEach(function (choice) {
          addChoiceToWidget(choice, false);
        });
      };
      result = question.resultEl = __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create(resultEl, {
        animation: 150,
        disabled: question.isReadOnly,
        group: {
          name: question.name,
          put: function (to) {
            return question.maxAnswersCount < 0 || to.el.children.length <= question.maxAnswersCount;
          },
        },
        onSort: function (evt) {
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
      source = question.sourceEl = __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create(sourceEl, {
        animation: 150,
        disabled: question.isReadOnly,
        group: question.name
      });
      question.valueChangedCallback = updateValueHandler;
      question.readOnlyChangedCallback = function () {
        if (question.isReadOnly) {
          result.options.disabled = true;
          source.options.disabled = true;
        } else {
          result.options.disabled = false;
          source.options.disabled = false;
        }
      };
      updateValueHandler();
    },
    willUnmount: function (question, el) {
      question.resultEl.destroy();
      question.sourceEl.destroy();
      question.readOnlyChangedCallback = null;
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
      var name = question.name;
      CKEDITOR.editorConfig = function(config) {
        config.language = "es";
        config.height = question.height;
        config.toolbarCanCollapse = true;
      };
      el.name = name;

      if (CKEDITOR.instances[name]) {
        CKEDITOR.instances[name].removeAllListeners();
        CKEDITOR.remove(CKEDITOR.instances[name]);
      }

      var editor = CKEDITOR.replace(el);
      CKEDITOR.instances[name].config.readOnly = question.isReadOnly;

      var isValueChanging = false;
      var updateValueHandler = function() {
        if (isValueChanging || typeof question.value === "undefined") return;
        editor.setData(question.value);
      };
      editor.on("change", function() {
        isValueChanging = true;
        question.value = editor.getData();
        isValueChanging = false;
      });

      question.valueChangedCallback = updateValueHandler;
      question.readOnlyChangedCallback = function() {
        if (question.isReadOnly) {
          editor.setReadOnly(true);
        } else {
          editor.setReadOnly(false);
        }
      };
      updateValueHandler();
    },
    willUnmount: function (question, el) {
      question.readOnlyChangedCallback = null;
      CKEDITOR.instances[question.id].destroy(false);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey, $) {
  $ = $ || window.$;
  var widget = {
    name: "autocomplete",
    widgetIsLoaded: function() {
      return typeof $ == "function" && !!$.fn.easyAutocomplete;
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
      Survey.JsonObject.metaData.addProperty("text", "choices:itemvalues");
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
      $el.parents(".sv_qstn")[0].style.overflow = "visible";
      var options = {
        data: (question.choices || []).map(function(item) {
          return item.text;
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

      $el[0].oninput = function() {
        question.customWidgetData.isNeedRender = true;
      };
      var updateHandler = function() {
        $el[0].value =
          typeof question.value === "undefined" ? "" : question.value;
      };
      question.valueChangedCallback = updateHandler;
      updateHandler();
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey) {
  var widget = {
    settings: {
      supportedTypes: ["radiogroup", "checkbox", "boolean"],
      radiogroup: {
        rootClass: "pretty p-default p-round",
        inputType: "radio",
        states: [{ stateClass: "state p-success", addOn: "" }]
      },
      checkbox: {
        rootClass: "pretty p-default",
        inputType: "checkbox",
        states: [{ stateClass: "state p-success", addOn: "" }]
      },
      boolean: {
        rootClass: "pretty p-icon p-default p-has-indeterminate",
        inputType: "checkbox",
        states: [
          { stateClass: "state p-success", addOn: "" },
          {
            stateClass: "state p-success p-is-indeterminate",
            iconClass: "icon mdi mdi-minus",
            addOn: ""
          }
        ]
      }
    },
    name: "pretty-checkbox",
    activatedBy: "property",
    widgetIsLoaded: function() {
      return true;
    },
    htmlTemplate: "<fieldset></fieldset>",
    isFit: function(question) {
      var isFitByType =
        widget.settings.supportedTypes.indexOf(question.getType()) !== -1;

      if (widget.activatedBy === "property") {
        return question["renderAs"] === "prettycheckbox" && isFitByType;
      } else if (widget.activatedBy === "type") {
        return isFitByType;
      }

      return false;
    },
    activatedByChanged: function(value) {
      if (this.widgetIsLoaded()) {
        widget.activatedBy = value;
        widget.settings.supportedTypes.forEach(function(supportedType) {
          Survey.JsonObject.metaData.removeProperty(supportedType, "renderAs");

          if (value === "property") {
            Survey.JsonObject.metaData.addProperty(supportedType, {
              name: "renderAs",
              default: "standard",
              choices: ["standard", "prettycheckbox"]
            });
          }
        });
      }
    },
    isDefaultRender: false,
    afterRender: function(question, element) {
      var itemInputs = {};
      var questionType = question.getType();
      var options = this.settings[questionType];
      var checkboxType = questionType === "checkbox";
      var radiogroupType = questionType === "radiogroup";
      var booleanType = questionType === "boolean";

      var inChangeHandler = false;
      var changeHandler = function(event) {
        inChangeHandler = true;
        try {
          var target = arguments[0].target;
          var targetValue = target.value;
          var targetChecked = target.checked;

          if (checkboxType) {
            var questionValue = question.createValueCopy() || [];
            var valueIndex = questionValue.indexOf(targetValue);
            if (targetChecked) {
              if (valueIndex === -1) {
                questionValue.push(targetValue);
              }
            } else {
              if (valueIndex !== -1) {
                questionValue.splice(valueIndex, 1);
              }
            }

            question.value = questionValue;
          } else if (radiogroupType) {
            question.value = targetValue;
          } else {
            question.value = targetChecked;
          }
        } finally {
          inChangeHandler = false;
        }
      };

      var itemWidth =
        question.colCount > 0 ? 100 / question.colCount + "%" : "";

      var choices = booleanType
        ? [{ locText: question.locTitle, value: !!question.value }]
        : question.choices;
      choices.forEach(function(choiceItem, index) {
        var input = document.createElement("input");
        input.type = options.inputType;
        input.name = question.name + (checkboxType ? "" + index : "");
        input.onchange = changeHandler;
        input.value = choiceItem.value;

        if (booleanType) {
          input.indeterminate = question.defaultValue === "indeterminate";
        }

        var controlRoot = document.createElement("div");
        controlRoot.className = options.rootClass;
        controlRoot.appendChild(input);

        options.states.forEach(function(state) {
          var stateRoot = document.createElement("div");
          stateRoot.className = state.stateClass;
          if (!!state.iconClass) {
            var icon = document.createElement("i");
            icon.className = state.iconClass;
            stateRoot.appendChild(icon);
          }

          var label = document.createElement("label");
          if (choiceItem.locText.hasHtml) {
            label.innerHTML = choiceItem.locText.html;
          } else {
            label.textContent = choiceItem.locText.text;
          }
          stateRoot.appendChild(label);

          controlRoot.appendChild(stateRoot);
          if (!!state.addOn) {
            stateRoot.insertAdjacentHTML("afterbegin", state.addOn);
          }
        });

        var itemRoot = document.createElement("div");
        itemRoot.className = "sv_cw_pretty_checkbox_" + questionType;
        itemRoot.style.display = "inline-block";
        itemRoot.style.width = itemWidth;
        itemRoot.appendChild(controlRoot);

        element.appendChild(itemRoot);

        itemInputs[choiceItem.value] = input;
      });

      var updateValueHandler = function(newValue) {
        if (!inChangeHandler) {
          var checkedItems = newValue || [];
          if (radiogroupType) {
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
      var readOnlyHandler = function() {
        Object.values(itemInputs).forEach(function(inputItem) {
          if (question.isReadOnly) {
            inputItem.setAttribute("disabled", true);
          } else {
            inputItem.removeAttribute("disabled");
          }
        });
      };

      question.valueChangedCallback = updateValueHandler;
      question.readOnlyChangedCallback = readOnlyHandler;
      updateValueHandler(question.value);
      readOnlyHandler();
    },
    willUnmount: function(question, el) {
      question.valueChangedCallback = undefined;
      question.readOnlyChangedCallback = undefined;
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "property");
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
var Slider = __webpack_require__(17);

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
      Survey.JsonObject.metaData.addProperty("bootstrapslider", {
        name: "config",
        default: null
      });
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

      var config = question.config || {};

      if (config.id === undefined) {
        config.id = question.name + "_" + question.id;
      }

      if (config.min === undefined) {
        config.min = question.rangeMin;
      }

      if (config.max === undefined) {
        config.max = question.rangeMax;
      }

      if (config.step === undefined) {
        config.step = question.step;
      }

      if (config.enabled === undefined) {
        config.enabled = !question.isReadOnly;
      }

      if (config.value === undefined) {
        config.value = question.value || question.rangeMin;
      }

      var slider = new Slider(inputEl, config);

      slider.on("change", function(valueObj) {
        question.value = slider.getValue();
      });
      var updateValueHandler = function() {
        slider.setValue(question.value || question.rangeMin);
      };
      question.readOnlyChangedCallback = function() {
        if (question.isReadOnly) {
          slider.disable();
        } else {
          slider.enable();
        }
      };
      question.bootstrapSlider = slider;
      question.valueChangedCallback = updateValueHandler;
    },
    willUnmount: function(question, el) {
      question.bootstrapSlider.destroy();
      question.bootstrapSlider = null;
      question.readOnlyChangedCallback = null;
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recordrtc__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recordrtc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recordrtc__);


function init(Survey) {
  var widget = {
	
    name: "microphone",
    title: "Microphone",
    iconName: "icon-microphone",
    widgetIsLoaded: function() {
      return typeof __WEBPACK_IMPORTED_MODULE_0_recordrtc___default.a != "undefined";
    },
    isFit: function(question) {
      return question.getType() === "microphone";
    },
    htmlTemplate:
		"<div>"+
		"<button type='button'  title='Record'><i class='fa fa-microphone' aria-hidden='true'></i></button>"+ 
		"&nbsp;<button type='button' title='Save'><i class='fa fa-cloud' aria-hidden='true'></i></button>"+
		"&nbsp;<audio style='"+
		"position:relative; "+
		"top:16px; "+
		"left:10px; "+
		"height:35px;"+
		"-moz-box-shadow: 2px 2px 4px 0px #006773;"+
		"-webkit-box-shadow:  2px 2px 4px 0px #006773;"+
		"box-shadow: 2px 2px 4px 0px #006773;"+
		"' "+
		"controls='true' >"+
		"</audio>"+
		"</div>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass("microphone", [], null, "empty");
    },
	
    afterRender: function(question, el) {
      var rootWidget = this;
	  var buttonStartEl = el.getElementsByTagName("button")[0];
	  var buttonStopEl = el.getElementsByTagName("button")[1];
	  var audioEl = el.getElementsByTagName("audio")[0];
	 
//////////  RecordRTC logic	
	  
	  var successCallback = function(stream) {
		var options={
			type: 'audio',
			mimeType: 'audio/webm',
			audioBitsPerSecond: 44100,
			sampleRate: 44100, 
			bufferSize: 16384, 
			numberOfAudioChannels: 1
		};  
		console.log("successCallback");
		question.survey.mystream = stream;
		question.survey.recordRTC = __WEBPACK_IMPORTED_MODULE_0_recordrtc___default()(question.survey.mystream, options);
		if(typeof question.survey.recordRTC != "undefined"){
			console.log("startRecording");
			question.survey.recordRTC.startRecording();
		}
	  };

	  var errorCallback=function() {
		alert('No microphone');
		question.survey.recordRTC=undefined;
		question.survey.mystream=undefined;
	  };

	  var processAudio= function(audioVideoWebMURL) {
		console.log("processAudio");
		var recordedBlob = question.survey.recordRTC.getBlob();
		
		var fileReader = new FileReader();
        fileReader.onload = function(event){
		  var dataUri = event.target.result;
		  console.log("dataUri: " +dataUri);
		  question.value = dataUri;
		  audioEl.src=dataUri;
		  
		  console.log("cleaning");
		  question.survey.recordRTC=undefined;
		  question.survey.mystream=undefined;
        };
        fileReader.readAsDataURL(recordedBlob);
	  };

      var startRecording=function() {
		  
		 // erase previous data 
		 question.value=undefined;
		
       	// if recorder open on another question	- try to stop recording		
		if(typeof question.survey.recordRTC != "undefined"){
			question.survey.recordRTC.stopRecording(doNothingHandler);
			if(typeof question.survey.mystream != "undefined"){
				question.survey.mystream.getAudioTracks().forEach(function(track) {
				track.stop();
				}
				);
			}
		}
			 
		var mediaConstraints = {
		  video: false,
		  audio: true
		};
		
		navigator.mediaDevices
			.getUserMedia(mediaConstraints)
			.then(successCallback.bind(this), errorCallback.bind(this));
     };

	  var stopRecording=function() {
		  console.log("stopRecording");
		  if(typeof question.survey.recordRTC != "undefined"){
			question.survey.recordRTC.stopRecording(processAudio.bind(this));
			if(typeof question.survey.mystream != "undefined"){
				question.survey.mystream.getAudioTracks().forEach(function(track) {
				track.stop();
				}
				);
			}
		  }
	  };
	
//////////////  end RTC logic //////////////////
	  
	  if (!question.isReadOnly) {
        buttonStartEl.onclick = startRecording;
      } else {
        buttonStartEl.parentNode.removeChild(buttonStartEl);
      }
	  
	  if (!question.isReadOnly) {
        buttonStopEl.onclick = stopRecording;
      } else {
        buttonStopEl.parentNode.removeChild(buttonStopEl);
      }
	  
	  
      audioEl.src=question.value
      
      var updateValueHandler = function() {
        
      };
	  
	  var doNothingHandler = function() {
        
      };
	  
      question.valueChangedCallback = updateValueHandler;
      updateValueHandler();
	  
     
    },
    willUnmount: function(question, el) {
      console.log("unmount microphone no record ");
      if(typeof question.survey.recordRTC != "undefined"){
			question.survey.recordRTC.stopRecording(doNothingHandler);
			if(typeof question.survey.mystream != "undefined"){
				question.survey.mystream.getAudioTracks().forEach(function(track) {
				track.stop();
				});
			}
		question.value=undefined;
		question.survey.recordRTC=undefined;
		question.survey.mystream=undefined;
	   }
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
/* WEBPACK VAR INJECTION */(function(global, process) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

// Last time updated: 2019-02-06 11:32:40 AM UTC

// ________________
// RecordRTC v5.5.4

// Open-Sourced: https://github.com/muaz-khan/RecordRTC

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

// ____________
// RecordRTC.js

/**
 * {@link https://github.com/muaz-khan/RecordRTC|RecordRTC} is a WebRTC JavaScript library for audio/video as well as screen activity recording. It supports Chrome, Firefox, Opera, Android, and Microsoft Edge. Platforms: Linux, Mac and Windows. 
 * @summary Record audio, video or screen inside the browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef RecordRTC
 * @class
 * @example
 * var recorder = RecordRTC(mediaStream or [arrayOfMediaStream], {
 *     type: 'video', // audio or video or gif or canvas
 *     recorderType: MediaStreamRecorder || CanvasRecorder || StereoAudioRecorder || Etc
 * });
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, desiredSampRate: 16000, video: HTMLVideoElement, etc.}
 */

function RecordRTC(mediaStream, config) {
    if (!mediaStream) {
        throw 'First parameter is required.';
    }

    config = config || {
        type: 'video'
    };

    config = new RecordRTCConfiguration(mediaStream, config);

    // a reference to user's recordRTC object
    var self = this;

    function startRecording(config2) {
        if (!!config2) {
            // allow users to set options using startRecording method
            // config2 is similar to main "config" object (second parameter over RecordRTC constructor)
            config = new RecordRTCConfiguration(mediaStream, config2);
        }

        if (!config.disableLogs) {
            console.log('started recording ' + config.type + ' stream.');
        }

        if (mediaRecorder) {
            mediaRecorder.clearRecordedData();
            mediaRecorder.record();

            setState('recording');

            if (self.recordingDuration) {
                handleRecordingDuration();
            }
            return self;
        }

        initRecorder(function() {
            if (self.recordingDuration) {
                handleRecordingDuration();
            }
        });

        return self;
    }

    function initRecorder(initCallback) {
        if (initCallback) {
            config.initCallback = function() {
                initCallback();
                initCallback = config.initCallback = null; // recorder.initRecorder should be call-backed once.
            };
        }

        var Recorder = new GetRecorderType(mediaStream, config);

        mediaRecorder = new Recorder(mediaStream, config);
        mediaRecorder.record();

        setState('recording');

        if (!config.disableLogs) {
            console.log('Initialized recorderType:', mediaRecorder.constructor.name, 'for output-type:', config.type);
        }
    }

    function stopRecording(callback) {
        callback = callback || function() {};

        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state === 'paused') {
            self.resumeRecording();

            setTimeout(function() {
                stopRecording(callback);
            }, 1);
            return;
        }

        if (self.state !== 'recording' && !config.disableLogs) {
            console.warn('Recording state should be: "recording", however current state is: ', self.state);
        }

        if (!config.disableLogs) {
            console.log('Stopped recording ' + config.type + ' stream.');
        }

        if (config.type !== 'gif') {
            mediaRecorder.stop(_callback);
        } else {
            mediaRecorder.stop();
            _callback();
        }

        setState('stopped');

        function _callback(__blob) {
            if (!mediaRecorder) {
                if (typeof callback.call === 'function') {
                    callback.call(self, '');
                } else {
                    callback('');
                }
                return;
            }

            Object.keys(mediaRecorder).forEach(function(key) {
                if (typeof mediaRecorder[key] === 'function') {
                    return;
                }

                self[key] = mediaRecorder[key];
            });

            var blob = mediaRecorder.blob;

            if (!blob) {
                if (__blob) {
                    mediaRecorder.blob = blob = __blob;
                } else {
                    throw 'Recording failed.';
                }
            }

            if (blob && !config.disableLogs) {
                console.log(blob.type, '->', bytesToSize(blob.size));
            }

            if (callback) {
                var url;

                try {
                    url = URL.createObjectURL(blob);
                } catch (e) {}

                if (typeof callback.call === 'function') {
                    callback.call(self, url);
                } else {
                    callback(url);
                }
            }

            if (!config.autoWriteToDisk) {
                return;
            }

            getDataURL(function(dataURL) {
                var parameter = {};
                parameter[config.type + 'Blob'] = dataURL;
                DiskStorage.Store(parameter);
            });
        }
    }

    function pauseRecording() {
        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state !== 'recording') {
            if (!config.disableLogs) {
                console.warn('Unable to pause the recording. Recording state: ', self.state);
            }
            return;
        }

        setState('paused');

        mediaRecorder.pause();

        if (!config.disableLogs) {
            console.log('Paused recording.');
        }
    }

    function resumeRecording() {
        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state !== 'paused') {
            if (!config.disableLogs) {
                console.warn('Unable to resume the recording. Recording state: ', self.state);
            }
            return;
        }

        setState('recording');

        // not all libs have this method yet
        mediaRecorder.resume();

        if (!config.disableLogs) {
            console.log('Resumed recording.');
        }
    }

    function readFile(_blob) {
        postMessage(new FileReaderSync().readAsDataURL(_blob));
    }

    function getDataURL(callback, _mediaRecorder) {
        if (!callback) {
            throw 'Pass a callback function over getDataURL.';
        }

        var blob = _mediaRecorder ? _mediaRecorder.blob : (mediaRecorder || {}).blob;

        if (!blob) {
            if (!config.disableLogs) {
                console.warn('Blob encoder did not finish its job yet.');
            }

            setTimeout(function() {
                getDataURL(callback, _mediaRecorder);
            }, 1000);
            return;
        }

        if (typeof Worker !== 'undefined' && !navigator.mozGetUserMedia) {
            var webWorker = processInWebWorker(readFile);

            webWorker.onmessage = function(event) {
                callback(event.data);
            };

            webWorker.postMessage(blob);
        } else {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = function(event) {
                callback(event.target.result);
            };
        }

        function processInWebWorker(_function) {
            try {
                var blob = URL.createObjectURL(new Blob([_function.toString(),
                    'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
                ], {
                    type: 'application/javascript'
                }));

                var worker = new Worker(blob);
                URL.revokeObjectURL(blob);
                return worker;
            } catch (e) {}
        }
    }

    function handleRecordingDuration(counter) {
        counter = counter || 0;

        if (self.state === 'paused') {
            setTimeout(function() {
                handleRecordingDuration(counter);
            }, 1000);
            return;
        }

        if (self.state === 'stopped') {
            return;
        }

        if (counter >= self.recordingDuration) {
            stopRecording(self.onRecordingStopped);
            return;
        }

        counter += 1000; // 1-second

        setTimeout(function() {
            handleRecordingDuration(counter);
        }, 1000);
    }

    function setState(state) {
        if (!self) {
            return;
        }

        self.state = state;

        if (typeof self.onStateChanged.call === 'function') {
            self.onStateChanged.call(self, state);
        } else {
            self.onStateChanged(state);
        }
    }

    var WARNING = 'It seems that recorder is destroyed or "startRecording" is not invoked for ' + config.type + ' recorder.';

    function warningLog() {
        if (config.disableLogs === true) {
            return;
        }

        console.warn(WARNING);
    }

    var mediaRecorder;

    var returnObject = {
        /**
         * This method starts the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var recorder = RecordRTC(mediaStream, {
         *     type: 'video'
         * });
         * recorder.startRecording();
         */
        startRecording: startRecording,

        /**
         * This method stops the recording. It is strongly recommended to get "blob" or "URI" inside the callback to make sure all recorders finished their job.
         * @param {function} callback - Callback to get the recorded blob.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     // use either "this" or "recorder" object; both are identical
         *     video.src = this.toURL();
         *     var blob = this.getBlob();
         * });
         */
        stopRecording: stopRecording,

        /**
         * This method pauses the recording. You can resume recording using "resumeRecording" method.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo Firefox is unable to pause the recording. Fix it.
         * @example
         * recorder.pauseRecording();  // pause the recording
         * recorder.resumeRecording(); // resume again
         */
        pauseRecording: pauseRecording,

        /**
         * This method resumes the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.pauseRecording();  // first of all, pause the recording
         * recorder.resumeRecording(); // now resume it
         */
        resumeRecording: resumeRecording,

        /**
         * This method initializes the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo This method should be deprecated.
         * @example
         * recorder.initRecorder();
         */
        initRecorder: initRecorder,

        /**
         * Ask RecordRTC to auto-stop the recording after 5 minutes.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var fiveMinutes = 5 * 1000 * 60;
         * recorder.setRecordingDuration(fiveMinutes, function() {
         *    var blob = this.getBlob();
         *    video.src = this.toURL();
         * });
         * 
         * // or otherwise
         * recorder.setRecordingDuration(fiveMinutes).onRecordingStopped(function() {
         *    var blob = this.getBlob();
         *    video.src = this.toURL();
         * });
         */
        setRecordingDuration: function(recordingDuration, callback) {
            if (typeof recordingDuration === 'undefined') {
                throw 'recordingDuration is required.';
            }

            if (typeof recordingDuration !== 'number') {
                throw 'recordingDuration must be a number.';
            }

            self.recordingDuration = recordingDuration;
            self.onRecordingStopped = callback || function() {};

            return {
                onRecordingStopped: function(callback) {
                    self.onRecordingStopped = callback;
                }
            };
        },

        /**
         * This method can be used to clear/reset all the recorded data.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo Figure out the difference between "reset" and "clearRecordedData" methods.
         * @example
         * recorder.clearRecordedData();
         */
        clearRecordedData: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            mediaRecorder.clearRecordedData();

            if (!config.disableLogs) {
                console.log('Cleared old recorded data.');
            }
        },

        /**
         * Get the recorded blob. Use this method inside the "stopRecording" callback.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     var blob = this.getBlob();
         *
         *     var file = new File([blob], 'filename.webm', {
         *         type: 'video/webm'
         *     });
         *
         *     var formData = new FormData();
         *     formData.append('file', file); // upload "File" object rather than a "Blob"
         *     uploadToServer(formData);
         * });
         * @returns {Blob} Returns recorded data as "Blob" object.
         */
        getBlob: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            return mediaRecorder.blob;
        },

        /**
         * Get data-URI instead of Blob.
         * @param {function} callback - Callback to get the Data-URI.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     recorder.getDataURL(function(dataURI) {
         *         video.src = dataURI;
         *     });
         * });
         */
        getDataURL: getDataURL,

        /**
         * Get virtual/temporary URL. Usage of this URL is limited to current tab.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     video.src = this.toURL();
         * });
         * @returns {String} Returns a virtual/temporary URL for the recorded "Blob".
         */
        toURL: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            return URL.createObjectURL(mediaRecorder.blob);
        },

        /**
         * Get internal recording object (i.e. internal module) e.g. MutliStreamRecorder, MediaStreamRecorder, StereoAudioRecorder or WhammyRecorder etc.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var internal = recorder.getInternalRecorder();
         * if(internal instanceof MultiStreamRecorder) {
         *     internal.addStreams([newAudioStream]);
         *     internal.resetVideoStreams([screenStream]);
         * }
         * @returns {Object} Returns internal recording object.
         */
        getInternalRecorder: function() {
            return mediaRecorder;
        },

        /**
         * Invoke save-as dialog to save the recorded blob into your disk.
         * @param {string} fileName - Set your own file name.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     this.save('file-name');
         *
         *     // or manually:
         *     invokeSaveAsDialog(this.getBlob(), 'filename.webm');
         * });
         */
        save: function(fileName) {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            invokeSaveAsDialog(mediaRecorder.blob, fileName);
        },

        /**
         * This method gets a blob from indexed-DB storage.
         * @param {function} callback - Callback to get the recorded blob.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.getFromDisk(function(dataURL) {
         *     video.src = dataURL;
         * });
         */
        getFromDisk: function(callback) {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            RecordRTC.getFromDisk(config.type, callback);
        },

        /**
         * This method appends an array of webp images to the recorded video-blob. It takes an "array" object.
         * @type {Array.<Array>}
         * @param {Array} arrayOfWebPImages - Array of webp images.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo This method should be deprecated.
         * @example
         * var arrayOfWebPImages = [];
         * arrayOfWebPImages.push({
         *     duration: index,
         *     image: 'data:image/webp;base64,...'
         * });
         * recorder.setAdvertisementArray(arrayOfWebPImages);
         */
        setAdvertisementArray: function(arrayOfWebPImages) {
            config.advertisement = [];

            var length = arrayOfWebPImages.length;
            for (var i = 0; i < length; i++) {
                config.advertisement.push({
                    duration: i,
                    image: arrayOfWebPImages[i]
                });
            }
        },

        /**
         * It is equivalent to <code class="str">"recorder.getBlob()"</code> method. Usage of "getBlob" is recommended, though.
         * @property {Blob} blob - Recorded Blob can be accessed using this property.
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     var blob = this.blob;
         *
         *     // below one is recommended
         *     var blob = this.getBlob();
         * });
         */
        blob: null,

        /**
         * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
         * @property {number} bufferSize - Buffer-size used to encode the WAV container
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     alert('Recorder used this buffer-size: ' + this.bufferSize);
         * });
         */
        bufferSize: 0,

        /**
         * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
         * @property {number} sampleRate - Sample-rates used to encode the WAV container
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     alert('Recorder used these sample-rates: ' + this.sampleRate);
         * });
         */
        sampleRate: 0,

        /**
         * {recorderType:StereoAudioRecorder} returns ArrayBuffer object.
         * @property {ArrayBuffer} buffer - Audio ArrayBuffer, supported only in Chrome.
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     var arrayBuffer = this.buffer;
         *     alert(arrayBuffer.byteLength);
         * });
         */
        buffer: null,

        /**
         * This method resets the recorder. So that you can reuse single recorder instance many times.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.reset();
         * recorder.startRecording();
         */
        reset: function() {
            if (mediaRecorder && typeof mediaRecorder.clearRecordedData === 'function') {
                mediaRecorder.clearRecordedData();
            }
            mediaRecorder = null;
            setState('inactive');
            self.blob = null;
        },

        /**
         * This method is called whenever recorder's state changes. Use this as an "event".
         * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.onStateChanged = function(state) {
         *     console.log('Recorder state: ', state);
         * };
         */
        onStateChanged: function(state) {
            if (!config.disableLogs) {
                console.log('Recorder state changed:', state);
            }
        },

        /**
         * A recorder can have inactive, recording, paused or stopped states.
         * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
         * @memberof RecordRTC
         * @static
         * @readonly
         * @example
         * // this looper function will keep you updated about the recorder's states.
         * (function looper() {
         *     document.querySelector('h1').innerHTML = 'Recorder\'s state is: ' + recorder.state;
         *     if(recorder.state === 'stopped') return; // ignore+stop
         *     setTimeout(looper, 1000); // update after every 3-seconds
         * })();
         * recorder.startRecording();
         */
        state: 'inactive',

        /**
         * Get recorder's readonly state.
         * @method
         * @memberof RecordRTC
         * @example
         * var state = recorder.getState();
         * @returns {String} Returns recording state.
         */
        getState: function() {
            return self.state;
        },

        /**
         * Destroy RecordRTC instance. Clear all recorders and objects.
         * @method
         * @memberof RecordRTC
         * @example
         * recorder.destroy();
         */
        destroy: function() {
            var disableLogsCache = config.disableLogs;

            config = {
                disableLogs: true
            };
            self.reset();
            setState('destroyed');
            returnObject = self = null;

            if (Storage.AudioContextConstructor) {
                Storage.AudioContextConstructor.close();
                Storage.AudioContextConstructor = null;
            }

            config.disableLogs = disableLogsCache;

            if (!config.disableLogs) {
                console.warn('RecordRTC is destroyed.');
            }
        },

        /**
         * RecordRTC version number
         * @property {String} version - Release version number.
         * @memberof RecordRTC
         * @static
         * @readonly
         * @example
         * alert(recorder.version);
         */
        version: '5.5.4'
    };

    if (!this) {
        self = returnObject;
        return returnObject;
    }

    // if someone wants to use RecordRTC with the "new" keyword.
    for (var prop in returnObject) {
        this[prop] = returnObject[prop];
    }

    self = this;

    return returnObject;
}

RecordRTC.version = '5.5.4';

if (true /* && !!module.exports*/ ) {
    module.exports = RecordRTC;
}

if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return RecordRTC;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

RecordRTC.getFromDisk = function(type, callback) {
    if (!callback) {
        throw 'callback is mandatory.';
    }

    console.log('Getting recorded ' + (type === 'all' ? 'blobs' : type + ' blob ') + ' from disk!');
    DiskStorage.Fetch(function(dataURL, _type) {
        if (type !== 'all' && _type === type + 'Blob' && callback) {
            callback(dataURL);
        }

        if (type === 'all' && callback) {
            callback(dataURL, _type.replace('Blob', ''));
        }
    });
};

/**
 * This method can be used to store recorded blobs into IndexedDB storage.
 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
 * @method
 * @memberof RecordRTC
 * @example
 * RecordRTC.writeToDisk({
 *     audio: audioBlob,
 *     video: videoBlob,
 *     gif  : gifBlob
 * });
 */
RecordRTC.writeToDisk = function(options) {
    console.log('Writing recorded blob(s) to disk!');
    options = options || {};
    if (options.audio && options.video && options.gif) {
        options.audio.getDataURL(function(audioDataURL) {
            options.video.getDataURL(function(videoDataURL) {
                options.gif.getDataURL(function(gifDataURL) {
                    DiskStorage.Store({
                        audioBlob: audioDataURL,
                        videoBlob: videoDataURL,
                        gifBlob: gifDataURL
                    });
                });
            });
        });
    } else if (options.audio && options.video) {
        options.audio.getDataURL(function(audioDataURL) {
            options.video.getDataURL(function(videoDataURL) {
                DiskStorage.Store({
                    audioBlob: audioDataURL,
                    videoBlob: videoDataURL
                });
            });
        });
    } else if (options.audio && options.gif) {
        options.audio.getDataURL(function(audioDataURL) {
            options.gif.getDataURL(function(gifDataURL) {
                DiskStorage.Store({
                    audioBlob: audioDataURL,
                    gifBlob: gifDataURL
                });
            });
        });
    } else if (options.video && options.gif) {
        options.video.getDataURL(function(videoDataURL) {
            options.gif.getDataURL(function(gifDataURL) {
                DiskStorage.Store({
                    videoBlob: videoDataURL,
                    gifBlob: gifDataURL
                });
            });
        });
    } else if (options.audio) {
        options.audio.getDataURL(function(audioDataURL) {
            DiskStorage.Store({
                audioBlob: audioDataURL
            });
        });
    } else if (options.video) {
        options.video.getDataURL(function(videoDataURL) {
            DiskStorage.Store({
                videoBlob: videoDataURL
            });
        });
    } else if (options.gif) {
        options.gif.getDataURL(function(gifDataURL) {
            DiskStorage.Store({
                gifBlob: gifDataURL
            });
        });
    }
};

// __________________________
// RecordRTC-Configuration.js

/**
 * {@link RecordRTCConfiguration} is an inner/private helper for {@link RecordRTC}.
 * @summary It configures the 2nd parameter passed over {@link RecordRTC} and returns a valid "config" object.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCConfiguration
 * @class
 * @example
 * var options = RecordRTCConfiguration(mediaStream, options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, getNativeBlob:true, etc.}
 */

function RecordRTCConfiguration(mediaStream, config) {
    if (!config.recorderType && !config.type) {
        if (!!config.audio && !!config.video) {
            config.type = 'video';
        } else if (!!config.audio && !config.video) {
            config.type = 'audio';
        }
    }

    if (config.recorderType && !config.type) {
        if (config.recorderType === WhammyRecorder || config.recorderType === CanvasRecorder || (typeof WebAssemblyRecorder !== 'undefined' && config.recorderType === WebAssemblyRecorder)) {
            config.type = 'video';
        } else if (config.recorderType === GifRecorder) {
            config.type = 'gif';
        } else if (config.recorderType === StereoAudioRecorder) {
            config.type = 'audio';
        } else if (config.recorderType === MediaStreamRecorder) {
            if (getTracks(mediaStream, 'audio').length && getTracks(mediaStream, 'video').length) {
                config.type = 'video';
            } else if (!getTracks(mediaStream, 'audio').length && getTracks(mediaStream, 'video').length) {
                config.type = 'video';
            } else if (getTracks(mediaStream, 'audio').length && !getTracks(mediaStream, 'video').length) {
                config.type = 'audio';
            } else {
                // config.type = 'UnKnown';
            }
        }
    }

    if (typeof MediaStreamRecorder !== 'undefined' && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
        if (!config.mimeType) {
            config.mimeType = 'video/webm';
        }

        if (!config.type) {
            config.type = config.mimeType.split('/')[0];
        }

        if (!config.bitsPerSecond) {
            // config.bitsPerSecond = 128000;
        }
    }

    // consider default type=audio
    if (!config.type) {
        if (config.mimeType) {
            config.type = config.mimeType.split('/')[0];
        }
        if (!config.type) {
            config.type = 'audio';
        }
    }

    return config;
}

// __________________
// GetRecorderType.js

/**
 * {@link GetRecorderType} is an inner/private helper for {@link RecordRTC}.
 * @summary It returns best recorder-type available for your browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef GetRecorderType
 * @class
 * @example
 * var RecorderType = GetRecorderType(options);
 * var recorder = new RecorderType(options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 */

function GetRecorderType(mediaStream, config) {
    var recorder;

    // StereoAudioRecorder can work with all three: Edge, Firefox and Chrome
    // todo: detect if it is Edge, then auto use: StereoAudioRecorder
    if (isChrome || isEdge || isOpera) {
        // Media Stream Recording API has not been implemented in chrome yet;
        // That's why using WebAudio API to record stereo audio in WAV format
        recorder = StereoAudioRecorder;
    }

    if (typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype && !isChrome) {
        recorder = MediaStreamRecorder;
    }

    // video recorder (in WebM format)
    if (config.type === 'video' && (isChrome || isOpera)) {
        recorder = WhammyRecorder;

        if (typeof WebAssemblyRecorder !== 'undefined' && typeof ReadableStream !== 'undefined') {
            recorder = WebAssemblyRecorder;
        }
    }

    // video recorder (in Gif format)
    if (config.type === 'gif') {
        recorder = GifRecorder;
    }

    // html2canvas recording!
    if (config.type === 'canvas') {
        recorder = CanvasRecorder;
    }

    if (isMediaRecorderCompatible() && recorder !== CanvasRecorder && recorder !== GifRecorder && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
        if (getTracks(mediaStream, 'video').length || getTracks(mediaStream, 'audio').length) {
            // audio-only recording
            if (config.type === 'audio') {
                if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('audio/webm')) {
                    recorder = MediaStreamRecorder;
                }
                // else recorder = StereoAudioRecorder;
            } else {
                // video or screen tracks
                if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('video/webm')) {
                    recorder = MediaStreamRecorder;
                }
            }
        }
    }

    if (mediaStream instanceof Array && mediaStream.length) {
        recorder = MultiStreamRecorder;
    }

    if (config.recorderType) {
        recorder = config.recorderType;
    }

    if (!config.disableLogs && !!recorder && !!recorder.name) {
        console.log('Using recorderType:', recorder.name || recorder.constructor.name);
    }

    if (!recorder && isSafari) {
        recorder = MediaStreamRecorder;
    }

    return recorder;
}

// _____________
// MRecordRTC.js

/**
 * MRecordRTC runs on top of {@link RecordRTC} to bring multiple recordings in a single place, by providing simple API.
 * @summary MRecordRTC stands for "Multiple-RecordRTC".
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef MRecordRTC
 * @class
 * @example
 * var recorder = new MRecordRTC();
 * recorder.addStream(MediaStream);
 * recorder.mediaType = {
 *     audio: true, // or StereoAudioRecorder or MediaStreamRecorder
 *     video: true, // or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
 *     gif: true    // or GifRecorder
 * };
 * // mimeType is optional and should be set only in advance cases.
 * recorder.mimeType = {
 *     audio: 'audio/wav',
 *     video: 'video/webm',
 *     gif:   'image/gif'
 * };
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC/tree/master/MRecordRTC|MRecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @requires {@link RecordRTC}
 */

function MRecordRTC(mediaStream) {

    /**
     * This method attaches MediaStream object to {@link MRecordRTC}.
     * @param {MediaStream} mediaStream - A MediaStream object, either fetched using getUserMedia API, or generated using captureStreamUntilEnded or WebAudio API.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.addStream(MediaStream);
     */
    this.addStream = function(_mediaStream) {
        if (_mediaStream) {
            mediaStream = _mediaStream;
        }
    };

    /**
     * This property can be used to set the recording type e.g. audio, or video, or gif, or canvas.
     * @property {object} mediaType - {audio: true, video: true, gif: true}
     * @memberof MRecordRTC
     * @example
     * var recorder = new MRecordRTC();
     * recorder.mediaType = {
     *     audio: true, // TRUE or StereoAudioRecorder or MediaStreamRecorder
     *     video: true, // TRUE or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
     *     gif  : true  // TRUE or GifRecorder
     * };
     */
    this.mediaType = {
        audio: true,
        video: true
    };

    /**
     * This method starts recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.startRecording();
     */
    this.startRecording = function() {
        var mediaType = this.mediaType;
        var recorderType;
        var mimeType = this.mimeType || {
            audio: null,
            video: null,
            gif: null
        };

        if (typeof mediaType.audio !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'audio').length) {
            mediaType.audio = false;
        }

        if (typeof mediaType.video !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'video').length) {
            mediaType.video = false;
        }

        if (typeof mediaType.gif !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'video').length) {
            mediaType.gif = false;
        }

        if (!mediaType.audio && !mediaType.video && !mediaType.gif) {
            throw 'MediaStream must have either audio or video tracks.';
        }

        if (!!mediaType.audio) {
            recorderType = null;
            if (typeof mediaType.audio === 'function') {
                recorderType = mediaType.audio;
            }

            this.audioRecorder = new RecordRTC(mediaStream, {
                type: 'audio',
                bufferSize: this.bufferSize,
                sampleRate: this.sampleRate,
                numberOfAudioChannels: this.numberOfAudioChannels || 2,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.audio,
                timeSlice: this.timeSlice,
                onTimeStamp: this.onTimeStamp
            });

            if (!mediaType.video) {
                this.audioRecorder.startRecording();
            }
        }

        if (!!mediaType.video) {
            recorderType = null;
            if (typeof mediaType.video === 'function') {
                recorderType = mediaType.video;
            }

            var newStream = mediaStream;

            if (isMediaRecorderCompatible() && !!mediaType.audio && typeof mediaType.audio === 'function') {
                var videoTrack = getTracks(mediaStream, 'video')[0];

                if (isFirefox) {
                    newStream = new MediaStream();
                    newStream.addTrack(videoTrack);

                    if (recorderType && recorderType === WhammyRecorder) {
                        // Firefox does NOT supports webp-encoding yet
                        // But Firefox do supports WebAssemblyRecorder
                        recorderType = MediaStreamRecorder;
                    }
                } else {
                    newStream = new MediaStream();
                    newStream.addTrack(videoTrack);
                }
            }

            this.videoRecorder = new RecordRTC(newStream, {
                type: 'video',
                video: this.video,
                canvas: this.canvas,
                frameInterval: this.frameInterval || 10,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.video,
                timeSlice: this.timeSlice,
                onTimeStamp: this.onTimeStamp,
                workerPath: this.workerPath,
                webAssemblyPath: this.webAssemblyPath,
                frameRate: this.frameRate, // used by WebAssemblyRecorder; values: usually 30; accepts any.
                bitrate: this.bitrate // used by WebAssemblyRecorder; values: 0 to 1000+
            });

            if (!mediaType.audio) {
                this.videoRecorder.startRecording();
            }
        }

        if (!!mediaType.audio && !!mediaType.video) {
            var self = this;

            var isSingleRecorder = isMediaRecorderCompatible() === true;

            if (mediaType.audio instanceof StereoAudioRecorder && !!mediaType.video) {
                isSingleRecorder = false;
            } else if (mediaType.audio !== true && mediaType.video !== true && mediaType.audio !== mediaType.video) {
                isSingleRecorder = false;
            }

            if (isSingleRecorder === true) {
                self.audioRecorder = null;
                self.videoRecorder.startRecording();
            } else {
                self.videoRecorder.initRecorder(function() {
                    self.audioRecorder.initRecorder(function() {
                        // Both recorders are ready to record things accurately
                        self.videoRecorder.startRecording();
                        self.audioRecorder.startRecording();
                    });
                });
            }
        }

        if (!!mediaType.gif) {
            recorderType = null;
            if (typeof mediaType.gif === 'function') {
                recorderType = mediaType.gif;
            }
            this.gifRecorder = new RecordRTC(mediaStream, {
                type: 'gif',
                frameRate: this.frameRate || 200,
                quality: this.quality || 10,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.gif
            });
            this.gifRecorder.startRecording();
        }
    };

    /**
     * This method stops recording.
     * @param {function} callback - Callback function is invoked when all encoders finished their jobs.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.stopRecording(function(recording){
     *     var audioBlob = recording.audio;
     *     var videoBlob = recording.video;
     *     var gifBlob   = recording.gif;
     * });
     */
    this.stopRecording = function(callback) {
        callback = callback || function() {};

        if (this.audioRecorder) {
            this.audioRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'audio');
            });
        }

        if (this.videoRecorder) {
            this.videoRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'video');
            });
        }

        if (this.gifRecorder) {
            this.gifRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'gif');
            });
        }
    };

    /**
     * This method pauses recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.pauseRecording();
     */
    this.pauseRecording = function() {
        if (this.audioRecorder) {
            this.audioRecorder.pauseRecording();
        }

        if (this.videoRecorder) {
            this.videoRecorder.pauseRecording();
        }

        if (this.gifRecorder) {
            this.gifRecorder.pauseRecording();
        }
    };

    /**
     * This method resumes recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.resumeRecording();
     */
    this.resumeRecording = function() {
        if (this.audioRecorder) {
            this.audioRecorder.resumeRecording();
        }

        if (this.videoRecorder) {
            this.videoRecorder.resumeRecording();
        }

        if (this.gifRecorder) {
            this.gifRecorder.resumeRecording();
        }
    };

    /**
     * This method can be used to manually get all recorded blobs.
     * @param {function} callback - All recorded blobs are passed back to the "callback" function.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.getBlob(function(recording){
     *     var audioBlob = recording.audio;
     *     var videoBlob = recording.video;
     *     var gifBlob   = recording.gif;
     * });
     * // or
     * var audioBlob = recorder.getBlob().audio;
     * var videoBlob = recorder.getBlob().video;
     */
    this.getBlob = function(callback) {
        var output = {};

        if (this.audioRecorder) {
            output.audio = this.audioRecorder.getBlob();
        }

        if (this.videoRecorder) {
            output.video = this.videoRecorder.getBlob();
        }

        if (this.gifRecorder) {
            output.gif = this.gifRecorder.getBlob();
        }

        if (callback) {
            callback(output);
        }

        return output;
    };

    /**
     * Destroy all recorder instances.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.destroy();
     */
    this.destroy = function() {
        if (this.audioRecorder) {
            this.audioRecorder.destroy();
            this.audioRecorder = null;
        }

        if (this.videoRecorder) {
            this.videoRecorder.destroy();
            this.videoRecorder = null;
        }

        if (this.gifRecorder) {
            this.gifRecorder.destroy();
            this.gifRecorder = null;
        }
    };

    /**
     * This method can be used to manually get all recorded blobs' DataURLs.
     * @param {function} callback - All recorded blobs' DataURLs are passed back to the "callback" function.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.getDataURL(function(recording){
     *     var audioDataURL = recording.audio;
     *     var videoDataURL = recording.video;
     *     var gifDataURL   = recording.gif;
     * });
     */
    this.getDataURL = function(callback) {
        this.getBlob(function(blob) {
            if (blob.audio && blob.video) {
                getDataURL(blob.audio, function(_audioDataURL) {
                    getDataURL(blob.video, function(_videoDataURL) {
                        callback({
                            audio: _audioDataURL,
                            video: _videoDataURL
                        });
                    });
                });
            } else if (blob.audio) {
                getDataURL(blob.audio, function(_audioDataURL) {
                    callback({
                        audio: _audioDataURL
                    });
                });
            } else if (blob.video) {
                getDataURL(blob.video, function(_videoDataURL) {
                    callback({
                        video: _videoDataURL
                    });
                });
            }
        });

        function getDataURL(blob, callback00) {
            if (typeof Worker !== 'undefined') {
                var webWorker = processInWebWorker(function readFile(_blob) {
                    postMessage(new FileReaderSync().readAsDataURL(_blob));
                });

                webWorker.onmessage = function(event) {
                    callback00(event.data);
                };

                webWorker.postMessage(blob);
            } else {
                var reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = function(event) {
                    callback00(event.target.result);
                };
            }
        }

        function processInWebWorker(_function) {
            var blob = URL.createObjectURL(new Blob([_function.toString(),
                'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
            ], {
                type: 'application/javascript'
            }));

            var worker = new Worker(blob);
            var url;
            if (typeof URL !== 'undefined') {
                url = URL;
            } else if (typeof webkitURL !== 'undefined') {
                url = webkitURL;
            } else {
                throw 'Neither URL nor webkitURL detected.';
            }
            url.revokeObjectURL(blob);
            return worker;
        }
    };

    /**
     * This method can be used to ask {@link MRecordRTC} to write all recorded blobs into IndexedDB storage.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.writeToDisk();
     */
    this.writeToDisk = function() {
        RecordRTC.writeToDisk({
            audio: this.audioRecorder,
            video: this.videoRecorder,
            gif: this.gifRecorder
        });
    };

    /**
     * This method can be used to invoke a save-as dialog for all recorded blobs.
     * @param {object} args - {audio: 'audio-name', video: 'video-name', gif: 'gif-name'}
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.save({
     *     audio: 'audio-file-name',
     *     video: 'video-file-name',
     *     gif  : 'gif-file-name'
     * });
     */
    this.save = function(args) {
        args = args || {
            audio: true,
            video: true,
            gif: true
        };

        if (!!args.audio && this.audioRecorder) {
            this.audioRecorder.save(typeof args.audio === 'string' ? args.audio : '');
        }

        if (!!args.video && this.videoRecorder) {
            this.videoRecorder.save(typeof args.video === 'string' ? args.video : '');
        }
        if (!!args.gif && this.gifRecorder) {
            this.gifRecorder.save(typeof args.gif === 'string' ? args.gif : '');
        }
    };
}

/**
 * This method can be used to get all recorded blobs from IndexedDB storage.
 * @param {string} type - 'all' or 'audio' or 'video' or 'gif'
 * @param {function} callback - Callback function to get all stored blobs.
 * @method
 * @memberof MRecordRTC
 * @example
 * MRecordRTC.getFromDisk('all', function(dataURL, type){
 *     if(type === 'audio') { }
 *     if(type === 'video') { }
 *     if(type === 'gif')   { }
 * });
 */
MRecordRTC.getFromDisk = RecordRTC.getFromDisk;

/**
 * This method can be used to store recorded blobs into IndexedDB storage.
 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
 * @method
 * @memberof MRecordRTC
 * @example
 * MRecordRTC.writeToDisk({
 *     audio: audioBlob,
 *     video: videoBlob,
 *     gif  : gifBlob
 * });
 */
MRecordRTC.writeToDisk = RecordRTC.writeToDisk;

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MRecordRTC = MRecordRTC;
}

var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

(function(that) {
    if (!that) {
        return;
    }

    if (typeof window !== 'undefined') {
        return;
    }

    if (typeof global === 'undefined') {
        return;
    }

    global.navigator = {
        userAgent: browserFakeUserAgent,
        getUserMedia: function() {}
    };

    if (!global.console) {
        global.console = {};
    }

    if (typeof global.console.log === 'undefined' || typeof global.console.error === 'undefined') {
        global.console.error = global.console.log = global.console.log || function() {
            console.log(arguments);
        };
    }

    if (typeof document === 'undefined') {
        /*global document:true */
        that.document = {};

        document.createElement = document.captureStream = document.mozCaptureStream = function() {
            var obj = {
                getContext: function() {
                    return obj;
                },
                play: function() {},
                pause: function() {},
                drawImage: function() {},
                toDataURL: function() {
                    return '';
                }
            };
            return obj;
        };

        that.HTMLVideoElement = function() {};
    }

    if (typeof location === 'undefined') {
        /*global location:true */
        that.location = {
            protocol: 'file:',
            href: '',
            hash: ''
        };
    }

    if (typeof screen === 'undefined') {
        /*global screen:true */
        that.screen = {
            width: 0,
            height: 0
        };
    }

    if (typeof URL === 'undefined') {
        /*global screen:true */
        that.URL = {
            createObjectURL: function() {
                return '';
            },
            revokeObjectURL: function() {
                return '';
            }
        };
    }

    /*global window:true */
    that.window = global;
})(typeof global !== 'undefined' ? global : null);

// _____________________________
// Cross-Browser-Declarations.js

// animation-frame used in WebM recording

/*jshint -W079 */
var requestAnimationFrame = window.requestAnimationFrame;
if (typeof requestAnimationFrame === 'undefined') {
    if (typeof webkitRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = webkitRequestAnimationFrame;
    } else if (typeof mozRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = mozRequestAnimationFrame;
    } else if (typeof msRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = msRequestAnimationFrame;
    } else if (typeof requestAnimationFrame === 'undefined') {
        // via: https://gist.github.com/paulirish/1579671
        var lastTime = 0;

        /*global requestAnimationFrame:true */
        requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
}

/*jshint -W079 */
var cancelAnimationFrame = window.cancelAnimationFrame;
if (typeof cancelAnimationFrame === 'undefined') {
    if (typeof webkitCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = webkitCancelAnimationFrame;
    } else if (typeof mozCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = mozCancelAnimationFrame;
    } else if (typeof msCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = msCancelAnimationFrame;
    } else if (typeof cancelAnimationFrame === 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}

// WebAudio API representer
var AudioContext = window.AudioContext;

if (typeof AudioContext === 'undefined') {
    if (typeof webkitAudioContext !== 'undefined') {
        /*global AudioContext:true */
        AudioContext = webkitAudioContext;
    }

    if (typeof mozAudioContext !== 'undefined') {
        /*global AudioContext:true */
        AudioContext = mozAudioContext;
    }
}

/*jshint -W079 */
var URL = window.URL;

if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
    /*global URL:true */
    URL = webkitURL;
}

if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
    if (typeof navigator.webkitGetUserMedia !== 'undefined') {
        navigator.getUserMedia = navigator.webkitGetUserMedia;
    }

    if (typeof navigator.mozGetUserMedia !== 'undefined') {
        navigator.getUserMedia = navigator.mozGetUserMedia;
    }
}

var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveBlob || !!navigator.msSaveOrOpenBlob);
var isOpera = !!window.opera || navigator.userAgent.indexOf('OPR/') !== -1;
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && ('netscape' in window) && / rv:/.test(navigator.userAgent);
var isChrome = (!isOpera && !isEdge && !!navigator.webkitGetUserMedia) || isElectron() || navigator.userAgent.toLowerCase().indexOf('chrome/') !== -1;

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari && !isChrome && navigator.userAgent.indexOf('CriOS') !== -1) {
    isSafari = false;
    isChrome = true;
}

var MediaStream = window.MediaStream;

if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
    MediaStream = webkitMediaStream;
}

/*global MediaStream:true */
if (typeof MediaStream !== 'undefined') {
    // override "stop" method for all browsers
    if (typeof MediaStream.prototype.stop === 'undefined') {
        MediaStream.prototype.stop = function() {
            this.getTracks().forEach(function(track) {
                track.stop();
            });
        };
    }
}

// below function via: http://goo.gl/B3ae8c
/**
 * Return human-readable file size.
 * @param {number} bytes - Pass bytes and get formatted string.
 * @returns {string} - formatted string
 * @example
 * bytesToSize(1024*1024*5) === '5 GB'
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function bytesToSize(bytes) {
    var k = 1000;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) {
        return '0 Bytes';
    }
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

/**
 * @param {Blob} file - File or Blob object. This parameter is required.
 * @param {string} fileName - Optional file name e.g. "Recorded-Video.webm"
 * @example
 * invokeSaveAsDialog(blob or file, [optional] fileName);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function invokeSaveAsDialog(file, fileName) {
    if (!file) {
        throw 'Blob object is required.';
    }

    if (!file.type) {
        try {
            file.type = 'video/webm';
        } catch (e) {}
    }

    var fileExtension = (file.type || 'video/webm').split('/')[1];

    if (fileName && fileName.indexOf('.') !== -1) {
        var splitted = fileName.split('.');
        fileName = splitted[0];
        fileExtension = splitted[1];
    }

    var fileFullName = (fileName || (Math.round(Math.random() * 9999999999) + 888888888)) + '.' + fileExtension;

    if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
        return navigator.msSaveOrOpenBlob(file, fileFullName);
    } else if (typeof navigator.msSaveBlob !== 'undefined') {
        return navigator.msSaveBlob(file, fileFullName);
    }

    var hyperlink = document.createElement('a');
    hyperlink.href = URL.createObjectURL(file);
    hyperlink.download = fileFullName;

    hyperlink.style = 'display:none;opacity:0;color:transparent;';
    (document.body || document.documentElement).appendChild(hyperlink);

    if (typeof hyperlink.click === 'function') {
        hyperlink.click();
    } else {
        hyperlink.target = '_blank';
        hyperlink.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        }));
    }

    URL.revokeObjectURL(hyperlink.href);
}

/**
 * from: https://github.com/cheton/is-electron/blob/master/index.js
 **/
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

function getTracks(stream, kind) {
    if (!stream || !stream.getTracks) {
        return [];
    }

    return stream.getTracks().filter(function(t) {
        return t.kind === (kind || 'audio');
    });
}

function setSrcObject(stream, element) {
    if ('srcObject' in element) {
        element.srcObject = stream;
    } else if ('mozSrcObject' in element) {
        element.mozSrcObject = stream;
    } else {
        element.srcObject = stream;
    }
}

/**
 * @param {Blob} file - File or Blob object.
 * @param {function} callback - Callback function.
 * @example
 * getSeekableBlob(blob or file, callback);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function getSeekableBlob(inputBlob, callback) {
    // EBML.js copyrights goes to: https://github.com/legokichi/ts-ebml
    if (typeof EBML === 'undefined') {
        throw new Error('Please link: https://cdn.webrtc-experiment.com/EBML.js');
    }

    var reader = new EBML.Reader();
    var decoder = new EBML.Decoder();
    var tools = EBML.tools;

    var fileReader = new FileReader();
    fileReader.onload = function(e) {
        var ebmlElms = decoder.decode(this.result);
        ebmlElms.forEach(function(element) {
            reader.read(element);
        });
        reader.stop();
        var refinedMetadataBuf = tools.makeMetadataSeekable(reader.metadatas, reader.duration, reader.cues);
        var body = this.result.slice(reader.metadataSize);
        var newBlob = new Blob([refinedMetadataBuf, body], {
            type: 'video/webm'
        });

        callback(newBlob);
    };
    fileReader.readAsArrayBuffer(inputBlob);
}

// __________ (used to handle stuff like http://goo.gl/xmE5eg) issue #129
// Storage.js

/**
 * Storage is a standalone object used by {@link RecordRTC} to store reusable objects e.g. "new AudioContext".
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @example
 * Storage.AudioContext === webkitAudioContext
 * @property {webkitAudioContext} AudioContext - Keeps a reference to AudioContext object.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */

var Storage = {};

if (typeof AudioContext !== 'undefined') {
    Storage.AudioContext = AudioContext;
} else if (typeof webkitAudioContext !== 'undefined') {
    Storage.AudioContext = webkitAudioContext;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.Storage = Storage;
}

function isMediaRecorderCompatible() {
    if (isFirefox || isSafari || isEdge) {
        return true;
    }

    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    if (isChrome || isOpera) {
        verOffset = nAgt.indexOf('Chrome');
        fullVersion = nAgt.substring(verOffset + 7);
    }

    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(';')) !== -1) {
        fullVersion = fullVersion.substring(0, ix);
    }

    if ((ix = fullVersion.indexOf(' ')) !== -1) {
        fullVersion = fullVersion.substring(0, ix);
    }

    majorVersion = parseInt('' + fullVersion, 10);

    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    return majorVersion >= 49;
}

// ______________________
// MediaStreamRecorder.js

/**
 * MediaStreamRecorder is an abstraction layer for {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}. It is used by {@link RecordRTC} to record MediaStream(s) in both Chrome and Firefox.
 * @summary Runs top over {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link https://github.com/muaz-khan|Muaz Khan}
 * @typedef MediaStreamRecorder
 * @class
 * @example
 * var config = {
 *     mimeType: 'video/webm', // vp8, vp9, h264, mkv, opus/vorbis
 *     audioBitsPerSecond : 256 * 8 * 1024,
 *     videoBitsPerSecond : 256 * 8 * 1024,
 *     bitsPerSecond: 256 * 8 * 1024,  // if this is provided, skip above two
 *     checkForInactiveTracks: true,
 *     timeSlice: 1000, // concatenate intervals based blobs
 *     ondataavailable: function() {} // get intervals based blobs
 * }
 * var recorder = new MediaStreamRecorder(mediaStream, config);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs:true, initCallback: function, mimeType: "video/webm", timeSlice: 1000}
 * @throws Will throw an error if first argument "MediaStream" is missing. Also throws error if "MediaRecorder API" are not supported by the browser.
 */

function MediaStreamRecorder(mediaStream, config) {
    var self = this;

    if (typeof mediaStream === 'undefined') {
        throw 'First argument "MediaStream" is required.';
    }

    if (typeof MediaRecorder === 'undefined') {
        throw 'Your browser does not supports Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.';
    }

    config = config || {
        // bitsPerSecond: 256 * 8 * 1024,
        mimeType: 'video/webm'
    };

    if (config.type === 'audio') {
        if (getTracks(mediaStream, 'video').length && getTracks(mediaStream, 'audio').length) {
            var stream;
            if (!!navigator.mozGetUserMedia) {
                stream = new MediaStream();
                stream.addTrack(getTracks(mediaStream, 'audio')[0]);
            } else {
                // webkitMediaStream
                stream = new MediaStream(getTracks(mediaStream, 'audio'));
            }
            mediaStream = stream;
        }

        if (!config.mimeType || config.mimeType.toString().toLowerCase().indexOf('audio') === -1) {
            config.mimeType = isChrome ? 'audio/webm' : 'audio/ogg';
        }

        if (config.mimeType && config.mimeType.toString().toLowerCase() !== 'audio/ogg' && !!navigator.mozGetUserMedia) {
            // forcing better codecs on Firefox (via #166)
            config.mimeType = 'audio/ogg';
        }
    }

    var arrayOfBlobs = [];

    /**
     * This method returns array of blobs. Use only with "timeSlice". Its useful to preview recording anytime, without using the "stop" method.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var arrayOfBlobs = recorder.getArrayOfBlobs();
     * @returns {Array} Returns array of recorded blobs.
     */
    this.getArrayOfBlobs = function() {
        return arrayOfBlobs;
    };

    /**
     * This method records MediaStream.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        // set defaults
        self.blob = null;
        self.clearRecordedData();
        self.timestamps = [];
        allStates = [];
        arrayOfBlobs = [];

        var recorderHints = config;

        if (!config.disableLogs) {
            console.log('Passing following config over MediaRecorder API.', recorderHints);
        }

        if (mediaRecorder) {
            // mandatory to make sure Firefox doesn't fails to record streams 3-4 times without reloading the page.
            mediaRecorder = null;
        }

        if (isChrome && !isMediaRecorderCompatible()) {
            // to support video-only recording on stable
            recorderHints = 'video/vp8';
        }

        if (typeof MediaRecorder.isTypeSupported === 'function' && recorderHints.mimeType) {
            if (!MediaRecorder.isTypeSupported(recorderHints.mimeType)) {
                if (!config.disableLogs) {
                    console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
                }

                recorderHints.mimeType = config.type === 'audio' ? 'audio/webm' : 'video/webm';
            }
        }

        // using MediaRecorder API here
        try {
            mediaRecorder = new MediaRecorder(mediaStream, recorderHints);

            // reset
            config.mimeType = recorderHints.mimeType;
        } catch (e) {
            // chrome-based fallback
            mediaRecorder = new MediaRecorder(mediaStream);
        }

        // old hack?
        if (recorderHints.mimeType && !MediaRecorder.isTypeSupported && 'canRecordMimeType' in mediaRecorder && mediaRecorder.canRecordMimeType(recorderHints.mimeType) === false) {
            if (!config.disableLogs) {
                console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
            }
        }

        // Dispatching OnDataAvailable Handler
        mediaRecorder.ondataavailable = function(e) {
            if (e.data) {
                allStates.push('ondataavailable: ' + bytesToSize(e.data.size));
            }

            if (typeof config.timeSlice === 'number') {
                if (e.data && e.data.size && e.data.size > 100) {
                    arrayOfBlobs.push(e.data);
                    updateTimeStamp();

                    if (typeof config.ondataavailable === 'function') {
                        // intervals based blobs
                        var blob = config.getNativeBlob ? e.data : new Blob([e.data], {
                            type: getMimeType(recorderHints)
                        });
                        config.ondataavailable(blob);
                    }
                }
                return;
            }

            if (!e.data || !e.data.size || e.data.size < 100 || self.blob) {
                // make sure that stopRecording always getting fired
                // even if there is invalid data
                if (self.recordingCallback) {
                    self.recordingCallback(new Blob([], {
                        type: getMimeType(recorderHints)
                    }));
                    self.recordingCallback = null;
                }
                return;
            }

            self.blob = config.getNativeBlob ? e.data : new Blob([e.data], {
                type: getMimeType(recorderHints)
            });

            if (self.recordingCallback) {
                self.recordingCallback(self.blob);
                self.recordingCallback = null;
            }
        };

        mediaRecorder.onstart = function() {
            allStates.push('started');
        };

        mediaRecorder.onpause = function() {
            allStates.push('paused');
        };

        mediaRecorder.onresume = function() {
            allStates.push('resumed');
        };

        mediaRecorder.onstop = function() {
            allStates.push('stopped');
        };

        mediaRecorder.onerror = function(error) {
            if (!error) {
                return;
            }

            if (!error.name) {
                error.name = 'UnknownError';
            }

            allStates.push('error: ' + error);

            if (!config.disableLogs) {
                // via: https://w3c.github.io/mediacapture-record/MediaRecorder.html#exception-summary
                if (error.name.toString().toLowerCase().indexOf('invalidstate') !== -1) {
                    console.error('The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.', error);
                } else if (error.name.toString().toLowerCase().indexOf('notsupported') !== -1) {
                    console.error('MIME type (', recorderHints.mimeType, ') is not supported.', error);
                } else if (error.name.toString().toLowerCase().indexOf('security') !== -1) {
                    console.error('MediaRecorder security error', error);
                }

                // older code below
                else if (error.name === 'OutOfMemory') {
                    console.error('The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'IllegalStreamModification') {
                    console.error('A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'OtherRecordingError') {
                    console.error('Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'GenericError') {
                    console.error('The UA cannot provide the codec or recording option that has been requested.', error);
                } else {
                    console.error('MediaRecorder Error', error);
                }
            }

            (function(looper) {
                if (!self.manuallyStopped && mediaRecorder && mediaRecorder.state === 'inactive') {
                    delete config.timeslice;

                    // 10 minutes, enough?
                    mediaRecorder.start(10 * 60 * 1000);
                    return;
                }

                setTimeout(looper, 1000);
            })();

            if (mediaRecorder.state !== 'inactive' && mediaRecorder.state !== 'stopped') {
                mediaRecorder.stop();
            }
        };

        if (typeof config.timeSlice === 'number') {
            updateTimeStamp();
            mediaRecorder.start(config.timeSlice);
        } else {
            // default is 60 minutes; enough?
            // use config => {timeSlice: 1000} otherwise

            mediaRecorder.start(3.6e+6);
        }

        if (config.initCallback) {
            config.initCallback(); // old code
        }
    };

    /**
     * @property {Array} timestamps - Array of time stamps
     * @memberof MediaStreamRecorder
     * @example
     * console.log(recorder.timestamps);
     */
    this.timestamps = [];

    function updateTimeStamp() {
        self.timestamps.push(new Date().getTime());

        if (typeof config.onTimeStamp === 'function') {
            config.onTimeStamp(self.timestamps[self.timestamps.length - 1], self.timestamps);
        }
    }

    function getMimeType(secondObject) {
        if (mediaRecorder && mediaRecorder.mimeType) {
            return mediaRecorder.mimeType;
        }

        return secondObject.mimeType || 'video/webm';
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        self.manuallyStopped = true; // used inside the mediaRecorder.onerror

        if (!mediaRecorder) {
            return;
        }

        this.recordingCallback = callback;

        if (mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
        }

        if (typeof config.timeSlice === 'number') {
            setTimeout(function() {
                self.blob = new Blob(arrayOfBlobs, {
                    type: getMimeType(config)
                });

                self.recordingCallback(self.blob);
            }, 100);
        }
    };

    /**
     * This method pauses the recording process.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        if (!mediaRecorder) {
            return;
        }

        if (mediaRecorder.state === 'recording') {
            mediaRecorder.pause();
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (!mediaRecorder) {
            return;
        }

        if (mediaRecorder.state === 'paused') {
            mediaRecorder.resume();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            self.stop(clearRecordedDataCB);
        }

        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        arrayOfBlobs = [];
        mediaRecorder = null;
        self.timestamps = [];
    }

    // Reference to "MediaRecorder" object
    var mediaRecorder;

    /**
     * Access to native MediaRecorder API
     * @method
     * @memberof MediaStreamRecorder
     * @instance
     * @example
     * var internal = recorder.getInternalRecorder();
     * internal.ondataavailable = function() {}; // override
     * internal.stream, internal.onpause, internal.onstop, etc.
     * @returns {Object} Returns internal recording object.
     */
    this.getInternalRecorder = function() {
        return mediaRecorder;
    };

    function isMediaStreamActive() {
        if ('active' in mediaStream) {
            if (!mediaStream.active) {
                return false;
            }
        } else if ('ended' in mediaStream) { // old hack
            if (mediaStream.ended) {
                return false;
            }
        }
        return true;
    }

    /**
     * @property {Blob} blob - Recorded data as "Blob" object.
     * @memberof MediaStreamRecorder
     * @example
     * recorder.stop(function() {
     *     var blob = recorder.blob;
     * });
     */
    this.blob = null;


    /**
     * Get MediaRecorder readonly state.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var state = recorder.getState();
     * @returns {String} Returns recording state.
     */
    this.getState = function() {
        if (!mediaRecorder) {
            return 'inactive';
        }

        return mediaRecorder.state || 'inactive';
    };

    // list of all recording states
    var allStates = [];

    /**
     * Get MediaRecorder all recording states.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var state = recorder.getAllStates();
     * @returns {Array} Returns all recording states
     */
    this.getAllStates = function() {
        return allStates;
    };

    // if any Track within the MediaStream is muted or not enabled at any time, 
    // the browser will only record black frames 
    // or silence since that is the content produced by the Track
    // so we need to stopRecording as soon as any single track ends.
    if (typeof config.checkForInactiveTracks === 'undefined') {
        config.checkForInactiveTracks = false; // disable to minimize CPU usage
    }

    var self = this;

    // this method checks if media stream is stopped
    // or if any track is ended.
    (function looper() {
        if (!mediaRecorder || config.checkForInactiveTracks === false) {
            return;
        }

        if (isMediaStreamActive() === false) {
            if (!config.disableLogs) {
                console.log('MediaStream seems stopped.');
            }
            self.stop();
            return;
        }

        setTimeout(looper, 1000); // check every second
    })();

    // for debugging
    this.name = 'MediaStreamRecorder';
    this.toString = function() {
        return this.name;
    };
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MediaStreamRecorder = MediaStreamRecorder;
}

// source code from: http://typedarray.org/wp-content/projects/WebAudioRecorder/script.js
// https://github.com/mattdiamond/Recorderjs#license-mit
// ______________________
// StereoAudioRecorder.js

/**
 * StereoAudioRecorder is a standalone class used by {@link RecordRTC} to bring "stereo" audio-recording in chrome.
 * @summary JavaScript standalone object for stereo audio recording.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef StereoAudioRecorder
 * @class
 * @example
 * var recorder = new StereoAudioRecorder(MediaStream, {
 *     sampleRate: 44100,
 *     bufferSize: 4096
 * });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {sampleRate: 44100, bufferSize: 4096, numberOfAudioChannels: 1, etc.}
 */

function StereoAudioRecorder(mediaStream, config) {
    if (!getTracks(mediaStream, 'audio').length) {
        throw 'Your stream has no audio tracks.';
    }

    config = config || {};

    var self = this;

    // variables
    var leftchannel = [];
    var rightchannel = [];
    var recording = false;
    var recordingLength = 0;
    var jsAudioNode;

    var numberOfAudioChannels = 2;

    /**
     * Set sample rates such as 8K or 16K. Reference: http://stackoverflow.com/a/28977136/552182
     * @property {number} desiredSampRate - Desired Bits per sample * 1000
     * @memberof StereoAudioRecorder
     * @instance
     * @example
     * var recorder = StereoAudioRecorder(mediaStream, {
     *   desiredSampRate: 16 * 1000 // bits-per-sample * 1000
     * });
     */
    var desiredSampRate = config.desiredSampRate;

    // backward compatibility
    if (config.leftChannel === true) {
        numberOfAudioChannels = 1;
    }

    if (config.numberOfAudioChannels === 1) {
        numberOfAudioChannels = 1;
    }

    if (!numberOfAudioChannels || numberOfAudioChannels < 1) {
        numberOfAudioChannels = 2;
    }

    if (!config.disableLogs) {
        console.log('StereoAudioRecorder is set to record number of channels: ' + numberOfAudioChannels);
    }

    // if any Track within the MediaStream is muted or not enabled at any time, 
    // the browser will only record black frames 
    // or silence since that is the content produced by the Track
    // so we need to stopRecording as soon as any single track ends.
    if (typeof config.checkForInactiveTracks === 'undefined') {
        config.checkForInactiveTracks = true;
    }

    function isMediaStreamActive() {
        if (config.checkForInactiveTracks === false) {
            // always return "true"
            return true;
        }

        if ('active' in mediaStream) {
            if (!mediaStream.active) {
                return false;
            }
        } else if ('ended' in mediaStream) { // old hack
            if (mediaStream.ended) {
                return false;
            }
        }
        return true;
    }

    /**
     * This method records MediaStream.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (isMediaStreamActive() === false) {
            throw 'Please make sure MediaStream is active.';
        }

        resetVariables();

        isAudioProcessStarted = isPaused = false;
        recording = true;

        if (typeof config.timeSlice !== 'undefined') {
            looper();
        }
    };

    function mergeLeftRightBuffers(config, callback) {
        function mergeAudioBuffers(config, cb) {
            var numberOfAudioChannels = config.numberOfAudioChannels;

            // todo: "slice(0)" --- is it causes loop? Should be removed?
            var leftBuffers = config.leftBuffers.slice(0);
            var rightBuffers = config.rightBuffers.slice(0);
            var sampleRate = config.sampleRate;
            var internalInterleavedLength = config.internalInterleavedLength;
            var desiredSampRate = config.desiredSampRate;

            if (numberOfAudioChannels === 2) {
                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);
                rightBuffers = mergeBuffers(rightBuffers, internalInterleavedLength);

                if (desiredSampRate) {
                    leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
                    rightBuffers = interpolateArray(rightBuffers, desiredSampRate, sampleRate);
                }
            }

            if (numberOfAudioChannels === 1) {
                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);

                if (desiredSampRate) {
                    leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
                }
            }

            // set sample rate as desired sample rate
            if (desiredSampRate) {
                sampleRate = desiredSampRate;
            }

            // for changing the sampling rate, reference:
            // http://stackoverflow.com/a/28977136/552182
            function interpolateArray(data, newSampleRate, oldSampleRate) {
                var fitCount = Math.round(data.length * (newSampleRate / oldSampleRate));
                var newData = [];
                var springFactor = Number((data.length - 1) / (fitCount - 1));
                newData[0] = data[0];
                for (var i = 1; i < fitCount - 1; i++) {
                    var tmp = i * springFactor;
                    var before = Number(Math.floor(tmp)).toFixed();
                    var after = Number(Math.ceil(tmp)).toFixed();
                    var atPoint = tmp - before;
                    newData[i] = linearInterpolate(data[before], data[after], atPoint);
                }
                newData[fitCount - 1] = data[data.length - 1];
                return newData;
            }

            function linearInterpolate(before, after, atPoint) {
                return before + (after - before) * atPoint;
            }

            function mergeBuffers(channelBuffer, rLength) {
                var result = new Float64Array(rLength);
                var offset = 0;
                var lng = channelBuffer.length;

                for (var i = 0; i < lng; i++) {
                    var buffer = channelBuffer[i];
                    result.set(buffer, offset);
                    offset += buffer.length;
                }

                return result;
            }

            function interleave(leftChannel, rightChannel) {
                var length = leftChannel.length + rightChannel.length;

                var result = new Float64Array(length);

                var inputIndex = 0;

                for (var index = 0; index < length;) {
                    result[index++] = leftChannel[inputIndex];
                    result[index++] = rightChannel[inputIndex];
                    inputIndex++;
                }
                return result;
            }

            function writeUTFBytes(view, offset, string) {
                var lng = string.length;
                for (var i = 0; i < lng; i++) {
                    view.setUint8(offset + i, string.charCodeAt(i));
                }
            }

            // interleave both channels together
            var interleaved;

            if (numberOfAudioChannels === 2) {
                interleaved = interleave(leftBuffers, rightBuffers);
            }

            if (numberOfAudioChannels === 1) {
                interleaved = leftBuffers;
            }

            var interleavedLength = interleaved.length;

            // create wav file
            var resultingBufferLength = 44 + interleavedLength * 2;

            var buffer = new ArrayBuffer(resultingBufferLength);

            var view = new DataView(buffer);

            // RIFF chunk descriptor/identifier 
            writeUTFBytes(view, 0, 'RIFF');

            // RIFF chunk length
            // changed "44" to "36" via #401
            view.setUint32(4, 36 + interleavedLength * 2, true);

            // RIFF type 
            writeUTFBytes(view, 8, 'WAVE');

            // format chunk identifier 
            // FMT sub-chunk
            writeUTFBytes(view, 12, 'fmt ');

            // format chunk length 
            view.setUint32(16, 16, true);

            // sample format (raw)
            view.setUint16(20, 1, true);

            // stereo (2 channels)
            view.setUint16(22, numberOfAudioChannels, true);

            // sample rate 
            view.setUint32(24, sampleRate, true);

            // byte rate (sample rate * block align)
            view.setUint32(28, sampleRate * 2, true);

            // block align (channel count * bytes per sample) 
            view.setUint16(32, numberOfAudioChannels * 2, true);

            // bits per sample 
            view.setUint16(34, 16, true);

            // data sub-chunk
            // data chunk identifier 
            writeUTFBytes(view, 36, 'data');

            // data chunk length 
            view.setUint32(40, interleavedLength * 2, true);

            // write the PCM samples
            var lng = interleavedLength;
            var index = 44;
            var volume = 1;
            for (var i = 0; i < lng; i++) {
                view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
                index += 2;
            }

            if (cb) {
                return cb({
                    buffer: buffer,
                    view: view
                });
            }

            postMessage({
                buffer: buffer,
                view: view
            });
        }

        if (config.noWorker) {
            mergeAudioBuffers(config, function(data) {
                callback(data.buffer, data.view);
            });
            return;
        }


        var webWorker = processInWebWorker(mergeAudioBuffers);

        webWorker.onmessage = function(event) {
            callback(event.data.buffer, event.data.view);

            // release memory
            URL.revokeObjectURL(webWorker.workerURL);

            // kill webworker (or Chrome will kill your page after ~25 calls)
            webWorker.terminate();
        };

        webWorker.postMessage(config);
    }

    function processInWebWorker(_function) {
        var workerURL = URL.createObjectURL(new Blob([_function.toString(),
            ';this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
        ], {
            type: 'application/javascript'
        }));

        var worker = new Worker(workerURL);
        worker.workerURL = workerURL;
        return worker;
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        // stop recording
        recording = false;

        mergeLeftRightBuffers({
            desiredSampRate: desiredSampRate,
            sampleRate: sampleRate,
            numberOfAudioChannels: numberOfAudioChannels,
            internalInterleavedLength: recordingLength,
            leftBuffers: leftchannel,
            rightBuffers: numberOfAudioChannels === 1 ? [] : rightchannel,
            noWorker: config.noWorker
        }, function(buffer, view) {
            /**
             * @property {Blob} blob - The recorded blob object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var blob = recorder.blob;
             * });
             */
            self.blob = new Blob([view], {
                type: 'audio/wav'
            });

            /**
             * @property {ArrayBuffer} buffer - The recorded buffer object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var buffer = recorder.buffer;
             * });
             */
            self.buffer = new ArrayBuffer(view.buffer.byteLength);

            /**
             * @property {DataView} view - The recorded data-view object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var view = recorder.view;
             * });
             */
            self.view = view;

            self.sampleRate = desiredSampRate || sampleRate;
            self.bufferSize = bufferSize;

            // recorded audio length
            self.length = recordingLength;

            isAudioProcessStarted = false;

            if (callback) {
                callback(self.blob);
            }
        });
    };

    if (typeof Storage === 'undefined') {
        var Storage = {
            AudioContextConstructor: null,
            AudioContext: window.AudioContext || window.webkitAudioContext
        };
    }

    if (!Storage.AudioContextConstructor) {
        Storage.AudioContextConstructor = new Storage.AudioContext();
    }

    var context = Storage.AudioContextConstructor;

    // creates an audio node from the microphone incoming stream
    var audioInput = context.createMediaStreamSource(mediaStream);

    var legalBufferValues = [0, 256, 512, 1024, 2048, 4096, 8192, 16384];

    /**
     * From the spec: This value controls how frequently the audioprocess event is
     * dispatched and how many sample-frames need to be processed each call.
     * Lower values for buffer size will result in a lower (better) latency.
     * Higher values will be necessary to avoid audio breakup and glitches
     * The size of the buffer (in sample-frames) which needs to
     * be processed each time onprocessaudio is called.
     * Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384).
     * @property {number} bufferSize - Buffer-size for how frequently the audioprocess event is dispatched.
     * @memberof StereoAudioRecorder
     * @example
     * recorder = new StereoAudioRecorder(mediaStream, {
     *     bufferSize: 4096
     * });
     */

    // "0" means, let chrome decide the most accurate buffer-size for current platform.
    var bufferSize = typeof config.bufferSize === 'undefined' ? 4096 : config.bufferSize;

    if (legalBufferValues.indexOf(bufferSize) === -1) {
        if (!config.disableLogs) {
            console.log('Legal values for buffer-size are ' + JSON.stringify(legalBufferValues, null, '\t'));
        }
    }

    if (context.createJavaScriptNode) {
        jsAudioNode = context.createJavaScriptNode(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
    } else if (context.createScriptProcessor) {
        jsAudioNode = context.createScriptProcessor(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
    } else {
        throw 'WebAudio API has no support on this browser.';
    }

    // connect the stream to the script processor
    audioInput.connect(jsAudioNode);

    if (!config.bufferSize) {
        bufferSize = jsAudioNode.bufferSize; // device buffer-size
    }

    /**
     * The sample rate (in sample-frames per second) at which the
     * AudioContext handles audio. It is assumed that all AudioNodes
     * in the context run at this rate. In making this assumption,
     * sample-rate converters or "varispeed" processors are not supported
     * in real-time processing.
     * The sampleRate parameter describes the sample-rate of the
     * linear PCM audio data in the buffer in sample-frames per second.
     * An implementation must support sample-rates in at least
     * the range 22050 to 96000.
     * @property {number} sampleRate - Buffer-size for how frequently the audioprocess event is dispatched.
     * @memberof StereoAudioRecorder
     * @example
     * recorder = new StereoAudioRecorder(mediaStream, {
     *     sampleRate: 44100
     * });
     */
    var sampleRate = typeof config.sampleRate !== 'undefined' ? config.sampleRate : context.sampleRate || 44100;

    if (sampleRate < 22050 || sampleRate > 96000) {
        // Ref: http://stackoverflow.com/a/26303918/552182
        if (!config.disableLogs) {
            console.log('sample-rate must be under range 22050 and 96000.');
        }
    }

    if (!config.disableLogs) {
        if (config.desiredSampRate) {
            console.log('Desired sample-rate: ' + config.desiredSampRate);
        }
    }

    var isPaused = false;
    /**
     * This method pauses the recording process.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPaused = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (isMediaStreamActive() === false) {
            throw 'Please make sure MediaStream is active.';
        }

        if (!recording) {
            if (!config.disableLogs) {
                console.log('Seems recording has been restarted.');
            }
            this.record();
            return;
        }

        isPaused = false;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        config.checkForInactiveTracks = false;

        if (recording) {
            this.stop(clearRecordedDataCB);
        }

        clearRecordedDataCB();
    };

    function resetVariables() {
        leftchannel = [];
        rightchannel = [];
        recordingLength = 0;
        isAudioProcessStarted = false;
        recording = false;
        isPaused = false;
        context = null;

        self.leftchannel = leftchannel;
        self.rightchannel = rightchannel;
        self.numberOfAudioChannels = numberOfAudioChannels;
        self.desiredSampRate = desiredSampRate;
        self.sampleRate = sampleRate;
        self.recordingLength = recordingLength;

        intervalsBasedBuffers = {
            left: [],
            right: [],
            recordingLength: 0
        };
    }

    function clearRecordedDataCB() {
        if (jsAudioNode) {
            jsAudioNode.onaudioprocess = null;
            jsAudioNode.disconnect();
            jsAudioNode = null;
        }

        if (audioInput) {
            audioInput.disconnect();
            audioInput = null;
        }

        resetVariables();
    }

    // for debugging
    this.name = 'StereoAudioRecorder';
    this.toString = function() {
        return this.name;
    };

    var isAudioProcessStarted = false;

    function onAudioProcessDataAvailable(e) {
        if (isPaused) {
            return;
        }

        if (isMediaStreamActive() === false) {
            if (!config.disableLogs) {
                console.log('MediaStream seems stopped.');
            }
            jsAudioNode.disconnect();
            recording = false;
        }

        if (!recording) {
            if (audioInput) {
                audioInput.disconnect();
                audioInput = null;
            }
            return;
        }

        /**
         * This method is called on "onaudioprocess" event's first invocation.
         * @method {function} onAudioProcessStarted
         * @memberof StereoAudioRecorder
         * @example
         * recorder.onAudioProcessStarted: function() { };
         */
        if (!isAudioProcessStarted) {
            isAudioProcessStarted = true;
            if (config.onAudioProcessStarted) {
                config.onAudioProcessStarted();
            }

            if (config.initCallback) {
                config.initCallback();
            }
        }

        var left = e.inputBuffer.getChannelData(0);

        // we clone the samples
        var chLeft = new Float32Array(left);
        leftchannel.push(chLeft);

        if (numberOfAudioChannels === 2) {
            var right = e.inputBuffer.getChannelData(1);
            var chRight = new Float32Array(right);
            rightchannel.push(chRight);
        }

        recordingLength += bufferSize;

        // export raw PCM
        self.recordingLength = recordingLength;

        if (typeof config.timeSlice !== 'undefined') {
            intervalsBasedBuffers.recordingLength += bufferSize;
            intervalsBasedBuffers.left.push(chLeft);

            if (numberOfAudioChannels === 2) {
                intervalsBasedBuffers.right.push(chRight);
            }
        }
    }

    jsAudioNode.onaudioprocess = onAudioProcessDataAvailable;

    // to prevent self audio to be connected with speakers
    if (context.createMediaStreamDestination) {
        jsAudioNode.connect(context.createMediaStreamDestination());
    } else {
        jsAudioNode.connect(context.destination);
    }

    // export raw PCM
    this.leftchannel = leftchannel;
    this.rightchannel = rightchannel;
    this.numberOfAudioChannels = numberOfAudioChannels;
    this.desiredSampRate = desiredSampRate;
    this.sampleRate = sampleRate;
    self.recordingLength = recordingLength;

    // helper for intervals based blobs
    var intervalsBasedBuffers = {
        left: [],
        right: [],
        recordingLength: 0
    };

    // this looper is used to support intervals based blobs (via timeSlice+ondataavailable)
    function looper() {
        if (!recording || typeof config.ondataavailable !== 'function' || typeof config.timeSlice === 'undefined') {
            return;
        }

        if (intervalsBasedBuffers.left.length) {
            mergeLeftRightBuffers({
                desiredSampRate: desiredSampRate,
                sampleRate: sampleRate,
                numberOfAudioChannels: numberOfAudioChannels,
                internalInterleavedLength: intervalsBasedBuffers.recordingLength,
                leftBuffers: intervalsBasedBuffers.left,
                rightBuffers: numberOfAudioChannels === 1 ? [] : intervalsBasedBuffers.right
            }, function(buffer, view) {
                var blob = new Blob([view], {
                    type: 'audio/wav'
                });
                config.ondataavailable(blob);

                setTimeout(looper, config.timeSlice);
            });

            intervalsBasedBuffers = {
                left: [],
                right: [],
                recordingLength: 0
            };
        } else {
            setTimeout(looper, config.timeSlice);
        }
    }
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.StereoAudioRecorder = StereoAudioRecorder;
}

// _________________
// CanvasRecorder.js

/**
 * CanvasRecorder is a standalone class used by {@link RecordRTC} to bring HTML5-Canvas recording into video WebM. It uses HTML2Canvas library and runs top over {@link Whammy}.
 * @summary HTML2Canvas recording into video WebM.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef CanvasRecorder
 * @class
 * @example
 * var recorder = new CanvasRecorder(htmlElement, { disableLogs: true, useWhammyRecorder: true });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {HTMLElement} htmlElement - querySelector/getElementById/getElementsByTagName[0]/etc.
 * @param {object} config - {disableLogs:true, initCallback: function}
 */

function CanvasRecorder(htmlElement, config) {
    if (typeof html2canvas === 'undefined') {
        throw 'Please link: https://cdn.webrtc-experiment.com/screenshot.js';
    }

    config = config || {};
    if (!config.frameInterval) {
        config.frameInterval = 10;
    }

    // via DetectRTC.js
    var isCanvasSupportsStreamCapturing = false;
    ['captureStream', 'mozCaptureStream', 'webkitCaptureStream'].forEach(function(item) {
        if (item in document.createElement('canvas')) {
            isCanvasSupportsStreamCapturing = true;
        }
    });

    var _isChrome = (!!window.webkitRTCPeerConnection || !!window.webkitGetUserMedia) && !!window.chrome;

    var chromeVersion = 50;
    var matchArray = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    if (_isChrome && matchArray && matchArray[2]) {
        chromeVersion = parseInt(matchArray[2], 10);
    }

    if (_isChrome && chromeVersion < 52) {
        isCanvasSupportsStreamCapturing = false;
    }

    if (config.useWhammyRecorder) {
        isCanvasSupportsStreamCapturing = false;
    }

    var globalCanvas, mediaStreamRecorder;

    if (isCanvasSupportsStreamCapturing) {
        if (!config.disableLogs) {
            console.log('Your browser supports both MediRecorder API and canvas.captureStream!');
        }

        if (htmlElement instanceof HTMLCanvasElement) {
            globalCanvas = htmlElement;
        } else if (htmlElement instanceof CanvasRenderingContext2D) {
            globalCanvas = htmlElement.canvas;
        } else {
            throw 'Please pass either HTMLCanvasElement or CanvasRenderingContext2D.';
        }
    } else if (!!navigator.mozGetUserMedia) {
        if (!config.disableLogs) {
            console.error('Canvas recording is NOT supported in Firefox.');
        }
    }

    var isRecording;

    /**
     * This method records Canvas.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        isRecording = true;

        if (isCanvasSupportsStreamCapturing && !config.useWhammyRecorder) {
            // CanvasCaptureMediaStream
            var canvasMediaStream;
            if ('captureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.captureStream(25); // 25 FPS
            } else if ('mozCaptureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.mozCaptureStream(25);
            } else if ('webkitCaptureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.webkitCaptureStream(25);
            }

            try {
                var mdStream = new MediaStream();
                mdStream.addTrack(getTracks(canvasMediaStream, 'video')[0]);
                canvasMediaStream = mdStream;
            } catch (e) {}

            if (!canvasMediaStream) {
                throw 'captureStream API are NOT available.';
            }

            // Note: Jan 18, 2016 status is that, 
            // Firefox MediaRecorder API can't record CanvasCaptureMediaStream object.
            mediaStreamRecorder = new MediaStreamRecorder(canvasMediaStream, {
                mimeType: config.mimeType || 'video/webm'
            });
            mediaStreamRecorder.record();
        } else {
            whammy.frames = [];
            lastTime = new Date().getTime();
            drawCanvasFrame();
        }

        if (config.initCallback) {
            config.initCallback();
        }
    };

    this.getWebPImages = function(callback) {
        if (htmlElement.nodeName.toLowerCase() !== 'canvas') {
            callback();
            return;
        }

        var framesLength = whammy.frames.length;
        whammy.frames.forEach(function(frame, idx) {
            var framesRemaining = framesLength - idx;
            if (!config.disableLogs) {
                console.log(framesRemaining + '/' + framesLength + ' frames remaining');
            }

            if (config.onEncodingCallback) {
                config.onEncodingCallback(framesRemaining, framesLength);
            }

            var webp = frame.image.toDataURL('image/webp', 1);
            whammy.frames[idx].image = webp;
        });

        if (!config.disableLogs) {
            console.log('Generating WebM');
        }

        callback();
    };

    /**
     * This method stops recording Canvas.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        isRecording = false;

        var that = this;

        if (isCanvasSupportsStreamCapturing && mediaStreamRecorder) {
            mediaStreamRecorder.stop(callback);
            return;
        }

        this.getWebPImages(function() {
            /**
             * @property {Blob} blob - Recorded frames in video/webm blob.
             * @memberof CanvasRecorder
             * @example
             * recorder.stop(function() {
             *     var blob = recorder.blob;
             * });
             */
            whammy.compile(function(blob) {
                if (!config.disableLogs) {
                    console.log('Recording finished!');
                }

                that.blob = blob;

                if (that.blob.forEach) {
                    that.blob = new Blob([], {
                        type: 'video/webm'
                    });
                }

                if (callback) {
                    callback(that.blob);
                }

                whammy.frames = [];
            });
        });
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;

        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
            mediaStreamRecorder.pause();
            return;
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;

        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
            mediaStreamRecorder.resume();
            return;
        }

        if (!isRecording) {
            this.record();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (isRecording) {
            this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        whammy.frames = [];
        isRecording = false;
        isPausedRecording = false;
    }

    // for debugging
    this.name = 'CanvasRecorder';
    this.toString = function() {
        return this.name;
    };

    function cloneCanvas() {
        //create a new canvas
        var newCanvas = document.createElement('canvas');
        var context = newCanvas.getContext('2d');

        //set dimensions
        newCanvas.width = htmlElement.width;
        newCanvas.height = htmlElement.height;

        //apply the old canvas to the new one
        context.drawImage(htmlElement, 0, 0);

        //return the new canvas
        return newCanvas;
    }

    function drawCanvasFrame() {
        if (isPausedRecording) {
            lastTime = new Date().getTime();
            return setTimeout(drawCanvasFrame, 500);
        }

        if (htmlElement.nodeName.toLowerCase() === 'canvas') {
            var duration = new Date().getTime() - lastTime;
            // via #206, by Jack i.e. @Seymourr
            lastTime = new Date().getTime();

            whammy.frames.push({
                image: cloneCanvas(),
                duration: duration
            });

            if (isRecording) {
                setTimeout(drawCanvasFrame, config.frameInterval);
            }
            return;
        }

        html2canvas(htmlElement, {
            grabMouse: typeof config.showMousePointer === 'undefined' || config.showMousePointer,
            onrendered: function(canvas) {
                var duration = new Date().getTime() - lastTime;
                if (!duration) {
                    return setTimeout(drawCanvasFrame, config.frameInterval);
                }

                // via #206, by Jack i.e. @Seymourr
                lastTime = new Date().getTime();

                whammy.frames.push({
                    image: canvas.toDataURL('image/webp', 1),
                    duration: duration
                });

                if (isRecording) {
                    setTimeout(drawCanvasFrame, config.frameInterval);
                }
            }
        });
    }

    var lastTime = new Date().getTime();

    var whammy = new Whammy.Video(100);
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.CanvasRecorder = CanvasRecorder;
}

// _________________
// WhammyRecorder.js

/**
 * WhammyRecorder is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It runs top over {@link Whammy}.
 * @summary Video recording feature in Chrome.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef WhammyRecorder
 * @class
 * @example
 * var recorder = new WhammyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs: true, initCallback: function, video: HTMLVideoElement, etc.}
 */

function WhammyRecorder(mediaStream, config) {

    config = config || {};

    if (!config.frameInterval) {
        config.frameInterval = 10;
    }

    if (!config.disableLogs) {
        console.log('Using frames-interval:', config.frameInterval);
    }

    /**
     * This method records video.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (!config.width) {
            config.width = 320;
        }

        if (!config.height) {
            config.height = 240;
        }

        if (!config.video) {
            config.video = {
                width: config.width,
                height: config.height
            };
        }

        if (!config.canvas) {
            config.canvas = {
                width: config.width,
                height: config.height
            };
        }

        canvas.width = config.canvas.width || 320;
        canvas.height = config.canvas.height || 240;

        context = canvas.getContext('2d');

        // setting defaults
        if (config.video && config.video instanceof HTMLVideoElement) {
            video = config.video.cloneNode();

            if (config.initCallback) {
                config.initCallback();
            }
        } else {
            video = document.createElement('video');

            setSrcObject(mediaStream, video);

            video.onloadedmetadata = function() { // "onloadedmetadata" may NOT work in FF?
                if (config.initCallback) {
                    config.initCallback();
                }
            };

            video.width = config.video.width;
            video.height = config.video.height;
        }

        video.muted = true;
        video.play();

        lastTime = new Date().getTime();
        whammy = new Whammy.Video();

        if (!config.disableLogs) {
            console.log('canvas resolutions', canvas.width, '*', canvas.height);
            console.log('video width/height', video.width || canvas.width, '*', video.height || canvas.height);
        }

        drawFrames(config.frameInterval);
    };

    /**
     * Draw and push frames to Whammy
     * @param {integer} frameInterval - set minimum interval (in milliseconds) between each time we push a frame to Whammy
     */
    function drawFrames(frameInterval) {
        frameInterval = typeof frameInterval !== 'undefined' ? frameInterval : 10;

        var duration = new Date().getTime() - lastTime;
        if (!duration) {
            return setTimeout(drawFrames, frameInterval, frameInterval);
        }

        if (isPausedRecording) {
            lastTime = new Date().getTime();
            return setTimeout(drawFrames, 100);
        }

        // via #206, by Jack i.e. @Seymourr
        lastTime = new Date().getTime();

        if (video.paused) {
            // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
            // Tweak for Android Chrome
            video.play();
        }

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        whammy.frames.push({
            duration: duration,
            image: canvas.toDataURL('image/webp')
        });

        if (!isStopDrawing) {
            setTimeout(drawFrames, frameInterval, frameInterval);
        }
    }

    function asyncLoop(o) {
        var i = -1,
            length = o.length;

        (function loop() {
            i++;
            if (i === length) {
                o.callback();
                return;
            }

            // "setTimeout" added by Jim McLeod
            setTimeout(function() {
                o.functionToLoop(loop, i);
            }, 1);
        })();
    }


    /**
     * remove black frames from the beginning to the specified frame
     * @param {Array} _frames - array of frames to be checked
     * @param {number} _framesToCheck - number of frame until check will be executed (-1 - will drop all frames until frame not matched will be found)
     * @param {number} _pixTolerance - 0 - very strict (only black pixel color) ; 1 - all
     * @param {number} _frameTolerance - 0 - very strict (only black frame color) ; 1 - all
     * @returns {Array} - array of frames
     */
    // pull#293 by @volodalexey
    function dropBlackFrames(_frames, _framesToCheck, _pixTolerance, _frameTolerance, callback) {
        var localCanvas = document.createElement('canvas');
        localCanvas.width = canvas.width;
        localCanvas.height = canvas.height;
        var context2d = localCanvas.getContext('2d');
        var resultFrames = [];

        var checkUntilNotBlack = _framesToCheck === -1;
        var endCheckFrame = (_framesToCheck && _framesToCheck > 0 && _framesToCheck <= _frames.length) ?
            _framesToCheck : _frames.length;
        var sampleColor = {
            r: 0,
            g: 0,
            b: 0
        };
        var maxColorDifference = Math.sqrt(
            Math.pow(255, 2) +
            Math.pow(255, 2) +
            Math.pow(255, 2)
        );
        var pixTolerance = _pixTolerance && _pixTolerance >= 0 && _pixTolerance <= 1 ? _pixTolerance : 0;
        var frameTolerance = _frameTolerance && _frameTolerance >= 0 && _frameTolerance <= 1 ? _frameTolerance : 0;
        var doNotCheckNext = false;

        asyncLoop({
            length: endCheckFrame,
            functionToLoop: function(loop, f) {
                var matchPixCount, endPixCheck, maxPixCount;

                var finishImage = function() {
                    if (!doNotCheckNext && maxPixCount - matchPixCount <= maxPixCount * frameTolerance) {
                        // console.log('removed black frame : ' + f + ' ; frame duration ' + _frames[f].duration);
                    } else {
                        // console.log('frame is passed : ' + f);
                        if (checkUntilNotBlack) {
                            doNotCheckNext = true;
                        }
                        resultFrames.push(_frames[f]);
                    }
                    loop();
                };

                if (!doNotCheckNext) {
                    var image = new Image();
                    image.onload = function() {
                        context2d.drawImage(image, 0, 0, canvas.width, canvas.height);
                        var imageData = context2d.getImageData(0, 0, canvas.width, canvas.height);
                        matchPixCount = 0;
                        endPixCheck = imageData.data.length;
                        maxPixCount = imageData.data.length / 4;

                        for (var pix = 0; pix < endPixCheck; pix += 4) {
                            var currentColor = {
                                r: imageData.data[pix],
                                g: imageData.data[pix + 1],
                                b: imageData.data[pix + 2]
                            };
                            var colorDifference = Math.sqrt(
                                Math.pow(currentColor.r - sampleColor.r, 2) +
                                Math.pow(currentColor.g - sampleColor.g, 2) +
                                Math.pow(currentColor.b - sampleColor.b, 2)
                            );
                            // difference in color it is difference in color vectors (r1,g1,b1) <=> (r2,g2,b2)
                            if (colorDifference <= maxColorDifference * pixTolerance) {
                                matchPixCount++;
                            }
                        }
                        finishImage();
                    };
                    image.src = _frames[f].image;
                } else {
                    finishImage();
                }
            },
            callback: function() {
                resultFrames = resultFrames.concat(_frames.slice(endCheckFrame));

                if (resultFrames.length <= 0) {
                    // at least one last frame should be available for next manipulation
                    // if total duration of all frames will be < 1000 than ffmpeg doesn't work well...
                    resultFrames.push(_frames[_frames.length - 1]);
                }
                callback(resultFrames);
            }
        });
    }

    var isStopDrawing = false;

    /**
     * This method stops recording video.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        isStopDrawing = true;

        var _this = this;
        // analyse of all frames takes some time!
        setTimeout(function() {
            // e.g. dropBlackFrames(frames, 10, 1, 1) - will cut all 10 frames
            // e.g. dropBlackFrames(frames, 10, 0.5, 0.5) - will analyse 10 frames
            // e.g. dropBlackFrames(frames, 10) === dropBlackFrames(frames, 10, 0, 0) - will analyse 10 frames with strict black color
            dropBlackFrames(whammy.frames, -1, null, null, function(frames) {
                whammy.frames = frames;

                // to display advertisement images!
                if (config.advertisement && config.advertisement.length) {
                    whammy.frames = config.advertisement.concat(whammy.frames);
                }

                /**
                 * @property {Blob} blob - Recorded frames in video/webm blob.
                 * @memberof WhammyRecorder
                 * @example
                 * recorder.stop(function() {
                 *     var blob = recorder.blob;
                 * });
                 */
                whammy.compile(function(blob) {
                    _this.blob = blob;

                    if (_this.blob.forEach) {
                        _this.blob = new Blob([], {
                            type: 'video/webm'
                        });
                    }

                    if (callback) {
                        callback(_this.blob);
                    }
                });
            });
        }, 10);
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;

        if (isStopDrawing) {
            this.record();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (!isStopDrawing) {
            this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        whammy.frames = [];
        isStopDrawing = true;
        isPausedRecording = false;
    }

    // for debugging
    this.name = 'WhammyRecorder';
    this.toString = function() {
        return this.name;
    };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    var video;
    var lastTime;
    var whammy;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.WhammyRecorder = WhammyRecorder;
}

// https://github.com/antimatter15/whammy/blob/master/LICENSE
// _________
// Whammy.js

// todo: Firefox now supports webp for webm containers!
// their MediaRecorder implementation works well!
// should we provide an option to record via Whammy.js or MediaRecorder API is a better solution?

/**
 * Whammy is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It is written by {@link https://github.com/antimatter15|antimatter15}
 * @summary A real time javascript webm encoder based on a canvas hack.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef Whammy
 * @class
 * @example
 * var recorder = new Whammy().Video(15);
 * recorder.add(context || canvas || dataURL);
 * var output = recorder.compile();
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */

var Whammy = (function() {
    // a more abstract-ish API

    function WhammyVideo(duration) {
        this.frames = [];
        this.duration = duration || 1;
        this.quality = 0.8;
    }

    /**
     * Pass Canvas or Context or image/webp(string) to {@link Whammy} encoder.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * recorder.add(canvas || context || 'image/webp');
     * @param {string} frame - Canvas || Context || image/webp
     * @param {number} duration - Stick a duration (in milliseconds)
     */
    WhammyVideo.prototype.add = function(frame, duration) {
        if ('canvas' in frame) { //CanvasRenderingContext2D
            frame = frame.canvas;
        }

        if ('toDataURL' in frame) {
            frame = frame.toDataURL('image/webp', this.quality);
        }

        if (!(/^data:image\/webp;base64,/ig).test(frame)) {
            throw 'Input must be formatted properly as a base64 encoded DataURI of type image/webp';
        }
        this.frames.push({
            image: frame,
            duration: duration || this.duration
        });
    };

    function processInWebWorker(_function) {
        var blob = URL.createObjectURL(new Blob([_function.toString(),
            'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
        ], {
            type: 'application/javascript'
        }));

        var worker = new Worker(blob);
        URL.revokeObjectURL(blob);
        return worker;
    }

    function whammyInWebWorker(frames) {
        function ArrayToWebM(frames) {
            var info = checkFrames(frames);
            if (!info) {
                return [];
            }

            var clusterMaxDuration = 30000;

            var EBML = [{
                'id': 0x1a45dfa3, // EBML
                'data': [{
                    'data': 1,
                    'id': 0x4286 // EBMLVersion
                }, {
                    'data': 1,
                    'id': 0x42f7 // EBMLReadVersion
                }, {
                    'data': 4,
                    'id': 0x42f2 // EBMLMaxIDLength
                }, {
                    'data': 8,
                    'id': 0x42f3 // EBMLMaxSizeLength
                }, {
                    'data': 'webm',
                    'id': 0x4282 // DocType
                }, {
                    'data': 2,
                    'id': 0x4287 // DocTypeVersion
                }, {
                    'data': 2,
                    'id': 0x4285 // DocTypeReadVersion
                }]
            }, {
                'id': 0x18538067, // Segment
                'data': [{
                    'id': 0x1549a966, // Info
                    'data': [{
                        'data': 1e6, //do things in millisecs (num of nanosecs for duration scale)
                        'id': 0x2ad7b1 // TimecodeScale
                    }, {
                        'data': 'whammy',
                        'id': 0x4d80 // MuxingApp
                    }, {
                        'data': 'whammy',
                        'id': 0x5741 // WritingApp
                    }, {
                        'data': doubleToString(info.duration),
                        'id': 0x4489 // Duration
                    }]
                }, {
                    'id': 0x1654ae6b, // Tracks
                    'data': [{
                        'id': 0xae, // TrackEntry
                        'data': [{
                            'data': 1,
                            'id': 0xd7 // TrackNumber
                        }, {
                            'data': 1,
                            'id': 0x73c5 // TrackUID
                        }, {
                            'data': 0,
                            'id': 0x9c // FlagLacing
                        }, {
                            'data': 'und',
                            'id': 0x22b59c // Language
                        }, {
                            'data': 'V_VP8',
                            'id': 0x86 // CodecID
                        }, {
                            'data': 'VP8',
                            'id': 0x258688 // CodecName
                        }, {
                            'data': 1,
                            'id': 0x83 // TrackType
                        }, {
                            'id': 0xe0, // Video
                            'data': [{
                                'data': info.width,
                                'id': 0xb0 // PixelWidth
                            }, {
                                'data': info.height,
                                'id': 0xba // PixelHeight
                            }]
                        }]
                    }]
                }]
            }];

            //Generate clusters (max duration)
            var frameNumber = 0;
            var clusterTimecode = 0;
            while (frameNumber < frames.length) {

                var clusterFrames = [];
                var clusterDuration = 0;
                do {
                    clusterFrames.push(frames[frameNumber]);
                    clusterDuration += frames[frameNumber].duration;
                    frameNumber++;
                } while (frameNumber < frames.length && clusterDuration < clusterMaxDuration);

                var clusterCounter = 0;
                var cluster = {
                    'id': 0x1f43b675, // Cluster
                    'data': getClusterData(clusterTimecode, clusterCounter, clusterFrames)
                }; //Add cluster to segment
                EBML[1].data.push(cluster);
                clusterTimecode += clusterDuration;
            }

            return generateEBML(EBML);
        }

        function getClusterData(clusterTimecode, clusterCounter, clusterFrames) {
            return [{
                'data': clusterTimecode,
                'id': 0xe7 // Timecode
            }].concat(clusterFrames.map(function(webp) {
                var block = makeSimpleBlock({
                    discardable: 0,
                    frame: webp.data.slice(4),
                    invisible: 0,
                    keyframe: 1,
                    lacing: 0,
                    trackNum: 1,
                    timecode: Math.round(clusterCounter)
                });
                clusterCounter += webp.duration;
                return {
                    data: block,
                    id: 0xa3
                };
            }));
        }

        // sums the lengths of all the frames and gets the duration

        function checkFrames(frames) {
            if (!frames[0]) {
                postMessage({
                    error: 'Something went wrong. Maybe WebP format is not supported in the current browser.'
                });
                return;
            }

            var width = frames[0].width,
                height = frames[0].height,
                duration = frames[0].duration;

            for (var i = 1; i < frames.length; i++) {
                duration += frames[i].duration;
            }
            return {
                duration: duration,
                width: width,
                height: height
            };
        }

        function numToBuffer(num) {
            var parts = [];
            while (num > 0) {
                parts.push(num & 0xff);
                num = num >> 8;
            }
            return new Uint8Array(parts.reverse());
        }

        function strToBuffer(str) {
            return new Uint8Array(str.split('').map(function(e) {
                return e.charCodeAt(0);
            }));
        }

        function bitsToBuffer(bits) {
            var data = [];
            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
            bits = pad + bits;
            for (var i = 0; i < bits.length; i += 8) {
                data.push(parseInt(bits.substr(i, 8), 2));
            }
            return new Uint8Array(data);
        }

        function generateEBML(json) {
            var ebml = [];
            for (var i = 0; i < json.length; i++) {
                var data = json[i].data;

                if (typeof data === 'object') {
                    data = generateEBML(data);
                }

                if (typeof data === 'number') {
                    data = bitsToBuffer(data.toString(2));
                }

                if (typeof data === 'string') {
                    data = strToBuffer(data);
                }

                var len = data.size || data.byteLength || data.length;
                var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
                var sizeToString = len.toString(2);
                var padded = (new Array((zeroes * 7 + 7 + 1) - sizeToString.length)).join('0') + sizeToString;
                var size = (new Array(zeroes)).join('0') + '1' + padded;

                ebml.push(numToBuffer(json[i].id));
                ebml.push(bitsToBuffer(size));
                ebml.push(data);
            }

            return new Blob(ebml, {
                type: 'video/webm'
            });
        }

        function toBinStrOld(bits) {
            var data = '';
            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
            bits = pad + bits;
            for (var i = 0; i < bits.length; i += 8) {
                data += String.fromCharCode(parseInt(bits.substr(i, 8), 2));
            }
            return data;
        }

        function makeSimpleBlock(data) {
            var flags = 0;

            if (data.keyframe) {
                flags |= 128;
            }

            if (data.invisible) {
                flags |= 8;
            }

            if (data.lacing) {
                flags |= (data.lacing << 1);
            }

            if (data.discardable) {
                flags |= 1;
            }

            if (data.trackNum > 127) {
                throw 'TrackNumber > 127 not supported';
            }

            var out = [data.trackNum | 0x80, data.timecode >> 8, data.timecode & 0xff, flags].map(function(e) {
                return String.fromCharCode(e);
            }).join('') + data.frame;

            return out;
        }

        function parseWebP(riff) {
            var VP8 = riff.RIFF[0].WEBP[0];

            var frameStart = VP8.indexOf('\x9d\x01\x2a'); // A VP8 keyframe starts with the 0x9d012a header
            for (var i = 0, c = []; i < 4; i++) {
                c[i] = VP8.charCodeAt(frameStart + 3 + i);
            }

            var width, height, tmp;

            //the code below is literally copied verbatim from the bitstream spec
            tmp = (c[1] << 8) | c[0];
            width = tmp & 0x3FFF;
            tmp = (c[3] << 8) | c[2];
            height = tmp & 0x3FFF;
            return {
                width: width,
                height: height,
                data: VP8,
                riff: riff
            };
        }

        function getStrLength(string, offset) {
            return parseInt(string.substr(offset + 4, 4).split('').map(function(i) {
                var unpadded = i.charCodeAt(0).toString(2);
                return (new Array(8 - unpadded.length + 1)).join('0') + unpadded;
            }).join(''), 2);
        }

        function parseRIFF(string) {
            var offset = 0;
            var chunks = {};

            while (offset < string.length) {
                var id = string.substr(offset, 4);
                var len = getStrLength(string, offset);
                var data = string.substr(offset + 4 + 4, len);
                offset += 4 + 4 + len;
                chunks[id] = chunks[id] || [];

                if (id === 'RIFF' || id === 'LIST') {
                    chunks[id].push(parseRIFF(data));
                } else {
                    chunks[id].push(data);
                }
            }
            return chunks;
        }

        function doubleToString(num) {
            return [].slice.call(
                new Uint8Array((new Float64Array([num])).buffer), 0).map(function(e) {
                return String.fromCharCode(e);
            }).reverse().join('');
        }

        var webm = new ArrayToWebM(frames.map(function(frame) {
            var webp = parseWebP(parseRIFF(atob(frame.image.slice(23))));
            webp.duration = frame.duration;
            return webp;
        }));

        postMessage(webm);
    }

    /**
     * Encodes frames in WebM container. It uses WebWorkinvoke to invoke 'ArrayToWebM' method.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * recorder.compile(function(blob) {
     *    // blob.size - blob.type
     * });
     */
    WhammyVideo.prototype.compile = function(callback) {
        var webWorker = processInWebWorker(whammyInWebWorker);

        webWorker.onmessage = function(event) {
            if (event.data.error) {
                console.error(event.data.error);
                return;
            }
            callback(event.data);
        };

        webWorker.postMessage(this.frames);
    };

    return {
        /**
         * A more abstract-ish API.
         * @method
         * @memberof Whammy
         * @example
         * recorder = new Whammy().Video(0.8, 100);
         * @param {?number} speed - 0.8
         * @param {?number} quality - 100
         */
        Video: WhammyVideo
    };
})();

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.Whammy = Whammy;
}

// ______________ (indexed-db)
// DiskStorage.js

/**
 * DiskStorage is a standalone object used by {@link RecordRTC} to store recorded blobs in IndexedDB storage.
 * @summary Writing blobs into IndexedDB.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @example
 * DiskStorage.Store({
 *     audioBlob: yourAudioBlob,
 *     videoBlob: yourVideoBlob,
 *     gifBlob  : yourGifBlob
 * });
 * DiskStorage.Fetch(function(dataURL, type) {
 *     if(type === 'audioBlob') { }
 *     if(type === 'videoBlob') { }
 *     if(type === 'gifBlob')   { }
 * });
 * // DiskStorage.dataStoreName = 'recordRTC';
 * // DiskStorage.onError = function(error) { };
 * @property {function} init - This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
 * @property {function} Fetch - This method fetches stored blobs from IndexedDB.
 * @property {function} Store - This method stores blobs in IndexedDB.
 * @property {function} onError - This function is invoked for any known/unknown error.
 * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */


var DiskStorage = {
    /**
     * This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.init();
     */
    init: function() {
        var self = this;

        if (typeof indexedDB === 'undefined' || typeof indexedDB.open === 'undefined') {
            console.error('IndexedDB API are not available in this browser.');
            return;
        }

        var dbVersion = 1;
        var dbName = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ''),
            db;
        var request = indexedDB.open(dbName, dbVersion);

        function createObjectStore(dataBase) {
            dataBase.createObjectStore(self.dataStoreName);
        }

        function putInDB() {
            var transaction = db.transaction([self.dataStoreName], 'readwrite');

            if (self.videoBlob) {
                transaction.objectStore(self.dataStoreName).put(self.videoBlob, 'videoBlob');
            }

            if (self.gifBlob) {
                transaction.objectStore(self.dataStoreName).put(self.gifBlob, 'gifBlob');
            }

            if (self.audioBlob) {
                transaction.objectStore(self.dataStoreName).put(self.audioBlob, 'audioBlob');
            }

            function getFromStore(portionName) {
                transaction.objectStore(self.dataStoreName).get(portionName).onsuccess = function(event) {
                    if (self.callback) {
                        self.callback(event.target.result, portionName);
                    }
                };
            }

            getFromStore('audioBlob');
            getFromStore('videoBlob');
            getFromStore('gifBlob');
        }

        request.onerror = self.onError;

        request.onsuccess = function() {
            db = request.result;
            db.onerror = self.onError;

            if (db.setVersion) {
                if (db.version !== dbVersion) {
                    var setVersion = db.setVersion(dbVersion);
                    setVersion.onsuccess = function() {
                        createObjectStore(db);
                        putInDB();
                    };
                } else {
                    putInDB();
                }
            } else {
                putInDB();
            }
        };
        request.onupgradeneeded = function(event) {
            createObjectStore(event.target.result);
        };
    },
    /**
     * This method fetches stored blobs from IndexedDB.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.Fetch(function(dataURL, type) {
     *     if(type === 'audioBlob') { }
     *     if(type === 'videoBlob') { }
     *     if(type === 'gifBlob')   { }
     * });
     */
    Fetch: function(callback) {
        this.callback = callback;
        this.init();

        return this;
    },
    /**
     * This method stores blobs in IndexedDB.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.Store({
     *     audioBlob: yourAudioBlob,
     *     videoBlob: yourVideoBlob,
     *     gifBlob  : yourGifBlob
     * });
     */
    Store: function(config) {
        this.audioBlob = config.audioBlob;
        this.videoBlob = config.videoBlob;
        this.gifBlob = config.gifBlob;

        this.init();

        return this;
    },
    /**
     * This function is invoked for any known/unknown error.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.onError = function(error){
     *     alerot( JSON.stringify(error) );
     * };
     */
    onError: function(error) {
        console.error(JSON.stringify(error, null, '\t'));
    },

    /**
     * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.dataStoreName = 'recordRTC';
     */
    dataStoreName: 'recordRTC',
    dbName: null
};

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.DiskStorage = DiskStorage;
}

// ______________
// GifRecorder.js

/**
 * GifRecorder is standalone calss used by {@link RecordRTC} to record video or canvas into animated gif.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef GifRecorder
 * @class
 * @example
 * var recorder = new GifRecorder(mediaStream || canvas || context, { onGifPreview: function, onGifRecordingStarted: function, width: 1280, height: 720, frameRate: 200, quality: 10 });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     img.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object or HTMLCanvasElement or CanvasRenderingContext2D.
 * @param {object} config - {disableLogs:true, initCallback: function, width: 320, height: 240, frameRate: 200, quality: 10}
 */

function GifRecorder(mediaStream, config) {
    if (typeof GIFEncoder === 'undefined') {
        var script = document.createElement('script');
        script.src = 'https://cdn.webrtc-experiment.com/gif-recorder.js';
        (document.body || document.documentElement).appendChild(script);
    }

    config = config || {};

    var isHTMLObject = mediaStream instanceof CanvasRenderingContext2D || mediaStream instanceof HTMLCanvasElement;

    /**
     * This method records MediaStream.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (typeof GIFEncoder === 'undefined') {
            setTimeout(self.record, 1000);
            return;
        }

        if (!isLoadedMetaData) {
            setTimeout(self.record, 1000);
            return;
        }

        if (!isHTMLObject) {
            if (!config.width) {
                config.width = video.offsetWidth || 320;
            }

            if (!config.height) {
                config.height = video.offsetHeight || 240;
            }

            if (!config.video) {
                config.video = {
                    width: config.width,
                    height: config.height
                };
            }

            if (!config.canvas) {
                config.canvas = {
                    width: config.width,
                    height: config.height
                };
            }

            canvas.width = config.canvas.width || 320;
            canvas.height = config.canvas.height || 240;

            video.width = config.video.width || 320;
            video.height = config.video.height || 240;
        }

        // external library to record as GIF images
        gifEncoder = new GIFEncoder();

        // void setRepeat(int iter) 
        // Sets the number of times the set of GIF frames should be played. 
        // Default is 1; 0 means play indefinitely.
        gifEncoder.setRepeat(0);

        // void setFrameRate(Number fps) 
        // Sets frame rate in frames per second. 
        // Equivalent to setDelay(1000/fps).
        // Using "setDelay" instead of "setFrameRate"
        gifEncoder.setDelay(config.frameRate || 200);

        // void setQuality(int quality) 
        // Sets quality of color quantization (conversion of images to the 
        // maximum 256 colors allowed by the GIF specification). 
        // Lower values (minimum = 1) produce better colors, 
        // but slow processing significantly. 10 is the default, 
        // and produces good color mapping at reasonable speeds. 
        // Values greater than 20 do not yield significant improvements in speed.
        gifEncoder.setQuality(config.quality || 10);

        // Boolean start() 
        // This writes the GIF Header and returns false if it fails.
        gifEncoder.start();

        if (typeof config.onGifRecordingStarted === 'function') {
            config.onGifRecordingStarted();
        }

        startTime = Date.now();

        function drawVideoFrame(time) {
            if (self.clearedRecordedData === true) {
                return;
            }

            if (isPausedRecording) {
                return setTimeout(function() {
                    drawVideoFrame(time);
                }, 100);
            }

            lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

            if (typeof lastFrameTime === undefined) {
                lastFrameTime = time;
            }

            // ~10 fps
            if (time - lastFrameTime < 90) {
                return;
            }

            if (!isHTMLObject && video.paused) {
                // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
                // Tweak for Android Chrome
                video.play();
            }

            if (!isHTMLObject) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
            }

            if (config.onGifPreview) {
                config.onGifPreview(canvas.toDataURL('image/png'));
            }

            gifEncoder.addFrame(context);
            lastFrameTime = time;
        }

        lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

        if (config.initCallback) {
            config.initCallback();
        }
    };

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.stop(function(blob) {
     *     img.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        if (lastAnimationFrame) {
            cancelAnimationFrame(lastAnimationFrame);
        }

        endTime = Date.now();

        /**
         * @property {Blob} blob - The recorded blob object.
         * @memberof GifRecorder
         * @example
         * recorder.stop(function(){
         *     var blob = recorder.blob;
         * });
         */
        this.blob = new Blob([new Uint8Array(gifEncoder.stream().bin)], {
            type: 'image/gif'
        });

        callback(this.blob);

        // bug: find a way to clear old recorded blobs
        gifEncoder.stream().bin = [];
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        self.clearedRecordedData = true;
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        if (gifEncoder) {
            gifEncoder.stream().bin = [];
        }
    }

    // for debugging
    this.name = 'GifRecorder';
    this.toString = function() {
        return this.name;
    };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    if (isHTMLObject) {
        if (mediaStream instanceof CanvasRenderingContext2D) {
            context = mediaStream;
            canvas = context.canvas;
        } else if (mediaStream instanceof HTMLCanvasElement) {
            context = mediaStream.getContext('2d');
            canvas = mediaStream;
        }
    }

    var isLoadedMetaData = true;

    if (!isHTMLObject) {
        var video = document.createElement('video');
        video.muted = true;
        video.autoplay = true;

        isLoadedMetaData = false;
        video.onloadedmetadata = function() {
            isLoadedMetaData = true;
        };

        setSrcObject(mediaStream, video);

        video.play();
    }

    var lastAnimationFrame = null;
    var startTime, endTime, lastFrameTime;

    var gifEncoder;

    var self = this;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.GifRecorder = GifRecorder;
}

// Last time updated: 2018-12-22 9:13:29 AM UTC

// ________________________
// MultiStreamsMixer v1.0.7

// Open-Sourced: https://github.com/muaz-khan/MultiStreamsMixer

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

function MultiStreamsMixer(arrayOfMediaStreams) {

    // requires: chrome://flags/#enable-experimental-web-platform-features

    var videos = [];
    var isStopDrawingFrames = false;

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.style = 'opacity:0;position:absolute;z-index:-1;top: -100000000;left:-1000000000; margin-top:-1000000000;margin-left:-1000000000;';
    (document.body || document.documentElement).appendChild(canvas);

    this.disableLogs = false;
    this.frameInterval = 10;

    this.width = 360;
    this.height = 240;

    // use gain node to prevent echo
    this.useGainNode = true;

    var self = this;

    // _____________________________
    // Cross-Browser-Declarations.js

    // WebAudio API representer
    var AudioContext = window.AudioContext;

    if (typeof AudioContext === 'undefined') {
        if (typeof webkitAudioContext !== 'undefined') {
            /*global AudioContext:true */
            AudioContext = webkitAudioContext;
        }

        if (typeof mozAudioContext !== 'undefined') {
            /*global AudioContext:true */
            AudioContext = mozAudioContext;
        }
    }

    /*jshint -W079 */
    var URL = window.URL;

    if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
        /*global URL:true */
        URL = webkitURL;
    }

    if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
        if (typeof navigator.webkitGetUserMedia !== 'undefined') {
            navigator.getUserMedia = navigator.webkitGetUserMedia;
        }

        if (typeof navigator.mozGetUserMedia !== 'undefined') {
            navigator.getUserMedia = navigator.mozGetUserMedia;
        }
    }

    var MediaStream = window.MediaStream;

    if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
        MediaStream = webkitMediaStream;
    }

    /*global MediaStream:true */
    if (typeof MediaStream !== 'undefined') {
        // override "stop" method for all browsers
        if (typeof MediaStream.prototype.stop === 'undefined') {
            MediaStream.prototype.stop = function() {
                this.getTracks().forEach(function(track) {
                    track.stop();
                });
            };
        }
    }

    var Storage = {};

    if (typeof AudioContext !== 'undefined') {
        Storage.AudioContext = AudioContext;
    } else if (typeof webkitAudioContext !== 'undefined') {
        Storage.AudioContext = webkitAudioContext;
    }

    function setSrcObject(stream, element) {
        if ('srcObject' in element) {
            element.srcObject = stream;
        } else if ('mozSrcObject' in element) {
            element.mozSrcObject = stream;
        } else {
            element.srcObject = stream;
        }
    }

    this.startDrawingFrames = function() {
        drawVideosToCanvas();
    };

    function drawVideosToCanvas() {
        if (isStopDrawingFrames) {
            return;
        }

        var videosLength = videos.length;

        var fullcanvas = false;
        var remaining = [];
        videos.forEach(function(video) {
            if (!video.stream) {
                video.stream = {};
            }

            if (video.stream.fullcanvas) {
                fullcanvas = video;
            } else {
                remaining.push(video);
            }
        });

        if (fullcanvas) {
            canvas.width = fullcanvas.stream.width;
            canvas.height = fullcanvas.stream.height;
        } else if (remaining.length) {
            canvas.width = videosLength > 1 ? remaining[0].width * 2 : remaining[0].width;

            var height = 1;
            if (videosLength === 3 || videosLength === 4) {
                height = 2;
            }
            if (videosLength === 5 || videosLength === 6) {
                height = 3;
            }
            if (videosLength === 7 || videosLength === 8) {
                height = 4;
            }
            if (videosLength === 9 || videosLength === 10) {
                height = 5;
            }
            canvas.height = remaining[0].height * height;
        } else {
            canvas.width = self.width || 360;
            canvas.height = self.height || 240;
        }

        if (fullcanvas && fullcanvas instanceof HTMLVideoElement) {
            drawImage(fullcanvas);
        }

        remaining.forEach(function(video, idx) {
            drawImage(video, idx);
        });

        setTimeout(drawVideosToCanvas, self.frameInterval);
    }

    function drawImage(video, idx) {
        if (isStopDrawingFrames) {
            return;
        }

        var x = 0;
        var y = 0;
        var width = video.width;
        var height = video.height;

        if (idx === 1) {
            x = video.width;
        }

        if (idx === 2) {
            y = video.height;
        }

        if (idx === 3) {
            x = video.width;
            y = video.height;
        }

        if (idx === 4) {
            y = video.height * 2;
        }

        if (idx === 5) {
            x = video.width;
            y = video.height * 2;
        }

        if (idx === 6) {
            y = video.height * 3;
        }

        if (idx === 7) {
            x = video.width;
            y = video.height * 3;
        }

        if (typeof video.stream.left !== 'undefined') {
            x = video.stream.left;
        }

        if (typeof video.stream.top !== 'undefined') {
            y = video.stream.top;
        }

        if (typeof video.stream.width !== 'undefined') {
            width = video.stream.width;
        }

        if (typeof video.stream.height !== 'undefined') {
            height = video.stream.height;
        }

        context.drawImage(video, x, y, width, height);

        if (typeof video.stream.onRender === 'function') {
            video.stream.onRender(context, x, y, width, height, idx);
        }
    }

    function getMixedStream() {
        isStopDrawingFrames = false;
        var mixedVideoStream = getMixedVideoStream();

        var mixedAudioStream = getMixedAudioStream();
        if (mixedAudioStream) {
            mixedAudioStream.getTracks().filter(function(t) {
                return t.kind === 'audio';
            }).forEach(function(track) {
                mixedVideoStream.addTrack(track);
            });
        }

        var fullcanvas;
        arrayOfMediaStreams.forEach(function(stream) {
            if (stream.fullcanvas) {
                fullcanvas = true;
            }
        });

        return mixedVideoStream;
    }

    function getMixedVideoStream() {
        resetVideoStreams();

        var capturedStream;

        if ('captureStream' in canvas) {
            capturedStream = canvas.captureStream();
        } else if ('mozCaptureStream' in canvas) {
            capturedStream = canvas.mozCaptureStream();
        } else if (!self.disableLogs) {
            console.error('Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features');
        }

        var videoStream = new MediaStream();

        capturedStream.getTracks().filter(function(t) {
            return t.kind === 'video';
        }).forEach(function(track) {
            videoStream.addTrack(track);
        });

        canvas.stream = videoStream;

        return videoStream;
    }

    function getMixedAudioStream() {
        // via: @pehrsons
        if (!Storage.AudioContextConstructor) {
            Storage.AudioContextConstructor = new Storage.AudioContext();
        }

        self.audioContext = Storage.AudioContextConstructor;

        self.audioSources = [];

        if (self.useGainNode === true) {
            self.gainNode = self.audioContext.createGain();
            self.gainNode.connect(self.audioContext.destination);
            self.gainNode.gain.value = 0; // don't hear self
        }

        var audioTracksLength = 0;
        arrayOfMediaStreams.forEach(function(stream) {
            if (!stream.getTracks().filter(function(t) {
                    return t.kind === 'audio';
                }).length) {
                return;
            }

            audioTracksLength++;

            var audioSource = self.audioContext.createMediaStreamSource(stream);

            if (self.useGainNode === true) {
                audioSource.connect(self.gainNode);
            }

            self.audioSources.push(audioSource);
        });

        if (!audioTracksLength) {
            return;
        }

        self.audioDestination = self.audioContext.createMediaStreamDestination();
        self.audioSources.forEach(function(audioSource) {
            audioSource.connect(self.audioDestination);
        });
        return self.audioDestination.stream;
    }

    function getVideo(stream) {
        var video = document.createElement('video');

        setSrcObject(stream, video);

        video.muted = true;
        video.volume = 0;

        video.width = stream.width || self.width || 360;
        video.height = stream.height || self.height || 240;

        video.play();

        return video;
    }

    this.appendStreams = function(streams) {
        if (!streams) {
            throw 'First parameter is required.';
        }

        if (!(streams instanceof Array)) {
            streams = [streams];
        }

        arrayOfMediaStreams.concat(streams);

        streams.forEach(function(stream) {
            if (stream.getTracks().filter(function(t) {
                    return t.kind === 'video';
                }).length) {
                var video = getVideo(stream);
                video.stream = stream;
                videos.push(video);
            }

            if (stream.getTracks().filter(function(t) {
                    return t.kind === 'audio';
                }).length && self.audioContext) {
                var audioSource = self.audioContext.createMediaStreamSource(stream);
                audioSource.connect(self.audioDestination);
                self.audioSources.push(audioSource);
            }
        });
    };

    this.releaseStreams = function() {
        videos = [];
        isStopDrawingFrames = true;

        if (self.gainNode) {
            self.gainNode.disconnect();
            self.gainNode = null;
        }

        if (self.audioSources.length) {
            self.audioSources.forEach(function(source) {
                source.disconnect();
            });
            self.audioSources = [];
        }

        if (self.audioDestination) {
            self.audioDestination.disconnect();
            self.audioDestination = null;
        }

        if (self.audioContext) {
            self.audioContext.close();
        }

        self.audioContext = null;

        context.clearRect(0, 0, canvas.width, canvas.height);

        if (canvas.stream) {
            canvas.stream.stop();
            canvas.stream = null;
        }
    };

    this.resetVideoStreams = function(streams) {
        if (streams && !(streams instanceof Array)) {
            streams = [streams];
        }

        resetVideoStreams(streams);
    };

    function resetVideoStreams(streams) {
        videos = [];
        streams = streams || arrayOfMediaStreams;

        // via: @adrian-ber
        streams.forEach(function(stream) {
            if (!stream.getTracks().filter(function(t) {
                    return t.kind === 'video';
                }).length) {
                return;
            }

            var video = getVideo(stream);
            video.stream = stream;
            videos.push(video);
        });
    }

    // for debugging
    this.name = 'MultiStreamsMixer';
    this.toString = function() {
        return this.name;
    };

    this.getMixedStream = getMixedStream;

}

// ______________________
// MultiStreamRecorder.js

/*
 * Video conference recording, using captureStream API along with WebAudio and Canvas2D API.
 */

/**
 * MultiStreamRecorder can record multiple videos in single container.
 * @summary Multi-videos recorder.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef MultiStreamRecorder
 * @class
 * @example
 * var options = {
 *     mimeType: 'video/webm'
 * }
 * var recorder = new MultiStreamRecorder(ArrayOfMediaStreams, options);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStreams} mediaStreams - Array of MediaStreams.
 * @param {object} config - {disableLogs:true, frameInterval: 1, mimeType: "video/webm"}
 */

function MultiStreamRecorder(arrayOfMediaStreams, options) {
    arrayOfMediaStreams = arrayOfMediaStreams || [];
    var self = this;

    var mixer;
    var mediaRecorder;

    options = options || {
        mimeType: 'video/webm',
        video: {
            width: 360,
            height: 240
        }
    };

    if (!options.frameInterval) {
        options.frameInterval = 10;
    }

    if (!options.video) {
        options.video = {};
    }

    if (!options.video.width) {
        options.video.width = 360;
    }

    if (!options.video.height) {
        options.video.height = 240;
    }

    /**
     * This method records all MediaStreams.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        // github/muaz-khan/MultiStreamsMixer
        mixer = new MultiStreamsMixer(arrayOfMediaStreams);

        if (getAllVideoTracks().length) {
            mixer.frameInterval = options.frameInterval || 10;
            mixer.width = options.video.width || 360;
            mixer.height = options.video.height || 240;
            mixer.startDrawingFrames();
        }

        if (options.previewStream && typeof options.previewStream === 'function') {
            options.previewStream(mixer.getMixedStream());
        }

        // record using MediaRecorder API
        mediaRecorder = new MediaStreamRecorder(mixer.getMixedStream(), options);
        mediaRecorder.record();
    };

    function getAllVideoTracks() {
        var tracks = [];
        arrayOfMediaStreams.forEach(function(stream) {
            getTracks(stream, 'video').forEach(function(track) {
                tracks.push(track);
            });
        });
        return tracks;
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        if (!mediaRecorder) {
            return;
        }

        mediaRecorder.stop(function(blob) {
            self.blob = blob;

            callback(blob);

            self.clearRecordedData();
        });
    };

    /**
     * This method pauses the recording process.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        if (mediaRecorder) {
            mediaRecorder.pause();
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (mediaRecorder) {
            mediaRecorder.resume();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (mediaRecorder) {
            mediaRecorder.clearRecordedData();
            mediaRecorder = null;
        }

        if (mixer) {
            mixer.releaseStreams();
            mixer = null;
        }
    };

    /**
     * Add extra media-streams to existing recordings.
     * @method
     * @memberof MultiStreamRecorder
     * @param {MediaStreams} mediaStreams - Array of MediaStreams
     * @example
     * recorder.addStreams([newAudioStream, newVideoStream]);
     */
    this.addStreams = function(streams) {
        if (!streams) {
            throw 'First parameter is required.';
        }

        if (!(streams instanceof Array)) {
            streams = [streams];
        }

        arrayOfMediaStreams.concat(streams);

        if (!mediaRecorder || !mixer) {
            return;
        }

        mixer.appendStreams(streams);
    };

    /**
     * Reset videos during live recording. Replace old videos e.g. replace cameras with full-screen.
     * @method
     * @memberof MultiStreamRecorder
     * @param {MediaStreams} mediaStreams - Array of MediaStreams
     * @example
     * recorder.resetVideoStreams([newVideo1, newVideo2]);
     */
    this.resetVideoStreams = function(streams) {
        if (!mixer) {
            return;
        }

        if (streams && !(streams instanceof Array)) {
            streams = [streams];
        }

        mixer.resetVideoStreams(streams);
    };

    // for debugging
    this.name = 'MultiStreamRecorder';
    this.toString = function() {
        return this.name;
    };
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MultiStreamRecorder = MultiStreamRecorder;
}

// _____________________
// RecordRTC.promises.js

/**
 * RecordRTCPromisesHandler adds promises support in {@link RecordRTC}. Try a {@link https://github.com/muaz-khan/RecordRTC/blob/master/simple-demos/RecordRTCPromisesHandler.html|demo here}
 * @summary Promises for {@link RecordRTC}
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCPromisesHandler
 * @class
 * @example
 * var recorder = new RecordRTCPromisesHandler(mediaStream, options);
 * recorder.startRecording()
 *         .then(successCB)
 *         .catch(errorCB);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 * @throws Will throw an error if "new" keyword is not used to initiate "RecordRTCPromisesHandler". Also throws error if first argument "MediaStream" is missing.
 * @requires {@link RecordRTC}
 */

function RecordRTCPromisesHandler(mediaStream, options) {
    if (!this) {
        throw 'Use "new RecordRTCPromisesHandler()"';
    }

    if (typeof mediaStream === 'undefined') {
        throw 'First argument "MediaStream" is required.';
    }

    var self = this;

    /**
     * @property {Blob} blob - Access/reach the native {@link RecordRTC} object.
     * @memberof RecordRTCPromisesHandler
     * @example
     * var internal = recorder.recordRTC.getInternalRecorder();
     * alert(internal instanceof MediaStreamRecorder);
     */
    self.recordRTC = new RecordRTC(mediaStream, options);

    /**
     * This method records MediaStream.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.startRecording()
     *         .then(successCB)
     *         .catch(errorCB);
     */
    this.startRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.startRecording();
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method stops the recording.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     var blob = recorder.getBlob();
     * }).catch(errorCB);
     */
    this.stopRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.stopRecording(function(url) {
                    self.blob = self.recordRTC.getBlob();

                    if (!self.blob || !self.blob.size) {
                        reject('Empty blob.', self.blob);
                        return;
                    }

                    resolve(url);
                });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method returns data-url for the recorded blob.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     recorder.getDataURL().then(function(dataURL) {
     *         window.open(dataURL);
     *     }).catch(errorCB);;
     * }).catch(errorCB);
     */
    this.getDataURL = function(callback) {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.getDataURL(function(dataURL) {
                    resolve(dataURL);
                });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method returns the recorded blob.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     recorder.getBlob().then(function(blob) {})
     * }).catch(errorCB);
     */
    this.getBlob = function() {
        return new Promise(function(resolve, reject) {
            try {
                resolve(self.recordRTC.getBlob());
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * @property {Blob} blob - Recorded data as "Blob" object.
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     var blob = recorder.getBlob();
     * }).catch(errorCB);
     */
    this.blob = null;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.RecordRTCPromisesHandler = RecordRTCPromisesHandler;
}

// ______________________
// WebAssemblyRecorder.js

/**
 * WebAssemblyRecorder lets you create webm videos in JavaScript via WebAssembly. The library consumes raw RGBA32 buffers (4 bytes per pixel) and turns them into a webm video with the given framerate and quality. This makes it compatible out-of-the-box with ImageData from a CANVAS. With realtime mode you can also use webm-wasm for streaming webm videos.
 * @summary Video recording feature in Chrome, Firefox and maybe Edge.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef WebAssemblyRecorder
 * @class
 * @example
 * var recorder = new WebAssemblyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {webAssemblyPath:'webm-wasm.wasm',workerPath: 'webm-worker.js', frameRate: 30, width: 1920, height: 1080, bitrate: 1024}
 */
function WebAssemblyRecorder(stream, config) {
    // based on: github.com/GoogleChromeLabs/webm-wasm

    if (typeof ReadableStream === 'undefined' || typeof WritableStream === 'undefined') {
        // because it fixes readable/writable streams issues
        console.error('Following polyfill is strongly recommended: https://unpkg.com/@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js');
    }

    config = config || {};

    config.width = config.width || 640;
    config.height = config.height || 480;
    config.frameRate = config.frameRate || 30;
    config.bitrate = config.bitrate || 1200;

    function createBufferURL(buffer, type) {
        return URL.createObjectURL(new Blob([buffer], {
            type: type || ''
        }));
    }

    function cameraStream() {
        return new ReadableStream({
            start: function(controller) {
                var cvs = document.createElement('canvas');
                var video = document.createElement('video');
                video.srcObject = stream;
                video.onplaying = function() {
                    cvs.width = config.width;
                    cvs.height = config.height;
                    var ctx = cvs.getContext('2d');
                    var frameTimeout = 1000 / config.frameRate;
                    setTimeout(function f() {
                        ctx.drawImage(video, 0, 0);
                        controller.enqueue(
                            ctx.getImageData(0, 0, config.width, config.height)
                        );
                        setTimeout(f, frameTimeout);
                    }, frameTimeout);
                };
                video.play();
            }
        });
    }

    var worker;

    function startRecording(stream, buffer) {
        if (!config.workerPath && !buffer) {
            // is it safe to use @latest ?
            fetch(
                'https://unpkg.com/webm-wasm@latest/dist/webm-worker.js'
            ).then(function(r) {
                r.arrayBuffer().then(function(buffer) {
                    startRecording(stream, buffer);
                });
            });
            return;
        }

        if (!config.workerPath && buffer instanceof ArrayBuffer) {
            var blob = new Blob([buffer], {
                type: 'text/javascript'
            });
            config.workerPath = URL.createObjectURL(blob);
        }

        if (!config.workerPath) {
            console.error('workerPath parameter is missing.');
        }

        worker = new Worker(config.workerPath);

        worker.postMessage(config.webAssemblyPath || 'https://unpkg.com/webm-wasm@latest/dist/webm-wasm.wasm');
        worker.addEventListener('message', function(event) {
            if (event.data === 'READY') {
                worker.postMessage({
                    width: config.width,
                    height: config.height,
                    bitrate: config.bitrate || 1200,
                    timebaseDen: config.frameRate || 30,
                    realtime: true
                });

                cameraStream().pipeTo(new WritableStream({
                    write: function(image) {
                        if (!worker) {
                            return;
                        }

                        worker.postMessage(image.data.buffer, [image.data.buffer]);
                    }
                }));
            } else if (!!event.data) {
                if (!isPaused) {
                    arrayOfBuffers.push(event.data);
                }
            }
        });
    }

    /**
     * This method records video.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        arrayOfBuffers = [];
        isPaused = false;
        this.blob = null;
        startRecording(stream);

        if (typeof config.initCallback === 'function') {
            config.initCallback();
        }
    };

    var isPaused;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPaused = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPaused = false;
    };

    function terminate() {
        if (!worker) {
            return;
        }

        worker.postMessage(null);
        worker.terminate();
        worker = null;
    }

    var arrayOfBuffers = [];

    /**
     * This method stops recording video.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        terminate();

        this.blob = new Blob(arrayOfBuffers, {
            type: 'video/webm'
        });

        callback(this.blob);
    };

    // for debugging
    this.name = 'WebAssemblyRecorder';
    this.toString = function() {
        return this.name;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        arrayOfBuffers = [];
        isPaused = false;
        this.blob = null;

        // todo: if recording-ON then STOP it first
    };

    /**
     * @property {Blob} blob - The recorded blob object.
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.stop(function(){
     *     var blob = recorder.blob;
     * });
     */
    this.blob = null;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.WebAssemblyRecorder = WebAssemblyRecorder;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20), __webpack_require__(21)))

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icheck_js__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "icheck", function() { return __WEBPACK_IMPORTED_MODULE_0__icheck_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select2_js__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select2", function() { return __WEBPACK_IMPORTED_MODULE_1__select2_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputmask_js__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "inputmask", function() { return __WEBPACK_IMPORTED_MODULE_2__inputmask_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jquery_bar_rating_js__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "jquerybarrating", function() { return __WEBPACK_IMPORTED_MODULE_3__jquery_bar_rating_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jquery_ui_datepicker_js__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "jqueryuidatepicker", function() { return __WEBPACK_IMPORTED_MODULE_4__jquery_ui_datepicker_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nouislider_js__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "nouislider", function() { return __WEBPACK_IMPORTED_MODULE_5__nouislider_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select2_tagbox_js__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select2tagbox", function() { return __WEBPACK_IMPORTED_MODULE_6__select2_tagbox_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signature_pad_js__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "signaturepad", function() { return __WEBPACK_IMPORTED_MODULE_7__signature_pad_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sortablejs_js__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sortablejs", function() { return __WEBPACK_IMPORTED_MODULE_8__sortablejs_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ck_editor_js__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ckeditor", function() { return __WEBPACK_IMPORTED_MODULE_9__ck_editor_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__easy_autocomplete_js__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "autocomplete", function() { return __WEBPACK_IMPORTED_MODULE_10__easy_autocomplete_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pretty_checkbox_js__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "prettycheckbox", function() { return __WEBPACK_IMPORTED_MODULE_11__pretty_checkbox_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bootstrap_slider_js__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapslider", function() { return __WEBPACK_IMPORTED_MODULE_12__bootstrap_slider_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__microphone_js__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "microphone", function() { return __WEBPACK_IMPORTED_MODULE_13__microphone_js__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__emotionsratings_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__emotionsratings_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__emotionsratings_js__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "emotionsratings", function() { return __WEBPACK_IMPORTED_MODULE_14__emotionsratings_js___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bootstrapdatepicker_js__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapdatepicker", function() { return __WEBPACK_IMPORTED_MODULE_15__bootstrapdatepicker_js__["a"]; });


















/***/ }),
/* 23 */
/***/ (function(module, exports) {

function init(Survey, $) {
  $ = $ || window.$;

  var widget = {
    name: "emotionsratings",
    title: "Emotions Ratings",
    iconName: "icon-emotionsratings",
    widgetIsLoaded: function() {
      return typeof $ == "function" && !!$.fn.emotionsRating;
    },
    defaultJSON: {
      choices: [1, 2, 3, 4, 5]
    },
    isFit: function(question) {
      return question.getType() === "emotionsratings";
    },
    isDefaultRender: false,
    htmlTemplate: "<div></div>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass(
        "emotionsratings",
        [
          {
            name: "hasOther",
            visible: false
          },
          {
            name: "otherText",
            visible: false
          },
          {
            name: "optionsCaption",
            visible: false
          },
          {
            name: "otherErrorText",
            visible: false
          },
          {
            name: "storeOthersAsComment",
            visible: false
          },
          {
            name: "renderAs",
            visible: false
          }
        ],
        null,
        "dropdown"
      );
    },
    afterRender: function(question, el) {
      var self = this;
      var emotionsArray = ["angry", "disappointed", "meh", "happy", "inLove"];
      var options = {
        emotionSize: 30,
        bgEmotion: "happy",
        emotions: emotionsArray,
        color: "#FF0066",
        onUpdate: function(value) {
          question.value = value;
        }
      };
      initWidget();

      question.valueChangedCallback = initWidget;
      question.readOnlyChangedCallback = initWidget;

      function initWidget() {
        el.innerHTML = "<div></div>";
        $(el).off();
        options.initialRating = question.value || 0;
        options.disabled = question.isReadOnly;
        $(el)
          .find("div")
          .emotionsRating(options);
      }
    },
    willUnmount: function(question, el) {
      el.innerHTML = null;
      $(el).off();
      question.readOnlyChangedCallback = null;
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey, window.$);
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function init(Survey) {
    // $ = $ || window.$;
     var widget = {
         name: "bootstrapdatepicker",
         title: "Date picker",
         iconName: "icon-datepicker",
         widgetIsLoaded: function () {
             return !!$.fn.datepicker;
         },
         isFit: function (question) {
             return question.getType() === "bootstrapdatepicker";
         },
         htmlTemplate:
         "<input class='form-control widget-datepicker' type='text' style='width: 100%;'>",
         activatedByChanged: function (activatedBy) {
             Survey.JsonObject.metaData.addClass(
                 "bootstrapdatepicker",
                 [
                     { name: "inputType", visible: false },
                     { name: "inputFormat", visible: false },
                     { name: "inputMask", visible: false }
                 ],
                 null,
                 "text"
             );
             Survey.JsonObject.metaData.addProperty("bootstrapdatepicker", {
                 name: "dateFormat"
             });
         },
         afterRender: function (question, el) {
             var $el = $(el).is(".widget-datepicker")
                 ? $(el)
                 : $(el).find(".widget-datepicker");
 
             var pickerWidget = $(".widget-datepicker").datepicker({
               enableOnReadonly: false
             })
                 .on("changeDate", function (e) {
                     question.value = moment(e.date).format("DD/MM/YYYY");
                     // `e` here contains the extra attributes
               });
 
             question.valueChangedCallback = function() {
               $(".widget-datepicker").datepicker('update', moment(question.value, "DD/MM/YYYY").toDate());
             }
             question.valueChangedCallback();
             question.readOnlyChangedCallback = function() {
               if(question.isReadOnly) {
                 $el.prop('readonly', true);
               }
               else {
                 $el.removeAttr('readonly');
               }
             }
             question.readOnlyChangedCallback();
             
         },
         willUnmount: function (question, el) {
             var $el = $(el).is(".widget-datepicker")
                 ? $(el)
                 : $(el).find(".widget-datepicker");
             $el.datepicker("destroy");
             question.readOnlyChangedCallback = undefined;
             question.valueChangedCallback = undefined;
         }
     };
 
     Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
 }
 
 if (typeof Survey !== "undefined") {
    init(Survey, window.$);
 }
 
 /* harmony default export */ __webpack_exports__["a"] = (init);

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ZDc4M2IxNDM5NDMyMTI4YjJhZCIsIndlYnBhY2s6Ly8vLi9zcmMvaWNoZWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIklucHV0bWFza1wiLFwiY29tbW9uanMyXCI6XCJpbnB1dG1hc2tcIixcImNvbW1vbmpzXCI6XCJpbnB1dG1hc2tcIixcImFtZFwiOlwiaW5wdXRtYXNrXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcXVlcnktYmFyLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5LXVpLWRhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vdWlzbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm5vVWlTbGlkZXJcIixcImNvbW1vbmpzMlwiOlwibm91aXNsaWRlclwiLFwiY29tbW9uanNcIjpcIm5vdWlzbGlkZXJcIixcImFtZFwiOlwibm91aXNsaWRlclwifSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi10YWdib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpZ25hdHVyZV9wYWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlNpZ25hdHVyZVBhZFwiLFwiY29tbW9uanMyXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJjb21tb25qc1wiOlwic2lnbmF0dXJlX3BhZFwiLFwiYW1kXCI6XCJzaWduYXR1cmVfcGFkXCJ9Iiwid2VicGFjazovLy8uL3NyYy9zb3J0YWJsZWpzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJTb3J0YWJsZVwiLFwiY29tbW9uanMyXCI6XCJzb3J0YWJsZWpzXCIsXCJjb21tb25qc1wiOlwic29ydGFibGVqc1wiLFwiYW1kXCI6XCJzb3J0YWJsZWpzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9jay1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vhc3ktYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcmV0dHktY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJib290c3RyYXAtc2xpZGVyXCIsXCJjb21tb25qc1wiOlwiYm9vdHN0cmFwLXNsaWRlclwiLFwiYW1kXCI6XCJib290c3RyYXAtc2xpZGVyXCJ9Iiwid2VicGFjazovLy8uL3NyYy9taWNyb3Bob25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWNvcmRydGMvUmVjb3JkUlRDLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VydmV5anMtd2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1vdGlvbnNyYXRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9ib290c3RyYXBkYXRlcGlja2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7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QUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUM7Ozs7Ozs7O0FDdkVwQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDOzs7Ozs7OztBQ3JGcEI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwyQ0FBMkM7QUFDN0QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwyQ0FBMkM7QUFDN0QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywyQ0FBMkM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHNEQUFzRDtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsbUVB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhFQUE4RTs7QUFFOUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsa0NBQWtDO0FBQ3pGO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLFlBQVk7QUFDWixxQkFBcUIsS0FBSztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0Esc0JBQXNCLEtBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsaUNBQWlDO0FBQ2xFLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLGlDQUFpQztBQUNsRSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVksaUNBQWlDO0FBQzdDLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RCx3Q0FBd0M7QUFDeEMsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLElBQUksSUFBNkI7QUFDakM7QUFDQTs7QUFFQSxJQUFJLElBQTBDO0FBQzlDLElBQUksaUNBQW9CLEVBQUUsbUNBQUU7QUFDNUI7QUFDQSxLQUFLO0FBQUEsb0dBQUM7QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksNkJBQTZCLGlDQUFpQyxnQkFBZ0I7QUFDbEYseURBQXlELGdCQUFnQjtBQUN6RSxhQUFhO0FBQ2IsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFdBQVcsWUFBWTtBQUN2QixXQUFXLE9BQU8sV0FBVztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNCQUFzQixpQ0FBaUMsZ0JBQWdCO0FBQzNFO0FBQ0EsYUFBYTtBQUNiLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFdBQVcsWUFBWTtBQUN2QixXQUFXLE9BQU8sV0FBVztBQUM3Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLGdCQUFnQjtBQUM5QztBQUNBLGFBQWE7QUFDYixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFdBQVcsWUFBWTtBQUN2QixjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQSxtREFBbUQsaUJBQWlCO0FBQ3BFLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU8sY0FBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsb0JBQW9CO0FBQzlGLHFFQUFxRTtBQUNyRSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsa0NBQWtDO0FBQ3JGO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxpQkFBaUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTyxTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTyxZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFDcEMsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLFVBQVUsa0JBQWtCO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNELGFBQWE7QUFDYixZQUFZO0FBQ1o7QUFDQTtBQUNBLGNBQWMsbUJBQW1CO0FBQ2pDLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELHFGQUFxRixpQkFBaUIsZ0JBQWdCO0FBQzFLLDJCQUEyQixxRkFBcUY7QUFDaEgsYUFBYTtBQUNiLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLFNBQVM7QUFDVCxXQUFXLFlBQVk7QUFDdkIsV0FBVyxPQUFPLFdBQVc7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7QUFF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QUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7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QUNBO0FBQ0E7QUFDQTs7QUFFQSw0RkFBNEY7QUFDNUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsS0FBSztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQy90TEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7QUN2THRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdEO0FBQ0U7QUFDSTtBQUNjO0FBQ007QUFDbEI7QUFDTztBQUNGO0FBQ0w7QUFDSDtBQUNZO0FBQ0E7QUFDRTtBQUNYO0FBQ1U7QUFDUTs7Ozs7OztBQ2YxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9DQUFvQztBQUMxRCxzQkFBc0Isc0NBQXNDO0FBQzVELHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQWdCLDZEQUFJLEUiLCJmaWxlIjoic3VydmV5anMtd2lkZ2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImlucHV0bWFza1wiKSwgcmVxdWlyZShcIm5vdWlzbGlkZXJcIiksIHJlcXVpcmUoXCJzaWduYXR1cmVfcGFkXCIpLCByZXF1aXJlKFwic29ydGFibGVqc1wiKSwgcmVxdWlyZShcImJvb3RzdHJhcC1zbGlkZXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJzdXJ2ZXlqcy13aWRnZXRzXCIsIFtcImlucHV0bWFza1wiLCBcIm5vdWlzbGlkZXJcIiwgXCJzaWduYXR1cmVfcGFkXCIsIFwic29ydGFibGVqc1wiLCBcImJvb3RzdHJhcC1zbGlkZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VydmV5anMtd2lkZ2V0c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImlucHV0bWFza1wiKSwgcmVxdWlyZShcIm5vdWlzbGlkZXJcIiksIHJlcXVpcmUoXCJzaWduYXR1cmVfcGFkXCIpLCByZXF1aXJlKFwic29ydGFibGVqc1wiKSwgcmVxdWlyZShcImJvb3RzdHJhcC1zbGlkZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN1cnZleWpzLXdpZGdldHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJJbnB1dG1hc2tcIl0sIHJvb3RbXCJub1VpU2xpZGVyXCJdLCByb290W1wiU2lnbmF0dXJlUGFkXCJdLCByb290W1wiU29ydGFibGVcIl0sIHJvb3RbXCJTbGlkZXJcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGQ3ODNiMTQzOTQzMjEyOGIyYWQiLCJmdW5jdGlvbiBpbml0KFN1cnZleSwgJCkge1xuICAkID0gJCB8fCB3aW5kb3cuJDtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBjbGFzc05hbWU6IFwiaXJhZGlvX3NxdWFyZS1ibHVlXCIsXG4gICAgY2hlY2tib3hDbGFzczogXCJpcmFkaW9fc3F1YXJlLWJsdWVcIixcbiAgICByYWRpb0NsYXNzOiBcImlyYWRpb19zcXVhcmUtYmx1ZVwiLFxuICAgIG5hbWU6IFwiaWNoZWNrXCIsXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uaUNoZWNrO1xuICAgIH0sXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XG4gICAgICB2YXIgdCA9IHF1ZXN0aW9uLmdldFR5cGUoKTtcbiAgICAgIHJldHVybiB0ID09PSBcInJhZGlvZ3JvdXBcIiB8fCB0ID09PSBcImNoZWNrYm94XCIgfHwgdCA9PT0gXCJtYXRyaXhcIjtcbiAgICB9LFxuICAgIGlzRGVmYXVsdFJlbmRlcjogdHJ1ZSxcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICB2YXIgcm9vdFdpZGdldCA9IHRoaXM7XG4gICAgICB2YXIgJGVsID0gJChlbCk7XG4gICAgICAkZWwuZmluZChcImlucHV0XCIpLmRhdGEoe1xuICAgICAgICBpQ2hlY2s6IHVuZGVmaW5lZFxuICAgICAgfSk7XG5cbiAgICAgICRlbC5maW5kKFwiaW5wdXRcIikuaUNoZWNrKHtcbiAgICAgICAgY2hlY2tib3hDbGFzczpcbiAgICAgICAgICBxdWVzdGlvbi5jaGVja2JveENsYXNzIHx8XG4gICAgICAgICAgcm9vdFdpZGdldC5jaGVja2JveENsYXNzIHx8XG4gICAgICAgICAgcm9vdFdpZGdldC5jbGFzc05hbWUsXG4gICAgICAgIHJhZGlvQ2xhc3M6XG4gICAgICAgICAgcXVlc3Rpb24ucmFkaW9DbGFzcyB8fCByb290V2lkZ2V0LnJhZGlvQ2xhc3MgfHwgcm9vdFdpZGdldC5jbGFzc05hbWVcbiAgICAgIH0pO1xuICAgICAgdmFyIHNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpICE9PSBcIm1hdHJpeFwiKSB7XG4gICAgICAgICAgdmFyIHZhbHVlcyA9IHF1ZXN0aW9uLnZhbHVlO1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICRlbC5maW5kKFwiaW5wdXRbdmFsdWU9XCIgKyB2YWx1ZSArIFwiXVwiKS5pQ2hlY2soXCJjaGVja1wiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVzdGlvbi5nZW5lcmF0ZWRWaXNpYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uKHJvdywgaW5kZXgsIHJvd3MpIHtcbiAgICAgICAgICAgIGlmIChyb3cudmFsdWUpIHtcbiAgICAgICAgICAgICAgJChlbClcbiAgICAgICAgICAgICAgICAuZmluZChcbiAgICAgICAgICAgICAgICAgIFwiaW5wdXRbbmFtZT0nXCIgK1xuICAgICAgICAgICAgICAgICAgICByb3cuZnVsbE5hbWUgK1xuICAgICAgICAgICAgICAgICAgICBcIiddW3ZhbHVlPSdcIiArXG4gICAgICAgICAgICAgICAgICAgIHJvdy52YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgIFwiJ11cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuaUNoZWNrKFwiY2hlY2tcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAkZWwuZmluZChcImlucHV0XCIpLm9uKFwiaWZDaGVja2VkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwibWF0cml4XCIpIHtcbiAgICAgICAgICBxdWVzdGlvbi5nZW5lcmF0ZWRWaXNpYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uKHJvdywgaW5kZXgsIHJvd3MpIHtcbiAgICAgICAgICAgIGlmIChyb3cuZnVsbE5hbWUgPT09IGV2ZW50LnRhcmdldC5uYW1lKSB7XG4gICAgICAgICAgICAgIHJvdy52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHF1ZXN0aW9uLnZhbHVlIHx8IFtdO1xuICAgICAgICAgIHZhciBpbmRleCA9IG9sZFZhbHVlLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IG9sZFZhbHVlLmNvbmNhdChbZXZlbnQudGFyZ2V0LnZhbHVlXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICRlbC5maW5kKFwiaW5wdXRcIikub24oXCJpZlVuY2hlY2tlZFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBxdWVzdGlvbi52YWx1ZSB8fCBbXTtcbiAgICAgICAgICB2YXIgaW5kZXggPSBvbGRWYWx1ZS5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHNlbGVjdDtcbiAgICAgIHNlbGVjdCgpO1xuICAgIH0sXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyICRlbCA9ICQoZWwpO1xuICAgICAgJGVsLmZpbmQoXCJpbnB1dFwiKS5pQ2hlY2soXCJkZXN0cm95XCIpO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInJhZGlvZ3JvdXBcIiwgXCJyYWRpb0NsYXNzXCIpO1xuICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImNoZWNrYm94XCIsIFwiY2hlY2tib3hDbGFzc1wiKTtcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJ0eXBlXCIpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSwgd2luZG93LiQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaWNoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxMiIsImZ1bmN0aW9uIGluaXQoU3VydmV5LCAkKSB7XG4gICQgPSAkIHx8IHdpbmRvdy4kO1xuICB2YXIgd2lkZ2V0ID0ge1xuICAgIGFjdGl2YXRlZEJ5OiBcInByb3BlcnR5XCIsXG4gICAgbmFtZTogXCJzZWxlY3QyXCIsXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxzZWxlY3Qgc3R5bGU9J3dpZHRoOiAxMDAlOyc+PC9zZWxlY3Q+XCIsXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLnNlbGVjdDI7XG4gICAgfSxcbiAgICBpc0ZpdDogZnVuY3Rpb24gKHF1ZXN0aW9uKSB7XG4gICAgICBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwicHJvcGVydHlcIilcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBxdWVzdGlvbltcInJlbmRlckFzXCJdID09PSBcInNlbGVjdDJcIiAmJlxuICAgICAgICAgIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJkcm9wZG93blwiXG4gICAgICAgICk7XG4gICAgICBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwidHlwZVwiKVxuICAgICAgICByZXR1cm4gdHlwZW9mIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJkcm9wZG93blwiO1xuICAgICAgaWYgKHdpZGdldC5hY3RpdmF0ZWRCeSA9PSBcImN1c3RvbXR5cGVcIilcbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJzZWxlY3QyXCI7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uIChhY3RpdmF0ZWRCeSkge1xuICAgICAgaWYgKCF0aGlzLndpZGdldElzTG9hZGVkKCkpIHJldHVybjtcbiAgICAgIHdpZGdldC5hY3RpdmF0ZWRCeSA9IGFjdGl2YXRlZEJ5O1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEucmVtb3ZlUHJvcGVydHkoXCJkcm9wZG93blwiLCBcInJlbmRlckFzXCIpO1xuICAgICAgaWYgKGFjdGl2YXRlZEJ5ID09IFwicHJvcGVydHlcIikge1xuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImRyb3Bkb3duXCIsIHtcbiAgICAgICAgICBuYW1lOiBcInJlbmRlckFzXCIsXG4gICAgICAgICAgZGVmYXVsdDogXCJzdGFuZGFyZFwiLFxuICAgICAgICAgIGNob2ljZXM6IFtcInN0YW5kYXJkXCIsIFwic2VsZWN0MlwiXVxuICAgICAgICB9KTtcbiAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJkcm9wZG93blwiLCB7XG4gICAgICAgICAgbmFtZTogXCJzZWxlY3QyQ29uZmlnXCIsXG4gICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChhY3RpdmF0ZWRCeSA9PSBcImN1c3RvbXR5cGVcIikge1xuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInNlbGVjdDJcIiwgW10sIG51bGwsIFwiZHJvcGRvd25cIik7XG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwic2VsZWN0MlwiLCB7XG4gICAgICAgICAgbmFtZTogXCJzZWxlY3QyQ29uZmlnXCIsXG4gICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XG4gICAgICB2YXIgc2V0dGluZ3MgPSBxdWVzdGlvbi5zZWxlY3QyQ29uZmlnO1xuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xuICAgICAgdmFyIG90aGVyc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgb3RoZXJzRWwudHlwZSA9IFwidGV4dFwiO1xuICAgICAgb3RoZXJzRWwuc3R5bGUubWFyZ2luVG9wID0gXCIzcHhcIjtcbiAgICAgIG90aGVyc0VsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIG90aGVyc0VsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAkZWxcbiAgICAgICAgLnBhcmVudCgpXG4gICAgICAgIC5nZXQoMClcbiAgICAgICAgLmFwcGVuZENoaWxkKG90aGVyc0VsKTtcblxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHFUZXh0ID0gKHR5cGVvZiBxdWVzdGlvbi52YWx1ZSA9PT0gXCJvYmplY3RcIilcblxuICAgICAgICBpZiAoJGVsLmZpbmQoXCJvcHRpb25bdmFsdWU9J1wiICsgcXVlc3Rpb24udmFsdWUgKyBcIiddXCIpLmxlbmd0aCkge1xuICAgICAgICAgICRlbC52YWwocXVlc3Rpb24udmFsdWUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG5ld09wdGlvbiA9IG5ldyBPcHRpb24oXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSwgLy9UT0RPIGlmIHF1ZXN0aW9uIHZhbHVlIGlzIG9iamVjdCB0aGVuIG5lZWQgdG8gaW1wcm92ZVxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUsXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgICAgJGVsLmFwcGVuZChuZXdPcHRpb24pLnRyaWdnZXIoXCJjaGFuZ2VcIik7XG4gICAgICAgIH1cblxuICAgICAgICBvdGhlcnNFbC5zdHlsZS5kaXNwbGF5ID0gIXF1ZXN0aW9uLmlzT3RoZXJTZWxlY3RlZCA/IFwibm9uZVwiIDogXCJcIjtcbiAgICAgIH07XG4gICAgICB2YXIgdXBkYXRlQ29tbWVudEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG90aGVyc0VsLnZhbHVlID0gcXVlc3Rpb24uY29tbWVudCA/IHF1ZXN0aW9uLmNvbW1lbnQgOiBcIlwiO1xuICAgICAgfTtcbiAgICAgIHZhciBvdGhlcnNFbENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHF1ZXN0aW9uLmNvbW1lbnQgPSBvdGhlcnNFbC52YWx1ZTtcbiAgICAgIH07XG4gICAgICB2YXIgdXBkYXRlQ2hvaWNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGVsLnNlbGVjdDIoKS5lbXB0eSgpO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgICAgIGlmIChzZXR0aW5ncy5hamF4KSB7XG4gICAgICAgICAgICAkZWwuc2VsZWN0MihzZXR0aW5ncyk7XG4gICAgICAgICAgICBxdWVzdGlvbi5jbGVhckluY29ycmVjdFZhbHVlc0NhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXR0aW5ncy5kYXRhID0gcXVlc3Rpb24udmlzaWJsZUNob2ljZXMubWFwKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogY2hvaWNlLnZhbHVlLFxuICAgICAgICAgICAgICAgIHRleHQ6IGNob2ljZS50ZXh0XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRlbC5zZWxlY3QyKHNldHRpbmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGVsLnNlbGVjdDIoe1xuICAgICAgICAgICAgdGhlbWU6IFwiY2xhc3NpY1wiLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHF1ZXN0aW9uLmlzUmVhZE9ubHksXG4gICAgICAgICAgICBkYXRhOiBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBjaG9pY2UudmFsdWUsXG4gICAgICAgICAgICAgICAgdGV4dDogY2hvaWNlLnRleHRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcbiAgICAgICAgdXBkYXRlQ29tbWVudEhhbmRsZXIoKTtcbiAgICAgIH07XG5cbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkZWwucHJvcChcImRpc2FibGVkXCIsIHF1ZXN0aW9uLmlzUmVhZE9ubHkpO1xuICAgICAgfTtcblxuICAgICAgcXVlc3Rpb24ucmVnaXN0ZXJGdW5jdGlvbk9uUHJvcGVydHlWYWx1ZUNoYW5nZWQoXG4gICAgICAgIFwidmlzaWJsZUNob2ljZXNcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHVwZGF0ZUNob2ljZXMoKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHVwZGF0ZUNob2ljZXMoKTtcbiAgICAgICRlbC5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB9KTtcbiAgICAgICRlbC5vbihcInNlbGVjdDI6dW5zZWxlY3RpbmdcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBudWxsO1xuICAgICAgfSk7XG4gICAgICBvdGhlcnNFbC5vbmNoYW5nZSA9IG90aGVyc0VsQ2hhbmdlZDtcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xuICAgICAgcXVlc3Rpb24uY29tbWVudENoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZUNvbW1lbnRIYW5kbGVyO1xuICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XG4gICAgICB1cGRhdGVDb21tZW50SGFuZGxlcigpO1xuICAgIH0sXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWwpIHtcbiAgICAgICQoZWwpXG4gICAgICAgIC5maW5kKFwic2VsZWN0XCIpXG4gICAgICAgIC5vZmYoXCJzZWxlY3QyOnNlbGVjdFwiKVxuICAgICAgICAuc2VsZWN0MihcImRlc3Ryb3lcIik7XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IG51bGw7XG4gICAgICBxdWVzdGlvbi5jbGVhckluY29ycmVjdFZhbHVlc0NhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCk7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5LCB3aW5kb3cuJCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZWxlY3QyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IiwiaW1wb3J0IElucHV0bWFzayBmcm9tIFwiaW5wdXRtYXNrXCI7XG5cbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XG4gIHZhciB3aWRnZXQgPSB7XG4gICAgbmFtZTogXCJtYXNrZWRpdFwiLFxuICAgIG51bWVyaWNHcm91cFNlcGFyYXRvcjogXCIsXCIsXG4gICAgbnVtZXJpY0F1dG9Hcm91cDogdHJ1ZSxcbiAgICBudW1lcmljRGlnaXRzOiAyLFxuICAgIG51bWVyaWNEaWdpdHNPcHRpb25hbDogZmFsc2UsXG4gICAgbnVtZXJpY1ByZWZpeDogXCIkXCIsXG4gICAgbnVtZXJpY1BsYWNlaG9sZGVyOiBcIjBcIixcbiAgICBhdXRvVW5tYXNrOiB0cnVlLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgSW5wdXRtYXNrICE9IFwidW5kZWZpbmVkXCI7XG4gICAgfSxcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT0gXCJtdWx0aXBsZXRleHRcIikgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBxdWVzdGlvbi5nZXRUeXBlKCkgPT0gXCJ0ZXh0XCIgJiZcbiAgICAgICAgKHF1ZXN0aW9uLmlucHV0TWFzayAhPSBcIm5vbmVcIiB8fCBxdWVzdGlvbi5pbnB1dEZvcm1hdClcbiAgICAgICk7XG4gICAgfSxcbiAgICBpc0RlZmF1bHRSZW5kZXI6IHRydWUsXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xuICAgICAgaWYgKFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmZpbmRQcm9wZXJ0eShcInRleHRcIiwgXCJpbnB1dE1hc2tcIikpIHJldHVybjtcbiAgICAgIHZhciBwcm9wZXJ0aWVzID0gW1xuICAgICAgICBcImlucHV0Rm9ybWF0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInByZWZpeFwiLFxuICAgICAgICAgIGRlZmF1bHQ6IFwiJFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImF1dG9Vbm1hc2s6Ym9vbGVhblwiLFxuICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiaW5wdXRNYXNrXCIsXG4gICAgICAgICAgZGVmYXVsdDogXCJub25lXCIsXG4gICAgICAgICAgY2hvaWNlczogW1xuICAgICAgICAgICAgXCJub25lXCIsXG4gICAgICAgICAgICBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCIsXG4gICAgICAgICAgICBcImRlY2ltYWxcIixcbiAgICAgICAgICAgIFwiZW1haWxcIixcbiAgICAgICAgICAgIFwicGhvbmVcIixcbiAgICAgICAgICAgIFwiaXBcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXTtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJ0ZXh0XCIsIHByb3BlcnRpZXMpO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcbiAgICAgICAgXCJtYXRyaXhkcm9wZG93bmNvbHVtblwiLFxuICAgICAgICBwcm9wZXJ0aWVzXG4gICAgICApO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcIm11bHRpcGxldGV4dGl0ZW1cIiwgcHJvcGVydGllcyk7XG4gICAgfSxcbiAgICBhcHBseUlucHV0TWFzazogZnVuY3Rpb24oc3VydmV5RWxlbWVudCwgZWwpIHtcbiAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcbiAgICAgIHZhciBtYXNrID1cbiAgICAgICAgc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgIT0gXCJub25lXCJcbiAgICAgICAgICA/IHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrXG4gICAgICAgICAgOiBzdXJ2ZXlFbGVtZW50LmlucHV0Rm9ybWF0O1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIGF1dG9Vbm1hc2s6XG4gICAgICAgICAgdHlwZW9mIHN1cnZleUVsZW1lbnQuYXV0b1VubWFzayAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgPyBzdXJ2ZXlFbGVtZW50LmF1dG9Vbm1hc2tcbiAgICAgICAgICAgIDogcm9vdFdpZGdldC5hdXRvVW5tYXNrXG4gICAgICB9O1xuICAgICAgaWYgKHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrICE9IFwibm9uZVwiKVxuICAgICAgICBvcHRpb25zLmlucHV0Rm9ybWF0ID0gc3VydmV5RWxlbWVudC5pbnB1dEZvcm1hdDtcblxuICAgICAgaWYgKFxuICAgICAgICBzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImN1cnJlbmN5XCIgfHxcbiAgICAgICAgc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgPT0gXCJkZWNpbWFsXCJcbiAgICAgICkge1xuICAgICAgICBvcHRpb25zLmdyb3VwU2VwYXJhdG9yID0gcm9vdFdpZGdldC5udW1lcmljR3JvdXBTZXBhcmF0b3I7XG4gICAgICAgIG9wdGlvbnMuYXV0b0dyb3VwID0gcm9vdFdpZGdldC5udW1lcmljQXV0b0dyb3VwO1xuICAgICAgfVxuICAgICAgaWYgKHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiY3VycmVuY3lcIikge1xuICAgICAgICBvcHRpb25zLmRpZ2l0cyA9IHJvb3RXaWRnZXQubnVtZXJpY0RpZ2l0cztcbiAgICAgICAgb3B0aW9ucy5kaWdpdHNPcHRpb25hbCA9IHJvb3RXaWRnZXQubnVtZXJpY0RpZ2l0c09wdGlvbmFsO1xuICAgICAgICBvcHRpb25zLnByZWZpeCA9IHN1cnZleUVsZW1lbnQucHJlZml4IHx8IHJvb3RXaWRnZXQubnVtZXJpY1ByZWZpeDtcbiAgICAgICAgb3B0aW9ucy5wbGFjZWhvbGRlciA9IHJvb3RXaWRnZXQubnVtZXJpY1BsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgICAgaWYgKHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiZGF0ZXRpbWVcIikge1xuICAgICAgICBtYXNrID0gc3VydmV5RWxlbWVudC5pbnB1dEZvcm1hdDtcbiAgICAgIH1cblxuICAgICAgSW5wdXRtYXNrKG1hc2ssIG9wdGlvbnMpLm1hc2soZWwpO1xuXG4gICAgICBlbC5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN1cnZleUVsZW1lbnQuY3VzdG9tV2lkZ2V0RGF0YS5pc05lZWRSZW5kZXIgPSB0cnVlO1xuICAgICAgfTtcblxuICAgICAgdmFyIHVwZGF0ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZWwudmFsdWUgPVxuICAgICAgICAgIHR5cGVvZiBzdXJ2ZXlFbGVtZW50LnZhbHVlID09PSBcInVuZGVmaW5lZFwiID8gXCJcIiA6IHN1cnZleUVsZW1lbnQudmFsdWU7XG4gICAgICB9O1xuICAgICAgc3VydmV5RWxlbWVudC52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZUhhbmRsZXI7XG4gICAgICB1cGRhdGVIYW5kbGVyKCk7XG4gICAgfSxcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpICE9IFwibXVsdGlwbGV0ZXh0XCIpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcImlucHV0XCIpIHx8IGVsO1xuICAgICAgICB0aGlzLmFwcGx5SW5wdXRNYXNrKHF1ZXN0aW9uLCBpbnB1dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXN0aW9uLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBxdWVzdGlvbi5pdGVtc1tpXTtcbiAgICAgICAgICBpZiAoaXRlbS5pbnB1dE1hc2sgIT0gXCJub25lXCIgfHwgaXRlbS5pbnB1dEZvcm1hdCkge1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcIiNcIiArIGl0ZW0uaWQpO1xuICAgICAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICAgIHRoaXMuYXBwbHlJbnB1dE1hc2soaXRlbSwgaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcImlucHV0XCIpIHx8IGVsO1xuICAgICAgaWYgKCEhaW5wdXQgJiYgISFpbnB1dC5pbnB1dG1hc2spIHtcbiAgICAgICAgaW5wdXQuaW5wdXRtYXNrLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0KTtcbn1cblxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaW5pdChTdXJ2ZXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5wdXRtYXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJJbnB1dG1hc2tcIixcImNvbW1vbmpzMlwiOlwiaW5wdXRtYXNrXCIsXCJjb21tb25qc1wiOlwiaW5wdXRtYXNrXCIsXCJhbWRcIjpcImlucHV0bWFza1wifVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsImZ1bmN0aW9uIGluaXQoU3VydmV5LCAkKSB7XG4gICQgPSAkIHx8IHdpbmRvdy4kO1xuICB2YXIgd2lkZ2V0ID0ge1xuICAgIG5hbWU6IFwiYmFycmF0aW5nXCIsXG4gICAgdGl0bGU6IFwiQmFyIHJhdGluZ1wiLFxuICAgIGljb25OYW1lOiBcImljb24tYmFycmF0aW5nXCIsXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uYmFycmF0aW5nO1xuICAgIH0sXG4gICAgZGVmYXVsdEpTT046IHsgY2hvaWNlczogWzEsIDIsIDMsIDQsIDVdIH0sXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImJhcnJhdGluZ1wiO1xuICAgIH0sXG4gICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFxuICAgICAgICBcImJhcnJhdGluZ1wiLFxuICAgICAgICBbXG4gICAgICAgICAgeyBuYW1lOiBcImhhc090aGVyXCIsIHZpc2libGU6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIm90aGVyVGV4dFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogXCJvcHRpb25zQ2FwdGlvblwiLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogXCJvdGhlckVycm9yVGV4dFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogXCJzdG9yZU90aGVyc0FzQ29tbWVudFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogXCJyZW5kZXJBc1wiLCB2aXNpYmxlOiBmYWxzZSB9XG4gICAgICAgIF0sXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwiZHJvcGRvd25cIlxuICAgICAgKTtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwiYmFycmF0aW5nXCIsIHtcbiAgICAgICAgbmFtZTogXCJzaG93VmFsdWVzOmJvb2xlYW5cIixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJiYXJyYXRpbmdcIiwge1xuICAgICAgICBuYW1lOiBcInJhdGluZ1RoZW1lXCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiY3NzLXN0YXJzXCIsXG4gICAgICAgIGNob2ljZXM6IFtcbiAgICAgICAgICBcImZvbnRhd2Vzb21lLXN0YXJzXCIsXG4gICAgICAgICAgXCJjc3Mtc3RhcnNcIixcbiAgICAgICAgICBcImJhcnMtcGlsbFwiLFxuICAgICAgICAgIFwiYmFycy0xdG8xMFwiLFxuICAgICAgICAgIFwiYmFycy1tb3ZpZVwiLFxuICAgICAgICAgIFwiYmFycy1zcXVhcmVcIixcbiAgICAgICAgICBcImJhcnMtcmV2ZXJzZWRcIixcbiAgICAgICAgICBcImJhcnMtaG9yaXpvbnRhbFwiLFxuICAgICAgICAgIFwiYm9vdHN0cmFwLXN0YXJzXCIsXG4gICAgICAgICAgXCJmb250YXdlc29tZS1zdGFycy1vXCJcbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJzZWxlY3RcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XG4gICAgICB2YXIgdmFsdWVDaGFuZ2luZ0J5V2lkZ2V0ID0gZmFsc2U7XG4gICAgICB2YXIgY3JlYXRvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkZWwuYmFycmF0aW5nKFwic2hvd1wiLCB7XG4gICAgICAgICAgdGhlbWU6IHF1ZXN0aW9uLnJhdGluZ1RoZW1lLFxuICAgICAgICAgIGluaXRpYWxSYXRpbmc6IHF1ZXN0aW9uLnZhbHVlLFxuICAgICAgICAgIHNob3dWYWx1ZXM6IHF1ZXN0aW9uLnNob3dWYWx1ZXMsXG4gICAgICAgICAgc2hvd1NlbGVjdGVkUmF0aW5nOiBmYWxzZSxcbiAgICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24odmFsdWUsIHRleHQpIHtcbiAgICAgICAgICAgIHZhbHVlQ2hhbmdpbmdCeVdpZGdldCA9IHRydWU7XG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdmFsdWVDaGFuZ2luZ0J5V2lkZ2V0ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBjcmVhdG9yKCk7XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXZhbHVlQ2hhbmdpbmdCeVdpZGdldCAmJiAkKGVsKS5maW5kKFwic2VsZWN0XCIpWzBdLnZhbHVlICE9PSBxdWVzdGlvbi52YWx1ZSkge1xuICAgICAgICAgICQoZWwpXG4gICAgICAgICAgICAuZmluZChcInNlbGVjdFwiKVxuICAgICAgICAgICAgLmJhcnJhdGluZyhcInNldFwiLCBxdWVzdGlvbi52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBxdWVzdGlvbi5fX2JhcnJhdGluZ09uUHJvcGVydHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbihcbiAgICAgICAgc2VuZGVyLFxuICAgICAgICBvcHRpb25zXG4gICAgICApIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubmFtZSA9PSBcInJhdGluZ1RoZW1lXCIpIHtcbiAgICAgICAgICAkZWwuYmFycmF0aW5nKFwiZGVzdHJveVwiKTtcbiAgICAgICAgICBjcmVhdG9yKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBxdWVzdGlvbi5vblByb3BlcnR5Q2hhbmdlZC5hZGQoXG4gICAgICAgIHF1ZXN0aW9uLl9fYmFycmF0aW5nT25Qcm9wZXJ0eUNoYW5nZWRDYWxsYmFja1xuICAgICAgKTtcbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciAkZWwgPSAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xuICAgICAgJGVsLmJhcnJhdGluZyhcImRlc3Ryb3lcIik7XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVuZGVmaW5lZDtcbiAgICAgIHF1ZXN0aW9uLm9uUHJvcGVydHlDaGFuZ2VkLnJlbW92ZShcbiAgICAgICAgcXVlc3Rpb24uX19iYXJyYXRpbmdPblByb3BlcnR5Q2hhbmdlZENhbGxiYWNrXG4gICAgICApO1xuICAgICAgcXVlc3Rpb24uX19iYXJyYXRpbmdPblByb3BlcnR5Q2hhbmdlZENhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5LCB3aW5kb3cuJCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcXVlcnktYmFyLXJhdGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTEiLCJmdW5jdGlvbiBpbml0KFN1cnZleSwgJCkge1xuICAkID0gJCB8fCB3aW5kb3cuJDtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBuYW1lOiBcImRhdGVwaWNrZXJcIixcbiAgICB0aXRsZTogXCJEYXRlIHBpY2tlclwiLFxuICAgIGljb25OYW1lOiBcImljb24tZGF0ZXBpY2tlclwiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhISQgJiYgISEkLmZuLmRhdGVwaWNrZXI7XG4gICAgfSxcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiZGF0ZXBpY2tlclwiO1xuICAgIH0sXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxpbnB1dCBjbGFzcz0nZm9ybS1jb250cm9sIHdpZGdldC1kYXRlcGlja2VyJyB0eXBlPSd0ZXh0Jz5cIixcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcbiAgICAgICAgXCJkYXRlcGlja2VyXCIsXG4gICAgICAgIFtcbiAgICAgICAgICB7IG5hbWU6IFwiaW5wdXRUeXBlXCIsIHZpc2libGU6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiBcImlucHV0Rm9ybWF0XCIsIHZpc2libGU6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiBcImlucHV0TWFza1wiLCB2aXNpYmxlOiBmYWxzZSB9XG4gICAgICAgIF0sXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwidGV4dFwiXG4gICAgICApO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJkYXRlcGlja2VyXCIsIHtcbiAgICAgICAgbmFtZTogXCJkYXRlRm9ybWF0XCJcbiAgICAgIH0pO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJkYXRlcGlja2VyXCIsIHtcbiAgICAgICAgbmFtZTogXCJjb25maWdcIixcbiAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCIud2lkZ2V0LWRhdGVwaWNrZXJcIilcbiAgICAgICAgPyAkKGVsKVxuICAgICAgICA6ICQoZWwpLmZpbmQoXCIud2lkZ2V0LWRhdGVwaWNrZXJcIik7XG4gICAgICB2YXIgaXNTZWxlY3RpbmcgPSBmYWxzZTtcbiAgICAgIHZhciBjb25maWcgPSAkLmV4dGVuZCh0cnVlLCB7fSwgcXVlc3Rpb24uY29uZmlnIHx8IHt9KTtcbiAgICAgIGlmICghIXF1ZXN0aW9uLnBsYWNlSG9sZGVyKSB7XG4gICAgICAgICRlbC5hdHRyKFwicGxhY2Vob2xkZXJcIiwgcXVlc3Rpb24ucGxhY2VIb2xkZXIpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5kYXRlRm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnLmRhdGVGb3JtYXQgPSAhIXF1ZXN0aW9uLmRhdGVGb3JtYXRcbiAgICAgICAgICA/IHF1ZXN0aW9uLmRhdGVGb3JtYXRcbiAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcub3B0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnLm9wdGlvbiA9IHtcbiAgICAgICAgICBtaW5EYXRlOiBudWxsLFxuICAgICAgICAgIG1heERhdGU6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcub25TZWxlY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25maWcub25TZWxlY3QgPSBmdW5jdGlvbihkYXRlVGV4dCkge1xuICAgICAgICAgIGlzU2VsZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGRhdGVUZXh0O1xuICAgICAgICAgIGlzU2VsZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5maXhGb2N1c0lFID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbmZpZy5maXhGb2N1c0lFID0gZmFsc2U7XG4gICAgICBjb25maWcub25DbG9zZSA9IGZ1bmN0aW9uKGRhdGVUZXh0LCBpbnN0KSB7XG4gICAgICAgIHRoaXMuZml4Rm9jdXNJRSA9IHRydWU7XG4gICAgICB9O1xuICAgICAgY29uZmlnLmJlZm9yZVNob3cgPSBmdW5jdGlvbihpbnB1dCwgaW5zdCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pXG4gICAgICAgICAgPyAhdGhpcy5maXhGb2N1c0lFXG4gICAgICAgICAgOiB0cnVlO1xuICAgICAgICB0aGlzLmZpeEZvY3VzSUUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH07XG4gICAgICB2YXIgcGlja2VyV2lkZ2V0ID0gJGVsLmRhdGVwaWNrZXIoY29uZmlnKTtcblxuICAgICAgJGVsLmtleXVwKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSA4IHx8IGUua2V5Q29kZSA9PSA0Nikge1xuICAgICAgICAgICQuZGF0ZXBpY2tlci5fY2xlYXJEYXRlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGVsLmRhdGVwaWNrZXIoXCJvcHRpb25cIiwgXCJkaXNhYmxlZFwiLCBxdWVzdGlvbi5pc1JlYWRPbmx5KTtcbiAgICAgIH07XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjaygpO1xuXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIWlzU2VsZWN0aW5nKSB7XG4gICAgICAgICAgaWYgKHF1ZXN0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICBwaWNrZXJXaWRnZXQuZGF0ZXBpY2tlcihcInNldERhdGVcIiwgcXVlc3Rpb24udmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwaWNrZXJXaWRnZXQuZGF0ZXBpY2tlcihcInNldERhdGVcIiwgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICRlbC5ibHVyKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjaygpO1xuICAgIH0sXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwiLndpZGdldC1kYXRlcGlja2VyXCIpXG4gICAgICAgID8gJChlbClcbiAgICAgICAgOiAkKGVsKS5maW5kKFwiLndpZGdldC1kYXRlcGlja2VyXCIpO1xuICAgICAgJGVsLmRhdGVwaWNrZXIoXCJkZXN0cm95XCIpO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkubWF0cml4RHJvcGRvd25Db2x1bW5UeXBlcy5kYXRlcGlja2VyID0geyBwcm9wZXJ0aWVzOiBbXCJwbGFjZUhvbGRlclwiXSB9O1xuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5LCB3aW5kb3cuJCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcXVlcnktdWktZGF0ZXBpY2tlci5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTAiLCJpbXBvcnQgbm9VaVNsaWRlciBmcm9tIFwibm91aXNsaWRlclwiO1xuXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xuICB2YXIgd2lkZ2V0ID0ge1xuICAgIG5hbWU6IFwibm91aXNsaWRlclwiLFxuICAgIHRpdGxlOiBcIm5vVWlTbGlkZXJcIixcbiAgICBpY29uTmFtZTogXCJpY29uLW5vdWlzbGlkZXJcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG5vVWlTbGlkZXIgIT0gXCJ1bmRlZmluZWRcIjtcbiAgICB9LFxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJub3Vpc2xpZGVyXCI7XG4gICAgfSxcbiAgICBodG1sVGVtcGxhdGU6IFwiPGRpdj48L2Rpdj5cIixcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm5vdWlzbGlkZXJcIiwgW10sIG51bGwsIFwiZW1wdHlcIik7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwibm91aXNsaWRlclwiLCBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInN0ZXA6bnVtYmVyXCIsXG4gICAgICAgICAgZGVmYXVsdDogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJyYW5nZU1pbjpudW1iZXJcIixcbiAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJhbmdlTWF4Om51bWJlclwiLFxuICAgICAgICAgIGRlZmF1bHQ6IDEwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJwaXBzTW9kZVwiLFxuICAgICAgICAgIGRlZmF1bHQ6IFwicG9zaXRpb25zXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicGlwc1ZhbHVlczppdGVtdmFsdWVzXCIsXG4gICAgICAgICAgZGVmYXVsdDogWzAsIDI1LCA1MCwgNzUsIDEwMF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicGlwc0RlbnNpdHk6bnVtYmVyXCIsXG4gICAgICAgICAgZGVmYXVsdDogNVxuICAgICAgICB9XG4gICAgICBdKTtcbiAgICB9LFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIGVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNjBweFwiO1xuICAgICAgdmFyIHNsaWRlciA9IG5vVWlTbGlkZXIuY3JlYXRlKGVsLCB7XG4gICAgICAgIHN0YXJ0OiBxdWVzdGlvbi52YWx1ZSB8fCAocXVlc3Rpb24ucmFuZ2VNaW4gKyBxdWVzdGlvbi5yYW5nZU1heCkgLyAyLFxuICAgICAgICBjb25uZWN0OiBbdHJ1ZSwgZmFsc2VdLFxuICAgICAgICBzdGVwOiBxdWVzdGlvbi5zdGVwLFxuICAgICAgICB0b29sdGlwczogdHJ1ZSxcbiAgICAgICAgcGlwczoge1xuICAgICAgICAgIG1vZGU6IHF1ZXN0aW9uLnBpcHNNb2RlIHx8IFwicG9zaXRpb25zXCIsXG4gICAgICAgICAgdmFsdWVzOiBxdWVzdGlvbi5waXBzVmFsdWVzLm1hcChmdW5jdGlvbihwVmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoKHBWYWwudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwVmFsLnZhbHVlKSB8fCBwVmFsKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZW5zaXR5OiBxdWVzdGlvbi5waXBzRGVuc2l0eSB8fCA1XG4gICAgICAgIH0sXG4gICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgbWluOiBxdWVzdGlvbi5yYW5nZU1pbixcbiAgICAgICAgICBtYXg6IHF1ZXN0aW9uLnJhbmdlTWF4XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2xpZGVyLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHNsaWRlci5nZXQoKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzbGlkZXIuc2V0KHF1ZXN0aW9uLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICBpZiAocXVlc3Rpb24uaXNSZWFkT25seSkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xuICAgICAgcXVlc3Rpb24ubm9VaVNsaWRlciA9IHNsaWRlcjtcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHF1ZXN0aW9uLm5vVWlTbGlkZXIuZGVzdHJveSgpO1xuICAgICAgcXVlc3Rpb24ubm9VaVNsaWRlciA9IG51bGw7XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcbn1cblxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaW5pdChTdXJ2ZXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbm91aXNsaWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibm9VaVNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJub3Vpc2xpZGVyXCIsXCJjb21tb25qc1wiOlwibm91aXNsaWRlclwiLFwiYW1kXCI6XCJub3Vpc2xpZGVyXCJ9XG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcbiAgJCA9ICQgfHwgd2luZG93LiQ7XG4gIHZhciB3aWRnZXQgPSB7XG4gICAgbmFtZTogXCJ0YWdib3hcIixcbiAgICB0aXRsZTogXCJUYWcgYm94XCIsXG4gICAgaWNvbk5hbWU6IFwiaWNvbi10YWdib3hcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHlwZW9mICQgPT0gXCJmdW5jdGlvblwiICYmICEhJC5mbi5zZWxlY3QyO1xuICAgIH0sXG4gICAgZGVmYXVsdEpTT046IHtcbiAgICAgIGNob2ljZXM6IFtcIkl0ZW0gMVwiLCBcIkl0ZW0gMlwiLCBcIkl0ZW0gM1wiXVxuICAgIH0sXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJyBzdHlsZT0nd2lkdGg6IDEwMCU7Jz48L3NlbGVjdD5cIixcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwidGFnYm94XCI7XG4gICAgfSxcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcbiAgICAgICAgXCJ0YWdib3hcIixcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiaGFzT3RoZXJcIixcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBudWxsLFxuICAgICAgICBcImNoZWNrYm94XCJcbiAgICAgICk7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInRhZ2JveFwiLCB7XG4gICAgICAgIG5hbWU6IFwic2VsZWN0MkNvbmZpZ1wiLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICB9KTtcbiAgICAgIFN1cnZleS5tYXRyaXhEcm9wZG93bkNvbHVtblR5cGVzLnRhZ2JveCA9IHtcbiAgICAgICAgcHJvcGVydGllczogW1xuICAgICAgICAgIFwiY2hvaWNlc1wiLFxuICAgICAgICAgIFwiY2hvaWNlc09yZGVyXCIsXG4gICAgICAgICAgXCJjaG9pY2VzQnlVcmxcIixcbiAgICAgICAgICBcIm9wdGlvbnNDYXB0aW9uXCIsXG4gICAgICAgICAgXCJvdGhlclRleHRcIixcbiAgICAgICAgICBcImNob2ljZXNWaXNpYmxlSWZcIlxuICAgICAgICBdXG4gICAgICB9O1xuICAgIH0sXG4gICAgZml4U3R5bGVzOiBmdW5jdGlvbihlbCkge1xuICAgICAgZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdDItc2VhcmNoX19maWVsZFwiKS5zdHlsZS5ib3JkZXIgPVxuICAgICAgICBcIm5vbmVcIjtcbiAgICB9LFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBzZXR0aW5ncyA9IHF1ZXN0aW9uLnNlbGVjdDJDb25maWc7XG4gICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJzZWxlY3RcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XG5cbiAgICAgIHNlbGYud2lsbFVubW91bnQocXVlc3Rpb24sIGVsKTtcblxuICAgICAgJGVsLnNlbGVjdDIoe1xuICAgICAgICB0YWdzOiBcInRydWVcIixcbiAgICAgICAgZGlzYWJsZWQ6IHF1ZXN0aW9uLmlzUmVhZE9ubHksXG4gICAgICAgIHRoZW1lOiBcImNsYXNzaWNcIlxuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuZml4U3R5bGVzKGVsKTtcblxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkZWwudmFsKHF1ZXN0aW9uLnZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgICAgICBzZWxmLmZpeFN0eWxlcyhlbCk7XG4gICAgICB9O1xuICAgICAgdmFyIHVwZGF0ZUNob2ljZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGVsLnNlbGVjdDIoKS5lbXB0eSgpO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgICAgIGlmIChzZXR0aW5ncy5hamF4KSB7XG4gICAgICAgICAgICAkZWwuc2VsZWN0MihzZXR0aW5ncyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldHRpbmdzLmRhdGEgPSBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24oY2hvaWNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IGNob2ljZS52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBjaG9pY2UudGV4dFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkZWwuc2VsZWN0MihzZXR0aW5ncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRlbC5zZWxlY3QyKHtcbiAgICAgICAgICAgIGRhdGE6IHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzLm1hcChmdW5jdGlvbihjaG9pY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogY2hvaWNlLnZhbHVlLFxuICAgICAgICAgICAgICAgIHRleHQ6IGNob2ljZS50ZXh0XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XG4gICAgICB9O1xuXG4gICAgICBxdWVzdGlvbi5fcHJvcGVydHlWYWx1ZUNoYW5nZWRGblNlbGVjdDIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdXBkYXRlQ2hvaWNlcygpO1xuICAgICAgfTtcblxuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGVsLnByb3AoXCJkaXNhYmxlZFwiLCBxdWVzdGlvbi5pc1JlYWRPbmx5KTtcbiAgICAgIH07XG4gICAgICBxdWVzdGlvbi5yZWdpc3RlckZ1bmN0aW9uT25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChcbiAgICAgICAgXCJ2aXNpYmxlQ2hvaWNlc1wiLFxuICAgICAgICBxdWVzdGlvbi5fcHJvcGVydHlWYWx1ZUNoYW5nZWRGblNlbGVjdDJcbiAgICAgICk7XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcbiAgICAgICRlbC5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSAocXVlc3Rpb24udmFsdWUgfHwgW10pLmNvbmNhdChlLnBhcmFtcy5kYXRhLmlkKTtcbiAgICAgIH0pO1xuICAgICAgJGVsLm9uKFwic2VsZWN0Mjp1bnNlbGVjdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IChxdWVzdGlvbi52YWx1ZSB8fCBbXSkuaW5kZXhPZihlLnBhcmFtcy5kYXRhLmlkKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHZhciB2YWwgPSBxdWVzdGlvbi52YWx1ZTtcbiAgICAgICAgICB2YWwuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB1cGRhdGVDaG9pY2VzKCk7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICBpZiAoIXF1ZXN0aW9uLl9wcm9wZXJ0eVZhbHVlQ2hhbmdlZEZuU2VsZWN0MikgcmV0dXJuO1xuXG4gICAgICAkKGVsKVxuICAgICAgICAuZmluZChcInNlbGVjdFwiKVxuICAgICAgICAub2ZmKFwic2VsZWN0MjpzZWxlY3RcIilcbiAgICAgICAgLnNlbGVjdDIoXCJkZXN0cm95XCIpO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgcXVlc3Rpb24udW5SZWdpc3RlckZ1bmN0aW9uT25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChcbiAgICAgICAgXCJ2aXNpYmxlQ2hvaWNlc1wiLFxuICAgICAgICBxdWVzdGlvbi5fcHJvcGVydHlWYWx1ZUNoYW5nZWRGblNlbGVjdDJcbiAgICAgICk7XG4gICAgICBxdWVzdGlvbi5fcHJvcGVydHlWYWx1ZUNoYW5nZWRGblNlbGVjdDIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcbn1cblxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaW5pdChTdXJ2ZXksIHdpbmRvdy4kKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NlbGVjdDItdGFnYm94LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA4IiwiaW1wb3J0IFNpZ25hdHVyZVBhZCBmcm9tIFwic2lnbmF0dXJlX3BhZFwiO1xuXG5mdW5jdGlvbiByZXNpemVDYW52YXMoY2FudmFzKSB7XG4gIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgdmFyIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICB2YXIgYmFja2luZ1N0b3JlUmF0aW8gPVxuICAgIGNvbnRleHQud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgIGNvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgIGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgY29udGV4dC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgIGNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgIDE7XG5cbiAgdmFyIHJhdGlvID0gZGV2aWNlUGl4ZWxSYXRpbyAvIGJhY2tpbmdTdG9yZVJhdGlvO1xuXG4gIHZhciBvbGRXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgdmFyIG9sZEhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgY2FudmFzLndpZHRoID0gb2xkV2lkdGggKiByYXRpbztcbiAgY2FudmFzLmhlaWdodCA9IG9sZEhlaWdodCAqIHJhdGlvO1xuXG4gIGNhbnZhcy5zdHlsZS53aWR0aCA9IG9sZFdpZHRoICsgXCJweFwiO1xuICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gb2xkSGVpZ2h0ICsgXCJweFwiO1xuXG4gIGNvbnRleHQuc2NhbGUocmF0aW8sIHJhdGlvKTtcbn1cblxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBuYW1lOiBcInNpZ25hdHVyZXBhZFwiLFxuICAgIHRpdGxlOiBcIlNpZ25hdHVyZSBwYWRcIixcbiAgICBpY29uTmFtZTogXCJpY29uLXNpZ25hdHVyZXBhZFwiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgU2lnbmF0dXJlUGFkICE9IFwidW5kZWZpbmVkXCI7XG4gICAgfSxcbiAgICBwZW5Db2xvcjogXCIjMWFiMzk0XCIsXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInNpZ25hdHVyZXBhZFwiO1xuICAgIH0sXG4gICAgaHRtbFRlbXBsYXRlOlxuICAgICAgXCI8ZGl2IGNsYXNzPSdzanNfc3BfY29udGFpbmVyJz48ZGl2PjxjYW52YXM+PC9jYW52YXM+PC9kaXY+PGRpdiBjbGFzcz0nc2pzX3NwX2NvbnRyb2xzJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J3Nqc19zcF9jbGVhcicgdGl0bGU9J0NsZWFyJz7inJY8L2J1dHRvbj48L2Rpdj48L2Rpdj48c3R5bGU+LnNqc19zcF9jb250YWluZXIgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH0gLnNqc19zcF9jb250cm9scyB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgYm90dG9tOiAwOyB9IC5zanNfc3BfY29udHJvbHMgPiBidXR0b24geyB1c2VyLXNlbGVjdDogbm9uZTsgfTwvc3R5bGU+XCIsXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJzaWduYXR1cmVwYWRcIiwgW10sIG51bGwsIFwiZW1wdHlcIik7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwic2lnbmF0dXJlcGFkXCIsIFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiYWxsb3dDbGVhcjpib29sZWFuXCIsXG4gICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJ3aWR0aDpudW1iZXJcIixcbiAgICAgICAgICBkZWZhdWx0OiAzMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiaGVpZ2h0Om51bWJlclwiLFxuICAgICAgICAgIGRlZmF1bHQ6IDIwMFxuICAgICAgICB9XG4gICAgICBdKTtcbiAgICB9LFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcbiAgICAgIHZhciBjYW52YXMgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICAgIHZhciBidXR0b25FbCA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYnV0dG9uXCIpWzBdO1xuICAgICAgdmFyIHNpZ25hdHVyZVBhZCA9IG5ldyBTaWduYXR1cmVQYWQoY2FudmFzKTtcbiAgICAgIGlmIChxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XG4gICAgICAgIHNpZ25hdHVyZVBhZC5vZmYoKTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uRWwub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH07XG5cbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghcXVlc3Rpb24uYWxsb3dDbGVhciB8fCBxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XG4gICAgICAgICAgc2lnbmF0dXJlUGFkLm9mZigpO1xuICAgICAgICAgIGJ1dHRvbkVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaWduYXR1cmVQYWQub24oKTtcbiAgICAgICAgICBidXR0b25FbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzaWduYXR1cmVQYWQucGVuQ29sb3IgPSByb290V2lkZ2V0LnBlbkNvbG9yO1xuICAgICAgc2lnbmF0dXJlUGFkLm9uRW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkYXRhID0gc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgpO1xuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGRhdGE7XG4gICAgICB9O1xuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHF1ZXN0aW9uLnZhbHVlO1xuICAgICAgICBjYW52YXMud2lkdGggPSBxdWVzdGlvbi53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHF1ZXN0aW9uLmhlaWdodDtcbiAgICAgICAgcmVzaXplQ2FudmFzKGNhbnZhcyk7XG4gICAgICAgIHNpZ25hdHVyZVBhZC5mcm9tRGF0YVVSTChcbiAgICAgICAgICBkYXRhIHx8IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBUFwiXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrKCk7XG4gICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQgPSBzaWduYXR1cmVQYWQ7XG4gICAgICB2YXIgcHJvcGVydHlDaGFuZ2VkSGFuZGxlciA9IGZ1bmN0aW9uKHNlbmRlciwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy5uYW1lID09PSBcIndpZHRoXCIgfHwgb3B0aW9ucy5uYW1lID09PSBcImhlaWdodFwiKSB7XG4gICAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBxdWVzdGlvbi5vblByb3BlcnR5Q2hhbmdlZC5hZGQocHJvcGVydHlDaGFuZ2VkSGFuZGxlcik7XG4gICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQucHJvcGVydHlDaGFuZ2VkSGFuZGxlciA9IHByb3BlcnR5Q2hhbmdlZEhhbmRsZXI7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICBpZiAocXVlc3Rpb24uc2lnbmF0dXJlUGFkKSB7XG4gICAgICAgIHF1ZXN0aW9uLm9uUHJvcGVydHlDaGFuZ2VkLnJlbW92ZShcbiAgICAgICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQucHJvcGVydHlDaGFuZ2VkSGFuZGxlclxuICAgICAgICApO1xuICAgICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQub2ZmKCk7XG4gICAgICB9XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IG51bGw7XG4gICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQgPSBudWxsO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NpZ25hdHVyZV9wYWQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJTaWduYXR1cmVQYWRcIixcImNvbW1vbmpzMlwiOlwic2lnbmF0dXJlX3BhZFwiLFwiY29tbW9uanNcIjpcInNpZ25hdHVyZV9wYWRcIixcImFtZFwiOlwic2lnbmF0dXJlX3BhZFwifVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJpbXBvcnQgU29ydGFibGUgZnJvbSBcInNvcnRhYmxlanNcIjtcblxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBuYW1lOiBcInNvcnRhYmxlbGlzdFwiLFxuICAgIHRpdGxlOiBcIlNvcnRhYmxlIGxpc3RcIixcbiAgICBpY29uTmFtZTogXCJpY29uLXNvcnRhYmxlanNcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBTb3J0YWJsZSAhPSBcInVuZGVmaW5lZFwiO1xuICAgIH0sXG4gICAgZGVmYXVsdEpTT046IHsgY2hvaWNlczogW1wiSXRlbSAxXCIsIFwiSXRlbSAyXCIsIFwiSXRlbSAzXCJdIH0sXG4gICAgcm9vdFN0eWxlOiBcIndpZHRoOjEwMCU6XCIsXG4gICAgYXJlYVN0eWxlOlxuICAgICAgXCJib3JkZXI6IDFweCBzb2xpZCAjMWFiMzk0OyB3aWR0aDoxMDAlOyBtaW4taGVpZ2h0OjUwcHg7IG1hcmdpbi10b3A6MTBweDtcIixcbiAgICBpdGVtU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjojMWFiMzk0O2NvbG9yOiNmZmY7bWFyZ2luOjVweDtwYWRkaW5nOjEwcHg7XCIsXG4gICAgaXNGaXQ6IGZ1bmN0aW9uIChxdWVzdGlvbikge1xuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJzb3J0YWJsZWxpc3RcIjtcbiAgICB9LFxuICAgIGh0bWxUZW1wbGF0ZTogXCI8ZGl2PjwvZGl2PlwiLFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24gKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcbiAgICAgICAgXCJzb3J0YWJsZWxpc3RcIixcbiAgICAgICAgW1xuICAgICAgICAgIHsgbmFtZTogXCJoYXNPdGhlclwiLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogXCJzdG9yZU90aGVyc0FzQ29tbWVudFwiLCB2aXNpYmxlOiBmYWxzZSB9XG4gICAgICAgIF0sXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwiY2hlY2tib3hcIlxuICAgICAgKTtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwic29ydGFibGVsaXN0XCIsIHtcbiAgICAgICAgbmFtZTogXCJlbXB0eVRleHRcIixcbiAgICAgICAgZGVmYXVsdDogXCJNb3ZlIGl0ZW1zIGhlcmUuXCJcbiAgICAgIH0pO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJzb3J0YWJsZWxpc3RcIiwge1xuICAgICAgICBuYW1lOiBcInVzZURlZmF1bHRUaGVtZVwiLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwic29ydGFibGVsaXN0XCIsIHtcbiAgICAgICAgbmFtZTogXCJtYXhBbnN3ZXJzQ291bnQ6bnVtYmVyXCIsXG4gICAgICAgIGRlZmF1bHQ6IC0xXG4gICAgICB9KTtcblxuICAgIH0sXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKCFxdWVzdGlvbi51c2VEZWZhdWx0VGhlbWUpIHtcbiAgICAgICAgc2VsZi5yb290U3R5bGUgPSBcIlwiO1xuICAgICAgICBzZWxmLml0ZW1TdHlsZSA9IFwiXCI7XG4gICAgICAgIHNlbGYuYXJlYVN0eWxlID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIGVsLnN0eWxlLmNzc1RleHQgPSBzZWxmLnJvb3RTdHlsZTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IFwic2pzLXNvcnRhYmxlanMtcm9vdFwiO1xuICAgICAgdmFyIHNvdXJjZSwgcmVzdWx0O1xuICAgICAgdmFyIHJlc3VsdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHZhciBlbXB0eUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICB2YXIgc291cmNlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICByZXN1bHRFbC5zdHlsZS5jc3NUZXh0ID0gc2VsZi5hcmVhU3R5bGU7XG4gICAgICByZXN1bHRFbC5jbGFzc05hbWUgPSBcInNqcy1zb3J0YWJsZWpzLXJlc3VsdFwiO1xuXG4gICAgICBlbXB0eUVsLmlubmVySFRNTCA9IHF1ZXN0aW9uLmVtcHR5VGV4dDtcbiAgICAgIHJlc3VsdEVsLmFwcGVuZENoaWxkKGVtcHR5RWwpO1xuXG4gICAgICBzb3VyY2VFbC5zdHlsZS5jc3NUZXh0ID0gc2VsZi5hcmVhU3R5bGU7XG4gICAgICBzb3VyY2VFbC5jbGFzc05hbWUgPSBcInNqcy1zb3J0YWJsZWpzLXNvdXJjZVwiO1xuXG4gICAgICBlbC5hcHBlbmRDaGlsZChyZXN1bHRFbCk7XG4gICAgICBlbC5hcHBlbmRDaGlsZChzb3VyY2VFbCk7XG4gICAgICB2YXIgaGFzVmFsdWVJblJlc3VsdHMgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhciByZXMgPSBxdWVzdGlvbi52YWx1ZTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlcykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAocmVzW2ldID09IHZhbCkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcbiAgICAgIHZhciBhZGRDaG9pY2VUb1dpZGdldCA9IGZ1bmN0aW9uIChjaG9pY2UsIGluUmVzdWx0cykge1xuICAgICAgICB2YXIgc3JjRWwgPSBpblJlc3VsdHMgPyByZXN1bHRFbCA6IHNvdXJjZUVsO1xuICAgICAgICB2YXIgbmV3RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdFbC5pbm5lckhUTUwgPVxuICAgICAgICAgIFwiPGRpdiBjbGFzcz0nc2pzLXNvcnRhYmxlanMtaXRlbScgc3R5bGU9J1wiICtcbiAgICAgICAgICBzZWxmLml0ZW1TdHlsZSArXG4gICAgICAgICAgXCInPlwiICtcbiAgICAgICAgICBjaG9pY2UudGV4dCArXG4gICAgICAgICAgXCI8L2Rpdj5cIjtcbiAgICAgICAgbmV3RWwuZGF0YXNldFtcInZhbHVlXCJdID0gY2hvaWNlLnZhbHVlO1xuICAgICAgICBzcmNFbC5hcHBlbmRDaGlsZChuZXdFbCk7XG4gICAgICB9O1xuICAgICAgdmFyIGdldENob2ljZXNOb3RJblJlc3VsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgcXVlc3Rpb24uYWN0aXZlQ2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgICBpZiAoIWhhc1ZhbHVlSW5SZXN1bHRzKGNob2ljZS52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGNob2ljZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH07XG4gICAgICB2YXIgZ2V0Q2hvaWNlc0luUmVzdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICB2YXIgdmFsID0gcXVlc3Rpb24udmFsdWU7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWwpKSByZXR1cm4gcmVzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpdGVtID0gU3VydmV5Lkl0ZW1WYWx1ZS5nZXRJdGVtQnlWYWx1ZShcbiAgICAgICAgICAgIHF1ZXN0aW9uLmFjdGl2ZUNob2ljZXMsXG4gICAgICAgICAgICB2YWxbaV1cbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICghIWl0ZW0pIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfTtcbiAgICAgIHZhciBpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSA9IGZhbHNlO1xuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlKSByZXR1cm47XG4gICAgICAgIHJlc3VsdEVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHJlc3VsdEVsLmFwcGVuZENoaWxkKGVtcHR5RWwpO1xuICAgICAgICBzb3VyY2VFbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB2YXIgbm90SW5SZXN1bHRzID0gZ2V0Q2hvaWNlc05vdEluUmVzdWx0cygpO1xuICAgICAgICB2YXIgaW5SZXN1bHRzID0gZ2V0Q2hvaWNlc0luUmVzdWx0cygpO1xuICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBpblJlc3VsdHMubGVuZ3RoID4gMCA/IFwibm9uZVwiIDogXCJcIjtcbiAgICAgICAgaW5SZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICAgIGFkZENob2ljZVRvV2lkZ2V0KGNob2ljZSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBub3RJblJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgICAgYWRkQ2hvaWNlVG9XaWRnZXQoY2hvaWNlLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJlc3VsdCA9IHF1ZXN0aW9uLnJlc3VsdEVsID0gU29ydGFibGUuY3JlYXRlKHJlc3VsdEVsLCB7XG4gICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICBkaXNhYmxlZDogcXVlc3Rpb24uaXNSZWFkT25seSxcbiAgICAgICAgZ3JvdXA6IHtcbiAgICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICAgIHB1dDogZnVuY3Rpb24gKHRvKSB7XG4gICAgICAgICAgICByZXR1cm4gcXVlc3Rpb24ubWF4QW5zd2Vyc0NvdW50IDwgMCB8fCB0by5lbC5jaGlsZHJlbi5sZW5ndGggPD0gcXVlc3Rpb24ubWF4QW5zd2Vyc0NvdW50O1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9uU29ydDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICBpZiAocmVzdWx0RWwuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0RWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHRFbC5jaGlsZHJlbltpXS5kYXRhc2V0LnZhbHVlID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICByZXN1bHQucHVzaChyZXN1bHRFbC5jaGlsZHJlbltpXS5kYXRhc2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUgPSB0cnVlO1xuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gcmVzdWx0O1xuICAgICAgICAgIGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc291cmNlID0gcXVlc3Rpb24uc291cmNlRWwgPSBTb3J0YWJsZS5jcmVhdGUoc291cmNlRWwsIHtcbiAgICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICAgIGRpc2FibGVkOiBxdWVzdGlvbi5pc1JlYWRPbmx5LFxuICAgICAgICBncm91cDogcXVlc3Rpb24ubmFtZVxuICAgICAgfSk7XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocXVlc3Rpb24uaXNSZWFkT25seSkge1xuICAgICAgICAgIHJlc3VsdC5vcHRpb25zLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBzb3VyY2Uub3B0aW9ucy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lm9wdGlvbnMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICBzb3VyY2Uub3B0aW9ucy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgcXVlc3Rpb24ucmVzdWx0RWwuZGVzdHJveSgpO1xuICAgICAgcXVlc3Rpb24uc291cmNlRWwuZGVzdHJveSgpO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NvcnRhYmxlanMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU29ydGFibGVcIixcImNvbW1vbmpzMlwiOlwic29ydGFibGVqc1wiLFwiY29tbW9uanNcIjpcInNvcnRhYmxlanNcIixcImFtZFwiOlwic29ydGFibGVqc1wifVxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xuICB2YXIgd2lkZ2V0ID0ge1xuICAgIG5hbWU6IFwiZWRpdG9yXCIsXG4gICAgdGl0bGU6IFwiRWRpdG9yXCIsXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1lZGl0b3JcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIENLRURJVE9SICE9IFwidW5kZWZpbmVkXCI7XG4gICAgfSxcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiZWRpdG9yXCI7XG4gICAgfSxcbiAgICBodG1sVGVtcGxhdGU6XG4gICAgICBcIjx0ZXh0YXJlYSByb3dzPScxMCcgY29scz0nODAnIHN0eWxlOiB7d2lkdGg6JzEwMCUnfT48L3RleHRhcmVhPlwiLFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiZWRpdG9yXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJlZGl0b3JcIiwge1xuICAgICAgICBuYW1lOiBcImhlaWdodFwiLFxuICAgICAgICBkZWZhdWx0OiAzMDBcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyIG5hbWUgPSBxdWVzdGlvbi5uYW1lO1xuICAgICAgQ0tFRElUT1IuZWRpdG9yQ29uZmlnID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5sYW5ndWFnZSA9IFwiZXNcIjtcbiAgICAgICAgY29uZmlnLmhlaWdodCA9IHF1ZXN0aW9uLmhlaWdodDtcbiAgICAgICAgY29uZmlnLnRvb2xiYXJDYW5Db2xsYXBzZSA9IHRydWU7XG4gICAgICB9O1xuICAgICAgZWwubmFtZSA9IG5hbWU7XG5cbiAgICAgIGlmIChDS0VESVRPUi5pbnN0YW5jZXNbbmFtZV0pIHtcbiAgICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW25hbWVdLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICBDS0VESVRPUi5yZW1vdmUoQ0tFRElUT1IuaW5zdGFuY2VzW25hbWVdKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVkaXRvciA9IENLRURJVE9SLnJlcGxhY2UoZWwpO1xuICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW25hbWVdLmNvbmZpZy5yZWFkT25seSA9IHF1ZXN0aW9uLmlzUmVhZE9ubHk7XG5cbiAgICAgIHZhciBpc1ZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGlzVmFsdWVDaGFuZ2luZyB8fCB0eXBlb2YgcXVlc3Rpb24udmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgICAgICAgZWRpdG9yLnNldERhdGEocXVlc3Rpb24udmFsdWUpO1xuICAgICAgfTtcbiAgICAgIGVkaXRvci5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaXNWYWx1ZUNoYW5naW5nID0gdHJ1ZTtcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBlZGl0b3IuZ2V0RGF0YSgpO1xuICAgICAgICBpc1ZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XG4gICAgICAgICAgZWRpdG9yLnNldFJlYWRPbmx5KHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVkaXRvci5zZXRSZWFkT25seShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IG51bGw7XG4gICAgICBDS0VESVRPUi5pbnN0YW5jZXNbcXVlc3Rpb24uaWRdLmRlc3Ryb3koZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NrLWVkaXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDE0IiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcbiAgJCA9ICQgfHwgd2luZG93LiQ7XG4gIHZhciB3aWRnZXQgPSB7XG4gICAgbmFtZTogXCJhdXRvY29tcGxldGVcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHlwZW9mICQgPT0gXCJmdW5jdGlvblwiICYmICEhJC5mbi5lYXN5QXV0b2NvbXBsZXRlO1xuICAgIH0sXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInRleHRcIjtcbiAgICB9LFxuICAgIGlzRGVmYXVsdFJlbmRlcjogdHJ1ZSxcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBpZiAoXG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmZpbmRQcm9wZXJ0eShcInRleHRcIiwgXCJjaG9pY2VzXCIpICE9PSBudWxsIHx8XG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmZpbmRQcm9wZXJ0eShcInRleHRcIiwgXCJjaG9pY2VzQnlVcmxcIikgIT09IG51bGxcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInRleHRcIiwgXCJjaG9pY2VzOml0ZW12YWx1ZXNcIik7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInRleHRcIiwge1xuICAgICAgICBuYW1lOiBcImNob2ljZXNCeVVybDpyZXN0ZnVsbFwiLFxuICAgICAgICBjbGFzc05hbWU6IFwiQ2hvaWNlc1Jlc3RmdWxsXCIsXG4gICAgICAgIG9uR2V0VmFsdWU6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIHJldHVybiBvYmogJiYgb2JqLmNob2ljZXNCeVVybCAmJiBvYmouY2hvaWNlc0J5VXJsLmdldERhdGEoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TZXRWYWx1ZTogZnVuY3Rpb24ob2JqLCB2YWx1ZSkge1xuICAgICAgICAgIGlmICghb2JqLmNob2ljZXNCeVVybCkge1xuICAgICAgICAgICAgb2JqLmNob2ljZXNCeVVybCA9IG5ldyBTdXJ2ZXkuQ2hvaWNlc1Jlc3RmdWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9iai5jaG9pY2VzQnlVcmwuc2V0RGF0YSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwiaW5wdXRcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJpbnB1dFwiKTtcbiAgICAgICRlbC5wYXJlbnRzKFwiLnN2X3FzdG5cIilbMF0uc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBkYXRhOiAocXVlc3Rpb24uY2hvaWNlcyB8fCBbXSkubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbS50ZXh0O1xuICAgICAgICB9KSxcbiAgICAgICAgYWRqdXN0V2lkdGg6IGZhbHNlLFxuICAgICAgICBsaXN0OiB7XG4gICAgICAgICAgc29ydDoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlaG9sZGVyOiBxdWVzdGlvbi5wbGFjZWhvbGRlclxuICAgICAgfTtcbiAgICAgIGlmICghIXF1ZXN0aW9uLmNob2ljZXNCeVVybCkge1xuICAgICAgICBvcHRpb25zLnVybCA9IGZ1bmN0aW9uKHBocmFzZSkge1xuICAgICAgICAgIHJldHVybiBxdWVzdGlvbi5jaG9pY2VzQnlVcmwudXJsO1xuICAgICAgICB9O1xuICAgICAgICBvcHRpb25zLmdldFZhbHVlID0gcXVlc3Rpb24uY2hvaWNlc0J5VXJsLnZhbHVlTmFtZTtcbiAgICAgICAgLy8gb3B0aW9ucy5hamF4U2V0dGluZ3MgPSB7XG4gICAgICAgIC8vICAgZGF0YVR5cGU6IFwianNvbnBcIlxuICAgICAgICAvLyB9O1xuICAgICAgfVxuICAgICAgJGVsLmVhc3lBdXRvY29tcGxldGUob3B0aW9ucyk7XG5cbiAgICAgICRlbFswXS5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHF1ZXN0aW9uLmN1c3RvbVdpZGdldERhdGEuaXNOZWVkUmVuZGVyID0gdHJ1ZTtcbiAgICAgIH07XG4gICAgICB2YXIgdXBkYXRlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkZWxbMF0udmFsdWUgPVxuICAgICAgICAgIHR5cGVvZiBxdWVzdGlvbi52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiXCIgOiBxdWVzdGlvbi52YWx1ZTtcbiAgICAgIH07XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZUhhbmRsZXI7XG4gICAgICB1cGRhdGVIYW5kbGVyKCk7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICAvLyB2YXIgJGVsID0gJChlbCkuZmluZChcImlucHV0XCIpO1xuICAgICAgLy8gJGVsLmF1dG9jb21wbGV0ZShcImRlc3Ryb3lcIik7XG4gICAgfVxuICB9O1xuXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwidHlwZVwiKTtcbn1cblxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaW5pdChTdXJ2ZXksIHdpbmRvdy4kKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Vhc3ktYXV0b2NvbXBsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTMiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xuICB2YXIgd2lkZ2V0ID0ge1xuICAgIHNldHRpbmdzOiB7XG4gICAgICBzdXBwb3J0ZWRUeXBlczogW1wicmFkaW9ncm91cFwiLCBcImNoZWNrYm94XCIsIFwiYm9vbGVhblwiXSxcbiAgICAgIHJhZGlvZ3JvdXA6IHtcbiAgICAgICAgcm9vdENsYXNzOiBcInByZXR0eSBwLWRlZmF1bHQgcC1yb3VuZFwiLFxuICAgICAgICBpbnB1dFR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgc3RhdGVzOiBbeyBzdGF0ZUNsYXNzOiBcInN0YXRlIHAtc3VjY2Vzc1wiLCBhZGRPbjogXCJcIiB9XVxuICAgICAgfSxcbiAgICAgIGNoZWNrYm94OiB7XG4gICAgICAgIHJvb3RDbGFzczogXCJwcmV0dHkgcC1kZWZhdWx0XCIsXG4gICAgICAgIGlucHV0VHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICBzdGF0ZXM6IFt7IHN0YXRlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzXCIsIGFkZE9uOiBcIlwiIH1dXG4gICAgICB9LFxuICAgICAgYm9vbGVhbjoge1xuICAgICAgICByb290Q2xhc3M6IFwicHJldHR5IHAtaWNvbiBwLWRlZmF1bHQgcC1oYXMtaW5kZXRlcm1pbmF0ZVwiLFxuICAgICAgICBpbnB1dFR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgc3RhdGVzOiBbXG4gICAgICAgICAgeyBzdGF0ZUNsYXNzOiBcInN0YXRlIHAtc3VjY2Vzc1wiLCBhZGRPbjogXCJcIiB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzIHAtaXMtaW5kZXRlcm1pbmF0ZVwiLFxuICAgICAgICAgICAgaWNvbkNsYXNzOiBcImljb24gbWRpIG1kaS1taW51c1wiLFxuICAgICAgICAgICAgYWRkT246IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIG5hbWU6IFwicHJldHR5LWNoZWNrYm94XCIsXG4gICAgYWN0aXZhdGVkQnk6IFwicHJvcGVydHlcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGh0bWxUZW1wbGF0ZTogXCI8ZmllbGRzZXQ+PC9maWVsZHNldD5cIixcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgIHZhciBpc0ZpdEJ5VHlwZSA9XG4gICAgICAgIHdpZGdldC5zZXR0aW5ncy5zdXBwb3J0ZWRUeXBlcy5pbmRleE9mKHF1ZXN0aW9uLmdldFR5cGUoKSkgIT09IC0xO1xuXG4gICAgICBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09PSBcInByb3BlcnR5XCIpIHtcbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9uW1wicmVuZGVyQXNcIl0gPT09IFwicHJldHR5Y2hlY2tib3hcIiAmJiBpc0ZpdEJ5VHlwZTtcbiAgICAgIH0gZWxzZSBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09PSBcInR5cGVcIikge1xuICAgICAgICByZXR1cm4gaXNGaXRCeVR5cGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLndpZGdldElzTG9hZGVkKCkpIHtcbiAgICAgICAgd2lkZ2V0LmFjdGl2YXRlZEJ5ID0gdmFsdWU7XG4gICAgICAgIHdpZGdldC5zZXR0aW5ncy5zdXBwb3J0ZWRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHN1cHBvcnRlZFR5cGUpIHtcbiAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5yZW1vdmVQcm9wZXJ0eShzdXBwb3J0ZWRUeXBlLCBcInJlbmRlckFzXCIpO1xuXG4gICAgICAgICAgaWYgKHZhbHVlID09PSBcInByb3BlcnR5XCIpIHtcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KHN1cHBvcnRlZFR5cGUsIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJyZW5kZXJBc1wiLFxuICAgICAgICAgICAgICBkZWZhdWx0OiBcInN0YW5kYXJkXCIsXG4gICAgICAgICAgICAgIGNob2ljZXM6IFtcInN0YW5kYXJkXCIsIFwicHJldHR5Y2hlY2tib3hcIl1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpc0RlZmF1bHRSZW5kZXI6IGZhbHNlLFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWxlbWVudCkge1xuICAgICAgdmFyIGl0ZW1JbnB1dHMgPSB7fTtcbiAgICAgIHZhciBxdWVzdGlvblR5cGUgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMuc2V0dGluZ3NbcXVlc3Rpb25UeXBlXTtcbiAgICAgIHZhciBjaGVja2JveFR5cGUgPSBxdWVzdGlvblR5cGUgPT09IFwiY2hlY2tib3hcIjtcbiAgICAgIHZhciByYWRpb2dyb3VwVHlwZSA9IHF1ZXN0aW9uVHlwZSA9PT0gXCJyYWRpb2dyb3VwXCI7XG4gICAgICB2YXIgYm9vbGVhblR5cGUgPSBxdWVzdGlvblR5cGUgPT09IFwiYm9vbGVhblwiO1xuXG4gICAgICB2YXIgaW5DaGFuZ2VIYW5kbGVyID0gZmFsc2U7XG4gICAgICB2YXIgY2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGluQ2hhbmdlSGFuZGxlciA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIHRhcmdldCA9IGFyZ3VtZW50c1swXS50YXJnZXQ7XG4gICAgICAgICAgdmFyIHRhcmdldFZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgICAgICAgIHZhciB0YXJnZXRDaGVja2VkID0gdGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICAgICAgICBpZiAoY2hlY2tib3hUeXBlKSB7XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb25WYWx1ZSA9IHF1ZXN0aW9uLmNyZWF0ZVZhbHVlQ29weSgpIHx8IFtdO1xuICAgICAgICAgICAgdmFyIHZhbHVlSW5kZXggPSBxdWVzdGlvblZhbHVlLmluZGV4T2YodGFyZ2V0VmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRhcmdldENoZWNrZWQpIHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcXVlc3Rpb25WYWx1ZS5wdXNoKHRhcmdldFZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcXVlc3Rpb25WYWx1ZS5zcGxpY2UodmFsdWVJbmRleCwgMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBxdWVzdGlvblZhbHVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmFkaW9ncm91cFR5cGUpIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gdGFyZ2V0VmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gdGFyZ2V0Q2hlY2tlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaW5DaGFuZ2VIYW5kbGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBpdGVtV2lkdGggPVxuICAgICAgICBxdWVzdGlvbi5jb2xDb3VudCA+IDAgPyAxMDAgLyBxdWVzdGlvbi5jb2xDb3VudCArIFwiJVwiIDogXCJcIjtcblxuICAgICAgdmFyIGNob2ljZXMgPSBib29sZWFuVHlwZVxuICAgICAgICA/IFt7IGxvY1RleHQ6IHF1ZXN0aW9uLmxvY1RpdGxlLCB2YWx1ZTogISFxdWVzdGlvbi52YWx1ZSB9XVxuICAgICAgICA6IHF1ZXN0aW9uLmNob2ljZXM7XG4gICAgICBjaG9pY2VzLmZvckVhY2goZnVuY3Rpb24oY2hvaWNlSXRlbSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dC50eXBlID0gb3B0aW9ucy5pbnB1dFR5cGU7XG4gICAgICAgIGlucHV0Lm5hbWUgPSBxdWVzdGlvbi5uYW1lICsgKGNoZWNrYm94VHlwZSA/IFwiXCIgKyBpbmRleCA6IFwiXCIpO1xuICAgICAgICBpbnB1dC5vbmNoYW5nZSA9IGNoYW5nZUhhbmRsZXI7XG4gICAgICAgIGlucHV0LnZhbHVlID0gY2hvaWNlSXRlbS52YWx1ZTtcblxuICAgICAgICBpZiAoYm9vbGVhblR5cGUpIHtcbiAgICAgICAgICBpbnB1dC5pbmRldGVybWluYXRlID0gcXVlc3Rpb24uZGVmYXVsdFZhbHVlID09PSBcImluZGV0ZXJtaW5hdGVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb250cm9sUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRyb2xSb290LmNsYXNzTmFtZSA9IG9wdGlvbnMucm9vdENsYXNzO1xuICAgICAgICBjb250cm9sUm9vdC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICAgICAgb3B0aW9ucy5zdGF0ZXMuZm9yRWFjaChmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgIHZhciBzdGF0ZVJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHN0YXRlUm9vdC5jbGFzc05hbWUgPSBzdGF0ZS5zdGF0ZUNsYXNzO1xuICAgICAgICAgIGlmICghIXN0YXRlLmljb25DbGFzcykge1xuICAgICAgICAgICAgdmFyIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgICAgIGljb24uY2xhc3NOYW1lID0gc3RhdGUuaWNvbkNsYXNzO1xuICAgICAgICAgICAgc3RhdGVSb290LmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICBpZiAoY2hvaWNlSXRlbS5sb2NUZXh0Lmhhc0h0bWwpIHtcbiAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGNob2ljZUl0ZW0ubG9jVGV4dC5odG1sO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNob2ljZUl0ZW0ubG9jVGV4dC50ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0ZVJvb3QuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgICAgICAgY29udHJvbFJvb3QuYXBwZW5kQ2hpbGQoc3RhdGVSb290KTtcbiAgICAgICAgICBpZiAoISFzdGF0ZS5hZGRPbikge1xuICAgICAgICAgICAgc3RhdGVSb290Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgc3RhdGUuYWRkT24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGl0ZW1Sb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaXRlbVJvb3QuY2xhc3NOYW1lID0gXCJzdl9jd19wcmV0dHlfY2hlY2tib3hfXCIgKyBxdWVzdGlvblR5cGU7XG4gICAgICAgIGl0ZW1Sb290LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICBpdGVtUm9vdC5zdHlsZS53aWR0aCA9IGl0ZW1XaWR0aDtcbiAgICAgICAgaXRlbVJvb3QuYXBwZW5kQ2hpbGQoY29udHJvbFJvb3QpO1xuXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbVJvb3QpO1xuXG4gICAgICAgIGl0ZW1JbnB1dHNbY2hvaWNlSXRlbS52YWx1ZV0gPSBpbnB1dDtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKCFpbkNoYW5nZUhhbmRsZXIpIHtcbiAgICAgICAgICB2YXIgY2hlY2tlZEl0ZW1zID0gbmV3VmFsdWUgfHwgW107XG4gICAgICAgICAgaWYgKHJhZGlvZ3JvdXBUeXBlKSB7XG4gICAgICAgICAgICBjaGVja2VkSXRlbXMgPSBbbmV3VmFsdWVdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIE9iamVjdC52YWx1ZXMoaXRlbUlucHV0cykuZm9yRWFjaChmdW5jdGlvbihpbnB1dEl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChjaGVja2VkSXRlbXMuaW5kZXhPZihpbnB1dEl0ZW0udmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICBpbnB1dEl0ZW0uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW5wdXRJdGVtLnJlbW92ZUF0dHJpYnV0ZShcImNoZWNrZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgcmVhZE9ubHlIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoaXRlbUlucHV0cykuZm9yRWFjaChmdW5jdGlvbihpbnB1dEl0ZW0pIHtcbiAgICAgICAgICBpZiAocXVlc3Rpb24uaXNSZWFkT25seSkge1xuICAgICAgICAgICAgaW5wdXRJdGVtLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dEl0ZW0ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSByZWFkT25seUhhbmRsZXI7XG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIocXVlc3Rpb24udmFsdWUpO1xuICAgICAgcmVhZE9ubHlIYW5kbGVyKCk7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVuZGVmaW5lZDtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcInByb3BlcnR5XCIpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wcmV0dHktY2hlY2tib3guanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA5IiwidmFyIFNsaWRlciA9IHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpO1xuXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xuICB2YXIgd2lkZ2V0ID0ge1xuICAgIG5hbWU6IFwiYm9vdHN0cmFwc2xpZGVyXCIsXG4gICAgdGl0bGU6IFwiQm9vdHN0cmFwIFNsaWRlclwiLFxuICAgIGljb25OYW1lOiBcImljb24tYm9vdHN0cmFwLXNsaWRlclwiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgU2xpZGVyICE9PSBcInVuZGVmaW5lZFwiO1xuICAgIH0sXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImJvb3RzdHJhcHNsaWRlclwiO1xuICAgIH0sXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJib290c3RyYXBzbGlkZXJcIiwgW10sIG51bGwsIFwiZW1wdHlcIik7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwiYm9vdHN0cmFwc2xpZGVyXCIsIFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic3RlcDpudW1iZXJcIixcbiAgICAgICAgICBkZWZhdWx0OiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJhbmdlTWluOm51bWJlclwiLFxuICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicmFuZ2VNYXg6bnVtYmVyXCIsXG4gICAgICAgICAgZGVmYXVsdDogMTAwXG4gICAgICAgIH1cbiAgICAgIF0pO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJib290c3RyYXBzbGlkZXJcIiwge1xuICAgICAgICBuYW1lOiBcImNvbmZpZ1wiLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciBpbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgaW5wdXRFbC5pZCA9IHF1ZXN0aW9uLmlkO1xuICAgICAgaW5wdXRFbC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVyLWlkXCIsIHF1ZXN0aW9uLm5hbWUgKyBcIl9cIiArIHF1ZXN0aW9uLmlkKTtcbiAgICAgIGlucHV0RWwuc2V0QXR0cmlidXRlKFwiZGF0YS1zbGlkZXItbWluXCIsIHF1ZXN0aW9uLnJhbmdlTWluKTtcbiAgICAgIGlucHV0RWwuc2V0QXR0cmlidXRlKFwiZGF0YS1zbGlkZXItbWF4XCIsIHF1ZXN0aW9uLnJhbmdlTWF4KTtcbiAgICAgIGlucHV0RWwuc2V0QXR0cmlidXRlKFwiZGF0YS1zbGlkZXItc3RlcFwiLCBxdWVzdGlvbi5zdGVwKTtcbiAgICAgIGlucHV0RWwuc2V0QXR0cmlidXRlKFxuICAgICAgICBcImRhdGEtc2xpZGVyLXZhbHVlXCIsXG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlIHx8IHF1ZXN0aW9uLnJhbmdlTWluXG4gICAgICApO1xuICAgICAgZWwuYXBwZW5kQ2hpbGQoaW5wdXRFbCk7XG5cbiAgICAgIHZhciBjb25maWcgPSBxdWVzdGlvbi5jb25maWcgfHwge307XG5cbiAgICAgIGlmIChjb25maWcuaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25maWcuaWQgPSBxdWVzdGlvbi5uYW1lICsgXCJfXCIgKyBxdWVzdGlvbi5pZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5taW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25maWcubWluID0gcXVlc3Rpb24ucmFuZ2VNaW47XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcubWF4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnLm1heCA9IHF1ZXN0aW9uLnJhbmdlTWF4O1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLnN0ZXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25maWcuc3RlcCA9IHF1ZXN0aW9uLnN0ZXA7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbmZpZy5lbmFibGVkID0gIXF1ZXN0aW9uLmlzUmVhZE9ubHk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25maWcudmFsdWUgPSBxdWVzdGlvbi52YWx1ZSB8fCBxdWVzdGlvbi5yYW5nZU1pbjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNsaWRlciA9IG5ldyBTbGlkZXIoaW5wdXRFbCwgY29uZmlnKTtcblxuICAgICAgc2xpZGVyLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKHZhbHVlT2JqKSB7XG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gc2xpZGVyLmdldFZhbHVlKCk7XG4gICAgICB9KTtcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2xpZGVyLnNldFZhbHVlKHF1ZXN0aW9uLnZhbHVlIHx8IHF1ZXN0aW9uLnJhbmdlTWluKTtcbiAgICAgIH07XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAocXVlc3Rpb24uaXNSZWFkT25seSkge1xuICAgICAgICAgIHNsaWRlci5kaXNhYmxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGVyLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcXVlc3Rpb24uYm9vdHN0cmFwU2xpZGVyID0gc2xpZGVyO1xuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICBxdWVzdGlvbi5ib290c3RyYXBTbGlkZXIuZGVzdHJveSgpO1xuICAgICAgcXVlc3Rpb24uYm9vdHN0cmFwU2xpZGVyID0gbnVsbDtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ib290c3RyYXAtc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJib290c3RyYXAtc2xpZGVyXCIsXCJjb21tb25qc1wiOlwiYm9vdHN0cmFwLXNsaWRlclwiLFwiYW1kXCI6XCJib290c3RyYXAtc2xpZGVyXCJ9XG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsImltcG9ydCBSZWNvcmRSVEMgZnJvbSBcInJlY29yZHJ0Y1wiO1xuXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xuICB2YXIgd2lkZ2V0ID0ge1xuXHRcbiAgICBuYW1lOiBcIm1pY3JvcGhvbmVcIixcbiAgICB0aXRsZTogXCJNaWNyb3Bob25lXCIsXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1taWNyb3Bob25lXCIsXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBSZWNvcmRSVEMgIT0gXCJ1bmRlZmluZWRcIjtcbiAgICB9LFxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJtaWNyb3Bob25lXCI7XG4gICAgfSxcbiAgICBodG1sVGVtcGxhdGU6XG5cdFx0XCI8ZGl2PlwiK1xuXHRcdFwiPGJ1dHRvbiB0eXBlPSdidXR0b24nICB0aXRsZT0nUmVjb3JkJz48aSBjbGFzcz0nZmEgZmEtbWljcm9waG9uZScgYXJpYS1oaWRkZW49J3RydWUnPjwvaT48L2J1dHRvbj5cIisgXG5cdFx0XCImbmJzcDs8YnV0dG9uIHR5cGU9J2J1dHRvbicgdGl0bGU9J1NhdmUnPjxpIGNsYXNzPSdmYSBmYS1jbG91ZCcgYXJpYS1oaWRkZW49J3RydWUnPjwvaT48L2J1dHRvbj5cIitcblx0XHRcIiZuYnNwOzxhdWRpbyBzdHlsZT0nXCIrXG5cdFx0XCJwb3NpdGlvbjpyZWxhdGl2ZTsgXCIrXG5cdFx0XCJ0b3A6MTZweDsgXCIrXG5cdFx0XCJsZWZ0OjEwcHg7IFwiK1xuXHRcdFwiaGVpZ2h0OjM1cHg7XCIrXG5cdFx0XCItbW96LWJveC1zaGFkb3c6IDJweCAycHggNHB4IDBweCAjMDA2NzczO1wiK1xuXHRcdFwiLXdlYmtpdC1ib3gtc2hhZG93OiAgMnB4IDJweCA0cHggMHB4ICMwMDY3NzM7XCIrXG5cdFx0XCJib3gtc2hhZG93OiAycHggMnB4IDRweCAwcHggIzAwNjc3MztcIitcblx0XHRcIicgXCIrXG5cdFx0XCJjb250cm9scz0ndHJ1ZScgPlwiK1xuXHRcdFwiPC9hdWRpbz5cIitcblx0XHRcIjwvZGl2PlwiLFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibWljcm9waG9uZVwiLCBbXSwgbnVsbCwgXCJlbXB0eVwiKTtcbiAgICB9LFxuXHRcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICB2YXIgcm9vdFdpZGdldCA9IHRoaXM7XG5cdCAgdmFyIGJ1dHRvblN0YXJ0RWwgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJ1dHRvblwiKVswXTtcblx0ICB2YXIgYnV0dG9uU3RvcEVsID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJidXR0b25cIilbMV07XG5cdCAgdmFyIGF1ZGlvRWwgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImF1ZGlvXCIpWzBdO1xuXHQgXG4vLy8vLy8vLy8vICBSZWNvcmRSVEMgbG9naWNcdFxuXHQgIFxuXHQgIHZhciBzdWNjZXNzQ2FsbGJhY2sgPSBmdW5jdGlvbihzdHJlYW0pIHtcblx0XHR2YXIgb3B0aW9ucz17XG5cdFx0XHR0eXBlOiAnYXVkaW8nLFxuXHRcdFx0bWltZVR5cGU6ICdhdWRpby93ZWJtJyxcblx0XHRcdGF1ZGlvQml0c1BlclNlY29uZDogNDQxMDAsXG5cdFx0XHRzYW1wbGVSYXRlOiA0NDEwMCwgXG5cdFx0XHRidWZmZXJTaXplOiAxNjM4NCwgXG5cdFx0XHRudW1iZXJPZkF1ZGlvQ2hhbm5lbHM6IDFcblx0XHR9OyAgXG5cdFx0Y29uc29sZS5sb2coXCJzdWNjZXNzQ2FsbGJhY2tcIik7XG5cdFx0cXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtID0gc3RyZWFtO1xuXHRcdHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEMgPSBSZWNvcmRSVEMocXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtLCBvcHRpb25zKTtcblx0XHRpZih0eXBlb2YgcXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQyAhPSBcInVuZGVmaW5lZFwiKXtcblx0XHRcdGNvbnNvbGUubG9nKFwic3RhcnRSZWNvcmRpbmdcIik7XG5cdFx0XHRxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDLnN0YXJ0UmVjb3JkaW5nKCk7XG5cdFx0fVxuXHQgIH07XG5cblx0ICB2YXIgZXJyb3JDYWxsYmFjaz1mdW5jdGlvbigpIHtcblx0XHRhbGVydCgnTm8gbWljcm9waG9uZScpO1xuXHRcdHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEM9dW5kZWZpbmVkO1xuXHRcdHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbT11bmRlZmluZWQ7XG5cdCAgfTtcblxuXHQgIHZhciBwcm9jZXNzQXVkaW89IGZ1bmN0aW9uKGF1ZGlvVmlkZW9XZWJNVVJMKSB7XG5cdFx0Y29uc29sZS5sb2coXCJwcm9jZXNzQXVkaW9cIik7XG5cdFx0dmFyIHJlY29yZGVkQmxvYiA9IHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEMuZ2V0QmxvYigpO1xuXHRcdFxuXHRcdHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCl7XG5cdFx0ICB2YXIgZGF0YVVyaSA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cdFx0ICBjb25zb2xlLmxvZyhcImRhdGFVcmk6IFwiICtkYXRhVXJpKTtcblx0XHQgIHF1ZXN0aW9uLnZhbHVlID0gZGF0YVVyaTtcblx0XHQgIGF1ZGlvRWwuc3JjPWRhdGFVcmk7XG5cdFx0ICBcblx0XHQgIGNvbnNvbGUubG9nKFwiY2xlYW5pbmdcIik7XG5cdFx0ICBxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDPXVuZGVmaW5lZDtcblx0XHQgIHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbT11bmRlZmluZWQ7XG4gICAgICAgIH07XG4gICAgICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChyZWNvcmRlZEJsb2IpO1xuXHQgIH07XG5cbiAgICAgIHZhciBzdGFydFJlY29yZGluZz1mdW5jdGlvbigpIHtcblx0XHQgIFxuXHRcdCAvLyBlcmFzZSBwcmV2aW91cyBkYXRhIFxuXHRcdCBxdWVzdGlvbi52YWx1ZT11bmRlZmluZWQ7XG5cdFx0XG4gICAgICAgXHQvLyBpZiByZWNvcmRlciBvcGVuIG9uIGFub3RoZXIgcXVlc3Rpb25cdC0gdHJ5IHRvIHN0b3AgcmVjb3JkaW5nXHRcdFxuXHRcdGlmKHR5cGVvZiBxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDICE9IFwidW5kZWZpbmVkXCIpe1xuXHRcdFx0cXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQy5zdG9wUmVjb3JkaW5nKGRvTm90aGluZ0hhbmRsZXIpO1xuXHRcdFx0aWYodHlwZW9mIHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbSAhPSBcInVuZGVmaW5lZFwiKXtcblx0XHRcdFx0cXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuXHRcdFx0XHR0cmFjay5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XHQgXG5cdFx0dmFyIG1lZGlhQ29uc3RyYWludHMgPSB7XG5cdFx0ICB2aWRlbzogZmFsc2UsXG5cdFx0ICBhdWRpbzogdHJ1ZVxuXHRcdH07XG5cdFx0XG5cdFx0bmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuXHRcdFx0LmdldFVzZXJNZWRpYShtZWRpYUNvbnN0cmFpbnRzKVxuXHRcdFx0LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLmJpbmQodGhpcyksIGVycm9yQ2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgIH07XG5cblx0ICB2YXIgc3RvcFJlY29yZGluZz1mdW5jdGlvbigpIHtcblx0XHQgIGNvbnNvbGUubG9nKFwic3RvcFJlY29yZGluZ1wiKTtcblx0XHQgIGlmKHR5cGVvZiBxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDICE9IFwidW5kZWZpbmVkXCIpe1xuXHRcdFx0cXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQy5zdG9wUmVjb3JkaW5nKHByb2Nlc3NBdWRpby5iaW5kKHRoaXMpKTtcblx0XHRcdGlmKHR5cGVvZiBxdWVzdGlvbi5zdXJ2ZXkubXlzdHJlYW0gIT0gXCJ1bmRlZmluZWRcIil7XG5cdFx0XHRcdHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcblx0XHRcdFx0dHJhY2suc3RvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0ICB9XG5cdCAgfTtcblx0XG4vLy8vLy8vLy8vLy8vLyAgZW5kIFJUQyBsb2dpYyAvLy8vLy8vLy8vLy8vLy8vLy9cblx0ICBcblx0ICBpZiAoIXF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcbiAgICAgICAgYnV0dG9uU3RhcnRFbC5vbmNsaWNrID0gc3RhcnRSZWNvcmRpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b25TdGFydEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYnV0dG9uU3RhcnRFbCk7XG4gICAgICB9XG5cdCAgXG5cdCAgaWYgKCFxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XG4gICAgICAgIGJ1dHRvblN0b3BFbC5vbmNsaWNrID0gc3RvcFJlY29yZGluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvblN0b3BFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJ1dHRvblN0b3BFbCk7XG4gICAgICB9XG5cdCAgXG5cdCAgXG4gICAgICBhdWRpb0VsLnNyYz1xdWVzdGlvbi52YWx1ZVxuICAgICAgXG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIFxuICAgICAgfTtcblx0ICBcblx0ICB2YXIgZG9Ob3RoaW5nSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgIH07XG5cdCAgXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcbiAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xuXHQgIFxuICAgICBcbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidW5tb3VudCBtaWNyb3Bob25lIG5vIHJlY29yZCBcIik7XG4gICAgICBpZih0eXBlb2YgcXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQyAhPSBcInVuZGVmaW5lZFwiKXtcblx0XHRcdHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEMuc3RvcFJlY29yZGluZyhkb05vdGhpbmdIYW5kbGVyKTtcblx0XHRcdGlmKHR5cGVvZiBxdWVzdGlvbi5zdXJ2ZXkubXlzdHJlYW0gIT0gXCJ1bmRlZmluZWRcIil7XG5cdFx0XHRcdHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcblx0XHRcdFx0dHJhY2suc3RvcCgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRxdWVzdGlvbi52YWx1ZT11bmRlZmluZWQ7XG5cdFx0cXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQz11bmRlZmluZWQ7XG5cdFx0cXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtPXVuZGVmaW5lZDtcblx0ICAgfVxuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21pY3JvcGhvbmUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gTGFzdCB0aW1lIHVwZGF0ZWQ6IDIwMTktMDItMDYgMTE6MzI6NDAgQU0gVVRDXHJcblxyXG4vLyBfX19fX19fX19fX19fX19fXHJcbi8vIFJlY29yZFJUQyB2NS41LjRcclxuXHJcbi8vIE9wZW4tU291cmNlZDogaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVENcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE11YXogS2hhbiAgICAgLSB3d3cuTXVhektoYW4uY29tXHJcbi8vIE1JVCBMaWNlbnNlICAgLSB3d3cuV2ViUlRDLUV4cGVyaW1lbnQuY29tL2xpY2VuY2VcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIF9fX19fX19fX19fX1xyXG4vLyBSZWNvcmRSVEMuanNcclxuXHJcbi8qKlxyXG4gKiB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDfSBpcyBhIFdlYlJUQyBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGF1ZGlvL3ZpZGVvIGFzIHdlbGwgYXMgc2NyZWVuIGFjdGl2aXR5IHJlY29yZGluZy4gSXQgc3VwcG9ydHMgQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgQW5kcm9pZCwgYW5kIE1pY3Jvc29mdCBFZGdlLiBQbGF0Zm9ybXM6IExpbnV4LCBNYWMgYW5kIFdpbmRvd3MuIFxyXG4gKiBAc3VtbWFyeSBSZWNvcmQgYXVkaW8sIHZpZGVvIG9yIHNjcmVlbiBpbnNpZGUgdGhlIGJyb3dzZXIuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAdHlwZWRlZiBSZWNvcmRSVENcclxuICogQGNsYXNzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciByZWNvcmRlciA9IFJlY29yZFJUQyhtZWRpYVN0cmVhbSBvciBbYXJyYXlPZk1lZGlhU3RyZWFtXSwge1xyXG4gKiAgICAgdHlwZTogJ3ZpZGVvJywgLy8gYXVkaW8gb3IgdmlkZW8gb3IgZ2lmIG9yIGNhbnZhc1xyXG4gKiAgICAgcmVjb3JkZXJUeXBlOiBNZWRpYVN0cmVhbVJlY29yZGVyIHx8IENhbnZhc1JlY29yZGVyIHx8IFN0ZXJlb0F1ZGlvUmVjb3JkZXIgfHwgRXRjXHJcbiAqIH0pO1xyXG4gKiByZWNvcmRlci5zdGFydFJlY29yZGluZygpO1xyXG4gKiBAc2VlIEZvciBmdXJ0aGVyIGluZm9ybWF0aW9uOlxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIC0gU2luZ2xlIG1lZGlhLXN0cmVhbSBvYmplY3QsIGFycmF5IG9mIG1lZGlhLXN0cmVhbXMsIGh0bWwtY2FudmFzLWVsZW1lbnQsIGV0Yy5cclxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIHt0eXBlOlwidmlkZW9cIiwgcmVjb3JkZXJUeXBlOiBNZWRpYVN0cmVhbVJlY29yZGVyLCBkaXNhYmxlTG9nczogdHJ1ZSwgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzOiAxLCBidWZmZXJTaXplOiAwLCBzYW1wbGVSYXRlOiAwLCBkZXNpcmVkU2FtcFJhdGU6IDE2MDAwLCB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCwgZXRjLn1cclxuICovXHJcblxyXG5mdW5jdGlvbiBSZWNvcmRSVEMobWVkaWFTdHJlYW0sIGNvbmZpZykge1xyXG4gICAgaWYgKCFtZWRpYVN0cmVhbSkge1xyXG4gICAgICAgIHRocm93ICdGaXJzdCBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQuJztcclxuICAgIH1cclxuXHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge1xyXG4gICAgICAgIHR5cGU6ICd2aWRlbydcclxuICAgIH07XHJcblxyXG4gICAgY29uZmlnID0gbmV3IFJlY29yZFJUQ0NvbmZpZ3VyYXRpb24obWVkaWFTdHJlYW0sIGNvbmZpZyk7XHJcblxyXG4gICAgLy8gYSByZWZlcmVuY2UgdG8gdXNlcidzIHJlY29yZFJUQyBvYmplY3RcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydFJlY29yZGluZyhjb25maWcyKSB7XHJcbiAgICAgICAgaWYgKCEhY29uZmlnMikge1xyXG4gICAgICAgICAgICAvLyBhbGxvdyB1c2VycyB0byBzZXQgb3B0aW9ucyB1c2luZyBzdGFydFJlY29yZGluZyBtZXRob2RcclxuICAgICAgICAgICAgLy8gY29uZmlnMiBpcyBzaW1pbGFyIHRvIG1haW4gXCJjb25maWdcIiBvYmplY3QgKHNlY29uZCBwYXJhbWV0ZXIgb3ZlciBSZWNvcmRSVEMgY29uc3RydWN0b3IpXHJcbiAgICAgICAgICAgIGNvbmZpZyA9IG5ldyBSZWNvcmRSVENDb25maWd1cmF0aW9uKG1lZGlhU3RyZWFtLCBjb25maWcyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGVkIHJlY29yZGluZyAnICsgY29uZmlnLnR5cGUgKyAnIHN0cmVhbS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIuY2xlYXJSZWNvcmRlZERhdGEoKTtcclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5yZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIHNldFN0YXRlKCdyZWNvcmRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLnJlY29yZGluZ0R1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVSZWNvcmRpbmdEdXJhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdFJlY29yZGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5yZWNvcmRpbmdEdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlUmVjb3JkaW5nRHVyYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0UmVjb3JkZXIoaW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGluaXRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjb25maWcuaW5pdENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpbml0Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIGluaXRDYWxsYmFjayA9IGNvbmZpZy5pbml0Q2FsbGJhY2sgPSBudWxsOyAvLyByZWNvcmRlci5pbml0UmVjb3JkZXIgc2hvdWxkIGJlIGNhbGwtYmFja2VkIG9uY2UuXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgUmVjb3JkZXIgPSBuZXcgR2V0UmVjb3JkZXJUeXBlKG1lZGlhU3RyZWFtLCBjb25maWcpO1xyXG5cclxuICAgICAgICBtZWRpYVJlY29yZGVyID0gbmV3IFJlY29yZGVyKG1lZGlhU3RyZWFtLCBjb25maWcpO1xyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIucmVjb3JkKCk7XHJcblxyXG4gICAgICAgIHNldFN0YXRlKCdyZWNvcmRpbmcnKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0luaXRpYWxpemVkIHJlY29yZGVyVHlwZTonLCBtZWRpYVJlY29yZGVyLmNvbnN0cnVjdG9yLm5hbWUsICdmb3Igb3V0cHV0LXR5cGU6JywgY29uZmlnLnR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdG9wUmVjb3JkaW5nKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG5cclxuICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gJ3BhdXNlZCcpIHtcclxuICAgICAgICAgICAgc2VsZi5yZXN1bWVSZWNvcmRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9wUmVjb3JkaW5nKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxmLnN0YXRlICE9PSAncmVjb3JkaW5nJyAmJiAhY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignUmVjb3JkaW5nIHN0YXRlIHNob3VsZCBiZTogXCJyZWNvcmRpbmdcIiwgaG93ZXZlciBjdXJyZW50IHN0YXRlIGlzOiAnLCBzZWxmLnN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdG9wcGVkIHJlY29yZGluZyAnICsgY29uZmlnLnR5cGUgKyAnIHN0cmVhbS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25maWcudHlwZSAhPT0gJ2dpZicpIHtcclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKF9jYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XHJcbiAgICAgICAgICAgIF9jYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U3RhdGUoJ3N0b3BwZWQnKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gX2NhbGxiYWNrKF9fYmxvYikge1xyXG4gICAgICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2suY2FsbCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoc2VsZiwgJycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1lZGlhUmVjb3JkZXIpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lZGlhUmVjb3JkZXJba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmW2tleV0gPSBtZWRpYVJlY29yZGVyW2tleV07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIGJsb2IgPSBtZWRpYVJlY29yZGVyLmJsb2I7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJsb2IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfX2Jsb2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZWRpYVJlY29yZGVyLmJsb2IgPSBibG9iID0gX19ibG9iO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnUmVjb3JkaW5nIGZhaWxlZC4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYmxvYiAmJiAhY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhibG9iLnR5cGUsICctPicsIGJ5dGVzVG9TaXplKGJsb2Iuc2l6ZSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHZhciB1cmw7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrLmNhbGwgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHNlbGYsIHVybCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmF1dG9Xcml0ZVRvRGlzaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnZXREYXRhVVJMKGZ1bmN0aW9uKGRhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbWV0ZXIgPSB7fTtcclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcltjb25maWcudHlwZSArICdCbG9iJ10gPSBkYXRhVVJMO1xyXG4gICAgICAgICAgICAgICAgRGlza1N0b3JhZ2UuU3RvcmUocGFyYW1ldGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhdXNlUmVjb3JkaW5nKCkge1xyXG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICB3YXJuaW5nTG9nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxmLnN0YXRlICE9PSAncmVjb3JkaW5nJykge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbmFibGUgdG8gcGF1c2UgdGhlIHJlY29yZGluZy4gUmVjb3JkaW5nIHN0YXRlOiAnLCBzZWxmLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTdGF0ZSgncGF1c2VkJyk7XHJcblxyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIucGF1c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhdXNlZCByZWNvcmRpbmcuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc3VtZVJlY29yZGluZygpIHtcclxuICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5zdGF0ZSAhPT0gJ3BhdXNlZCcpIHtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIHJlc3VtZSB0aGUgcmVjb3JkaW5nLiBSZWNvcmRpbmcgc3RhdGU6ICcsIHNlbGYuc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFN0YXRlKCdyZWNvcmRpbmcnKTtcclxuXHJcbiAgICAgICAgLy8gbm90IGFsbCBsaWJzIGhhdmUgdGhpcyBtZXRob2QgeWV0XHJcbiAgICAgICAgbWVkaWFSZWNvcmRlci5yZXN1bWUoKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VtZWQgcmVjb3JkaW5nLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWFkRmlsZShfYmxvYikge1xyXG4gICAgICAgIHBvc3RNZXNzYWdlKG5ldyBGaWxlUmVhZGVyU3luYygpLnJlYWRBc0RhdGFVUkwoX2Jsb2IpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREYXRhVVJMKGNhbGxiYWNrLCBfbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhyb3cgJ1Bhc3MgYSBjYWxsYmFjayBmdW5jdGlvbiBvdmVyIGdldERhdGFVUkwuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBibG9iID0gX21lZGlhUmVjb3JkZXIgPyBfbWVkaWFSZWNvcmRlci5ibG9iIDogKG1lZGlhUmVjb3JkZXIgfHwge30pLmJsb2I7XHJcblxyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdCbG9iIGVuY29kZXIgZGlkIG5vdCBmaW5pc2ggaXRzIGpvYiB5ZXQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBnZXREYXRhVVJMKGNhbGxiYWNrLCBfbWVkaWFSZWNvcmRlcik7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcgJiYgIW5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcclxuICAgICAgICAgICAgdmFyIHdlYldvcmtlciA9IHByb2Nlc3NJbldlYldvcmtlcihyZWFkRmlsZSk7XHJcblxyXG4gICAgICAgICAgICB3ZWJXb3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgd2ViV29ya2VyLnBvc3RNZXNzYWdlKGJsb2IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudC50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NJbldlYldvcmtlcihfZnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBibG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbX2Z1bmN0aW9uLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RoaXMub25tZXNzYWdlID0gIGZ1bmN0aW9uIChlZWUpIHsnICsgX2Z1bmN0aW9uLm5hbWUgKyAnKGVlZS5kYXRhKTt9J1xyXG4gICAgICAgICAgICAgICAgXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0J1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3b3JrZXI7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlY29yZGluZ0R1cmF0aW9uKGNvdW50ZXIpIHtcclxuICAgICAgICBjb3VudGVyID0gY291bnRlciB8fCAwO1xyXG5cclxuICAgICAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gJ3BhdXNlZCcpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVJlY29yZGluZ0R1cmF0aW9uKGNvdW50ZXIpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGYuc3RhdGUgPT09ICdzdG9wcGVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY291bnRlciA+PSBzZWxmLnJlY29yZGluZ0R1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0b3BSZWNvcmRpbmcoc2VsZi5vblJlY29yZGluZ1N0b3BwZWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb3VudGVyICs9IDEwMDA7IC8vIDEtc2Vjb25kXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZVJlY29yZGluZ0R1cmF0aW9uKGNvdW50ZXIpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgaWYgKCFzZWxmKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYuc3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLm9uU3RhdGVDaGFuZ2VkLmNhbGwgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgc2VsZi5vblN0YXRlQ2hhbmdlZC5jYWxsKHNlbGYsIHN0YXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLm9uU3RhdGVDaGFuZ2VkKHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIFdBUk5JTkcgPSAnSXQgc2VlbXMgdGhhdCByZWNvcmRlciBpcyBkZXN0cm95ZWQgb3IgXCJzdGFydFJlY29yZGluZ1wiIGlzIG5vdCBpbnZva2VkIGZvciAnICsgY29uZmlnLnR5cGUgKyAnIHJlY29yZGVyLic7XHJcblxyXG4gICAgZnVuY3Rpb24gd2FybmluZ0xvZygpIHtcclxuICAgICAgICBpZiAoY29uZmlnLmRpc2FibGVMb2dzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUud2FybihXQVJOSU5HKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWVkaWFSZWNvcmRlcjtcclxuXHJcbiAgICB2YXIgcmV0dXJuT2JqZWN0ID0ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHN0YXJ0cyB0aGUgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiB2YXIgcmVjb3JkZXIgPSBSZWNvcmRSVEMobWVkaWFTdHJlYW0sIHtcclxuICAgICAgICAgKiAgICAgdHlwZTogJ3ZpZGVvJ1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqIHJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhcnRSZWNvcmRpbmc6IHN0YXJ0UmVjb3JkaW5nLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyB0aGUgcmVjb3JkaW5nLiBJdCBpcyBzdHJvbmdseSByZWNvbW1lbmRlZCB0byBnZXQgXCJibG9iXCIgb3IgXCJVUklcIiBpbnNpZGUgdGhlIGNhbGxiYWNrIHRvIG1ha2Ugc3VyZSBhbGwgcmVjb3JkZXJzIGZpbmlzaGVkIHRoZWlyIGpvYi5cclxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIHRvIGdldCB0aGUgcmVjb3JkZWQgYmxvYi5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgLy8gdXNlIGVpdGhlciBcInRoaXNcIiBvciBcInJlY29yZGVyXCIgb2JqZWN0OyBib3RoIGFyZSBpZGVudGljYWxcclxuICAgICAgICAgKiAgICAgdmlkZW8uc3JjID0gdGhpcy50b1VSTCgpO1xyXG4gICAgICAgICAqICAgICB2YXIgYmxvYiA9IHRoaXMuZ2V0QmxvYigpO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0b3BSZWNvcmRpbmc6IHN0b3BSZWNvcmRpbmcsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHBhdXNlcyB0aGUgcmVjb3JkaW5nLiBZb3UgY2FuIHJlc3VtZSByZWNvcmRpbmcgdXNpbmcgXCJyZXN1bWVSZWNvcmRpbmdcIiBtZXRob2QuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAdG9kbyBGaXJlZm94IGlzIHVuYWJsZSB0byBwYXVzZSB0aGUgcmVjb3JkaW5nLiBGaXggaXQuXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5wYXVzZVJlY29yZGluZygpOyAgLy8gcGF1c2UgdGhlIHJlY29yZGluZ1xyXG4gICAgICAgICAqIHJlY29yZGVyLnJlc3VtZVJlY29yZGluZygpOyAvLyByZXN1bWUgYWdhaW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwYXVzZVJlY29yZGluZzogcGF1c2VSZWNvcmRpbmcsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHJlc3VtZXMgdGhlIHJlY29yZGluZy5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIucGF1c2VSZWNvcmRpbmcoKTsgIC8vIGZpcnN0IG9mIGFsbCwgcGF1c2UgdGhlIHJlY29yZGluZ1xyXG4gICAgICAgICAqIHJlY29yZGVyLnJlc3VtZVJlY29yZGluZygpOyAvLyBub3cgcmVzdW1lIGl0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVzdW1lUmVjb3JkaW5nOiByZXN1bWVSZWNvcmRpbmcsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGluaXRpYWxpemVzIHRoZSByZWNvcmRpbmcuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAdG9kbyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgZGVwcmVjYXRlZC5cclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLmluaXRSZWNvcmRlcigpO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGluaXRSZWNvcmRlcjogaW5pdFJlY29yZGVyLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBc2sgUmVjb3JkUlRDIHRvIGF1dG8tc3RvcCB0aGUgcmVjb3JkaW5nIGFmdGVyIDUgbWludXRlcy5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogdmFyIGZpdmVNaW51dGVzID0gNSAqIDEwMDAgKiA2MDtcclxuICAgICAgICAgKiByZWNvcmRlci5zZXRSZWNvcmRpbmdEdXJhdGlvbihmaXZlTWludXRlcywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICogICAgdmFyIGJsb2IgPSB0aGlzLmdldEJsb2IoKTtcclxuICAgICAgICAgKiAgICB2aWRlby5zcmMgPSB0aGlzLnRvVVJMKCk7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogLy8gb3Igb3RoZXJ3aXNlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc2V0UmVjb3JkaW5nRHVyYXRpb24oZml2ZU1pbnV0ZXMpLm9uUmVjb3JkaW5nU3RvcHBlZChmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICB2YXIgYmxvYiA9IHRoaXMuZ2V0QmxvYigpO1xyXG4gICAgICAgICAqICAgIHZpZGVvLnNyYyA9IHRoaXMudG9VUkwoKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbjogZnVuY3Rpb24ocmVjb3JkaW5nRHVyYXRpb24sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVjb3JkaW5nRHVyYXRpb24gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAncmVjb3JkaW5nRHVyYXRpb24gaXMgcmVxdWlyZWQuJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZWNvcmRpbmdEdXJhdGlvbiAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdyZWNvcmRpbmdEdXJhdGlvbiBtdXN0IGJlIGEgbnVtYmVyLic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYucmVjb3JkaW5nRHVyYXRpb24gPSByZWNvcmRpbmdEdXJhdGlvbjtcclxuICAgICAgICAgICAgc2VsZi5vblJlY29yZGluZ1N0b3BwZWQgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG9uUmVjb3JkaW5nU3RvcHBlZDogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm9uUmVjb3JkaW5nU3RvcHBlZCA9IGNhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGNsZWFyL3Jlc2V0IGFsbCB0aGUgcmVjb3JkZWQgZGF0YS5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEB0b2RvIEZpZ3VyZSBvdXQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBcInJlc2V0XCIgYW5kIFwiY2xlYXJSZWNvcmRlZERhdGFcIiBtZXRob2RzLlxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuY2xlYXJSZWNvcmRlZERhdGEoKTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGVhclJlY29yZGVkRGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsZWFyZWQgb2xkIHJlY29yZGVkIGRhdGEuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgdGhlIHJlY29yZGVkIGJsb2IuIFVzZSB0aGlzIG1ldGhvZCBpbnNpZGUgdGhlIFwic3RvcFJlY29yZGluZ1wiIGNhbGxiYWNrLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAqICAgICB2YXIgYmxvYiA9IHRoaXMuZ2V0QmxvYigpO1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogICAgIHZhciBmaWxlID0gbmV3IEZpbGUoW2Jsb2JdLCAnZmlsZW5hbWUud2VibScsIHtcclxuICAgICAgICAgKiAgICAgICAgIHR5cGU6ICd2aWRlby93ZWJtJ1xyXG4gICAgICAgICAqICAgICB9KTtcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgKiAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7IC8vIHVwbG9hZCBcIkZpbGVcIiBvYmplY3QgcmF0aGVyIHRoYW4gYSBcIkJsb2JcIlxyXG4gICAgICAgICAqICAgICB1cGxvYWRUb1NlcnZlcihmb3JtRGF0YSk7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICogQHJldHVybnMge0Jsb2J9IFJldHVybnMgcmVjb3JkZWQgZGF0YSBhcyBcIkJsb2JcIiBvYmplY3QuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QmxvYjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWVkaWFSZWNvcmRlci5ibG9iO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCBkYXRhLVVSSSBpbnN0ZWFkIG9mIEJsb2IuXHJcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayB0byBnZXQgdGhlIERhdGEtVVJJLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAqICAgICByZWNvcmRlci5nZXREYXRhVVJMKGZ1bmN0aW9uKGRhdGFVUkkpIHtcclxuICAgICAgICAgKiAgICAgICAgIHZpZGVvLnNyYyA9IGRhdGFVUkk7XHJcbiAgICAgICAgICogICAgIH0pO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldERhdGFVUkw6IGdldERhdGFVUkwsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCB2aXJ0dWFsL3RlbXBvcmFyeSBVUkwuIFVzYWdlIG9mIHRoaXMgVVJMIGlzIGxpbWl0ZWQgdG8gY3VycmVudCB0YWIuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICogICAgIHZpZGVvLnNyYyA9IHRoaXMudG9VUkwoKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBSZXR1cm5zIGEgdmlydHVhbC90ZW1wb3JhcnkgVVJMIGZvciB0aGUgcmVjb3JkZWQgXCJCbG9iXCIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdG9VUkw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHdhcm5pbmdMb2coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwobWVkaWFSZWNvcmRlci5ibG9iKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgaW50ZXJuYWwgcmVjb3JkaW5nIG9iamVjdCAoaS5lLiBpbnRlcm5hbCBtb2R1bGUpIGUuZy4gTXV0bGlTdHJlYW1SZWNvcmRlciwgTWVkaWFTdHJlYW1SZWNvcmRlciwgU3RlcmVvQXVkaW9SZWNvcmRlciBvciBXaGFtbXlSZWNvcmRlciBldGMuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHZhciBpbnRlcm5hbCA9IHJlY29yZGVyLmdldEludGVybmFsUmVjb3JkZXIoKTtcclxuICAgICAgICAgKiBpZihpbnRlcm5hbCBpbnN0YW5jZW9mIE11bHRpU3RyZWFtUmVjb3JkZXIpIHtcclxuICAgICAgICAgKiAgICAgaW50ZXJuYWwuYWRkU3RyZWFtcyhbbmV3QXVkaW9TdHJlYW1dKTtcclxuICAgICAgICAgKiAgICAgaW50ZXJuYWwucmVzZXRWaWRlb1N0cmVhbXMoW3NjcmVlblN0cmVhbV0pO1xyXG4gICAgICAgICAqIH1cclxuICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGludGVybmFsIHJlY29yZGluZyBvYmplY3QuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0SW50ZXJuYWxSZWNvcmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZWRpYVJlY29yZGVyO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludm9rZSBzYXZlLWFzIGRpYWxvZyB0byBzYXZlIHRoZSByZWNvcmRlZCBibG9iIGludG8geW91ciBkaXNrLlxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAtIFNldCB5b3VyIG93biBmaWxlIG5hbWUuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICogICAgIHRoaXMuc2F2ZSgnZmlsZS1uYW1lJyk7XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICAgLy8gb3IgbWFudWFsbHk6XHJcbiAgICAgICAgICogICAgIGludm9rZVNhdmVBc0RpYWxvZyh0aGlzLmdldEJsb2IoKSwgJ2ZpbGVuYW1lLndlYm0nKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzYXZlOiBmdW5jdGlvbihmaWxlTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHdhcm5pbmdMb2coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW52b2tlU2F2ZUFzRGlhbG9nKG1lZGlhUmVjb3JkZXIuYmxvYiwgZmlsZU5hbWUpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGdldHMgYSBibG9iIGZyb20gaW5kZXhlZC1EQiBzdG9yYWdlLlxyXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgdG8gZ2V0IHRoZSByZWNvcmRlZCBibG9iLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5nZXRGcm9tRGlzayhmdW5jdGlvbihkYXRhVVJMKSB7XHJcbiAgICAgICAgICogICAgIHZpZGVvLnNyYyA9IGRhdGFVUkw7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0RnJvbURpc2s6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBSZWNvcmRSVEMuZ2V0RnJvbURpc2soY29uZmlnLnR5cGUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBhcHBlbmRzIGFuIGFycmF5IG9mIHdlYnAgaW1hZ2VzIHRvIHRoZSByZWNvcmRlZCB2aWRlby1ibG9iLiBJdCB0YWtlcyBhbiBcImFycmF5XCIgb2JqZWN0LlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheS48QXJyYXk+fVxyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5T2ZXZWJQSW1hZ2VzIC0gQXJyYXkgb2Ygd2VicCBpbWFnZXMuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAdG9kbyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgZGVwcmVjYXRlZC5cclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHZhciBhcnJheU9mV2ViUEltYWdlcyA9IFtdO1xyXG4gICAgICAgICAqIGFycmF5T2ZXZWJQSW1hZ2VzLnB1c2goe1xyXG4gICAgICAgICAqICAgICBkdXJhdGlvbjogaW5kZXgsXHJcbiAgICAgICAgICogICAgIGltYWdlOiAnZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwuLi4nXHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICogcmVjb3JkZXIuc2V0QWR2ZXJ0aXNlbWVudEFycmF5KGFycmF5T2ZXZWJQSW1hZ2VzKTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRBZHZlcnRpc2VtZW50QXJyYXk6IGZ1bmN0aW9uKGFycmF5T2ZXZWJQSW1hZ2VzKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5hZHZlcnRpc2VtZW50ID0gW107XHJcblxyXG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gYXJyYXlPZldlYlBJbWFnZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcuYWR2ZXJ0aXNlbWVudC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogaSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogYXJyYXlPZldlYlBJbWFnZXNbaV1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSXQgaXMgZXF1aXZhbGVudCB0byA8Y29kZSBjbGFzcz1cInN0clwiPlwicmVjb3JkZXIuZ2V0QmxvYigpXCI8L2NvZGU+IG1ldGhvZC4gVXNhZ2Ugb2YgXCJnZXRCbG9iXCIgaXMgcmVjb21tZW5kZWQsIHRob3VnaC5cclxuICAgICAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBSZWNvcmRlZCBCbG9iIGNhbiBiZSBhY2Nlc3NlZCB1c2luZyB0aGlzIHByb3BlcnR5LlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAcmVhZG9ubHlcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICogICAgIHZhciBibG9iID0gdGhpcy5ibG9iO1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogICAgIC8vIGJlbG93IG9uZSBpcyByZWNvbW1lbmRlZFxyXG4gICAgICAgICAqICAgICB2YXIgYmxvYiA9IHRoaXMuZ2V0QmxvYigpO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJsb2I6IG51bGwsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgd29ya3Mgb25seSB3aXRoIHtyZWNvcmRlclR5cGU6U3RlcmVvQXVkaW9SZWNvcmRlcn0uIFVzZSB0aGlzIHByb3BlcnR5IG9uIFwic3RvcFJlY29yZGluZ1wiIHRvIHZlcmlmeSB0aGUgZW5jb2RlcidzIHNhbXBsZS1yYXRlcy5cclxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYnVmZmVyU2l6ZSAtIEJ1ZmZlci1zaXplIHVzZWQgdG8gZW5jb2RlIHRoZSBXQVYgY29udGFpbmVyXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEByZWFkb25seVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgYWxlcnQoJ1JlY29yZGVyIHVzZWQgdGhpcyBidWZmZXItc2l6ZTogJyArIHRoaXMuYnVmZmVyU2l6ZSk7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYnVmZmVyU2l6ZTogMCxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyB3b3JrcyBvbmx5IHdpdGgge3JlY29yZGVyVHlwZTpTdGVyZW9BdWRpb1JlY29yZGVyfS4gVXNlIHRoaXMgcHJvcGVydHkgb24gXCJzdG9wUmVjb3JkaW5nXCIgdG8gdmVyaWZ5IHRoZSBlbmNvZGVyJ3Mgc2FtcGxlLXJhdGVzLlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzYW1wbGVSYXRlIC0gU2FtcGxlLXJhdGVzIHVzZWQgdG8gZW5jb2RlIHRoZSBXQVYgY29udGFpbmVyXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEByZWFkb25seVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgYWxlcnQoJ1JlY29yZGVyIHVzZWQgdGhlc2Ugc2FtcGxlLXJhdGVzOiAnICsgdGhpcy5zYW1wbGVSYXRlKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzYW1wbGVSYXRlOiAwLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB7cmVjb3JkZXJUeXBlOlN0ZXJlb0F1ZGlvUmVjb3JkZXJ9IHJldHVybnMgQXJyYXlCdWZmZXIgb2JqZWN0LlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7QXJyYXlCdWZmZXJ9IGJ1ZmZlciAtIEF1ZGlvIEFycmF5QnVmZmVyLCBzdXBwb3J0ZWQgb25seSBpbiBDaHJvbWUuXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEByZWFkb25seVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgdmFyIGFycmF5QnVmZmVyID0gdGhpcy5idWZmZXI7XHJcbiAgICAgICAgICogICAgIGFsZXJ0KGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJ1ZmZlcjogbnVsbCxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBtZXRob2QgcmVzZXRzIHRoZSByZWNvcmRlci4gU28gdGhhdCB5b3UgY2FuIHJldXNlIHNpbmdsZSByZWNvcmRlciBpbnN0YW5jZSBtYW55IHRpbWVzLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5yZXNldCgpO1xyXG4gICAgICAgICAqIHJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAobWVkaWFSZWNvcmRlciAmJiB0eXBlb2YgbWVkaWFSZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSgnaW5hY3RpdmUnKTtcclxuICAgICAgICAgICAgc2VsZi5ibG9iID0gbnVsbDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbmV2ZXIgcmVjb3JkZXIncyBzdGF0ZSBjaGFuZ2VzLiBVc2UgdGhpcyBhcyBhbiBcImV2ZW50XCIuXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtTdHJpbmd9IHN0YXRlIC0gQSByZWNvcmRlcidzIHN0YXRlIGNhbiBiZTogcmVjb3JkaW5nLCBwYXVzZWQsIHN0b3BwZWQgb3IgaW5hY3RpdmUuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLm9uU3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICAgICAgICAgKiAgICAgY29uc29sZS5sb2coJ1JlY29yZGVyIHN0YXRlOiAnLCBzdGF0ZSk7XHJcbiAgICAgICAgICogfTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBvblN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oc3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWNvcmRlciBzdGF0ZSBjaGFuZ2VkOicsIHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgcmVjb3JkZXIgY2FuIGhhdmUgaW5hY3RpdmUsIHJlY29yZGluZywgcGF1c2VkIG9yIHN0b3BwZWQgc3RhdGVzLlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzdGF0ZSAtIEEgcmVjb3JkZXIncyBzdGF0ZSBjYW4gYmU6IHJlY29yZGluZywgcGF1c2VkLCBzdG9wcGVkIG9yIGluYWN0aXZlLlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICogQHJlYWRvbmx5XHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiAvLyB0aGlzIGxvb3BlciBmdW5jdGlvbiB3aWxsIGtlZXAgeW91IHVwZGF0ZWQgYWJvdXQgdGhlIHJlY29yZGVyJ3Mgc3RhdGVzLlxyXG4gICAgICAgICAqIChmdW5jdGlvbiBsb29wZXIoKSB7XHJcbiAgICAgICAgICogICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJIVE1MID0gJ1JlY29yZGVyXFwncyBzdGF0ZSBpczogJyArIHJlY29yZGVyLnN0YXRlO1xyXG4gICAgICAgICAqICAgICBpZihyZWNvcmRlci5zdGF0ZSA9PT0gJ3N0b3BwZWQnKSByZXR1cm47IC8vIGlnbm9yZStzdG9wXHJcbiAgICAgICAgICogICAgIHNldFRpbWVvdXQobG9vcGVyLCAxMDAwKTsgLy8gdXBkYXRlIGFmdGVyIGV2ZXJ5IDMtc2Vjb25kc1xyXG4gICAgICAgICAqIH0pKCk7XHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0ZTogJ2luYWN0aXZlJyxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0IHJlY29yZGVyJ3MgcmVhZG9ubHkgc3RhdGUuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHZhciBzdGF0ZSA9IHJlY29yZGVyLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gUmV0dXJucyByZWNvcmRpbmcgc3RhdGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5zdGF0ZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZXN0cm95IFJlY29yZFJUQyBpbnN0YW5jZS4gQ2xlYXIgYWxsIHJlY29yZGVycyBhbmQgb2JqZWN0cy5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZGlzYWJsZUxvZ3NDYWNoZSA9IGNvbmZpZy5kaXNhYmxlTG9ncztcclxuXHJcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVMb2dzOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHNlbGYucmVzZXQoKTtcclxuICAgICAgICAgICAgc2V0U3RhdGUoJ2Rlc3Ryb3llZCcpO1xyXG4gICAgICAgICAgICByZXR1cm5PYmplY3QgPSBzZWxmID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uZmlnLmRpc2FibGVMb2dzID0gZGlzYWJsZUxvZ3NDYWNoZTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1JlY29yZFJUQyBpcyBkZXN0cm95ZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWNvcmRSVEMgdmVyc2lvbiBudW1iZXJcclxuICAgICAgICAgKiBAcHJvcGVydHkge1N0cmluZ30gdmVyc2lvbiAtIFJlbGVhc2UgdmVyc2lvbiBudW1iZXIuXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgKiBAcmVhZG9ubHlcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIGFsZXJ0KHJlY29yZGVyLnZlcnNpb24pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZlcnNpb246ICc1LjUuNCdcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCF0aGlzKSB7XHJcbiAgICAgICAgc2VsZiA9IHJldHVybk9iamVjdDtcclxuICAgICAgICByZXR1cm4gcmV0dXJuT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIHNvbWVvbmUgd2FudHMgdG8gdXNlIFJlY29yZFJUQyB3aXRoIHRoZSBcIm5ld1wiIGtleXdvcmQuXHJcbiAgICBmb3IgKHZhciBwcm9wIGluIHJldHVybk9iamVjdCkge1xyXG4gICAgICAgIHRoaXNbcHJvcF0gPSByZXR1cm5PYmplY3RbcHJvcF07XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIHJldHVybk9iamVjdDtcclxufVxyXG5cclxuUmVjb3JkUlRDLnZlcnNpb24gPSAnNS41LjQnO1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnIC8qICYmICEhbW9kdWxlLmV4cG9ydHMqLyApIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gUmVjb3JkUlRDO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICBkZWZpbmUoJ1JlY29yZFJUQycsIFtdLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gUmVjb3JkUlRDO1xyXG4gICAgfSk7XHJcbn1cblxyXG5SZWNvcmRSVEMuZ2V0RnJvbURpc2sgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgaWYgKCFjYWxsYmFjaykge1xyXG4gICAgICAgIHRocm93ICdjYWxsYmFjayBpcyBtYW5kYXRvcnkuJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnR2V0dGluZyByZWNvcmRlZCAnICsgKHR5cGUgPT09ICdhbGwnID8gJ2Jsb2JzJyA6IHR5cGUgKyAnIGJsb2IgJykgKyAnIGZyb20gZGlzayEnKTtcclxuICAgIERpc2tTdG9yYWdlLkZldGNoKGZ1bmN0aW9uKGRhdGFVUkwsIF90eXBlKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgIT09ICdhbGwnICYmIF90eXBlID09PSB0eXBlICsgJ0Jsb2InICYmIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdhbGwnICYmIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkwsIF90eXBlLnJlcGxhY2UoJ0Jsb2InLCAnJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIHN0b3JlIHJlY29yZGVkIGJsb2JzIGludG8gSW5kZXhlZERCIHN0b3JhZ2UuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0ge2F1ZGlvOiBCbG9iLCB2aWRlbzogQmxvYiwgZ2lmOiBCbG9ifVxyXG4gKiBAbWV0aG9kXHJcbiAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICogQGV4YW1wbGVcclxuICogUmVjb3JkUlRDLndyaXRlVG9EaXNrKHtcclxuICogICAgIGF1ZGlvOiBhdWRpb0Jsb2IsXHJcbiAqICAgICB2aWRlbzogdmlkZW9CbG9iLFxyXG4gKiAgICAgZ2lmICA6IGdpZkJsb2JcclxuICogfSk7XHJcbiAqL1xyXG5SZWNvcmRSVEMud3JpdGVUb0Rpc2sgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBjb25zb2xlLmxvZygnV3JpdGluZyByZWNvcmRlZCBibG9iKHMpIHRvIGRpc2shJyk7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIGlmIChvcHRpb25zLmF1ZGlvICYmIG9wdGlvbnMudmlkZW8gJiYgb3B0aW9ucy5naWYpIHtcclxuICAgICAgICBvcHRpb25zLmF1ZGlvLmdldERhdGFVUkwoZnVuY3Rpb24oYXVkaW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMudmlkZW8uZ2V0RGF0YVVSTChmdW5jdGlvbih2aWRlb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZ2lmLmdldERhdGFVUkwoZnVuY3Rpb24oZ2lmRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIERpc2tTdG9yYWdlLlN0b3JlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9CbG9iOiBhdWRpb0RhdGFVUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvQmxvYjogdmlkZW9EYXRhVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWZCbG9iOiBnaWZEYXRhVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuYXVkaW8gJiYgb3B0aW9ucy52aWRlbykge1xyXG4gICAgICAgIG9wdGlvbnMuYXVkaW8uZ2V0RGF0YVVSTChmdW5jdGlvbihhdWRpb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy52aWRlby5nZXREYXRhVVJMKGZ1bmN0aW9uKHZpZGVvRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgRGlza1N0b3JhZ2UuU3RvcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvQmxvYjogYXVkaW9EYXRhVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQmxvYjogdmlkZW9EYXRhVVJMXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuYXVkaW8gJiYgb3B0aW9ucy5naWYpIHtcclxuICAgICAgICBvcHRpb25zLmF1ZGlvLmdldERhdGFVUkwoZnVuY3Rpb24oYXVkaW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZ2lmLmdldERhdGFVUkwoZnVuY3Rpb24oZ2lmRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgRGlza1N0b3JhZ2UuU3RvcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvQmxvYjogYXVkaW9EYXRhVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgIGdpZkJsb2I6IGdpZkRhdGFVUkxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy52aWRlbyAmJiBvcHRpb25zLmdpZikge1xyXG4gICAgICAgIG9wdGlvbnMudmlkZW8uZ2V0RGF0YVVSTChmdW5jdGlvbih2aWRlb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5naWYuZ2V0RGF0YVVSTChmdW5jdGlvbihnaWZEYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICBEaXNrU3RvcmFnZS5TdG9yZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9CbG9iOiB2aWRlb0RhdGFVUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2lmQmxvYjogZ2lmRGF0YVVSTFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmF1ZGlvKSB7XHJcbiAgICAgICAgb3B0aW9ucy5hdWRpby5nZXREYXRhVVJMKGZ1bmN0aW9uKGF1ZGlvRGF0YVVSTCkge1xyXG4gICAgICAgICAgICBEaXNrU3RvcmFnZS5TdG9yZSh7XHJcbiAgICAgICAgICAgICAgICBhdWRpb0Jsb2I6IGF1ZGlvRGF0YVVSTFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy52aWRlbykge1xyXG4gICAgICAgIG9wdGlvbnMudmlkZW8uZ2V0RGF0YVVSTChmdW5jdGlvbih2aWRlb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgRGlza1N0b3JhZ2UuU3RvcmUoe1xyXG4gICAgICAgICAgICAgICAgdmlkZW9CbG9iOiB2aWRlb0RhdGFVUkxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZ2lmKSB7XHJcbiAgICAgICAgb3B0aW9ucy5naWYuZ2V0RGF0YVVSTChmdW5jdGlvbihnaWZEYXRhVVJMKSB7XHJcbiAgICAgICAgICAgIERpc2tTdG9yYWdlLlN0b3JlKHtcclxuICAgICAgICAgICAgICAgIGdpZkJsb2I6IGdpZkRhdGFVUkxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XG5cclxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuLy8gUmVjb3JkUlRDLUNvbmZpZ3VyYXRpb24uanNcclxuXHJcbi8qKlxyXG4gKiB7QGxpbmsgUmVjb3JkUlRDQ29uZmlndXJhdGlvbn0gaXMgYW4gaW5uZXIvcHJpdmF0ZSBoZWxwZXIgZm9yIHtAbGluayBSZWNvcmRSVEN9LlxyXG4gKiBAc3VtbWFyeSBJdCBjb25maWd1cmVzIHRoZSAybmQgcGFyYW1ldGVyIHBhc3NlZCBvdmVyIHtAbGluayBSZWNvcmRSVEN9IGFuZCByZXR1cm5zIGEgdmFsaWQgXCJjb25maWdcIiBvYmplY3QuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAdHlwZWRlZiBSZWNvcmRSVENDb25maWd1cmF0aW9uXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgb3B0aW9ucyA9IFJlY29yZFJUQ0NvbmZpZ3VyYXRpb24obWVkaWFTdHJlYW0sIG9wdGlvbnMpO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIC0gTWVkaWFTdHJlYW0gb2JqZWN0IGZldGNoZWQgdXNpbmcgZ2V0VXNlck1lZGlhIEFQSSBvciBnZW5lcmF0ZWQgdXNpbmcgY2FwdHVyZVN0cmVhbVVudGlsRW5kZWQgb3IgV2ViQXVkaW8gQVBJLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge3R5cGU6XCJ2aWRlb1wiLCBkaXNhYmxlTG9nczogdHJ1ZSwgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzOiAxLCBidWZmZXJTaXplOiAwLCBzYW1wbGVSYXRlOiAwLCB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCwgZ2V0TmF0aXZlQmxvYjp0cnVlLCBldGMufVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIFJlY29yZFJUQ0NvbmZpZ3VyYXRpb24obWVkaWFTdHJlYW0sIGNvbmZpZykge1xyXG4gICAgaWYgKCFjb25maWcucmVjb3JkZXJUeXBlICYmICFjb25maWcudHlwZSkge1xyXG4gICAgICAgIGlmICghIWNvbmZpZy5hdWRpbyAmJiAhIWNvbmZpZy52aWRlbykge1xyXG4gICAgICAgICAgICBjb25maWcudHlwZSA9ICd2aWRlbyc7XHJcbiAgICAgICAgfSBlbHNlIGlmICghIWNvbmZpZy5hdWRpbyAmJiAhY29uZmlnLnZpZGVvKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy50eXBlID0gJ2F1ZGlvJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbmZpZy5yZWNvcmRlclR5cGUgJiYgIWNvbmZpZy50eXBlKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5yZWNvcmRlclR5cGUgPT09IFdoYW1teVJlY29yZGVyIHx8IGNvbmZpZy5yZWNvcmRlclR5cGUgPT09IENhbnZhc1JlY29yZGVyIHx8ICh0eXBlb2YgV2ViQXNzZW1ibHlSZWNvcmRlciAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uZmlnLnJlY29yZGVyVHlwZSA9PT0gV2ViQXNzZW1ibHlSZWNvcmRlcikpIHtcclxuICAgICAgICAgICAgY29uZmlnLnR5cGUgPSAndmlkZW8nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLnJlY29yZGVyVHlwZSA9PT0gR2lmUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgY29uZmlnLnR5cGUgPSAnZ2lmJztcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5yZWNvcmRlclR5cGUgPT09IFN0ZXJlb0F1ZGlvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgY29uZmlnLnR5cGUgPSAnYXVkaW8nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLnJlY29yZGVyVHlwZSA9PT0gTWVkaWFTdHJlYW1SZWNvcmRlcikge1xyXG4gICAgICAgICAgICBpZiAoZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAnYXVkaW8nKS5sZW5ndGggJiYgZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAndmlkZW8nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy50eXBlID0gJ3ZpZGVvJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAnYXVkaW8nKS5sZW5ndGggJiYgZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAndmlkZW8nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy50eXBlID0gJ3ZpZGVvJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChnZXRUcmFja3MobWVkaWFTdHJlYW0sICdhdWRpbycpLmxlbmd0aCAmJiAhZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAndmlkZW8nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy50eXBlID0gJ2F1ZGlvJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbmZpZy50eXBlID0gJ1VuS25vd24nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgTWVkaWFTdHJlYW1SZWNvcmRlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIE1lZGlhUmVjb3JkZXIgIT09ICd1bmRlZmluZWQnICYmICdyZXF1ZXN0RGF0YScgaW4gTWVkaWFSZWNvcmRlci5wcm90b3R5cGUpIHtcclxuICAgICAgICBpZiAoIWNvbmZpZy5taW1lVHlwZSkge1xyXG4gICAgICAgICAgICBjb25maWcubWltZVR5cGUgPSAndmlkZW8vd2VibSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy50eXBlID0gY29uZmlnLm1pbWVUeXBlLnNwbGl0KCcvJylbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZy5iaXRzUGVyU2Vjb25kKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbmZpZy5iaXRzUGVyU2Vjb25kID0gMTI4MDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zaWRlciBkZWZhdWx0IHR5cGU9YXVkaW9cclxuICAgIGlmICghY29uZmlnLnR5cGUpIHtcclxuICAgICAgICBpZiAoY29uZmlnLm1pbWVUeXBlKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy50eXBlID0gY29uZmlnLm1pbWVUeXBlLnNwbGl0KCcvJylbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY29uZmlnLnR5cGUpIHtcclxuICAgICAgICAgICAgY29uZmlnLnR5cGUgPSAnYXVkaW8nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG59XG5cclxuLy8gX19fX19fX19fX19fX19fX19fXHJcbi8vIEdldFJlY29yZGVyVHlwZS5qc1xyXG5cclxuLyoqXHJcbiAqIHtAbGluayBHZXRSZWNvcmRlclR5cGV9IGlzIGFuIGlubmVyL3ByaXZhdGUgaGVscGVyIGZvciB7QGxpbmsgUmVjb3JkUlRDfS5cclxuICogQHN1bW1hcnkgSXQgcmV0dXJucyBiZXN0IHJlY29yZGVyLXR5cGUgYXZhaWxhYmxlIGZvciB5b3VyIGJyb3dzZXIuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAdHlwZWRlZiBHZXRSZWNvcmRlclR5cGVcclxuICogQGNsYXNzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciBSZWNvcmRlclR5cGUgPSBHZXRSZWNvcmRlclR5cGUob3B0aW9ucyk7XHJcbiAqIHZhciByZWNvcmRlciA9IG5ldyBSZWNvcmRlclR5cGUob3B0aW9ucyk7XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBNZWRpYVN0cmVhbSBvYmplY3QgZmV0Y2hlZCB1c2luZyBnZXRVc2VyTWVkaWEgQVBJIG9yIGdlbmVyYXRlZCB1c2luZyBjYXB0dXJlU3RyZWFtVW50aWxFbmRlZCBvciBXZWJBdWRpbyBBUEkuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7dHlwZTpcInZpZGVvXCIsIGRpc2FibGVMb2dzOiB0cnVlLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHM6IDEsIGJ1ZmZlclNpemU6IDAsIHNhbXBsZVJhdGU6IDAsIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50LCBldGMufVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIEdldFJlY29yZGVyVHlwZShtZWRpYVN0cmVhbSwgY29uZmlnKSB7XHJcbiAgICB2YXIgcmVjb3JkZXI7XHJcblxyXG4gICAgLy8gU3RlcmVvQXVkaW9SZWNvcmRlciBjYW4gd29yayB3aXRoIGFsbCB0aHJlZTogRWRnZSwgRmlyZWZveCBhbmQgQ2hyb21lXHJcbiAgICAvLyB0b2RvOiBkZXRlY3QgaWYgaXQgaXMgRWRnZSwgdGhlbiBhdXRvIHVzZTogU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgaWYgKGlzQ2hyb21lIHx8IGlzRWRnZSB8fCBpc09wZXJhKSB7XHJcbiAgICAgICAgLy8gTWVkaWEgU3RyZWFtIFJlY29yZGluZyBBUEkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIGluIGNocm9tZSB5ZXQ7XHJcbiAgICAgICAgLy8gVGhhdCdzIHdoeSB1c2luZyBXZWJBdWRpbyBBUEkgdG8gcmVjb3JkIHN0ZXJlbyBhdWRpbyBpbiBXQVYgZm9ybWF0XHJcbiAgICAgICAgcmVjb3JkZXIgPSBTdGVyZW9BdWRpb1JlY29yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgTWVkaWFSZWNvcmRlciAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3JlcXVlc3REYXRhJyBpbiBNZWRpYVJlY29yZGVyLnByb3RvdHlwZSAmJiAhaXNDaHJvbWUpIHtcclxuICAgICAgICByZWNvcmRlciA9IE1lZGlhU3RyZWFtUmVjb3JkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdmlkZW8gcmVjb3JkZXIgKGluIFdlYk0gZm9ybWF0KVxyXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndmlkZW8nICYmIChpc0Nocm9tZSB8fCBpc09wZXJhKSkge1xyXG4gICAgICAgIHJlY29yZGVyID0gV2hhbW15UmVjb3JkZXI7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgV2ViQXNzZW1ibHlSZWNvcmRlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFJlYWRhYmxlU3RyZWFtICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZWNvcmRlciA9IFdlYkFzc2VtYmx5UmVjb3JkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHZpZGVvIHJlY29yZGVyIChpbiBHaWYgZm9ybWF0KVxyXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnZ2lmJykge1xyXG4gICAgICAgIHJlY29yZGVyID0gR2lmUmVjb3JkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHRtbDJjYW52YXMgcmVjb3JkaW5nIVxyXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnY2FudmFzJykge1xyXG4gICAgICAgIHJlY29yZGVyID0gQ2FudmFzUmVjb3JkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTWVkaWFSZWNvcmRlckNvbXBhdGlibGUoKSAmJiByZWNvcmRlciAhPT0gQ2FudmFzUmVjb3JkZXIgJiYgcmVjb3JkZXIgIT09IEdpZlJlY29yZGVyICYmIHR5cGVvZiBNZWRpYVJlY29yZGVyICE9PSAndW5kZWZpbmVkJyAmJiAncmVxdWVzdERhdGEnIGluIE1lZGlhUmVjb3JkZXIucHJvdG90eXBlKSB7XHJcbiAgICAgICAgaWYgKGdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ3ZpZGVvJykubGVuZ3RoIHx8IGdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ2F1ZGlvJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIGF1ZGlvLW9ubHkgcmVjb3JkaW5nXHJcbiAgICAgICAgICAgIGlmIChjb25maWcudHlwZSA9PT0gJ2F1ZGlvJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZCA9PT0gJ2Z1bmN0aW9uJyAmJiBNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZCgnYXVkaW8vd2VibScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkZXIgPSBNZWRpYVN0cmVhbVJlY29yZGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSByZWNvcmRlciA9IFN0ZXJlb0F1ZGlvUmVjb3JkZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyB2aWRlbyBvciBzY3JlZW4gdHJhY2tzXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIE1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkID09PSAnZnVuY3Rpb24nICYmIE1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKCd2aWRlby93ZWJtJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRlciA9IE1lZGlhU3RyZWFtUmVjb3JkZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1lZGlhU3RyZWFtIGluc3RhbmNlb2YgQXJyYXkgJiYgbWVkaWFTdHJlYW0ubGVuZ3RoKSB7XHJcbiAgICAgICAgcmVjb3JkZXIgPSBNdWx0aVN0cmVhbVJlY29yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25maWcucmVjb3JkZXJUeXBlKSB7XHJcbiAgICAgICAgcmVjb3JkZXIgPSBjb25maWcucmVjb3JkZXJUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzICYmICEhcmVjb3JkZXIgJiYgISFyZWNvcmRlci5uYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzaW5nIHJlY29yZGVyVHlwZTonLCByZWNvcmRlci5uYW1lIHx8IHJlY29yZGVyLmNvbnN0cnVjdG9yLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVjb3JkZXIgJiYgaXNTYWZhcmkpIHtcclxuICAgICAgICByZWNvcmRlciA9IE1lZGlhU3RyZWFtUmVjb3JkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZGVyO1xyXG59XG5cclxuLy8gX19fX19fX19fX19fX1xyXG4vLyBNUmVjb3JkUlRDLmpzXHJcblxyXG4vKipcclxuICogTVJlY29yZFJUQyBydW5zIG9uIHRvcCBvZiB7QGxpbmsgUmVjb3JkUlRDfSB0byBicmluZyBtdWx0aXBsZSByZWNvcmRpbmdzIGluIGEgc2luZ2xlIHBsYWNlLCBieSBwcm92aWRpbmcgc2ltcGxlIEFQSS5cclxuICogQHN1bW1hcnkgTVJlY29yZFJUQyBzdGFuZHMgZm9yIFwiTXVsdGlwbGUtUmVjb3JkUlRDXCIuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAdHlwZWRlZiBNUmVjb3JkUlRDXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgTVJlY29yZFJUQygpO1xyXG4gKiByZWNvcmRlci5hZGRTdHJlYW0oTWVkaWFTdHJlYW0pO1xyXG4gKiByZWNvcmRlci5tZWRpYVR5cGUgPSB7XHJcbiAqICAgICBhdWRpbzogdHJ1ZSwgLy8gb3IgU3RlcmVvQXVkaW9SZWNvcmRlciBvciBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAqICAgICB2aWRlbzogdHJ1ZSwgLy8gb3IgV2hhbW15UmVjb3JkZXIgb3IgTWVkaWFTdHJlYW1SZWNvcmRlciBvciBXZWJBc3NlbWJseVJlY29yZGVyIG9yIENhbnZhc1JlY29yZGVyXHJcbiAqICAgICBnaWY6IHRydWUgICAgLy8gb3IgR2lmUmVjb3JkZXJcclxuICogfTtcclxuICogLy8gbWltZVR5cGUgaXMgb3B0aW9uYWwgYW5kIHNob3VsZCBiZSBzZXQgb25seSBpbiBhZHZhbmNlIGNhc2VzLlxyXG4gKiByZWNvcmRlci5taW1lVHlwZSA9IHtcclxuICogICAgIGF1ZGlvOiAnYXVkaW8vd2F2JyxcclxuICogICAgIHZpZGVvOiAndmlkZW8vd2VibScsXHJcbiAqICAgICBnaWY6ICAgJ2ltYWdlL2dpZidcclxuICogfTtcclxuICogcmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICogQHNlZSBGb3IgZnVydGhlciBpbmZvcm1hdGlvbjpcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMvdHJlZS9tYXN0ZXIvTVJlY29yZFJUQ3xNUmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSAtIE1lZGlhU3RyZWFtIG9iamVjdCBmZXRjaGVkIHVzaW5nIGdldFVzZXJNZWRpYSBBUEkgb3IgZ2VuZXJhdGVkIHVzaW5nIGNhcHR1cmVTdHJlYW1VbnRpbEVuZGVkIG9yIFdlYkF1ZGlvIEFQSS5cclxuICogQHJlcXVpcmVzIHtAbGluayBSZWNvcmRSVEN9XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gTVJlY29yZFJUQyhtZWRpYVN0cmVhbSkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgYXR0YWNoZXMgTWVkaWFTdHJlYW0gb2JqZWN0IHRvIHtAbGluayBNUmVjb3JkUlRDfS5cclxuICAgICAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIC0gQSBNZWRpYVN0cmVhbSBvYmplY3QsIGVpdGhlciBmZXRjaGVkIHVzaW5nIGdldFVzZXJNZWRpYSBBUEksIG9yIGdlbmVyYXRlZCB1c2luZyBjYXB0dXJlU3RyZWFtVW50aWxFbmRlZCBvciBXZWJBdWRpbyBBUEkuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmFkZFN0cmVhbShNZWRpYVN0cmVhbSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuYWRkU3RyZWFtID0gZnVuY3Rpb24oX21lZGlhU3RyZWFtKSB7XHJcbiAgICAgICAgaWYgKF9tZWRpYVN0cmVhbSkge1xyXG4gICAgICAgICAgICBtZWRpYVN0cmVhbSA9IF9tZWRpYVN0cmVhbTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBwcm9wZXJ0eSBjYW4gYmUgdXNlZCB0byBzZXQgdGhlIHJlY29yZGluZyB0eXBlIGUuZy4gYXVkaW8sIG9yIHZpZGVvLCBvciBnaWYsIG9yIGNhbnZhcy5cclxuICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBtZWRpYVR5cGUgLSB7YXVkaW86IHRydWUsIHZpZGVvOiB0cnVlLCBnaWY6IHRydWV9XHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHZhciByZWNvcmRlciA9IG5ldyBNUmVjb3JkUlRDKCk7XHJcbiAgICAgKiByZWNvcmRlci5tZWRpYVR5cGUgPSB7XHJcbiAgICAgKiAgICAgYXVkaW86IHRydWUsIC8vIFRSVUUgb3IgU3RlcmVvQXVkaW9SZWNvcmRlciBvciBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiAgICAgdmlkZW86IHRydWUsIC8vIFRSVUUgb3IgV2hhbW15UmVjb3JkZXIgb3IgTWVkaWFTdHJlYW1SZWNvcmRlciBvciBXZWJBc3NlbWJseVJlY29yZGVyIG9yIENhbnZhc1JlY29yZGVyXHJcbiAgICAgKiAgICAgZ2lmICA6IHRydWUgIC8vIFRSVUUgb3IgR2lmUmVjb3JkZXJcclxuICAgICAqIH07XHJcbiAgICAgKi9cclxuICAgIHRoaXMubWVkaWFUeXBlID0ge1xyXG4gICAgICAgIGF1ZGlvOiB0cnVlLFxyXG4gICAgICAgIHZpZGVvOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RhcnRzIHJlY29yZGluZy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5zdGFydFJlY29yZGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBtZWRpYVR5cGUgPSB0aGlzLm1lZGlhVHlwZTtcclxuICAgICAgICB2YXIgcmVjb3JkZXJUeXBlO1xyXG4gICAgICAgIHZhciBtaW1lVHlwZSA9IHRoaXMubWltZVR5cGUgfHwge1xyXG4gICAgICAgICAgICBhdWRpbzogbnVsbCxcclxuICAgICAgICAgICAgdmlkZW86IG51bGwsXHJcbiAgICAgICAgICAgIGdpZjogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWVkaWFUeXBlLmF1ZGlvICE9PSAnZnVuY3Rpb24nICYmIGlzTWVkaWFSZWNvcmRlckNvbXBhdGlibGUoKSAmJiAhZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAnYXVkaW8nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbWVkaWFUeXBlLmF1ZGlvID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1lZGlhVHlwZS52aWRlbyAhPT0gJ2Z1bmN0aW9uJyAmJiBpc01lZGlhUmVjb3JkZXJDb21wYXRpYmxlKCkgJiYgIWdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ3ZpZGVvJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1lZGlhVHlwZS52aWRlbyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZWRpYVR5cGUuZ2lmICE9PSAnZnVuY3Rpb24nICYmIGlzTWVkaWFSZWNvcmRlckNvbXBhdGlibGUoKSAmJiAhZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAndmlkZW8nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbWVkaWFUeXBlLmdpZiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtZWRpYVR5cGUuYXVkaW8gJiYgIW1lZGlhVHlwZS52aWRlbyAmJiAhbWVkaWFUeXBlLmdpZikge1xyXG4gICAgICAgICAgICB0aHJvdyAnTWVkaWFTdHJlYW0gbXVzdCBoYXZlIGVpdGhlciBhdWRpbyBvciB2aWRlbyB0cmFja3MuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIW1lZGlhVHlwZS5hdWRpbykge1xyXG4gICAgICAgICAgICByZWNvcmRlclR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lZGlhVHlwZS5hdWRpbyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcmVjb3JkZXJUeXBlID0gbWVkaWFUeXBlLmF1ZGlvO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIgPSBuZXcgUmVjb3JkUlRDKG1lZGlhU3RyZWFtLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXVkaW8nLFxyXG4gICAgICAgICAgICAgICAgYnVmZmVyU2l6ZTogdGhpcy5idWZmZXJTaXplLFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlUmF0ZTogdGhpcy5zYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzOiB0aGlzLm51bWJlck9mQXVkaW9DaGFubmVscyB8fCAyLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZUxvZ3M6IHRoaXMuZGlzYWJsZUxvZ3MsXHJcbiAgICAgICAgICAgICAgICByZWNvcmRlclR5cGU6IHJlY29yZGVyVHlwZSxcclxuICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBtaW1lVHlwZS5hdWRpbyxcclxuICAgICAgICAgICAgICAgIHRpbWVTbGljZTogdGhpcy50aW1lU2xpY2UsXHJcbiAgICAgICAgICAgICAgICBvblRpbWVTdGFtcDogdGhpcy5vblRpbWVTdGFtcFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWVkaWFUeXBlLnZpZGVvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEhbWVkaWFUeXBlLnZpZGVvKSB7XHJcbiAgICAgICAgICAgIHJlY29yZGVyVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWVkaWFUeXBlLnZpZGVvID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICByZWNvcmRlclR5cGUgPSBtZWRpYVR5cGUudmlkZW87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBuZXdTdHJlYW0gPSBtZWRpYVN0cmVhbTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc01lZGlhUmVjb3JkZXJDb21wYXRpYmxlKCkgJiYgISFtZWRpYVR5cGUuYXVkaW8gJiYgdHlwZW9mIG1lZGlhVHlwZS5hdWRpbyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZpZGVvVHJhY2sgPSBnZXRUcmFja3MobWVkaWFTdHJlYW0sICd2aWRlbycpWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc0ZpcmVmb3gpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTdHJlYW0gPSBuZXcgTWVkaWFTdHJlYW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTdHJlYW0uYWRkVHJhY2sodmlkZW9UcmFjayk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmRlclR5cGUgJiYgcmVjb3JkZXJUeXBlID09PSBXaGFtbXlSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IGRvZXMgTk9UIHN1cHBvcnRzIHdlYnAtZW5jb2RpbmcgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1dCBGaXJlZm94IGRvIHN1cHBvcnRzIFdlYkFzc2VtYmx5UmVjb3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkZXJUeXBlID0gTWVkaWFTdHJlYW1SZWNvcmRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1N0cmVhbSA9IG5ldyBNZWRpYVN0cmVhbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1N0cmVhbS5hZGRUcmFjayh2aWRlb1RyYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy52aWRlb1JlY29yZGVyID0gbmV3IFJlY29yZFJUQyhuZXdTdHJlYW0sIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd2aWRlbycsXHJcbiAgICAgICAgICAgICAgICB2aWRlbzogdGhpcy52aWRlbyxcclxuICAgICAgICAgICAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgICAgICAgICAgICBmcmFtZUludGVydmFsOiB0aGlzLmZyYW1lSW50ZXJ2YWwgfHwgMTAsXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlTG9nczogdGhpcy5kaXNhYmxlTG9ncyxcclxuICAgICAgICAgICAgICAgIHJlY29yZGVyVHlwZTogcmVjb3JkZXJUeXBlLFxyXG4gICAgICAgICAgICAgICAgbWltZVR5cGU6IG1pbWVUeXBlLnZpZGVvLFxyXG4gICAgICAgICAgICAgICAgdGltZVNsaWNlOiB0aGlzLnRpbWVTbGljZSxcclxuICAgICAgICAgICAgICAgIG9uVGltZVN0YW1wOiB0aGlzLm9uVGltZVN0YW1wLFxyXG4gICAgICAgICAgICAgICAgd29ya2VyUGF0aDogdGhpcy53b3JrZXJQYXRoLFxyXG4gICAgICAgICAgICAgICAgd2ViQXNzZW1ibHlQYXRoOiB0aGlzLndlYkFzc2VtYmx5UGF0aCxcclxuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZTogdGhpcy5mcmFtZVJhdGUsIC8vIHVzZWQgYnkgV2ViQXNzZW1ibHlSZWNvcmRlcjsgdmFsdWVzOiB1c3VhbGx5IDMwOyBhY2NlcHRzIGFueS5cclxuICAgICAgICAgICAgICAgIGJpdHJhdGU6IHRoaXMuYml0cmF0ZSAvLyB1c2VkIGJ5IFdlYkFzc2VtYmx5UmVjb3JkZXI7IHZhbHVlczogMCB0byAxMDAwK1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWVkaWFUeXBlLmF1ZGlvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEhbWVkaWFUeXBlLmF1ZGlvICYmICEhbWVkaWFUeXBlLnZpZGVvKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIHZhciBpc1NpbmdsZVJlY29yZGVyID0gaXNNZWRpYVJlY29yZGVyQ29tcGF0aWJsZSgpID09PSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1lZGlhVHlwZS5hdWRpbyBpbnN0YW5jZW9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXIgJiYgISFtZWRpYVR5cGUudmlkZW8pIHtcclxuICAgICAgICAgICAgICAgIGlzU2luZ2xlUmVjb3JkZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZWRpYVR5cGUuYXVkaW8gIT09IHRydWUgJiYgbWVkaWFUeXBlLnZpZGVvICE9PSB0cnVlICYmIG1lZGlhVHlwZS5hdWRpbyAhPT0gbWVkaWFUeXBlLnZpZGVvKSB7XHJcbiAgICAgICAgICAgICAgICBpc1NpbmdsZVJlY29yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpc1NpbmdsZVJlY29yZGVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmF1ZGlvUmVjb3JkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc2VsZi52aWRlb1JlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnZpZGVvUmVjb3JkZXIuaW5pdFJlY29yZGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYXVkaW9SZWNvcmRlci5pbml0UmVjb3JkZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJvdGggcmVjb3JkZXJzIGFyZSByZWFkeSB0byByZWNvcmQgdGhpbmdzIGFjY3VyYXRlbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi52aWRlb1JlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXVkaW9SZWNvcmRlci5zdGFydFJlY29yZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIW1lZGlhVHlwZS5naWYpIHtcclxuICAgICAgICAgICAgcmVjb3JkZXJUeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZWRpYVR5cGUuZ2lmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICByZWNvcmRlclR5cGUgPSBtZWRpYVR5cGUuZ2lmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZ2lmUmVjb3JkZXIgPSBuZXcgUmVjb3JkUlRDKG1lZGlhU3RyZWFtLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZ2lmJyxcclxuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZTogdGhpcy5mcmFtZVJhdGUgfHwgMjAwLFxyXG4gICAgICAgICAgICAgICAgcXVhbGl0eTogdGhpcy5xdWFsaXR5IHx8IDEwLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZUxvZ3M6IHRoaXMuZGlzYWJsZUxvZ3MsXHJcbiAgICAgICAgICAgICAgICByZWNvcmRlclR5cGU6IHJlY29yZGVyVHlwZSxcclxuICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBtaW1lVHlwZS5naWZcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2lmUmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcHMgcmVjb3JkaW5nLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW4gYWxsIGVuY29kZXJzIGZpbmlzaGVkIHRoZWlyIGpvYnMuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24ocmVjb3JkaW5nKXtcclxuICAgICAqICAgICB2YXIgYXVkaW9CbG9iID0gcmVjb3JkaW5nLmF1ZGlvO1xyXG4gICAgICogICAgIHZhciB2aWRlb0Jsb2IgPSByZWNvcmRpbmcudmlkZW87XHJcbiAgICAgKiAgICAgdmFyIGdpZkJsb2IgICA9IHJlY29yZGluZy5naWY7XHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5zdG9wUmVjb3JkaW5nID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oYmxvYlVSTCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYmxvYlVSTCwgJ2F1ZGlvJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbihibG9iVVJMKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhibG9iVVJMLCAndmlkZW8nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5naWZSZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmdpZlJlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oYmxvYlVSTCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYmxvYlVSTCwgJ2dpZicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcGF1c2VzIHJlY29yZGluZy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucGF1c2VSZWNvcmRpbmcoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5wYXVzZVJlY29yZGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyLnBhdXNlUmVjb3JkaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aWRlb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9SZWNvcmRlci5wYXVzZVJlY29yZGluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2lmUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5naWZSZWNvcmRlci5wYXVzZVJlY29yZGluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXN1bWVzIHJlY29yZGluZy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVzdW1lUmVjb3JkaW5nKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVzdW1lUmVjb3JkaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIucmVzdW1lUmVjb3JkaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aWRlb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9SZWNvcmRlci5yZXN1bWVSZWNvcmRpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdpZlJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2lmUmVjb3JkZXIucmVzdW1lUmVjb3JkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIG1hbnVhbGx5IGdldCBhbGwgcmVjb3JkZWQgYmxvYnMuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEFsbCByZWNvcmRlZCBibG9icyBhcmUgcGFzc2VkIGJhY2sgdG8gdGhlIFwiY2FsbGJhY2tcIiBmdW5jdGlvbi5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuZ2V0QmxvYihmdW5jdGlvbihyZWNvcmRpbmcpe1xyXG4gICAgICogICAgIHZhciBhdWRpb0Jsb2IgPSByZWNvcmRpbmcuYXVkaW87XHJcbiAgICAgKiAgICAgdmFyIHZpZGVvQmxvYiA9IHJlY29yZGluZy52aWRlbztcclxuICAgICAqICAgICB2YXIgZ2lmQmxvYiAgID0gcmVjb3JkaW5nLmdpZjtcclxuICAgICAqIH0pO1xyXG4gICAgICogLy8gb3JcclxuICAgICAqIHZhciBhdWRpb0Jsb2IgPSByZWNvcmRlci5nZXRCbG9iKCkuYXVkaW87XHJcbiAgICAgKiB2YXIgdmlkZW9CbG9iID0gcmVjb3JkZXIuZ2V0QmxvYigpLnZpZGVvO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmdldEJsb2IgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICBvdXRwdXQuYXVkaW8gPSB0aGlzLmF1ZGlvUmVjb3JkZXIuZ2V0QmxvYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICBvdXRwdXQudmlkZW8gPSB0aGlzLnZpZGVvUmVjb3JkZXIuZ2V0QmxvYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2lmUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgb3V0cHV0LmdpZiA9IHRoaXMuZ2lmUmVjb3JkZXIuZ2V0QmxvYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG91dHB1dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kgYWxsIHJlY29yZGVyIGluc3RhbmNlcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuZGVzdHJveSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5hdWRpb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aWRlb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9SZWNvcmRlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9SZWNvcmRlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5naWZSZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmdpZlJlY29yZGVyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5naWZSZWNvcmRlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIG1hbnVhbGx5IGdldCBhbGwgcmVjb3JkZWQgYmxvYnMnIERhdGFVUkxzLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBbGwgcmVjb3JkZWQgYmxvYnMnIERhdGFVUkxzIGFyZSBwYXNzZWQgYmFjayB0byB0aGUgXCJjYWxsYmFja1wiIGZ1bmN0aW9uLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE1SZWNvcmRSVENcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5nZXREYXRhVVJMKGZ1bmN0aW9uKHJlY29yZGluZyl7XHJcbiAgICAgKiAgICAgdmFyIGF1ZGlvRGF0YVVSTCA9IHJlY29yZGluZy5hdWRpbztcclxuICAgICAqICAgICB2YXIgdmlkZW9EYXRhVVJMID0gcmVjb3JkaW5nLnZpZGVvO1xyXG4gICAgICogICAgIHZhciBnaWZEYXRhVVJMICAgPSByZWNvcmRpbmcuZ2lmO1xyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ2V0RGF0YVVSTCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5nZXRCbG9iKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAgICAgICAgaWYgKGJsb2IuYXVkaW8gJiYgYmxvYi52aWRlbykge1xyXG4gICAgICAgICAgICAgICAgZ2V0RGF0YVVSTChibG9iLmF1ZGlvLCBmdW5jdGlvbihfYXVkaW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0RGF0YVVSTChibG9iLnZpZGVvLCBmdW5jdGlvbihfdmlkZW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvOiBfYXVkaW9EYXRhVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW86IF92aWRlb0RhdGFVUkxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChibG9iLmF1ZGlvKSB7XHJcbiAgICAgICAgICAgICAgICBnZXREYXRhVVJMKGJsb2IuYXVkaW8sIGZ1bmN0aW9uKF9hdWRpb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvOiBfYXVkaW9EYXRhVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChibG9iLnZpZGVvKSB7XHJcbiAgICAgICAgICAgICAgICBnZXREYXRhVVJMKGJsb2IudmlkZW8sIGZ1bmN0aW9uKF92aWRlb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvOiBfdmlkZW9EYXRhVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXREYXRhVVJMKGJsb2IsIGNhbGxiYWNrMDApIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2ViV29ya2VyID0gcHJvY2Vzc0luV2ViV29ya2VyKGZ1bmN0aW9uIHJlYWRGaWxlKF9ibG9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UobmV3IEZpbGVSZWFkZXJTeW5jKCkucmVhZEFzRGF0YVVSTChfYmxvYikpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2ViV29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2swMChldmVudC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgd2ViV29ya2VyLnBvc3RNZXNzYWdlKGJsb2IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMDAoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcm9jZXNzSW5XZWJXb3JrZXIoX2Z1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBibG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbX2Z1bmN0aW9uLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAndGhpcy5vbm1lc3NhZ2UgPSAgZnVuY3Rpb24gKGVlZSkgeycgKyBfZnVuY3Rpb24ubmFtZSArICcoZWVlLmRhdGEpO30nXHJcbiAgICAgICAgICAgIF0sIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0J1xyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcihibG9iKTtcclxuICAgICAgICAgICAgdmFyIHVybDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBVUkwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBVUkw7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHdlYmtpdFVSTCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IHdlYmtpdFVSTDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdOZWl0aGVyIFVSTCBub3Igd2Via2l0VVJMIGRldGVjdGVkLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXJsLnJldm9rZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdvcmtlcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gYXNrIHtAbGluayBNUmVjb3JkUlRDfSB0byB3cml0ZSBhbGwgcmVjb3JkZWQgYmxvYnMgaW50byBJbmRleGVkREIgc3RvcmFnZS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIud3JpdGVUb0Rpc2soKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy53cml0ZVRvRGlzayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFJlY29yZFJUQy53cml0ZVRvRGlzayh7XHJcbiAgICAgICAgICAgIGF1ZGlvOiB0aGlzLmF1ZGlvUmVjb3JkZXIsXHJcbiAgICAgICAgICAgIHZpZGVvOiB0aGlzLnZpZGVvUmVjb3JkZXIsXHJcbiAgICAgICAgICAgIGdpZjogdGhpcy5naWZSZWNvcmRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGludm9rZSBhIHNhdmUtYXMgZGlhbG9nIGZvciBhbGwgcmVjb3JkZWQgYmxvYnMuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXJncyAtIHthdWRpbzogJ2F1ZGlvLW5hbWUnLCB2aWRlbzogJ3ZpZGVvLW5hbWUnLCBnaWY6ICdnaWYtbmFtZSd9XHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnNhdmUoe1xyXG4gICAgICogICAgIGF1ZGlvOiAnYXVkaW8tZmlsZS1uYW1lJyxcclxuICAgICAqICAgICB2aWRlbzogJ3ZpZGVvLWZpbGUtbmFtZScsXHJcbiAgICAgKiAgICAgZ2lmICA6ICdnaWYtZmlsZS1uYW1lJ1xyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2F2ZSA9IGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICBhcmdzID0gYXJncyB8fCB7XHJcbiAgICAgICAgICAgIGF1ZGlvOiB0cnVlLFxyXG4gICAgICAgICAgICB2aWRlbzogdHJ1ZSxcclxuICAgICAgICAgICAgZ2lmOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCEhYXJncy5hdWRpbyAmJiB0aGlzLmF1ZGlvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyLnNhdmUodHlwZW9mIGFyZ3MuYXVkaW8gPT09ICdzdHJpbmcnID8gYXJncy5hdWRpbyA6ICcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIWFyZ3MudmlkZW8gJiYgdGhpcy52aWRlb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9SZWNvcmRlci5zYXZlKHR5cGVvZiBhcmdzLnZpZGVvID09PSAnc3RyaW5nJyA/IGFyZ3MudmlkZW8gOiAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghIWFyZ3MuZ2lmICYmIHRoaXMuZ2lmUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5naWZSZWNvcmRlci5zYXZlKHR5cGVvZiBhcmdzLmdpZiA9PT0gJ3N0cmluZycgPyBhcmdzLmdpZiA6ICcnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gZ2V0IGFsbCByZWNvcmRlZCBibG9icyBmcm9tIEluZGV4ZWREQiBzdG9yYWdlLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtICdhbGwnIG9yICdhdWRpbycgb3IgJ3ZpZGVvJyBvciAnZ2lmJ1xyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGdldCBhbGwgc3RvcmVkIGJsb2JzLlxyXG4gKiBAbWV0aG9kXHJcbiAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAqIEBleGFtcGxlXHJcbiAqIE1SZWNvcmRSVEMuZ2V0RnJvbURpc2soJ2FsbCcsIGZ1bmN0aW9uKGRhdGFVUkwsIHR5cGUpe1xyXG4gKiAgICAgaWYodHlwZSA9PT0gJ2F1ZGlvJykgeyB9XHJcbiAqICAgICBpZih0eXBlID09PSAndmlkZW8nKSB7IH1cclxuICogICAgIGlmKHR5cGUgPT09ICdnaWYnKSAgIHsgfVxyXG4gKiB9KTtcclxuICovXHJcbk1SZWNvcmRSVEMuZ2V0RnJvbURpc2sgPSBSZWNvcmRSVEMuZ2V0RnJvbURpc2s7XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gc3RvcmUgcmVjb3JkZWQgYmxvYnMgaW50byBJbmRleGVkREIgc3RvcmFnZS5cclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSB7YXVkaW86IEJsb2IsIHZpZGVvOiBCbG9iLCBnaWY6IEJsb2J9XHJcbiAqIEBtZXRob2RcclxuICogQG1lbWJlcm9mIE1SZWNvcmRSVENcclxuICogQGV4YW1wbGVcclxuICogTVJlY29yZFJUQy53cml0ZVRvRGlzayh7XHJcbiAqICAgICBhdWRpbzogYXVkaW9CbG9iLFxyXG4gKiAgICAgdmlkZW86IHZpZGVvQmxvYixcclxuICogICAgIGdpZiAgOiBnaWZCbG9iXHJcbiAqIH0pO1xyXG4gKi9cclxuTVJlY29yZFJUQy53cml0ZVRvRGlzayA9IFJlY29yZFJUQy53cml0ZVRvRGlzaztcclxuXHJcbmlmICh0eXBlb2YgUmVjb3JkUlRDICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgUmVjb3JkUlRDLk1SZWNvcmRSVEMgPSBNUmVjb3JkUlRDO1xyXG59XG5cclxudmFyIGJyb3dzZXJGYWtlVXNlckFnZW50ID0gJ0Zha2UvNS4wIChGYWtlT1MpIEFwcGxlV2ViS2l0LzEyMyAoS0hUTUwsIGxpa2UgR2Vja28pIEZha2UvMTIuMy40NTY3Ljg5IEZha2UvMTIzLjQ1JztcclxuXHJcbihmdW5jdGlvbih0aGF0KSB7XHJcbiAgICBpZiAoIXRoYXQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnbG9iYWwubmF2aWdhdG9yID0ge1xyXG4gICAgICAgIHVzZXJBZ2VudDogYnJvd3NlckZha2VVc2VyQWdlbnQsXHJcbiAgICAgICAgZ2V0VXNlck1lZGlhOiBmdW5jdGlvbigpIHt9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghZ2xvYmFsLmNvbnNvbGUpIHtcclxuICAgICAgICBnbG9iYWwuY29uc29sZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsLmNvbnNvbGUubG9nID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZ2xvYmFsLmNvbnNvbGUuZXJyb3IgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgZ2xvYmFsLmNvbnNvbGUuZXJyb3IgPSBnbG9iYWwuY29uc29sZS5sb2cgPSBnbG9iYWwuY29uc29sZS5sb2cgfHwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIGRvY3VtZW50OnRydWUgKi9cclxuICAgICAgICB0aGF0LmRvY3VtZW50ID0ge307XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jYXB0dXJlU3RyZWFtID0gZG9jdW1lbnQubW96Q2FwdHVyZVN0cmVhbSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgZ2V0Q29udGV4dDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwbGF5OiBmdW5jdGlvbigpIHt9LFxyXG4gICAgICAgICAgICAgICAgcGF1c2U6IGZ1bmN0aW9uKCkge30sXHJcbiAgICAgICAgICAgICAgICBkcmF3SW1hZ2U6IGZ1bmN0aW9uKCkge30sXHJcbiAgICAgICAgICAgICAgICB0b0RhdGFVUkw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGF0LkhUTUxWaWRlb0VsZW1lbnQgPSBmdW5jdGlvbigpIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLypnbG9iYWwgbG9jYXRpb246dHJ1ZSAqL1xyXG4gICAgICAgIHRoYXQubG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHByb3RvY29sOiAnZmlsZTonLFxyXG4gICAgICAgICAgICBocmVmOiAnJyxcclxuICAgICAgICAgICAgaGFzaDogJydcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygc2NyZWVuID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIHNjcmVlbjp0cnVlICovXHJcbiAgICAgICAgdGhhdC5zY3JlZW4gPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgVVJMID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIHNjcmVlbjp0cnVlICovXHJcbiAgICAgICAgdGhhdC5VUkwgPSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZU9iamVjdFVSTDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJldm9rZU9iamVjdFVSTDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qZ2xvYmFsIHdpbmRvdzp0cnVlICovXHJcbiAgICB0aGF0LndpbmRvdyA9IGdsb2JhbDtcclxufSkodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiBudWxsKTtcblxyXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG4vLyBDcm9zcy1Ccm93c2VyLURlY2xhcmF0aW9ucy5qc1xyXG5cclxuLy8gYW5pbWF0aW9uLWZyYW1lIHVzZWQgaW4gV2ViTSByZWNvcmRpbmdcclxuXHJcbi8qanNoaW50IC1XMDc5ICovXHJcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG5pZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGlmICh0eXBlb2Ygd2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIHJlcXVlc3RBbmltYXRpb25GcmFtZTp0cnVlICovXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIHJlcXVlc3RBbmltYXRpb25GcmFtZTp0cnVlICovXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gbW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLypnbG9iYWwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lOnRydWUgKi9cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBtc1JlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvLyB2aWE6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxXHJcbiAgICAgICAgdmFyIGxhc3RUaW1lID0gMDtcclxuXHJcbiAgICAgICAgLypnbG9iYWwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lOnRydWUgKi9cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xyXG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcclxuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XHJcbiAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKmpzaGludCAtVzA3OSAqL1xyXG52YXIgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcbmlmICh0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBpZiAodHlwZW9mIHdlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIGNhbmNlbEFuaW1hdGlvbkZyYW1lOnRydWUgKi9cclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLypnbG9iYWwgY2FuY2VsQW5pbWF0aW9uRnJhbWU6dHJ1ZSAqL1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gbW96Q2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtc0NhbmNlbEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIGNhbmNlbEFuaW1hdGlvbkZyYW1lOnRydWUgKi9cclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IG1zQ2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjYW5jZWxBbmltYXRpb25GcmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCBjYW5jZWxBbmltYXRpb25GcmFtZTp0cnVlICovXHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFdlYkF1ZGlvIEFQSSByZXByZXNlbnRlclxyXG52YXIgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dDtcclxuXHJcbmlmICh0eXBlb2YgQXVkaW9Db250ZXh0ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgaWYgKHR5cGVvZiB3ZWJraXRBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLypnbG9iYWwgQXVkaW9Db250ZXh0OnRydWUgKi9cclxuICAgICAgICBBdWRpb0NvbnRleHQgPSB3ZWJraXRBdWRpb0NvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBtb3pBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLypnbG9iYWwgQXVkaW9Db250ZXh0OnRydWUgKi9cclxuICAgICAgICBBdWRpb0NvbnRleHQgPSBtb3pBdWRpb0NvbnRleHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qanNoaW50IC1XMDc5ICovXHJcbnZhciBVUkwgPSB3aW5kb3cuVVJMO1xyXG5cclxuaWYgKHR5cGVvZiBVUkwgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3ZWJraXRVUkwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvKmdsb2JhbCBVUkw6dHJ1ZSAqL1xyXG4gICAgVVJMID0gd2Via2l0VVJMO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPT09ICd1bmRlZmluZWQnKSB7IC8vIG1heWJlIHdpbmRvdy5uYXZpZ2F0b3I/XHJcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgaXNFZGdlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdFZGdlJykgIT09IC0xICYmICghIW5hdmlnYXRvci5tc1NhdmVCbG9iIHx8ICEhbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpO1xyXG52YXIgaXNPcGVyYSA9ICEhd2luZG93Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignT1BSLycpICE9PSAtMTtcclxudmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMSAmJiAoJ25ldHNjYXBlJyBpbiB3aW5kb3cpICYmIC8gcnY6Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG52YXIgaXNDaHJvbWUgPSAoIWlzT3BlcmEgJiYgIWlzRWRnZSAmJiAhIW5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEpIHx8IGlzRWxlY3Ryb24oKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lLycpICE9PSAtMTtcclxuXHJcbnZhciBpc1NhZmFyaSA9IC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG5pZiAoaXNTYWZhcmkgJiYgIWlzQ2hyb21lICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ3JpT1MnKSAhPT0gLTEpIHtcclxuICAgIGlzU2FmYXJpID0gZmFsc2U7XHJcbiAgICBpc0Nocm9tZSA9IHRydWU7XHJcbn1cclxuXHJcbnZhciBNZWRpYVN0cmVhbSA9IHdpbmRvdy5NZWRpYVN0cmVhbTtcclxuXHJcbmlmICh0eXBlb2YgTWVkaWFTdHJlYW0gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3ZWJraXRNZWRpYVN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIE1lZGlhU3RyZWFtID0gd2Via2l0TWVkaWFTdHJlYW07XHJcbn1cclxuXHJcbi8qZ2xvYmFsIE1lZGlhU3RyZWFtOnRydWUgKi9cclxuaWYgKHR5cGVvZiBNZWRpYVN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIG92ZXJyaWRlIFwic3RvcFwiIG1ldGhvZCBmb3IgYWxsIGJyb3dzZXJzXHJcbiAgICBpZiAodHlwZW9mIE1lZGlhU3RyZWFtLnByb3RvdHlwZS5zdG9wID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIE1lZGlhU3RyZWFtLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xyXG4gICAgICAgICAgICAgICAgdHJhY2suc3RvcCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBiZWxvdyBmdW5jdGlvbiB2aWE6IGh0dHA6Ly9nb28uZ2wvQjNhZThjXHJcbi8qKlxyXG4gKiBSZXR1cm4gaHVtYW4tcmVhZGFibGUgZmlsZSBzaXplLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gYnl0ZXMgLSBQYXNzIGJ5dGVzIGFuZCBnZXQgZm9ybWF0dGVkIHN0cmluZy5cclxuICogQHJldHVybnMge3N0cmluZ30gLSBmb3JtYXR0ZWQgc3RyaW5nXHJcbiAqIEBleGFtcGxlXHJcbiAqIGJ5dGVzVG9TaXplKDEwMjQqMTAyNCo1KSA9PT0gJzUgR0InXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICovXHJcbmZ1bmN0aW9uIGJ5dGVzVG9TaXplKGJ5dGVzKSB7XHJcbiAgICB2YXIgayA9IDEwMDA7XHJcbiAgICB2YXIgc2l6ZXMgPSBbJ0J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJ107XHJcbiAgICBpZiAoYnl0ZXMgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gJzAgQnl0ZXMnO1xyXG4gICAgfVxyXG4gICAgdmFyIGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKSwgMTApO1xyXG4gICAgcmV0dXJuIChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b1ByZWNpc2lvbigzKSArICcgJyArIHNpemVzW2ldO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtCbG9ifSBmaWxlIC0gRmlsZSBvciBCbG9iIG9iamVjdC4gVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAtIE9wdGlvbmFsIGZpbGUgbmFtZSBlLmcuIFwiUmVjb3JkZWQtVmlkZW8ud2VibVwiXHJcbiAqIEBleGFtcGxlXHJcbiAqIGludm9rZVNhdmVBc0RpYWxvZyhibG9iIG9yIGZpbGUsIFtvcHRpb25hbF0gZmlsZU5hbWUpO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBpbnZva2VTYXZlQXNEaWFsb2coZmlsZSwgZmlsZU5hbWUpIHtcclxuICAgIGlmICghZmlsZSkge1xyXG4gICAgICAgIHRocm93ICdCbG9iIG9iamVjdCBpcyByZXF1aXJlZC4nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZmlsZS50eXBlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZmlsZS50eXBlID0gJ3ZpZGVvL3dlYm0nO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZpbGVFeHRlbnNpb24gPSAoZmlsZS50eXBlIHx8ICd2aWRlby93ZWJtJykuc3BsaXQoJy8nKVsxXTtcclxuXHJcbiAgICBpZiAoZmlsZU5hbWUgJiYgZmlsZU5hbWUuaW5kZXhPZignLicpICE9PSAtMSkge1xyXG4gICAgICAgIHZhciBzcGxpdHRlZCA9IGZpbGVOYW1lLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgZmlsZU5hbWUgPSBzcGxpdHRlZFswXTtcclxuICAgICAgICBmaWxlRXh0ZW5zaW9uID0gc3BsaXR0ZWRbMV07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZpbGVGdWxsTmFtZSA9IChmaWxlTmFtZSB8fCAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOTk5OTk5OTk5OSkgKyA4ODg4ODg4ODgpKSArICcuJyArIGZpbGVFeHRlbnNpb247XHJcblxyXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoZmlsZSwgZmlsZUZ1bGxOYW1lKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvci5tc1NhdmVCbG9iICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubXNTYXZlQmxvYihmaWxlLCBmaWxlRnVsbE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBoeXBlcmxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBoeXBlcmxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICBoeXBlcmxpbmsuZG93bmxvYWQgPSBmaWxlRnVsbE5hbWU7XHJcblxyXG4gICAgaHlwZXJsaW5rLnN0eWxlID0gJ2Rpc3BsYXk6bm9uZTtvcGFjaXR5OjA7Y29sb3I6dHJhbnNwYXJlbnQ7JztcclxuICAgIChkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuYXBwZW5kQ2hpbGQoaHlwZXJsaW5rKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGh5cGVybGluay5jbGljayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGh5cGVybGluay5jbGljaygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBoeXBlcmxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XHJcbiAgICAgICAgaHlwZXJsaW5rLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xyXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXHJcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTChoeXBlcmxpbmsuaHJlZik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vY2hldG9uL2lzLWVsZWN0cm9uL2Jsb2IvbWFzdGVyL2luZGV4LmpzXHJcbiAqKi9cclxuZnVuY3Rpb24gaXNFbGVjdHJvbigpIHtcclxuICAgIC8vIFJlbmRlcmVyIHByb2Nlc3NcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnByb2Nlc3MgPT09ICdvYmplY3QnICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIHByb2Nlc3NcclxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMgPT09ICdvYmplY3QnICYmICEhcHJvY2Vzcy52ZXJzaW9ucy5lbGVjdHJvbikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERldGVjdCB0aGUgdXNlciBhZ2VudCB3aGVuIHRoZSBgbm9kZUludGVncmF0aW9uYCBvcHRpb24gaXMgc2V0IHRvIHRydWVcclxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbmF2aWdhdG9yLnVzZXJBZ2VudCA9PT0gJ3N0cmluZycgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdFbGVjdHJvbicpID49IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRyYWNrcyhzdHJlYW0sIGtpbmQpIHtcclxuICAgIGlmICghc3RyZWFtIHx8ICFzdHJlYW0uZ2V0VHJhY2tzKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHJlYW0uZ2V0VHJhY2tzKCkuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICByZXR1cm4gdC5raW5kID09PSAoa2luZCB8fCAnYXVkaW8nKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTcmNPYmplY3Qoc3RyZWFtLCBlbGVtZW50KSB7XHJcbiAgICBpZiAoJ3NyY09iamVjdCcgaW4gZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgfSBlbHNlIGlmICgnbW96U3JjT2JqZWN0JyBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5tb3pTcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtCbG9ifSBmaWxlIC0gRmlsZSBvciBCbG9iIG9iamVjdC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbi5cclxuICogQGV4YW1wbGVcclxuICogZ2V0U2Vla2FibGVCbG9iKGJsb2Igb3IgZmlsZSwgY2FsbGJhY2spO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTZWVrYWJsZUJsb2IoaW5wdXRCbG9iLCBjYWxsYmFjaykge1xyXG4gICAgLy8gRUJNTC5qcyBjb3B5cmlnaHRzIGdvZXMgdG86IGh0dHBzOi8vZ2l0aHViLmNvbS9sZWdva2ljaGkvdHMtZWJtbFxyXG4gICAgaWYgKHR5cGVvZiBFQk1MID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGxpbms6IGh0dHBzOi8vY2RuLndlYnJ0Yy1leHBlcmltZW50LmNvbS9FQk1MLmpzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlYWRlciA9IG5ldyBFQk1MLlJlYWRlcigpO1xyXG4gICAgdmFyIGRlY29kZXIgPSBuZXcgRUJNTC5EZWNvZGVyKCk7XHJcbiAgICB2YXIgdG9vbHMgPSBFQk1MLnRvb2xzO1xyXG5cclxuICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBlYm1sRWxtcyA9IGRlY29kZXIuZGVjb2RlKHRoaXMucmVzdWx0KTtcclxuICAgICAgICBlYm1sRWxtcy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWQoZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVhZGVyLnN0b3AoKTtcclxuICAgICAgICB2YXIgcmVmaW5lZE1ldGFkYXRhQnVmID0gdG9vbHMubWFrZU1ldGFkYXRhU2Vla2FibGUocmVhZGVyLm1ldGFkYXRhcywgcmVhZGVyLmR1cmF0aW9uLCByZWFkZXIuY3Vlcyk7XHJcbiAgICAgICAgdmFyIGJvZHkgPSB0aGlzLnJlc3VsdC5zbGljZShyZWFkZXIubWV0YWRhdGFTaXplKTtcclxuICAgICAgICB2YXIgbmV3QmxvYiA9IG5ldyBCbG9iKFtyZWZpbmVkTWV0YWRhdGFCdWYsIGJvZHldLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICd2aWRlby93ZWJtJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYWxsYmFjayhuZXdCbG9iKTtcclxuICAgIH07XHJcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGlucHV0QmxvYik7XHJcbn1cblxyXG4vLyBfX19fX19fX19fICh1c2VkIHRvIGhhbmRsZSBzdHVmZiBsaWtlIGh0dHA6Ly9nb28uZ2wveG1FNWVnKSBpc3N1ZSAjMTI5XHJcbi8vIFN0b3JhZ2UuanNcclxuXHJcbi8qKlxyXG4gKiBTdG9yYWdlIGlzIGEgc3RhbmRhbG9uZSBvYmplY3QgdXNlZCBieSB7QGxpbmsgUmVjb3JkUlRDfSB0byBzdG9yZSByZXVzYWJsZSBvYmplY3RzIGUuZy4gXCJuZXcgQXVkaW9Db250ZXh0XCIuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAZXhhbXBsZVxyXG4gKiBTdG9yYWdlLkF1ZGlvQ29udGV4dCA9PT0gd2Via2l0QXVkaW9Db250ZXh0XHJcbiAqIEBwcm9wZXJ0eSB7d2Via2l0QXVkaW9Db250ZXh0fSBBdWRpb0NvbnRleHQgLSBLZWVwcyBhIHJlZmVyZW5jZSB0byBBdWRpb0NvbnRleHQgb2JqZWN0LlxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqL1xyXG5cclxudmFyIFN0b3JhZ2UgPSB7fTtcclxuXHJcbmlmICh0eXBlb2YgQXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgU3RvcmFnZS5BdWRpb0NvbnRleHQgPSBBdWRpb0NvbnRleHQ7XHJcbn0gZWxzZSBpZiAodHlwZW9mIHdlYmtpdEF1ZGlvQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFN0b3JhZ2UuQXVkaW9Db250ZXh0ID0gd2Via2l0QXVkaW9Db250ZXh0O1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5TdG9yYWdlID0gU3RvcmFnZTtcclxufVxuXHJcbmZ1bmN0aW9uIGlzTWVkaWFSZWNvcmRlckNvbXBhdGlibGUoKSB7XHJcbiAgICBpZiAoaXNGaXJlZm94IHx8IGlzU2FmYXJpIHx8IGlzRWRnZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBuVmVyID0gbmF2aWdhdG9yLmFwcFZlcnNpb247XHJcbiAgICB2YXIgbkFndCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICB2YXIgZnVsbFZlcnNpb24gPSAnJyArIHBhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xyXG4gICAgdmFyIG1ham9yVmVyc2lvbiA9IHBhcnNlSW50KG5hdmlnYXRvci5hcHBWZXJzaW9uLCAxMCk7XHJcbiAgICB2YXIgbmFtZU9mZnNldCwgdmVyT2Zmc2V0LCBpeDtcclxuXHJcbiAgICBpZiAoaXNDaHJvbWUgfHwgaXNPcGVyYSkge1xyXG4gICAgICAgIHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignQ2hyb21lJyk7XHJcbiAgICAgICAgZnVsbFZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA3KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0cmltIHRoZSBmdWxsVmVyc2lvbiBzdHJpbmcgYXQgc2VtaWNvbG9uL3NwYWNlIGlmIHByZXNlbnRcclxuICAgIGlmICgoaXggPSBmdWxsVmVyc2lvbi5pbmRleE9mKCc7JykpICE9PSAtMSkge1xyXG4gICAgICAgIGZ1bGxWZXJzaW9uID0gZnVsbFZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGl4ID0gZnVsbFZlcnNpb24uaW5kZXhPZignICcpKSAhPT0gLTEpIHtcclxuICAgICAgICBmdWxsVmVyc2lvbiA9IGZ1bGxWZXJzaW9uLnN1YnN0cmluZygwLCBpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQoJycgKyBmdWxsVmVyc2lvbiwgMTApO1xyXG5cclxuICAgIGlmIChpc05hTihtYWpvclZlcnNpb24pKSB7XHJcbiAgICAgICAgZnVsbFZlcnNpb24gPSAnJyArIHBhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xyXG4gICAgICAgIG1ham9yVmVyc2lvbiA9IHBhcnNlSW50KG5hdmlnYXRvci5hcHBWZXJzaW9uLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1ham9yVmVyc2lvbiA+PSA0OTtcclxufVxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX19cclxuLy8gTWVkaWFTdHJlYW1SZWNvcmRlci5qc1xyXG5cclxuLyoqXHJcbiAqIE1lZGlhU3RyZWFtUmVjb3JkZXIgaXMgYW4gYWJzdHJhY3Rpb24gbGF5ZXIgZm9yIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vbWVkaWFjYXB0dXJlLXJlY29yZC9NZWRpYVJlY29yZGVyLmh0bWx8TWVkaWFSZWNvcmRlciBBUEl9LiBJdCBpcyB1c2VkIGJ5IHtAbGluayBSZWNvcmRSVEN9IHRvIHJlY29yZCBNZWRpYVN0cmVhbShzKSBpbiBib3RoIENocm9tZSBhbmQgRmlyZWZveC5cclxuICogQHN1bW1hcnkgUnVucyB0b3Agb3ZlciB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL21lZGlhY2FwdHVyZS1yZWNvcmQvTWVkaWFSZWNvcmRlci5odG1sfE1lZGlhUmVjb3JkZXIgQVBJfS5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFufE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgTWVkaWFTdHJlYW1SZWNvcmRlclxyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIGNvbmZpZyA9IHtcclxuICogICAgIG1pbWVUeXBlOiAndmlkZW8vd2VibScsIC8vIHZwOCwgdnA5LCBoMjY0LCBta3YsIG9wdXMvdm9yYmlzXHJcbiAqICAgICBhdWRpb0JpdHNQZXJTZWNvbmQgOiAyNTYgKiA4ICogMTAyNCxcclxuICogICAgIHZpZGVvQml0c1BlclNlY29uZCA6IDI1NiAqIDggKiAxMDI0LFxyXG4gKiAgICAgYml0c1BlclNlY29uZDogMjU2ICogOCAqIDEwMjQsICAvLyBpZiB0aGlzIGlzIHByb3ZpZGVkLCBza2lwIGFib3ZlIHR3b1xyXG4gKiAgICAgY2hlY2tGb3JJbmFjdGl2ZVRyYWNrczogdHJ1ZSxcclxuICogICAgIHRpbWVTbGljZTogMTAwMCwgLy8gY29uY2F0ZW5hdGUgaW50ZXJ2YWxzIGJhc2VkIGJsb2JzXHJcbiAqICAgICBvbmRhdGFhdmFpbGFibGU6IGZ1bmN0aW9uKCkge30gLy8gZ2V0IGludGVydmFscyBiYXNlZCBibG9ic1xyXG4gKiB9XHJcbiAqIHZhciByZWNvcmRlciA9IG5ldyBNZWRpYVN0cmVhbVJlY29yZGVyKG1lZGlhU3RyZWFtLCBjb25maWcpO1xyXG4gKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gKlxyXG4gKiAgICAgLy8gb3JcclxuICogICAgIHZhciBibG9iID0gcmVjb3JkZXIuYmxvYjtcclxuICogfSk7XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBNZWRpYVN0cmVhbSBvYmplY3QgZmV0Y2hlZCB1c2luZyBnZXRVc2VyTWVkaWEgQVBJIG9yIGdlbmVyYXRlZCB1c2luZyBjYXB0dXJlU3RyZWFtVW50aWxFbmRlZCBvciBXZWJBdWRpbyBBUEkuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7ZGlzYWJsZUxvZ3M6dHJ1ZSwgaW5pdENhbGxiYWNrOiBmdW5jdGlvbiwgbWltZVR5cGU6IFwidmlkZW8vd2VibVwiLCB0aW1lU2xpY2U6IDEwMDB9XHJcbiAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiBmaXJzdCBhcmd1bWVudCBcIk1lZGlhU3RyZWFtXCIgaXMgbWlzc2luZy4gQWxzbyB0aHJvd3MgZXJyb3IgaWYgXCJNZWRpYVJlY29yZGVyIEFQSVwiIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIE1lZGlhU3RyZWFtUmVjb3JkZXIobWVkaWFTdHJlYW0sIGNvbmZpZykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmICh0eXBlb2YgbWVkaWFTdHJlYW0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdGhyb3cgJ0ZpcnN0IGFyZ3VtZW50IFwiTWVkaWFTdHJlYW1cIiBpcyByZXF1aXJlZC4nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgTWVkaWFSZWNvcmRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aHJvdyAnWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnRzIE1lZGlhIFJlY29yZGVyIEFQSS4gUGxlYXNlIHRyeSBvdGhlciBtb2R1bGVzIGUuZy4gV2hhbW15UmVjb3JkZXIgb3IgU3RlcmVvQXVkaW9SZWNvcmRlci4nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7XHJcbiAgICAgICAgLy8gYml0c1BlclNlY29uZDogMjU2ICogOCAqIDEwMjQsXHJcbiAgICAgICAgbWltZVR5cGU6ICd2aWRlby93ZWJtJ1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICdhdWRpbycpIHtcclxuICAgICAgICBpZiAoZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAndmlkZW8nKS5sZW5ndGggJiYgZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAnYXVkaW8nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHN0cmVhbTtcclxuICAgICAgICAgICAgaWYgKCEhbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSkge1xyXG4gICAgICAgICAgICAgICAgc3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKCk7XHJcbiAgICAgICAgICAgICAgICBzdHJlYW0uYWRkVHJhY2soZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAnYXVkaW8nKVswXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3ZWJraXRNZWRpYVN0cmVhbVxyXG4gICAgICAgICAgICAgICAgc3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKGdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ2F1ZGlvJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1lZGlhU3RyZWFtID0gc3RyZWFtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcubWltZVR5cGUgfHwgY29uZmlnLm1pbWVUeXBlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdhdWRpbycpID09PSAtMSkge1xyXG4gICAgICAgICAgICBjb25maWcubWltZVR5cGUgPSBpc0Nocm9tZSA/ICdhdWRpby93ZWJtJyA6ICdhdWRpby9vZ2cnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5taW1lVHlwZSAmJiBjb25maWcubWltZVR5cGUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9PSAnYXVkaW8vb2dnJyAmJiAhIW5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcclxuICAgICAgICAgICAgLy8gZm9yY2luZyBiZXR0ZXIgY29kZWNzIG9uIEZpcmVmb3ggKHZpYSAjMTY2KVxyXG4gICAgICAgICAgICBjb25maWcubWltZVR5cGUgPSAnYXVkaW8vb2dnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFycmF5T2ZCbG9icyA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyBhcnJheSBvZiBibG9icy4gVXNlIG9ubHkgd2l0aCBcInRpbWVTbGljZVwiLiBJdHMgdXNlZnVsIHRvIHByZXZpZXcgcmVjb3JkaW5nIGFueXRpbWUsIHdpdGhvdXQgdXNpbmcgdGhlIFwic3RvcFwiIG1ldGhvZC5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogdmFyIGFycmF5T2ZCbG9icyA9IHJlY29yZGVyLmdldEFycmF5T2ZCbG9icygpO1xyXG4gICAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGFycmF5IG9mIHJlY29yZGVkIGJsb2JzLlxyXG4gICAgICovXHJcbiAgICB0aGlzLmdldEFycmF5T2ZCbG9icyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBhcnJheU9mQmxvYnM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyBNZWRpYVN0cmVhbS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVjb3JkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gc2V0IGRlZmF1bHRzXHJcbiAgICAgICAgc2VsZi5ibG9iID0gbnVsbDtcclxuICAgICAgICBzZWxmLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcbiAgICAgICAgc2VsZi50aW1lc3RhbXBzID0gW107XHJcbiAgICAgICAgYWxsU3RhdGVzID0gW107XHJcbiAgICAgICAgYXJyYXlPZkJsb2JzID0gW107XHJcblxyXG4gICAgICAgIHZhciByZWNvcmRlckhpbnRzID0gY29uZmlnO1xyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGFzc2luZyBmb2xsb3dpbmcgY29uZmlnIG92ZXIgTWVkaWFSZWNvcmRlciBBUEkuJywgcmVjb3JkZXJIaW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAvLyBtYW5kYXRvcnkgdG8gbWFrZSBzdXJlIEZpcmVmb3ggZG9lc24ndCBmYWlscyB0byByZWNvcmQgc3RyZWFtcyAzLTQgdGltZXMgd2l0aG91dCByZWxvYWRpbmcgdGhlIHBhZ2UuXHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQ2hyb21lICYmICFpc01lZGlhUmVjb3JkZXJDb21wYXRpYmxlKCkpIHtcclxuICAgICAgICAgICAgLy8gdG8gc3VwcG9ydCB2aWRlby1vbmx5IHJlY29yZGluZyBvbiBzdGFibGVcclxuICAgICAgICAgICAgcmVjb3JkZXJIaW50cyA9ICd2aWRlby92cDgnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZCA9PT0gJ2Z1bmN0aW9uJyAmJiByZWNvcmRlckhpbnRzLm1pbWVUeXBlKSB7XHJcbiAgICAgICAgICAgIGlmICghTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQocmVjb3JkZXJIaW50cy5taW1lVHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNZWRpYVJlY29yZGVyIEFQSSBzZWVtcyB1bmFibGUgdG8gcmVjb3JkIG1pbWVUeXBlOicsIHJlY29yZGVySGludHMubWltZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZGVySGludHMubWltZVR5cGUgPSBjb25maWcudHlwZSA9PT0gJ2F1ZGlvJyA/ICdhdWRpby93ZWJtJyA6ICd2aWRlby93ZWJtJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXNpbmcgTWVkaWFSZWNvcmRlciBBUEkgaGVyZVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihtZWRpYVN0cmVhbSwgcmVjb3JkZXJIaW50cyk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXNldFxyXG4gICAgICAgICAgICBjb25maWcubWltZVR5cGUgPSByZWNvcmRlckhpbnRzLm1pbWVUeXBlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gY2hyb21lLWJhc2VkIGZhbGxiYWNrXHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihtZWRpYVN0cmVhbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvbGQgaGFjaz9cclxuICAgICAgICBpZiAocmVjb3JkZXJIaW50cy5taW1lVHlwZSAmJiAhTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQgJiYgJ2NhblJlY29yZE1pbWVUeXBlJyBpbiBtZWRpYVJlY29yZGVyICYmIG1lZGlhUmVjb3JkZXIuY2FuUmVjb3JkTWltZVR5cGUocmVjb3JkZXJIaW50cy5taW1lVHlwZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01lZGlhUmVjb3JkZXIgQVBJIHNlZW1zIHVuYWJsZSB0byByZWNvcmQgbWltZVR5cGU6JywgcmVjb3JkZXJIaW50cy5taW1lVHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERpc3BhdGNoaW5nIE9uRGF0YUF2YWlsYWJsZSBIYW5kbGVyXHJcbiAgICAgICAgbWVkaWFSZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGFsbFN0YXRlcy5wdXNoKCdvbmRhdGFhdmFpbGFibGU6ICcgKyBieXRlc1RvU2l6ZShlLmRhdGEuc2l6ZSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy50aW1lU2xpY2UgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhICYmIGUuZGF0YS5zaXplICYmIGUuZGF0YS5zaXplID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlPZkJsb2JzLnB1c2goZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lU3RhbXAoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWcub25kYXRhYXZhaWxhYmxlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludGVydmFscyBiYXNlZCBibG9ic1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmxvYiA9IGNvbmZpZy5nZXROYXRpdmVCbG9iID8gZS5kYXRhIDogbmV3IEJsb2IoW2UuZGF0YV0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGdldE1pbWVUeXBlKHJlY29yZGVySGludHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWcub25kYXRhYXZhaWxhYmxlKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFlLmRhdGEgfHwgIWUuZGF0YS5zaXplIHx8IGUuZGF0YS5zaXplIDwgMTAwIHx8IHNlbGYuYmxvYikge1xyXG4gICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgc3RvcFJlY29yZGluZyBhbHdheXMgZ2V0dGluZyBmaXJlZFxyXG4gICAgICAgICAgICAgICAgLy8gZXZlbiBpZiB0aGVyZSBpcyBpbnZhbGlkIGRhdGFcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnJlY29yZGluZ0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNvcmRpbmdDYWxsYmFjayhuZXcgQmxvYihbXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBnZXRNaW1lVHlwZShyZWNvcmRlckhpbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY29yZGluZ0NhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5ibG9iID0gY29uZmlnLmdldE5hdGl2ZUJsb2IgPyBlLmRhdGEgOiBuZXcgQmxvYihbZS5kYXRhXSwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogZ2V0TWltZVR5cGUocmVjb3JkZXJIaW50cylcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi5yZWNvcmRpbmdDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZWNvcmRpbmdDYWxsYmFjayhzZWxmLmJsb2IpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZWNvcmRpbmdDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZWRpYVJlY29yZGVyLm9uc3RhcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWxsU3RhdGVzLnB1c2goJ3N0YXJ0ZWQnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZWRpYVJlY29yZGVyLm9ucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWxsU3RhdGVzLnB1c2goJ3BhdXNlZCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIub25yZXN1bWUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWxsU3RhdGVzLnB1c2goJ3Jlc3VtZWQnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZWRpYVJlY29yZGVyLm9uc3RvcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBhbGxTdGF0ZXMucHVzaCgnc3RvcHBlZCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIub25lcnJvciA9IGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFlcnJvci5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvci5uYW1lID0gJ1Vua25vd25FcnJvcic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFsbFN0YXRlcy5wdXNoKCdlcnJvcjogJyArIGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB2aWE6IGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9tZWRpYWNhcHR1cmUtcmVjb3JkL01lZGlhUmVjb3JkZXIuaHRtbCNleGNlcHRpb24tc3VtbWFyeVxyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLm5hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ludmFsaWRzdGF0ZScpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBNZWRpYVJlY29yZGVyIGlzIG5vdCBpbiBhIHN0YXRlIGluIHdoaWNoIHRoZSBwcm9wb3NlZCBvcGVyYXRpb24gaXMgYWxsb3dlZCB0byBiZSBleGVjdXRlZC4nLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ25vdHN1cHBvcnRlZCcpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01JTUUgdHlwZSAoJywgcmVjb3JkZXJIaW50cy5taW1lVHlwZSwgJykgaXMgbm90IHN1cHBvcnRlZC4nLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlY3VyaXR5JykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWVkaWFSZWNvcmRlciBzZWN1cml0eSBlcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBvbGRlciBjb2RlIGJlbG93XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnJvci5uYW1lID09PSAnT3V0T2ZNZW1vcnknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIFVBIGhhcyBleGhhdXNlZCB0aGUgYXZhaWxhYmxlIG1lbW9yeS4gVXNlciBhZ2VudHMgU0hPVUxEIHByb3ZpZGUgYXMgbXVjaCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFzIHBvc3NpYmxlIGluIHRoZSBtZXNzYWdlIGF0dHJpYnV0ZS4nLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdJbGxlZ2FsU3RyZWFtTW9kaWZpY2F0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0EgbW9kaWZpY2F0aW9uIHRvIHRoZSBzdHJlYW0gaGFzIG9jY3VycmVkIHRoYXQgbWFrZXMgaXQgaW1wb3NzaWJsZSB0byBjb250aW51ZSByZWNvcmRpbmcuIEFuIGV4YW1wbGUgd291bGQgYmUgdGhlIGFkZGl0aW9uIG9mIGEgVHJhY2sgd2hpbGUgcmVjb3JkaW5nIGlzIG9jY3VycmluZy4gVXNlciBhZ2VudHMgU0hPVUxEIHByb3ZpZGUgYXMgbXVjaCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFzIHBvc3NpYmxlIGluIHRoZSBtZXNzYWdlIGF0dHJpYnV0ZS4nLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdPdGhlclJlY29yZGluZ0Vycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZWQgZm9yIGFuIGZhdGFsIGVycm9yIG90aGVyIHRoYW4gdGhvc2UgbGlzdGVkIGFib3ZlLiBVc2VyIGFnZW50cyBTSE9VTEQgcHJvdmlkZSBhcyBtdWNoIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYXMgcG9zc2libGUgaW4gdGhlIG1lc3NhZ2UgYXR0cmlidXRlLicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IubmFtZSA9PT0gJ0dlbmVyaWNFcnJvcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgVUEgY2Fubm90IHByb3ZpZGUgdGhlIGNvZGVjIG9yIHJlY29yZGluZyBvcHRpb24gdGhhdCBoYXMgYmVlbiByZXF1ZXN0ZWQuJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNZWRpYVJlY29yZGVyIEVycm9yJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAoZnVuY3Rpb24obG9vcGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYubWFudWFsbHlTdG9wcGVkICYmIG1lZGlhUmVjb3JkZXIgJiYgbWVkaWFSZWNvcmRlci5zdGF0ZSA9PT0gJ2luYWN0aXZlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcudGltZXNsaWNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMCBtaW51dGVzLCBlbm91Z2g/XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdGFydCgxMCAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobG9vcGVyLCAxMDAwKTtcclxuICAgICAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtZWRpYVJlY29yZGVyLnN0YXRlICE9PSAnaW5hY3RpdmUnICYmIG1lZGlhUmVjb3JkZXIuc3RhdGUgIT09ICdzdG9wcGVkJykge1xyXG4gICAgICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy50aW1lU2xpY2UgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVTdGFtcCgpO1xyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0YXJ0KGNvbmZpZy50aW1lU2xpY2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgaXMgNjAgbWludXRlczsgZW5vdWdoP1xyXG4gICAgICAgICAgICAvLyB1c2UgY29uZmlnID0+IHt0aW1lU2xpY2U6IDEwMDB9IG90aGVyd2lzZVxyXG5cclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdGFydCgzLjZlKzYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5pbml0Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY29uZmlnLmluaXRDYWxsYmFjaygpOyAvLyBvbGQgY29kZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJvcGVydHkge0FycmF5fSB0aW1lc3RhbXBzIC0gQXJyYXkgb2YgdGltZSBzdGFtcHNcclxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogY29uc29sZS5sb2cocmVjb3JkZXIudGltZXN0YW1wcyk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMudGltZXN0YW1wcyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVTdGFtcCgpIHtcclxuICAgICAgICBzZWxmLnRpbWVzdGFtcHMucHVzaChuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVGltZVN0YW1wID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5vblRpbWVTdGFtcChzZWxmLnRpbWVzdGFtcHNbc2VsZi50aW1lc3RhbXBzLmxlbmd0aCAtIDFdLCBzZWxmLnRpbWVzdGFtcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNaW1lVHlwZShzZWNvbmRPYmplY3QpIHtcclxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlciAmJiBtZWRpYVJlY29yZGVyLm1pbWVUeXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZWRpYVJlY29yZGVyLm1pbWVUeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNlY29uZE9iamVjdC5taW1lVHlwZSB8fCAndmlkZW8vd2VibSc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcgTWVkaWFTdHJlYW0uXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uLCB0aGF0IGlzIHVzZWQgdG8gcGFzcyByZWNvcmRlZCBibG9iIGJhY2sgdG8gdGhlIGNhbGxlZS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuXHJcbiAgICAgICAgc2VsZi5tYW51YWxseVN0b3BwZWQgPSB0cnVlOyAvLyB1c2VkIGluc2lkZSB0aGUgbWVkaWFSZWNvcmRlci5vbmVycm9yXHJcblxyXG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlY29yZGluZ0NhbGxiYWNrID0gY2FsbGJhY2s7XHJcblxyXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyLnN0YXRlID09PSAncmVjb3JkaW5nJykge1xyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnRpbWVTbGljZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuYmxvYiA9IG5ldyBCbG9iKGFycmF5T2ZCbG9icywge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGdldE1pbWVUeXBlKGNvbmZpZylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYucmVjb3JkaW5nQ2FsbGJhY2soc2VsZi5ibG9iKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcGF1c2VzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucGF1c2UoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlci5zdGF0ZSA9PT0gJ3JlY29yZGluZycpIHtcclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXN1bWVzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVzdW1lKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVzdW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyLnN0YXRlID09PSAncGF1c2VkJykge1xyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXNldHMgY3VycmVudGx5IHJlY29yZGVkIGRhdGEuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2xlYXJSZWNvcmRlZERhdGEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlciAmJiBtZWRpYVJlY29yZGVyLnN0YXRlID09PSAncmVjb3JkaW5nJykge1xyXG4gICAgICAgICAgICBzZWxmLnN0b3AoY2xlYXJSZWNvcmRlZERhdGFDQik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclJlY29yZGVkRGF0YUNCKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVjb3JkZWREYXRhQ0IoKSB7XHJcbiAgICAgICAgYXJyYXlPZkJsb2JzID0gW107XHJcbiAgICAgICAgbWVkaWFSZWNvcmRlciA9IG51bGw7XHJcbiAgICAgICAgc2VsZi50aW1lc3RhbXBzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVmZXJlbmNlIHRvIFwiTWVkaWFSZWNvcmRlclwiIG9iamVjdFxyXG4gICAgdmFyIG1lZGlhUmVjb3JkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBY2Nlc3MgdG8gbmF0aXZlIE1lZGlhUmVjb3JkZXIgQVBJXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogdmFyIGludGVybmFsID0gcmVjb3JkZXIuZ2V0SW50ZXJuYWxSZWNvcmRlcigpO1xyXG4gICAgICogaW50ZXJuYWwub25kYXRhYXZhaWxhYmxlID0gZnVuY3Rpb24oKSB7fTsgLy8gb3ZlcnJpZGVcclxuICAgICAqIGludGVybmFsLnN0cmVhbSwgaW50ZXJuYWwub25wYXVzZSwgaW50ZXJuYWwub25zdG9wLCBldGMuXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGludGVybmFsIHJlY29yZGluZyBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ2V0SW50ZXJuYWxSZWNvcmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBtZWRpYVJlY29yZGVyO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc01lZGlhU3RyZWFtQWN0aXZlKCkge1xyXG4gICAgICAgIGlmICgnYWN0aXZlJyBpbiBtZWRpYVN0cmVhbSkge1xyXG4gICAgICAgICAgICBpZiAoIW1lZGlhU3RyZWFtLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICgnZW5kZWQnIGluIG1lZGlhU3RyZWFtKSB7IC8vIG9sZCBoYWNrXHJcbiAgICAgICAgICAgIGlmIChtZWRpYVN0cmVhbS5lbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3BlcnR5IHtCbG9ifSBibG9iIC0gUmVjb3JkZWQgZGF0YSBhcyBcIkJsb2JcIiBvYmplY3QuXHJcbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oKSB7XHJcbiAgICAgKiAgICAgdmFyIGJsb2IgPSByZWNvcmRlci5ibG9iO1xyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuYmxvYiA9IG51bGw7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IE1lZGlhUmVjb3JkZXIgcmVhZG9ubHkgc3RhdGUuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHZhciBzdGF0ZSA9IHJlY29yZGVyLmdldFN0YXRlKCk7XHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBSZXR1cm5zIHJlY29yZGluZyBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRTdGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2luYWN0aXZlJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZWRpYVJlY29yZGVyLnN0YXRlIHx8ICdpbmFjdGl2ZSc7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGxpc3Qgb2YgYWxsIHJlY29yZGluZyBzdGF0ZXNcclxuICAgIHZhciBhbGxTdGF0ZXMgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBNZWRpYVJlY29yZGVyIGFsbCByZWNvcmRpbmcgc3RhdGVzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE1lZGlhU3RyZWFtUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiB2YXIgc3RhdGUgPSByZWNvcmRlci5nZXRBbGxTdGF0ZXMoKTtcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhbGwgcmVjb3JkaW5nIHN0YXRlc1xyXG4gICAgICovXHJcbiAgICB0aGlzLmdldEFsbFN0YXRlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBhbGxTdGF0ZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGlmIGFueSBUcmFjayB3aXRoaW4gdGhlIE1lZGlhU3RyZWFtIGlzIG11dGVkIG9yIG5vdCBlbmFibGVkIGF0IGFueSB0aW1lLCBcclxuICAgIC8vIHRoZSBicm93c2VyIHdpbGwgb25seSByZWNvcmQgYmxhY2sgZnJhbWVzIFxyXG4gICAgLy8gb3Igc2lsZW5jZSBzaW5jZSB0aGF0IGlzIHRoZSBjb250ZW50IHByb2R1Y2VkIGJ5IHRoZSBUcmFja1xyXG4gICAgLy8gc28gd2UgbmVlZCB0byBzdG9wUmVjb3JkaW5nIGFzIHNvb24gYXMgYW55IHNpbmdsZSB0cmFjayBlbmRzLlxyXG4gICAgaWYgKHR5cGVvZiBjb25maWcuY2hlY2tGb3JJbmFjdGl2ZVRyYWNrcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBjb25maWcuY2hlY2tGb3JJbmFjdGl2ZVRyYWNrcyA9IGZhbHNlOyAvLyBkaXNhYmxlIHRvIG1pbmltaXplIENQVSB1c2FnZVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAvLyB0aGlzIG1ldGhvZCBjaGVja3MgaWYgbWVkaWEgc3RyZWFtIGlzIHN0b3BwZWRcclxuICAgIC8vIG9yIGlmIGFueSB0cmFjayBpcyBlbmRlZC5cclxuICAgIChmdW5jdGlvbiBsb29wZXIoKSB7XHJcbiAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyIHx8IGNvbmZpZy5jaGVja0ZvckluYWN0aXZlVHJhY2tzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNNZWRpYVN0cmVhbUFjdGl2ZSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01lZGlhU3RyZWFtIHNlZW1zIHN0b3BwZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5zdG9wKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQobG9vcGVyLCAxMDAwKTsgLy8gY2hlY2sgZXZlcnkgc2Vjb25kXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIGZvciBkZWJ1Z2dpbmdcclxuICAgIHRoaXMubmFtZSA9ICdNZWRpYVN0cmVhbVJlY29yZGVyJztcclxuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBSZWNvcmRSVEMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWNvcmRSVEMuTWVkaWFTdHJlYW1SZWNvcmRlciA9IE1lZGlhU3RyZWFtUmVjb3JkZXI7XHJcbn1cblxyXG4vLyBzb3VyY2UgY29kZSBmcm9tOiBodHRwOi8vdHlwZWRhcnJheS5vcmcvd3AtY29udGVudC9wcm9qZWN0cy9XZWJBdWRpb1JlY29yZGVyL3NjcmlwdC5qc1xyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWF0dGRpYW1vbmQvUmVjb3JkZXJqcyNsaWNlbnNlLW1pdFxyXG4vLyBfX19fX19fX19fX19fX19fX19fX19fXHJcbi8vIFN0ZXJlb0F1ZGlvUmVjb3JkZXIuanNcclxuXHJcbi8qKlxyXG4gKiBTdGVyZW9BdWRpb1JlY29yZGVyIGlzIGEgc3RhbmRhbG9uZSBjbGFzcyB1c2VkIGJ5IHtAbGluayBSZWNvcmRSVEN9IHRvIGJyaW5nIFwic3RlcmVvXCIgYXVkaW8tcmVjb3JkaW5nIGluIGNocm9tZS5cclxuICogQHN1bW1hcnkgSmF2YVNjcmlwdCBzdGFuZGFsb25lIG9iamVjdCBmb3Igc3RlcmVvIGF1ZGlvIHJlY29yZGluZy5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICogQGNsYXNzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciByZWNvcmRlciA9IG5ldyBTdGVyZW9BdWRpb1JlY29yZGVyKE1lZGlhU3RyZWFtLCB7XHJcbiAqICAgICBzYW1wbGVSYXRlOiA0NDEwMCxcclxuICogICAgIGJ1ZmZlclNpemU6IDQwOTZcclxuICogfSk7XHJcbiAqIHJlY29yZGVyLnJlY29yZCgpO1xyXG4gKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICogICAgIHZpZGVvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAqIH0pO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIC0gTWVkaWFTdHJlYW0gb2JqZWN0IGZldGNoZWQgdXNpbmcgZ2V0VXNlck1lZGlhIEFQSSBvciBnZW5lcmF0ZWQgdXNpbmcgY2FwdHVyZVN0cmVhbVVudGlsRW5kZWQgb3IgV2ViQXVkaW8gQVBJLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge3NhbXBsZVJhdGU6IDQ0MTAwLCBidWZmZXJTaXplOiA0MDk2LCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHM6IDEsIGV0Yy59XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gU3RlcmVvQXVkaW9SZWNvcmRlcihtZWRpYVN0cmVhbSwgY29uZmlnKSB7XHJcbiAgICBpZiAoIWdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ2F1ZGlvJykubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgJ1lvdXIgc3RyZWFtIGhhcyBubyBhdWRpbyB0cmFja3MuJztcclxuICAgIH1cclxuXHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIC8vIHZhcmlhYmxlc1xyXG4gICAgdmFyIGxlZnRjaGFubmVsID0gW107XHJcbiAgICB2YXIgcmlnaHRjaGFubmVsID0gW107XHJcbiAgICB2YXIgcmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICB2YXIgcmVjb3JkaW5nTGVuZ3RoID0gMDtcclxuICAgIHZhciBqc0F1ZGlvTm9kZTtcclxuXHJcbiAgICB2YXIgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzID0gMjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBzYW1wbGUgcmF0ZXMgc3VjaCBhcyA4SyBvciAxNksuIFJlZmVyZW5jZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjg5NzcxMzYvNTUyMTgyXHJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gZGVzaXJlZFNhbXBSYXRlIC0gRGVzaXJlZCBCaXRzIHBlciBzYW1wbGUgKiAxMDAwXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogdmFyIHJlY29yZGVyID0gU3RlcmVvQXVkaW9SZWNvcmRlcihtZWRpYVN0cmVhbSwge1xyXG4gICAgICogICBkZXNpcmVkU2FtcFJhdGU6IDE2ICogMTAwMCAvLyBiaXRzLXBlci1zYW1wbGUgKiAxMDAwXHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG4gICAgdmFyIGRlc2lyZWRTYW1wUmF0ZSA9IGNvbmZpZy5kZXNpcmVkU2FtcFJhdGU7XHJcblxyXG4gICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgaWYgKGNvbmZpZy5sZWZ0Q2hhbm5lbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIG51bWJlck9mQXVkaW9DaGFubmVscyA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbmZpZy5udW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPT09IDEpIHtcclxuICAgICAgICBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbnVtYmVyT2ZBdWRpb0NoYW5uZWxzIHx8IG51bWJlck9mQXVkaW9DaGFubmVscyA8IDEpIHtcclxuICAgICAgICBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N0ZXJlb0F1ZGlvUmVjb3JkZXIgaXMgc2V0IHRvIHJlY29yZCBudW1iZXIgb2YgY2hhbm5lbHM6ICcgKyBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIGFueSBUcmFjayB3aXRoaW4gdGhlIE1lZGlhU3RyZWFtIGlzIG11dGVkIG9yIG5vdCBlbmFibGVkIGF0IGFueSB0aW1lLCBcclxuICAgIC8vIHRoZSBicm93c2VyIHdpbGwgb25seSByZWNvcmQgYmxhY2sgZnJhbWVzIFxyXG4gICAgLy8gb3Igc2lsZW5jZSBzaW5jZSB0aGF0IGlzIHRoZSBjb250ZW50IHByb2R1Y2VkIGJ5IHRoZSBUcmFja1xyXG4gICAgLy8gc28gd2UgbmVlZCB0byBzdG9wUmVjb3JkaW5nIGFzIHNvb24gYXMgYW55IHNpbmdsZSB0cmFjayBlbmRzLlxyXG4gICAgaWYgKHR5cGVvZiBjb25maWcuY2hlY2tGb3JJbmFjdGl2ZVRyYWNrcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBjb25maWcuY2hlY2tGb3JJbmFjdGl2ZVRyYWNrcyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNNZWRpYVN0cmVhbUFjdGl2ZSgpIHtcclxuICAgICAgICBpZiAoY29uZmlnLmNoZWNrRm9ySW5hY3RpdmVUcmFja3MgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC8vIGFsd2F5cyByZXR1cm4gXCJ0cnVlXCJcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJ2FjdGl2ZScgaW4gbWVkaWFTdHJlYW0pIHtcclxuICAgICAgICAgICAgaWYgKCFtZWRpYVN0cmVhbS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoJ2VuZGVkJyBpbiBtZWRpYVN0cmVhbSkgeyAvLyBvbGQgaGFja1xyXG4gICAgICAgICAgICBpZiAobWVkaWFTdHJlYW0uZW5kZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlY29yZHMgTWVkaWFTdHJlYW0uXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlY29yZCgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlY29yZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChpc01lZGlhU3RyZWFtQWN0aXZlKCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdQbGVhc2UgbWFrZSBzdXJlIE1lZGlhU3RyZWFtIGlzIGFjdGl2ZS4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzZXRWYXJpYWJsZXMoKTtcclxuXHJcbiAgICAgICAgaXNBdWRpb1Byb2Nlc3NTdGFydGVkID0gaXNQYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICByZWNvcmRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy50aW1lU2xpY2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGxvb3BlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gbWVyZ2VMZWZ0UmlnaHRCdWZmZXJzKGNvbmZpZywgY2FsbGJhY2spIHtcclxuICAgICAgICBmdW5jdGlvbiBtZXJnZUF1ZGlvQnVmZmVycyhjb25maWcsIGNiKSB7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSBjb25maWcubnVtYmVyT2ZBdWRpb0NoYW5uZWxzO1xyXG5cclxuICAgICAgICAgICAgLy8gdG9kbzogXCJzbGljZSgwKVwiIC0tLSBpcyBpdCBjYXVzZXMgbG9vcD8gU2hvdWxkIGJlIHJlbW92ZWQ/XHJcbiAgICAgICAgICAgIHZhciBsZWZ0QnVmZmVycyA9IGNvbmZpZy5sZWZ0QnVmZmVycy5zbGljZSgwKTtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0QnVmZmVycyA9IGNvbmZpZy5yaWdodEJ1ZmZlcnMuc2xpY2UoMCk7XHJcbiAgICAgICAgICAgIHZhciBzYW1wbGVSYXRlID0gY29uZmlnLnNhbXBsZVJhdGU7XHJcbiAgICAgICAgICAgIHZhciBpbnRlcm5hbEludGVybGVhdmVkTGVuZ3RoID0gY29uZmlnLmludGVybmFsSW50ZXJsZWF2ZWRMZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBkZXNpcmVkU2FtcFJhdGUgPSBjb25maWcuZGVzaXJlZFNhbXBSYXRlO1xyXG5cclxuICAgICAgICAgICAgaWYgKG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgbGVmdEJ1ZmZlcnMgPSBtZXJnZUJ1ZmZlcnMobGVmdEJ1ZmZlcnMsIGludGVybmFsSW50ZXJsZWF2ZWRMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgcmlnaHRCdWZmZXJzID0gbWVyZ2VCdWZmZXJzKHJpZ2h0QnVmZmVycywgaW50ZXJuYWxJbnRlcmxlYXZlZExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRlc2lyZWRTYW1wUmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRCdWZmZXJzID0gaW50ZXJwb2xhdGVBcnJheShsZWZ0QnVmZmVycywgZGVzaXJlZFNhbXBSYXRlLCBzYW1wbGVSYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodEJ1ZmZlcnMgPSBpbnRlcnBvbGF0ZUFycmF5KHJpZ2h0QnVmZmVycywgZGVzaXJlZFNhbXBSYXRlLCBzYW1wbGVSYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbGVmdEJ1ZmZlcnMgPSBtZXJnZUJ1ZmZlcnMobGVmdEJ1ZmZlcnMsIGludGVybmFsSW50ZXJsZWF2ZWRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkZXNpcmVkU2FtcFJhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0QnVmZmVycyA9IGludGVycG9sYXRlQXJyYXkobGVmdEJ1ZmZlcnMsIGRlc2lyZWRTYW1wUmF0ZSwgc2FtcGxlUmF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHNldCBzYW1wbGUgcmF0ZSBhcyBkZXNpcmVkIHNhbXBsZSByYXRlXHJcbiAgICAgICAgICAgIGlmIChkZXNpcmVkU2FtcFJhdGUpIHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZVJhdGUgPSBkZXNpcmVkU2FtcFJhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGZvciBjaGFuZ2luZyB0aGUgc2FtcGxpbmcgcmF0ZSwgcmVmZXJlbmNlOlxyXG4gICAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yODk3NzEzNi81NTIxODJcclxuICAgICAgICAgICAgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcnJheShkYXRhLCBuZXdTYW1wbGVSYXRlLCBvbGRTYW1wbGVSYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZml0Q291bnQgPSBNYXRoLnJvdW5kKGRhdGEubGVuZ3RoICogKG5ld1NhbXBsZVJhdGUgLyBvbGRTYW1wbGVSYXRlKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3RGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwcmluZ0ZhY3RvciA9IE51bWJlcigoZGF0YS5sZW5ndGggLSAxKSAvIChmaXRDb3VudCAtIDEpKTtcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFbMF0gPSBkYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBmaXRDb3VudCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0bXAgPSBpICogc3ByaW5nRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiZWZvcmUgPSBOdW1iZXIoTWF0aC5mbG9vcih0bXApKS50b0ZpeGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFmdGVyID0gTnVtYmVyKE1hdGguY2VpbCh0bXApKS50b0ZpeGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0UG9pbnQgPSB0bXAgLSBiZWZvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVtpXSA9IGxpbmVhckludGVycG9sYXRlKGRhdGFbYmVmb3JlXSwgZGF0YVthZnRlcl0sIGF0UG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVtmaXRDb3VudCAtIDFdID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0RhdGE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpbmVhckludGVycG9sYXRlKGJlZm9yZSwgYWZ0ZXIsIGF0UG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiZWZvcmUgKyAoYWZ0ZXIgLSBiZWZvcmUpICogYXRQb2ludDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbWVyZ2VCdWZmZXJzKGNoYW5uZWxCdWZmZXIsIHJMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgRmxvYXQ2NEFycmF5KHJMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG5nID0gY2hhbm5lbEJ1ZmZlci5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsbmc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBjaGFubmVsQnVmZmVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zZXQoYnVmZmVyLCBvZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBidWZmZXIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGludGVybGVhdmUobGVmdENoYW5uZWwsIHJpZ2h0Q2hhbm5lbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGxlZnRDaGFubmVsLmxlbmd0aCArIHJpZ2h0Q2hhbm5lbC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBGbG9hdDY0QXJyYXkobGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRJbmRleCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDspIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaW5kZXgrK10gPSBsZWZ0Q2hhbm5lbFtpbnB1dEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaW5kZXgrK10gPSByaWdodENoYW5uZWxbaW5wdXRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gd3JpdGVVVEZCeXRlcyh2aWV3LCBvZmZzZXQsIHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxuZyA9IHN0cmluZy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxuZzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldy5zZXRVaW50OChvZmZzZXQgKyBpLCBzdHJpbmcuY2hhckNvZGVBdChpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGludGVybGVhdmUgYm90aCBjaGFubmVscyB0b2dldGhlclxyXG4gICAgICAgICAgICB2YXIgaW50ZXJsZWF2ZWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZBdWRpb0NoYW5uZWxzID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcmxlYXZlZCA9IGludGVybGVhdmUobGVmdEJ1ZmZlcnMsIHJpZ2h0QnVmZmVycyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGludGVybGVhdmVkID0gbGVmdEJ1ZmZlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpbnRlcmxlYXZlZExlbmd0aCA9IGludGVybGVhdmVkLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB3YXYgZmlsZVxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0aW5nQnVmZmVyTGVuZ3RoID0gNDQgKyBpbnRlcmxlYXZlZExlbmd0aCAqIDI7XHJcblxyXG4gICAgICAgICAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHJlc3VsdGluZ0J1ZmZlckxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUklGRiBjaHVuayBkZXNjcmlwdG9yL2lkZW50aWZpZXIgXHJcbiAgICAgICAgICAgIHdyaXRlVVRGQnl0ZXModmlldywgMCwgJ1JJRkYnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJJRkYgY2h1bmsgbGVuZ3RoXHJcbiAgICAgICAgICAgIC8vIGNoYW5nZWQgXCI0NFwiIHRvIFwiMzZcIiB2aWEgIzQwMVxyXG4gICAgICAgICAgICB2aWV3LnNldFVpbnQzMig0LCAzNiArIGludGVybGVhdmVkTGVuZ3RoICogMiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBSSUZGIHR5cGUgXHJcbiAgICAgICAgICAgIHdyaXRlVVRGQnl0ZXModmlldywgOCwgJ1dBVkUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZvcm1hdCBjaHVuayBpZGVudGlmaWVyIFxyXG4gICAgICAgICAgICAvLyBGTVQgc3ViLWNodW5rXHJcbiAgICAgICAgICAgIHdyaXRlVVRGQnl0ZXModmlldywgMTIsICdmbXQgJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBmb3JtYXQgY2h1bmsgbGVuZ3RoIFxyXG4gICAgICAgICAgICB2aWV3LnNldFVpbnQzMigxNiwgMTYsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2FtcGxlIGZvcm1hdCAocmF3KVxyXG4gICAgICAgICAgICB2aWV3LnNldFVpbnQxNigyMCwgMSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdGVyZW8gKDIgY2hhbm5lbHMpXHJcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDE2KDIyLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2FtcGxlIHJhdGUgXHJcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDMyKDI0LCBzYW1wbGVSYXRlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJ5dGUgcmF0ZSAoc2FtcGxlIHJhdGUgKiBibG9jayBhbGlnbilcclxuICAgICAgICAgICAgdmlldy5zZXRVaW50MzIoMjgsIHNhbXBsZVJhdGUgKiAyLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJsb2NrIGFsaWduIChjaGFubmVsIGNvdW50ICogYnl0ZXMgcGVyIHNhbXBsZSkgXHJcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDE2KDMyLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgKiAyLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJpdHMgcGVyIHNhbXBsZSBcclxuICAgICAgICAgICAgdmlldy5zZXRVaW50MTYoMzQsIDE2LCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRhdGEgc3ViLWNodW5rXHJcbiAgICAgICAgICAgIC8vIGRhdGEgY2h1bmsgaWRlbnRpZmllciBcclxuICAgICAgICAgICAgd3JpdGVVVEZCeXRlcyh2aWV3LCAzNiwgJ2RhdGEnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRhdGEgY2h1bmsgbGVuZ3RoIFxyXG4gICAgICAgICAgICB2aWV3LnNldFVpbnQzMig0MCwgaW50ZXJsZWF2ZWRMZW5ndGggKiAyLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHdyaXRlIHRoZSBQQ00gc2FtcGxlc1xyXG4gICAgICAgICAgICB2YXIgbG5nID0gaW50ZXJsZWF2ZWRMZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDQ0O1xyXG4gICAgICAgICAgICB2YXIgdm9sdW1lID0gMTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsbmc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmlldy5zZXRJbnQxNihpbmRleCwgaW50ZXJsZWF2ZWRbaV0gKiAoMHg3RkZGICogdm9sdW1lKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpbmRleCArPSAyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYih7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiBidWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlldzogdmlld1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcjogYnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgdmlldzogdmlld1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25maWcubm9Xb3JrZXIpIHtcclxuICAgICAgICAgICAgbWVyZ2VBdWRpb0J1ZmZlcnMoY29uZmlnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhLmJ1ZmZlciwgZGF0YS52aWV3KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB2YXIgd2ViV29ya2VyID0gcHJvY2Vzc0luV2ViV29ya2VyKG1lcmdlQXVkaW9CdWZmZXJzKTtcclxuXHJcbiAgICAgICAgd2ViV29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50LmRhdGEuYnVmZmVyLCBldmVudC5kYXRhLnZpZXcpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVsZWFzZSBtZW1vcnlcclxuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh3ZWJXb3JrZXIud29ya2VyVVJMKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGtpbGwgd2Vid29ya2VyIChvciBDaHJvbWUgd2lsbCBraWxsIHlvdXIgcGFnZSBhZnRlciB+MjUgY2FsbHMpXHJcbiAgICAgICAgICAgIHdlYldvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3ZWJXb3JrZXIucG9zdE1lc3NhZ2UoY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzSW5XZWJXb3JrZXIoX2Z1bmN0aW9uKSB7XHJcbiAgICAgICAgdmFyIHdvcmtlclVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW19mdW5jdGlvbi50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAnO3RoaXMub25tZXNzYWdlID0gIGZ1bmN0aW9uIChlZWUpIHsnICsgX2Z1bmN0aW9uLm5hbWUgKyAnKGVlZS5kYXRhKTt9J1xyXG4gICAgICAgIF0sIHtcclxuICAgICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcih3b3JrZXJVUkwpO1xyXG4gICAgICAgIHdvcmtlci53b3JrZXJVUkwgPSB3b3JrZXJVUkw7XHJcbiAgICAgICAgcmV0dXJuIHdvcmtlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3BzIHJlY29yZGluZyBNZWRpYVN0cmVhbS5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24sIHRoYXQgaXMgdXNlZCB0byBwYXNzIHJlY29yZGVkIGJsb2IgYmFjayB0byB0aGUgY2FsbGVlLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG5cclxuICAgICAgICAvLyBzdG9wIHJlY29yZGluZ1xyXG4gICAgICAgIHJlY29yZGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBtZXJnZUxlZnRSaWdodEJ1ZmZlcnMoe1xyXG4gICAgICAgICAgICBkZXNpcmVkU2FtcFJhdGU6IGRlc2lyZWRTYW1wUmF0ZSxcclxuICAgICAgICAgICAgc2FtcGxlUmF0ZTogc2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzOiBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMsXHJcbiAgICAgICAgICAgIGludGVybmFsSW50ZXJsZWF2ZWRMZW5ndGg6IHJlY29yZGluZ0xlbmd0aCxcclxuICAgICAgICAgICAgbGVmdEJ1ZmZlcnM6IGxlZnRjaGFubmVsLFxyXG4gICAgICAgICAgICByaWdodEJ1ZmZlcnM6IG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMSA/IFtdIDogcmlnaHRjaGFubmVsLFxyXG4gICAgICAgICAgICBub1dvcmtlcjogY29uZmlnLm5vV29ya2VyXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oYnVmZmVyLCB2aWV3KSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBUaGUgcmVjb3JkZWQgYmxvYiBvYmplY3QuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBTdGVyZW9BdWRpb1JlY29yZGVyXHJcbiAgICAgICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICogICAgIHZhciBibG9iID0gcmVjb3JkZXIuYmxvYjtcclxuICAgICAgICAgICAgICogfSk7XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZWxmLmJsb2IgPSBuZXcgQmxvYihbdmlld10sIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdhdWRpby93YXYnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7QXJyYXlCdWZmZXJ9IGJ1ZmZlciAtIFRoZSByZWNvcmRlZCBidWZmZXIgb2JqZWN0LlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAqICAgICB2YXIgYnVmZmVyID0gcmVjb3JkZXIuYnVmZmVyO1xyXG4gICAgICAgICAgICAgKiB9KTtcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNlbGYuYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHZpZXcuYnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7RGF0YVZpZXd9IHZpZXcgLSBUaGUgcmVjb3JkZWQgZGF0YS12aWV3IG9iamVjdC5cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgKiAgICAgdmFyIHZpZXcgPSByZWNvcmRlci52aWV3O1xyXG4gICAgICAgICAgICAgKiB9KTtcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnNhbXBsZVJhdGUgPSBkZXNpcmVkU2FtcFJhdGUgfHwgc2FtcGxlUmF0ZTtcclxuICAgICAgICAgICAgc2VsZi5idWZmZXJTaXplID0gYnVmZmVyU2l6ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlY29yZGVkIGF1ZGlvIGxlbmd0aFxyXG4gICAgICAgICAgICBzZWxmLmxlbmd0aCA9IHJlY29yZGluZ0xlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGlzQXVkaW9Qcm9jZXNzU3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLmJsb2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgU3RvcmFnZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB2YXIgU3RvcmFnZSA9IHtcclxuICAgICAgICAgICAgQXVkaW9Db250ZXh0Q29uc3RydWN0b3I6IG51bGwsXHJcbiAgICAgICAgICAgIEF1ZGlvQ29udGV4dDogd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIVN0b3JhZ2UuQXVkaW9Db250ZXh0Q29uc3RydWN0b3IpIHtcclxuICAgICAgICBTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yID0gbmV3IFN0b3JhZ2UuQXVkaW9Db250ZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbnRleHQgPSBTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yO1xyXG5cclxuICAgIC8vIGNyZWF0ZXMgYW4gYXVkaW8gbm9kZSBmcm9tIHRoZSBtaWNyb3Bob25lIGluY29taW5nIHN0cmVhbVxyXG4gICAgdmFyIGF1ZGlvSW5wdXQgPSBjb250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKG1lZGlhU3RyZWFtKTtcclxuXHJcbiAgICB2YXIgbGVnYWxCdWZmZXJWYWx1ZXMgPSBbMCwgMjU2LCA1MTIsIDEwMjQsIDIwNDgsIDQwOTYsIDgxOTIsIDE2Mzg0XTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZyb20gdGhlIHNwZWM6IFRoaXMgdmFsdWUgY29udHJvbHMgaG93IGZyZXF1ZW50bHkgdGhlIGF1ZGlvcHJvY2VzcyBldmVudCBpc1xyXG4gICAgICogZGlzcGF0Y2hlZCBhbmQgaG93IG1hbnkgc2FtcGxlLWZyYW1lcyBuZWVkIHRvIGJlIHByb2Nlc3NlZCBlYWNoIGNhbGwuXHJcbiAgICAgKiBMb3dlciB2YWx1ZXMgZm9yIGJ1ZmZlciBzaXplIHdpbGwgcmVzdWx0IGluIGEgbG93ZXIgKGJldHRlcikgbGF0ZW5jeS5cclxuICAgICAqIEhpZ2hlciB2YWx1ZXMgd2lsbCBiZSBuZWNlc3NhcnkgdG8gYXZvaWQgYXVkaW8gYnJlYWt1cCBhbmQgZ2xpdGNoZXNcclxuICAgICAqIFRoZSBzaXplIG9mIHRoZSBidWZmZXIgKGluIHNhbXBsZS1mcmFtZXMpIHdoaWNoIG5lZWRzIHRvXHJcbiAgICAgKiBiZSBwcm9jZXNzZWQgZWFjaCB0aW1lIG9ucHJvY2Vzc2F1ZGlvIGlzIGNhbGxlZC5cclxuICAgICAqIExlZ2FsIHZhbHVlcyBhcmUgKDI1NiwgNTEyLCAxMDI0LCAyMDQ4LCA0MDk2LCA4MTkyLCAxNjM4NCkuXHJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYnVmZmVyU2l6ZSAtIEJ1ZmZlci1zaXplIGZvciBob3cgZnJlcXVlbnRseSB0aGUgYXVkaW9wcm9jZXNzIGV2ZW50IGlzIGRpc3BhdGNoZWQuXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyID0gbmV3IFN0ZXJlb0F1ZGlvUmVjb3JkZXIobWVkaWFTdHJlYW0sIHtcclxuICAgICAqICAgICBidWZmZXJTaXplOiA0MDk2XHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG5cclxuICAgIC8vIFwiMFwiIG1lYW5zLCBsZXQgY2hyb21lIGRlY2lkZSB0aGUgbW9zdCBhY2N1cmF0ZSBidWZmZXItc2l6ZSBmb3IgY3VycmVudCBwbGF0Zm9ybS5cclxuICAgIHZhciBidWZmZXJTaXplID0gdHlwZW9mIGNvbmZpZy5idWZmZXJTaXplID09PSAndW5kZWZpbmVkJyA/IDQwOTYgOiBjb25maWcuYnVmZmVyU2l6ZTtcclxuXHJcbiAgICBpZiAobGVnYWxCdWZmZXJWYWx1ZXMuaW5kZXhPZihidWZmZXJTaXplKSA9PT0gLTEpIHtcclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTGVnYWwgdmFsdWVzIGZvciBidWZmZXItc2l6ZSBhcmUgJyArIEpTT04uc3RyaW5naWZ5KGxlZ2FsQnVmZmVyVmFsdWVzLCBudWxsLCAnXFx0JykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29udGV4dC5jcmVhdGVKYXZhU2NyaXB0Tm9kZSkge1xyXG4gICAgICAgIGpzQXVkaW9Ob2RlID0gY29udGV4dC5jcmVhdGVKYXZhU2NyaXB0Tm9kZShidWZmZXJTaXplLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMsIG51bWJlck9mQXVkaW9DaGFubmVscyk7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKSB7XHJcbiAgICAgICAganNBdWRpb05vZGUgPSBjb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihidWZmZXJTaXplLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMsIG51bWJlck9mQXVkaW9DaGFubmVscyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93ICdXZWJBdWRpbyBBUEkgaGFzIG5vIHN1cHBvcnQgb24gdGhpcyBicm93c2VyLic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29ubmVjdCB0aGUgc3RyZWFtIHRvIHRoZSBzY3JpcHQgcHJvY2Vzc29yXHJcbiAgICBhdWRpb0lucHV0LmNvbm5lY3QoanNBdWRpb05vZGUpO1xyXG5cclxuICAgIGlmICghY29uZmlnLmJ1ZmZlclNpemUpIHtcclxuICAgICAgICBidWZmZXJTaXplID0ganNBdWRpb05vZGUuYnVmZmVyU2l6ZTsgLy8gZGV2aWNlIGJ1ZmZlci1zaXplXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2FtcGxlIHJhdGUgKGluIHNhbXBsZS1mcmFtZXMgcGVyIHNlY29uZCkgYXQgd2hpY2ggdGhlXHJcbiAgICAgKiBBdWRpb0NvbnRleHQgaGFuZGxlcyBhdWRpby4gSXQgaXMgYXNzdW1lZCB0aGF0IGFsbCBBdWRpb05vZGVzXHJcbiAgICAgKiBpbiB0aGUgY29udGV4dCBydW4gYXQgdGhpcyByYXRlLiBJbiBtYWtpbmcgdGhpcyBhc3N1bXB0aW9uLFxyXG4gICAgICogc2FtcGxlLXJhdGUgY29udmVydGVycyBvciBcInZhcmlzcGVlZFwiIHByb2Nlc3NvcnMgYXJlIG5vdCBzdXBwb3J0ZWRcclxuICAgICAqIGluIHJlYWwtdGltZSBwcm9jZXNzaW5nLlxyXG4gICAgICogVGhlIHNhbXBsZVJhdGUgcGFyYW1ldGVyIGRlc2NyaWJlcyB0aGUgc2FtcGxlLXJhdGUgb2YgdGhlXHJcbiAgICAgKiBsaW5lYXIgUENNIGF1ZGlvIGRhdGEgaW4gdGhlIGJ1ZmZlciBpbiBzYW1wbGUtZnJhbWVzIHBlciBzZWNvbmQuXHJcbiAgICAgKiBBbiBpbXBsZW1lbnRhdGlvbiBtdXN0IHN1cHBvcnQgc2FtcGxlLXJhdGVzIGluIGF0IGxlYXN0XHJcbiAgICAgKiB0aGUgcmFuZ2UgMjIwNTAgdG8gOTYwMDAuXHJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2FtcGxlUmF0ZSAtIEJ1ZmZlci1zaXplIGZvciBob3cgZnJlcXVlbnRseSB0aGUgYXVkaW9wcm9jZXNzIGV2ZW50IGlzIGRpc3BhdGNoZWQuXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyID0gbmV3IFN0ZXJlb0F1ZGlvUmVjb3JkZXIobWVkaWFTdHJlYW0sIHtcclxuICAgICAqICAgICBzYW1wbGVSYXRlOiA0NDEwMFxyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHZhciBzYW1wbGVSYXRlID0gdHlwZW9mIGNvbmZpZy5zYW1wbGVSYXRlICE9PSAndW5kZWZpbmVkJyA/IGNvbmZpZy5zYW1wbGVSYXRlIDogY29udGV4dC5zYW1wbGVSYXRlIHx8IDQ0MTAwO1xyXG5cclxuICAgIGlmIChzYW1wbGVSYXRlIDwgMjIwNTAgfHwgc2FtcGxlUmF0ZSA+IDk2MDAwKSB7XHJcbiAgICAgICAgLy8gUmVmOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjMwMzkxOC81NTIxODJcclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2FtcGxlLXJhdGUgbXVzdCBiZSB1bmRlciByYW5nZSAyMjA1MCBhbmQgOTYwMDAuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5kZXNpcmVkU2FtcFJhdGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Rlc2lyZWQgc2FtcGxlLXJhdGU6ICcgKyBjb25maWcuZGVzaXJlZFNhbXBSYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHBhdXNlcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChpc01lZGlhU3RyZWFtQWN0aXZlKCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdQbGVhc2UgbWFrZSBzdXJlIE1lZGlhU3RyZWFtIGlzIGFjdGl2ZS4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWVtcyByZWNvcmRpbmcgaGFzIGJlZW4gcmVzdGFydGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVjb3JkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzZXRzIGN1cnJlbnRseSByZWNvcmRlZCBkYXRhLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmNsZWFyUmVjb3JkZWREYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uZmlnLmNoZWNrRm9ySW5hY3RpdmVUcmFja3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHJlY29yZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3AoY2xlYXJSZWNvcmRlZERhdGFDQik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclJlY29yZGVkRGF0YUNCKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0VmFyaWFibGVzKCkge1xyXG4gICAgICAgIGxlZnRjaGFubmVsID0gW107XHJcbiAgICAgICAgcmlnaHRjaGFubmVsID0gW107XHJcbiAgICAgICAgcmVjb3JkaW5nTGVuZ3RoID0gMDtcclxuICAgICAgICBpc0F1ZGlvUHJvY2Vzc1N0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICByZWNvcmRpbmcgPSBmYWxzZTtcclxuICAgICAgICBpc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xyXG5cclxuICAgICAgICBzZWxmLmxlZnRjaGFubmVsID0gbGVmdGNoYW5uZWw7XHJcbiAgICAgICAgc2VsZi5yaWdodGNoYW5uZWwgPSByaWdodGNoYW5uZWw7XHJcbiAgICAgICAgc2VsZi5udW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSBudW1iZXJPZkF1ZGlvQ2hhbm5lbHM7XHJcbiAgICAgICAgc2VsZi5kZXNpcmVkU2FtcFJhdGUgPSBkZXNpcmVkU2FtcFJhdGU7XHJcbiAgICAgICAgc2VsZi5zYW1wbGVSYXRlID0gc2FtcGxlUmF0ZTtcclxuICAgICAgICBzZWxmLnJlY29yZGluZ0xlbmd0aCA9IHJlY29yZGluZ0xlbmd0aDtcclxuXHJcbiAgICAgICAgaW50ZXJ2YWxzQmFzZWRCdWZmZXJzID0ge1xyXG4gICAgICAgICAgICBsZWZ0OiBbXSxcclxuICAgICAgICAgICAgcmlnaHQ6IFtdLFxyXG4gICAgICAgICAgICByZWNvcmRpbmdMZW5ndGg6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVjb3JkZWREYXRhQ0IoKSB7XHJcbiAgICAgICAgaWYgKGpzQXVkaW9Ob2RlKSB7XHJcbiAgICAgICAgICAgIGpzQXVkaW9Ob2RlLm9uYXVkaW9wcm9jZXNzID0gbnVsbDtcclxuICAgICAgICAgICAganNBdWRpb05vZGUuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBqc0F1ZGlvTm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXVkaW9JbnB1dCkge1xyXG4gICAgICAgICAgICBhdWRpb0lucHV0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgYXVkaW9JbnB1dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNldFZhcmlhYmxlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciBkZWJ1Z2dpbmdcclxuICAgIHRoaXMubmFtZSA9ICdTdGVyZW9BdWRpb1JlY29yZGVyJztcclxuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaXNBdWRpb1Byb2Nlc3NTdGFydGVkID0gZmFsc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gb25BdWRpb1Byb2Nlc3NEYXRhQXZhaWxhYmxlKGUpIHtcclxuICAgICAgICBpZiAoaXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzTWVkaWFTdHJlYW1BY3RpdmUoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNZWRpYVN0cmVhbSBzZWVtcyBzdG9wcGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGpzQXVkaW9Ob2RlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgcmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJlY29yZGluZykge1xyXG4gICAgICAgICAgICBpZiAoYXVkaW9JbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9JbnB1dC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBhdWRpb0lucHV0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgb24gXCJvbmF1ZGlvcHJvY2Vzc1wiIGV2ZW50J3MgZmlyc3QgaW52b2NhdGlvbi5cclxuICAgICAgICAgKiBAbWV0aG9kIHtmdW5jdGlvbn0gb25BdWRpb1Byb2Nlc3NTdGFydGVkXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLm9uQXVkaW9Qcm9jZXNzU3RhcnRlZDogZnVuY3Rpb24oKSB7IH07XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKCFpc0F1ZGlvUHJvY2Vzc1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgaXNBdWRpb1Byb2Nlc3NTdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5vbkF1ZGlvUHJvY2Vzc1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5vbkF1ZGlvUHJvY2Vzc1N0YXJ0ZWQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5pbml0Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5pbml0Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxlZnQgPSBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xyXG5cclxuICAgICAgICAvLyB3ZSBjbG9uZSB0aGUgc2FtcGxlc1xyXG4gICAgICAgIHZhciBjaExlZnQgPSBuZXcgRmxvYXQzMkFycmF5KGxlZnQpO1xyXG4gICAgICAgIGxlZnRjaGFubmVsLnB1c2goY2hMZWZ0KTtcclxuXHJcbiAgICAgICAgaWYgKG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMikge1xyXG4gICAgICAgICAgICB2YXIgcmlnaHQgPSBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDEpO1xyXG4gICAgICAgICAgICB2YXIgY2hSaWdodCA9IG5ldyBGbG9hdDMyQXJyYXkocmlnaHQpO1xyXG4gICAgICAgICAgICByaWdodGNoYW5uZWwucHVzaChjaFJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlY29yZGluZ0xlbmd0aCArPSBidWZmZXJTaXplO1xyXG5cclxuICAgICAgICAvLyBleHBvcnQgcmF3IFBDTVxyXG4gICAgICAgIHNlbGYucmVjb3JkaW5nTGVuZ3RoID0gcmVjb3JkaW5nTGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy50aW1lU2xpY2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGludGVydmFsc0Jhc2VkQnVmZmVycy5yZWNvcmRpbmdMZW5ndGggKz0gYnVmZmVyU2l6ZTtcclxuICAgICAgICAgICAgaW50ZXJ2YWxzQmFzZWRCdWZmZXJzLmxlZnQucHVzaChjaExlZnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxzQmFzZWRCdWZmZXJzLnJpZ2h0LnB1c2goY2hSaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganNBdWRpb05vZGUub25hdWRpb3Byb2Nlc3MgPSBvbkF1ZGlvUHJvY2Vzc0RhdGFBdmFpbGFibGU7XHJcblxyXG4gICAgLy8gdG8gcHJldmVudCBzZWxmIGF1ZGlvIHRvIGJlIGNvbm5lY3RlZCB3aXRoIHNwZWFrZXJzXHJcbiAgICBpZiAoY29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbURlc3RpbmF0aW9uKSB7XHJcbiAgICAgICAganNBdWRpb05vZGUuY29ubmVjdChjb250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtRGVzdGluYXRpb24oKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGpzQXVkaW9Ob2RlLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXhwb3J0IHJhdyBQQ01cclxuICAgIHRoaXMubGVmdGNoYW5uZWwgPSBsZWZ0Y2hhbm5lbDtcclxuICAgIHRoaXMucmlnaHRjaGFubmVsID0gcmlnaHRjaGFubmVsO1xyXG4gICAgdGhpcy5udW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSBudW1iZXJPZkF1ZGlvQ2hhbm5lbHM7XHJcbiAgICB0aGlzLmRlc2lyZWRTYW1wUmF0ZSA9IGRlc2lyZWRTYW1wUmF0ZTtcclxuICAgIHRoaXMuc2FtcGxlUmF0ZSA9IHNhbXBsZVJhdGU7XHJcbiAgICBzZWxmLnJlY29yZGluZ0xlbmd0aCA9IHJlY29yZGluZ0xlbmd0aDtcclxuXHJcbiAgICAvLyBoZWxwZXIgZm9yIGludGVydmFscyBiYXNlZCBibG9ic1xyXG4gICAgdmFyIGludGVydmFsc0Jhc2VkQnVmZmVycyA9IHtcclxuICAgICAgICBsZWZ0OiBbXSxcclxuICAgICAgICByaWdodDogW10sXHJcbiAgICAgICAgcmVjb3JkaW5nTGVuZ3RoOiAwXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHRoaXMgbG9vcGVyIGlzIHVzZWQgdG8gc3VwcG9ydCBpbnRlcnZhbHMgYmFzZWQgYmxvYnMgKHZpYSB0aW1lU2xpY2Urb25kYXRhYXZhaWxhYmxlKVxyXG4gICAgZnVuY3Rpb24gbG9vcGVyKCkge1xyXG4gICAgICAgIGlmICghcmVjb3JkaW5nIHx8IHR5cGVvZiBjb25maWcub25kYXRhYXZhaWxhYmxlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBjb25maWcudGltZVNsaWNlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW50ZXJ2YWxzQmFzZWRCdWZmZXJzLmxlZnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1lcmdlTGVmdFJpZ2h0QnVmZmVycyh7XHJcbiAgICAgICAgICAgICAgICBkZXNpcmVkU2FtcFJhdGU6IGRlc2lyZWRTYW1wUmF0ZSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZVJhdGU6IHNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZkF1ZGlvQ2hhbm5lbHM6IG51bWJlck9mQXVkaW9DaGFubmVscyxcclxuICAgICAgICAgICAgICAgIGludGVybmFsSW50ZXJsZWF2ZWRMZW5ndGg6IGludGVydmFsc0Jhc2VkQnVmZmVycy5yZWNvcmRpbmdMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBsZWZ0QnVmZmVyczogaW50ZXJ2YWxzQmFzZWRCdWZmZXJzLmxlZnQsXHJcbiAgICAgICAgICAgICAgICByaWdodEJ1ZmZlcnM6IG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMSA/IFtdIDogaW50ZXJ2YWxzQmFzZWRCdWZmZXJzLnJpZ2h0XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGJ1ZmZlciwgdmlldykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbdmlld10sIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXVkaW8vd2F2J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25maWcub25kYXRhYXZhaWxhYmxlKGJsb2IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobG9vcGVyLCBjb25maWcudGltZVNsaWNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpbnRlcnZhbHNCYXNlZEJ1ZmZlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXSxcclxuICAgICAgICAgICAgICAgIHJlY29yZGluZ0xlbmd0aDogMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQobG9vcGVyLCBjb25maWcudGltZVNsaWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgUmVjb3JkUlRDICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgUmVjb3JkUlRDLlN0ZXJlb0F1ZGlvUmVjb3JkZXIgPSBTdGVyZW9BdWRpb1JlY29yZGVyO1xyXG59XG5cclxuLy8gX19fX19fX19fX19fX19fX19cclxuLy8gQ2FudmFzUmVjb3JkZXIuanNcclxuXHJcbi8qKlxyXG4gKiBDYW52YXNSZWNvcmRlciBpcyBhIHN0YW5kYWxvbmUgY2xhc3MgdXNlZCBieSB7QGxpbmsgUmVjb3JkUlRDfSB0byBicmluZyBIVE1MNS1DYW52YXMgcmVjb3JkaW5nIGludG8gdmlkZW8gV2ViTS4gSXQgdXNlcyBIVE1MMkNhbnZhcyBsaWJyYXJ5IGFuZCBydW5zIHRvcCBvdmVyIHtAbGluayBXaGFtbXl9LlxyXG4gKiBAc3VtbWFyeSBIVE1MMkNhbnZhcyByZWNvcmRpbmcgaW50byB2aWRlbyBXZWJNLlxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgQ2FudmFzUmVjb3JkZXJcclxuICogQGNsYXNzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciByZWNvcmRlciA9IG5ldyBDYW52YXNSZWNvcmRlcihodG1sRWxlbWVudCwgeyBkaXNhYmxlTG9nczogdHJ1ZSwgdXNlV2hhbW15UmVjb3JkZXI6IHRydWUgfSk7XHJcbiAqIHJlY29yZGVyLnJlY29yZCgpO1xyXG4gKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICogICAgIHZpZGVvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAqIH0pO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGh0bWxFbGVtZW50IC0gcXVlcnlTZWxlY3Rvci9nZXRFbGVtZW50QnlJZC9nZXRFbGVtZW50c0J5VGFnTmFtZVswXS9ldGMuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7ZGlzYWJsZUxvZ3M6dHJ1ZSwgaW5pdENhbGxiYWNrOiBmdW5jdGlvbn1cclxuICovXHJcblxyXG5mdW5jdGlvbiBDYW52YXNSZWNvcmRlcihodG1sRWxlbWVudCwgY29uZmlnKSB7XHJcbiAgICBpZiAodHlwZW9mIGh0bWwyY2FudmFzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRocm93ICdQbGVhc2UgbGluazogaHR0cHM6Ly9jZG4ud2VicnRjLWV4cGVyaW1lbnQuY29tL3NjcmVlbnNob3QuanMnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGlmICghY29uZmlnLmZyYW1lSW50ZXJ2YWwpIHtcclxuICAgICAgICBjb25maWcuZnJhbWVJbnRlcnZhbCA9IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHZpYSBEZXRlY3RSVEMuanNcclxuICAgIHZhciBpc0NhbnZhc1N1cHBvcnRzU3RyZWFtQ2FwdHVyaW5nID0gZmFsc2U7XHJcbiAgICBbJ2NhcHR1cmVTdHJlYW0nLCAnbW96Q2FwdHVyZVN0cmVhbScsICd3ZWJraXRDYXB0dXJlU3RyZWFtJ10uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0gaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykpIHtcclxuICAgICAgICAgICAgaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIF9pc0Nocm9tZSA9ICghIXdpbmRvdy53ZWJraXRSVENQZWVyQ29ubmVjdGlvbiB8fCAhIXdpbmRvdy53ZWJraXRHZXRVc2VyTWVkaWEpICYmICEhd2luZG93LmNocm9tZTtcclxuXHJcbiAgICB2YXIgY2hyb21lVmVyc2lvbiA9IDUwO1xyXG4gICAgdmFyIG1hdGNoQXJyYXkgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DaHJvbShlfGl1bSlcXC8oWzAtOV0rKVxcLi8pO1xyXG4gICAgaWYgKF9pc0Nocm9tZSAmJiBtYXRjaEFycmF5ICYmIG1hdGNoQXJyYXlbMl0pIHtcclxuICAgICAgICBjaHJvbWVWZXJzaW9uID0gcGFyc2VJbnQobWF0Y2hBcnJheVsyXSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChfaXNDaHJvbWUgJiYgY2hyb21lVmVyc2lvbiA8IDUyKSB7XHJcbiAgICAgICAgaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25maWcudXNlV2hhbW15UmVjb3JkZXIpIHtcclxuICAgICAgICBpc0NhbnZhc1N1cHBvcnRzU3RyZWFtQ2FwdHVyaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdsb2JhbENhbnZhcywgbWVkaWFTdHJlYW1SZWNvcmRlcjtcclxuXHJcbiAgICBpZiAoaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZykge1xyXG4gICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZb3VyIGJyb3dzZXIgc3VwcG9ydHMgYm90aCBNZWRpUmVjb3JkZXIgQVBJIGFuZCBjYW52YXMuY2FwdHVyZVN0cmVhbSEnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChodG1sRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGdsb2JhbENhbnZhcyA9IGh0bWxFbGVtZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaHRtbEVsZW1lbnQgaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICAgICAgZ2xvYmFsQ2FudmFzID0gaHRtbEVsZW1lbnQuY2FudmFzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93ICdQbGVhc2UgcGFzcyBlaXRoZXIgSFRNTENhbnZhc0VsZW1lbnQgb3IgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELic7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICghIW5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW52YXMgcmVjb3JkaW5nIGlzIE5PVCBzdXBwb3J0ZWQgaW4gRmlyZWZveC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGlzUmVjb3JkaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyBDYW52YXMuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZWNvcmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1JlY29yZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChpc0NhbnZhc1N1cHBvcnRzU3RyZWFtQ2FwdHVyaW5nICYmICFjb25maWcudXNlV2hhbW15UmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgLy8gQ2FudmFzQ2FwdHVyZU1lZGlhU3RyZWFtXHJcbiAgICAgICAgICAgIHZhciBjYW52YXNNZWRpYVN0cmVhbTtcclxuICAgICAgICAgICAgaWYgKCdjYXB0dXJlU3RyZWFtJyBpbiBnbG9iYWxDYW52YXMpIHtcclxuICAgICAgICAgICAgICAgIGNhbnZhc01lZGlhU3RyZWFtID0gZ2xvYmFsQ2FudmFzLmNhcHR1cmVTdHJlYW0oMjUpOyAvLyAyNSBGUFNcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgnbW96Q2FwdHVyZVN0cmVhbScgaW4gZ2xvYmFsQ2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXNNZWRpYVN0cmVhbSA9IGdsb2JhbENhbnZhcy5tb3pDYXB0dXJlU3RyZWFtKDI1KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgnd2Via2l0Q2FwdHVyZVN0cmVhbScgaW4gZ2xvYmFsQ2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXNNZWRpYVN0cmVhbSA9IGdsb2JhbENhbnZhcy53ZWJraXRDYXB0dXJlU3RyZWFtKDI1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBtZFN0cmVhbSA9IG5ldyBNZWRpYVN0cmVhbSgpO1xyXG4gICAgICAgICAgICAgICAgbWRTdHJlYW0uYWRkVHJhY2soZ2V0VHJhY2tzKGNhbnZhc01lZGlhU3RyZWFtLCAndmlkZW8nKVswXSk7XHJcbiAgICAgICAgICAgICAgICBjYW52YXNNZWRpYVN0cmVhbSA9IG1kU3RyZWFtO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjYW52YXNNZWRpYVN0cmVhbSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ2NhcHR1cmVTdHJlYW0gQVBJIGFyZSBOT1QgYXZhaWxhYmxlLic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE5vdGU6IEphbiAxOCwgMjAxNiBzdGF0dXMgaXMgdGhhdCwgXHJcbiAgICAgICAgICAgIC8vIEZpcmVmb3ggTWVkaWFSZWNvcmRlciBBUEkgY2FuJ3QgcmVjb3JkIENhbnZhc0NhcHR1cmVNZWRpYVN0cmVhbSBvYmplY3QuXHJcbiAgICAgICAgICAgIG1lZGlhU3RyZWFtUmVjb3JkZXIgPSBuZXcgTWVkaWFTdHJlYW1SZWNvcmRlcihjYW52YXNNZWRpYVN0cmVhbSwge1xyXG4gICAgICAgICAgICAgICAgbWltZVR5cGU6IGNvbmZpZy5taW1lVHlwZSB8fCAndmlkZW8vd2VibSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1lZGlhU3RyZWFtUmVjb3JkZXIucmVjb3JkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2hhbW15LmZyYW1lcyA9IFtdO1xyXG4gICAgICAgICAgICBsYXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBkcmF3Q2FudmFzRnJhbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuaW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5pbml0Q2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0V2ViUEltYWdlcyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGh0bWxFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdjYW52YXMnKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmcmFtZXNMZW5ndGggPSB3aGFtbXkuZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICB3aGFtbXkuZnJhbWVzLmZvckVhY2goZnVuY3Rpb24oZnJhbWUsIGlkeCkge1xyXG4gICAgICAgICAgICB2YXIgZnJhbWVzUmVtYWluaW5nID0gZnJhbWVzTGVuZ3RoIC0gaWR4O1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZnJhbWVzUmVtYWluaW5nICsgJy8nICsgZnJhbWVzTGVuZ3RoICsgJyBmcmFtZXMgcmVtYWluaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maWcub25FbmNvZGluZ0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcub25FbmNvZGluZ0NhbGxiYWNrKGZyYW1lc1JlbWFpbmluZywgZnJhbWVzTGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHdlYnAgPSBmcmFtZS5pbWFnZS50b0RhdGFVUkwoJ2ltYWdlL3dlYnAnLCAxKTtcclxuICAgICAgICAgICAgd2hhbW15LmZyYW1lc1tpZHhdLmltYWdlID0gd2VicDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dlbmVyYXRpbmcgV2ViTScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcgQ2FudmFzLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiwgdGhhdCBpcyB1c2VkIHRvIHBhc3MgcmVjb3JkZWQgYmxvYiBiYWNrIHRvIHRoZSBjYWxsZWUuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaXNSZWNvcmRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZyAmJiBtZWRpYVN0cmVhbVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG1lZGlhU3RyZWFtUmVjb3JkZXIuc3RvcChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0V2ViUEltYWdlcyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7QmxvYn0gYmxvYiAtIFJlY29yZGVkIGZyYW1lcyBpbiB2aWRlby93ZWJtIGJsb2IuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBDYW52YXNSZWNvcmRlclxyXG4gICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgKiAgICAgdmFyIGJsb2IgPSByZWNvcmRlci5ibG9iO1xyXG4gICAgICAgICAgICAgKiB9KTtcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHdoYW1teS5jb21waWxlKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlY29yZGluZyBmaW5pc2hlZCEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGF0LmJsb2IgPSBibG9iO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGF0LmJsb2IuZm9yRWFjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYmxvYiA9IG5ldyBCbG9iKFtdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd2aWRlby93ZWJtJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoYXQuYmxvYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgd2hhbW15LmZyYW1lcyA9IFtdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGlzUGF1c2VkUmVjb3JkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBwYXVzZXMgdGhlIHJlY29yZGluZyBwcm9jZXNzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1JlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucGF1c2UoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlzUGF1c2VkUmVjb3JkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG1lZGlhU3RyZWFtUmVjb3JkZXIgaW5zdGFuY2VvZiBNZWRpYVN0cmVhbVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG1lZGlhU3RyZWFtUmVjb3JkZXIucGF1c2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXN1bWVzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlzUGF1c2VkUmVjb3JkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChtZWRpYVN0cmVhbVJlY29yZGVyIGluc3RhbmNlb2YgTWVkaWFTdHJlYW1SZWNvcmRlcikge1xyXG4gICAgICAgICAgICBtZWRpYVN0cmVhbVJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb3JkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlc2V0cyBjdXJyZW50bHkgcmVjb3JkZWQgZGF0YS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2xlYXJSZWNvcmRlZERhdGEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaXNSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKGNsZWFyUmVjb3JkZWREYXRhQ0IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhclJlY29yZGVkRGF0YUNCKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVjb3JkZWREYXRhQ0IoKSB7XHJcbiAgICAgICAgd2hhbW15LmZyYW1lcyA9IFtdO1xyXG4gICAgICAgIGlzUmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaXNQYXVzZWRSZWNvcmRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmb3IgZGVidWdnaW5nXHJcbiAgICB0aGlzLm5hbWUgPSAnQ2FudmFzUmVjb3JkZXInO1xyXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsb25lQ2FudmFzKCkge1xyXG4gICAgICAgIC8vY3JlYXRlIGEgbmV3IGNhbnZhc1xyXG4gICAgICAgIHZhciBuZXdDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IG5ld0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICAvL3NldCBkaW1lbnNpb25zXHJcbiAgICAgICAgbmV3Q2FudmFzLndpZHRoID0gaHRtbEVsZW1lbnQud2lkdGg7XHJcbiAgICAgICAgbmV3Q2FudmFzLmhlaWdodCA9IGh0bWxFbGVtZW50LmhlaWdodDtcclxuXHJcbiAgICAgICAgLy9hcHBseSB0aGUgb2xkIGNhbnZhcyB0byB0aGUgbmV3IG9uZVxyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGh0bWxFbGVtZW50LCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy9yZXR1cm4gdGhlIG5ldyBjYW52YXNcclxuICAgICAgICByZXR1cm4gbmV3Q2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyYXdDYW52YXNGcmFtZSgpIHtcclxuICAgICAgICBpZiAoaXNQYXVzZWRSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgbGFzdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZHJhd0NhbnZhc0ZyYW1lLCA1MDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGh0bWxFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjYW52YXMnKSB7XHJcbiAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbGFzdFRpbWU7XHJcbiAgICAgICAgICAgIC8vIHZpYSAjMjA2LCBieSBKYWNrIGkuZS4gQFNleW1vdXJyXHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICB3aGFtbXkuZnJhbWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGNsb25lQ2FudmFzKCksXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZHJhd0NhbnZhc0ZyYW1lLCBjb25maWcuZnJhbWVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHRtbDJjYW52YXMoaHRtbEVsZW1lbnQsIHtcclxuICAgICAgICAgICAgZ3JhYk1vdXNlOiB0eXBlb2YgY29uZmlnLnNob3dNb3VzZVBvaW50ZXIgPT09ICd1bmRlZmluZWQnIHx8IGNvbmZpZy5zaG93TW91c2VQb2ludGVyLFxyXG4gICAgICAgICAgICBvbnJlbmRlcmVkOiBmdW5jdGlvbihjYW52YXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbGFzdFRpbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZHJhd0NhbnZhc0ZyYW1lLCBjb25maWcuZnJhbWVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdmlhICMyMDYsIGJ5IEphY2sgaS5lLiBAU2V5bW91cnJcclxuICAgICAgICAgICAgICAgIGxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hhbW15LmZyYW1lcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2Uvd2VicCcsIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChkcmF3Q2FudmFzRnJhbWUsIGNvbmZpZy5mcmFtZUludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsYXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgIHZhciB3aGFtbXkgPSBuZXcgV2hhbW15LlZpZGVvKDEwMCk7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgUmVjb3JkUlRDICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgUmVjb3JkUlRDLkNhbnZhc1JlY29yZGVyID0gQ2FudmFzUmVjb3JkZXI7XHJcbn1cblxyXG4vLyBfX19fX19fX19fX19fX19fX1xyXG4vLyBXaGFtbXlSZWNvcmRlci5qc1xyXG5cclxuLyoqXHJcbiAqIFdoYW1teVJlY29yZGVyIGlzIGEgc3RhbmRhbG9uZSBjbGFzcyB1c2VkIGJ5IHtAbGluayBSZWNvcmRSVEN9IHRvIGJyaW5nIHZpZGVvIHJlY29yZGluZyBpbiBDaHJvbWUuIEl0IHJ1bnMgdG9wIG92ZXIge0BsaW5rIFdoYW1teX0uXHJcbiAqIEBzdW1tYXJ5IFZpZGVvIHJlY29yZGluZyBmZWF0dXJlIGluIENocm9tZS5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIFdoYW1teVJlY29yZGVyXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgV2hhbW15UmVjb3JkZXIobWVkaWFTdHJlYW0pO1xyXG4gKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gKiB9KTtcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSAtIE1lZGlhU3RyZWFtIG9iamVjdCBmZXRjaGVkIHVzaW5nIGdldFVzZXJNZWRpYSBBUEkgb3IgZ2VuZXJhdGVkIHVzaW5nIGNhcHR1cmVTdHJlYW1VbnRpbEVuZGVkIG9yIFdlYkF1ZGlvIEFQSS5cclxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIHtkaXNhYmxlTG9nczogdHJ1ZSwgaW5pdENhbGxiYWNrOiBmdW5jdGlvbiwgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQsIGV0Yy59XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gV2hhbW15UmVjb3JkZXIobWVkaWFTdHJlYW0sIGNvbmZpZykge1xyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIWNvbmZpZy5mcmFtZUludGVydmFsKSB7XHJcbiAgICAgICAgY29uZmlnLmZyYW1lSW50ZXJ2YWwgPSAxMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBmcmFtZXMtaW50ZXJ2YWw6JywgY29uZmlnLmZyYW1lSW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyB2aWRlby5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBXaGFtbXlSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlY29yZCgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlY29yZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghY29uZmlnLndpZHRoKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy53aWR0aCA9IDMyMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmhlaWdodCkge1xyXG4gICAgICAgICAgICBjb25maWcuaGVpZ2h0ID0gMjQwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcudmlkZW8pIHtcclxuICAgICAgICAgICAgY29uZmlnLnZpZGVvID0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5jYW52YXMgPSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYW52YXMud2lkdGggPSBjb25maWcuY2FudmFzLndpZHRoIHx8IDMyMDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY29uZmlnLmNhbnZhcy5oZWlnaHQgfHwgMjQwO1xyXG5cclxuICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIC8vIHNldHRpbmcgZGVmYXVsdHNcclxuICAgICAgICBpZiAoY29uZmlnLnZpZGVvICYmIGNvbmZpZy52aWRlbyBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmlkZW8gPSBjb25maWcudmlkZW8uY2xvbmVOb2RlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmluaXRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmluaXRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG5cclxuICAgICAgICAgICAgc2V0U3JjT2JqZWN0KG1lZGlhU3RyZWFtLCB2aWRlbyk7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gZnVuY3Rpb24oKSB7IC8vIFwib25sb2FkZWRtZXRhZGF0YVwiIG1heSBOT1Qgd29yayBpbiBGRj9cclxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuaW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmluaXRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmlkZW8ud2lkdGggPSBjb25maWcudmlkZW8ud2lkdGg7XHJcbiAgICAgICAgICAgIHZpZGVvLmhlaWdodCA9IGNvbmZpZy52aWRlby5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2aWRlby5tdXRlZCA9IHRydWU7XHJcbiAgICAgICAgdmlkZW8ucGxheSgpO1xyXG5cclxuICAgICAgICBsYXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHdoYW1teSA9IG5ldyBXaGFtbXkuVmlkZW8oKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbnZhcyByZXNvbHV0aW9ucycsIGNhbnZhcy53aWR0aCwgJyonLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZpZGVvIHdpZHRoL2hlaWdodCcsIHZpZGVvLndpZHRoIHx8IGNhbnZhcy53aWR0aCwgJyonLCB2aWRlby5oZWlnaHQgfHwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkcmF3RnJhbWVzKGNvbmZpZy5mcmFtZUludGVydmFsKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3IGFuZCBwdXNoIGZyYW1lcyB0byBXaGFtbXlcclxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gZnJhbWVJbnRlcnZhbCAtIHNldCBtaW5pbXVtIGludGVydmFsIChpbiBtaWxsaXNlY29uZHMpIGJldHdlZW4gZWFjaCB0aW1lIHdlIHB1c2ggYSBmcmFtZSB0byBXaGFtbXlcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZHJhd0ZyYW1lcyhmcmFtZUludGVydmFsKSB7XHJcbiAgICAgICAgZnJhbWVJbnRlcnZhbCA9IHR5cGVvZiBmcmFtZUludGVydmFsICE9PSAndW5kZWZpbmVkJyA/IGZyYW1lSW50ZXJ2YWwgOiAxMDtcclxuXHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsYXN0VGltZTtcclxuICAgICAgICBpZiAoIWR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGRyYXdGcmFtZXMsIGZyYW1lSW50ZXJ2YWwsIGZyYW1lSW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzUGF1c2VkUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGRyYXdGcmFtZXMsIDEwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB2aWEgIzIwNiwgYnkgSmFjayBpLmUuIEBTZXltb3VyclxyXG4gICAgICAgIGxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgIGlmICh2aWRlby5wYXVzZWQpIHtcclxuICAgICAgICAgICAgLy8gdmlhOiBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1dlYlJUQy1FeHBlcmltZW50L3B1bGwvMzE2XHJcbiAgICAgICAgICAgIC8vIFR3ZWFrIGZvciBBbmRyb2lkIENocm9tZVxyXG4gICAgICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB3aGFtbXkuZnJhbWVzLnB1c2goe1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGltYWdlOiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS93ZWJwJylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1N0b3BEcmF3aW5nKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZHJhd0ZyYW1lcywgZnJhbWVJbnRlcnZhbCwgZnJhbWVJbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFzeW5jTG9vcChvKSB7XHJcbiAgICAgICAgdmFyIGkgPSAtMSxcclxuICAgICAgICAgICAgbGVuZ3RoID0gby5sZW5ndGg7XHJcblxyXG4gICAgICAgIChmdW5jdGlvbiBsb29wKCkge1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG8uY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gXCJzZXRUaW1lb3V0XCIgYWRkZWQgYnkgSmltIE1jTGVvZFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgby5mdW5jdGlvblRvTG9vcChsb29wLCBpKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfSkoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW1vdmUgYmxhY2sgZnJhbWVzIGZyb20gdGhlIGJlZ2lubmluZyB0byB0aGUgc3BlY2lmaWVkIGZyYW1lXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBfZnJhbWVzIC0gYXJyYXkgb2YgZnJhbWVzIHRvIGJlIGNoZWNrZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBfZnJhbWVzVG9DaGVjayAtIG51bWJlciBvZiBmcmFtZSB1bnRpbCBjaGVjayB3aWxsIGJlIGV4ZWN1dGVkICgtMSAtIHdpbGwgZHJvcCBhbGwgZnJhbWVzIHVudGlsIGZyYW1lIG5vdCBtYXRjaGVkIHdpbGwgYmUgZm91bmQpXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX3BpeFRvbGVyYW5jZSAtIDAgLSB2ZXJ5IHN0cmljdCAob25seSBibGFjayBwaXhlbCBjb2xvcikgOyAxIC0gYWxsXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX2ZyYW1lVG9sZXJhbmNlIC0gMCAtIHZlcnkgc3RyaWN0IChvbmx5IGJsYWNrIGZyYW1lIGNvbG9yKSA7IDEgLSBhbGxcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gLSBhcnJheSBvZiBmcmFtZXNcclxuICAgICAqL1xyXG4gICAgLy8gcHVsbCMyOTMgYnkgQHZvbG9kYWxleGV5XHJcbiAgICBmdW5jdGlvbiBkcm9wQmxhY2tGcmFtZXMoX2ZyYW1lcywgX2ZyYW1lc1RvQ2hlY2ssIF9waXhUb2xlcmFuY2UsIF9mcmFtZVRvbGVyYW5jZSwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgbG9jYWxDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBsb2NhbENhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICBsb2NhbENhbnZhcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIHZhciBjb250ZXh0MmQgPSBsb2NhbENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciByZXN1bHRGcmFtZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIGNoZWNrVW50aWxOb3RCbGFjayA9IF9mcmFtZXNUb0NoZWNrID09PSAtMTtcclxuICAgICAgICB2YXIgZW5kQ2hlY2tGcmFtZSA9IChfZnJhbWVzVG9DaGVjayAmJiBfZnJhbWVzVG9DaGVjayA+IDAgJiYgX2ZyYW1lc1RvQ2hlY2sgPD0gX2ZyYW1lcy5sZW5ndGgpID9cclxuICAgICAgICAgICAgX2ZyYW1lc1RvQ2hlY2sgOiBfZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICB2YXIgc2FtcGxlQ29sb3IgPSB7XHJcbiAgICAgICAgICAgIHI6IDAsXHJcbiAgICAgICAgICAgIGc6IDAsXHJcbiAgICAgICAgICAgIGI6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBtYXhDb2xvckRpZmZlcmVuY2UgPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgIE1hdGgucG93KDI1NSwgMikgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdygyNTUsIDIpICtcclxuICAgICAgICAgICAgTWF0aC5wb3coMjU1LCAyKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIHBpeFRvbGVyYW5jZSA9IF9waXhUb2xlcmFuY2UgJiYgX3BpeFRvbGVyYW5jZSA+PSAwICYmIF9waXhUb2xlcmFuY2UgPD0gMSA/IF9waXhUb2xlcmFuY2UgOiAwO1xyXG4gICAgICAgIHZhciBmcmFtZVRvbGVyYW5jZSA9IF9mcmFtZVRvbGVyYW5jZSAmJiBfZnJhbWVUb2xlcmFuY2UgPj0gMCAmJiBfZnJhbWVUb2xlcmFuY2UgPD0gMSA/IF9mcmFtZVRvbGVyYW5jZSA6IDA7XHJcbiAgICAgICAgdmFyIGRvTm90Q2hlY2tOZXh0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGFzeW5jTG9vcCh7XHJcbiAgICAgICAgICAgIGxlbmd0aDogZW5kQ2hlY2tGcmFtZSxcclxuICAgICAgICAgICAgZnVuY3Rpb25Ub0xvb3A6IGZ1bmN0aW9uKGxvb3AsIGYpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaFBpeENvdW50LCBlbmRQaXhDaGVjaywgbWF4UGl4Q291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZpbmlzaEltYWdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb05vdENoZWNrTmV4dCAmJiBtYXhQaXhDb3VudCAtIG1hdGNoUGl4Q291bnQgPD0gbWF4UGl4Q291bnQgKiBmcmFtZVRvbGVyYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZlZCBibGFjayBmcmFtZSA6ICcgKyBmICsgJyA7IGZyYW1lIGR1cmF0aW9uICcgKyBfZnJhbWVzW2ZdLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZnJhbWUgaXMgcGFzc2VkIDogJyArIGYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tVbnRpbE5vdEJsYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb05vdENoZWNrTmV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0RnJhbWVzLnB1c2goX2ZyYW1lc1tmXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvb3AoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFkb05vdENoZWNrTmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2VEYXRhID0gY29udGV4dDJkLmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFBpeENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kUGl4Q2hlY2sgPSBpbWFnZURhdGEuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFBpeENvdW50ID0gaW1hZ2VEYXRhLmRhdGEubGVuZ3RoIC8gNDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHBpeCA9IDA7IHBpeCA8IGVuZFBpeENoZWNrOyBwaXggKz0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDb2xvciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiBpbWFnZURhdGEuZGF0YVtwaXhdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGc6IGltYWdlRGF0YS5kYXRhW3BpeCArIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGI6IGltYWdlRGF0YS5kYXRhW3BpeCArIDJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yRGlmZmVyZW5jZSA9IE1hdGguc3FydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyhjdXJyZW50Q29sb3IuciAtIHNhbXBsZUNvbG9yLnIsIDIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyhjdXJyZW50Q29sb3IuZyAtIHNhbXBsZUNvbG9yLmcsIDIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyhjdXJyZW50Q29sb3IuYiAtIHNhbXBsZUNvbG9yLmIsIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlmZmVyZW5jZSBpbiBjb2xvciBpdCBpcyBkaWZmZXJlbmNlIGluIGNvbG9yIHZlY3RvcnMgKHIxLGcxLGIxKSA8PT4gKHIyLGcyLGIyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yRGlmZmVyZW5jZSA8PSBtYXhDb2xvckRpZmZlcmVuY2UgKiBwaXhUb2xlcmFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFBpeENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IF9mcmFtZXNbZl0uaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdEZyYW1lcyA9IHJlc3VsdEZyYW1lcy5jb25jYXQoX2ZyYW1lcy5zbGljZShlbmRDaGVja0ZyYW1lKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdEZyYW1lcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGF0IGxlYXN0IG9uZSBsYXN0IGZyYW1lIHNob3VsZCBiZSBhdmFpbGFibGUgZm9yIG5leHQgbWFuaXB1bGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdG90YWwgZHVyYXRpb24gb2YgYWxsIGZyYW1lcyB3aWxsIGJlIDwgMTAwMCB0aGFuIGZmbXBlZyBkb2Vzbid0IHdvcmsgd2VsbC4uLlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEZyYW1lcy5wdXNoKF9mcmFtZXNbX2ZyYW1lcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHRGcmFtZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGlzU3RvcERyYXdpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3BzIHJlY29yZGluZyB2aWRlby5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24sIHRoYXQgaXMgdXNlZCB0byBwYXNzIHJlY29yZGVkIGJsb2IgYmFjayB0byB0aGUgY2FsbGVlLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFdoYW1teVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuXHJcbiAgICAgICAgaXNTdG9wRHJhd2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gYW5hbHlzZSBvZiBhbGwgZnJhbWVzIHRha2VzIHNvbWUgdGltZSFcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBlLmcuIGRyb3BCbGFja0ZyYW1lcyhmcmFtZXMsIDEwLCAxLCAxKSAtIHdpbGwgY3V0IGFsbCAxMCBmcmFtZXNcclxuICAgICAgICAgICAgLy8gZS5nLiBkcm9wQmxhY2tGcmFtZXMoZnJhbWVzLCAxMCwgMC41LCAwLjUpIC0gd2lsbCBhbmFseXNlIDEwIGZyYW1lc1xyXG4gICAgICAgICAgICAvLyBlLmcuIGRyb3BCbGFja0ZyYW1lcyhmcmFtZXMsIDEwKSA9PT0gZHJvcEJsYWNrRnJhbWVzKGZyYW1lcywgMTAsIDAsIDApIC0gd2lsbCBhbmFseXNlIDEwIGZyYW1lcyB3aXRoIHN0cmljdCBibGFjayBjb2xvclxyXG4gICAgICAgICAgICBkcm9wQmxhY2tGcmFtZXMod2hhbW15LmZyYW1lcywgLTEsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGZyYW1lcykge1xyXG4gICAgICAgICAgICAgICAgd2hhbW15LmZyYW1lcyA9IGZyYW1lcztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0byBkaXNwbGF5IGFkdmVydGlzZW1lbnQgaW1hZ2VzIVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5hZHZlcnRpc2VtZW50ICYmIGNvbmZpZy5hZHZlcnRpc2VtZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoYW1teS5mcmFtZXMgPSBjb25maWcuYWR2ZXJ0aXNlbWVudC5jb25jYXQod2hhbW15LmZyYW1lcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBSZWNvcmRlZCBmcmFtZXMgaW4gdmlkZW8vd2VibSBibG9iLlxyXG4gICAgICAgICAgICAgICAgICogQG1lbWJlcm9mIFdoYW1teVJlY29yZGVyXHJcbiAgICAgICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICAgICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmJsb2I7XHJcbiAgICAgICAgICAgICAgICAgKiB9KTtcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgd2hhbW15LmNvbXBpbGUoZnVuY3Rpb24oYmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJsb2IgPSBibG9iO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYmxvYi5mb3JFYWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmJsb2IgPSBuZXcgQmxvYihbXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ZpZGVvL3dlYm0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF90aGlzLmJsb2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpc1BhdXNlZFJlY29yZGluZyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcGF1c2VzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBXaGFtbXlSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZFJlY29yZGluZyA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2hhbW15UmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZXN1bWUoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXN1bWUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZFJlY29yZGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoaXNTdG9wRHJhd2luZykge1xyXG4gICAgICAgICAgICB0aGlzLnJlY29yZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXNldHMgY3VycmVudGx5IHJlY29yZGVkIGRhdGEuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2hhbW15UmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmNsZWFyUmVjb3JkZWREYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCFpc1N0b3BEcmF3aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcChjbGVhclJlY29yZGVkRGF0YUNCKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYXJSZWNvcmRlZERhdGFDQigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclJlY29yZGVkRGF0YUNCKCkge1xyXG4gICAgICAgIHdoYW1teS5mcmFtZXMgPSBbXTtcclxuICAgICAgICBpc1N0b3BEcmF3aW5nID0gdHJ1ZTtcclxuICAgICAgICBpc1BhdXNlZFJlY29yZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciBkZWJ1Z2dpbmdcclxuICAgIHRoaXMubmFtZSA9ICdXaGFtbXlSZWNvcmRlcic7XHJcbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICB2YXIgdmlkZW87XHJcbiAgICB2YXIgbGFzdFRpbWU7XHJcbiAgICB2YXIgd2hhbW15O1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5XaGFtbXlSZWNvcmRlciA9IFdoYW1teVJlY29yZGVyO1xyXG59XG5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGltYXR0ZXIxNS93aGFtbXkvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4vLyBfX19fX19fX19cclxuLy8gV2hhbW15LmpzXHJcblxyXG4vLyB0b2RvOiBGaXJlZm94IG5vdyBzdXBwb3J0cyB3ZWJwIGZvciB3ZWJtIGNvbnRhaW5lcnMhXHJcbi8vIHRoZWlyIE1lZGlhUmVjb3JkZXIgaW1wbGVtZW50YXRpb24gd29ya3Mgd2VsbCFcclxuLy8gc2hvdWxkIHdlIHByb3ZpZGUgYW4gb3B0aW9uIHRvIHJlY29yZCB2aWEgV2hhbW15LmpzIG9yIE1lZGlhUmVjb3JkZXIgQVBJIGlzIGEgYmV0dGVyIHNvbHV0aW9uP1xyXG5cclxuLyoqXHJcbiAqIFdoYW1teSBpcyBhIHN0YW5kYWxvbmUgY2xhc3MgdXNlZCBieSB7QGxpbmsgUmVjb3JkUlRDfSB0byBicmluZyB2aWRlbyByZWNvcmRpbmcgaW4gQ2hyb21lLiBJdCBpcyB3cml0dGVuIGJ5IHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vYW50aW1hdHRlcjE1fGFudGltYXR0ZXIxNX1cclxuICogQHN1bW1hcnkgQSByZWFsIHRpbWUgamF2YXNjcmlwdCB3ZWJtIGVuY29kZXIgYmFzZWQgb24gYSBjYW52YXMgaGFjay5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIFdoYW1teVxyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIHJlY29yZGVyID0gbmV3IFdoYW1teSgpLlZpZGVvKDE1KTtcclxuICogcmVjb3JkZXIuYWRkKGNvbnRleHQgfHwgY2FudmFzIHx8IGRhdGFVUkwpO1xyXG4gKiB2YXIgb3V0cHV0ID0gcmVjb3JkZXIuY29tcGlsZSgpO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqL1xyXG5cclxudmFyIFdoYW1teSA9IChmdW5jdGlvbigpIHtcclxuICAgIC8vIGEgbW9yZSBhYnN0cmFjdC1pc2ggQVBJXHJcblxyXG4gICAgZnVuY3Rpb24gV2hhbW15VmlkZW8oZHVyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmZyYW1lcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAxO1xyXG4gICAgICAgIHRoaXMucXVhbGl0eSA9IDAuODtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhc3MgQ2FudmFzIG9yIENvbnRleHQgb3IgaW1hZ2Uvd2VicChzdHJpbmcpIHRvIHtAbGluayBXaGFtbXl9IGVuY29kZXIuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2hhbW15XHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIgPSBuZXcgV2hhbW15KCkuVmlkZW8oMC44LCAxMDApO1xyXG4gICAgICogcmVjb3JkZXIuYWRkKGNhbnZhcyB8fCBjb250ZXh0IHx8ICdpbWFnZS93ZWJwJyk7XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZnJhbWUgLSBDYW52YXMgfHwgQ29udGV4dCB8fCBpbWFnZS93ZWJwXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gLSBTdGljayBhIGR1cmF0aW9uIChpbiBtaWxsaXNlY29uZHMpXHJcbiAgICAgKi9cclxuICAgIFdoYW1teVZpZGVvLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihmcmFtZSwgZHVyYXRpb24pIHtcclxuICAgICAgICBpZiAoJ2NhbnZhcycgaW4gZnJhbWUpIHsgLy9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcclxuICAgICAgICAgICAgZnJhbWUgPSBmcmFtZS5jYW52YXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJ3RvRGF0YVVSTCcgaW4gZnJhbWUpIHtcclxuICAgICAgICAgICAgZnJhbWUgPSBmcmFtZS50b0RhdGFVUkwoJ2ltYWdlL3dlYnAnLCB0aGlzLnF1YWxpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEoL15kYXRhOmltYWdlXFwvd2VicDtiYXNlNjQsL2lnKS50ZXN0KGZyYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyAnSW5wdXQgbXVzdCBiZSBmb3JtYXR0ZWQgcHJvcGVybHkgYXMgYSBiYXNlNjQgZW5jb2RlZCBEYXRhVVJJIG9mIHR5cGUgaW1hZ2Uvd2VicCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZnJhbWVzLnB1c2goe1xyXG4gICAgICAgICAgICBpbWFnZTogZnJhbWUsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiB8fCB0aGlzLmR1cmF0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NJbldlYldvcmtlcihfZnVuY3Rpb24pIHtcclxuICAgICAgICB2YXIgYmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW19mdW5jdGlvbi50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAndGhpcy5vbm1lc3NhZ2UgPSAgZnVuY3Rpb24gKGVlZSkgeycgKyBfZnVuY3Rpb24ubmFtZSArICcoZWVlLmRhdGEpO30nXHJcbiAgICAgICAgXSwge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCdcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKGJsb2IpO1xyXG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmV0dXJuIHdvcmtlcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3aGFtbXlJbldlYldvcmtlcihmcmFtZXMpIHtcclxuICAgICAgICBmdW5jdGlvbiBBcnJheVRvV2ViTShmcmFtZXMpIHtcclxuICAgICAgICAgICAgdmFyIGluZm8gPSBjaGVja0ZyYW1lcyhmcmFtZXMpO1xyXG4gICAgICAgICAgICBpZiAoIWluZm8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGNsdXN0ZXJNYXhEdXJhdGlvbiA9IDMwMDAwO1xyXG5cclxuICAgICAgICAgICAgdmFyIEVCTUwgPSBbe1xyXG4gICAgICAgICAgICAgICAgJ2lkJzogMHgxYTQ1ZGZhMywgLy8gRUJNTFxyXG4gICAgICAgICAgICAgICAgJ2RhdGEnOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogMSxcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDQyODYgLy8gRUJNTFZlcnNpb25cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg0MmY3IC8vIEVCTUxSZWFkVmVyc2lvblxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogNCxcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDQyZjIgLy8gRUJNTE1heElETGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NDJmMyAvLyBFQk1MTWF4U2l6ZUxlbmd0aFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogJ3dlYm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NDI4MiAvLyBEb2NUeXBlXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NDI4NyAvLyBEb2NUeXBlVmVyc2lvblxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogMixcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDQyODUgLy8gRG9jVHlwZVJlYWRWZXJzaW9uXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAnaWQnOiAweDE4NTM4MDY3LCAvLyBTZWdtZW50XHJcbiAgICAgICAgICAgICAgICAnZGF0YSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHgxNTQ5YTk2NiwgLy8gSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAxZTYsIC8vZG8gdGhpbmdzIGluIG1pbGxpc2VjcyAobnVtIG9mIG5hbm9zZWNzIGZvciBkdXJhdGlvbiBzY2FsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHgyYWQ3YjEgLy8gVGltZWNvZGVTY2FsZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAnd2hhbW15JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg0ZDgwIC8vIE11eGluZ0FwcFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAnd2hhbW15JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg1NzQxIC8vIFdyaXRpbmdBcHBcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogZG91YmxlVG9TdHJpbmcoaW5mby5kdXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NDQ4OSAvLyBEdXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHgxNjU0YWU2YiwgLy8gVHJhY2tzXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweGFlLCAvLyBUcmFja0VudHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4ZDcgLy8gVHJhY2tOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg3M2M1IC8vIFRyYWNrVUlEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4OWMgLy8gRmxhZ0xhY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6ICd1bmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHgyMmI1OWMgLy8gTGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAnVl9WUDgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg4NiAvLyBDb2RlY0lEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogJ1ZQOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDI1ODY4OCAvLyBDb2RlY05hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg4MyAvLyBUcmFja1R5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHhlMCwgLy8gVmlkZW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IGluZm8ud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHhiMCAvLyBQaXhlbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBpbmZvLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweGJhIC8vIFBpeGVsSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIC8vR2VuZXJhdGUgY2x1c3RlcnMgKG1heCBkdXJhdGlvbilcclxuICAgICAgICAgICAgdmFyIGZyYW1lTnVtYmVyID0gMDtcclxuICAgICAgICAgICAgdmFyIGNsdXN0ZXJUaW1lY29kZSA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlIChmcmFtZU51bWJlciA8IGZyYW1lcy5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY2x1c3RlckZyYW1lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsdXN0ZXJEdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2x1c3RlckZyYW1lcy5wdXNoKGZyYW1lc1tmcmFtZU51bWJlcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXJEdXJhdGlvbiArPSBmcmFtZXNbZnJhbWVOdW1iZXJdLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lTnVtYmVyKys7XHJcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChmcmFtZU51bWJlciA8IGZyYW1lcy5sZW5ndGggJiYgY2x1c3RlckR1cmF0aW9uIDwgY2x1c3Rlck1heER1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY2x1c3RlckNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsdXN0ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHgxZjQzYjY3NSwgLy8gQ2x1c3RlclxyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogZ2V0Q2x1c3RlckRhdGEoY2x1c3RlclRpbWVjb2RlLCBjbHVzdGVyQ291bnRlciwgY2x1c3RlckZyYW1lcylcclxuICAgICAgICAgICAgICAgIH07IC8vQWRkIGNsdXN0ZXIgdG8gc2VnbWVudFxyXG4gICAgICAgICAgICAgICAgRUJNTFsxXS5kYXRhLnB1c2goY2x1c3Rlcik7XHJcbiAgICAgICAgICAgICAgICBjbHVzdGVyVGltZWNvZGUgKz0gY2x1c3RlckR1cmF0aW9uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVFQk1MKEVCTUwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q2x1c3RlckRhdGEoY2x1c3RlclRpbWVjb2RlLCBjbHVzdGVyQ291bnRlciwgY2x1c3RlckZyYW1lcykge1xyXG4gICAgICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgICAgICAgICdkYXRhJzogY2x1c3RlclRpbWVjb2RlLFxyXG4gICAgICAgICAgICAgICAgJ2lkJzogMHhlNyAvLyBUaW1lY29kZVxyXG4gICAgICAgICAgICB9XS5jb25jYXQoY2x1c3RlckZyYW1lcy5tYXAoZnVuY3Rpb24od2VicCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gbWFrZVNpbXBsZUJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNjYXJkYWJsZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZTogd2VicC5kYXRhLnNsaWNlKDQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGludmlzaWJsZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBrZXlmcmFtZTogMSxcclxuICAgICAgICAgICAgICAgICAgICBsYWNpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tOdW06IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWNvZGU6IE1hdGgucm91bmQoY2x1c3RlckNvdW50ZXIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNsdXN0ZXJDb3VudGVyICs9IHdlYnAuZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGJsb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAweGEzXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdW1zIHRoZSBsZW5ndGhzIG9mIGFsbCB0aGUgZnJhbWVzIGFuZCBnZXRzIHRoZSBkdXJhdGlvblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjaGVja0ZyYW1lcyhmcmFtZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFmcmFtZXNbMF0pIHtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBNYXliZSBXZWJQIGZvcm1hdCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoZSBjdXJyZW50IGJyb3dzZXIuJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IGZyYW1lc1swXS53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IGZyYW1lc1swXS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IGZyYW1lc1swXS5kdXJhdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgZnJhbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiArPSBmcmFtZXNbaV0uZHVyYXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBudW1Ub0J1ZmZlcihudW0pIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gW107XHJcbiAgICAgICAgICAgIHdoaWxlIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKG51bSAmIDB4ZmYpO1xyXG4gICAgICAgICAgICAgICAgbnVtID0gbnVtID4+IDg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHBhcnRzLnJldmVyc2UoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdHJUb0J1ZmZlcihzdHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHN0ci5zcGxpdCgnJykubWFwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGJpdHNUb0J1ZmZlcihiaXRzKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gW107XHJcbiAgICAgICAgICAgIHZhciBwYWQgPSAoYml0cy5sZW5ndGggJSA4KSA/IChuZXcgQXJyYXkoMSArIDggLSAoYml0cy5sZW5ndGggJSA4KSkpLmpvaW4oJzAnKSA6ICcnO1xyXG4gICAgICAgICAgICBiaXRzID0gcGFkICsgYml0cztcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaXRzLmxlbmd0aDsgaSArPSA4KSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2gocGFyc2VJbnQoYml0cy5zdWJzdHIoaSwgOCksIDIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZUVCTUwoanNvbikge1xyXG4gICAgICAgICAgICB2YXIgZWJtbCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0ganNvbltpXS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gZ2VuZXJhdGVFQk1MKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gYml0c1RvQnVmZmVyKGRhdGEudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gc3RyVG9CdWZmZXIoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxlbiA9IGRhdGEuc2l6ZSB8fCBkYXRhLmJ5dGVMZW5ndGggfHwgZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB2YXIgemVyb2VzID0gTWF0aC5jZWlsKE1hdGguY2VpbChNYXRoLmxvZyhsZW4pIC8gTWF0aC5sb2coMikpIC8gOCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZVRvU3RyaW5nID0gbGVuLnRvU3RyaW5nKDIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhZGRlZCA9IChuZXcgQXJyYXkoKHplcm9lcyAqIDcgKyA3ICsgMSkgLSBzaXplVG9TdHJpbmcubGVuZ3RoKSkuam9pbignMCcpICsgc2l6ZVRvU3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNpemUgPSAobmV3IEFycmF5KHplcm9lcykpLmpvaW4oJzAnKSArICcxJyArIHBhZGRlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBlYm1sLnB1c2gobnVtVG9CdWZmZXIoanNvbltpXS5pZCkpO1xyXG4gICAgICAgICAgICAgICAgZWJtbC5wdXNoKGJpdHNUb0J1ZmZlcihzaXplKSk7XHJcbiAgICAgICAgICAgICAgICBlYm1sLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmxvYihlYm1sLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAndmlkZW8vd2VibSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b0JpblN0ck9sZChiaXRzKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gJyc7XHJcbiAgICAgICAgICAgIHZhciBwYWQgPSAoYml0cy5sZW5ndGggJSA4KSA/IChuZXcgQXJyYXkoMSArIDggLSAoYml0cy5sZW5ndGggJSA4KSkpLmpvaW4oJzAnKSA6ICcnO1xyXG4gICAgICAgICAgICBiaXRzID0gcGFkICsgYml0cztcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaXRzLmxlbmd0aDsgaSArPSA4KSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoYml0cy5zdWJzdHIoaSwgOCksIDIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VTaW1wbGVCbG9jayhkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBmbGFncyA9IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5rZXlmcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZmxhZ3MgfD0gMTI4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5pbnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIGZsYWdzIHw9IDg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmxhY2luZykge1xyXG4gICAgICAgICAgICAgICAgZmxhZ3MgfD0gKGRhdGEubGFjaW5nIDw8IDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5kaXNjYXJkYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgZmxhZ3MgfD0gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEudHJhY2tOdW0gPiAxMjcpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdUcmFja051bWJlciA+IDEyNyBub3Qgc3VwcG9ydGVkJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG91dCA9IFtkYXRhLnRyYWNrTnVtIHwgMHg4MCwgZGF0YS50aW1lY29kZSA+PiA4LCBkYXRhLnRpbWVjb2RlICYgMHhmZiwgZmxhZ3NdLm1hcChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlKTtcclxuICAgICAgICAgICAgfSkuam9pbignJykgKyBkYXRhLmZyYW1lO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG91dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlV2ViUChyaWZmKSB7XHJcbiAgICAgICAgICAgIHZhciBWUDggPSByaWZmLlJJRkZbMF0uV0VCUFswXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcmFtZVN0YXJ0ID0gVlA4LmluZGV4T2YoJ1xceDlkXFx4MDFcXHgyYScpOyAvLyBBIFZQOCBrZXlmcmFtZSBzdGFydHMgd2l0aCB0aGUgMHg5ZDAxMmEgaGVhZGVyXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBjID0gW107IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNbaV0gPSBWUDguY2hhckNvZGVBdChmcmFtZVN0YXJ0ICsgMyArIGkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgd2lkdGgsIGhlaWdodCwgdG1wO1xyXG5cclxuICAgICAgICAgICAgLy90aGUgY29kZSBiZWxvdyBpcyBsaXRlcmFsbHkgY29waWVkIHZlcmJhdGltIGZyb20gdGhlIGJpdHN0cmVhbSBzcGVjXHJcbiAgICAgICAgICAgIHRtcCA9IChjWzFdIDw8IDgpIHwgY1swXTtcclxuICAgICAgICAgICAgd2lkdGggPSB0bXAgJiAweDNGRkY7XHJcbiAgICAgICAgICAgIHRtcCA9IChjWzNdIDw8IDgpIHwgY1syXTtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gdG1wICYgMHgzRkZGO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBWUDgsXHJcbiAgICAgICAgICAgICAgICByaWZmOiByaWZmXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRTdHJMZW5ndGgoc3RyaW5nLCBvZmZzZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHN0cmluZy5zdWJzdHIob2Zmc2V0ICsgNCwgNCkuc3BsaXQoJycpLm1hcChmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdW5wYWRkZWQgPSBpLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBBcnJheSg4IC0gdW5wYWRkZWQubGVuZ3RoICsgMSkpLmpvaW4oJzAnKSArIHVucGFkZGVkO1xyXG4gICAgICAgICAgICB9KS5qb2luKCcnKSwgMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwYXJzZVJJRkYoc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgY2h1bmtzID0ge307XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAob2Zmc2V0IDwgc3RyaW5nLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gc3RyaW5nLnN1YnN0cihvZmZzZXQsIDQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxlbiA9IGdldFN0ckxlbmd0aChzdHJpbmcsIG9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHN0cmluZy5zdWJzdHIob2Zmc2V0ICsgNCArIDQsIGxlbik7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNCArIDQgKyBsZW47XHJcbiAgICAgICAgICAgICAgICBjaHVua3NbaWRdID0gY2h1bmtzW2lkXSB8fCBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT09ICdSSUZGJyB8fCBpZCA9PT0gJ0xJU1QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtzW2lkXS5wdXNoKHBhcnNlUklGRihkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNodW5rc1tpZF0ucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2h1bmtzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG91YmxlVG9TdHJpbmcobnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKFxyXG4gICAgICAgICAgICAgICAgbmV3IFVpbnQ4QXJyYXkoKG5ldyBGbG9hdDY0QXJyYXkoW251bV0pKS5idWZmZXIpLCAwKS5tYXAoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZSk7XHJcbiAgICAgICAgICAgIH0pLnJldmVyc2UoKS5qb2luKCcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB3ZWJtID0gbmV3IEFycmF5VG9XZWJNKGZyYW1lcy5tYXAoZnVuY3Rpb24oZnJhbWUpIHtcclxuICAgICAgICAgICAgdmFyIHdlYnAgPSBwYXJzZVdlYlAocGFyc2VSSUZGKGF0b2IoZnJhbWUuaW1hZ2Uuc2xpY2UoMjMpKSkpO1xyXG4gICAgICAgICAgICB3ZWJwLmR1cmF0aW9uID0gZnJhbWUuZHVyYXRpb247XHJcbiAgICAgICAgICAgIHJldHVybiB3ZWJwO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgcG9zdE1lc3NhZ2Uod2VibSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmNvZGVzIGZyYW1lcyBpbiBXZWJNIGNvbnRhaW5lci4gSXQgdXNlcyBXZWJXb3JraW52b2tlIHRvIGludm9rZSAnQXJyYXlUb1dlYk0nIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24sIHRoYXQgaXMgdXNlZCB0byBwYXNzIHJlY29yZGVkIGJsb2IgYmFjayB0byB0aGUgY2FsbGVlLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFdoYW1teVxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyID0gbmV3IFdoYW1teSgpLlZpZGVvKDAuOCwgMTAwKTtcclxuICAgICAqIHJlY29yZGVyLmNvbXBpbGUoZnVuY3Rpb24oYmxvYikge1xyXG4gICAgICogICAgLy8gYmxvYi5zaXplIC0gYmxvYi50eXBlXHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG4gICAgV2hhbW15VmlkZW8ucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciB3ZWJXb3JrZXIgPSBwcm9jZXNzSW5XZWJXb3JrZXIod2hhbW15SW5XZWJXb3JrZXIpO1xyXG5cclxuICAgICAgICB3ZWJXb3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXZlbnQuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2ViV29ya2VyLnBvc3RNZXNzYWdlKHRoaXMuZnJhbWVzKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIG1vcmUgYWJzdHJhY3QtaXNoIEFQSS5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFdoYW1teVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIgPSBuZXcgV2hhbW15KCkuVmlkZW8oMC44LCAxMDApO1xyXG4gICAgICAgICAqIEBwYXJhbSB7P251bWJlcn0gc3BlZWQgLSAwLjhcclxuICAgICAgICAgKiBAcGFyYW0gez9udW1iZXJ9IHF1YWxpdHkgLSAxMDBcclxuICAgICAgICAgKi9cclxuICAgICAgICBWaWRlbzogV2hhbW15VmlkZW9cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5XaGFtbXkgPSBXaGFtbXk7XHJcbn1cblxyXG4vLyBfX19fX19fX19fX19fXyAoaW5kZXhlZC1kYilcclxuLy8gRGlza1N0b3JhZ2UuanNcclxuXHJcbi8qKlxyXG4gKiBEaXNrU3RvcmFnZSBpcyBhIHN0YW5kYWxvbmUgb2JqZWN0IHVzZWQgYnkge0BsaW5rIFJlY29yZFJUQ30gdG8gc3RvcmUgcmVjb3JkZWQgYmxvYnMgaW4gSW5kZXhlZERCIHN0b3JhZ2UuXHJcbiAqIEBzdW1tYXJ5IFdyaXRpbmcgYmxvYnMgaW50byBJbmRleGVkREIuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAZXhhbXBsZVxyXG4gKiBEaXNrU3RvcmFnZS5TdG9yZSh7XHJcbiAqICAgICBhdWRpb0Jsb2I6IHlvdXJBdWRpb0Jsb2IsXHJcbiAqICAgICB2aWRlb0Jsb2I6IHlvdXJWaWRlb0Jsb2IsXHJcbiAqICAgICBnaWZCbG9iICA6IHlvdXJHaWZCbG9iXHJcbiAqIH0pO1xyXG4gKiBEaXNrU3RvcmFnZS5GZXRjaChmdW5jdGlvbihkYXRhVVJMLCB0eXBlKSB7XHJcbiAqICAgICBpZih0eXBlID09PSAnYXVkaW9CbG9iJykgeyB9XHJcbiAqICAgICBpZih0eXBlID09PSAndmlkZW9CbG9iJykgeyB9XHJcbiAqICAgICBpZih0eXBlID09PSAnZ2lmQmxvYicpICAgeyB9XHJcbiAqIH0pO1xyXG4gKiAvLyBEaXNrU3RvcmFnZS5kYXRhU3RvcmVOYW1lID0gJ3JlY29yZFJUQyc7XHJcbiAqIC8vIERpc2tTdG9yYWdlLm9uRXJyb3IgPSBmdW5jdGlvbihlcnJvcikgeyB9O1xyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBpbml0IC0gVGhpcyBtZXRob2QgbXVzdCBiZSBjYWxsZWQgb25jZSB0byBpbml0aWFsaXplIEluZGV4ZWREQiBPYmplY3RTdG9yZS4gVGhvdWdoLCBpdCBpcyBhdXRvLXVzZWQgaW50ZXJuYWxseS5cclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gRmV0Y2ggLSBUaGlzIG1ldGhvZCBmZXRjaGVzIHN0b3JlZCBibG9icyBmcm9tIEluZGV4ZWREQi5cclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gU3RvcmUgLSBUaGlzIG1ldGhvZCBzdG9yZXMgYmxvYnMgaW4gSW5kZXhlZERCLlxyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvbkVycm9yIC0gVGhpcyBmdW5jdGlvbiBpcyBpbnZva2VkIGZvciBhbnkga25vd24vdW5rbm93biBlcnJvci5cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRhdGFTdG9yZU5hbWUgLSBOYW1lIG9mIHRoZSBPYmplY3RTdG9yZSBjcmVhdGVkIGluIEluZGV4ZWREQiBzdG9yYWdlLlxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqL1xyXG5cclxuXHJcbnZhciBEaXNrU3RvcmFnZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgbXVzdCBiZSBjYWxsZWQgb25jZSB0byBpbml0aWFsaXplIEluZGV4ZWREQiBPYmplY3RTdG9yZS4gVGhvdWdoLCBpdCBpcyBhdXRvLXVzZWQgaW50ZXJuYWxseS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBEaXNrU3RvcmFnZVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogRGlza1N0b3JhZ2UuaW5pdCgpO1xyXG4gICAgICovXHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXhlZERCID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgaW5kZXhlZERCLm9wZW4gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luZGV4ZWREQiBBUEkgYXJlIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZGJWZXJzaW9uID0gMTtcclxuICAgICAgICB2YXIgZGJOYW1lID0gdGhpcy5kYk5hbWUgfHwgbG9jYXRpb24uaHJlZi5yZXBsYWNlKC9cXC98OnwjfCV8XFwufFxcW3xcXF0vZywgJycpLFxyXG4gICAgICAgICAgICBkYjtcclxuICAgICAgICB2YXIgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKGRiTmFtZSwgZGJWZXJzaW9uKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0U3RvcmUoZGF0YUJhc2UpIHtcclxuICAgICAgICAgICAgZGF0YUJhc2UuY3JlYXRlT2JqZWN0U3RvcmUoc2VsZi5kYXRhU3RvcmVOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHB1dEluREIoKSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFtzZWxmLmRhdGFTdG9yZU5hbWVdLCAncmVhZHdyaXRlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi52aWRlb0Jsb2IpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuZGF0YVN0b3JlTmFtZSkucHV0KHNlbGYudmlkZW9CbG9iLCAndmlkZW9CbG9iJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLmdpZkJsb2IpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuZGF0YVN0b3JlTmFtZSkucHV0KHNlbGYuZ2lmQmxvYiwgJ2dpZkJsb2InKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGYuYXVkaW9CbG9iKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLmRhdGFTdG9yZU5hbWUpLnB1dChzZWxmLmF1ZGlvQmxvYiwgJ2F1ZGlvQmxvYicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRGcm9tU3RvcmUocG9ydGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuZGF0YVN0b3JlTmFtZSkuZ2V0KHBvcnRpb25OYW1lKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbGJhY2soZXZlbnQudGFyZ2V0LnJlc3VsdCwgcG9ydGlvbk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdldEZyb21TdG9yZSgnYXVkaW9CbG9iJyk7XHJcbiAgICAgICAgICAgIGdldEZyb21TdG9yZSgndmlkZW9CbG9iJyk7XHJcbiAgICAgICAgICAgIGdldEZyb21TdG9yZSgnZ2lmQmxvYicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gc2VsZi5vbkVycm9yO1xyXG5cclxuICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBkYiA9IHJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgICAgICBkYi5vbmVycm9yID0gc2VsZi5vbkVycm9yO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRiLnNldFZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYi52ZXJzaW9uICE9PSBkYlZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2V0VmVyc2lvbiA9IGRiLnNldFZlcnNpb24oZGJWZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWZXJzaW9uLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVPYmplY3RTdG9yZShkYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1dEluREIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwdXRJbkRCKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwdXRJbkRCKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgY3JlYXRlT2JqZWN0U3RvcmUoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGZldGNoZXMgc3RvcmVkIGJsb2JzIGZyb20gSW5kZXhlZERCLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIERpc2tTdG9yYWdlXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBEaXNrU3RvcmFnZS5GZXRjaChmdW5jdGlvbihkYXRhVVJMLCB0eXBlKSB7XHJcbiAgICAgKiAgICAgaWYodHlwZSA9PT0gJ2F1ZGlvQmxvYicpIHsgfVxyXG4gICAgICogICAgIGlmKHR5cGUgPT09ICd2aWRlb0Jsb2InKSB7IH1cclxuICAgICAqICAgICBpZih0eXBlID09PSAnZ2lmQmxvYicpICAgeyB9XHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG4gICAgRmV0Y2g6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3JlcyBibG9icyBpbiBJbmRleGVkREIuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgRGlza1N0b3JhZ2VcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIERpc2tTdG9yYWdlLlN0b3JlKHtcclxuICAgICAqICAgICBhdWRpb0Jsb2I6IHlvdXJBdWRpb0Jsb2IsXHJcbiAgICAgKiAgICAgdmlkZW9CbG9iOiB5b3VyVmlkZW9CbG9iLFxyXG4gICAgICogICAgIGdpZkJsb2IgIDogeW91ckdpZkJsb2JcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICBTdG9yZTogZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0Jsb2IgPSBjb25maWcuYXVkaW9CbG9iO1xyXG4gICAgICAgIHRoaXMudmlkZW9CbG9iID0gY29uZmlnLnZpZGVvQmxvYjtcclxuICAgICAgICB0aGlzLmdpZkJsb2IgPSBjb25maWcuZ2lmQmxvYjtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBpbnZva2VkIGZvciBhbnkga25vd24vdW5rbm93biBlcnJvci5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBEaXNrU3RvcmFnZVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogRGlza1N0b3JhZ2Uub25FcnJvciA9IGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAqICAgICBhbGVyb3QoIEpTT04uc3RyaW5naWZ5KGVycm9yKSApO1xyXG4gICAgICogfTtcclxuICAgICAqL1xyXG4gICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKEpTT04uc3RyaW5naWZ5KGVycm9yLCBudWxsLCAnXFx0JykpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXRhU3RvcmVOYW1lIC0gTmFtZSBvZiB0aGUgT2JqZWN0U3RvcmUgY3JlYXRlZCBpbiBJbmRleGVkREIgc3RvcmFnZS5cclxuICAgICAqIEBtZW1iZXJvZiBEaXNrU3RvcmFnZVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogRGlza1N0b3JhZ2UuZGF0YVN0b3JlTmFtZSA9ICdyZWNvcmRSVEMnO1xyXG4gICAgICovXHJcbiAgICBkYXRhU3RvcmVOYW1lOiAncmVjb3JkUlRDJyxcclxuICAgIGRiTmFtZTogbnVsbFxyXG59O1xyXG5cclxuaWYgKHR5cGVvZiBSZWNvcmRSVEMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWNvcmRSVEMuRGlza1N0b3JhZ2UgPSBEaXNrU3RvcmFnZTtcclxufVxuXHJcbi8vIF9fX19fX19fX19fX19fXHJcbi8vIEdpZlJlY29yZGVyLmpzXHJcblxyXG4vKipcclxuICogR2lmUmVjb3JkZXIgaXMgc3RhbmRhbG9uZSBjYWxzcyB1c2VkIGJ5IHtAbGluayBSZWNvcmRSVEN9IHRvIHJlY29yZCB2aWRlbyBvciBjYW52YXMgaW50byBhbmltYXRlZCBnaWYuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAdHlwZWRlZiBHaWZSZWNvcmRlclxyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIHJlY29yZGVyID0gbmV3IEdpZlJlY29yZGVyKG1lZGlhU3RyZWFtIHx8IGNhbnZhcyB8fCBjb250ZXh0LCB7IG9uR2lmUHJldmlldzogZnVuY3Rpb24sIG9uR2lmUmVjb3JkaW5nU3RhcnRlZDogZnVuY3Rpb24sIHdpZHRoOiAxMjgwLCBoZWlnaHQ6IDcyMCwgZnJhbWVSYXRlOiAyMDAsIHF1YWxpdHk6IDEwIH0pO1xyXG4gKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAqICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICogfSk7XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBNZWRpYVN0cmVhbSBvYmplY3Qgb3IgSFRNTENhbnZhc0VsZW1lbnQgb3IgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge2Rpc2FibGVMb2dzOnRydWUsIGluaXRDYWxsYmFjazogZnVuY3Rpb24sIHdpZHRoOiAzMjAsIGhlaWdodDogMjQwLCBmcmFtZVJhdGU6IDIwMCwgcXVhbGl0eTogMTB9XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gR2lmUmVjb3JkZXIobWVkaWFTdHJlYW0sIGNvbmZpZykge1xyXG4gICAgaWYgKHR5cGVvZiBHSUZFbmNvZGVyID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2RuLndlYnJ0Yy1leHBlcmltZW50LmNvbS9naWYtcmVjb3JkZXIuanMnO1xyXG4gICAgICAgIChkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG4gICAgdmFyIGlzSFRNTE9iamVjdCA9IG1lZGlhU3RyZWFtIGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHx8IG1lZGlhU3RyZWFtIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZWNvcmRzIE1lZGlhU3RyZWFtLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIEdpZlJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVjb3JkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBHSUZFbmNvZGVyID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHNlbGYucmVjb3JkLCAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc0xvYWRlZE1ldGFEYXRhKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoc2VsZi5yZWNvcmQsIDEwMDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzSFRNTE9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLndpZHRoID0gdmlkZW8ub2Zmc2V0V2lkdGggfHwgMzIwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5oZWlnaHQgPSB2aWRlby5vZmZzZXRIZWlnaHQgfHwgMjQwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy52aWRlbykge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLnZpZGVvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjb25maWcud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5jYW52YXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5jYW52YXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGNvbmZpZy5jYW52YXMud2lkdGggfHwgMzIwO1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY29uZmlnLmNhbnZhcy5oZWlnaHQgfHwgMjQwO1xyXG5cclxuICAgICAgICAgICAgdmlkZW8ud2lkdGggPSBjb25maWcudmlkZW8ud2lkdGggfHwgMzIwO1xyXG4gICAgICAgICAgICB2aWRlby5oZWlnaHQgPSBjb25maWcudmlkZW8uaGVpZ2h0IHx8IDI0MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGV4dGVybmFsIGxpYnJhcnkgdG8gcmVjb3JkIGFzIEdJRiBpbWFnZXNcclxuICAgICAgICBnaWZFbmNvZGVyID0gbmV3IEdJRkVuY29kZXIoKTtcclxuXHJcbiAgICAgICAgLy8gdm9pZCBzZXRSZXBlYXQoaW50IGl0ZXIpIFxyXG4gICAgICAgIC8vIFNldHMgdGhlIG51bWJlciBvZiB0aW1lcyB0aGUgc2V0IG9mIEdJRiBmcmFtZXMgc2hvdWxkIGJlIHBsYXllZC4gXHJcbiAgICAgICAgLy8gRGVmYXVsdCBpcyAxOyAwIG1lYW5zIHBsYXkgaW5kZWZpbml0ZWx5LlxyXG4gICAgICAgIGdpZkVuY29kZXIuc2V0UmVwZWF0KDApO1xyXG5cclxuICAgICAgICAvLyB2b2lkIHNldEZyYW1lUmF0ZShOdW1iZXIgZnBzKSBcclxuICAgICAgICAvLyBTZXRzIGZyYW1lIHJhdGUgaW4gZnJhbWVzIHBlciBzZWNvbmQuIFxyXG4gICAgICAgIC8vIEVxdWl2YWxlbnQgdG8gc2V0RGVsYXkoMTAwMC9mcHMpLlxyXG4gICAgICAgIC8vIFVzaW5nIFwic2V0RGVsYXlcIiBpbnN0ZWFkIG9mIFwic2V0RnJhbWVSYXRlXCJcclxuICAgICAgICBnaWZFbmNvZGVyLnNldERlbGF5KGNvbmZpZy5mcmFtZVJhdGUgfHwgMjAwKTtcclxuXHJcbiAgICAgICAgLy8gdm9pZCBzZXRRdWFsaXR5KGludCBxdWFsaXR5KSBcclxuICAgICAgICAvLyBTZXRzIHF1YWxpdHkgb2YgY29sb3IgcXVhbnRpemF0aW9uIChjb252ZXJzaW9uIG9mIGltYWdlcyB0byB0aGUgXHJcbiAgICAgICAgLy8gbWF4aW11bSAyNTYgY29sb3JzIGFsbG93ZWQgYnkgdGhlIEdJRiBzcGVjaWZpY2F0aW9uKS4gXHJcbiAgICAgICAgLy8gTG93ZXIgdmFsdWVzIChtaW5pbXVtID0gMSkgcHJvZHVjZSBiZXR0ZXIgY29sb3JzLCBcclxuICAgICAgICAvLyBidXQgc2xvdyBwcm9jZXNzaW5nIHNpZ25pZmljYW50bHkuIDEwIGlzIHRoZSBkZWZhdWx0LCBcclxuICAgICAgICAvLyBhbmQgcHJvZHVjZXMgZ29vZCBjb2xvciBtYXBwaW5nIGF0IHJlYXNvbmFibGUgc3BlZWRzLiBcclxuICAgICAgICAvLyBWYWx1ZXMgZ3JlYXRlciB0aGFuIDIwIGRvIG5vdCB5aWVsZCBzaWduaWZpY2FudCBpbXByb3ZlbWVudHMgaW4gc3BlZWQuXHJcbiAgICAgICAgZ2lmRW5jb2Rlci5zZXRRdWFsaXR5KGNvbmZpZy5xdWFsaXR5IHx8IDEwKTtcclxuXHJcbiAgICAgICAgLy8gQm9vbGVhbiBzdGFydCgpIFxyXG4gICAgICAgIC8vIFRoaXMgd3JpdGVzIHRoZSBHSUYgSGVhZGVyIGFuZCByZXR1cm5zIGZhbHNlIGlmIGl0IGZhaWxzLlxyXG4gICAgICAgIGdpZkVuY29kZXIuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcub25HaWZSZWNvcmRpbmdTdGFydGVkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5vbkdpZlJlY29yZGluZ1N0YXJ0ZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdWaWRlb0ZyYW1lKHRpbWUpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuY2xlYXJlZFJlY29yZGVkRGF0YSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNQYXVzZWRSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdWaWRlb0ZyYW1lKHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdWaWRlb0ZyYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGFzdEZyYW1lVGltZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsYXN0RnJhbWVUaW1lID0gdGltZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gfjEwIGZwc1xyXG4gICAgICAgICAgICBpZiAodGltZSAtIGxhc3RGcmFtZVRpbWUgPCA5MCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzSFRNTE9iamVjdCAmJiB2aWRlby5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHZpYTogaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9XZWJSVEMtRXhwZXJpbWVudC9wdWxsLzMxNlxyXG4gICAgICAgICAgICAgICAgLy8gVHdlYWsgZm9yIEFuZHJvaWQgQ2hyb21lXHJcbiAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaXNIVE1MT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5vbkdpZlByZXZpZXcpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5vbkdpZlByZXZpZXcoY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnaWZFbmNvZGVyLmFkZEZyYW1lKGNvbnRleHQpO1xyXG4gICAgICAgICAgICBsYXN0RnJhbWVUaW1lID0gdGltZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3VmlkZW9GcmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuaW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5pbml0Q2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcHMgcmVjb3JkaW5nIE1lZGlhU3RyZWFtLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiwgdGhhdCBpcyB1c2VkIHRvIHBhc3MgcmVjb3JkZWQgYmxvYiBiYWNrIHRvIHRoZSBjYWxsZWUuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgR2lmUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAqICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGxhc3RBbmltYXRpb25GcmFtZSkge1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShsYXN0QW5pbWF0aW9uRnJhbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZW5kVGltZSA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7QmxvYn0gYmxvYiAtIFRoZSByZWNvcmRlZCBibG9iIG9iamVjdC5cclxuICAgICAgICAgKiBAbWVtYmVyb2YgR2lmUmVjb3JkZXJcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oKXtcclxuICAgICAgICAgKiAgICAgdmFyIGJsb2IgPSByZWNvcmRlci5ibG9iO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYmxvYiA9IG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShnaWZFbmNvZGVyLnN0cmVhbSgpLmJpbildLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9naWYnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuYmxvYik7XHJcblxyXG4gICAgICAgIC8vIGJ1ZzogZmluZCBhIHdheSB0byBjbGVhciBvbGQgcmVjb3JkZWQgYmxvYnNcclxuICAgICAgICBnaWZFbmNvZGVyLnN0cmVhbSgpLmJpbiA9IFtdO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaXNQYXVzZWRSZWNvcmRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHBhdXNlcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgR2lmUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5wYXVzZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnBhdXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaXNQYXVzZWRSZWNvcmRpbmcgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlc3VtZXMgdGhlIHJlY29yZGluZyBwcm9jZXNzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIEdpZlJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVzdW1lKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVzdW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaXNQYXVzZWRSZWNvcmRpbmcgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXNldHMgY3VycmVudGx5IHJlY29yZGVkIGRhdGEuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgR2lmUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmNsZWFyUmVjb3JkZWREYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2VsZi5jbGVhcmVkUmVjb3JkZWREYXRhID0gdHJ1ZTtcclxuICAgICAgICBjbGVhclJlY29yZGVkRGF0YUNCKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVjb3JkZWREYXRhQ0IoKSB7XHJcbiAgICAgICAgaWYgKGdpZkVuY29kZXIpIHtcclxuICAgICAgICAgICAgZ2lmRW5jb2Rlci5zdHJlYW0oKS5iaW4gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZm9yIGRlYnVnZ2luZ1xyXG4gICAgdGhpcy5uYW1lID0gJ0dpZlJlY29yZGVyJztcclxuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGlmIChpc0hUTUxPYmplY3QpIHtcclxuICAgICAgICBpZiAobWVkaWFTdHJlYW0gaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICAgICAgY29udGV4dCA9IG1lZGlhU3RyZWFtO1xyXG4gICAgICAgICAgICBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcclxuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhU3RyZWFtIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29udGV4dCA9IG1lZGlhU3RyZWFtLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIGNhbnZhcyA9IG1lZGlhU3RyZWFtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgaXNMb2FkZWRNZXRhRGF0YSA9IHRydWU7XHJcblxyXG4gICAgaWYgKCFpc0hUTUxPYmplY3QpIHtcclxuICAgICAgICB2YXIgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG4gICAgICAgIHZpZGVvLm11dGVkID0gdHJ1ZTtcclxuICAgICAgICB2aWRlby5hdXRvcGxheSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlzTG9hZGVkTWV0YURhdGEgPSBmYWxzZTtcclxuICAgICAgICB2aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlzTG9hZGVkTWV0YURhdGEgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldFNyY09iamVjdChtZWRpYVN0cmVhbSwgdmlkZW8pO1xyXG5cclxuICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxhc3RBbmltYXRpb25GcmFtZSA9IG51bGw7XHJcbiAgICB2YXIgc3RhcnRUaW1lLCBlbmRUaW1lLCBsYXN0RnJhbWVUaW1lO1xyXG5cclxuICAgIHZhciBnaWZFbmNvZGVyO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxufVxyXG5cclxuaWYgKHR5cGVvZiBSZWNvcmRSVEMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWNvcmRSVEMuR2lmUmVjb3JkZXIgPSBHaWZSZWNvcmRlcjtcclxufVxuXHJcbi8vIExhc3QgdGltZSB1cGRhdGVkOiAyMDE4LTEyLTIyIDk6MTM6MjkgQU0gVVRDXHJcblxyXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19cclxuLy8gTXVsdGlTdHJlYW1zTWl4ZXIgdjEuMC43XHJcblxyXG4vLyBPcGVuLVNvdXJjZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vTXVsdGlTdHJlYW1zTWl4ZXJcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE11YXogS2hhbiAgICAgLSB3d3cuTXVhektoYW4uY29tXHJcbi8vIE1JVCBMaWNlbnNlICAgLSB3d3cuV2ViUlRDLUV4cGVyaW1lbnQuY29tL2xpY2VuY2VcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIE11bHRpU3RyZWFtc01peGVyKGFycmF5T2ZNZWRpYVN0cmVhbXMpIHtcclxuXHJcbiAgICAvLyByZXF1aXJlczogY2hyb21lOi8vZmxhZ3MvI2VuYWJsZS1leHBlcmltZW50YWwtd2ViLXBsYXRmb3JtLWZlYXR1cmVzXHJcblxyXG4gICAgdmFyIHZpZGVvcyA9IFtdO1xyXG4gICAgdmFyIGlzU3RvcERyYXdpbmdGcmFtZXMgPSBmYWxzZTtcclxuXHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY2FudmFzLnN0eWxlID0gJ29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Oi0xO3RvcDogLTEwMDAwMDAwMDtsZWZ0Oi0xMDAwMDAwMDAwOyBtYXJnaW4tdG9wOi0xMDAwMDAwMDAwO21hcmdpbi1sZWZ0Oi0xMDAwMDAwMDAwOyc7XHJcbiAgICAoZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG4gICAgdGhpcy5kaXNhYmxlTG9ncyA9IGZhbHNlO1xyXG4gICAgdGhpcy5mcmFtZUludGVydmFsID0gMTA7XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IDM2MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMjQwO1xyXG5cclxuICAgIC8vIHVzZSBnYWluIG5vZGUgdG8gcHJldmVudCBlY2hvXHJcbiAgICB0aGlzLnVzZUdhaW5Ob2RlID0gdHJ1ZTtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuICAgIC8vIENyb3NzLUJyb3dzZXItRGVjbGFyYXRpb25zLmpzXHJcblxyXG4gICAgLy8gV2ViQXVkaW8gQVBJIHJlcHJlc2VudGVyXHJcbiAgICB2YXIgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dDtcclxuXHJcbiAgICBpZiAodHlwZW9mIEF1ZGlvQ29udGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdlYmtpdEF1ZGlvQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgLypnbG9iYWwgQXVkaW9Db250ZXh0OnRydWUgKi9cclxuICAgICAgICAgICAgQXVkaW9Db250ZXh0ID0gd2Via2l0QXVkaW9Db250ZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtb3pBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIC8qZ2xvYmFsIEF1ZGlvQ29udGV4dDp0cnVlICovXHJcbiAgICAgICAgICAgIEF1ZGlvQ29udGV4dCA9IG1vekF1ZGlvQ29udGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypqc2hpbnQgLVcwNzkgKi9cclxuICAgIHZhciBVUkwgPSB3aW5kb3cuVVJMO1xyXG5cclxuICAgIGlmICh0eXBlb2YgVVJMID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2Via2l0VVJMICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIFVSTDp0cnVlICovXHJcbiAgICAgICAgVVJMID0gd2Via2l0VVJMO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9PT0gJ3VuZGVmaW5lZCcpIHsgLy8gbWF5YmUgd2luZG93Lm5hdmlnYXRvcj9cclxuICAgICAgICBpZiAodHlwZW9mIG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIE1lZGlhU3RyZWFtID0gd2luZG93Lk1lZGlhU3RyZWFtO1xyXG5cclxuICAgIGlmICh0eXBlb2YgTWVkaWFTdHJlYW0gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3ZWJraXRNZWRpYVN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBNZWRpYVN0cmVhbSA9IHdlYmtpdE1lZGlhU3RyZWFtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qZ2xvYmFsIE1lZGlhU3RyZWFtOnRydWUgKi9cclxuICAgIGlmICh0eXBlb2YgTWVkaWFTdHJlYW0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gb3ZlcnJpZGUgXCJzdG9wXCIgbWV0aG9kIGZvciBhbGwgYnJvd3NlcnNcclxuICAgICAgICBpZiAodHlwZW9mIE1lZGlhU3RyZWFtLnByb3RvdHlwZS5zdG9wID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBNZWRpYVN0cmVhbS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2suc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBTdG9yYWdlID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgU3RvcmFnZS5BdWRpb0NvbnRleHQgPSBBdWRpb0NvbnRleHQ7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3ZWJraXRBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgU3RvcmFnZS5BdWRpb0NvbnRleHQgPSB3ZWJraXRBdWRpb0NvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3JjT2JqZWN0KHN0cmVhbSwgZWxlbWVudCkge1xyXG4gICAgICAgIGlmICgnc3JjT2JqZWN0JyBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJ21velNyY09iamVjdCcgaW4gZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50Lm1velNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGFydERyYXdpbmdGcmFtZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBkcmF3VmlkZW9zVG9DYW52YXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd1ZpZGVvc1RvQ2FudmFzKCkge1xyXG4gICAgICAgIGlmIChpc1N0b3BEcmF3aW5nRnJhbWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB2aWRlb3NMZW5ndGggPSB2aWRlb3MubGVuZ3RoO1xyXG5cclxuICAgICAgICB2YXIgZnVsbGNhbnZhcyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciByZW1haW5pbmcgPSBbXTtcclxuICAgICAgICB2aWRlb3MuZm9yRWFjaChmdW5jdGlvbih2aWRlbykge1xyXG4gICAgICAgICAgICBpZiAoIXZpZGVvLnN0cmVhbSkge1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uc3RyZWFtID0ge307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2aWRlby5zdHJlYW0uZnVsbGNhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgZnVsbGNhbnZhcyA9IHZpZGVvO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluaW5nLnB1c2godmlkZW8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmdWxsY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGZ1bGxjYW52YXMuc3RyZWFtLndpZHRoO1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gZnVsbGNhbnZhcy5zdHJlYW0uaGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVtYWluaW5nLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB2aWRlb3NMZW5ndGggPiAxID8gcmVtYWluaW5nWzBdLndpZHRoICogMiA6IHJlbWFpbmluZ1swXS53aWR0aDtcclxuXHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAxO1xyXG4gICAgICAgICAgICBpZiAodmlkZW9zTGVuZ3RoID09PSAzIHx8IHZpZGVvc0xlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmlkZW9zTGVuZ3RoID09PSA1IHx8IHZpZGVvc0xlbmd0aCA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmlkZW9zTGVuZ3RoID09PSA3IHx8IHZpZGVvc0xlbmd0aCA9PT0gOCkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmlkZW9zTGVuZ3RoID09PSA5IHx8IHZpZGVvc0xlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHJlbWFpbmluZ1swXS5oZWlnaHQgKiBoZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gc2VsZi53aWR0aCB8fCAzNjA7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzZWxmLmhlaWdodCB8fCAyNDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZnVsbGNhbnZhcyAmJiBmdWxsY2FudmFzIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xyXG4gICAgICAgICAgICBkcmF3SW1hZ2UoZnVsbGNhbnZhcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW1haW5pbmcuZm9yRWFjaChmdW5jdGlvbih2aWRlbywgaWR4KSB7XHJcbiAgICAgICAgICAgIGRyYXdJbWFnZSh2aWRlbywgaWR4KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChkcmF3VmlkZW9zVG9DYW52YXMsIHNlbGYuZnJhbWVJbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd0ltYWdlKHZpZGVvLCBpZHgpIHtcclxuICAgICAgICBpZiAoaXNTdG9wRHJhd2luZ0ZyYW1lcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgeCA9IDA7XHJcbiAgICAgICAgdmFyIHkgPSAwO1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHZpZGVvLndpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB2aWRlby5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChpZHggPT09IDEpIHtcclxuICAgICAgICAgICAgeCA9IHZpZGVvLndpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkeCA9PT0gMikge1xyXG4gICAgICAgICAgICB5ID0gdmlkZW8uaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkeCA9PT0gMykge1xyXG4gICAgICAgICAgICB4ID0gdmlkZW8ud2lkdGg7XHJcbiAgICAgICAgICAgIHkgPSB2aWRlby5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWR4ID09PSA0KSB7XHJcbiAgICAgICAgICAgIHkgPSB2aWRlby5oZWlnaHQgKiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkeCA9PT0gNSkge1xyXG4gICAgICAgICAgICB4ID0gdmlkZW8ud2lkdGg7XHJcbiAgICAgICAgICAgIHkgPSB2aWRlby5oZWlnaHQgKiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkeCA9PT0gNikge1xyXG4gICAgICAgICAgICB5ID0gdmlkZW8uaGVpZ2h0ICogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZHggPT09IDcpIHtcclxuICAgICAgICAgICAgeCA9IHZpZGVvLndpZHRoO1xyXG4gICAgICAgICAgICB5ID0gdmlkZW8uaGVpZ2h0ICogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdmlkZW8uc3RyZWFtLmxlZnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHggPSB2aWRlby5zdHJlYW0ubGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdmlkZW8uc3RyZWFtLnRvcCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgeSA9IHZpZGVvLnN0cmVhbS50b3A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHZpZGVvLnN0cmVhbS53aWR0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgd2lkdGggPSB2aWRlby5zdHJlYW0ud2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHZpZGVvLnN0cmVhbS5oZWlnaHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IHZpZGVvLnN0cmVhbS5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdmlkZW8uc3RyZWFtLm9uUmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0cmVhbS5vblJlbmRlcihjb250ZXh0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBpZHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNaXhlZFN0cmVhbSgpIHtcclxuICAgICAgICBpc1N0b3BEcmF3aW5nRnJhbWVzID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG1peGVkVmlkZW9TdHJlYW0gPSBnZXRNaXhlZFZpZGVvU3RyZWFtKCk7XHJcblxyXG4gICAgICAgIHZhciBtaXhlZEF1ZGlvU3RyZWFtID0gZ2V0TWl4ZWRBdWRpb1N0cmVhbSgpO1xyXG4gICAgICAgIGlmIChtaXhlZEF1ZGlvU3RyZWFtKSB7XHJcbiAgICAgICAgICAgIG1peGVkQXVkaW9TdHJlYW0uZ2V0VHJhY2tzKCkuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0LmtpbmQgPT09ICdhdWRpbyc7XHJcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcclxuICAgICAgICAgICAgICAgIG1peGVkVmlkZW9TdHJlYW0uYWRkVHJhY2sodHJhY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmdWxsY2FudmFzO1xyXG4gICAgICAgIGFycmF5T2ZNZWRpYVN0cmVhbXMuZm9yRWFjaChmdW5jdGlvbihzdHJlYW0pIHtcclxuICAgICAgICAgICAgaWYgKHN0cmVhbS5mdWxsY2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICBmdWxsY2FudmFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbWl4ZWRWaWRlb1N0cmVhbTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNaXhlZFZpZGVvU3RyZWFtKCkge1xyXG4gICAgICAgIHJlc2V0VmlkZW9TdHJlYW1zKCk7XHJcblxyXG4gICAgICAgIHZhciBjYXB0dXJlZFN0cmVhbTtcclxuXHJcbiAgICAgICAgaWYgKCdjYXB0dXJlU3RyZWFtJyBpbiBjYW52YXMpIHtcclxuICAgICAgICAgICAgY2FwdHVyZWRTdHJlYW0gPSBjYW52YXMuY2FwdHVyZVN0cmVhbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJ21vekNhcHR1cmVTdHJlYW0nIGluIGNhbnZhcykge1xyXG4gICAgICAgICAgICBjYXB0dXJlZFN0cmVhbSA9IGNhbnZhcy5tb3pDYXB0dXJlU3RyZWFtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghc2VsZi5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVcGdyYWRlIHRvIGxhdGVzdCBDaHJvbWUgb3Igb3RoZXJ3aXNlIGVuYWJsZSB0aGlzIGZsYWc6IGNocm9tZTovL2ZsYWdzLyNlbmFibGUtZXhwZXJpbWVudGFsLXdlYi1wbGF0Zm9ybS1mZWF0dXJlcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHZpZGVvU3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKCk7XHJcblxyXG4gICAgICAgIGNhcHR1cmVkU3RyZWFtLmdldFRyYWNrcygpLmZpbHRlcihmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0LmtpbmQgPT09ICd2aWRlbyc7XHJcbiAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xyXG4gICAgICAgICAgICB2aWRlb1N0cmVhbS5hZGRUcmFjayh0cmFjayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbnZhcy5zdHJlYW0gPSB2aWRlb1N0cmVhbTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZpZGVvU3RyZWFtO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1peGVkQXVkaW9TdHJlYW0oKSB7XHJcbiAgICAgICAgLy8gdmlhOiBAcGVocnNvbnNcclxuICAgICAgICBpZiAoIVN0b3JhZ2UuQXVkaW9Db250ZXh0Q29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgU3RvcmFnZS5BdWRpb0NvbnRleHRDb25zdHJ1Y3RvciA9IG5ldyBTdG9yYWdlLkF1ZGlvQ29udGV4dCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi5hdWRpb0NvbnRleHQgPSBTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yO1xyXG5cclxuICAgICAgICBzZWxmLmF1ZGlvU291cmNlcyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoc2VsZi51c2VHYWluTm9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzZWxmLmdhaW5Ob2RlID0gc2VsZi5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xyXG4gICAgICAgICAgICBzZWxmLmdhaW5Ob2RlLmNvbm5lY3Qoc2VsZi5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICAgICAgICAgICBzZWxmLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwOyAvLyBkb24ndCBoZWFyIHNlbGZcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhdWRpb1RyYWNrc0xlbmd0aCA9IDA7XHJcbiAgICAgICAgYXJyYXlPZk1lZGlhU3RyZWFtcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmVhbSkge1xyXG4gICAgICAgICAgICBpZiAoIXN0cmVhbS5nZXRUcmFja3MoKS5maWx0ZXIoZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0LmtpbmQgPT09ICdhdWRpbyc7XHJcbiAgICAgICAgICAgICAgICB9KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXVkaW9UcmFja3NMZW5ndGgrKztcclxuXHJcbiAgICAgICAgICAgIHZhciBhdWRpb1NvdXJjZSA9IHNlbGYuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi51c2VHYWluTm9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9Tb3VyY2UuY29ubmVjdChzZWxmLmdhaW5Ob2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5hdWRpb1NvdXJjZXMucHVzaChhdWRpb1NvdXJjZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghYXVkaW9UcmFja3NMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi5hdWRpb0Rlc3RpbmF0aW9uID0gc2VsZi5hdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1EZXN0aW5hdGlvbigpO1xyXG4gICAgICAgIHNlbGYuYXVkaW9Tb3VyY2VzLmZvckVhY2goZnVuY3Rpb24oYXVkaW9Tb3VyY2UpIHtcclxuICAgICAgICAgICAgYXVkaW9Tb3VyY2UuY29ubmVjdChzZWxmLmF1ZGlvRGVzdGluYXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzZWxmLmF1ZGlvRGVzdGluYXRpb24uc3RyZWFtO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZpZGVvKHN0cmVhbSkge1xyXG4gICAgICAgIHZhciB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcblxyXG4gICAgICAgIHNldFNyY09iamVjdChzdHJlYW0sIHZpZGVvKTtcclxuXHJcbiAgICAgICAgdmlkZW8ubXV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHZpZGVvLnZvbHVtZSA9IDA7XHJcblxyXG4gICAgICAgIHZpZGVvLndpZHRoID0gc3RyZWFtLndpZHRoIHx8IHNlbGYud2lkdGggfHwgMzYwO1xyXG4gICAgICAgIHZpZGVvLmhlaWdodCA9IHN0cmVhbS5oZWlnaHQgfHwgc2VsZi5oZWlnaHQgfHwgMjQwO1xyXG5cclxuICAgICAgICB2aWRlby5wbGF5KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB2aWRlbztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFwcGVuZFN0cmVhbXMgPSBmdW5jdGlvbihzdHJlYW1zKSB7XHJcbiAgICAgICAgaWYgKCFzdHJlYW1zKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdGaXJzdCBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghKHN0cmVhbXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgc3RyZWFtcyA9IFtzdHJlYW1zXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFycmF5T2ZNZWRpYVN0cmVhbXMuY29uY2F0KHN0cmVhbXMpO1xyXG5cclxuICAgICAgICBzdHJlYW1zLmZvckVhY2goZnVuY3Rpb24oc3RyZWFtKSB7XHJcbiAgICAgICAgICAgIGlmIChzdHJlYW0uZ2V0VHJhY2tzKCkuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5raW5kID09PSAndmlkZW8nO1xyXG4gICAgICAgICAgICAgICAgfSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmlkZW8gPSBnZXRWaWRlbyhzdHJlYW0pO1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uc3RyZWFtID0gc3RyZWFtO1xyXG4gICAgICAgICAgICAgICAgdmlkZW9zLnB1c2godmlkZW8pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RyZWFtLmdldFRyYWNrcygpLmZpbHRlcihmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQua2luZCA9PT0gJ2F1ZGlvJztcclxuICAgICAgICAgICAgICAgIH0pLmxlbmd0aCAmJiBzZWxmLmF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGF1ZGlvU291cmNlID0gc2VsZi5hdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLmNvbm5lY3Qoc2VsZi5hdWRpb0Rlc3RpbmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuYXVkaW9Tb3VyY2VzLnB1c2goYXVkaW9Tb3VyY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVsZWFzZVN0cmVhbXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2aWRlb3MgPSBbXTtcclxuICAgICAgICBpc1N0b3BEcmF3aW5nRnJhbWVzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGYuZ2Fpbk5vZGUpIHtcclxuICAgICAgICAgICAgc2VsZi5nYWluTm9kZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHNlbGYuZ2Fpbk5vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGYuYXVkaW9Tb3VyY2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxmLmF1ZGlvU291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uKHNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgc291cmNlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbGYuYXVkaW9Tb3VyY2VzID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5hdWRpb0Rlc3RpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHNlbGYuYXVkaW9EZXN0aW5hdGlvbi5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHNlbGYuYXVkaW9EZXN0aW5hdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5hdWRpb0NvbnRleHQpIHtcclxuICAgICAgICAgICAgc2VsZi5hdWRpb0NvbnRleHQuY2xvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYuYXVkaW9Db250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKGNhbnZhcy5zdHJlYW0pIHtcclxuICAgICAgICAgICAgY2FudmFzLnN0cmVhbS5zdG9wKCk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5zdHJlYW0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yZXNldFZpZGVvU3RyZWFtcyA9IGZ1bmN0aW9uKHN0cmVhbXMpIHtcclxuICAgICAgICBpZiAoc3RyZWFtcyAmJiAhKHN0cmVhbXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgc3RyZWFtcyA9IFtzdHJlYW1zXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc2V0VmlkZW9TdHJlYW1zKHN0cmVhbXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFZpZGVvU3RyZWFtcyhzdHJlYW1zKSB7XHJcbiAgICAgICAgdmlkZW9zID0gW107XHJcbiAgICAgICAgc3RyZWFtcyA9IHN0cmVhbXMgfHwgYXJyYXlPZk1lZGlhU3RyZWFtcztcclxuXHJcbiAgICAgICAgLy8gdmlhOiBAYWRyaWFuLWJlclxyXG4gICAgICAgIHN0cmVhbXMuZm9yRWFjaChmdW5jdGlvbihzdHJlYW0pIHtcclxuICAgICAgICAgICAgaWYgKCFzdHJlYW0uZ2V0VHJhY2tzKCkuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5raW5kID09PSAndmlkZW8nO1xyXG4gICAgICAgICAgICAgICAgfSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB2aWRlbyA9IGdldFZpZGVvKHN0cmVhbSk7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0cmVhbSA9IHN0cmVhbTtcclxuICAgICAgICAgICAgdmlkZW9zLnB1c2godmlkZW8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciBkZWJ1Z2dpbmdcclxuICAgIHRoaXMubmFtZSA9ICdNdWx0aVN0cmVhbXNNaXhlcic7XHJcbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRNaXhlZFN0cmVhbSA9IGdldE1peGVkU3RyZWFtO1xyXG5cclxufVxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX19cclxuLy8gTXVsdGlTdHJlYW1SZWNvcmRlci5qc1xyXG5cclxuLypcclxuICogVmlkZW8gY29uZmVyZW5jZSByZWNvcmRpbmcsIHVzaW5nIGNhcHR1cmVTdHJlYW0gQVBJIGFsb25nIHdpdGggV2ViQXVkaW8gYW5kIENhbnZhczJEIEFQSS5cclxuICovXHJcblxyXG4vKipcclxuICogTXVsdGlTdHJlYW1SZWNvcmRlciBjYW4gcmVjb3JkIG11bHRpcGxlIHZpZGVvcyBpbiBzaW5nbGUgY29udGFpbmVyLlxyXG4gKiBAc3VtbWFyeSBNdWx0aS12aWRlb3MgcmVjb3JkZXIuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAdHlwZWRlZiBNdWx0aVN0cmVhbVJlY29yZGVyXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgb3B0aW9ucyA9IHtcclxuICogICAgIG1pbWVUeXBlOiAndmlkZW8vd2VibSdcclxuICogfVxyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgTXVsdGlTdHJlYW1SZWNvcmRlcihBcnJheU9mTWVkaWFTdHJlYW1zLCBvcHRpb25zKTtcclxuICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oYmxvYikge1xyXG4gKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICpcclxuICogICAgIC8vIG9yXHJcbiAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmJsb2I7XHJcbiAqIH0pO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW1zfSBtZWRpYVN0cmVhbXMgLSBBcnJheSBvZiBNZWRpYVN0cmVhbXMuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7ZGlzYWJsZUxvZ3M6dHJ1ZSwgZnJhbWVJbnRlcnZhbDogMSwgbWltZVR5cGU6IFwidmlkZW8vd2VibVwifVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIE11bHRpU3RyZWFtUmVjb3JkZXIoYXJyYXlPZk1lZGlhU3RyZWFtcywgb3B0aW9ucykge1xyXG4gICAgYXJyYXlPZk1lZGlhU3RyZWFtcyA9IGFycmF5T2ZNZWRpYVN0cmVhbXMgfHwgW107XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdmFyIG1peGVyO1xyXG4gICAgdmFyIG1lZGlhUmVjb3JkZXI7XHJcblxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge1xyXG4gICAgICAgIG1pbWVUeXBlOiAndmlkZW8vd2VibScsXHJcbiAgICAgICAgdmlkZW86IHtcclxuICAgICAgICAgICAgd2lkdGg6IDM2MCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNDBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghb3B0aW9ucy5mcmFtZUludGVydmFsKSB7XHJcbiAgICAgICAgb3B0aW9ucy5mcmFtZUludGVydmFsID0gMTA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLnZpZGVvKSB7XHJcbiAgICAgICAgb3B0aW9ucy52aWRlbyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3B0aW9ucy52aWRlby53aWR0aCkge1xyXG4gICAgICAgIG9wdGlvbnMudmlkZW8ud2lkdGggPSAzNjA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLnZpZGVvLmhlaWdodCkge1xyXG4gICAgICAgIG9wdGlvbnMudmlkZW8uaGVpZ2h0ID0gMjQwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyBhbGwgTWVkaWFTdHJlYW1zLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE11bHRpU3RyZWFtUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZWNvcmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBnaXRodWIvbXVhei1raGFuL011bHRpU3RyZWFtc01peGVyXHJcbiAgICAgICAgbWl4ZXIgPSBuZXcgTXVsdGlTdHJlYW1zTWl4ZXIoYXJyYXlPZk1lZGlhU3RyZWFtcyk7XHJcblxyXG4gICAgICAgIGlmIChnZXRBbGxWaWRlb1RyYWNrcygpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBtaXhlci5mcmFtZUludGVydmFsID0gb3B0aW9ucy5mcmFtZUludGVydmFsIHx8IDEwO1xyXG4gICAgICAgICAgICBtaXhlci53aWR0aCA9IG9wdGlvbnMudmlkZW8ud2lkdGggfHwgMzYwO1xyXG4gICAgICAgICAgICBtaXhlci5oZWlnaHQgPSBvcHRpb25zLnZpZGVvLmhlaWdodCB8fCAyNDA7XHJcbiAgICAgICAgICAgIG1peGVyLnN0YXJ0RHJhd2luZ0ZyYW1lcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMucHJldmlld1N0cmVhbSAmJiB0eXBlb2Ygb3B0aW9ucy5wcmV2aWV3U3RyZWFtID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHJldmlld1N0cmVhbShtaXhlci5nZXRNaXhlZFN0cmVhbSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlY29yZCB1c2luZyBNZWRpYVJlY29yZGVyIEFQSVxyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFTdHJlYW1SZWNvcmRlcihtaXhlci5nZXRNaXhlZFN0cmVhbSgpLCBvcHRpb25zKTtcclxuICAgICAgICBtZWRpYVJlY29yZGVyLnJlY29yZCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxWaWRlb1RyYWNrcygpIHtcclxuICAgICAgICB2YXIgdHJhY2tzID0gW107XHJcbiAgICAgICAgYXJyYXlPZk1lZGlhU3RyZWFtcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmVhbSkge1xyXG4gICAgICAgICAgICBnZXRUcmFja3Moc3RyZWFtLCAndmlkZW8nKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFja3MucHVzaCh0cmFjayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cmFja3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcgTWVkaWFTdHJlYW0uXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uLCB0aGF0IGlzIHVzZWQgdG8gcGFzcyByZWNvcmRlZCBibG9iIGJhY2sgdG8gdGhlIGNhbGxlZS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNdWx0aVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZWRpYVJlY29yZGVyLnN0b3AoZnVuY3Rpb24oYmxvYikge1xyXG4gICAgICAgICAgICBzZWxmLmJsb2IgPSBibG9iO1xyXG5cclxuICAgICAgICAgICAgY2FsbGJhY2soYmxvYik7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcGF1c2VzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNdWx0aVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucGF1c2UoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTXVsdGlTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIucmVzdW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlc2V0cyBjdXJyZW50bHkgcmVjb3JkZWQgZGF0YS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNdWx0aVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuY2xlYXJSZWNvcmRlZERhdGEoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5jbGVhclJlY29yZGVkRGF0YSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIuY2xlYXJSZWNvcmRlZERhdGEoKTtcclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWl4ZXIpIHtcclxuICAgICAgICAgICAgbWl4ZXIucmVsZWFzZVN0cmVhbXMoKTtcclxuICAgICAgICAgICAgbWl4ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgZXh0cmEgbWVkaWEtc3RyZWFtcyB0byBleGlzdGluZyByZWNvcmRpbmdzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE11bHRpU3RyZWFtUmVjb3JkZXJcclxuICAgICAqIEBwYXJhbSB7TWVkaWFTdHJlYW1zfSBtZWRpYVN0cmVhbXMgLSBBcnJheSBvZiBNZWRpYVN0cmVhbXNcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5hZGRTdHJlYW1zKFtuZXdBdWRpb1N0cmVhbSwgbmV3VmlkZW9TdHJlYW1dKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5hZGRTdHJlYW1zID0gZnVuY3Rpb24oc3RyZWFtcykge1xyXG4gICAgICAgIGlmICghc3RyZWFtcykge1xyXG4gICAgICAgICAgICB0aHJvdyAnRmlyc3QgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIShzdHJlYW1zIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHN0cmVhbXMgPSBbc3RyZWFtc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnJheU9mTWVkaWFTdHJlYW1zLmNvbmNhdChzdHJlYW1zKTtcclxuXHJcbiAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyIHx8ICFtaXhlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtaXhlci5hcHBlbmRTdHJlYW1zKHN0cmVhbXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHZpZGVvcyBkdXJpbmcgbGl2ZSByZWNvcmRpbmcuIFJlcGxhY2Ugb2xkIHZpZGVvcyBlLmcuIHJlcGxhY2UgY2FtZXJhcyB3aXRoIGZ1bGwtc2NyZWVuLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE11bHRpU3RyZWFtUmVjb3JkZXJcclxuICAgICAqIEBwYXJhbSB7TWVkaWFTdHJlYW1zfSBtZWRpYVN0cmVhbXMgLSBBcnJheSBvZiBNZWRpYVN0cmVhbXNcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZXNldFZpZGVvU3RyZWFtcyhbbmV3VmlkZW8xLCBuZXdWaWRlbzJdKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXNldFZpZGVvU3RyZWFtcyA9IGZ1bmN0aW9uKHN0cmVhbXMpIHtcclxuICAgICAgICBpZiAoIW1peGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdHJlYW1zICYmICEoc3RyZWFtcyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICBzdHJlYW1zID0gW3N0cmVhbXNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWl4ZXIucmVzZXRWaWRlb1N0cmVhbXMoc3RyZWFtcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGZvciBkZWJ1Z2dpbmdcclxuICAgIHRoaXMubmFtZSA9ICdNdWx0aVN0cmVhbVJlY29yZGVyJztcclxuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBSZWNvcmRSVEMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWNvcmRSVEMuTXVsdGlTdHJlYW1SZWNvcmRlciA9IE11bHRpU3RyZWFtUmVjb3JkZXI7XHJcbn1cblxyXG4vLyBfX19fX19fX19fX19fX19fX19fX19cclxuLy8gUmVjb3JkUlRDLnByb21pc2VzLmpzXHJcblxyXG4vKipcclxuICogUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyIGFkZHMgcHJvbWlzZXMgc3VwcG9ydCBpbiB7QGxpbmsgUmVjb3JkUlRDfS4gVHJ5IGEge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDL2Jsb2IvbWFzdGVyL3NpbXBsZS1kZW1vcy9SZWNvcmRSVENQcm9taXNlc0hhbmRsZXIuaHRtbHxkZW1vIGhlcmV9XHJcbiAqIEBzdW1tYXJ5IFByb21pc2VzIGZvciB7QGxpbmsgUmVjb3JkUlRDfVxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyKG1lZGlhU3RyZWFtLCBvcHRpb25zKTtcclxuICogcmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKVxyXG4gKiAgICAgICAgIC50aGVuKHN1Y2Nlc3NDQilcclxuICogICAgICAgICAuY2F0Y2goZXJyb3JDQik7XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBTaW5nbGUgbWVkaWEtc3RyZWFtIG9iamVjdCwgYXJyYXkgb2YgbWVkaWEtc3RyZWFtcywgaHRtbC1jYW52YXMtZWxlbWVudCwgZXRjLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge3R5cGU6XCJ2aWRlb1wiLCByZWNvcmRlclR5cGU6IE1lZGlhU3RyZWFtUmVjb3JkZXIsIGRpc2FibGVMb2dzOiB0cnVlLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHM6IDEsIGJ1ZmZlclNpemU6IDAsIHNhbXBsZVJhdGU6IDAsIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50LCBldGMufVxyXG4gKiBAdGhyb3dzIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgXCJuZXdcIiBrZXl3b3JkIGlzIG5vdCB1c2VkIHRvIGluaXRpYXRlIFwiUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyXCIuIEFsc28gdGhyb3dzIGVycm9yIGlmIGZpcnN0IGFyZ3VtZW50IFwiTWVkaWFTdHJlYW1cIiBpcyBtaXNzaW5nLlxyXG4gKiBAcmVxdWlyZXMge0BsaW5rIFJlY29yZFJUQ31cclxuICovXHJcblxyXG5mdW5jdGlvbiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXIobWVkaWFTdHJlYW0sIG9wdGlvbnMpIHtcclxuICAgIGlmICghdGhpcykge1xyXG4gICAgICAgIHRocm93ICdVc2UgXCJuZXcgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyKClcIic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBtZWRpYVN0cmVhbSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aHJvdyAnRmlyc3QgYXJndW1lbnQgXCJNZWRpYVN0cmVhbVwiIGlzIHJlcXVpcmVkLic7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3BlcnR5IHtCbG9ifSBibG9iIC0gQWNjZXNzL3JlYWNoIHRoZSBuYXRpdmUge0BsaW5rIFJlY29yZFJUQ30gb2JqZWN0LlxyXG4gICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1Byb21pc2VzSGFuZGxlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHZhciBpbnRlcm5hbCA9IHJlY29yZGVyLnJlY29yZFJUQy5nZXRJbnRlcm5hbFJlY29yZGVyKCk7XHJcbiAgICAgKiBhbGVydChpbnRlcm5hbCBpbnN0YW5jZW9mIE1lZGlhU3RyZWFtUmVjb3JkZXIpO1xyXG4gICAgICovXHJcbiAgICBzZWxmLnJlY29yZFJUQyA9IG5ldyBSZWNvcmRSVEMobWVkaWFTdHJlYW0sIG9wdGlvbnMpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyBNZWRpYVN0cmVhbS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdGFydFJlY29yZGluZygpXHJcbiAgICAgKiAgICAgICAgIC50aGVuKHN1Y2Nlc3NDQilcclxuICAgICAqICAgICAgICAgLmNhdGNoKGVycm9yQ0IpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0YXJ0UmVjb3JkaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZWNvcmRSVEMuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcHMgdGhlIHJlY29yZGluZy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKCkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmdldEJsb2IoKTtcclxuICAgICAqIH0pLmNhdGNoKGVycm9yQ0IpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3BSZWNvcmRpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlY29yZFJUQy5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYmxvYiA9IHNlbGYucmVjb3JkUlRDLmdldEJsb2IoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLmJsb2IgfHwgIXNlbGYuYmxvYi5zaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgnRW1wdHkgYmxvYi4nLCBzZWxmLmJsb2IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyBkYXRhLXVybCBmb3IgdGhlIHJlY29yZGVkIGJsb2IuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZygpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgKiAgICAgcmVjb3JkZXIuZ2V0RGF0YVVSTCgpLnRoZW4oZnVuY3Rpb24oZGF0YVVSTCkge1xyXG4gICAgICogICAgICAgICB3aW5kb3cub3BlbihkYXRhVVJMKTtcclxuICAgICAqICAgICB9KS5jYXRjaChlcnJvckNCKTs7XHJcbiAgICAgKiB9KS5jYXRjaChlcnJvckNCKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXREYXRhVVJMID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlY29yZFJUQy5nZXREYXRhVVJMKGZ1bmN0aW9uKGRhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGFVUkwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIHJlY29yZGVkIGJsb2IuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZygpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgKiAgICAgcmVjb3JkZXIuZ2V0QmxvYigpLnRoZW4oZnVuY3Rpb24oYmxvYikge30pXHJcbiAgICAgKiB9KS5jYXRjaChlcnJvckNCKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRCbG9iID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzZWxmLnJlY29yZFJUQy5nZXRCbG9iKCkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBSZWNvcmRlZCBkYXRhIGFzIFwiQmxvYlwiIG9iamVjdC5cclxuICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKCkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmdldEJsb2IoKTtcclxuICAgICAqIH0pLmNhdGNoKGVycm9yQ0IpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmJsb2IgPSBudWxsO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5SZWNvcmRSVENQcm9taXNlc0hhbmRsZXIgPSBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXI7XHJcbn1cblxyXG4vLyBfX19fX19fX19fX19fX19fX19fX19fXHJcbi8vIFdlYkFzc2VtYmx5UmVjb3JkZXIuanNcclxuXHJcbi8qKlxyXG4gKiBXZWJBc3NlbWJseVJlY29yZGVyIGxldHMgeW91IGNyZWF0ZSB3ZWJtIHZpZGVvcyBpbiBKYXZhU2NyaXB0IHZpYSBXZWJBc3NlbWJseS4gVGhlIGxpYnJhcnkgY29uc3VtZXMgcmF3IFJHQkEzMiBidWZmZXJzICg0IGJ5dGVzIHBlciBwaXhlbCkgYW5kIHR1cm5zIHRoZW0gaW50byBhIHdlYm0gdmlkZW8gd2l0aCB0aGUgZ2l2ZW4gZnJhbWVyYXRlIGFuZCBxdWFsaXR5LiBUaGlzIG1ha2VzIGl0IGNvbXBhdGlibGUgb3V0LW9mLXRoZS1ib3ggd2l0aCBJbWFnZURhdGEgZnJvbSBhIENBTlZBUy4gV2l0aCByZWFsdGltZSBtb2RlIHlvdSBjYW4gYWxzbyB1c2Ugd2VibS13YXNtIGZvciBzdHJlYW1pbmcgd2VibSB2aWRlb3MuXHJcbiAqIEBzdW1tYXJ5IFZpZGVvIHJlY29yZGluZyBmZWF0dXJlIGluIENocm9tZSwgRmlyZWZveCBhbmQgbWF5YmUgRWRnZS5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIFdlYkFzc2VtYmx5UmVjb3JkZXJcclxuICogQGNsYXNzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciByZWNvcmRlciA9IG5ldyBXZWJBc3NlbWJseVJlY29yZGVyKG1lZGlhU3RyZWFtKTtcclxuICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oYmxvYikge1xyXG4gKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICogfSk7XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBNZWRpYVN0cmVhbSBvYmplY3QgZmV0Y2hlZCB1c2luZyBnZXRVc2VyTWVkaWEgQVBJIG9yIGdlbmVyYXRlZCB1c2luZyBjYXB0dXJlU3RyZWFtVW50aWxFbmRlZCBvciBXZWJBdWRpbyBBUEkuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7d2ViQXNzZW1ibHlQYXRoOid3ZWJtLXdhc20ud2FzbScsd29ya2VyUGF0aDogJ3dlYm0td29ya2VyLmpzJywgZnJhbWVSYXRlOiAzMCwgd2lkdGg6IDE5MjAsIGhlaWdodDogMTA4MCwgYml0cmF0ZTogMTAyNH1cclxuICovXHJcbmZ1bmN0aW9uIFdlYkFzc2VtYmx5UmVjb3JkZXIoc3RyZWFtLCBjb25maWcpIHtcclxuICAgIC8vIGJhc2VkIG9uOiBnaXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvd2VibS13YXNtXHJcblxyXG4gICAgaWYgKHR5cGVvZiBSZWFkYWJsZVN0cmVhbSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFdyaXRhYmxlU3RyZWFtID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIGJlY2F1c2UgaXQgZml4ZXMgcmVhZGFibGUvd3JpdGFibGUgc3RyZWFtcyBpc3N1ZXNcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGb2xsb3dpbmcgcG9seWZpbGwgaXMgc3Ryb25nbHkgcmVjb21tZW5kZWQ6IGh0dHBzOi8vdW5wa2cuY29tL0BtYXR0aWFzYnVlbGVucy93ZWItc3RyZWFtcy1wb2x5ZmlsbC9kaXN0L3BvbHlmaWxsLm1pbi5qcycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcbiAgICBjb25maWcud2lkdGggPSBjb25maWcud2lkdGggfHwgNjQwO1xyXG4gICAgY29uZmlnLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQgfHwgNDgwO1xyXG4gICAgY29uZmlnLmZyYW1lUmF0ZSA9IGNvbmZpZy5mcmFtZVJhdGUgfHwgMzA7XHJcbiAgICBjb25maWcuYml0cmF0ZSA9IGNvbmZpZy5iaXRyYXRlIHx8IDEyMDA7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQnVmZmVyVVJMKGJ1ZmZlciwgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtidWZmZXJdLCB7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUgfHwgJydcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FtZXJhU3RyZWFtKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVhZGFibGVTdHJlYW0oe1xyXG4gICAgICAgICAgICBzdGFydDogZnVuY3Rpb24oY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLm9ucGxheWluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN2cy53aWR0aCA9IGNvbmZpZy53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBjdnMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3R4ID0gY3ZzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyYW1lVGltZW91dCA9IDEwMDAgLyBjb25maWcuZnJhbWVSYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gZigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh2aWRlbywgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGYsIGZyYW1lVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnJhbWVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd29ya2VyO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0UmVjb3JkaW5nKHN0cmVhbSwgYnVmZmVyKSB7XHJcbiAgICAgICAgaWYgKCFjb25maWcud29ya2VyUGF0aCAmJiAhYnVmZmVyKSB7XHJcbiAgICAgICAgICAgIC8vIGlzIGl0IHNhZmUgdG8gdXNlIEBsYXRlc3QgP1xyXG4gICAgICAgICAgICBmZXRjaChcclxuICAgICAgICAgICAgICAgICdodHRwczovL3VucGtnLmNvbS93ZWJtLXdhc21AbGF0ZXN0L2Rpc3Qvd2VibS13b3JrZXIuanMnXHJcbiAgICAgICAgICAgICkudGhlbihmdW5jdGlvbihyKSB7XHJcbiAgICAgICAgICAgICAgICByLmFycmF5QnVmZmVyKCkudGhlbihmdW5jdGlvbihidWZmZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFJlY29yZGluZyhzdHJlYW0sIGJ1ZmZlcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLndvcmtlclBhdGggJiYgYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQvamF2YXNjcmlwdCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbmZpZy53b3JrZXJQYXRoID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLndvcmtlclBhdGgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignd29ya2VyUGF0aCBwYXJhbWV0ZXIgaXMgbWlzc2luZy4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdvcmtlciA9IG5ldyBXb3JrZXIoY29uZmlnLndvcmtlclBhdGgpO1xyXG5cclxuICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoY29uZmlnLndlYkFzc2VtYmx5UGF0aCB8fCAnaHR0cHM6Ly91bnBrZy5jb20vd2VibS13YXNtQGxhdGVzdC9kaXN0L3dlYm0td2FzbS53YXNtJyk7XHJcbiAgICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSA9PT0gJ1JFQURZJykge1xyXG4gICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBiaXRyYXRlOiBjb25maWcuYml0cmF0ZSB8fCAxMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWViYXNlRGVuOiBjb25maWcuZnJhbWVSYXRlIHx8IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWx0aW1lOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYW1lcmFTdHJlYW0oKS5waXBlVG8obmV3IFdyaXRhYmxlU3RyZWFtKHtcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZTogZnVuY3Rpb24oaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3b3JrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGltYWdlLmRhdGEuYnVmZmVyLCBbaW1hZ2UuZGF0YS5idWZmZXJdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoISFldmVudC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlPZkJ1ZmZlcnMucHVzaChldmVudC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyB2aWRlby5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBXZWJBc3NlbWJseVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVjb3JkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYXJyYXlPZkJ1ZmZlcnMgPSBbXTtcclxuICAgICAgICBpc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmxvYiA9IG51bGw7XHJcbiAgICAgICAgc3RhcnRSZWNvcmRpbmcoc3RyZWFtKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcuaW5pdENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5pbml0Q2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpc1BhdXNlZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHBhdXNlcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2ViQXNzZW1ibHlSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2ViQXNzZW1ibHlSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHRlcm1pbmF0ZSgpIHtcclxuICAgICAgICBpZiAoIXdvcmtlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UobnVsbCk7XHJcbiAgICAgICAgd29ya2VyLnRlcm1pbmF0ZSgpO1xyXG4gICAgICAgIHdvcmtlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFycmF5T2ZCdWZmZXJzID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcgdmlkZW8uXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uLCB0aGF0IGlzIHVzZWQgdG8gcGFzcyByZWNvcmRlZCBibG9iIGJhY2sgdG8gdGhlIGNhbGxlZS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBXZWJBc3NlbWJseVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIHRlcm1pbmF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJsb2IgPSBuZXcgQmxvYihhcnJheU9mQnVmZmVycywge1xyXG4gICAgICAgICAgICB0eXBlOiAndmlkZW8vd2VibSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2sodGhpcy5ibG9iKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gZm9yIGRlYnVnZ2luZ1xyXG4gICAgdGhpcy5uYW1lID0gJ1dlYkFzc2VtYmx5UmVjb3JkZXInO1xyXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzZXRzIGN1cnJlbnRseSByZWNvcmRlZCBkYXRhLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFdlYkFzc2VtYmx5UmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmNsZWFyUmVjb3JkZWREYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYXJyYXlPZkJ1ZmZlcnMgPSBbXTtcclxuICAgICAgICBpc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmxvYiA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIHRvZG86IGlmIHJlY29yZGluZy1PTiB0aGVuIFNUT1AgaXQgZmlyc3RcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBUaGUgcmVjb3JkZWQgYmxvYiBvYmplY3QuXHJcbiAgICAgKiBAbWVtYmVyb2YgV2ViQXNzZW1ibHlSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oKXtcclxuICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmJsb2I7XHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5ibG9iID0gbnVsbDtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBSZWNvcmRSVEMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWNvcmRSVEMuV2ViQXNzZW1ibHlSZWNvcmRlciA9IFdlYkFzc2VtYmx5UmVjb3JkZXI7XHJcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlY29yZHJ0Yy9SZWNvcmRSVEMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpY2hlY2sgfSBmcm9tIFwiLi9pY2hlY2suanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2VsZWN0MiB9IGZyb20gXCIuL3NlbGVjdDIuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW5wdXRtYXNrIH0gZnJvbSBcIi4vaW5wdXRtYXNrLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGpxdWVyeWJhcnJhdGluZyB9IGZyb20gXCIuL2pxdWVyeS1iYXItcmF0aW5nLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGpxdWVyeXVpZGF0ZXBpY2tlciB9IGZyb20gXCIuL2pxdWVyeS11aS1kYXRlcGlja2VyLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vdWlzbGlkZXIgfSBmcm9tIFwiLi9ub3Vpc2xpZGVyLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNlbGVjdDJ0YWdib3ggfSBmcm9tIFwiLi9zZWxlY3QyLXRhZ2JveC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzaWduYXR1cmVwYWQgfSBmcm9tIFwiLi9zaWduYXR1cmVfcGFkLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNvcnRhYmxlanMgfSBmcm9tIFwiLi9zb3J0YWJsZWpzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNrZWRpdG9yIH0gZnJvbSBcIi4vY2stZWRpdG9yLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGF1dG9jb21wbGV0ZSB9IGZyb20gXCIuL2Vhc3ktYXV0b2NvbXBsZXRlLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZXR0eWNoZWNrYm94IH0gZnJvbSBcIi4vcHJldHR5LWNoZWNrYm94LmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvb3RzdHJhcHNsaWRlciB9IGZyb20gXCIuL2Jvb3RzdHJhcC1zbGlkZXIuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWljcm9waG9uZSB9IGZyb20gXCIuL21pY3JvcGhvbmUuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZW1vdGlvbnNyYXRpbmdzIH0gZnJvbSBcIi4vZW1vdGlvbnNyYXRpbmdzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvb3RzdHJhcGRhdGVwaWNrZXIgfSBmcm9tIFwiLi9ib290c3RyYXBkYXRlcGlja2VyLmpzXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdXJ2ZXlqcy13aWRnZXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBpbml0KFN1cnZleSwgJCkge1xuICAkID0gJCB8fCB3aW5kb3cuJDtcblxuICB2YXIgd2lkZ2V0ID0ge1xuICAgIG5hbWU6IFwiZW1vdGlvbnNyYXRpbmdzXCIsXG4gICAgdGl0bGU6IFwiRW1vdGlvbnMgUmF0aW5nc1wiLFxuICAgIGljb25OYW1lOiBcImljb24tZW1vdGlvbnNyYXRpbmdzXCIsXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uZW1vdGlvbnNSYXRpbmc7XG4gICAgfSxcbiAgICBkZWZhdWx0SlNPTjoge1xuICAgICAgY2hvaWNlczogWzEsIDIsIDMsIDQsIDVdXG4gICAgfSxcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiZW1vdGlvbnNyYXRpbmdzXCI7XG4gICAgfSxcbiAgICBpc0RlZmF1bHRSZW5kZXI6IGZhbHNlLFxuICAgIGh0bWxUZW1wbGF0ZTogXCI8ZGl2PjwvZGl2PlwiLFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFxuICAgICAgICBcImVtb3Rpb25zcmF0aW5nc1wiLFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJoYXNPdGhlclwiLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwib3RoZXJUZXh0XCIsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJvcHRpb25zQ2FwdGlvblwiLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwib3RoZXJFcnJvclRleHRcIixcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInN0b3JlT3RoZXJzQXNDb21tZW50XCIsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJyZW5kZXJBc1wiLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwiZHJvcGRvd25cIlxuICAgICAgKTtcbiAgICB9LFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBlbW90aW9uc0FycmF5ID0gW1wiYW5ncnlcIiwgXCJkaXNhcHBvaW50ZWRcIiwgXCJtZWhcIiwgXCJoYXBweVwiLCBcImluTG92ZVwiXTtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBlbW90aW9uU2l6ZTogMzAsXG4gICAgICAgIGJnRW1vdGlvbjogXCJoYXBweVwiLFxuICAgICAgICBlbW90aW9uczogZW1vdGlvbnNBcnJheSxcbiAgICAgICAgY29sb3I6IFwiI0ZGMDA2NlwiLFxuICAgICAgICBvblVwZGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaW5pdFdpZGdldCgpO1xuXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IGluaXRXaWRnZXQ7XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IGluaXRXaWRnZXQ7XG5cbiAgICAgIGZ1bmN0aW9uIGluaXRXaWRnZXQoKSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IFwiPGRpdj48L2Rpdj5cIjtcbiAgICAgICAgJChlbCkub2ZmKCk7XG4gICAgICAgIG9wdGlvbnMuaW5pdGlhbFJhdGluZyA9IHF1ZXN0aW9uLnZhbHVlIHx8IDA7XG4gICAgICAgIG9wdGlvbnMuZGlzYWJsZWQgPSBxdWVzdGlvbi5pc1JlYWRPbmx5O1xuICAgICAgICAkKGVsKVxuICAgICAgICAgIC5maW5kKFwiZGl2XCIpXG4gICAgICAgICAgLmVtb3Rpb25zUmF0aW5nKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgZWwuaW5uZXJIVE1MID0gbnVsbDtcbiAgICAgICQoZWwpLm9mZigpO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5LCB3aW5kb3cuJCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbW90aW9uc3JhdGluZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XG4gICAgLy8gJCA9ICQgfHwgd2luZG93LiQ7XG4gICAgIHZhciB3aWRnZXQgPSB7XG4gICAgICAgICBuYW1lOiBcImJvb3RzdHJhcGRhdGVwaWNrZXJcIixcbiAgICAgICAgIHRpdGxlOiBcIkRhdGUgcGlja2VyXCIsXG4gICAgICAgICBpY29uTmFtZTogXCJpY29uLWRhdGVwaWNrZXJcIixcbiAgICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgcmV0dXJuICEhJC5mbi5kYXRlcGlja2VyO1xuICAgICAgICAgfSxcbiAgICAgICAgIGlzRml0OiBmdW5jdGlvbiAocXVlc3Rpb24pIHtcbiAgICAgICAgICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImJvb3RzdHJhcGRhdGVwaWNrZXJcIjtcbiAgICAgICAgIH0sXG4gICAgICAgICBodG1sVGVtcGxhdGU6XG4gICAgICAgICBcIjxpbnB1dCBjbGFzcz0nZm9ybS1jb250cm9sIHdpZGdldC1kYXRlcGlja2VyJyB0eXBlPSd0ZXh0JyBzdHlsZT0nd2lkdGg6IDEwMCU7Jz5cIixcbiAgICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24gKGFjdGl2YXRlZEJ5KSB7XG4gICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXG4gICAgICAgICAgICAgICAgIFwiYm9vdHN0cmFwZGF0ZXBpY2tlclwiLFxuICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiaW5wdXRUeXBlXCIsIHZpc2libGU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiaW5wdXRGb3JtYXRcIiwgdmlzaWJsZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJpbnB1dE1hc2tcIiwgdmlzaWJsZTogZmFsc2UgfVxuICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICBcInRleHRcIlxuICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJib290c3RyYXBkYXRlcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgbmFtZTogXCJkYXRlRm9ybWF0XCJcbiAgICAgICAgICAgICB9KTtcbiAgICAgICAgIH0sXG4gICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcIi53aWRnZXQtZGF0ZXBpY2tlclwiKVxuICAgICAgICAgICAgICAgICA/ICQoZWwpXG4gICAgICAgICAgICAgICAgIDogJChlbCkuZmluZChcIi53aWRnZXQtZGF0ZXBpY2tlclwiKTtcbiBcbiAgICAgICAgICAgICB2YXIgcGlja2VyV2lkZ2V0ID0gJChcIi53aWRnZXQtZGF0ZXBpY2tlclwiKS5kYXRlcGlja2VyKHtcbiAgICAgICAgICAgICAgIGVuYWJsZU9uUmVhZG9ubHk6IGZhbHNlXG4gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgLm9uKFwiY2hhbmdlRGF0ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBtb21lbnQoZS5kYXRlKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpO1xuICAgICAgICAgICAgICAgICAgICAgLy8gYGVgIGhlcmUgY29udGFpbnMgdGhlIGV4dHJhIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgIH0pO1xuIFxuICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAkKFwiLndpZGdldC1kYXRlcGlja2VyXCIpLmRhdGVwaWNrZXIoJ3VwZGF0ZScsIG1vbWVudChxdWVzdGlvbi52YWx1ZSwgXCJERC9NTS9ZWVlZXCIpLnRvRGF0ZSgpKTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgaWYocXVlc3Rpb24uaXNSZWFkT25seSkge1xuICAgICAgICAgICAgICAgICAkZWwucHJvcCgncmVhZG9ubHknLCB0cnVlKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAkZWwucmVtb3ZlQXR0cigncmVhZG9ubHknKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgIH0sXG4gICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcIi53aWRnZXQtZGF0ZXBpY2tlclwiKVxuICAgICAgICAgICAgICAgICA/ICQoZWwpXG4gICAgICAgICAgICAgICAgIDogJChlbCkuZmluZChcIi53aWRnZXQtZGF0ZXBpY2tlclwiKTtcbiAgICAgICAgICAgICAkZWwuZGF0ZXBpY2tlcihcImRlc3Ryb3lcIik7XG4gICAgICAgICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgICB9XG4gICAgIH07XG4gXG4gICAgIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcbiB9XG4gXG4gaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpbml0KFN1cnZleSwgd2luZG93LiQpO1xuIH1cbiBcbiBleHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jvb3RzdHJhcGRhdGVwaWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=