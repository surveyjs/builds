(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("widgets/pretty-checkbox", [], factory);
	else if(typeof exports === 'object')
		exports["widgets/pretty-checkbox"] = factory();
	else
		root["widgets/pretty-checkbox"] = factory();
})(this, function() {
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
    const widget = {
        settings: {
            supportedTypes: ["radiogroup", "checkbox", "boolean"],
            radiogroup: {
                rootClass: "pretty p-default p-round",
                inputType: "radio",
                states: [
                    {stateClass: "state p-success", addOn: ""}
                ]
            },
            checkbox: {
                rootClass: "pretty p-default",
                inputType: "checkbox",
                states: [
                    {stateClass: "state p-success", addOn: ""}
                ]
            },
            boolean: {
                rootClass: "pretty p-icon p-default p-has-indeterminate",
                inputType: "checkbox",
                states: [
                    {stateClass: "state p-success", addOn: ""},
                    {stateClass: "state p-success p-is-indeterminate", iconClass: "icon mdi mdi-minus", addOn: ""}
                ]
            }
        },
        name: "pretty-checkbox",
        activatedBy: "property",
        widgetIsLoaded: function () {
            return true;
        },
        htmlTemplate: "<fieldset></fieldset>",
        isFit: function (question) {
            const isFitByType = widget.settings.supportedTypes.indexOf(question.getType()) !== -1;

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
        afterRender: function (question, element) {
            const itemInputs = {};
            const questionType = question.getType();
            const options = this.settings[questionType];
            const checkboxType = questionType === "checkbox";
            const radiogroupType = questionType === "radiogroup";
            const booleanType = questionType === "boolean";

            var inChangeHandler = false;
            const changeHandler = function (event) {
                inChangeHandler = true;
                try {
                    const target = arguments[0].target;
                    const targetValue = target.value;
                    const targetChecked = target.checked;

                    if (checkboxType) {
                        const questionValue = question.value || [];
                        const valueIndex = questionValue.indexOf(targetValue);
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

            const itemWidth = question.colCount > 0 ? 100 / question.colCount + "%" : "";

            const choices = booleanType ? [{locText: question.locTitle, value: !!question.value}] : question.choices;
            choices.forEach(function (choiceItem, index) {
                const input = document.createElement("input");
                input.type = options.inputType;
                input.name = question.name + (checkboxType ? "" + index : "");
                input.onchange = changeHandler;
                input.value = choiceItem.value;

                if (booleanType) {
                    input.indeterminate = (question.defaultValue === 'indeterminate');
                }

                const controlRoot = document.createElement("div");
                controlRoot.className = options.rootClass;
                controlRoot.appendChild(input);

                options.states.forEach(function(state) {
                    const stateRoot = document.createElement("div");
                    stateRoot.className = state.stateClass;
                    if (!!state.iconClass) {
                        const icon = document.createElement("i");
                        icon.className = state.iconClass;
                        stateRoot.appendChild(icon);
                    }

                    const label = document.createElement("label");
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

                const itemRoot = document.createElement("div");
                itemRoot.className = "sv_cw_pretty_checkbox_" + questionType;
                itemRoot.style.display = "inline-block";
                itemRoot.style.width = itemWidth;
                itemRoot.appendChild(controlRoot);

                element.appendChild(itemRoot);

                itemInputs[choiceItem.value] = input;
            });

            const updateValueHandler = function (newValue) {
                if (!inChangeHandler) {
                    var checkedItems = newValue || [];
                    if (radiogroupType) {
                        checkedItems = [newValue];
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

            question.valueChangedCallback = updateValueHandler;
            updateValueHandler(question.value);
        },
        willUnmount: function (question, el) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMmJjYmVkOWFhOTQyNTAwZTRlZCIsIndlYnBhY2s6Ly8vLi9zcmMvcHJldHR5LWNoZWNrYm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseUNBQXlDO0FBQzlELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNENBQTRDLG9EQUFvRDtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoid2lkZ2V0cy9wcmV0dHktY2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndpZGdldHMvcHJldHR5LWNoZWNrYm94XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvcHJldHR5LWNoZWNrYm94XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndpZGdldHMvcHJldHR5LWNoZWNrYm94XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMmJjYmVkOWFhOTQyNTAwZTRlZCIsImZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgICBjb25zdCB3aWRnZXQgPSB7XHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc3VwcG9ydGVkVHlwZXM6IFtcInJhZGlvZ3JvdXBcIiwgXCJjaGVja2JveFwiLCBcImJvb2xlYW5cIl0sXHJcbiAgICAgICAgICAgIHJhZGlvZ3JvdXA6IHtcclxuICAgICAgICAgICAgICAgIHJvb3RDbGFzczogXCJwcmV0dHkgcC1kZWZhdWx0IHAtcm91bmRcIixcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTogXCJyYWRpb1wiLFxyXG4gICAgICAgICAgICAgICAgc3RhdGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3N0YXRlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzXCIsIGFkZE9uOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGVja2JveDoge1xyXG4gICAgICAgICAgICAgICAgcm9vdENsYXNzOiBcInByZXR0eSBwLWRlZmF1bHRcIixcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgICAgICAgc3RhdGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3N0YXRlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzXCIsIGFkZE9uOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib29sZWFuOiB7XHJcbiAgICAgICAgICAgICAgICByb290Q2xhc3M6IFwicHJldHR5IHAtaWNvbiBwLWRlZmF1bHQgcC1oYXMtaW5kZXRlcm1pbmF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7c3RhdGVDbGFzczogXCJzdGF0ZSBwLXN1Y2Nlc3NcIiwgYWRkT246IFwiXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtzdGF0ZUNsYXNzOiBcInN0YXRlIHAtc3VjY2VzcyBwLWlzLWluZGV0ZXJtaW5hdGVcIiwgaWNvbkNsYXNzOiBcImljb24gbWRpIG1kaS1taW51c1wiLCBhZGRPbjogXCJcIn1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmFtZTogXCJwcmV0dHktY2hlY2tib3hcIixcclxuICAgICAgICBhY3RpdmF0ZWRCeTogXCJwcm9wZXJ0eVwiLFxyXG4gICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaHRtbFRlbXBsYXRlOiBcIjxmaWVsZHNldD48L2ZpZWxkc2V0PlwiLFxyXG4gICAgICAgIGlzRml0OiBmdW5jdGlvbiAocXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgaXNGaXRCeVR5cGUgPSB3aWRnZXQuc2V0dGluZ3Muc3VwcG9ydGVkVHlwZXMuaW5kZXhPZihxdWVzdGlvbi5nZXRUeXBlKCkpICE9PSAtMTtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT09IFwicHJvcGVydHlcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXN0aW9uW1wicmVuZGVyQXNcIl0gPT09IFwicHJldHR5Y2hlY2tib3hcIiAmJiBpc0ZpdEJ5VHlwZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aWRnZXQuYWN0aXZhdGVkQnkgPT09IFwidHlwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNGaXRCeVR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpZGdldElzTG9hZGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHdpZGdldC5hY3RpdmF0ZWRCeSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgd2lkZ2V0LnNldHRpbmdzLnN1cHBvcnRlZFR5cGVzLmZvckVhY2goZnVuY3Rpb24oc3VwcG9ydGVkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLnJlbW92ZVByb3BlcnR5KHN1cHBvcnRlZFR5cGUsIFwicmVuZGVyQXNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJwcm9wZXJ0eVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnR5KHN1cHBvcnRlZFR5cGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmVuZGVyQXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFwic3RhbmRhcmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZXM6IFtcInN0YW5kYXJkXCIsIFwicHJldHR5Y2hlY2tib3hcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzRGVmYXVsdFJlbmRlcjogZmFsc2UsXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSW5wdXRzID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXN0aW9uVHlwZSA9IHF1ZXN0aW9uLmdldFR5cGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc2V0dGluZ3NbcXVlc3Rpb25UeXBlXTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3hUeXBlID0gcXVlc3Rpb25UeXBlID09PSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvZ3JvdXBUeXBlID0gcXVlc3Rpb25UeXBlID09PSBcInJhZGlvZ3JvdXBcIjtcclxuICAgICAgICAgICAgY29uc3QgYm9vbGVhblR5cGUgPSBxdWVzdGlvblR5cGUgPT09IFwiYm9vbGVhblwiO1xyXG5cclxuICAgICAgICAgICAgdmFyIGluQ2hhbmdlSGFuZGxlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbkNoYW5nZUhhbmRsZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBhcmd1bWVudHNbMF0udGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldENoZWNrZWQgPSB0YXJnZXQuY2hlY2tlZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWVzdGlvblZhbHVlID0gcXVlc3Rpb24udmFsdWUgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBxdWVzdGlvblZhbHVlLmluZGV4T2YodGFyZ2V0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Q2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25WYWx1ZS5wdXNoKHRhcmdldFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uVmFsdWUuc3BsaWNlKHZhbHVlSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHF1ZXN0aW9uVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYWRpb2dyb3VwVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHRhcmdldFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gdGFyZ2V0Q2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluQ2hhbmdlSGFuZGxlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbVdpZHRoID0gcXVlc3Rpb24uY29sQ291bnQgPiAwID8gMTAwIC8gcXVlc3Rpb24uY29sQ291bnQgKyBcIiVcIiA6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaG9pY2VzID0gYm9vbGVhblR5cGUgPyBbe2xvY1RleHQ6IHF1ZXN0aW9uLmxvY1RpdGxlLCB2YWx1ZTogISFxdWVzdGlvbi52YWx1ZX1dIDogcXVlc3Rpb24uY2hvaWNlcztcclxuICAgICAgICAgICAgY2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2VJdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gb3B0aW9ucy5pbnB1dFR5cGU7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uYW1lID0gcXVlc3Rpb24ubmFtZSArIChjaGVja2JveFR5cGUgPyBcIlwiICsgaW5kZXggOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGlucHV0Lm9uY2hhbmdlID0gY2hhbmdlSGFuZGxlcjtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY2hvaWNlSXRlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYm9vbGVhblR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5pbmRldGVybWluYXRlID0gKHF1ZXN0aW9uLmRlZmF1bHRWYWx1ZSA9PT0gJ2luZGV0ZXJtaW5hdGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sUm9vdC5jbGFzc05hbWUgPSBvcHRpb25zLnJvb3RDbGFzcztcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xSb290LmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVSb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZVJvb3QuY2xhc3NOYW1lID0gc3RhdGUuc3RhdGVDbGFzcztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISFzdGF0ZS5pY29uQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9IHN0YXRlLmljb25DbGFzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVSb290LmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNob2ljZUl0ZW0ubG9jVGV4dC5oYXNIdG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGNob2ljZUl0ZW0ubG9jVGV4dC5odG1sO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY2hvaWNlSXRlbS5sb2NUZXh0LnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlUm9vdC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xSb290LmFwcGVuZENoaWxkKHN0YXRlUm9vdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhc3RhdGUuYWRkT24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVSb290Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgc3RhdGUuYWRkT24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Sb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1Sb290LmNsYXNzTmFtZSA9IFwic3ZfY3dfcHJldHR5X2NoZWNrYm94X1wiICsgcXVlc3Rpb25UeXBlO1xyXG4gICAgICAgICAgICAgICAgaXRlbVJvb3Quc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICBpdGVtUm9vdC5zdHlsZS53aWR0aCA9IGl0ZW1XaWR0aDtcclxuICAgICAgICAgICAgICAgIGl0ZW1Sb290LmFwcGVuZENoaWxkKGNvbnRyb2xSb290KTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGl0ZW1Sb290KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtSW5wdXRzW2Nob2ljZUl0ZW0udmFsdWVdID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWluQ2hhbmdlSGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGVja2VkSXRlbXMgPSBuZXdWYWx1ZSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmFkaW9ncm91cFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZEl0ZW1zID0gW25ld1ZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoaXRlbUlucHV0cykuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VkSXRlbXMuaW5kZXhPZihpbnB1dEl0ZW0udmFsdWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRJdGVtLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0SXRlbS5yZW1vdmVBdHRyaWJ1dGUoXCJjaGVja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKHF1ZXN0aW9uLnZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJwcm9wZXJ0eVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcHJldHR5LWNoZWNrYm94LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgOSJdLCJzb3VyY2VSb290IjoiIn0=