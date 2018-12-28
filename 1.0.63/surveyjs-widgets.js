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
    afterRender: function(question, el) {
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
            theme: "classic",
            disabled: question.isReadOnly,
            data: question.visibleChoices.map(function(choice) {
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

      question.readOnlyChangedCallback = function() {
        $el.prop("disabled", question.isReadOnly);
      };

      question.registerFunctionOnPropertyValueChanged(
        "visibleChoices",
        function() {
          updateChoices();
        }
      );
      updateChoices();
      $el.on("select2:select", function(e) {
        question.value = e.target.value;
      });
      $el.on("select2:unselecting", function(e) {
        question.value = null;
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
      question.readOnlyChangedCallback = null;
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
        autoUnmask: rootWidget.autoUnmask
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
      var config = question.config || {};
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
    },
    fixStyles: function(el) {
      el.parentElement.querySelector(".select2-search__field").style.border =
        "none";
    },
    afterRender: function(question, el) {
      var self = this;
      var settings = question.select2Config;
      var $el = $(el).is("select") ? $(el) : $(el).find("select");
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

      question.readOnlyChangedCallback = function() {
        $el.prop("disabled", question.isReadOnly);
      };
      question.registerFunctionOnPropertyValueChanged(
        "visibleChoices",
        function() {
          updateChoices();
        }
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
      $(el)
        .find("select")
        .off("select2:select")
        .select2("destroy");
      question.readOnlyChangedCallback = null;
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
      var signaturePad = new __WEBPACK_IMPORTED_MODULE_0_signature_pad___default.a(canvas);
      if (question.isReadOnly) {
        signaturePad.off();
      }

      question.readOnlyChangedCallback = function() {
        if (question.isReadOnly) {
          signaturePad.off();
          var clearBtn = document.querySelector(".sjs_sp_clear");
          clearBtn && (clearBtn.disabled = true);
        } else {
          signaturePad.on();
          var clearBtn = document.querySelector(".sjs_sp_clear");
          clearBtn && (clearBtn.disabled = false);
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
      question.signaturePad = signaturePad;
      var propertyChangedHandler = function(sender, options) {
        if (options.name === "width" || options.name === "height") {
          updateValueHandler();
        }
      };
      question.onPropertyChanged.add(propertyChangedHandler);
      question.signaturePad.propertyChangedHandler = propertyChangedHandler;
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
    widgetIsLoaded: function() {
      return typeof __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a != "undefined";
    },
    defaultJSON: { choices: ["Item 1", "Item 2", "Item 3"] },
    rootStyle: "width:100%:",
    areaStyle:
      "border: 1px solid #1ab394; width:100%; min-height:50px; margin-top:10px;",
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
      Survey.JsonObject.metaData.addProperty("sortablelist", {
        name: "useDefaultTheme",
        default: true
      });
    },
    afterRender: function(question, el) {
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
      var hasValueInResults = function(val) {
        var res = question.value;
        if (!Array.isArray(res)) return false;
        for (var i = 0; i < res.length; i++) {
          if (res[i] == val) return true;
        }
        return false;
      };
      var addChoiceToWidget = function(choice, inResults) {
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
      var getChoicesNotInResults = function() {
        var res = [];
        question.activeChoices.forEach(function(choice) {
          if (!hasValueInResults(choice.value)) {
            res.push(choice);
          }
        });
        return res;
      };
      var getChoicesInResults = function() {
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
      var updateValueHandler = function() {
        if (isUpdatingQuestionValue) return;
        resultEl.innerHTML = "";
        resultEl.appendChild(emptyEl);
        sourceEl.innerHTML = "";
        var notInResults = getChoicesNotInResults();
        var inResults = getChoicesInResults();
        emptyEl.style.display = inResults.length > 0 ? "none" : "";
        inResults.forEach(function(choice) {
          addChoiceToWidget(choice, true);
        });
        notInResults.forEach(function(choice) {
          addChoiceToWidget(choice, false);
        });
      };
      result = question.resultEl = __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create(resultEl, {
        animation: 150,
        disabled: question.isReadOnly,
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
      source = question.sourceEl = __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create(sourceEl, {
        animation: 150,
        disabled: question.isReadOnly,
        group: question.name
      });
      question.valueChangedCallback = updateValueHandler;
      question.readOnlyChangedCallback = function() {
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
    willUnmount: function(question, el) {
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
      CKEDITOR.editorConfig = function(config) {
        config.language = "es";
        config.height = question.height;
        config.toolbarCanCollapse = true;
      };
      var editor = CKEDITOR.replace(el);
      CKEDITOR.instances.editor1.config.readOnly = question.isReadOnly;

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
      question.readOnlyChangedCallback = function() {
        if (question.isReadOnly) {
          editor.setReadOnly(true);
        } else {
          editor.setReadOnly(false);
        }
      };
      updateValueHandler();
    },
    willUnmount: function(question, el) {
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
            var questionValue = question.value || [];
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
        enabled: !question.isReadOnly,
        value: question.value || question.rangeMin
      });

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

// Last time updated: 2018-12-22 9:57:01 AM UTC

// ________________
// RecordRTC v5.5.0

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
         *     document.querySelector('h1').innerHTML = 'Recorder's state is: ' + recorder.state;
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
        version: '5.5.0'
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

RecordRTC.version = '5.5.0';

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
        if (config.recorderType === WhammyRecorder || config.recorderType === CanvasRecorder) {
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
 *     video: true, // or WhammyRecorder or MediaStreamRecorder
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
     *     video: true, // TRUE or WhammyRecorder or MediaStreamRecorder
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

                if (!!navigator.mozGetUserMedia) {
                    newStream = new MediaStream();
                    newStream.addTrack(videoTrack);

                    if (recorderType && recorderType === WhammyRecorder) {
                        // Firefox does NOT support webp-encoding yet
                        recorderType = MediaStreamRecorder;
                    }
                } else {
                    newStream = new MediaStream([videoTrack]);
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
                onTimeStamp: this.onTimeStamp
            });

            if (!mediaType.audio) {
                this.videoRecorder.startRecording();
            }
        }

        if (!!mediaType.audio && !!mediaType.video) {
            var self = this;

            // this line prevents StereoAudioRecorder
            // todo: fix it
            if (isMediaRecorderCompatible() /* && !this.audioRecorder */ ) {
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
var isSafari = navigator.userAgent.toLowerCase().indexOf('safari/') !== -1 && navigator.userAgent.toLowerCase().indexOf('chrome/') === -1;
var isChrome = (!isOpera && !isEdge && !!navigator.webkitGetUserMedia) || isElectron() || navigator.userAgent.toLowerCase().indexOf('chrome/') !== -1;

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
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isChrome = (!!window.chrome && !isOpera) || isElectron();
    var isFirefox = typeof window.InstallTrigger !== 'undefined';

    if (isFirefox) {
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
            view.setUint32(4, 44 + interleavedLength * 2, true);

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
     *     var blob = recorder.getBlob();
     * }).catch(errorCB);
     */
    this.getBlob = function() {
        return self.recordRTC.getBlob();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhMGJjMTkyZWQ5ZTRiZDkwMmNkOSIsIndlYnBhY2s6Ly8vLi9zcmMvaWNoZWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIklucHV0bWFza1wiLFwiY29tbW9uanMyXCI6XCJpbnB1dG1hc2tcIixcImNvbW1vbmpzXCI6XCJpbnB1dG1hc2tcIixcImFtZFwiOlwiaW5wdXRtYXNrXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcXVlcnktYmFyLXJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5LXVpLWRhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vdWlzbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIm5vVWlTbGlkZXJcIixcImNvbW1vbmpzMlwiOlwibm91aXNsaWRlclwiLFwiY29tbW9uanNcIjpcIm5vdWlzbGlkZXJcIixcImFtZFwiOlwibm91aXNsaWRlclwifSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi10YWdib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpZ25hdHVyZV9wYWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlNpZ25hdHVyZVBhZFwiLFwiY29tbW9uanMyXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJjb21tb25qc1wiOlwic2lnbmF0dXJlX3BhZFwiLFwiYW1kXCI6XCJzaWduYXR1cmVfcGFkXCJ9Iiwid2VicGFjazovLy8uL3NyYy9zb3J0YWJsZWpzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJTb3J0YWJsZVwiLFwiY29tbW9uanMyXCI6XCJzb3J0YWJsZWpzXCIsXCJjb21tb25qc1wiOlwic29ydGFibGVqc1wiLFwiYW1kXCI6XCJzb3J0YWJsZWpzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9jay1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vhc3ktYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcmV0dHktY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJib290c3RyYXAtc2xpZGVyXCIsXCJjb21tb25qc1wiOlwiYm9vdHN0cmFwLXNsaWRlclwiLFwiYW1kXCI6XCJib290c3RyYXAtc2xpZGVyXCJ9Iiwid2VicGFjazovLy8uL3NyYy9taWNyb3Bob25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWNvcmRydGMvUmVjb3JkUlRDLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VydmV5anMtd2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1vdGlvbnNyYXRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9ib290c3RyYXBkYXRlcGlja2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQzs7Ozs7Ozs7QUNwR3BCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUM7Ozs7Ozs7O0FDMUlwQjtBQUFBO0FBQUE7QUFBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQVM7QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQzs7Ozs7Ozs7QUN4TXBCO0FBQUEsYUFBYSxtQkFBTyxDQUFDLEVBQWtCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQyw4QkFBOEIsZ0JBQWdCOztBQUU5QztBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1DQUFtQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsS0FBSztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUM7QUFDakMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0RBQXNELGdCQUFnQjtBQUN0RTtBQUNBLGFBQWE7QUFDYixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixTQUFTO0FBQ1QsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsT0FBTyxXQUFXO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1DQUFtQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IsU0FBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsbUNBQW1DLGdCQUFnQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxrQ0FBa0Msa0NBQWtDO0FBQ2xGO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMEJBQTBCLEtBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsU0FBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsZ0JBQWdCLGlHQUFpRyxhQUFhO0FBQy9LO0FBQ0EsYUFBYTtBQUNiLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsNkNBQTZDO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixTQUFTO0FBQ1QsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsT0FBTyxXQUFXO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkUsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLEtBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FB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QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRGQUE0RjtBQUM1RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osU0FBUztBQUNULFdBQVcsYUFBYTtBQUN4QixXQUFXLE9BQU8sV0FBVztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0RBQXNELGdCQUFnQixTQUFTO0FBQy9FLDBCQUEwQjtBQUMxQixhQUFhO0FBQ2IsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFdBQVcsWUFBWTtBQUN2QixXQUFXLE9BQU8sV0FBVztBQUM3QjtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsS0FBSyxpQ0FBaUMsZ0JBQWdCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLEtBQUs7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqN0tBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7O0FDcEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7O0FDdkx0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNFO0FBQ0k7QUFDYztBQUNNO0FBQ2xCO0FBQ087QUFDRjtBQUNMO0FBQ0g7QUFDWTtBQUNBO0FBQ0U7QUFDWDtBQUNVO0FBQ1E7Ozs7Ozs7QUNmMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQ0FBb0M7QUFDMUQsc0JBQXNCLHNDQUFzQztBQUM1RCxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFnQiw2REFBSSxFIiwiZmlsZSI6InN1cnZleWpzLXdpZGdldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJpbnB1dG1hc2tcIiksIHJlcXVpcmUoXCJub3Vpc2xpZGVyXCIpLCByZXF1aXJlKFwic2lnbmF0dXJlX3BhZFwiKSwgcmVxdWlyZShcInNvcnRhYmxlanNcIiksIHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwic3VydmV5anMtd2lkZ2V0c1wiLCBbXCJpbnB1dG1hc2tcIiwgXCJub3Vpc2xpZGVyXCIsIFwic2lnbmF0dXJlX3BhZFwiLCBcInNvcnRhYmxlanNcIiwgXCJib290c3RyYXAtc2xpZGVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1cnZleWpzLXdpZGdldHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJpbnB1dG1hc2tcIiksIHJlcXVpcmUoXCJub3Vpc2xpZGVyXCIpLCByZXF1aXJlKFwic2lnbmF0dXJlX3BhZFwiKSwgcmVxdWlyZShcInNvcnRhYmxlanNcIiksIHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzdXJ2ZXlqcy13aWRnZXRzXCJdID0gZmFjdG9yeShyb290W1wiSW5wdXRtYXNrXCJdLCByb290W1wibm9VaVNsaWRlclwiXSwgcm9vdFtcIlNpZ25hdHVyZVBhZFwiXSwgcm9vdFtcIlNvcnRhYmxlXCJdLCByb290W1wiU2xpZGVyXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEwYmMxOTJlZDllNGJkOTAyY2Q5IiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcbiAgJCA9ICQgfHwgd2luZG93LiQ7XG4gIHZhciB3aWRnZXQgPSB7XG4gICAgY2xhc3NOYW1lOiBcImlyYWRpb19zcXVhcmUtYmx1ZVwiLFxuICAgIGNoZWNrYm94Q2xhc3M6IFwiaXJhZGlvX3NxdWFyZS1ibHVlXCIsXG4gICAgcmFkaW9DbGFzczogXCJpcmFkaW9fc3F1YXJlLWJsdWVcIixcbiAgICBuYW1lOiBcImljaGVja1wiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLmlDaGVjaztcbiAgICB9LFxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgICAgdmFyIHQgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XG4gICAgICByZXR1cm4gdCA9PT0gXCJyYWRpb2dyb3VwXCIgfHwgdCA9PT0gXCJjaGVja2JveFwiIHx8IHQgPT09IFwibWF0cml4XCI7XG4gICAgfSxcbiAgICBpc0RlZmF1bHRSZW5kZXI6IHRydWUsXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xuICAgICAgdmFyICRlbCA9ICQoZWwpO1xuICAgICAgJGVsLmZpbmQoXCJpbnB1dFwiKS5kYXRhKHtcbiAgICAgICAgaUNoZWNrOiB1bmRlZmluZWRcbiAgICAgIH0pO1xuXG4gICAgICAkZWwuZmluZChcImlucHV0XCIpLmlDaGVjayh7XG4gICAgICAgIGNoZWNrYm94Q2xhc3M6XG4gICAgICAgICAgcXVlc3Rpb24uY2hlY2tib3hDbGFzcyB8fFxuICAgICAgICAgIHJvb3RXaWRnZXQuY2hlY2tib3hDbGFzcyB8fFxuICAgICAgICAgIHJvb3RXaWRnZXQuY2xhc3NOYW1lLFxuICAgICAgICByYWRpb0NsYXNzOlxuICAgICAgICAgIHF1ZXN0aW9uLnJhZGlvQ2xhc3MgfHwgcm9vdFdpZGdldC5yYWRpb0NsYXNzIHx8IHJvb3RXaWRnZXQuY2xhc3NOYW1lXG4gICAgICB9KTtcbiAgICAgIHZhciBzZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSAhPT0gXCJtYXRyaXhcIikge1xuICAgICAgICAgIHZhciB2YWx1ZXMgPSBxdWVzdGlvbi52YWx1ZTtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAkZWwuZmluZChcImlucHV0W3ZhbHVlPVwiICsgdmFsdWUgKyBcIl1cIikuaUNoZWNrKFwiY2hlY2tcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVlc3Rpb24uZ2VuZXJhdGVkVmlzaWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbihyb3csIGluZGV4LCByb3dzKSB7XG4gICAgICAgICAgICBpZiAocm93LnZhbHVlKSB7XG4gICAgICAgICAgICAgICQoZWwpXG4gICAgICAgICAgICAgICAgLmZpbmQoXG4gICAgICAgICAgICAgICAgICBcImlucHV0W25hbWU9J1wiICtcbiAgICAgICAgICAgICAgICAgICAgcm93LmZ1bGxOYW1lICtcbiAgICAgICAgICAgICAgICAgICAgXCInXVt2YWx1ZT0nXCIgK1xuICAgICAgICAgICAgICAgICAgICByb3cudmFsdWUgK1xuICAgICAgICAgICAgICAgICAgICBcIiddXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmlDaGVjayhcImNoZWNrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgJGVsLmZpbmQoXCJpbnB1dFwiKS5vbihcImlmQ2hlY2tlZFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcIm1hdHJpeFwiKSB7XG4gICAgICAgICAgcXVlc3Rpb24uZ2VuZXJhdGVkVmlzaWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbihyb3csIGluZGV4LCByb3dzKSB7XG4gICAgICAgICAgICBpZiAocm93LmZ1bGxOYW1lID09PSBldmVudC50YXJnZXQubmFtZSkge1xuICAgICAgICAgICAgICByb3cudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBxdWVzdGlvbi52YWx1ZSB8fCBbXTtcbiAgICAgICAgICB2YXIgaW5kZXggPSBvbGRWYWx1ZS5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBvbGRWYWx1ZS5jb25jYXQoW2V2ZW50LnRhcmdldC52YWx1ZV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAkZWwuZmluZChcImlucHV0XCIpLm9uKFwiaWZVbmNoZWNrZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgICAgdmFyIG9sZFZhbHVlID0gcXVlc3Rpb24udmFsdWUgfHwgW107XG4gICAgICAgICAgdmFyIGluZGV4ID0gb2xkVmFsdWUuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBvbGRWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBzZWxlY3Q7XG4gICAgICBzZWxlY3QoKTtcbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcbiAgICAgICRlbC5maW5kKFwiaW5wdXRcIikuaUNoZWNrKFwiZGVzdHJveVwiKTtcbiAgICB9XG4gIH07XG5cbiAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJyYWRpb2dyb3VwXCIsIFwicmFkaW9DbGFzc1wiKTtcbiAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJjaGVja2JveFwiLCBcImNoZWNrYm94Q2xhc3NcIik7XG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwidHlwZVwiKTtcbn1cblxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaW5pdChTdXJ2ZXksIHdpbmRvdy4kKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ljaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTIiLCJmdW5jdGlvbiBpbml0KFN1cnZleSwgJCkge1xuICAkID0gJCB8fCB3aW5kb3cuJDtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBhY3RpdmF0ZWRCeTogXCJwcm9wZXJ0eVwiLFxuICAgIG5hbWU6IFwic2VsZWN0MlwiLFxuICAgIGh0bWxUZW1wbGF0ZTogXCI8c2VsZWN0IHN0eWxlPSd3aWR0aDogMTAwJTsnPjwvc2VsZWN0PlwiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLnNlbGVjdDI7XG4gICAgfSxcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT0gXCJwcm9wZXJ0eVwiKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHF1ZXN0aW9uW1wicmVuZGVyQXNcIl0gPT09IFwic2VsZWN0MlwiICYmXG4gICAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImRyb3Bkb3duXCJcbiAgICAgICAgKTtcbiAgICAgIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT0gXCJ0eXBlXCIpXG4gICAgICAgIHJldHVybiB0eXBlb2YgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImRyb3Bkb3duXCI7XG4gICAgICBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwiY3VzdG9tdHlwZVwiKVxuICAgICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInNlbGVjdDJcIjtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcbiAgICAgIGlmICghdGhpcy53aWRnZXRJc0xvYWRlZCgpKSByZXR1cm47XG4gICAgICB3aWRnZXQuYWN0aXZhdGVkQnkgPSBhY3RpdmF0ZWRCeTtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLnJlbW92ZVByb3BlcnR5KFwiZHJvcGRvd25cIiwgXCJyZW5kZXJBc1wiKTtcbiAgICAgIGlmIChhY3RpdmF0ZWRCeSA9PSBcInByb3BlcnR5XCIpIHtcbiAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJkcm9wZG93blwiLCB7XG4gICAgICAgICAgbmFtZTogXCJyZW5kZXJBc1wiLFxuICAgICAgICAgIGRlZmF1bHQ6IFwic3RhbmRhcmRcIixcbiAgICAgICAgICBjaG9pY2VzOiBbXCJzdGFuZGFyZFwiLCBcInNlbGVjdDJcIl1cbiAgICAgICAgfSk7XG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwiZHJvcGRvd25cIiwge1xuICAgICAgICAgIG5hbWU6IFwic2VsZWN0MkNvbmZpZ1wiLFxuICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoYWN0aXZhdGVkQnkgPT0gXCJjdXN0b210eXBlXCIpIHtcbiAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJzZWxlY3QyXCIsIFtdLCBudWxsLCBcImRyb3Bkb3duXCIpO1xuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInNlbGVjdDJcIiwge1xuICAgICAgICAgIG5hbWU6IFwic2VsZWN0MkNvbmZpZ1wiLFxuICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICB2YXIgc2V0dGluZ3MgPSBxdWVzdGlvbi5zZWxlY3QyQ29uZmlnO1xuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xuICAgICAgdmFyIG90aGVyc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgb3RoZXJzRWwudHlwZSA9IFwidGV4dFwiO1xuICAgICAgb3RoZXJzRWwuc3R5bGUubWFyZ2luVG9wID0gXCIzcHhcIjtcbiAgICAgIG90aGVyc0VsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIG90aGVyc0VsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAkZWxcbiAgICAgICAgLnBhcmVudCgpXG4gICAgICAgIC5nZXQoMClcbiAgICAgICAgLmFwcGVuZENoaWxkKG90aGVyc0VsKTtcblxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkZWwudmFsKHF1ZXN0aW9uLnZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgICAgICBvdGhlcnNFbC5zdHlsZS5kaXNwbGF5ID0gIXF1ZXN0aW9uLmlzT3RoZXJTZWxlY3RlZCA/IFwibm9uZVwiIDogXCJcIjtcbiAgICAgIH07XG4gICAgICB2YXIgdXBkYXRlQ29tbWVudEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgb3RoZXJzRWwudmFsdWUgPSBxdWVzdGlvbi5jb21tZW50ID8gcXVlc3Rpb24uY29tbWVudCA6IFwiXCI7XG4gICAgICB9O1xuICAgICAgdmFyIG90aGVyc0VsQ2hhbmdlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBxdWVzdGlvbi5jb21tZW50ID0gb3RoZXJzRWwudmFsdWU7XG4gICAgICB9O1xuICAgICAgdmFyIHVwZGF0ZUNob2ljZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGVsLnNlbGVjdDIoKS5lbXB0eSgpO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgICAgIGlmIChzZXR0aW5ncy5hamF4KSB7XG4gICAgICAgICAgICAkZWwuc2VsZWN0MihzZXR0aW5ncyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldHRpbmdzLmRhdGEgPSBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24oY2hvaWNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IGNob2ljZS52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBjaG9pY2UudGV4dFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkZWwuc2VsZWN0MihzZXR0aW5ncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRlbC5zZWxlY3QyKHtcbiAgICAgICAgICAgIHRoZW1lOiBcImNsYXNzaWNcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBxdWVzdGlvbi5pc1JlYWRPbmx5LFxuICAgICAgICAgICAgZGF0YTogcXVlc3Rpb24udmlzaWJsZUNob2ljZXMubWFwKGZ1bmN0aW9uKGNob2ljZSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBjaG9pY2UudmFsdWUsXG4gICAgICAgICAgICAgICAgdGV4dDogY2hvaWNlLnRleHRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcbiAgICAgICAgdXBkYXRlQ29tbWVudEhhbmRsZXIoKTtcbiAgICAgIH07XG5cbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRlbC5wcm9wKFwiZGlzYWJsZWRcIiwgcXVlc3Rpb24uaXNSZWFkT25seSk7XG4gICAgICB9O1xuXG4gICAgICBxdWVzdGlvbi5yZWdpc3RlckZ1bmN0aW9uT25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChcbiAgICAgICAgXCJ2aXNpYmxlQ2hvaWNlc1wiLFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICB1cGRhdGVDaG9pY2VzKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB1cGRhdGVDaG9pY2VzKCk7XG4gICAgICAkZWwub24oXCJzZWxlY3QyOnNlbGVjdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB9KTtcbiAgICAgICRlbC5vbihcInNlbGVjdDI6dW5zZWxlY3RpbmdcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICAgIG90aGVyc0VsLm9uY2hhbmdlID0gb3RoZXJzRWxDaGFuZ2VkO1xuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XG4gICAgICBxdWVzdGlvbi5jb21tZW50Q2hhbmdlZENhbGxiYWNrID0gdXBkYXRlQ29tbWVudEhhbmRsZXI7XG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcbiAgICAgIHVwZGF0ZUNvbW1lbnRIYW5kbGVyKCk7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICAkKGVsKVxuICAgICAgICAuZmluZChcInNlbGVjdFwiKVxuICAgICAgICAub2ZmKFwic2VsZWN0MjpzZWxlY3RcIilcbiAgICAgICAgLnNlbGVjdDIoXCJkZXN0cm95XCIpO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0KTtcbn1cblxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaW5pdChTdXJ2ZXksIHdpbmRvdy4kKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NlbGVjdDIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDciLCJpbXBvcnQgSW5wdXRtYXNrIGZyb20gXCJpbnB1dG1hc2tcIjtcblxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBuYW1lOiBcIm1hc2tlZGl0XCIsXG4gICAgbnVtZXJpY0dyb3VwU2VwYXJhdG9yOiBcIixcIixcbiAgICBudW1lcmljQXV0b0dyb3VwOiB0cnVlLFxuICAgIG51bWVyaWNEaWdpdHM6IDIsXG4gICAgbnVtZXJpY0RpZ2l0c09wdGlvbmFsOiBmYWxzZSxcbiAgICBudW1lcmljUHJlZml4OiBcIiRcIixcbiAgICBudW1lcmljUGxhY2Vob2xkZXI6IFwiMFwiLFxuICAgIGF1dG9Vbm1hc2s6IHRydWUsXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBJbnB1dG1hc2sgIT0gXCJ1bmRlZmluZWRcIjtcbiAgICB9LFxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PSBcIm11bHRpcGxldGV4dFwiKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHF1ZXN0aW9uLmdldFR5cGUoKSA9PSBcInRleHRcIiAmJlxuICAgICAgICAocXVlc3Rpb24uaW5wdXRNYXNrICE9IFwibm9uZVwiIHx8IHF1ZXN0aW9uLmlucHV0Rm9ybWF0KVxuICAgICAgKTtcbiAgICB9LFxuICAgIGlzRGVmYXVsdFJlbmRlcjogdHJ1ZSxcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBpZiAoU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZmluZFByb3BlcnR5KFwidGV4dFwiLCBcImlucHV0TWFza1wiKSkgcmV0dXJuO1xuICAgICAgdmFyIHByb3BlcnRpZXMgPSBbXG4gICAgICAgIFwiaW5wdXRGb3JtYXRcIixcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiaW5wdXRNYXNrXCIsXG4gICAgICAgICAgZGVmYXVsdDogXCJub25lXCIsXG4gICAgICAgICAgY2hvaWNlczogW1xuICAgICAgICAgICAgXCJub25lXCIsXG4gICAgICAgICAgICBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBcImN1cnJlbmN5XCIsXG4gICAgICAgICAgICBcImRlY2ltYWxcIixcbiAgICAgICAgICAgIFwiZW1haWxcIixcbiAgICAgICAgICAgIFwicGhvbmVcIixcbiAgICAgICAgICAgIFwiaXBcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXTtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJ0ZXh0XCIsIHByb3BlcnRpZXMpO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcbiAgICAgICAgXCJtYXRyaXhkcm9wZG93bmNvbHVtblwiLFxuICAgICAgICBwcm9wZXJ0aWVzXG4gICAgICApO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcIm11bHRpcGxldGV4dGl0ZW1cIiwgcHJvcGVydGllcyk7XG4gICAgfSxcbiAgICBhcHBseUlucHV0TWFzazogZnVuY3Rpb24oc3VydmV5RWxlbWVudCwgZWwpIHtcbiAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcbiAgICAgIHZhciBtYXNrID1cbiAgICAgICAgc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgIT0gXCJub25lXCJcbiAgICAgICAgICA/IHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrXG4gICAgICAgICAgOiBzdXJ2ZXlFbGVtZW50LmlucHV0Rm9ybWF0O1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIGF1dG9Vbm1hc2s6IHJvb3RXaWRnZXQuYXV0b1VubWFza1xuICAgICAgfTtcbiAgICAgIGlmIChzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayAhPSBcIm5vbmVcIilcbiAgICAgICAgb3B0aW9ucy5pbnB1dEZvcm1hdCA9IHN1cnZleUVsZW1lbnQuaW5wdXRGb3JtYXQ7XG5cbiAgICAgIGlmIChcbiAgICAgICAgc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgPT0gXCJjdXJyZW5jeVwiIHx8XG4gICAgICAgIHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiZGVjaW1hbFwiXG4gICAgICApIHtcbiAgICAgICAgb3B0aW9ucy5ncm91cFNlcGFyYXRvciA9IHJvb3RXaWRnZXQubnVtZXJpY0dyb3VwU2VwYXJhdG9yO1xuICAgICAgICBvcHRpb25zLmF1dG9Hcm91cCA9IHJvb3RXaWRnZXQubnVtZXJpY0F1dG9Hcm91cDtcbiAgICAgIH1cbiAgICAgIGlmIChzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImN1cnJlbmN5XCIpIHtcbiAgICAgICAgb3B0aW9ucy5kaWdpdHMgPSByb290V2lkZ2V0Lm51bWVyaWNEaWdpdHM7XG4gICAgICAgIG9wdGlvbnMuZGlnaXRzT3B0aW9uYWwgPSByb290V2lkZ2V0Lm51bWVyaWNEaWdpdHNPcHRpb25hbDtcbiAgICAgICAgb3B0aW9ucy5wcmVmaXggPSByb290V2lkZ2V0Lm51bWVyaWNQcmVmaXg7XG4gICAgICAgIG9wdGlvbnMucGxhY2Vob2xkZXIgPSByb290V2lkZ2V0Lm51bWVyaWNQbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICAgIGlmIChzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImRhdGV0aW1lXCIpIHtcbiAgICAgICAgbWFzayA9IHN1cnZleUVsZW1lbnQuaW5wdXRGb3JtYXQ7XG4gICAgICB9XG5cbiAgICAgIElucHV0bWFzayhtYXNrLCBvcHRpb25zKS5tYXNrKGVsKTtcblxuICAgICAgZWwub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdXJ2ZXlFbGVtZW50LmN1c3RvbVdpZGdldERhdGEuaXNOZWVkUmVuZGVyID0gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIHZhciB1cGRhdGVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsLnZhbHVlID1cbiAgICAgICAgICB0eXBlb2Ygc3VydmV5RWxlbWVudC52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiXCIgOiBzdXJ2ZXlFbGVtZW50LnZhbHVlO1xuICAgICAgfTtcbiAgICAgIHN1cnZleUVsZW1lbnQudmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVIYW5kbGVyO1xuICAgICAgdXBkYXRlSGFuZGxlcigpO1xuICAgIH0sXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSAhPSBcIm11bHRpcGxldGV4dFwiKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSB8fCBlbDtcbiAgICAgICAgdGhpcy5hcHBseUlucHV0TWFzayhxdWVzdGlvbiwgaW5wdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbi5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpdGVtID0gcXVlc3Rpb24uaXRlbXNbaV07XG4gICAgICAgICAgaWYgKGl0ZW0uaW5wdXRNYXNrICE9IFwibm9uZVwiIHx8IGl0ZW0uaW5wdXRGb3JtYXQpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBpdGVtLmlkKTtcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgICB0aGlzLmFwcGx5SW5wdXRNYXNrKGl0ZW0sIGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSB8fCBlbDtcbiAgICAgIGlmICghIWlucHV0ICYmICEhaW5wdXQuaW5wdXRtYXNrKSB7XG4gICAgICAgIGlucHV0LmlucHV0bWFzay5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCk7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2lucHV0bWFzay5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiSW5wdXRtYXNrXCIsXCJjb21tb25qczJcIjpcImlucHV0bWFza1wiLFwiY29tbW9uanNcIjpcImlucHV0bWFza1wiLFwiYW1kXCI6XCJpbnB1dG1hc2tcIn1cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJmdW5jdGlvbiBpbml0KFN1cnZleSwgJCkge1xuICAkID0gJCB8fCB3aW5kb3cuJDtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBuYW1lOiBcImJhcnJhdGluZ1wiLFxuICAgIHRpdGxlOiBcIkJhciByYXRpbmdcIixcbiAgICBpY29uTmFtZTogXCJpY29uLWJhcnJhdGluZ1wiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLmJhcnJhdGluZztcbiAgICB9LFxuICAgIGRlZmF1bHRKU09OOiB7IGNob2ljZXM6IFsxLCAyLCAzLCA0LCA1XSB9LFxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJiYXJyYXRpbmdcIjtcbiAgICB9LFxuICAgIGlzRGVmYXVsdFJlbmRlcjogdHJ1ZSxcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcbiAgICAgICAgXCJiYXJyYXRpbmdcIixcbiAgICAgICAgW1xuICAgICAgICAgIHsgbmFtZTogXCJoYXNPdGhlclwiLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogXCJvdGhlclRleHRcIiwgdmlzaWJsZTogZmFsc2UgfSxcbiAgICAgICAgICB7IG5hbWU6IFwib3B0aW9uc0NhcHRpb25cIiwgdmlzaWJsZTogZmFsc2UgfSxcbiAgICAgICAgICB7IG5hbWU6IFwib3RoZXJFcnJvclRleHRcIiwgdmlzaWJsZTogZmFsc2UgfSxcbiAgICAgICAgICB7IG5hbWU6IFwic3RvcmVPdGhlcnNBc0NvbW1lbnRcIiwgdmlzaWJsZTogZmFsc2UgfSxcbiAgICAgICAgICB7IG5hbWU6IFwicmVuZGVyQXNcIiwgdmlzaWJsZTogZmFsc2UgfVxuICAgICAgICBdLFxuICAgICAgICBudWxsLFxuICAgICAgICBcImRyb3Bkb3duXCJcbiAgICAgICk7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImJhcnJhdGluZ1wiLCB7XG4gICAgICAgIG5hbWU6IFwic2hvd1ZhbHVlczpib29sZWFuXCIsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwiYmFycmF0aW5nXCIsIHtcbiAgICAgICAgbmFtZTogXCJyYXRpbmdUaGVtZVwiLFxuICAgICAgICBkZWZhdWx0OiBcImNzcy1zdGFyc1wiLFxuICAgICAgICBjaG9pY2VzOiBbXG4gICAgICAgICAgXCJmb250YXdlc29tZS1zdGFyc1wiLFxuICAgICAgICAgIFwiY3NzLXN0YXJzXCIsXG4gICAgICAgICAgXCJiYXJzLXBpbGxcIixcbiAgICAgICAgICBcImJhcnMtMXRvMTBcIixcbiAgICAgICAgICBcImJhcnMtbW92aWVcIixcbiAgICAgICAgICBcImJhcnMtc3F1YXJlXCIsXG4gICAgICAgICAgXCJiYXJzLXJldmVyc2VkXCIsXG4gICAgICAgICAgXCJiYXJzLWhvcml6b250YWxcIixcbiAgICAgICAgICBcImJvb3RzdHJhcC1zdGFyc1wiLFxuICAgICAgICAgIFwiZm9udGF3ZXNvbWUtc3RhcnMtb1wiXG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xuICAgICAgJGVsLmJhcnJhdGluZyhcInNob3dcIiwge1xuICAgICAgICB0aGVtZTogcXVlc3Rpb24ucmF0aW5nVGhlbWUsXG4gICAgICAgIGluaXRpYWxSYXRpbmc6IHF1ZXN0aW9uLnZhbHVlLFxuICAgICAgICBzaG93VmFsdWVzOiBxdWVzdGlvbi5zaG93VmFsdWVzLFxuICAgICAgICBzaG93U2VsZWN0ZWRSYXRpbmc6IGZhbHNlLFxuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24odmFsdWUsIHRleHQpIHtcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoZWwpXG4gICAgICAgICAgLmZpbmQoXCJzZWxlY3RcIilcbiAgICAgICAgICAuYmFycmF0aW5nKFwic2V0XCIsIHF1ZXN0aW9uLnZhbHVlKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICB2YXIgJGVsID0gJChlbCkuZmluZChcInNlbGVjdFwiKTtcbiAgICAgICRlbC5iYXJyYXRpbmcoXCJkZXN0cm95XCIpO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5LCB3aW5kb3cuJCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcXVlcnktYmFyLXJhdGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTEiLCJmdW5jdGlvbiBpbml0KFN1cnZleSwgJCkge1xuICAkID0gJCB8fCB3aW5kb3cuJDtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBuYW1lOiBcImRhdGVwaWNrZXJcIixcbiAgICB0aXRsZTogXCJEYXRlIHBpY2tlclwiLFxuICAgIGljb25OYW1lOiBcImljb24tZGF0ZXBpY2tlclwiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhISQgJiYgISEkLmZuLmRhdGVwaWNrZXI7XG4gICAgfSxcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiZGF0ZXBpY2tlclwiO1xuICAgIH0sXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxpbnB1dCBjbGFzcz0nZm9ybS1jb250cm9sIHdpZGdldC1kYXRlcGlja2VyJyB0eXBlPSd0ZXh0Jz5cIixcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcbiAgICAgICAgXCJkYXRlcGlja2VyXCIsXG4gICAgICAgIFtcbiAgICAgICAgICB7IG5hbWU6IFwiaW5wdXRUeXBlXCIsIHZpc2libGU6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiBcImlucHV0Rm9ybWF0XCIsIHZpc2libGU6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiBcImlucHV0TWFza1wiLCB2aXNpYmxlOiBmYWxzZSB9XG4gICAgICAgIF0sXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwidGV4dFwiXG4gICAgICApO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJkYXRlcGlja2VyXCIsIHtcbiAgICAgICAgbmFtZTogXCJkYXRlRm9ybWF0XCJcbiAgICAgIH0pO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJkYXRlcGlja2VyXCIsIHtcbiAgICAgICAgbmFtZTogXCJjb25maWdcIixcbiAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCIud2lkZ2V0LWRhdGVwaWNrZXJcIilcbiAgICAgICAgPyAkKGVsKVxuICAgICAgICA6ICQoZWwpLmZpbmQoXCIud2lkZ2V0LWRhdGVwaWNrZXJcIik7XG4gICAgICB2YXIgaXNTZWxlY3RpbmcgPSBmYWxzZTtcbiAgICAgIHZhciBjb25maWcgPSBxdWVzdGlvbi5jb25maWcgfHwge307XG4gICAgICBpZiAoISFxdWVzdGlvbi5wbGFjZUhvbGRlcikge1xuICAgICAgICAkZWwuYXR0cihcInBsYWNlaG9sZGVyXCIsIHF1ZXN0aW9uLnBsYWNlSG9sZGVyKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcuZGF0ZUZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbmZpZy5kYXRlRm9ybWF0ID0gISFxdWVzdGlvbi5kYXRlRm9ybWF0XG4gICAgICAgICAgPyBxdWVzdGlvbi5kYXRlRm9ybWF0XG4gICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLm9wdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbmZpZy5vcHRpb24gPSB7XG4gICAgICAgICAgbWluRGF0ZTogbnVsbCxcbiAgICAgICAgICBtYXhEYXRlOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLm9uU2VsZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnLm9uU2VsZWN0ID0gZnVuY3Rpb24oZGF0ZVRleHQpIHtcbiAgICAgICAgICBpc1NlbGVjdGluZyA9IHRydWU7XG4gICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBkYXRlVGV4dDtcbiAgICAgICAgICBpc1NlbGVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZml4Rm9jdXNJRSA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjb25maWcuZml4Rm9jdXNJRSA9IGZhbHNlO1xuICAgICAgY29uZmlnLm9uQ2xvc2UgPSBmdW5jdGlvbihkYXRlVGV4dCwgaW5zdCkge1xuICAgICAgICB0aGlzLmZpeEZvY3VzSUUgPSB0cnVlO1xuICAgICAgfTtcbiAgICAgIGNvbmZpZy5iZWZvcmVTaG93ID0gZnVuY3Rpb24oaW5wdXQsIGluc3QpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudFxcLzdcXC4vKVxuICAgICAgICAgID8gIXRoaXMuZml4Rm9jdXNJRVxuICAgICAgICAgIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5maXhGb2N1c0lFID0gZmFsc2U7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9O1xuICAgICAgdmFyIHBpY2tlcldpZGdldCA9ICRlbC5kYXRlcGlja2VyKGNvbmZpZyk7XG5cbiAgICAgICRlbC5rZXl1cChmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT0gOCB8fCBlLmtleUNvZGUgPT0gNDYpIHtcbiAgICAgICAgICAkLmRhdGVwaWNrZXIuX2NsZWFyRGF0ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRlbC5kYXRlcGlja2VyKFwib3B0aW9uXCIsIFwiZGlzYWJsZWRcIiwgcXVlc3Rpb24uaXNSZWFkT25seSk7XG4gICAgICB9O1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2soKTtcblxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFpc1NlbGVjdGluZykge1xuICAgICAgICAgIGlmIChxdWVzdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgcGlja2VyV2lkZ2V0LmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIHF1ZXN0aW9uLnZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGlja2VyV2lkZ2V0LmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkZWwuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2soKTtcbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcIi53aWRnZXQtZGF0ZXBpY2tlclwiKVxuICAgICAgICA/ICQoZWwpXG4gICAgICAgIDogJChlbCkuZmluZChcIi53aWRnZXQtZGF0ZXBpY2tlclwiKTtcbiAgICAgICRlbC5kYXRlcGlja2VyKFwiZGVzdHJveVwiKTtcbiAgICB9XG4gIH07XG5cbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSwgd2luZG93LiQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanF1ZXJ5LXVpLWRhdGVwaWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEwIiwiaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSBcIm5vdWlzbGlkZXJcIjtcblxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBuYW1lOiBcIm5vdWlzbGlkZXJcIixcbiAgICB0aXRsZTogXCJub1VpU2xpZGVyXCIsXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1ub3Vpc2xpZGVyXCIsXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBub1VpU2xpZGVyICE9IFwidW5kZWZpbmVkXCI7XG4gICAgfSxcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwibm91aXNsaWRlclwiO1xuICAgIH0sXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJub3Vpc2xpZGVyXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcIm5vdWlzbGlkZXJcIiwgW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJzdGVwOm51bWJlclwiLFxuICAgICAgICAgIGRlZmF1bHQ6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicmFuZ2VNaW46bnVtYmVyXCIsXG4gICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJyYW5nZU1heDpudW1iZXJcIixcbiAgICAgICAgICBkZWZhdWx0OiAxMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicGlwc01vZGVcIixcbiAgICAgICAgICBkZWZhdWx0OiBcInBvc2l0aW9uc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInBpcHNWYWx1ZXM6aXRlbXZhbHVlc1wiLFxuICAgICAgICAgIGRlZmF1bHQ6IFswLCAyNSwgNTAsIDc1LCAxMDBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInBpcHNEZW5zaXR5Om51bWJlclwiLFxuICAgICAgICAgIGRlZmF1bHQ6IDVcbiAgICAgICAgfVxuICAgICAgXSk7XG4gICAgfSxcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICBlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjYwcHhcIjtcbiAgICAgIHZhciBzbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShlbCwge1xuICAgICAgICBzdGFydDogcXVlc3Rpb24udmFsdWUgfHwgKHF1ZXN0aW9uLnJhbmdlTWluICsgcXVlc3Rpb24ucmFuZ2VNYXgpIC8gMixcbiAgICAgICAgY29ubmVjdDogW3RydWUsIGZhbHNlXSxcbiAgICAgICAgc3RlcDogcXVlc3Rpb24uc3RlcCxcbiAgICAgICAgdG9vbHRpcHM6IHRydWUsXG4gICAgICAgIHBpcHM6IHtcbiAgICAgICAgICBtb2RlOiBxdWVzdGlvbi5waXBzTW9kZSB8fCBcInBvc2l0aW9uc1wiLFxuICAgICAgICAgIHZhbHVlczogcXVlc3Rpb24ucGlwc1ZhbHVlcy5tYXAoZnVuY3Rpb24ocFZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KChwVmFsLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgcFZhbC52YWx1ZSkgfHwgcFZhbCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVuc2l0eTogcXVlc3Rpb24ucGlwc0RlbnNpdHkgfHwgNVxuICAgICAgICB9LFxuICAgICAgICByYW5nZToge1xuICAgICAgICAgIG1pbjogcXVlc3Rpb24ucmFuZ2VNaW4sXG4gICAgICAgICAgbWF4OiBxdWVzdGlvbi5yYW5nZU1heFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNsaWRlci5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBzbGlkZXIuZ2V0KCk7XG4gICAgICB9KTtcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2xpZGVyLnNldChxdWVzdGlvbi52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgaWYgKHF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcbiAgICAgIHF1ZXN0aW9uLm5vVWlTbGlkZXIgPSBzbGlkZXI7XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICBxdWVzdGlvbi5ub1VpU2xpZGVyLmRlc3Ryb3koKTtcbiAgICAgIHF1ZXN0aW9uLm5vVWlTbGlkZXIgPSBudWxsO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL25vdWlzbGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIm5vVWlTbGlkZXJcIixcImNvbW1vbmpzMlwiOlwibm91aXNsaWRlclwiLFwiY29tbW9uanNcIjpcIm5vdWlzbGlkZXJcIixcImFtZFwiOlwibm91aXNsaWRlclwifVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCIsImZ1bmN0aW9uIGluaXQoU3VydmV5LCAkKSB7XG4gICQgPSAkIHx8IHdpbmRvdy4kO1xuICB2YXIgd2lkZ2V0ID0ge1xuICAgIG5hbWU6IFwidGFnYm94XCIsXG4gICAgdGl0bGU6IFwiVGFnIGJveFwiLFxuICAgIGljb25OYW1lOiBcImljb24tdGFnYm94XCIsXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uc2VsZWN0MjtcbiAgICB9LFxuICAgIGRlZmF1bHRKU09OOiB7XG4gICAgICBjaG9pY2VzOiBbXCJJdGVtIDFcIiwgXCJJdGVtIDJcIiwgXCJJdGVtIDNcIl1cbiAgICB9LFxuICAgIGh0bWxUZW1wbGF0ZTogXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZScgc3R5bGU9J3dpZHRoOiAxMDAlOyc+PC9zZWxlY3Q+XCIsXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInRhZ2JveFwiO1xuICAgIH0sXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXG4gICAgICAgIFwidGFnYm94XCIsXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImhhc090aGVyXCIsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCJjaGVja2JveFwiXG4gICAgICApO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJ0YWdib3hcIiwge1xuICAgICAgICBuYW1lOiBcInNlbGVjdDJDb25maWdcIixcbiAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBmaXhTdHlsZXM6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICBlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIpLnN0eWxlLmJvcmRlciA9XG4gICAgICAgIFwibm9uZVwiO1xuICAgIH0sXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHNldHRpbmdzID0gcXVlc3Rpb24uc2VsZWN0MkNvbmZpZztcbiAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcInNlbGVjdFwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcInNlbGVjdFwiKTtcbiAgICAgICRlbC5zZWxlY3QyKHtcbiAgICAgICAgdGFnczogXCJ0cnVlXCIsXG4gICAgICAgIGRpc2FibGVkOiBxdWVzdGlvbi5pc1JlYWRPbmx5LFxuICAgICAgICB0aGVtZTogXCJjbGFzc2ljXCJcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLmZpeFN0eWxlcyhlbCk7XG5cbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGVsLnZhbChxdWVzdGlvbi52YWx1ZSkudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICAgICAgc2VsZi5maXhTdHlsZXMoZWwpO1xuICAgICAgfTtcbiAgICAgIHZhciB1cGRhdGVDaG9pY2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRlbC5zZWxlY3QyKCkuZW1wdHkoKTtcblxuICAgICAgICBpZiAoc2V0dGluZ3MpIHtcbiAgICAgICAgICBpZiAoc2V0dGluZ3MuYWpheCkge1xuICAgICAgICAgICAgJGVsLnNlbGVjdDIoc2V0dGluZ3MpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXR0aW5ncy5kYXRhID0gcXVlc3Rpb24udmlzaWJsZUNob2ljZXMubWFwKGZ1bmN0aW9uKGNob2ljZSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBjaG9pY2UudmFsdWUsXG4gICAgICAgICAgICAgICAgdGV4dDogY2hvaWNlLnRleHRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJGVsLnNlbGVjdDIoc2V0dGluZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZWwuc2VsZWN0Mih7XG4gICAgICAgICAgICBkYXRhOiBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24oY2hvaWNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IGNob2ljZS52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBjaG9pY2UudGV4dFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xuICAgICAgfTtcblxuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGVsLnByb3AoXCJkaXNhYmxlZFwiLCBxdWVzdGlvbi5pc1JlYWRPbmx5KTtcbiAgICAgIH07XG4gICAgICBxdWVzdGlvbi5yZWdpc3RlckZ1bmN0aW9uT25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChcbiAgICAgICAgXCJ2aXNpYmxlQ2hvaWNlc1wiLFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICB1cGRhdGVDaG9pY2VzKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcbiAgICAgICRlbC5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSAocXVlc3Rpb24udmFsdWUgfHwgW10pLmNvbmNhdChlLnBhcmFtcy5kYXRhLmlkKTtcbiAgICAgIH0pO1xuICAgICAgJGVsLm9uKFwic2VsZWN0Mjp1bnNlbGVjdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IChxdWVzdGlvbi52YWx1ZSB8fCBbXSkuaW5kZXhPZihlLnBhcmFtcy5kYXRhLmlkKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHZhciB2YWwgPSBxdWVzdGlvbi52YWx1ZTtcbiAgICAgICAgICB2YWwuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB1cGRhdGVDaG9pY2VzKCk7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICAkKGVsKVxuICAgICAgICAuZmluZChcInNlbGVjdFwiKVxuICAgICAgICAub2ZmKFwic2VsZWN0MjpzZWxlY3RcIilcbiAgICAgICAgLnNlbGVjdDIoXCJkZXN0cm95XCIpO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5LCB3aW5kb3cuJCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZWxlY3QyLXRhZ2JveC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgOCIsImltcG9ydCBTaWduYXR1cmVQYWQgZnJvbSBcInNpZ25hdHVyZV9wYWRcIjtcblxuZnVuY3Rpb24gcmVzaXplQ2FudmFzKGNhbnZhcykge1xuICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIHZhciBkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgdmFyIGJhY2tpbmdTdG9yZVJhdGlvID1cbiAgICBjb250ZXh0LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICBjb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICBjb250ZXh0Lm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgIGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAxO1xuXG4gIHZhciByYXRpbyA9IGRldmljZVBpeGVsUmF0aW8gLyBiYWNraW5nU3RvcmVSYXRpbztcblxuICB2YXIgb2xkV2lkdGggPSBjYW52YXMud2lkdGg7XG4gIHZhciBvbGRIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gIGNhbnZhcy53aWR0aCA9IG9sZFdpZHRoICogcmF0aW87XG4gIGNhbnZhcy5oZWlnaHQgPSBvbGRIZWlnaHQgKiByYXRpbztcblxuICBjYW52YXMuc3R5bGUud2lkdGggPSBvbGRXaWR0aCArIFwicHhcIjtcbiAgY2FudmFzLnN0eWxlLmhlaWdodCA9IG9sZEhlaWdodCArIFwicHhcIjtcblxuICBjb250ZXh0LnNjYWxlKHJhdGlvLCByYXRpbyk7XG59XG5cbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XG4gIHZhciB3aWRnZXQgPSB7XG4gICAgbmFtZTogXCJzaWduYXR1cmVwYWRcIixcbiAgICB0aXRsZTogXCJTaWduYXR1cmUgcGFkXCIsXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1zaWduYXR1cmVwYWRcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIFNpZ25hdHVyZVBhZCAhPSBcInVuZGVmaW5lZFwiO1xuICAgIH0sXG4gICAgcGVuQ29sb3I6IFwiIzFhYjM5NFwiLFxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJzaWduYXR1cmVwYWRcIjtcbiAgICB9LFxuICAgIGh0bWxUZW1wbGF0ZTpcbiAgICAgIFwiPGRpdiBjbGFzcz0nc2pzX3NwX2NvbnRhaW5lcic+PGRpdj48Y2FudmFzPjwvY2FudmFzPjwvZGl2PjxkaXYgY2xhc3M9J3Nqc19zcF9jb250cm9scyc+PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdzanNfc3BfY2xlYXInIHRpdGxlPSdDbGVhcic+4pyWPC9idXR0b24+PC9kaXY+PC9kaXY+PHN0eWxlPi5zanNfc3BfY29udGFpbmVyIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9IC5zanNfc3BfY29udHJvbHMgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IGJvdHRvbTogMDsgfSAuc2pzX3NwX2NvbnRyb2xzID4gYnV0dG9uIHsgdXNlci1zZWxlY3Q6IG5vbmU7IH08L3N0eWxlPlwiLFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic2lnbmF0dXJlcGFkXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcInNpZ25hdHVyZXBhZFwiLCBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImFsbG93Q2xlYXI6Ym9vbGVhblwiLFxuICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwid2lkdGg6bnVtYmVyXCIsXG4gICAgICAgICAgZGVmYXVsdDogMzAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImhlaWdodDpudW1iZXJcIixcbiAgICAgICAgICBkZWZhdWx0OiAyMDBcbiAgICAgICAgfVxuICAgICAgXSk7XG4gICAgfSxcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICB2YXIgcm9vdFdpZGdldCA9IHRoaXM7XG4gICAgICB2YXIgY2FudmFzID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gICAgICB2YXIgc2lnbmF0dXJlUGFkID0gbmV3IFNpZ25hdHVyZVBhZChjYW52YXMpO1xuICAgICAgaWYgKHF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcbiAgICAgICAgc2lnbmF0dXJlUGFkLm9mZigpO1xuICAgICAgfVxuXG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAocXVlc3Rpb24uaXNSZWFkT25seSkge1xuICAgICAgICAgIHNpZ25hdHVyZVBhZC5vZmYoKTtcbiAgICAgICAgICB2YXIgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNqc19zcF9jbGVhclwiKTtcbiAgICAgICAgICBjbGVhckJ0biAmJiAoY2xlYXJCdG4uZGlzYWJsZWQgPSB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaWduYXR1cmVQYWQub24oKTtcbiAgICAgICAgICB2YXIgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNqc19zcF9jbGVhclwiKTtcbiAgICAgICAgICBjbGVhckJ0biAmJiAoY2xlYXJCdG4uZGlzYWJsZWQgPSBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHNpZ25hdHVyZVBhZC5wZW5Db2xvciA9IHJvb3RXaWRnZXQucGVuQ29sb3I7XG4gICAgICBzaWduYXR1cmVQYWQub25FbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBzaWduYXR1cmVQYWQudG9EYXRhVVJMKCk7XG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZGF0YTtcbiAgICAgIH07XG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkYXRhID0gcXVlc3Rpb24udmFsdWU7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHF1ZXN0aW9uLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gcXVlc3Rpb24uaGVpZ2h0O1xuICAgICAgICByZXNpemVDYW52YXMoY2FudmFzKTtcbiAgICAgICAgc2lnbmF0dXJlUGFkLmZyb21EYXRhVVJMKFxuICAgICAgICAgIGRhdGEgfHwgXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQXCJcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcbiAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xuICAgICAgcXVlc3Rpb24uc2lnbmF0dXJlUGFkID0gc2lnbmF0dXJlUGFkO1xuICAgICAgdmFyIHByb3BlcnR5Q2hhbmdlZEhhbmRsZXIgPSBmdW5jdGlvbihzZW5kZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gXCJ3aWR0aFwiIHx8IG9wdGlvbnMubmFtZSA9PT0gXCJoZWlnaHRcIikge1xuICAgICAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcXVlc3Rpb24ub25Qcm9wZXJ0eUNoYW5nZWQuYWRkKHByb3BlcnR5Q2hhbmdlZEhhbmRsZXIpO1xuICAgICAgcXVlc3Rpb24uc2lnbmF0dXJlUGFkLnByb3BlcnR5Q2hhbmdlZEhhbmRsZXIgPSBwcm9wZXJ0eUNoYW5nZWRIYW5kbGVyO1xuICAgICAgdmFyIGJ1dHRvbkVsID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJidXR0b25cIilbMF07XG4gICAgICBpZiAocXVlc3Rpb24uYWxsb3dDbGVhciAmJiAhcXVlc3Rpb24uaXNSZWFkT25seSkge1xuICAgICAgICBidXR0b25FbC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b25FbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJ1dHRvbkVsKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIGlmIChxdWVzdGlvbi5zaWduYXR1cmVQYWQpIHtcbiAgICAgICAgcXVlc3Rpb24ub25Qcm9wZXJ0eUNoYW5nZWQucmVtb3ZlKFxuICAgICAgICAgIHF1ZXN0aW9uLnNpZ25hdHVyZVBhZC5wcm9wZXJ0eUNoYW5nZWRIYW5kbGVyXG4gICAgICAgICk7XG4gICAgICAgIHF1ZXN0aW9uLnNpZ25hdHVyZVBhZC5vZmYoKTtcbiAgICAgIH1cbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gbnVsbDtcbiAgICAgIHF1ZXN0aW9uLnNpZ25hdHVyZVBhZCA9IG51bGw7XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcbn1cblxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaW5pdChTdXJ2ZXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2lnbmF0dXJlX3BhZC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlNpZ25hdHVyZVBhZFwiLFwiY29tbW9uanMyXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJjb21tb25qc1wiOlwic2lnbmF0dXJlX3BhZFwiLFwiYW1kXCI6XCJzaWduYXR1cmVfcGFkXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsImltcG9ydCBTb3J0YWJsZSBmcm9tIFwic29ydGFibGVqc1wiO1xuXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xuICB2YXIgd2lkZ2V0ID0ge1xuICAgIG5hbWU6IFwic29ydGFibGVsaXN0XCIsXG4gICAgdGl0bGU6IFwiU29ydGFibGUgbGlzdFwiLFxuICAgIGljb25OYW1lOiBcImljb24tc29ydGFibGVqc1wiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgU29ydGFibGUgIT0gXCJ1bmRlZmluZWRcIjtcbiAgICB9LFxuICAgIGRlZmF1bHRKU09OOiB7IGNob2ljZXM6IFtcIkl0ZW0gMVwiLCBcIkl0ZW0gMlwiLCBcIkl0ZW0gM1wiXSB9LFxuICAgIHJvb3RTdHlsZTogXCJ3aWR0aDoxMDAlOlwiLFxuICAgIGFyZWFTdHlsZTpcbiAgICAgIFwiYm9yZGVyOiAxcHggc29saWQgIzFhYjM5NDsgd2lkdGg6MTAwJTsgbWluLWhlaWdodDo1MHB4OyBtYXJnaW4tdG9wOjEwcHg7XCIsXG4gICAgaXRlbVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6IzFhYjM5NDtjb2xvcjojZmZmO21hcmdpbjo1cHg7cGFkZGluZzoxMHB4O1wiLFxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJzb3J0YWJsZWxpc3RcIjtcbiAgICB9LFxuICAgIGh0bWxUZW1wbGF0ZTogXCI8ZGl2PjwvZGl2PlwiLFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFxuICAgICAgICBcInNvcnRhYmxlbGlzdFwiLFxuICAgICAgICBbXG4gICAgICAgICAgeyBuYW1lOiBcImhhc090aGVyXCIsIHZpc2libGU6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiBcInN0b3JlT3RoZXJzQXNDb21tZW50XCIsIHZpc2libGU6IGZhbHNlIH1cbiAgICAgICAgXSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCJjaGVja2JveFwiXG4gICAgICApO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJzb3J0YWJsZWxpc3RcIiwge1xuICAgICAgICBuYW1lOiBcImVtcHR5VGV4dFwiLFxuICAgICAgICBkZWZhdWx0OiBcIk1vdmUgaXRlbXMgaGVyZS5cIlxuICAgICAgfSk7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInNvcnRhYmxlbGlzdFwiLCB7XG4gICAgICAgIG5hbWU6IFwidXNlRGVmYXVsdFRoZW1lXCIsXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoIXF1ZXN0aW9uLnVzZURlZmF1bHRUaGVtZSkge1xuICAgICAgICBzZWxmLnJvb3RTdHlsZSA9IFwiXCI7XG4gICAgICAgIHNlbGYuaXRlbVN0eWxlID0gXCJcIjtcbiAgICAgICAgc2VsZi5hcmVhU3R5bGUgPSBcIlwiO1xuICAgICAgfVxuICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IHNlbGYucm9vdFN0eWxlO1xuICAgICAgZWwuY2xhc3NOYW1lID0gXCJzanMtc29ydGFibGVqcy1yb290XCI7XG4gICAgICB2YXIgc291cmNlLCByZXN1bHQ7XG4gICAgICB2YXIgcmVzdWx0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdmFyIGVtcHR5RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHZhciBzb3VyY2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIHJlc3VsdEVsLnN0eWxlLmNzc1RleHQgPSBzZWxmLmFyZWFTdHlsZTtcbiAgICAgIHJlc3VsdEVsLmNsYXNzTmFtZSA9IFwic2pzLXNvcnRhYmxlanMtcmVzdWx0XCI7XG5cbiAgICAgIGVtcHR5RWwuaW5uZXJIVE1MID0gcXVlc3Rpb24uZW1wdHlUZXh0O1xuICAgICAgcmVzdWx0RWwuYXBwZW5kQ2hpbGQoZW1wdHlFbCk7XG5cbiAgICAgIHNvdXJjZUVsLnN0eWxlLmNzc1RleHQgPSBzZWxmLmFyZWFTdHlsZTtcbiAgICAgIHNvdXJjZUVsLmNsYXNzTmFtZSA9IFwic2pzLXNvcnRhYmxlanMtc291cmNlXCI7XG5cbiAgICAgIGVsLmFwcGVuZENoaWxkKHJlc3VsdEVsKTtcbiAgICAgIGVsLmFwcGVuZENoaWxkKHNvdXJjZUVsKTtcbiAgICAgIHZhciBoYXNWYWx1ZUluUmVzdWx0cyA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICB2YXIgcmVzID0gcXVlc3Rpb24udmFsdWU7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZXMpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHJlc1tpXSA9PSB2YWwpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG4gICAgICB2YXIgYWRkQ2hvaWNlVG9XaWRnZXQgPSBmdW5jdGlvbihjaG9pY2UsIGluUmVzdWx0cykge1xuICAgICAgICB2YXIgc3JjRWwgPSBpblJlc3VsdHMgPyByZXN1bHRFbCA6IHNvdXJjZUVsO1xuICAgICAgICB2YXIgbmV3RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdFbC5pbm5lckhUTUwgPVxuICAgICAgICAgIFwiPGRpdiBjbGFzcz0nc2pzLXNvcnRhYmxlanMtaXRlbScgc3R5bGU9J1wiICtcbiAgICAgICAgICBzZWxmLml0ZW1TdHlsZSArXG4gICAgICAgICAgXCInPlwiICtcbiAgICAgICAgICBjaG9pY2UudGV4dCArXG4gICAgICAgICAgXCI8L2Rpdj5cIjtcbiAgICAgICAgbmV3RWwuZGF0YXNldFtcInZhbHVlXCJdID0gY2hvaWNlLnZhbHVlO1xuICAgICAgICBzcmNFbC5hcHBlbmRDaGlsZChuZXdFbCk7XG4gICAgICB9O1xuICAgICAgdmFyIGdldENob2ljZXNOb3RJblJlc3VsdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICBxdWVzdGlvbi5hY3RpdmVDaG9pY2VzLmZvckVhY2goZnVuY3Rpb24oY2hvaWNlKSB7XG4gICAgICAgICAgaWYgKCFoYXNWYWx1ZUluUmVzdWx0cyhjaG9pY2UudmFsdWUpKSB7XG4gICAgICAgICAgICByZXMucHVzaChjaG9pY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9O1xuICAgICAgdmFyIGdldENob2ljZXNJblJlc3VsdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICB2YXIgdmFsID0gcXVlc3Rpb24udmFsdWU7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWwpKSByZXR1cm4gcmVzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpdGVtID0gU3VydmV5Lkl0ZW1WYWx1ZS5nZXRJdGVtQnlWYWx1ZShcbiAgICAgICAgICAgIHF1ZXN0aW9uLmFjdGl2ZUNob2ljZXMsXG4gICAgICAgICAgICB2YWxbaV1cbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICghIWl0ZW0pIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfTtcbiAgICAgIHZhciBpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSA9IGZhbHNlO1xuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUpIHJldHVybjtcbiAgICAgICAgcmVzdWx0RWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgcmVzdWx0RWwuYXBwZW5kQ2hpbGQoZW1wdHlFbCk7XG4gICAgICAgIHNvdXJjZUVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHZhciBub3RJblJlc3VsdHMgPSBnZXRDaG9pY2VzTm90SW5SZXN1bHRzKCk7XG4gICAgICAgIHZhciBpblJlc3VsdHMgPSBnZXRDaG9pY2VzSW5SZXN1bHRzKCk7XG4gICAgICAgIGVtcHR5RWwuc3R5bGUuZGlzcGxheSA9IGluUmVzdWx0cy5sZW5ndGggPiAwID8gXCJub25lXCIgOiBcIlwiO1xuICAgICAgICBpblJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbihjaG9pY2UpIHtcbiAgICAgICAgICBhZGRDaG9pY2VUb1dpZGdldChjaG9pY2UsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbm90SW5SZXN1bHRzLmZvckVhY2goZnVuY3Rpb24oY2hvaWNlKSB7XG4gICAgICAgICAgYWRkQ2hvaWNlVG9XaWRnZXQoY2hvaWNlLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJlc3VsdCA9IHF1ZXN0aW9uLnJlc3VsdEVsID0gU29ydGFibGUuY3JlYXRlKHJlc3VsdEVsLCB7XG4gICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICBkaXNhYmxlZDogcXVlc3Rpb24uaXNSZWFkT25seSxcbiAgICAgICAgZ3JvdXA6IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgIG9uU29ydDogZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgIGlmIChyZXN1bHRFbC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGVtcHR5RWwuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVtcHR5RWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRFbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdEVsLmNoaWxkcmVuW2ldLmRhdGFzZXQudmFsdWUgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJlc3VsdEVsLmNoaWxkcmVuW2ldLmRhdGFzZXQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSA9IHRydWU7XG4gICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSByZXN1bHQ7XG4gICAgICAgICAgaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzb3VyY2UgPSBxdWVzdGlvbi5zb3VyY2VFbCA9IFNvcnRhYmxlLmNyZWF0ZShzb3VyY2VFbCwge1xuICAgICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgICAgZGlzYWJsZWQ6IHF1ZXN0aW9uLmlzUmVhZE9ubHksXG4gICAgICAgIGdyb3VwOiBxdWVzdGlvbi5uYW1lXG4gICAgICB9KTtcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcbiAgICAgICAgICByZXN1bHQub3B0aW9ucy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgc291cmNlLm9wdGlvbnMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5vcHRpb25zLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgc291cmNlLm9wdGlvbnMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xuICAgIH0sXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgcXVlc3Rpb24ucmVzdWx0RWwuZGVzdHJveSgpO1xuICAgICAgcXVlc3Rpb24uc291cmNlRWwuZGVzdHJveSgpO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NvcnRhYmxlanMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU29ydGFibGVcIixcImNvbW1vbmpzMlwiOlwic29ydGFibGVqc1wiLFwiY29tbW9uanNcIjpcInNvcnRhYmxlanNcIixcImFtZFwiOlwic29ydGFibGVqc1wifVxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xuICB2YXIgd2lkZ2V0ID0ge1xuICAgIG5hbWU6IFwiZWRpdG9yXCIsXG4gICAgdGl0bGU6IFwiRWRpdG9yXCIsXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1lZGl0b3JcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIENLRURJVE9SICE9IFwidW5kZWZpbmVkXCI7XG4gICAgfSxcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiZWRpdG9yXCI7XG4gICAgfSxcbiAgICBodG1sVGVtcGxhdGU6XG4gICAgICBcIjx0ZXh0YXJlYSByb3dzPScxMCcgY29scz0nODAnIHN0eWxlOiB7d2lkdGg6JzEwMCUnfT48L3RleHRhcmVhPlwiLFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiZWRpdG9yXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJlZGl0b3JcIiwge1xuICAgICAgICBuYW1lOiBcImhlaWdodFwiLFxuICAgICAgICBkZWZhdWx0OiAzMDBcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgQ0tFRElUT1IuZWRpdG9yQ29uZmlnID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5sYW5ndWFnZSA9IFwiZXNcIjtcbiAgICAgICAgY29uZmlnLmhlaWdodCA9IHF1ZXN0aW9uLmhlaWdodDtcbiAgICAgICAgY29uZmlnLnRvb2xiYXJDYW5Db2xsYXBzZSA9IHRydWU7XG4gICAgICB9O1xuICAgICAgdmFyIGVkaXRvciA9IENLRURJVE9SLnJlcGxhY2UoZWwpO1xuICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzLmVkaXRvcjEuY29uZmlnLnJlYWRPbmx5ID0gcXVlc3Rpb24uaXNSZWFkT25seTtcblxuICAgICAgdmFyIGlzVmFsdWVDaGFuZ2luZyA9IGZhbHNlO1xuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaXNWYWx1ZUNoYW5naW5nKSByZXR1cm47XG4gICAgICAgIGVkaXRvci5zZXREYXRhKHF1ZXN0aW9uLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICBlZGl0b3Iub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlzVmFsdWVDaGFuZ2luZyA9IHRydWU7XG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZWRpdG9yLmdldERhdGEoKTtcbiAgICAgICAgaXNWYWx1ZUNoYW5naW5nID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAocXVlc3Rpb24uaXNSZWFkT25seSkge1xuICAgICAgICAgIGVkaXRvci5zZXRSZWFkT25seSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlZGl0b3Iuc2V0UmVhZE9ubHkoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcbn1cblxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaW5pdChTdXJ2ZXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2stZWRpdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTQiLCJmdW5jdGlvbiBpbml0KFN1cnZleSwgJCkge1xuICAkID0gJCB8fCB3aW5kb3cuJDtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBuYW1lOiBcImF1dG9jb21wbGV0ZVwiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLmVhc3lBdXRvY29tcGxldGU7XG4gICAgfSxcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwidGV4dFwiO1xuICAgIH0sXG4gICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcbiAgICAgIGlmIChcbiAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZmluZFByb3BlcnR5KFwidGV4dFwiLCBcImNob2ljZXNcIikgIT09IG51bGwgfHxcbiAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZmluZFByb3BlcnR5KFwidGV4dFwiLCBcImNob2ljZXNCeVVybFwiKSAhPT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwidGV4dFwiLCBcImNob2ljZXM6aXRlbXZhbHVlc1wiKTtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwidGV4dFwiLCB7XG4gICAgICAgIG5hbWU6IFwiY2hvaWNlc0J5VXJsOnJlc3RmdWxsXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJDaG9pY2VzUmVzdGZ1bGxcIixcbiAgICAgICAgb25HZXRWYWx1ZTogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouY2hvaWNlc0J5VXJsICYmIG9iai5jaG9pY2VzQnlVcmwuZ2V0RGF0YSgpO1xuICAgICAgICB9LFxuICAgICAgICBvblNldFZhbHVlOiBmdW5jdGlvbihvYmosIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKCFvYmouY2hvaWNlc0J5VXJsKSB7XG4gICAgICAgICAgICBvYmouY2hvaWNlc0J5VXJsID0gbmV3IFN1cnZleS5DaG9pY2VzUmVzdGZ1bGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb2JqLmNob2ljZXNCeVVybC5zZXREYXRhKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJpbnB1dFwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcImlucHV0XCIpO1xuICAgICAgJGVsLnBhcmVudHMoXCIuc3ZfcXN0blwiKVswXS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIGRhdGE6IChxdWVzdGlvbi5jaG9pY2VzIHx8IFtdKS5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtLnRleHQ7XG4gICAgICAgIH0pLFxuICAgICAgICBhZGp1c3RXaWR0aDogZmFsc2UsXG4gICAgICAgIGxpc3Q6IHtcbiAgICAgICAgICBzb3J0OiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHF1ZXN0aW9uLnBsYWNlaG9sZGVyXG4gICAgICB9O1xuICAgICAgaWYgKCEhcXVlc3Rpb24uY2hvaWNlc0J5VXJsKSB7XG4gICAgICAgIG9wdGlvbnMudXJsID0gZnVuY3Rpb24ocGhyYXNlKSB7XG4gICAgICAgICAgcmV0dXJuIHF1ZXN0aW9uLmNob2ljZXNCeVVybC51cmw7XG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbnMuZ2V0VmFsdWUgPSBxdWVzdGlvbi5jaG9pY2VzQnlVcmwudmFsdWVOYW1lO1xuICAgICAgICAvLyBvcHRpb25zLmFqYXhTZXR0aW5ncyA9IHtcbiAgICAgICAgLy8gICBkYXRhVHlwZTogXCJqc29ucFwiXG4gICAgICAgIC8vIH07XG4gICAgICB9XG4gICAgICAkZWwuZWFzeUF1dG9jb21wbGV0ZShvcHRpb25zKTtcblxuICAgICAgJGVsWzBdLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcXVlc3Rpb24uY3VzdG9tV2lkZ2V0RGF0YS5pc05lZWRSZW5kZXIgPSB0cnVlO1xuICAgICAgfTtcbiAgICAgIHZhciB1cGRhdGVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRlbFswXS52YWx1ZSA9XG4gICAgICAgICAgdHlwZW9mIHF1ZXN0aW9uLnZhbHVlID09PSBcInVuZGVmaW5lZFwiID8gXCJcIiA6IHF1ZXN0aW9uLnZhbHVlO1xuICAgICAgfTtcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlSGFuZGxlcjtcbiAgICAgIHVwZGF0ZUhhbmRsZXIoKTtcbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIC8vIHZhciAkZWwgPSAkKGVsKS5maW5kKFwiaW5wdXRcIik7XG4gICAgICAvLyAkZWwuYXV0b2NvbXBsZXRlKFwiZGVzdHJveVwiKTtcbiAgICB9XG4gIH07XG5cbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJ0eXBlXCIpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSwgd2luZG93LiQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWFzeS1hdXRvY29tcGxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxMyIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XG4gIHZhciB3aWRnZXQgPSB7XG4gICAgc2V0dGluZ3M6IHtcbiAgICAgIHN1cHBvcnRlZFR5cGVzOiBbXCJyYWRpb2dyb3VwXCIsIFwiY2hlY2tib3hcIiwgXCJib29sZWFuXCJdLFxuICAgICAgcmFkaW9ncm91cDoge1xuICAgICAgICByb290Q2xhc3M6IFwicHJldHR5IHAtZGVmYXVsdCBwLXJvdW5kXCIsXG4gICAgICAgIGlucHV0VHlwZTogXCJyYWRpb1wiLFxuICAgICAgICBzdGF0ZXM6IFt7IHN0YXRlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzXCIsIGFkZE9uOiBcIlwiIH1dXG4gICAgICB9LFxuICAgICAgY2hlY2tib3g6IHtcbiAgICAgICAgcm9vdENsYXNzOiBcInByZXR0eSBwLWRlZmF1bHRcIixcbiAgICAgICAgaW5wdXRUeXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIHN0YXRlczogW3sgc3RhdGVDbGFzczogXCJzdGF0ZSBwLXN1Y2Nlc3NcIiwgYWRkT246IFwiXCIgfV1cbiAgICAgIH0sXG4gICAgICBib29sZWFuOiB7XG4gICAgICAgIHJvb3RDbGFzczogXCJwcmV0dHkgcC1pY29uIHAtZGVmYXVsdCBwLWhhcy1pbmRldGVybWluYXRlXCIsXG4gICAgICAgIGlucHV0VHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICBzdGF0ZXM6IFtcbiAgICAgICAgICB7IHN0YXRlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzXCIsIGFkZE9uOiBcIlwiIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGVDbGFzczogXCJzdGF0ZSBwLXN1Y2Nlc3MgcC1pcy1pbmRldGVybWluYXRlXCIsXG4gICAgICAgICAgICBpY29uQ2xhc3M6IFwiaWNvbiBtZGkgbWRpLW1pbnVzXCIsXG4gICAgICAgICAgICBhZGRPbjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgbmFtZTogXCJwcmV0dHktY2hlY2tib3hcIixcbiAgICBhY3RpdmF0ZWRCeTogXCJwcm9wZXJ0eVwiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxmaWVsZHNldD48L2ZpZWxkc2V0PlwiLFxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgICAgdmFyIGlzRml0QnlUeXBlID1cbiAgICAgICAgd2lkZ2V0LnNldHRpbmdzLnN1cHBvcnRlZFR5cGVzLmluZGV4T2YocXVlc3Rpb24uZ2V0VHlwZSgpKSAhPT0gLTE7XG5cbiAgICAgIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT09IFwicHJvcGVydHlcIikge1xuICAgICAgICByZXR1cm4gcXVlc3Rpb25bXCJyZW5kZXJBc1wiXSA9PT0gXCJwcmV0dHljaGVja2JveFwiICYmIGlzRml0QnlUeXBlO1xuICAgICAgfSBlbHNlIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT09IFwidHlwZVwiKSB7XG4gICAgICAgIHJldHVybiBpc0ZpdEJ5VHlwZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMud2lkZ2V0SXNMb2FkZWQoKSkge1xuICAgICAgICB3aWRnZXQuYWN0aXZhdGVkQnkgPSB2YWx1ZTtcbiAgICAgICAgd2lkZ2V0LnNldHRpbmdzLnN1cHBvcnRlZFR5cGVzLmZvckVhY2goZnVuY3Rpb24oc3VwcG9ydGVkVHlwZSkge1xuICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLnJlbW92ZVByb3BlcnR5KHN1cHBvcnRlZFR5cGUsIFwicmVuZGVyQXNcIik7XG5cbiAgICAgICAgICBpZiAodmFsdWUgPT09IFwicHJvcGVydHlcIikge1xuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoc3VwcG9ydGVkVHlwZSwge1xuICAgICAgICAgICAgICBuYW1lOiBcInJlbmRlckFzXCIsXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFwic3RhbmRhcmRcIixcbiAgICAgICAgICAgICAgY2hvaWNlczogW1wic3RhbmRhcmRcIiwgXCJwcmV0dHljaGVja2JveFwiXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzRGVmYXVsdFJlbmRlcjogZmFsc2UsXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbGVtZW50KSB7XG4gICAgICB2YXIgaXRlbUlucHV0cyA9IHt9O1xuICAgICAgdmFyIHF1ZXN0aW9uVHlwZSA9IHF1ZXN0aW9uLmdldFR5cGUoKTtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5zZXR0aW5nc1txdWVzdGlvblR5cGVdO1xuICAgICAgdmFyIGNoZWNrYm94VHlwZSA9IHF1ZXN0aW9uVHlwZSA9PT0gXCJjaGVja2JveFwiO1xuICAgICAgdmFyIHJhZGlvZ3JvdXBUeXBlID0gcXVlc3Rpb25UeXBlID09PSBcInJhZGlvZ3JvdXBcIjtcbiAgICAgIHZhciBib29sZWFuVHlwZSA9IHF1ZXN0aW9uVHlwZSA9PT0gXCJib29sZWFuXCI7XG5cbiAgICAgIHZhciBpbkNoYW5nZUhhbmRsZXIgPSBmYWxzZTtcbiAgICAgIHZhciBjaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaW5DaGFuZ2VIYW5kbGVyID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gYXJndW1lbnRzWzBdLnRhcmdldDtcbiAgICAgICAgICB2YXIgdGFyZ2V0VmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgICAgICAgdmFyIHRhcmdldENoZWNrZWQgPSB0YXJnZXQuY2hlY2tlZDtcblxuICAgICAgICAgIGlmIChjaGVja2JveFR5cGUpIHtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvblZhbHVlID0gcXVlc3Rpb24udmFsdWUgfHwgW107XG4gICAgICAgICAgICB2YXIgdmFsdWVJbmRleCA9IHF1ZXN0aW9uVmFsdWUuaW5kZXhPZih0YXJnZXRWYWx1ZSk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Q2hlY2tlZCkge1xuICAgICAgICAgICAgICBpZiAodmFsdWVJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBxdWVzdGlvblZhbHVlLnB1c2godGFyZ2V0VmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAodmFsdWVJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBxdWVzdGlvblZhbHVlLnNwbGljZSh2YWx1ZUluZGV4LCAxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHF1ZXN0aW9uVmFsdWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChyYWRpb2dyb3VwVHlwZSkge1xuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSB0YXJnZXRWYWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSB0YXJnZXRDaGVja2VkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpbkNoYW5nZUhhbmRsZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIGl0ZW1XaWR0aCA9XG4gICAgICAgIHF1ZXN0aW9uLmNvbENvdW50ID4gMCA/IDEwMCAvIHF1ZXN0aW9uLmNvbENvdW50ICsgXCIlXCIgOiBcIlwiO1xuXG4gICAgICB2YXIgY2hvaWNlcyA9IGJvb2xlYW5UeXBlXG4gICAgICAgID8gW3sgbG9jVGV4dDogcXVlc3Rpb24ubG9jVGl0bGUsIHZhbHVlOiAhIXF1ZXN0aW9uLnZhbHVlIH1dXG4gICAgICAgIDogcXVlc3Rpb24uY2hvaWNlcztcbiAgICAgIGNob2ljZXMuZm9yRWFjaChmdW5jdGlvbihjaG9pY2VJdGVtLCBpbmRleCkge1xuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0LnR5cGUgPSBvcHRpb25zLmlucHV0VHlwZTtcbiAgICAgICAgaW5wdXQubmFtZSA9IHF1ZXN0aW9uLm5hbWUgKyAoY2hlY2tib3hUeXBlID8gXCJcIiArIGluZGV4IDogXCJcIik7XG4gICAgICAgIGlucHV0Lm9uY2hhbmdlID0gY2hhbmdlSGFuZGxlcjtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBjaG9pY2VJdGVtLnZhbHVlO1xuXG4gICAgICAgIGlmIChib29sZWFuVHlwZSkge1xuICAgICAgICAgIGlucHV0LmluZGV0ZXJtaW5hdGUgPSBxdWVzdGlvbi5kZWZhdWx0VmFsdWUgPT09IFwiaW5kZXRlcm1pbmF0ZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbnRyb2xSb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udHJvbFJvb3QuY2xhc3NOYW1lID0gb3B0aW9ucy5yb290Q2xhc3M7XG4gICAgICAgIGNvbnRyb2xSb290LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICBvcHRpb25zLnN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAgdmFyIHN0YXRlUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgc3RhdGVSb290LmNsYXNzTmFtZSA9IHN0YXRlLnN0YXRlQ2xhc3M7XG4gICAgICAgICAgaWYgKCEhc3RhdGUuaWNvbkNsYXNzKSB7XG4gICAgICAgICAgICB2YXIgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBzdGF0ZS5pY29uQ2xhc3M7XG4gICAgICAgICAgICBzdGF0ZVJvb3QuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgIGlmIChjaG9pY2VJdGVtLmxvY1RleHQuaGFzSHRtbCkge1xuICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gY2hvaWNlSXRlbS5sb2NUZXh0Lmh0bWw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY2hvaWNlSXRlbS5sb2NUZXh0LnRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlUm9vdC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgICBjb250cm9sUm9vdC5hcHBlbmRDaGlsZChzdGF0ZVJvb3QpO1xuICAgICAgICAgIGlmICghIXN0YXRlLmFkZE9uKSB7XG4gICAgICAgICAgICBzdGF0ZVJvb3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBzdGF0ZS5hZGRPbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgaXRlbVJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtUm9vdC5jbGFzc05hbWUgPSBcInN2X2N3X3ByZXR0eV9jaGVja2JveF9cIiArIHF1ZXN0aW9uVHlwZTtcbiAgICAgICAgaXRlbVJvb3Quc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIGl0ZW1Sb290LnN0eWxlLndpZHRoID0gaXRlbVdpZHRoO1xuICAgICAgICBpdGVtUm9vdC5hcHBlbmRDaGlsZChjb250cm9sUm9vdCk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtUm9vdCk7XG5cbiAgICAgICAgaXRlbUlucHV0c1tjaG9pY2VJdGVtLnZhbHVlXSA9IGlucHV0O1xuICAgICAgfSk7XG5cbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICBpZiAoIWluQ2hhbmdlSGFuZGxlcikge1xuICAgICAgICAgIHZhciBjaGVja2VkSXRlbXMgPSBuZXdWYWx1ZSB8fCBbXTtcbiAgICAgICAgICBpZiAocmFkaW9ncm91cFR5cGUpIHtcbiAgICAgICAgICAgIGNoZWNrZWRJdGVtcyA9IFtuZXdWYWx1ZV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgT2JqZWN0LnZhbHVlcyhpdGVtSW5wdXRzKS5mb3JFYWNoKGZ1bmN0aW9uKGlucHV0SXRlbSkge1xuICAgICAgICAgICAgaWYgKGNoZWNrZWRJdGVtcy5pbmRleE9mKGlucHV0SXRlbS52YWx1ZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgIGlucHV0SXRlbS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpbnB1dEl0ZW0ucmVtb3ZlQXR0cmlidXRlKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciByZWFkT25seUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhpdGVtSW5wdXRzKS5mb3JFYWNoKGZ1bmN0aW9uKGlucHV0SXRlbSkge1xuICAgICAgICAgIGlmIChxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XG4gICAgICAgICAgICBpbnB1dEl0ZW0uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0SXRlbS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IHJlYWRPbmx5SGFuZGxlcjtcbiAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcihxdWVzdGlvbi52YWx1ZSk7XG4gICAgICByZWFkT25seUhhbmRsZXIoKTtcbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcInByb3BlcnR5XCIpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wcmV0dHktY2hlY2tib3guanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA5IiwidmFyIFNsaWRlciA9IHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpO1xuXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xuICB2YXIgd2lkZ2V0ID0ge1xuICAgIG5hbWU6IFwiYm9vdHN0cmFwc2xpZGVyXCIsXG4gICAgdGl0bGU6IFwiQm9vdHN0cmFwIFNsaWRlclwiLFxuICAgIGljb25OYW1lOiBcImljb24tYm9vdHN0cmFwLXNsaWRlclwiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgU2xpZGVyICE9PSBcInVuZGVmaW5lZFwiO1xuICAgIH0sXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImJvb3RzdHJhcHNsaWRlclwiO1xuICAgIH0sXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJib290c3RyYXBzbGlkZXJcIiwgW10sIG51bGwsIFwiZW1wdHlcIik7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwiYm9vdHN0cmFwc2xpZGVyXCIsIFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic3RlcDpudW1iZXJcIixcbiAgICAgICAgICBkZWZhdWx0OiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJhbmdlTWluOm51bWJlclwiLFxuICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicmFuZ2VNYXg6bnVtYmVyXCIsXG4gICAgICAgICAgZGVmYXVsdDogMTAwXG4gICAgICAgIH1cbiAgICAgIF0pO1xuICAgIH0sXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyIGlucHV0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBpbnB1dEVsLmlkID0gcXVlc3Rpb24uaWQ7XG4gICAgICBpbnB1dEVsLnR5cGUgPSBcInRleHRcIjtcbiAgICAgIGlucHV0RWwuc2V0QXR0cmlidXRlKFwiZGF0YS1zbGlkZXItaWRcIiwgcXVlc3Rpb24ubmFtZSArIFwiX1wiICsgcXVlc3Rpb24uaWQpO1xuICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlci1taW5cIiwgcXVlc3Rpb24ucmFuZ2VNaW4pO1xuICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlci1tYXhcIiwgcXVlc3Rpb24ucmFuZ2VNYXgpO1xuICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlci1zdGVwXCIsIHF1ZXN0aW9uLnN0ZXApO1xuICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwiZGF0YS1zbGlkZXItdmFsdWVcIixcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgfHwgcXVlc3Rpb24ucmFuZ2VNaW5cbiAgICAgICk7XG4gICAgICBlbC5hcHBlbmRDaGlsZChpbnB1dEVsKTtcbiAgICAgIHZhciBzbGlkZXIgPSBuZXcgU2xpZGVyKGlucHV0RWwsIHtcbiAgICAgICAgaWQ6IHF1ZXN0aW9uLm5hbWUgKyBcIl9cIiArIHF1ZXN0aW9uLmlkLFxuICAgICAgICBtaW46IHF1ZXN0aW9uLnJhbmdlTWluLFxuICAgICAgICBtYXg6IHF1ZXN0aW9uLnJhbmdlTWF4LFxuICAgICAgICBzdGVwOiBxdWVzdGlvbi5zdGVwLFxuICAgICAgICBlbmFibGVkOiAhcXVlc3Rpb24uaXNSZWFkT25seSxcbiAgICAgICAgdmFsdWU6IHF1ZXN0aW9uLnZhbHVlIHx8IHF1ZXN0aW9uLnJhbmdlTWluXG4gICAgICB9KTtcblxuICAgICAgc2xpZGVyLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKHZhbHVlT2JqKSB7XG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gc2xpZGVyLmdldFZhbHVlKCk7XG4gICAgICB9KTtcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2xpZGVyLnNldFZhbHVlKHF1ZXN0aW9uLnZhbHVlIHx8IHF1ZXN0aW9uLnJhbmdlTWluKTtcbiAgICAgIH07XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAocXVlc3Rpb24uaXNSZWFkT25seSkge1xuICAgICAgICAgIHNsaWRlci5kaXNhYmxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGVyLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcXVlc3Rpb24uYm9vdHN0cmFwU2xpZGVyID0gc2xpZGVyO1xuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICBxdWVzdGlvbi5ib290c3RyYXBTbGlkZXIuZGVzdHJveSgpO1xuICAgICAgcXVlc3Rpb24uYm9vdHN0cmFwU2xpZGVyID0gbnVsbDtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ib290c3RyYXAtc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJib290c3RyYXAtc2xpZGVyXCIsXCJjb21tb25qc1wiOlwiYm9vdHN0cmFwLXNsaWRlclwiLFwiYW1kXCI6XCJib290c3RyYXAtc2xpZGVyXCJ9XG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsImltcG9ydCBSZWNvcmRSVEMgZnJvbSBcInJlY29yZHJ0Y1wiO1xuXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xuICB2YXIgd2lkZ2V0ID0ge1xuXHRcbiAgICBuYW1lOiBcIm1pY3JvcGhvbmVcIixcbiAgICB0aXRsZTogXCJNaWNyb3Bob25lXCIsXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1taWNyb3Bob25lXCIsXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBSZWNvcmRSVEMgIT0gXCJ1bmRlZmluZWRcIjtcbiAgICB9LFxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJtaWNyb3Bob25lXCI7XG4gICAgfSxcbiAgICBodG1sVGVtcGxhdGU6XG5cdFx0XCI8ZGl2PlwiK1xuXHRcdFwiPGJ1dHRvbiB0eXBlPSdidXR0b24nICB0aXRsZT0nUmVjb3JkJz48aSBjbGFzcz0nZmEgZmEtbWljcm9waG9uZScgYXJpYS1oaWRkZW49J3RydWUnPjwvaT48L2J1dHRvbj5cIisgXG5cdFx0XCImbmJzcDs8YnV0dG9uIHR5cGU9J2J1dHRvbicgdGl0bGU9J1NhdmUnPjxpIGNsYXNzPSdmYSBmYS1jbG91ZCcgYXJpYS1oaWRkZW49J3RydWUnPjwvaT48L2J1dHRvbj5cIitcblx0XHRcIiZuYnNwOzxhdWRpbyBzdHlsZT0nXCIrXG5cdFx0XCJwb3NpdGlvbjpyZWxhdGl2ZTsgXCIrXG5cdFx0XCJ0b3A6MTZweDsgXCIrXG5cdFx0XCJsZWZ0OjEwcHg7IFwiK1xuXHRcdFwiaGVpZ2h0OjM1cHg7XCIrXG5cdFx0XCItbW96LWJveC1zaGFkb3c6IDJweCAycHggNHB4IDBweCAjMDA2NzczO1wiK1xuXHRcdFwiLXdlYmtpdC1ib3gtc2hhZG93OiAgMnB4IDJweCA0cHggMHB4ICMwMDY3NzM7XCIrXG5cdFx0XCJib3gtc2hhZG93OiAycHggMnB4IDRweCAwcHggIzAwNjc3MztcIitcblx0XHRcIicgXCIrXG5cdFx0XCJjb250cm9scz0ndHJ1ZScgPlwiK1xuXHRcdFwiPC9hdWRpbz5cIitcblx0XHRcIjwvZGl2PlwiLFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibWljcm9waG9uZVwiLCBbXSwgbnVsbCwgXCJlbXB0eVwiKTtcbiAgICB9LFxuXHRcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICB2YXIgcm9vdFdpZGdldCA9IHRoaXM7XG5cdCAgdmFyIGJ1dHRvblN0YXJ0RWwgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJ1dHRvblwiKVswXTtcblx0ICB2YXIgYnV0dG9uU3RvcEVsID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJidXR0b25cIilbMV07XG5cdCAgdmFyIGF1ZGlvRWwgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImF1ZGlvXCIpWzBdO1xuXHQgXG4vLy8vLy8vLy8vICBSZWNvcmRSVEMgbG9naWNcdFxuXHQgIFxuXHQgIHZhciBzdWNjZXNzQ2FsbGJhY2sgPSBmdW5jdGlvbihzdHJlYW0pIHtcblx0XHR2YXIgb3B0aW9ucz17XG5cdFx0XHR0eXBlOiAnYXVkaW8nLFxuXHRcdFx0bWltZVR5cGU6ICdhdWRpby93ZWJtJyxcblx0XHRcdGF1ZGlvQml0c1BlclNlY29uZDogNDQxMDAsXG5cdFx0XHRzYW1wbGVSYXRlOiA0NDEwMCwgXG5cdFx0XHRidWZmZXJTaXplOiAxNjM4NCwgXG5cdFx0XHRudW1iZXJPZkF1ZGlvQ2hhbm5lbHM6IDFcblx0XHR9OyAgXG5cdFx0Y29uc29sZS5sb2coXCJzdWNjZXNzQ2FsbGJhY2tcIik7XG5cdFx0cXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtID0gc3RyZWFtO1xuXHRcdHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEMgPSBSZWNvcmRSVEMocXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtLCBvcHRpb25zKTtcblx0XHRpZih0eXBlb2YgcXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQyAhPSBcInVuZGVmaW5lZFwiKXtcblx0XHRcdGNvbnNvbGUubG9nKFwic3RhcnRSZWNvcmRpbmdcIik7XG5cdFx0XHRxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDLnN0YXJ0UmVjb3JkaW5nKCk7XG5cdFx0fVxuXHQgIH07XG5cblx0ICB2YXIgZXJyb3JDYWxsYmFjaz1mdW5jdGlvbigpIHtcblx0XHRhbGVydCgnTm8gbWljcm9waG9uZScpO1xuXHRcdHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEM9dW5kZWZpbmVkO1xuXHRcdHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbT11bmRlZmluZWQ7XG5cdCAgfTtcblxuXHQgIHZhciBwcm9jZXNzQXVkaW89IGZ1bmN0aW9uKGF1ZGlvVmlkZW9XZWJNVVJMKSB7XG5cdFx0Y29uc29sZS5sb2coXCJwcm9jZXNzQXVkaW9cIik7XG5cdFx0dmFyIHJlY29yZGVkQmxvYiA9IHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEMuZ2V0QmxvYigpO1xuXHRcdFxuXHRcdHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCl7XG5cdFx0ICB2YXIgZGF0YVVyaSA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cdFx0ICBjb25zb2xlLmxvZyhcImRhdGFVcmk6IFwiICtkYXRhVXJpKTtcblx0XHQgIHF1ZXN0aW9uLnZhbHVlID0gZGF0YVVyaTtcblx0XHQgIGF1ZGlvRWwuc3JjPWRhdGFVcmk7XG5cdFx0ICBcblx0XHQgIGNvbnNvbGUubG9nKFwiY2xlYW5pbmdcIik7XG5cdFx0ICBxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDPXVuZGVmaW5lZDtcblx0XHQgIHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbT11bmRlZmluZWQ7XG4gICAgICAgIH07XG4gICAgICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChyZWNvcmRlZEJsb2IpO1xuXHQgIH07XG5cbiAgICAgIHZhciBzdGFydFJlY29yZGluZz1mdW5jdGlvbigpIHtcblx0XHQgIFxuXHRcdCAvLyBlcmFzZSBwcmV2aW91cyBkYXRhIFxuXHRcdCBxdWVzdGlvbi52YWx1ZT11bmRlZmluZWQ7XG5cdFx0XG4gICAgICAgXHQvLyBpZiByZWNvcmRlciBvcGVuIG9uIGFub3RoZXIgcXVlc3Rpb25cdC0gdHJ5IHRvIHN0b3AgcmVjb3JkaW5nXHRcdFxuXHRcdGlmKHR5cGVvZiBxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDICE9IFwidW5kZWZpbmVkXCIpe1xuXHRcdFx0cXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQy5zdG9wUmVjb3JkaW5nKGRvTm90aGluZ0hhbmRsZXIpO1xuXHRcdFx0aWYodHlwZW9mIHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbSAhPSBcInVuZGVmaW5lZFwiKXtcblx0XHRcdFx0cXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuXHRcdFx0XHR0cmFjay5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XHQgXG5cdFx0dmFyIG1lZGlhQ29uc3RyYWludHMgPSB7XG5cdFx0ICB2aWRlbzogZmFsc2UsXG5cdFx0ICBhdWRpbzogdHJ1ZVxuXHRcdH07XG5cdFx0XG5cdFx0bmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuXHRcdFx0LmdldFVzZXJNZWRpYShtZWRpYUNvbnN0cmFpbnRzKVxuXHRcdFx0LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLmJpbmQodGhpcyksIGVycm9yQ2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgIH07XG5cblx0ICB2YXIgc3RvcFJlY29yZGluZz1mdW5jdGlvbigpIHtcblx0XHQgIGNvbnNvbGUubG9nKFwic3RvcFJlY29yZGluZ1wiKTtcblx0XHQgIGlmKHR5cGVvZiBxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDICE9IFwidW5kZWZpbmVkXCIpe1xuXHRcdFx0cXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQy5zdG9wUmVjb3JkaW5nKHByb2Nlc3NBdWRpby5iaW5kKHRoaXMpKTtcblx0XHRcdGlmKHR5cGVvZiBxdWVzdGlvbi5zdXJ2ZXkubXlzdHJlYW0gIT0gXCJ1bmRlZmluZWRcIil7XG5cdFx0XHRcdHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcblx0XHRcdFx0dHJhY2suc3RvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0ICB9XG5cdCAgfTtcblx0XG4vLy8vLy8vLy8vLy8vLyAgZW5kIFJUQyBsb2dpYyAvLy8vLy8vLy8vLy8vLy8vLy9cblx0ICBcblx0ICBpZiAoIXF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcbiAgICAgICAgYnV0dG9uU3RhcnRFbC5vbmNsaWNrID0gc3RhcnRSZWNvcmRpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b25TdGFydEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYnV0dG9uU3RhcnRFbCk7XG4gICAgICB9XG5cdCAgXG5cdCAgaWYgKCFxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XG4gICAgICAgIGJ1dHRvblN0b3BFbC5vbmNsaWNrID0gc3RvcFJlY29yZGluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvblN0b3BFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJ1dHRvblN0b3BFbCk7XG4gICAgICB9XG5cdCAgXG5cdCAgXG4gICAgICBhdWRpb0VsLnNyYz1xdWVzdGlvbi52YWx1ZVxuICAgICAgXG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIFxuICAgICAgfTtcblx0ICBcblx0ICB2YXIgZG9Ob3RoaW5nSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgIH07XG5cdCAgXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcbiAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xuXHQgIFxuICAgICBcbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidW5tb3VudCBtaWNyb3Bob25lIG5vIHJlY29yZCBcIik7XG4gICAgICBpZih0eXBlb2YgcXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQyAhPSBcInVuZGVmaW5lZFwiKXtcblx0XHRcdHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEMuc3RvcFJlY29yZGluZyhkb05vdGhpbmdIYW5kbGVyKTtcblx0XHRcdGlmKHR5cGVvZiBxdWVzdGlvbi5zdXJ2ZXkubXlzdHJlYW0gIT0gXCJ1bmRlZmluZWRcIil7XG5cdFx0XHRcdHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcblx0XHRcdFx0dHJhY2suc3RvcCgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRxdWVzdGlvbi52YWx1ZT11bmRlZmluZWQ7XG5cdFx0cXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQz11bmRlZmluZWQ7XG5cdFx0cXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtPXVuZGVmaW5lZDtcblx0ICAgfVxuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21pY3JvcGhvbmUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gTGFzdCB0aW1lIHVwZGF0ZWQ6IDIwMTgtMTItMjIgOTo1NzowMSBBTSBVVENcclxuXHJcbi8vIF9fX19fX19fX19fX19fX19cclxuLy8gUmVjb3JkUlRDIHY1LjUuMFxyXG5cclxuLy8gT3Blbi1Tb3VyY2VkOiBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTXVheiBLaGFuICAgICAtIHd3dy5NdWF6S2hhbi5jb21cclxuLy8gTUlUIExpY2Vuc2UgICAtIHd3dy5XZWJSVEMtRXhwZXJpbWVudC5jb20vbGljZW5jZVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gX19fX19fX19fX19fXHJcbi8vIFJlY29yZFJUQy5qc1xyXG5cclxuLyoqXHJcbiAqIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEN9IGlzIGEgV2ViUlRDIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgYXVkaW8vdmlkZW8gYXMgd2VsbCBhcyBzY3JlZW4gYWN0aXZpdHkgcmVjb3JkaW5nLiBJdCBzdXBwb3J0cyBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBBbmRyb2lkLCBhbmQgTWljcm9zb2Z0IEVkZ2UuIFBsYXRmb3JtczogTGludXgsIE1hYyBhbmQgV2luZG93cy4gXHJcbiAqIEBzdW1tYXJ5IFJlY29yZCBhdWRpbywgdmlkZW8gb3Igc2NyZWVuIGluc2lkZSB0aGUgYnJvd3Nlci5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIFJlY29yZFJUQ1xyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIHJlY29yZGVyID0gUmVjb3JkUlRDKG1lZGlhU3RyZWFtIG9yIFthcnJheU9mTWVkaWFTdHJlYW1dLCB7XHJcbiAqICAgICB0eXBlOiAndmlkZW8nLCAvLyBhdWRpbyBvciB2aWRlbyBvciBnaWYgb3IgY2FudmFzXHJcbiAqICAgICByZWNvcmRlclR5cGU6IE1lZGlhU3RyZWFtUmVjb3JkZXIgfHwgQ2FudmFzUmVjb3JkZXIgfHwgU3RlcmVvQXVkaW9SZWNvcmRlciB8fCBFdGNcclxuICogfSk7XHJcbiAqIHJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAqIEBzZWUgRm9yIGZ1cnRoZXIgaW5mb3JtYXRpb246XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBTaW5nbGUgbWVkaWEtc3RyZWFtIG9iamVjdCwgYXJyYXkgb2YgbWVkaWEtc3RyZWFtcywgaHRtbC1jYW52YXMtZWxlbWVudCwgZXRjLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge3R5cGU6XCJ2aWRlb1wiLCByZWNvcmRlclR5cGU6IE1lZGlhU3RyZWFtUmVjb3JkZXIsIGRpc2FibGVMb2dzOiB0cnVlLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHM6IDEsIGJ1ZmZlclNpemU6IDAsIHNhbXBsZVJhdGU6IDAsIGRlc2lyZWRTYW1wUmF0ZTogMTYwMDAsIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50LCBldGMufVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIFJlY29yZFJUQyhtZWRpYVN0cmVhbSwgY29uZmlnKSB7XHJcbiAgICBpZiAoIW1lZGlhU3RyZWFtKSB7XHJcbiAgICAgICAgdGhyb3cgJ0ZpcnN0IHBhcmFtZXRlciBpcyByZXF1aXJlZC4nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7XHJcbiAgICAgICAgdHlwZTogJ3ZpZGVvJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25maWcgPSBuZXcgUmVjb3JkUlRDQ29uZmlndXJhdGlvbihtZWRpYVN0cmVhbSwgY29uZmlnKTtcclxuXHJcbiAgICAvLyBhIHJlZmVyZW5jZSB0byB1c2VyJ3MgcmVjb3JkUlRDIG9iamVjdFxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0UmVjb3JkaW5nKGNvbmZpZzIpIHtcclxuICAgICAgICBpZiAoISFjb25maWcyKSB7XHJcbiAgICAgICAgICAgIC8vIGFsbG93IHVzZXJzIHRvIHNldCBvcHRpb25zIHVzaW5nIHN0YXJ0UmVjb3JkaW5nIG1ldGhvZFxyXG4gICAgICAgICAgICAvLyBjb25maWcyIGlzIHNpbWlsYXIgdG8gbWFpbiBcImNvbmZpZ1wiIG9iamVjdCAoc2Vjb25kIHBhcmFtZXRlciBvdmVyIFJlY29yZFJUQyBjb25zdHJ1Y3RvcilcclxuICAgICAgICAgICAgY29uZmlnID0gbmV3IFJlY29yZFJUQ0NvbmZpZ3VyYXRpb24obWVkaWFTdHJlYW0sIGNvbmZpZzIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0ZWQgcmVjb3JkaW5nICcgKyBjb25maWcudHlwZSArICcgc3RyZWFtLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgc2V0U3RhdGUoJ3JlY29yZGluZycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGYucmVjb3JkaW5nRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVJlY29yZGluZ0R1cmF0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbml0UmVjb3JkZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnJlY29yZGluZ0R1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVSZWNvcmRpbmdEdXJhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRSZWNvcmRlcihpbml0Q2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoaW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5pbml0Q2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGluaXRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgaW5pdENhbGxiYWNrID0gY29uZmlnLmluaXRDYWxsYmFjayA9IG51bGw7IC8vIHJlY29yZGVyLmluaXRSZWNvcmRlciBzaG91bGQgYmUgY2FsbC1iYWNrZWQgb25jZS5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBSZWNvcmRlciA9IG5ldyBHZXRSZWNvcmRlclR5cGUobWVkaWFTdHJlYW0sIGNvbmZpZyk7XHJcblxyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgUmVjb3JkZXIobWVkaWFTdHJlYW0sIGNvbmZpZyk7XHJcbiAgICAgICAgbWVkaWFSZWNvcmRlci5yZWNvcmQoKTtcclxuXHJcbiAgICAgICAgc2V0U3RhdGUoJ3JlY29yZGluZycpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6ZWQgcmVjb3JkZXJUeXBlOicsIG1lZGlhUmVjb3JkZXIuY29uc3RydWN0b3IubmFtZSwgJ2ZvciBvdXRwdXQtdHlwZTonLCBjb25maWcudHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0b3BSZWNvcmRpbmcoY2FsbGJhY2spIHtcclxuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XHJcblxyXG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICB3YXJuaW5nTG9nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxmLnN0YXRlID09PSAncGF1c2VkJykge1xyXG4gICAgICAgICAgICBzZWxmLnJlc3VtZVJlY29yZGluZygpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN0b3BSZWNvcmRpbmcoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGYuc3RhdGUgIT09ICdyZWNvcmRpbmcnICYmICFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdSZWNvcmRpbmcgc3RhdGUgc2hvdWxkIGJlOiBcInJlY29yZGluZ1wiLCBob3dldmVyIGN1cnJlbnQgc3RhdGUgaXM6ICcsIHNlbGYuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0b3BwZWQgcmVjb3JkaW5nICcgKyBjb25maWcudHlwZSArICcgc3RyZWFtLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy50eXBlICE9PSAnZ2lmJykge1xyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0b3AoX2NhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcclxuICAgICAgICAgICAgX2NhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTdGF0ZSgnc3RvcHBlZCcpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBfY2FsbGJhY2soX19ibG9iKSB7XHJcbiAgICAgICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjay5jYWxsID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChzZWxmLCAnJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCcnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmtleXMobWVkaWFSZWNvcmRlcikuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVkaWFSZWNvcmRlcltrZXldID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNlbGZba2V5XSA9IG1lZGlhUmVjb3JkZXJba2V5XTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYmxvYiA9IG1lZGlhUmVjb3JkZXIuYmxvYjtcclxuXHJcbiAgICAgICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9fYmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIuYmxvYiA9IGJsb2IgPSBfX2Jsb2I7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93ICdSZWNvcmRpbmcgZmFpbGVkLic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChibG9iICYmICFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsb2IudHlwZSwgJy0+JywgYnl0ZXNUb1NpemUoYmxvYi5zaXplKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHVybDtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2suY2FsbCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoc2VsZiwgdXJsKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjb25maWcuYXV0b1dyaXRlVG9EaXNrKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdldERhdGFVUkwoZnVuY3Rpb24oZGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtZXRlciA9IHt9O1xyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyW2NvbmZpZy50eXBlICsgJ0Jsb2InXSA9IGRhdGFVUkw7XHJcbiAgICAgICAgICAgICAgICBEaXNrU3RvcmFnZS5TdG9yZShwYXJhbWV0ZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGF1c2VSZWNvcmRpbmcoKSB7XHJcbiAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHdhcm5pbmdMb2coKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGYuc3RhdGUgIT09ICdyZWNvcmRpbmcnKSB7XHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VuYWJsZSB0byBwYXVzZSB0aGUgcmVjb3JkaW5nLiBSZWNvcmRpbmcgc3RhdGU6ICcsIHNlbGYuc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFN0YXRlKCdwYXVzZWQnKTtcclxuXHJcbiAgICAgICAgbWVkaWFSZWNvcmRlci5wYXVzZSgpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGF1c2VkIHJlY29yZGluZy4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzdW1lUmVjb3JkaW5nKCkge1xyXG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICB3YXJuaW5nTG9nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxmLnN0YXRlICE9PSAncGF1c2VkJykge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbmFibGUgdG8gcmVzdW1lIHRoZSByZWNvcmRpbmcuIFJlY29yZGluZyBzdGF0ZTogJywgc2VsZi5zdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U3RhdGUoJ3JlY29yZGluZycpO1xyXG5cclxuICAgICAgICAvLyBub3QgYWxsIGxpYnMgaGF2ZSB0aGlzIG1ldGhvZCB5ZXRcclxuICAgICAgICBtZWRpYVJlY29yZGVyLnJlc3VtZSgpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdW1lZCByZWNvcmRpbmcuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlYWRGaWxlKF9ibG9iKSB7XHJcbiAgICAgICAgcG9zdE1lc3NhZ2UobmV3IEZpbGVSZWFkZXJTeW5jKCkucmVhZEFzRGF0YVVSTChfYmxvYikpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldERhdGFVUkwoY2FsbGJhY2ssIF9tZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aHJvdyAnUGFzcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIG92ZXIgZ2V0RGF0YVVSTC4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGJsb2IgPSBfbWVkaWFSZWNvcmRlciA/IF9tZWRpYVJlY29yZGVyLmJsb2IgOiAobWVkaWFSZWNvcmRlciB8fCB7fSkuYmxvYjtcclxuXHJcbiAgICAgICAgaWYgKCFibG9iKSB7XHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0Jsb2IgZW5jb2RlciBkaWQgbm90IGZpbmlzaCBpdHMgam9iIHlldC4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGdldERhdGFVUkwoY2FsbGJhY2ssIF9tZWRpYVJlY29yZGVyKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyAmJiAhbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSkge1xyXG4gICAgICAgICAgICB2YXIgd2ViV29ya2VyID0gcHJvY2Vzc0luV2ViV29ya2VyKHJlYWRGaWxlKTtcclxuXHJcbiAgICAgICAgICAgIHdlYldvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB3ZWJXb3JrZXIucG9zdE1lc3NhZ2UoYmxvYik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc0luV2ViV29ya2VyKF9mdW5jdGlvbikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtfZnVuY3Rpb24udG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAndGhpcy5vbm1lc3NhZ2UgPSAgZnVuY3Rpb24gKGVlZSkgeycgKyBfZnVuY3Rpb24ubmFtZSArICcoZWVlLmRhdGEpO30nXHJcbiAgICAgICAgICAgICAgICBdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIoYmxvYik7XHJcbiAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlcjtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVjb3JkaW5nRHVyYXRpb24oY291bnRlcikge1xyXG4gICAgICAgIGNvdW50ZXIgPSBjb3VudGVyIHx8IDA7XHJcblxyXG4gICAgICAgIGlmIChzZWxmLnN0YXRlID09PSAncGF1c2VkJykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlUmVjb3JkaW5nRHVyYXRpb24oY291bnRlcik7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gJ3N0b3BwZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyID49IHNlbGYucmVjb3JkaW5nRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgc3RvcFJlY29yZGluZyhzZWxmLm9uUmVjb3JkaW5nU3RvcHBlZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvdW50ZXIgKz0gMTAwMDsgLy8gMS1zZWNvbmRcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaGFuZGxlUmVjb3JkaW5nRHVyYXRpb24oY291bnRlcik7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcclxuICAgICAgICBpZiAoIXNlbGYpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHNlbGYub25TdGF0ZUNoYW5nZWQuY2FsbCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBzZWxmLm9uU3RhdGVDaGFuZ2VkLmNhbGwoc2VsZiwgc3RhdGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGYub25TdGF0ZUNoYW5nZWQoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgV0FSTklORyA9ICdJdCBzZWVtcyB0aGF0IHJlY29yZGVyIGlzIGRlc3Ryb3llZCBvciBcInN0YXJ0UmVjb3JkaW5nXCIgaXMgbm90IGludm9rZWQgZm9yICcgKyBjb25maWcudHlwZSArICcgcmVjb3JkZXIuJztcclxuXHJcbiAgICBmdW5jdGlvbiB3YXJuaW5nTG9nKCkge1xyXG4gICAgICAgIGlmIChjb25maWcuZGlzYWJsZUxvZ3MgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS53YXJuKFdBUk5JTkcpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtZWRpYVJlY29yZGVyO1xyXG5cclxuICAgIHZhciByZXR1cm5PYmplY3QgPSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBtZXRob2Qgc3RhcnRzIHRoZSByZWNvcmRpbmcuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHZhciByZWNvcmRlciA9IFJlY29yZFJUQyhtZWRpYVN0cmVhbSwge1xyXG4gICAgICAgICAqICAgICB0eXBlOiAndmlkZW8nXHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGFydFJlY29yZGluZzogc3RhcnRSZWNvcmRpbmcsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHN0b3BzIHRoZSByZWNvcmRpbmcuIEl0IGlzIHN0cm9uZ2x5IHJlY29tbWVuZGVkIHRvIGdldCBcImJsb2JcIiBvciBcIlVSSVwiIGluc2lkZSB0aGUgY2FsbGJhY2sgdG8gbWFrZSBzdXJlIGFsbCByZWNvcmRlcnMgZmluaXNoZWQgdGhlaXIgam9iLlxyXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgdG8gZ2V0IHRoZSByZWNvcmRlZCBibG9iLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAqICAgICAvLyB1c2UgZWl0aGVyIFwidGhpc1wiIG9yIFwicmVjb3JkZXJcIiBvYmplY3Q7IGJvdGggYXJlIGlkZW50aWNhbFxyXG4gICAgICAgICAqICAgICB2aWRlby5zcmMgPSB0aGlzLnRvVVJMKCk7XHJcbiAgICAgICAgICogICAgIHZhciBibG9iID0gdGhpcy5nZXRCbG9iKCk7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RvcFJlY29yZGluZzogc3RvcFJlY29yZGluZyxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBtZXRob2QgcGF1c2VzIHRoZSByZWNvcmRpbmcuIFlvdSBjYW4gcmVzdW1lIHJlY29yZGluZyB1c2luZyBcInJlc3VtZVJlY29yZGluZ1wiIG1ldGhvZC5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEB0b2RvIEZpcmVmb3ggaXMgdW5hYmxlIHRvIHBhdXNlIHRoZSByZWNvcmRpbmcuIEZpeCBpdC5cclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnBhdXNlUmVjb3JkaW5nKCk7ICAvLyBwYXVzZSB0aGUgcmVjb3JkaW5nXHJcbiAgICAgICAgICogcmVjb3JkZXIucmVzdW1lUmVjb3JkaW5nKCk7IC8vIHJlc3VtZSBhZ2FpblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHBhdXNlUmVjb3JkaW5nOiBwYXVzZVJlY29yZGluZyxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyB0aGUgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5wYXVzZVJlY29yZGluZygpOyAgLy8gZmlyc3Qgb2YgYWxsLCBwYXVzZSB0aGUgcmVjb3JkaW5nXHJcbiAgICAgICAgICogcmVjb3JkZXIucmVzdW1lUmVjb3JkaW5nKCk7IC8vIG5vdyByZXN1bWUgaXRcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXN1bWVSZWNvcmRpbmc6IHJlc3VtZVJlY29yZGluZyxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBtZXRob2QgaW5pdGlhbGl6ZXMgdGhlIHJlY29yZGluZy5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEB0b2RvIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBkZXByZWNhdGVkLlxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuaW5pdFJlY29yZGVyKCk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaW5pdFJlY29yZGVyOiBpbml0UmVjb3JkZXIsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFzayBSZWNvcmRSVEMgdG8gYXV0by1zdG9wIHRoZSByZWNvcmRpbmcgYWZ0ZXIgNSBtaW51dGVzLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiB2YXIgZml2ZU1pbnV0ZXMgPSA1ICogMTAwMCAqIDYwO1xyXG4gICAgICAgICAqIHJlY29yZGVyLnNldFJlY29yZGluZ0R1cmF0aW9uKGZpdmVNaW51dGVzLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICB2YXIgYmxvYiA9IHRoaXMuZ2V0QmxvYigpO1xyXG4gICAgICAgICAqICAgIHZpZGVvLnNyYyA9IHRoaXMudG9VUkwoKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiAvLyBvciBvdGhlcndpc2VcclxuICAgICAgICAgKiByZWNvcmRlci5zZXRSZWNvcmRpbmdEdXJhdGlvbihmaXZlTWludXRlcykub25SZWNvcmRpbmdTdG9wcGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAqICAgIHZhciBibG9iID0gdGhpcy5nZXRCbG9iKCk7XHJcbiAgICAgICAgICogICAgdmlkZW8uc3JjID0gdGhpcy50b1VSTCgpO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldFJlY29yZGluZ0R1cmF0aW9uOiBmdW5jdGlvbihyZWNvcmRpbmdEdXJhdGlvbiwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZWNvcmRpbmdEdXJhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdyZWNvcmRpbmdEdXJhdGlvbiBpcyByZXF1aXJlZC4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlY29yZGluZ0R1cmF0aW9uICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ3JlY29yZGluZ0R1cmF0aW9uIG11c3QgYmUgYSBudW1iZXIuJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5yZWNvcmRpbmdEdXJhdGlvbiA9IHJlY29yZGluZ0R1cmF0aW9uO1xyXG4gICAgICAgICAgICBzZWxmLm9uUmVjb3JkaW5nU3RvcHBlZCA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgb25SZWNvcmRpbmdTdG9wcGVkOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYub25SZWNvcmRpbmdTdG9wcGVkID0gY2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gY2xlYXIvcmVzZXQgYWxsIHRoZSByZWNvcmRlZCBkYXRhLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQHRvZG8gRmlndXJlIG91dCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIFwicmVzZXRcIiBhbmQgXCJjbGVhclJlY29yZGVkRGF0YVwiIG1ldGhvZHMuXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsZWFyUmVjb3JkZWREYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nTG9nKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIuY2xlYXJSZWNvcmRlZERhdGEoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2xlYXJlZCBvbGQgcmVjb3JkZWQgZGF0YS4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCB0aGUgcmVjb3JkZWQgYmxvYi4gVXNlIHRoaXMgbWV0aG9kIGluc2lkZSB0aGUgXCJzdG9wUmVjb3JkaW5nXCIgY2FsbGJhY2suXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICogICAgIHZhciBibG9iID0gdGhpcy5nZXRCbG9iKCk7XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICAgdmFyIGZpbGUgPSBuZXcgRmlsZShbYmxvYl0sICdmaWxlbmFtZS53ZWJtJywge1xyXG4gICAgICAgICAqICAgICAgICAgdHlwZTogJ3ZpZGVvL3dlYm0nXHJcbiAgICAgICAgICogICAgIH0pO1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAqICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTsgLy8gdXBsb2FkIFwiRmlsZVwiIG9iamVjdCByYXRoZXIgdGhhbiBhIFwiQmxvYlwiXHJcbiAgICAgICAgICogICAgIHVwbG9hZFRvU2VydmVyKGZvcm1EYXRhKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKiBAcmV0dXJucyB7QmxvYn0gUmV0dXJucyByZWNvcmRlZCBkYXRhIGFzIFwiQmxvYlwiIG9iamVjdC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRCbG9iOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nTG9nKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtZWRpYVJlY29yZGVyLmJsb2I7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0IGRhdGEtVVJJIGluc3RlYWQgb2YgQmxvYi5cclxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIHRvIGdldCB0aGUgRGF0YS1VUkkuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICogICAgIHJlY29yZGVyLmdldERhdGFVUkwoZnVuY3Rpb24oZGF0YVVSSSkge1xyXG4gICAgICAgICAqICAgICAgICAgdmlkZW8uc3JjID0gZGF0YVVSSTtcclxuICAgICAgICAgKiAgICAgfSk7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0RGF0YVVSTDogZ2V0RGF0YVVSTCxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0IHZpcnR1YWwvdGVtcG9yYXJ5IFVSTC4gVXNhZ2Ugb2YgdGhpcyBVUkwgaXMgbGltaXRlZCB0byBjdXJyZW50IHRhYi5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgdmlkZW8uc3JjID0gdGhpcy50b1VSTCgpO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFJldHVybnMgYSB2aXJ0dWFsL3RlbXBvcmFyeSBVUkwgZm9yIHRoZSByZWNvcmRlZCBcIkJsb2JcIi5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0b1VSTDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gVVJMLmNyZWF0ZU9iamVjdFVSTChtZWRpYVJlY29yZGVyLmJsb2IpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCBpbnRlcm5hbCByZWNvcmRpbmcgb2JqZWN0IChpLmUuIGludGVybmFsIG1vZHVsZSkgZS5nLiBNdXRsaVN0cmVhbVJlY29yZGVyLCBNZWRpYVN0cmVhbVJlY29yZGVyLCBTdGVyZW9BdWRpb1JlY29yZGVyIG9yIFdoYW1teVJlY29yZGVyIGV0Yy5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogdmFyIGludGVybmFsID0gcmVjb3JkZXIuZ2V0SW50ZXJuYWxSZWNvcmRlcigpO1xyXG4gICAgICAgICAqIGlmKGludGVybmFsIGluc3RhbmNlb2YgTXVsdGlTdHJlYW1SZWNvcmRlcikge1xyXG4gICAgICAgICAqICAgICBpbnRlcm5hbC5hZGRTdHJlYW1zKFtuZXdBdWRpb1N0cmVhbV0pO1xyXG4gICAgICAgICAqICAgICBpbnRlcm5hbC5yZXNldFZpZGVvU3RyZWFtcyhbc2NyZWVuU3RyZWFtXSk7XHJcbiAgICAgICAgICogfVxyXG4gICAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgaW50ZXJuYWwgcmVjb3JkaW5nIG9iamVjdC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRJbnRlcm5hbFJlY29yZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lZGlhUmVjb3JkZXI7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW52b2tlIHNhdmUtYXMgZGlhbG9nIHRvIHNhdmUgdGhlIHJlY29yZGVkIGJsb2IgaW50byB5b3VyIGRpc2suXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIC0gU2V0IHlvdXIgb3duIGZpbGUgbmFtZS5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgdGhpcy5zYXZlKCdmaWxlLW5hbWUnKTtcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAgICAvLyBvciBtYW51YWxseTpcclxuICAgICAgICAgKiAgICAgaW52b2tlU2F2ZUFzRGlhbG9nKHRoaXMuZ2V0QmxvYigpLCAnZmlsZW5hbWUud2VibScpO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uKGZpbGVOYW1lKSB7XHJcbiAgICAgICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnZva2VTYXZlQXNEaWFsb2cobWVkaWFSZWNvcmRlci5ibG9iLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBtZXRob2QgZ2V0cyBhIGJsb2IgZnJvbSBpbmRleGVkLURCIHN0b3JhZ2UuXHJcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayB0byBnZXQgdGhlIHJlY29yZGVkIGJsb2IuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLmdldEZyb21EaXNrKGZ1bmN0aW9uKGRhdGFVUkwpIHtcclxuICAgICAgICAgKiAgICAgdmlkZW8uc3JjID0gZGF0YVVSTDtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRGcm9tRGlzazogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nTG9nKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFJlY29yZFJUQy5nZXRGcm9tRGlzayhjb25maWcudHlwZSwgY2FsbGJhY2spO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGFwcGVuZHMgYW4gYXJyYXkgb2Ygd2VicCBpbWFnZXMgdG8gdGhlIHJlY29yZGVkIHZpZGVvLWJsb2IuIEl0IHRha2VzIGFuIFwiYXJyYXlcIiBvYmplY3QuXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5LjxBcnJheT59XHJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlPZldlYlBJbWFnZXMgLSBBcnJheSBvZiB3ZWJwIGltYWdlcy5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEB0b2RvIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBkZXByZWNhdGVkLlxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogdmFyIGFycmF5T2ZXZWJQSW1hZ2VzID0gW107XHJcbiAgICAgICAgICogYXJyYXlPZldlYlBJbWFnZXMucHVzaCh7XHJcbiAgICAgICAgICogICAgIGR1cmF0aW9uOiBpbmRleCxcclxuICAgICAgICAgKiAgICAgaW1hZ2U6ICdkYXRhOmltYWdlL3dlYnA7YmFzZTY0LC4uLidcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKiByZWNvcmRlci5zZXRBZHZlcnRpc2VtZW50QXJyYXkoYXJyYXlPZldlYlBJbWFnZXMpO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldEFkdmVydGlzZW1lbnRBcnJheTogZnVuY3Rpb24oYXJyYXlPZldlYlBJbWFnZXMpIHtcclxuICAgICAgICAgICAgY29uZmlnLmFkdmVydGlzZW1lbnQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBhcnJheU9mV2ViUEltYWdlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5hZHZlcnRpc2VtZW50LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBhcnJheU9mV2ViUEltYWdlc1tpXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJdCBpcyBlcXVpdmFsZW50IHRvIDxjb2RlIGNsYXNzPVwic3RyXCI+XCJyZWNvcmRlci5nZXRCbG9iKClcIjwvY29kZT4gbWV0aG9kLiBVc2FnZSBvZiBcImdldEJsb2JcIiBpcyByZWNvbW1lbmRlZCwgdGhvdWdoLlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7QmxvYn0gYmxvYiAtIFJlY29yZGVkIEJsb2IgY2FuIGJlIGFjY2Vzc2VkIHVzaW5nIHRoaXMgcHJvcGVydHkuXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEByZWFkb25seVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgdmFyIGJsb2IgPSB0aGlzLmJsb2I7XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICAgLy8gYmVsb3cgb25lIGlzIHJlY29tbWVuZGVkXHJcbiAgICAgICAgICogICAgIHZhciBibG9iID0gdGhpcy5nZXRCbG9iKCk7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYmxvYjogbnVsbCxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyB3b3JrcyBvbmx5IHdpdGgge3JlY29yZGVyVHlwZTpTdGVyZW9BdWRpb1JlY29yZGVyfS4gVXNlIHRoaXMgcHJvcGVydHkgb24gXCJzdG9wUmVjb3JkaW5nXCIgdG8gdmVyaWZ5IHRoZSBlbmNvZGVyJ3Mgc2FtcGxlLXJhdGVzLlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBidWZmZXJTaXplIC0gQnVmZmVyLXNpemUgdXNlZCB0byBlbmNvZGUgdGhlIFdBViBjb250YWluZXJcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQHJlYWRvbmx5XHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAqICAgICBhbGVydCgnUmVjb3JkZXIgdXNlZCB0aGlzIGJ1ZmZlci1zaXplOiAnICsgdGhpcy5idWZmZXJTaXplKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBidWZmZXJTaXplOiAwLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIHdvcmtzIG9ubHkgd2l0aCB7cmVjb3JkZXJUeXBlOlN0ZXJlb0F1ZGlvUmVjb3JkZXJ9LiBVc2UgdGhpcyBwcm9wZXJ0eSBvbiBcInN0b3BSZWNvcmRpbmdcIiB0byB2ZXJpZnkgdGhlIGVuY29kZXIncyBzYW1wbGUtcmF0ZXMuXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNhbXBsZVJhdGUgLSBTYW1wbGUtcmF0ZXMgdXNlZCB0byBlbmNvZGUgdGhlIFdBViBjb250YWluZXJcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQHJlYWRvbmx5XHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAqICAgICBhbGVydCgnUmVjb3JkZXIgdXNlZCB0aGVzZSBzYW1wbGUtcmF0ZXM6ICcgKyB0aGlzLnNhbXBsZVJhdGUpO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNhbXBsZVJhdGU6IDAsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHtyZWNvcmRlclR5cGU6U3RlcmVvQXVkaW9SZWNvcmRlcn0gcmV0dXJucyBBcnJheUJ1ZmZlciBvYmplY3QuXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtBcnJheUJ1ZmZlcn0gYnVmZmVyIC0gQXVkaW8gQXJyYXlCdWZmZXIsIHN1cHBvcnRlZCBvbmx5IGluIENocm9tZS5cclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQHJlYWRvbmx5XHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAqICAgICB2YXIgYXJyYXlCdWZmZXIgPSB0aGlzLmJ1ZmZlcjtcclxuICAgICAgICAgKiAgICAgYWxlcnQoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYnVmZmVyOiBudWxsLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCByZXNldHMgdGhlIHJlY29yZGVyLiBTbyB0aGF0IHlvdSBjYW4gcmV1c2Ugc2luZ2xlIHJlY29yZGVyIGluc3RhbmNlIG1hbnkgdGltZXMuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnJlc2V0KCk7XHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXNldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChtZWRpYVJlY29yZGVyICYmIHR5cGVvZiBtZWRpYVJlY29yZGVyLmNsZWFyUmVjb3JkZWREYXRhID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBtZWRpYVJlY29yZGVyLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKCdpbmFjdGl2ZScpO1xyXG4gICAgICAgICAgICBzZWxmLmJsb2IgPSBudWxsO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuZXZlciByZWNvcmRlcidzIHN0YXRlIGNoYW5nZXMuIFVzZSB0aGlzIGFzIGFuIFwiZXZlbnRcIi5cclxuICAgICAgICAgKiBAcHJvcGVydHkge1N0cmluZ30gc3RhdGUgLSBBIHJlY29yZGVyJ3Mgc3RhdGUgY2FuIGJlOiByZWNvcmRpbmcsIHBhdXNlZCwgc3RvcHBlZCBvciBpbmFjdGl2ZS5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIub25TdGF0ZUNoYW5nZWQgPSBmdW5jdGlvbihzdGF0ZSkge1xyXG4gICAgICAgICAqICAgICBjb25zb2xlLmxvZygnUmVjb3JkZXIgc3RhdGU6ICcsIHN0YXRlKTtcclxuICAgICAgICAgKiB9O1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9uU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbihzdGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlY29yZGVyIHN0YXRlIGNoYW5nZWQ6Jywgc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSByZWNvcmRlciBjYW4gaGF2ZSBpbmFjdGl2ZSwgcmVjb3JkaW5nLCBwYXVzZWQgb3Igc3RvcHBlZCBzdGF0ZXMuXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtTdHJpbmd9IHN0YXRlIC0gQSByZWNvcmRlcidzIHN0YXRlIGNhbiBiZTogcmVjb3JkaW5nLCBwYXVzZWQsIHN0b3BwZWQgb3IgaW5hY3RpdmUuXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgKiBAcmVhZG9ubHlcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIC8vIHRoaXMgbG9vcGVyIGZ1bmN0aW9uIHdpbGwga2VlcCB5b3UgdXBkYXRlZCBhYm91dCB0aGUgcmVjb3JkZXIncyBzdGF0ZXMuXHJcbiAgICAgICAgICogKGZ1bmN0aW9uIGxvb3BlcigpIHtcclxuICAgICAgICAgKiAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lckhUTUwgPSAnUmVjb3JkZXIncyBzdGF0ZSBpczogJyArIHJlY29yZGVyLnN0YXRlO1xyXG4gICAgICAgICAqICAgICBpZihyZWNvcmRlci5zdGF0ZSA9PT0gJ3N0b3BwZWQnKSByZXR1cm47IC8vIGlnbm9yZStzdG9wXHJcbiAgICAgICAgICogICAgIHNldFRpbWVvdXQobG9vcGVyLCAxMDAwKTsgLy8gdXBkYXRlIGFmdGVyIGV2ZXJ5IDMtc2Vjb25kc1xyXG4gICAgICAgICAqIH0pKCk7XHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0ZTogJ2luYWN0aXZlJyxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0IHJlY29yZGVyJ3MgcmVhZG9ubHkgc3RhdGUuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHZhciBzdGF0ZSA9IHJlY29yZGVyLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gUmV0dXJucyByZWNvcmRpbmcgc3RhdGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5zdGF0ZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZXN0cm95IFJlY29yZFJUQyBpbnN0YW5jZS4gQ2xlYXIgYWxsIHJlY29yZGVycyBhbmQgb2JqZWN0cy5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZGlzYWJsZUxvZ3NDYWNoZSA9IGNvbmZpZy5kaXNhYmxlTG9ncztcclxuXHJcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVMb2dzOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHNlbGYucmVzZXQoKTtcclxuICAgICAgICAgICAgc2V0U3RhdGUoJ2Rlc3Ryb3llZCcpO1xyXG4gICAgICAgICAgICByZXR1cm5PYmplY3QgPSBzZWxmID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uZmlnLmRpc2FibGVMb2dzID0gZGlzYWJsZUxvZ3NDYWNoZTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1JlY29yZFJUQyBpcyBkZXN0cm95ZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWNvcmRSVEMgdmVyc2lvbiBudW1iZXJcclxuICAgICAgICAgKiBAcHJvcGVydHkge1N0cmluZ30gdmVyc2lvbiAtIFJlbGVhc2UgdmVyc2lvbiBudW1iZXIuXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgKiBAcmVhZG9ubHlcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIGFsZXJ0KHJlY29yZGVyLnZlcnNpb24pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZlcnNpb246ICc1LjUuMCdcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCF0aGlzKSB7XHJcbiAgICAgICAgc2VsZiA9IHJldHVybk9iamVjdDtcclxuICAgICAgICByZXR1cm4gcmV0dXJuT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIHNvbWVvbmUgd2FudHMgdG8gdXNlIFJlY29yZFJUQyB3aXRoIHRoZSBcIm5ld1wiIGtleXdvcmQuXHJcbiAgICBmb3IgKHZhciBwcm9wIGluIHJldHVybk9iamVjdCkge1xyXG4gICAgICAgIHRoaXNbcHJvcF0gPSByZXR1cm5PYmplY3RbcHJvcF07XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIHJldHVybk9iamVjdDtcclxufVxyXG5cclxuUmVjb3JkUlRDLnZlcnNpb24gPSAnNS41LjAnO1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnIC8qICYmICEhbW9kdWxlLmV4cG9ydHMqLyApIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gUmVjb3JkUlRDO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICBkZWZpbmUoJ1JlY29yZFJUQycsIFtdLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gUmVjb3JkUlRDO1xyXG4gICAgfSk7XHJcbn1cblxyXG5SZWNvcmRSVEMuZ2V0RnJvbURpc2sgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgaWYgKCFjYWxsYmFjaykge1xyXG4gICAgICAgIHRocm93ICdjYWxsYmFjayBpcyBtYW5kYXRvcnkuJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnR2V0dGluZyByZWNvcmRlZCAnICsgKHR5cGUgPT09ICdhbGwnID8gJ2Jsb2JzJyA6IHR5cGUgKyAnIGJsb2IgJykgKyAnIGZyb20gZGlzayEnKTtcclxuICAgIERpc2tTdG9yYWdlLkZldGNoKGZ1bmN0aW9uKGRhdGFVUkwsIF90eXBlKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgIT09ICdhbGwnICYmIF90eXBlID09PSB0eXBlICsgJ0Jsb2InICYmIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdhbGwnICYmIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkwsIF90eXBlLnJlcGxhY2UoJ0Jsb2InLCAnJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIHN0b3JlIHJlY29yZGVkIGJsb2JzIGludG8gSW5kZXhlZERCIHN0b3JhZ2UuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0ge2F1ZGlvOiBCbG9iLCB2aWRlbzogQmxvYiwgZ2lmOiBCbG9ifVxyXG4gKiBAbWV0aG9kXHJcbiAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICogQGV4YW1wbGVcclxuICogUmVjb3JkUlRDLndyaXRlVG9EaXNrKHtcclxuICogICAgIGF1ZGlvOiBhdWRpb0Jsb2IsXHJcbiAqICAgICB2aWRlbzogdmlkZW9CbG9iLFxyXG4gKiAgICAgZ2lmICA6IGdpZkJsb2JcclxuICogfSk7XHJcbiAqL1xyXG5SZWNvcmRSVEMud3JpdGVUb0Rpc2sgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBjb25zb2xlLmxvZygnV3JpdGluZyByZWNvcmRlZCBibG9iKHMpIHRvIGRpc2shJyk7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIGlmIChvcHRpb25zLmF1ZGlvICYmIG9wdGlvbnMudmlkZW8gJiYgb3B0aW9ucy5naWYpIHtcclxuICAgICAgICBvcHRpb25zLmF1ZGlvLmdldERhdGFVUkwoZnVuY3Rpb24oYXVkaW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMudmlkZW8uZ2V0RGF0YVVSTChmdW5jdGlvbih2aWRlb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZ2lmLmdldERhdGFVUkwoZnVuY3Rpb24oZ2lmRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIERpc2tTdG9yYWdlLlN0b3JlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9CbG9iOiBhdWRpb0RhdGFVUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvQmxvYjogdmlkZW9EYXRhVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWZCbG9iOiBnaWZEYXRhVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuYXVkaW8gJiYgb3B0aW9ucy52aWRlbykge1xyXG4gICAgICAgIG9wdGlvbnMuYXVkaW8uZ2V0RGF0YVVSTChmdW5jdGlvbihhdWRpb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy52aWRlby5nZXREYXRhVVJMKGZ1bmN0aW9uKHZpZGVvRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgRGlza1N0b3JhZ2UuU3RvcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvQmxvYjogYXVkaW9EYXRhVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQmxvYjogdmlkZW9EYXRhVVJMXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuYXVkaW8gJiYgb3B0aW9ucy5naWYpIHtcclxuICAgICAgICBvcHRpb25zLmF1ZGlvLmdldERhdGFVUkwoZnVuY3Rpb24oYXVkaW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZ2lmLmdldERhdGFVUkwoZnVuY3Rpb24oZ2lmRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgRGlza1N0b3JhZ2UuU3RvcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvQmxvYjogYXVkaW9EYXRhVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgIGdpZkJsb2I6IGdpZkRhdGFVUkxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy52aWRlbyAmJiBvcHRpb25zLmdpZikge1xyXG4gICAgICAgIG9wdGlvbnMudmlkZW8uZ2V0RGF0YVVSTChmdW5jdGlvbih2aWRlb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5naWYuZ2V0RGF0YVVSTChmdW5jdGlvbihnaWZEYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICBEaXNrU3RvcmFnZS5TdG9yZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9CbG9iOiB2aWRlb0RhdGFVUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2lmQmxvYjogZ2lmRGF0YVVSTFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmF1ZGlvKSB7XHJcbiAgICAgICAgb3B0aW9ucy5hdWRpby5nZXREYXRhVVJMKGZ1bmN0aW9uKGF1ZGlvRGF0YVVSTCkge1xyXG4gICAgICAgICAgICBEaXNrU3RvcmFnZS5TdG9yZSh7XHJcbiAgICAgICAgICAgICAgICBhdWRpb0Jsb2I6IGF1ZGlvRGF0YVVSTFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy52aWRlbykge1xyXG4gICAgICAgIG9wdGlvbnMudmlkZW8uZ2V0RGF0YVVSTChmdW5jdGlvbih2aWRlb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgRGlza1N0b3JhZ2UuU3RvcmUoe1xyXG4gICAgICAgICAgICAgICAgdmlkZW9CbG9iOiB2aWRlb0RhdGFVUkxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZ2lmKSB7XHJcbiAgICAgICAgb3B0aW9ucy5naWYuZ2V0RGF0YVVSTChmdW5jdGlvbihnaWZEYXRhVVJMKSB7XHJcbiAgICAgICAgICAgIERpc2tTdG9yYWdlLlN0b3JlKHtcclxuICAgICAgICAgICAgICAgIGdpZkJsb2I6IGdpZkRhdGFVUkxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XG5cclxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuLy8gUmVjb3JkUlRDLUNvbmZpZ3VyYXRpb24uanNcclxuXHJcbi8qKlxyXG4gKiB7QGxpbmsgUmVjb3JkUlRDQ29uZmlndXJhdGlvbn0gaXMgYW4gaW5uZXIvcHJpdmF0ZSBoZWxwZXIgZm9yIHtAbGluayBSZWNvcmRSVEN9LlxyXG4gKiBAc3VtbWFyeSBJdCBjb25maWd1cmVzIHRoZSAybmQgcGFyYW1ldGVyIHBhc3NlZCBvdmVyIHtAbGluayBSZWNvcmRSVEN9IGFuZCByZXR1cm5zIGEgdmFsaWQgXCJjb25maWdcIiBvYmplY3QuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAdHlwZWRlZiBSZWNvcmRSVENDb25maWd1cmF0aW9uXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgb3B0aW9ucyA9IFJlY29yZFJUQ0NvbmZpZ3VyYXRpb24obWVkaWFTdHJlYW0sIG9wdGlvbnMpO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIC0gTWVkaWFTdHJlYW0gb2JqZWN0IGZldGNoZWQgdXNpbmcgZ2V0VXNlck1lZGlhIEFQSSBvciBnZW5lcmF0ZWQgdXNpbmcgY2FwdHVyZVN0cmVhbVVudGlsRW5kZWQgb3IgV2ViQXVkaW8gQVBJLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge3R5cGU6XCJ2aWRlb1wiLCBkaXNhYmxlTG9nczogdHJ1ZSwgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzOiAxLCBidWZmZXJTaXplOiAwLCBzYW1wbGVSYXRlOiAwLCB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCwgZ2V0TmF0aXZlQmxvYjp0cnVlLCBldGMufVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIFJlY29yZFJUQ0NvbmZpZ3VyYXRpb24obWVkaWFTdHJlYW0sIGNvbmZpZykge1xyXG4gICAgaWYgKCFjb25maWcucmVjb3JkZXJUeXBlICYmICFjb25maWcudHlwZSkge1xyXG4gICAgICAgIGlmICghIWNvbmZpZy5hdWRpbyAmJiAhIWNvbmZpZy52aWRlbykge1xyXG4gICAgICAgICAgICBjb25maWcudHlwZSA9ICd2aWRlbyc7XHJcbiAgICAgICAgfSBlbHNlIGlmICghIWNvbmZpZy5hdWRpbyAmJiAhY29uZmlnLnZpZGVvKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy50eXBlID0gJ2F1ZGlvJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbmZpZy5yZWNvcmRlclR5cGUgJiYgIWNvbmZpZy50eXBlKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5yZWNvcmRlclR5cGUgPT09IFdoYW1teVJlY29yZGVyIHx8IGNvbmZpZy5yZWNvcmRlclR5cGUgPT09IENhbnZhc1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy50eXBlID0gJ3ZpZGVvJztcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5yZWNvcmRlclR5cGUgPT09IEdpZlJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy50eXBlID0gJ2dpZic7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcucmVjb3JkZXJUeXBlID09PSBTdGVyZW9BdWRpb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy50eXBlID0gJ2F1ZGlvJztcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5yZWNvcmRlclR5cGUgPT09IE1lZGlhU3RyZWFtUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgaWYgKGdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ2F1ZGlvJykubGVuZ3RoICYmIGdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ3ZpZGVvJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcudHlwZSA9ICd2aWRlbyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ2F1ZGlvJykubGVuZ3RoICYmIGdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ3ZpZGVvJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcudHlwZSA9ICd2aWRlbyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAnYXVkaW8nKS5sZW5ndGggJiYgIWdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ3ZpZGVvJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcudHlwZSA9ICdhdWRpbyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25maWcudHlwZSA9ICdVbktub3duJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIE1lZGlhU3RyZWFtUmVjb3JkZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBNZWRpYVJlY29yZGVyICE9PSAndW5kZWZpbmVkJyAmJiAncmVxdWVzdERhdGEnIGluIE1lZGlhUmVjb3JkZXIucHJvdG90eXBlKSB7XHJcbiAgICAgICAgaWYgKCFjb25maWcubWltZVR5cGUpIHtcclxuICAgICAgICAgICAgY29uZmlnLm1pbWVUeXBlID0gJ3ZpZGVvL3dlYm0nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcudHlwZSkge1xyXG4gICAgICAgICAgICBjb25maWcudHlwZSA9IGNvbmZpZy5taW1lVHlwZS5zcGxpdCgnLycpWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuYml0c1BlclNlY29uZCkge1xyXG4gICAgICAgICAgICAvLyBjb25maWcuYml0c1BlclNlY29uZCA9IDEyODAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc2lkZXIgZGVmYXVsdCB0eXBlPWF1ZGlvXHJcbiAgICBpZiAoIWNvbmZpZy50eXBlKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5taW1lVHlwZSkge1xyXG4gICAgICAgICAgICBjb25maWcudHlwZSA9IGNvbmZpZy5taW1lVHlwZS5zcGxpdCgnLycpWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbmZpZy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy50eXBlID0gJ2F1ZGlvJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufVxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX1xyXG4vLyBHZXRSZWNvcmRlclR5cGUuanNcclxuXHJcbi8qKlxyXG4gKiB7QGxpbmsgR2V0UmVjb3JkZXJUeXBlfSBpcyBhbiBpbm5lci9wcml2YXRlIGhlbHBlciBmb3Ige0BsaW5rIFJlY29yZFJUQ30uXHJcbiAqIEBzdW1tYXJ5IEl0IHJldHVybnMgYmVzdCByZWNvcmRlci10eXBlIGF2YWlsYWJsZSBmb3IgeW91ciBicm93c2VyLlxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgR2V0UmVjb3JkZXJUeXBlXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgUmVjb3JkZXJUeXBlID0gR2V0UmVjb3JkZXJUeXBlKG9wdGlvbnMpO1xyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgUmVjb3JkZXJUeXBlKG9wdGlvbnMpO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIC0gTWVkaWFTdHJlYW0gb2JqZWN0IGZldGNoZWQgdXNpbmcgZ2V0VXNlck1lZGlhIEFQSSBvciBnZW5lcmF0ZWQgdXNpbmcgY2FwdHVyZVN0cmVhbVVudGlsRW5kZWQgb3IgV2ViQXVkaW8gQVBJLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge3R5cGU6XCJ2aWRlb1wiLCBkaXNhYmxlTG9nczogdHJ1ZSwgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzOiAxLCBidWZmZXJTaXplOiAwLCBzYW1wbGVSYXRlOiAwLCB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCwgZXRjLn1cclxuICovXHJcblxyXG5mdW5jdGlvbiBHZXRSZWNvcmRlclR5cGUobWVkaWFTdHJlYW0sIGNvbmZpZykge1xyXG4gICAgdmFyIHJlY29yZGVyO1xyXG5cclxuICAgIC8vIFN0ZXJlb0F1ZGlvUmVjb3JkZXIgY2FuIHdvcmsgd2l0aCBhbGwgdGhyZWU6IEVkZ2UsIEZpcmVmb3ggYW5kIENocm9tZVxyXG4gICAgLy8gdG9kbzogZGV0ZWN0IGlmIGl0IGlzIEVkZ2UsIHRoZW4gYXV0byB1c2U6IFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgIGlmIChpc0Nocm9tZSB8fCBpc0VkZ2UgfHwgaXNPcGVyYSkge1xyXG4gICAgICAgIC8vIE1lZGlhIFN0cmVhbSBSZWNvcmRpbmcgQVBJIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCBpbiBjaHJvbWUgeWV0O1xyXG4gICAgICAgIC8vIFRoYXQncyB3aHkgdXNpbmcgV2ViQXVkaW8gQVBJIHRvIHJlY29yZCBzdGVyZW8gYXVkaW8gaW4gV0FWIGZvcm1hdFxyXG4gICAgICAgIHJlY29yZGVyID0gU3RlcmVvQXVkaW9SZWNvcmRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIE1lZGlhUmVjb3JkZXIgIT09ICd1bmRlZmluZWQnICYmICdyZXF1ZXN0RGF0YScgaW4gTWVkaWFSZWNvcmRlci5wcm90b3R5cGUgJiYgIWlzQ2hyb21lKSB7XHJcbiAgICAgICAgcmVjb3JkZXIgPSBNZWRpYVN0cmVhbVJlY29yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHZpZGVvIHJlY29yZGVyIChpbiBXZWJNIGZvcm1hdClcclxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3ZpZGVvJyAmJiAoaXNDaHJvbWUgfHwgaXNPcGVyYSkpIHtcclxuICAgICAgICByZWNvcmRlciA9IFdoYW1teVJlY29yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHZpZGVvIHJlY29yZGVyIChpbiBHaWYgZm9ybWF0KVxyXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnZ2lmJykge1xyXG4gICAgICAgIHJlY29yZGVyID0gR2lmUmVjb3JkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHRtbDJjYW52YXMgcmVjb3JkaW5nIVxyXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnY2FudmFzJykge1xyXG4gICAgICAgIHJlY29yZGVyID0gQ2FudmFzUmVjb3JkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTWVkaWFSZWNvcmRlckNvbXBhdGlibGUoKSAmJiByZWNvcmRlciAhPT0gQ2FudmFzUmVjb3JkZXIgJiYgcmVjb3JkZXIgIT09IEdpZlJlY29yZGVyICYmIHR5cGVvZiBNZWRpYVJlY29yZGVyICE9PSAndW5kZWZpbmVkJyAmJiAncmVxdWVzdERhdGEnIGluIE1lZGlhUmVjb3JkZXIucHJvdG90eXBlKSB7XHJcbiAgICAgICAgaWYgKGdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ3ZpZGVvJykubGVuZ3RoIHx8IGdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ2F1ZGlvJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIGF1ZGlvLW9ubHkgcmVjb3JkaW5nXHJcbiAgICAgICAgICAgIGlmIChjb25maWcudHlwZSA9PT0gJ2F1ZGlvJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZCA9PT0gJ2Z1bmN0aW9uJyAmJiBNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZCgnYXVkaW8vd2VibScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkZXIgPSBNZWRpYVN0cmVhbVJlY29yZGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSByZWNvcmRlciA9IFN0ZXJlb0F1ZGlvUmVjb3JkZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyB2aWRlbyBvciBzY3JlZW4gdHJhY2tzXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIE1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkID09PSAnZnVuY3Rpb24nICYmIE1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKCd2aWRlby93ZWJtJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRlciA9IE1lZGlhU3RyZWFtUmVjb3JkZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1lZGlhU3RyZWFtIGluc3RhbmNlb2YgQXJyYXkgJiYgbWVkaWFTdHJlYW0ubGVuZ3RoKSB7XHJcbiAgICAgICAgcmVjb3JkZXIgPSBNdWx0aVN0cmVhbVJlY29yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25maWcucmVjb3JkZXJUeXBlKSB7XHJcbiAgICAgICAgcmVjb3JkZXIgPSBjb25maWcucmVjb3JkZXJUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzICYmICEhcmVjb3JkZXIgJiYgISFyZWNvcmRlci5uYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzaW5nIHJlY29yZGVyVHlwZTonLCByZWNvcmRlci5uYW1lIHx8IHJlY29yZGVyLmNvbnN0cnVjdG9yLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWNvcmRlcjtcclxufVxuXHJcbi8vIF9fX19fX19fX19fX19cclxuLy8gTVJlY29yZFJUQy5qc1xyXG5cclxuLyoqXHJcbiAqIE1SZWNvcmRSVEMgcnVucyBvbiB0b3Agb2Yge0BsaW5rIFJlY29yZFJUQ30gdG8gYnJpbmcgbXVsdGlwbGUgcmVjb3JkaW5ncyBpbiBhIHNpbmdsZSBwbGFjZSwgYnkgcHJvdmlkaW5nIHNpbXBsZSBBUEkuXHJcbiAqIEBzdW1tYXJ5IE1SZWNvcmRSVEMgc3RhbmRzIGZvciBcIk11bHRpcGxlLVJlY29yZFJUQ1wiLlxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgTVJlY29yZFJUQ1xyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIHJlY29yZGVyID0gbmV3IE1SZWNvcmRSVEMoKTtcclxuICogcmVjb3JkZXIuYWRkU3RyZWFtKE1lZGlhU3RyZWFtKTtcclxuICogcmVjb3JkZXIubWVkaWFUeXBlID0ge1xyXG4gKiAgICAgYXVkaW86IHRydWUsIC8vIG9yIFN0ZXJlb0F1ZGlvUmVjb3JkZXIgb3IgTWVkaWFTdHJlYW1SZWNvcmRlclxyXG4gKiAgICAgdmlkZW86IHRydWUsIC8vIG9yIFdoYW1teVJlY29yZGVyIG9yIE1lZGlhU3RyZWFtUmVjb3JkZXJcclxuICogICAgIGdpZjogdHJ1ZSAgICAvLyBvciBHaWZSZWNvcmRlclxyXG4gKiB9O1xyXG4gKiAvLyBtaW1lVHlwZSBpcyBvcHRpb25hbCBhbmQgc2hvdWxkIGJlIHNldCBvbmx5IGluIGFkdmFuY2UgY2FzZXMuXHJcbiAqIHJlY29yZGVyLm1pbWVUeXBlID0ge1xyXG4gKiAgICAgYXVkaW86ICdhdWRpby93YXYnLFxyXG4gKiAgICAgdmlkZW86ICd2aWRlby93ZWJtJyxcclxuICogICAgIGdpZjogICAnaW1hZ2UvZ2lmJ1xyXG4gKiB9O1xyXG4gKiByZWNvcmRlci5zdGFydFJlY29yZGluZygpO1xyXG4gKiBAc2VlIEZvciBmdXJ0aGVyIGluZm9ybWF0aW9uOlxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQy90cmVlL21hc3Rlci9NUmVjb3JkUlRDfE1SZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIC0gTWVkaWFTdHJlYW0gb2JqZWN0IGZldGNoZWQgdXNpbmcgZ2V0VXNlck1lZGlhIEFQSSBvciBnZW5lcmF0ZWQgdXNpbmcgY2FwdHVyZVN0cmVhbVVudGlsRW5kZWQgb3IgV2ViQXVkaW8gQVBJLlxyXG4gKiBAcmVxdWlyZXMge0BsaW5rIFJlY29yZFJUQ31cclxuICovXHJcblxyXG5mdW5jdGlvbiBNUmVjb3JkUlRDKG1lZGlhU3RyZWFtKSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBhdHRhY2hlcyBNZWRpYVN0cmVhbSBvYmplY3QgdG8ge0BsaW5rIE1SZWNvcmRSVEN9LlxyXG4gICAgICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBBIE1lZGlhU3RyZWFtIG9iamVjdCwgZWl0aGVyIGZldGNoZWQgdXNpbmcgZ2V0VXNlck1lZGlhIEFQSSwgb3IgZ2VuZXJhdGVkIHVzaW5nIGNhcHR1cmVTdHJlYW1VbnRpbEVuZGVkIG9yIFdlYkF1ZGlvIEFQSS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuYWRkU3RyZWFtKE1lZGlhU3RyZWFtKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5hZGRTdHJlYW0gPSBmdW5jdGlvbihfbWVkaWFTdHJlYW0pIHtcclxuICAgICAgICBpZiAoX21lZGlhU3RyZWFtKSB7XHJcbiAgICAgICAgICAgIG1lZGlhU3RyZWFtID0gX21lZGlhU3RyZWFtO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHByb3BlcnR5IGNhbiBiZSB1c2VkIHRvIHNldCB0aGUgcmVjb3JkaW5nIHR5cGUgZS5nLiBhdWRpbywgb3IgdmlkZW8sIG9yIGdpZiwgb3IgY2FudmFzLlxyXG4gICAgICogQHByb3BlcnR5IHtvYmplY3R9IG1lZGlhVHlwZSAtIHthdWRpbzogdHJ1ZSwgdmlkZW86IHRydWUsIGdpZjogdHJ1ZX1cclxuICAgICAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogdmFyIHJlY29yZGVyID0gbmV3IE1SZWNvcmRSVEMoKTtcclxuICAgICAqIHJlY29yZGVyLm1lZGlhVHlwZSA9IHtcclxuICAgICAqICAgICBhdWRpbzogdHJ1ZSwgLy8gVFJVRSBvciBTdGVyZW9BdWRpb1JlY29yZGVyIG9yIE1lZGlhU3RyZWFtUmVjb3JkZXJcclxuICAgICAqICAgICB2aWRlbzogdHJ1ZSwgLy8gVFJVRSBvciBXaGFtbXlSZWNvcmRlciBvciBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiAgICAgZ2lmICA6IHRydWUgIC8vIFRSVUUgb3IgR2lmUmVjb3JkZXJcclxuICAgICAqIH07XHJcbiAgICAgKi9cclxuICAgIHRoaXMubWVkaWFUeXBlID0ge1xyXG4gICAgICAgIGF1ZGlvOiB0cnVlLFxyXG4gICAgICAgIHZpZGVvOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RhcnRzIHJlY29yZGluZy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5zdGFydFJlY29yZGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBtZWRpYVR5cGUgPSB0aGlzLm1lZGlhVHlwZTtcclxuICAgICAgICB2YXIgcmVjb3JkZXJUeXBlO1xyXG4gICAgICAgIHZhciBtaW1lVHlwZSA9IHRoaXMubWltZVR5cGUgfHwge1xyXG4gICAgICAgICAgICBhdWRpbzogbnVsbCxcclxuICAgICAgICAgICAgdmlkZW86IG51bGwsXHJcbiAgICAgICAgICAgIGdpZjogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWVkaWFUeXBlLmF1ZGlvICE9PSAnZnVuY3Rpb24nICYmIGlzTWVkaWFSZWNvcmRlckNvbXBhdGlibGUoKSAmJiAhZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAnYXVkaW8nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbWVkaWFUeXBlLmF1ZGlvID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1lZGlhVHlwZS52aWRlbyAhPT0gJ2Z1bmN0aW9uJyAmJiBpc01lZGlhUmVjb3JkZXJDb21wYXRpYmxlKCkgJiYgIWdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ3ZpZGVvJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1lZGlhVHlwZS52aWRlbyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZWRpYVR5cGUuZ2lmICE9PSAnZnVuY3Rpb24nICYmIGlzTWVkaWFSZWNvcmRlckNvbXBhdGlibGUoKSAmJiAhZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAndmlkZW8nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbWVkaWFUeXBlLmdpZiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtZWRpYVR5cGUuYXVkaW8gJiYgIW1lZGlhVHlwZS52aWRlbyAmJiAhbWVkaWFUeXBlLmdpZikge1xyXG4gICAgICAgICAgICB0aHJvdyAnTWVkaWFTdHJlYW0gbXVzdCBoYXZlIGVpdGhlciBhdWRpbyBvciB2aWRlbyB0cmFja3MuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIW1lZGlhVHlwZS5hdWRpbykge1xyXG4gICAgICAgICAgICByZWNvcmRlclR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lZGlhVHlwZS5hdWRpbyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcmVjb3JkZXJUeXBlID0gbWVkaWFUeXBlLmF1ZGlvO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIgPSBuZXcgUmVjb3JkUlRDKG1lZGlhU3RyZWFtLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXVkaW8nLFxyXG4gICAgICAgICAgICAgICAgYnVmZmVyU2l6ZTogdGhpcy5idWZmZXJTaXplLFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlUmF0ZTogdGhpcy5zYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzOiB0aGlzLm51bWJlck9mQXVkaW9DaGFubmVscyB8fCAyLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZUxvZ3M6IHRoaXMuZGlzYWJsZUxvZ3MsXHJcbiAgICAgICAgICAgICAgICByZWNvcmRlclR5cGU6IHJlY29yZGVyVHlwZSxcclxuICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBtaW1lVHlwZS5hdWRpbyxcclxuICAgICAgICAgICAgICAgIHRpbWVTbGljZTogdGhpcy50aW1lU2xpY2UsXHJcbiAgICAgICAgICAgICAgICBvblRpbWVTdGFtcDogdGhpcy5vblRpbWVTdGFtcFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWVkaWFUeXBlLnZpZGVvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEhbWVkaWFUeXBlLnZpZGVvKSB7XHJcbiAgICAgICAgICAgIHJlY29yZGVyVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWVkaWFUeXBlLnZpZGVvID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICByZWNvcmRlclR5cGUgPSBtZWRpYVR5cGUudmlkZW87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBuZXdTdHJlYW0gPSBtZWRpYVN0cmVhbTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc01lZGlhUmVjb3JkZXJDb21wYXRpYmxlKCkgJiYgISFtZWRpYVR5cGUuYXVkaW8gJiYgdHlwZW9mIG1lZGlhVHlwZS5hdWRpbyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZpZGVvVHJhY2sgPSBnZXRUcmFja3MobWVkaWFTdHJlYW0sICd2aWRlbycpWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghIW5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTdHJlYW0gPSBuZXcgTWVkaWFTdHJlYW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTdHJlYW0uYWRkVHJhY2sodmlkZW9UcmFjayk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmRlclR5cGUgJiYgcmVjb3JkZXJUeXBlID09PSBXaGFtbXlSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IGRvZXMgTk9UIHN1cHBvcnQgd2VicC1lbmNvZGluZyB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkZXJUeXBlID0gTWVkaWFTdHJlYW1SZWNvcmRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1N0cmVhbSA9IG5ldyBNZWRpYVN0cmVhbShbdmlkZW9UcmFja10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXIgPSBuZXcgUmVjb3JkUlRDKG5ld1N0cmVhbSwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3ZpZGVvJyxcclxuICAgICAgICAgICAgICAgIHZpZGVvOiB0aGlzLnZpZGVvLFxyXG4gICAgICAgICAgICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgICAgICAgICAgIGZyYW1lSW50ZXJ2YWw6IHRoaXMuZnJhbWVJbnRlcnZhbCB8fCAxMCxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVMb2dzOiB0aGlzLmRpc2FibGVMb2dzLFxyXG4gICAgICAgICAgICAgICAgcmVjb3JkZXJUeXBlOiByZWNvcmRlclR5cGUsXHJcbiAgICAgICAgICAgICAgICBtaW1lVHlwZTogbWltZVR5cGUudmlkZW8sXHJcbiAgICAgICAgICAgICAgICB0aW1lU2xpY2U6IHRoaXMudGltZVNsaWNlLFxyXG4gICAgICAgICAgICAgICAgb25UaW1lU3RhbXA6IHRoaXMub25UaW1lU3RhbXBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lZGlhVHlwZS5hdWRpbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1JlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIW1lZGlhVHlwZS5hdWRpbyAmJiAhIW1lZGlhVHlwZS52aWRlbykge1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzIGxpbmUgcHJldmVudHMgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICAgICAgICAvLyB0b2RvOiBmaXggaXRcclxuICAgICAgICAgICAgaWYgKGlzTWVkaWFSZWNvcmRlckNvbXBhdGlibGUoKSAvKiAmJiAhdGhpcy5hdWRpb1JlY29yZGVyICovICkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hdWRpb1JlY29yZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNlbGYudmlkZW9SZWNvcmRlci5zdGFydFJlY29yZGluZygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi52aWRlb1JlY29yZGVyLmluaXRSZWNvcmRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmF1ZGlvUmVjb3JkZXIuaW5pdFJlY29yZGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCb3RoIHJlY29yZGVycyBhcmUgcmVhZHkgdG8gcmVjb3JkIHRoaW5ncyBhY2N1cmF0ZWx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9SZWNvcmRlci5zdGFydFJlY29yZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF1ZGlvUmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFtZWRpYVR5cGUuZ2lmKSB7XHJcbiAgICAgICAgICAgIHJlY29yZGVyVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWVkaWFUeXBlLmdpZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcmVjb3JkZXJUeXBlID0gbWVkaWFUeXBlLmdpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmdpZlJlY29yZGVyID0gbmV3IFJlY29yZFJUQyhtZWRpYVN0cmVhbSwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2dpZicsXHJcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGU6IHRoaXMuZnJhbWVSYXRlIHx8IDIwMCxcclxuICAgICAgICAgICAgICAgIHF1YWxpdHk6IHRoaXMucXVhbGl0eSB8fCAxMCxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVMb2dzOiB0aGlzLmRpc2FibGVMb2dzLFxyXG4gICAgICAgICAgICAgICAgcmVjb3JkZXJUeXBlOiByZWNvcmRlclR5cGUsXHJcbiAgICAgICAgICAgICAgICBtaW1lVHlwZTogbWltZVR5cGUuZ2lmXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmdpZlJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3BzIHJlY29yZGluZy5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGFsbCBlbmNvZGVycyBmaW5pc2hlZCB0aGVpciBqb2JzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE1SZWNvcmRSVENcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKHJlY29yZGluZyl7XHJcbiAgICAgKiAgICAgdmFyIGF1ZGlvQmxvYiA9IHJlY29yZGluZy5hdWRpbztcclxuICAgICAqICAgICB2YXIgdmlkZW9CbG9iID0gcmVjb3JkaW5nLnZpZGVvO1xyXG4gICAgICogICAgIHZhciBnaWZCbG9iICAgPSByZWNvcmRpbmcuZ2lmO1xyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RvcFJlY29yZGluZyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hdWRpb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKGJsb2JVUkwpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJsb2JVUkwsICdhdWRpbycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb1JlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oYmxvYlVSTCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYmxvYlVSTCwgJ3ZpZGVvJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2lmUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5naWZSZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKGJsb2JVUkwpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJsb2JVUkwsICdnaWYnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHBhdXNlcyByZWNvcmRpbmcuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnBhdXNlUmVjb3JkaW5nKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucGF1c2VSZWNvcmRpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5hdWRpb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlci5wYXVzZVJlY29yZGluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXIucGF1c2VSZWNvcmRpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdpZlJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2lmUmVjb3JkZXIucGF1c2VSZWNvcmRpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyByZWNvcmRpbmcuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlc3VtZVJlY29yZGluZygpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc3VtZVJlY29yZGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyLnJlc3VtZVJlY29yZGluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXIucmVzdW1lUmVjb3JkaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5naWZSZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmdpZlJlY29yZGVyLnJlc3VtZVJlY29yZGluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBtYW51YWxseSBnZXQgYWxsIHJlY29yZGVkIGJsb2JzLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBbGwgcmVjb3JkZWQgYmxvYnMgYXJlIHBhc3NlZCBiYWNrIHRvIHRoZSBcImNhbGxiYWNrXCIgZnVuY3Rpb24uXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmdldEJsb2IoZnVuY3Rpb24ocmVjb3JkaW5nKXtcclxuICAgICAqICAgICB2YXIgYXVkaW9CbG9iID0gcmVjb3JkaW5nLmF1ZGlvO1xyXG4gICAgICogICAgIHZhciB2aWRlb0Jsb2IgPSByZWNvcmRpbmcudmlkZW87XHJcbiAgICAgKiAgICAgdmFyIGdpZkJsb2IgICA9IHJlY29yZGluZy5naWY7XHJcbiAgICAgKiB9KTtcclxuICAgICAqIC8vIG9yXHJcbiAgICAgKiB2YXIgYXVkaW9CbG9iID0gcmVjb3JkZXIuZ2V0QmxvYigpLmF1ZGlvO1xyXG4gICAgICogdmFyIHZpZGVvQmxvYiA9IHJlY29yZGVyLmdldEJsb2IoKS52aWRlbztcclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRCbG9iID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0ge307XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgb3V0cHV0LmF1ZGlvID0gdGhpcy5hdWRpb1JlY29yZGVyLmdldEJsb2IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnZpZGVvID0gdGhpcy52aWRlb1JlY29yZGVyLmdldEJsb2IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdpZlJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5naWYgPSB0aGlzLmdpZlJlY29yZGVyLmdldEJsb2IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhvdXRwdXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95IGFsbCByZWNvcmRlciBpbnN0YW5jZXMuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmRlc3Ryb3koKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2lmUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5naWZSZWNvcmRlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2lmUmVjb3JkZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBtYW51YWxseSBnZXQgYWxsIHJlY29yZGVkIGJsb2JzJyBEYXRhVVJMcy5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQWxsIHJlY29yZGVkIGJsb2JzJyBEYXRhVVJMcyBhcmUgcGFzc2VkIGJhY2sgdG8gdGhlIFwiY2FsbGJhY2tcIiBmdW5jdGlvbi5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuZ2V0RGF0YVVSTChmdW5jdGlvbihyZWNvcmRpbmcpe1xyXG4gICAgICogICAgIHZhciBhdWRpb0RhdGFVUkwgPSByZWNvcmRpbmcuYXVkaW87XHJcbiAgICAgKiAgICAgdmFyIHZpZGVvRGF0YVVSTCA9IHJlY29yZGluZy52aWRlbztcclxuICAgICAqICAgICB2YXIgZ2lmRGF0YVVSTCAgID0gcmVjb3JkaW5nLmdpZjtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmdldERhdGFVUkwgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZ2V0QmxvYihmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgICAgICAgIGlmIChibG9iLmF1ZGlvICYmIGJsb2IudmlkZW8pIHtcclxuICAgICAgICAgICAgICAgIGdldERhdGFVUkwoYmxvYi5hdWRpbywgZnVuY3Rpb24oX2F1ZGlvRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldERhdGFVUkwoYmxvYi52aWRlbywgZnVuY3Rpb24oX3ZpZGVvRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogX2F1ZGlvRGF0YVVSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvOiBfdmlkZW9EYXRhVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmxvYi5hdWRpbykge1xyXG4gICAgICAgICAgICAgICAgZ2V0RGF0YVVSTChibG9iLmF1ZGlvLCBmdW5jdGlvbihfYXVkaW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogX2F1ZGlvRGF0YVVSTFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmxvYi52aWRlbykge1xyXG4gICAgICAgICAgICAgICAgZ2V0RGF0YVVSTChibG9iLnZpZGVvLCBmdW5jdGlvbihfdmlkZW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlbzogX3ZpZGVvRGF0YVVSTFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RGF0YVVSTChibG9iLCBjYWxsYmFjazAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdlYldvcmtlciA9IHByb2Nlc3NJbldlYldvcmtlcihmdW5jdGlvbiByZWFkRmlsZShfYmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKG5ldyBGaWxlUmVhZGVyU3luYygpLnJlYWRBc0RhdGFVUkwoX2Jsb2IpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHdlYldvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMDAoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHdlYldvcmtlci5wb3N0TWVzc2FnZShibG9iKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazAwKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc0luV2ViV29ya2VyKF9mdW5jdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgYmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW19mdW5jdGlvbi50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgJ3RoaXMub25tZXNzYWdlID0gIGZ1bmN0aW9uIChlZWUpIHsnICsgX2Z1bmN0aW9uLm5hbWUgKyAnKGVlZS5kYXRhKTt9J1xyXG4gICAgICAgICAgICBdLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCdcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIoYmxvYik7XHJcbiAgICAgICAgICAgIHZhciB1cmw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgVVJMICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gVVJMO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB3ZWJraXRVUkwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSB3ZWJraXRVUkw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnTmVpdGhlciBVUkwgbm9yIHdlYmtpdFVSTCBkZXRlY3RlZC4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVybC5yZXZva2VPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGFzayB7QGxpbmsgTVJlY29yZFJUQ30gdG8gd3JpdGUgYWxsIHJlY29yZGVkIGJsb2JzIGludG8gSW5kZXhlZERCIHN0b3JhZ2UuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLndyaXRlVG9EaXNrKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMud3JpdGVUb0Rpc2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBSZWNvcmRSVEMud3JpdGVUb0Rpc2soe1xyXG4gICAgICAgICAgICBhdWRpbzogdGhpcy5hdWRpb1JlY29yZGVyLFxyXG4gICAgICAgICAgICB2aWRlbzogdGhpcy52aWRlb1JlY29yZGVyLFxyXG4gICAgICAgICAgICBnaWY6IHRoaXMuZ2lmUmVjb3JkZXJcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBpbnZva2UgYSBzYXZlLWFzIGRpYWxvZyBmb3IgYWxsIHJlY29yZGVkIGJsb2JzLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFyZ3MgLSB7YXVkaW86ICdhdWRpby1uYW1lJywgdmlkZW86ICd2aWRlby1uYW1lJywgZ2lmOiAnZ2lmLW5hbWUnfVxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE1SZWNvcmRSVENcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zYXZlKHtcclxuICAgICAqICAgICBhdWRpbzogJ2F1ZGlvLWZpbGUtbmFtZScsXHJcbiAgICAgKiAgICAgdmlkZW86ICd2aWRlby1maWxlLW5hbWUnLFxyXG4gICAgICogICAgIGdpZiAgOiAnZ2lmLWZpbGUtbmFtZSdcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnNhdmUgPSBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgYXJncyA9IGFyZ3MgfHwge1xyXG4gICAgICAgICAgICBhdWRpbzogdHJ1ZSxcclxuICAgICAgICAgICAgdmlkZW86IHRydWUsXHJcbiAgICAgICAgICAgIGdpZjogdHJ1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghIWFyZ3MuYXVkaW8gJiYgdGhpcy5hdWRpb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlci5zYXZlKHR5cGVvZiBhcmdzLmF1ZGlvID09PSAnc3RyaW5nJyA/IGFyZ3MuYXVkaW8gOiAnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFhcmdzLnZpZGVvICYmIHRoaXMudmlkZW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXIuc2F2ZSh0eXBlb2YgYXJncy52aWRlbyA9PT0gJ3N0cmluZycgPyBhcmdzLnZpZGVvIDogJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISFhcmdzLmdpZiAmJiB0aGlzLmdpZlJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2lmUmVjb3JkZXIuc2F2ZSh0eXBlb2YgYXJncy5naWYgPT09ICdzdHJpbmcnID8gYXJncy5naWYgOiAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGdldCBhbGwgcmVjb3JkZWQgYmxvYnMgZnJvbSBJbmRleGVkREIgc3RvcmFnZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSAnYWxsJyBvciAnYXVkaW8nIG9yICd2aWRlbycgb3IgJ2dpZidcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBnZXQgYWxsIHN0b3JlZCBibG9icy5cclxuICogQG1ldGhvZFxyXG4gKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gKiBAZXhhbXBsZVxyXG4gKiBNUmVjb3JkUlRDLmdldEZyb21EaXNrKCdhbGwnLCBmdW5jdGlvbihkYXRhVVJMLCB0eXBlKXtcclxuICogICAgIGlmKHR5cGUgPT09ICdhdWRpbycpIHsgfVxyXG4gKiAgICAgaWYodHlwZSA9PT0gJ3ZpZGVvJykgeyB9XHJcbiAqICAgICBpZih0eXBlID09PSAnZ2lmJykgICB7IH1cclxuICogfSk7XHJcbiAqL1xyXG5NUmVjb3JkUlRDLmdldEZyb21EaXNrID0gUmVjb3JkUlRDLmdldEZyb21EaXNrO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIHN0b3JlIHJlY29yZGVkIGJsb2JzIGludG8gSW5kZXhlZERCIHN0b3JhZ2UuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0ge2F1ZGlvOiBCbG9iLCB2aWRlbzogQmxvYiwgZ2lmOiBCbG9ifVxyXG4gKiBAbWV0aG9kXHJcbiAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAqIEBleGFtcGxlXHJcbiAqIE1SZWNvcmRSVEMud3JpdGVUb0Rpc2soe1xyXG4gKiAgICAgYXVkaW86IGF1ZGlvQmxvYixcclxuICogICAgIHZpZGVvOiB2aWRlb0Jsb2IsXHJcbiAqICAgICBnaWYgIDogZ2lmQmxvYlxyXG4gKiB9KTtcclxuICovXHJcbk1SZWNvcmRSVEMud3JpdGVUb0Rpc2sgPSBSZWNvcmRSVEMud3JpdGVUb0Rpc2s7XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5NUmVjb3JkUlRDID0gTVJlY29yZFJUQztcclxufVxuXHJcbnZhciBicm93c2VyRmFrZVVzZXJBZ2VudCA9ICdGYWtlLzUuMCAoRmFrZU9TKSBBcHBsZVdlYktpdC8xMjMgKEtIVE1MLCBsaWtlIEdlY2tvKSBGYWtlLzEyLjMuNDU2Ny44OSBGYWtlLzEyMy40NSc7XHJcblxyXG4oZnVuY3Rpb24odGhhdCkge1xyXG4gICAgaWYgKCF0aGF0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2xvYmFsLm5hdmlnYXRvciA9IHtcclxuICAgICAgICB1c2VyQWdlbnQ6IGJyb3dzZXJGYWtlVXNlckFnZW50LFxyXG4gICAgICAgIGdldFVzZXJNZWRpYTogZnVuY3Rpb24oKSB7fVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIWdsb2JhbC5jb25zb2xlKSB7XHJcbiAgICAgICAgZ2xvYmFsLmNvbnNvbGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbC5jb25zb2xlLmxvZyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGdsb2JhbC5jb25zb2xlLmVycm9yID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGdsb2JhbC5jb25zb2xlLmVycm9yID0gZ2xvYmFsLmNvbnNvbGUubG9nID0gZ2xvYmFsLmNvbnNvbGUubG9nIHx8IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCBkb2N1bWVudDp0cnVlICovXHJcbiAgICAgICAgdGhhdC5kb2N1bWVudCA9IHt9O1xyXG5cclxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50ID0gZG9jdW1lbnQuY2FwdHVyZVN0cmVhbSA9IGRvY3VtZW50Lm1vekNhcHR1cmVTdHJlYW0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIGdldENvbnRleHQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGxheTogZnVuY3Rpb24oKSB7fSxcclxuICAgICAgICAgICAgICAgIHBhdXNlOiBmdW5jdGlvbigpIHt9LFxyXG4gICAgICAgICAgICAgICAgZHJhd0ltYWdlOiBmdW5jdGlvbigpIHt9LFxyXG4gICAgICAgICAgICAgICAgdG9EYXRhVVJMOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhhdC5IVE1MVmlkZW9FbGVtZW50ID0gZnVuY3Rpb24oKSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIGxvY2F0aW9uOnRydWUgKi9cclxuICAgICAgICB0aGF0LmxvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICBwcm90b2NvbDogJ2ZpbGU6JyxcclxuICAgICAgICAgICAgaHJlZjogJycsXHJcbiAgICAgICAgICAgIGhhc2g6ICcnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHNjcmVlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCBzY3JlZW46dHJ1ZSAqL1xyXG4gICAgICAgIHRoYXQuc2NyZWVuID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIFVSTCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCBzY3JlZW46dHJ1ZSAqL1xyXG4gICAgICAgIHRoYXQuVVJMID0ge1xyXG4gICAgICAgICAgICBjcmVhdGVPYmplY3RVUkw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXZva2VPYmplY3RVUkw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKmdsb2JhbCB3aW5kb3c6dHJ1ZSAqL1xyXG4gICAgdGhhdC53aW5kb3cgPSBnbG9iYWw7XHJcbn0pKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogbnVsbCk7XG5cclxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuLy8gQ3Jvc3MtQnJvd3Nlci1EZWNsYXJhdGlvbnMuanNcclxuXHJcbi8vIGFuaW1hdGlvbi1mcmFtZSB1c2VkIGluIFdlYk0gcmVjb3JkaW5nXHJcblxyXG4vKmpzaGludCAtVzA3OSAqL1xyXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBpZiAodHlwZW9mIHdlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWU6dHJ1ZSAqL1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1velJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWU6dHJ1ZSAqL1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IG1velJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIHJlcXVlc3RBbmltYXRpb25GcmFtZTp0cnVlICovXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gbXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gdmlhOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvMTU3OTY3MVxyXG4gICAgICAgIHZhciBsYXN0VGltZSA9IDA7XHJcblxyXG4gICAgICAgIC8qZ2xvYmFsIHJlcXVlc3RBbmltYXRpb25GcmFtZTp0cnVlICovXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcclxuICAgICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuLypqc2hpbnQgLVcwNzkgKi9cclxudmFyIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1xyXG5pZiAodHlwZW9mIGNhbmNlbEFuaW1hdGlvbkZyYW1lID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgaWYgKHR5cGVvZiB3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCBjYW5jZWxBbmltYXRpb25GcmFtZTp0cnVlICovXHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vekNhbmNlbEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIGNhbmNlbEFuaW1hdGlvbkZyYW1lOnRydWUgKi9cclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IG1vekNhbmNlbEFuaW1hdGlvbkZyYW1lO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbXNDYW5jZWxBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCBjYW5jZWxBbmltYXRpb25GcmFtZTp0cnVlICovXHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBtc0NhbmNlbEFuaW1hdGlvbkZyYW1lO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLypnbG9iYWwgY2FuY2VsQW5pbWF0aW9uRnJhbWU6dHJ1ZSAqL1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBXZWJBdWRpbyBBUEkgcmVwcmVzZW50ZXJcclxudmFyIEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQ7XHJcblxyXG5pZiAodHlwZW9mIEF1ZGlvQ29udGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGlmICh0eXBlb2Ygd2Via2l0QXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIEF1ZGlvQ29udGV4dDp0cnVlICovXHJcbiAgICAgICAgQXVkaW9Db250ZXh0ID0gd2Via2l0QXVkaW9Db250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgbW96QXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIEF1ZGlvQ29udGV4dDp0cnVlICovXHJcbiAgICAgICAgQXVkaW9Db250ZXh0ID0gbW96QXVkaW9Db250ZXh0O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKmpzaGludCAtVzA3OSAqL1xyXG52YXIgVVJMID0gd2luZG93LlVSTDtcclxuXHJcbmlmICh0eXBlb2YgVVJMID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2Via2l0VVJMICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgLypnbG9iYWwgVVJMOnRydWUgKi9cclxuICAgIFVSTCA9IHdlYmtpdFVSTDtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID09PSAndW5kZWZpbmVkJykgeyAvLyBtYXliZSB3aW5kb3cubmF2aWdhdG9yP1xyXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGlzRWRnZSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRWRnZScpICE9PSAtMSAmJiAoISFuYXZpZ2F0b3IubXNTYXZlQmxvYiB8fCAhIW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKTtcclxudmFyIGlzT3BlcmEgPSAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ09QUi8nKSAhPT0gLTE7XHJcbnZhciBpc1NhZmFyaSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzYWZhcmkvJykgIT09IC0xICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUvJykgPT09IC0xO1xyXG52YXIgaXNDaHJvbWUgPSAoIWlzT3BlcmEgJiYgIWlzRWRnZSAmJiAhIW5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEpIHx8IGlzRWxlY3Ryb24oKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lLycpICE9PSAtMTtcclxuXHJcbnZhciBNZWRpYVN0cmVhbSA9IHdpbmRvdy5NZWRpYVN0cmVhbTtcclxuXHJcbmlmICh0eXBlb2YgTWVkaWFTdHJlYW0gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3ZWJraXRNZWRpYVN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIE1lZGlhU3RyZWFtID0gd2Via2l0TWVkaWFTdHJlYW07XHJcbn1cclxuXHJcbi8qZ2xvYmFsIE1lZGlhU3RyZWFtOnRydWUgKi9cclxuaWYgKHR5cGVvZiBNZWRpYVN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIG92ZXJyaWRlIFwic3RvcFwiIG1ldGhvZCBmb3IgYWxsIGJyb3dzZXJzXHJcbiAgICBpZiAodHlwZW9mIE1lZGlhU3RyZWFtLnByb3RvdHlwZS5zdG9wID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIE1lZGlhU3RyZWFtLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xyXG4gICAgICAgICAgICAgICAgdHJhY2suc3RvcCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBiZWxvdyBmdW5jdGlvbiB2aWE6IGh0dHA6Ly9nb28uZ2wvQjNhZThjXHJcbi8qKlxyXG4gKiBSZXR1cm4gaHVtYW4tcmVhZGFibGUgZmlsZSBzaXplLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gYnl0ZXMgLSBQYXNzIGJ5dGVzIGFuZCBnZXQgZm9ybWF0dGVkIHN0cmluZy5cclxuICogQHJldHVybnMge3N0cmluZ30gLSBmb3JtYXR0ZWQgc3RyaW5nXHJcbiAqIEBleGFtcGxlXHJcbiAqIGJ5dGVzVG9TaXplKDEwMjQqMTAyNCo1KSA9PT0gJzUgR0InXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICovXHJcbmZ1bmN0aW9uIGJ5dGVzVG9TaXplKGJ5dGVzKSB7XHJcbiAgICB2YXIgayA9IDEwMDA7XHJcbiAgICB2YXIgc2l6ZXMgPSBbJ0J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJ107XHJcbiAgICBpZiAoYnl0ZXMgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gJzAgQnl0ZXMnO1xyXG4gICAgfVxyXG4gICAgdmFyIGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKSwgMTApO1xyXG4gICAgcmV0dXJuIChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b1ByZWNpc2lvbigzKSArICcgJyArIHNpemVzW2ldO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtCbG9ifSBmaWxlIC0gRmlsZSBvciBCbG9iIG9iamVjdC4gVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAtIE9wdGlvbmFsIGZpbGUgbmFtZSBlLmcuIFwiUmVjb3JkZWQtVmlkZW8ud2VibVwiXHJcbiAqIEBleGFtcGxlXHJcbiAqIGludm9rZVNhdmVBc0RpYWxvZyhibG9iIG9yIGZpbGUsIFtvcHRpb25hbF0gZmlsZU5hbWUpO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBpbnZva2VTYXZlQXNEaWFsb2coZmlsZSwgZmlsZU5hbWUpIHtcclxuICAgIGlmICghZmlsZSkge1xyXG4gICAgICAgIHRocm93ICdCbG9iIG9iamVjdCBpcyByZXF1aXJlZC4nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZmlsZS50eXBlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZmlsZS50eXBlID0gJ3ZpZGVvL3dlYm0nO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZpbGVFeHRlbnNpb24gPSAoZmlsZS50eXBlIHx8ICd2aWRlby93ZWJtJykuc3BsaXQoJy8nKVsxXTtcclxuXHJcbiAgICBpZiAoZmlsZU5hbWUgJiYgZmlsZU5hbWUuaW5kZXhPZignLicpICE9PSAtMSkge1xyXG4gICAgICAgIHZhciBzcGxpdHRlZCA9IGZpbGVOYW1lLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgZmlsZU5hbWUgPSBzcGxpdHRlZFswXTtcclxuICAgICAgICBmaWxlRXh0ZW5zaW9uID0gc3BsaXR0ZWRbMV07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZpbGVGdWxsTmFtZSA9IChmaWxlTmFtZSB8fCAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOTk5OTk5OTk5OSkgKyA4ODg4ODg4ODgpKSArICcuJyArIGZpbGVFeHRlbnNpb247XHJcblxyXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoZmlsZSwgZmlsZUZ1bGxOYW1lKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvci5tc1NhdmVCbG9iICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubXNTYXZlQmxvYihmaWxlLCBmaWxlRnVsbE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBoeXBlcmxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBoeXBlcmxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICBoeXBlcmxpbmsuZG93bmxvYWQgPSBmaWxlRnVsbE5hbWU7XHJcblxyXG4gICAgaHlwZXJsaW5rLnN0eWxlID0gJ2Rpc3BsYXk6bm9uZTtvcGFjaXR5OjA7Y29sb3I6dHJhbnNwYXJlbnQ7JztcclxuICAgIChkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuYXBwZW5kQ2hpbGQoaHlwZXJsaW5rKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGh5cGVybGluay5jbGljayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGh5cGVybGluay5jbGljaygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBoeXBlcmxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XHJcbiAgICAgICAgaHlwZXJsaW5rLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xyXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXHJcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTChoeXBlcmxpbmsuaHJlZik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vY2hldG9uL2lzLWVsZWN0cm9uL2Jsb2IvbWFzdGVyL2luZGV4LmpzXHJcbiAqKi9cclxuZnVuY3Rpb24gaXNFbGVjdHJvbigpIHtcclxuICAgIC8vIFJlbmRlcmVyIHByb2Nlc3NcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnByb2Nlc3MgPT09ICdvYmplY3QnICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIHByb2Nlc3NcclxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMgPT09ICdvYmplY3QnICYmICEhcHJvY2Vzcy52ZXJzaW9ucy5lbGVjdHJvbikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERldGVjdCB0aGUgdXNlciBhZ2VudCB3aGVuIHRoZSBgbm9kZUludGVncmF0aW9uYCBvcHRpb24gaXMgc2V0IHRvIHRydWVcclxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbmF2aWdhdG9yLnVzZXJBZ2VudCA9PT0gJ3N0cmluZycgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdFbGVjdHJvbicpID49IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRyYWNrcyhzdHJlYW0sIGtpbmQpIHtcclxuICAgIGlmICghc3RyZWFtIHx8ICFzdHJlYW0uZ2V0VHJhY2tzKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHJlYW0uZ2V0VHJhY2tzKCkuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICByZXR1cm4gdC5raW5kID09PSAoa2luZCB8fCAnYXVkaW8nKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTcmNPYmplY3Qoc3RyZWFtLCBlbGVtZW50KSB7XHJcbiAgICBpZiAoJ3NyY09iamVjdCcgaW4gZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgfSBlbHNlIGlmICgnbW96U3JjT2JqZWN0JyBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5tb3pTcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgfVxyXG59XG5cclxuLy8gX19fX19fX19fXyAodXNlZCB0byBoYW5kbGUgc3R1ZmYgbGlrZSBodHRwOi8vZ29vLmdsL3htRTVlZykgaXNzdWUgIzEyOVxyXG4vLyBTdG9yYWdlLmpzXHJcblxyXG4vKipcclxuICogU3RvcmFnZSBpcyBhIHN0YW5kYWxvbmUgb2JqZWN0IHVzZWQgYnkge0BsaW5rIFJlY29yZFJUQ30gdG8gc3RvcmUgcmV1c2FibGUgb2JqZWN0cyBlLmcuIFwibmV3IEF1ZGlvQ29udGV4dFwiLlxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQGV4YW1wbGVcclxuICogU3RvcmFnZS5BdWRpb0NvbnRleHQgPT09IHdlYmtpdEF1ZGlvQ29udGV4dFxyXG4gKiBAcHJvcGVydHkge3dlYmtpdEF1ZGlvQ29udGV4dH0gQXVkaW9Db250ZXh0IC0gS2VlcHMgYSByZWZlcmVuY2UgdG8gQXVkaW9Db250ZXh0IG9iamVjdC5cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKi9cclxuXHJcbnZhciBTdG9yYWdlID0ge307XHJcblxyXG5pZiAodHlwZW9mIEF1ZGlvQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFN0b3JhZ2UuQXVkaW9Db250ZXh0ID0gQXVkaW9Db250ZXh0O1xyXG59IGVsc2UgaWYgKHR5cGVvZiB3ZWJraXRBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBTdG9yYWdlLkF1ZGlvQ29udGV4dCA9IHdlYmtpdEF1ZGlvQ29udGV4dDtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBSZWNvcmRSVEMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWNvcmRSVEMuU3RvcmFnZSA9IFN0b3JhZ2U7XHJcbn1cblxyXG5mdW5jdGlvbiBpc01lZGlhUmVjb3JkZXJDb21wYXRpYmxlKCkge1xyXG4gICAgdmFyIGlzT3BlcmEgPSAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMDtcclxuICAgIHZhciBpc0Nocm9tZSA9ICghIXdpbmRvdy5jaHJvbWUgJiYgIWlzT3BlcmEpIHx8IGlzRWxlY3Ryb24oKTtcclxuICAgIHZhciBpc0ZpcmVmb3ggPSB0eXBlb2Ygd2luZG93Lkluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcclxuXHJcbiAgICBpZiAoaXNGaXJlZm94KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG5WZXIgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbjtcclxuICAgIHZhciBuQWd0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIHZhciBmdWxsVmVyc2lvbiA9ICcnICsgcGFyc2VGbG9hdChuYXZpZ2F0b3IuYXBwVmVyc2lvbik7XHJcbiAgICB2YXIgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQobmF2aWdhdG9yLmFwcFZlcnNpb24sIDEwKTtcclxuICAgIHZhciBuYW1lT2Zmc2V0LCB2ZXJPZmZzZXQsIGl4O1xyXG5cclxuICAgIGlmIChpc0Nocm9tZSB8fCBpc09wZXJhKSB7XHJcbiAgICAgICAgdmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdDaHJvbWUnKTtcclxuICAgICAgICBmdWxsVmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRyaW0gdGhlIGZ1bGxWZXJzaW9uIHN0cmluZyBhdCBzZW1pY29sb24vc3BhY2UgaWYgcHJlc2VudFxyXG4gICAgaWYgKChpeCA9IGZ1bGxWZXJzaW9uLmluZGV4T2YoJzsnKSkgIT09IC0xKSB7XHJcbiAgICAgICAgZnVsbFZlcnNpb24gPSBmdWxsVmVyc2lvbi5zdWJzdHJpbmcoMCwgaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgoaXggPSBmdWxsVmVyc2lvbi5pbmRleE9mKCcgJykpICE9PSAtMSkge1xyXG4gICAgICAgIGZ1bGxWZXJzaW9uID0gZnVsbFZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWpvclZlcnNpb24gPSBwYXJzZUludCgnJyArIGZ1bGxWZXJzaW9uLCAxMCk7XHJcblxyXG4gICAgaWYgKGlzTmFOKG1ham9yVmVyc2lvbikpIHtcclxuICAgICAgICBmdWxsVmVyc2lvbiA9ICcnICsgcGFyc2VGbG9hdChuYXZpZ2F0b3IuYXBwVmVyc2lvbik7XHJcbiAgICAgICAgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQobmF2aWdhdG9yLmFwcFZlcnNpb24sIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWFqb3JWZXJzaW9uID49IDQ5O1xyXG59XG5cclxuLy8gX19fX19fX19fX19fX19fX19fX19fX1xuLy8gTWVkaWFTdHJlYW1SZWNvcmRlci5qc1xuXG4vKipcbiAqIE1lZGlhU3RyZWFtUmVjb3JkZXIgaXMgYW4gYWJzdHJhY3Rpb24gbGF5ZXIgZm9yIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vbWVkaWFjYXB0dXJlLXJlY29yZC9NZWRpYVJlY29yZGVyLmh0bWx8TWVkaWFSZWNvcmRlciBBUEl9LiBJdCBpcyB1c2VkIGJ5IHtAbGluayBSZWNvcmRSVEN9IHRvIHJlY29yZCBNZWRpYVN0cmVhbShzKSBpbiBib3RoIENocm9tZSBhbmQgRmlyZWZveC5cbiAqIEBzdW1tYXJ5IFJ1bnMgdG9wIG92ZXIge0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9tZWRpYWNhcHR1cmUtcmVjb3JkL01lZGlhUmVjb3JkZXIuaHRtbHxNZWRpYVJlY29yZGVyIEFQSX0uXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XG4gKiBAYXV0aG9yIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFufE11YXogS2hhbn1cbiAqIEB0eXBlZGVmIE1lZGlhU3RyZWFtUmVjb3JkZXJcbiAqIEBjbGFzc1xuICogQGV4YW1wbGVcbiAqIHZhciBjb25maWcgPSB7XG4gKiAgICAgbWltZVR5cGU6ICd2aWRlby93ZWJtJywgLy8gdnA4LCB2cDksIGgyNjQsIG1rdiwgb3B1cy92b3JiaXNcbiAqICAgICBhdWRpb0JpdHNQZXJTZWNvbmQgOiAyNTYgKiA4ICogMTAyNCxcbiAqICAgICB2aWRlb0JpdHNQZXJTZWNvbmQgOiAyNTYgKiA4ICogMTAyNCxcbiAqICAgICBiaXRzUGVyU2Vjb25kOiAyNTYgKiA4ICogMTAyNCwgIC8vIGlmIHRoaXMgaXMgcHJvdmlkZWQsIHNraXAgYWJvdmUgdHdvXG4gKiAgICAgY2hlY2tGb3JJbmFjdGl2ZVRyYWNrczogdHJ1ZSxcbiAqICAgICB0aW1lU2xpY2U6IDEwMDAsIC8vIGNvbmNhdGVuYXRlIGludGVydmFscyBiYXNlZCBibG9ic1xuICogICAgIG9uZGF0YWF2YWlsYWJsZTogZnVuY3Rpb24oKSB7fSAvLyBnZXQgaW50ZXJ2YWxzIGJhc2VkIGJsb2JzXG4gKiB9XG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgTWVkaWFTdHJlYW1SZWNvcmRlcihtZWRpYVN0cmVhbSwgY29uZmlnKTtcbiAqIHJlY29yZGVyLnJlY29yZCgpO1xuICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XG4gKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAqXG4gKiAgICAgLy8gb3JcbiAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmJsb2I7XG4gKiB9KTtcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIC0gTWVkaWFTdHJlYW0gb2JqZWN0IGZldGNoZWQgdXNpbmcgZ2V0VXNlck1lZGlhIEFQSSBvciBnZW5lcmF0ZWQgdXNpbmcgY2FwdHVyZVN0cmVhbVVudGlsRW5kZWQgb3IgV2ViQXVkaW8gQVBJLlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIHtkaXNhYmxlTG9nczp0cnVlLCBpbml0Q2FsbGJhY2s6IGZ1bmN0aW9uLCBtaW1lVHlwZTogXCJ2aWRlby93ZWJtXCIsIHRpbWVTbGljZTogMTAwMH1cbiAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiBmaXJzdCBhcmd1bWVudCBcIk1lZGlhU3RyZWFtXCIgaXMgbWlzc2luZy4gQWxzbyB0aHJvd3MgZXJyb3IgaWYgXCJNZWRpYVJlY29yZGVyIEFQSVwiIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLlxuICovXG5cbmZ1bmN0aW9uIE1lZGlhU3RyZWFtUmVjb3JkZXIobWVkaWFTdHJlYW0sIGNvbmZpZykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICh0eXBlb2YgbWVkaWFTdHJlYW0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93ICdGaXJzdCBhcmd1bWVudCBcIk1lZGlhU3RyZWFtXCIgaXMgcmVxdWlyZWQuJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIE1lZGlhUmVjb3JkZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93ICdZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydHMgTWVkaWEgUmVjb3JkZXIgQVBJLiBQbGVhc2UgdHJ5IG90aGVyIG1vZHVsZXMgZS5nLiBXaGFtbXlSZWNvcmRlciBvciBTdGVyZW9BdWRpb1JlY29yZGVyLic7XG4gICAgfVxuXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHtcbiAgICAgICAgLy8gYml0c1BlclNlY29uZDogMjU2ICogOCAqIDEwMjQsXG4gICAgICAgIG1pbWVUeXBlOiAndmlkZW8vd2VibSdcbiAgICB9O1xuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAgIGlmIChnZXRUcmFja3MobWVkaWFTdHJlYW0sICd2aWRlbycpLmxlbmd0aCAmJiBnZXRUcmFja3MobWVkaWFTdHJlYW0sICdhdWRpbycpLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHN0cmVhbTtcbiAgICAgICAgICAgIGlmICghIW5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcbiAgICAgICAgICAgICAgICBzdHJlYW0gPSBuZXcgTWVkaWFTdHJlYW0oKTtcbiAgICAgICAgICAgICAgICBzdHJlYW0uYWRkVHJhY2soZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAnYXVkaW8nKVswXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHdlYmtpdE1lZGlhU3RyZWFtXG4gICAgICAgICAgICAgICAgc3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKGdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ2F1ZGlvJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVkaWFTdHJlYW0gPSBzdHJlYW07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbmZpZy5taW1lVHlwZSB8fCBjb25maWcubWltZVR5cGUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2F1ZGlvJykgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25maWcubWltZVR5cGUgPSBpc0Nocm9tZSA/ICdhdWRpby93ZWJtJyA6ICdhdWRpby9vZ2cnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5taW1lVHlwZSAmJiBjb25maWcubWltZVR5cGUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9PSAnYXVkaW8vb2dnJyAmJiAhIW5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcbiAgICAgICAgICAgIC8vIGZvcmNpbmcgYmV0dGVyIGNvZGVjcyBvbiBGaXJlZm94ICh2aWEgIzE2NilcbiAgICAgICAgICAgIGNvbmZpZy5taW1lVHlwZSA9ICdhdWRpby9vZ2cnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFycmF5T2ZCbG9icyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyBhcnJheSBvZiBibG9icy4gVXNlIG9ubHkgd2l0aCBcInRpbWVTbGljZVwiLiBJdHMgdXNlZnVsIHRvIHByZXZpZXcgcmVjb3JkaW5nIGFueXRpbWUsIHdpdGhvdXQgdXNpbmcgdGhlIFwic3RvcFwiIG1ldGhvZC5cbiAgICAgKiBAbWV0aG9kXG4gICAgICogQG1lbWJlcm9mIE1lZGlhU3RyZWFtUmVjb3JkZXJcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHZhciBhcnJheU9mQmxvYnMgPSByZWNvcmRlci5nZXRBcnJheU9mQmxvYnMoKTtcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYXJyYXkgb2YgcmVjb3JkZWQgYmxvYnMuXG4gICAgICovXG4gICAgdGhpcy5nZXRBcnJheU9mQmxvYnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5T2ZCbG9icztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyBNZWRpYVN0cmVhbS5cbiAgICAgKiBAbWV0aG9kXG4gICAgICogQG1lbWJlcm9mIE1lZGlhU3RyZWFtUmVjb3JkZXJcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHJlY29yZGVyLnJlY29yZCgpO1xuICAgICAqL1xuICAgIHRoaXMucmVjb3JkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIHNldCBkZWZhdWx0c1xuICAgICAgICBzZWxmLmJsb2IgPSBudWxsO1xuICAgICAgICBzZWxmLmNsZWFyUmVjb3JkZWREYXRhKCk7XG4gICAgICAgIHNlbGYudGltZXN0YW1wcyA9IFtdO1xuICAgICAgICBhbGxTdGF0ZXMgPSBbXTtcbiAgICAgICAgYXJyYXlPZkJsb2JzID0gW107XG5cbiAgICAgICAgdmFyIHJlY29yZGVySGludHMgPSBjb25maWc7XG5cbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXNzaW5nIGZvbGxvd2luZyBjb25maWcgb3ZlciBNZWRpYVJlY29yZGVyIEFQSS4nLCByZWNvcmRlckhpbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyKSB7XG4gICAgICAgICAgICAvLyBtYW5kYXRvcnkgdG8gbWFrZSBzdXJlIEZpcmVmb3ggZG9lc24ndCBmYWlscyB0byByZWNvcmQgc3RyZWFtcyAzLTQgdGltZXMgd2l0aG91dCByZWxvYWRpbmcgdGhlIHBhZ2UuXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0Nocm9tZSAmJiAhaXNNZWRpYVJlY29yZGVyQ29tcGF0aWJsZSgpKSB7XG4gICAgICAgICAgICAvLyB0byBzdXBwb3J0IHZpZGVvLW9ubHkgcmVjb3JkaW5nIG9uIHN0YWJsZVxuICAgICAgICAgICAgcmVjb3JkZXJIaW50cyA9ICd2aWRlby92cDgnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZCA9PT0gJ2Z1bmN0aW9uJyAmJiByZWNvcmRlckhpbnRzLm1pbWVUeXBlKSB7XG4gICAgICAgICAgICBpZiAoIU1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKHJlY29yZGVySGludHMubWltZVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNZWRpYVJlY29yZGVyIEFQSSBzZWVtcyB1bmFibGUgdG8gcmVjb3JkIG1pbWVUeXBlOicsIHJlY29yZGVySGludHMubWltZVR5cGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlY29yZGVySGludHMubWltZVR5cGUgPSBjb25maWcudHlwZSA9PT0gJ2F1ZGlvJyA/ICdhdWRpby93ZWJtJyA6ICd2aWRlby93ZWJtJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVzaW5nIE1lZGlhUmVjb3JkZXIgQVBJIGhlcmVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihtZWRpYVN0cmVhbSwgcmVjb3JkZXJIaW50cyk7XG5cbiAgICAgICAgICAgIC8vIHJlc2V0XG4gICAgICAgICAgICBjb25maWcubWltZVR5cGUgPSByZWNvcmRlckhpbnRzLm1pbWVUeXBlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBjaHJvbWUtYmFzZWQgZmFsbGJhY2tcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihtZWRpYVN0cmVhbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbGQgaGFjaz9cbiAgICAgICAgaWYgKHJlY29yZGVySGludHMubWltZVR5cGUgJiYgIU1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkICYmICdjYW5SZWNvcmRNaW1lVHlwZScgaW4gbWVkaWFSZWNvcmRlciAmJiBtZWRpYVJlY29yZGVyLmNhblJlY29yZE1pbWVUeXBlKHJlY29yZGVySGludHMubWltZVR5cGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01lZGlhUmVjb3JkZXIgQVBJIHNlZW1zIHVuYWJsZSB0byByZWNvcmQgbWltZVR5cGU6JywgcmVjb3JkZXJIaW50cy5taW1lVHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNwYXRjaGluZyBPbkRhdGFBdmFpbGFibGUgSGFuZGxlclxuICAgICAgICBtZWRpYVJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBhbGxTdGF0ZXMucHVzaCgnb25kYXRhYXZhaWxhYmxlOiAnICsgYnl0ZXNUb1NpemUoZS5kYXRhLnNpemUpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWcudGltZVNsaWNlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEgJiYgZS5kYXRhLnNpemUgJiYgZS5kYXRhLnNpemUgPiAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlPZkJsb2JzLnB1c2goZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGltZVN0YW1wKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWcub25kYXRhYXZhaWxhYmxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRlcnZhbHMgYmFzZWQgYmxvYnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBibG9iID0gY29uZmlnLmdldE5hdGl2ZUJsb2IgPyBlLmRhdGEgOiBuZXcgQmxvYihbZS5kYXRhXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGdldE1pbWVUeXBlKHJlY29yZGVySGludHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5vbmRhdGFhdmFpbGFibGUoYmxvYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWUuZGF0YSB8fCAhZS5kYXRhLnNpemUgfHwgZS5kYXRhLnNpemUgPCAxMDAgfHwgc2VsZi5ibG9iKSB7XG4gICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgc3RvcFJlY29yZGluZyBhbHdheXMgZ2V0dGluZyBmaXJlZFxuICAgICAgICAgICAgICAgIC8vIGV2ZW4gaWYgdGhlcmUgaXMgaW52YWxpZCBkYXRhXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYucmVjb3JkaW5nQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNvcmRpbmdDYWxsYmFjayhuZXcgQmxvYihbXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZ2V0TWltZVR5cGUocmVjb3JkZXJIaW50cylcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY29yZGluZ0NhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmJsb2IgPSBjb25maWcuZ2V0TmF0aXZlQmxvYiA/IGUuZGF0YSA6IG5ldyBCbG9iKFtlLmRhdGFdLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogZ2V0TWltZVR5cGUocmVjb3JkZXJIaW50cylcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5yZWNvcmRpbmdDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNlbGYucmVjb3JkaW5nQ2FsbGJhY2soc2VsZi5ibG9iKTtcbiAgICAgICAgICAgICAgICBzZWxmLnJlY29yZGluZ0NhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyLm9uc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFsbFN0YXRlcy5wdXNoKCdzdGFydGVkJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5vbnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhbGxTdGF0ZXMucHVzaCgncGF1c2VkJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5vbnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYWxsU3RhdGVzLnB1c2goJ3Jlc3VtZWQnKTtcbiAgICAgICAgfTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyLm9uc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYWxsU3RhdGVzLnB1c2goJ3N0b3BwZWQnKTtcbiAgICAgICAgfTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyLm9uZXJyb3IgPSBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFlcnJvci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IubmFtZSA9ICdVbmtub3duRXJyb3InO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhbGxTdGF0ZXMucHVzaCgnZXJyb3I6ICcgKyBlcnJvcik7XG5cbiAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XG4gICAgICAgICAgICAgICAgLy8gdmlhOiBodHRwczovL3czYy5naXRodWIuaW8vbWVkaWFjYXB0dXJlLXJlY29yZC9NZWRpYVJlY29yZGVyLmh0bWwjZXhjZXB0aW9uLXN1bW1hcnlcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IubmFtZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaW52YWxpZHN0YXRlJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBNZWRpYVJlY29yZGVyIGlzIG5vdCBpbiBhIHN0YXRlIGluIHdoaWNoIHRoZSBwcm9wb3NlZCBvcGVyYXRpb24gaXMgYWxsb3dlZCB0byBiZSBleGVjdXRlZC4nLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5uYW1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdub3RzdXBwb3J0ZWQnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTUlNRSB0eXBlICgnLCByZWNvcmRlckhpbnRzLm1pbWVUeXBlLCAnKSBpcyBub3Qgc3VwcG9ydGVkLicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlY3VyaXR5JykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01lZGlhUmVjb3JkZXIgc2VjdXJpdHkgZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gb2xkZXIgY29kZSBiZWxvd1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdPdXRPZk1lbW9yeScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIFVBIGhhcyBleGhhdXNlZCB0aGUgYXZhaWxhYmxlIG1lbW9yeS4gVXNlciBhZ2VudHMgU0hPVUxEIHByb3ZpZGUgYXMgbXVjaCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFzIHBvc3NpYmxlIGluIHRoZSBtZXNzYWdlIGF0dHJpYnV0ZS4nLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5uYW1lID09PSAnSWxsZWdhbFN0cmVhbU1vZGlmaWNhdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQSBtb2RpZmljYXRpb24gdG8gdGhlIHN0cmVhbSBoYXMgb2NjdXJyZWQgdGhhdCBtYWtlcyBpdCBpbXBvc3NpYmxlIHRvIGNvbnRpbnVlIHJlY29yZGluZy4gQW4gZXhhbXBsZSB3b3VsZCBiZSB0aGUgYWRkaXRpb24gb2YgYSBUcmFjayB3aGlsZSByZWNvcmRpbmcgaXMgb2NjdXJyaW5nLiBVc2VyIGFnZW50cyBTSE9VTEQgcHJvdmlkZSBhcyBtdWNoIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYXMgcG9zc2libGUgaW4gdGhlIG1lc3NhZ2UgYXR0cmlidXRlLicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdPdGhlclJlY29yZGluZ0Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVc2VkIGZvciBhbiBmYXRhbCBlcnJvciBvdGhlciB0aGFuIHRob3NlIGxpc3RlZCBhYm92ZS4gVXNlciBhZ2VudHMgU0hPVUxEIHByb3ZpZGUgYXMgbXVjaCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFzIHBvc3NpYmxlIGluIHRoZSBtZXNzYWdlIGF0dHJpYnV0ZS4nLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5uYW1lID09PSAnR2VuZXJpY0Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgVUEgY2Fubm90IHByb3ZpZGUgdGhlIGNvZGVjIG9yIHJlY29yZGluZyBvcHRpb24gdGhhdCBoYXMgYmVlbiByZXF1ZXN0ZWQuJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01lZGlhUmVjb3JkZXIgRXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAoZnVuY3Rpb24obG9vcGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLm1hbnVhbGx5U3RvcHBlZCAmJiBtZWRpYVJlY29yZGVyICYmIG1lZGlhUmVjb3JkZXIuc3RhdGUgPT09ICdpbmFjdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy50aW1lc2xpY2U7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gMTAgbWludXRlcywgZW5vdWdoP1xuICAgICAgICAgICAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0YXJ0KDEwICogNjAgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobG9vcGVyLCAxMDAwKTtcbiAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgIGlmIChtZWRpYVJlY29yZGVyLnN0YXRlICE9PSAnaW5hY3RpdmUnICYmIG1lZGlhUmVjb3JkZXIuc3RhdGUgIT09ICdzdG9wcGVkJykge1xuICAgICAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnRpbWVTbGljZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVTdGFtcCgpO1xuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdGFydChjb25maWcudGltZVNsaWNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgaXMgNjAgbWludXRlczsgZW5vdWdoP1xuICAgICAgICAgICAgLy8gdXNlIGNvbmZpZyA9PiB7dGltZVNsaWNlOiAxMDAwfSBvdGhlcndpc2VcblxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdGFydCgzLjZlKzYpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5pbml0Q2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbmZpZy5pbml0Q2FsbGJhY2soKTsgLy8gb2xkIGNvZGVcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcHJvcGVydHkge0FycmF5fSB0aW1lc3RhbXBzIC0gQXJyYXkgb2YgdGltZSBzdGFtcHNcbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc29sZS5sb2cocmVjb3JkZXIudGltZXN0YW1wcyk7XG4gICAgICovXG4gICAgdGhpcy50aW1lc3RhbXBzID0gW107XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lU3RhbXAoKSB7XG4gICAgICAgIHNlbGYudGltZXN0YW1wcy5wdXNoKG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy5vblRpbWVTdGFtcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uZmlnLm9uVGltZVN0YW1wKHNlbGYudGltZXN0YW1wc1tzZWxmLnRpbWVzdGFtcHMubGVuZ3RoIC0gMV0sIHNlbGYudGltZXN0YW1wcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRNaW1lVHlwZShzZWNvbmRPYmplY3QpIHtcbiAgICAgICAgaWYgKG1lZGlhUmVjb3JkZXIgJiYgbWVkaWFSZWNvcmRlci5taW1lVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIG1lZGlhUmVjb3JkZXIubWltZVR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2Vjb25kT2JqZWN0Lm1pbWVUeXBlIHx8ICd2aWRlby93ZWJtJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcgTWVkaWFTdHJlYW0uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiwgdGhhdCBpcyB1c2VkIHRvIHBhc3MgcmVjb3JkZWQgYmxvYiBiYWNrIHRvIHRoZSBjYWxsZWUuXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgKiB9KTtcbiAgICAgKi9cbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG5cbiAgICAgICAgc2VsZi5tYW51YWxseVN0b3BwZWQgPSB0cnVlOyAvLyB1c2VkIGluc2lkZSB0aGUgbWVkaWFSZWNvcmRlci5vbmVycm9yXG5cbiAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlY29yZGluZ0NhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKG1lZGlhUmVjb3JkZXIuc3RhdGUgPT09ICdyZWNvcmRpbmcnKSB7XG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnRpbWVTbGljZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ibG9iID0gbmV3IEJsb2IoYXJyYXlPZkJsb2JzLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGdldE1pbWVUeXBlKGNvbmZpZylcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNlbGYucmVjb3JkaW5nQ2FsbGJhY2soc2VsZi5ibG9iKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcGF1c2VzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cbiAgICAgKiBAbWV0aG9kXG4gICAgICogQG1lbWJlcm9mIE1lZGlhU3RyZWFtUmVjb3JkZXJcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHJlY29yZGVyLnBhdXNlKCk7XG4gICAgICovXG4gICAgdGhpcy5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyLnN0YXRlID09PSAncmVjb3JkaW5nJykge1xuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHJlc3VtZXMgdGhlIHJlY29yZGluZyBwcm9jZXNzLlxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxuICAgICAqIEBleGFtcGxlXG4gICAgICogcmVjb3JkZXIucmVzdW1lKCk7XG4gICAgICovXG4gICAgdGhpcy5yZXN1bWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlci5zdGF0ZSA9PT0gJ3BhdXNlZCcpIHtcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIucmVzdW1lKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmVzZXRzIGN1cnJlbnRseSByZWNvcmRlZCBkYXRhLlxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxuICAgICAqIEBleGFtcGxlXG4gICAgICogcmVjb3JkZXIuY2xlYXJSZWNvcmRlZERhdGEoKTtcbiAgICAgKi9cbiAgICB0aGlzLmNsZWFyUmVjb3JkZWREYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyICYmIG1lZGlhUmVjb3JkZXIuc3RhdGUgPT09ICdyZWNvcmRpbmcnKSB7XG4gICAgICAgICAgICBzZWxmLnN0b3AoY2xlYXJSZWNvcmRlZERhdGFDQik7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhclJlY29yZGVkRGF0YUNCKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyUmVjb3JkZWREYXRhQ0IoKSB7XG4gICAgICAgIGFycmF5T2ZCbG9icyA9IFtdO1xuICAgICAgICBtZWRpYVJlY29yZGVyID0gbnVsbDtcbiAgICAgICAgc2VsZi50aW1lc3RhbXBzID0gW107XG4gICAgfVxuXG4gICAgLy8gUmVmZXJlbmNlIHRvIFwiTWVkaWFSZWNvcmRlclwiIG9iamVjdFxuICAgIHZhciBtZWRpYVJlY29yZGVyO1xuXG4gICAgLyoqXG4gICAgICogQWNjZXNzIHRvIG5hdGl2ZSBNZWRpYVJlY29yZGVyIEFQSVxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBleGFtcGxlXG4gICAgICogdmFyIGludGVybmFsID0gcmVjb3JkZXIuZ2V0SW50ZXJuYWxSZWNvcmRlcigpO1xuICAgICAqIGludGVybmFsLm9uZGF0YWF2YWlsYWJsZSA9IGZ1bmN0aW9uKCkge307IC8vIG92ZXJyaWRlXG4gICAgICogaW50ZXJuYWwuc3RyZWFtLCBpbnRlcm5hbC5vbnBhdXNlLCBpbnRlcm5hbC5vbnN0b3AsIGV0Yy5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGludGVybmFsIHJlY29yZGluZyBvYmplY3QuXG4gICAgICovXG4gICAgdGhpcy5nZXRJbnRlcm5hbFJlY29yZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBtZWRpYVJlY29yZGVyO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc01lZGlhU3RyZWFtQWN0aXZlKCkge1xuICAgICAgICBpZiAoJ2FjdGl2ZScgaW4gbWVkaWFTdHJlYW0pIHtcbiAgICAgICAgICAgIGlmICghbWVkaWFTdHJlYW0uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCdlbmRlZCcgaW4gbWVkaWFTdHJlYW0pIHsgLy8gb2xkIGhhY2tcbiAgICAgICAgICAgIGlmIChtZWRpYVN0cmVhbS5lbmRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBSZWNvcmRlZCBkYXRhIGFzIFwiQmxvYlwiIG9iamVjdC5cbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxuICAgICAqIEBleGFtcGxlXG4gICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbigpIHtcbiAgICAgKiAgICAgdmFyIGJsb2IgPSByZWNvcmRlci5ibG9iO1xuICAgICAqIH0pO1xuICAgICAqL1xuICAgIHRoaXMuYmxvYiA9IG51bGw7XG5cblxuICAgIC8qKlxuICAgICAqIEdldCBNZWRpYVJlY29yZGVyIHJlYWRvbmx5IHN0YXRlLlxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxuICAgICAqIEBleGFtcGxlXG4gICAgICogdmFyIHN0YXRlID0gcmVjb3JkZXIuZ2V0U3RhdGUoKTtcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBSZXR1cm5zIHJlY29yZGluZyBzdGF0ZS5cbiAgICAgKi9cbiAgICB0aGlzLmdldFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xuICAgICAgICAgICAgcmV0dXJuICdpbmFjdGl2ZSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVkaWFSZWNvcmRlci5zdGF0ZSB8fCAnaW5hY3RpdmUnO1xuICAgIH07XG5cbiAgICAvLyBsaXN0IG9mIGFsbCByZWNvcmRpbmcgc3RhdGVzXG4gICAgdmFyIGFsbFN0YXRlcyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogR2V0IE1lZGlhUmVjb3JkZXIgYWxsIHJlY29yZGluZyBzdGF0ZXMuXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB2YXIgc3RhdGUgPSByZWNvcmRlci5nZXRBbGxTdGF0ZXMoKTtcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYWxsIHJlY29yZGluZyBzdGF0ZXNcbiAgICAgKi9cbiAgICB0aGlzLmdldEFsbFN0YXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYWxsU3RhdGVzO1xuICAgIH07XG5cbiAgICAvLyBpZiBhbnkgVHJhY2sgd2l0aGluIHRoZSBNZWRpYVN0cmVhbSBpcyBtdXRlZCBvciBub3QgZW5hYmxlZCBhdCBhbnkgdGltZSwgXG4gICAgLy8gdGhlIGJyb3dzZXIgd2lsbCBvbmx5IHJlY29yZCBibGFjayBmcmFtZXMgXG4gICAgLy8gb3Igc2lsZW5jZSBzaW5jZSB0aGF0IGlzIHRoZSBjb250ZW50IHByb2R1Y2VkIGJ5IHRoZSBUcmFja1xuICAgIC8vIHNvIHdlIG5lZWQgdG8gc3RvcFJlY29yZGluZyBhcyBzb29uIGFzIGFueSBzaW5nbGUgdHJhY2sgZW5kcy5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5jaGVja0ZvckluYWN0aXZlVHJhY2tzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25maWcuY2hlY2tGb3JJbmFjdGl2ZVRyYWNrcyA9IGZhbHNlOyAvLyBkaXNhYmxlIHRvIG1pbmltaXplIENQVSB1c2FnZVxuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIHRoaXMgbWV0aG9kIGNoZWNrcyBpZiBtZWRpYSBzdHJlYW0gaXMgc3RvcHBlZFxuICAgIC8vIG9yIGlmIGFueSB0cmFjayBpcyBlbmRlZC5cbiAgICAoZnVuY3Rpb24gbG9vcGVyKCkge1xuICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIgfHwgY29uZmlnLmNoZWNrRm9ySW5hY3RpdmVUcmFja3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNNZWRpYVN0cmVhbUFjdGl2ZSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTWVkaWFTdHJlYW0gc2VlbXMgc3RvcHBlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuc3RvcCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dChsb29wZXIsIDEwMDApOyAvLyBjaGVjayBldmVyeSBzZWNvbmRcbiAgICB9KSgpO1xuXG4gICAgLy8gZm9yIGRlYnVnZ2luZ1xuICAgIHRoaXMubmFtZSA9ICdNZWRpYVN0cmVhbVJlY29yZGVyJztcbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfTtcbn1cblxuaWYgKHR5cGVvZiBSZWNvcmRSVEMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgUmVjb3JkUlRDLk1lZGlhU3RyZWFtUmVjb3JkZXIgPSBNZWRpYVN0cmVhbVJlY29yZGVyO1xufVxuXHJcbi8vIHNvdXJjZSBjb2RlIGZyb206IGh0dHA6Ly90eXBlZGFycmF5Lm9yZy93cC1jb250ZW50L3Byb2plY3RzL1dlYkF1ZGlvUmVjb3JkZXIvc2NyaXB0LmpzXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZGlhbW9uZC9SZWNvcmRlcmpzI2xpY2Vuc2UtbWl0XHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX19cclxuLy8gU3RlcmVvQXVkaW9SZWNvcmRlci5qc1xyXG5cclxuLyoqXHJcbiAqIFN0ZXJlb0F1ZGlvUmVjb3JkZXIgaXMgYSBzdGFuZGFsb25lIGNsYXNzIHVzZWQgYnkge0BsaW5rIFJlY29yZFJUQ30gdG8gYnJpbmcgXCJzdGVyZW9cIiBhdWRpby1yZWNvcmRpbmcgaW4gY2hyb21lLlxyXG4gKiBAc3VtbWFyeSBKYXZhU2NyaXB0IHN0YW5kYWxvbmUgb2JqZWN0IGZvciBzdGVyZW8gYXVkaW8gcmVjb3JkaW5nLlxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIHJlY29yZGVyID0gbmV3IFN0ZXJlb0F1ZGlvUmVjb3JkZXIoTWVkaWFTdHJlYW0sIHtcclxuICogICAgIHNhbXBsZVJhdGU6IDQ0MTAwLFxyXG4gKiAgICAgYnVmZmVyU2l6ZTogNDA5NlxyXG4gKiB9KTtcclxuICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oYmxvYikge1xyXG4gKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICogfSk7XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBNZWRpYVN0cmVhbSBvYmplY3QgZmV0Y2hlZCB1c2luZyBnZXRVc2VyTWVkaWEgQVBJIG9yIGdlbmVyYXRlZCB1c2luZyBjYXB0dXJlU3RyZWFtVW50aWxFbmRlZCBvciBXZWJBdWRpbyBBUEkuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7c2FtcGxlUmF0ZTogNDQxMDAsIGJ1ZmZlclNpemU6IDQwOTYsIG51bWJlck9mQXVkaW9DaGFubmVsczogMSwgZXRjLn1cclxuICovXHJcblxyXG5mdW5jdGlvbiBTdGVyZW9BdWRpb1JlY29yZGVyKG1lZGlhU3RyZWFtLCBjb25maWcpIHtcclxuICAgIGlmICghZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAnYXVkaW8nKS5sZW5ndGgpIHtcclxuICAgICAgICB0aHJvdyAnWW91ciBzdHJlYW0gaGFzIG5vIGF1ZGlvIHRyYWNrcy4nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgLy8gdmFyaWFibGVzXHJcbiAgICB2YXIgbGVmdGNoYW5uZWwgPSBbXTtcclxuICAgIHZhciByaWdodGNoYW5uZWwgPSBbXTtcclxuICAgIHZhciByZWNvcmRpbmcgPSBmYWxzZTtcclxuICAgIHZhciByZWNvcmRpbmdMZW5ndGggPSAwO1xyXG4gICAgdmFyIGpzQXVkaW9Ob2RlO1xyXG5cclxuICAgIHZhciBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHNhbXBsZSByYXRlcyBzdWNoIGFzIDhLIG9yIDE2Sy4gUmVmZXJlbmNlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yODk3NzEzNi81NTIxODJcclxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkZXNpcmVkU2FtcFJhdGUgLSBEZXNpcmVkIEJpdHMgcGVyIHNhbXBsZSAqIDEwMDBcclxuICAgICAqIEBtZW1iZXJvZiBTdGVyZW9BdWRpb1JlY29yZGVyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiB2YXIgcmVjb3JkZXIgPSBTdGVyZW9BdWRpb1JlY29yZGVyKG1lZGlhU3RyZWFtLCB7XHJcbiAgICAgKiAgIGRlc2lyZWRTYW1wUmF0ZTogMTYgKiAxMDAwIC8vIGJpdHMtcGVyLXNhbXBsZSAqIDEwMDBcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB2YXIgZGVzaXJlZFNhbXBSYXRlID0gY29uZmlnLmRlc2lyZWRTYW1wUmF0ZTtcclxuXHJcbiAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICBpZiAoY29uZmlnLmxlZnRDaGFubmVsID09PSB0cnVlKSB7XHJcbiAgICAgICAgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29uZmlnLm51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMSkge1xyXG4gICAgICAgIG51bWJlck9mQXVkaW9DaGFubmVscyA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgfHwgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzIDwgMSkge1xyXG4gICAgICAgIG51bWJlck9mQXVkaW9DaGFubmVscyA9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU3RlcmVvQXVkaW9SZWNvcmRlciBpcyBzZXQgdG8gcmVjb3JkIG51bWJlciBvZiBjaGFubmVsczogJyArIG51bWJlck9mQXVkaW9DaGFubmVscyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgYW55IFRyYWNrIHdpdGhpbiB0aGUgTWVkaWFTdHJlYW0gaXMgbXV0ZWQgb3Igbm90IGVuYWJsZWQgYXQgYW55IHRpbWUsIFxyXG4gICAgLy8gdGhlIGJyb3dzZXIgd2lsbCBvbmx5IHJlY29yZCBibGFjayBmcmFtZXMgXHJcbiAgICAvLyBvciBzaWxlbmNlIHNpbmNlIHRoYXQgaXMgdGhlIGNvbnRlbnQgcHJvZHVjZWQgYnkgdGhlIFRyYWNrXHJcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIHN0b3BSZWNvcmRpbmcgYXMgc29vbiBhcyBhbnkgc2luZ2xlIHRyYWNrIGVuZHMuXHJcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5jaGVja0ZvckluYWN0aXZlVHJhY2tzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGNvbmZpZy5jaGVja0ZvckluYWN0aXZlVHJhY2tzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc01lZGlhU3RyZWFtQWN0aXZlKCkge1xyXG4gICAgICAgIGlmIChjb25maWcuY2hlY2tGb3JJbmFjdGl2ZVRyYWNrcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgLy8gYWx3YXlzIHJldHVybiBcInRydWVcIlxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgnYWN0aXZlJyBpbiBtZWRpYVN0cmVhbSkge1xyXG4gICAgICAgICAgICBpZiAoIW1lZGlhU3RyZWFtLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICgnZW5kZWQnIGluIG1lZGlhU3RyZWFtKSB7IC8vIG9sZCBoYWNrXHJcbiAgICAgICAgICAgIGlmIChtZWRpYVN0cmVhbS5lbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyBNZWRpYVN0cmVhbS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBTdGVyZW9BdWRpb1JlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVjb3JkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGlzTWVkaWFTdHJlYW1BY3RpdmUoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ1BsZWFzZSBtYWtlIHN1cmUgTWVkaWFTdHJlYW0gaXMgYWN0aXZlLic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNldFZhcmlhYmxlcygpO1xyXG5cclxuICAgICAgICBpc0F1ZGlvUHJvY2Vzc1N0YXJ0ZWQgPSBpc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHJlY29yZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnRpbWVTbGljZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgbG9vcGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBtZXJnZUxlZnRSaWdodEJ1ZmZlcnMoY29uZmlnLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGZ1bmN0aW9uIG1lcmdlQXVkaW9CdWZmZXJzKGNvbmZpZywgY2IpIHtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mQXVkaW9DaGFubmVscyA9IGNvbmZpZy5udW1iZXJPZkF1ZGlvQ2hhbm5lbHM7XHJcblxyXG4gICAgICAgICAgICAvLyB0b2RvOiBcInNsaWNlKDApXCIgLS0tIGlzIGl0IGNhdXNlcyBsb29wPyBTaG91bGQgYmUgcmVtb3ZlZD9cclxuICAgICAgICAgICAgdmFyIGxlZnRCdWZmZXJzID0gY29uZmlnLmxlZnRCdWZmZXJzLnNsaWNlKDApO1xyXG4gICAgICAgICAgICB2YXIgcmlnaHRCdWZmZXJzID0gY29uZmlnLnJpZ2h0QnVmZmVycy5zbGljZSgwKTtcclxuICAgICAgICAgICAgdmFyIHNhbXBsZVJhdGUgPSBjb25maWcuc2FtcGxlUmF0ZTtcclxuICAgICAgICAgICAgdmFyIGludGVybmFsSW50ZXJsZWF2ZWRMZW5ndGggPSBjb25maWcuaW50ZXJuYWxJbnRlcmxlYXZlZExlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGRlc2lyZWRTYW1wUmF0ZSA9IGNvbmZpZy5kZXNpcmVkU2FtcFJhdGU7XHJcblxyXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZBdWRpb0NoYW5uZWxzID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0QnVmZmVycyA9IG1lcmdlQnVmZmVycyhsZWZ0QnVmZmVycywgaW50ZXJuYWxJbnRlcmxlYXZlZExlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICByaWdodEJ1ZmZlcnMgPSBtZXJnZUJ1ZmZlcnMocmlnaHRCdWZmZXJzLCBpbnRlcm5hbEludGVybGVhdmVkTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGVzaXJlZFNhbXBSYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdEJ1ZmZlcnMgPSBpbnRlcnBvbGF0ZUFycmF5KGxlZnRCdWZmZXJzLCBkZXNpcmVkU2FtcFJhdGUsIHNhbXBsZVJhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0QnVmZmVycyA9IGludGVycG9sYXRlQXJyYXkocmlnaHRCdWZmZXJzLCBkZXNpcmVkU2FtcFJhdGUsIHNhbXBsZVJhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZBdWRpb0NoYW5uZWxzID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0QnVmZmVycyA9IG1lcmdlQnVmZmVycyhsZWZ0QnVmZmVycywgaW50ZXJuYWxJbnRlcmxlYXZlZExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRlc2lyZWRTYW1wUmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRCdWZmZXJzID0gaW50ZXJwb2xhdGVBcnJheShsZWZ0QnVmZmVycywgZGVzaXJlZFNhbXBSYXRlLCBzYW1wbGVSYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHNhbXBsZSByYXRlIGFzIGRlc2lyZWQgc2FtcGxlIHJhdGVcclxuICAgICAgICAgICAgaWYgKGRlc2lyZWRTYW1wUmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlUmF0ZSA9IGRlc2lyZWRTYW1wUmF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZm9yIGNoYW5naW5nIHRoZSBzYW1wbGluZyByYXRlLCByZWZlcmVuY2U6XHJcbiAgICAgICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI4OTc3MTM2LzU1MjE4MlxyXG4gICAgICAgICAgICBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFycmF5KGRhdGEsIG5ld1NhbXBsZVJhdGUsIG9sZFNhbXBsZVJhdGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmaXRDb3VudCA9IE1hdGgucm91bmQoZGF0YS5sZW5ndGggKiAobmV3U2FtcGxlUmF0ZSAvIG9sZFNhbXBsZVJhdGUpKTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdEYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICB2YXIgc3ByaW5nRmFjdG9yID0gTnVtYmVyKChkYXRhLmxlbmd0aCAtIDEpIC8gKGZpdENvdW50IC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVswXSA9IGRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGZpdENvdW50IC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IGkgKiBzcHJpbmdGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJlZm9yZSA9IE51bWJlcihNYXRoLmZsb29yKHRtcCkpLnRvRml4ZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWZ0ZXIgPSBOdW1iZXIoTWF0aC5jZWlsKHRtcCkpLnRvRml4ZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXRQb2ludCA9IHRtcCAtIGJlZm9yZTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhW2ldID0gbGluZWFySW50ZXJwb2xhdGUoZGF0YVtiZWZvcmVdLCBkYXRhW2FmdGVyXSwgYXRQb2ludCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhW2ZpdENvdW50IC0gMV0gPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3RGF0YTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbGluZWFySW50ZXJwb2xhdGUoYmVmb3JlLCBhZnRlciwgYXRQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJlZm9yZSArIChhZnRlciAtIGJlZm9yZSkgKiBhdFBvaW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtZXJnZUJ1ZmZlcnMoY2hhbm5lbEJ1ZmZlciwgckxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBGbG9hdDY0QXJyYXkockxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBsbmcgPSBjaGFubmVsQnVmZmVyLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxuZzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IGNoYW5uZWxCdWZmZXJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNldChidWZmZXIsIG9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGJ1ZmZlci5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaW50ZXJsZWF2ZShsZWZ0Q2hhbm5lbCwgcmlnaHRDaGFubmVsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gbGVmdENoYW5uZWwubGVuZ3RoICsgcmlnaHRDaGFubmVsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEZsb2F0NjRBcnJheShsZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbnB1dEluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpbmRleCsrXSA9IGxlZnRDaGFubmVsW2lucHV0SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpbmRleCsrXSA9IHJpZ2h0Q2hhbm5lbFtpbnB1dEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB3cml0ZVVURkJ5dGVzKHZpZXcsIG9mZnNldCwgc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG5nID0gc3RyaW5nLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG5nOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCArIGksIHN0cmluZy5jaGFyQ29kZUF0KGkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaW50ZXJsZWF2ZSBib3RoIGNoYW5uZWxzIHRvZ2V0aGVyXHJcbiAgICAgICAgICAgIHZhciBpbnRlcmxlYXZlZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGludGVybGVhdmVkID0gaW50ZXJsZWF2ZShsZWZ0QnVmZmVycywgcmlnaHRCdWZmZXJzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJsZWF2ZWQgPSBsZWZ0QnVmZmVycztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGludGVybGVhdmVkTGVuZ3RoID0gaW50ZXJsZWF2ZWQubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIHdhdiBmaWxlXHJcbiAgICAgICAgICAgIHZhciByZXN1bHRpbmdCdWZmZXJMZW5ndGggPSA0NCArIGludGVybGVhdmVkTGVuZ3RoICogMjtcclxuXHJcbiAgICAgICAgICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIocmVzdWx0aW5nQnVmZmVyTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBSSUZGIGNodW5rIGRlc2NyaXB0b3IvaWRlbnRpZmllciBcclxuICAgICAgICAgICAgd3JpdGVVVEZCeXRlcyh2aWV3LCAwLCAnUklGRicpO1xyXG5cclxuICAgICAgICAgICAgLy8gUklGRiBjaHVuayBsZW5ndGhcclxuICAgICAgICAgICAgdmlldy5zZXRVaW50MzIoNCwgNDQgKyBpbnRlcmxlYXZlZExlbmd0aCAqIDIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gUklGRiB0eXBlIFxyXG4gICAgICAgICAgICB3cml0ZVVURkJ5dGVzKHZpZXcsIDgsICdXQVZFJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBmb3JtYXQgY2h1bmsgaWRlbnRpZmllciBcclxuICAgICAgICAgICAgLy8gRk1UIHN1Yi1jaHVua1xyXG4gICAgICAgICAgICB3cml0ZVVURkJ5dGVzKHZpZXcsIDEyLCAnZm10ICcpO1xyXG5cclxuICAgICAgICAgICAgLy8gZm9ybWF0IGNodW5rIGxlbmd0aCBcclxuICAgICAgICAgICAgdmlldy5zZXRVaW50MzIoMTYsIDE2LCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNhbXBsZSBmb3JtYXQgKHJhdylcclxuICAgICAgICAgICAgdmlldy5zZXRVaW50MTYoMjAsIDEsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RlcmVvICgyIGNoYW5uZWxzKVxyXG4gICAgICAgICAgICB2aWV3LnNldFVpbnQxNigyMiwgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNhbXBsZSByYXRlIFxyXG4gICAgICAgICAgICB2aWV3LnNldFVpbnQzMigyNCwgc2FtcGxlUmF0ZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBieXRlIHJhdGUgKHNhbXBsZSByYXRlICogYmxvY2sgYWxpZ24pXHJcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDMyKDI4LCBzYW1wbGVSYXRlICogMiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBibG9jayBhbGlnbiAoY2hhbm5lbCBjb3VudCAqIGJ5dGVzIHBlciBzYW1wbGUpIFxyXG4gICAgICAgICAgICB2aWV3LnNldFVpbnQxNigzMiwgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzICogMiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBiaXRzIHBlciBzYW1wbGUgXHJcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDE2KDM0LCAxNiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBkYXRhIHN1Yi1jaHVua1xyXG4gICAgICAgICAgICAvLyBkYXRhIGNodW5rIGlkZW50aWZpZXIgXHJcbiAgICAgICAgICAgIHdyaXRlVVRGQnl0ZXModmlldywgMzYsICdkYXRhJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkYXRhIGNodW5rIGxlbmd0aCBcclxuICAgICAgICAgICAgdmlldy5zZXRVaW50MzIoNDAsIGludGVybGVhdmVkTGVuZ3RoICogMiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyB3cml0ZSB0aGUgUENNIHNhbXBsZXNcclxuICAgICAgICAgICAgdmFyIGxuZyA9IGludGVybGVhdmVkTGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSA0NDtcclxuICAgICAgICAgICAgdmFyIHZvbHVtZSA9IDE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG5nOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZpZXcuc2V0SW50MTYoaW5kZXgsIGludGVybGVhdmVkW2ldICogKDB4N0ZGRiAqIHZvbHVtZSksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2Ioe1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogYnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IHZpZXdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBidWZmZXI6IGJ1ZmZlcixcclxuICAgICAgICAgICAgICAgIHZpZXc6IHZpZXdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uZmlnLm5vV29ya2VyKSB7XHJcbiAgICAgICAgICAgIG1lcmdlQXVkaW9CdWZmZXJzKGNvbmZpZywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YS5idWZmZXIsIGRhdGEudmlldyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdmFyIHdlYldvcmtlciA9IHByb2Nlc3NJbldlYldvcmtlcihtZXJnZUF1ZGlvQnVmZmVycyk7XHJcblxyXG4gICAgICAgIHdlYldvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhldmVudC5kYXRhLmJ1ZmZlciwgZXZlbnQuZGF0YS52aWV3KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbGVhc2UgbWVtb3J5XHJcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwod2ViV29ya2VyLndvcmtlclVSTCk7XHJcblxyXG4gICAgICAgICAgICAvLyBraWxsIHdlYndvcmtlciAob3IgQ2hyb21lIHdpbGwga2lsbCB5b3VyIHBhZ2UgYWZ0ZXIgfjI1IGNhbGxzKVxyXG4gICAgICAgICAgICB3ZWJXb3JrZXIudGVybWluYXRlKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2ViV29ya2VyLnBvc3RNZXNzYWdlKGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0luV2ViV29ya2VyKF9mdW5jdGlvbikge1xyXG4gICAgICAgIHZhciB3b3JrZXJVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtfZnVuY3Rpb24udG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgJzt0aGlzLm9ubWVzc2FnZSA9ICBmdW5jdGlvbiAoZWVlKSB7JyArIF9mdW5jdGlvbi5uYW1lICsgJyhlZWUuZGF0YSk7fSdcclxuICAgICAgICBdLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0J1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIod29ya2VyVVJMKTtcclxuICAgICAgICB3b3JrZXIud29ya2VyVVJMID0gd29ya2VyVVJMO1xyXG4gICAgICAgIHJldHVybiB3b3JrZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcgTWVkaWFTdHJlYW0uXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uLCB0aGF0IGlzIHVzZWQgdG8gcGFzcyByZWNvcmRlZCBibG9iIGJhY2sgdG8gdGhlIGNhbGxlZS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBTdGVyZW9BdWRpb1JlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuXHJcbiAgICAgICAgLy8gc3RvcCByZWNvcmRpbmdcclxuICAgICAgICByZWNvcmRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbWVyZ2VMZWZ0UmlnaHRCdWZmZXJzKHtcclxuICAgICAgICAgICAgZGVzaXJlZFNhbXBSYXRlOiBkZXNpcmVkU2FtcFJhdGUsXHJcbiAgICAgICAgICAgIHNhbXBsZVJhdGU6IHNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgIG51bWJlck9mQXVkaW9DaGFubmVsczogbnVtYmVyT2ZBdWRpb0NoYW5uZWxzLFxyXG4gICAgICAgICAgICBpbnRlcm5hbEludGVybGVhdmVkTGVuZ3RoOiByZWNvcmRpbmdMZW5ndGgsXHJcbiAgICAgICAgICAgIGxlZnRCdWZmZXJzOiBsZWZ0Y2hhbm5lbCxcclxuICAgICAgICAgICAgcmlnaHRCdWZmZXJzOiBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPT09IDEgPyBbXSA6IHJpZ2h0Y2hhbm5lbCxcclxuICAgICAgICAgICAgbm9Xb3JrZXI6IGNvbmZpZy5ub1dvcmtlclxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKGJ1ZmZlciwgdmlldykge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtCbG9ifSBibG9iIC0gVGhlIHJlY29yZGVkIGJsb2Igb2JqZWN0LlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmJsb2I7XHJcbiAgICAgICAgICAgICAqIH0pO1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2VsZi5ibG9iID0gbmV3IEJsb2IoW3ZpZXddLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXVkaW8vd2F2J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge0FycmF5QnVmZmVyfSBidWZmZXIgLSBUaGUgcmVjb3JkZWQgYnVmZmVyIG9iamVjdC5cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgKiAgICAgdmFyIGJ1ZmZlciA9IHJlY29yZGVyLmJ1ZmZlcjtcclxuICAgICAgICAgICAgICogfSk7XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZWxmLmJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih2aWV3LmJ1ZmZlci5ieXRlTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge0RhdGFWaWV3fSB2aWV3IC0gVGhlIHJlY29yZGVkIGRhdGEtdmlldyBvYmplY3QuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBTdGVyZW9BdWRpb1JlY29yZGVyXHJcbiAgICAgICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICogICAgIHZhciB2aWV3ID0gcmVjb3JkZXIudmlldztcclxuICAgICAgICAgICAgICogfSk7XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgICAgICAgICAgc2VsZi5zYW1wbGVSYXRlID0gZGVzaXJlZFNhbXBSYXRlIHx8IHNhbXBsZVJhdGU7XHJcbiAgICAgICAgICAgIHNlbGYuYnVmZmVyU2l6ZSA9IGJ1ZmZlclNpemU7XHJcblxyXG4gICAgICAgICAgICAvLyByZWNvcmRlZCBhdWRpbyBsZW5ndGhcclxuICAgICAgICAgICAgc2VsZi5sZW5ndGggPSByZWNvcmRpbmdMZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBpc0F1ZGlvUHJvY2Vzc1N0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soc2VsZi5ibG9iKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodHlwZW9mIFN0b3JhZ2UgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdmFyIFN0b3JhZ2UgPSB7XHJcbiAgICAgICAgICAgIEF1ZGlvQ29udGV4dENvbnN0cnVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICBBdWRpb0NvbnRleHQ6IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgU3RvcmFnZS5BdWRpb0NvbnRleHRDb25zdHJ1Y3RvciA9IG5ldyBTdG9yYWdlLkF1ZGlvQ29udGV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb250ZXh0ID0gU3RvcmFnZS5BdWRpb0NvbnRleHRDb25zdHJ1Y3RvcjtcclxuXHJcbiAgICAvLyBjcmVhdGVzIGFuIGF1ZGlvIG5vZGUgZnJvbSB0aGUgbWljcm9waG9uZSBpbmNvbWluZyBzdHJlYW1cclxuICAgIHZhciBhdWRpb0lucHV0ID0gY29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShtZWRpYVN0cmVhbSk7XHJcblxyXG4gICAgdmFyIGxlZ2FsQnVmZmVyVmFsdWVzID0gWzAsIDI1NiwgNTEyLCAxMDI0LCAyMDQ4LCA0MDk2LCA4MTkyLCAxNjM4NF07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGcm9tIHRoZSBzcGVjOiBUaGlzIHZhbHVlIGNvbnRyb2xzIGhvdyBmcmVxdWVudGx5IHRoZSBhdWRpb3Byb2Nlc3MgZXZlbnQgaXNcclxuICAgICAqIGRpc3BhdGNoZWQgYW5kIGhvdyBtYW55IHNhbXBsZS1mcmFtZXMgbmVlZCB0byBiZSBwcm9jZXNzZWQgZWFjaCBjYWxsLlxyXG4gICAgICogTG93ZXIgdmFsdWVzIGZvciBidWZmZXIgc2l6ZSB3aWxsIHJlc3VsdCBpbiBhIGxvd2VyIChiZXR0ZXIpIGxhdGVuY3kuXHJcbiAgICAgKiBIaWdoZXIgdmFsdWVzIHdpbGwgYmUgbmVjZXNzYXJ5IHRvIGF2b2lkIGF1ZGlvIGJyZWFrdXAgYW5kIGdsaXRjaGVzXHJcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgYnVmZmVyIChpbiBzYW1wbGUtZnJhbWVzKSB3aGljaCBuZWVkcyB0b1xyXG4gICAgICogYmUgcHJvY2Vzc2VkIGVhY2ggdGltZSBvbnByb2Nlc3NhdWRpbyBpcyBjYWxsZWQuXHJcbiAgICAgKiBMZWdhbCB2YWx1ZXMgYXJlICgyNTYsIDUxMiwgMTAyNCwgMjA0OCwgNDA5NiwgODE5MiwgMTYzODQpLlxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJ1ZmZlclNpemUgLSBCdWZmZXItc2l6ZSBmb3IgaG93IGZyZXF1ZW50bHkgdGhlIGF1ZGlvcHJvY2VzcyBldmVudCBpcyBkaXNwYXRjaGVkLlxyXG4gICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlciA9IG5ldyBTdGVyZW9BdWRpb1JlY29yZGVyKG1lZGlhU3RyZWFtLCB7XHJcbiAgICAgKiAgICAgYnVmZmVyU2l6ZTogNDA5NlxyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBcIjBcIiBtZWFucywgbGV0IGNocm9tZSBkZWNpZGUgdGhlIG1vc3QgYWNjdXJhdGUgYnVmZmVyLXNpemUgZm9yIGN1cnJlbnQgcGxhdGZvcm0uXHJcbiAgICB2YXIgYnVmZmVyU2l6ZSA9IHR5cGVvZiBjb25maWcuYnVmZmVyU2l6ZSA9PT0gJ3VuZGVmaW5lZCcgPyA0MDk2IDogY29uZmlnLmJ1ZmZlclNpemU7XHJcblxyXG4gICAgaWYgKGxlZ2FsQnVmZmVyVmFsdWVzLmluZGV4T2YoYnVmZmVyU2l6ZSkgPT09IC0xKSB7XHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xlZ2FsIHZhbHVlcyBmb3IgYnVmZmVyLXNpemUgYXJlICcgKyBKU09OLnN0cmluZ2lmeShsZWdhbEJ1ZmZlclZhbHVlcywgbnVsbCwgJ1xcdCcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRleHQuY3JlYXRlSmF2YVNjcmlwdE5vZGUpIHtcclxuICAgICAgICBqc0F1ZGlvTm9kZSA9IGNvbnRleHQuY3JlYXRlSmF2YVNjcmlwdE5vZGUoYnVmZmVyU2l6ZSwgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMpO1xyXG4gICAgfSBlbHNlIGlmIChjb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3Nvcikge1xyXG4gICAgICAgIGpzQXVkaW9Ob2RlID0gY29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoYnVmZmVyU2l6ZSwgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyAnV2ViQXVkaW8gQVBJIGhhcyBubyBzdXBwb3J0IG9uIHRoaXMgYnJvd3Nlci4nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbm5lY3QgdGhlIHN0cmVhbSB0byB0aGUgc2NyaXB0IHByb2Nlc3NvclxyXG4gICAgYXVkaW9JbnB1dC5jb25uZWN0KGpzQXVkaW9Ob2RlKTtcclxuXHJcbiAgICBpZiAoIWNvbmZpZy5idWZmZXJTaXplKSB7XHJcbiAgICAgICAgYnVmZmVyU2l6ZSA9IGpzQXVkaW9Ob2RlLmJ1ZmZlclNpemU7IC8vIGRldmljZSBidWZmZXItc2l6ZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNhbXBsZSByYXRlIChpbiBzYW1wbGUtZnJhbWVzIHBlciBzZWNvbmQpIGF0IHdoaWNoIHRoZVxyXG4gICAgICogQXVkaW9Db250ZXh0IGhhbmRsZXMgYXVkaW8uIEl0IGlzIGFzc3VtZWQgdGhhdCBhbGwgQXVkaW9Ob2Rlc1xyXG4gICAgICogaW4gdGhlIGNvbnRleHQgcnVuIGF0IHRoaXMgcmF0ZS4gSW4gbWFraW5nIHRoaXMgYXNzdW1wdGlvbixcclxuICAgICAqIHNhbXBsZS1yYXRlIGNvbnZlcnRlcnMgb3IgXCJ2YXJpc3BlZWRcIiBwcm9jZXNzb3JzIGFyZSBub3Qgc3VwcG9ydGVkXHJcbiAgICAgKiBpbiByZWFsLXRpbWUgcHJvY2Vzc2luZy5cclxuICAgICAqIFRoZSBzYW1wbGVSYXRlIHBhcmFtZXRlciBkZXNjcmliZXMgdGhlIHNhbXBsZS1yYXRlIG9mIHRoZVxyXG4gICAgICogbGluZWFyIFBDTSBhdWRpbyBkYXRhIGluIHRoZSBidWZmZXIgaW4gc2FtcGxlLWZyYW1lcyBwZXIgc2Vjb25kLlxyXG4gICAgICogQW4gaW1wbGVtZW50YXRpb24gbXVzdCBzdXBwb3J0IHNhbXBsZS1yYXRlcyBpbiBhdCBsZWFzdFxyXG4gICAgICogdGhlIHJhbmdlIDIyMDUwIHRvIDk2MDAwLlxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNhbXBsZVJhdGUgLSBCdWZmZXItc2l6ZSBmb3IgaG93IGZyZXF1ZW50bHkgdGhlIGF1ZGlvcHJvY2VzcyBldmVudCBpcyBkaXNwYXRjaGVkLlxyXG4gICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlciA9IG5ldyBTdGVyZW9BdWRpb1JlY29yZGVyKG1lZGlhU3RyZWFtLCB7XHJcbiAgICAgKiAgICAgc2FtcGxlUmF0ZTogNDQxMDBcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB2YXIgc2FtcGxlUmF0ZSA9IHR5cGVvZiBjb25maWcuc2FtcGxlUmF0ZSAhPT0gJ3VuZGVmaW5lZCcgPyBjb25maWcuc2FtcGxlUmF0ZSA6IGNvbnRleHQuc2FtcGxlUmF0ZSB8fCA0NDEwMDtcclxuXHJcbiAgICBpZiAoc2FtcGxlUmF0ZSA8IDIyMDUwIHx8IHNhbXBsZVJhdGUgPiA5NjAwMCkge1xyXG4gICAgICAgIC8vIFJlZjogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjYzMDM5MTgvNTUyMTgyXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhbXBsZS1yYXRlIG11c3QgYmUgdW5kZXIgcmFuZ2UgMjIwNTAgYW5kIDk2MDAwLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgIGlmIChjb25maWcuZGVzaXJlZFNhbXBSYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZXNpcmVkIHNhbXBsZS1yYXRlOiAnICsgY29uZmlnLmRlc2lyZWRTYW1wUmF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBpc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBwYXVzZXMgdGhlIHJlY29yZGluZyBwcm9jZXNzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5wYXVzZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnBhdXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaXNQYXVzZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlc3VtZXMgdGhlIHJlY29yZGluZyBwcm9jZXNzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZXN1bWUoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXN1bWUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaXNNZWRpYVN0cmVhbUFjdGl2ZSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aHJvdyAnUGxlYXNlIG1ha2Ugc3VyZSBNZWRpYVN0cmVhbSBpcyBhY3RpdmUuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VlbXMgcmVjb3JkaW5nIGhhcyBiZWVuIHJlc3RhcnRlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlY29yZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlc2V0cyBjdXJyZW50bHkgcmVjb3JkZWQgZGF0YS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBTdGVyZW9BdWRpb1JlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuY2xlYXJSZWNvcmRlZERhdGEoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5jbGVhclJlY29yZGVkRGF0YSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbmZpZy5jaGVja0ZvckluYWN0aXZlVHJhY2tzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChyZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKGNsZWFyUmVjb3JkZWREYXRhQ0IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYXJSZWNvcmRlZERhdGFDQigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFZhcmlhYmxlcygpIHtcclxuICAgICAgICBsZWZ0Y2hhbm5lbCA9IFtdO1xyXG4gICAgICAgIHJpZ2h0Y2hhbm5lbCA9IFtdO1xyXG4gICAgICAgIHJlY29yZGluZ0xlbmd0aCA9IDA7XHJcbiAgICAgICAgaXNBdWRpb1Byb2Nlc3NTdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgcmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaXNQYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgc2VsZi5sZWZ0Y2hhbm5lbCA9IGxlZnRjaGFubmVsO1xyXG4gICAgICAgIHNlbGYucmlnaHRjaGFubmVsID0gcmlnaHRjaGFubmVsO1xyXG4gICAgICAgIHNlbGYubnVtYmVyT2ZBdWRpb0NoYW5uZWxzID0gbnVtYmVyT2ZBdWRpb0NoYW5uZWxzO1xyXG4gICAgICAgIHNlbGYuZGVzaXJlZFNhbXBSYXRlID0gZGVzaXJlZFNhbXBSYXRlO1xyXG4gICAgICAgIHNlbGYuc2FtcGxlUmF0ZSA9IHNhbXBsZVJhdGU7XHJcbiAgICAgICAgc2VsZi5yZWNvcmRpbmdMZW5ndGggPSByZWNvcmRpbmdMZW5ndGg7XHJcblxyXG4gICAgICAgIGludGVydmFsc0Jhc2VkQnVmZmVycyA9IHtcclxuICAgICAgICAgICAgbGVmdDogW10sXHJcbiAgICAgICAgICAgIHJpZ2h0OiBbXSxcclxuICAgICAgICAgICAgcmVjb3JkaW5nTGVuZ3RoOiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclJlY29yZGVkRGF0YUNCKCkge1xyXG4gICAgICAgIGlmIChqc0F1ZGlvTm9kZSkge1xyXG4gICAgICAgICAgICBqc0F1ZGlvTm9kZS5vbmF1ZGlvcHJvY2VzcyA9IG51bGw7XHJcbiAgICAgICAgICAgIGpzQXVkaW9Ob2RlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAganNBdWRpb05vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGF1ZGlvSW5wdXQpIHtcclxuICAgICAgICAgICAgYXVkaW9JbnB1dC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIGF1ZGlvSW5wdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzZXRWYXJpYWJsZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmb3IgZGVidWdnaW5nXHJcbiAgICB0aGlzLm5hbWUgPSAnU3RlcmVvQXVkaW9SZWNvcmRlcic7XHJcbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGlzQXVkaW9Qcm9jZXNzU3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uQXVkaW9Qcm9jZXNzRGF0YUF2YWlsYWJsZShlKSB7XHJcbiAgICAgICAgaWYgKGlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc01lZGlhU3RyZWFtQWN0aXZlKCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTWVkaWFTdHJlYW0gc2VlbXMgc3RvcHBlZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBqc0F1ZGlvTm9kZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHJlY29yZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgaWYgKGF1ZGlvSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIGF1ZGlvSW5wdXQuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgYXVkaW9JbnB1dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIG9uIFwib25hdWRpb3Byb2Nlc3NcIiBldmVudCdzIGZpcnN0IGludm9jYXRpb24uXHJcbiAgICAgICAgICogQG1ldGhvZCB7ZnVuY3Rpb259IG9uQXVkaW9Qcm9jZXNzU3RhcnRlZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBTdGVyZW9BdWRpb1JlY29yZGVyXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5vbkF1ZGlvUHJvY2Vzc1N0YXJ0ZWQ6IGZ1bmN0aW9uKCkgeyB9O1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmICghaXNBdWRpb1Byb2Nlc3NTdGFydGVkKSB7XHJcbiAgICAgICAgICAgIGlzQXVkaW9Qcm9jZXNzU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjb25maWcub25BdWRpb1Byb2Nlc3NTdGFydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcub25BdWRpb1Byb2Nlc3NTdGFydGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maWcuaW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcuaW5pdENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsZWZ0ID0gZS5pbnB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKTtcclxuXHJcbiAgICAgICAgLy8gd2UgY2xvbmUgdGhlIHNhbXBsZXNcclxuICAgICAgICB2YXIgY2hMZWZ0ID0gbmV3IEZsb2F0MzJBcnJheShsZWZ0KTtcclxuICAgICAgICBsZWZ0Y2hhbm5lbC5wdXNoKGNoTGVmdCk7XHJcblxyXG4gICAgICAgIGlmIChudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPT09IDIpIHtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0ID0gZS5pbnB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YSgxKTtcclxuICAgICAgICAgICAgdmFyIGNoUmlnaHQgPSBuZXcgRmxvYXQzMkFycmF5KHJpZ2h0KTtcclxuICAgICAgICAgICAgcmlnaHRjaGFubmVsLnB1c2goY2hSaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWNvcmRpbmdMZW5ndGggKz0gYnVmZmVyU2l6ZTtcclxuXHJcbiAgICAgICAgLy8gZXhwb3J0IHJhdyBQQ01cclxuICAgICAgICBzZWxmLnJlY29yZGluZ0xlbmd0aCA9IHJlY29yZGluZ0xlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcudGltZVNsaWNlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBpbnRlcnZhbHNCYXNlZEJ1ZmZlcnMucmVjb3JkaW5nTGVuZ3RoICs9IGJ1ZmZlclNpemU7XHJcbiAgICAgICAgICAgIGludGVydmFsc0Jhc2VkQnVmZmVycy5sZWZ0LnB1c2goY2hMZWZ0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGludGVydmFsc0Jhc2VkQnVmZmVycy5yaWdodC5wdXNoKGNoUmlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGpzQXVkaW9Ob2RlLm9uYXVkaW9wcm9jZXNzID0gb25BdWRpb1Byb2Nlc3NEYXRhQXZhaWxhYmxlO1xyXG5cclxuICAgIC8vIHRvIHByZXZlbnQgc2VsZiBhdWRpbyB0byBiZSBjb25uZWN0ZWQgd2l0aCBzcGVha2Vyc1xyXG4gICAgaWYgKGNvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1EZXN0aW5hdGlvbikge1xyXG4gICAgICAgIGpzQXVkaW9Ob2RlLmNvbm5lY3QoY29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbURlc3RpbmF0aW9uKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBqc0F1ZGlvTm9kZS5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGV4cG9ydCByYXcgUENNXHJcbiAgICB0aGlzLmxlZnRjaGFubmVsID0gbGVmdGNoYW5uZWw7XHJcbiAgICB0aGlzLnJpZ2h0Y2hhbm5lbCA9IHJpZ2h0Y2hhbm5lbDtcclxuICAgIHRoaXMubnVtYmVyT2ZBdWRpb0NoYW5uZWxzID0gbnVtYmVyT2ZBdWRpb0NoYW5uZWxzO1xyXG4gICAgdGhpcy5kZXNpcmVkU2FtcFJhdGUgPSBkZXNpcmVkU2FtcFJhdGU7XHJcbiAgICB0aGlzLnNhbXBsZVJhdGUgPSBzYW1wbGVSYXRlO1xyXG4gICAgc2VsZi5yZWNvcmRpbmdMZW5ndGggPSByZWNvcmRpbmdMZW5ndGg7XHJcblxyXG4gICAgLy8gaGVscGVyIGZvciBpbnRlcnZhbHMgYmFzZWQgYmxvYnNcclxuICAgIHZhciBpbnRlcnZhbHNCYXNlZEJ1ZmZlcnMgPSB7XHJcbiAgICAgICAgbGVmdDogW10sXHJcbiAgICAgICAgcmlnaHQ6IFtdLFxyXG4gICAgICAgIHJlY29yZGluZ0xlbmd0aDogMFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyB0aGlzIGxvb3BlciBpcyB1c2VkIHRvIHN1cHBvcnQgaW50ZXJ2YWxzIGJhc2VkIGJsb2JzICh2aWEgdGltZVNsaWNlK29uZGF0YWF2YWlsYWJsZSlcclxuICAgIGZ1bmN0aW9uIGxvb3BlcigpIHtcclxuICAgICAgICBpZiAoIXJlY29yZGluZyB8fCB0eXBlb2YgY29uZmlnLm9uZGF0YWF2YWlsYWJsZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgY29uZmlnLnRpbWVTbGljZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGludGVydmFsc0Jhc2VkQnVmZmVycy5sZWZ0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBtZXJnZUxlZnRSaWdodEJ1ZmZlcnMoe1xyXG4gICAgICAgICAgICAgICAgZGVzaXJlZFNhbXBSYXRlOiBkZXNpcmVkU2FtcFJhdGUsXHJcbiAgICAgICAgICAgICAgICBzYW1wbGVSYXRlOiBzYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzOiBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMsXHJcbiAgICAgICAgICAgICAgICBpbnRlcm5hbEludGVybGVhdmVkTGVuZ3RoOiBpbnRlcnZhbHNCYXNlZEJ1ZmZlcnMucmVjb3JkaW5nTGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgbGVmdEJ1ZmZlcnM6IGludGVydmFsc0Jhc2VkQnVmZmVycy5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgcmlnaHRCdWZmZXJzOiBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPT09IDEgPyBbXSA6IGludGVydmFsc0Jhc2VkQnVmZmVycy5yaWdodFxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihidWZmZXIsIHZpZXcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoW3ZpZXddLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2F1ZGlvL3dhdidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLm9uZGF0YWF2YWlsYWJsZShibG9iKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGxvb3BlciwgY29uZmlnLnRpbWVTbGljZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaW50ZXJ2YWxzQmFzZWRCdWZmZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogW10sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW10sXHJcbiAgICAgICAgICAgICAgICByZWNvcmRpbmdMZW5ndGg6IDBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGxvb3BlciwgY29uZmlnLnRpbWVTbGljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5TdGVyZW9BdWRpb1JlY29yZGVyID0gU3RlcmVvQXVkaW9SZWNvcmRlcjtcclxufVxuXHJcbi8vIF9fX19fX19fX19fX19fX19fXHJcbi8vIENhbnZhc1JlY29yZGVyLmpzXHJcblxyXG4vKipcclxuICogQ2FudmFzUmVjb3JkZXIgaXMgYSBzdGFuZGFsb25lIGNsYXNzIHVzZWQgYnkge0BsaW5rIFJlY29yZFJUQ30gdG8gYnJpbmcgSFRNTDUtQ2FudmFzIHJlY29yZGluZyBpbnRvIHZpZGVvIFdlYk0uIEl0IHVzZXMgSFRNTDJDYW52YXMgbGlicmFyeSBhbmQgcnVucyB0b3Agb3ZlciB7QGxpbmsgV2hhbW15fS5cclxuICogQHN1bW1hcnkgSFRNTDJDYW52YXMgcmVjb3JkaW5nIGludG8gdmlkZW8gV2ViTS5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIENhbnZhc1JlY29yZGVyXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgQ2FudmFzUmVjb3JkZXIoaHRtbEVsZW1lbnQsIHsgZGlzYWJsZUxvZ3M6IHRydWUsIHVzZVdoYW1teVJlY29yZGVyOiB0cnVlIH0pO1xyXG4gKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gKiB9KTtcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBodG1sRWxlbWVudCAtIHF1ZXJ5U2VsZWN0b3IvZ2V0RWxlbWVudEJ5SWQvZ2V0RWxlbWVudHNCeVRhZ05hbWVbMF0vZXRjLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge2Rpc2FibGVMb2dzOnRydWUsIGluaXRDYWxsYmFjazogZnVuY3Rpb259XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gQ2FudmFzUmVjb3JkZXIoaHRtbEVsZW1lbnQsIGNvbmZpZykge1xyXG4gICAgaWYgKHR5cGVvZiBodG1sMmNhbnZhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aHJvdyAnUGxlYXNlIGxpbms6IGh0dHBzOi8vY2RuLndlYnJ0Yy1leHBlcmltZW50LmNvbS9zY3JlZW5zaG90LmpzJztcclxuICAgIH1cclxuXHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBpZiAoIWNvbmZpZy5mcmFtZUludGVydmFsKSB7XHJcbiAgICAgICAgY29uZmlnLmZyYW1lSW50ZXJ2YWwgPSAxMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB2aWEgRGV0ZWN0UlRDLmpzXHJcbiAgICB2YXIgaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZyA9IGZhbHNlO1xyXG4gICAgWydjYXB0dXJlU3RyZWFtJywgJ21vekNhcHR1cmVTdHJlYW0nLCAnd2Via2l0Q2FwdHVyZVN0cmVhbSddLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIGlmIChpdGVtIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpKSB7XHJcbiAgICAgICAgICAgIGlzQ2FudmFzU3VwcG9ydHNTdHJlYW1DYXB0dXJpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBfaXNDaHJvbWUgPSAoISF3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb24gfHwgISF3aW5kb3cud2Via2l0R2V0VXNlck1lZGlhKSAmJiAhIXdpbmRvdy5jaHJvbWU7XHJcblxyXG4gICAgdmFyIGNocm9tZVZlcnNpb24gPSA1MDtcclxuICAgIHZhciBtYXRjaEFycmF5ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQ2hyb20oZXxpdW0pXFwvKFswLTldKylcXC4vKTtcclxuICAgIGlmIChfaXNDaHJvbWUgJiYgbWF0Y2hBcnJheSAmJiBtYXRjaEFycmF5WzJdKSB7XHJcbiAgICAgICAgY2hyb21lVmVyc2lvbiA9IHBhcnNlSW50KG1hdGNoQXJyYXlbMl0sIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoX2lzQ2hyb21lICYmIGNocm9tZVZlcnNpb24gPCA1Mikge1xyXG4gICAgICAgIGlzQ2FudmFzU3VwcG9ydHNTdHJlYW1DYXB0dXJpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29uZmlnLnVzZVdoYW1teVJlY29yZGVyKSB7XHJcbiAgICAgICAgaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnbG9iYWxDYW52YXMsIG1lZGlhU3RyZWFtUmVjb3JkZXI7XHJcblxyXG4gICAgaWYgKGlzQ2FudmFzU3VwcG9ydHNTdHJlYW1DYXB0dXJpbmcpIHtcclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWW91ciBicm93c2VyIHN1cHBvcnRzIGJvdGggTWVkaVJlY29yZGVyIEFQSSBhbmQgY2FudmFzLmNhcHR1cmVTdHJlYW0hJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaHRtbEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgICAgICBnbG9iYWxDYW52YXMgPSBodG1sRWxlbWVudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGh0bWxFbGVtZW50IGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgICAgIGdsb2JhbENhbnZhcyA9IGh0bWxFbGVtZW50LmNhbnZhcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyAnUGxlYXNlIHBhc3MgZWl0aGVyIEhUTUxDYW52YXNFbGVtZW50IG9yIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC4nO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoISFuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FudmFzIHJlY29yZGluZyBpcyBOT1Qgc3VwcG9ydGVkIGluIEZpcmVmb3guJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBpc1JlY29yZGluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlY29yZHMgQ2FudmFzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1JlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVjb3JkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaXNSZWNvcmRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZyAmJiAhY29uZmlnLnVzZVdoYW1teVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIC8vIENhbnZhc0NhcHR1cmVNZWRpYVN0cmVhbVxyXG4gICAgICAgICAgICB2YXIgY2FudmFzTWVkaWFTdHJlYW07XHJcbiAgICAgICAgICAgIGlmICgnY2FwdHVyZVN0cmVhbScgaW4gZ2xvYmFsQ2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXNNZWRpYVN0cmVhbSA9IGdsb2JhbENhbnZhcy5jYXB0dXJlU3RyZWFtKDI1KTsgLy8gMjUgRlBTXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJ21vekNhcHR1cmVTdHJlYW0nIGluIGdsb2JhbENhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzTWVkaWFTdHJlYW0gPSBnbG9iYWxDYW52YXMubW96Q2FwdHVyZVN0cmVhbSgyNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJ3dlYmtpdENhcHR1cmVTdHJlYW0nIGluIGdsb2JhbENhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzTWVkaWFTdHJlYW0gPSBnbG9iYWxDYW52YXMud2Via2l0Q2FwdHVyZVN0cmVhbSgyNSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWRTdHJlYW0gPSBuZXcgTWVkaWFTdHJlYW0oKTtcclxuICAgICAgICAgICAgICAgIG1kU3RyZWFtLmFkZFRyYWNrKGdldFRyYWNrcyhjYW52YXNNZWRpYVN0cmVhbSwgJ3ZpZGVvJylbMF0pO1xyXG4gICAgICAgICAgICAgICAgY2FudmFzTWVkaWFTdHJlYW0gPSBtZFN0cmVhbTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICAgICAgICAgIGlmICghY2FudmFzTWVkaWFTdHJlYW0pIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdjYXB0dXJlU3RyZWFtIEFQSSBhcmUgTk9UIGF2YWlsYWJsZS4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBOb3RlOiBKYW4gMTgsIDIwMTYgc3RhdHVzIGlzIHRoYXQsIFxyXG4gICAgICAgICAgICAvLyBGaXJlZm94IE1lZGlhUmVjb3JkZXIgQVBJIGNhbid0IHJlY29yZCBDYW52YXNDYXB0dXJlTWVkaWFTdHJlYW0gb2JqZWN0LlxyXG4gICAgICAgICAgICBtZWRpYVN0cmVhbVJlY29yZGVyID0gbmV3IE1lZGlhU3RyZWFtUmVjb3JkZXIoY2FudmFzTWVkaWFTdHJlYW0sIHtcclxuICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBjb25maWcubWltZVR5cGUgfHwgJ3ZpZGVvL3dlYm0nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtZWRpYVN0cmVhbVJlY29yZGVyLnJlY29yZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdoYW1teS5mcmFtZXMgPSBbXTtcclxuICAgICAgICAgICAgbGFzdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgZHJhd0NhbnZhc0ZyYW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmluaXRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjb25maWcuaW5pdENhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdldFdlYlBJbWFnZXMgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChodG1sRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnY2FudmFzJykge1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZnJhbWVzTGVuZ3RoID0gd2hhbW15LmZyYW1lcy5sZW5ndGg7XHJcbiAgICAgICAgd2hhbW15LmZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGZyYW1lLCBpZHgpIHtcclxuICAgICAgICAgICAgdmFyIGZyYW1lc1JlbWFpbmluZyA9IGZyYW1lc0xlbmd0aCAtIGlkeDtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZyYW1lc1JlbWFpbmluZyArICcvJyArIGZyYW1lc0xlbmd0aCArICcgZnJhbWVzIHJlbWFpbmluZycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLm9uRW5jb2RpbmdDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLm9uRW5jb2RpbmdDYWxsYmFjayhmcmFtZXNSZW1haW5pbmcsIGZyYW1lc0xlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB3ZWJwID0gZnJhbWUuaW1hZ2UudG9EYXRhVVJMKCdpbWFnZS93ZWJwJywgMSk7XHJcbiAgICAgICAgICAgIHdoYW1teS5mcmFtZXNbaWR4XS5pbWFnZSA9IHdlYnA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHZW5lcmF0aW5nIFdlYk0nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcHMgcmVjb3JkaW5nIENhbnZhcy5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24sIHRoYXQgaXMgdXNlZCB0byBwYXNzIHJlY29yZGVkIGJsb2IgYmFjayB0byB0aGUgY2FsbGVlLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1JlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGlzUmVjb3JkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGlzQ2FudmFzU3VwcG9ydHNTdHJlYW1DYXB0dXJpbmcgJiYgbWVkaWFTdHJlYW1SZWNvcmRlcikge1xyXG4gICAgICAgICAgICBtZWRpYVN0cmVhbVJlY29yZGVyLnN0b3AoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdldFdlYlBJbWFnZXMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBSZWNvcmRlZCBmcmFtZXMgaW4gdmlkZW8vd2VibSBibG9iLlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgQ2FudmFzUmVjb3JkZXJcclxuICAgICAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICogICAgIHZhciBibG9iID0gcmVjb3JkZXIuYmxvYjtcclxuICAgICAgICAgICAgICogfSk7XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB3aGFtbXkuY29tcGlsZShmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWNvcmRpbmcgZmluaXNoZWQhJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhhdC5ibG9iID0gYmxvYjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5ibG9iLmZvckVhY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmJsb2IgPSBuZXcgQmxvYihbXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmlkZW8vd2VibSdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGF0LmJsb2IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHdoYW1teS5mcmFtZXMgPSBbXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpc1BhdXNlZFJlY29yZGluZyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcGF1c2VzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZFJlY29yZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChtZWRpYVN0cmVhbVJlY29yZGVyIGluc3RhbmNlb2YgTWVkaWFTdHJlYW1SZWNvcmRlcikge1xyXG4gICAgICAgICAgICBtZWRpYVN0cmVhbVJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZXN1bWUoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXN1bWUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZFJlY29yZGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAobWVkaWFTdHJlYW1SZWNvcmRlciBpbnN0YW5jZW9mIE1lZGlhU3RyZWFtUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgbWVkaWFTdHJlYW1SZWNvcmRlci5yZXN1bWUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc1JlY29yZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnJlY29yZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXNldHMgY3VycmVudGx5IHJlY29yZGVkIGRhdGEuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmNsZWFyUmVjb3JkZWREYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGlzUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcChjbGVhclJlY29yZGVkRGF0YUNCKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYXJSZWNvcmRlZERhdGFDQigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclJlY29yZGVkRGF0YUNCKCkge1xyXG4gICAgICAgIHdoYW1teS5mcmFtZXMgPSBbXTtcclxuICAgICAgICBpc1JlY29yZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlzUGF1c2VkUmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZm9yIGRlYnVnZ2luZ1xyXG4gICAgdGhpcy5uYW1lID0gJ0NhbnZhc1JlY29yZGVyJztcclxuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbG9uZUNhbnZhcygpIHtcclxuICAgICAgICAvL2NyZWF0ZSBhIG5ldyBjYW52YXNcclxuICAgICAgICB2YXIgbmV3Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSBuZXdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgLy9zZXQgZGltZW5zaW9uc1xyXG4gICAgICAgIG5ld0NhbnZhcy53aWR0aCA9IGh0bWxFbGVtZW50LndpZHRoO1xyXG4gICAgICAgIG5ld0NhbnZhcy5oZWlnaHQgPSBodG1sRWxlbWVudC5oZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vYXBwbHkgdGhlIG9sZCBjYW52YXMgdG8gdGhlIG5ldyBvbmVcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShodG1sRWxlbWVudCwgMCwgMCk7XHJcblxyXG4gICAgICAgIC8vcmV0dXJuIHRoZSBuZXcgY2FudmFzXHJcbiAgICAgICAgcmV0dXJuIG5ld0NhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3Q2FudmFzRnJhbWUoKSB7XHJcbiAgICAgICAgaWYgKGlzUGF1c2VkUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGRyYXdDYW52YXNGcmFtZSwgNTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChodG1sRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY2FudmFzJykge1xyXG4gICAgICAgICAgICB2YXIgZHVyYXRpb24gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxhc3RUaW1lO1xyXG4gICAgICAgICAgICAvLyB2aWEgIzIwNiwgYnkgSmFjayBpLmUuIEBTZXltb3VyclxyXG4gICAgICAgICAgICBsYXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgd2hhbW15LmZyYW1lcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGltYWdlOiBjbG9uZUNhbnZhcygpLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGRyYXdDYW52YXNGcmFtZSwgY29uZmlnLmZyYW1lSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGh0bWwyY2FudmFzKGh0bWxFbGVtZW50LCB7XHJcbiAgICAgICAgICAgIGdyYWJNb3VzZTogdHlwZW9mIGNvbmZpZy5zaG93TW91c2VQb2ludGVyID09PSAndW5kZWZpbmVkJyB8fCBjb25maWcuc2hvd01vdXNlUG9pbnRlcixcclxuICAgICAgICAgICAgb25yZW5kZXJlZDogZnVuY3Rpb24oY2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHVyYXRpb24gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxhc3RUaW1lO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGRyYXdDYW52YXNGcmFtZSwgY29uZmlnLmZyYW1lSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHZpYSAjMjA2LCBieSBKYWNrIGkuZS4gQFNleW1vdXJyXHJcbiAgICAgICAgICAgICAgICBsYXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdoYW1teS5mcmFtZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3dlYnAnLCAxKSxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc1JlY29yZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZHJhd0NhbnZhc0ZyYW1lLCBjb25maWcuZnJhbWVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbGFzdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICB2YXIgd2hhbW15ID0gbmV3IFdoYW1teS5WaWRlbygxMDApO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5DYW52YXNSZWNvcmRlciA9IENhbnZhc1JlY29yZGVyO1xyXG59XG5cclxuLy8gX19fX19fX19fX19fX19fX19cclxuLy8gV2hhbW15UmVjb3JkZXIuanNcclxuXHJcbi8qKlxyXG4gKiBXaGFtbXlSZWNvcmRlciBpcyBhIHN0YW5kYWxvbmUgY2xhc3MgdXNlZCBieSB7QGxpbmsgUmVjb3JkUlRDfSB0byBicmluZyB2aWRlbyByZWNvcmRpbmcgaW4gQ2hyb21lLiBJdCBydW5zIHRvcCBvdmVyIHtAbGluayBXaGFtbXl9LlxyXG4gKiBAc3VtbWFyeSBWaWRlbyByZWNvcmRpbmcgZmVhdHVyZSBpbiBDaHJvbWUuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAdHlwZWRlZiBXaGFtbXlSZWNvcmRlclxyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIHJlY29yZGVyID0gbmV3IFdoYW1teVJlY29yZGVyKG1lZGlhU3RyZWFtKTtcclxuICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oYmxvYikge1xyXG4gKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICogfSk7XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBNZWRpYVN0cmVhbSBvYmplY3QgZmV0Y2hlZCB1c2luZyBnZXRVc2VyTWVkaWEgQVBJIG9yIGdlbmVyYXRlZCB1c2luZyBjYXB0dXJlU3RyZWFtVW50aWxFbmRlZCBvciBXZWJBdWRpbyBBUEkuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7ZGlzYWJsZUxvZ3M6IHRydWUsIGluaXRDYWxsYmFjazogZnVuY3Rpb24sIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50LCBldGMufVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIFdoYW1teVJlY29yZGVyKG1lZGlhU3RyZWFtLCBjb25maWcpIHtcclxuXHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG4gICAgaWYgKCFjb25maWcuZnJhbWVJbnRlcnZhbCkge1xyXG4gICAgICAgIGNvbmZpZy5mcmFtZUludGVydmFsID0gMTA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVXNpbmcgZnJhbWVzLWludGVydmFsOicsIGNvbmZpZy5mcmFtZUludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlY29yZHMgdmlkZW8uXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2hhbW15UmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZWNvcmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoIWNvbmZpZy53aWR0aCkge1xyXG4gICAgICAgICAgICBjb25maWcud2lkdGggPSAzMjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgY29uZmlnLmhlaWdodCA9IDI0MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLnZpZGVvKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy52aWRlbyA9IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjb25maWcud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmNhbnZhcykge1xyXG4gICAgICAgICAgICBjb25maWcuY2FudmFzID0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gY29uZmlnLmNhbnZhcy53aWR0aCB8fCAzMjA7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNvbmZpZy5jYW52YXMuaGVpZ2h0IHx8IDI0MDtcclxuXHJcbiAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICAvLyBzZXR0aW5nIGRlZmF1bHRzXHJcbiAgICAgICAgaWYgKGNvbmZpZy52aWRlbyAmJiBjb25maWcudmlkZW8gaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHZpZGVvID0gY29uZmlnLnZpZGVvLmNsb25lTm9kZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5pbml0Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5pbml0Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuXHJcbiAgICAgICAgICAgIHNldFNyY09iamVjdChtZWRpYVN0cmVhbSwgdmlkZW8pO1xyXG5cclxuICAgICAgICAgICAgdmlkZW8ub25sb2FkZWRtZXRhZGF0YSA9IGZ1bmN0aW9uKCkgeyAvLyBcIm9ubG9hZGVkbWV0YWRhdGFcIiBtYXkgTk9UIHdvcmsgaW4gRkY/XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmluaXRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5pbml0Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLndpZHRoID0gY29uZmlnLnZpZGVvLndpZHRoO1xyXG4gICAgICAgICAgICB2aWRlby5oZWlnaHQgPSBjb25maWcudmlkZW8uaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmlkZW8ubXV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHZpZGVvLnBsYXkoKTtcclxuXHJcbiAgICAgICAgbGFzdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB3aGFtbXkgPSBuZXcgV2hhbW15LlZpZGVvKCk7XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYW52YXMgcmVzb2x1dGlvbnMnLCBjYW52YXMud2lkdGgsICcqJywgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2aWRlbyB3aWR0aC9oZWlnaHQnLCB2aWRlby53aWR0aCB8fCBjYW52YXMud2lkdGgsICcqJywgdmlkZW8uaGVpZ2h0IHx8IGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZHJhd0ZyYW1lcyhjb25maWcuZnJhbWVJbnRlcnZhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhdyBhbmQgcHVzaCBmcmFtZXMgdG8gV2hhbW15XHJcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IGZyYW1lSW50ZXJ2YWwgLSBzZXQgbWluaW11bSBpbnRlcnZhbCAoaW4gbWlsbGlzZWNvbmRzKSBiZXR3ZWVuIGVhY2ggdGltZSB3ZSBwdXNoIGEgZnJhbWUgdG8gV2hhbW15XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGRyYXdGcmFtZXMoZnJhbWVJbnRlcnZhbCkge1xyXG4gICAgICAgIGZyYW1lSW50ZXJ2YWwgPSB0eXBlb2YgZnJhbWVJbnRlcnZhbCAhPT0gJ3VuZGVmaW5lZCcgPyBmcmFtZUludGVydmFsIDogMTA7XHJcblxyXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbGFzdFRpbWU7XHJcbiAgICAgICAgaWYgKCFkdXJhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChkcmF3RnJhbWVzLCBmcmFtZUludGVydmFsLCBmcmFtZUludGVydmFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc1BhdXNlZFJlY29yZGluZykge1xyXG4gICAgICAgICAgICBsYXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChkcmF3RnJhbWVzLCAxMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdmlhICMyMDYsIGJ5IEphY2sgaS5lLiBAU2V5bW91cnJcclxuICAgICAgICBsYXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICBpZiAodmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgICAgICAgIC8vIHZpYTogaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9XZWJSVEMtRXhwZXJpbWVudC9wdWxsLzMxNlxyXG4gICAgICAgICAgICAvLyBUd2VhayBmb3IgQW5kcm9pZCBDaHJvbWVcclxuICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgd2hhbW15LmZyYW1lcy5wdXNoKHtcclxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBpbWFnZTogY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2Uvd2VicCcpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghaXNTdG9wRHJhd2luZykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGRyYXdGcmFtZXMsIGZyYW1lSW50ZXJ2YWwsIGZyYW1lSW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhc3luY0xvb3Aobykge1xyXG4gICAgICAgIHZhciBpID0gLTEsXHJcbiAgICAgICAgICAgIGxlbmd0aCA9IG8ubGVuZ3RoO1xyXG5cclxuICAgICAgICAoZnVuY3Rpb24gbG9vcCgpIHtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBvLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFwic2V0VGltZW91dFwiIGFkZGVkIGJ5IEppbSBNY0xlb2RcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIG8uZnVuY3Rpb25Ub0xvb3AobG9vcCwgaSk7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH0pKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlIGJsYWNrIGZyYW1lcyBmcm9tIHRoZSBiZWdpbm5pbmcgdG8gdGhlIHNwZWNpZmllZCBmcmFtZVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gX2ZyYW1lcyAtIGFycmF5IG9mIGZyYW1lcyB0byBiZSBjaGVja2VkXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX2ZyYW1lc1RvQ2hlY2sgLSBudW1iZXIgb2YgZnJhbWUgdW50aWwgY2hlY2sgd2lsbCBiZSBleGVjdXRlZCAoLTEgLSB3aWxsIGRyb3AgYWxsIGZyYW1lcyB1bnRpbCBmcmFtZSBub3QgbWF0Y2hlZCB3aWxsIGJlIGZvdW5kKVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IF9waXhUb2xlcmFuY2UgLSAwIC0gdmVyeSBzdHJpY3QgKG9ubHkgYmxhY2sgcGl4ZWwgY29sb3IpIDsgMSAtIGFsbFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IF9mcmFtZVRvbGVyYW5jZSAtIDAgLSB2ZXJ5IHN0cmljdCAob25seSBibGFjayBmcmFtZSBjb2xvcikgOyAxIC0gYWxsXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IC0gYXJyYXkgb2YgZnJhbWVzXHJcbiAgICAgKi9cclxuICAgIC8vIHB1bGwjMjkzIGJ5IEB2b2xvZGFsZXhleVxyXG4gICAgZnVuY3Rpb24gZHJvcEJsYWNrRnJhbWVzKF9mcmFtZXMsIF9mcmFtZXNUb0NoZWNrLCBfcGl4VG9sZXJhbmNlLCBfZnJhbWVUb2xlcmFuY2UsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgbG9jYWxDYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgbG9jYWxDYW52YXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgICB2YXIgY29udGV4dDJkID0gbG9jYWxDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgcmVzdWx0RnJhbWVzID0gW107XHJcblxyXG4gICAgICAgIHZhciBjaGVja1VudGlsTm90QmxhY2sgPSBfZnJhbWVzVG9DaGVjayA9PT0gLTE7XHJcbiAgICAgICAgdmFyIGVuZENoZWNrRnJhbWUgPSAoX2ZyYW1lc1RvQ2hlY2sgJiYgX2ZyYW1lc1RvQ2hlY2sgPiAwICYmIF9mcmFtZXNUb0NoZWNrIDw9IF9mcmFtZXMubGVuZ3RoKSA/XHJcbiAgICAgICAgICAgIF9mcmFtZXNUb0NoZWNrIDogX2ZyYW1lcy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIHNhbXBsZUNvbG9yID0ge1xyXG4gICAgICAgICAgICByOiAwLFxyXG4gICAgICAgICAgICBnOiAwLFxyXG4gICAgICAgICAgICBiOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgbWF4Q29sb3JEaWZmZXJlbmNlID0gTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICBNYXRoLnBvdygyNTUsIDIpICtcclxuICAgICAgICAgICAgTWF0aC5wb3coMjU1LCAyKSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KDI1NSwgMilcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBwaXhUb2xlcmFuY2UgPSBfcGl4VG9sZXJhbmNlICYmIF9waXhUb2xlcmFuY2UgPj0gMCAmJiBfcGl4VG9sZXJhbmNlIDw9IDEgPyBfcGl4VG9sZXJhbmNlIDogMDtcclxuICAgICAgICB2YXIgZnJhbWVUb2xlcmFuY2UgPSBfZnJhbWVUb2xlcmFuY2UgJiYgX2ZyYW1lVG9sZXJhbmNlID49IDAgJiYgX2ZyYW1lVG9sZXJhbmNlIDw9IDEgPyBfZnJhbWVUb2xlcmFuY2UgOiAwO1xyXG4gICAgICAgIHZhciBkb05vdENoZWNrTmV4dCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBhc3luY0xvb3Aoe1xyXG4gICAgICAgICAgICBsZW5ndGg6IGVuZENoZWNrRnJhbWUsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uVG9Mb29wOiBmdW5jdGlvbihsb29wLCBmKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hQaXhDb3VudCwgZW5kUGl4Q2hlY2ssIG1heFBpeENvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBmaW5pc2hJbWFnZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZG9Ob3RDaGVja05leHQgJiYgbWF4UGl4Q291bnQgLSBtYXRjaFBpeENvdW50IDw9IG1heFBpeENvdW50ICogZnJhbWVUb2xlcmFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbW92ZWQgYmxhY2sgZnJhbWUgOiAnICsgZiArICcgOyBmcmFtZSBkdXJhdGlvbiAnICsgX2ZyYW1lc1tmXS5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZyYW1lIGlzIHBhc3NlZCA6ICcgKyBmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrVW50aWxOb3RCbGFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Ob3RDaGVja05leHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEZyYW1lcy5wdXNoKF9mcmFtZXNbZl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsb29wKCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZG9Ob3RDaGVja05leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlRGF0YSA9IGNvbnRleHQyZC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hQaXhDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFBpeENoZWNrID0gaW1hZ2VEYXRhLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhQaXhDb3VudCA9IGltYWdlRGF0YS5kYXRhLmxlbmd0aCAvIDQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwaXggPSAwOyBwaXggPCBlbmRQaXhDaGVjazsgcGl4ICs9IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Q29sb3IgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcjogaW1hZ2VEYXRhLmRhdGFbcGl4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiBpbWFnZURhdGEuZGF0YVtwaXggKyAxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiOiBpbWFnZURhdGEuZGF0YVtwaXggKyAyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xvckRpZmZlcmVuY2UgPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coY3VycmVudENvbG9yLnIgLSBzYW1wbGVDb2xvci5yLCAyKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coY3VycmVudENvbG9yLmcgLSBzYW1wbGVDb2xvci5nLCAyKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coY3VycmVudENvbG9yLmIgLSBzYW1wbGVDb2xvci5iLCAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpZmZlcmVuY2UgaW4gY29sb3IgaXQgaXMgZGlmZmVyZW5jZSBpbiBjb2xvciB2ZWN0b3JzIChyMSxnMSxiMSkgPD0+IChyMixnMixiMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xvckRpZmZlcmVuY2UgPD0gbWF4Q29sb3JEaWZmZXJlbmNlICogcGl4VG9sZXJhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hQaXhDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBfZnJhbWVzW2ZdLmltYWdlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRGcmFtZXMgPSByZXN1bHRGcmFtZXMuY29uY2F0KF9mcmFtZXMuc2xpY2UoZW5kQ2hlY2tGcmFtZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRGcmFtZXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhdCBsZWFzdCBvbmUgbGFzdCBmcmFtZSBzaG91bGQgYmUgYXZhaWxhYmxlIGZvciBuZXh0IG1hbmlwdWxhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRvdGFsIGR1cmF0aW9uIG9mIGFsbCBmcmFtZXMgd2lsbCBiZSA8IDEwMDAgdGhhbiBmZm1wZWcgZG9lc24ndCB3b3JrIHdlbGwuLi5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRGcmFtZXMucHVzaChfZnJhbWVzW19mcmFtZXMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0RnJhbWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpc1N0b3BEcmF3aW5nID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcgdmlkZW8uXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uLCB0aGF0IGlzIHVzZWQgdG8gcGFzcyByZWNvcmRlZCBibG9iIGJhY2sgdG8gdGhlIGNhbGxlZS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBXaGFtbXlSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oYmxvYikge1xyXG4gICAgICogICAgIHZpZGVvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5zdG9wID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XHJcblxyXG4gICAgICAgIGlzU3RvcERyYXdpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIGFuYWx5c2Ugb2YgYWxsIGZyYW1lcyB0YWtlcyBzb21lIHRpbWUhXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gZS5nLiBkcm9wQmxhY2tGcmFtZXMoZnJhbWVzLCAxMCwgMSwgMSkgLSB3aWxsIGN1dCBhbGwgMTAgZnJhbWVzXHJcbiAgICAgICAgICAgIC8vIGUuZy4gZHJvcEJsYWNrRnJhbWVzKGZyYW1lcywgMTAsIDAuNSwgMC41KSAtIHdpbGwgYW5hbHlzZSAxMCBmcmFtZXNcclxuICAgICAgICAgICAgLy8gZS5nLiBkcm9wQmxhY2tGcmFtZXMoZnJhbWVzLCAxMCkgPT09IGRyb3BCbGFja0ZyYW1lcyhmcmFtZXMsIDEwLCAwLCAwKSAtIHdpbGwgYW5hbHlzZSAxMCBmcmFtZXMgd2l0aCBzdHJpY3QgYmxhY2sgY29sb3JcclxuICAgICAgICAgICAgZHJvcEJsYWNrRnJhbWVzKHdoYW1teS5mcmFtZXMsIC0xLCBudWxsLCBudWxsLCBmdW5jdGlvbihmcmFtZXMpIHtcclxuICAgICAgICAgICAgICAgIHdoYW1teS5mcmFtZXMgPSBmcmFtZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdG8gZGlzcGxheSBhZHZlcnRpc2VtZW50IGltYWdlcyFcclxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuYWR2ZXJ0aXNlbWVudCAmJiBjb25maWcuYWR2ZXJ0aXNlbWVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGFtbXkuZnJhbWVzID0gY29uZmlnLmFkdmVydGlzZW1lbnQuY29uY2F0KHdoYW1teS5mcmFtZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtCbG9ifSBibG9iIC0gUmVjb3JkZWQgZnJhbWVzIGluIHZpZGVvL3dlYm0gYmxvYi5cclxuICAgICAgICAgICAgICAgICAqIEBtZW1iZXJvZiBXaGFtbXlSZWNvcmRlclxyXG4gICAgICAgICAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgICAgICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgKiAgICAgdmFyIGJsb2IgPSByZWNvcmRlci5ibG9iO1xyXG4gICAgICAgICAgICAgICAgICogfSk7XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHdoYW1teS5jb21waWxlKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ibG9iID0gYmxvYjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmJsb2IuZm9yRWFjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ibG9iID0gbmV3IEJsb2IoW10sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd2aWRlby93ZWJtJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhfdGhpcy5ibG9iKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaXNQYXVzZWRSZWNvcmRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHBhdXNlcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2hhbW15UmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5wYXVzZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnBhdXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaXNQYXVzZWRSZWNvcmRpbmcgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlc3VtZXMgdGhlIHJlY29yZGluZyBwcm9jZXNzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFdoYW1teVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVzdW1lKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVzdW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaXNQYXVzZWRSZWNvcmRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGlzU3RvcERyYXdpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNvcmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzZXRzIGN1cnJlbnRseSByZWNvcmRlZCBkYXRhLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFdoYW1teVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuY2xlYXJSZWNvcmRlZERhdGEoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5jbGVhclJlY29yZGVkRGF0YSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghaXNTdG9wRHJhd2luZykge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3AoY2xlYXJSZWNvcmRlZERhdGFDQik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsZWFyUmVjb3JkZWREYXRhQ0IoKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJSZWNvcmRlZERhdGFDQigpIHtcclxuICAgICAgICB3aGFtbXkuZnJhbWVzID0gW107XHJcbiAgICAgICAgaXNTdG9wRHJhd2luZyA9IHRydWU7XHJcbiAgICAgICAgaXNQYXVzZWRSZWNvcmRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmb3IgZGVidWdnaW5nXHJcbiAgICB0aGlzLm5hbWUgPSAnV2hhbW15UmVjb3JkZXInO1xyXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgdmFyIHZpZGVvO1xyXG4gICAgdmFyIGxhc3RUaW1lO1xyXG4gICAgdmFyIHdoYW1teTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBSZWNvcmRSVEMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWNvcmRSVEMuV2hhbW15UmVjb3JkZXIgPSBXaGFtbXlSZWNvcmRlcjtcclxufVxuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRpbWF0dGVyMTUvd2hhbW15L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuLy8gX19fX19fX19fXHJcbi8vIFdoYW1teS5qc1xyXG5cclxuLy8gdG9kbzogRmlyZWZveCBub3cgc3VwcG9ydHMgd2VicCBmb3Igd2VibSBjb250YWluZXJzIVxyXG4vLyB0aGVpciBNZWRpYVJlY29yZGVyIGltcGxlbWVudGF0aW9uIHdvcmtzIHdlbGwhXHJcbi8vIHNob3VsZCB3ZSBwcm92aWRlIGFuIG9wdGlvbiB0byByZWNvcmQgdmlhIFdoYW1teS5qcyBvciBNZWRpYVJlY29yZGVyIEFQSSBpcyBhIGJldHRlciBzb2x1dGlvbj9cclxuXHJcbi8qKlxyXG4gKiBXaGFtbXkgaXMgYSBzdGFuZGFsb25lIGNsYXNzIHVzZWQgYnkge0BsaW5rIFJlY29yZFJUQ30gdG8gYnJpbmcgdmlkZW8gcmVjb3JkaW5nIGluIENocm9tZS4gSXQgaXMgd3JpdHRlbiBieSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2FudGltYXR0ZXIxNXxhbnRpbWF0dGVyMTV9XHJcbiAqIEBzdW1tYXJ5IEEgcmVhbCB0aW1lIGphdmFzY3JpcHQgd2VibSBlbmNvZGVyIGJhc2VkIG9uIGEgY2FudmFzIGhhY2suXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAdHlwZWRlZiBXaGFtbXlcclxuICogQGNsYXNzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciByZWNvcmRlciA9IG5ldyBXaGFtbXkoKS5WaWRlbygxNSk7XHJcbiAqIHJlY29yZGVyLmFkZChjb250ZXh0IHx8IGNhbnZhcyB8fCBkYXRhVVJMKTtcclxuICogdmFyIG91dHB1dCA9IHJlY29yZGVyLmNvbXBpbGUoKTtcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKi9cclxuXHJcbnZhciBXaGFtbXkgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBhIG1vcmUgYWJzdHJhY3QtaXNoIEFQSVxyXG5cclxuICAgIGZ1bmN0aW9uIFdoYW1teVZpZGVvKGR1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5mcmFtZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb24gfHwgMTtcclxuICAgICAgICB0aGlzLnF1YWxpdHkgPSAwLjg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXNzIENhbnZhcyBvciBDb250ZXh0IG9yIGltYWdlL3dlYnAoc3RyaW5nKSB0byB7QGxpbmsgV2hhbW15fSBlbmNvZGVyLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFdoYW1teVxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyID0gbmV3IFdoYW1teSgpLlZpZGVvKDAuOCwgMTAwKTtcclxuICAgICAqIHJlY29yZGVyLmFkZChjYW52YXMgfHwgY29udGV4dCB8fCAnaW1hZ2Uvd2VicCcpO1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZyYW1lIC0gQ2FudmFzIHx8IENvbnRleHQgfHwgaW1hZ2Uvd2VicFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIC0gU3RpY2sgYSBkdXJhdGlvbiAoaW4gbWlsbGlzZWNvbmRzKVxyXG4gICAgICovXHJcbiAgICBXaGFtbXlWaWRlby5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZnJhbWUsIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKCdjYW52YXMnIGluIGZyYW1lKSB7IC8vQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXHJcbiAgICAgICAgICAgIGZyYW1lID0gZnJhbWUuY2FudmFzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCd0b0RhdGFVUkwnIGluIGZyYW1lKSB7XHJcbiAgICAgICAgICAgIGZyYW1lID0gZnJhbWUudG9EYXRhVVJMKCdpbWFnZS93ZWJwJywgdGhpcy5xdWFsaXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghKC9eZGF0YTppbWFnZVxcL3dlYnA7YmFzZTY0LC9pZykudGVzdChmcmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ0lucHV0IG11c3QgYmUgZm9ybWF0dGVkIHByb3Blcmx5IGFzIGEgYmFzZTY0IGVuY29kZWQgRGF0YVVSSSBvZiB0eXBlIGltYWdlL3dlYnAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZyYW1lcy5wdXNoKHtcclxuICAgICAgICAgICAgaW1hZ2U6IGZyYW1lLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24gfHwgdGhpcy5kdXJhdGlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzSW5XZWJXb3JrZXIoX2Z1bmN0aW9uKSB7XHJcbiAgICAgICAgdmFyIGJsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtfZnVuY3Rpb24udG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgJ3RoaXMub25tZXNzYWdlID0gIGZ1bmN0aW9uIChlZWUpIHsnICsgX2Z1bmN0aW9uLm5hbWUgKyAnKGVlZS5kYXRhKTt9J1xyXG4gICAgICAgIF0sIHtcclxuICAgICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcihibG9iKTtcclxuICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHJldHVybiB3b3JrZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd2hhbW15SW5XZWJXb3JrZXIoZnJhbWVzKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gQXJyYXlUb1dlYk0oZnJhbWVzKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmZvID0gY2hlY2tGcmFtZXMoZnJhbWVzKTtcclxuICAgICAgICAgICAgaWYgKCFpbmZvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBjbHVzdGVyTWF4RHVyYXRpb24gPSAzMDAwMDtcclxuXHJcbiAgICAgICAgICAgIHZhciBFQk1MID0gW3tcclxuICAgICAgICAgICAgICAgICdpZCc6IDB4MWE0NWRmYTMsIC8vIEVCTUxcclxuICAgICAgICAgICAgICAgICdkYXRhJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg0Mjg2IC8vIEVCTUxWZXJzaW9uXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NDJmNyAvLyBFQk1MUmVhZFZlcnNpb25cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg0MmYyIC8vIEVCTUxNYXhJRExlbmd0aFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogOCxcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDQyZjMgLy8gRUJNTE1heFNpemVMZW5ndGhcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6ICd3ZWJtJyxcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDQyODIgLy8gRG9jVHlwZVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogMixcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDQyODcgLy8gRG9jVHlwZVZlcnNpb25cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg0Mjg1IC8vIERvY1R5cGVSZWFkVmVyc2lvblxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgJ2lkJzogMHgxODUzODA2NywgLy8gU2VnbWVudFxyXG4gICAgICAgICAgICAgICAgJ2RhdGEnOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDB4MTU0OWE5NjYsIC8vIEluZm9cclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogMWU2LCAvL2RvIHRoaW5ncyBpbiBtaWxsaXNlY3MgKG51bSBvZiBuYW5vc2VjcyBmb3IgZHVyYXRpb24gc2NhbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4MmFkN2IxIC8vIFRpbWVjb2RlU2NhbGVcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogJ3doYW1teScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NGQ4MCAvLyBNdXhpbmdBcHBcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogJ3doYW1teScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NTc0MSAvLyBXcml0aW5nQXBwXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IGRvdWJsZVRvU3RyaW5nKGluZm8uZHVyYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDQ0ODkgLy8gRHVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDB4MTY1NGFlNmIsIC8vIFRyYWNrc1xyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHhhZSwgLy8gVHJhY2tFbnRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweGQ3IC8vIFRyYWNrTnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NzNjNSAvLyBUcmFja1VJRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDljIC8vIEZsYWdMYWNpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAndW5kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4MjJiNTljIC8vIExhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogJ1ZfVlA4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4ODYgLy8gQ29kZWNJRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6ICdWUDgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHgyNTg2ODggLy8gQ29kZWNOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4ODMgLy8gVHJhY2tUeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4ZTAsIC8vIFZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBpbmZvLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4YjAgLy8gUGl4ZWxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogaW5mby5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHhiYSAvLyBQaXhlbEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICAvL0dlbmVyYXRlIGNsdXN0ZXJzIChtYXggZHVyYXRpb24pXHJcbiAgICAgICAgICAgIHZhciBmcmFtZU51bWJlciA9IDA7XHJcbiAgICAgICAgICAgIHZhciBjbHVzdGVyVGltZWNvZGUgPSAwO1xyXG4gICAgICAgICAgICB3aGlsZSAoZnJhbWVOdW1iZXIgPCBmcmFtZXMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNsdXN0ZXJGcmFtZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBjbHVzdGVyRHVyYXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXJGcmFtZXMucHVzaChmcmFtZXNbZnJhbWVOdW1iZXJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyRHVyYXRpb24gKz0gZnJhbWVzW2ZyYW1lTnVtYmVyXS5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZU51bWJlcisrO1xyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoZnJhbWVOdW1iZXIgPCBmcmFtZXMubGVuZ3RoICYmIGNsdXN0ZXJEdXJhdGlvbiA8IGNsdXN0ZXJNYXhEdXJhdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNsdXN0ZXJDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBjbHVzdGVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDB4MWY0M2I2NzUsIC8vIENsdXN0ZXJcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IGdldENsdXN0ZXJEYXRhKGNsdXN0ZXJUaW1lY29kZSwgY2x1c3RlckNvdW50ZXIsIGNsdXN0ZXJGcmFtZXMpXHJcbiAgICAgICAgICAgICAgICB9OyAvL0FkZCBjbHVzdGVyIHRvIHNlZ21lbnRcclxuICAgICAgICAgICAgICAgIEVCTUxbMV0uZGF0YS5wdXNoKGNsdXN0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY2x1c3RlclRpbWVjb2RlICs9IGNsdXN0ZXJEdXJhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlRUJNTChFQk1MKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldENsdXN0ZXJEYXRhKGNsdXN0ZXJUaW1lY29kZSwgY2x1c3RlckNvdW50ZXIsIGNsdXN0ZXJGcmFtZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgICAgICAnZGF0YSc6IGNsdXN0ZXJUaW1lY29kZSxcclxuICAgICAgICAgICAgICAgICdpZCc6IDB4ZTcgLy8gVGltZWNvZGVcclxuICAgICAgICAgICAgfV0uY29uY2F0KGNsdXN0ZXJGcmFtZXMubWFwKGZ1bmN0aW9uKHdlYnApIHtcclxuICAgICAgICAgICAgICAgIHZhciBibG9jayA9IG1ha2VTaW1wbGVCbG9jayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzY2FyZGFibGU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWU6IHdlYnAuZGF0YS5zbGljZSg0KSxcclxuICAgICAgICAgICAgICAgICAgICBpbnZpc2libGU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5ZnJhbWU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFjaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrTnVtOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVjb2RlOiBNYXRoLnJvdW5kKGNsdXN0ZXJDb3VudGVyKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjbHVzdGVyQ291bnRlciArPSB3ZWJwLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBibG9jayxcclxuICAgICAgICAgICAgICAgICAgICBpZDogMHhhM1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3VtcyB0aGUgbGVuZ3RocyBvZiBhbGwgdGhlIGZyYW1lcyBhbmQgZ2V0cyB0aGUgZHVyYXRpb25cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tGcmFtZXMoZnJhbWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghZnJhbWVzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZy4gTWF5YmUgV2ViUCBmb3JtYXQgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGUgY3VycmVudCBicm93c2VyLidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgd2lkdGggPSBmcmFtZXNbMF0ud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBmcmFtZXNbMF0uaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSBmcmFtZXNbMF0uZHVyYXRpb247XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGZyYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb24gKz0gZnJhbWVzW2ldLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbnVtVG9CdWZmZXIobnVtKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IFtdO1xyXG4gICAgICAgICAgICB3aGlsZSAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcGFydHMucHVzaChudW0gJiAweGZmKTtcclxuICAgICAgICAgICAgICAgIG51bSA9IG51bSA+PiA4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShwYXJ0cy5yZXZlcnNlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RyVG9CdWZmZXIoc3RyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShzdHIuc3BsaXQoJycpLm1hcChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBiaXRzVG9CdWZmZXIoYml0cykge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgcGFkID0gKGJpdHMubGVuZ3RoICUgOCkgPyAobmV3IEFycmF5KDEgKyA4IC0gKGJpdHMubGVuZ3RoICUgOCkpKS5qb2luKCcwJykgOiAnJztcclxuICAgICAgICAgICAgYml0cyA9IHBhZCArIGJpdHM7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYml0cy5sZW5ndGg7IGkgKz0gOCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKHBhcnNlSW50KGJpdHMuc3Vic3RyKGksIDgpLCAyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVFQk1MKGpzb24pIHtcclxuICAgICAgICAgICAgdmFyIGVibWwgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBqc29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGpzb25baV0uZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGdlbmVyYXRlRUJNTChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGJpdHNUb0J1ZmZlcihkYXRhLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHN0clRvQnVmZmVyKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsZW4gPSBkYXRhLnNpemUgfHwgZGF0YS5ieXRlTGVuZ3RoIHx8IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdmFyIHplcm9lcyA9IE1hdGguY2VpbChNYXRoLmNlaWwoTWF0aC5sb2cobGVuKSAvIE1hdGgubG9nKDIpKSAvIDgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNpemVUb1N0cmluZyA9IGxlbi50b1N0cmluZygyKTtcclxuICAgICAgICAgICAgICAgIHZhciBwYWRkZWQgPSAobmV3IEFycmF5KCh6ZXJvZXMgKiA3ICsgNyArIDEpIC0gc2l6ZVRvU3RyaW5nLmxlbmd0aCkpLmpvaW4oJzAnKSArIHNpemVUb1N0cmluZztcclxuICAgICAgICAgICAgICAgIHZhciBzaXplID0gKG5ldyBBcnJheSh6ZXJvZXMpKS5qb2luKCcwJykgKyAnMScgKyBwYWRkZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZWJtbC5wdXNoKG51bVRvQnVmZmVyKGpzb25baV0uaWQpKTtcclxuICAgICAgICAgICAgICAgIGVibWwucHVzaChiaXRzVG9CdWZmZXIoc2l6ZSkpO1xyXG4gICAgICAgICAgICAgICAgZWJtbC5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJsb2IoZWJtbCwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3ZpZGVvL3dlYm0nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9CaW5TdHJPbGQoYml0cykge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9ICcnO1xyXG4gICAgICAgICAgICB2YXIgcGFkID0gKGJpdHMubGVuZ3RoICUgOCkgPyAobmV3IEFycmF5KDEgKyA4IC0gKGJpdHMubGVuZ3RoICUgOCkpKS5qb2luKCcwJykgOiAnJztcclxuICAgICAgICAgICAgYml0cyA9IHBhZCArIGJpdHM7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYml0cy5sZW5ndGg7IGkgKz0gOCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGJpdHMuc3Vic3RyKGksIDgpLCAyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYWtlU2ltcGxlQmxvY2soZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgZmxhZ3MgPSAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEua2V5ZnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIGZsYWdzIHw9IDEyODtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEuaW52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFncyB8PSA4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5sYWNpbmcpIHtcclxuICAgICAgICAgICAgICAgIGZsYWdzIHw9IChkYXRhLmxhY2luZyA8PCAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEuZGlzY2FyZGFibGUpIHtcclxuICAgICAgICAgICAgICAgIGZsYWdzIHw9IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnRyYWNrTnVtID4gMTI3KSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnVHJhY2tOdW1iZXIgPiAxMjcgbm90IHN1cHBvcnRlZCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBvdXQgPSBbZGF0YS50cmFja051bSB8IDB4ODAsIGRhdGEudGltZWNvZGUgPj4gOCwgZGF0YS50aW1lY29kZSAmIDB4ZmYsIGZsYWdzXS5tYXAoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZSk7XHJcbiAgICAgICAgICAgIH0pLmpvaW4oJycpICsgZGF0YS5mcmFtZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwYXJzZVdlYlAocmlmZikge1xyXG4gICAgICAgICAgICB2YXIgVlA4ID0gcmlmZi5SSUZGWzBdLldFQlBbMF07XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJhbWVTdGFydCA9IFZQOC5pbmRleE9mKCdcXHg5ZFxceDAxXFx4MmEnKTsgLy8gQSBWUDgga2V5ZnJhbWUgc3RhcnRzIHdpdGggdGhlIDB4OWQwMTJhIGhlYWRlclxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgYyA9IFtdOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjW2ldID0gVlA4LmNoYXJDb2RlQXQoZnJhbWVTdGFydCArIDMgKyBpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHdpZHRoLCBoZWlnaHQsIHRtcDtcclxuXHJcbiAgICAgICAgICAgIC8vdGhlIGNvZGUgYmVsb3cgaXMgbGl0ZXJhbGx5IGNvcGllZCB2ZXJiYXRpbSBmcm9tIHRoZSBiaXRzdHJlYW0gc3BlY1xyXG4gICAgICAgICAgICB0bXAgPSAoY1sxXSA8PCA4KSB8IGNbMF07XHJcbiAgICAgICAgICAgIHdpZHRoID0gdG1wICYgMHgzRkZGO1xyXG4gICAgICAgICAgICB0bXAgPSAoY1szXSA8PCA4KSB8IGNbMl07XHJcbiAgICAgICAgICAgIGhlaWdodCA9IHRtcCAmIDB4M0ZGRjtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogVlA4LFxyXG4gICAgICAgICAgICAgICAgcmlmZjogcmlmZlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3RyTGVuZ3RoKHN0cmluZywgb2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChzdHJpbmcuc3Vic3RyKG9mZnNldCArIDQsIDQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHVucGFkZGVkID0gaS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChuZXcgQXJyYXkoOCAtIHVucGFkZGVkLmxlbmd0aCArIDEpKS5qb2luKCcwJykgKyB1bnBhZGRlZDtcclxuICAgICAgICAgICAgfSkuam9pbignJyksIDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGFyc2VSSUZGKHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgdmFyIGNodW5rcyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKG9mZnNldCA8IHN0cmluZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IHN0cmluZy5zdWJzdHIob2Zmc2V0LCA0KTtcclxuICAgICAgICAgICAgICAgIHZhciBsZW4gPSBnZXRTdHJMZW5ndGgoc3RyaW5nLCBvZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBzdHJpbmcuc3Vic3RyKG9mZnNldCArIDQgKyA0LCBsZW4pO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQgKyA0ICsgbGVuO1xyXG4gICAgICAgICAgICAgICAgY2h1bmtzW2lkXSA9IGNodW5rc1tpZF0gfHwgW107XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlkID09PSAnUklGRicgfHwgaWQgPT09ICdMSVNUJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNodW5rc1tpZF0ucHVzaChwYXJzZVJJRkYoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjaHVua3NbaWRdLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNodW5rcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvdWJsZVRvU3RyaW5nKG51bSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChcclxuICAgICAgICAgICAgICAgIG5ldyBVaW50OEFycmF5KChuZXcgRmxvYXQ2NEFycmF5KFtudW1dKSkuYnVmZmVyKSwgMCkubWFwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGUpO1xyXG4gICAgICAgICAgICB9KS5yZXZlcnNlKCkuam9pbignJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgd2VibSA9IG5ldyBBcnJheVRvV2ViTShmcmFtZXMubWFwKGZ1bmN0aW9uKGZyYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciB3ZWJwID0gcGFyc2VXZWJQKHBhcnNlUklGRihhdG9iKGZyYW1lLmltYWdlLnNsaWNlKDIzKSkpKTtcclxuICAgICAgICAgICAgd2VicC5kdXJhdGlvbiA9IGZyYW1lLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICByZXR1cm4gd2VicDtcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHBvc3RNZXNzYWdlKHdlYm0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5jb2RlcyBmcmFtZXMgaW4gV2ViTSBjb250YWluZXIuIEl0IHVzZXMgV2ViV29ya2ludm9rZSB0byBpbnZva2UgJ0FycmF5VG9XZWJNJyBtZXRob2QuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uLCB0aGF0IGlzIHVzZWQgdG8gcGFzcyByZWNvcmRlZCBibG9iIGJhY2sgdG8gdGhlIGNhbGxlZS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBXaGFtbXlcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlciA9IG5ldyBXaGFtbXkoKS5WaWRlbygwLjgsIDEwMCk7XHJcbiAgICAgKiByZWNvcmRlci5jb21waWxlKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAqICAgIC8vIGJsb2Iuc2l6ZSAtIGJsb2IudHlwZVxyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIFdoYW1teVZpZGVvLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgd2ViV29ya2VyID0gcHJvY2Vzc0luV2ViV29ya2VyKHdoYW1teUluV2ViV29ya2VyKTtcclxuXHJcbiAgICAgICAgd2ViV29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGV2ZW50LmRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHdlYldvcmtlci5wb3N0TWVzc2FnZSh0aGlzLmZyYW1lcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBtb3JlIGFic3RyYWN0LWlzaCBBUEkuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBXaGFtbXlcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyID0gbmV3IFdoYW1teSgpLlZpZGVvKDAuOCwgMTAwKTtcclxuICAgICAgICAgKiBAcGFyYW0gez9udW1iZXJ9IHNwZWVkIC0gMC44XHJcbiAgICAgICAgICogQHBhcmFtIHs/bnVtYmVyfSBxdWFsaXR5IC0gMTAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgVmlkZW86IFdoYW1teVZpZGVvXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuaWYgKHR5cGVvZiBSZWNvcmRSVEMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWNvcmRSVEMuV2hhbW15ID0gV2hhbW15O1xyXG59XG5cclxuLy8gX19fX19fX19fX19fX18gKGluZGV4ZWQtZGIpXHJcbi8vIERpc2tTdG9yYWdlLmpzXHJcblxyXG4vKipcclxuICogRGlza1N0b3JhZ2UgaXMgYSBzdGFuZGFsb25lIG9iamVjdCB1c2VkIGJ5IHtAbGluayBSZWNvcmRSVEN9IHRvIHN0b3JlIHJlY29yZGVkIGJsb2JzIGluIEluZGV4ZWREQiBzdG9yYWdlLlxyXG4gKiBAc3VtbWFyeSBXcml0aW5nIGJsb2JzIGludG8gSW5kZXhlZERCLlxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQGV4YW1wbGVcclxuICogRGlza1N0b3JhZ2UuU3RvcmUoe1xyXG4gKiAgICAgYXVkaW9CbG9iOiB5b3VyQXVkaW9CbG9iLFxyXG4gKiAgICAgdmlkZW9CbG9iOiB5b3VyVmlkZW9CbG9iLFxyXG4gKiAgICAgZ2lmQmxvYiAgOiB5b3VyR2lmQmxvYlxyXG4gKiB9KTtcclxuICogRGlza1N0b3JhZ2UuRmV0Y2goZnVuY3Rpb24oZGF0YVVSTCwgdHlwZSkge1xyXG4gKiAgICAgaWYodHlwZSA9PT0gJ2F1ZGlvQmxvYicpIHsgfVxyXG4gKiAgICAgaWYodHlwZSA9PT0gJ3ZpZGVvQmxvYicpIHsgfVxyXG4gKiAgICAgaWYodHlwZSA9PT0gJ2dpZkJsb2InKSAgIHsgfVxyXG4gKiB9KTtcclxuICogLy8gRGlza1N0b3JhZ2UuZGF0YVN0b3JlTmFtZSA9ICdyZWNvcmRSVEMnO1xyXG4gKiAvLyBEaXNrU3RvcmFnZS5vbkVycm9yID0gZnVuY3Rpb24oZXJyb3IpIHsgfTtcclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gaW5pdCAtIFRoaXMgbWV0aG9kIG11c3QgYmUgY2FsbGVkIG9uY2UgdG8gaW5pdGlhbGl6ZSBJbmRleGVkREIgT2JqZWN0U3RvcmUuIFRob3VnaCwgaXQgaXMgYXV0by11c2VkIGludGVybmFsbHkuXHJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IEZldGNoIC0gVGhpcyBtZXRob2QgZmV0Y2hlcyBzdG9yZWQgYmxvYnMgZnJvbSBJbmRleGVkREIuXHJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IFN0b3JlIC0gVGhpcyBtZXRob2Qgc3RvcmVzIGJsb2JzIGluIEluZGV4ZWREQi5cclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb25FcnJvciAtIFRoaXMgZnVuY3Rpb24gaXMgaW52b2tlZCBmb3IgYW55IGtub3duL3Vua25vd24gZXJyb3IuXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXRhU3RvcmVOYW1lIC0gTmFtZSBvZiB0aGUgT2JqZWN0U3RvcmUgY3JlYXRlZCBpbiBJbmRleGVkREIgc3RvcmFnZS5cclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKi9cclxuXHJcblxyXG52YXIgRGlza1N0b3JhZ2UgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIG11c3QgYmUgY2FsbGVkIG9uY2UgdG8gaW5pdGlhbGl6ZSBJbmRleGVkREIgT2JqZWN0U3RvcmUuIFRob3VnaCwgaXQgaXMgYXV0by11c2VkIGludGVybmFsbHkuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgRGlza1N0b3JhZ2VcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIERpc2tTdG9yYWdlLmluaXQoKTtcclxuICAgICAqL1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGluZGV4ZWREQiA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGluZGV4ZWREQi5vcGVuID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbmRleGVkREIgQVBJIGFyZSBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3Nlci4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRiVmVyc2lvbiA9IDE7XHJcbiAgICAgICAgdmFyIGRiTmFtZSA9IHRoaXMuZGJOYW1lIHx8IGxvY2F0aW9uLmhyZWYucmVwbGFjZSgvXFwvfDp8I3wlfFxcLnxcXFt8XFxdL2csICcnKSxcclxuICAgICAgICAgICAgZGI7XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihkYk5hbWUsIGRiVmVyc2lvbik7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdFN0b3JlKGRhdGFCYXNlKSB7XHJcbiAgICAgICAgICAgIGRhdGFCYXNlLmNyZWF0ZU9iamVjdFN0b3JlKHNlbGYuZGF0YVN0b3JlTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwdXRJbkRCKCkge1xyXG4gICAgICAgICAgICB2YXIgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbc2VsZi5kYXRhU3RvcmVOYW1lXSwgJ3JlYWR3cml0ZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGYudmlkZW9CbG9iKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLmRhdGFTdG9yZU5hbWUpLnB1dChzZWxmLnZpZGVvQmxvYiwgJ3ZpZGVvQmxvYicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi5naWZCbG9iKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLmRhdGFTdG9yZU5hbWUpLnB1dChzZWxmLmdpZkJsb2IsICdnaWZCbG9iJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLmF1ZGlvQmxvYikge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5kYXRhU3RvcmVOYW1lKS5wdXQoc2VsZi5hdWRpb0Jsb2IsICdhdWRpb0Jsb2InKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0RnJvbVN0b3JlKHBvcnRpb25OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLmRhdGFTdG9yZU5hbWUpLmdldChwb3J0aW9uTmFtZSkub25zdWNjZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxiYWNrKGV2ZW50LnRhcmdldC5yZXN1bHQsIHBvcnRpb25OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnZXRGcm9tU3RvcmUoJ2F1ZGlvQmxvYicpO1xyXG4gICAgICAgICAgICBnZXRGcm9tU3RvcmUoJ3ZpZGVvQmxvYicpO1xyXG4gICAgICAgICAgICBnZXRGcm9tU3RvcmUoJ2dpZkJsb2InKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IHNlbGYub25FcnJvcjtcclxuXHJcbiAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZGIgPSByZXF1ZXN0LnJlc3VsdDtcclxuICAgICAgICAgICAgZGIub25lcnJvciA9IHNlbGYub25FcnJvcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYi5zZXRWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGIudmVyc2lvbiAhPT0gZGJWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNldFZlcnNpb24gPSBkYi5zZXRWZXJzaW9uKGRiVmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmVyc2lvbi5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlT2JqZWN0U3RvcmUoZGIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXRJbkRCKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHV0SW5EQigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHV0SW5EQigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZU9iamVjdFN0b3JlKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBmZXRjaGVzIHN0b3JlZCBibG9icyBmcm9tIEluZGV4ZWREQi5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBEaXNrU3RvcmFnZVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogRGlza1N0b3JhZ2UuRmV0Y2goZnVuY3Rpb24oZGF0YVVSTCwgdHlwZSkge1xyXG4gICAgICogICAgIGlmKHR5cGUgPT09ICdhdWRpb0Jsb2InKSB7IH1cclxuICAgICAqICAgICBpZih0eXBlID09PSAndmlkZW9CbG9iJykgeyB9XHJcbiAgICAgKiAgICAgaWYodHlwZSA9PT0gJ2dpZkJsb2InKSAgIHsgfVxyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIEZldGNoOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9yZXMgYmxvYnMgaW4gSW5kZXhlZERCLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIERpc2tTdG9yYWdlXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBEaXNrU3RvcmFnZS5TdG9yZSh7XHJcbiAgICAgKiAgICAgYXVkaW9CbG9iOiB5b3VyQXVkaW9CbG9iLFxyXG4gICAgICogICAgIHZpZGVvQmxvYjogeW91clZpZGVvQmxvYixcclxuICAgICAqICAgICBnaWZCbG9iICA6IHlvdXJHaWZCbG9iXHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG4gICAgU3RvcmU6IGZ1bmN0aW9uKGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuYXVkaW9CbG9iID0gY29uZmlnLmF1ZGlvQmxvYjtcclxuICAgICAgICB0aGlzLnZpZGVvQmxvYiA9IGNvbmZpZy52aWRlb0Jsb2I7XHJcbiAgICAgICAgdGhpcy5naWZCbG9iID0gY29uZmlnLmdpZkJsb2I7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgaW52b2tlZCBmb3IgYW55IGtub3duL3Vua25vd24gZXJyb3IuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgRGlza1N0b3JhZ2VcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIERpc2tTdG9yYWdlLm9uRXJyb3IgPSBmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgKiAgICAgYWxlcm90KCBKU09OLnN0cmluZ2lmeShlcnJvcikgKTtcclxuICAgICAqIH07XHJcbiAgICAgKi9cclxuICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihKU09OLnN0cmluZ2lmeShlcnJvciwgbnVsbCwgJ1xcdCcpKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gZGF0YVN0b3JlTmFtZSAtIE5hbWUgb2YgdGhlIE9iamVjdFN0b3JlIGNyZWF0ZWQgaW4gSW5kZXhlZERCIHN0b3JhZ2UuXHJcbiAgICAgKiBAbWVtYmVyb2YgRGlza1N0b3JhZ2VcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIERpc2tTdG9yYWdlLmRhdGFTdG9yZU5hbWUgPSAncmVjb3JkUlRDJztcclxuICAgICAqL1xyXG4gICAgZGF0YVN0b3JlTmFtZTogJ3JlY29yZFJUQycsXHJcbiAgICBkYk5hbWU6IG51bGxcclxufTtcclxuXHJcbmlmICh0eXBlb2YgUmVjb3JkUlRDICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgUmVjb3JkUlRDLkRpc2tTdG9yYWdlID0gRGlza1N0b3JhZ2U7XHJcbn1cblxyXG4vLyBfX19fX19fX19fX19fX1xyXG4vLyBHaWZSZWNvcmRlci5qc1xyXG5cclxuLyoqXHJcbiAqIEdpZlJlY29yZGVyIGlzIHN0YW5kYWxvbmUgY2Fsc3MgdXNlZCBieSB7QGxpbmsgUmVjb3JkUlRDfSB0byByZWNvcmQgdmlkZW8gb3IgY2FudmFzIGludG8gYW5pbWF0ZWQgZ2lmLlxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgR2lmUmVjb3JkZXJcclxuICogQGNsYXNzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciByZWNvcmRlciA9IG5ldyBHaWZSZWNvcmRlcihtZWRpYVN0cmVhbSB8fCBjYW52YXMgfHwgY29udGV4dCwgeyBvbkdpZlByZXZpZXc6IGZ1bmN0aW9uLCBvbkdpZlJlY29yZGluZ1N0YXJ0ZWQ6IGZ1bmN0aW9uLCB3aWR0aDogMTI4MCwgaGVpZ2h0OiA3MjAsIGZyYW1lUmF0ZTogMjAwLCBxdWFsaXR5OiAxMCB9KTtcclxuICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oYmxvYikge1xyXG4gKiAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAqIH0pO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIC0gTWVkaWFTdHJlYW0gb2JqZWN0IG9yIEhUTUxDYW52YXNFbGVtZW50IG9yIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5cclxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIHtkaXNhYmxlTG9nczp0cnVlLCBpbml0Q2FsbGJhY2s6IGZ1bmN0aW9uLCB3aWR0aDogMzIwLCBoZWlnaHQ6IDI0MCwgZnJhbWVSYXRlOiAyMDAsIHF1YWxpdHk6IDEwfVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIEdpZlJlY29yZGVyKG1lZGlhU3RyZWFtLCBjb25maWcpIHtcclxuICAgIGlmICh0eXBlb2YgR0lGRW5jb2RlciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2Nkbi53ZWJydGMtZXhwZXJpbWVudC5jb20vZ2lmLXJlY29yZGVyLmpzJztcclxuICAgICAgICAoZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cclxuICAgIHZhciBpc0hUTUxPYmplY3QgPSBtZWRpYVN0cmVhbSBpbnN0YW5jZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8fCBtZWRpYVN0cmVhbSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyBNZWRpYVN0cmVhbS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBHaWZSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlY29yZCgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlY29yZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgR0lGRW5jb2RlciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChzZWxmLnJlY29yZCwgMTAwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNMb2FkZWRNZXRhRGF0YSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHNlbGYucmVjb3JkLCAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc0hUTUxPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy53aWR0aCA9IHZpZGVvLm9mZnNldFdpZHRoIHx8IDMyMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjb25maWcuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcuaGVpZ2h0ID0gdmlkZW8ub2Zmc2V0SGVpZ2h0IHx8IDI0MDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjb25maWcudmlkZW8pIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy52aWRlbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjb25maWcuY2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcuY2FudmFzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjb25maWcud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBjb25maWcuY2FudmFzLndpZHRoIHx8IDMyMDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGNvbmZpZy5jYW52YXMuaGVpZ2h0IHx8IDI0MDtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLndpZHRoID0gY29uZmlnLnZpZGVvLndpZHRoIHx8IDMyMDtcclxuICAgICAgICAgICAgdmlkZW8uaGVpZ2h0ID0gY29uZmlnLnZpZGVvLmhlaWdodCB8fCAyNDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBleHRlcm5hbCBsaWJyYXJ5IHRvIHJlY29yZCBhcyBHSUYgaW1hZ2VzXHJcbiAgICAgICAgZ2lmRW5jb2RlciA9IG5ldyBHSUZFbmNvZGVyKCk7XHJcblxyXG4gICAgICAgIC8vIHZvaWQgc2V0UmVwZWF0KGludCBpdGVyKSBcclxuICAgICAgICAvLyBTZXRzIHRoZSBudW1iZXIgb2YgdGltZXMgdGhlIHNldCBvZiBHSUYgZnJhbWVzIHNob3VsZCBiZSBwbGF5ZWQuIFxyXG4gICAgICAgIC8vIERlZmF1bHQgaXMgMTsgMCBtZWFucyBwbGF5IGluZGVmaW5pdGVseS5cclxuICAgICAgICBnaWZFbmNvZGVyLnNldFJlcGVhdCgwKTtcclxuXHJcbiAgICAgICAgLy8gdm9pZCBzZXRGcmFtZVJhdGUoTnVtYmVyIGZwcykgXHJcbiAgICAgICAgLy8gU2V0cyBmcmFtZSByYXRlIGluIGZyYW1lcyBwZXIgc2Vjb25kLiBcclxuICAgICAgICAvLyBFcXVpdmFsZW50IHRvIHNldERlbGF5KDEwMDAvZnBzKS5cclxuICAgICAgICAvLyBVc2luZyBcInNldERlbGF5XCIgaW5zdGVhZCBvZiBcInNldEZyYW1lUmF0ZVwiXHJcbiAgICAgICAgZ2lmRW5jb2Rlci5zZXREZWxheShjb25maWcuZnJhbWVSYXRlIHx8IDIwMCk7XHJcblxyXG4gICAgICAgIC8vIHZvaWQgc2V0UXVhbGl0eShpbnQgcXVhbGl0eSkgXHJcbiAgICAgICAgLy8gU2V0cyBxdWFsaXR5IG9mIGNvbG9yIHF1YW50aXphdGlvbiAoY29udmVyc2lvbiBvZiBpbWFnZXMgdG8gdGhlIFxyXG4gICAgICAgIC8vIG1heGltdW0gMjU2IGNvbG9ycyBhbGxvd2VkIGJ5IHRoZSBHSUYgc3BlY2lmaWNhdGlvbikuIFxyXG4gICAgICAgIC8vIExvd2VyIHZhbHVlcyAobWluaW11bSA9IDEpIHByb2R1Y2UgYmV0dGVyIGNvbG9ycywgXHJcbiAgICAgICAgLy8gYnV0IHNsb3cgcHJvY2Vzc2luZyBzaWduaWZpY2FudGx5LiAxMCBpcyB0aGUgZGVmYXVsdCwgXHJcbiAgICAgICAgLy8gYW5kIHByb2R1Y2VzIGdvb2QgY29sb3IgbWFwcGluZyBhdCByZWFzb25hYmxlIHNwZWVkcy4gXHJcbiAgICAgICAgLy8gVmFsdWVzIGdyZWF0ZXIgdGhhbiAyMCBkbyBub3QgeWllbGQgc2lnbmlmaWNhbnQgaW1wcm92ZW1lbnRzIGluIHNwZWVkLlxyXG4gICAgICAgIGdpZkVuY29kZXIuc2V0UXVhbGl0eShjb25maWcucXVhbGl0eSB8fCAxMCk7XHJcblxyXG4gICAgICAgIC8vIEJvb2xlYW4gc3RhcnQoKSBcclxuICAgICAgICAvLyBUaGlzIHdyaXRlcyB0aGUgR0lGIEhlYWRlciBhbmQgcmV0dXJucyBmYWxzZSBpZiBpdCBmYWlscy5cclxuICAgICAgICBnaWZFbmNvZGVyLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLm9uR2lmUmVjb3JkaW5nU3RhcnRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjb25maWcub25HaWZSZWNvcmRpbmdTdGFydGVkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBkcmF3VmlkZW9GcmFtZSh0aW1lKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNsZWFyZWRSZWNvcmRlZERhdGEgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzUGF1c2VkUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcmF3VmlkZW9GcmFtZSh0aW1lKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3VmlkZW9GcmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhc3RGcmFtZVRpbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGFzdEZyYW1lVGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIH4xMCBmcHNcclxuICAgICAgICAgICAgaWYgKHRpbWUgLSBsYXN0RnJhbWVUaW1lIDwgOTApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0hUTUxPYmplY3QgJiYgdmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB2aWE6IGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vV2ViUlRDLUV4cGVyaW1lbnQvcHVsbC8zMTZcclxuICAgICAgICAgICAgICAgIC8vIFR3ZWFrIGZvciBBbmRyb2lkIENocm9tZVxyXG4gICAgICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzSFRNTE9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maWcub25HaWZQcmV2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcub25HaWZQcmV2aWV3KGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2lmRW5jb2Rlci5hZGRGcmFtZShjb250ZXh0KTtcclxuICAgICAgICAgICAgbGFzdEZyYW1lVGltZSA9IHRpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd1ZpZGVvRnJhbWUpO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmluaXRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjb25maWcuaW5pdENhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3BzIHJlY29yZGluZyBNZWRpYVN0cmVhbS5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24sIHRoYXQgaXMgdXNlZCB0byBwYXNzIHJlY29yZGVkIGJsb2IgYmFjayB0byB0aGUgY2FsbGVlLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIEdpZlJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgKiAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5zdG9wID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XHJcblxyXG4gICAgICAgIGlmIChsYXN0QW5pbWF0aW9uRnJhbWUpIHtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUobGFzdEFuaW1hdGlvbkZyYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVuZFRpbWUgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBUaGUgcmVjb3JkZWQgYmxvYiBvYmplY3QuXHJcbiAgICAgICAgICogQG1lbWJlcm9mIEdpZlJlY29yZGVyXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICogICAgIHZhciBibG9iID0gcmVjb3JkZXIuYmxvYjtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmJsb2IgPSBuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoZ2lmRW5jb2Rlci5zdHJlYW0oKS5iaW4pXSwge1xyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvZ2lmJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYWxsYmFjayh0aGlzLmJsb2IpO1xyXG5cclxuICAgICAgICAvLyBidWc6IGZpbmQgYSB3YXkgdG8gY2xlYXIgb2xkIHJlY29yZGVkIGJsb2JzXHJcbiAgICAgICAgZ2lmRW5jb2Rlci5zdHJlYW0oKS5iaW4gPSBbXTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGlzUGF1c2VkUmVjb3JkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBwYXVzZXMgdGhlIHJlY29yZGluZyBwcm9jZXNzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIEdpZlJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucGF1c2UoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlzUGF1c2VkUmVjb3JkaW5nID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXN1bWVzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBHaWZSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlzUGF1c2VkUmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzZXRzIGN1cnJlbnRseSByZWNvcmRlZCBkYXRhLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIEdpZlJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuY2xlYXJSZWNvcmRlZERhdGEoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5jbGVhclJlY29yZGVkRGF0YSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNlbGYuY2xlYXJlZFJlY29yZGVkRGF0YSA9IHRydWU7XHJcbiAgICAgICAgY2xlYXJSZWNvcmRlZERhdGFDQigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclJlY29yZGVkRGF0YUNCKCkge1xyXG4gICAgICAgIGlmIChnaWZFbmNvZGVyKSB7XHJcbiAgICAgICAgICAgIGdpZkVuY29kZXIuc3RyZWFtKCkuYmluID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciBkZWJ1Z2dpbmdcclxuICAgIHRoaXMubmFtZSA9ICdHaWZSZWNvcmRlcic7XHJcbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBpZiAoaXNIVE1MT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKG1lZGlhU3RyZWFtIGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQgPSBtZWRpYVN0cmVhbTtcclxuICAgICAgICAgICAgY2FudmFzID0gY29udGV4dC5jYW52YXM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVN0cmVhbSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQgPSBtZWRpYVN0cmVhbS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBjYW52YXMgPSBtZWRpYVN0cmVhbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGlzTG9hZGVkTWV0YURhdGEgPSB0cnVlO1xyXG5cclxuICAgIGlmICghaXNIVE1MT2JqZWN0KSB7XHJcbiAgICAgICAgdmFyIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgICAgICB2aWRlby5tdXRlZCA9IHRydWU7XHJcbiAgICAgICAgdmlkZW8uYXV0b3BsYXkgPSB0cnVlO1xyXG5cclxuICAgICAgICBpc0xvYWRlZE1ldGFEYXRhID0gZmFsc2U7XHJcbiAgICAgICAgdmlkZW8ub25sb2FkZWRtZXRhZGF0YSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpc0xvYWRlZE1ldGFEYXRhID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXRTcmNPYmplY3QobWVkaWFTdHJlYW0sIHZpZGVvKTtcclxuXHJcbiAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsYXN0QW5pbWF0aW9uRnJhbWUgPSBudWxsO1xyXG4gICAgdmFyIHN0YXJ0VGltZSwgZW5kVGltZSwgbGFzdEZyYW1lVGltZTtcclxuXHJcbiAgICB2YXIgZ2lmRW5jb2RlcjtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgUmVjb3JkUlRDICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgUmVjb3JkUlRDLkdpZlJlY29yZGVyID0gR2lmUmVjb3JkZXI7XHJcbn1cblxyXG4vLyBMYXN0IHRpbWUgdXBkYXRlZDogMjAxOC0xMi0yMiA5OjEzOjI5IEFNIFVUQ1xyXG5cclxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fXHJcbi8vIE11bHRpU3RyZWFtc01peGVyIHYxLjAuN1xyXG5cclxuLy8gT3Blbi1Tb3VyY2VkOiBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL011bHRpU3RyZWFtc01peGVyXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBNdWF6IEtoYW4gICAgIC0gd3d3Lk11YXpLaGFuLmNvbVxyXG4vLyBNSVQgTGljZW5zZSAgIC0gd3d3LldlYlJUQy1FeHBlcmltZW50LmNvbS9saWNlbmNlXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBNdWx0aVN0cmVhbXNNaXhlcihhcnJheU9mTWVkaWFTdHJlYW1zKSB7XHJcblxyXG4gICAgLy8gcmVxdWlyZXM6IGNocm9tZTovL2ZsYWdzLyNlbmFibGUtZXhwZXJpbWVudGFsLXdlYi1wbGF0Zm9ybS1mZWF0dXJlc1xyXG5cclxuICAgIHZhciB2aWRlb3MgPSBbXTtcclxuICAgIHZhciBpc1N0b3BEcmF3aW5nRnJhbWVzID0gZmFsc2U7XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNhbnZhcy5zdHlsZSA9ICdvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDotMTt0b3A6IC0xMDAwMDAwMDA7bGVmdDotMTAwMDAwMDAwMDsgbWFyZ2luLXRvcDotMTAwMDAwMDAwMDttYXJnaW4tbGVmdDotMTAwMDAwMDAwMDsnO1xyXG4gICAgKGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxuICAgIHRoaXMuZGlzYWJsZUxvZ3MgPSBmYWxzZTtcclxuICAgIHRoaXMuZnJhbWVJbnRlcnZhbCA9IDEwO1xyXG5cclxuICAgIHRoaXMud2lkdGggPSAzNjA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDI0MDtcclxuXHJcbiAgICAvLyB1c2UgZ2FpbiBub2RlIHRvIHByZXZlbnQgZWNob1xyXG4gICAgdGhpcy51c2VHYWluTm9kZSA9IHRydWU7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbiAgICAvLyBDcm9zcy1Ccm93c2VyLURlY2xhcmF0aW9ucy5qc1xyXG5cclxuICAgIC8vIFdlYkF1ZGlvIEFQSSByZXByZXNlbnRlclxyXG4gICAgdmFyIEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQ7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBBdWRpb0NvbnRleHQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3ZWJraXRBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIC8qZ2xvYmFsIEF1ZGlvQ29udGV4dDp0cnVlICovXHJcbiAgICAgICAgICAgIEF1ZGlvQ29udGV4dCA9IHdlYmtpdEF1ZGlvQ29udGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbW96QXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAvKmdsb2JhbCBBdWRpb0NvbnRleHQ6dHJ1ZSAqL1xyXG4gICAgICAgICAgICBBdWRpb0NvbnRleHQgPSBtb3pBdWRpb0NvbnRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qanNoaW50IC1XMDc5ICovXHJcbiAgICB2YXIgVVJMID0gd2luZG93LlVSTDtcclxuXHJcbiAgICBpZiAodHlwZW9mIFVSTCA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdlYmtpdFVSTCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCBVUkw6dHJ1ZSAqL1xyXG4gICAgICAgIFVSTCA9IHdlYmtpdFVSTDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPT09ICd1bmRlZmluZWQnKSB7IC8vIG1heWJlIHdpbmRvdy5uYXZpZ2F0b3I/XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBNZWRpYVN0cmVhbSA9IHdpbmRvdy5NZWRpYVN0cmVhbTtcclxuXHJcbiAgICBpZiAodHlwZW9mIE1lZGlhU3RyZWFtID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2Via2l0TWVkaWFTdHJlYW0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgTWVkaWFTdHJlYW0gPSB3ZWJraXRNZWRpYVN0cmVhbTtcclxuICAgIH1cclxuXHJcbiAgICAvKmdsb2JhbCBNZWRpYVN0cmVhbTp0cnVlICovXHJcbiAgICBpZiAodHlwZW9mIE1lZGlhU3RyZWFtICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIG92ZXJyaWRlIFwic3RvcFwiIG1ldGhvZCBmb3IgYWxsIGJyb3dzZXJzXHJcbiAgICAgICAgaWYgKHR5cGVvZiBNZWRpYVN0cmVhbS5wcm90b3R5cGUuc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgTWVkaWFTdHJlYW0ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgU3RvcmFnZSA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgQXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIFN0b3JhZ2UuQXVkaW9Db250ZXh0ID0gQXVkaW9Db250ZXh0O1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0QXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIFN0b3JhZ2UuQXVkaW9Db250ZXh0ID0gd2Via2l0QXVkaW9Db250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFNyY09iamVjdChzdHJlYW0sIGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoJ3NyY09iamVjdCcgaW4gZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICB9IGVsc2UgaWYgKCdtb3pTcmNPYmplY3QnIGluIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5tb3pTcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhcnREcmF3aW5nRnJhbWVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZHJhd1ZpZGVvc1RvQ2FudmFzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGRyYXdWaWRlb3NUb0NhbnZhcygpIHtcclxuICAgICAgICBpZiAoaXNTdG9wRHJhd2luZ0ZyYW1lcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdmlkZW9zTGVuZ3RoID0gdmlkZW9zLmxlbmd0aDtcclxuXHJcbiAgICAgICAgdmFyIGZ1bGxjYW52YXMgPSBmYWxzZTtcclxuICAgICAgICB2YXIgcmVtYWluaW5nID0gW107XHJcbiAgICAgICAgdmlkZW9zLmZvckVhY2goZnVuY3Rpb24odmlkZW8pIHtcclxuICAgICAgICAgICAgaWYgKCF2aWRlby5zdHJlYW0pIHtcclxuICAgICAgICAgICAgICAgIHZpZGVvLnN0cmVhbSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmlkZW8uc3RyZWFtLmZ1bGxjYW52YXMpIHtcclxuICAgICAgICAgICAgICAgIGZ1bGxjYW52YXMgPSB2aWRlbztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmluZy5wdXNoKHZpZGVvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoZnVsbGNhbnZhcykge1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBmdWxsY2FudmFzLnN0cmVhbS53aWR0aDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGZ1bGxjYW52YXMuc3RyZWFtLmhlaWdodDtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlbWFpbmluZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gdmlkZW9zTGVuZ3RoID4gMSA/IHJlbWFpbmluZ1swXS53aWR0aCAqIDIgOiByZW1haW5pbmdbMF0ud2lkdGg7XHJcblxyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gMTtcclxuICAgICAgICAgICAgaWYgKHZpZGVvc0xlbmd0aCA9PT0gMyB8fCB2aWRlb3NMZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHZpZGVvc0xlbmd0aCA9PT0gNSB8fCB2aWRlb3NMZW5ndGggPT09IDYpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHZpZGVvc0xlbmd0aCA9PT0gNyB8fCB2aWRlb3NMZW5ndGggPT09IDgpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHZpZGVvc0xlbmd0aCA9PT0gOSB8fCB2aWRlb3NMZW5ndGggPT09IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSA1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSByZW1haW5pbmdbMF0uaGVpZ2h0ICogaGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHNlbGYud2lkdGggfHwgMzYwO1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2VsZi5oZWlnaHQgfHwgMjQwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZ1bGxjYW52YXMgJiYgZnVsbGNhbnZhcyBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgZHJhd0ltYWdlKGZ1bGxjYW52YXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVtYWluaW5nLmZvckVhY2goZnVuY3Rpb24odmlkZW8sIGlkeCkge1xyXG4gICAgICAgICAgICBkcmF3SW1hZ2UodmlkZW8sIGlkeCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZHJhd1ZpZGVvc1RvQ2FudmFzLCBzZWxmLmZyYW1lSW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyYXdJbWFnZSh2aWRlbywgaWR4KSB7XHJcbiAgICAgICAgaWYgKGlzU3RvcERyYXdpbmdGcmFtZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHggPSAwO1xyXG4gICAgICAgIHZhciB5ID0gMDtcclxuICAgICAgICB2YXIgd2lkdGggPSB2aWRlby53aWR0aDtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gdmlkZW8uaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoaWR4ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHggPSB2aWRlby53aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZHggPT09IDIpIHtcclxuICAgICAgICAgICAgeSA9IHZpZGVvLmhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZHggPT09IDMpIHtcclxuICAgICAgICAgICAgeCA9IHZpZGVvLndpZHRoO1xyXG4gICAgICAgICAgICB5ID0gdmlkZW8uaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkeCA9PT0gNCkge1xyXG4gICAgICAgICAgICB5ID0gdmlkZW8uaGVpZ2h0ICogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZHggPT09IDUpIHtcclxuICAgICAgICAgICAgeCA9IHZpZGVvLndpZHRoO1xyXG4gICAgICAgICAgICB5ID0gdmlkZW8uaGVpZ2h0ICogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZHggPT09IDYpIHtcclxuICAgICAgICAgICAgeSA9IHZpZGVvLmhlaWdodCAqIDM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWR4ID09PSA3KSB7XHJcbiAgICAgICAgICAgIHggPSB2aWRlby53aWR0aDtcclxuICAgICAgICAgICAgeSA9IHZpZGVvLmhlaWdodCAqIDM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHZpZGVvLnN0cmVhbS5sZWZ0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB4ID0gdmlkZW8uc3RyZWFtLmxlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHZpZGVvLnN0cmVhbS50b3AgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHkgPSB2aWRlby5zdHJlYW0udG9wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB2aWRlby5zdHJlYW0ud2lkdGggIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHdpZHRoID0gdmlkZW8uc3RyZWFtLndpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB2aWRlby5zdHJlYW0uaGVpZ2h0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBoZWlnaHQgPSB2aWRlby5zdHJlYW0uaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodmlkZW8sIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHZpZGVvLnN0cmVhbS5vblJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB2aWRlby5zdHJlYW0ub25SZW5kZXIoY29udGV4dCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgaWR4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TWl4ZWRTdHJlYW0oKSB7XHJcbiAgICAgICAgaXNTdG9wRHJhd2luZ0ZyYW1lcyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtaXhlZFZpZGVvU3RyZWFtID0gZ2V0TWl4ZWRWaWRlb1N0cmVhbSgpO1xyXG5cclxuICAgICAgICB2YXIgbWl4ZWRBdWRpb1N0cmVhbSA9IGdldE1peGVkQXVkaW9TdHJlYW0oKTtcclxuICAgICAgICBpZiAobWl4ZWRBdWRpb1N0cmVhbSkge1xyXG4gICAgICAgICAgICBtaXhlZEF1ZGlvU3RyZWFtLmdldFRyYWNrcygpLmZpbHRlcihmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdC5raW5kID09PSAnYXVkaW8nO1xyXG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBtaXhlZFZpZGVvU3RyZWFtLmFkZFRyYWNrKHRyYWNrKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZnVsbGNhbnZhcztcclxuICAgICAgICBhcnJheU9mTWVkaWFTdHJlYW1zLmZvckVhY2goZnVuY3Rpb24oc3RyZWFtKSB7XHJcbiAgICAgICAgICAgIGlmIChzdHJlYW0uZnVsbGNhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgZnVsbGNhbnZhcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1peGVkVmlkZW9TdHJlYW07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TWl4ZWRWaWRlb1N0cmVhbSgpIHtcclxuICAgICAgICByZXNldFZpZGVvU3RyZWFtcygpO1xyXG5cclxuICAgICAgICB2YXIgY2FwdHVyZWRTdHJlYW07XHJcblxyXG4gICAgICAgIGlmICgnY2FwdHVyZVN0cmVhbScgaW4gY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNhcHR1cmVkU3RyZWFtID0gY2FudmFzLmNhcHR1cmVTdHJlYW0oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCdtb3pDYXB0dXJlU3RyZWFtJyBpbiBjYW52YXMpIHtcclxuICAgICAgICAgICAgY2FwdHVyZWRTdHJlYW0gPSBjYW52YXMubW96Q2FwdHVyZVN0cmVhbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXNlbGYuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVXBncmFkZSB0byBsYXRlc3QgQ2hyb21lIG9yIG90aGVyd2lzZSBlbmFibGUgdGhpcyBmbGFnOiBjaHJvbWU6Ly9mbGFncy8jZW5hYmxlLWV4cGVyaW1lbnRhbC13ZWItcGxhdGZvcm0tZmVhdHVyZXMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB2aWRlb1N0cmVhbSA9IG5ldyBNZWRpYVN0cmVhbSgpO1xyXG5cclxuICAgICAgICBjYXB0dXJlZFN0cmVhbS5nZXRUcmFja3MoKS5maWx0ZXIoZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdC5raW5kID09PSAndmlkZW8nO1xyXG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcclxuICAgICAgICAgICAgdmlkZW9TdHJlYW0uYWRkVHJhY2sodHJhY2spO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYW52YXMuc3RyZWFtID0gdmlkZW9TdHJlYW07XHJcblxyXG4gICAgICAgIHJldHVybiB2aWRlb1N0cmVhbTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNaXhlZEF1ZGlvU3RyZWFtKCkge1xyXG4gICAgICAgIC8vIHZpYTogQHBlaHJzb25zXHJcbiAgICAgICAgaWYgKCFTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuQXVkaW9Db250ZXh0Q29uc3RydWN0b3IgPSBuZXcgU3RvcmFnZS5BdWRpb0NvbnRleHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYuYXVkaW9Db250ZXh0ID0gU3RvcmFnZS5BdWRpb0NvbnRleHRDb25zdHJ1Y3RvcjtcclxuXHJcbiAgICAgICAgc2VsZi5hdWRpb1NvdXJjZXMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGYudXNlR2Fpbk5vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgc2VsZi5nYWluTm9kZSA9IHNlbGYuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcclxuICAgICAgICAgICAgc2VsZi5nYWluTm9kZS5jb25uZWN0KHNlbGYuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICAgICAgICAgICAgc2VsZi5nYWluTm9kZS5nYWluLnZhbHVlID0gMDsgLy8gZG9uJ3QgaGVhciBzZWxmXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYXVkaW9UcmFja3NMZW5ndGggPSAwO1xyXG4gICAgICAgIGFycmF5T2ZNZWRpYVN0cmVhbXMuZm9yRWFjaChmdW5jdGlvbihzdHJlYW0pIHtcclxuICAgICAgICAgICAgaWYgKCFzdHJlYW0uZ2V0VHJhY2tzKCkuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5raW5kID09PSAnYXVkaW8nO1xyXG4gICAgICAgICAgICAgICAgfSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF1ZGlvVHJhY2tzTGVuZ3RoKys7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXVkaW9Tb3VyY2UgPSBzZWxmLmF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShzdHJlYW0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGYudXNlR2Fpbk5vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLmNvbm5lY3Qoc2VsZi5nYWluTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYuYXVkaW9Tb3VyY2VzLnB1c2goYXVkaW9Tb3VyY2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIWF1ZGlvVHJhY2tzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYuYXVkaW9EZXN0aW5hdGlvbiA9IHNlbGYuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtRGVzdGluYXRpb24oKTtcclxuICAgICAgICBzZWxmLmF1ZGlvU291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGF1ZGlvU291cmNlKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvU291cmNlLmNvbm5lY3Qoc2VsZi5hdWRpb0Rlc3RpbmF0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc2VsZi5hdWRpb0Rlc3RpbmF0aW9uLnN0cmVhbTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRWaWRlbyhzdHJlYW0pIHtcclxuICAgICAgICB2YXIgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG5cclxuICAgICAgICBzZXRTcmNPYmplY3Qoc3RyZWFtLCB2aWRlbyk7XHJcblxyXG4gICAgICAgIHZpZGVvLm11dGVkID0gdHJ1ZTtcclxuICAgICAgICB2aWRlby52b2x1bWUgPSAwO1xyXG5cclxuICAgICAgICB2aWRlby53aWR0aCA9IHN0cmVhbS53aWR0aCB8fCBzZWxmLndpZHRoIHx8IDM2MDtcclxuICAgICAgICB2aWRlby5oZWlnaHQgPSBzdHJlYW0uaGVpZ2h0IHx8IHNlbGYuaGVpZ2h0IHx8IDI0MDtcclxuXHJcbiAgICAgICAgdmlkZW8ucGxheSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmlkZW87XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hcHBlbmRTdHJlYW1zID0gZnVuY3Rpb24oc3RyZWFtcykge1xyXG4gICAgICAgIGlmICghc3RyZWFtcykge1xyXG4gICAgICAgICAgICB0aHJvdyAnRmlyc3QgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIShzdHJlYW1zIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHN0cmVhbXMgPSBbc3RyZWFtc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnJheU9mTWVkaWFTdHJlYW1zLmNvbmNhdChzdHJlYW1zKTtcclxuXHJcbiAgICAgICAgc3RyZWFtcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmVhbSkge1xyXG4gICAgICAgICAgICBpZiAoc3RyZWFtLmdldFRyYWNrcygpLmZpbHRlcihmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQua2luZCA9PT0gJ3ZpZGVvJztcclxuICAgICAgICAgICAgICAgIH0pLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZpZGVvID0gZ2V0VmlkZW8oc3RyZWFtKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLnN0cmVhbSA9IHN0cmVhbTtcclxuICAgICAgICAgICAgICAgIHZpZGVvcy5wdXNoKHZpZGVvKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0cmVhbS5nZXRUcmFja3MoKS5maWx0ZXIoZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0LmtpbmQgPT09ICdhdWRpbyc7XHJcbiAgICAgICAgICAgICAgICB9KS5sZW5ndGggJiYgc2VsZi5hdWRpb0NvbnRleHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhdWRpb1NvdXJjZSA9IHNlbGYuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSk7XHJcbiAgICAgICAgICAgICAgICBhdWRpb1NvdXJjZS5jb25uZWN0KHNlbGYuYXVkaW9EZXN0aW5hdGlvbik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmF1ZGlvU291cmNlcy5wdXNoKGF1ZGlvU291cmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnJlbGVhc2VTdHJlYW1zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmlkZW9zID0gW107XHJcbiAgICAgICAgaXNTdG9wRHJhd2luZ0ZyYW1lcyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChzZWxmLmdhaW5Ob2RlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuZ2Fpbk5vZGUuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBzZWxmLmdhaW5Ob2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxmLmF1ZGlvU291cmNlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2VsZi5hdWRpb1NvdXJjZXMuZm9yRWFjaChmdW5jdGlvbihzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxmLmF1ZGlvU291cmNlcyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGYuYXVkaW9EZXN0aW5hdGlvbikge1xyXG4gICAgICAgICAgICBzZWxmLmF1ZGlvRGVzdGluYXRpb24uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBzZWxmLmF1ZGlvRGVzdGluYXRpb24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGYuYXVkaW9Db250ZXh0KSB7XHJcbiAgICAgICAgICAgIHNlbGYuYXVkaW9Db250ZXh0LmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxmLmF1ZGlvQ29udGV4dCA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGlmIChjYW52YXMuc3RyZWFtKSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy5zdHJlYW0uc3RvcCgpO1xyXG4gICAgICAgICAgICBjYW52YXMuc3RyZWFtID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVzZXRWaWRlb1N0cmVhbXMgPSBmdW5jdGlvbihzdHJlYW1zKSB7XHJcbiAgICAgICAgaWYgKHN0cmVhbXMgJiYgIShzdHJlYW1zIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHN0cmVhbXMgPSBbc3RyZWFtc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNldFZpZGVvU3RyZWFtcyhzdHJlYW1zKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRWaWRlb1N0cmVhbXMoc3RyZWFtcykge1xyXG4gICAgICAgIHZpZGVvcyA9IFtdO1xyXG4gICAgICAgIHN0cmVhbXMgPSBzdHJlYW1zIHx8IGFycmF5T2ZNZWRpYVN0cmVhbXM7XHJcblxyXG4gICAgICAgIC8vIHZpYTogQGFkcmlhbi1iZXJcclxuICAgICAgICBzdHJlYW1zLmZvckVhY2goZnVuY3Rpb24oc3RyZWFtKSB7XHJcbiAgICAgICAgICAgIGlmICghc3RyZWFtLmdldFRyYWNrcygpLmZpbHRlcihmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQua2luZCA9PT0gJ3ZpZGVvJztcclxuICAgICAgICAgICAgICAgIH0pLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlkZW8gPSBnZXRWaWRlbyhzdHJlYW0pO1xyXG4gICAgICAgICAgICB2aWRlby5zdHJlYW0gPSBzdHJlYW07XHJcbiAgICAgICAgICAgIHZpZGVvcy5wdXNoKHZpZGVvKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmb3IgZGVidWdnaW5nXHJcbiAgICB0aGlzLm5hbWUgPSAnTXVsdGlTdHJlYW1zTWl4ZXInO1xyXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0TWl4ZWRTdHJlYW0gPSBnZXRNaXhlZFN0cmVhbTtcclxuXHJcbn1cblxyXG4vLyBfX19fX19fX19fX19fX19fX19fX19fXHJcbi8vIE11bHRpU3RyZWFtUmVjb3JkZXIuanNcclxuXHJcbi8qXHJcbiAqIFZpZGVvIGNvbmZlcmVuY2UgcmVjb3JkaW5nLCB1c2luZyBjYXB0dXJlU3RyZWFtIEFQSSBhbG9uZyB3aXRoIFdlYkF1ZGlvIGFuZCBDYW52YXMyRCBBUEkuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE11bHRpU3RyZWFtUmVjb3JkZXIgY2FuIHJlY29yZCBtdWx0aXBsZSB2aWRlb3MgaW4gc2luZ2xlIGNvbnRhaW5lci5cclxuICogQHN1bW1hcnkgTXVsdGktdmlkZW9zIHJlY29yZGVyLlxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgTXVsdGlTdHJlYW1SZWNvcmRlclxyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIG9wdGlvbnMgPSB7XHJcbiAqICAgICBtaW1lVHlwZTogJ3ZpZGVvL3dlYm0nXHJcbiAqIH1cclxuICogdmFyIHJlY29yZGVyID0gbmV3IE11bHRpU3RyZWFtUmVjb3JkZXIoQXJyYXlPZk1lZGlhU3RyZWFtcywgb3B0aW9ucyk7XHJcbiAqIHJlY29yZGVyLnJlY29yZCgpO1xyXG4gKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICogICAgIHZpZGVvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAqXHJcbiAqICAgICAvLyBvclxyXG4gKiAgICAgdmFyIGJsb2IgPSByZWNvcmRlci5ibG9iO1xyXG4gKiB9KTtcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge01lZGlhU3RyZWFtc30gbWVkaWFTdHJlYW1zIC0gQXJyYXkgb2YgTWVkaWFTdHJlYW1zLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge2Rpc2FibGVMb2dzOnRydWUsIGZyYW1lSW50ZXJ2YWw6IDEsIG1pbWVUeXBlOiBcInZpZGVvL3dlYm1cIn1cclxuICovXHJcblxyXG5mdW5jdGlvbiBNdWx0aVN0cmVhbVJlY29yZGVyKGFycmF5T2ZNZWRpYVN0cmVhbXMsIG9wdGlvbnMpIHtcclxuICAgIGFycmF5T2ZNZWRpYVN0cmVhbXMgPSBhcnJheU9mTWVkaWFTdHJlYW1zIHx8IFtdO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHZhciBtaXhlcjtcclxuICAgIHZhciBtZWRpYVJlY29yZGVyO1xyXG5cclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHtcclxuICAgICAgICBtaW1lVHlwZTogJ3ZpZGVvL3dlYm0nLFxyXG4gICAgICAgIHZpZGVvOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNjAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjQwXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMuZnJhbWVJbnRlcnZhbCkge1xyXG4gICAgICAgIG9wdGlvbnMuZnJhbWVJbnRlcnZhbCA9IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3B0aW9ucy52aWRlbykge1xyXG4gICAgICAgIG9wdGlvbnMudmlkZW8gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW9wdGlvbnMudmlkZW8ud2lkdGgpIHtcclxuICAgICAgICBvcHRpb25zLnZpZGVvLndpZHRoID0gMzYwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3B0aW9ucy52aWRlby5oZWlnaHQpIHtcclxuICAgICAgICBvcHRpb25zLnZpZGVvLmhlaWdodCA9IDI0MDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlY29yZHMgYWxsIE1lZGlhU3RyZWFtcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNdWx0aVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVjb3JkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gZ2l0aHViL211YXota2hhbi9NdWx0aVN0cmVhbXNNaXhlclxyXG4gICAgICAgIG1peGVyID0gbmV3IE11bHRpU3RyZWFtc01peGVyKGFycmF5T2ZNZWRpYVN0cmVhbXMpO1xyXG5cclxuICAgICAgICBpZiAoZ2V0QWxsVmlkZW9UcmFja3MoKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbWl4ZXIuZnJhbWVJbnRlcnZhbCA9IG9wdGlvbnMuZnJhbWVJbnRlcnZhbCB8fCAxMDtcclxuICAgICAgICAgICAgbWl4ZXIud2lkdGggPSBvcHRpb25zLnZpZGVvLndpZHRoIHx8IDM2MDtcclxuICAgICAgICAgICAgbWl4ZXIuaGVpZ2h0ID0gb3B0aW9ucy52aWRlby5oZWlnaHQgfHwgMjQwO1xyXG4gICAgICAgICAgICBtaXhlci5zdGFydERyYXdpbmdGcmFtZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLnByZXZpZXdTdHJlYW0gJiYgdHlwZW9mIG9wdGlvbnMucHJldmlld1N0cmVhbSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBvcHRpb25zLnByZXZpZXdTdHJlYW0obWl4ZXIuZ2V0TWl4ZWRTdHJlYW0oKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZWNvcmQgdXNpbmcgTWVkaWFSZWNvcmRlciBBUElcclxuICAgICAgICBtZWRpYVJlY29yZGVyID0gbmV3IE1lZGlhU3RyZWFtUmVjb3JkZXIobWl4ZXIuZ2V0TWl4ZWRTdHJlYW0oKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgbWVkaWFSZWNvcmRlci5yZWNvcmQoKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QWxsVmlkZW9UcmFja3MoKSB7XHJcbiAgICAgICAgdmFyIHRyYWNrcyA9IFtdO1xyXG4gICAgICAgIGFycmF5T2ZNZWRpYVN0cmVhbXMuZm9yRWFjaChmdW5jdGlvbihzdHJlYW0pIHtcclxuICAgICAgICAgICAgZ2V0VHJhY2tzKHN0cmVhbSwgJ3ZpZGVvJykuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xyXG4gICAgICAgICAgICAgICAgdHJhY2tzLnB1c2godHJhY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJhY2tzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcHMgcmVjb3JkaW5nIE1lZGlhU3RyZWFtLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiwgdGhhdCBpcyB1c2VkIHRvIHBhc3MgcmVjb3JkZWQgYmxvYiBiYWNrIHRvIHRoZSBjYWxsZWUuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTXVsdGlTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oYmxvYikge1xyXG4gICAgICogICAgIHZpZGVvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5zdG9wID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAgICAgICAgc2VsZi5ibG9iID0gYmxvYjtcclxuXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGJsb2IpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHBhdXNlcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTXVsdGlTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlc3VtZXMgdGhlIHJlY29yZGluZyBwcm9jZXNzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE11bHRpU3RyZWFtUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZXN1bWUoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXN1bWUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXNldHMgY3VycmVudGx5IHJlY29yZGVkIGRhdGEuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTXVsdGlTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2xlYXJSZWNvcmRlZERhdGEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1peGVyKSB7XHJcbiAgICAgICAgICAgIG1peGVyLnJlbGVhc2VTdHJlYW1zKCk7XHJcbiAgICAgICAgICAgIG1peGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGV4dHJhIG1lZGlhLXN0cmVhbXMgdG8gZXhpc3RpbmcgcmVjb3JkaW5ncy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNdWx0aVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAcGFyYW0ge01lZGlhU3RyZWFtc30gbWVkaWFTdHJlYW1zIC0gQXJyYXkgb2YgTWVkaWFTdHJlYW1zXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuYWRkU3RyZWFtcyhbbmV3QXVkaW9TdHJlYW0sIG5ld1ZpZGVvU3RyZWFtXSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuYWRkU3RyZWFtcyA9IGZ1bmN0aW9uKHN0cmVhbXMpIHtcclxuICAgICAgICBpZiAoIXN0cmVhbXMpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ0ZpcnN0IHBhcmFtZXRlciBpcyByZXF1aXJlZC4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEoc3RyZWFtcyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICBzdHJlYW1zID0gW3N0cmVhbXNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJyYXlPZk1lZGlhU3RyZWFtcy5jb25jYXQoc3RyZWFtcyk7XHJcblxyXG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlciB8fCAhbWl4ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWl4ZXIuYXBwZW5kU3RyZWFtcyhzdHJlYW1zKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB2aWRlb3MgZHVyaW5nIGxpdmUgcmVjb3JkaW5nLiBSZXBsYWNlIG9sZCB2aWRlb3MgZS5nLiByZXBsYWNlIGNhbWVyYXMgd2l0aCBmdWxsLXNjcmVlbi5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNdWx0aVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAcGFyYW0ge01lZGlhU3RyZWFtc30gbWVkaWFTdHJlYW1zIC0gQXJyYXkgb2YgTWVkaWFTdHJlYW1zXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVzZXRWaWRlb1N0cmVhbXMoW25ld1ZpZGVvMSwgbmV3VmlkZW8yXSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVzZXRWaWRlb1N0cmVhbXMgPSBmdW5jdGlvbihzdHJlYW1zKSB7XHJcbiAgICAgICAgaWYgKCFtaXhlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RyZWFtcyAmJiAhKHN0cmVhbXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgc3RyZWFtcyA9IFtzdHJlYW1zXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1peGVyLnJlc2V0VmlkZW9TdHJlYW1zKHN0cmVhbXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBmb3IgZGVidWdnaW5nXHJcbiAgICB0aGlzLm5hbWUgPSAnTXVsdGlTdHJlYW1SZWNvcmRlcic7XHJcbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgUmVjb3JkUlRDICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgUmVjb3JkUlRDLk11bHRpU3RyZWFtUmVjb3JkZXIgPSBNdWx0aVN0cmVhbVJlY29yZGVyO1xyXG59XHJcblxyXG4vLyBfX19fX19fX19fX19fX19fX19fX19cclxuLy8gUmVjb3JkUlRDLnByb21pc2VzLmpzXHJcblxyXG4vKipcclxuICogUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyIGFkZHMgcHJvbWlzZXMgc3VwcG9ydCBpbiB7QGxpbmsgUmVjb3JkUlRDfS4gVHJ5IGEge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDL2Jsb2IvbWFzdGVyL3NpbXBsZS1kZW1vcy9SZWNvcmRSVENQcm9taXNlc0hhbmRsZXIuaHRtbHxkZW1vIGhlcmV9XHJcbiAqIEBzdW1tYXJ5IFByb21pc2VzIGZvciB7QGxpbmsgUmVjb3JkUlRDfVxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyKG1lZGlhU3RyZWFtLCBvcHRpb25zKTtcclxuICogcmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKVxyXG4gKiAgICAgICAgIC50aGVuKHN1Y2Nlc3NDQilcclxuICogICAgICAgICAuY2F0Y2goZXJyb3JDQik7XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBTaW5nbGUgbWVkaWEtc3RyZWFtIG9iamVjdCwgYXJyYXkgb2YgbWVkaWEtc3RyZWFtcywgaHRtbC1jYW52YXMtZWxlbWVudCwgZXRjLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge3R5cGU6XCJ2aWRlb1wiLCByZWNvcmRlclR5cGU6IE1lZGlhU3RyZWFtUmVjb3JkZXIsIGRpc2FibGVMb2dzOiB0cnVlLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHM6IDEsIGJ1ZmZlclNpemU6IDAsIHNhbXBsZVJhdGU6IDAsIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50LCBldGMufVxyXG4gKiBAdGhyb3dzIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgXCJuZXdcIiBrZXl3b3JkIGlzIG5vdCB1c2VkIHRvIGluaXRpYXRlIFwiUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyXCIuIEFsc28gdGhyb3dzIGVycm9yIGlmIGZpcnN0IGFyZ3VtZW50IFwiTWVkaWFTdHJlYW1cIiBpcyBtaXNzaW5nLlxyXG4gKiBAcmVxdWlyZXMge0BsaW5rIFJlY29yZFJUQ31cclxuICovXHJcblxyXG5mdW5jdGlvbiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXIobWVkaWFTdHJlYW0sIG9wdGlvbnMpIHtcclxuICAgIGlmICghdGhpcykge1xyXG4gICAgICAgIHRocm93ICdVc2UgXCJuZXcgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyKClcIic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBtZWRpYVN0cmVhbSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aHJvdyAnRmlyc3QgYXJndW1lbnQgXCJNZWRpYVN0cmVhbVwiIGlzIHJlcXVpcmVkLic7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3BlcnR5IHtCbG9ifSBibG9iIC0gQWNjZXNzL3JlYWNoIHRoZSBuYXRpdmUge0BsaW5rIFJlY29yZFJUQ30gb2JqZWN0LlxyXG4gICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1Byb21pc2VzSGFuZGxlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHZhciBpbnRlcm5hbCA9IHJlY29yZGVyLnJlY29yZFJUQy5nZXRJbnRlcm5hbFJlY29yZGVyKCk7XHJcbiAgICAgKiBhbGVydChpbnRlcm5hbCBpbnN0YW5jZW9mIE1lZGlhU3RyZWFtUmVjb3JkZXIpO1xyXG4gICAgICovXHJcbiAgICBzZWxmLnJlY29yZFJUQyA9IG5ldyBSZWNvcmRSVEMobWVkaWFTdHJlYW0sIG9wdGlvbnMpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyBNZWRpYVN0cmVhbS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdGFydFJlY29yZGluZygpXHJcbiAgICAgKiAgICAgICAgIC50aGVuKHN1Y2Nlc3NDQilcclxuICAgICAqICAgICAgICAgLmNhdGNoKGVycm9yQ0IpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0YXJ0UmVjb3JkaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZWNvcmRSVEMuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcHMgdGhlIHJlY29yZGluZy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKCkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmdldEJsb2IoKTtcclxuICAgICAqIH0pLmNhdGNoKGVycm9yQ0IpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3BSZWNvcmRpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlY29yZFJUQy5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYmxvYiA9IHNlbGYucmVjb3JkUlRDLmdldEJsb2IoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyBkYXRhLXVybCBmb3IgdGhlIHJlY29yZGVkIGJsb2IuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZygpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgKiAgICAgcmVjb3JkZXIuZ2V0RGF0YVVSTCgpLnRoZW4oZnVuY3Rpb24oZGF0YVVSTCkge1xyXG4gICAgICogICAgICAgICB3aW5kb3cub3BlbihkYXRhVVJMKTtcclxuICAgICAqICAgICB9KS5jYXRjaChlcnJvckNCKTs7XHJcbiAgICAgKiB9KS5jYXRjaChlcnJvckNCKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXREYXRhVVJMID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlY29yZFJUQy5nZXREYXRhVVJMKGZ1bmN0aW9uKGRhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGFVUkwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIHJlY29yZGVkIGJsb2IuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZygpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgKiAgICAgdmFyIGJsb2IgPSByZWNvcmRlci5nZXRCbG9iKCk7XHJcbiAgICAgKiB9KS5jYXRjaChlcnJvckNCKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRCbG9iID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYucmVjb3JkUlRDLmdldEJsb2IoKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBSZWNvcmRlZCBkYXRhIGFzIFwiQmxvYlwiIG9iamVjdC5cclxuICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKCkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmdldEJsb2IoKTtcclxuICAgICAqIH0pLmNhdGNoKGVycm9yQ0IpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmJsb2IgPSBudWxsO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5SZWNvcmRSVENQcm9taXNlc0hhbmRsZXIgPSBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXI7XHJcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlY29yZHJ0Yy9SZWNvcmRSVEMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpY2hlY2sgfSBmcm9tIFwiLi9pY2hlY2suanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2VsZWN0MiB9IGZyb20gXCIuL3NlbGVjdDIuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW5wdXRtYXNrIH0gZnJvbSBcIi4vaW5wdXRtYXNrLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGpxdWVyeWJhcnJhdGluZyB9IGZyb20gXCIuL2pxdWVyeS1iYXItcmF0aW5nLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGpxdWVyeXVpZGF0ZXBpY2tlciB9IGZyb20gXCIuL2pxdWVyeS11aS1kYXRlcGlja2VyLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vdWlzbGlkZXIgfSBmcm9tIFwiLi9ub3Vpc2xpZGVyLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNlbGVjdDJ0YWdib3ggfSBmcm9tIFwiLi9zZWxlY3QyLXRhZ2JveC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzaWduYXR1cmVwYWQgfSBmcm9tIFwiLi9zaWduYXR1cmVfcGFkLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNvcnRhYmxlanMgfSBmcm9tIFwiLi9zb3J0YWJsZWpzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNrZWRpdG9yIH0gZnJvbSBcIi4vY2stZWRpdG9yLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGF1dG9jb21wbGV0ZSB9IGZyb20gXCIuL2Vhc3ktYXV0b2NvbXBsZXRlLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZXR0eWNoZWNrYm94IH0gZnJvbSBcIi4vcHJldHR5LWNoZWNrYm94LmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvb3RzdHJhcHNsaWRlciB9IGZyb20gXCIuL2Jvb3RzdHJhcC1zbGlkZXIuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWljcm9waG9uZSB9IGZyb20gXCIuL21pY3JvcGhvbmUuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZW1vdGlvbnNyYXRpbmdzIH0gZnJvbSBcIi4vZW1vdGlvbnNyYXRpbmdzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvb3RzdHJhcGRhdGVwaWNrZXIgfSBmcm9tIFwiLi9ib290c3RyYXBkYXRlcGlja2VyLmpzXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdXJ2ZXlqcy13aWRnZXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBpbml0KFN1cnZleSwgJCkge1xuICAkID0gJCB8fCB3aW5kb3cuJDtcblxuICB2YXIgd2lkZ2V0ID0ge1xuICAgIG5hbWU6IFwiZW1vdGlvbnNyYXRpbmdzXCIsXG4gICAgdGl0bGU6IFwiRW1vdGlvbnMgUmF0aW5nc1wiLFxuICAgIGljb25OYW1lOiBcImljb24tZW1vdGlvbnNyYXRpbmdzXCIsXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uZW1vdGlvbnNSYXRpbmc7XG4gICAgfSxcbiAgICBkZWZhdWx0SlNPTjoge1xuICAgICAgY2hvaWNlczogWzEsIDIsIDMsIDQsIDVdXG4gICAgfSxcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiZW1vdGlvbnNyYXRpbmdzXCI7XG4gICAgfSxcbiAgICBpc0RlZmF1bHRSZW5kZXI6IGZhbHNlLFxuICAgIGh0bWxUZW1wbGF0ZTogXCI8ZGl2PjwvZGl2PlwiLFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFxuICAgICAgICBcImVtb3Rpb25zcmF0aW5nc1wiLFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJoYXNPdGhlclwiLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwib3RoZXJUZXh0XCIsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJvcHRpb25zQ2FwdGlvblwiLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwib3RoZXJFcnJvclRleHRcIixcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInN0b3JlT3RoZXJzQXNDb21tZW50XCIsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJyZW5kZXJBc1wiLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwiZHJvcGRvd25cIlxuICAgICAgKTtcbiAgICB9LFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBlbW90aW9uc0FycmF5ID0gW1wiYW5ncnlcIiwgXCJkaXNhcHBvaW50ZWRcIiwgXCJtZWhcIiwgXCJoYXBweVwiLCBcImluTG92ZVwiXTtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBlbW90aW9uU2l6ZTogMzAsXG4gICAgICAgIGJnRW1vdGlvbjogXCJoYXBweVwiLFxuICAgICAgICBlbW90aW9uczogZW1vdGlvbnNBcnJheSxcbiAgICAgICAgY29sb3I6IFwiI0ZGMDA2NlwiLFxuICAgICAgICBvblVwZGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaW5pdFdpZGdldCgpO1xuXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IGluaXRXaWRnZXQ7XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IGluaXRXaWRnZXQ7XG5cbiAgICAgIGZ1bmN0aW9uIGluaXRXaWRnZXQoKSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IFwiPGRpdj48L2Rpdj5cIjtcbiAgICAgICAgJChlbCkub2ZmKCk7XG4gICAgICAgIG9wdGlvbnMuaW5pdGlhbFJhdGluZyA9IHF1ZXN0aW9uLnZhbHVlIHx8IDA7XG4gICAgICAgIG9wdGlvbnMuZGlzYWJsZWQgPSBxdWVzdGlvbi5pc1JlYWRPbmx5O1xuICAgICAgICAkKGVsKVxuICAgICAgICAgIC5maW5kKFwiZGl2XCIpXG4gICAgICAgICAgLmVtb3Rpb25zUmF0aW5nKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgZWwuaW5uZXJIVE1MID0gbnVsbDtcbiAgICAgICQoZWwpLm9mZigpO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5LCB3aW5kb3cuJCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lbW90aW9uc3JhdGluZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XG4gICAgLy8gJCA9ICQgfHwgd2luZG93LiQ7XG4gICAgIHZhciB3aWRnZXQgPSB7XG4gICAgICAgICBuYW1lOiBcImJvb3RzdHJhcGRhdGVwaWNrZXJcIixcbiAgICAgICAgIHRpdGxlOiBcIkRhdGUgcGlja2VyXCIsXG4gICAgICAgICBpY29uTmFtZTogXCJpY29uLWRhdGVwaWNrZXJcIixcbiAgICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgcmV0dXJuICEhJC5mbi5kYXRlcGlja2VyO1xuICAgICAgICAgfSxcbiAgICAgICAgIGlzRml0OiBmdW5jdGlvbiAocXVlc3Rpb24pIHtcbiAgICAgICAgICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImJvb3RzdHJhcGRhdGVwaWNrZXJcIjtcbiAgICAgICAgIH0sXG4gICAgICAgICBodG1sVGVtcGxhdGU6XG4gICAgICAgICBcIjxpbnB1dCBjbGFzcz0nZm9ybS1jb250cm9sIHdpZGdldC1kYXRlcGlja2VyJyB0eXBlPSd0ZXh0JyBzdHlsZT0nd2lkdGg6IDEwMCU7Jz5cIixcbiAgICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24gKGFjdGl2YXRlZEJ5KSB7XG4gICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXG4gICAgICAgICAgICAgICAgIFwiYm9vdHN0cmFwZGF0ZXBpY2tlclwiLFxuICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiaW5wdXRUeXBlXCIsIHZpc2libGU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiaW5wdXRGb3JtYXRcIiwgdmlzaWJsZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJpbnB1dE1hc2tcIiwgdmlzaWJsZTogZmFsc2UgfVxuICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICBcInRleHRcIlxuICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJib290c3RyYXBkYXRlcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgbmFtZTogXCJkYXRlRm9ybWF0XCJcbiAgICAgICAgICAgICB9KTtcbiAgICAgICAgIH0sXG4gICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcIi53aWRnZXQtZGF0ZXBpY2tlclwiKVxuICAgICAgICAgICAgICAgICA/ICQoZWwpXG4gICAgICAgICAgICAgICAgIDogJChlbCkuZmluZChcIi53aWRnZXQtZGF0ZXBpY2tlclwiKTtcbiBcbiAgICAgICAgICAgICB2YXIgcGlja2VyV2lkZ2V0ID0gJChcIi53aWRnZXQtZGF0ZXBpY2tlclwiKS5kYXRlcGlja2VyKHtcbiAgICAgICAgICAgICAgIGVuYWJsZU9uUmVhZG9ubHk6IGZhbHNlXG4gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgLm9uKFwiY2hhbmdlRGF0ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBtb21lbnQoZS5kYXRlKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpO1xuICAgICAgICAgICAgICAgICAgICAgLy8gYGVgIGhlcmUgY29udGFpbnMgdGhlIGV4dHJhIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgIH0pO1xuIFxuICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAkKFwiLndpZGdldC1kYXRlcGlja2VyXCIpLmRhdGVwaWNrZXIoJ3VwZGF0ZScsIG1vbWVudChxdWVzdGlvbi52YWx1ZSwgXCJERC9NTS9ZWVlZXCIpLnRvRGF0ZSgpKTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgaWYocXVlc3Rpb24uaXNSZWFkT25seSkge1xuICAgICAgICAgICAgICAgICAkZWwucHJvcCgncmVhZG9ubHknLCB0cnVlKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAkZWwucmVtb3ZlQXR0cigncmVhZG9ubHknKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgIH0sXG4gICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcIi53aWRnZXQtZGF0ZXBpY2tlclwiKVxuICAgICAgICAgICAgICAgICA/ICQoZWwpXG4gICAgICAgICAgICAgICAgIDogJChlbCkuZmluZChcIi53aWRnZXQtZGF0ZXBpY2tlclwiKTtcbiAgICAgICAgICAgICAkZWwuZGF0ZXBpY2tlcihcImRlc3Ryb3lcIik7XG4gICAgICAgICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgICB9XG4gICAgIH07XG4gXG4gICAgIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcbiB9XG4gXG4gaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpbml0KFN1cnZleSwgd2luZG93LiQpO1xuIH1cbiBcbiBleHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jvb3RzdHJhcGRhdGVwaWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=