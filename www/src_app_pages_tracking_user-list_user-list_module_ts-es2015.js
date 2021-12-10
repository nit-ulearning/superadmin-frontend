(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_tracking_user-list_user-list_module_ts"],{

/***/ 63434:
/*!**********************************************************************!*\
  !*** ./src/app/pages/tracking/user-list/user-list-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPageRoutingModule": function() { return /* binding */ UserListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _user_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.page */ 57501);




const routes = [
    {
        path: '',
        component: _user_list_page__WEBPACK_IMPORTED_MODULE_0__.UserListPage
    }
];
let UserListPageRoutingModule = class UserListPageRoutingModule {
};
UserListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserListPageRoutingModule);



/***/ }),

/***/ 55961:
/*!**************************************************************!*\
  !*** ./src/app/pages/tracking/user-list/user-list.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPageModule": function() { return /* binding */ UserListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list-routing.module */ 63434);
/* harmony import */ var _user_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.page */ 57501);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let UserListPageModule = class UserListPageModule {
};
UserListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserListPageRoutingModule
        ],
        declarations: [_user_list_page__WEBPACK_IMPORTED_MODULE_1__.UserListPage]
    })
], UserListPageModule);



/***/ }),

/***/ 57501:
/*!************************************************************!*\
  !*** ./src/app/pages/tracking/user-list/user-list.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPage": function() { return /* binding */ UserListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-list.page.html */ 86725);
/* harmony import */ var _user_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.page.scss */ 47914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let UserListPage = class UserListPage {
    constructor(toastController) {
        this.toastController = toastController;
        // Variables start
        this.statusChange = true;
        this.isListLoading = false;
        this.skeleton = [
            {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        ];
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
        this.courseItems = [
            {
                id: 1,
                name: 'Course 1',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Course 2', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'Course 3',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 4,
                name: 'Course 4',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
        this.sessionItems = [
            {
                id: 1,
                name: 'Session 1',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Session 2', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'Session 3',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 4,
                name: 'Session 4',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
        this.batchItems = [
            {
                id: 1,
                name: 'Batch 1',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Batch 2', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'Batch 3',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 4,
                name: 'Batch 4',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
        // Advace search open start
        this.searchStatus = false;
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
    openAdvanceSearch(_value, _identifier) {
        if (_value == false) {
            this.searchStatus = true;
        }
        else {
            this.searchStatus = false;
        }
    }
    // Advace search open end
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
UserListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
UserListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-user-list',
        template: _raw_loader_user_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserListPage);



/***/ }),

/***/ 47914:
/*!**************************************************************!*\
  !*** ./src/app/pages/tracking/user-list/user-list.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 86725:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/user-list/user-list.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"table-listing\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                      User List\n                  </div>\n                  <div class=\"card-header-action\">\n                    \n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"advance-search\" *ngIf=\"searchStatus\">\n                  <div class=\"advance-search-inner\">\n                    <div class=\"form-layout\">\n                      <div class=\"form-wrapper\">\n                        <ion-grid>\n                          <ion-row>\n                            <!-- Institute -->\n                            <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"2\">\n                              <div class=\"form-item\">\n                                <ion-label>Institute</ion-label>\n                                <ng-select #select [items]=\"institute\" [searchable]=\"true\" [(ngModel)]=\"selectedinstitute\" bindLabel=\"name\" bindValue=\"name\">\n                                  <ng-template ng-header-tmp>\n                                      <input style=\"width: 100%; line-height: 24px\" type=\"text\" />\n                                  </ng-template>\n                                </ng-select>\n                              </div>\n                            </ion-col>\n\n                            <!-- Course -->\n                            <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"2\">\n                              <div class=\"form-item\">\n                                <ion-label>Courses</ion-label>\n                                <ng-select #select [items]=\"courseItems\" [multiple]=\"true\" [searchable]=\"true\" [(ngModel)]=\"selectedCourse\" bindLabel=\"name\" bindValue=\"name\">\n                                  <ng-template ng-header-tmp>\n                                      <input style=\"width: 100%; line-height: 24px\" type=\"text\" />\n                                  </ng-template>\n                                </ng-select>\n                              </div>\n                            </ion-col>\n\n                            <!-- Sessions -->\n                            <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"2\">\n                              <div class=\"form-item\">\n                                <ion-label>Sessions</ion-label>\n                                <ng-select #select [items]=\"sessionItems\" [multiple]=\"true\" [searchable]=\"true\" bindLabel=\"name\" bindValue=\"name\">\n                                  <ng-template ng-header-tmp>\n                                      <input style=\"width: 100%; line-height: 24px\" type=\"text\" />\n                                  </ng-template>\n                                </ng-select>\n                              </div>\n                            </ion-col>\n\n                            <!-- Batchs -->\n                            <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"2\">\n                              <div class=\"form-item\">\n                                <ion-label>Batchs</ion-label>\n                                <ng-select #select [items]=\"batchItems\" [multiple]=\"true\" [searchable]=\"true\" [(ngModel)]=\"selectedBatch\" bindLabel=\"name\" bindValue=\"name\">\n                                  <ng-template ng-header-tmp>\n                                      <input style=\"width: 100%; line-height: 24px\" type=\"text\" />\n                                  </ng-template>\n                                </ng-select>\n                              </div>\n                            </ion-col>\n                            <!-- Enroll Number -->\n                            <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"2\">\n                              <div class=\"form-item\">\n                                <ion-label>Enroll Number</ion-label>\n                                <ion-input name=\"name\" type=\"number\"></ion-input>\n                              </div>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                      </div>\n                      <div class=\"form-footer\">\n                        <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" mat-stroked-button (click)=\"openAdvanceSearch(searchStatus, 'search')\">Cancel</button>\n                        <button class=\"fill-btn btn-md\" mat-stroked-button [routerLink]=\"['/', 'user-list']\">Search</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"table-header\">\n                  <div class=\"records-wrapper\">\n                    <ion-item class=\"record\">\n                      <span>Records: </span>\n                      <mat-form-field>\n                        <mat-select value=\"10\">\n                          <mat-option value=\"10\">10</mat-option>\n                          <mat-option value=\"25\">25</mat-option>\n                          <mat-option value=\"50\">50</mat-option>\n                          <mat-option value=\"100\">100</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </ion-item>\n                  </div>\n                  <div class=\"search-wrapper\">\n                    <ion-searchbar showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search item ....\"></ion-searchbar>\n                    <div class=\"action\">\n                      <ion-button matTooltip=\"Advance search\" matTooltipPosition=\"above\" size=\"small\" (click)=\"openAdvanceSearch(searchStatus, 'search')\">\n                          <mat-icon>manage_search</mat-icon>\n                      </ion-button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th class=\"ion-text-start\">\n                                    <div>\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ion-text-start\">\n                                  <div>\n                                      <ion-checkbox color=\"primary\"></ion-checkbox>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                      Name\n                                      <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                      Enrolment No\n                                      <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Contact Number\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Email\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Address\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    City\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    State\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Country\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Pin\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Status\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div class=\"ion-justify-content-center\">\n                                    Actions\n                                  </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                          <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\n                            <td colspan=\"100\">\n                              Data is loading...\n                            </td>\n                          </tr>\n                          <tr  [hidden]=\"isListLoading\" *ngFor=\"let item of skeleton; let i = index\">\n                            <td>1</td>\n                            <td>\n                              <ion-checkbox color=\"primary\"></ion-checkbox>\n                            </td>\n                            <td>\n                              <ion-item class=\"name-box\">\n                                <ion-avatar slot=\"start\">\n                                  <img src=\"assets/images/avatar3.jpg\">\n                                </ion-avatar>\n                                <ion-label>\n                                  <h2 class=\"userName\">Regan Norris</h2>\n                                  <h3 class=\"userRole\">Senior Project Manager</h3>\n                                </ion-label>\n                              </ion-item>\n                            </td>\n                            <td>\n                              12000151101\n                            </td>\n                            <td>\n                              +91 91258 96558\n                            </td>\n                            <td>\n                              subhajit@ulearn.in\n                            </td>\n                            <td>\n                              148/7, Nazrul Street\n                            </td>\n                            <td>\n                              Kolkata\n                            </td>\n                            <td>\n                              West bengal\n                            </td>\n                            <td>\n                              India\n                            </td>\n                            <td>\n                              700088\n                            </td>\n                            <td>\n                              <div class=\"status warning\">\n                                  Pending\n                              </div>\n                            </td> \n                            <td>\n                              <div class=\"action ion-text-center\">\n                                <ion-button matTooltip=\"View\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" [routerLink]=\"['/', 'user-details']\">\n                                  <mat-icon>view_in_ar</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                                    <mat-icon>delete</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"PDF\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                                    <mat-icon>picture_as_pdf</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"EXCEL\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'excel')\">\n                                    <mat-icon>description</mat-icon>\n                                </ion-button>\n                              </div>\n                            </td>\n                          </tr>\n                        </tbody>\n                    </table>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"action\">\n                  <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                      <mat-icon>refresh</mat-icon>\n                  </ion-button>\n                  <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                      <mat-icon>delete</mat-icon>\n                  </ion-button>\n                  <ion-button matTooltip=\"PDF\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                      <mat-icon>picture_as_pdf</mat-icon>\n                  </ion-button>\n                  <ion-button matTooltip=\"Excel\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'excel')\">\n                      <mat-icon>description</mat-icon>\n                  </ion-button>\n                </div>\n                <div>\n                  <ul class=\"pagination\">\n                      <li class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\n                          <a>\n                            <!-- First -->\n                            <ion-icon name=\"play-skip-back\"></ion-icon>\n                          </a>\n                      </li>\n                      <li class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\n                          <a>\n                            <!-- Previous -->\n                            <ion-icon name=\"caret-back\"></ion-icon>\n                          </a>\n                      </li>\n                      <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                      <li>\n                          Page <a>1</a> of 10\n                      </li>\n                      <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                      <li class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\n                          <a>\n                            <!-- Next -->\n                            <ion-icon name=\"caret-forward\"></ion-icon>\n                          </a>\n                      </li>\n                      <li class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\n                          <a>\n                            <!-- Last -->\n                            <ion-icon name=\"play-skip-forward\"></ion-icon>\n                          </a>\n                      </li>\n                  </ul>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tracking_user-list_user-list_module_ts-es2015.js.map