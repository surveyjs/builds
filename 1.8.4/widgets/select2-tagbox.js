(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("widgets/select2-tagbox", [], factory);
	else if(typeof exports === 'object')
		exports["widgets/select2-tagbox"] = factory();
	else
		root["widgets/select2-tagbox"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey, $) {
  $ = $ || window.$;
  var widget = {
    name: "tagbox",
    title: "Tag box",
    iconName: "icon-tagbox",
    widgetIsLoaded: function () {
      return typeof $ == "function" && !!$.fn.select2;
    },
    defaultJSON: {
      choices: ["Item 1", "Item 2", "Item 3"],
    },
    htmlTemplate:
      "<div><select multiple='multiple' style='width: 100%;'></select><textarea></textarea></div>",
    isFit: function (question) {
      return question.getType() === "tagbox";
    },
    activatedByChanged: function (activatedBy) {
      Survey.JsonObject.metaData.addClass(
        "tagbox",
        [
          { name: "hasOther:boolean", visible: false },
          { name: "hasSelectAll:boolean", visible: false },
          { name: "hasNone:boolean", visible: false },
          { name: "otherText", visible: false },
          { name: "selectAllText", visible: false },
          { name: "noneText", visible: false },
        ],
        null,
        "checkbox"
      );
      Survey.JsonObject.metaData.addProperty("tagbox", {
        name: "select2Config",
        category: "general",
        default: null,
      });
      Survey.JsonObject.metaData.addProperty("tagbox", {
        name: "placeholder",
        category: "general",
        default: "",
      });
      Survey.matrixDropdownColumnTypes.tagbox = {
        properties: [
          "choices",
          "choicesOrder",
          "choicesByUrl",
          "optionsCaption",
          "otherText",
          "choicesVisibleIf",
        ],
      };
    },
    fixStyles: function (el) {
      el.parentElement.querySelector(".select2-search__field").style.border =
        "none";
    },
    afterRender: function (question, el) {
      var self = this;
      var select2Config = question.select2Config;
      var settings =
        select2Config && typeof select2Config == "string"
          ? JSON.parse(select2Config)
          : select2Config;
      var placeholder = question.placeholder;
      var $el = $(el).is("select") ? $(el) : $(el).find("select");

      self.willUnmount(question, el);

      $el.select2({
        tags: "true",
        disabled: question.isReadOnly,
        theme: "classic",
      });

      var $otherElement = $(el).find("textarea");
      if (
        !!question.survey &&
        !!question.survey.css &&
        !!question.survey.css.checkbox
      ) {
        $otherElement.addClass(question.survey.css.checkbox.other);
      }
      $otherElement.bind("input propertychange", function () {
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

      self.fixStyles(el);
      var question;
      var updateValueHandler = function () {
        if (question.hasSelectAll && question.isAllSelected) {
          $el
            .val([question.selectAllItemValue.value].concat(question.value))
            .trigger("change");
        } else {
          $el.val(question.value).trigger("change");
        }
        self.fixStyles(el);
        updateComment();
      };
      var updateChoices = function () {
        $el.select2().empty();

        if (settings) {
          if (placeholder) settings.placeholder = placeholder;

          if (settings.ajax) {
            $el.select2(settings);
          } else {
            settings.data = question.visibleChoices.map(function (choice) {
              return {
                id: choice.value,
                text: choice.text,
              };
            });
            $el.select2(settings);
          }
        } else {
          $el.select2({
            placeholder: placeholder,
            data: question.visibleChoices.map(function (choice) {
              return {
                id: choice.value,
                text: choice.text,
              };
            }),
          });
        }
        updateValueHandler();
      };
      var isAllItemSelected = function (value) {
        return (
          question.hasSelectAll && value === question.selectAllItemValue.value
        );
      };
      question._propertyValueChangedFnSelect2 = function () {
        updateChoices();
      };

      $otherElement.prop("disabled", question.isReadOnly);
      question.readOnlyChangedCallback = function () {
        $el.prop("disabled", question.isReadOnly);
        $otherElement.prop("disabled", question.isReadOnly);
      };
      question.registerFunctionOnPropertyValueChanged(
        "visibleChoices",
        question._propertyValueChangedFnSelect2
      );
      question.valueChangedCallback = updateValueHandler;
      $el.on("select2:select", function (e) {
        if (isAllItemSelected(e.params.data.id)) {
          question.selectAll();
        } else {
          question.value = (question.value || []).concat(e.params.data.id);
        }
        updateComment();
      });
      $el.on("select2:unselect", function (e) {
        var index = (question.value || []).indexOf(e.params.data.id);
        if (isAllItemSelected(e.params.data.id)) {
          question.clearValue();
        } else if (index !== -1) {
          var val = [].concat(question.value);
          val.splice(index, 1);
          question.value = val;
        }
        updateComment();
      });
      updateChoices();
    },
    willUnmount: function (question, el) {
      if (!question._propertyValueChangedFnSelect2) return;

      var $select2 = $(el).find("select");
      if (!!$select2.data("select2")) {
        $select2.off("select2:select").select2("destroy");
      }
      question.readOnlyChangedCallback = null;
      question.valueChangedCallback = null;
      question.unRegisterFunctionOnPropertyValueChanged(
        "visibleChoices",
        question._propertyValueChangedFnSelect2
      );
      question._propertyValueChangedFnSelect2 = undefined;
    },
    pdfQuestionType: "checkbox",
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey, window.$);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3MGMyOTAzMTVlODczZDRiMTUyMyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi10YWdib3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJDQUEyQztBQUN0RCxXQUFXLCtDQUErQztBQUMxRCxXQUFXLDBDQUEwQztBQUNyRCxXQUFXLG9DQUFvQztBQUMvQyxXQUFXLHdDQUF3QztBQUNuRCxXQUFXLG1DQUFtQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUMiLCJmaWxlIjoid2lkZ2V0cy9zZWxlY3QyLXRhZ2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9zZWxlY3QyLXRhZ2JveFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3aWRnZXRzL3NlbGVjdDItdGFnYm94XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndpZGdldHMvc2VsZWN0Mi10YWdib3hcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDcwYzI5MDMxNWU4NzNkNGIxNTIzIiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcbiAgJCA9ICQgfHwgd2luZG93LiQ7XG4gIHZhciB3aWRnZXQgPSB7XG4gICAgbmFtZTogXCJ0YWdib3hcIixcbiAgICB0aXRsZTogXCJUYWcgYm94XCIsXG4gICAgaWNvbk5hbWU6IFwiaWNvbi10YWdib3hcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uc2VsZWN0MjtcbiAgICB9LFxuICAgIGRlZmF1bHRKU09OOiB7XG4gICAgICBjaG9pY2VzOiBbXCJJdGVtIDFcIiwgXCJJdGVtIDJcIiwgXCJJdGVtIDNcIl0sXG4gICAgfSxcbiAgICBodG1sVGVtcGxhdGU6XG4gICAgICBcIjxkaXY+PHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnIHN0eWxlPSd3aWR0aDogMTAwJTsnPjwvc2VsZWN0Pjx0ZXh0YXJlYT48L3RleHRhcmVhPjwvZGl2PlwiLFxuICAgIGlzRml0OiBmdW5jdGlvbiAocXVlc3Rpb24pIHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwidGFnYm94XCI7XG4gICAgfSxcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uIChhY3RpdmF0ZWRCeSkge1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXG4gICAgICAgIFwidGFnYm94XCIsXG4gICAgICAgIFtcbiAgICAgICAgICB7IG5hbWU6IFwiaGFzT3RoZXI6Ym9vbGVhblwiLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogXCJoYXNTZWxlY3RBbGw6Ym9vbGVhblwiLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogXCJoYXNOb25lOmJvb2xlYW5cIiwgdmlzaWJsZTogZmFsc2UgfSxcbiAgICAgICAgICB7IG5hbWU6IFwib3RoZXJUZXh0XCIsIHZpc2libGU6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiBcInNlbGVjdEFsbFRleHRcIiwgdmlzaWJsZTogZmFsc2UgfSxcbiAgICAgICAgICB7IG5hbWU6IFwibm9uZVRleHRcIiwgdmlzaWJsZTogZmFsc2UgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCJjaGVja2JveFwiXG4gICAgICApO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJ0YWdib3hcIiwge1xuICAgICAgICBuYW1lOiBcInNlbGVjdDJDb25maWdcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiZ2VuZXJhbFwiLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSk7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInRhZ2JveFwiLCB7XG4gICAgICAgIG5hbWU6IFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiZ2VuZXJhbFwiLFxuICAgICAgICBkZWZhdWx0OiBcIlwiLFxuICAgICAgfSk7XG4gICAgICBTdXJ2ZXkubWF0cml4RHJvcGRvd25Db2x1bW5UeXBlcy50YWdib3ggPSB7XG4gICAgICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAgICBcImNob2ljZXNcIixcbiAgICAgICAgICBcImNob2ljZXNPcmRlclwiLFxuICAgICAgICAgIFwiY2hvaWNlc0J5VXJsXCIsXG4gICAgICAgICAgXCJvcHRpb25zQ2FwdGlvblwiLFxuICAgICAgICAgIFwib3RoZXJUZXh0XCIsXG4gICAgICAgICAgXCJjaG9pY2VzVmlzaWJsZUlmXCIsXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgZml4U3R5bGVzOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QyLXNlYXJjaF9fZmllbGRcIikuc3R5bGUuYm9yZGVyID1cbiAgICAgICAgXCJub25lXCI7XG4gICAgfSxcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHNlbGVjdDJDb25maWcgPSBxdWVzdGlvbi5zZWxlY3QyQ29uZmlnO1xuICAgICAgdmFyIHNldHRpbmdzID1cbiAgICAgICAgc2VsZWN0MkNvbmZpZyAmJiB0eXBlb2Ygc2VsZWN0MkNvbmZpZyA9PSBcInN0cmluZ1wiXG4gICAgICAgICAgPyBKU09OLnBhcnNlKHNlbGVjdDJDb25maWcpXG4gICAgICAgICAgOiBzZWxlY3QyQ29uZmlnO1xuICAgICAgdmFyIHBsYWNlaG9sZGVyID0gcXVlc3Rpb24ucGxhY2Vob2xkZXI7XG4gICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJzZWxlY3RcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XG5cbiAgICAgIHNlbGYud2lsbFVubW91bnQocXVlc3Rpb24sIGVsKTtcblxuICAgICAgJGVsLnNlbGVjdDIoe1xuICAgICAgICB0YWdzOiBcInRydWVcIixcbiAgICAgICAgZGlzYWJsZWQ6IHF1ZXN0aW9uLmlzUmVhZE9ubHksXG4gICAgICAgIHRoZW1lOiBcImNsYXNzaWNcIixcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgJG90aGVyRWxlbWVudCA9ICQoZWwpLmZpbmQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgIGlmIChcbiAgICAgICAgISFxdWVzdGlvbi5zdXJ2ZXkgJiZcbiAgICAgICAgISFxdWVzdGlvbi5zdXJ2ZXkuY3NzICYmXG4gICAgICAgICEhcXVlc3Rpb24uc3VydmV5LmNzcy5jaGVja2JveFxuICAgICAgKSB7XG4gICAgICAgICRvdGhlckVsZW1lbnQuYWRkQ2xhc3MocXVlc3Rpb24uc3VydmV5LmNzcy5jaGVja2JveC5vdGhlcik7XG4gICAgICB9XG4gICAgICAkb3RoZXJFbGVtZW50LmJpbmQoXCJpbnB1dCBwcm9wZXJ0eWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHF1ZXN0aW9uLmNvbW1lbnQgPSAkb3RoZXJFbGVtZW50LnZhbCgpO1xuICAgICAgfSk7XG4gICAgICB2YXIgdXBkYXRlQ29tbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJG90aGVyRWxlbWVudC52YWwocXVlc3Rpb24uY29tbWVudCk7XG4gICAgICAgIGlmIChxdWVzdGlvbi5pc090aGVyU2VsZWN0ZWQpIHtcbiAgICAgICAgICAkb3RoZXJFbGVtZW50LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkb3RoZXJFbGVtZW50LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2VsZi5maXhTdHlsZXMoZWwpO1xuICAgICAgdmFyIHF1ZXN0aW9uO1xuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmhhc1NlbGVjdEFsbCAmJiBxdWVzdGlvbi5pc0FsbFNlbGVjdGVkKSB7XG4gICAgICAgICAgJGVsXG4gICAgICAgICAgICAudmFsKFtxdWVzdGlvbi5zZWxlY3RBbGxJdGVtVmFsdWUudmFsdWVdLmNvbmNhdChxdWVzdGlvbi52YWx1ZSkpXG4gICAgICAgICAgICAudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZWwudmFsKHF1ZXN0aW9uLnZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuZml4U3R5bGVzKGVsKTtcbiAgICAgICAgdXBkYXRlQ29tbWVudCgpO1xuICAgICAgfTtcbiAgICAgIHZhciB1cGRhdGVDaG9pY2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkZWwuc2VsZWN0MigpLmVtcHR5KCk7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzKSB7XG4gICAgICAgICAgaWYgKHBsYWNlaG9sZGVyKSBzZXR0aW5ncy5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuXG4gICAgICAgICAgaWYgKHNldHRpbmdzLmFqYXgpIHtcbiAgICAgICAgICAgICRlbC5zZWxlY3QyKHNldHRpbmdzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0dGluZ3MuZGF0YSA9IHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzLm1hcChmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IGNob2ljZS52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBjaG9pY2UudGV4dCxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJGVsLnNlbGVjdDIoc2V0dGluZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZWwuc2VsZWN0Mih7XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBkYXRhOiBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBjaG9pY2UudmFsdWUsXG4gICAgICAgICAgICAgICAgdGV4dDogY2hvaWNlLnRleHQsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcbiAgICAgIH07XG4gICAgICB2YXIgaXNBbGxJdGVtU2VsZWN0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBxdWVzdGlvbi5oYXNTZWxlY3RBbGwgJiYgdmFsdWUgPT09IHF1ZXN0aW9uLnNlbGVjdEFsbEl0ZW1WYWx1ZS52YWx1ZVxuICAgICAgICApO1xuICAgICAgfTtcbiAgICAgIHF1ZXN0aW9uLl9wcm9wZXJ0eVZhbHVlQ2hhbmdlZEZuU2VsZWN0MiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdXBkYXRlQ2hvaWNlcygpO1xuICAgICAgfTtcblxuICAgICAgJG90aGVyRWxlbWVudC5wcm9wKFwiZGlzYWJsZWRcIiwgcXVlc3Rpb24uaXNSZWFkT25seSk7XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGVsLnByb3AoXCJkaXNhYmxlZFwiLCBxdWVzdGlvbi5pc1JlYWRPbmx5KTtcbiAgICAgICAgJG90aGVyRWxlbWVudC5wcm9wKFwiZGlzYWJsZWRcIiwgcXVlc3Rpb24uaXNSZWFkT25seSk7XG4gICAgICB9O1xuICAgICAgcXVlc3Rpb24ucmVnaXN0ZXJGdW5jdGlvbk9uUHJvcGVydHlWYWx1ZUNoYW5nZWQoXG4gICAgICAgIFwidmlzaWJsZUNob2ljZXNcIixcbiAgICAgICAgcXVlc3Rpb24uX3Byb3BlcnR5VmFsdWVDaGFuZ2VkRm5TZWxlY3QyXG4gICAgICApO1xuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XG4gICAgICAkZWwub24oXCJzZWxlY3QyOnNlbGVjdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoaXNBbGxJdGVtU2VsZWN0ZWQoZS5wYXJhbXMuZGF0YS5pZCkpIHtcbiAgICAgICAgICBxdWVzdGlvbi5zZWxlY3RBbGwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IChxdWVzdGlvbi52YWx1ZSB8fCBbXSkuY29uY2F0KGUucGFyYW1zLmRhdGEuaWQpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUNvbW1lbnQoKTtcbiAgICAgIH0pO1xuICAgICAgJGVsLm9uKFwic2VsZWN0Mjp1bnNlbGVjdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgaW5kZXggPSAocXVlc3Rpb24udmFsdWUgfHwgW10pLmluZGV4T2YoZS5wYXJhbXMuZGF0YS5pZCk7XG4gICAgICAgIGlmIChpc0FsbEl0ZW1TZWxlY3RlZChlLnBhcmFtcy5kYXRhLmlkKSkge1xuICAgICAgICAgIHF1ZXN0aW9uLmNsZWFyVmFsdWUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB2YXIgdmFsID0gW10uY29uY2F0KHF1ZXN0aW9uLnZhbHVlKTtcbiAgICAgICAgICB2YWwuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVDb21tZW50KCk7XG4gICAgICB9KTtcbiAgICAgIHVwZGF0ZUNob2ljZXMoKTtcbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XG4gICAgICBpZiAoIXF1ZXN0aW9uLl9wcm9wZXJ0eVZhbHVlQ2hhbmdlZEZuU2VsZWN0MikgcmV0dXJuO1xuXG4gICAgICB2YXIgJHNlbGVjdDIgPSAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xuICAgICAgaWYgKCEhJHNlbGVjdDIuZGF0YShcInNlbGVjdDJcIikpIHtcbiAgICAgICAgJHNlbGVjdDIub2ZmKFwic2VsZWN0MjpzZWxlY3RcIikuc2VsZWN0MihcImRlc3Ryb3lcIik7XG4gICAgICB9XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IG51bGw7XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IG51bGw7XG4gICAgICBxdWVzdGlvbi51blJlZ2lzdGVyRnVuY3Rpb25PblByb3BlcnR5VmFsdWVDaGFuZ2VkKFxuICAgICAgICBcInZpc2libGVDaG9pY2VzXCIsXG4gICAgICAgIHF1ZXN0aW9uLl9wcm9wZXJ0eVZhbHVlQ2hhbmdlZEZuU2VsZWN0MlxuICAgICAgKTtcbiAgICAgIHF1ZXN0aW9uLl9wcm9wZXJ0eVZhbHVlQ2hhbmdlZEZuU2VsZWN0MiA9IHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIHBkZlF1ZXN0aW9uVHlwZTogXCJjaGVja2JveFwiLFxuICB9O1xuXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcbn1cblxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaW5pdChTdXJ2ZXksIHdpbmRvdy4kKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NlbGVjdDItdGFnYm94LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3Il0sInNvdXJjZVJvb3QiOiIifQ==