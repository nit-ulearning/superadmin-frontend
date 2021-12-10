(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_tracking_exam-tracking_exam-tracking_module_ts"],{

/***/ 94366:
/*!******************************************************************************!*\
  !*** ./src/app/pages/tracking/exam-tracking/exam-tracking-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamTrackingPageRoutingModule": function() { return /* binding */ ExamTrackingPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _exam_tracking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-tracking.page */ 33020);




const routes = [
    {
        path: '',
        component: _exam_tracking_page__WEBPACK_IMPORTED_MODULE_0__.ExamTrackingPage
    }
];
let ExamTrackingPageRoutingModule = class ExamTrackingPageRoutingModule {
};
ExamTrackingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExamTrackingPageRoutingModule);



/***/ }),

/***/ 13456:
/*!**********************************************************************!*\
  !*** ./src/app/pages/tracking/exam-tracking/exam-tracking.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamTrackingPageModule": function() { return /* binding */ ExamTrackingPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _exam_tracking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-tracking-routing.module */ 94366);
/* harmony import */ var _exam_tracking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-tracking.page */ 33020);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let ExamTrackingPageModule = class ExamTrackingPageModule {
};
ExamTrackingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _exam_tracking_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExamTrackingPageRoutingModule
        ],
        declarations: [_exam_tracking_page__WEBPACK_IMPORTED_MODULE_1__.ExamTrackingPage]
    })
], ExamTrackingPageModule);



/***/ }),

/***/ 33020:
/*!********************************************************************!*\
  !*** ./src/app/pages/tracking/exam-tracking/exam-tracking.page.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamTrackingPage": function() { return /* binding */ ExamTrackingPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_exam_tracking_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./exam-tracking.page.html */ 56658);
/* harmony import */ var _exam_tracking_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-tracking.page.scss */ 69538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let ExamTrackingPage = class ExamTrackingPage {
    constructor(toastController) {
        this.toastController = toastController;
        // Variables start
        this.statusChange = true;
        this.isListLoading = false;
        this.skeleton = [
            {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        ];
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
ExamTrackingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
ExamTrackingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-exam-tracking',
        template: _raw_loader_exam_tracking_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_exam_tracking_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExamTrackingPage);



/***/ }),

/***/ 69538:
/*!**********************************************************************!*\
  !*** ./src/app/pages/tracking/exam-tracking/exam-tracking.page.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLXRyYWNraW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 56658:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/exam-tracking/exam-tracking.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"note-section\">\n        <ion-grid>\n          <ion-row>\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\">\n                <div class=\"note-item note-item2 note-box-primary card-outer\">\n                    <div class=\"card card-box\">\n                        <div class=\"top\">\n                            <div class=\"icon\">\n                                <mat-icon>location_city</mat-icon>\n                            </div>\n                        </div>\n                        <div class=\"bottom\"><b>20</b> Institutes</div>\n                    </div>\n                </div>             \n              </ion-col>\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\">\n                <div class=\"note-item note-item2 note-box-danger card-outer\">\n                  <div class=\"card card-box\">\n                      <div class=\"top\">\n                          <div class=\"icon\">\n                              <mat-icon>emoji_symbols</mat-icon>\n                          </div>\n                      </div>\n                      <div class=\"bottom\"><b>100</b> Exams</div>\n                  </div>\n                </div>             \n              </ion-col>\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\">\n                <div class=\"note-item note-item2 note-box-success card-outer\">\n                  <div class=\"card card-box\">\n                      <div class=\"top\">\n                          <div class=\"icon\">\n                              <mat-icon>people</mat-icon>\n                          </div>\n                      </div>\n                      <div class=\"bottom\"><b>2000</b> Students</div>\n                  </div>\n                </div>             \n              </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div class=\"table-listing\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Exam lists\n                  </div>\n                  <div class=\"card-header-action\">\n                    <!-- <button class=\"border-btn success\" [routerLink]=\"['/', 'add-payment']\" mat-stroked-button>\n                      <mat-icon>add_circle_outline</mat-icon>\n                      Add Payment\n                    </button> -->\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"table-header\">\n                  <div class=\"records-wrapper\">\n                    <ion-item class=\"record\">\n                      <span>Records: </span>\n                      <mat-form-field>\n                        <mat-select value=\"10\">\n                          <mat-option value=\"10\">10</mat-option>\n                          <mat-option value=\"25\">25</mat-option>\n                          <mat-option value=\"50\">50</mat-option>\n                          <mat-option value=\"100\">100</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </ion-item>\n                  </div>\n                  <div class=\"search-wrapper\">\n                    <ion-searchbar showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search item ....\"></ion-searchbar>\n                  </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th class=\"ion-text-start\">\n                                    <div>\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ion-text-start\">\n                                  <div>\n                                      <ion-checkbox color=\"primary\"></ion-checkbox>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Institute Name\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Exam Name\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    No. Of Students\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Total Questions\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Total Scores\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Progress\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Status\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div class=\"ion-justify-content-center\">\n                                    Actions\n                                  </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                          <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\n                            <td colspan=\"100\">\n                              Data is loading...\n                            </td>\n                          </tr>\n                          <tr  [hidden]=\"isListLoading\" *ngFor=\"let item of skeleton; let i = index\">\n                            <td>1</td>\n                            <td>\n                              <ion-checkbox color=\"primary\"></ion-checkbox>\n                            </td>\n                            <td>\n                              <ion-item class=\"name-box\">\n                                <ion-avatar slot=\"start\">\n                                  <img src=\"assets/images/lalit.jpeg\">\n                                </ion-avatar>\n                                <ion-label>\n                                  <h2 class=\"userName\">Lalit Tutorial</h2>\n                                  <h3 class=\"userRole\">Mumbai</h3>\n                                </ion-label>\n                              </ion-item>\n                            </td>\n                            <td>\n                              Exam 1\n                            </td>\n                            <td>\n                              5000\n                            </td>\n                            <td>\n                              2000\n                            </td>\n                            <td>\n                              100\n                            </td>\n                            <td>\n                              <div class=\"progress-wrapper\">\n                                <div class=\"progress-bar progress-bar-width warning\" style=\"width: 60%;\" data-progress-bar-percent=\"100\">\n                                  <div class=\"progress-bar-anim\">60%</div>\n                                </div>\n                              </div>\n                            </td>\n                            <td>\n                              <div class=\"status warning\">\n                                Pending\n                              </div>\n                            </td>\n                            <td>\n                              <div class=\"action ion-text-center\">\n                                <ion-button matTooltip=\"Edit\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'edit')\" [routerLink]=\"['/', 'add-payment']\">\n                                    <mat-icon>edit</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Exam Report\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" [routerLink]=\"['/', 'exam-list']\">\n                                  <mat-icon>view_in_ar</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                                    <mat-icon>delete</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Download pdf\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                                  <mat-icon>picture_as_pdf</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Download excel\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'excel')\">\n                                    <mat-icon>description</mat-icon>\n                                </ion-button>\n                              </div>\n                            </td>\n                          </tr>\n                        </tbody>\n                    </table>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <div class=\"action\">\n                    <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                        <mat-icon>refresh</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                        <mat-icon>delete</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Download pdf\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                      <mat-icon>picture_as_pdf</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Download excel\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'excel')\">\n                        <mat-icon>description</mat-icon>\n                    </ion-button>\n                  </div>\n                  <div>\n                    <ul class=\"pagination\">\n                        <li class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- First -->\n                              <ion-icon name=\"play-skip-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Previous -->\n                              <ion-icon name=\"caret-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li>\n                            Page <a>1</a> of 10\n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Next -->\n                              <ion-icon name=\"caret-forward\"></ion-icon>\n                            </a>\n                        </li>\n                        <li class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Last -->\n                              <ion-icon name=\"play-skip-forward\"></ion-icon>\n                            </a>\n                        </li>\n                    </ul>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tracking_exam-tracking_exam-tracking_module_ts-es2015.js.map