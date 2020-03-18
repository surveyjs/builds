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
function escValue(val) {
  if (typeof val === "string") {
    return (val || "").replace(/(['])/g, "\\$1");
  }
  return val;
}

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

      $el.find(".sv-item__decorator").hide();

      $el.find("input").data({
        iCheck: undefined
      });
      function getIndexByValue(arr, value) {
        if (!Array.isArray(arr)) return -1;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] == value) return i;
          if (!!arr[i] && arr[i].toString().toLowerCase() == value) return i;
        }
        return -1;
      }
      var frozeUpdating = false;
      var makeChoicesICheck = function() {
        var inputs = $el.find("input");
        inputs.iCheck({
          checkboxClass:
            question.checkboxClass ||
            rootWidget.checkboxClass ||
            rootWidget.className,
          radioClass:
            question.radioClass || rootWidget.radioClass || rootWidget.className
        });
        inputs.on("ifChecked", function(event) {
          if (frozeUpdating) return;
          if (question.getType() === "matrix") {
            question.generatedVisibleRows.forEach(function(row, index, rows) {
              if (row.fullName === event.target.name) {
                row.value = event.target.value;
              }
            });
          } else if (question.getType() === "checkbox") {
            var oldValue = question.value || [];
            var index = getIndexByValue(oldValue, event.target.value);
            if (index === -1) {
              question.value = oldValue.concat([event.target.value]);
            }
          } else {
            question.value = event.target.value;
          }
        });

        inputs.on("ifUnchecked", function(event) {
          if (frozeUpdating) return;
          if (question.getType() === "checkbox") {
            var oldValue = (question.value || []).slice();
            var index = getIndexByValue(oldValue, event.target.value);
            if (index >= 0) {
              oldValue.splice(index, 1);
              question.value = oldValue;
            }
          }
        });
      };
      function uncheckIcheck(cEl) {
        cEl.iCheck("uncheck");
        cEl[0].parentElement.classList.remove("checked");
      }
      var select = function() {
        frozeUpdating = true;
        if (question.getType() !== "matrix") {
          var values = question.value;
          if (!Array.isArray(values)) {
            values = [values];
          }
          if (question.getType() == "checkbox") {
            var qValue = question.value;
            question.visibleChoices.forEach(function(item) {
              var inEl = $el.find(
                "input[value='" + escValue(item.value) + "']"
              );
              if (!inEl) return;
              var isChecked = getIndexByValue(qValue, item.value) > -1;
              if (isChecked) {
                inEl.iCheck("check");
              } else {
                var cEl = inEl[0];
                var wasChecked = !!cEl["checked"];
                if (wasChecked) {
                  inEl.removeAttr("checked");
                  if (!inEl.parent().hasClass("checked"))
                    setTimeout(function() {
                      uncheckIcheck(inEl);
                    });
                  else uncheckIcheck(inEl);
                }
              }
            });
          } else {
            values.forEach(function(value) {
              $el
                .find("input[value='" + escValue(value) + "']")
                .iCheck("check");
            });
          }
        } else {
          question.generatedVisibleRows.forEach(function(row, index, rows) {
            if (row.value) {
              $(el)
                .find(
                  "input[name='" +
                    row.fullName +
                    "'][value='" +
                    escValue(row.value) +
                    "']"
                )
                .iCheck("check");
            }
          });
        }
        frozeUpdating = false;
      };
      makeChoicesICheck();

      question.visibleChoicesChangedCallback = function() {
        makeChoicesICheck();
        $el.find(".sv-item__decorator").hide();
      };
      question.valueChangedCallback = select;
      select();
    },
    willUnmount: function(question, el) {
      var $el = $(el);
      $el.find("input").iCheck("destroy");
      question.visibleChoicesChangedCallback = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzYzMwY2M3NTU1YWY1NThhMzgzYiIsIndlYnBhY2s6Ly8vLi9zcmMvaWNoZWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQyIsImZpbGUiOiJ3aWRnZXRzL2ljaGVjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9pY2hlY2tcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2lkZ2V0cy9pY2hlY2tcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid2lkZ2V0cy9pY2hlY2tcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNjMzBjYzc1NTVhZjU1OGEzODNiIiwiZnVuY3Rpb24gZXNjVmFsdWUodmFsKSB7XG4gIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuICh2YWwgfHwgXCJcIikucmVwbGFjZSgvKFsnXSkvZywgXCJcXFxcJDFcIik7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcbiAgJCA9ICQgfHwgd2luZG93LiQ7XG4gIHZhciB3aWRnZXQgPSB7XG4gICAgY2xhc3NOYW1lOiBcImlyYWRpb19zcXVhcmUtYmx1ZVwiLFxuICAgIGNoZWNrYm94Q2xhc3M6IFwiaXJhZGlvX3NxdWFyZS1ibHVlXCIsXG4gICAgcmFkaW9DbGFzczogXCJpcmFkaW9fc3F1YXJlLWJsdWVcIixcbiAgICBuYW1lOiBcImljaGVja1wiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLmlDaGVjaztcbiAgICB9LFxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgICAgdmFyIHQgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XG4gICAgICByZXR1cm4gdCA9PT0gXCJyYWRpb2dyb3VwXCIgfHwgdCA9PT0gXCJjaGVja2JveFwiIHx8IHQgPT09IFwibWF0cml4XCI7XG4gICAgfSxcbiAgICBpc0RlZmF1bHRSZW5kZXI6IHRydWUsXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xuICAgICAgdmFyICRlbCA9ICQoZWwpO1xuXG4gICAgICAkZWwuZmluZChcIi5zdi1pdGVtX19kZWNvcmF0b3JcIikuaGlkZSgpO1xuXG4gICAgICAkZWwuZmluZChcImlucHV0XCIpLmRhdGEoe1xuICAgICAgICBpQ2hlY2s6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgICBmdW5jdGlvbiBnZXRJbmRleEJ5VmFsdWUoYXJyLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIC0xO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhcnJbaV0gPT0gdmFsdWUpIHJldHVybiBpO1xuICAgICAgICAgIGlmICghIWFycltpXSAmJiBhcnJbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09IHZhbHVlKSByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICB2YXIgZnJvemVVcGRhdGluZyA9IGZhbHNlO1xuICAgICAgdmFyIG1ha2VDaG9pY2VzSUNoZWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpbnB1dHMgPSAkZWwuZmluZChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dHMuaUNoZWNrKHtcbiAgICAgICAgICBjaGVja2JveENsYXNzOlxuICAgICAgICAgICAgcXVlc3Rpb24uY2hlY2tib3hDbGFzcyB8fFxuICAgICAgICAgICAgcm9vdFdpZGdldC5jaGVja2JveENsYXNzIHx8XG4gICAgICAgICAgICByb290V2lkZ2V0LmNsYXNzTmFtZSxcbiAgICAgICAgICByYWRpb0NsYXNzOlxuICAgICAgICAgICAgcXVlc3Rpb24ucmFkaW9DbGFzcyB8fCByb290V2lkZ2V0LnJhZGlvQ2xhc3MgfHwgcm9vdFdpZGdldC5jbGFzc05hbWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlucHV0cy5vbihcImlmQ2hlY2tlZFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIGlmIChmcm96ZVVwZGF0aW5nKSByZXR1cm47XG4gICAgICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJtYXRyaXhcIikge1xuICAgICAgICAgICAgcXVlc3Rpb24uZ2VuZXJhdGVkVmlzaWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbihyb3csIGluZGV4LCByb3dzKSB7XG4gICAgICAgICAgICAgIGlmIChyb3cuZnVsbE5hbWUgPT09IGV2ZW50LnRhcmdldC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgcm93LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBxdWVzdGlvbi52YWx1ZSB8fCBbXTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlWYWx1ZShvbGRWYWx1ZSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBvbGRWYWx1ZS5jb25jYXQoW2V2ZW50LnRhcmdldC52YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlucHV0cy5vbihcImlmVW5jaGVja2VkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGZyb3plVXBkYXRpbmcpIHJldHVybjtcbiAgICAgICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IChxdWVzdGlvbi52YWx1ZSB8fCBbXSkuc2xpY2UoKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlWYWx1ZShvbGRWYWx1ZSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIG9sZFZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gb2xkVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBmdW5jdGlvbiB1bmNoZWNrSWNoZWNrKGNFbCkge1xuICAgICAgICBjRWwuaUNoZWNrKFwidW5jaGVja1wiKTtcbiAgICAgICAgY0VsWzBdLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrZWRcIik7XG4gICAgICB9XG4gICAgICB2YXIgc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZyb3plVXBkYXRpbmcgPSB0cnVlO1xuICAgICAgICBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpICE9PSBcIm1hdHJpeFwiKSB7XG4gICAgICAgICAgdmFyIHZhbHVlcyA9IHF1ZXN0aW9uLnZhbHVlO1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICAgIHZhciBxVmFsdWUgPSBxdWVzdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICB2YXIgaW5FbCA9ICRlbC5maW5kKFxuICAgICAgICAgICAgICAgIFwiaW5wdXRbdmFsdWU9J1wiICsgZXNjVmFsdWUoaXRlbS52YWx1ZSkgKyBcIiddXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKCFpbkVsKSByZXR1cm47XG4gICAgICAgICAgICAgIHZhciBpc0NoZWNrZWQgPSBnZXRJbmRleEJ5VmFsdWUocVZhbHVlLCBpdGVtLnZhbHVlKSA+IC0xO1xuICAgICAgICAgICAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgaW5FbC5pQ2hlY2soXCJjaGVja1wiKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY0VsID0gaW5FbFswXTtcbiAgICAgICAgICAgICAgICB2YXIgd2FzQ2hlY2tlZCA9ICEhY0VsW1wiY2hlY2tlZFwiXTtcbiAgICAgICAgICAgICAgICBpZiAod2FzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgaW5FbC5yZW1vdmVBdHRyKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgICAgICAgIGlmICghaW5FbC5wYXJlbnQoKS5oYXNDbGFzcyhcImNoZWNrZWRcIikpXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdW5jaGVja0ljaGVjayhpbkVsKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBlbHNlIHVuY2hlY2tJY2hlY2soaW5FbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgJGVsXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFt2YWx1ZT0nXCIgKyBlc2NWYWx1ZSh2YWx1ZSkgKyBcIiddXCIpXG4gICAgICAgICAgICAgICAgLmlDaGVjayhcImNoZWNrXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXN0aW9uLmdlbmVyYXRlZFZpc2libGVSb3dzLmZvckVhY2goZnVuY3Rpb24ocm93LCBpbmRleCwgcm93cykge1xuICAgICAgICAgICAgaWYgKHJvdy52YWx1ZSkge1xuICAgICAgICAgICAgICAkKGVsKVxuICAgICAgICAgICAgICAgIC5maW5kKFxuICAgICAgICAgICAgICAgICAgXCJpbnB1dFtuYW1lPSdcIiArXG4gICAgICAgICAgICAgICAgICAgIHJvdy5mdWxsTmFtZSArXG4gICAgICAgICAgICAgICAgICAgIFwiJ11bdmFsdWU9J1wiICtcbiAgICAgICAgICAgICAgICAgICAgZXNjVmFsdWUocm93LnZhbHVlKSArXG4gICAgICAgICAgICAgICAgICAgIFwiJ11cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuaUNoZWNrKFwiY2hlY2tcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnJvemVVcGRhdGluZyA9IGZhbHNlO1xuICAgICAgfTtcbiAgICAgIG1ha2VDaG9pY2VzSUNoZWNrKCk7XG5cbiAgICAgIHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1ha2VDaG9pY2VzSUNoZWNrKCk7XG4gICAgICAgICRlbC5maW5kKFwiLnN2LWl0ZW1fX2RlY29yYXRvclwiKS5oaWRlKCk7XG4gICAgICB9O1xuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBzZWxlY3Q7XG4gICAgICBzZWxlY3QoKTtcbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcbiAgICAgICRlbC5maW5kKFwiaW5wdXRcIikuaUNoZWNrKFwiZGVzdHJveVwiKTtcbiAgICAgIHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzQ2hhbmdlZENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJyYWRpb2dyb3VwXCIsIFwicmFkaW9DbGFzc1wiKTtcbiAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJjaGVja2JveFwiLCBcImNoZWNrYm94Q2xhc3NcIik7XG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwidHlwZVwiKTtcbn1cblxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaW5pdChTdXJ2ZXksIHdpbmRvdy4kKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ljaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTIiXSwic291cmNlUm9vdCI6IiJ9