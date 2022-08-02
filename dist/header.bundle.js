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

  content.innerHTML = `
  <h1>Jewish Menu</h1>
  <div id="card-container">
    <div class="card">
      <div class="card-title">Kosher Meat</div>
      <img id="home" src="../src/home-picture.jpg" alt="Jewish Food" />
      <div class="card-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
          quaerat qui. Doloremque minima aspernatur saepe enim, totam velit
          perspiciatis modi aperiam consequatur id, reprehenderit harum vel eos!
          Placeat, possimus voluptates.</div>   
    </div>
    <div class="card">
      <div class="card-title">Kosher Meat</div>
      <img id="home" src="../src/home-picture.jpg" alt="Jewish Food" />
      <div class="card-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
          quaerat qui. Doloremque minima aspernatur saepe enim, totam velit
          perspiciatis modi aperiam consequatur id, reprehenderit harum vel eos!
          Placeat, possimus voluptates.</div>   
    </div>
    <div class="card">
      <div class="card-title">Kosher Meat</div>
      <img id="home" src="../src/home-picture.jpg" alt="Jewish Food" />
      <div class="card-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
          quaerat qui. Doloremque minima aspernatur saepe enim, totam velit
          perspiciatis modi aperiam consequatur id, reprehenderit harum vel eos!
          Placeat, possimus voluptates.</div>   
    </div>
  </div>`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7OztBQ05uQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7O0FDcEJoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7O1VDakNoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDQTtBQUNNOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLDJDQUFJO0FBQzlDLDBDQUEwQywyQ0FBSTtBQUM5Qyw2Q0FBNkMsaURBQU87QUFDcEQ7O0FBRWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYGA7XG59O1xuXG5leHBvcnQgeyBjb250YWN0IH07XG4iLCJjb25zdCBob21lID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCJ3ZWxjb21lXCI+XG4gICAgICAgIDxpbWcgaWQ9XCJob21lXCIgc3JjPVwiLi4vc3JjL2hvbWUtcGljdHVyZS5qcGdcIiBhbHQ9XCJKZXdpc2ggRm9vZFwiIC8+XG4gICAgICAgIDxwPlxuICAgICAgICAgIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBPZGl0LFxuICAgICAgICAgIHF1YWVyYXQgcXVpLiBEb2xvcmVtcXVlIG1pbmltYSBhc3Blcm5hdHVyIHNhZXBlIGVuaW0sIHRvdGFtIHZlbGl0XG4gICAgICAgICAgcGVyc3BpY2lhdGlzIG1vZGkgYXBlcmlhbSBjb25zZXF1YXR1ciBpZCwgcmVwcmVoZW5kZXJpdCBoYXJ1bSB2ZWwgZW9zIVxuICAgICAgICAgIFBsYWNlYXQsIHBvc3NpbXVzIHZvbHVwdGF0ZXMuIFBsYWNlYXQgbWludXMgbWFnbmFtIG9mZmljaWlzIGRlbGVuaXRpXG4gICAgICAgICAgYXNzdW1lbmRhIGEgdm9sdXB0YXR1bSBlbGlnZW5kaSBxdWlkZW0gbmlzaSBlc3NlIHNhcGllbnRlIGNvbnNlcXVhdHVyXG4gICAgICAgICAgYWxpcXVpZCBhbGlxdWFtIGJsYW5kaXRpaXMgcXVvZCwgcmVjdXNhbmRhZSwgZG9sb3JlbSBzb2x1dGEgZXVtXG4gICAgICAgICAgc3VzY2lwaXQsIGV0IGRlYml0aXMgdmVsaXQhIFJlbSBhIG5lY2Vzc2l0YXRpYnVzIG1hZ25pLiBDdWxwYSBkZWJpdGlzXG4gICAgICAgICAgdmVuaWFtIG1pbnVzIGlwc2EgcGVyc3BpY2lhdGlzIGRvbG9yZW1xdWUgc2VkIGFsaWFzISBDb21tb2RpIHF1YXNpXG4gICAgICAgICAgbWFpb3JlcyBmdWdhIGRlc2VydW50IHN1bnQgYSBhdCBlc3NlIGVvcyBhZGlwaXNjaSBuZWNlc3NpdGF0aWJ1cy5cbiAgICAgICAgICBBZGlwaXNjaSByZW0gaW52ZW50b3JlIGVpdXMgbmF0dXMsIHF1YXMgc3VudCByYXRpb25lISBWZXJpdGF0aXM/XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PmA7XG59O1xuXG5leHBvcnQgeyBob21lIH07XG4iLCJjb25zdCBtZW51ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICA8aDE+SmV3aXNoIE1lbnU8L2gxPlxuICA8ZGl2IGlkPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGVcIj5Lb3NoZXIgTWVhdDwvZGl2PlxuICAgICAgPGltZyBpZD1cImhvbWVcIiBzcmM9XCIuLi9zcmMvaG9tZS1waWN0dXJlLmpwZ1wiIGFsdD1cIkpld2lzaCBGb29kXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5Mb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gT2RpdCxcbiAgICAgICAgICBxdWFlcmF0IHF1aS4gRG9sb3JlbXF1ZSBtaW5pbWEgYXNwZXJuYXR1ciBzYWVwZSBlbmltLCB0b3RhbSB2ZWxpdFxuICAgICAgICAgIHBlcnNwaWNpYXRpcyBtb2RpIGFwZXJpYW0gY29uc2VxdWF0dXIgaWQsIHJlcHJlaGVuZGVyaXQgaGFydW0gdmVsIGVvcyFcbiAgICAgICAgICBQbGFjZWF0LCBwb3NzaW11cyB2b2x1cHRhdGVzLjwvZGl2PiAgIFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZVwiPktvc2hlciBNZWF0PC9kaXY+XG4gICAgICA8aW1nIGlkPVwiaG9tZVwiIHNyYz1cIi4uL3NyYy9ob21lLXBpY3R1cmUuanBnXCIgYWx0PVwiSmV3aXNoIEZvb2RcIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBPZGl0LFxuICAgICAgICAgIHF1YWVyYXQgcXVpLiBEb2xvcmVtcXVlIG1pbmltYSBhc3Blcm5hdHVyIHNhZXBlIGVuaW0sIHRvdGFtIHZlbGl0XG4gICAgICAgICAgcGVyc3BpY2lhdGlzIG1vZGkgYXBlcmlhbSBjb25zZXF1YXR1ciBpZCwgcmVwcmVoZW5kZXJpdCBoYXJ1bSB2ZWwgZW9zIVxuICAgICAgICAgIFBsYWNlYXQsIHBvc3NpbXVzIHZvbHVwdGF0ZXMuPC9kaXY+ICAgXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+S29zaGVyIE1lYXQ8L2Rpdj5cbiAgICAgIDxpbWcgaWQ9XCJob21lXCIgc3JjPVwiLi4vc3JjL2hvbWUtcGljdHVyZS5qcGdcIiBhbHQ9XCJKZXdpc2ggRm9vZFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+TG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE9kaXQsXG4gICAgICAgICAgcXVhZXJhdCBxdWkuIERvbG9yZW1xdWUgbWluaW1hIGFzcGVybmF0dXIgc2FlcGUgZW5pbSwgdG90YW0gdmVsaXRcbiAgICAgICAgICBwZXJzcGljaWF0aXMgbW9kaSBhcGVyaWFtIGNvbnNlcXVhdHVyIGlkLCByZXByZWhlbmRlcml0IGhhcnVtIHZlbCBlb3MhXG4gICAgICAgICAgUGxhY2VhdCwgcG9zc2ltdXMgdm9sdXB0YXRlcy48L2Rpdj4gICBcbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbn07XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgaGVhZGVyLmlubmVySFRNTCA9IGA8ZGl2Pkpld2lzaCBGb29kPC9kaXY+XG48ZGl2IGlkPVwidGFic1wiPlxuICAgICAgICA8YnV0dG9uIGlkPVwiaG9tZS1idG5cIj5Ib21lPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJtZW51LWJ0blwiPk1lbnU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNvbnRhY3QtYnRuXCI+Q29udGFjdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+YDtcblxuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShoZWFkZXIsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1idG5cIik7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnRuXCIpO1xuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LWJ0blwiKTtcblxuICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBob21lKCkpO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtZW51KCkpO1xuICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjb250YWN0KCkpO1xufTtcblxuZXhwb3J0IHsgaGVhZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=