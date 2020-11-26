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
        return question.getType() === "dropdown";
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
          default: "default",
          choices: ["select2", "default"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZGIyMTNkMDY1YzNkODAxNzg0OSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7Ozs7QUM3REE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDIiwiZmlsZSI6IndpZGdldHMvc2VsZWN0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9zZWxlY3QyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvc2VsZWN0MlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aWRnZXRzL3NlbGVjdDJcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZkYjIxM2QwNjVjM2Q4MDE3ODQ5IiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcclxuICAkID0gJCB8fCB3aW5kb3cuJDtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgYWN0aXZhdGVkQnk6IFwicHJvcGVydHlcIixcclxuICAgIG5hbWU6IFwic2VsZWN0MlwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uc2VsZWN0MjtcclxuICAgIH0sXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24gKHF1ZXN0aW9uKSB7XHJcbiAgICAgIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT0gXCJwcm9wZXJ0eVwiKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBxdWVzdGlvbltcInJlbmRlckFzXCJdID09PSBcInNlbGVjdDJcIiAmJlxyXG4gICAgICAgICAgcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImRyb3Bkb3duXCJcclxuICAgICAgICApO1xyXG4gICAgICBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwidHlwZVwiKVxyXG4gICAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiZHJvcGRvd25cIjtcclxuICAgICAgaWYgKHdpZGdldC5hY3RpdmF0ZWRCeSA9PSBcImN1c3RvbXR5cGVcIilcclxuICAgICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInNlbGVjdDJcIjtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24gKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgIGlmICghdGhpcy53aWRnZXRJc0xvYWRlZCgpKSByZXR1cm47XHJcbiAgICAgIHdpZGdldC5hY3RpdmF0ZWRCeSA9IGFjdGl2YXRlZEJ5O1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5yZW1vdmVQcm9wZXJ0eShcImRyb3Bkb3duXCIsIFwicmVuZGVyQXNcIik7XHJcbiAgICAgIGlmIChhY3RpdmF0ZWRCeSA9PSBcInByb3BlcnR5XCIpIHtcclxuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImRyb3Bkb3duXCIsIHtcclxuICAgICAgICAgIG5hbWU6IFwicmVuZGVyQXNcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcImdlbmVyYWxcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgY2hvaWNlczogW1wic2VsZWN0MlwiLCBcImRlZmF1bHRcIl0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJkcm9wZG93blwiLCB7XHJcbiAgICAgICAgICBkZXBlbmRzT246IFwicmVuZGVyQXNcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcImdlbmVyYWxcIixcclxuICAgICAgICAgIG5hbWU6IFwic2VsZWN0MkNvbmZpZ1wiLFxyXG4gICAgICAgICAgdmlzaWJsZUlmOiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmoucmVuZGVyQXMgPT0gXCJzZWxlY3QyXCI7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChhY3RpdmF0ZWRCeSA9PSBcImN1c3RvbXR5cGVcIikge1xyXG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic2VsZWN0MlwiLCBbXSwgbnVsbCwgXCJkcm9wZG93blwiKTtcclxuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInNlbGVjdDJcIiwge1xyXG4gICAgICAgICAgbmFtZTogXCJzZWxlY3QyQ29uZmlnXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJnZW5lcmFsXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaHRtbFRlbXBsYXRlOlxyXG4gICAgICBcIjxkaXY+PHNlbGVjdCBzdHlsZT0nd2lkdGg6IDEwMCU7Jz48L3NlbGVjdD48dGV4dGFyZWE+PC90ZXh0YXJlYT48L2Rpdj5cIixcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciBzZWxlY3QyQ29uZmlnID0gcXVlc3Rpb24uc2VsZWN0MkNvbmZpZztcclxuICAgICAgdmFyIHNldHRpbmdzID1cclxuICAgICAgICBzZWxlY3QyQ29uZmlnICYmIHR5cGVvZiBzZWxlY3QyQ29uZmlnID09IFwic3RyaW5nXCJcclxuICAgICAgICAgID8gSlNPTi5wYXJzZShzZWxlY3QyQ29uZmlnKVxyXG4gICAgICAgICAgOiBzZWxlY3QyQ29uZmlnO1xyXG4gICAgICBpZiAoIXNldHRpbmdzKSBzZXR0aW5ncyA9IHt9O1xyXG4gICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJzZWxlY3RcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XHJcbiAgICAgIHZhciAkb3RoZXJFbGVtZW50ID0gJChlbCkuZmluZChcInRleHRhcmVhXCIpO1xyXG4gICAgICAkb3RoZXJFbGVtZW50LmFkZENsYXNzKHF1ZXN0aW9uLmNzc0NsYXNzZXMub3RoZXIpO1xyXG4gICAgICAkb3RoZXJFbGVtZW50LmJpbmQoXCJpbnB1dCBwcm9wZXJ0eWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGlzU2V0dGluZ1ZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgcXVlc3Rpb24uY29tbWVudCA9ICRvdGhlckVsZW1lbnQudmFsKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdmFyIHVwZGF0ZUNvbW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJG90aGVyRWxlbWVudC52YWwocXVlc3Rpb24uY29tbWVudCk7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmlzT3RoZXJTZWxlY3RlZCkge1xyXG4gICAgICAgICAgJG90aGVyRWxlbWVudC5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRvdGhlckVsZW1lbnQuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgdmFyIGlzU2V0dGluZ1ZhbHVlID0gZmFsc2U7XHJcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGlzU2V0dGluZ1ZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgaXNTZXR0aW5nVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgIGlmICgkZWwuZmluZChcIm9wdGlvblt2YWx1ZT0nXCIgKyBxdWVzdGlvbi52YWx1ZSArIFwiJ11cIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAkZWwudmFsKHF1ZXN0aW9uLnZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAocXVlc3Rpb24udmFsdWUgIT09IG51bGwgJiYgcXVlc3Rpb24udmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB2YXIgbmV3T3B0aW9uID0gbmV3IE9wdGlvbihcclxuICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSwgLy9UT0RPIGlmIHF1ZXN0aW9uIHZhbHVlIGlzIG9iamVjdCB0aGVuIG5lZWQgdG8gaW1wcm92ZVxyXG4gICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAkZWwuYXBwZW5kKG5ld09wdGlvbikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlQ29tbWVudCgpO1xyXG4gICAgICAgIGlzU2V0dGluZ1ZhbHVlID0gZmFsc2U7XHJcbiAgICAgIH07XHJcbiAgICAgIHZhciB1cGRhdGVDaG9pY2VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRlbC5zZWxlY3QyKCkuZW1wdHkoKTtcclxuICAgICAgICBpZiAoIXNldHRpbmdzLnBsYWNlaG9sZGVyICYmIHF1ZXN0aW9uLnNob3dPcHRpb25zQ2FwdGlvbikge1xyXG4gICAgICAgICAgc2V0dGluZ3MucGxhY2Vob2xkZXIgPSBxdWVzdGlvbi5vcHRpb25zQ2FwdGlvbjtcclxuICAgICAgICAgIHNldHRpbmdzLmFsbG93Q2xlYXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNldHRpbmdzLnRoZW1lKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy50aGVtZSA9IFwiY2xhc3NpY1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXR0aW5ncy5kaXNhYmxlZCA9IHF1ZXN0aW9uLmlzUmVhZE9ubHk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLmFqYXgpIHtcclxuICAgICAgICAgICRlbC5zZWxlY3QyKHNldHRpbmdzKTtcclxuICAgICAgICAgIHF1ZXN0aW9uLmtlZXBJbmNvcnJlY3RWYWx1ZXMgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgaWYgKCEhc2V0dGluZ3MucGxhY2Vob2xkZXIgfHwgcXVlc3Rpb24uc2hvd09wdGlvbnNDYXB0aW9uKSB7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaCh7IGlkOiBcIlwiLCB0ZXh0OiBcIlwiIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0dGluZ3MuZGF0YSA9IGRhdGEuY29uY2F0KFxyXG4gICAgICAgICAgICBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24gKGNob2ljZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogY2hvaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogY2hvaWNlLnRleHQsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAkZWwuc2VsZWN0MihzZXR0aW5ncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpeGVkIHdpZHRoIGFjY3JvcmRpbmcgdG8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDUyNzY3Nzgvc2VsZWN0Mi1ub3QtcmVzcG9uc2l2ZS13aWR0aC1sYXJnZXItdGhhbi1jb250YWluZXJcclxuICAgICAgICBpZiAoISFlbC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdDJcIikpIHtcclxuICAgICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0MlwiKS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISFlbC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcclxuICAgICAgICAgIGVsLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjFweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgICRvdGhlckVsZW1lbnQucHJvcChcImRpc2FibGVkXCIsIHF1ZXN0aW9uLmlzUmVhZE9ubHkpO1xyXG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkZWwucHJvcChcImRpc2FibGVkXCIsIHF1ZXN0aW9uLmlzUmVhZE9ubHkpO1xyXG4gICAgICAgICRvdGhlckVsZW1lbnQucHJvcChcImRpc2FibGVkXCIsIHF1ZXN0aW9uLmlzUmVhZE9ubHkpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcXVlc3Rpb24ucmVnaXN0ZXJGdW5jdGlvbk9uUHJvcGVydHlWYWx1ZUNoYW5nZWQoXHJcbiAgICAgICAgXCJ2aXNpYmxlQ2hvaWNlc1wiLFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHVwZGF0ZUNob2ljZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIHVwZGF0ZUNob2ljZXMoKTtcclxuICAgICAgJGVsLm9uKFwic2VsZWN0MjpzZWxlY3RcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBxdWVzdGlvbi5yZW5kZXJlZFZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdXBkYXRlQ29tbWVudCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgJGVsLm9uKFwic2VsZWN0Mjp1bnNlbGVjdGluZ1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHF1ZXN0aW9uLnJlbmRlcmVkVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHVwZGF0ZUNvbW1lbnQoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICB2YXIgJHNlbGVjdDIgPSAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICBpZiAoISEkc2VsZWN0Mi5kYXRhKFwic2VsZWN0MlwiKSkge1xyXG4gICAgICAgICRzZWxlY3QyLm9mZihcInNlbGVjdDI6c2VsZWN0XCIpLnNlbGVjdDIoXCJkZXN0cm95XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gbnVsbDtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCk7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXksIHdpbmRvdy4kKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VsZWN0Mi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiJdLCJzb3VyY2VSb290IjoiIn0=