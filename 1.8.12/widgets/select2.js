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
          category: "general",
          default: "standard",
          choices: ["select2", "standard"],
        });
        Survey.JsonObject.metaData.addProperty("dropdown", {
          dependsOn: "renderAs",
          category: "general",
          name: "select2Config",
          visibleIf: function (obj) {
            return obj.renderAs == "select2";
          },
        });
      }
      if (activatedBy == "customtype") {
        Survey.JsonObject.metaData.addClass("select2", [], null, "dropdown");
        Survey.JsonObject.metaData.addProperty("select2", {
          name: "select2Config",
          category: "general",
          default: null,
        });
      }
    },
    htmlTemplate:
      "<div><select style='width: 100%;'></select><textarea></textarea></div>",
    afterRender: function (question, el) {
      var select2Config = question.select2Config;
      var settings =
        select2Config && typeof select2Config == "string"
          ? JSON.parse(select2Config)
          : select2Config;
      if (!settings) settings = {};
      var $el = $(el).is("select") ? $(el) : $(el).find("select");
      var $otherElement = $(el).find("textarea");
      $otherElement.addClass(question.cssClasses.other);
      $otherElement.bind("input propertychange", function () {
        if (isSettingValue) return;
        question.comment = $otherElement.val();
      });

      var updateComment = function () {
        $otherElement.val(question.comment);
        if (question.isOtherSelected) {
          $otherElement.show();
        } else {
          $otherElement.hide();
        }
      };
      var isSettingValue = false;
      var updateValueHandler = function () {
        if (isSettingValue) return;
        isSettingValue = true;
        if ($el.find("option[value='" + question.value + "']").length) {
          $el.val(question.value).trigger("change");
        } else {
          if (question.value !== null && question.value !== undefined) {
            var newOption = new Option(
              question.value, //TODO if question value is object then need to improve
              question.value,
              true,
              true
            );
            $el.append(newOption).trigger("change");
          }
        }
        updateComment();
        isSettingValue = false;
      };
      var updateChoices = function () {
        $el.select2().empty();
        if (!settings.placeholder && question.showOptionsCaption) {
          settings.placeholder = question.optionsCaption;
          settings.allowClear = true;
        }
        if (!settings.theme) {
          settings.theme = "classic";
        }
        settings.disabled = question.isReadOnly;
        if (settings.ajax) {
          $el.select2(settings);
          question.keepIncorrectValues = true;
        } else {
          var data = [];
          if (!!settings.placeholder || question.showOptionsCaption) {
            data.push({ id: "", text: "" });
          }
          settings.data = data.concat(
            question.visibleChoices.map(function (choice) {
              return {
                id: choice.value,
                text: choice.text,
              };
            })
          );
          $el.select2(settings);
        }
        // fixed width accrording to https://stackoverflow.com/questions/45276778/select2-not-responsive-width-larger-than-container
        if (!!el.querySelector(".select2")) {
          el.querySelector(".select2").style.width = "100%";
        }
        if (!!el.nextElementSibling) {
          el.nextElementSibling.style.marginBottom = "1px";
        }
        updateValueHandler();
      };

      $otherElement.prop("disabled", question.isReadOnly);
      question.readOnlyChangedCallback = function () {
        $el.prop("disabled", question.isReadOnly);
        $otherElement.prop("disabled", question.isReadOnly);
      };

      question.registerFunctionOnPropertyValueChanged(
        "visibleChoices",
        function () {
          updateChoices();
        }
      );
      updateChoices();
      $el.on("select2:select", function (e) {
        question.renderedValue = e.target.value;
        updateComment();
      });
      $el.on("select2:unselecting", function (e) {
        question.renderedValue = null;
        updateComment();
      });
      question.valueChangedCallback = updateValueHandler;
      updateValueHandler();
    },
    willUnmount: function (question, el) {
      var $select2 = $(el).find("select");
      if (!!$select2.data("select2")) {
        $select2.off("select2:select").select2("destroy");
      }
      question.readOnlyChangedCallback = null;
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1YjQ4NTM1NmM5NTM5ZDRiOTQ5NyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7Ozs7QUM3REE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDIiwiZmlsZSI6IndpZGdldHMvc2VsZWN0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9zZWxlY3QyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvc2VsZWN0MlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aWRnZXRzL3NlbGVjdDJcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDViNDg1MzU2Yzk1MzlkNGI5NDk3IiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcbiAgJCA9ICQgfHwgd2luZG93LiQ7XG4gIHZhciB3aWRnZXQgPSB7XG4gICAgYWN0aXZhdGVkQnk6IFwicHJvcGVydHlcIixcbiAgICBuYW1lOiBcInNlbGVjdDJcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uc2VsZWN0MjtcbiAgICB9LFxuICAgIGlzRml0OiBmdW5jdGlvbiAocXVlc3Rpb24pIHtcbiAgICAgIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT0gXCJwcm9wZXJ0eVwiKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHF1ZXN0aW9uW1wicmVuZGVyQXNcIl0gPT09IFwic2VsZWN0MlwiICYmXG4gICAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImRyb3Bkb3duXCJcbiAgICAgICAgKTtcbiAgICAgIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT0gXCJ0eXBlXCIpXG4gICAgICAgIHJldHVybiB0eXBlb2YgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImRyb3Bkb3duXCI7XG4gICAgICBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwiY3VzdG9tdHlwZVwiKVxuICAgICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInNlbGVjdDJcIjtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24gKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBpZiAoIXRoaXMud2lkZ2V0SXNMb2FkZWQoKSkgcmV0dXJuO1xuICAgICAgd2lkZ2V0LmFjdGl2YXRlZEJ5ID0gYWN0aXZhdGVkQnk7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5yZW1vdmVQcm9wZXJ0eShcImRyb3Bkb3duXCIsIFwicmVuZGVyQXNcIik7XG4gICAgICBpZiAoYWN0aXZhdGVkQnkgPT0gXCJwcm9wZXJ0eVwiKSB7XG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwiZHJvcGRvd25cIiwge1xuICAgICAgICAgIG5hbWU6IFwicmVuZGVyQXNcIixcbiAgICAgICAgICBjYXRlZ29yeTogXCJnZW5lcmFsXCIsXG4gICAgICAgICAgZGVmYXVsdDogXCJzdGFuZGFyZFwiLFxuICAgICAgICAgIGNob2ljZXM6IFtcInNlbGVjdDJcIiwgXCJzdGFuZGFyZFwiXSxcbiAgICAgICAgfSk7XG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwiZHJvcGRvd25cIiwge1xuICAgICAgICAgIGRlcGVuZHNPbjogXCJyZW5kZXJBc1wiLFxuICAgICAgICAgIGNhdGVnb3J5OiBcImdlbmVyYWxcIixcbiAgICAgICAgICBuYW1lOiBcInNlbGVjdDJDb25maWdcIixcbiAgICAgICAgICB2aXNpYmxlSWY6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmoucmVuZGVyQXMgPT0gXCJzZWxlY3QyXCI7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoYWN0aXZhdGVkQnkgPT0gXCJjdXN0b210eXBlXCIpIHtcbiAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJzZWxlY3QyXCIsIFtdLCBudWxsLCBcImRyb3Bkb3duXCIpO1xuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInNlbGVjdDJcIiwge1xuICAgICAgICAgIG5hbWU6IFwic2VsZWN0MkNvbmZpZ1wiLFxuICAgICAgICAgIGNhdGVnb3J5OiBcImdlbmVyYWxcIixcbiAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGh0bWxUZW1wbGF0ZTpcbiAgICAgIFwiPGRpdj48c2VsZWN0IHN0eWxlPSd3aWR0aDogMTAwJTsnPjwvc2VsZWN0Pjx0ZXh0YXJlYT48L3RleHRhcmVhPjwvZGl2PlwiLFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XG4gICAgICB2YXIgc2VsZWN0MkNvbmZpZyA9IHF1ZXN0aW9uLnNlbGVjdDJDb25maWc7XG4gICAgICB2YXIgc2V0dGluZ3MgPVxuICAgICAgICBzZWxlY3QyQ29uZmlnICYmIHR5cGVvZiBzZWxlY3QyQ29uZmlnID09IFwic3RyaW5nXCJcbiAgICAgICAgICA/IEpTT04ucGFyc2Uoc2VsZWN0MkNvbmZpZylcbiAgICAgICAgICA6IHNlbGVjdDJDb25maWc7XG4gICAgICBpZiAoIXNldHRpbmdzKSBzZXR0aW5ncyA9IHt9O1xuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xuICAgICAgdmFyICRvdGhlckVsZW1lbnQgPSAkKGVsKS5maW5kKFwidGV4dGFyZWFcIik7XG4gICAgICAkb3RoZXJFbGVtZW50LmFkZENsYXNzKHF1ZXN0aW9uLmNzc0NsYXNzZXMub3RoZXIpO1xuICAgICAgJG90aGVyRWxlbWVudC5iaW5kKFwiaW5wdXQgcHJvcGVydHljaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNTZXR0aW5nVmFsdWUpIHJldHVybjtcbiAgICAgICAgcXVlc3Rpb24uY29tbWVudCA9ICRvdGhlckVsZW1lbnQudmFsKCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHVwZGF0ZUNvbW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRvdGhlckVsZW1lbnQudmFsKHF1ZXN0aW9uLmNvbW1lbnQpO1xuICAgICAgICBpZiAocXVlc3Rpb24uaXNPdGhlclNlbGVjdGVkKSB7XG4gICAgICAgICAgJG90aGVyRWxlbWVudC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJG90aGVyRWxlbWVudC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgaXNTZXR0aW5nVmFsdWUgPSBmYWxzZTtcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc1NldHRpbmdWYWx1ZSkgcmV0dXJuO1xuICAgICAgICBpc1NldHRpbmdWYWx1ZSA9IHRydWU7XG4gICAgICAgIGlmICgkZWwuZmluZChcIm9wdGlvblt2YWx1ZT0nXCIgKyBxdWVzdGlvbi52YWx1ZSArIFwiJ11cIikubGVuZ3RoKSB7XG4gICAgICAgICAgJGVsLnZhbChxdWVzdGlvbi52YWx1ZSkudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocXVlc3Rpb24udmFsdWUgIT09IG51bGwgJiYgcXVlc3Rpb24udmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIG5ld09wdGlvbiA9IG5ldyBPcHRpb24oXG4gICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlLCAvL1RPRE8gaWYgcXVlc3Rpb24gdmFsdWUgaXMgb2JqZWN0IHRoZW4gbmVlZCB0byBpbXByb3ZlXG4gICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgJGVsLmFwcGVuZChuZXdPcHRpb24pLnRyaWdnZXIoXCJjaGFuZ2VcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUNvbW1lbnQoKTtcbiAgICAgICAgaXNTZXR0aW5nVmFsdWUgPSBmYWxzZTtcbiAgICAgIH07XG4gICAgICB2YXIgdXBkYXRlQ2hvaWNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGVsLnNlbGVjdDIoKS5lbXB0eSgpO1xuICAgICAgICBpZiAoIXNldHRpbmdzLnBsYWNlaG9sZGVyICYmIHF1ZXN0aW9uLnNob3dPcHRpb25zQ2FwdGlvbikge1xuICAgICAgICAgIHNldHRpbmdzLnBsYWNlaG9sZGVyID0gcXVlc3Rpb24ub3B0aW9uc0NhcHRpb247XG4gICAgICAgICAgc2V0dGluZ3MuYWxsb3dDbGVhciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZXR0aW5ncy50aGVtZSkge1xuICAgICAgICAgIHNldHRpbmdzLnRoZW1lID0gXCJjbGFzc2ljXCI7XG4gICAgICAgIH1cbiAgICAgICAgc2V0dGluZ3MuZGlzYWJsZWQgPSBxdWVzdGlvbi5pc1JlYWRPbmx5O1xuICAgICAgICBpZiAoc2V0dGluZ3MuYWpheCkge1xuICAgICAgICAgICRlbC5zZWxlY3QyKHNldHRpbmdzKTtcbiAgICAgICAgICBxdWVzdGlvbi5rZWVwSW5jb3JyZWN0VmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICAgIGlmICghIXNldHRpbmdzLnBsYWNlaG9sZGVyIHx8IHF1ZXN0aW9uLnNob3dPcHRpb25zQ2FwdGlvbikge1xuICAgICAgICAgICAgZGF0YS5wdXNoKHsgaWQ6IFwiXCIsIHRleHQ6IFwiXCIgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNldHRpbmdzLmRhdGEgPSBkYXRhLmNvbmNhdChcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzLm1hcChmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IGNob2ljZS52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBjaG9pY2UudGV4dCxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICAkZWwuc2VsZWN0MihzZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZml4ZWQgd2lkdGggYWNjcm9yZGluZyB0byBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTI3Njc3OC9zZWxlY3QyLW5vdC1yZXNwb25zaXZlLXdpZHRoLWxhcmdlci10aGFuLWNvbnRhaW5lclxuICAgICAgICBpZiAoISFlbC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdDJcIikpIHtcbiAgICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdDJcIikuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISFlbC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgICBlbC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWFyZ2luQm90dG9tID0gXCIxcHhcIjtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcbiAgICAgIH07XG5cbiAgICAgICRvdGhlckVsZW1lbnQucHJvcChcImRpc2FibGVkXCIsIHF1ZXN0aW9uLmlzUmVhZE9ubHkpO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRlbC5wcm9wKFwiZGlzYWJsZWRcIiwgcXVlc3Rpb24uaXNSZWFkT25seSk7XG4gICAgICAgICRvdGhlckVsZW1lbnQucHJvcChcImRpc2FibGVkXCIsIHF1ZXN0aW9uLmlzUmVhZE9ubHkpO1xuICAgICAgfTtcblxuICAgICAgcXVlc3Rpb24ucmVnaXN0ZXJGdW5jdGlvbk9uUHJvcGVydHlWYWx1ZUNoYW5nZWQoXG4gICAgICAgIFwidmlzaWJsZUNob2ljZXNcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHVwZGF0ZUNob2ljZXMoKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHVwZGF0ZUNob2ljZXMoKTtcbiAgICAgICRlbC5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHF1ZXN0aW9uLnJlbmRlcmVkVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdXBkYXRlQ29tbWVudCgpO1xuICAgICAgfSk7XG4gICAgICAkZWwub24oXCJzZWxlY3QyOnVuc2VsZWN0aW5nXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHF1ZXN0aW9uLnJlbmRlcmVkVmFsdWUgPSBudWxsO1xuICAgICAgICB1cGRhdGVDb21tZW50KCk7XG4gICAgICB9KTtcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xuICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyICRzZWxlY3QyID0gJChlbCkuZmluZChcInNlbGVjdFwiKTtcbiAgICAgIGlmICghISRzZWxlY3QyLmRhdGEoXCJzZWxlY3QyXCIpKSB7XG4gICAgICAgICRzZWxlY3QyLm9mZihcInNlbGVjdDI6c2VsZWN0XCIpLnNlbGVjdDIoXCJkZXN0cm95XCIpO1xuICAgICAgfVxuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgIH0sXG4gIH07XG5cbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCk7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5LCB3aW5kb3cuJCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZWxlY3QyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2Il0sInNvdXJjZVJvb3QiOiIifQ==