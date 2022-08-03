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
  !*** ./src/menu.js ***!
  \*********************/
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBtZW51ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICA8aDE+SmV3aXNoIE1lbnU8L2gxPlxuICA8ZGl2IGlkPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGVcIj5Lb3NoZXIgTWVhdDwvZGl2PlxuICAgICAgPGltZyBpZD1cImhvbWVcIiBzcmM9XCIuLi9zcmMvaG9tZS1waWN0dXJlLmpwZ1wiIGFsdD1cIkpld2lzaCBGb29kXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5Mb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gT2RpdCxcbiAgICAgICAgICBxdWFlcmF0IHF1aS4gRG9sb3JlbXF1ZSBtaW5pbWEgYXNwZXJuYXR1ciBzYWVwZSBlbmltLCB0b3RhbSB2ZWxpdFxuICAgICAgICAgIHBlcnNwaWNpYXRpcyBtb2RpIGFwZXJpYW0gY29uc2VxdWF0dXIgaWQsIHJlcHJlaGVuZGVyaXQgaGFydW0gdmVsIGVvcyFcbiAgICAgICAgICBQbGFjZWF0LCBwb3NzaW11cyB2b2x1cHRhdGVzLjwvZGl2PiAgIFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZVwiPktvc2hlciBNZWF0PC9kaXY+XG4gICAgICA8aW1nIGlkPVwiaG9tZVwiIHNyYz1cIi4uL3NyYy9ob21lLXBpY3R1cmUuanBnXCIgYWx0PVwiSmV3aXNoIEZvb2RcIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBPZGl0LFxuICAgICAgICAgIHF1YWVyYXQgcXVpLiBEb2xvcmVtcXVlIG1pbmltYSBhc3Blcm5hdHVyIHNhZXBlIGVuaW0sIHRvdGFtIHZlbGl0XG4gICAgICAgICAgcGVyc3BpY2lhdGlzIG1vZGkgYXBlcmlhbSBjb25zZXF1YXR1ciBpZCwgcmVwcmVoZW5kZXJpdCBoYXJ1bSB2ZWwgZW9zIVxuICAgICAgICAgIFBsYWNlYXQsIHBvc3NpbXVzIHZvbHVwdGF0ZXMuPC9kaXY+ICAgXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+S29zaGVyIE1lYXQ8L2Rpdj5cbiAgICAgIDxpbWcgaWQ9XCJob21lXCIgc3JjPVwiLi4vc3JjL2hvbWUtcGljdHVyZS5qcGdcIiBhbHQ9XCJKZXdpc2ggRm9vZFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+TG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE9kaXQsXG4gICAgICAgICAgcXVhZXJhdCBxdWkuIERvbG9yZW1xdWUgbWluaW1hIGFzcGVybmF0dXIgc2FlcGUgZW5pbSwgdG90YW0gdmVsaXRcbiAgICAgICAgICBwZXJzcGljaWF0aXMgbW9kaSBhcGVyaWFtIGNvbnNlcXVhdHVyIGlkLCByZXByZWhlbmRlcml0IGhhcnVtIHZlbCBlb3MhXG4gICAgICAgICAgUGxhY2VhdCwgcG9zc2ltdXMgdm9sdXB0YXRlcy48L2Rpdj4gICBcbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbn07XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==