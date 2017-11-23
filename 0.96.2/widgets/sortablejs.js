(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("sortablejs"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/sortablejs", ["sortablejs"], factory);
	else if(typeof exports === 'object')
		exports["widgets/sortablejs"] = factory(require("sortablejs"));
	else
		root["widgets/sortablejs"] = factory(root["Sortable"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_14__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sortablejs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sortablejs__);


function init(Survey) {
    var widget = {
        name: "sortablelist",
        title: "Sortable list",
        iconName: "icon-sortablelist",
        widgetIsLoaded: function() { return typeof __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a != "undefined"; },
        defaultJSON: {choices: ["Item 1", "Item 2", "Item 3"]},
        areaStyle: "border: 1px solid #1ab394; width:100%; minHeight:50px",
        itemStyle: "background-color:#1ab394;color:#fff;margin:5px;padding:10px;",
        isFit : function(question) { return question.getType() === 'sortablelist'; },
        htmlTemplate: "<div></div>",
        activatedByChanged: function(activatedBy) {
            Survey.JsonObject.metaData.addClass("sortablelist", [{name:"hasOther", visible: false}, {name:"storeOthersAsComment", visible: false}], null, "checkbox");
            Survey.JsonObject.metaData.addProperty("sortablelist", {name: "emptyText", default: "Move items here."});
        },
        afterRender: function(question, el) {
            var rootWidget = this;
            el.style.width = "100%";
            var resultEl = document.createElement("div");
            var emptyEl = document.createElement("span");
            var sourceEl = document.createElement("div");
            resultEl.style.cssText = rootWidget.areaStyle;
            emptyEl.innerHTML = question.emptyText;
            resultEl.appendChild(emptyEl);
            sourceEl.style.cssText = rootWidget.areaStyle;
            sourceEl.style.marginTop = "10px";
            el.appendChild(resultEl);
            el.appendChild(sourceEl);
            var hasValueInResults = function(val) {
                var res = question.value;
                if(!Array.isArray(res)) return false;
                for(var i = 0; i < res.length; i ++){
                    if(res[i] == val) return true;
                }
                return false;
            };
            var isUpdatingQuestionValue = false;
            var updateValueHandler = function() {
                if(isUpdatingQuestionValue) return;
                resultEl.innerHTML = "";
                resultEl.appendChild(emptyEl);
                sourceEl.innerHTML = "";
                var wasInResults = false;
                question.activeChoices.forEach(function(choice) {
                    var inResutls = hasValueInResults(choice.value);
                    wasInResults = wasInResults || inResutls;
                    var srcEl = inResutls ? resultEl : sourceEl;
                    var newEl = document.createElement("div");
                    newEl.innerHTML = "<div style='" + rootWidget.itemStyle +  "'>" + choice.text + "</div>";
                    newEl.dataset["value"] = choice.value;
                    srcEl.appendChild(newEl);
                });
                emptyEl.style.display = wasInResults ?  "none" : "";
            };
            __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create($(resultEl)[0], {
                animation: 150,
                group: {
                    name: 'top3',
                    pull: true,
                    put: true
                },
                onSort: function (evt) {
                    var result = [];
                    if (evt.to.children.length === 1) {
                        emptyEl.style.display = "";
                    } else {
                        emptyEl.style.display = "none";
                        for (var i = 1; i < evt.to.children.length; i++) {
                            result.push(evt.to.children[i].dataset.value)
                        }
                    }
                    isUpdatingQuestionValue = true;
                    question.value = result;
                    isUpdatingQuestionValue = false;
                }
            });
            __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create($(sourceEl)[0], {
                animation: 150,
                group: {
                    name: 'top3',
                    pull: true,
                    put: true
                }
            });
            question.valueChangedCallback = updateValueHandler;
            updateValueHandler();
        },
        willUnmount: function(question, el) {
        } 
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1NTQyYzk4ZjY2NjE2NjlkZjlhZCIsIndlYnBhY2s6Ly8vLi9zcmMvc29ydGFibGVqcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU29ydGFibGVcIixcImNvbW1vbmpzMlwiOlwic29ydGFibGVqc1wiLFwiY29tbW9uanNcIjpcInNvcnRhYmxlanNcIixcImFtZFwiOlwic29ydGFibGVqc1wifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpRkFBdUMsRUFBRTtBQUM3RSxzQkFBc0Isd0NBQXdDO0FBQzlELDhDQUE4QyxZQUFZO0FBQzFELDZDQUE2QyxXQUFXLFdBQVcsYUFBYTtBQUNoRixvQ0FBb0MsOENBQThDLEVBQUU7QUFDcEY7QUFDQTtBQUNBLGtFQUFrRSxnQ0FBZ0MsR0FBRyw0Q0FBNEM7QUFDakosb0VBQW9FLCtDQUErQztBQUNuSCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSx1Q0FBdUMsNEJBQTRCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUU7Ozs7Ozs7QUNwR0EsZ0QiLCJmaWxlIjoid2lkZ2V0cy9zb3J0YWJsZWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic29ydGFibGVqc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndpZGdldHMvc29ydGFibGVqc1wiLCBbXCJzb3J0YWJsZWpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvc29ydGFibGVqc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInNvcnRhYmxlanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndpZGdldHMvc29ydGFibGVqc1wiXSA9IGZhY3Rvcnkocm9vdFtcIlNvcnRhYmxlXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTU0MmM5OGY2NjYxNjY5ZGY5YWQiLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XHJcblxyXG5mdW5jdGlvbiBpbml0KFN1cnZleSkge1xyXG4gICAgdmFyIHdpZGdldCA9IHtcclxuICAgICAgICBuYW1lOiBcInNvcnRhYmxlbGlzdFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlNvcnRhYmxlIGxpc3RcIixcclxuICAgICAgICBpY29uTmFtZTogXCJpY29uLXNvcnRhYmxlbGlzdFwiLFxyXG4gICAgICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHsgcmV0dXJuIHR5cGVvZiBTb3J0YWJsZSAhPSBcInVuZGVmaW5lZFwiOyB9LFxyXG4gICAgICAgIGRlZmF1bHRKU09OOiB7Y2hvaWNlczogW1wiSXRlbSAxXCIsIFwiSXRlbSAyXCIsIFwiSXRlbSAzXCJdfSxcclxuICAgICAgICBhcmVhU3R5bGU6IFwiYm9yZGVyOiAxcHggc29saWQgIzFhYjM5NDsgd2lkdGg6MTAwJTsgbWluSGVpZ2h0OjUwcHhcIixcclxuICAgICAgICBpdGVtU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjojMWFiMzk0O2NvbG9yOiNmZmY7bWFyZ2luOjVweDtwYWRkaW5nOjEwcHg7XCIsXHJcbiAgICAgICAgaXNGaXQgOiBmdW5jdGlvbihxdWVzdGlvbikgeyByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSAnc29ydGFibGVsaXN0JzsgfSxcclxuICAgICAgICBodG1sVGVtcGxhdGU6IFwiPGRpdj48L2Rpdj5cIixcclxuICAgICAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XHJcbiAgICAgICAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic29ydGFibGVsaXN0XCIsIFt7bmFtZTpcImhhc090aGVyXCIsIHZpc2libGU6IGZhbHNlfSwge25hbWU6XCJzdG9yZU90aGVyc0FzQ29tbWVudFwiLCB2aXNpYmxlOiBmYWxzZX1dLCBudWxsLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcInNvcnRhYmxlbGlzdFwiLCB7bmFtZTogXCJlbXB0eVRleHRcIiwgZGVmYXVsdDogXCJNb3ZlIGl0ZW1zIGhlcmUuXCJ9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB2YXIgZW1wdHlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICB2YXIgc291cmNlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByZXN1bHRFbC5zdHlsZS5jc3NUZXh0ID0gcm9vdFdpZGdldC5hcmVhU3R5bGU7XHJcbiAgICAgICAgICAgIGVtcHR5RWwuaW5uZXJIVE1MID0gcXVlc3Rpb24uZW1wdHlUZXh0O1xyXG4gICAgICAgICAgICByZXN1bHRFbC5hcHBlbmRDaGlsZChlbXB0eUVsKTtcclxuICAgICAgICAgICAgc291cmNlRWwuc3R5bGUuY3NzVGV4dCA9IHJvb3RXaWRnZXQuYXJlYVN0eWxlO1xyXG4gICAgICAgICAgICBzb3VyY2VFbC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjEwcHhcIjtcclxuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQocmVzdWx0RWwpO1xyXG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChzb3VyY2VFbCk7XHJcbiAgICAgICAgICAgIHZhciBoYXNWYWx1ZUluUmVzdWx0cyA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IHF1ZXN0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkocmVzKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkgKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc1tpXSA9PSB2YWwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNVcGRhdGluZ1F1ZXN0aW9uVmFsdWUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHJlc3VsdEVsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRFbC5hcHBlbmRDaGlsZChlbXB0eUVsKTtcclxuICAgICAgICAgICAgICAgIHNvdXJjZUVsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2FzSW5SZXN1bHRzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi5hY3RpdmVDaG9pY2VzLmZvckVhY2goZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluUmVzdXRscyA9IGhhc1ZhbHVlSW5SZXN1bHRzKGNob2ljZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FzSW5SZXN1bHRzID0gd2FzSW5SZXN1bHRzIHx8IGluUmVzdXRscztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3JjRWwgPSBpblJlc3V0bHMgPyByZXN1bHRFbCA6IHNvdXJjZUVsO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RWwuaW5uZXJIVE1MID0gXCI8ZGl2IHN0eWxlPSdcIiArIHJvb3RXaWRnZXQuaXRlbVN0eWxlICsgIFwiJz5cIiArIGNob2ljZS50ZXh0ICsgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICAgICBuZXdFbC5kYXRhc2V0W1widmFsdWVcIl0gPSBjaG9pY2UudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjRWwuYXBwZW5kQ2hpbGQobmV3RWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSB3YXNJblJlc3VsdHMgPyAgXCJub25lXCIgOiBcIlwiO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBTb3J0YWJsZS5jcmVhdGUoJChyZXN1bHRFbClbMF0sIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXA6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAndG9wMycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHVsbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwdXQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblNvcnQ6IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC50by5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlFbC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBldnQudG8uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGV2dC50by5jaGlsZHJlbltpXS5kYXRhc2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVXBkYXRpbmdRdWVzdGlvblZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICBpc1VwZGF0aW5nUXVlc3Rpb25WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgU29ydGFibGUuY3JlYXRlKCQoc291cmNlRWwpWzBdLCB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IDE1MCxcclxuICAgICAgICAgICAgICAgIGdyb3VwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RvcDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHB1bGw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHV0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgICAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc29ydGFibGVqcy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJTb3J0YWJsZVwiLFwiY29tbW9uanMyXCI6XCJzb3J0YWJsZWpzXCIsXCJjb21tb25qc1wiOlwic29ydGFibGVqc1wiLFwiYW1kXCI6XCJzb3J0YWJsZWpzXCJ9XG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJzb3VyY2VSb290IjoiIn0=