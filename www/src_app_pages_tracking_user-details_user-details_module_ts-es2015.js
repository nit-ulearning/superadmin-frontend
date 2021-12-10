(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_tracking_user-details_user-details_module_ts"],{

/***/ 33693:
/*!****************************************************************************!*\
  !*** ./src/app/pages/tracking/user-details/user-details-routing.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsPageRoutingModule": function() { return /* binding */ UserDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-details.page */ 17494);




const routes = [
    {
        path: '',
        component: _user_details_page__WEBPACK_IMPORTED_MODULE_0__.UserDetailsPage
    }
];
let UserDetailsPageRoutingModule = class UserDetailsPageRoutingModule {
};
UserDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserDetailsPageRoutingModule);



/***/ }),

/***/ 75459:
/*!********************************************************************!*\
  !*** ./src/app/pages/tracking/user-details/user-details.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsPageModule": function() { return /* binding */ UserDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _user_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-details-routing.module */ 33693);
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-details.page */ 17494);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let UserDetailsPageModule = class UserDetailsPageModule {
};
UserDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _user_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserDetailsPageRoutingModule
        ],
        declarations: [_user_details_page__WEBPACK_IMPORTED_MODULE_1__.UserDetailsPage]
    })
], UserDetailsPageModule);



/***/ }),

/***/ 17494:
/*!******************************************************************!*\
  !*** ./src/app/pages/tracking/user-details/user-details.page.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsPage": function() { return /* binding */ UserDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-details.page.html */ 13041);
/* harmony import */ var _user_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-details.page.scss */ 89727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let UserDetailsPage = class UserDetailsPage {
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
        this.chartOptions = {
            series: [21, 9, 5],
            chart: {
                width: 360,
                type: "pie"
            },
            labels: ["Marks Obtained", "Marks Deducted", "Marks Left"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ]
        };
        this.chartOptions2 = {
            series: [
                {
                    name: "Best",
                    data: [44, 55, 57]
                },
                {
                    name: "Average",
                    data: [76, 85, 101]
                },
                {
                    name: "Worst",
                    data: [35, 41, 36]
                }
            ],
            chart: {
                type: "bar",
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"]
            },
            xaxis: {
                categories: [
                    "Correct",
                    "Inorrect",
                    "Unattempted"
                ]
            },
            yaxis: {
                title: {
                    text: "$ (thousands)"
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands";
                    }
                }
            }
        };
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
UserDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
UserDetailsPage.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ["chart",] }]
};
UserDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-user-details',
        template: _raw_loader_user_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserDetailsPage);



/***/ }),

/***/ 89727:
/*!********************************************************************!*\
  !*** ./src/app/pages/tracking/user-details/user-details.page.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 13041:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/user-details/user-details.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"card-outer\">\n        <div class=\"card card-box\">\n          <div class=\"card-body\">\n            <div class=\"view-data\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"3\">\n                    <div class=\"profile-img\">\n                      <div class=\"img-inner\">\n                        <img src=\"assets/images/people-1.jpg\">\n                      </div>\n                    </div>\n                  </ion-col>\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"8\"  size-lg=\"9\">\n                    <ion-row class=\"border\">\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                        <div class=\"view-element\">\n                          <mat-icon class=\"colorCyan\">person</mat-icon>\n                          <span class=\"text-tittle\">Name :</span>\n                          <span class=\"text-content\">Ahadul Islam</span>\n                        </div>\n                      </ion-col>\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                        <div class=\"view-element\">\n                          <mat-icon class=\"colorBlue\">phone_iphone</mat-icon>\n                          <span class=\"text-tittle\">Mobile :</span>\n                          <span class=\"text-content\">+91 90957 12589</span>\n                        </div>\n                      </ion-col>\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                        <div class=\"view-element\">\n                          <mat-icon class=\"colorRed\">mail</mat-icon>\n                          <span class=\"text-tittle\">Email :</span>\n                          <span class=\"text-content\">ahadul@ulearn.com</span>\n                        </div>\n                      </ion-col>\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                        <div class=\"view-element\">\n                          <mat-icon class=\"colorLightBlue\">admin_panel_settings</mat-icon>\n                          <span class=\"text-tittle\">User Name :</span>\n                          <span class=\"text-content\">ahadul101</span>\n                        </div>\n                      </ion-col>\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                        <div class=\"view-element\">\n                          <mat-icon class=\"colorMaroon\">verified</mat-icon>\n                          <span class=\"text-tittle\">Emp No :</span>\n                          <span class=\"text-content\">10000511020205</span>\n                        </div>\n                      </ion-col>\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                        <div class=\"view-element\">\n                          <mat-icon class=\"colorLightGreen\">my_location</mat-icon>\n                          <span class=\"text-tittle\">Address :</span>\n                          <span class=\"text-content\">148/2, Dunlop</span>\n                        </div>\n                      </ion-col>\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                        <div class=\"view-element\">\n                          <mat-icon class=\"colorLime\">room</mat-icon>\n                          <span class=\"text-tittle\">City :</span>\n                          <span class=\"text-content\">Kolkata</span>\n                        </div>\n                      </ion-col>\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                        <div class=\"view-element\">\n                          <mat-icon class=\"colorOlive\">explore</mat-icon>\n                          <span class=\"text-tittle\">State :</span>\n                          <span class=\"text-content\">West Bengal</span>\n                        </div>\n                      </ion-col>\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                        <div class=\"view-element\">\n                          <mat-icon class=\"colorOrange\">public</mat-icon>\n                          <span class=\"text-tittle\">Country :</span>\n                          <span class=\"text-content\">India</span>\n                        </div>\n                      </ion-col>\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                        <div class=\"view-element\">\n                          <mat-icon class=\"colorMaroon\">pin_drop</mat-icon>\n                          <span class=\"text-tittle\">Pin :</span>\n                          <span class=\"text-content\">700108</span>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n                \n              </ion-grid>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"note-section\">\n        <ion-grid>\n            <ion-row>\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\n                <div class=\"note-item card-outer note-box-primary\">\n                    <div class=\"card card-box\">\n                        <div class=\"top\">\n                            <div class=\"icon\">\n                                <mat-icon>ballot</mat-icon>\n                            </div>\n                            <div class=\"text\">Attend Exams</div>\n                        </div>\n                        <div class=\"middle\">\n                            <mat-icon>arrow_downward</mat-icon>\n                            <div>100</div>\n                        </div>\n                        <div class=\"bottom\"><b>+36%</b> from last month</div>\n                    </div>\n                </div>             \n              </ion-col>\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\n                <div class=\"note-item card-outer note-box-success\">\n                    <div class=\"card card-box\">\n                        <div class=\"top\">\n                            <div class=\"icon\">\n                                <mat-icon>flaky</mat-icon>\n                            </div>\n                            <div class=\"text\">Average marks</div>\n                        </div>\n                        <div class=\"middle\">\n                            <mat-icon>arrow_upward</mat-icon>\n                            <div>436</div>\n                        </div>\n                        <div class=\"bottom\"><b>+65%</b> from last month</div>\n                    </div>\n                </div>             \n              </ion-col>\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\n                <div class=\"note-item card-outer note-box-warning \">\n                    <div class=\"card card-box\">\n                        <div class=\"top\">\n                            <div class=\"icon\">\n                                <mat-icon>pending_actions</mat-icon>\n                            </div>\n                            <div class=\"text\">Average Time/Question</div>\n                        </div>\n                        <div class=\"middle\">\n                            <mat-icon>arrow_upward</mat-icon>\n                            <div>433</div>\n                        </div>\n                        <div class=\"bottom\"><b>+32%</b> from last month</div>\n                    </div>\n                </div>             \n              </ion-col>\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\n                  <div class=\"note-item card-outer note-box-danger\">\n                      <div class=\"card card-box\">\n                          <div class=\"top\">\n                              <div class=\"icon\">\n                                  <mat-icon>av_timer</mat-icon>\n                              </div>\n                              <div class=\"text\">Worst Time per Question</div>\n                          </div>\n                          <div class=\"middle\">\n                              <mat-icon>arrow_downward</mat-icon>\n                              <div>50</div>\n                          </div>\n                          <div class=\"bottom\"><b>+22%</b> from last month</div>\n                      </div>\n                  </div>             \n              </ion-col>\n              \n            </ion-row>\n        </ion-grid>\n      </div>\n\n      <div class=\"table-listing\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Exam lists\n                  </div>\n                  <div class=\"card-header-action\">\n                    <!-- <button class=\"border-btn success\" [routerLink]=\"['/', 'add-payment']\" mat-stroked-button>\n                      <mat-icon>add_circle_outline</mat-icon>\n                      Add Payment\n                    </button> -->\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"table-header\">\n                  <div class=\"records-wrapper\">\n                    <ion-item class=\"record\">\n                      <span>Records: </span>\n                      <mat-form-field>\n                        <mat-select value=\"10\">\n                          <mat-option value=\"10\">10</mat-option>\n                          <mat-option value=\"25\">25</mat-option>\n                          <mat-option value=\"50\">50</mat-option>\n                          <mat-option value=\"100\">100</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </ion-item>\n                  </div>\n                  <div class=\"search-wrapper\">\n                    <ion-searchbar showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search item ....\"></ion-searchbar>\n                  </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th class=\"ion-text-start\">\n                                    <div>\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ion-text-start\">\n                                  <div>\n                                      <ion-checkbox color=\"primary\"></ion-checkbox>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Exam Name\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    No. Of Students\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Total Questions\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Total Scores\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Progress\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Status\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div class=\"ion-justify-content-center\">\n                                    Actions\n                                  </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                          <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\n                            <td colspan=\"100\">\n                              Data is loading...\n                            </td>\n                          </tr>\n                          <tr  [hidden]=\"isListLoading\" *ngFor=\"let item of skeleton; let i = index\">\n                            <td>1</td>\n                            <td>\n                              <ion-checkbox color=\"primary\"></ion-checkbox>\n                            </td>\n                            <td>\n                              Exam 1\n                            </td>\n                            <td>\n                              5000\n                            </td>\n                            <td>\n                              2000\n                            </td>\n                            <td>\n                              100\n                            </td>\n                            <td>\n                              <div class=\"progress-wrapper\">\n                                <div class=\"progress-bar progress-bar-width warning\" style=\"width: 60%;\" data-progress-bar-percent=\"100\">\n                                  <div class=\"progress-bar-anim\">60%</div>\n                                </div>\n                              </div>\n                            </td>\n                            <td>\n                              <div class=\"status success\">\n                                Complete\n                              </div>\n                            </td>\n                            <td>\n                              <div class=\"action ion-text-center\">\n                                <ion-button matTooltip=\"Exam Report\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" [routerLink]=\"['/', 'tracking-view']\">\n                                  <mat-icon>view_in_ar</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                                    <mat-icon>delete</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Download pdf\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                                  <mat-icon>picture_as_pdf</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Download excel\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'excel')\">\n                                    <mat-icon>description</mat-icon>\n                                </ion-button>\n                              </div>\n                            </td>\n                          </tr>\n                        </tbody>\n                    </table>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <div class=\"action\">\n                    <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                        <mat-icon>refresh</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                        <mat-icon>delete</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Download pdf\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                      <mat-icon>picture_as_pdf</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Download excel\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'excel')\">\n                        <mat-icon>description</mat-icon>\n                    </ion-button>\n                  </div>\n                  <div>\n                    <ul class=\"pagination\">\n                        <li class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- First -->\n                              <ion-icon name=\"play-skip-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Previous -->\n                              <ion-icon name=\"caret-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li>\n                            Page <a>1</a> of 10\n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Next -->\n                              <ion-icon name=\"caret-forward\"></ion-icon>\n                            </a>\n                        </li>\n                        <li class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Last -->\n                              <ion-icon name=\"play-skip-forward\"></ion-icon>\n                            </a>\n                        </li>\n                    </ul>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tracking_user-details_user-details_module_ts-es2015.js.map