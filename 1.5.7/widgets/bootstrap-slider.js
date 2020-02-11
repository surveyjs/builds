(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("bootstrap-slider"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/bootstrap-slider", ["bootstrap-slider"], factory);
	else if(typeof exports === 'object')
		exports["widgets/bootstrap-slider"] = factory(require("bootstrap-slider"));
	else
		root["widgets/bootstrap-slider"] = factory(root["Slider"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_17__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var Slider = __webpack_require__(17);

function init(Survey) {
  var widget = {
    name: "bootstrapslider",
    title: "Bootstrap Slider",
    iconName: "icon-bootstrap-slider",
    widgetIsLoaded: function() {
      return typeof Slider !== "undefined";
    },
    isFit: function(question) {
      return question.getType() === "bootstrapslider";
    },
    htmlTemplate: "<div></div>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass("bootstrapslider", [], null, "empty");
      Survey.JsonObject.metaData.addProperties("bootstrapslider", [
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
        }
      ]);
      Survey.JsonObject.metaData.addProperty("bootstrapslider", {
        name: "config",
        default: null
      });
    },
    afterRender: function(question, el) {
      el.style.paddingTop = '20px';
      el.style.paddingBottom = '17px';
      el.style.paddingLeft = '10px';
      var inputEl = document.createElement("input");
      inputEl.id = question.id;
      inputEl.type = "text";
      inputEl.setAttribute("data-slider-id", question.name + "_" + question.id);
      inputEl.setAttribute("data-slider-min", question.rangeMin);
      inputEl.setAttribute("data-slider-max", question.rangeMax);
      inputEl.setAttribute("data-slider-step", question.step);
      inputEl.setAttribute(
        "data-slider-value",
        question.value || question.rangeMin
      );
      el.appendChild(inputEl);

      var config = question.config || {};

      if (config.id === undefined) {
        config.id = question.name + "_" + question.id;
      }

      if (config.min === undefined) {
        config.min = question.rangeMin;
      }

      if (config.max === undefined) {
        config.max = question.rangeMax;
      }

      if (config.step === undefined) {
        config.step = question.step;
      }

      if (config.enabled === undefined) {
        config.enabled = !question.isReadOnly;
      }

      if (config.value === undefined) {
        config.value = question.value || question.rangeMin;
      }

      var slider = new Slider(inputEl, config);

      slider.on("change", function(valueObj) {
        question.value = slider.getValue();
      });
      var updateValueHandler = function() {
        slider.setValue(question.value || question.rangeMin);
      };
      question.readOnlyChangedCallback = function() {
        if (question.isReadOnly) {
          slider.disable();
        } else {
          slider.enable();
        }
      };
      question.bootstrapSlider = slider;
      question.valueChangedCallback = updateValueHandler;
    },
    willUnmount: function(question, el) {
      question.bootstrapSlider && question.bootstrapSlider.destroy();
      question.bootstrapSlider = null;
      question.readOnlyChangedCallback = null;
    },
    pdfRender: function(_, options) {
      if (options.question.getType() === "bootstrapslider") {
        var point = options.module.SurveyHelper.createPoint(
          options.module.SurveyHelper.mergeRects.apply(null,
            options.bricks));
        point.xLeft += options.controller.unitWidth;
        point.yTop += options.controller.unitHeight *
          options.module.FlatQuestion.CONTENT_GAP_VERT_SCALE;
        var rect = options.module.SurveyHelper.
          createTextFieldRect(point, options.controller);
        var textboxBrick = new options.module.TextFieldBrick(
          options.question, options.controller, rect,
          true, options.question.id, options.question.value ||
          options.question.defaultValue, "",
          options.question.isReadOnly, false, "text");
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

/***/ 17:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkNzFhNTdmNDY1ZTU1ODA0MGU0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYm9vdHN0cmFwLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU2xpZGVyXCIsXCJjb21tb25qczJcIjpcImJvb3RzdHJhcC1zbGlkZXJcIixcImNvbW1vbmpzXCI6XCJib290c3RyYXAtc2xpZGVyXCIsXCJhbWRcIjpcImJvb3RzdHJhcC1zbGlkZXJcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7Ozs7O0FDN0RBO0FBQUEsYUFBYSxtQkFBTyxDQUFDLEVBQWtCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUM7Ozs7Ozs7O0FDaElwQixnRCIsImZpbGUiOiJ3aWRnZXRzL2Jvb3RzdHJhcC1zbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9ib290c3RyYXAtc2xpZGVyXCIsIFtcImJvb3RzdHJhcC1zbGlkZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2lkZ2V0cy9ib290c3RyYXAtc2xpZGVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYm9vdHN0cmFwLXNsaWRlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wid2lkZ2V0cy9ib290c3RyYXAtc2xpZGVyXCJdID0gZmFjdG9yeShyb290W1wiU2xpZGVyXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ3MWE1N2Y0NjVlNTU4MDQwZTRmIiwidmFyIFNsaWRlciA9IHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpO1xuXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xuICB2YXIgd2lkZ2V0ID0ge1xuICAgIG5hbWU6IFwiYm9vdHN0cmFwc2xpZGVyXCIsXG4gICAgdGl0bGU6IFwiQm9vdHN0cmFwIFNsaWRlclwiLFxuICAgIGljb25OYW1lOiBcImljb24tYm9vdHN0cmFwLXNsaWRlclwiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgU2xpZGVyICE9PSBcInVuZGVmaW5lZFwiO1xuICAgIH0sXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcImJvb3RzdHJhcHNsaWRlclwiO1xuICAgIH0sXG4gICAgaHRtbFRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJib290c3RyYXBzbGlkZXJcIiwgW10sIG51bGwsIFwiZW1wdHlcIik7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwiYm9vdHN0cmFwc2xpZGVyXCIsIFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic3RlcDpudW1iZXJcIixcbiAgICAgICAgICBkZWZhdWx0OiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJhbmdlTWluOm51bWJlclwiLFxuICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicmFuZ2VNYXg6bnVtYmVyXCIsXG4gICAgICAgICAgZGVmYXVsdDogMTAwXG4gICAgICAgIH1cbiAgICAgIF0pO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJib290c3RyYXBzbGlkZXJcIiwge1xuICAgICAgICBuYW1lOiBcImNvbmZpZ1wiLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIGVsLnN0eWxlLnBhZGRpbmdUb3AgPSAnMjBweCc7XG4gICAgICBlbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gJzE3cHgnO1xuICAgICAgZWwuc3R5bGUucGFkZGluZ0xlZnQgPSAnMTBweCc7XG4gICAgICB2YXIgaW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGlucHV0RWwuaWQgPSBxdWVzdGlvbi5pZDtcbiAgICAgIGlucHV0RWwudHlwZSA9IFwidGV4dFwiO1xuICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlci1pZFwiLCBxdWVzdGlvbi5uYW1lICsgXCJfXCIgKyBxdWVzdGlvbi5pZCk7XG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVyLW1pblwiLCBxdWVzdGlvbi5yYW5nZU1pbik7XG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVyLW1heFwiLCBxdWVzdGlvbi5yYW5nZU1heCk7XG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVyLXN0ZXBcIiwgcXVlc3Rpb24uc3RlcCk7XG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJkYXRhLXNsaWRlci12YWx1ZVwiLFxuICAgICAgICBxdWVzdGlvbi52YWx1ZSB8fCBxdWVzdGlvbi5yYW5nZU1pblxuICAgICAgKTtcbiAgICAgIGVsLmFwcGVuZENoaWxkKGlucHV0RWwpO1xuXG4gICAgICB2YXIgY29uZmlnID0gcXVlc3Rpb24uY29uZmlnIHx8IHt9O1xuXG4gICAgICBpZiAoY29uZmlnLmlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnLmlkID0gcXVlc3Rpb24ubmFtZSArIFwiX1wiICsgcXVlc3Rpb24uaWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcubWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnLm1pbiA9IHF1ZXN0aW9uLnJhbmdlTWluO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLm1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbmZpZy5tYXggPSBxdWVzdGlvbi5yYW5nZU1heDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5zdGVwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnLnN0ZXAgPSBxdWVzdGlvbi5zdGVwO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25maWcuZW5hYmxlZCA9ICFxdWVzdGlvbi5pc1JlYWRPbmx5O1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnLnZhbHVlID0gcXVlc3Rpb24udmFsdWUgfHwgcXVlc3Rpb24ucmFuZ2VNaW47XG4gICAgICB9XG5cbiAgICAgIHZhciBzbGlkZXIgPSBuZXcgU2xpZGVyKGlucHV0RWwsIGNvbmZpZyk7XG5cbiAgICAgIHNsaWRlci5vbihcImNoYW5nZVwiLCBmdW5jdGlvbih2YWx1ZU9iaikge1xuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHNsaWRlci5nZXRWYWx1ZSgpO1xuICAgICAgfSk7XG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNsaWRlci5zZXRWYWx1ZShxdWVzdGlvbi52YWx1ZSB8fCBxdWVzdGlvbi5yYW5nZU1pbik7XG4gICAgICB9O1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcbiAgICAgICAgICBzbGlkZXIuZGlzYWJsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlci5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHF1ZXN0aW9uLmJvb3RzdHJhcFNsaWRlciA9IHNsaWRlcjtcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xuICAgIH0sXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgcXVlc3Rpb24uYm9vdHN0cmFwU2xpZGVyICYmIHF1ZXN0aW9uLmJvb3RzdHJhcFNsaWRlci5kZXN0cm95KCk7XG4gICAgICBxdWVzdGlvbi5ib290c3RyYXBTbGlkZXIgPSBudWxsO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgIH0sXG4gICAgcGRmUmVuZGVyOiBmdW5jdGlvbihfLCBvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5xdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiYm9vdHN0cmFwc2xpZGVyXCIpIHtcbiAgICAgICAgdmFyIHBvaW50ID0gb3B0aW9ucy5tb2R1bGUuU3VydmV5SGVscGVyLmNyZWF0ZVBvaW50KFxuICAgICAgICAgIG9wdGlvbnMubW9kdWxlLlN1cnZleUhlbHBlci5tZXJnZVJlY3RzLmFwcGx5KG51bGwsXG4gICAgICAgICAgICBvcHRpb25zLmJyaWNrcykpO1xuICAgICAgICBwb2ludC54TGVmdCArPSBvcHRpb25zLmNvbnRyb2xsZXIudW5pdFdpZHRoO1xuICAgICAgICBwb2ludC55VG9wICs9IG9wdGlvbnMuY29udHJvbGxlci51bml0SGVpZ2h0ICpcbiAgICAgICAgICBvcHRpb25zLm1vZHVsZS5GbGF0UXVlc3Rpb24uQ09OVEVOVF9HQVBfVkVSVF9TQ0FMRTtcbiAgICAgICAgdmFyIHJlY3QgPSBvcHRpb25zLm1vZHVsZS5TdXJ2ZXlIZWxwZXIuXG4gICAgICAgICAgY3JlYXRlVGV4dEZpZWxkUmVjdChwb2ludCwgb3B0aW9ucy5jb250cm9sbGVyKTtcbiAgICAgICAgdmFyIHRleHRib3hCcmljayA9IG5ldyBvcHRpb25zLm1vZHVsZS5UZXh0RmllbGRCcmljayhcbiAgICAgICAgICBvcHRpb25zLnF1ZXN0aW9uLCBvcHRpb25zLmNvbnRyb2xsZXIsIHJlY3QsXG4gICAgICAgICAgdHJ1ZSwgb3B0aW9ucy5xdWVzdGlvbi5pZCwgb3B0aW9ucy5xdWVzdGlvbi52YWx1ZSB8fFxuICAgICAgICAgIG9wdGlvbnMucXVlc3Rpb24uZGVmYXVsdFZhbHVlLCBcIlwiLFxuICAgICAgICAgIG9wdGlvbnMucXVlc3Rpb24uaXNSZWFkT25seSwgZmFsc2UsIFwidGV4dFwiKTtcbiAgICAgICAgb3B0aW9ucy5icmlja3MucHVzaCh0ZXh0Ym94QnJpY2spO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jvb3RzdHJhcC1zbGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU2xpZGVyXCIsXCJjb21tb25qczJcIjpcImJvb3RzdHJhcC1zbGlkZXJcIixcImNvbW1vbmpzXCI6XCJib290c3RyYXAtc2xpZGVyXCIsXCJhbWRcIjpcImJvb3RzdHJhcC1zbGlkZXJcIn1cbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2Il0sInNvdXJjZVJvb3QiOiIifQ==