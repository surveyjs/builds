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
      choices: ["Item 1", "Item 2", "Item 3"]
    },
    htmlTemplate: "<select multiple='multiple' style='width: 100%;'></select>",
    isFit: function (question) {
      return question.getType() === "tagbox";
    },
    activatedByChanged: function (activatedBy) {
      Survey.JsonObject.metaData.addClass(
        "tagbox",
        [
          {
            name: "hasOther",
            visible: false
          }
        ],
        null,
        "checkbox"
      );
      Survey.JsonObject.metaData.addProperty("tagbox", {
        name: "select2Config",
        default: null
      });
      Survey.matrixDropdownColumnTypes.tagbox = {
        properties: [
          "choices",
          "choicesOrder",
          "choicesByUrl",
          "optionsCaption",
          "otherText",
          "choicesVisibleIf"
        ]
      };
    },
    fixStyles: function (el) {
      el.parentElement.querySelector(".select2-search__field").style.border =
        "none";
    },
    afterRender: function (question, el) {
      var self = this;
      var select2Config = question.select2Config;
      var settings = select2Config && typeof select2Config == 'string' ? JSON.parse(select2Config) : select2Config;
      var $el = $(el).is("select") ? $(el) : $(el).find("select");

      self.willUnmount(question, el);

      $el.select2({
        tags: "true",
        disabled: question.isReadOnly,
        theme: "classic"
      });

      self.fixStyles(el);

      var updateValueHandler = function () {
        $el.val(question.value).trigger("change");
        self.fixStyles(el);
      };
      var updateChoices = function () {
        $el.select2().empty();

        if (settings) {
          if (settings.ajax) {
            $el.select2(settings);
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
            data: question.visibleChoices.map(function (choice) {
              return {
                id: choice.value,
                text: choice.text
              };
            })
          });
        }

        updateValueHandler();
      };

      question._propertyValueChangedFnSelect2 = function () {
        updateChoices();
      };

      question.readOnlyChangedCallback = function () {
        $el.prop("disabled", question.isReadOnly);
      };
      question.registerFunctionOnPropertyValueChanged(
        "visibleChoices",
        question._propertyValueChangedFnSelect2
      );
      question.valueChangedCallback = updateValueHandler;
      $el.on("select2:select", function (e) {
        question.value = (question.value || []).concat(e.params.data.id);
      });
      $el.on("select2:unselect", function (e) {
        var index = (question.value || []).indexOf(e.params.data.id);
        if (index !== -1) {
          var val = [].concat(question.value);
          val.splice(index, 1);
          question.value = val;
        }
      });
      updateChoices();
    },
    willUnmount: function (question, el) {
      if (!question._propertyValueChangedFnSelect2) return;

      $(el)
        .find("select")
        .off("select2:select")
        .select2("destroy");
      question.readOnlyChangedCallback = null;
      question.valueChangedCallback = null;
      question.unRegisterFunctionOnPropertyValueChanged(
        "visibleChoices",
        question._propertyValueChangedFnSelect2
      );
      question._propertyValueChangedFnSelect2 = undefined;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5ZDhlMjM1ZjY4NGM2NzgwNmQ5NSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi10YWdib3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUMiLCJmaWxlIjoid2lkZ2V0cy9zZWxlY3QyLXRhZ2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9zZWxlY3QyLXRhZ2JveFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3aWRnZXRzL3NlbGVjdDItdGFnYm94XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndpZGdldHMvc2VsZWN0Mi10YWdib3hcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDlkOGUyMzVmNjg0YzY3ODA2ZDk1IiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXksICQpIHtcbiAgJCA9ICQgfHwgd2luZG93LiQ7XG4gIHZhciB3aWRnZXQgPSB7XG4gICAgbmFtZTogXCJ0YWdib3hcIixcbiAgICB0aXRsZTogXCJUYWcgYm94XCIsXG4gICAgaWNvbk5hbWU6IFwiaWNvbi10YWdib3hcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uc2VsZWN0MjtcbiAgICB9LFxuICAgIGRlZmF1bHRKU09OOiB7XG4gICAgICBjaG9pY2VzOiBbXCJJdGVtIDFcIiwgXCJJdGVtIDJcIiwgXCJJdGVtIDNcIl1cbiAgICB9LFxuICAgIGh0bWxUZW1wbGF0ZTogXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZScgc3R5bGU9J3dpZHRoOiAxMDAlOyc+PC9zZWxlY3Q+XCIsXG4gICAgaXNGaXQ6IGZ1bmN0aW9uIChxdWVzdGlvbikge1xuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJ0YWdib3hcIjtcbiAgICB9LFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24gKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcbiAgICAgICAgXCJ0YWdib3hcIixcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiaGFzT3RoZXJcIixcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBudWxsLFxuICAgICAgICBcImNoZWNrYm94XCJcbiAgICAgICk7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInRhZ2JveFwiLCB7XG4gICAgICAgIG5hbWU6IFwic2VsZWN0MkNvbmZpZ1wiLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICB9KTtcbiAgICAgIFN1cnZleS5tYXRyaXhEcm9wZG93bkNvbHVtblR5cGVzLnRhZ2JveCA9IHtcbiAgICAgICAgcHJvcGVydGllczogW1xuICAgICAgICAgIFwiY2hvaWNlc1wiLFxuICAgICAgICAgIFwiY2hvaWNlc09yZGVyXCIsXG4gICAgICAgICAgXCJjaG9pY2VzQnlVcmxcIixcbiAgICAgICAgICBcIm9wdGlvbnNDYXB0aW9uXCIsXG4gICAgICAgICAgXCJvdGhlclRleHRcIixcbiAgICAgICAgICBcImNob2ljZXNWaXNpYmxlSWZcIlxuICAgICAgICBdXG4gICAgICB9O1xuICAgIH0sXG4gICAgZml4U3R5bGVzOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QyLXNlYXJjaF9fZmllbGRcIikuc3R5bGUuYm9yZGVyID1cbiAgICAgICAgXCJub25lXCI7XG4gICAgfSxcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHNlbGVjdDJDb25maWcgPSBxdWVzdGlvbi5zZWxlY3QyQ29uZmlnO1xuICAgICAgdmFyIHNldHRpbmdzID0gc2VsZWN0MkNvbmZpZyAmJiB0eXBlb2Ygc2VsZWN0MkNvbmZpZyA9PSAnc3RyaW5nJyA/IEpTT04ucGFyc2Uoc2VsZWN0MkNvbmZpZykgOiBzZWxlY3QyQ29uZmlnO1xuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xuXG4gICAgICBzZWxmLndpbGxVbm1vdW50KHF1ZXN0aW9uLCBlbCk7XG5cbiAgICAgICRlbC5zZWxlY3QyKHtcbiAgICAgICAgdGFnczogXCJ0cnVlXCIsXG4gICAgICAgIGRpc2FibGVkOiBxdWVzdGlvbi5pc1JlYWRPbmx5LFxuICAgICAgICB0aGVtZTogXCJjbGFzc2ljXCJcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLmZpeFN0eWxlcyhlbCk7XG5cbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRlbC52YWwocXVlc3Rpb24udmFsdWUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XG4gICAgICAgIHNlbGYuZml4U3R5bGVzKGVsKTtcbiAgICAgIH07XG4gICAgICB2YXIgdXBkYXRlQ2hvaWNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGVsLnNlbGVjdDIoKS5lbXB0eSgpO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgICAgIGlmIChzZXR0aW5ncy5hamF4KSB7XG4gICAgICAgICAgICAkZWwuc2VsZWN0MihzZXR0aW5ncyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldHRpbmdzLmRhdGEgPSBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBjaG9pY2UudmFsdWUsXG4gICAgICAgICAgICAgICAgdGV4dDogY2hvaWNlLnRleHRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJGVsLnNlbGVjdDIoc2V0dGluZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZWwuc2VsZWN0Mih7XG4gICAgICAgICAgICBkYXRhOiBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBjaG9pY2UudmFsdWUsXG4gICAgICAgICAgICAgICAgdGV4dDogY2hvaWNlLnRleHRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcbiAgICAgIH07XG5cbiAgICAgIHF1ZXN0aW9uLl9wcm9wZXJ0eVZhbHVlQ2hhbmdlZEZuU2VsZWN0MiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdXBkYXRlQ2hvaWNlcygpO1xuICAgICAgfTtcblxuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRlbC5wcm9wKFwiZGlzYWJsZWRcIiwgcXVlc3Rpb24uaXNSZWFkT25seSk7XG4gICAgICB9O1xuICAgICAgcXVlc3Rpb24ucmVnaXN0ZXJGdW5jdGlvbk9uUHJvcGVydHlWYWx1ZUNoYW5nZWQoXG4gICAgICAgIFwidmlzaWJsZUNob2ljZXNcIixcbiAgICAgICAgcXVlc3Rpb24uX3Byb3BlcnR5VmFsdWVDaGFuZ2VkRm5TZWxlY3QyXG4gICAgICApO1xuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XG4gICAgICAkZWwub24oXCJzZWxlY3QyOnNlbGVjdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IChxdWVzdGlvbi52YWx1ZSB8fCBbXSkuY29uY2F0KGUucGFyYW1zLmRhdGEuaWQpO1xuICAgICAgfSk7XG4gICAgICAkZWwub24oXCJzZWxlY3QyOnVuc2VsZWN0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IChxdWVzdGlvbi52YWx1ZSB8fCBbXSkuaW5kZXhPZihlLnBhcmFtcy5kYXRhLmlkKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHZhciB2YWwgPSBbXS5jb25jYXQocXVlc3Rpb24udmFsdWUpO1xuICAgICAgICAgIHZhbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHVwZGF0ZUNob2ljZXMoKTtcbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XG4gICAgICBpZiAoIXF1ZXN0aW9uLl9wcm9wZXJ0eVZhbHVlQ2hhbmdlZEZuU2VsZWN0MikgcmV0dXJuO1xuXG4gICAgICAkKGVsKVxuICAgICAgICAuZmluZChcInNlbGVjdFwiKVxuICAgICAgICAub2ZmKFwic2VsZWN0MjpzZWxlY3RcIilcbiAgICAgICAgLnNlbGVjdDIoXCJkZXN0cm95XCIpO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgcXVlc3Rpb24udW5SZWdpc3RlckZ1bmN0aW9uT25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChcbiAgICAgICAgXCJ2aXNpYmxlQ2hvaWNlc1wiLFxuICAgICAgICBxdWVzdGlvbi5fcHJvcGVydHlWYWx1ZUNoYW5nZWRGblNlbGVjdDJcbiAgICAgICk7XG4gICAgICBxdWVzdGlvbi5fcHJvcGVydHlWYWx1ZUNoYW5nZWRGblNlbGVjdDIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcbn1cblxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaW5pdChTdXJ2ZXksIHdpbmRvdy4kKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NlbGVjdDItdGFnYm94LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA4Il0sInNvdXJjZVJvb3QiOiIifQ==