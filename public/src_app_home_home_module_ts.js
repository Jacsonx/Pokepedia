(self["webpackChunkpokepedia"] = self["webpackChunkpokepedia"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_pokeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pokeapi.service */ 7082);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _pokemons_pokemons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pokemons/pokemons.page */ 8943);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);








let HomePage = class HomePage {
    constructor(pokeApi, modalController, route) {
        this.pokeApi = pokeApi;
        this.modalController = modalController;
        this.route = route;
        this.presentModal();
    }
    ionViewDidEnter() {
        this.getPokemon();
        // this.presentModal();
    }
    getPokemon() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.data = yield this.pokeApi.getPokemons('bulbasaur');
            this.bulbasaur = this.data.sprites.front_default;
            this.data = yield this.pokeApi.getPokemons('charizard');
            this.charizard = this.data.sprites.front_default;
            this.data = yield this.pokeApi.getPokemons('suicune');
            this.suicune = this.data.sprites.front_default;
            this.data = yield this.pokeApi.getPokemons('ampharos');
            this.ampharos = this.data.sprites.front_default;
            this.data = yield this.pokeApi.getPokemons('mewtwo');
            this.mewtwo = this.data.sprites.front_default;
            this.data = yield this.pokeApi.getPokemons('onix');
            this.onix = this.data.sprites.front_default;
            //Ampharos
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pokemons_pokemons_page__WEBPACK_IMPORTED_MODULE_3__.PokemonsPage,
                cssClass: 'my-custom-modal-css'
            });
            return yield modal.present();
        });
    }
    getPokemons() {
        this.route.navigateByUrl('/pokemon');
    }
};
HomePage.ctorParameters = () => [
    { type: _services_pokeapi_service__WEBPACK_IMPORTED_MODULE_2__.PokeapiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 7082:
/*!*********************************************!*\
  !*** ./src/app/services/pokeapi.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokeapiService": () => (/* binding */ PokeapiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);



let PokeapiService = class PokeapiService {
    //https://pokeapi.co/api/v2/pokemon/
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getPokemons(pokemon) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            return this.httpClient.get(url).toPromise();
        });
    }
};
PokeapiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PokeapiService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PokeapiService);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@800&display=swap\");\n@import url(\"https://candyfonts.com/wp-data/2019/03/23/49907/pokemon_pixel_font.ttf\");\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 20%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  font-style: oblique;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\nion-grid {\n  left: 15%;\n  text-align: center;\n  position: absolute;\n  top: 45%;\n  padding: 20px;\n}\nion-item {\n  background-color: #d11818 !important;\n  color: white !important;\n}\nion-row {\n  border: none !important;\n}\nion-card {\n  border-radius: 7px;\n  height: 100px;\n  width: 350px;\n  font-size: 20px;\n  background-color: #d11818 !important;\n  border: 10px;\n  border-color: rgba(0, 0, 0, 0.864);\n  border-style: double;\n  box-shadow: 90px black;\n  box-sizing: border-box;\n  transition: 0.9s !important;\n}\nion-card:hover {\n  cursor: pointer;\n  background-position: center !important;\n  background-size: 3px !important;\n  background-color: white !important;\n}\nion-card img {\n  transition: 0.9s !important;\n  position: absolute;\n  right: 10px;\n}\nion-card-header {\n  font-family: \"Saira Condensed\", sans-serif;\n  font-size: 35px !important;\n  font-weight: bold;\n  -webkit-text-stroke: 1px black;\n  transition: 0.9s !important;\n  color: white;\n}\nion-card-header:hover {\n  color: #d11818 !important;\n}\nion-card:hover img {\n  transform: translateX(-150%);\n}\nion-content {\n  background-color: #d11818 !important;\n}\nbutton {\n  background-color: transparent !important;\n}\nbutton img {\n  transition: transform 0.7s ease-in-out !important;\n}\nbutton img:hover {\n  transform: rotate(360deg) !important;\n}\nion-footer {\n  box-shadow: none !important;\n  border: 0px !important;\n}\n.footer {\n  position: fixed;\n  bottom: 0px;\n  left: -60px;\n}\n.image {\n  width: 100%;\n  position: absolute;\n  bottom: 0px;\n}\ndiv .nuvem {\n  position: absolute;\n  left: 100px;\n  bottom: 90px;\n}\ndiv .underContruct {\n  width: 300px;\n  position: absolute;\n  left: 115px;\n  color: black;\n  bottom: 190px;\n}\ndiv .psyduck {\n  transition: transform 0.7s ease-in-out !important;\n}\ndiv .psyduck::hover {\n  transform: rotate(90deg) !important;\n}\n.link-logo {\n  padding: 5px;\n  border-radius: 20px;\n  border: 1px white solid;\n}\na {\n  font-style: none;\n  text-decoration: none;\n  color: white;\n}\n.my-custom-modal-css .modal-wrapper {\n  height: 100%;\n  top: 900%;\n  position: absolute;\n  display: block;\n}\n/*\n.bg_video {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    min-width: 100%;\n    min-height: 100%;\n    width: auto;\n    height: auto;\n    z-index: -1000;\n    background: url('https://www.youtube.com/watch?v=oyrpPt_dT9Q') no-repeat !important;\n    background-size: cover;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDJFQUFBO0FBQ0EsNkZBQUE7QUFDQSxxRkFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0o7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0o7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7QUFFQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUFDSjtBQUVBO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtBQUNKO0FBRUE7RUFDSSx1QkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFDSjtBQUVBO0VBQ0ksZUFBQTtFQUNBLHNDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtBQUNKO0FBRUE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUE7RUFDSSwwQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBRUEsWUFBQTtBQUFKO0FBR0E7RUFDSSx5QkFBQTtBQUFKO0FBR0E7RUFDSSw0QkFBQTtBQUFKO0FBR0E7RUFDSSxvQ0FBQTtBQUFKO0FBR0E7RUFDSSx3Q0FBQTtBQUFKO0FBR0E7RUFDSSxpREFBQTtBQUFKO0FBR0E7RUFDSSxvQ0FBQTtBQUFKO0FBR0E7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQUo7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBSjtBQUdBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQUo7QUFHQTtFQUNJLGlEQUFBO0FBQUo7QUFHQTtFQUNJLG1DQUFBO0FBQUo7QUFHQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFHQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQUo7QUFHQTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUo7QUFJQTs7Ozs7Ozs7Ozs7O0VBQUEiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TYWlyYStDb25kZW5zZWQ6d2dodEA4MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2FuZHlmb250cy5jb20vd3AtZGF0YS8yMDE5LzAzLzIzLzQ5OTA3L3Bva2Vtb25fcGl4ZWxfZm9udC50dGZcIik7XG4jY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGNvbG9yOiAjOGM4YzhjO1xuICAgIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1ncmlkIHtcbiAgICBsZWZ0OiAxNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ1JTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG5pb24taXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxMTgxOCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tcm93IHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxMTgxOCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMTBweDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NjQpO1xuICAgIGJvcmRlci1zdHlsZTogZG91YmxlO1xuICAgIGJveC1zaGFkb3c6IDkwcHggYmxhY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0cmFuc2l0aW9uOiAwLjlzICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCBpbWcge1xuICAgIHRyYW5zaXRpb246IDAuOXMgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6ICdTYWlyYSBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBibGFjaztcbiAgICB0cmFuc2l0aW9uOiAwLjlzICFpbXBvcnRhbnQ7XG4gICAgLy90ZXh0LXNoYWRvdzogMCAycHggMCAjMDAwLCAycHggMCAwICMwMDAsIDAgMCAycHggIzAwMDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jYXJkLWhlYWRlcjpob3ZlciB7XG4gICAgY29sb3I6ICNkMTE4MTggIWltcG9ydGFudFxufVxuXG5pb24tY2FyZDpob3ZlciBpbWcge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDExODE4ICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIGltZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xufVxuXG5idXR0b24gaW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogLTYwcHg7XG59XG5cbi5pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xufVxuXG5kaXYgLm51dmVtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTAwcHg7XG4gICAgYm90dG9tOiA5MHB4O1xufVxuXG5kaXYgLnVuZGVyQ29udHJ1Y3Qge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTE1cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvdHRvbTogMTkwcHg7XG59XG5cbmRpdiAucHN5ZHVjayB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xufVxuXG5kaXYgLnBzeWR1Y2s6OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgIWltcG9ydGFudDtcbn1cblxuLmxpbmstbG9nbyB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XG59XG5cbmEge1xuICAgIGZvbnQtc3R5bGU6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm15LWN1c3RvbS1tb2RhbC1jc3MgLm1vZGFsLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDkwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi8qXG4uYmdfdmlkZW8ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHotaW5kZXg6IC0xMDAwO1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1veXJwUHRfZFQ5UScpIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Ki9cbiJdfQ== */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            <img src=\"assets/images/pokepedias.png\" width=\"150px\" alt=\"\">\n        </ion-title>\n        <button slot=\"end\">\n            <img class=\"pokeball\" src=\"assets/images/pokeball.png\" width=\"55px\" alt=\"\">\n        </button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n        <ion-toolbar>\n            <ion-title size=\"large\">Blank</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <div class=\"image\">\n        <img class=\"psyduck\" src=\"assets/images/pokemong.gif\" width=\"100%\" alt=\"\">\n    </div>\n    <div id=\"container\">\n        <img src=\"assets/images/pokepedias.png\">\n        <img src=\"assets/images/psyducks.png\" width=\"200px\">\n    </div>\n\n\n    <!--<iframe id=\"ytplayer\" type=\"text/html\" width=\"720\" height=\"405\" src=\"https://www.youtube.com/embed/oyrpPt_dT9Q\" frameborder=\"0\" allowfullscreen></iframe>-->\n    <!--\n    <div>\n        {{data}}\n        <img [src]=\"image\" width=\"200px\">\n    </div>-->\n    <!--<video width=\"320\" height=\"240\" autoplay loop muted class=\"bg_video\">\n            <source src=\"https://www.youtube.com/watch?v=oyrpPt_dT9Q\" type=\"video/webm\">\n        </video>-->\n    <ion-grid>\n\n        <ion-row>\n            <ion-col size=\"4\">\n                <ion-card (click)=\"getPokemons()\">\n\n                    <img [src]=\"bulbasaur\" width=\"130px\">\n                    <ion-card-header>\n                        Pokemons\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n            <ion-col size=\"4\">\n                <ion-card>\n                    <img [src]=\"charizard\" width=\"130px\">\n                    <ion-card-header>\n                        Evolutions\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n            <ion-col size=\"4\">\n                <ion-card>\n                    <img [src]=\"ampharos\" width=\"130px\">\n                    <ion-card-header>\n                        Items\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"4\">\n                <ion-card>\n                    <img [src]=\"suicune\" width=\"130px\">\n                    <ion-card-header>\n                        Abilities\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n            <ion-col size=\"4\">\n                <ion-card>\n                    <img [src]=\"mewtwo\" width=\"130px\">\n                    <ion-card-header>\n                        Games\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n            <ion-col size=\"4\">\n                <ion-card>\n                    <img [src]=\"onix\" width=\"130px\">\n                    <ion-card-header>\n                        Locations\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n\n\n    </ion-grid>\n    <div class=\"footer\">\n        <img class=\"nuvem\" src=\"assets/images/nuvem.gif\" width=\"230px\" alt=\"\">\n        <p class=\"underContruct\">Site Under Construction</p>\n        <img src=\"assets/images/picachu.png\" width=\"200px\" alt=\"\">\n    </div>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <ion-title>\n            <img src=\"assets/images/pokepedias.png\" width=\"150px\" alt=\"\">\n        </ion-title>\n        <ion-item slot=\"end\">\n            <div class=\"link-logo github\">\n                <a href=\"https://github.com/Jacsonx\" target=\"_blank\">\n                 Created By Jako\n                 </a>\n            </div>\n        </ion-item>\n    </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map