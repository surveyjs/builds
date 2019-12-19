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
    widgetIsLoaded: function() {
      return typeof __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a != "undefined";
    },
    isFit: function(question) {
      return question.getType() === "nouislider";
    },
    htmlTemplate: "<div><div></div></div>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass("nouislider", [], null, "empty");
      Survey.JsonObject.metaData.addProperties("nouislider", [
        {
          name: "step:number",
          default: 1
        },
        {
          name: "rangeMin:number",
          default: 0
        },
        {
          name: "rangeMax:number",
          default: 100
        },
        {
          name: "pipsMode",
          default: "positions"
        },
        {
          name: "pipsValues:itemvalues",
          default: [0, 25, 50, 75, 100]
        },
        {
          name: "pipsDensity:number",
          default: 5
        },
        {
          name: "orientation:string",
          default: "horizontal"
        }
      ]);
    },
    afterRender: function(question, el) {
      el.style.paddingBottom = "19px";
      el.style.paddingRight = "30px";
      el.style.paddingTop = "44px";
      el = el.children[0];
      el.style.marginBottom = "60px";
      if(question.orientation === "vertical") {
        el.style.height = "250px";
      }
      var slider = __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a.create(el, {
        start: question.value || (question.rangeMin + question.rangeMax) / 2,
        connect: [true, false],
        step: question.step,
        tooltips: true,
        pips: {
          mode: question.pipsMode || "positions",
          values: question.pipsValues.map(function(pVal) {
            var pipValue = pVal;
            if(pVal.value !== undefined) {
              pipValue = pVal.value;
            }
            return parseInt(pipValue);
          }),
          density: question.pipsDensity || 5
        },
        range: {
          min: question.rangeMin,
          max: question.rangeMax
        },
        orientation: question.orientation
      });
      slider.on("change", function() {
        question.value = slider.get();
      });
      var updateValueHandler = function() {
        slider.set(question.value);
      };
      if (question.isReadOnly) {
        el.setAttribute("disabled", true);
      }
      updateValueHandler();
      question.noUiSlider = slider;
      question.valueChangedCallback = updateValueHandler;
      question.readOnlyChangedCallback = function() {
        if (question.isReadOnly) {
          el.setAttribute("disabled", true);
        } else {
          el.removeAttribute("disabled");
        }
      };
    },
    willUnmount: function(question, el) {
      if (!!question.noUiSlider) {
        question.noUiSlider.destroy();
        question.noUiSlider = null;
      }
      question.readOnlyChangedCallback = null;
    },
    pdfRender: function(_, options) {
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
          options.question.value || options.question.defaultValue,
          "",
          options.question.isReadOnly,
          false,
          "text"
        );
        options.bricks.push(textboxBrick);
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxOWY5ZGQ0OWE3MTM4OTRmY2IzZSIsIndlYnBhY2s6Ly8vLi9zcmMvbm91aXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibm9VaVNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJub3Vpc2xpZGVyXCIsXCJjb21tb25qc1wiOlwibm91aXNsaWRlclwiLFwiYW1kXCI6XCJub3Vpc2xpZGVyXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBVTtBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUM7Ozs7Ozs7O0FDOUlwQiwrQyIsImZpbGUiOiJ3aWRnZXRzL25vdWlzbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJub3Vpc2xpZGVyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9ub3Vpc2xpZGVyXCIsIFtcIm5vdWlzbGlkZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2lkZ2V0cy9ub3Vpc2xpZGVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibm91aXNsaWRlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wid2lkZ2V0cy9ub3Vpc2xpZGVyXCJdID0gZmFjdG9yeShyb290W1wibm9VaVNsaWRlclwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTlmOWRkNDlhNzEzODk0ZmNiM2UiLCJpbXBvcnQgbm9VaVNsaWRlciBmcm9tIFwibm91aXNsaWRlclwiO1xuXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xuICB2YXIgd2lkZ2V0ID0ge1xuICAgIG5hbWU6IFwibm91aXNsaWRlclwiLFxuICAgIHRpdGxlOiBcIm5vVWlTbGlkZXJcIixcbiAgICBpY29uTmFtZTogXCJpY29uLW5vdWlzbGlkZXJcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG5vVWlTbGlkZXIgIT0gXCJ1bmRlZmluZWRcIjtcbiAgICB9LFxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJub3Vpc2xpZGVyXCI7XG4gICAgfSxcbiAgICBodG1sVGVtcGxhdGU6IFwiPGRpdj48ZGl2PjwvZGl2PjwvZGl2PlwiLFxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibm91aXNsaWRlclwiLCBbXSwgbnVsbCwgXCJlbXB0eVwiKTtcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJub3Vpc2xpZGVyXCIsIFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic3RlcDpudW1iZXJcIixcbiAgICAgICAgICBkZWZhdWx0OiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJhbmdlTWluOm51bWJlclwiLFxuICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicmFuZ2VNYXg6bnVtYmVyXCIsXG4gICAgICAgICAgZGVmYXVsdDogMTAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInBpcHNNb2RlXCIsXG4gICAgICAgICAgZGVmYXVsdDogXCJwb3NpdGlvbnNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJwaXBzVmFsdWVzOml0ZW12YWx1ZXNcIixcbiAgICAgICAgICBkZWZhdWx0OiBbMCwgMjUsIDUwLCA3NSwgMTAwXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJwaXBzRGVuc2l0eTpudW1iZXJcIixcbiAgICAgICAgICBkZWZhdWx0OiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIm9yaWVudGF0aW9uOnN0cmluZ1wiLFxuICAgICAgICAgIGRlZmF1bHQ6IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgIH1cbiAgICAgIF0pO1xuICAgIH0sXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgZWwuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMTlweFwiO1xuICAgICAgZWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIzMHB4XCI7XG4gICAgICBlbC5zdHlsZS5wYWRkaW5nVG9wID0gXCI0NHB4XCI7XG4gICAgICBlbCA9IGVsLmNoaWxkcmVuWzBdO1xuICAgICAgZWwuc3R5bGUubWFyZ2luQm90dG9tID0gXCI2MHB4XCI7XG4gICAgICBpZihxdWVzdGlvbi5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IFwiMjUwcHhcIjtcbiAgICAgIH1cbiAgICAgIHZhciBzbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShlbCwge1xuICAgICAgICBzdGFydDogcXVlc3Rpb24udmFsdWUgfHwgKHF1ZXN0aW9uLnJhbmdlTWluICsgcXVlc3Rpb24ucmFuZ2VNYXgpIC8gMixcbiAgICAgICAgY29ubmVjdDogW3RydWUsIGZhbHNlXSxcbiAgICAgICAgc3RlcDogcXVlc3Rpb24uc3RlcCxcbiAgICAgICAgdG9vbHRpcHM6IHRydWUsXG4gICAgICAgIHBpcHM6IHtcbiAgICAgICAgICBtb2RlOiBxdWVzdGlvbi5waXBzTW9kZSB8fCBcInBvc2l0aW9uc1wiLFxuICAgICAgICAgIHZhbHVlczogcXVlc3Rpb24ucGlwc1ZhbHVlcy5tYXAoZnVuY3Rpb24ocFZhbCkge1xuICAgICAgICAgICAgdmFyIHBpcFZhbHVlID0gcFZhbDtcbiAgICAgICAgICAgIGlmKHBWYWwudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBwaXBWYWx1ZSA9IHBWYWwudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQocGlwVmFsdWUpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlbnNpdHk6IHF1ZXN0aW9uLnBpcHNEZW5zaXR5IHx8IDVcbiAgICAgICAgfSxcbiAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICBtaW46IHF1ZXN0aW9uLnJhbmdlTWluLFxuICAgICAgICAgIG1heDogcXVlc3Rpb24ucmFuZ2VNYXhcbiAgICAgICAgfSxcbiAgICAgICAgb3JpZW50YXRpb246IHF1ZXN0aW9uLm9yaWVudGF0aW9uXG4gICAgICB9KTtcbiAgICAgIHNsaWRlci5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBzbGlkZXIuZ2V0KCk7XG4gICAgICB9KTtcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2xpZGVyLnNldChxdWVzdGlvbi52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgaWYgKHF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcbiAgICAgIHF1ZXN0aW9uLm5vVWlTbGlkZXIgPSBzbGlkZXI7XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICBpZiAoISFxdWVzdGlvbi5ub1VpU2xpZGVyKSB7XG4gICAgICAgIHF1ZXN0aW9uLm5vVWlTbGlkZXIuZGVzdHJveSgpO1xuICAgICAgICBxdWVzdGlvbi5ub1VpU2xpZGVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gbnVsbDtcbiAgICB9LFxuICAgIHBkZlJlbmRlcjogZnVuY3Rpb24oXywgb3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMucXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcIm5vdWlzbGlkZXJcIikge1xuICAgICAgICB2YXIgcG9pbnQgPSBvcHRpb25zLm1vZHVsZS5TdXJ2ZXlIZWxwZXIuY3JlYXRlUG9pbnQoXG4gICAgICAgICAgb3B0aW9ucy5tb2R1bGUuU3VydmV5SGVscGVyLm1lcmdlUmVjdHMuYXBwbHkobnVsbCwgb3B0aW9ucy5icmlja3MpXG4gICAgICAgICk7XG4gICAgICAgIHBvaW50LnhMZWZ0ICs9IG9wdGlvbnMuY29udHJvbGxlci51bml0V2lkdGg7XG4gICAgICAgIHBvaW50LnlUb3AgKz1cbiAgICAgICAgICBvcHRpb25zLmNvbnRyb2xsZXIudW5pdEhlaWdodCAqXG4gICAgICAgICAgb3B0aW9ucy5tb2R1bGUuRmxhdFF1ZXN0aW9uLkNPTlRFTlRfR0FQX1ZFUlRfU0NBTEU7XG4gICAgICAgIHZhciByZWN0ID0gb3B0aW9ucy5tb2R1bGUuU3VydmV5SGVscGVyLmNyZWF0ZVRleHRGaWVsZFJlY3QoXG4gICAgICAgICAgcG9pbnQsXG4gICAgICAgICAgb3B0aW9ucy5jb250cm9sbGVyXG4gICAgICAgICk7XG4gICAgICAgIHZhciB0ZXh0Ym94QnJpY2sgPSBuZXcgb3B0aW9ucy5tb2R1bGUuVGV4dEZpZWxkQnJpY2soXG4gICAgICAgICAgb3B0aW9ucy5xdWVzdGlvbixcbiAgICAgICAgICBvcHRpb25zLmNvbnRyb2xsZXIsXG4gICAgICAgICAgcmVjdCxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIG9wdGlvbnMucXVlc3Rpb24uaWQsXG4gICAgICAgICAgb3B0aW9ucy5xdWVzdGlvbi52YWx1ZSB8fCBvcHRpb25zLnF1ZXN0aW9uLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICBcIlwiLFxuICAgICAgICAgIG9wdGlvbnMucXVlc3Rpb24uaXNSZWFkT25seSxcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICBcInRleHRcIlxuICAgICAgICApO1xuICAgICAgICBvcHRpb25zLmJyaWNrcy5wdXNoKHRleHRib3hCcmljayk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcbn1cblxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaW5pdChTdXJ2ZXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbm91aXNsaWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibm9VaVNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJub3Vpc2xpZGVyXCIsXCJjb21tb25qc1wiOlwibm91aXNsaWRlclwiLFwiYW1kXCI6XCJub3Vpc2xpZGVyXCJ9XG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0Il0sInNvdXJjZVJvb3QiOiIifQ==