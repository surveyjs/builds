(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("inputmask"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/inputmask", ["inputmask"], factory);
	else if(typeof exports === 'object')
		exports["widgets/inputmask"] = factory(require("inputmask"));
	else
		root["widgets/inputmask"] = factory(root["Inputmask"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
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
    numericPlaceholder: "0",
    autoUnmask: true,
    clearIncomplete: true,
    widgetIsLoaded: function () {
      return typeof __WEBPACK_IMPORTED_MODULE_0_inputmask___default.a != "undefined";
    },
    isFit: function (question) {
      if (question.getType() == "multipletext") return true;
      return (
        question.getType() == "text" &&
        (question.inputMask != "none" || question.inputFormat)
      );
    },
    isDefaultRender: true,
    activatedByChanged: function (activatedBy) {
      if (Survey.JsonObject.metaData.findProperty("text", "inputMask")) return;
      var properties = [
        { name: "inputFormat", category: "general" },
        {
          name: "prefix",
          category: "general",

          visible: false,
        },
        {
          name: "autoUnmask:boolean",
          category: "general",
          default: true,
        },
        {
          name: "clearIncomplete:boolean",
          category: "general",
          default: true,
        },
        {
          name: "inputMask",
          category: "general",
          default: "none",
          choices: [
            "none",
            "datetime",
            "currency",
            "decimal",
            "email",
            "phone",
            "ip",
          ],
        },
      ];
      Survey.JsonObject.metaData.addProperties("text", properties);
      Survey.JsonObject.metaData.addProperties(
        "matrixdropdowncolumn",
        properties
      );
      Survey.JsonObject.metaData.addProperties("multipletextitem", properties);
    },
    applyInputMask: function (surveyElement, el) {
      var rootWidget = this;
      var mask =
        surveyElement.inputMask != "none"
          ? surveyElement.inputMask
          : surveyElement.inputFormat;
      var options = {
        autoUnmask:
          typeof surveyElement.autoUnmask !== "undefined"
            ? surveyElement.autoUnmask
            : rootWidget.autoUnmask,
        clearIncomplete:
            typeof surveyElement.clearIncomplete !== "undefined"
              ? surveyElement.clearIncomplete
              : rootWidget.clearIncomplete,
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
        options.prefix = surveyElement.prefix || "";
        options.placeholder = rootWidget.numericPlaceholder;
      }
      // if (surveyElement.inputMask == "datetime") {
      //   mask = surveyElement.inputFormat;
      // }
      if (surveyElement.inputMask == "phone" && !!surveyElement.inputFormat) {
        mask = surveyElement.inputFormat;
      }

      __WEBPACK_IMPORTED_MODULE_0_inputmask___default()(mask, options).mask(el);

      el.onblur = function () {
        if (!el.inputmask) return;
        if (surveyElement.value === el.inputmask.getemptymask()) {
          surveyElement.value = "";
        }
      };

      var customWidgetData =
        surveyElement.getType() === "multipletextitem"
          ? surveyElement.editorValue.customWidgetData
          : surveyElement.customWidgetData;
      el.oninput = function () {
        customWidgetData.isNeedRender = true;
      };

      var pushValueHandler = function () {
        if (!el.inputmask) return;
        if (el.inputmask.isComplete()) {
          surveyElement.value = options.autoUnmask
            ? el.inputmask.unmaskedvalue()
            : el.value;
        } else {
          surveyElement.value = null;
        }
      };
      el.onfocusout = el.onchange = pushValueHandler;

      var updateHandler = function () {
        el.value =
          surveyElement.value === undefined || surveyElement.value === null
            ? ""
            : surveyElement.value;
      };
      surveyElement.valueChangedCallback = updateHandler;
      updateHandler();
    },
    afterRender: function (question, el) {
      if (question.getType() != "multipletext") {
        var input = el.querySelector("input") || el;
        this.applyInputMask(question, input);
      } else {
        for (var i = 0; i < question.items.length; i++) {
          var item = question.items[i];
          if (item.inputMask != "none" || item.inputFormat) {
            var input = el.querySelector("#" + item.editor.inputId);
            if (input) {
              this.applyInputMask(item, input);
            }
          }
        }
      }
    },
    willUnmount: function (question, el) {
      var input = el.querySelector("input") || el;
      if (!!input && !!input.inputmask) {
        input.inputmask.remove();
      }
    },
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYzllZmYxNzI1ODliYzM1ZGE5NiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXRtYXNrLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJJbnB1dG1hc2tcIixcImNvbW1vbmpzMlwiOlwiaW5wdXRtYXNrXCIsXCJjb21tb25qc1wiOlwiaW5wdXRtYXNrXCIsXCJhbWRcIjpcImlucHV0bWFza1wifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBUztBQUM3QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywyQ0FBMkM7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLGlEQUFTOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUM7Ozs7Ozs7QUM3S3BCLCtDIiwiZmlsZSI6IndpZGdldHMvaW5wdXRtYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiaW5wdXRtYXNrXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9pbnB1dG1hc2tcIiwgW1wiaW5wdXRtYXNrXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvaW5wdXRtYXNrXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiaW5wdXRtYXNrXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aWRnZXRzL2lucHV0bWFza1wiXSA9IGZhY3Rvcnkocm9vdFtcIklucHV0bWFza1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmM5ZWZmMTcyNTg5YmMzNWRhOTYiLCJpbXBvcnQgSW5wdXRtYXNrIGZyb20gXCJpbnB1dG1hc2tcIjtcblxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBuYW1lOiBcIm1hc2tlZGl0XCIsXG4gICAgbnVtZXJpY0dyb3VwU2VwYXJhdG9yOiBcIixcIixcbiAgICBudW1lcmljQXV0b0dyb3VwOiB0cnVlLFxuICAgIG51bWVyaWNEaWdpdHM6IDIsXG4gICAgbnVtZXJpY0RpZ2l0c09wdGlvbmFsOiBmYWxzZSxcbiAgICBudW1lcmljUGxhY2Vob2xkZXI6IFwiMFwiLFxuICAgIGF1dG9Vbm1hc2s6IHRydWUsXG4gICAgY2xlYXJJbmNvbXBsZXRlOiB0cnVlLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIElucHV0bWFzayAhPSBcInVuZGVmaW5lZFwiO1xuICAgIH0sXG4gICAgaXNGaXQ6IGZ1bmN0aW9uIChxdWVzdGlvbikge1xuICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PSBcIm11bHRpcGxldGV4dFwiKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHF1ZXN0aW9uLmdldFR5cGUoKSA9PSBcInRleHRcIiAmJlxuICAgICAgICAocXVlc3Rpb24uaW5wdXRNYXNrICE9IFwibm9uZVwiIHx8IHF1ZXN0aW9uLmlucHV0Rm9ybWF0KVxuICAgICAgKTtcbiAgICB9LFxuICAgIGlzRGVmYXVsdFJlbmRlcjogdHJ1ZSxcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uIChhY3RpdmF0ZWRCeSkge1xuICAgICAgaWYgKFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmZpbmRQcm9wZXJ0eShcInRleHRcIiwgXCJpbnB1dE1hc2tcIikpIHJldHVybjtcbiAgICAgIHZhciBwcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFwiaW5wdXRGb3JtYXRcIiwgY2F0ZWdvcnk6IFwiZ2VuZXJhbFwiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInByZWZpeFwiLFxuICAgICAgICAgIGNhdGVnb3J5OiBcImdlbmVyYWxcIixcblxuICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJhdXRvVW5tYXNrOmJvb2xlYW5cIixcbiAgICAgICAgICBjYXRlZ29yeTogXCJnZW5lcmFsXCIsXG4gICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiY2xlYXJJbmNvbXBsZXRlOmJvb2xlYW5cIixcbiAgICAgICAgICBjYXRlZ29yeTogXCJnZW5lcmFsXCIsXG4gICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiaW5wdXRNYXNrXCIsXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiZ2VuZXJhbFwiLFxuICAgICAgICAgIGRlZmF1bHQ6IFwibm9uZVwiLFxuICAgICAgICAgIGNob2ljZXM6IFtcbiAgICAgICAgICAgIFwibm9uZVwiLFxuICAgICAgICAgICAgXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgXCJjdXJyZW5jeVwiLFxuICAgICAgICAgICAgXCJkZWNpbWFsXCIsXG4gICAgICAgICAgICBcImVtYWlsXCIsXG4gICAgICAgICAgICBcInBob25lXCIsXG4gICAgICAgICAgICBcImlwXCIsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwidGV4dFwiLCBwcm9wZXJ0aWVzKTtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25jb2x1bW5cIixcbiAgICAgICAgcHJvcGVydGllc1xuICAgICAgKTtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJtdWx0aXBsZXRleHRpdGVtXCIsIHByb3BlcnRpZXMpO1xuICAgIH0sXG4gICAgYXBwbHlJbnB1dE1hc2s6IGZ1bmN0aW9uIChzdXJ2ZXlFbGVtZW50LCBlbCkge1xuICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xuICAgICAgdmFyIG1hc2sgPVxuICAgICAgICBzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayAhPSBcIm5vbmVcIlxuICAgICAgICAgID8gc3VydmV5RWxlbWVudC5pbnB1dE1hc2tcbiAgICAgICAgICA6IHN1cnZleUVsZW1lbnQuaW5wdXRGb3JtYXQ7XG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgYXV0b1VubWFzazpcbiAgICAgICAgICB0eXBlb2Ygc3VydmV5RWxlbWVudC5hdXRvVW5tYXNrICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICA/IHN1cnZleUVsZW1lbnQuYXV0b1VubWFza1xuICAgICAgICAgICAgOiByb290V2lkZ2V0LmF1dG9Vbm1hc2ssXG4gICAgICAgIGNsZWFySW5jb21wbGV0ZTpcbiAgICAgICAgICAgIHR5cGVvZiBzdXJ2ZXlFbGVtZW50LmNsZWFySW5jb21wbGV0ZSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgICA/IHN1cnZleUVsZW1lbnQuY2xlYXJJbmNvbXBsZXRlXG4gICAgICAgICAgICAgIDogcm9vdFdpZGdldC5jbGVhckluY29tcGxldGUsXG4gICAgICAgIH07XG4gICAgICBpZiAoc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgIT0gXCJub25lXCIpXG4gICAgICAgIG9wdGlvbnMuaW5wdXRGb3JtYXQgPSBzdXJ2ZXlFbGVtZW50LmlucHV0Rm9ybWF0O1xuXG4gICAgICBpZiAoXG4gICAgICAgIHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiY3VycmVuY3lcIiB8fFxuICAgICAgICBzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImRlY2ltYWxcIlxuICAgICAgKSB7XG4gICAgICAgIG9wdGlvbnMuZ3JvdXBTZXBhcmF0b3IgPSByb290V2lkZ2V0Lm51bWVyaWNHcm91cFNlcGFyYXRvcjtcbiAgICAgICAgb3B0aW9ucy5hdXRvR3JvdXAgPSByb290V2lkZ2V0Lm51bWVyaWNBdXRvR3JvdXA7XG4gICAgICB9XG4gICAgICBpZiAoc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgPT0gXCJjdXJyZW5jeVwiKSB7XG4gICAgICAgIG9wdGlvbnMuZGlnaXRzID0gcm9vdFdpZGdldC5udW1lcmljRGlnaXRzO1xuICAgICAgICBvcHRpb25zLmRpZ2l0c09wdGlvbmFsID0gcm9vdFdpZGdldC5udW1lcmljRGlnaXRzT3B0aW9uYWw7XG4gICAgICAgIG9wdGlvbnMucHJlZml4ID0gc3VydmV5RWxlbWVudC5wcmVmaXggfHwgXCJcIjtcbiAgICAgICAgb3B0aW9ucy5wbGFjZWhvbGRlciA9IHJvb3RXaWRnZXQubnVtZXJpY1BsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgICAgLy8gaWYgKHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiZGF0ZXRpbWVcIikge1xuICAgICAgLy8gICBtYXNrID0gc3VydmV5RWxlbWVudC5pbnB1dEZvcm1hdDtcbiAgICAgIC8vIH1cbiAgICAgIGlmIChzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcInBob25lXCIgJiYgISFzdXJ2ZXlFbGVtZW50LmlucHV0Rm9ybWF0KSB7XG4gICAgICAgIG1hc2sgPSBzdXJ2ZXlFbGVtZW50LmlucHV0Rm9ybWF0O1xuICAgICAgfVxuXG4gICAgICBJbnB1dG1hc2sobWFzaywgb3B0aW9ucykubWFzayhlbCk7XG5cbiAgICAgIGVsLm9uYmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFlbC5pbnB1dG1hc2spIHJldHVybjtcbiAgICAgICAgaWYgKHN1cnZleUVsZW1lbnQudmFsdWUgPT09IGVsLmlucHV0bWFzay5nZXRlbXB0eW1hc2soKSkge1xuICAgICAgICAgIHN1cnZleUVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgY3VzdG9tV2lkZ2V0RGF0YSA9XG4gICAgICAgIHN1cnZleUVsZW1lbnQuZ2V0VHlwZSgpID09PSBcIm11bHRpcGxldGV4dGl0ZW1cIlxuICAgICAgICAgID8gc3VydmV5RWxlbWVudC5lZGl0b3JWYWx1ZS5jdXN0b21XaWRnZXREYXRhXG4gICAgICAgICAgOiBzdXJ2ZXlFbGVtZW50LmN1c3RvbVdpZGdldERhdGE7XG4gICAgICBlbC5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjdXN0b21XaWRnZXREYXRhLmlzTmVlZFJlbmRlciA9IHRydWU7XG4gICAgICB9O1xuXG4gICAgICB2YXIgcHVzaFZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFlbC5pbnB1dG1hc2spIHJldHVybjtcbiAgICAgICAgaWYgKGVsLmlucHV0bWFzay5pc0NvbXBsZXRlKCkpIHtcbiAgICAgICAgICBzdXJ2ZXlFbGVtZW50LnZhbHVlID0gb3B0aW9ucy5hdXRvVW5tYXNrXG4gICAgICAgICAgICA/IGVsLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKClcbiAgICAgICAgICAgIDogZWwudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VydmV5RWxlbWVudC52YWx1ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBlbC5vbmZvY3Vzb3V0ID0gZWwub25jaGFuZ2UgPSBwdXNoVmFsdWVIYW5kbGVyO1xuXG4gICAgICB2YXIgdXBkYXRlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWwudmFsdWUgPVxuICAgICAgICAgIHN1cnZleUVsZW1lbnQudmFsdWUgPT09IHVuZGVmaW5lZCB8fCBzdXJ2ZXlFbGVtZW50LnZhbHVlID09PSBudWxsXG4gICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgIDogc3VydmV5RWxlbWVudC52YWx1ZTtcbiAgICAgIH07XG4gICAgICBzdXJ2ZXlFbGVtZW50LnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlSGFuZGxlcjtcbiAgICAgIHVwZGF0ZUhhbmRsZXIoKTtcbiAgICB9LFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XG4gICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpICE9IFwibXVsdGlwbGV0ZXh0XCIpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcImlucHV0XCIpIHx8IGVsO1xuICAgICAgICB0aGlzLmFwcGx5SW5wdXRNYXNrKHF1ZXN0aW9uLCBpbnB1dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXN0aW9uLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBxdWVzdGlvbi5pdGVtc1tpXTtcbiAgICAgICAgICBpZiAoaXRlbS5pbnB1dE1hc2sgIT0gXCJub25lXCIgfHwgaXRlbS5pbnB1dEZvcm1hdCkge1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcIiNcIiArIGl0ZW0uZWRpdG9yLmlucHV0SWQpO1xuICAgICAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICAgIHRoaXMuYXBwbHlJbnB1dE1hc2soaXRlbSwgaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSB8fCBlbDtcbiAgICAgIGlmICghIWlucHV0ICYmICEhaW5wdXQuaW5wdXRtYXNrKSB7XG4gICAgICAgIGlucHV0LmlucHV0bWFzay5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbnB1dG1hc2suanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIklucHV0bWFza1wiLFwiY29tbW9uanMyXCI6XCJpbnB1dG1hc2tcIixcImNvbW1vbmpzXCI6XCJpbnB1dG1hc2tcIixcImFtZFwiOlwiaW5wdXRtYXNrXCJ9XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0Il0sInNvdXJjZVJvb3QiOiIifQ==