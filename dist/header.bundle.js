/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
const contact = () => {
  const content = document.getElementById("content");

  content.innerHTML = ``;
};




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
const home = () => {
  const content = document.getElementById("content");

  content.innerHTML = `<div id="welcome">
        <img id="home" src="../src/home-picture.jpg" alt="Jewish Food" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
          quaerat qui. Doloremque minima aspernatur saepe enim, totam velit
          perspiciatis modi aperiam consequatur id, reprehenderit harum vel eos!
          Placeat, possimus voluptates. Placeat minus magnam officiis deleniti
          assumenda a voluptatum eligendi quidem nisi esse sapiente consequatur
          aliquid aliquam blanditiis quod, recusandae, dolorem soluta eum
          suscipit, et debitis velit! Rem a necessitatibus magni. Culpa debitis
          veniam minus ipsa perspiciatis doloremque sed alias! Commodi quasi
          maiores fuga deserunt sunt a at esse eos adipisci necessitatibus.
          Adipisci rem inventore eius natus, quas sunt ratione! Veritatis?
        </p>
      </div>`;
};




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const menu = () => {
  const content = document.getElementById("content");

  content.innerHTML = ``;
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const header = () => {
  const header = document.createElement("header");

  header.innerHTML = `<div>Jewish Food</div>
<div id="tabs">
        <button id="home-btn">Home</button>
        <button id="menu-btn">Menu</button>
        <button id="contact-btn">Contact</button>
      </div>`;

  document.body.insertBefore(header, document.body.firstChild);

  const homeBtn = document.getElementById("home-btn");
  const menuBtn = document.getElementById("menu-btn");
  const contactBtn = document.getElementById("contact-btn");

  homeBtn.addEventListener("click", () => (0,_home__WEBPACK_IMPORTED_MODULE_0__.home)());
  menuBtn.addEventListener("click", () => (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)());
  contactBtn.addEventListener("click", () => (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)());
};



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7OztBQ05uQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7O0FDcEJoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRWdCOzs7Ozs7O1VDTmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNBO0FBQ007O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsMkNBQUk7QUFDOUMsMENBQTBDLDJDQUFJO0FBQzlDLDZDQUE2QyxpREFBTztBQUNwRDs7QUFFa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29udGVudC5pbm5lckhUTUwgPSBgYDtcbn07XG5cbmV4cG9ydCB7IGNvbnRhY3QgfTtcbiIsImNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29udGVudC5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIndlbGNvbWVcIj5cbiAgICAgICAgPGltZyBpZD1cImhvbWVcIiBzcmM9XCIuLi9zcmMvaG9tZS1waWN0dXJlLmpwZ1wiIGFsdD1cIkpld2lzaCBGb29kXCIgLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE9kaXQsXG4gICAgICAgICAgcXVhZXJhdCBxdWkuIERvbG9yZW1xdWUgbWluaW1hIGFzcGVybmF0dXIgc2FlcGUgZW5pbSwgdG90YW0gdmVsaXRcbiAgICAgICAgICBwZXJzcGljaWF0aXMgbW9kaSBhcGVyaWFtIGNvbnNlcXVhdHVyIGlkLCByZXByZWhlbmRlcml0IGhhcnVtIHZlbCBlb3MhXG4gICAgICAgICAgUGxhY2VhdCwgcG9zc2ltdXMgdm9sdXB0YXRlcy4gUGxhY2VhdCBtaW51cyBtYWduYW0gb2ZmaWNpaXMgZGVsZW5pdGlcbiAgICAgICAgICBhc3N1bWVuZGEgYSB2b2x1cHRhdHVtIGVsaWdlbmRpIHF1aWRlbSBuaXNpIGVzc2Ugc2FwaWVudGUgY29uc2VxdWF0dXJcbiAgICAgICAgICBhbGlxdWlkIGFsaXF1YW0gYmxhbmRpdGlpcyBxdW9kLCByZWN1c2FuZGFlLCBkb2xvcmVtIHNvbHV0YSBldW1cbiAgICAgICAgICBzdXNjaXBpdCwgZXQgZGViaXRpcyB2ZWxpdCEgUmVtIGEgbmVjZXNzaXRhdGlidXMgbWFnbmkuIEN1bHBhIGRlYml0aXNcbiAgICAgICAgICB2ZW5pYW0gbWludXMgaXBzYSBwZXJzcGljaWF0aXMgZG9sb3JlbXF1ZSBzZWQgYWxpYXMhIENvbW1vZGkgcXVhc2lcbiAgICAgICAgICBtYWlvcmVzIGZ1Z2EgZGVzZXJ1bnQgc3VudCBhIGF0IGVzc2UgZW9zIGFkaXBpc2NpIG5lY2Vzc2l0YXRpYnVzLlxuICAgICAgICAgIEFkaXBpc2NpIHJlbSBpbnZlbnRvcmUgZWl1cyBuYXR1cywgcXVhcyBzdW50IHJhdGlvbmUhIFZlcml0YXRpcz9cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+YDtcbn07XG5cbmV4cG9ydCB7IGhvbWUgfTtcbiIsImNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29udGVudC5pbm5lckhUTUwgPSBgYDtcbn07XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgaGVhZGVyLmlubmVySFRNTCA9IGA8ZGl2Pkpld2lzaCBGb29kPC9kaXY+XG48ZGl2IGlkPVwidGFic1wiPlxuICAgICAgICA8YnV0dG9uIGlkPVwiaG9tZS1idG5cIj5Ib21lPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJtZW51LWJ0blwiPk1lbnU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNvbnRhY3QtYnRuXCI+Q29udGFjdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+YDtcblxuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShoZWFkZXIsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1idG5cIik7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnRuXCIpO1xuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LWJ0blwiKTtcblxuICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBob21lKCkpO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtZW51KCkpO1xuICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjb250YWN0KCkpO1xufTtcblxuZXhwb3J0IHsgaGVhZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=