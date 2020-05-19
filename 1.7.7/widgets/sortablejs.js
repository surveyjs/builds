(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("sortablejs"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/sortablejs", ["sortablejs"], factory);
	else if(typeof exports === 'object')
		exports["widgets/sortablejs"] = factory(require("sortablejs"));
	else
		root["widgets/sortablejs"] = factory(root["Sortable"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sortablejs__ = __webpack_require__(10);
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
          { name: "storeOthersAsComment", visible: false },
          { name: "hasNone", visible: false },
          { name: "renderAs", visible: false }
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
      resultEl.style.boxSizing = "border-box";      
      resultEl.className = "sjs-sortablejs-result";

      emptyEl.innerHTML = question.emptyText;
      resultEl.appendChild(emptyEl);

      sourceEl.style.cssText = self.areaStyle;
      sourceEl.style.boxSizing = "border-box";
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
        question.visibleChoices.forEach(function (choice) {
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
            question.visibleChoices,
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
    },
    pdfQuestionType: "checkbox"
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjN2RmODgwNTlhOGFiZTkyNzViMyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU29ydGFibGVcIixcImNvbW1vbmpzMlwiOlwic29ydGFibGVqc1wiLFwiY29tbW9uanNcIjpcInNvcnRhYmxlanNcIixcImFtZFwiOlwic29ydGFibGVqc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvc29ydGFibGVqcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7OztBQzdEQSxnRDs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBUTtBQUM1QixLQUFLO0FBQ0wsa0JBQWtCLDBDQUEwQztBQUM1RDtBQUNBO0FBQ0EsaUNBQWlDLFlBQVksaUJBQWlCLGlCQUFpQjtBQUMvRSx5Q0FBeUMsV0FBVyxXQUFXLGFBQWE7QUFDNUU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUMsV0FBVywrQ0FBK0M7QUFDMUQsV0FBVyxrQ0FBa0M7QUFDN0MsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG1DQUFtQyxrREFBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsMkJBQTJCLDhCQUE4QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsbUNBQW1DLGtEQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDIiwiZmlsZSI6IndpZGdldHMvc29ydGFibGVqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInNvcnRhYmxlanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ3aWRnZXRzL3NvcnRhYmxlanNcIiwgW1wic29ydGFibGVqc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3aWRnZXRzL3NvcnRhYmxlanNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJzb3J0YWJsZWpzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aWRnZXRzL3NvcnRhYmxlanNcIl0gPSBmYWN0b3J5KHJvb3RbXCJTb3J0YWJsZVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM3ZGY4ODA1OWE4YWJlOTI3NWIzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU29ydGFibGVcIixcImNvbW1vbmpzMlwiOlwic29ydGFibGVqc1wiLFwiY29tbW9uanNcIjpcInNvcnRhYmxlanNcIixcImFtZFwiOlwic29ydGFibGVqc1wifVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJpbXBvcnQgU29ydGFibGUgZnJvbSBcInNvcnRhYmxlanNcIjtcblxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBuYW1lOiBcInNvcnRhYmxlbGlzdFwiLFxuICAgIHRpdGxlOiBcIlNvcnRhYmxlIGxpc3RcIixcbiAgICBpY29uTmFtZTogXCJpY29uLXNvcnRhYmxlanNcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBTb3J0YWJsZSAhPSBcInVuZGVmaW5lZFwiO1xuICAgIH0sXG4gICAgZGVmYXVsdEpTT046IHsgY2hvaWNlczogW1wiSXRlbSAxXCIsIFwiSXRlbSAyXCIsIFwiSXRlbSAzXCJdIH0sXG4gICAgcm9vdFN0eWxlOiBcIndpZHRoOjEwMCU6XCIsXG4gICAgYXJlYVN0eWxlOlxuICAgICAgXCJib3JkZXI6IDFweCBzb2xpZCAjMWFiMzk0OyB3aWR0aDoxMDAlOyBtaW4taGVpZ2h0OjUwcHg7IG1hcmdpbi10b3A6MTBweDtcIixcbiAgICBpdGVtU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjojMWFiMzk0O2NvbG9yOiNmZmY7bWFyZ2luOjVweDtwYWRkaW5nOjEwcHg7XCIsXG4gICAgaXNGaXQ6IGZ1bmN0aW9uIChxdWVzdGlvbikge1xuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJzb3J0YWJsZWxpc3RcIjtcbiAgICB9LFxuICAgIGh0bWxUZW1wbGF0ZTogXCI8ZGl2PjwvZGl2PlwiLFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24gKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcbiAgICAgICAgXCJzb3J0YWJsZWxpc3RcIixcbiAgICAgICAgW1xuICAgICAgICAgIHsgbmFtZTogXCJoYXNPdGhlclwiLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogXCJzdG9yZU90aGVyc0FzQ29tbWVudFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogXCJoYXNOb25lXCIsIHZpc2libGU6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiBcInJlbmRlckFzXCIsIHZpc2libGU6IGZhbHNlIH1cbiAgICAgICAgXSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCJjaGVja2JveFwiXG4gICAgICApO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJzb3J0YWJsZWxpc3RcIiwge1xuICAgICAgICBuYW1lOiBcImVtcHR5VGV4dFwiLFxuICAgICAgICBkZWZhdWx0OiBcIk1vdmUgaXRlbXMgaGVyZS5cIlxuICAgICAgfSk7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInNvcnRhYmxlbGlzdFwiLCB7XG4gICAgICAgIG5hbWU6IFwidXNlRGVmYXVsdFRoZW1lXCIsXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0pO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJzb3J0YWJsZWxpc3RcIiwge1xuICAgICAgICBuYW1lOiBcIm1heEFuc3dlcnNDb3VudDpudW1iZXJcIixcbiAgICAgICAgZGVmYXVsdDogLTFcbiAgICAgIH0pO1xuXG4gICAgfSxcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoIXF1ZXN0aW9uLnVzZURlZmF1bHRUaGVtZSkge1xuICAgICAgICBzZWxmLnJvb3RTdHlsZSA9IFwiXCI7XG4gICAgICAgIHNlbGYuaXRlbVN0eWxlID0gXCJcIjtcbiAgICAgICAgc2VsZi5hcmVhU3R5bGUgPSBcIlwiO1xuICAgICAgfVxuICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IHNlbGYucm9vdFN0eWxlO1xuICAgICAgZWwuY2xhc3NOYW1lID0gXCJzanMtc29ydGFibGVqcy1yb290XCI7XG4gICAgICB2YXIgc291cmNlLCByZXN1bHQ7XG4gICAgICB2YXIgcmVzdWx0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdmFyIGVtcHR5RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHZhciBzb3VyY2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIHJlc3VsdEVsLnN0eWxlLmNzc1RleHQgPSBzZWxmLmFyZWFTdHlsZTtcbiAgICAgIHJlc3VsdEVsLnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiOyAgICAgIFxuICAgICAgcmVzdWx0RWwuY2xhc3NOYW1lID0gXCJzanMtc29ydGFibGVqcy1yZXN1bHRcIjtcblxuICAgICAgZW1wdHlFbC5pbm5lckhUTUwgPSBxdWVzdGlvbi5lbXB0eVRleHQ7XG4gICAgICByZXN1bHRFbC5hcHBlbmRDaGlsZChlbXB0eUVsKTtcblxuICAgICAgc291cmNlRWwuc3R5bGUuY3NzVGV4dCA9IHNlbGYuYXJlYVN0eWxlO1xuICAgICAgc291cmNlRWwuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XG4gICAgICBzb3VyY2VFbC5jbGFzc05hbWUgPSBcInNqcy1zb3J0YWJsZWpzLXNvdXJjZVwiO1xuICAgICAgZWwuYXBwZW5kQ2hpbGQocmVzdWx0RWwpO1xuICAgICAgZWwuYXBwZW5kQ2hpbGQoc291cmNlRWwpO1xuICAgICAgdmFyIGhhc1ZhbHVlSW5SZXN1bHRzID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB2YXIgcmVzID0gcXVlc3Rpb24udmFsdWU7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZXMpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHJlc1tpXSA9PSB2YWwpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG4gICAgICB2YXIgYWRkQ2hvaWNlVG9XaWRnZXQgPSBmdW5jdGlvbiAoY2hvaWNlLCBpblJlc3VsdHMpIHtcbiAgICAgICAgdmFyIHNyY0VsID0gaW5SZXN1bHRzID8gcmVzdWx0RWwgOiBzb3VyY2VFbDtcbiAgICAgICAgdmFyIG5ld0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3RWwuaW5uZXJIVE1MID1cbiAgICAgICAgICBcIjxkaXYgY2xhc3M9J3Nqcy1zb3J0YWJsZWpzLWl0ZW0nIHN0eWxlPSdcIiArXG4gICAgICAgICAgc2VsZi5pdGVtU3R5bGUgK1xuICAgICAgICAgIFwiJz5cIiArXG4gICAgICAgICAgY2hvaWNlLnRleHQgK1xuICAgICAgICAgIFwiPC9kaXY+XCI7XG4gICAgICAgIG5ld0VsLmRhdGFzZXRbXCJ2YWx1ZVwiXSA9IGNob2ljZS52YWx1ZTtcbiAgICAgICAgc3JjRWwuYXBwZW5kQ2hpbGQobmV3RWwpO1xuICAgICAgfTtcbiAgICAgIHZhciBnZXRDaG9pY2VzTm90SW5SZXN1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzID0gW107XG4gICAgICAgIHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzLmZvckVhY2goZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICAgIGlmICghaGFzVmFsdWVJblJlc3VsdHMoY2hvaWNlLnZhbHVlKSkge1xuICAgICAgICAgICAgcmVzLnB1c2goY2hvaWNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfTtcbiAgICAgIHZhciBnZXRDaG9pY2VzSW5SZXN1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzID0gW107XG4gICAgICAgIHZhciB2YWwgPSBxdWVzdGlvbi52YWx1ZTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHJldHVybiByZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBTdXJ2ZXkuSXRlbVZhbHVlLmdldEl0ZW1CeVZhbHVlKFxuICAgICAgICAgICAgcXVlc3Rpb24udmlzaWJsZUNob2ljZXMsXG4gICAgICAgICAgICB2YWxbaV1cbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICghIWl0ZW0pIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfTtcbiAgICAgIHZhciBpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSA9IGZhbHNlO1xuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlKSByZXR1cm47XG4gICAgICAgIHJlc3VsdEVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHJlc3VsdEVsLmFwcGVuZENoaWxkKGVtcHR5RWwpO1xuICAgICAgICBzb3VyY2VFbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB2YXIgbm90SW5SZXN1bHRzID0gZ2V0Q2hvaWNlc05vdEluUmVzdWx0cygpO1xuICAgICAgICB2YXIgaW5SZXN1bHRzID0gZ2V0Q2hvaWNlc0luUmVzdWx0cygpO1xuICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBpblJlc3VsdHMubGVuZ3RoID4gMCA/IFwibm9uZVwiIDogXCJcIjtcbiAgICAgICAgaW5SZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICAgIGFkZENob2ljZVRvV2lkZ2V0KGNob2ljZSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBub3RJblJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgICAgYWRkQ2hvaWNlVG9XaWRnZXQoY2hvaWNlLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJlc3VsdCA9IHF1ZXN0aW9uLnJlc3VsdEVsID0gU29ydGFibGUuY3JlYXRlKHJlc3VsdEVsLCB7XG4gICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICBkaXNhYmxlZDogcXVlc3Rpb24uaXNSZWFkT25seSxcbiAgICAgICAgZ3JvdXA6IHtcbiAgICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICAgIHB1dDogZnVuY3Rpb24gKHRvKSB7XG4gICAgICAgICAgICByZXR1cm4gcXVlc3Rpb24ubWF4QW5zd2Vyc0NvdW50IDwgMCB8fCB0by5lbC5jaGlsZHJlbi5sZW5ndGggPD0gcXVlc3Rpb24ubWF4QW5zd2Vyc0NvdW50O1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9uU29ydDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICBpZiAocmVzdWx0RWwuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0RWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHRFbC5jaGlsZHJlbltpXS5kYXRhc2V0LnZhbHVlID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICByZXN1bHQucHVzaChyZXN1bHRFbC5jaGlsZHJlbltpXS5kYXRhc2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUgPSB0cnVlO1xuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gcmVzdWx0O1xuICAgICAgICAgIGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc291cmNlID0gcXVlc3Rpb24uc291cmNlRWwgPSBTb3J0YWJsZS5jcmVhdGUoc291cmNlRWwsIHtcbiAgICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICAgIGRpc2FibGVkOiBxdWVzdGlvbi5pc1JlYWRPbmx5LFxuICAgICAgICBncm91cDogcXVlc3Rpb24ubmFtZVxuICAgICAgfSk7XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocXVlc3Rpb24uaXNSZWFkT25seSkge1xuICAgICAgICAgIHJlc3VsdC5vcHRpb25zLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBzb3VyY2Uub3B0aW9ucy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lm9wdGlvbnMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICBzb3VyY2Uub3B0aW9ucy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgcXVlc3Rpb24ucmVzdWx0RWwuZGVzdHJveSgpO1xuICAgICAgcXVlc3Rpb24uc291cmNlRWwuZGVzdHJveSgpO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgIH0sXG4gICAgcGRmUXVlc3Rpb25UeXBlOiBcImNoZWNrYm94XCJcbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NvcnRhYmxlanMuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiXSwic291cmNlUm9vdCI6IiJ9