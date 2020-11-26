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
    widgetIsLoaded: function () {
      return typeof $ == "function" && !!$.fn.iCheck;
    },
    isFit: function (question) {
      var t = question.getType();
      return t === "radiogroup" || t === "checkbox" || t === "matrix";
    },
    isDefaultRender: true,
    afterRender: function (question, el) {
      var rootWidget = this;
      var $el = $(el);

      $el.find(".sv-item__decorator").hide();

      $el.find("input").data({
        iCheck: undefined,
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
      var makeChoicesICheck = function () {
        var inputs = $el.find("input");
        inputs.iCheck({
          checkboxClass:
            question.checkboxClass ||
            rootWidget.checkboxClass ||
            rootWidget.className,
          radioClass:
            question.radioClass ||
            rootWidget.radioClass ||
            rootWidget.className,
        });
        inputs.on("ifChecked", function (event) {
          if (frozeUpdating) return;
          if (question.getType() === "matrix") {
            question.generatedVisibleRows.forEach(function (row, index, rows) {
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

        inputs.on("ifUnchecked", function (event) {
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
      var select = function () {
        frozeUpdating = true;
        if (question.getType() !== "matrix") {
          var values = question.value;
          if (!Array.isArray(values)) {
            values = [values];
          }
          if (question.getType() == "checkbox") {
            var qValue = question.value;
            question.visibleChoices.forEach(function (item) {
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
                    setTimeout(function () {
                      uncheckIcheck(inEl);
                    });
                  else uncheckIcheck(inEl);
                }
              }
            });
          } else {
            values.forEach(function (value) {
              $el
                .find("input[value='" + escValue(value) + "']")
                .iCheck("check");
            });
          }
        } else {
          question.generatedVisibleRows.forEach(function (row, index, rows) {
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

      question.visibleChoicesChangedCallback = function () {
        makeChoicesICheck();
        $el.find(".sv-item__decorator").hide();
      };
      question.valueChangedCallback = select;
      select();
    },
    willUnmount: function (question, el) {
      var $el = $(el);
      $el.find("input").iCheck("destroy");
      question.visibleChoicesChangedCallback = null;
    },
  };

  Survey.JsonObject.metaData.addProperty("radiogroup", {
    name: "radioClass",
    category: "general",
  });
  Survey.JsonObject.metaData.addProperty("checkbox", {
    name: "checkboxClass",
    category: "general",
  });
  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "type");
}

if (typeof Survey !== "undefined") {
  init(Survey, window.$);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZGIyMTNkMDY1YzNkODAxNzg0OSIsIndlYnBhY2s6Ly8vLi9zcmMvaWNoZWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUMiLCJmaWxlIjoid2lkZ2V0cy9pY2hlY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndpZGdldHMvaWNoZWNrXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvaWNoZWNrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndpZGdldHMvaWNoZWNrXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZGIyMTNkMDY1YzNkODAxNzg0OSIsImZ1bmN0aW9uIGVzY1ZhbHVlKHZhbCkge1xyXG4gIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gKHZhbCB8fCBcIlwiKS5yZXBsYWNlKC8oWyddKS9nLCBcIlxcXFwkMVwiKTtcclxuICB9XHJcbiAgcmV0dXJuIHZhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcclxuICAkID0gJCB8fCB3aW5kb3cuJDtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcImlyYWRpb19zcXVhcmUtYmx1ZVwiLFxyXG4gICAgY2hlY2tib3hDbGFzczogXCJpcmFkaW9fc3F1YXJlLWJsdWVcIixcclxuICAgIHJhZGlvQ2xhc3M6IFwiaXJhZGlvX3NxdWFyZS1ibHVlXCIsXHJcbiAgICBuYW1lOiBcImljaGVja1wiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uaUNoZWNrO1xyXG4gICAgfSxcclxuICAgIGlzRml0OiBmdW5jdGlvbiAocXVlc3Rpb24pIHtcclxuICAgICAgdmFyIHQgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XHJcbiAgICAgIHJldHVybiB0ID09PSBcInJhZGlvZ3JvdXBcIiB8fCB0ID09PSBcImNoZWNrYm94XCIgfHwgdCA9PT0gXCJtYXRyaXhcIjtcclxuICAgIH0sXHJcbiAgICBpc0RlZmF1bHRSZW5kZXI6IHRydWUsXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgcm9vdFdpZGdldCA9IHRoaXM7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcclxuXHJcbiAgICAgICRlbC5maW5kKFwiLnN2LWl0ZW1fX2RlY29yYXRvclwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAkZWwuZmluZChcImlucHV0XCIpLmRhdGEoe1xyXG4gICAgICAgIGlDaGVjazogdW5kZWZpbmVkLFxyXG4gICAgICB9KTtcclxuICAgICAgZnVuY3Rpb24gZ2V0SW5kZXhCeVZhbHVlKGFyciwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoYXJyW2ldID09IHZhbHVlKSByZXR1cm4gaTtcclxuICAgICAgICAgIGlmICghIWFycltpXSAmJiBhcnJbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09IHZhbHVlKSByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBmcm96ZVVwZGF0aW5nID0gZmFsc2U7XHJcbiAgICAgIHZhciBtYWtlQ2hvaWNlc0lDaGVjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW5wdXRzID0gJGVsLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dHMuaUNoZWNrKHtcclxuICAgICAgICAgIGNoZWNrYm94Q2xhc3M6XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLmNoZWNrYm94Q2xhc3MgfHxcclxuICAgICAgICAgICAgcm9vdFdpZGdldC5jaGVja2JveENsYXNzIHx8XHJcbiAgICAgICAgICAgIHJvb3RXaWRnZXQuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgcmFkaW9DbGFzczpcclxuICAgICAgICAgICAgcXVlc3Rpb24ucmFkaW9DbGFzcyB8fFxyXG4gICAgICAgICAgICByb290V2lkZ2V0LnJhZGlvQ2xhc3MgfHxcclxuICAgICAgICAgICAgcm9vdFdpZGdldC5jbGFzc05hbWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5wdXRzLm9uKFwiaWZDaGVja2VkXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgaWYgKGZyb3plVXBkYXRpbmcpIHJldHVybjtcclxuICAgICAgICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwibWF0cml4XCIpIHtcclxuICAgICAgICAgICAgcXVlc3Rpb24uZ2VuZXJhdGVkVmlzaWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCwgcm93cykge1xyXG4gICAgICAgICAgICAgIGlmIChyb3cuZnVsbE5hbWUgPT09IGV2ZW50LnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByb3cudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gcXVlc3Rpb24udmFsdWUgfHwgW107XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlWYWx1ZShvbGRWYWx1ZSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gb2xkVmFsdWUuY29uY2F0KFtldmVudC50YXJnZXQudmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlucHV0cy5vbihcImlmVW5jaGVja2VkXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgaWYgKGZyb3plVXBkYXRpbmcpIHJldHVybjtcclxuICAgICAgICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiY2hlY2tib3hcIikge1xyXG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSAocXVlc3Rpb24udmFsdWUgfHwgW10pLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlWYWx1ZShvbGRWYWx1ZSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICBvbGRWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gb2xkVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgZnVuY3Rpb24gdW5jaGVja0ljaGVjayhjRWwpIHtcclxuICAgICAgICBjRWwuaUNoZWNrKFwidW5jaGVja1wiKTtcclxuICAgICAgICBjRWxbMF0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZFwiKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgc2VsZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZyb3plVXBkYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgIT09IFwibWF0cml4XCIpIHtcclxuICAgICAgICAgIHZhciB2YWx1ZXMgPSBxdWVzdGlvbi52YWx1ZTtcclxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlcyA9IFt2YWx1ZXNdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHF1ZXN0aW9uLmdldFR5cGUoKSA9PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgICAgdmFyIHFWYWx1ZSA9IHF1ZXN0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGluRWwgPSAkZWwuZmluZChcclxuICAgICAgICAgICAgICAgIFwiaW5wdXRbdmFsdWU9J1wiICsgZXNjVmFsdWUoaXRlbS52YWx1ZSkgKyBcIiddXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGlmICghaW5FbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIHZhciBpc0NoZWNrZWQgPSBnZXRJbmRleEJ5VmFsdWUocVZhbHVlLCBpdGVtLnZhbHVlKSA+IC0xO1xyXG4gICAgICAgICAgICAgIGlmIChpc0NoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGluRWwuaUNoZWNrKFwiY2hlY2tcIik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBjRWwgPSBpbkVsWzBdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdhc0NoZWNrZWQgPSAhIWNFbFtcImNoZWNrZWRcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAod2FzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICBpbkVsLnJlbW92ZUF0dHIoXCJjaGVja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIWluRWwucGFyZW50KCkuaGFzQ2xhc3MoXCJjaGVja2VkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdW5jaGVja0ljaGVjayhpbkVsKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgZWxzZSB1bmNoZWNrSWNoZWNrKGluRWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAkZWxcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRbdmFsdWU9J1wiICsgZXNjVmFsdWUodmFsdWUpICsgXCInXVwiKVxyXG4gICAgICAgICAgICAgICAgLmlDaGVjayhcImNoZWNrXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcXVlc3Rpb24uZ2VuZXJhdGVkVmlzaWJsZVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCwgcm93cykge1xyXG4gICAgICAgICAgICBpZiAocm93LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgJChlbClcclxuICAgICAgICAgICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgICAgICAgICBcImlucHV0W25hbWU9J1wiICtcclxuICAgICAgICAgICAgICAgICAgICByb3cuZnVsbE5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJ11bdmFsdWU9J1wiICtcclxuICAgICAgICAgICAgICAgICAgICBlc2NWYWx1ZShyb3cudmFsdWUpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiddXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5pQ2hlY2soXCJjaGVja1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZyb3plVXBkYXRpbmcgPSBmYWxzZTtcclxuICAgICAgfTtcclxuICAgICAgbWFrZUNob2ljZXNJQ2hlY2soKTtcclxuXHJcbiAgICAgIHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1ha2VDaG9pY2VzSUNoZWNrKCk7XHJcbiAgICAgICAgJGVsLmZpbmQoXCIuc3YtaXRlbV9fZGVjb3JhdG9yXCIpLmhpZGUoKTtcclxuICAgICAgfTtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBzZWxlY3Q7XHJcbiAgICAgIHNlbGVjdCgpO1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcclxuICAgICAgJGVsLmZpbmQoXCJpbnB1dFwiKS5pQ2hlY2soXCJkZXN0cm95XCIpO1xyXG4gICAgICBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlc0NoYW5nZWRDYWxsYmFjayA9IG51bGw7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwicmFkaW9ncm91cFwiLCB7XHJcbiAgICBuYW1lOiBcInJhZGlvQ2xhc3NcIixcclxuICAgIGNhdGVnb3J5OiBcImdlbmVyYWxcIixcclxuICB9KTtcclxuICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImNoZWNrYm94XCIsIHtcclxuICAgIG5hbWU6IFwiY2hlY2tib3hDbGFzc1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiZ2VuZXJhbFwiLFxyXG4gIH0pO1xyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwidHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSwgd2luZG93LiQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pY2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDExIl0sInNvdXJjZVJvb3QiOiIifQ==