(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("widgets/icheck", [], factory);
	else if(typeof exports === 'object')
		exports["widgets/icheck"] = factory();
	else
		root["widgets/icheck"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
            $el.find("input[value='" + value + "']").iCheck("check");
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


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3ZjBlZDAxZDllYzJiYmI1NDkyMCIsIndlYnBhY2s6Ly8vLi9zcmMvaWNoZWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQyIsImZpbGUiOiJ3aWRnZXRzL2ljaGVjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9pY2hlY2tcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2lkZ2V0cy9pY2hlY2tcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid2lkZ2V0cy9pY2hlY2tcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdmMGVkMDFkOWVjMmJiYjU0OTIwIiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcbiAgJCA9ICQgfHwgd2luZG93LiQ7XG4gIHZhciB3aWRnZXQgPSB7XG4gICAgY2xhc3NOYW1lOiBcImlyYWRpb19zcXVhcmUtYmx1ZVwiLFxuICAgIGNoZWNrYm94Q2xhc3M6IFwiaXJhZGlvX3NxdWFyZS1ibHVlXCIsXG4gICAgcmFkaW9DbGFzczogXCJpcmFkaW9fc3F1YXJlLWJsdWVcIixcbiAgICBuYW1lOiBcImljaGVja1wiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLmlDaGVjaztcbiAgICB9LFxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgICAgdmFyIHQgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XG4gICAgICByZXR1cm4gdCA9PT0gXCJyYWRpb2dyb3VwXCIgfHwgdCA9PT0gXCJjaGVja2JveFwiIHx8IHQgPT09IFwibWF0cml4XCI7XG4gICAgfSxcbiAgICBpc0RlZmF1bHRSZW5kZXI6IHRydWUsXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xuICAgICAgdmFyICRlbCA9ICQoZWwpO1xuICAgICAgJGVsLmZpbmQoXCJpbnB1dFwiKS5kYXRhKHtcbiAgICAgICAgaUNoZWNrOiB1bmRlZmluZWRcbiAgICAgIH0pO1xuXG4gICAgICAkZWwuZmluZChcImlucHV0XCIpLmlDaGVjayh7XG4gICAgICAgIGNoZWNrYm94Q2xhc3M6XG4gICAgICAgICAgcXVlc3Rpb24uY2hlY2tib3hDbGFzcyB8fFxuICAgICAgICAgIHJvb3RXaWRnZXQuY2hlY2tib3hDbGFzcyB8fFxuICAgICAgICAgIHJvb3RXaWRnZXQuY2xhc3NOYW1lLFxuICAgICAgICByYWRpb0NsYXNzOlxuICAgICAgICAgIHF1ZXN0aW9uLnJhZGlvQ2xhc3MgfHwgcm9vdFdpZGdldC5yYWRpb0NsYXNzIHx8IHJvb3RXaWRnZXQuY2xhc3NOYW1lXG4gICAgICB9KTtcbiAgICAgIHZhciBzZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSAhPT0gXCJtYXRyaXhcIikge1xuICAgICAgICAgIHZhciB2YWx1ZXMgPSBxdWVzdGlvbi52YWx1ZTtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAkZWwuZmluZChcImlucHV0W3ZhbHVlPSdcIiArIHZhbHVlICsgXCInXVwiKS5pQ2hlY2soXCJjaGVja1wiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVzdGlvbi5nZW5lcmF0ZWRWaXNpYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uKHJvdywgaW5kZXgsIHJvd3MpIHtcbiAgICAgICAgICAgIGlmIChyb3cudmFsdWUpIHtcbiAgICAgICAgICAgICAgJChlbClcbiAgICAgICAgICAgICAgICAuZmluZChcbiAgICAgICAgICAgICAgICAgIFwiaW5wdXRbbmFtZT0nXCIgK1xuICAgICAgICAgICAgICAgICAgICByb3cuZnVsbE5hbWUgK1xuICAgICAgICAgICAgICAgICAgICBcIiddW3ZhbHVlPSdcIiArXG4gICAgICAgICAgICAgICAgICAgIHJvdy52YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgIFwiJ11cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuaUNoZWNrKFwiY2hlY2tcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAkZWwuZmluZChcImlucHV0XCIpLm9uKFwiaWZDaGVja2VkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwibWF0cml4XCIpIHtcbiAgICAgICAgICBxdWVzdGlvbi5nZW5lcmF0ZWRWaXNpYmxlUm93cy5mb3JFYWNoKGZ1bmN0aW9uKHJvdywgaW5kZXgsIHJvd3MpIHtcbiAgICAgICAgICAgIGlmIChyb3cuZnVsbE5hbWUgPT09IGV2ZW50LnRhcmdldC5uYW1lKSB7XG4gICAgICAgICAgICAgIHJvdy52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHF1ZXN0aW9uLnZhbHVlIHx8IFtdO1xuICAgICAgICAgIHZhciBpbmRleCA9IG9sZFZhbHVlLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IG9sZFZhbHVlLmNvbmNhdChbZXZlbnQudGFyZ2V0LnZhbHVlXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICRlbC5maW5kKFwiaW5wdXRcIikub24oXCJpZlVuY2hlY2tlZFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBxdWVzdGlvbi52YWx1ZSB8fCBbXTtcbiAgICAgICAgICB2YXIgaW5kZXggPSBvbGRWYWx1ZS5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHNlbGVjdDtcbiAgICAgIHNlbGVjdCgpO1xuICAgIH0sXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyICRlbCA9ICQoZWwpO1xuICAgICAgJGVsLmZpbmQoXCJpbnB1dFwiKS5pQ2hlY2soXCJkZXN0cm95XCIpO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInJhZGlvZ3JvdXBcIiwgXCJyYWRpb0NsYXNzXCIpO1xuICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImNoZWNrYm94XCIsIFwiY2hlY2tib3hDbGFzc1wiKTtcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJ0eXBlXCIpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSwgd2luZG93LiQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaWNoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxMiJdLCJzb3VyY2VSb290IjoiIn0=