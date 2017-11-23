(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("nouislider"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/nouislider", ["nouislider"], factory);
	else if(typeof exports === 'object')
		exports["widgets/nouislider"] = factory(require("nouislider"));
	else
		root["widgets/nouislider"] = factory(root["noUiSlider"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_9__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nouislider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nouislider__);


function init(Survey) {
    var widget = {
        name: "nouislider",
        title: "noUiSlider",
        iconName: "icon-nouislider",
        widgetIsLoaded: function() { return typeof __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a != "undefined"; },
        isFit : function(question) { return question.getType() === 'nouislider'; },
        htmlTemplate: "<div></div>",
        activatedByChanged: function(activatedBy) {
            Survey.JsonObject.metaData.addClass("nouislider", [], null, "empty");
            Survey.JsonObject.metaData.addProperties("nouislider", [{name: "rangeMin:number", default: 0}, {name: "rangeMax:number", default: 100},
            {name: "defaultRangeMin:number", default: 30}, {name: "defaultRangeMax:number", default: 70}]);
        },
        afterRender: function(question, el) {
            var startValue = question.value;
            if(!startValue || startValue.length != 2) {
                startValue = [question.defaultRangeMin, question.defaultRangeMax];
            }
            if(startValue[0] < question.rangeMin) startValue[0] = question.rangeMin;
            if(startValue[0] > question.rangeMax) startValue[0] = question.rangeMax;
            if(startValue[1] < startValue[0]) startValue[1] = startValue[0];
            if(startValue[1] > question.rangeMax) startValue[1] = question.rangeMax;
            question.value = startValue;

            el.style.marginBottom = "50px";
            var slider = __WEBPACK_IMPORTED_MODULE_0_nouislider___default.a.create(el, {
                start: startValue,
                connect: true,
                pips: {
                    mode: 'steps',
                    stepped: true,
                    density: 4
                },
                range: {
                    'min': question.rangeMin,
                    'max': question.rangeMax
                }
            });
            slider.on('set', function(){
                question.value = slider.get();
            }); 
            var updateValueHandler = function() {
                slider.set(question.value);
            };
            question.noUiSlider = slider;
            question.valueChangedCallback = updateValueHandler;
        },
        willUnmount: function(question, el) {
            question.noUiSlider.destroy(); 
            question.noUiSlider = null;
        } 
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1NTQyYzk4ZjY2NjE2NjlkZjlhZCIsIndlYnBhY2s6Ly8vLi9zcmMvbm91aXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibm9VaVNsaWRlclwiLFwiY29tbW9uanMyXCI6XCJub3Vpc2xpZGVyXCIsXCJjb21tb25qc1wiOlwibm91aXNsaWRlclwiLFwiYW1kXCI6XCJub3Vpc2xpZGVyXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlGQUF5QyxFQUFFO0FBQy9FLG9DQUFvQyw0Q0FBNEMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsb0NBQW9DLEdBQUcsc0NBQXNDO0FBQ2xKLGFBQWEsNENBQTRDLEdBQUcsNENBQTRDO0FBQ3hHLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhLEU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMEM7QUFDQTtBQUNBLFM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxRTs7Ozs7OztBQzlEQSwrQyIsImZpbGUiOiJ3aWRnZXRzL25vdWlzbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJub3Vpc2xpZGVyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9ub3Vpc2xpZGVyXCIsIFtcIm5vdWlzbGlkZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2lkZ2V0cy9ub3Vpc2xpZGVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibm91aXNsaWRlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wid2lkZ2V0cy9ub3Vpc2xpZGVyXCJdID0gZmFjdG9yeShyb290W1wibm9VaVNsaWRlclwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NTQyYzk4ZjY2NjE2NjlkZjlhZCIsImltcG9ydCBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSB7XHJcbiAgICAgICAgbmFtZTogXCJub3Vpc2xpZGVyXCIsXHJcbiAgICAgICAgdGl0bGU6IFwibm9VaVNsaWRlclwiLFxyXG4gICAgICAgIGljb25OYW1lOiBcImljb24tbm91aXNsaWRlclwiLFxyXG4gICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHsgcmV0dXJuIHR5cGVvZiBub1VpU2xpZGVyICE9IFwidW5kZWZpbmVkXCI7IH0sXHJcbiAgICAgICAgaXNGaXQgOiBmdW5jdGlvbihxdWVzdGlvbikgeyByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnbm91aXNsaWRlcic7IH0sXHJcbiAgICAgICAgaHRtbFRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXHJcbiAgICAgICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm5vdWlzbGlkZXJcIiwgW10sIG51bGwsIFwiZW1wdHlcIik7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJub3Vpc2xpZGVyXCIsIFt7bmFtZTogXCJyYW5nZU1pbjpudW1iZXJcIiwgZGVmYXVsdDogMH0sIHtuYW1lOiBcInJhbmdlTWF4Om51bWJlclwiLCBkZWZhdWx0OiAxMDB9LFxyXG4gICAgICAgICAgICB7bmFtZTogXCJkZWZhdWx0UmFuZ2VNaW46bnVtYmVyXCIsIGRlZmF1bHQ6IDMwfSwge25hbWU6IFwiZGVmYXVsdFJhbmdlTWF4Om51bWJlclwiLCBkZWZhdWx0OiA3MH1dKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0VmFsdWUgPSBxdWVzdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgaWYoIXN0YXJ0VmFsdWUgfHwgc3RhcnRWYWx1ZS5sZW5ndGggIT0gMikge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZSA9IFtxdWVzdGlvbi5kZWZhdWx0UmFuZ2VNaW4sIHF1ZXN0aW9uLmRlZmF1bHRSYW5nZU1heF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoc3RhcnRWYWx1ZVswXSA8IHF1ZXN0aW9uLnJhbmdlTWluKSBzdGFydFZhbHVlWzBdID0gcXVlc3Rpb24ucmFuZ2VNaW47XHJcbiAgICAgICAgICAgIGlmKHN0YXJ0VmFsdWVbMF0gPiBxdWVzdGlvbi5yYW5nZU1heCkgc3RhcnRWYWx1ZVswXSA9IHF1ZXN0aW9uLnJhbmdlTWF4O1xyXG4gICAgICAgICAgICBpZihzdGFydFZhbHVlWzFdIDwgc3RhcnRWYWx1ZVswXSkgc3RhcnRWYWx1ZVsxXSA9IHN0YXJ0VmFsdWVbMF07XHJcbiAgICAgICAgICAgIGlmKHN0YXJ0VmFsdWVbMV0gPiBxdWVzdGlvbi5yYW5nZU1heCkgc3RhcnRWYWx1ZVsxXSA9IHF1ZXN0aW9uLnJhbmdlTWF4O1xyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHN0YXJ0VmFsdWU7XHJcblxyXG4gICAgICAgICAgICBlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjUwcHhcIjtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9IG5vVWlTbGlkZXIuY3JlYXRlKGVsLCB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogc3RhcnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwaXBzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ3N0ZXBzJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGVwcGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbnNpdHk6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICAgICAgICAgICdtaW4nOiBxdWVzdGlvbi5yYW5nZU1pbixcclxuICAgICAgICAgICAgICAgICAgICAnbWF4JzogcXVlc3Rpb24ucmFuZ2VNYXhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5vbignc2V0JywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gc2xpZGVyLmdldCgpO1xyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5zZXQocXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBxdWVzdGlvbi5ub1VpU2xpZGVyID0gc2xpZGVyO1xyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbGxVbm1vdW50OiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgcXVlc3Rpb24ubm9VaVNsaWRlci5kZXN0cm95KCk7IFxyXG4gICAgICAgICAgICBxdWVzdGlvbi5ub1VpU2xpZGVyID0gbnVsbDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ub3Vpc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJub1VpU2xpZGVyXCIsXCJjb21tb25qczJcIjpcIm5vdWlzbGlkZXJcIixcImNvbW1vbmpzXCI6XCJub3Vpc2xpZGVyXCIsXCJhbWRcIjpcIm5vdWlzbGlkZXJcIn1cbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiXSwic291cmNlUm9vdCI6IiJ9