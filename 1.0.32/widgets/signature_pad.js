(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("signature_pad"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/signature_pad", ["signature_pad"], factory);
	else if(typeof exports === 'object')
		exports["widgets/signature_pad"] = factory(require("signature_pad"));
	else
		root["widgets/signature_pad"] = factory(root["SignaturePad"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_10__) {
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
      "<div class='sjs_sp_container'><div><canvas></canvas></div><div class='sjs_sp_controls'><button type='button' class='sjs_sp_clear' title='Clear'>✖</button></div></div><style>.sjs_sp_container { position: relative; } .sjs_sp_controls { position: absolute; left: 0; bottom: 0; } .sjs_sp_controls > button { user-select: none; }</style>",
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
      var signaturePad = new __WEBPACK_IMPORTED_MODULE_0_signature_pad___default.a(canvas);
      if (question.isReadOnly) {
        signaturePad.off();
      }

      question.readOnlyChangedCallback = function() {
        if (question.isReadOnly) {
          signaturePad.off();
          var clearBtn = document.querySelector(".sjs_sp_clear");
          clearBtn && (clearBtn.disabled = true);
        } else {
          signaturePad.on();
          var clearBtn = document.querySelector(".sjs_sp_clear");
          clearBtn && (clearBtn.disabled = false);
        }
      };

      signaturePad.penColor = rootWidget.penColor;
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
      question.signaturePad = signaturePad;
      var propertyChangedHandler = function(sender, options) {
        if (options.name === "width" || options.name === "height") {
          updateValueHandler();
        }
      };
      question.onPropertyChanged.add(propertyChangedHandler);
      question.signaturePad.propertyChangedHandler = propertyChangedHandler;
      var buttonEl = el.getElementsByTagName("button")[0];
      if (question.allowClear && !question.isReadOnly) {
        buttonEl.onclick = function() {
          question.value = undefined;
        };
      } else {
        buttonEl.parentNode.removeChild(buttonEl);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMmJjYmVkOWFhOTQyNTAwZTRlZCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU2lnbmF0dXJlUGFkXCIsXCJjb21tb25qczJcIjpcInNpZ25hdHVyZV9wYWRcIixcImNvbW1vbmpzXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJhbWRcIjpcInNpZ25hdHVyZV9wYWRcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpZ25hdHVyZV9wYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REEsZ0Q7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx1TUFBdU0sb0JBQW9CLEVBQUUsbUJBQW1CLG9CQUFvQixTQUFTLFdBQVcsRUFBRSw0QkFBNEIsbUJBQW1CLEVBQUU7QUFDM1U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoid2lkZ2V0cy9zaWduYXR1cmVfcGFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic2lnbmF0dXJlX3BhZFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndpZGdldHMvc2lnbmF0dXJlX3BhZFwiLCBbXCJzaWduYXR1cmVfcGFkXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvc2lnbmF0dXJlX3BhZFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInNpZ25hdHVyZV9wYWRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndpZGdldHMvc2lnbmF0dXJlX3BhZFwiXSA9IGZhY3Rvcnkocm9vdFtcIlNpZ25hdHVyZVBhZFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDJiY2JlZDlhYTk0MjUwMGU0ZWQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJTaWduYXR1cmVQYWRcIixcImNvbW1vbmpzMlwiOlwic2lnbmF0dXJlX3BhZFwiLFwiY29tbW9uanNcIjpcInNpZ25hdHVyZV9wYWRcIixcImFtZFwiOlwic2lnbmF0dXJlX3BhZFwifVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJpbXBvcnQgU2lnbmF0dXJlUGFkIGZyb20gXCJzaWduYXR1cmVfcGFkXCI7XHJcblxyXG5mdW5jdGlvbiByZXNpemVDYW52YXMoY2FudmFzKSB7XHJcbiAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIHZhciBkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcclxuICB2YXIgYmFja2luZ1N0b3JlUmF0aW8gPVxyXG4gICAgY29udGV4dC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICBjb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgIGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICBjb250ZXh0Lm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgIDE7XHJcblxyXG4gIHZhciByYXRpbyA9IGRldmljZVBpeGVsUmF0aW8gLyBiYWNraW5nU3RvcmVSYXRpbztcclxuXHJcbiAgdmFyIG9sZFdpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gIHZhciBvbGRIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG5cclxuICBjYW52YXMud2lkdGggPSBvbGRXaWR0aCAqIHJhdGlvO1xyXG4gIGNhbnZhcy5oZWlnaHQgPSBvbGRIZWlnaHQgKiByYXRpbztcclxuXHJcbiAgY2FudmFzLnN0eWxlLndpZHRoID0gb2xkV2lkdGggKyBcInB4XCI7XHJcbiAgY2FudmFzLnN0eWxlLmhlaWdodCA9IG9sZEhlaWdodCArIFwicHhcIjtcclxuXHJcbiAgY29udGV4dC5zY2FsZShyYXRpbywgcmF0aW8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcInNpZ25hdHVyZXBhZFwiLFxyXG4gICAgdGl0bGU6IFwiU2lnbmF0dXJlIHBhZFwiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1zaWduYXR1cmVwYWRcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBTaWduYXR1cmVQYWQgIT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH0sXHJcbiAgICBwZW5Db2xvcjogXCIjMWFiMzk0XCIsXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJzaWduYXR1cmVwYWRcIjtcclxuICAgIH0sXHJcbiAgICBodG1sVGVtcGxhdGU6XHJcbiAgICAgIFwiPGRpdiBjbGFzcz0nc2pzX3NwX2NvbnRhaW5lcic+PGRpdj48Y2FudmFzPjwvY2FudmFzPjwvZGl2PjxkaXYgY2xhc3M9J3Nqc19zcF9jb250cm9scyc+PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdzanNfc3BfY2xlYXInIHRpdGxlPSdDbGVhcic+4pyWPC9idXR0b24+PC9kaXY+PC9kaXY+PHN0eWxlPi5zanNfc3BfY29udGFpbmVyIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9IC5zanNfc3BfY29udHJvbHMgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IGJvdHRvbTogMDsgfSAuc2pzX3NwX2NvbnRyb2xzID4gYnV0dG9uIHsgdXNlci1zZWxlY3Q6IG5vbmU7IH08L3N0eWxlPlwiLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInNpZ25hdHVyZXBhZFwiLCBbXSwgbnVsbCwgXCJlbXB0eVwiKTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcInNpZ25hdHVyZXBhZFwiLCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJhbGxvd0NsZWFyOmJvb2xlYW5cIixcclxuICAgICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwid2lkdGg6bnVtYmVyXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiAzMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiaGVpZ2h0Om51bWJlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogMjAwXHJcbiAgICAgICAgfVxyXG4gICAgICBdKTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcclxuICAgICAgdmFyIGNhbnZhcyA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xyXG4gICAgICB2YXIgc2lnbmF0dXJlUGFkID0gbmV3IFNpZ25hdHVyZVBhZChjYW52YXMpO1xyXG4gICAgICBpZiAocXVlc3Rpb24uaXNSZWFkT25seSkge1xyXG4gICAgICAgIHNpZ25hdHVyZVBhZC5vZmYoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAocXVlc3Rpb24uaXNSZWFkT25seSkge1xyXG4gICAgICAgICAgc2lnbmF0dXJlUGFkLm9mZigpO1xyXG4gICAgICAgICAgdmFyIGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zanNfc3BfY2xlYXJcIik7XHJcbiAgICAgICAgICBjbGVhckJ0biAmJiAoY2xlYXJCdG4uZGlzYWJsZWQgPSB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2lnbmF0dXJlUGFkLm9uKCk7XHJcbiAgICAgICAgICB2YXIgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNqc19zcF9jbGVhclwiKTtcclxuICAgICAgICAgIGNsZWFyQnRuICYmIChjbGVhckJ0bi5kaXNhYmxlZCA9IGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzaWduYXR1cmVQYWQucGVuQ29sb3IgPSByb290V2lkZ2V0LnBlbkNvbG9yO1xyXG4gICAgICBzaWduYXR1cmVQYWQub25FbmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHNpZ25hdHVyZVBhZC50b0RhdGFVUkwoKTtcclxuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGRhdGE7XHJcbiAgICAgIH07XHJcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHF1ZXN0aW9uLnZhbHVlO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHF1ZXN0aW9uLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBxdWVzdGlvbi5oZWlnaHQ7XHJcbiAgICAgICAgcmVzaXplQ2FudmFzKGNhbnZhcyk7XHJcbiAgICAgICAgc2lnbmF0dXJlUGFkLmZyb21EYXRhVVJMKFxyXG4gICAgICAgICAgZGF0YSB8fCBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQVBcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xyXG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcclxuICAgICAgcXVlc3Rpb24uc2lnbmF0dXJlUGFkID0gc2lnbmF0dXJlUGFkO1xyXG4gICAgICB2YXIgcHJvcGVydHlDaGFuZ2VkSGFuZGxlciA9IGZ1bmN0aW9uKHNlbmRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zLm5hbWUgPT09IFwid2lkdGhcIiB8fCBvcHRpb25zLm5hbWUgPT09IFwiaGVpZ2h0XCIpIHtcclxuICAgICAgICAgIHVwZGF0ZVZhbHVlSGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgcXVlc3Rpb24ub25Qcm9wZXJ0eUNoYW5nZWQuYWRkKHByb3BlcnR5Q2hhbmdlZEhhbmRsZXIpO1xyXG4gICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQucHJvcGVydHlDaGFuZ2VkSGFuZGxlciA9IHByb3BlcnR5Q2hhbmdlZEhhbmRsZXI7XHJcbiAgICAgIHZhciBidXR0b25FbCA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYnV0dG9uXCIpWzBdO1xyXG4gICAgICBpZiAocXVlc3Rpb24uYWxsb3dDbGVhciAmJiAhcXVlc3Rpb24uaXNSZWFkT25seSkge1xyXG4gICAgICAgIGJ1dHRvbkVsLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnV0dG9uRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChidXR0b25FbCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIGlmIChxdWVzdGlvbi5zaWduYXR1cmVQYWQpIHtcclxuICAgICAgICBxdWVzdGlvbi5vblByb3BlcnR5Q2hhbmdlZC5yZW1vdmUoXHJcbiAgICAgICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQucHJvcGVydHlDaGFuZ2VkSGFuZGxlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcXVlc3Rpb24uc2lnbmF0dXJlUGFkLm9mZigpO1xyXG4gICAgICB9XHJcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gbnVsbDtcclxuICAgICAgcXVlc3Rpb24uc2lnbmF0dXJlUGFkID0gbnVsbDtcclxuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NpZ25hdHVyZV9wYWQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiXSwic291cmNlUm9vdCI6IiJ9