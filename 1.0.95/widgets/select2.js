(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("widgets/select2", [], factory);
	else if(typeof exports === 'object')
		exports["widgets/select2"] = factory();
	else
		root["widgets/select2"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey, $) {
  $ = $ || window.$;
  var widget = {
    activatedBy: "property",
    name: "select2",
    htmlTemplate: "<select style='width: 100%;'></select>",
    widgetIsLoaded: function () {
      return typeof $ == "function" && !!$.fn.select2;
    },
    isFit: function (question) {
      if (widget.activatedBy == "property")
        return (
          question["renderAs"] === "select2" &&
          question.getType() === "dropdown"
        );
      if (widget.activatedBy == "type")
        return typeof question.getType() === "dropdown";
      if (widget.activatedBy == "customtype")
        return question.getType() === "select2";
      return false;
    },
    activatedByChanged: function (activatedBy) {
      if (!this.widgetIsLoaded()) return;
      widget.activatedBy = activatedBy;
      Survey.JsonObject.metaData.removeProperty("dropdown", "renderAs");
      if (activatedBy == "property") {
        Survey.JsonObject.metaData.addProperty("dropdown", {
          name: "renderAs",
          default: "standard",
          choices: ["standard", "select2"]
        });
        Survey.JsonObject.metaData.addProperty("dropdown", {
          name: "select2Config",
          default: null
        });
      }
      if (activatedBy == "customtype") {
        Survey.JsonObject.metaData.addClass("select2", [], null, "dropdown");
        Survey.JsonObject.metaData.addProperty("select2", {
          name: "select2Config",
          default: null
        });
      }
    },
    afterRender: function (question, el) {
      var settings = question.select2Config;
      var $el = $(el).is("select") ? $(el) : $(el).find("select");
      var othersEl = document.createElement("input");
      othersEl.type = "text";
      othersEl.style.marginTop = "3px";
      othersEl.style.display = "none";
      othersEl.style.width = "100%";
      $el
        .parent()
        .get(0)
        .appendChild(othersEl);

      var updateValueHandler = function () {
        var qText = (typeof question.value === "object")

        if ($el.find("option[value='" + question.value + "']").length) {
          $el.val(question.value).trigger("change");
        } else {
          var newOption = new Option(
            question.value, //TODO if question value is object then need to improve
            question.value,
            true,
            true
          );
          $el.append(newOption).trigger("change");
        }

        othersEl.style.display = !question.isOtherSelected ? "none" : "";
      };
      var updateCommentHandler = function () {
        othersEl.value = question.comment ? question.comment : "";
      };
      var othersElChanged = function () {
        question.comment = othersEl.value;
      };
      var updateChoices = function () {
        $el.select2().empty();

        if (settings) {
          if (settings.ajax) {
            $el.select2(settings);
            question.clearIncorrectValuesCallback = function () { };
          } else {
            settings.data = question.visibleChoices.map(function (choice) {
              return {
                id: choice.value,
                text: choice.text
              };
            });
            $el.select2(settings);
          }
        } else {
          $el.select2({
            theme: "classic",
            disabled: question.isReadOnly,
            data: question.visibleChoices.map(function (choice) {
              return {
                id: choice.value,
                text: choice.text
              };
            })
          });
        }

        updateValueHandler();
        updateCommentHandler();
      };

      question.readOnlyChangedCallback = function () {
        $el.prop("disabled", question.isReadOnly);
      };

      question.registerFunctionOnPropertyValueChanged(
        "visibleChoices",
        function () {
          updateChoices();
        }
      );
      updateChoices();
      $el.on("select2:select", function (e) {
        question.value = e.target.value;
      });
      $el.on("select2:unselecting", function (e) {
        question.value = null;
      });
      othersEl.onchange = othersElChanged;
      question.valueChangedCallback = updateValueHandler;
      question.commentChangedCallback = updateCommentHandler;
      updateValueHandler();
      updateCommentHandler();
    },
    willUnmount: function (question, el) {
      $(el)
        .find("select")
        .off("select2:select")
        .select2("destroy");
      question.readOnlyChangedCallback = null;
      question.clearIncorrectValuesCallback = null;
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget);
}

if (typeof Survey !== "undefined") {
  init(Survey, window.$);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYjhiYjNmM2E0NzU4OTg5MGI4YyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3REE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDIiwiZmlsZSI6IndpZGdldHMvc2VsZWN0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9zZWxlY3QyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvc2VsZWN0MlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aWRnZXRzL3NlbGVjdDJcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZiOGJiM2YzYTQ3NTg5ODkwYjhjIiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcbiAgJCA9ICQgfHwgd2luZG93LiQ7XG4gIHZhciB3aWRnZXQgPSB7XG4gICAgYWN0aXZhdGVkQnk6IFwicHJvcGVydHlcIixcbiAgICBuYW1lOiBcInNlbGVjdDJcIixcbiAgICBodG1sVGVtcGxhdGU6IFwiPHNlbGVjdCBzdHlsZT0nd2lkdGg6IDEwMCU7Jz48L3NlbGVjdD5cIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uc2VsZWN0MjtcbiAgICB9LFxuICAgIGlzRml0OiBmdW5jdGlvbiAocXVlc3Rpb24pIHtcbiAgICAgIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT0gXCJwcm9wZXJ0eVwiKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHF1ZXN0aW9uW1wicmVuZGVyQXNcIl0gPT09IFwic2VsZWN0MlwiICYmXG4gICAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImRyb3Bkb3duXCJcbiAgICAgICAgKTtcbiAgICAgIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT0gXCJ0eXBlXCIpXG4gICAgICAgIHJldHVybiB0eXBlb2YgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImRyb3Bkb3duXCI7XG4gICAgICBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwiY3VzdG9tdHlwZVwiKVxuICAgICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInNlbGVjdDJcIjtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24gKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBpZiAoIXRoaXMud2lkZ2V0SXNMb2FkZWQoKSkgcmV0dXJuO1xuICAgICAgd2lkZ2V0LmFjdGl2YXRlZEJ5ID0gYWN0aXZhdGVkQnk7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5yZW1vdmVQcm9wZXJ0eShcImRyb3Bkb3duXCIsIFwicmVuZGVyQXNcIik7XG4gICAgICBpZiAoYWN0aXZhdGVkQnkgPT0gXCJwcm9wZXJ0eVwiKSB7XG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwiZHJvcGRvd25cIiwge1xuICAgICAgICAgIG5hbWU6IFwicmVuZGVyQXNcIixcbiAgICAgICAgICBkZWZhdWx0OiBcInN0YW5kYXJkXCIsXG4gICAgICAgICAgY2hvaWNlczogW1wic3RhbmRhcmRcIiwgXCJzZWxlY3QyXCJdXG4gICAgICAgIH0pO1xuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImRyb3Bkb3duXCIsIHtcbiAgICAgICAgICBuYW1lOiBcInNlbGVjdDJDb25maWdcIixcbiAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGFjdGl2YXRlZEJ5ID09IFwiY3VzdG9tdHlwZVwiKSB7XG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic2VsZWN0MlwiLCBbXSwgbnVsbCwgXCJkcm9wZG93blwiKTtcbiAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJzZWxlY3QyXCIsIHtcbiAgICAgICAgICBuYW1lOiBcInNlbGVjdDJDb25maWdcIixcbiAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IHF1ZXN0aW9uLnNlbGVjdDJDb25maWc7XG4gICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJzZWxlY3RcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XG4gICAgICB2YXIgb3RoZXJzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBvdGhlcnNFbC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICBvdGhlcnNFbC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjNweFwiO1xuICAgICAgb3RoZXJzRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgb3RoZXJzRWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICRlbFxuICAgICAgICAucGFyZW50KClcbiAgICAgICAgLmdldCgwKVxuICAgICAgICAuYXBwZW5kQ2hpbGQob3RoZXJzRWwpO1xuXG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcVRleHQgPSAodHlwZW9mIHF1ZXN0aW9uLnZhbHVlID09PSBcIm9iamVjdFwiKVxuXG4gICAgICAgIGlmICgkZWwuZmluZChcIm9wdGlvblt2YWx1ZT0nXCIgKyBxdWVzdGlvbi52YWx1ZSArIFwiJ11cIikubGVuZ3RoKSB7XG4gICAgICAgICAgJGVsLnZhbChxdWVzdGlvbi52YWx1ZSkudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbmV3T3B0aW9uID0gbmV3IE9wdGlvbihcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlLCAvL1RPRE8gaWYgcXVlc3Rpb24gdmFsdWUgaXMgb2JqZWN0IHRoZW4gbmVlZCB0byBpbXByb3ZlXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgICAkZWwuYXBwZW5kKG5ld09wdGlvbikudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG90aGVyc0VsLnN0eWxlLmRpc3BsYXkgPSAhcXVlc3Rpb24uaXNPdGhlclNlbGVjdGVkID8gXCJub25lXCIgOiBcIlwiO1xuICAgICAgfTtcbiAgICAgIHZhciB1cGRhdGVDb21tZW50SGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3RoZXJzRWwudmFsdWUgPSBxdWVzdGlvbi5jb21tZW50ID8gcXVlc3Rpb24uY29tbWVudCA6IFwiXCI7XG4gICAgICB9O1xuICAgICAgdmFyIG90aGVyc0VsQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcXVlc3Rpb24uY29tbWVudCA9IG90aGVyc0VsLnZhbHVlO1xuICAgICAgfTtcbiAgICAgIHZhciB1cGRhdGVDaG9pY2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkZWwuc2VsZWN0MigpLmVtcHR5KCk7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzKSB7XG4gICAgICAgICAgaWYgKHNldHRpbmdzLmFqYXgpIHtcbiAgICAgICAgICAgICRlbC5zZWxlY3QyKHNldHRpbmdzKTtcbiAgICAgICAgICAgIHF1ZXN0aW9uLmNsZWFySW5jb3JyZWN0VmFsdWVzQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldHRpbmdzLmRhdGEgPSBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBjaG9pY2UudmFsdWUsXG4gICAgICAgICAgICAgICAgdGV4dDogY2hvaWNlLnRleHRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJGVsLnNlbGVjdDIoc2V0dGluZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZWwuc2VsZWN0Mih7XG4gICAgICAgICAgICB0aGVtZTogXCJjbGFzc2ljXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogcXVlc3Rpb24uaXNSZWFkT25seSxcbiAgICAgICAgICAgIGRhdGE6IHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzLm1hcChmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IGNob2ljZS52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBjaG9pY2UudGV4dFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xuICAgICAgICB1cGRhdGVDb21tZW50SGFuZGxlcigpO1xuICAgICAgfTtcblxuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRlbC5wcm9wKFwiZGlzYWJsZWRcIiwgcXVlc3Rpb24uaXNSZWFkT25seSk7XG4gICAgICB9O1xuXG4gICAgICBxdWVzdGlvbi5yZWdpc3RlckZ1bmN0aW9uT25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChcbiAgICAgICAgXCJ2aXNpYmxlQ2hvaWNlc1wiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdXBkYXRlQ2hvaWNlcygpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgdXBkYXRlQ2hvaWNlcygpO1xuICAgICAgJGVsLm9uKFwic2VsZWN0MjpzZWxlY3RcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgJGVsLm9uKFwic2VsZWN0Mjp1bnNlbGVjdGluZ1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICAgIG90aGVyc0VsLm9uY2hhbmdlID0gb3RoZXJzRWxDaGFuZ2VkO1xuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XG4gICAgICBxdWVzdGlvbi5jb21tZW50Q2hhbmdlZENhbGxiYWNrID0gdXBkYXRlQ29tbWVudEhhbmRsZXI7XG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcbiAgICAgIHVwZGF0ZUNvbW1lbnRIYW5kbGVyKCk7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgJChlbClcbiAgICAgICAgLmZpbmQoXCJzZWxlY3RcIilcbiAgICAgICAgLm9mZihcInNlbGVjdDI6c2VsZWN0XCIpXG4gICAgICAgIC5zZWxlY3QyKFwiZGVzdHJveVwiKTtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gbnVsbDtcbiAgICAgIHF1ZXN0aW9uLmNsZWFySW5jb3JyZWN0VmFsdWVzQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0KTtcbn1cblxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaW5pdChTdXJ2ZXksIHdpbmRvdy4kKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NlbGVjdDIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDciXSwic291cmNlUm9vdCI6IiJ9