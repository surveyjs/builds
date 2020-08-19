(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("bootstrap-slider"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/bootstrap-slider", ["bootstrap-slider"], factory);
	else if(typeof exports === 'object')
		exports["widgets/bootstrap-slider"] = factory(require("bootstrap-slider"));
	else
		root["widgets/bootstrap-slider"] = factory(root["Slider"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_15__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var Slider = __webpack_require__(15);

function init(Survey) {
  var widget = {
    name: "bootstrapslider",
    title: "Bootstrap Slider",
    iconName: "icon-bootstrap-slider",
    widgetIsLoaded: function () {
      return typeof Slider !== "undefined";
    },
    isFit: function (question) {
      return question.getType() === "bootstrapslider";
    },
    htmlTemplate: "<div></div>",
    activatedByChanged: function (activatedBy) {
      Survey.JsonObject.metaData.addClass("bootstrapslider", [], null, "empty");
      Survey.JsonObject.metaData.addProperties("bootstrapslider", [
        {
          name: "step:number",
          default: 1,
          category: "general",
        },
        {
          name: "rangeMin:number",
          default: 0,
          category: "general",
        },
        {
          name: "rangeMax:number",
          default: 100,
          category: "general",
        },
      ]);
      Survey.JsonObject.metaData.addProperty("bootstrapslider", {
        name: "config",
        default: null,
        category: "general",
      });
    },
    afterRender: function (question, el) {
      el.style.paddingTop = "20px";
      el.style.paddingBottom = "17px";
      el.style.paddingLeft = "10px";
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

      slider.on("change", function (valueObj) {
        question.value = slider.getValue();
      });
      var updateValueHandler = function () {
        slider.setValue(question.value || question.rangeMin);
      };
      question.readOnlyChangedCallback = function () {
        if (question.isReadOnly) {
          slider.disable();
        } else {
          slider.enable();
        }
      };
      question.bootstrapSlider = slider;
      question.valueChangedCallback = updateValueHandler;
    },
    willUnmount: function (question, el) {
      question.bootstrapSlider && question.bootstrapSlider.destroy();
      question.bootstrapSlider = null;
      question.readOnlyChangedCallback = null;
    },
    pdfRender: function (_, options) {
      if (options.question.getType() === "bootstrapslider") {
        var point = options.module.SurveyHelper.createPoint(
          options.module.SurveyHelper.mergeRects.apply(null, options.bricks)
        );
        point.xLeft += options.controller.unitWidth;
        point.yTop +=
          options.controller.unitHeight *
          options.module.FlatQuestion.CONTENT_GAP_VERT_SCALE;
        var rect = options.module.SurveyHelper.createTextFieldRect(
          point,
          options.controller
        );
        var textboxBrick = new options.module.TextFieldBrick(
          options.question,
          options.controller,
          rect,
          true,
          options.question.id,
          (
            options.question.value ||
            options.question.defaultValue ||
            ""
          ).toString(),
          "",
          options.question.isReadOnly,
          false,
          "text"
        );
        options.bricks.push(textboxBrick);
      }
    },
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjMGE2ODdlZTIyMmI5MjgyMjMwNyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9vdHN0cmFwLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU2xpZGVyXCIsXCJjb21tb25qczJcIjpcImJvb3RzdHJhcC1zbGlkZXJcIixcImNvbW1vbmpzXCI6XCJib290c3RyYXAtc2xpZGVyXCIsXCJhbWRcIjpcImJvb3RzdHJhcC1zbGlkZXJcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7Ozs7O0FDN0RBO0FBQUEsYUFBYSxtQkFBTyxDQUFDLEVBQWtCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDOzs7Ozs7OztBQ2xKcEIsZ0QiLCJmaWxlIjoid2lkZ2V0cy9ib290c3RyYXAtc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYm9vdHN0cmFwLXNsaWRlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndpZGdldHMvYm9vdHN0cmFwLXNsaWRlclwiLCBbXCJib290c3RyYXAtc2xpZGVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvYm9vdHN0cmFwLXNsaWRlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImJvb3RzdHJhcC1zbGlkZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndpZGdldHMvYm9vdHN0cmFwLXNsaWRlclwiXSA9IGZhY3Rvcnkocm9vdFtcIlNsaWRlclwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMGE2ODdlZTIyMmI5MjgyMjMwNyIsInZhciBTbGlkZXIgPSByZXF1aXJlKFwiYm9vdHN0cmFwLXNsaWRlclwiKTtcblxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBuYW1lOiBcImJvb3RzdHJhcHNsaWRlclwiLFxuICAgIHRpdGxlOiBcIkJvb3RzdHJhcCBTbGlkZXJcIixcbiAgICBpY29uTmFtZTogXCJpY29uLWJvb3RzdHJhcC1zbGlkZXJcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBTbGlkZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gICAgfSxcbiAgICBpc0ZpdDogZnVuY3Rpb24gKHF1ZXN0aW9uKSB7XG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImJvb3RzdHJhcHNsaWRlclwiO1xuICAgIH0sXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbiAoYWN0aXZhdGVkQnkpIHtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiYm9vdHN0cmFwc2xpZGVyXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcImJvb3RzdHJhcHNsaWRlclwiLCBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInN0ZXA6bnVtYmVyXCIsXG4gICAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgICBjYXRlZ29yeTogXCJnZW5lcmFsXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJhbmdlTWluOm51bWJlclwiLFxuICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiZ2VuZXJhbFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJyYW5nZU1heDpudW1iZXJcIixcbiAgICAgICAgICBkZWZhdWx0OiAxMDAsXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiZ2VuZXJhbFwiLFxuICAgICAgICB9LFxuICAgICAgXSk7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImJvb3RzdHJhcHNsaWRlclwiLCB7XG4gICAgICAgIG5hbWU6IFwiY29uZmlnXCIsXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIGNhdGVnb3J5OiBcImdlbmVyYWxcIixcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWwpIHtcbiAgICAgIGVsLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcbiAgICAgIGVsLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjE3cHhcIjtcbiAgICAgIGVsLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIxMHB4XCI7XG4gICAgICB2YXIgaW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGlucHV0RWwuaWQgPSBxdWVzdGlvbi5pZDtcbiAgICAgIGlucHV0RWwudHlwZSA9IFwidGV4dFwiO1xuICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlci1pZFwiLCBxdWVzdGlvbi5uYW1lICsgXCJfXCIgKyBxdWVzdGlvbi5pZCk7XG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVyLW1pblwiLCBxdWVzdGlvbi5yYW5nZU1pbik7XG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVyLW1heFwiLCBxdWVzdGlvbi5yYW5nZU1heCk7XG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVyLXN0ZXBcIiwgcXVlc3Rpb24uc3RlcCk7XG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJkYXRhLXNsaWRlci12YWx1ZVwiLFxuICAgICAgICBxdWVzdGlvbi52YWx1ZSB8fCBxdWVzdGlvbi5yYW5nZU1pblxuICAgICAgKTtcbiAgICAgIGVsLmFwcGVuZENoaWxkKGlucHV0RWwpO1xuXG4gICAgICB2YXIgY29uZmlnID0gcXVlc3Rpb24uY29uZmlnIHx8IHt9O1xuXG4gICAgICBpZiAoY29uZmlnLmlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnLmlkID0gcXVlc3Rpb24ubmFtZSArIFwiX1wiICsgcXVlc3Rpb24uaWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcubWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnLm1pbiA9IHF1ZXN0aW9uLnJhbmdlTWluO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLm1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbmZpZy5tYXggPSBxdWVzdGlvbi5yYW5nZU1heDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5zdGVwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnLnN0ZXAgPSBxdWVzdGlvbi5zdGVwO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25maWcuZW5hYmxlZCA9ICFxdWVzdGlvbi5pc1JlYWRPbmx5O1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnLnZhbHVlID0gcXVlc3Rpb24udmFsdWUgfHwgcXVlc3Rpb24ucmFuZ2VNaW47XG4gICAgICB9XG5cbiAgICAgIHZhciBzbGlkZXIgPSBuZXcgU2xpZGVyKGlucHV0RWwsIGNvbmZpZyk7XG5cbiAgICAgIHNsaWRlci5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAodmFsdWVPYmopIHtcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBzbGlkZXIuZ2V0VmFsdWUoKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2xpZGVyLnNldFZhbHVlKHF1ZXN0aW9uLnZhbHVlIHx8IHF1ZXN0aW9uLnJhbmdlTWluKTtcbiAgICAgIH07XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcbiAgICAgICAgICBzbGlkZXIuZGlzYWJsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlci5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHF1ZXN0aW9uLmJvb3RzdHJhcFNsaWRlciA9IHNsaWRlcjtcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xuICAgIH0sXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHF1ZXN0aW9uLmJvb3RzdHJhcFNsaWRlciAmJiBxdWVzdGlvbi5ib290c3RyYXBTbGlkZXIuZGVzdHJveSgpO1xuICAgICAgcXVlc3Rpb24uYm9vdHN0cmFwU2xpZGVyID0gbnVsbDtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gbnVsbDtcbiAgICB9LFxuICAgIHBkZlJlbmRlcjogZnVuY3Rpb24gKF8sIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLnF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJib290c3RyYXBzbGlkZXJcIikge1xuICAgICAgICB2YXIgcG9pbnQgPSBvcHRpb25zLm1vZHVsZS5TdXJ2ZXlIZWxwZXIuY3JlYXRlUG9pbnQoXG4gICAgICAgICAgb3B0aW9ucy5tb2R1bGUuU3VydmV5SGVscGVyLm1lcmdlUmVjdHMuYXBwbHkobnVsbCwgb3B0aW9ucy5icmlja3MpXG4gICAgICAgICk7XG4gICAgICAgIHBvaW50LnhMZWZ0ICs9IG9wdGlvbnMuY29udHJvbGxlci51bml0V2lkdGg7XG4gICAgICAgIHBvaW50LnlUb3AgKz1cbiAgICAgICAgICBvcHRpb25zLmNvbnRyb2xsZXIudW5pdEhlaWdodCAqXG4gICAgICAgICAgb3B0aW9ucy5tb2R1bGUuRmxhdFF1ZXN0aW9uLkNPTlRFTlRfR0FQX1ZFUlRfU0NBTEU7XG4gICAgICAgIHZhciByZWN0ID0gb3B0aW9ucy5tb2R1bGUuU3VydmV5SGVscGVyLmNyZWF0ZVRleHRGaWVsZFJlY3QoXG4gICAgICAgICAgcG9pbnQsXG4gICAgICAgICAgb3B0aW9ucy5jb250cm9sbGVyXG4gICAgICAgICk7XG4gICAgICAgIHZhciB0ZXh0Ym94QnJpY2sgPSBuZXcgb3B0aW9ucy5tb2R1bGUuVGV4dEZpZWxkQnJpY2soXG4gICAgICAgICAgb3B0aW9ucy5xdWVzdGlvbixcbiAgICAgICAgICBvcHRpb25zLmNvbnRyb2xsZXIsXG4gICAgICAgICAgcmVjdCxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIG9wdGlvbnMucXVlc3Rpb24uaWQsXG4gICAgICAgICAgKFxuICAgICAgICAgICAgb3B0aW9ucy5xdWVzdGlvbi52YWx1ZSB8fFxuICAgICAgICAgICAgb3B0aW9ucy5xdWVzdGlvbi5kZWZhdWx0VmFsdWUgfHxcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICApLnRvU3RyaW5nKCksXG4gICAgICAgICAgXCJcIixcbiAgICAgICAgICBvcHRpb25zLnF1ZXN0aW9uLmlzUmVhZE9ubHksXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgXCJ0ZXh0XCJcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucy5icmlja3MucHVzaCh0ZXh0Ym94QnJpY2spO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ib290c3RyYXAtc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJib290c3RyYXAtc2xpZGVyXCIsXCJjb21tb25qc1wiOlwiYm9vdHN0cmFwLXNsaWRlclwiLFwiYW1kXCI6XCJib290c3RyYXAtc2xpZGVyXCJ9XG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSJdLCJzb3VyY2VSb290IjoiIn0=