(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("sortablejs"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/sortablejs", ["sortablejs"], factory);
	else if(typeof exports === 'object')
		exports["widgets/sortablejs"] = factory(require("sortablejs"));
	else
		root["widgets/sortablejs"] = factory(root["Sortable"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_12__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3YjRjMzkyMGZlMDQxOGY2ZTQ3YyIsIndlYnBhY2s6Ly8vLi9zcmMvc29ydGFibGVqcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU29ydGFibGVcIixcImNvbW1vbmpzMlwiOlwic29ydGFibGVqc1wiLFwiY29tbW9uanNcIjpcInNvcnRhYmxlanNcIixcImFtZFwiOlwic29ydGFibGVqc1wifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQVE7QUFDNUIsS0FBSztBQUNMLGtCQUFrQiwwQ0FBMEM7QUFDNUQ7QUFDQTtBQUNBLGlDQUFpQyxZQUFZLGlCQUFpQixpQkFBaUI7QUFDL0UseUNBQXlDLFdBQVcsV0FBVyxhQUFhO0FBQzVFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUNBQW1DO0FBQzlDLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsbUNBQW1DLGtEQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsMkJBQTJCLDhCQUE4QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsbUNBQW1DLGtEQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUM7Ozs7Ozs7O0FDaExwQixnRCIsImZpbGUiOiJ3aWRnZXRzL3NvcnRhYmxlanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJzb3J0YWJsZWpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9zb3J0YWJsZWpzXCIsIFtcInNvcnRhYmxlanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2lkZ2V0cy9zb3J0YWJsZWpzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwic29ydGFibGVqc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wid2lkZ2V0cy9zb3J0YWJsZWpzXCJdID0gZmFjdG9yeShyb290W1wiU29ydGFibGVcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2I0YzM5MjBmZTA0MThmNmU0N2MiLCJpbXBvcnQgU29ydGFibGUgZnJvbSBcInNvcnRhYmxlanNcIjtcblxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBuYW1lOiBcInNvcnRhYmxlbGlzdFwiLFxuICAgIHRpdGxlOiBcIlNvcnRhYmxlIGxpc3RcIixcbiAgICBpY29uTmFtZTogXCJpY29uLXNvcnRhYmxlanNcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIFNvcnRhYmxlICE9IFwidW5kZWZpbmVkXCI7XG4gICAgfSxcbiAgICBkZWZhdWx0SlNPTjogeyBjaG9pY2VzOiBbXCJJdGVtIDFcIiwgXCJJdGVtIDJcIiwgXCJJdGVtIDNcIl0gfSxcbiAgICByb290U3R5bGU6IFwid2lkdGg6MTAwJTpcIixcbiAgICBhcmVhU3R5bGU6XG4gICAgICBcImJvcmRlcjogMXB4IHNvbGlkICMxYWIzOTQ7IHdpZHRoOjEwMCU7IG1pbi1oZWlnaHQ6NTBweDsgbWFyZ2luLXRvcDoxMHB4O1wiLFxuICAgIGl0ZW1TdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOiMxYWIzOTQ7Y29sb3I6I2ZmZjttYXJnaW46NXB4O3BhZGRpbmc6MTBweDtcIixcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwic29ydGFibGVsaXN0XCI7XG4gICAgfSxcbiAgICBodG1sVGVtcGxhdGU6IFwiPGRpdj48L2Rpdj5cIixcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcbiAgICAgICAgXCJzb3J0YWJsZWxpc3RcIixcbiAgICAgICAgW1xuICAgICAgICAgIHsgbmFtZTogXCJoYXNPdGhlclwiLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogXCJzdG9yZU90aGVyc0FzQ29tbWVudFwiLCB2aXNpYmxlOiBmYWxzZSB9XG4gICAgICAgIF0sXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwiY2hlY2tib3hcIlxuICAgICAgKTtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwic29ydGFibGVsaXN0XCIsIHtcbiAgICAgICAgbmFtZTogXCJlbXB0eVRleHRcIixcbiAgICAgICAgZGVmYXVsdDogXCJNb3ZlIGl0ZW1zIGhlcmUuXCJcbiAgICAgIH0pO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJzb3J0YWJsZWxpc3RcIiwge1xuICAgICAgICBuYW1lOiBcInVzZURlZmF1bHRUaGVtZVwiLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKCFxdWVzdGlvbi51c2VEZWZhdWx0VGhlbWUpIHtcbiAgICAgICAgc2VsZi5yb290U3R5bGUgPSBcIlwiO1xuICAgICAgICBzZWxmLml0ZW1TdHlsZSA9IFwiXCI7XG4gICAgICAgIHNlbGYuYXJlYVN0eWxlID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIGVsLnN0eWxlLmNzc1RleHQgPSBzZWxmLnJvb3RTdHlsZTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IFwic2pzLXNvcnRhYmxlanMtcm9vdFwiO1xuICAgICAgdmFyIHNvdXJjZSwgcmVzdWx0O1xuICAgICAgdmFyIHJlc3VsdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHZhciBlbXB0eUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICB2YXIgc291cmNlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICByZXN1bHRFbC5zdHlsZS5jc3NUZXh0ID0gc2VsZi5hcmVhU3R5bGU7XG4gICAgICByZXN1bHRFbC5jbGFzc05hbWUgPSBcInNqcy1zb3J0YWJsZWpzLXJlc3VsdFwiO1xuXG4gICAgICBlbXB0eUVsLmlubmVySFRNTCA9IHF1ZXN0aW9uLmVtcHR5VGV4dDtcbiAgICAgIHJlc3VsdEVsLmFwcGVuZENoaWxkKGVtcHR5RWwpO1xuXG4gICAgICBzb3VyY2VFbC5zdHlsZS5jc3NUZXh0ID0gc2VsZi5hcmVhU3R5bGU7XG4gICAgICBzb3VyY2VFbC5jbGFzc05hbWUgPSBcInNqcy1zb3J0YWJsZWpzLXNvdXJjZVwiO1xuXG4gICAgICBlbC5hcHBlbmRDaGlsZChyZXN1bHRFbCk7XG4gICAgICBlbC5hcHBlbmRDaGlsZChzb3VyY2VFbCk7XG4gICAgICB2YXIgaGFzVmFsdWVJblJlc3VsdHMgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdmFyIHJlcyA9IHF1ZXN0aW9uLnZhbHVlO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChyZXNbaV0gPT0gdmFsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuICAgICAgdmFyIGFkZENob2ljZVRvV2lkZ2V0ID0gZnVuY3Rpb24oY2hvaWNlLCBpblJlc3VsdHMpIHtcbiAgICAgICAgdmFyIHNyY0VsID0gaW5SZXN1bHRzID8gcmVzdWx0RWwgOiBzb3VyY2VFbDtcbiAgICAgICAgdmFyIG5ld0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3RWwuaW5uZXJIVE1MID1cbiAgICAgICAgICBcIjxkaXYgY2xhc3M9J3Nqcy1zb3J0YWJsZWpzLWl0ZW0nIHN0eWxlPSdcIiArXG4gICAgICAgICAgc2VsZi5pdGVtU3R5bGUgK1xuICAgICAgICAgIFwiJz5cIiArXG4gICAgICAgICAgY2hvaWNlLnRleHQgK1xuICAgICAgICAgIFwiPC9kaXY+XCI7XG4gICAgICAgIG5ld0VsLmRhdGFzZXRbXCJ2YWx1ZVwiXSA9IGNob2ljZS52YWx1ZTtcbiAgICAgICAgc3JjRWwuYXBwZW5kQ2hpbGQobmV3RWwpO1xuICAgICAgfTtcbiAgICAgIHZhciBnZXRDaG9pY2VzTm90SW5SZXN1bHRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgcXVlc3Rpb24uYWN0aXZlQ2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uKGNob2ljZSkge1xuICAgICAgICAgIGlmICghaGFzVmFsdWVJblJlc3VsdHMoY2hvaWNlLnZhbHVlKSkge1xuICAgICAgICAgICAgcmVzLnB1c2goY2hvaWNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfTtcbiAgICAgIHZhciBnZXRDaG9pY2VzSW5SZXN1bHRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgdmFyIHZhbCA9IHF1ZXN0aW9uLnZhbHVlO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsKSkgcmV0dXJuIHJlcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IFN1cnZleS5JdGVtVmFsdWUuZ2V0SXRlbUJ5VmFsdWUoXG4gICAgICAgICAgICBxdWVzdGlvbi5hY3RpdmVDaG9pY2VzLFxuICAgICAgICAgICAgdmFsW2ldXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoISFpdGVtKSB7XG4gICAgICAgICAgICByZXMucHVzaChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH07XG4gICAgICB2YXIgaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUgPSBmYWxzZTtcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlKSByZXR1cm47XG4gICAgICAgIHJlc3VsdEVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHJlc3VsdEVsLmFwcGVuZENoaWxkKGVtcHR5RWwpO1xuICAgICAgICBzb3VyY2VFbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB2YXIgbm90SW5SZXN1bHRzID0gZ2V0Q2hvaWNlc05vdEluUmVzdWx0cygpO1xuICAgICAgICB2YXIgaW5SZXN1bHRzID0gZ2V0Q2hvaWNlc0luUmVzdWx0cygpO1xuICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBpblJlc3VsdHMubGVuZ3RoID4gMCA/IFwibm9uZVwiIDogXCJcIjtcbiAgICAgICAgaW5SZXN1bHRzLmZvckVhY2goZnVuY3Rpb24oY2hvaWNlKSB7XG4gICAgICAgICAgYWRkQ2hvaWNlVG9XaWRnZXQoY2hvaWNlLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5vdEluUmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uKGNob2ljZSkge1xuICAgICAgICAgIGFkZENob2ljZVRvV2lkZ2V0KGNob2ljZSwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICByZXN1bHQgPSBxdWVzdGlvbi5yZXN1bHRFbCA9IFNvcnRhYmxlLmNyZWF0ZShyZXN1bHRFbCwge1xuICAgICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgICAgZGlzYWJsZWQ6IHF1ZXN0aW9uLmlzUmVhZE9ubHksXG4gICAgICAgIGdyb3VwOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICBvblNvcnQ6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICBpZiAocmVzdWx0RWwuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0RWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHRFbC5jaGlsZHJlbltpXS5kYXRhc2V0LnZhbHVlID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICByZXN1bHQucHVzaChyZXN1bHRFbC5jaGlsZHJlbltpXS5kYXRhc2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUgPSB0cnVlO1xuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gcmVzdWx0O1xuICAgICAgICAgIGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc291cmNlID0gcXVlc3Rpb24uc291cmNlRWwgPSBTb3J0YWJsZS5jcmVhdGUoc291cmNlRWwsIHtcbiAgICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICAgIGRpc2FibGVkOiBxdWVzdGlvbi5pc1JlYWRPbmx5LFxuICAgICAgICBncm91cDogcXVlc3Rpb24ubmFtZVxuICAgICAgfSk7XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XG4gICAgICAgICAgcmVzdWx0Lm9wdGlvbnMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHNvdXJjZS5vcHRpb25zLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQub3B0aW9ucy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIHNvdXJjZS5vcHRpb25zLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHF1ZXN0aW9uLnJlc3VsdEVsLmRlc3Ryb3koKTtcbiAgICAgIHF1ZXN0aW9uLnNvdXJjZUVsLmRlc3Ryb3koKTtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zb3J0YWJsZWpzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlNvcnRhYmxlXCIsXCJjb21tb25qczJcIjpcInNvcnRhYmxlanNcIixcImNvbW1vbmpzXCI6XCJzb3J0YWJsZWpzXCIsXCJhbWRcIjpcInNvcnRhYmxlanNcIn1cbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIl0sInNvdXJjZVJvb3QiOiIifQ==