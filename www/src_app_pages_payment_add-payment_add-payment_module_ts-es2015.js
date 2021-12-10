(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_payment_add-payment_add-payment_module_ts"],{

/***/ 62782:
/*!*************************************************************************!*\
  !*** ./src/app/pages/payment/add-payment/add-payment-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPaymentPageRoutingModule": function() { return /* binding */ AddPaymentPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-payment.page */ 61982);




const routes = [
    {
        path: '',
        component: _add_payment_page__WEBPACK_IMPORTED_MODULE_0__.AddPaymentPage
    }
];
let AddPaymentPageRoutingModule = class AddPaymentPageRoutingModule {
};
AddPaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddPaymentPageRoutingModule);



/***/ }),

/***/ 86757:
/*!*****************************************************************!*\
  !*** ./src/app/pages/payment/add-payment/add-payment.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPaymentPageModule": function() { return /* binding */ AddPaymentPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-payment-routing.module */ 62782);
/* harmony import */ var _add_payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-payment.page */ 61982);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let AddPaymentPageModule = class AddPaymentPageModule {
};
AddPaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _add_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddPaymentPageRoutingModule
        ],
        declarations: [_add_payment_page__WEBPACK_IMPORTED_MODULE_1__.AddPaymentPage]
    })
], AddPaymentPageModule);



/***/ }),

/***/ 61982:
/*!***************************************************************!*\
  !*** ./src/app/pages/payment/add-payment/add-payment.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPaymentPage": function() { return /* binding */ AddPaymentPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_payment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-payment.page.html */ 6442);
/* harmony import */ var _add_payment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-payment.page.scss */ 57049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let AddPaymentPage = class AddPaymentPage {
    constructor(toastController) {
        this.toastController = toastController;
        this.model = {};
        this.institutes = [
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
        this.paymentMethod = [
            {
                id: 1,
                name: 'Cash',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Cheque', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'UPI',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 4,
                name: 'Net Banking',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
        this.packages = [
            {
                id: 1,
                name: 'Bronze Package',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Silver Package', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'Gold Package',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 4,
                name: 'Platinum Package',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
        this.paymentStatus = [
            {
                id: 1,
                name: 'Complete',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Pending', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'Hold',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 4,
                name: 'Incomplete',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
    }
    ngOnInit() {
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Your data have been saved.',
                duration: 2000,
                cssClass: "my-tost-custom-classsuccess",
            });
            toast.present();
        });
    }
};
AddPaymentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
AddPaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-payment',
        template: _raw_loader_add_payment_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_payment_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddPaymentPage);



/***/ }),

/***/ 57049:
/*!*****************************************************************!*\
  !*** ./src/app/pages/payment/add-payment/add-payment.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-md {\n  padding: 0.53rem 1.3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLXBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1tZCB7XG4gICAgcGFkZGluZzogLjUzcmVtIDEuM3JlbSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ 6442:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/add-payment/add-payment.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"form-layout\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Payment Add\n                  </div>\n                  <div class=\"card-header-action\">\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-wrapper\">\n                  <ion-grid>\n                    <ion-row>\n\n                      <!-- Institute -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                         <mat-form-field appearance=\"outline\">\n                            <mat-label>Institute</mat-label>\n                            <mat-select [(ngModel)]=\"model.selectedmailType\" name=\"institute\">\n                              <mat-option *ngFor=\"let institute of institutes\" [value]=\"institute.id\">\n                                {{institute.name}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Package -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Packages</mat-label>\n                            <mat-select [(ngModel)]=\"model.selectedpackage\" name=\"packages\">\n                              <mat-option *ngFor=\"let package of packages\" [value]=\"package.id\">\n                                {{package.name}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Payment Method-->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Payment Method</mat-label>\n                            <mat-select [(ngModel)]=\"model.selectedpayment\" name=\"paymentMethod\">\n                              <mat-option *ngFor=\"let payment of paymentMethod\" [value]=\"payment.id\">\n                                {{payment.name}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      \n                      <!-- Amount -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Amount</mat-label>\n                            <input matInput placeholder=\"Amount\" type=\"number\" [(ngModel)]=\"model.amount\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Payment Details -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Payment Details</mat-label>\n                            <input matInput placeholder=\"Amount\" type=\"text\" [(ngModel)]=\"model.paymentdetails\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Payment Status -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                         <mat-form-field appearance=\"outline\">\n                            <mat-label>Payment Status</mat-label>\n                            <mat-select [(ngModel)]=\"model.selectedpaymentstatus\" name=\"paymentstatus\">\n                              <mat-option *ngFor=\"let paymentstatus of paymentStatus\" [value]=\"paymentstatus.id\">\n                                {{paymentstatus.name}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Payment date -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Payment date</mat-label>\n                            <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"model.paymentdate\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Next due date -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Next due date</mat-label>\n                            <input matInput [matDatepicker]=\"endDatePicker\" [(ngModel)]=\"model.nextduedate\">\n                            <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\n                            <mat-datepicker #endDatePicker></mat-datepicker>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <div>\n                      <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" mat-stroked-button>Cancel</button>\n                      <button class=\"fill-btn btn-md\" (click)=\"presentToast()\" mat-stroked-button [routerLink]=\"['/', 'payment-list']\">Save</button>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payment_add-payment_add-payment_module_ts-es2015.js.map