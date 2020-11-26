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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZGIyMTNkMDY1YzNkODAxNzg0OSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXRtYXNrLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJJbnB1dG1hc2tcIixcImNvbW1vbmpzMlwiOlwiaW5wdXRtYXNrXCIsXCJjb21tb25qc1wiOlwiaW5wdXRtYXNrXCIsXCJhbWRcIjpcImlucHV0bWFza1wifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBUztBQUM3QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywyQ0FBMkM7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLGlEQUFTOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUM7Ozs7Ozs7QUM3S3BCLCtDIiwiZmlsZSI6IndpZGdldHMvaW5wdXRtYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiaW5wdXRtYXNrXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9pbnB1dG1hc2tcIiwgW1wiaW5wdXRtYXNrXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvaW5wdXRtYXNrXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiaW5wdXRtYXNrXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aWRnZXRzL2lucHV0bWFza1wiXSA9IGZhY3Rvcnkocm9vdFtcIklucHV0bWFza1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmRiMjEzZDA2NWMzZDgwMTc4NDkiLCJpbXBvcnQgSW5wdXRtYXNrIGZyb20gXCJpbnB1dG1hc2tcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwibWFza2VkaXRcIixcclxuICAgIG51bWVyaWNHcm91cFNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICBudW1lcmljQXV0b0dyb3VwOiB0cnVlLFxyXG4gICAgbnVtZXJpY0RpZ2l0czogMixcclxuICAgIG51bWVyaWNEaWdpdHNPcHRpb25hbDogZmFsc2UsXHJcbiAgICBudW1lcmljUGxhY2Vob2xkZXI6IFwiMFwiLFxyXG4gICAgYXV0b1VubWFzazogdHJ1ZSxcclxuICAgIGNsZWFySW5jb21wbGV0ZTogdHJ1ZSxcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgSW5wdXRtYXNrICE9IFwidW5kZWZpbmVkXCI7XHJcbiAgICB9LFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uIChxdWVzdGlvbikge1xyXG4gICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09IFwibXVsdGlwbGV0ZXh0XCIpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIHF1ZXN0aW9uLmdldFR5cGUoKSA9PSBcInRleHRcIiAmJlxyXG4gICAgICAgIChxdWVzdGlvbi5pbnB1dE1hc2sgIT0gXCJub25lXCIgfHwgcXVlc3Rpb24uaW5wdXRGb3JtYXQpXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbiAoYWN0aXZhdGVkQnkpIHtcclxuICAgICAgaWYgKFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmZpbmRQcm9wZXJ0eShcInRleHRcIiwgXCJpbnB1dE1hc2tcIikpIHJldHVybjtcclxuICAgICAgdmFyIHByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBcImlucHV0Rm9ybWF0XCIsIGNhdGVnb3J5OiBcImdlbmVyYWxcIiB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwicHJlZml4XCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJnZW5lcmFsXCIsXHJcblxyXG4gICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImF1dG9Vbm1hc2s6Ym9vbGVhblwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiZ2VuZXJhbFwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiY2xlYXJJbmNvbXBsZXRlOmJvb2xlYW5cIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcImdlbmVyYWxcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImlucHV0TWFza1wiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiZ2VuZXJhbFwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogXCJub25lXCIsXHJcbiAgICAgICAgICBjaG9pY2VzOiBbXHJcbiAgICAgICAgICAgIFwibm9uZVwiLFxyXG4gICAgICAgICAgICBcImRhdGV0aW1lXCIsXHJcbiAgICAgICAgICAgIFwiY3VycmVuY3lcIixcclxuICAgICAgICAgICAgXCJkZWNpbWFsXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiLFxyXG4gICAgICAgICAgICBcImlwXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF07XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJ0ZXh0XCIsIHByb3BlcnRpZXMpO1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFxyXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25jb2x1bW5cIixcclxuICAgICAgICBwcm9wZXJ0aWVzXHJcbiAgICAgICk7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJtdWx0aXBsZXRleHRpdGVtXCIsIHByb3BlcnRpZXMpO1xyXG4gICAgfSxcclxuICAgIGFwcGx5SW5wdXRNYXNrOiBmdW5jdGlvbiAoc3VydmV5RWxlbWVudCwgZWwpIHtcclxuICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xyXG4gICAgICB2YXIgbWFzayA9XHJcbiAgICAgICAgc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgIT0gXCJub25lXCJcclxuICAgICAgICAgID8gc3VydmV5RWxlbWVudC5pbnB1dE1hc2tcclxuICAgICAgICAgIDogc3VydmV5RWxlbWVudC5pbnB1dEZvcm1hdDtcclxuICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgYXV0b1VubWFzazpcclxuICAgICAgICAgIHR5cGVvZiBzdXJ2ZXlFbGVtZW50LmF1dG9Vbm1hc2sgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgPyBzdXJ2ZXlFbGVtZW50LmF1dG9Vbm1hc2tcclxuICAgICAgICAgICAgOiByb290V2lkZ2V0LmF1dG9Vbm1hc2ssXHJcbiAgICAgICAgY2xlYXJJbmNvbXBsZXRlOlxyXG4gICAgICAgICAgICB0eXBlb2Ygc3VydmV5RWxlbWVudC5jbGVhckluY29tcGxldGUgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICA/IHN1cnZleUVsZW1lbnQuY2xlYXJJbmNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgOiByb290V2lkZ2V0LmNsZWFySW5jb21wbGV0ZSxcclxuICAgICAgICB9O1xyXG4gICAgICBpZiAoc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgIT0gXCJub25lXCIpXHJcbiAgICAgICAgb3B0aW9ucy5pbnB1dEZvcm1hdCA9IHN1cnZleUVsZW1lbnQuaW5wdXRGb3JtYXQ7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgPT0gXCJjdXJyZW5jeVwiIHx8XHJcbiAgICAgICAgc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgPT0gXCJkZWNpbWFsXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgb3B0aW9ucy5ncm91cFNlcGFyYXRvciA9IHJvb3RXaWRnZXQubnVtZXJpY0dyb3VwU2VwYXJhdG9yO1xyXG4gICAgICAgIG9wdGlvbnMuYXV0b0dyb3VwID0gcm9vdFdpZGdldC5udW1lcmljQXV0b0dyb3VwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImN1cnJlbmN5XCIpIHtcclxuICAgICAgICBvcHRpb25zLmRpZ2l0cyA9IHJvb3RXaWRnZXQubnVtZXJpY0RpZ2l0cztcclxuICAgICAgICBvcHRpb25zLmRpZ2l0c09wdGlvbmFsID0gcm9vdFdpZGdldC5udW1lcmljRGlnaXRzT3B0aW9uYWw7XHJcbiAgICAgICAgb3B0aW9ucy5wcmVmaXggPSBzdXJ2ZXlFbGVtZW50LnByZWZpeCB8fCBcIlwiO1xyXG4gICAgICAgIG9wdGlvbnMucGxhY2Vob2xkZXIgPSByb290V2lkZ2V0Lm51bWVyaWNQbGFjZWhvbGRlcjtcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiAoc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgPT0gXCJkYXRldGltZVwiKSB7XHJcbiAgICAgIC8vICAgbWFzayA9IHN1cnZleUVsZW1lbnQuaW5wdXRGb3JtYXQ7XHJcbiAgICAgIC8vIH1cclxuICAgICAgaWYgKHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwicGhvbmVcIiAmJiAhIXN1cnZleUVsZW1lbnQuaW5wdXRGb3JtYXQpIHtcclxuICAgICAgICBtYXNrID0gc3VydmV5RWxlbWVudC5pbnB1dEZvcm1hdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgSW5wdXRtYXNrKG1hc2ssIG9wdGlvbnMpLm1hc2soZWwpO1xyXG5cclxuICAgICAgZWwub25ibHVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghZWwuaW5wdXRtYXNrKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHN1cnZleUVsZW1lbnQudmFsdWUgPT09IGVsLmlucHV0bWFzay5nZXRlbXB0eW1hc2soKSkge1xyXG4gICAgICAgICAgc3VydmV5RWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIGN1c3RvbVdpZGdldERhdGEgPVxyXG4gICAgICAgIHN1cnZleUVsZW1lbnQuZ2V0VHlwZSgpID09PSBcIm11bHRpcGxldGV4dGl0ZW1cIlxyXG4gICAgICAgICAgPyBzdXJ2ZXlFbGVtZW50LmVkaXRvclZhbHVlLmN1c3RvbVdpZGdldERhdGFcclxuICAgICAgICAgIDogc3VydmV5RWxlbWVudC5jdXN0b21XaWRnZXREYXRhO1xyXG4gICAgICBlbC5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGN1c3RvbVdpZGdldERhdGEuaXNOZWVkUmVuZGVyID0gdHJ1ZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZhciBwdXNoVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghZWwuaW5wdXRtYXNrKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGVsLmlucHV0bWFzay5pc0NvbXBsZXRlKCkpIHtcclxuICAgICAgICAgIHN1cnZleUVsZW1lbnQudmFsdWUgPSBvcHRpb25zLmF1dG9Vbm1hc2tcclxuICAgICAgICAgICAgPyBlbC5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpXHJcbiAgICAgICAgICAgIDogZWwudmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN1cnZleUVsZW1lbnQudmFsdWUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgZWwub25mb2N1c291dCA9IGVsLm9uY2hhbmdlID0gcHVzaFZhbHVlSGFuZGxlcjtcclxuXHJcbiAgICAgIHZhciB1cGRhdGVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGVsLnZhbHVlID1cclxuICAgICAgICAgIHN1cnZleUVsZW1lbnQudmFsdWUgPT09IHVuZGVmaW5lZCB8fCBzdXJ2ZXlFbGVtZW50LnZhbHVlID09PSBudWxsXHJcbiAgICAgICAgICAgID8gXCJcIlxyXG4gICAgICAgICAgICA6IHN1cnZleUVsZW1lbnQudmFsdWU7XHJcbiAgICAgIH07XHJcbiAgICAgIHN1cnZleUVsZW1lbnQudmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVIYW5kbGVyO1xyXG4gICAgICB1cGRhdGVIYW5kbGVyKCk7XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSAhPSBcIm11bHRpcGxldGV4dFwiKSB7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcImlucHV0XCIpIHx8IGVsO1xyXG4gICAgICAgIHRoaXMuYXBwbHlJbnB1dE1hc2socXVlc3Rpb24sIGlucHV0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXN0aW9uLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgaXRlbSA9IHF1ZXN0aW9uLml0ZW1zW2ldO1xyXG4gICAgICAgICAgaWYgKGl0ZW0uaW5wdXRNYXNrICE9IFwibm9uZVwiIHx8IGl0ZW0uaW5wdXRGb3JtYXQpIHtcclxuICAgICAgICAgICAgdmFyIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcIiNcIiArIGl0ZW0uZWRpdG9yLmlucHV0SWQpO1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmFwcGx5SW5wdXRNYXNrKGl0ZW0sIGlucHV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSB8fCBlbDtcclxuICAgICAgaWYgKCEhaW5wdXQgJiYgISFpbnB1dC5pbnB1dG1hc2spIHtcclxuICAgICAgICBpbnB1dC5pbnB1dG1hc2sucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCk7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbnB1dG1hc2suanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIklucHV0bWFza1wiLFwiY29tbW9uanMyXCI6XCJpbnB1dG1hc2tcIixcImNvbW1vbmpzXCI6XCJpbnB1dG1hc2tcIixcImFtZFwiOlwiaW5wdXRtYXNrXCJ9XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0Il0sInNvdXJjZVJvb3QiOiIifQ==