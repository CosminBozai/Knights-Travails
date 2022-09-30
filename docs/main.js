/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"constructBoard\": () => (/* binding */ constructBoard),\n/* harmony export */   \"squareArr\": () => (/* binding */ squareArr)\n/* harmony export */ });\nconst squareArr = [];\n\nfunction constructBoard() {\n  const chessboard = document.getElementById(\"chessboard\");\n  let alternate = true;\n  let x = 0;\n  let y = 1;\n  for (let i = 0; i < 64; i++) {\n    x = x + 1;\n    if (i % 8 === 0 && i !== 0) {\n      alternate = !alternate;\n      x = 1;\n      y = y + 1;\n    }\n    let square = {\n      element: document.createElement(\"div\"),\n      xPos: x,\n      yPos: y,\n    };\n\n    if (i % 8 === 0) {\n      square.element.textContent = i / 8 + 1;\n    }\n    if (i < 8) {\n      square.element.textContent = i + 1;\n    }\n    if (alternate) {\n      square.element.className = \"square white\";\n    } else {\n      square.element.className = \"square black\";\n    }\n    square.element.setAttribute(\"Pos-x\", square.xPos);\n    square.element.setAttribute(\"Pos-y\", square.yPos);\n\n    alternate = !alternate;\n    chessboard.appendChild(square.element);\n    squareArr.push(square);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://knights-travails/./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n(0,_board__WEBPACK_IMPORTED_MODULE_0__.constructBoard)();\n\nconst knight = (() => {\n  let element = document.getElementById(\"knight\");\n  function moveKnight(x, y) {\n    if (x > 8 && y > 8) {\n      return alert(\"The knight can move only on the 8x8 board\");\n    }\n    // 6.25% is the distance the knight has to be from the board's margin to be...\n    // ...in the middle of the 1, 1 square.\n    // The formula for moving to the center of other squares is...\n    // ... Sn = 6.25 * (n + n - 1), where Sn is the target square\n    let newXPos = 6.25 * (2 * x - 1);\n    let newYPos = 6.25 * (2 * y - 1);\n    element.style.left = `${newXPos}%`;\n    element.style.top = `${newYPos}%`;\n  }\n  return { moveKnight };\n})();\n\n_board__WEBPACK_IMPORTED_MODULE_0__.squareArr.forEach((square) => {\n  square.element.addEventListener(\"click\", selectSquare);\n});\n\nfunction selectSquare() {\n  let x = this.getAttribute(\"Pos-x\");\n  let y = this.getAttribute(\"Pos-y\");\n  knight.moveKnight(x, y);\n}\n\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;