(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("signature_pad"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/signature_pad", ["signature_pad"], factory);
	else if(typeof exports === 'object')
		exports["widgets/signature_pad"] = factory(require("signature_pad"));
	else
		root["widgets/signature_pad"] = factory(root["SignaturePad"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_signature_pad__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_signature_pad__);


function resizeCanvas(canvas) {
  var context = canvas.getContext("2d");
  var devicePixelRatio = window.devicePixelRatio || 1;
  var backingStoreRatio =
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  var ratio = devicePixelRatio / backingStoreRatio;

  var oldWidth = canvas.width;
  var oldHeight = canvas.height;

  canvas.width = oldWidth * ratio;
  canvas.height = oldHeight * ratio;

  canvas.style.width = oldWidth + "px";
  canvas.style.height = oldHeight + "px";

  context.scale(ratio, ratio);
}

function init(Survey) {
  var widget = {
    name: "signaturepad",
    title: "Signature pad",
    iconName: "icon-signaturepad",
    widgetIsLoaded: function() {
      return typeof __WEBPACK_IMPORTED_MODULE_0_signature_pad___default.a != "undefined";
    },
    penColor: "#1ab394",
    isFit: function(question) {
      return question.getType() === "signaturepad";
    },
    htmlTemplate:
      "<div class='sjs_sp_container'><div><canvas tabindex='0'></canvas></div><div class='sjs_sp_controls'><button type='button' class='sjs_sp_clear' title='Clear'>✖</button></div></div><style>.sjs_sp_container { position: relative; } .sjs_sp_controls { position: absolute; left: 0; bottom: 0; } .sjs_sp_controls > button { user-select: none; } .sjs_sp_container>div>canvas:focus { outline: none; }</style>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass("signaturepad", [], null, "empty");
      Survey.JsonObject.metaData.addProperties("signaturepad", [
        {
          name: "allowClear:boolean",
          default: true
        },
        {
          name: "width:number",
          default: 300
        },
        {
          name: "height:number",
          default: 200
        }
      ]);
    },
    afterRender: function(question, el) {
      var rootWidget = this;
      var canvas = el.getElementsByTagName("canvas")[0];
      var buttonEl = el.getElementsByTagName("button")[0];
      var signaturePad = new __WEBPACK_IMPORTED_MODULE_0_signature_pad___default.a(canvas);
      if (question.isReadOnly) {
        signaturePad.off();
      }

      buttonEl.onclick = function() {
        question.value = undefined;
      };

      question.readOnlyChangedCallback = function() {
        if (!question.allowClear || question.isReadOnly) {
          signaturePad.off();
          buttonEl.style.display = "none";
        } else {
          signaturePad.on();
          buttonEl.style.display = "block";
        }
      };

      signaturePad.penColor = rootWidget.penColor;
      signaturePad.onBegin = function() {
        canvas.focus();
      };
      signaturePad.onEnd = function() {
        var data = signaturePad.toDataURL();
        question.value = data;
      };
      var updateValueHandler = function() {
        var data = question.value;
        canvas.width = question.width;
        canvas.height = question.height;
        resizeCanvas(canvas);
        signaturePad.fromDataURL(
          data || "data:image/gif;base64,R0lGODlhAQABAIAAAP"
        );
      };
      question.valueChangedCallback = updateValueHandler;
      updateValueHandler();
      question.readOnlyChangedCallback();
      question.signaturePad = signaturePad;
      var propertyChangedHandler = function(sender, options) {
        if (options.name === "width" || options.name === "height") {
          updateValueHandler();
        }
      };
      question.onPropertyChanged.add(propertyChangedHandler);
      question.signaturePad.propertyChangedHandler = propertyChangedHandler;
    },
    willUnmount: function(question, el) {
      if (question.signaturePad) {
        question.onPropertyChanged.remove(
          question.signaturePad.propertyChangedHandler
        );
        question.signaturePad.off();
      }
      question.readOnlyChangedCallback = null;
      question.signaturePad = null;
      question.readOnlyChangedCallback = null;
    },
    pdfRender: function(surveyPDF, options) {
      if (options.question.getType() === "signaturepad") {
        var point = SurveyPDF.SurveyHelper.createPoint(
          SurveyPDF.SurveyHelper.mergeRects.apply(null,
            options.bricks));
        point.xLeft += options.controller.unitWidth;
        point.yTop += options.controller.unitHeight *
          SurveyPDF.FlatQuestion.CONTENT_GAP_VERT_SCALE;
        var imageBrick = SurveyPDF.SurveyHelper.createImageFlat(
          point, options.question, options.controller,
          surveyPDF.data[options.question.name],
          parseInt(options.question.width));
        options.bricks.push(imageBrick);
      }
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5Y2YwZDg4YzZlMTBhYjJhN2UwNCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU2lnbmF0dXJlUGFkXCIsXCJjb21tb25qczJcIjpcInNpZ25hdHVyZV9wYWRcIixcImNvbW1vbmpzXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJhbWRcIjpcInNpZ25hdHVyZV9wYWRcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpZ25hdHVyZV9wYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REEsZ0Q7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBWTtBQUNoQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb05BQW9OLG9CQUFvQixFQUFFLG1CQUFtQixvQkFBb0IsU0FBUyxXQUFXLEVBQUUsNEJBQTRCLG1CQUFtQixFQUFFLHFDQUFxQyxlQUFlLEVBQUU7QUFDOVk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFZO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDIiwiZmlsZSI6IndpZGdldHMvc2lnbmF0dXJlX3BhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInNpZ25hdHVyZV9wYWRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ3aWRnZXRzL3NpZ25hdHVyZV9wYWRcIiwgW1wic2lnbmF0dXJlX3BhZFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3aWRnZXRzL3NpZ25hdHVyZV9wYWRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJzaWduYXR1cmVfcGFkXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aWRnZXRzL3NpZ25hdHVyZV9wYWRcIl0gPSBmYWN0b3J5KHJvb3RbXCJTaWduYXR1cmVQYWRcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5Y2YwZDg4YzZlMTBhYjJhN2UwNCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlNpZ25hdHVyZVBhZFwiLFwiY29tbW9uanMyXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJjb21tb25qc1wiOlwic2lnbmF0dXJlX3BhZFwiLFwiYW1kXCI6XCJzaWduYXR1cmVfcGFkXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsImltcG9ydCBTaWduYXR1cmVQYWQgZnJvbSBcInNpZ25hdHVyZV9wYWRcIjtcclxuXHJcbmZ1bmN0aW9uIHJlc2l6ZUNhbnZhcyhjYW52YXMpIHtcclxuICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgdmFyIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xyXG4gIHZhciBiYWNraW5nU3RvcmVSYXRpbyA9XHJcbiAgICBjb250ZXh0LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgIGNvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgIGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgIGNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgMTtcclxuXHJcbiAgdmFyIHJhdGlvID0gZGV2aWNlUGl4ZWxSYXRpbyAvIGJhY2tpbmdTdG9yZVJhdGlvO1xyXG5cclxuICB2YXIgb2xkV2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgdmFyIG9sZEhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gIGNhbnZhcy53aWR0aCA9IG9sZFdpZHRoICogcmF0aW87XHJcbiAgY2FudmFzLmhlaWdodCA9IG9sZEhlaWdodCAqIHJhdGlvO1xyXG5cclxuICBjYW52YXMuc3R5bGUud2lkdGggPSBvbGRXaWR0aCArIFwicHhcIjtcclxuICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gb2xkSGVpZ2h0ICsgXCJweFwiO1xyXG5cclxuICBjb250ZXh0LnNjYWxlKHJhdGlvLCByYXRpbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XHJcbiAgdmFyIHdpZGdldCA9IHtcclxuICAgIG5hbWU6IFwic2lnbmF0dXJlcGFkXCIsXHJcbiAgICB0aXRsZTogXCJTaWduYXR1cmUgcGFkXCIsXHJcbiAgICBpY29uTmFtZTogXCJpY29uLXNpZ25hdHVyZXBhZFwiLFxyXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIFNpZ25hdHVyZVBhZCAhPSBcInVuZGVmaW5lZFwiO1xyXG4gICAgfSxcclxuICAgIHBlbkNvbG9yOiBcIiMxYWIzOTRcIixcclxuICAgIGlzRml0OiBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInNpZ25hdHVyZXBhZFwiO1xyXG4gICAgfSxcclxuICAgIGh0bWxUZW1wbGF0ZTpcclxuICAgICAgXCI8ZGl2IGNsYXNzPSdzanNfc3BfY29udGFpbmVyJz48ZGl2PjxjYW52YXMgdGFiaW5kZXg9JzAnPjwvY2FudmFzPjwvZGl2PjxkaXYgY2xhc3M9J3Nqc19zcF9jb250cm9scyc+PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdzanNfc3BfY2xlYXInIHRpdGxlPSdDbGVhcic+4pyWPC9idXR0b24+PC9kaXY+PC9kaXY+PHN0eWxlPi5zanNfc3BfY29udGFpbmVyIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9IC5zanNfc3BfY29udHJvbHMgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IGJvdHRvbTogMDsgfSAuc2pzX3NwX2NvbnRyb2xzID4gYnV0dG9uIHsgdXNlci1zZWxlY3Q6IG5vbmU7IH0gLnNqc19zcF9jb250YWluZXI+ZGl2PmNhbnZhczpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IH08L3N0eWxlPlwiLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInNpZ25hdHVyZXBhZFwiLCBbXSwgbnVsbCwgXCJlbXB0eVwiKTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcInNpZ25hdHVyZXBhZFwiLCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJhbGxvd0NsZWFyOmJvb2xlYW5cIixcclxuICAgICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwid2lkdGg6bnVtYmVyXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiAzMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiaGVpZ2h0Om51bWJlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogMjAwXHJcbiAgICAgICAgfVxyXG4gICAgICBdKTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcclxuICAgICAgdmFyIGNhbnZhcyA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xyXG4gICAgICB2YXIgYnV0dG9uRWwgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJ1dHRvblwiKVswXTtcclxuICAgICAgdmFyIHNpZ25hdHVyZVBhZCA9IG5ldyBTaWduYXR1cmVQYWQoY2FudmFzKTtcclxuICAgICAgaWYgKHF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcclxuICAgICAgICBzaWduYXR1cmVQYWQub2ZmKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbkVsLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCFxdWVzdGlvbi5hbGxvd0NsZWFyIHx8IHF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcclxuICAgICAgICAgIHNpZ25hdHVyZVBhZC5vZmYoKTtcclxuICAgICAgICAgIGJ1dHRvbkVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2lnbmF0dXJlUGFkLm9uKCk7XHJcbiAgICAgICAgICBidXR0b25FbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNpZ25hdHVyZVBhZC5wZW5Db2xvciA9IHJvb3RXaWRnZXQucGVuQ29sb3I7XHJcbiAgICAgIHNpZ25hdHVyZVBhZC5vbkJlZ2luID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2FudmFzLmZvY3VzKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHNpZ25hdHVyZVBhZC5vbkVuZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgpO1xyXG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gZGF0YTtcclxuICAgICAgfTtcclxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gcXVlc3Rpb24udmFsdWU7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gcXVlc3Rpb24ud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHF1ZXN0aW9uLmhlaWdodDtcclxuICAgICAgICByZXNpemVDYW52YXMoY2FudmFzKTtcclxuICAgICAgICBzaWduYXR1cmVQYWQuZnJvbURhdGFVUkwoXHJcbiAgICAgICAgICBkYXRhIHx8IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBUFwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XHJcbiAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjaygpO1xyXG4gICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQgPSBzaWduYXR1cmVQYWQ7XHJcbiAgICAgIHZhciBwcm9wZXJ0eUNoYW5nZWRIYW5kbGVyID0gZnVuY3Rpb24oc2VuZGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gXCJ3aWR0aFwiIHx8IG9wdGlvbnMubmFtZSA9PT0gXCJoZWlnaHRcIikge1xyXG4gICAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBxdWVzdGlvbi5vblByb3BlcnR5Q2hhbmdlZC5hZGQocHJvcGVydHlDaGFuZ2VkSGFuZGxlcik7XHJcbiAgICAgIHF1ZXN0aW9uLnNpZ25hdHVyZVBhZC5wcm9wZXJ0eUNoYW5nZWRIYW5kbGVyID0gcHJvcGVydHlDaGFuZ2VkSGFuZGxlcjtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIGlmIChxdWVzdGlvbi5zaWduYXR1cmVQYWQpIHtcclxuICAgICAgICBxdWVzdGlvbi5vblByb3BlcnR5Q2hhbmdlZC5yZW1vdmUoXHJcbiAgICAgICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQucHJvcGVydHlDaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcXVlc3Rpb24uc2lnbmF0dXJlUGFkLm9mZigpO1xyXG4gICAgICB9XHJcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gbnVsbDtcclxuICAgICAgcXVlc3Rpb24uc2lnbmF0dXJlUGFkID0gbnVsbDtcclxuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgfSxcclxuICAgIHBkZlJlbmRlcjogZnVuY3Rpb24oc3VydmV5UERGLCBvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLnF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJzaWduYXR1cmVwYWRcIikge1xyXG4gICAgICAgIHZhciBwb2ludCA9IFN1cnZleVBERi5TdXJ2ZXlIZWxwZXIuY3JlYXRlUG9pbnQoXHJcbiAgICAgICAgICBTdXJ2ZXlQREYuU3VydmV5SGVscGVyLm1lcmdlUmVjdHMuYXBwbHkobnVsbCxcclxuICAgICAgICAgICAgb3B0aW9ucy5icmlja3MpKTtcclxuICAgICAgICBwb2ludC54TGVmdCArPSBvcHRpb25zLmNvbnRyb2xsZXIudW5pdFdpZHRoO1xyXG4gICAgICAgIHBvaW50LnlUb3AgKz0gb3B0aW9ucy5jb250cm9sbGVyLnVuaXRIZWlnaHQgKlxyXG4gICAgICAgICAgU3VydmV5UERGLkZsYXRRdWVzdGlvbi5DT05URU5UX0dBUF9WRVJUX1NDQUxFO1xyXG4gICAgICAgIHZhciBpbWFnZUJyaWNrID0gU3VydmV5UERGLlN1cnZleUhlbHBlci5jcmVhdGVJbWFnZUZsYXQoXHJcbiAgICAgICAgICBwb2ludCwgb3B0aW9ucy5xdWVzdGlvbiwgb3B0aW9ucy5jb250cm9sbGVyLFxyXG4gICAgICAgICAgc3VydmV5UERGLmRhdGFbb3B0aW9ucy5xdWVzdGlvbi5uYW1lXSxcclxuICAgICAgICAgIHBhcnNlSW50KG9wdGlvbnMucXVlc3Rpb24ud2lkdGgpKTtcclxuICAgICAgICBvcHRpb25zLmJyaWNrcy5wdXNoKGltYWdlQnJpY2spO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2lnbmF0dXJlX3BhZC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyJdLCJzb3VyY2VSb290IjoiIn0=