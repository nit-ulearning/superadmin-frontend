(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_license_license-view_license-view_module_ts"],{

/***/ 35073:
/*!***************************************************************************!*\
  !*** ./src/app/pages/license/license-view/license-view-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenseViewPageRoutingModule": function() { return /* binding */ LicenseViewPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _license_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./license-view.page */ 34596);




const routes = [
    {
        path: '',
        component: _license_view_page__WEBPACK_IMPORTED_MODULE_0__.LicenseViewPage
    }
];
let LicenseViewPageRoutingModule = class LicenseViewPageRoutingModule {
};
LicenseViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LicenseViewPageRoutingModule);



/***/ }),

/***/ 51614:
/*!*******************************************************************!*\
  !*** ./src/app/pages/license/license-view/license-view.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenseViewPageModule": function() { return /* binding */ LicenseViewPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _license_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./license-view-routing.module */ 35073);
/* harmony import */ var _license_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./license-view.page */ 34596);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let LicenseViewPageModule = class LicenseViewPageModule {
};
LicenseViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _license_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.LicenseViewPageRoutingModule
        ],
        declarations: [_license_view_page__WEBPACK_IMPORTED_MODULE_1__.LicenseViewPage]
    })
], LicenseViewPageModule);



/***/ }),

/***/ 34596:
/*!*****************************************************************!*\
  !*** ./src/app/pages/license/license-view/license-view.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenseViewPage": function() { return /* binding */ LicenseViewPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_license_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./license-view.page.html */ 99314);
/* harmony import */ var _license_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./license-view.page.scss */ 70823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let LicenseViewPage = class LicenseViewPage {
    constructor() { }
    ngOnInit() {
    }
};
LicenseViewPage.ctorParameters = () => [];
LicenseViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-license-view',
        template: _raw_loader_license_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_license_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LicenseViewPage);



/***/ }),

/***/ 70823:
/*!*******************************************************************!*\
  !*** ./src/app/pages/license/license-view/license-view.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWNlbnNlLXZpZXcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 99314:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/license/license-view/license-view.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>license-view</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_license_license-view_license-view_module_ts-es2015.js.map