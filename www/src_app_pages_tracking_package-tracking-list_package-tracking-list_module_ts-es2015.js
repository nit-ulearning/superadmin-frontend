(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_tracking_package-tracking-list_package-tracking-list_module_ts"],{

/***/ 67612:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tracking/package-tracking-list/package-tracking-list-routing.module.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageTrackingListPageRoutingModule": function() { return /* binding */ PackageTrackingListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _package_tracking_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package-tracking-list.page */ 900);




const routes = [
    {
        path: '',
        component: _package_tracking_list_page__WEBPACK_IMPORTED_MODULE_0__.PackageTrackingListPage
    }
];
let PackageTrackingListPageRoutingModule = class PackageTrackingListPageRoutingModule {
};
PackageTrackingListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PackageTrackingListPageRoutingModule);



/***/ }),

/***/ 21806:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tracking/package-tracking-list/package-tracking-list.module.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageTrackingListPageModule": function() { return /* binding */ PackageTrackingListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _package_tracking_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package-tracking-list-routing.module */ 67612);
/* harmony import */ var _package_tracking_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package-tracking-list.page */ 900);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let PackageTrackingListPageModule = class PackageTrackingListPageModule {
};
PackageTrackingListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _package_tracking_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.PackageTrackingListPageRoutingModule
        ],
        declarations: [_package_tracking_list_page__WEBPACK_IMPORTED_MODULE_1__.PackageTrackingListPage]
    })
], PackageTrackingListPageModule);



/***/ }),

/***/ 900:
/*!************************************************************************************!*\
  !*** ./src/app/pages/tracking/package-tracking-list/package-tracking-list.page.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageTrackingListPage": function() { return /* binding */ PackageTrackingListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_package_tracking_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./package-tracking-list.page.html */ 41904);
/* harmony import */ var _package_tracking_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package-tracking-list.page.scss */ 12803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let PackageTrackingListPage = class PackageTrackingListPage {
    constructor(toastController) {
        this.toastController = toastController;
        // Variables start
        this.statusChange = true;
        this.isListLoading = false;
        this.skeleton = [
            {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        ];
        this.gaugeType = "arch";
        this.gaugeValue = 50;
        this.gaugeLabel = "Questions";
        this.gaugeAppendText = "%";
        this.gaugethick = 10;
        this.gaugeanimate = true;
        this.gaugeduration = 1000;
        this.gaugeforegroundColor = "#f83245";
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
PackageTrackingListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
PackageTrackingListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-package-tracking-list',
        template: _raw_loader_package_tracking_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_package_tracking_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PackageTrackingListPage);



/***/ }),

/***/ 12803:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tracking/package-tracking-list/package-tracking-list.page.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWNrYWdlLXRyYWNraW5nLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 41904:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/package-tracking-list/package-tracking-list.page.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"note-section\">\n        <ion-grid>\n            <ion-row>\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\n                <div class=\"note-item card-outer note-box-primary\">\n                    <div class=\"card card-box\">\n                        <div class=\"top\">\n                            <div class=\"icon\">\n                                <mat-icon>loyalty</mat-icon>\n                            </div>\n                            <div class=\"text\">Active packages</div>\n                        </div>\n                        <div class=\"middle\">\n                            <mat-icon>arrow_downward</mat-icon>\n                            <div>5</div>\n                        </div>\n                        <div class=\"bottom\"><b>+36%</b> from last month</div>\n                    </div>\n                </div>             \n              </ion-col>\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\n                <div class=\"note-item card-outer note-box-success\">\n                    <div class=\"card card-box\">\n                        <div class=\"top\">\n                            <div class=\"icon\">\n                                <mat-icon>people</mat-icon>\n                            </div>\n                            <div class=\"text\">Maximum students</div>\n                        </div>\n                        <div class=\"middle\">\n                            <mat-icon>arrow_upward</mat-icon>\n                            <div>436</div>\n                        </div>\n                        <div class=\"bottom\"><b>+65%</b> from last month</div>\n                    </div>\n                </div>             \n              </ion-col>\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\n                <div class=\"note-item card-outer note-box-warning \">\n                    <div class=\"card card-box\">\n                        <div class=\"top\">\n                            <div class=\"icon\">\n                                <mat-icon>pending_actions</mat-icon>\n                            </div>\n                            <div class=\"text\">Tests remaining</div>\n                        </div>\n                        <div class=\"middle\">\n                            <mat-icon>arrow_upward</mat-icon>\n                            <div>433</div>\n                        </div>\n                        <div class=\"bottom\"><b>+32%</b> from last month</div>\n                    </div>\n                </div>             \n              </ion-col>\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\n                  <div class=\"note-item card-outer note-box-danger\">\n                      <div class=\"card card-box\">\n                          <div class=\"top\">\n                              <div class=\"icon\">\n                                  <mat-icon>insert_invitation</mat-icon>\n                              </div>\n                              <div class=\"text\">Days remaining</div>\n                          </div>\n                          <div class=\"middle\">\n                              <mat-icon>arrow_downward</mat-icon>\n                              <div>50</div>\n                          </div>\n                          <div class=\"bottom\"><b>+22%</b> from last month</div>\n                      </div>\n                  </div>             \n              </ion-col>\n              \n            </ion-row>\n        </ion-grid>\n      </div>\n      <div class=\"table-listing\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Package lists\n                  </div>\n                  <div class=\"card-header-action\">\n                    <!-- <button class=\"border-btn success\" [routerLink]=\"['/', 'add-payment']\" mat-stroked-button>\n                      <mat-icon>add_circle_outline</mat-icon>\n                      Add Payment\n                    </button> -->\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"table-header\">\n                  <div class=\"records-wrapper\">\n                    <ion-item class=\"record\">\n                      <span>Records: </span>\n                      <mat-form-field>\n                        <mat-select value=\"10\">\n                          <mat-option value=\"10\">10</mat-option>\n                          <mat-option value=\"25\">25</mat-option>\n                          <mat-option value=\"50\">50</mat-option>\n                          <mat-option value=\"100\">100</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </ion-item>\n                  </div>\n                  <div class=\"search-wrapper\">\n                    <ion-searchbar showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search item ....\"></ion-searchbar>\n                  </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th class=\"ion-text-start\">\n                                    <div>\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ion-text-start\">\n                                  <div>\n                                      <ion-checkbox color=\"primary\"></ion-checkbox>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Package Name\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Duration\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Activation Date\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Exp. Date\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Students Limit\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Tests Limit\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Tests Remaining\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Cost\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Payment Type\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    License For\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Progress\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Status\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div class=\"ion-justify-content-center\">\n                                    Actions\n                                  </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                          <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\n                            <td colspan=\"100\">\n                              Data is loading...\n                            </td>\n                          </tr>\n                          <tr  [hidden]=\"isListLoading\" *ngFor=\"let item of skeleton; let i = index\">\n                            <td>1</td>\n                            <td>\n                              <ion-checkbox color=\"primary\"></ion-checkbox>\n                            </td>\n                            <td>\n                              VIP Package\n                            </td>\n                            <td>\n                              1 year 6 months\n                            </td>\n                            <td>\n                              18 Aug 2021\n                            </td>\n                            <td>\n                              17 Dec 2022 \n                            </td>\n                            <td>\n                              2000\n                            </td>\n                            <td>\n                              500\n                            </td>\n                            <td>\n                              300\n                            </td>\n                            <td>\n                              ₹ 2000\n                            </td>\n                            <td>\n                              Monthly\n                            </td>\n                            <td>\n                              Online users\n                            </td>\n                            <td>\n                              <div class=\"progress-wrapper\">\n                                <div class=\"progress-bar progress-bar-width warning\" style=\"width: 60%;\" data-progress-bar-percent=\"100\">\n                                  <div class=\"progress-bar-anim\">60%</div>\n                                </div>\n                              </div>\n                            </td>\n                            <td>\n                              <div class=\"status warning\">\n                                Running\n                              </div>\n                            </td>\n                            <td>\n                              <div class=\"action ion-text-center\">\n                                <ion-button matTooltip=\"Exam Report\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" [routerLink]=\"['/', 'package-details']\">\n                                  <mat-icon>view_in_ar</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                                    <mat-icon>delete</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Download pdf\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                                  <mat-icon>picture_as_pdf</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Download excel\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'excel')\">\n                                    <mat-icon>description</mat-icon>\n                                </ion-button>\n                              </div>\n                            </td>\n                          </tr>\n                        </tbody>\n                    </table>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <div class=\"action\">\n                    <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                        <mat-icon>refresh</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                        <mat-icon>delete</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Download pdf\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                      <mat-icon>picture_as_pdf</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Download excel\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'excel')\">\n                        <mat-icon>description</mat-icon>\n                    </ion-button>\n                  </div>\n                  <div>\n                    <ul class=\"pagination\">\n                        <li class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- First -->\n                              <ion-icon name=\"play-skip-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Previous -->\n                              <ion-icon name=\"caret-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li>\n                            Page <a>1</a> of 10\n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Next -->\n                              <ion-icon name=\"caret-forward\"></ion-icon>\n                            </a>\n                        </li>\n                        <li class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Last -->\n                              <ion-icon name=\"play-skip-forward\"></ion-icon>\n                            </a>\n                        </li>\n                    </ul>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tracking_package-tracking-list_package-tracking-list_module_ts-es2015.js.map