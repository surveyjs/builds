(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("widgets/pretty-checkbox", [], factory);
	else if(typeof exports === 'object')
		exports["widgets/pretty-checkbox"] = factory();
	else
		root["widgets/pretty-checkbox"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey) {
  var widget = {
    settings: {
      supportedTypes: ["radiogroup", "checkbox", "boolean"],
      radiogroup: {
        rootClass: "pretty p-default p-round",
        inputType: "radio",
        states: [{ stateClass: "state p-success", addOn: "" }],
      },
      checkbox: {
        rootClass: "pretty p-default",
        inputType: "checkbox",
        states: [{ stateClass: "state p-success", addOn: "" }],
      },
      boolean: {
        rootClass: "pretty p-icon p-default p-has-indeterminate",
        inputType: "checkbox",
        states: [
          { stateClass: "state p-success", addOn: "" },
          {
            stateClass: "state p-success p-is-indeterminate",
            iconClass: "icon mdi mdi-minus",
            addOn: "",
          },
        ],
      },
    },
    name: "pretty-checkbox",
    activatedBy: "property",
    widgetIsLoaded: function () {
      return true;
    },
    htmlTemplate: "<fieldset></fieldset>",
    isFit: function (question) {
      var isFitByType =
        widget.settings.supportedTypes.indexOf(question.getType()) !== -1;

      if (widget.activatedBy === "property") {
        return question["renderAs"] === "prettycheckbox" && isFitByType;
      } else if (widget.activatedBy === "type") {
        return isFitByType;
      }

      return false;
    },
    activatedByChanged: function (value) {
      if (this.widgetIsLoaded()) {
        widget.activatedBy = value;
        widget.settings.supportedTypes.forEach(function (supportedType) {
          Survey.JsonObject.metaData.removeProperty(supportedType, "renderAs");

          if (value === "property") {
            Survey.JsonObject.metaData.addProperty(supportedType, {
              name: "renderAs",
              category: "general",
              default: "default",
              choices: ["default", "prettycheckbox"],
            });
          }
        });
      }
    },
    isDefaultRender: false,
    afterRender: function (question, element) {
      var itemInputs = {};
      var questionType = question.getType();
      var options = this.settings[questionType];
      var checkboxType = questionType === "checkbox";
      var radiogroupType = questionType === "radiogroup";
      var booleanType = questionType === "boolean";

      var inChangeHandler = false;
      var changeHandler = function (event) {
        inChangeHandler = true;
        try {
          var target = arguments[0].target;
          var targetValue = target.value;
          var targetChecked = target.checked;

          if (checkboxType) {
            var questionValue = question.createValueCopy() || [];
            var valueIndex = questionValue.indexOf(targetValue);
            if (targetChecked) {
              if (valueIndex === -1) {
                questionValue.push(targetValue);
              }
            } else {
              if (valueIndex !== -1) {
                questionValue.splice(valueIndex, 1);
              }
            }

            question.value = questionValue;
          } else if (radiogroupType) {
            question.value = targetValue;
          } else {
            question.value = targetChecked;
          }
        } finally {
          inChangeHandler = false;
        }
      };

      var itemWidth =
        question.colCount > 0 ? 100 / question.colCount + "%" : "";

      var choices = booleanType
        ? [{ locText: question.locTitle, value: !!question.value }]
        : question.visibleChoices;
      choices.forEach(function (choiceItem, index) {
        var input = document.createElement("input");
        input.type = options.inputType;
        input.name = question.name + (checkboxType ? "" + index : "");
        input.onchange = changeHandler;
        input.value = choiceItem.value;

        if (booleanType && question.value === null) {
          input.indeterminate = question.defaultValue === "indeterminate";
        }

        var controlRoot = document.createElement("div");
        controlRoot.className = options.rootClass;
        controlRoot.appendChild(input);

        options.states.forEach(function (state) {
          var stateRoot = document.createElement("div");
          stateRoot.className = state.stateClass;
          if (!!state.iconClass) {
            var icon = document.createElement("i");
            icon.className = state.iconClass;
            stateRoot.appendChild(icon);
          }

          var label = document.createElement("label");
          if (choiceItem.locText.hasHtml) {
            label.innerHTML = choiceItem.locText.html;
          } else {
            label.textContent = choiceItem.locText.renderedText;
          }
          stateRoot.appendChild(label);

          controlRoot.appendChild(stateRoot);
          if (!!state.addOn) {
            stateRoot.insertAdjacentHTML("afterbegin", state.addOn);
          }
        });

        var itemRoot = document.createElement("div");
        itemRoot.className = "sv_cw_pretty_checkbox_" + questionType;
        itemRoot.style.display = "inline-block";
        itemRoot.style.width = itemWidth;
        itemRoot.appendChild(controlRoot);

        element.appendChild(itemRoot);

        itemInputs[choiceItem.value] = input;
      });

      var updateValueHandler = function (newValue) {
        if (!inChangeHandler) {
          var checkedItems = newValue || [];
          if (radiogroupType || booleanType) {
            checkedItems = [newValue && newValue.toString()];
          }

          Object.values(itemInputs).forEach(function (inputItem) {
            if (checkedItems.indexOf(inputItem.value) !== -1) {
              inputItem.setAttribute("checked", undefined);
            } else {
              inputItem.removeAttribute("checked");
            }
          });
        }
      };
      var readOnlyHandler = function () {
        Object.values(itemInputs).forEach(function (inputItem) {
          if (question.isReadOnly) {
            inputItem.setAttribute("disabled", true);
          } else {
            inputItem.removeAttribute("disabled");
          }
        });
      };

      question.valueChangedCallback = updateValueHandler;
      question.readOnlyChangedCallback = readOnlyHandler;
      updateValueHandler(question.value);
      readOnlyHandler();
    },
    willUnmount: function (question, el) {
      question.valueChangedCallback = undefined;
      question.readOnlyChangedCallback = undefined;
    },
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "property");
}

if (typeof Survey !== "undefined") {
  init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZGIyMTNkMDY1YzNkODAxNzg0OSIsIndlYnBhY2s6Ly8vLi9zcmMvcHJldHR5LWNoZWNrYm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJDQUEyQztBQUM3RCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJDQUEyQztBQUM3RCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJDQUEyQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVksc0RBQXNEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUMiLCJmaWxlIjoid2lkZ2V0cy9wcmV0dHktY2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndpZGdldHMvcHJldHR5LWNoZWNrYm94XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvcHJldHR5LWNoZWNrYm94XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndpZGdldHMvcHJldHR5LWNoZWNrYm94XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmRiMjEzZDA2NWMzZDgwMTc4NDkiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBzZXR0aW5nczoge1xyXG4gICAgICBzdXBwb3J0ZWRUeXBlczogW1wicmFkaW9ncm91cFwiLCBcImNoZWNrYm94XCIsIFwiYm9vbGVhblwiXSxcclxuICAgICAgcmFkaW9ncm91cDoge1xyXG4gICAgICAgIHJvb3RDbGFzczogXCJwcmV0dHkgcC1kZWZhdWx0IHAtcm91bmRcIixcclxuICAgICAgICBpbnB1dFR5cGU6IFwicmFkaW9cIixcclxuICAgICAgICBzdGF0ZXM6IFt7IHN0YXRlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzXCIsIGFkZE9uOiBcIlwiIH1dLFxyXG4gICAgICB9LFxyXG4gICAgICBjaGVja2JveDoge1xyXG4gICAgICAgIHJvb3RDbGFzczogXCJwcmV0dHkgcC1kZWZhdWx0XCIsXHJcbiAgICAgICAgaW5wdXRUeXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgc3RhdGVzOiBbeyBzdGF0ZUNsYXNzOiBcInN0YXRlIHAtc3VjY2Vzc1wiLCBhZGRPbjogXCJcIiB9XSxcclxuICAgICAgfSxcclxuICAgICAgYm9vbGVhbjoge1xyXG4gICAgICAgIHJvb3RDbGFzczogXCJwcmV0dHkgcC1pY29uIHAtZGVmYXVsdCBwLWhhcy1pbmRldGVybWluYXRlXCIsXHJcbiAgICAgICAgaW5wdXRUeXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgc3RhdGVzOiBbXHJcbiAgICAgICAgICB7IHN0YXRlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzXCIsIGFkZE9uOiBcIlwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0YXRlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzIHAtaXMtaW5kZXRlcm1pbmF0ZVwiLFxyXG4gICAgICAgICAgICBpY29uQ2xhc3M6IFwiaWNvbiBtZGkgbWRpLW1pbnVzXCIsXHJcbiAgICAgICAgICAgIGFkZE9uOiBcIlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5hbWU6IFwicHJldHR5LWNoZWNrYm94XCIsXHJcbiAgICBhY3RpdmF0ZWRCeTogXCJwcm9wZXJ0eVwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxmaWVsZHNldD48L2ZpZWxkc2V0PlwiLFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uIChxdWVzdGlvbikge1xyXG4gICAgICB2YXIgaXNGaXRCeVR5cGUgPVxyXG4gICAgICAgIHdpZGdldC5zZXR0aW5ncy5zdXBwb3J0ZWRUeXBlcy5pbmRleE9mKHF1ZXN0aW9uLmdldFR5cGUoKSkgIT09IC0xO1xyXG5cclxuICAgICAgaWYgKHdpZGdldC5hY3RpdmF0ZWRCeSA9PT0gXCJwcm9wZXJ0eVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9uW1wicmVuZGVyQXNcIl0gPT09IFwicHJldHR5Y2hlY2tib3hcIiAmJiBpc0ZpdEJ5VHlwZTtcclxuICAgICAgfSBlbHNlIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT09IFwidHlwZVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzRml0QnlUeXBlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMud2lkZ2V0SXNMb2FkZWQoKSkge1xyXG4gICAgICAgIHdpZGdldC5hY3RpdmF0ZWRCeSA9IHZhbHVlO1xyXG4gICAgICAgIHdpZGdldC5zZXR0aW5ncy5zdXBwb3J0ZWRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdXBwb3J0ZWRUeXBlKSB7XHJcbiAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5yZW1vdmVQcm9wZXJ0eShzdXBwb3J0ZWRUeXBlLCBcInJlbmRlckFzXCIpO1xyXG5cclxuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJwcm9wZXJ0eVwiKSB7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KHN1cHBvcnRlZFR5cGUsIHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInJlbmRlckFzXCIsXHJcbiAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiZ2VuZXJhbFwiLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgIGNob2ljZXM6IFtcImRlZmF1bHRcIiwgXCJwcmV0dHljaGVja2JveFwiXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpc0RlZmF1bHRSZW5kZXI6IGZhbHNlLFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWxlbWVudCkge1xyXG4gICAgICB2YXIgaXRlbUlucHV0cyA9IHt9O1xyXG4gICAgICB2YXIgcXVlc3Rpb25UeXBlID0gcXVlc3Rpb24uZ2V0VHlwZSgpO1xyXG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMuc2V0dGluZ3NbcXVlc3Rpb25UeXBlXTtcclxuICAgICAgdmFyIGNoZWNrYm94VHlwZSA9IHF1ZXN0aW9uVHlwZSA9PT0gXCJjaGVja2JveFwiO1xyXG4gICAgICB2YXIgcmFkaW9ncm91cFR5cGUgPSBxdWVzdGlvblR5cGUgPT09IFwicmFkaW9ncm91cFwiO1xyXG4gICAgICB2YXIgYm9vbGVhblR5cGUgPSBxdWVzdGlvblR5cGUgPT09IFwiYm9vbGVhblwiO1xyXG5cclxuICAgICAgdmFyIGluQ2hhbmdlSGFuZGxlciA9IGZhbHNlO1xyXG4gICAgICB2YXIgY2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGluQ2hhbmdlSGFuZGxlciA9IHRydWU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHZhciB0YXJnZXQgPSBhcmd1bWVudHNbMF0udGFyZ2V0O1xyXG4gICAgICAgICAgdmFyIHRhcmdldFZhbHVlID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgdmFyIHRhcmdldENoZWNrZWQgPSB0YXJnZXQuY2hlY2tlZDtcclxuXHJcbiAgICAgICAgICBpZiAoY2hlY2tib3hUeXBlKSB7XHJcbiAgICAgICAgICAgIHZhciBxdWVzdGlvblZhbHVlID0gcXVlc3Rpb24uY3JlYXRlVmFsdWVDb3B5KCkgfHwgW107XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZUluZGV4ID0gcXVlc3Rpb25WYWx1ZS5pbmRleE9mKHRhcmdldFZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldENoZWNrZWQpIHtcclxuICAgICAgICAgICAgICBpZiAodmFsdWVJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uVmFsdWUucHVzaCh0YXJnZXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmICh2YWx1ZUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25WYWx1ZS5zcGxpY2UodmFsdWVJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHF1ZXN0aW9uVmFsdWU7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJhZGlvZ3JvdXBUeXBlKSB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gdGFyZ2V0VmFsdWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHRhcmdldENoZWNrZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIGluQ2hhbmdlSGFuZGxlciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZhciBpdGVtV2lkdGggPVxyXG4gICAgICAgIHF1ZXN0aW9uLmNvbENvdW50ID4gMCA/IDEwMCAvIHF1ZXN0aW9uLmNvbENvdW50ICsgXCIlXCIgOiBcIlwiO1xyXG5cclxuICAgICAgdmFyIGNob2ljZXMgPSBib29sZWFuVHlwZVxyXG4gICAgICAgID8gW3sgbG9jVGV4dDogcXVlc3Rpb24ubG9jVGl0bGUsIHZhbHVlOiAhIXF1ZXN0aW9uLnZhbHVlIH1dXHJcbiAgICAgICAgOiBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcztcclxuICAgICAgY2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2VJdGVtLCBpbmRleCkge1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dC50eXBlID0gb3B0aW9ucy5pbnB1dFR5cGU7XHJcbiAgICAgICAgaW5wdXQubmFtZSA9IHF1ZXN0aW9uLm5hbWUgKyAoY2hlY2tib3hUeXBlID8gXCJcIiArIGluZGV4IDogXCJcIik7XHJcbiAgICAgICAgaW5wdXQub25jaGFuZ2UgPSBjaGFuZ2VIYW5kbGVyO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gY2hvaWNlSXRlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKGJvb2xlYW5UeXBlICYmIHF1ZXN0aW9uLnZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICBpbnB1dC5pbmRldGVybWluYXRlID0gcXVlc3Rpb24uZGVmYXVsdFZhbHVlID09PSBcImluZGV0ZXJtaW5hdGVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjb250cm9sUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udHJvbFJvb3QuY2xhc3NOYW1lID0gb3B0aW9ucy5yb290Q2xhc3M7XHJcbiAgICAgICAgY29udHJvbFJvb3QuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICAgICAgICBvcHRpb25zLnN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICAgICAgdmFyIHN0YXRlUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBzdGF0ZVJvb3QuY2xhc3NOYW1lID0gc3RhdGUuc3RhdGVDbGFzcztcclxuICAgICAgICAgIGlmICghIXN0YXRlLmljb25DbGFzcykge1xyXG4gICAgICAgICAgICB2YXIgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9IHN0YXRlLmljb25DbGFzcztcclxuICAgICAgICAgICAgc3RhdGVSb290LmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgIGlmIChjaG9pY2VJdGVtLmxvY1RleHQuaGFzSHRtbCkge1xyXG4gICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBjaG9pY2VJdGVtLmxvY1RleHQuaHRtbDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY2hvaWNlSXRlbS5sb2NUZXh0LnJlbmRlcmVkVGV4dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0YXRlUm9vdC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgICAgICAgY29udHJvbFJvb3QuYXBwZW5kQ2hpbGQoc3RhdGVSb290KTtcclxuICAgICAgICAgIGlmICghIXN0YXRlLmFkZE9uKSB7XHJcbiAgICAgICAgICAgIHN0YXRlUm9vdC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHN0YXRlLmFkZE9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGl0ZW1Sb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpdGVtUm9vdC5jbGFzc05hbWUgPSBcInN2X2N3X3ByZXR0eV9jaGVja2JveF9cIiArIHF1ZXN0aW9uVHlwZTtcclxuICAgICAgICBpdGVtUm9vdC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICBpdGVtUm9vdC5zdHlsZS53aWR0aCA9IGl0ZW1XaWR0aDtcclxuICAgICAgICBpdGVtUm9vdC5hcHBlbmRDaGlsZChjb250cm9sUm9vdCk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbVJvb3QpO1xyXG5cclxuICAgICAgICBpdGVtSW5wdXRzW2Nob2ljZUl0ZW0udmFsdWVdID0gaW5wdXQ7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgIGlmICghaW5DaGFuZ2VIYW5kbGVyKSB7XHJcbiAgICAgICAgICB2YXIgY2hlY2tlZEl0ZW1zID0gbmV3VmFsdWUgfHwgW107XHJcbiAgICAgICAgICBpZiAocmFkaW9ncm91cFR5cGUgfHwgYm9vbGVhblR5cGUpIHtcclxuICAgICAgICAgICAgY2hlY2tlZEl0ZW1zID0gW25ld1ZhbHVlICYmIG5ld1ZhbHVlLnRvU3RyaW5nKCldO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIE9iamVjdC52YWx1ZXMoaXRlbUlucHV0cykuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRJdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2VkSXRlbXMuaW5kZXhPZihpbnB1dEl0ZW0udmFsdWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgIGlucHV0SXRlbS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaW5wdXRJdGVtLnJlbW92ZUF0dHJpYnV0ZShcImNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgdmFyIHJlYWRPbmx5SGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKGl0ZW1JbnB1dHMpLmZvckVhY2goZnVuY3Rpb24gKGlucHV0SXRlbSkge1xyXG4gICAgICAgICAgaWYgKHF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgaW5wdXRJdGVtLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXRJdGVtLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gcmVhZE9ubHlIYW5kbGVyO1xyXG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIocXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICByZWFkT25seUhhbmRsZXIoKTtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwicHJvcGVydHlcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgaW5pdChTdXJ2ZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wcmV0dHktY2hlY2tib3guanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA4Il0sInNvdXJjZVJvb3QiOiIifQ==