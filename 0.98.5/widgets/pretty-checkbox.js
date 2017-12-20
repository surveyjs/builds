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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey) {
  var widget = {
    settings: {
      radiogroup: {
        rootClass: "pretty p-default p-round",
        inputType: "radio",
        titleClass: "state p-success"
      },
      checkbox: {
        rootClass: "pretty p-default",
        inputType: "checkbox",
        titleClass: "state p-success"
      }
    },
    name: "pretty-checkbox",
    widgetIsLoaded: function () {
      for (var i = 0; i < document.styleSheets.length; i++) {
        var href = document.styleSheets[i].ownerNode["href"];
        if (!!href && href.indexOf("pretty-checkbox") != -1) {
          return true;
        }
      }
      return false;
    },
    htmlTemplate: "<fieldset></fieldset>",
    isFit: function (question) {
      var type = question.getType();
      return type === "radiogroup" || type === "checkbox"; // || type === "matrix";
    },
    isDefaultRender: false,
    afterRender: function (question, el) {
      var itemInputs = {};
      var options = this.settings[question.getType()];
      var inChangeHandler = false;
      var changeHandler = function (event) {
        inChangeHandler = true;
        try {
          var value = arguments[0].target.value;
          if (question.getType() === "checkbox") {
            var qValue = question.value || [];
            if (arguments[0].target.checked) {
              if (qValue.indexOf(value) === -1) {
                qValue.push(value);
              }
            } else {
              if (qValue.indexOf(value) !== -1) {
                qValue.splice(qValue.indexOf(value), 1);
              }
            }
            question.value = qValue;
          } else {
            question.value = value;
          }
        } finally {
          inChangeHandler = false;
        }
      };
      question.choices.forEach(function (choiceItem, index) {
        var itemRoot = document.createElement("div");
        itemRoot.className = options.rootClass;
        var input = document.createElement("input");
        input.type = options.inputType;
        input.name =
          question.name + (question.getType() === "checkbox" ? "" + index : "");
        input.onchange = changeHandler;
        input.value = choiceItem.value;
        var titleRoot = document.createElement("div");
        titleRoot.className = options.titleClass;
        var label = document.createElement("label");
        label.textContent = choiceItem.text;
        titleRoot.appendChild(label);
        itemRoot.appendChild(input);
        itemRoot.appendChild(titleRoot);
        el.appendChild(itemRoot);

        itemInputs[choiceItem.value] = input;
      });
      var updateValueHandler = function (newValue) {
        if (!inChangeHandler) {
          var checkedItems = newValue || [];
          if (question.getType() === "radiogroup") {
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

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "type");
}

if (typeof Survey !== "undefined") {
  init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5Yjc0ZTkzNGNiMTNkZWRmMmE1NiIsIndlYnBhY2s6Ly8vLi9zcmMvcHJldHR5LWNoZWNrYm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHFCQUFxQixpQ0FBaUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFFIiwiZmlsZSI6IndpZGdldHMvcHJldHR5LWNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ3aWRnZXRzL3ByZXR0eS1jaGVja2JveFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3aWRnZXRzL3ByZXR0eS1jaGVja2JveFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aWRnZXRzL3ByZXR0eS1jaGVja2JveFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWI3NGU5MzRjYjEzZGVkZjJhNTYiLCJmdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBzZXR0aW5nczoge1xyXG4gICAgICByYWRpb2dyb3VwOiB7XHJcbiAgICAgICAgcm9vdENsYXNzOiBcInByZXR0eSBwLWRlZmF1bHQgcC1yb3VuZFwiLFxyXG4gICAgICAgIGlucHV0VHlwZTogXCJyYWRpb1wiLFxyXG4gICAgICAgIHRpdGxlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzXCJcclxuICAgICAgfSxcclxuICAgICAgY2hlY2tib3g6IHtcclxuICAgICAgICByb290Q2xhc3M6IFwicHJldHR5IHAtZGVmYXVsdFwiLFxyXG4gICAgICAgIGlucHV0VHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgIHRpdGxlQ2xhc3M6IFwic3RhdGUgcC1zdWNjZXNzXCJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5hbWU6IFwicHJldHR5LWNoZWNrYm94XCIsXHJcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGhyZWYgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGVbXCJocmVmXCJdO1xyXG4gICAgICAgIGlmICghIWhyZWYgJiYgaHJlZi5pbmRleE9mKFwicHJldHR5LWNoZWNrYm94XCIpICE9IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGh0bWxUZW1wbGF0ZTogXCI8ZmllbGRzZXQ+PC9maWVsZHNldD5cIixcclxuICAgIGlzRml0OiBmdW5jdGlvbiAocXVlc3Rpb24pIHtcclxuICAgICAgdmFyIHR5cGUgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XHJcbiAgICAgIHJldHVybiB0eXBlID09PSBcInJhZGlvZ3JvdXBcIiB8fCB0eXBlID09PSBcImNoZWNrYm94XCI7IC8vIHx8IHR5cGUgPT09IFwibWF0cml4XCI7XHJcbiAgICB9LFxyXG4gICAgaXNEZWZhdWx0UmVuZGVyOiBmYWxzZSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciBpdGVtSW5wdXRzID0ge307XHJcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5zZXR0aW5nc1txdWVzdGlvbi5nZXRUeXBlKCldO1xyXG4gICAgICB2YXIgaW5DaGFuZ2VIYW5kbGVyID0gZmFsc2U7XHJcbiAgICAgIHZhciBjaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaW5DaGFuZ2VIYW5kbGVyID0gdHJ1ZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgdmFyIHZhbHVlID0gYXJndW1lbnRzWzBdLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiY2hlY2tib3hcIikge1xyXG4gICAgICAgICAgICB2YXIgcVZhbHVlID0gcXVlc3Rpb24udmFsdWUgfHwgW107XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHNbMF0udGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICBpZiAocVZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcVZhbHVlLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAocVZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcVZhbHVlLnNwbGljZShxVmFsdWUuaW5kZXhPZih2YWx1ZSksIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHFWYWx1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIGluQ2hhbmdlSGFuZGxlciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgcXVlc3Rpb24uY2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2VJdGVtLCBpbmRleCkge1xyXG4gICAgICAgIHZhciBpdGVtUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaXRlbVJvb3QuY2xhc3NOYW1lID0gb3B0aW9ucy5yb290Q2xhc3M7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSBvcHRpb25zLmlucHV0VHlwZTtcclxuICAgICAgICBpbnB1dC5uYW1lID1cclxuICAgICAgICAgIHF1ZXN0aW9uLm5hbWUgKyAocXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImNoZWNrYm94XCIgPyBcIlwiICsgaW5kZXggOiBcIlwiKTtcclxuICAgICAgICBpbnB1dC5vbmNoYW5nZSA9IGNoYW5nZUhhbmRsZXI7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBjaG9pY2VJdGVtLnZhbHVlO1xyXG4gICAgICAgIHZhciB0aXRsZVJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpdGxlUm9vdC5jbGFzc05hbWUgPSBvcHRpb25zLnRpdGxlQ2xhc3M7XHJcbiAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY2hvaWNlSXRlbS50ZXh0O1xyXG4gICAgICAgIHRpdGxlUm9vdC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgaXRlbVJvb3QuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIGl0ZW1Sb290LmFwcGVuZENoaWxkKHRpdGxlUm9vdCk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoaXRlbVJvb3QpO1xyXG5cclxuICAgICAgICBpdGVtSW5wdXRzW2Nob2ljZUl0ZW0udmFsdWVdID0gaW5wdXQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFpbkNoYW5nZUhhbmRsZXIpIHtcclxuICAgICAgICAgIHZhciBjaGVja2VkSXRlbXMgPSBuZXdWYWx1ZSB8fCBbXTtcclxuICAgICAgICAgIGlmIChxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwicmFkaW9ncm91cFwiKSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWRJdGVtcyA9IFtuZXdWYWx1ZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBPYmplY3QudmFsdWVzKGl0ZW1JbnB1dHMpLmZvckVhY2goZnVuY3Rpb24gKGlucHV0SXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZEl0ZW1zLmluZGV4T2YoaW5wdXRJdGVtLnZhbHVlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICBpbnB1dEl0ZW0uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlucHV0SXRlbS5yZW1vdmVBdHRyaWJ1dGUoXCJjaGVja2VkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIocXVlc3Rpb24udmFsdWUpO1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwidHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcHJldHR5LWNoZWNrYm94LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgOCJdLCJzb3VyY2VSb290IjoiIn0=