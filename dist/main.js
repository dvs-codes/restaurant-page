/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutAdder: () => (/* binding */ aboutAdder)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


const aboutHeading = document.createElement('h1')
const aboutUs = document.createElement('div')
const contactHeading = document.createElement('h1')
const contactUs = document.createElement('div')

function aboutAdder() {
    aboutHeading.textContent = 'About Us'
    aboutUs.textContent = `Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500,
                            when an unknown printer took a galley of type and s
                            crambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged.
                            PageMaker including versions of Lorem Ipsum.`

    contactHeading.textContent = "Contact Us"
    contactUs.textContent = `industry's standard dummy text ever since the 1500,
                            when an unknown printer took a galley of type and s`
        
    _home__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(aboutHeading)
    _home__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(aboutUs)
    _home__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(contactHeading)
    _home__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(contactUs)
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   homeAdder: () => (/* binding */ homeAdder)
/* harmony export */ });
const heading = document.createElement('h1')
const image = document.createElement('img')
const description = document.createElement('div');
const content = document.querySelector('#content')

function homeAdder () {
    image.src = "../photo.jpg"
    heading.textContent = `Gorious Restaurant`
    description.textContent = `Lorem Ipsum is simply dummy
                             text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it
                            to make a type specimen book. It has survived
                            not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
    content.appendChild(heading)
    content.appendChild(image)
    content.appendChild(description)
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuAdder: () => (/* binding */ menuAdder)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


const menuHeading = document.createElement('h1')

function menuAdder() {
    menuHeading.textContent = 'Menu'
    _home__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menuHeading)

    for (let i=0; i<9; i++) {
        const menuItem = document.createElement('div')
        menuItem.textContent = `item number ${i}`
        _home__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menuItem)
    }
        
}



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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/home */ "./src/home.js");
/* harmony import */ var _src_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




const homeButton = document.querySelector('.home')
const menuButton = document.querySelector('.menu')
const aboutButton = document.querySelector('.about')

;(0,_src_home__WEBPACK_IMPORTED_MODULE_0__.homeAdder)()

homeButton.addEventListener('click',() => {
    _src_home__WEBPACK_IMPORTED_MODULE_0__.content.textContent = ""
    ;(0,_src_home__WEBPACK_IMPORTED_MODULE_0__.homeAdder)()

})

menuButton.addEventListener('click',() => {
    _src_home__WEBPACK_IMPORTED_MODULE_0__.content.textContent = ""
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuAdder)()
})

aboutButton.addEventListener('click',() => {
    _src_home__WEBPACK_IMPORTED_MODULE_0__.content.textContent = ""
    ;(0,_src_about__WEBPACK_IMPORTED_MODULE_1__.aboutAdder)()

})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwQ0FBTztBQUNYLElBQUksMENBQU87QUFDWCxJQUFJLDBDQUFPO0FBQ1gsSUFBSSwwQ0FBTztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qk07O0FBRWpDOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDBDQUFPOztBQUVYLGtCQUFrQixLQUFLO0FBQ3ZCO0FBQ0EsOENBQThDLEVBQUU7QUFDaEQsUUFBUSwwQ0FBTztBQUNmO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0Q7QUFDUjtBQUNMOztBQUVuQztBQUNBO0FBQ0E7O0FBRUEscURBQVM7O0FBRVQ7QUFDQSxJQUFJLDhDQUFPO0FBQ1gsSUFBSSxxREFBUzs7QUFFYixDQUFDOztBQUVEO0FBQ0EsSUFBSSw4Q0FBTztBQUNYLElBQUksaURBQVM7QUFDYixDQUFDOztBQUVEO0FBQ0EsSUFBSSw4Q0FBTztBQUNYLElBQUksdURBQVU7O0FBRWQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuL2hvbWVcIjtcblxuY29uc3QgYWJvdXRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBjb250YWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbmNvbnN0IGNvbnRhY3RVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbmZ1bmN0aW9uIGFib3V0QWRkZXIoKSB7XG4gICAgYWJvdXRIZWFkaW5nLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJ1xuICAgIGFib3V0VXMudGV4dENvbnRlbnQgPSBgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uYFxuXG4gICAgY29udGFjdEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIlxuICAgIGNvbnRhY3RVcy50ZXh0Q29udGVudCA9IGBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNgXG4gICAgICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkaW5nKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRVcylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkaW5nKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFVzKVxufVxuXG5leHBvcnQge2Fib3V0QWRkZXJ9IiwiY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbmNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG5mdW5jdGlvbiBob21lQWRkZXIgKCkge1xuICAgIGltYWdlLnNyYyA9IFwiLi4vcGhvdG8uanBnXCJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gYEdvcmlvdXMgUmVzdGF1cmFudGBcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtYFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGltYWdlKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG59XG5cbmV4cG9ydCB7aG9tZUFkZGVyLCBjb250ZW50fVxuIiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuL2hvbWVcIjtcblxuY29uc3QgbWVudUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG5cbmZ1bmN0aW9uIG1lbnVBZGRlcigpIHtcbiAgICBtZW51SGVhZGluZy50ZXh0Q29udGVudCA9ICdNZW51J1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUhlYWRpbmcpXG5cbiAgICBmb3IgKGxldCBpPTA7IGk8OTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWVudUl0ZW0udGV4dENvbnRlbnQgPSBgaXRlbSBudW1iZXIgJHtpfWBcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SXRlbSlcbiAgICB9XG4gICAgICAgIFxufVxuXG5leHBvcnQge21lbnVBZGRlcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aG9tZUFkZGVyICwgY29udGVudH0gZnJvbSBcIi4uL3NyYy9ob21lXCI7XG5pbXBvcnQge2Fib3V0QWRkZXJ9IGZyb20gXCIuLi9zcmMvYWJvdXRcIjtcbmltcG9ydCB7IG1lbnVBZGRlciB9IGZyb20gXCIuL21lbnVcIjtcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJylcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpXG5jb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpXG5cbmhvbWVBZGRlcigpXG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIlxuICAgIGhvbWVBZGRlcigpXG5cbn0pXG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIlxuICAgIG1lbnVBZGRlcigpXG59KVxuXG5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgYWJvdXRBZGRlcigpXG5cbn0pXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=