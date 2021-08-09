(self["webpackChunkpokepedia"] = self["webpackChunkpokepedia"] || []).push([["src_app_pokemons_pokemons_module_ts"],{

/***/ 5291:
/*!*****************************************************!*\
  !*** ./src/app/pokemons/pokemons-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonsPageRoutingModule": () => (/* binding */ PokemonsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pokemons_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemons.page */ 8943);




const routes = [
    {
        path: '',
        component: _pokemons_page__WEBPACK_IMPORTED_MODULE_0__.PokemonsPage
    }
];
let PokemonsPageRoutingModule = class PokemonsPageRoutingModule {
};
PokemonsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PokemonsPageRoutingModule);



/***/ }),

/***/ 3669:
/*!*********************************************!*\
  !*** ./src/app/pokemons/pokemons.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonsPageModule": () => (/* binding */ PokemonsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _pokemons_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemons-routing.module */ 5291);
/* harmony import */ var _pokemons_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemons.page */ 8943);







let PokemonsPageModule = class PokemonsPageModule {
};
PokemonsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pokemons_routing_module__WEBPACK_IMPORTED_MODULE_0__.PokemonsPageRoutingModule
        ],
        declarations: [_pokemons_page__WEBPACK_IMPORTED_MODULE_1__.PokemonsPage]
    })
], PokemonsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pokemons_pokemons_module_ts.js.map