(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("nouislider"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/nouislider", ["nouislider"], factory);
	else if(typeof exports === 'object')
		exports["widgets/nouislider"] = factory(require("nouislider"));
	else
		root["widgets/nouislider"] = factory(root["noUiSlider"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nouislider__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nouislider__);


function init(Survey) {
  var widget = {
    name: "nouislider",
    title: "noUiSlider",
    iconName: "icon-nouislider",
    widgetIsLoaded: function () {
      return typeof __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a != "undefined";
    },
    isFit: function (question) {
      return question.getType() === "nouislider";
    },
    htmlTemplate:
      "<div><div></div></div><style>.noUi-origin { width: 0; }</style>",
    activatedByChanged: function (activatedBy) {
      Survey.JsonObject.metaData.addClass("nouislider", [], null, "empty");
      Survey.JsonObject.metaData.addProperties("nouislider", [
        {
          name: "step:number",
          category: "slider",
          categoryIndex: 1,
          default: 1,
        },
        {
          name: "rangeMin:number",
          category: "slider",
          default: 0,
        },
        {
          name: "rangeMax:number",
          category: "slider",
          default: 100,
        },
        {
          name: "pipsMode",
          category: "slider",
          default: "positions",
        },
        {
          name: "pipsValues:itemvalues",
          category: "slider",
          default: [0, 25, 50, 75, 100],
        },
        {
          name: "pipsText:itemvalues",
          category: "slider",
          default: [0, 25, 50, 75, 100],
        },
        {
          name: "pipsDensity:number",
          category: "slider",
          default: 5,
        },
        {
          name: "orientation",
          category: "slider",
          default: "horizontal",
          choices: ["horizontal", "vertical"]
        },
        {
          name: "direction:string",
          category: "slider",
          default: "ltr",
        },
        {
          name: "tooltips:boolean",
          category: "slider",
          default: true,
        },
      ]);
    },
    afterRender: function (question, el) {
      el.style.paddingBottom = "19px";
      el.style.paddingLeft = "20px";
      el.style.paddingRight = "20px";
      el.style.paddingTop = "44px";
      el = el.children[0];
      el.style.marginBottom = "60px";
      if (question.orientation === "vertical") {
        el.style.height = "250px";
      }
      var slider = __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a.create(el, {
        start: question.value || (question.rangeMin + question.rangeMax) / 2,
        connect: [true, false],
        step: question.step,
        tooltips: question.tooltips,
        pips: {
          mode: question.pipsMode || "positions",
          values: question.pipsValues.map(function (pVal) {
            var pipValue = pVal;
            if (pVal.value !== undefined) {
              pipValue = pVal.value;
            }
            return parseInt(pipValue);
          }),
          density: question.pipsDensity || 5,
          format: {
            to: function (pVal) {
              var pipText = pVal;
              question.pipsText.map(function (el) {
                if (el.text !== undefined && pVal === el.value) {
                  pipText = el.text;
                }
              });
              return pipText;
            },
          },
        },
        range: {
          min: question.rangeMin,
          max: question.rangeMax,
        },
        orientation: question.orientation,
        direction: question.direction,
      });
      slider.on("change", function () {
        question.value = Number(slider.get());
      });
      var updateValueHandler = function () {
        slider.set(question.value);
      };
      if (question.isReadOnly) {
        el.setAttribute("disabled", true);
      }
      updateValueHandler();
      question.noUiSlider = slider;
      question.valueChangedCallback = updateValueHandler;
      question.readOnlyChangedCallback = function () {
        if (question.isReadOnly) {
          el.setAttribute("disabled", true);
        } else {
          el.removeAttribute("disabled");
        }
      };
    },
    willUnmount: function (question, el) {
      if (!!question.noUiSlider) {
        question.noUiSlider.destroy();
        question.noUiSlider = null;
      }
      question.readOnlyChangedCallback = null;
    },
    pdfRender: function (_, options) {
      if (options.question.getType() === "nouislider") {
        var point = options.module.SurveyHelper.createPoint(
          options.module.SurveyHelper.mergeRects.apply(null, options.bricks)
        );
        point.xLeft += options.controller.unitWidth;
        point.yTop +=
          options.controller.unitHeight *
          options.module.FlatQuestion.CONTENT_GAP_VERT_SCALE;
        var rect = options.module.SurveyHelper.createTextFieldRect(
          point,
          options.controller
        );
        var textboxBrick = new options.module.TextFieldBrick(
          options.question,
          options.controller,
          rect,
          true,
          options.question.id,
          options.question.value || options.question.defaultValue || "",
          "",
          options.question.isReadOnly,
          false,
          "text"
        );
        options.bricks.push(textboxBrick);
      }
    },
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZGIyMTNkMDY1YzNkODAxNzg0OSIsIndlYnBhY2s6Ly8vLi9zcmMvbm91aXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibm9VaVNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJub3Vpc2xpZGVyXCIsXCJjb21tb25qc1wiOlwibm91aXNsaWRlclwiLFwiYW1kXCI6XCJub3Vpc2xpZGVyXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBVTtBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtEQUFrRCxVQUFVLEVBQUU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQzs7Ozs7Ozs7QUNwTHBCLCtDIiwiZmlsZSI6IndpZGdldHMvbm91aXNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm5vdWlzbGlkZXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ3aWRnZXRzL25vdWlzbGlkZXJcIiwgW1wibm91aXNsaWRlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3aWRnZXRzL25vdWlzbGlkZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJub3Vpc2xpZGVyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aWRnZXRzL25vdWlzbGlkZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJub1VpU2xpZGVyXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZGIyMTNkMDY1YzNkODAxNzg0OSIsImltcG9ydCBub1VpU2xpZGVyIGZyb20gXCJub3Vpc2xpZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcIm5vdWlzbGlkZXJcIixcclxuICAgIHRpdGxlOiBcIm5vVWlTbGlkZXJcIixcclxuICAgIGljb25OYW1lOiBcImljb24tbm91aXNsaWRlclwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBub1VpU2xpZGVyICE9IFwidW5kZWZpbmVkXCI7XHJcbiAgICB9LFxyXG4gICAgaXNGaXQ6IGZ1bmN0aW9uIChxdWVzdGlvbikge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcIm5vdWlzbGlkZXJcIjtcclxuICAgIH0sXHJcbiAgICBodG1sVGVtcGxhdGU6XHJcbiAgICAgIFwiPGRpdj48ZGl2PjwvZGl2PjwvZGl2PjxzdHlsZT4ubm9VaS1vcmlnaW4geyB3aWR0aDogMDsgfTwvc3R5bGU+XCIsXHJcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uIChhY3RpdmF0ZWRCeSkge1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm5vdWlzbGlkZXJcIiwgW10sIG51bGwsIFwiZW1wdHlcIik7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJub3Vpc2xpZGVyXCIsIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInN0ZXA6bnVtYmVyXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJzbGlkZXJcIixcclxuICAgICAgICAgIGNhdGVnb3J5SW5kZXg6IDEsXHJcbiAgICAgICAgICBkZWZhdWx0OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJyYW5nZU1pbjpudW1iZXJcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcInNsaWRlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwicmFuZ2VNYXg6bnVtYmVyXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJzbGlkZXJcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IDEwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwicGlwc01vZGVcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcInNsaWRlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogXCJwb3NpdGlvbnNcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwicGlwc1ZhbHVlczppdGVtdmFsdWVzXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJzbGlkZXJcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IFswLCAyNSwgNTAsIDc1LCAxMDBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJwaXBzVGV4dDppdGVtdmFsdWVzXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJzbGlkZXJcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IFswLCAyNSwgNTAsIDc1LCAxMDBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJwaXBzRGVuc2l0eTpudW1iZXJcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcInNsaWRlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwib3JpZW50YXRpb25cIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcInNsaWRlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICBjaG9pY2VzOiBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiZGlyZWN0aW9uOnN0cmluZ1wiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwic2xpZGVyXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiBcImx0clwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJ0b29sdGlwczpib29sZWFuXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJzbGlkZXJcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSk7XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgZWwuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMTlweFwiO1xyXG4gICAgICBlbC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMjBweFwiO1xyXG4gICAgICBlbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjIwcHhcIjtcclxuICAgICAgZWwuc3R5bGUucGFkZGluZ1RvcCA9IFwiNDRweFwiO1xyXG4gICAgICBlbCA9IGVsLmNoaWxkcmVuWzBdO1xyXG4gICAgICBlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjYwcHhcIjtcclxuICAgICAgaWYgKHF1ZXN0aW9uLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBcIjI1MHB4XCI7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIHNsaWRlciA9IG5vVWlTbGlkZXIuY3JlYXRlKGVsLCB7XHJcbiAgICAgICAgc3RhcnQ6IHF1ZXN0aW9uLnZhbHVlIHx8IChxdWVzdGlvbi5yYW5nZU1pbiArIHF1ZXN0aW9uLnJhbmdlTWF4KSAvIDIsXHJcbiAgICAgICAgY29ubmVjdDogW3RydWUsIGZhbHNlXSxcclxuICAgICAgICBzdGVwOiBxdWVzdGlvbi5zdGVwLFxyXG4gICAgICAgIHRvb2x0aXBzOiBxdWVzdGlvbi50b29sdGlwcyxcclxuICAgICAgICBwaXBzOiB7XHJcbiAgICAgICAgICBtb2RlOiBxdWVzdGlvbi5waXBzTW9kZSB8fCBcInBvc2l0aW9uc1wiLFxyXG4gICAgICAgICAgdmFsdWVzOiBxdWVzdGlvbi5waXBzVmFsdWVzLm1hcChmdW5jdGlvbiAocFZhbCkge1xyXG4gICAgICAgICAgICB2YXIgcGlwVmFsdWUgPSBwVmFsO1xyXG4gICAgICAgICAgICBpZiAocFZhbC52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgcGlwVmFsdWUgPSBwVmFsLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChwaXBWYWx1ZSk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGRlbnNpdHk6IHF1ZXN0aW9uLnBpcHNEZW5zaXR5IHx8IDUsXHJcbiAgICAgICAgICBmb3JtYXQ6IHtcclxuICAgICAgICAgICAgdG86IGZ1bmN0aW9uIChwVmFsKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHBpcFRleHQgPSBwVmFsO1xyXG4gICAgICAgICAgICAgIHF1ZXN0aW9uLnBpcHNUZXh0Lm1hcChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC50ZXh0ICE9PSB1bmRlZmluZWQgJiYgcFZhbCA9PT0gZWwudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgcGlwVGV4dCA9IGVsLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBpcFRleHQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgIG1pbjogcXVlc3Rpb24ucmFuZ2VNaW4sXHJcbiAgICAgICAgICBtYXg6IHF1ZXN0aW9uLnJhbmdlTWF4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3JpZW50YXRpb246IHF1ZXN0aW9uLm9yaWVudGF0aW9uLFxyXG4gICAgICAgIGRpcmVjdGlvbjogcXVlc3Rpb24uZGlyZWN0aW9uLFxyXG4gICAgICB9KTtcclxuICAgICAgc2xpZGVyLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IE51bWJlcihzbGlkZXIuZ2V0KCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzbGlkZXIuc2V0KHF1ZXN0aW9uLnZhbHVlKTtcclxuICAgICAgfTtcclxuICAgICAgaWYgKHF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcclxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgICAgcXVlc3Rpb24ubm9VaVNsaWRlciA9IHNsaWRlcjtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbiAocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIGlmICghIXF1ZXN0aW9uLm5vVWlTbGlkZXIpIHtcclxuICAgICAgICBxdWVzdGlvbi5ub1VpU2xpZGVyLmRlc3Ryb3koKTtcclxuICAgICAgICBxdWVzdGlvbi5ub1VpU2xpZGVyID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IG51bGw7XHJcbiAgICB9LFxyXG4gICAgcGRmUmVuZGVyOiBmdW5jdGlvbiAoXywgb3B0aW9ucykge1xyXG4gICAgICBpZiAob3B0aW9ucy5xdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwibm91aXNsaWRlclwiKSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gb3B0aW9ucy5tb2R1bGUuU3VydmV5SGVscGVyLmNyZWF0ZVBvaW50KFxyXG4gICAgICAgICAgb3B0aW9ucy5tb2R1bGUuU3VydmV5SGVscGVyLm1lcmdlUmVjdHMuYXBwbHkobnVsbCwgb3B0aW9ucy5icmlja3MpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBwb2ludC54TGVmdCArPSBvcHRpb25zLmNvbnRyb2xsZXIudW5pdFdpZHRoO1xyXG4gICAgICAgIHBvaW50LnlUb3AgKz1cclxuICAgICAgICAgIG9wdGlvbnMuY29udHJvbGxlci51bml0SGVpZ2h0ICpcclxuICAgICAgICAgIG9wdGlvbnMubW9kdWxlLkZsYXRRdWVzdGlvbi5DT05URU5UX0dBUF9WRVJUX1NDQUxFO1xyXG4gICAgICAgIHZhciByZWN0ID0gb3B0aW9ucy5tb2R1bGUuU3VydmV5SGVscGVyLmNyZWF0ZVRleHRGaWVsZFJlY3QoXHJcbiAgICAgICAgICBwb2ludCxcclxuICAgICAgICAgIG9wdGlvbnMuY29udHJvbGxlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIHRleHRib3hCcmljayA9IG5ldyBvcHRpb25zLm1vZHVsZS5UZXh0RmllbGRCcmljayhcclxuICAgICAgICAgIG9wdGlvbnMucXVlc3Rpb24sXHJcbiAgICAgICAgICBvcHRpb25zLmNvbnRyb2xsZXIsXHJcbiAgICAgICAgICByZWN0LFxyXG4gICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgIG9wdGlvbnMucXVlc3Rpb24uaWQsXHJcbiAgICAgICAgICBvcHRpb25zLnF1ZXN0aW9uLnZhbHVlIHx8IG9wdGlvbnMucXVlc3Rpb24uZGVmYXVsdFZhbHVlIHx8IFwiXCIsXHJcbiAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgb3B0aW9ucy5xdWVzdGlvbi5pc1JlYWRPbmx5LFxyXG4gICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICBcInRleHRcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgb3B0aW9ucy5icmlja3MucHVzaCh0ZXh0Ym94QnJpY2spO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL25vdWlzbGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIm5vVWlTbGlkZXJcIixcImNvbW1vbmpzMlwiOlwibm91aXNsaWRlclwiLFwiY29tbW9uanNcIjpcIm5vdWlzbGlkZXJcIixcImFtZFwiOlwibm91aXNsaWRlclwifVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyJdLCJzb3VyY2VSb290IjoiIn0=