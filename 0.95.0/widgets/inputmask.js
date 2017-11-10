(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("inputmask"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/inputmask", ["inputmask"], factory);
	else if(typeof exports === 'object')
		exports["widgets/inputmask"] = factory(require("inputmask"));
	else
		root["widgets/inputmask"] = factory(root["Inputmask"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inputmask__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inputmask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inputmask__);


function init(Survey) {
    var widget = {
        name: "maskedit",
        numericGroupSeparator: ',',
        numericAutoGroup: true,
        numericDigits: 2,
        numericDigitsOptional: false,
        numericPrefix: '$',
        numericPlaceholder: '0',
        isFit : function(question) { 
            if(typeof __WEBPACK_IMPORTED_MODULE_0_inputmask___default.a == undefined) return false;
            if(question.getType() == "multipletext") return true;
            return question.getType() == "text" && (question.inputMask != "none" || question.inputFormat);
        },
        isDefaultRender: true,
        activatedByChanged: function(activatedBy) {
            if(Survey.JsonObject.metaData.findProperty("text", "inputMask")) return;
            var properties = ["inputFormat", {name: "inputMask", default: "none", choices: ["none", "datetime", "currency", "decimal", "email", "phone", "ip"]}];
            Survey.JsonObject.metaData.addProperties("text", properties);
            Survey.JsonObject.metaData.addProperties("matrixdropdowncolumn", properties);
            Survey.JsonObject.metaData.addProperties("multipletextitem", properties);
        },
        applyInputMask: function(surveyElement, el) {
            var rootWidget = this;
            var mask = surveyElement.inputMask != "none" ? surveyElement.inputMask : surveyElement.inputFormat;
            var options = {};
            if(surveyElement.inputMask != "none") options.inputFormat = surveyElement.inputFormat;
            
            if(surveyElement.inputMask == "currency" || surveyElement.inputMask == "decimal") {
                options.groupSeparator = rootWidget.numericGroupSeparator;
                options.autoGroup = rootWidget.numericAutoGroup;
            }
            if(surveyElement.inputMask == "currency") {
                options.digits = rootWidget.numericDigits;
                options.digitsOptional = rootWidget.numericDigitsOptional;
                options.prefix = rootWidget.numericPrefix;
                options.placeholder = rootWidget.numericPlaceholder;
            }
            if (surveyElement.inputMask == "datetime") {
                mask = surveyElement.inputFormat;
            }

            __WEBPACK_IMPORTED_MODULE_0_inputmask___default()(mask, options).mask(el);

            el.oninput = function() {
                surveyElement.customWidgetData.isNeedRender = true; 
            }

            var updateHandler = function() {               
                el.value = typeof surveyElement.value === "undefined" ? "" : surveyElement.value;
            };
            surveyElement.valueChangedCallback = updateHandler;
            updateHandler();
        },
        afterRender: function(question, el) {
            if(question.getType() != "multipletext") {
                var input = el.querySelector("input") || el;
                this.applyInputMask(question, input);
            } else {
                for(var i = 0; i < question.items.length; i ++) {
                    var item = question.items[i];
                    if(item.inputMask != "none" || item.inputFormat) {
                        var input =  el.querySelector("#" + item.id);
                        if (input) {
                            this.applyInputMask(item, input);
                        }
                    }
                }
            }
        },
        willUnmount: function(question, el) {
            var input = el.querySelector("input") || el;
            input.inputmask.remove();
        }
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget);
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhMzU0NTA3NTNkNmU1NDNhM2Y1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXRtYXNrLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJJbnB1dG1hc2tcIixcImNvbW1vbmpzMlwiOlwiaW5wdXRtYXNrXCIsXCJjb21tb25qc1wiOlwiaW5wdXRtYXNrXCIsXCJhbWRcIjpcImlucHV0bWFza1wifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGlIQUFpSDtBQUMvSjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1FO0FBQ0E7O0FBRUEsNEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiw4QkFBOEIsMkJBQTJCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFFOzs7Ozs7O0FDckZBLCtDIiwiZmlsZSI6IndpZGdldHMvaW5wdXRtYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiaW5wdXRtYXNrXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9pbnB1dG1hc2tcIiwgW1wiaW5wdXRtYXNrXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvaW5wdXRtYXNrXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiaW5wdXRtYXNrXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aWRnZXRzL2lucHV0bWFza1wiXSA9IGZhY3Rvcnkocm9vdFtcIklucHV0bWFza1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhMzU0NTA3NTNkNmU1NDNhM2Y1ZSIsImltcG9ydCBJbnB1dG1hc2sgZnJvbSBcImlucHV0bWFza1wiO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSB7XHJcbiAgICAgICAgbmFtZTogXCJtYXNrZWRpdFwiLFxyXG4gICAgICAgIG51bWVyaWNHcm91cFNlcGFyYXRvcjogJywnLFxyXG4gICAgICAgIG51bWVyaWNBdXRvR3JvdXA6IHRydWUsXHJcbiAgICAgICAgbnVtZXJpY0RpZ2l0czogMixcclxuICAgICAgICBudW1lcmljRGlnaXRzT3B0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgIG51bWVyaWNQcmVmaXg6ICckJyxcclxuICAgICAgICBudW1lcmljUGxhY2Vob2xkZXI6ICcwJyxcclxuICAgICAgICBpc0ZpdCA6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7IFxyXG4gICAgICAgICAgICBpZih0eXBlb2YgSW5wdXRtYXNrID09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZihxdWVzdGlvbi5nZXRUeXBlKCkgPT0gXCJtdWx0aXBsZXRleHRcIikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT0gXCJ0ZXh0XCIgJiYgKHF1ZXN0aW9uLmlucHV0TWFzayAhPSBcIm5vbmVcIiB8fCBxdWVzdGlvbi5pbnB1dEZvcm1hdCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0RlZmF1bHRSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICAgICAgICBpZihTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5maW5kUHJvcGVydHkoXCJ0ZXh0XCIsIFwiaW5wdXRNYXNrXCIpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gW1wiaW5wdXRGb3JtYXRcIiwge25hbWU6IFwiaW5wdXRNYXNrXCIsIGRlZmF1bHQ6IFwibm9uZVwiLCBjaG9pY2VzOiBbXCJub25lXCIsIFwiZGF0ZXRpbWVcIiwgXCJjdXJyZW5jeVwiLCBcImRlY2ltYWxcIiwgXCJlbWFpbFwiLCBcInBob25lXCIsIFwiaXBcIl19XTtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcInRleHRcIiwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJtYXRyaXhkcm9wZG93bmNvbHVtblwiLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcIm11bHRpcGxldGV4dGl0ZW1cIiwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcHBseUlucHV0TWFzazogZnVuY3Rpb24oc3VydmV5RWxlbWVudCwgZWwpIHtcclxuICAgICAgICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgbWFzayA9IHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrICE9IFwibm9uZVwiID8gc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgOiBzdXJ2ZXlFbGVtZW50LmlucHV0Rm9ybWF0O1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICBpZihzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayAhPSBcIm5vbmVcIikgb3B0aW9ucy5pbnB1dEZvcm1hdCA9IHN1cnZleUVsZW1lbnQuaW5wdXRGb3JtYXQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihzdXJ2ZXlFbGVtZW50LmlucHV0TWFzayA9PSBcImN1cnJlbmN5XCIgfHwgc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgPT0gXCJkZWNpbWFsXCIpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZ3JvdXBTZXBhcmF0b3IgPSByb290V2lkZ2V0Lm51bWVyaWNHcm91cFNlcGFyYXRvcjtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuYXV0b0dyb3VwID0gcm9vdFdpZGdldC5udW1lcmljQXV0b0dyb3VwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHN1cnZleUVsZW1lbnQuaW5wdXRNYXNrID09IFwiY3VycmVuY3lcIikge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kaWdpdHMgPSByb290V2lkZ2V0Lm51bWVyaWNEaWdpdHM7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmRpZ2l0c09wdGlvbmFsID0gcm9vdFdpZGdldC5udW1lcmljRGlnaXRzT3B0aW9uYWw7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnByZWZpeCA9IHJvb3RXaWRnZXQubnVtZXJpY1ByZWZpeDtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMucGxhY2Vob2xkZXIgPSByb290V2lkZ2V0Lm51bWVyaWNQbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3VydmV5RWxlbWVudC5pbnB1dE1hc2sgPT0gXCJkYXRldGltZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBtYXNrID0gc3VydmV5RWxlbWVudC5pbnB1dEZvcm1hdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgSW5wdXRtYXNrKG1hc2ssIG9wdGlvbnMpLm1hc2soZWwpO1xyXG5cclxuICAgICAgICAgICAgZWwub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc3VydmV5RWxlbWVudC5jdXN0b21XaWRnZXREYXRhLmlzTmVlZFJlbmRlciA9IHRydWU7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdXBkYXRlSGFuZGxlciA9IGZ1bmN0aW9uKCkgeyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZWwudmFsdWUgPSB0eXBlb2Ygc3VydmV5RWxlbWVudC52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiXCIgOiBzdXJ2ZXlFbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdXJ2ZXlFbGVtZW50LnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlSGFuZGxlcjtcclxuICAgICAgICAgICAgdXBkYXRlSGFuZGxlcigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICAgICAgICBpZihxdWVzdGlvbi5nZXRUeXBlKCkgIT0gXCJtdWx0aXBsZXRleHRcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcImlucHV0XCIpIHx8IGVsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUlucHV0TWFzayhxdWVzdGlvbiwgaW5wdXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXN0aW9uLml0ZW1zLmxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcXVlc3Rpb24uaXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5pbnB1dE1hc2sgIT0gXCJub25lXCIgfHwgaXRlbS5pbnB1dEZvcm1hdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSAgZWwucXVlcnlTZWxlY3RvcihcIiNcIiArIGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlJbnB1dE1hc2soaXRlbSwgaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSB8fCBlbDtcclxuICAgICAgICAgICAgaW5wdXQuaW5wdXRtYXNrLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0KTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbnB1dG1hc2suanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIklucHV0bWFza1wiLFwiY29tbW9uanMyXCI6XCJpbnB1dG1hc2tcIixcImNvbW1vbmpzXCI6XCJpbnB1dG1hc2tcIixcImFtZFwiOlwiaW5wdXRtYXNrXCJ9XG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2Il0sInNvdXJjZVJvb3QiOiIifQ==