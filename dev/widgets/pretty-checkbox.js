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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
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
        states: [{ stateClass: "state p-success", addOn: "" }]
      },
      checkbox: {
        rootClass: "pretty p-default",
        inputType: "checkbox",
        states: [{ stateClass: "state p-success", addOn: "" }]
      },
      boolean: {
        rootClass: "pretty p-icon p-default p-has-indeterminate",
        inputType: "checkbox",
        states: [
          { stateClass: "state p-success", addOn: "" },
          {
            stateClass: "state p-success p-is-indeterminate",
            iconClass: "icon mdi mdi-minus",
            addOn: ""
          }
        ]
      }
    },
    name: "pretty-checkbox",
    activatedBy: "property",
    widgetIsLoaded: function() {
      return true;
    },
    htmlTemplate: "<fieldset></fieldset>",
    isFit: function(question) {
      var isFitByType =
        widget.settings.supportedTypes.indexOf(question.getType()) !== -1;

      if (widget.activatedBy === "property") {
        return question["renderAs"] === "prettycheckbox" && isFitByType;
      } else if (widget.activatedBy === "type") {
        return isFitByType;
      }

      return false;
    },
    activatedByChanged: function(value) {
      if (this.widgetIsLoaded()) {
        widget.activatedBy = value;
        widget.settings.supportedTypes.forEach(function(supportedType) {
          Survey.JsonObject.metaData.removeProperty(supportedType, "renderAs");

          if (value === "property") {
            Survey.JsonObject.metaData.addProperty(supportedType, {
              name: "renderAs",
              default: "standard",
              choices: ["standard", "prettycheckbox"]
            });
          }
        });
      }
    },
    isDefaultRender: false,
    afterRender: function(question, element) {
      var itemInputs = {};
      var questionType = question.getType();
      var options = this.settings[questionType];
      var checkboxType = questionType === "checkbox";
      var radiogroupType = questionType === "radiogroup";
      var booleanType = questionType === "boolean";

      var inChangeHandler = false;
      var changeHandler = function(event) {
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
      choices.forEach(function(choiceItem, index) {
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

        options.states.forEach(function(state) {
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

      var updateValueHandler = function(newValue) {
        if (!inChangeHandler) {
          var checkedItems = newValue || [];
          if (radiogroupType || booleanType) {
            checkedItems = [newValue && newValue.toString()];
          }

          Object.values(itemInputs).forEach(function(inputItem) {
            if (checkedItems.indexOf(inputItem.value) !== -1) {
              inputItem.setAttribute("checked", undefined);
            } else {
              inputItem.removeAttribute("checked");
            }
          });
        }
      };
      var readOnlyHandler = function() {
        Object.values(itemInputs).forEach(function(inputItem) {
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
    willUnmount: function(question, el) {
      question.valueChangedCallback = undefined;
      question.readOnlyChangedCallback = undefined;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2MDgyYzhhOWM2NTUyODU4MjViZSIsIndlYnBhY2s6Ly8vLi9zcmMvcHJldHR5LWNoZWNrYm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJDQUEyQztBQUM3RCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJDQUEyQztBQUM3RCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJDQUEyQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVksc0RBQXNEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDIiwiZmlsZSI6IndpZGdldHMvcHJldHR5LWNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ3aWRnZXRzL3ByZXR0eS1jaGVja2JveFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3aWRnZXRzL3ByZXR0eS1jaGVja2JveFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aWRnZXRzL3ByZXR0eS1jaGVja2JveFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYwODJjOGE5YzY1NTI4NTgyNWJlIiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgc2V0dGluZ3M6IHtcclxuICAgICAgc3VwcG9ydGVkVHlwZXM6IFtcInJhZGlvZ3JvdXBcIiwgXCJjaGVja2JveFwiLCBcImJvb2xlYW5cIl0sXHJcbiAgICAgIHJhZGlvZ3JvdXA6IHtcclxuICAgICAgICByb290Q2xhc3M6IFwicHJldHR5IHAtZGVmYXVsdCBwLXJvdW5kXCIsXHJcbiAgICAgICAgaW5wdXRUeXBlOiBcInJhZGlvXCIsXHJcbiAgICAgICAgc3RhdGVzOiBbeyBzdGF0ZUNsYXNzOiBcInN0YXRlIHAtc3VjY2Vzc1wiLCBhZGRPbjogXCJcIiB9XVxyXG4gICAgICB9LFxyXG4gICAgICBjaGVja2JveDoge1xyXG4gICAgICAgIHJvb3RDbGFzczogXCJwcmV0dHkgcC1kZWZhdWx0XCIsXHJcbiAgICAgICAgaW5wdXRUeXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgc3RhdGVzOiBbeyBzdGF0ZUNsYXNzOiBcInN0YXRlIHAtc3VjY2Vzc1wiLCBhZGRPbjogXCJcIiB9XVxyXG4gICAgICB9LFxyXG4gICAgICBib29sZWFuOiB7XHJcbiAgICAgICAgcm9vdENsYXNzOiBcInByZXR0eSBwLWljb24gcC1kZWZhdWx0IHAtaGFzLWluZGV0ZXJtaW5hdGVcIixcclxuICAgICAgICBpbnB1dFR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICBzdGF0ZXM6IFtcclxuICAgICAgICAgIHsgc3RhdGVDbGFzczogXCJzdGF0ZSBwLXN1Y2Nlc3NcIiwgYWRkT246IFwiXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdGVDbGFzczogXCJzdGF0ZSBwLXN1Y2Nlc3MgcC1pcy1pbmRldGVybWluYXRlXCIsXHJcbiAgICAgICAgICAgIGljb25DbGFzczogXCJpY29uIG1kaSBtZGktbWludXNcIixcclxuICAgICAgICAgICAgYWRkT246IFwiXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBuYW1lOiBcInByZXR0eS1jaGVja2JveFwiLFxyXG4gICAgYWN0aXZhdGVkQnk6IFwicHJvcGVydHlcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxmaWVsZHNldD48L2ZpZWxkc2V0PlwiLFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHZhciBpc0ZpdEJ5VHlwZSA9XHJcbiAgICAgICAgd2lkZ2V0LnNldHRpbmdzLnN1cHBvcnRlZFR5cGVzLmluZGV4T2YocXVlc3Rpb24uZ2V0VHlwZSgpKSAhPT0gLTE7XHJcblxyXG4gICAgICBpZiAod2lkZ2V0LmFjdGl2YXRlZEJ5ID09PSBcInByb3BlcnR5XCIpIHtcclxuICAgICAgICByZXR1cm4gcXVlc3Rpb25bXCJyZW5kZXJBc1wiXSA9PT0gXCJwcmV0dHljaGVja2JveFwiICYmIGlzRml0QnlUeXBlO1xyXG4gICAgICB9IGVsc2UgaWYgKHdpZGdldC5hY3RpdmF0ZWRCeSA9PT0gXCJ0eXBlXCIpIHtcclxuICAgICAgICByZXR1cm4gaXNGaXRCeVR5cGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLndpZGdldElzTG9hZGVkKCkpIHtcclxuICAgICAgICB3aWRnZXQuYWN0aXZhdGVkQnkgPSB2YWx1ZTtcclxuICAgICAgICB3aWRnZXQuc2V0dGluZ3Muc3VwcG9ydGVkVHlwZXMuZm9yRWFjaChmdW5jdGlvbihzdXBwb3J0ZWRUeXBlKSB7XHJcbiAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5yZW1vdmVQcm9wZXJ0eShzdXBwb3J0ZWRUeXBlLCBcInJlbmRlckFzXCIpO1xyXG5cclxuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJwcm9wZXJ0eVwiKSB7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KHN1cHBvcnRlZFR5cGUsIHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInJlbmRlckFzXCIsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdDogXCJzdGFuZGFyZFwiLFxyXG4gICAgICAgICAgICAgIGNob2ljZXM6IFtcInN0YW5kYXJkXCIsIFwicHJldHR5Y2hlY2tib3hcIl1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpc0RlZmF1bHRSZW5kZXI6IGZhbHNlLFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbGVtZW50KSB7XHJcbiAgICAgIHZhciBpdGVtSW5wdXRzID0ge307XHJcbiAgICAgIHZhciBxdWVzdGlvblR5cGUgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XHJcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5zZXR0aW5nc1txdWVzdGlvblR5cGVdO1xyXG4gICAgICB2YXIgY2hlY2tib3hUeXBlID0gcXVlc3Rpb25UeXBlID09PSBcImNoZWNrYm94XCI7XHJcbiAgICAgIHZhciByYWRpb2dyb3VwVHlwZSA9IHF1ZXN0aW9uVHlwZSA9PT0gXCJyYWRpb2dyb3VwXCI7XHJcbiAgICAgIHZhciBib29sZWFuVHlwZSA9IHF1ZXN0aW9uVHlwZSA9PT0gXCJib29sZWFuXCI7XHJcblxyXG4gICAgICB2YXIgaW5DaGFuZ2VIYW5kbGVyID0gZmFsc2U7XHJcbiAgICAgIHZhciBjaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpbkNoYW5nZUhhbmRsZXIgPSB0cnVlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gYXJndW1lbnRzWzBdLnRhcmdldDtcclxuICAgICAgICAgIHZhciB0YXJnZXRWYWx1ZSA9IHRhcmdldC52YWx1ZTtcclxuICAgICAgICAgIHZhciB0YXJnZXRDaGVja2VkID0gdGFyZ2V0LmNoZWNrZWQ7XHJcblxyXG4gICAgICAgICAgaWYgKGNoZWNrYm94VHlwZSkge1xyXG4gICAgICAgICAgICB2YXIgcXVlc3Rpb25WYWx1ZSA9IHF1ZXN0aW9uLmNyZWF0ZVZhbHVlQ29weSgpIHx8IFtdO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWVJbmRleCA9IHF1ZXN0aW9uVmFsdWUuaW5kZXhPZih0YXJnZXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRDaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHZhbHVlSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvblZhbHVlLnB1c2godGFyZ2V0VmFsdWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAodmFsdWVJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uVmFsdWUuc3BsaWNlKHZhbHVlSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBxdWVzdGlvblZhbHVlO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyYWRpb2dyb3VwVHlwZSkge1xyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHRhcmdldFZhbHVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSB0YXJnZXRDaGVja2VkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICBpbkNoYW5nZUhhbmRsZXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2YXIgaXRlbVdpZHRoID1cclxuICAgICAgICBxdWVzdGlvbi5jb2xDb3VudCA+IDAgPyAxMDAgLyBxdWVzdGlvbi5jb2xDb3VudCArIFwiJVwiIDogXCJcIjtcclxuXHJcbiAgICAgIHZhciBjaG9pY2VzID0gYm9vbGVhblR5cGVcclxuICAgICAgICA/IFt7IGxvY1RleHQ6IHF1ZXN0aW9uLmxvY1RpdGxlLCB2YWx1ZTogISFxdWVzdGlvbi52YWx1ZSB9XVxyXG4gICAgICAgIDogcXVlc3Rpb24udmlzaWJsZUNob2ljZXM7XHJcbiAgICAgIGNob2ljZXMuZm9yRWFjaChmdW5jdGlvbihjaG9pY2VJdGVtLCBpbmRleCkge1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dC50eXBlID0gb3B0aW9ucy5pbnB1dFR5cGU7XHJcbiAgICAgICAgaW5wdXQubmFtZSA9IHF1ZXN0aW9uLm5hbWUgKyAoY2hlY2tib3hUeXBlID8gXCJcIiArIGluZGV4IDogXCJcIik7XHJcbiAgICAgICAgaW5wdXQub25jaGFuZ2UgPSBjaGFuZ2VIYW5kbGVyO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gY2hvaWNlSXRlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKGJvb2xlYW5UeXBlICYmIHF1ZXN0aW9uLnZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICBpbnB1dC5pbmRldGVybWluYXRlID0gcXVlc3Rpb24uZGVmYXVsdFZhbHVlID09PSBcImluZGV0ZXJtaW5hdGVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjb250cm9sUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udHJvbFJvb3QuY2xhc3NOYW1lID0gb3B0aW9ucy5yb290Q2xhc3M7XHJcbiAgICAgICAgY29udHJvbFJvb3QuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICAgICAgICBvcHRpb25zLnN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgICAgICAgICB2YXIgc3RhdGVSb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIHN0YXRlUm9vdC5jbGFzc05hbWUgPSBzdGF0ZS5zdGF0ZUNsYXNzO1xyXG4gICAgICAgICAgaWYgKCEhc3RhdGUuaWNvbkNsYXNzKSB7XHJcbiAgICAgICAgICAgIHZhciBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICAgICAgICAgIGljb24uY2xhc3NOYW1lID0gc3RhdGUuaWNvbkNsYXNzO1xyXG4gICAgICAgICAgICBzdGF0ZVJvb3QuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgaWYgKGNob2ljZUl0ZW0ubG9jVGV4dC5oYXNIdG1sKSB7XHJcbiAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGNob2ljZUl0ZW0ubG9jVGV4dC5odG1sO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBjaG9pY2VJdGVtLmxvY1RleHQucmVuZGVyZWRUZXh0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RhdGVSb290LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHJcbiAgICAgICAgICBjb250cm9sUm9vdC5hcHBlbmRDaGlsZChzdGF0ZVJvb3QpO1xyXG4gICAgICAgICAgaWYgKCEhc3RhdGUuYWRkT24pIHtcclxuICAgICAgICAgICAgc3RhdGVSb290Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgc3RhdGUuYWRkT24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgaXRlbVJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGl0ZW1Sb290LmNsYXNzTmFtZSA9IFwic3ZfY3dfcHJldHR5X2NoZWNrYm94X1wiICsgcXVlc3Rpb25UeXBlO1xyXG4gICAgICAgIGl0ZW1Sb290LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIGl0ZW1Sb290LnN0eWxlLndpZHRoID0gaXRlbVdpZHRoO1xyXG4gICAgICAgIGl0ZW1Sb290LmFwcGVuZENoaWxkKGNvbnRyb2xSb290KTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtUm9vdCk7XHJcblxyXG4gICAgICAgIGl0ZW1JbnB1dHNbY2hvaWNlSXRlbS52YWx1ZV0gPSBpbnB1dDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24obmV3VmFsdWUpIHtcclxuICAgICAgICBpZiAoIWluQ2hhbmdlSGFuZGxlcikge1xyXG4gICAgICAgICAgdmFyIGNoZWNrZWRJdGVtcyA9IG5ld1ZhbHVlIHx8IFtdO1xyXG4gICAgICAgICAgaWYgKHJhZGlvZ3JvdXBUeXBlIHx8IGJvb2xlYW5UeXBlKSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWRJdGVtcyA9IFtuZXdWYWx1ZSAmJiBuZXdWYWx1ZS50b1N0cmluZygpXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBPYmplY3QudmFsdWVzKGl0ZW1JbnB1dHMpLmZvckVhY2goZnVuY3Rpb24oaW5wdXRJdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2VkSXRlbXMuaW5kZXhPZihpbnB1dEl0ZW0udmFsdWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgIGlucHV0SXRlbS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaW5wdXRJdGVtLnJlbW92ZUF0dHJpYnV0ZShcImNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgdmFyIHJlYWRPbmx5SGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoaXRlbUlucHV0cykuZm9yRWFjaChmdW5jdGlvbihpbnB1dEl0ZW0pIHtcclxuICAgICAgICAgIGlmIChxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgIGlucHV0SXRlbS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0SXRlbS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IHJlYWRPbmx5SGFuZGxlcjtcclxuICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKHF1ZXN0aW9uLnZhbHVlKTtcclxuICAgICAgcmVhZE9ubHlIYW5kbGVyKCk7XHJcbiAgICB9LFxyXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJwcm9wZXJ0eVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ByZXR0eS1jaGVja2JveC5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDkiXSwic291cmNlUm9vdCI6IiJ9