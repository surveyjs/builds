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
          default: "standart",
          choices: ["select2", "standart"],
        });
        Survey.JsonObject.metaData.addProperty("dropdown", {
          dependsOn: "renderAs",
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
          default: null,
        });
      }
    },
    isDefaultRender: true,
    afterRender: function (question, el) {
      var select2Config = question.select2Config;
      var settings =
        select2Config && typeof select2Config == "string"
          ? JSON.parse(select2Config)
          : select2Config;
      if (!settings) settings = {};
      var $el = $(el).is("select") ? $(el) : $(el).find("select");

      // removed custom select styles for the "default" theme
      $el.parent()[0].className = $el
        .parent()[0]
        .className.replace("sv_select_wrapper", "");

      var isSettingValue = false;
      var updateValueHandler = function () {
        if (isSettingValue) return;
        isSettingValue = true;
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
          settings.data = question.visibleChoices.map(function (choice) {
            return {
              id: choice.value,
              text: choice.text,
            };
          });
          $el.select2(settings);
        }
        // fixed width accrording to https://stackoverflow.com/questions/45276778/select2-not-responsive-width-larger-than-container
        el.querySelector(".select2").style.width = "100%";
        if (!!el.nextElementSibling) {
          el.nextElementSibling.style.marginBottom = "1px";
        }
        updateValueHandler();
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
      question.valueChangedCallback = updateValueHandler;
      updateValueHandler();
    },
    willUnmount: function (question, el) {
      $(el).find("select").off("select2:select").select2("destroy");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjN2RmODgwNTlhOGFiZTkyNzViMyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7Ozs7QUM3REE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQyIsImZpbGUiOiJ3aWRnZXRzL3NlbGVjdDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndpZGdldHMvc2VsZWN0MlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3aWRnZXRzL3NlbGVjdDJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid2lkZ2V0cy9zZWxlY3QyXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjN2RmODgwNTlhOGFiZTkyNzViMyIsImZ1bmN0aW9uIGluaXQoU3VydmV5LCAkKSB7XG4gICQgPSAkIHx8IHdpbmRvdy4kO1xuICB2YXIgd2lkZ2V0ID0ge1xuICAgIGFjdGl2YXRlZEJ5OiBcInByb3BlcnR5XCIsXG4gICAgbmFtZTogXCJzZWxlY3QyXCIsXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxzZWxlY3Qgc3R5bGU9J3dpZHRoOiAxMDAlOyc+PC9zZWxlY3Q+XCIsXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLnNlbGVjdDI7XG4gICAgfSxcbiAgICBpc0ZpdDogZnVuY3Rpb24gKHF1ZXN0aW9uKSB7XG4gICAgICBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwicHJvcGVydHlcIilcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBxdWVzdGlvbltcInJlbmRlckFzXCJdID09PSBcInNlbGVjdDJcIiAmJlxuICAgICAgICAgIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJkcm9wZG93blwiXG4gICAgICAgICk7XG4gICAgICBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09IFwidHlwZVwiKVxuICAgICAgICByZXR1cm4gdHlwZW9mIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJkcm9wZG93blwiO1xuICAgICAgaWYgKHdpZGdldC5hY3RpdmF0ZWRCeSA9PSBcImN1c3RvbXR5cGVcIilcbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJzZWxlY3QyXCI7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uIChhY3RpdmF0ZWRCeSkge1xuICAgICAgaWYgKCF0aGlzLndpZGdldElzTG9hZGVkKCkpIHJldHVybjtcbiAgICAgIHdpZGdldC5hY3RpdmF0ZWRCeSA9IGFjdGl2YXRlZEJ5O1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEucmVtb3ZlUHJvcGVydHkoXCJkcm9wZG93blwiLCBcInJlbmRlckFzXCIpO1xuICAgICAgaWYgKGFjdGl2YXRlZEJ5ID09IFwicHJvcGVydHlcIikge1xuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImRyb3Bkb3duXCIsIHtcbiAgICAgICAgICBuYW1lOiBcInJlbmRlckFzXCIsXG4gICAgICAgICAgZGVmYXVsdDogXCJzdGFuZGFydFwiLFxuICAgICAgICAgIGNob2ljZXM6IFtcInNlbGVjdDJcIiwgXCJzdGFuZGFydFwiXSxcbiAgICAgICAgfSk7XG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwiZHJvcGRvd25cIiwge1xuICAgICAgICAgIGRlcGVuZHNPbjogXCJyZW5kZXJBc1wiLFxuICAgICAgICAgIG5hbWU6IFwic2VsZWN0MkNvbmZpZ1wiLFxuICAgICAgICAgIHZpc2libGVJZjogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIG9iai5yZW5kZXJBcyA9PSBcInNlbGVjdDJcIjtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChhY3RpdmF0ZWRCeSA9PSBcImN1c3RvbXR5cGVcIikge1xuICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInNlbGVjdDJcIiwgW10sIG51bGwsIFwiZHJvcGRvd25cIik7XG4gICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KFwic2VsZWN0MlwiLCB7XG4gICAgICAgICAgbmFtZTogXCJzZWxlY3QyQ29uZmlnXCIsXG4gICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpc0RlZmF1bHRSZW5kZXI6IHRydWUsXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciBzZWxlY3QyQ29uZmlnID0gcXVlc3Rpb24uc2VsZWN0MkNvbmZpZztcbiAgICAgIHZhciBzZXR0aW5ncyA9XG4gICAgICAgIHNlbGVjdDJDb25maWcgJiYgdHlwZW9mIHNlbGVjdDJDb25maWcgPT0gXCJzdHJpbmdcIlxuICAgICAgICAgID8gSlNPTi5wYXJzZShzZWxlY3QyQ29uZmlnKVxuICAgICAgICAgIDogc2VsZWN0MkNvbmZpZztcbiAgICAgIGlmICghc2V0dGluZ3MpIHNldHRpbmdzID0ge307XG4gICAgICB2YXIgJGVsID0gJChlbCkuaXMoXCJzZWxlY3RcIikgPyAkKGVsKSA6ICQoZWwpLmZpbmQoXCJzZWxlY3RcIik7XG5cbiAgICAgIC8vIHJlbW92ZWQgY3VzdG9tIHNlbGVjdCBzdHlsZXMgZm9yIHRoZSBcImRlZmF1bHRcIiB0aGVtZVxuICAgICAgJGVsLnBhcmVudCgpWzBdLmNsYXNzTmFtZSA9ICRlbFxuICAgICAgICAucGFyZW50KClbMF1cbiAgICAgICAgLmNsYXNzTmFtZS5yZXBsYWNlKFwic3Zfc2VsZWN0X3dyYXBwZXJcIiwgXCJcIik7XG5cbiAgICAgIHZhciBpc1NldHRpbmdWYWx1ZSA9IGZhbHNlO1xuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzU2V0dGluZ1ZhbHVlKSByZXR1cm47XG4gICAgICAgIGlzU2V0dGluZ1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgaWYgKCRlbC5maW5kKFwib3B0aW9uW3ZhbHVlPSdcIiArIHF1ZXN0aW9uLnZhbHVlICsgXCInXVwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAkZWwudmFsKHF1ZXN0aW9uLnZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBuZXdPcHRpb24gPSBuZXcgT3B0aW9uKFxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUsIC8vVE9ETyBpZiBxdWVzdGlvbiB2YWx1ZSBpcyBvYmplY3QgdGhlbiBuZWVkIHRvIGltcHJvdmVcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApO1xuICAgICAgICAgICRlbC5hcHBlbmQobmV3T3B0aW9uKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlzU2V0dGluZ1ZhbHVlID0gZmFsc2U7XG4gICAgICB9O1xuICAgICAgdmFyIHVwZGF0ZUNob2ljZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRlbC5zZWxlY3QyKCkuZW1wdHkoKTtcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5wbGFjZWhvbGRlciAmJiBxdWVzdGlvbi5zaG93T3B0aW9uc0NhcHRpb24pIHtcbiAgICAgICAgICBzZXR0aW5ncy5wbGFjZWhvbGRlciA9IHF1ZXN0aW9uLm9wdGlvbnNDYXB0aW9uO1xuICAgICAgICAgIHNldHRpbmdzLmFsbG93Q2xlYXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2V0dGluZ3MudGhlbWUpIHtcbiAgICAgICAgICBzZXR0aW5ncy50aGVtZSA9IFwiY2xhc3NpY1wiO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdzLmRpc2FibGVkID0gcXVlc3Rpb24uaXNSZWFkT25seTtcbiAgICAgICAgaWYgKHNldHRpbmdzLmFqYXgpIHtcbiAgICAgICAgICAkZWwuc2VsZWN0MihzZXR0aW5ncyk7XG4gICAgICAgICAgcXVlc3Rpb24ua2VlcEluY29ycmVjdFZhbHVlcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0dGluZ3MuZGF0YSA9IHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzLm1hcChmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBpZDogY2hvaWNlLnZhbHVlLFxuICAgICAgICAgICAgICB0ZXh0OiBjaG9pY2UudGV4dCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgJGVsLnNlbGVjdDIoc2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZpeGVkIHdpZHRoIGFjY3JvcmRpbmcgdG8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDUyNzY3Nzgvc2VsZWN0Mi1ub3QtcmVzcG9uc2l2ZS13aWR0aC1sYXJnZXItdGhhbi1jb250YWluZXJcbiAgICAgICAgZWwucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QyXCIpLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIGlmICghIWVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgICAgIGVsLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjFweFwiO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xuICAgICAgfTtcblxuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRlbC5wcm9wKFwiZGlzYWJsZWRcIiwgcXVlc3Rpb24uaXNSZWFkT25seSk7XG4gICAgICB9O1xuXG4gICAgICBxdWVzdGlvbi5yZWdpc3RlckZ1bmN0aW9uT25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChcbiAgICAgICAgXCJ2aXNpYmxlQ2hvaWNlc1wiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdXBkYXRlQ2hvaWNlcygpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgdXBkYXRlQ2hvaWNlcygpO1xuICAgICAgJGVsLm9uKFwic2VsZWN0MjpzZWxlY3RcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgJGVsLm9uKFwic2VsZWN0Mjp1bnNlbGVjdGluZ1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xuICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgJChlbCkuZmluZChcInNlbGVjdFwiKS5vZmYoXCJzZWxlY3QyOnNlbGVjdFwiKS5zZWxlY3QyKFwiZGVzdHJveVwiKTtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gbnVsbDtcbiAgICB9LFxuICB9O1xuXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSwgd2luZG93LiQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VsZWN0Mi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiJdLCJzb3VyY2VSb290IjoiIn0=