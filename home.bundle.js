/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb250ZW50LmlubmVySFRNTCA9IGA8ZGl2IGlkPVwid2VsY29tZVwiPlxuICAgICAgICA8aW1nIGlkPVwiaG9tZVwiIHNyYz1cIi4uL3NyYy9ob21lLXBpY3R1cmUuanBnXCIgYWx0PVwiSmV3aXNoIEZvb2RcIiAvPlxuICAgICAgICA8cD5cbiAgICAgICAgICBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gT2RpdCxcbiAgICAgICAgICBxdWFlcmF0IHF1aS4gRG9sb3JlbXF1ZSBtaW5pbWEgYXNwZXJuYXR1ciBzYWVwZSBlbmltLCB0b3RhbSB2ZWxpdFxuICAgICAgICAgIHBlcnNwaWNpYXRpcyBtb2RpIGFwZXJpYW0gY29uc2VxdWF0dXIgaWQsIHJlcHJlaGVuZGVyaXQgaGFydW0gdmVsIGVvcyFcbiAgICAgICAgICBQbGFjZWF0LCBwb3NzaW11cyB2b2x1cHRhdGVzLiBQbGFjZWF0IG1pbnVzIG1hZ25hbSBvZmZpY2lpcyBkZWxlbml0aVxuICAgICAgICAgIGFzc3VtZW5kYSBhIHZvbHVwdGF0dW0gZWxpZ2VuZGkgcXVpZGVtIG5pc2kgZXNzZSBzYXBpZW50ZSBjb25zZXF1YXR1clxuICAgICAgICAgIGFsaXF1aWQgYWxpcXVhbSBibGFuZGl0aWlzIHF1b2QsIHJlY3VzYW5kYWUsIGRvbG9yZW0gc29sdXRhIGV1bVxuICAgICAgICAgIHN1c2NpcGl0LCBldCBkZWJpdGlzIHZlbGl0ISBSZW0gYSBuZWNlc3NpdGF0aWJ1cyBtYWduaS4gQ3VscGEgZGViaXRpc1xuICAgICAgICAgIHZlbmlhbSBtaW51cyBpcHNhIHBlcnNwaWNpYXRpcyBkb2xvcmVtcXVlIHNlZCBhbGlhcyEgQ29tbW9kaSBxdWFzaVxuICAgICAgICAgIG1haW9yZXMgZnVnYSBkZXNlcnVudCBzdW50IGEgYXQgZXNzZSBlb3MgYWRpcGlzY2kgbmVjZXNzaXRhdGlidXMuXG4gICAgICAgICAgQWRpcGlzY2kgcmVtIGludmVudG9yZSBlaXVzIG5hdHVzLCBxdWFzIHN1bnQgcmF0aW9uZSEgVmVyaXRhdGlzP1xuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5gO1xufTtcblxuZXhwb3J0IHsgaG9tZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9