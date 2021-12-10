(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_settings_manage-banners_manage-banners_module_ts"],{

/***/ 29095:
/*!********************************************************************************!*\
  !*** ./src/app/pages/settings/manage-banners/manage-banners-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageBannersPageRoutingModule": function() { return /* binding */ ManageBannersPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _manage_banners_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-banners.page */ 39446);




const routes = [
    {
        path: '',
        component: _manage_banners_page__WEBPACK_IMPORTED_MODULE_0__.ManageBannersPage
    }
];
let ManageBannersPageRoutingModule = class ManageBannersPageRoutingModule {
};
ManageBannersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManageBannersPageRoutingModule);



/***/ }),

/***/ 15276:
/*!************************************************************************!*\
  !*** ./src/app/pages/settings/manage-banners/manage-banners.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageBannersPageModule": function() { return /* binding */ ManageBannersPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _manage_banners_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-banners-routing.module */ 29095);
/* harmony import */ var _manage_banners_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-banners.page */ 39446);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let ManageBannersPageModule = class ManageBannersPageModule {
};
ManageBannersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _manage_banners_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageBannersPageRoutingModule
        ],
        declarations: [_manage_banners_page__WEBPACK_IMPORTED_MODULE_1__.ManageBannersPage]
    })
], ManageBannersPageModule);



/***/ }),

/***/ 39446:
/*!**********************************************************************!*\
  !*** ./src/app/pages/settings/manage-banners/manage-banners.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageBannersPage": function() { return /* binding */ ManageBannersPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_manage_banners_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./manage-banners.page.html */ 45622);
/* harmony import */ var _manage_banners_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-banners.page.scss */ 26299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let ManageBannersPage = class ManageBannersPage {
    constructor(toastController) {
        this.toastController = toastController;
        // Variables start
        this.statusChange = true;
        this.isListLoading = false;
        this.skeleton = [
            {}, {}, {}, {}, {},
        ];
        this.gaugeType = "arch";
        this.gaugeValue = 50;
        this.gaugeLabel = "Questions";
        this.gaugeAppendText = "%";
        this.gaugethick = 10;
        this.gaugeanimate = true;
        this.gaugeduration = 1000;
        this.gaugeforegroundColor = "#f83245";
        this.institute = [
            {
                id: 1,
                name: 'Lalit Tutorial',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'IEM', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'Techno India',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 4,
                name: 'JIS',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
        this.selectedinstitute = this.institute[0].name;
    }
    // Variables end
    ngOnInit() {
    }
    presentToast(_msg, _type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: _msg,
                duration: 2000,
                cssClass: "my-tost-custom-class" + _type,
            });
            toast.present();
        });
    }
    clickActionBtn(_value, _identifier) {
        let status;
        let type;
        this.isListLoading = true;
        if (_identifier == 'status') {
            if (_value == true) {
                this.statusChange = false;
                status = 'Your status is disable';
                type = 'info';
            }
            else {
                this.statusChange = true;
                status = 'Your status is enable';
                type = 'success';
            }
            console.log('statusChange', this.statusChange);
            this.presentToast(status, type);
        }
        else if (_identifier == 'delete') {
            status = 'Deleted successfully';
            type = 'success';
            this.presentToast(status, type);
        }
        else if (_identifier == 'edit') {
            status = 'Your data is editable';
            type = 'success';
            this.presentToast(status, type);
        }
        else if (_identifier == 'pdf') {
            status = 'Downloading PDF file';
            type = 'success';
            this.presentToast(status, type);
        }
        else if (_identifier == 'excel') {
            status = 'Downloading Excel file';
            type = 'success';
            this.presentToast(status, type);
        }
        else if (_identifier == 'refresh') {
            status = 'Data refreshing...';
            type = 'success';
            this.presentToast(status, type);
        }
        this.isListLoading = false;
    }
};
ManageBannersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
ManageBannersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-manage-banners',
        template: _raw_loader_manage_banners_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_manage_banners_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ManageBannersPage);



/***/ }),

/***/ 26299:
/*!************************************************************************!*\
  !*** ./src/app/pages/settings/manage-banners/manage-banners.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtYmFubmVycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 45622:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/manage-banners/manage-banners.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"box-table-header\">\n        <div class=\"search-module\">\n          <div class=\"form-layout\">\n            <div class=\"form-wrapper\">\n              <div class=\"form-item\">\n                <ion-label>Institutes</ion-label>\n                <ng-select #select \n                  [items]=\"institute\"\n                  placeholder=\"Please Select Institutes\"\n                  [searchable]=\"true\" \n                  [(ngModel)]=\"selectedinstitute\" \n                  bindLabel=\"name\" \n                  bindValue=\"name\">\n                </ng-select>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"button-module\">\n          <button class=\"border-btn success\" [routerLink]=\"['/', 'add-banners']\" mat-stroked-button>\n            <mat-icon>add_circle_outline</mat-icon>\n            Add Banner\n          </button>\n        </div>\n      </div>\n\n      <div class=\"card-outer\">\n        <div class=\"card card-box\">\n          <div class=\"card-header\">\n            <div class=\"card-header-tittle\">\n              Banner Lists\n            </div>\n            <div class=\"card-header-action\">\n              <mat-icon>panorama</mat-icon>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\" *ngFor=\"let item of skeleton; let i = index\">\n                  <div class=\"view-data\">\n                    <div class=\"card-outer\">\n                      <div class=\"card card-box\">\n                        <div class=\"card-body\">\n                          <div class=\"card-view-box\">\n                            <div class=\"image-box\">\n                              <img src=\"assets/images/image1.jpg\">\n                            </div>\n                            <div class=\"content-box\">\n                              <p class=\"tittle\">Sales reports for this week</p>\n                              <p class=\"desc\">A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</p>\n                              <div class=\"details\">\n                                <small> Created on: <b>23 Feb 2021</b></small>\n                                <small> Updated By: <b>23 Feb 2021</b></small>\n                              </div>\n                              <div class=\"button-part\">\n                                <button class=\"fill-btn btn-md\" mat-stroked-button>Edit</button>\n                                <div class=\"action\">\n                                  <ion-button matTooltip=\"Enable\" matTooltipPosition=\"above\" size=\"small\" color=\"success\">\n                                    <mat-icon>visibility</mat-icon>\n                                  </ion-button>\n                                </div>\n                                <button class=\"border-btn danger btn-md\" mat-stroked-button>Delete</button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_manage-banners_manage-banners_module_ts-es2015.js.map