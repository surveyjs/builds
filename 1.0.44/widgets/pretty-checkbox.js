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
            var questionValue = question.value || [];
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
        : question.choices;
      choices.forEach(function(choiceItem, index) {
        var input = document.createElement("input");
        input.type = options.inputType;
        input.name = question.name + (checkboxType ? "" + index : "");
        input.onchange = changeHandler;
        input.value = choiceItem.value;

        if (booleanType) {
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
            label.textContent = choiceItem.locText.text;
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
          if (radiogroupType) {
            checkedItems = [newValue];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NGE1MmE0YjcxYTA5OTAzNzU0NCIsIndlYnBhY2s6Ly8vLi9zcmMvcHJldHR5LWNoZWNrYm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJDQUEyQztBQUM3RCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJDQUEyQztBQUM3RCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJDQUEyQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVksc0RBQXNEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQyIsImZpbGUiOiJ3aWRnZXRzL3ByZXR0eS1jaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9wcmV0dHktY2hlY2tib3hcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2lkZ2V0cy9wcmV0dHktY2hlY2tib3hcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid2lkZ2V0cy9wcmV0dHktY2hlY2tib3hcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NGE1MmE0YjcxYTA5OTAzNzU0NCIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XG4gIHZhciB3aWRnZXQgPSB7XG4gICAgc2V0dGluZ3M6IHtcbiAgICAgIHN1cHBvcnRlZFR5cGVzOiBbXCJyYWRpb2dyb3VwXCIsIFwiY2hlY2tib3hcIiwgXCJib29sZWFuXCJdLFxuICAgICAgcmFkaW9ncm91cDoge1xuICAgICAgICByb290Q2xhc3M6IFwicHJldHR5IHAtZGVmYXVsdCBwLXJvdW5kXCIsXG4gICAgICAgIGlucHV0VHlwZTogXCJyYWRpb1wiLFxuICAgICAgICBzdGF0ZXM6IFt7IHN0YXRlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzXCIsIGFkZE9uOiBcIlwiIH1dXG4gICAgICB9LFxuICAgICAgY2hlY2tib3g6IHtcbiAgICAgICAgcm9vdENsYXNzOiBcInByZXR0eSBwLWRlZmF1bHRcIixcbiAgICAgICAgaW5wdXRUeXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIHN0YXRlczogW3sgc3RhdGVDbGFzczogXCJzdGF0ZSBwLXN1Y2Nlc3NcIiwgYWRkT246IFwiXCIgfV1cbiAgICAgIH0sXG4gICAgICBib29sZWFuOiB7XG4gICAgICAgIHJvb3RDbGFzczogXCJwcmV0dHkgcC1pY29uIHAtZGVmYXVsdCBwLWhhcy1pbmRldGVybWluYXRlXCIsXG4gICAgICAgIGlucHV0VHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICBzdGF0ZXM6IFtcbiAgICAgICAgICB7IHN0YXRlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzXCIsIGFkZE9uOiBcIlwiIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGVDbGFzczogXCJzdGF0ZSBwLXN1Y2Nlc3MgcC1pcy1pbmRldGVybWluYXRlXCIsXG4gICAgICAgICAgICBpY29uQ2xhc3M6IFwiaWNvbiBtZGkgbWRpLW1pbnVzXCIsXG4gICAgICAgICAgICBhZGRPbjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgbmFtZTogXCJwcmV0dHktY2hlY2tib3hcIixcbiAgICBhY3RpdmF0ZWRCeTogXCJwcm9wZXJ0eVwiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxmaWVsZHNldD48L2ZpZWxkc2V0PlwiLFxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgICAgdmFyIGlzRml0QnlUeXBlID1cbiAgICAgICAgd2lkZ2V0LnNldHRpbmdzLnN1cHBvcnRlZFR5cGVzLmluZGV4T2YocXVlc3Rpb24uZ2V0VHlwZSgpKSAhPT0gLTE7XG5cbiAgICAgIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT09IFwicHJvcGVydHlcIikge1xuICAgICAgICByZXR1cm4gcXVlc3Rpb25bXCJyZW5kZXJBc1wiXSA9PT0gXCJwcmV0dHljaGVja2JveFwiICYmIGlzRml0QnlUeXBlO1xuICAgICAgfSBlbHNlIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT09IFwidHlwZVwiKSB7XG4gICAgICAgIHJldHVybiBpc0ZpdEJ5VHlwZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMud2lkZ2V0SXNMb2FkZWQoKSkge1xuICAgICAgICB3aWRnZXQuYWN0aXZhdGVkQnkgPSB2YWx1ZTtcbiAgICAgICAgd2lkZ2V0LnNldHRpbmdzLnN1cHBvcnRlZFR5cGVzLmZvckVhY2goZnVuY3Rpb24oc3VwcG9ydGVkVHlwZSkge1xuICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLnJlbW92ZVByb3BlcnR5KHN1cHBvcnRlZFR5cGUsIFwicmVuZGVyQXNcIik7XG5cbiAgICAgICAgICBpZiAodmFsdWUgPT09IFwicHJvcGVydHlcIikge1xuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoc3VwcG9ydGVkVHlwZSwge1xuICAgICAgICAgICAgICBuYW1lOiBcInJlbmRlckFzXCIsXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFwic3RhbmRhcmRcIixcbiAgICAgICAgICAgICAgY2hvaWNlczogW1wic3RhbmRhcmRcIiwgXCJwcmV0dHljaGVja2JveFwiXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzRGVmYXVsdFJlbmRlcjogZmFsc2UsXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbGVtZW50KSB7XG4gICAgICB2YXIgaXRlbUlucHV0cyA9IHt9O1xuICAgICAgdmFyIHF1ZXN0aW9uVHlwZSA9IHF1ZXN0aW9uLmdldFR5cGUoKTtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5zZXR0aW5nc1txdWVzdGlvblR5cGVdO1xuICAgICAgdmFyIGNoZWNrYm94VHlwZSA9IHF1ZXN0aW9uVHlwZSA9PT0gXCJjaGVja2JveFwiO1xuICAgICAgdmFyIHJhZGlvZ3JvdXBUeXBlID0gcXVlc3Rpb25UeXBlID09PSBcInJhZGlvZ3JvdXBcIjtcbiAgICAgIHZhciBib29sZWFuVHlwZSA9IHF1ZXN0aW9uVHlwZSA9PT0gXCJib29sZWFuXCI7XG5cbiAgICAgIHZhciBpbkNoYW5nZUhhbmRsZXIgPSBmYWxzZTtcbiAgICAgIHZhciBjaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaW5DaGFuZ2VIYW5kbGVyID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gYXJndW1lbnRzWzBdLnRhcmdldDtcbiAgICAgICAgICB2YXIgdGFyZ2V0VmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgICAgICAgdmFyIHRhcmdldENoZWNrZWQgPSB0YXJnZXQuY2hlY2tlZDtcblxuICAgICAgICAgIGlmIChjaGVja2JveFR5cGUpIHtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvblZhbHVlID0gcXVlc3Rpb24udmFsdWUgfHwgW107XG4gICAgICAgICAgICB2YXIgdmFsdWVJbmRleCA9IHF1ZXN0aW9uVmFsdWUuaW5kZXhPZih0YXJnZXRWYWx1ZSk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Q2hlY2tlZCkge1xuICAgICAgICAgICAgICBpZiAodmFsdWVJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBxdWVzdGlvblZhbHVlLnB1c2godGFyZ2V0VmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAodmFsdWVJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBxdWVzdGlvblZhbHVlLnNwbGljZSh2YWx1ZUluZGV4LCAxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHF1ZXN0aW9uVmFsdWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChyYWRpb2dyb3VwVHlwZSkge1xuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSB0YXJnZXRWYWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWUgPSB0YXJnZXRDaGVja2VkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpbkNoYW5nZUhhbmRsZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIGl0ZW1XaWR0aCA9XG4gICAgICAgIHF1ZXN0aW9uLmNvbENvdW50ID4gMCA/IDEwMCAvIHF1ZXN0aW9uLmNvbENvdW50ICsgXCIlXCIgOiBcIlwiO1xuXG4gICAgICB2YXIgY2hvaWNlcyA9IGJvb2xlYW5UeXBlXG4gICAgICAgID8gW3sgbG9jVGV4dDogcXVlc3Rpb24ubG9jVGl0bGUsIHZhbHVlOiAhIXF1ZXN0aW9uLnZhbHVlIH1dXG4gICAgICAgIDogcXVlc3Rpb24uY2hvaWNlcztcbiAgICAgIGNob2ljZXMuZm9yRWFjaChmdW5jdGlvbihjaG9pY2VJdGVtLCBpbmRleCkge1xuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0LnR5cGUgPSBvcHRpb25zLmlucHV0VHlwZTtcbiAgICAgICAgaW5wdXQubmFtZSA9IHF1ZXN0aW9uLm5hbWUgKyAoY2hlY2tib3hUeXBlID8gXCJcIiArIGluZGV4IDogXCJcIik7XG4gICAgICAgIGlucHV0Lm9uY2hhbmdlID0gY2hhbmdlSGFuZGxlcjtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBjaG9pY2VJdGVtLnZhbHVlO1xuXG4gICAgICAgIGlmIChib29sZWFuVHlwZSkge1xuICAgICAgICAgIGlucHV0LmluZGV0ZXJtaW5hdGUgPSBxdWVzdGlvbi5kZWZhdWx0VmFsdWUgPT09IFwiaW5kZXRlcm1pbmF0ZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbnRyb2xSb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udHJvbFJvb3QuY2xhc3NOYW1lID0gb3B0aW9ucy5yb290Q2xhc3M7XG4gICAgICAgIGNvbnRyb2xSb290LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICBvcHRpb25zLnN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAgdmFyIHN0YXRlUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgc3RhdGVSb290LmNsYXNzTmFtZSA9IHN0YXRlLnN0YXRlQ2xhc3M7XG4gICAgICAgICAgaWYgKCEhc3RhdGUuaWNvbkNsYXNzKSB7XG4gICAgICAgICAgICB2YXIgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBzdGF0ZS5pY29uQ2xhc3M7XG4gICAgICAgICAgICBzdGF0ZVJvb3QuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgIGlmIChjaG9pY2VJdGVtLmxvY1RleHQuaGFzSHRtbCkge1xuICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gY2hvaWNlSXRlbS5sb2NUZXh0Lmh0bWw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY2hvaWNlSXRlbS5sb2NUZXh0LnRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlUm9vdC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgICBjb250cm9sUm9vdC5hcHBlbmRDaGlsZChzdGF0ZVJvb3QpO1xuICAgICAgICAgIGlmICghIXN0YXRlLmFkZE9uKSB7XG4gICAgICAgICAgICBzdGF0ZVJvb3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBzdGF0ZS5hZGRPbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgaXRlbVJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtUm9vdC5jbGFzc05hbWUgPSBcInN2X2N3X3ByZXR0eV9jaGVja2JveF9cIiArIHF1ZXN0aW9uVHlwZTtcbiAgICAgICAgaXRlbVJvb3Quc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIGl0ZW1Sb290LnN0eWxlLndpZHRoID0gaXRlbVdpZHRoO1xuICAgICAgICBpdGVtUm9vdC5hcHBlbmRDaGlsZChjb250cm9sUm9vdCk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtUm9vdCk7XG5cbiAgICAgICAgaXRlbUlucHV0c1tjaG9pY2VJdGVtLnZhbHVlXSA9IGlucHV0O1xuICAgICAgfSk7XG5cbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICBpZiAoIWluQ2hhbmdlSGFuZGxlcikge1xuICAgICAgICAgIHZhciBjaGVja2VkSXRlbXMgPSBuZXdWYWx1ZSB8fCBbXTtcbiAgICAgICAgICBpZiAocmFkaW9ncm91cFR5cGUpIHtcbiAgICAgICAgICAgIGNoZWNrZWRJdGVtcyA9IFtuZXdWYWx1ZV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgT2JqZWN0LnZhbHVlcyhpdGVtSW5wdXRzKS5mb3JFYWNoKGZ1bmN0aW9uKGlucHV0SXRlbSkge1xuICAgICAgICAgICAgaWYgKGNoZWNrZWRJdGVtcy5pbmRleE9mKGlucHV0SXRlbS52YWx1ZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgIGlucHV0SXRlbS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpbnB1dEl0ZW0ucmVtb3ZlQXR0cmlidXRlKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciByZWFkT25seUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhpdGVtSW5wdXRzKS5mb3JFYWNoKGZ1bmN0aW9uKGlucHV0SXRlbSkge1xuICAgICAgICAgIGlmIChxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XG4gICAgICAgICAgICBpbnB1dEl0ZW0uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0SXRlbS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IHJlYWRPbmx5SGFuZGxlcjtcbiAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcihxdWVzdGlvbi52YWx1ZSk7XG4gICAgICByZWFkT25seUhhbmRsZXIoKTtcbiAgICB9LFxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcInByb3BlcnR5XCIpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wcmV0dHktY2hlY2tib3guanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA5Il0sInNvdXJjZVJvb3QiOiIifQ==