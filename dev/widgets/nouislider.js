(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("nouislider"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/nouislider", ["nouislider"], factory);
	else if(typeof exports === 'object')
		exports["widgets/nouislider"] = factory(require("nouislider"));
	else
		root["widgets/nouislider"] = factory(root["noUiSlider"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
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
    widgetIsLoaded: function () {
      return typeof __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a != "undefined";
    },
    isFit: function (question) {
      return question.getType() === "nouislider";
    },
    htmlTemplate: "<div></div>",
    activatedByChanged: function (activatedBy) {
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
    afterRender: function (question, el) {
      el.style.marginBottom = "60px";
      var slider = __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a.create(el, {
        start: question.value || (question.rangeMin + question.rangeMax) / 2,
        connect: [true, false],
        step: question.step,
        tooltips: true,
        pips: {
          mode: question.pipsMode || "positions",
          values: question.pipsValues.map(function (pVal) {
            return parseInt((pVal.value !== undefined && pVal.value) || pVal);
          }),
          density: question.pipsDensity || 5
        },
        range: {
          min: question.rangeMin,
          max: question.rangeMax
        }
      });
      slider.on("change", function () {
        question.value = slider.get();
      });
      var updateValueHandler = function () {
        slider.set(question.value);
      };
      if (question.isReadOnly) {
        el.setAttribute("disabled", true);
      }
      updateValueHandler();
      question.noUiSlider = slider;
      question.valueChangedCallback = updateValueHandler;
      question.readOnlyChangedCallback = function () {
        if (question.isReadOnly) {
          el.setAttribute("disabled", true);
        } else {
          el.removeAttribute("disabled");
        }
      };
    },
    willUnmount: function (question, el) {
      if (!!question.noUiSlider) {
        question.noUiSlider.destroy();
        question.noUiSlider = null;
      }
      question.readOnlyChangedCallback = null;
    },
    pdfRender: function(_, options) {
      if (options.question.getType() === "nouislider") {
        var point = SurveyPDF.SurveyHelper.createPoint(
          SurveyPDF.SurveyHelper.mergeRects.apply(null,
            options.bricks));
        point.xLeft += options.controller.unitWidth;
        point.yTop += options.controller.unitHeight *
          SurveyPDF.FlatQuestion.CONTENT_GAP_VERT_SCALE;
        var rect = SurveyPDF.SurveyHelper.
          createTextFieldRect(point, options.controller);
        var textboxBrick = new SurveyPDF.TextFieldBrick(
          options.question, options.controller, rect,
          true, options.question.id, options.question.value ||
          options.question.defaultValue, "",
          options.question.isReadOnly, false, "text");
        options.bricks.push(textboxBrick);
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

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5Y2YwZDg4YzZlMTBhYjJhN2UwNCIsIndlYnBhY2s6Ly8vLi9zcmMvbm91aXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibm9VaVNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJub3Vpc2xpZGVyXCIsXCJjb21tb25qc1wiOlwibm91aXNsaWRlclwiLFwiYW1kXCI6XCJub3Vpc2xpZGVyXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBVTtBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDOzs7Ozs7OztBQ3BIcEIsK0MiLCJmaWxlIjoid2lkZ2V0cy9ub3Vpc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibm91aXNsaWRlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndpZGdldHMvbm91aXNsaWRlclwiLCBbXCJub3Vpc2xpZGVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvbm91aXNsaWRlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcIm5vdWlzbGlkZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndpZGdldHMvbm91aXNsaWRlclwiXSA9IGZhY3Rvcnkocm9vdFtcIm5vVWlTbGlkZXJcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDljZjBkODhjNmUxMGFiMmE3ZTA0IiwiaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSBcIm5vdWlzbGlkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwibm91aXNsaWRlclwiLFxyXG4gICAgdGl0bGU6IFwibm9VaVNsaWRlclwiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1ub3Vpc2xpZGVyXCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIG5vVWlTbGlkZXIgIT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH0sXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24gKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwibm91aXNsaWRlclwiO1xyXG4gICAgfSxcclxuICAgIGh0bWxUZW1wbGF0ZTogXCI8ZGl2PjwvZGl2PlwiLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbiAoYWN0aXZhdGVkQnkpIHtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJub3Vpc2xpZGVyXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwibm91aXNsaWRlclwiLCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJzdGVwOm51bWJlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJyYW5nZU1pbjpudW1iZXJcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwicmFuZ2VNYXg6bnVtYmVyXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiAxMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwicGlwc01vZGVcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IFwicG9zaXRpb25zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwicGlwc1ZhbHVlczppdGVtdmFsdWVzXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiBbMCwgMjUsIDUwLCA3NSwgMTAwXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJwaXBzRGVuc2l0eTpudW1iZXJcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IDVcclxuICAgICAgICB9XHJcbiAgICAgIF0pO1xyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIGVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNjBweFwiO1xyXG4gICAgICB2YXIgc2xpZGVyID0gbm9VaVNsaWRlci5jcmVhdGUoZWwsIHtcclxuICAgICAgICBzdGFydDogcXVlc3Rpb24udmFsdWUgfHwgKHF1ZXN0aW9uLnJhbmdlTWluICsgcXVlc3Rpb24ucmFuZ2VNYXgpIC8gMixcclxuICAgICAgICBjb25uZWN0OiBbdHJ1ZSwgZmFsc2VdLFxyXG4gICAgICAgIHN0ZXA6IHF1ZXN0aW9uLnN0ZXAsXHJcbiAgICAgICAgdG9vbHRpcHM6IHRydWUsXHJcbiAgICAgICAgcGlwczoge1xyXG4gICAgICAgICAgbW9kZTogcXVlc3Rpb24ucGlwc01vZGUgfHwgXCJwb3NpdGlvbnNcIixcclxuICAgICAgICAgIHZhbHVlczogcXVlc3Rpb24ucGlwc1ZhbHVlcy5tYXAoZnVuY3Rpb24gKHBWYWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KChwVmFsLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgcFZhbC52YWx1ZSkgfHwgcFZhbCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGRlbnNpdHk6IHF1ZXN0aW9uLnBpcHNEZW5zaXR5IHx8IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICBtaW46IHF1ZXN0aW9uLnJhbmdlTWluLFxyXG4gICAgICAgICAgbWF4OiBxdWVzdGlvbi5yYW5nZU1heFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNsaWRlci5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBzbGlkZXIuZ2V0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNsaWRlci5zZXQocXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgICBpZiAocXVlc3Rpb24uaXNSZWFkT25seSkge1xyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgICBxdWVzdGlvbi5ub1VpU2xpZGVyID0gc2xpZGVyO1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcclxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgaWYgKCEhcXVlc3Rpb24ubm9VaVNsaWRlcikge1xyXG4gICAgICAgIHF1ZXN0aW9uLm5vVWlTbGlkZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIHF1ZXN0aW9uLm5vVWlTbGlkZXIgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBwZGZSZW5kZXI6IGZ1bmN0aW9uKF8sIG9wdGlvbnMpIHtcclxuICAgICAgaWYgKG9wdGlvbnMucXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcIm5vdWlzbGlkZXJcIikge1xyXG4gICAgICAgIHZhciBwb2ludCA9IFN1cnZleVBERi5TdXJ2ZXlIZWxwZXIuY3JlYXRlUG9pbnQoXHJcbiAgICAgICAgICBTdXJ2ZXlQREYuU3VydmV5SGVscGVyLm1lcmdlUmVjdHMuYXBwbHkobnVsbCxcclxuICAgICAgICAgICAgb3B0aW9ucy5icmlja3MpKTtcclxuICAgICAgICBwb2ludC54TGVmdCArPSBvcHRpb25zLmNvbnRyb2xsZXIudW5pdFdpZHRoO1xyXG4gICAgICAgIHBvaW50LnlUb3AgKz0gb3B0aW9ucy5jb250cm9sbGVyLnVuaXRIZWlnaHQgKlxyXG4gICAgICAgICAgU3VydmV5UERGLkZsYXRRdWVzdGlvbi5DT05URU5UX0dBUF9WRVJUX1NDQUxFO1xyXG4gICAgICAgIHZhciByZWN0ID0gU3VydmV5UERGLlN1cnZleUhlbHBlci5cclxuICAgICAgICAgIGNyZWF0ZVRleHRGaWVsZFJlY3QocG9pbnQsIG9wdGlvbnMuY29udHJvbGxlcik7XHJcbiAgICAgICAgdmFyIHRleHRib3hCcmljayA9IG5ldyBTdXJ2ZXlQREYuVGV4dEZpZWxkQnJpY2soXHJcbiAgICAgICAgICBvcHRpb25zLnF1ZXN0aW9uLCBvcHRpb25zLmNvbnRyb2xsZXIsIHJlY3QsXHJcbiAgICAgICAgICB0cnVlLCBvcHRpb25zLnF1ZXN0aW9uLmlkLCBvcHRpb25zLnF1ZXN0aW9uLnZhbHVlIHx8XHJcbiAgICAgICAgICBvcHRpb25zLnF1ZXN0aW9uLmRlZmF1bHRWYWx1ZSwgXCJcIixcclxuICAgICAgICAgIG9wdGlvbnMucXVlc3Rpb24uaXNSZWFkT25seSwgZmFsc2UsIFwidGV4dFwiKTtcclxuICAgICAgICBvcHRpb25zLmJyaWNrcy5wdXNoKHRleHRib3hCcmljayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ub3Vpc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJub1VpU2xpZGVyXCIsXCJjb21tb25qczJcIjpcIm5vdWlzbGlkZXJcIixcImNvbW1vbmpzXCI6XCJub3Vpc2xpZGVyXCIsXCJhbWRcIjpcIm5vdWlzbGlkZXJcIn1cbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQiXSwic291cmNlUm9vdCI6IiJ9