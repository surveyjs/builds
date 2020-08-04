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
        default: null,
      });
      Survey.JsonObject.metaData.addProperty("tagbox", {
        name: "placeholder",
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

      $(el).find("select").off("select2:select").select2("destroy");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1OTgwNTFkM2RjZGE0MmNhODlkMyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi10YWdib3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJDQUEyQztBQUN0RCxXQUFXLCtDQUErQztBQUMxRCxXQUFXLDBDQUEwQztBQUNyRCxXQUFXLG9DQUFvQztBQUMvQyxXQUFXLHdDQUF3QztBQUNuRCxXQUFXLG1DQUFtQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQyIsImZpbGUiOiJ3aWRnZXRzL3NlbGVjdDItdGFnYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ3aWRnZXRzL3NlbGVjdDItdGFnYm94XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvc2VsZWN0Mi10YWdib3hcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid2lkZ2V0cy9zZWxlY3QyLXRhZ2JveFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTk4MDUxZDNkY2RhNDJjYTg5ZDMiLCJmdW5jdGlvbiBpbml0KFN1cnZleSwgJCkge1xuICAkID0gJCB8fCB3aW5kb3cuJDtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBuYW1lOiBcInRhZ2JveFwiLFxuICAgIHRpdGxlOiBcIlRhZyBib3hcIixcbiAgICBpY29uTmFtZTogXCJpY29uLXRhZ2JveFwiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHlwZW9mICQgPT0gXCJmdW5jdGlvblwiICYmICEhJC5mbi5zZWxlY3QyO1xuICAgIH0sXG4gICAgZGVmYXVsdEpTT046IHtcbiAgICAgIGNob2ljZXM6IFtcIkl0ZW0gMVwiLCBcIkl0ZW0gMlwiLCBcIkl0ZW0gM1wiXSxcbiAgICB9LFxuICAgIGh0bWxUZW1wbGF0ZTpcbiAgICAgIFwiPGRpdj48c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZScgc3R5bGU9J3dpZHRoOiAxMDAlOyc+PC9zZWxlY3Q+PHRleHRhcmVhPjwvdGV4dGFyZWE+PC9kaXY+XCIsXG4gICAgaXNGaXQ6IGZ1bmN0aW9uIChxdWVzdGlvbikge1xuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJ0YWdib3hcIjtcbiAgICB9LFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24gKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcbiAgICAgICAgXCJ0YWdib3hcIixcbiAgICAgICAgW1xuICAgICAgICAgIHsgbmFtZTogXCJoYXNPdGhlcjpib29sZWFuXCIsIHZpc2libGU6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiBcImhhc1NlbGVjdEFsbDpib29sZWFuXCIsIHZpc2libGU6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiBcImhhc05vbmU6Ym9vbGVhblwiLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogXCJvdGhlclRleHRcIiwgdmlzaWJsZTogZmFsc2UgfSxcbiAgICAgICAgICB7IG5hbWU6IFwic2VsZWN0QWxsVGV4dFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogXCJub25lVGV4dFwiLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICBdLFxuICAgICAgICBudWxsLFxuICAgICAgICBcImNoZWNrYm94XCJcbiAgICAgICk7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInRhZ2JveFwiLCB7XG4gICAgICAgIG5hbWU6IFwic2VsZWN0MkNvbmZpZ1wiLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSk7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInRhZ2JveFwiLCB7XG4gICAgICAgIG5hbWU6IFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgZGVmYXVsdDogXCJcIixcbiAgICAgIH0pO1xuICAgICAgU3VydmV5Lm1hdHJpeERyb3Bkb3duQ29sdW1uVHlwZXMudGFnYm94ID0ge1xuICAgICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgICAgXCJjaG9pY2VzXCIsXG4gICAgICAgICAgXCJjaG9pY2VzT3JkZXJcIixcbiAgICAgICAgICBcImNob2ljZXNCeVVybFwiLFxuICAgICAgICAgIFwib3B0aW9uc0NhcHRpb25cIixcbiAgICAgICAgICBcIm90aGVyVGV4dFwiLFxuICAgICAgICAgIFwiY2hvaWNlc1Zpc2libGVJZlwiLFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGZpeFN0eWxlczogZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIpLnN0eWxlLmJvcmRlciA9XG4gICAgICAgIFwibm9uZVwiO1xuICAgIH0sXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBzZWxlY3QyQ29uZmlnID0gcXVlc3Rpb24uc2VsZWN0MkNvbmZpZztcbiAgICAgIHZhciBzZXR0aW5ncyA9XG4gICAgICAgIHNlbGVjdDJDb25maWcgJiYgdHlwZW9mIHNlbGVjdDJDb25maWcgPT0gXCJzdHJpbmdcIlxuICAgICAgICAgID8gSlNPTi5wYXJzZShzZWxlY3QyQ29uZmlnKVxuICAgICAgICAgIDogc2VsZWN0MkNvbmZpZztcbiAgICAgIHZhciBwbGFjZWhvbGRlciA9IHF1ZXN0aW9uLnBsYWNlaG9sZGVyO1xuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xuXG4gICAgICBzZWxmLndpbGxVbm1vdW50KHF1ZXN0aW9uLCBlbCk7XG5cbiAgICAgICRlbC5zZWxlY3QyKHtcbiAgICAgICAgdGFnczogXCJ0cnVlXCIsXG4gICAgICAgIGRpc2FibGVkOiBxdWVzdGlvbi5pc1JlYWRPbmx5LFxuICAgICAgICB0aGVtZTogXCJjbGFzc2ljXCIsXG4gICAgICB9KTtcblxuICAgICAgdmFyICRvdGhlckVsZW1lbnQgPSAkKGVsKS5maW5kKFwidGV4dGFyZWFcIik7XG4gICAgICBpZiAoXG4gICAgICAgICEhcXVlc3Rpb24uc3VydmV5ICYmXG4gICAgICAgICEhcXVlc3Rpb24uc3VydmV5LmNzcyAmJlxuICAgICAgICAhIXF1ZXN0aW9uLnN1cnZleS5jc3MuY2hlY2tib3hcbiAgICAgICkge1xuICAgICAgICAkb3RoZXJFbGVtZW50LmFkZENsYXNzKHF1ZXN0aW9uLnN1cnZleS5jc3MuY2hlY2tib3gub3RoZXIpO1xuICAgICAgfVxuICAgICAgJG90aGVyRWxlbWVudC5iaW5kKFwiaW5wdXQgcHJvcGVydHljaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBxdWVzdGlvbi5jb21tZW50ID0gJG90aGVyRWxlbWVudC52YWwoKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHVwZGF0ZUNvbW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRvdGhlckVsZW1lbnQudmFsKHF1ZXN0aW9uLmNvbW1lbnQpO1xuICAgICAgICBpZiAocXVlc3Rpb24uaXNPdGhlclNlbGVjdGVkKSB7XG4gICAgICAgICAgJG90aGVyRWxlbWVudC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJG90aGVyRWxlbWVudC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHNlbGYuZml4U3R5bGVzKGVsKTtcbiAgICAgIHZhciBxdWVzdGlvbjtcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChxdWVzdGlvbi5oYXNTZWxlY3RBbGwgJiYgcXVlc3Rpb24uaXNBbGxTZWxlY3RlZCkge1xuICAgICAgICAgICRlbFxuICAgICAgICAgICAgLnZhbChbcXVlc3Rpb24uc2VsZWN0QWxsSXRlbVZhbHVlLnZhbHVlXS5jb25jYXQocXVlc3Rpb24udmFsdWUpKVxuICAgICAgICAgICAgLnRyaWdnZXIoXCJjaGFuZ2VcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGVsLnZhbChxdWVzdGlvbi52YWx1ZSkudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmZpeFN0eWxlcyhlbCk7XG4gICAgICAgIHVwZGF0ZUNvbW1lbnQoKTtcbiAgICAgIH07XG4gICAgICB2YXIgdXBkYXRlQ2hvaWNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGVsLnNlbGVjdDIoKS5lbXB0eSgpO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgICAgIGlmIChwbGFjZWhvbGRlcikgc2V0dGluZ3MucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcblxuICAgICAgICAgIGlmIChzZXR0aW5ncy5hamF4KSB7XG4gICAgICAgICAgICAkZWwuc2VsZWN0MihzZXR0aW5ncyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldHRpbmdzLmRhdGEgPSBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBjaG9pY2UudmFsdWUsXG4gICAgICAgICAgICAgICAgdGV4dDogY2hvaWNlLnRleHQsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRlbC5zZWxlY3QyKHNldHRpbmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGVsLnNlbGVjdDIoe1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgZGF0YTogcXVlc3Rpb24udmlzaWJsZUNob2ljZXMubWFwKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogY2hvaWNlLnZhbHVlLFxuICAgICAgICAgICAgICAgIHRleHQ6IGNob2ljZS50ZXh0LFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XG4gICAgICB9O1xuICAgICAgdmFyIGlzQWxsSXRlbVNlbGVjdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgcXVlc3Rpb24uaGFzU2VsZWN0QWxsICYmIHZhbHVlID09PSBxdWVzdGlvbi5zZWxlY3RBbGxJdGVtVmFsdWUudmFsdWVcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBxdWVzdGlvbi5fcHJvcGVydHlWYWx1ZUNoYW5nZWRGblNlbGVjdDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVwZGF0ZUNob2ljZXMoKTtcbiAgICAgIH07XG5cbiAgICAgICRvdGhlckVsZW1lbnQucHJvcChcImRpc2FibGVkXCIsIHF1ZXN0aW9uLmlzUmVhZE9ubHkpO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRlbC5wcm9wKFwiZGlzYWJsZWRcIiwgcXVlc3Rpb24uaXNSZWFkT25seSk7XG4gICAgICAgICRvdGhlckVsZW1lbnQucHJvcChcImRpc2FibGVkXCIsIHF1ZXN0aW9uLmlzUmVhZE9ubHkpO1xuICAgICAgfTtcbiAgICAgIHF1ZXN0aW9uLnJlZ2lzdGVyRnVuY3Rpb25PblByb3BlcnR5VmFsdWVDaGFuZ2VkKFxuICAgICAgICBcInZpc2libGVDaG9pY2VzXCIsXG4gICAgICAgIHF1ZXN0aW9uLl9wcm9wZXJ0eVZhbHVlQ2hhbmdlZEZuU2VsZWN0MlxuICAgICAgKTtcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xuICAgICAgJGVsLm9uKFwic2VsZWN0MjpzZWxlY3RcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGlzQWxsSXRlbVNlbGVjdGVkKGUucGFyYW1zLmRhdGEuaWQpKSB7XG4gICAgICAgICAgcXVlc3Rpb24uc2VsZWN0QWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSAocXVlc3Rpb24udmFsdWUgfHwgW10pLmNvbmNhdChlLnBhcmFtcy5kYXRhLmlkKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVDb21tZW50KCk7XG4gICAgICB9KTtcbiAgICAgICRlbC5vbihcInNlbGVjdDI6dW5zZWxlY3RcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gKHF1ZXN0aW9uLnZhbHVlIHx8IFtdKS5pbmRleE9mKGUucGFyYW1zLmRhdGEuaWQpO1xuICAgICAgICBpZiAoaXNBbGxJdGVtU2VsZWN0ZWQoZS5wYXJhbXMuZGF0YS5pZCkpIHtcbiAgICAgICAgICBxdWVzdGlvbi5jbGVhclZhbHVlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IFtdLmNvbmNhdChxdWVzdGlvbi52YWx1ZSk7XG4gICAgICAgICAgdmFsLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQ29tbWVudCgpO1xuICAgICAgfSk7XG4gICAgICB1cGRhdGVDaG9pY2VzKCk7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgaWYgKCFxdWVzdGlvbi5fcHJvcGVydHlWYWx1ZUNoYW5nZWRGblNlbGVjdDIpIHJldHVybjtcblxuICAgICAgJChlbCkuZmluZChcInNlbGVjdFwiKS5vZmYoXCJzZWxlY3QyOnNlbGVjdFwiKS5zZWxlY3QyKFwiZGVzdHJveVwiKTtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gbnVsbDtcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gbnVsbDtcbiAgICAgIHF1ZXN0aW9uLnVuUmVnaXN0ZXJGdW5jdGlvbk9uUHJvcGVydHlWYWx1ZUNoYW5nZWQoXG4gICAgICAgIFwidmlzaWJsZUNob2ljZXNcIixcbiAgICAgICAgcXVlc3Rpb24uX3Byb3BlcnR5VmFsdWVDaGFuZ2VkRm5TZWxlY3QyXG4gICAgICApO1xuICAgICAgcXVlc3Rpb24uX3Byb3BlcnR5VmFsdWVDaGFuZ2VkRm5TZWxlY3QyID0gdW5kZWZpbmVkO1xuICAgIH0sXG4gICAgcGRmUXVlc3Rpb25UeXBlOiBcImNoZWNrYm94XCIsXG4gIH07XG5cbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSwgd2luZG93LiQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VsZWN0Mi10YWdib3guanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDciXSwic291cmNlUm9vdCI6IiJ9