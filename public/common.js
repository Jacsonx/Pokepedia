(self["webpackChunkpokepedia"] = self["webpackChunkpokepedia"] || []).push([["common"],{

/***/ 6633:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 3150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2954);
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ 7279);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 7330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 2377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 1269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 8943:
/*!*******************************************!*\
  !*** ./src/app/pokemons/pokemons.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonsPage": () => (/* binding */ PokemonsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pokemons_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pokemons.page.html */ 2639);
/* harmony import */ var _pokemons_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemons.page.scss */ 9217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PokemonsPage = class PokemonsPage {
    constructor() {
    }
    ngOnInit() {
    }
};
PokemonsPage.ctorParameters = () => [];
PokemonsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pokemons',
        template: _raw_loader_pokemons_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pokemons_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PokemonsPage);



/***/ }),

/***/ 9217:
/*!*********************************************!*\
  !*** ./src/app/pokemons/pokemons.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@font-face {\n  font-family: \"Pokemon GB\";\n  src: url(\"https://dl.dropboxusercontent.com/u/10822923/Pokemon_GB/Pokemon_GB.eot?\") format(\"eot\"), url(\"https://dl.dropboxusercontent.com/u/10822923/Pokemon_GB/Pokemon_GB.woff\") format(\"woff\"), url(\"https://dl.dropboxusercontent.com/u/10822923/Pokemon_GB/Pokemon_GB.ttf\") format(\"truetype\"), url(\"https://dl.dropboxusercontent.com/u/10822923/Pokemon_GB/Pokemon_GB.svg#PokemonGB\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n.box {\n  left: 25px;\n  top: 40px;\n  color: black;\n  position: absolute;\n  font-family: \"Pokemon GB\", Arial, sans-serif;\n  border-radius: 2px;\n  font-size: 20px;\n  padding: 8px;\n  width: 400px;\n  height: 328px;\n  line-height: 16px;\n  margin: auto;\n  background: white;\n  border: 1px solid white;\n  box-shadow: 0 1px 0 1px black, inset 0 1px 0 1px black, 0 0 0 1px black, inset 0 0 0 1px black;\n}\n.line {\n  border-right: 2px solid rgba(255, 255, 255, 0.75);\n  color: rgba(0, 0, 0, 0.75);\n  font-family: \"Pokemon GB\", Arial, sans-serif;\n  font-size: 20px;\n  margin: 0 auto;\n  white-space: nowrap;\n  overflow: hidden;\n}\np {\n  margin-top: 70px;\n  line-height: 25px;\n  text-justify: distribute;\n  letter-spacing: 1px;\n  text-align: justify !important;\n}\n.typing-animation {\n  animation: blinkCursor 100ms steps(80) infinite normal, typing 2s steps(40) 1s normal both;\n}\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 16em;\n  }\n}\n@keyframes blinkCursor {\n  from {\n    border-right-color: rgba(255, 255, 255, 0.75);\n  }\n  to {\n    border-right-color: transparent;\n  }\n}\n.box > i {\n  width: 0;\n  height: 0;\n  border: 5px solid transparent;\n  border-top-color: black;\n  margin-top: 23px;\n  animation: bounce 0.5s ease-in-out 0 infinite alternate;\n  float: right;\n}\n@keyframes bounce {\n  from {\n    margin-top: 20px;\n  }\n  to {\n    margin-top: 23px;\n  }\n}\n.left-fle {\n  position: absolute;\n  top: 10px;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-top: 240px solid transparent;\n  border-bottom: 240px solid transparent;\n  border-left: 240px solid #920000;\n  transform: rotate(180deg);\n}\n.left-dle {\n  position: absolute;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-top: 240px solid transparent;\n  border-bottom: 240px solid transparent;\n  border-left: 240px solid black;\n  transform: rotate(180deg);\n}\n.left-de {\n  position: absolute;\n  right: 0;\n  top: 10px;\n}\n/*\n.arrow-right {\n    width: 100px;\n    height: 100px;\n    border-top: 1000px solid black !important;\n    border-bottom: 1160px solid black !important;\n    border-left: 1160px solid rgb(34, 0, 255);\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2Vtb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EseVlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEZBQUE7QUFBSjtBQUdBO0VBQ0ksaURBQUE7RUFDQSwwQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUdBO0VBQ0ksMEZBQUE7QUFBSjtBQUdBO0VBQ0k7SUFDSSxRQUFBO0VBQU47RUFFRTtJQUNJLFdBQUE7RUFBTjtBQUNGO0FBR0E7RUFDSTtJQUNJLDZDQUFBO0VBRE47RUFHRTtJQUNJLCtCQUFBO0VBRE47QUFDRjtBQUlBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1REFBQTtFQUNBLFlBQUE7QUFGSjtBQUtBO0VBQ0k7SUFDSSxnQkFBQTtFQUZOO0VBSUU7SUFDSSxnQkFBQTtFQUZOO0FBQ0Y7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FBSEo7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFISjtBQU1BO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUhKO0FBT0E7Ozs7Ozs7RUFBQSIsImZpbGUiOiJwb2tlbW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBva2Vtb24gR0JcIjtcclxuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3UvMTA4MjI5MjMvUG9rZW1vbl9HQi9Qb2tlbW9uX0dCLmVvdD9cIikgZm9ybWF0KFwiZW90XCIpLCB1cmwoXCJodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vdS8xMDgyMjkyMy9Qb2tlbW9uX0dCL1Bva2Vtb25fR0Iud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vdS8xMDgyMjkyMy9Qb2tlbW9uX0dCL1Bva2Vtb25fR0IudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCJodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vdS8xMDgyMjkyMy9Qb2tlbW9uX0dCL1Bva2Vtb25fR0Iuc3ZnI1Bva2Vtb25HQlwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4uYm94IHtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LWZhbWlseTogXCJQb2tlbW9uIEdCXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMXB4IGJsYWNrLCBpbnNldCAwIDFweCAwIDFweCBibGFjaywgMCAwIDAgMXB4IGJsYWNrLCBpbnNldCAwIDAgMCAxcHggYmxhY2s7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBva2Vtb24gR0JcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIHRleHQtanVzdGlmeTogZGlzdHJpYnV0ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50eXBpbmctYW5pbWF0aW9uIHtcclxuICAgIGFuaW1hdGlvbjogYmxpbmtDdXJzb3IgMTAwbXMgc3RlcHMoODApIGluZmluaXRlIG5vcm1hbCwgdHlwaW5nIDJzIHN0ZXBzKDQwKSAxcyBub3JtYWwgYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyB0eXBpbmcge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgd2lkdGg6IDE2ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmtDdXJzb3Ige1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3g+aSB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xyXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgMC41cyBlYXNlLWluLW91dCAwIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBib3VuY2Uge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGVmdC1mbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci10b3A6IDI0MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMjQwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMjQwcHggc29saWQgcmdiKDE0NiwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4ubGVmdC1kbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci10b3A6IDI0MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMjQwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMjQwcHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLmxlZnQtZGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4vKlxyXG4uYXJyb3ctcmlnaHQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci10b3A6IDEwMDBweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTE2MHB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMTE2MHB4IHNvbGlkIHJnYigzNCwgMCwgMjU1KTtcclxufSovXHJcbiJdfQ== */");

/***/ }),

/***/ 2639:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pokemons/pokemons.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            <img src=\"assets/images/pokepedias.png\" width=\"150px\" alt=\"\">\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"box\">\n        <p class=\"line typing-animation\">\n            Olá, Bem vindo a PokéPédia !!!\n        </p>\n        <p>\n            Aqui você pode encontrar informações de todos os tipos e espécies de Pokémon, alem de um apanhado <br> geral sobre o universo <br> Pokémon.\n        </p>\n\n\n    </div>\n    <div class=\"left-fle\">\n    </div>\n    <div class=\"left-dle\">\n    </div>\n    <div class=\"left-de\">\n        <img src=\"assets/images/professor.png\" width=\"300px\" alt=\"\">\n    </div>\n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=common.js.map