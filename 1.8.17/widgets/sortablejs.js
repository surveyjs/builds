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
          { name: "renderAs", visible: false },
          { name: "checkboxClass", visible: false },
          { name: "hasSelectAll", visible: false },
          { name: "noneText", visible: false },
          { name: "selectAllText", visible: false },
        ],
        null,
        "checkbox"
      );
      Survey.JsonObject.metaData.addProperty("sortablelist", {
        name: "emptyText",
        default: "Move items here.",
        category: "general",
      });
      Survey.JsonObject.metaData.addProperty("sortablelist", {
        name: "useDefaultTheme:switch",
        default: true,
        category: "general",
      });
      Survey.JsonObject.metaData.addProperty("sortablelist", {
        name: "maxAnswersCount:number",
        default: -1,
        category: "general",
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
        newEl.className = "sjs-sortablejs-item";
        newEl.style.cssText = self.itemStyle;
        newEl.innerText = choice.text;
        newEl.dataset["value"] = choice.value;
        srcEl.appendChild(newEl);
        choice.onPropertyChanged.add(function (sender, options) {
          newEl.innerText = sender.text;
        });
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
          put: function (to, from) {
            return (
              to.options.group && from.options.group && to.options.group.name === from.options.group.name &&
              (question.maxAnswersCount < 0 ||
              to.el.children.length <= question.maxAnswersCount)
            );
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
        },
      });
      source = question.sourceEl = __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create(sourceEl, {
        animation: 150,
        disabled: question.isReadOnly,
        group: question.name,
      });
      question.valueChangedCallback = updateValueHandler;
      question.onPropertyChanged.add(function (sender, options) {
        if (options.name == "emptyText") {
          emptyEl.innerHTML = question.emptyText;
        }
      });
      question.readOnlyChangedCallback = function () {
        if (question.isReadOnly) {
          result.options.disabled = true;
          source.options.disabled = true;
        } else {
          result.options.disabled = false;
          source.options.disabled = false;
        }
      };
      question.registerFunctionOnPropertyValueChanged(
        "visibleChoices",
        updateValueHandler
      );
      updateValueHandler();
    },
    willUnmount: function (question, el) {
      question.resultEl.destroy();
      question.sourceEl.destroy();
      question.readOnlyChangedCallback = null;
    },
    pdfQuestionType: "checkbox",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZGIyMTNkMDY1YzNkODAxNzg0OSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU29ydGFibGVcIixcImNvbW1vbmpzMlwiOlwic29ydGFibGVqc1wiLFwiY29tbW9uanNcIjpcInNvcnRhYmxlanNcIixcImFtZFwiOlwic29ydGFibGVqc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvc29ydGFibGVqcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7OztBQzdEQSxnRDs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBUTtBQUM1QixLQUFLO0FBQ0wsa0JBQWtCLDBDQUEwQztBQUM1RDtBQUNBO0FBQ0EsaUNBQWlDLFlBQVksaUJBQWlCLGlCQUFpQjtBQUMvRSx5Q0FBeUMsV0FBVyxXQUFXLGFBQWE7QUFDNUU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUMsV0FBVywrQ0FBK0M7QUFDMUQsV0FBVyxrQ0FBa0M7QUFDN0MsV0FBVyxtQ0FBbUM7QUFDOUMsV0FBVyx3Q0FBd0M7QUFDbkQsV0FBVyx1Q0FBdUM7QUFDbEQsV0FBVyxtQ0FBbUM7QUFDOUMsV0FBVyx3Q0FBd0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG1DQUFtQyxrREFBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSwyQkFBMkIsOEJBQThCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLG1DQUFtQyxrREFBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDIiwiZmlsZSI6IndpZGdldHMvc29ydGFibGVqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInNvcnRhYmxlanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ3aWRnZXRzL3NvcnRhYmxlanNcIiwgW1wic29ydGFibGVqc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3aWRnZXRzL3NvcnRhYmxlanNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJzb3J0YWJsZWpzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aWRnZXRzL3NvcnRhYmxlanNcIl0gPSBmYWN0b3J5KHJvb3RbXCJTb3J0YWJsZVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZkYjIxM2QwNjVjM2Q4MDE3ODQ5IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU29ydGFibGVcIixcImNvbW1vbmpzMlwiOlwic29ydGFibGVqc1wiLFwiY29tbW9uanNcIjpcInNvcnRhYmxlanNcIixcImFtZFwiOlwic29ydGFibGVqc1wifVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJpbXBvcnQgU29ydGFibGUgZnJvbSBcInNvcnRhYmxlanNcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwic29ydGFibGVsaXN0XCIsXHJcbiAgICB0aXRsZTogXCJTb3J0YWJsZSBsaXN0XCIsXHJcbiAgICBpY29uTmFtZTogXCJpY29uLXNvcnRhYmxlanNcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgU29ydGFibGUgIT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0SlNPTjogeyBjaG9pY2VzOiBbXCJJdGVtIDFcIiwgXCJJdGVtIDJcIiwgXCJJdGVtIDNcIl0gfSxcclxuICAgIHJvb3RTdHlsZTogXCJ3aWR0aDoxMDAlOlwiLFxyXG4gICAgYXJlYVN0eWxlOlxyXG4gICAgICBcImJvcmRlcjogMXB4IHNvbGlkICMxYWIzOTQ7IHdpZHRoOjEwMCU7IG1pbi1oZWlnaHQ6NTBweDsgbWFyZ2luLXRvcDoxMHB4O1wiLFxyXG4gICAgaXRlbVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6IzFhYjM5NDtjb2xvcjojZmZmO21hcmdpbjo1cHg7cGFkZGluZzoxMHB4O1wiLFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uIChxdWVzdGlvbikge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInNvcnRhYmxlbGlzdFwiO1xyXG4gICAgfSxcclxuICAgIGh0bWxUZW1wbGF0ZTogXCI8ZGl2PjwvZGl2PlwiLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbiAoYWN0aXZhdGVkQnkpIHtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXHJcbiAgICAgICAgXCJzb3J0YWJsZWxpc3RcIixcclxuICAgICAgICBbXHJcbiAgICAgICAgICB7IG5hbWU6IFwiaGFzT3RoZXJcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJzdG9yZU90aGVyc0FzQ29tbWVudFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImhhc05vbmVcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJyZW5kZXJBc1wiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImNoZWNrYm94Q2xhc3NcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJoYXNTZWxlY3RBbGxcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJub25lVGV4dFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInNlbGVjdEFsbFRleHRcIiwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgXCJjaGVja2JveFwiXHJcbiAgICAgICk7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwic29ydGFibGVsaXN0XCIsIHtcclxuICAgICAgICBuYW1lOiBcImVtcHR5VGV4dFwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IFwiTW92ZSBpdGVtcyBoZXJlLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcImdlbmVyYWxcIixcclxuICAgICAgfSk7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwic29ydGFibGVsaXN0XCIsIHtcclxuICAgICAgICBuYW1lOiBcInVzZURlZmF1bHRUaGVtZTpzd2l0Y2hcIixcclxuICAgICAgICBkZWZhdWx0OiB0cnVlLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcImdlbmVyYWxcIixcclxuICAgICAgfSk7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwic29ydGFibGVsaXN0XCIsIHtcclxuICAgICAgICBuYW1lOiBcIm1heEFuc3dlcnNDb3VudDpudW1iZXJcIixcclxuICAgICAgICBkZWZhdWx0OiAtMSxcclxuICAgICAgICBjYXRlZ29yeTogXCJnZW5lcmFsXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIGlmICghcXVlc3Rpb24udXNlRGVmYXVsdFRoZW1lKSB7XHJcbiAgICAgICAgc2VsZi5yb290U3R5bGUgPSBcIlwiO1xyXG4gICAgICAgIHNlbGYuaXRlbVN0eWxlID0gXCJcIjtcclxuICAgICAgICBzZWxmLmFyZWFTdHlsZSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IHNlbGYucm9vdFN0eWxlO1xyXG4gICAgICBlbC5jbGFzc05hbWUgPSBcInNqcy1zb3J0YWJsZWpzLXJvb3RcIjtcclxuICAgICAgdmFyIHNvdXJjZSwgcmVzdWx0O1xyXG4gICAgICB2YXIgcmVzdWx0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB2YXIgZW1wdHlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICB2YXIgc291cmNlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgcmVzdWx0RWwuc3R5bGUuY3NzVGV4dCA9IHNlbGYuYXJlYVN0eWxlO1xyXG4gICAgICByZXN1bHRFbC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcclxuICAgICAgcmVzdWx0RWwuY2xhc3NOYW1lID0gXCJzanMtc29ydGFibGVqcy1yZXN1bHRcIjtcclxuXHJcbiAgICAgIGVtcHR5RWwuaW5uZXJIVE1MID0gcXVlc3Rpb24uZW1wdHlUZXh0O1xyXG4gICAgICByZXN1bHRFbC5hcHBlbmRDaGlsZChlbXB0eUVsKTtcclxuXHJcbiAgICAgIHNvdXJjZUVsLnN0eWxlLmNzc1RleHQgPSBzZWxmLmFyZWFTdHlsZTtcclxuICAgICAgc291cmNlRWwuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICAgIHNvdXJjZUVsLmNsYXNzTmFtZSA9IFwic2pzLXNvcnRhYmxlanMtc291cmNlXCI7XHJcbiAgICAgIGVsLmFwcGVuZENoaWxkKHJlc3VsdEVsKTtcclxuICAgICAgZWwuYXBwZW5kQ2hpbGQoc291cmNlRWwpO1xyXG4gICAgICB2YXIgaGFzVmFsdWVJblJlc3VsdHMgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgdmFyIHJlcyA9IHF1ZXN0aW9uLnZhbHVlO1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZXMpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChyZXNbaV0gPT0gdmFsKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9O1xyXG4gICAgICB2YXIgYWRkQ2hvaWNlVG9XaWRnZXQgPSBmdW5jdGlvbiAoY2hvaWNlLCBpblJlc3VsdHMpIHtcclxuICAgICAgICB2YXIgc3JjRWwgPSBpblJlc3VsdHMgPyByZXN1bHRFbCA6IHNvdXJjZUVsO1xyXG4gICAgICAgIHZhciBuZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmV3RWwuY2xhc3NOYW1lID0gXCJzanMtc29ydGFibGVqcy1pdGVtXCI7XHJcbiAgICAgICAgbmV3RWwuc3R5bGUuY3NzVGV4dCA9IHNlbGYuaXRlbVN0eWxlO1xyXG4gICAgICAgIG5ld0VsLmlubmVyVGV4dCA9IGNob2ljZS50ZXh0O1xyXG4gICAgICAgIG5ld0VsLmRhdGFzZXRbXCJ2YWx1ZVwiXSA9IGNob2ljZS52YWx1ZTtcclxuICAgICAgICBzcmNFbC5hcHBlbmRDaGlsZChuZXdFbCk7XHJcbiAgICAgICAgY2hvaWNlLm9uUHJvcGVydHlDaGFuZ2VkLmFkZChmdW5jdGlvbiAoc2VuZGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICBuZXdFbC5pbm5lclRleHQgPSBzZW5kZXIudGV4dDtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgdmFyIGdldENob2ljZXNOb3RJblJlc3VsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xyXG4gICAgICAgIHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzLmZvckVhY2goZnVuY3Rpb24gKGNob2ljZSkge1xyXG4gICAgICAgICAgaWYgKCFoYXNWYWx1ZUluUmVzdWx0cyhjaG9pY2UudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJlcy5wdXNoKGNob2ljZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgfTtcclxuICAgICAgdmFyIGdldENob2ljZXNJblJlc3VsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xyXG4gICAgICAgIHZhciB2YWwgPSBxdWVzdGlvbi52YWx1ZTtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsKSkgcmV0dXJuIHJlcztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdmFyIGl0ZW0gPSBTdXJ2ZXkuSXRlbVZhbHVlLmdldEl0ZW1CeVZhbHVlKFxyXG4gICAgICAgICAgICBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcyxcclxuICAgICAgICAgICAgdmFsW2ldXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKCEhaXRlbSkge1xyXG4gICAgICAgICAgICByZXMucHVzaChpdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgfTtcclxuICAgICAgdmFyIGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlID0gZmFsc2U7XHJcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgcmVzdWx0RWwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICByZXN1bHRFbC5hcHBlbmRDaGlsZChlbXB0eUVsKTtcclxuICAgICAgICBzb3VyY2VFbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHZhciBub3RJblJlc3VsdHMgPSBnZXRDaG9pY2VzTm90SW5SZXN1bHRzKCk7XHJcbiAgICAgICAgdmFyIGluUmVzdWx0cyA9IGdldENob2ljZXNJblJlc3VsdHMoKTtcclxuICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBpblJlc3VsdHMubGVuZ3RoID4gMCA/IFwibm9uZVwiIDogXCJcIjtcclxuICAgICAgICBpblJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAoY2hvaWNlKSB7XHJcbiAgICAgICAgICBhZGRDaG9pY2VUb1dpZGdldChjaG9pY2UsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5vdEluUmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2UpIHtcclxuICAgICAgICAgIGFkZENob2ljZVRvV2lkZ2V0KGNob2ljZSwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICByZXN1bHQgPSBxdWVzdGlvbi5yZXN1bHRFbCA9IFNvcnRhYmxlLmNyZWF0ZShyZXN1bHRFbCwge1xyXG4gICAgICAgIGFuaW1hdGlvbjogMTUwLFxyXG4gICAgICAgIGRpc2FibGVkOiBxdWVzdGlvbi5pc1JlYWRPbmx5LFxyXG4gICAgICAgIGdyb3VwOiB7XHJcbiAgICAgICAgICBuYW1lOiBxdWVzdGlvbi5uYW1lLFxyXG4gICAgICAgICAgcHV0OiBmdW5jdGlvbiAodG8sIGZyb20pIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICB0by5vcHRpb25zLmdyb3VwICYmIGZyb20ub3B0aW9ucy5ncm91cCAmJiB0by5vcHRpb25zLmdyb3VwLm5hbWUgPT09IGZyb20ub3B0aW9ucy5ncm91cC5uYW1lICYmXHJcbiAgICAgICAgICAgICAgKHF1ZXN0aW9uLm1heEFuc3dlcnNDb3VudCA8IDAgfHxcclxuICAgICAgICAgICAgICB0by5lbC5jaGlsZHJlbi5sZW5ndGggPD0gcXVlc3Rpb24ubWF4QW5zd2Vyc0NvdW50KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU29ydDogZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdEVsLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW1wdHlFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0RWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdEVsLmNoaWxkcmVuW2ldLmRhdGFzZXQudmFsdWUgPT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICByZXN1bHQucHVzaChyZXN1bHRFbC5jaGlsZHJlbltpXS5kYXRhc2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSByZXN1bHQ7XHJcbiAgICAgICAgICBpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzb3VyY2UgPSBxdWVzdGlvbi5zb3VyY2VFbCA9IFNvcnRhYmxlLmNyZWF0ZShzb3VyY2VFbCwge1xyXG4gICAgICAgIGFuaW1hdGlvbjogMTUwLFxyXG4gICAgICAgIGRpc2FibGVkOiBxdWVzdGlvbi5pc1JlYWRPbmx5LFxyXG4gICAgICAgIGdyb3VwOiBxdWVzdGlvbi5uYW1lLFxyXG4gICAgICB9KTtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgIHF1ZXN0aW9uLm9uUHJvcGVydHlDaGFuZ2VkLmFkZChmdW5jdGlvbiAoc2VuZGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMubmFtZSA9PSBcImVtcHR5VGV4dFwiKSB7XHJcbiAgICAgICAgICBlbXB0eUVsLmlubmVySFRNTCA9IHF1ZXN0aW9uLmVtcHR5VGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocXVlc3Rpb24uaXNSZWFkT25seSkge1xyXG4gICAgICAgICAgcmVzdWx0Lm9wdGlvbnMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgc291cmNlLm9wdGlvbnMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXN1bHQub3B0aW9ucy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgc291cmNlLm9wdGlvbnMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHF1ZXN0aW9uLnJlZ2lzdGVyRnVuY3Rpb25PblByb3BlcnR5VmFsdWVDaGFuZ2VkKFxyXG4gICAgICAgIFwidmlzaWJsZUNob2ljZXNcIixcclxuICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXJcclxuICAgICAgKTtcclxuICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgcXVlc3Rpb24ucmVzdWx0RWwuZGVzdHJveSgpO1xyXG4gICAgICBxdWVzdGlvbi5zb3VyY2VFbC5kZXN0cm95KCk7XHJcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBwZGZRdWVzdGlvblR5cGU6IFwiY2hlY2tib3hcIixcclxuICB9O1xyXG5cclxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zb3J0YWJsZWpzLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIl0sInNvdXJjZVJvb3QiOiIifQ==