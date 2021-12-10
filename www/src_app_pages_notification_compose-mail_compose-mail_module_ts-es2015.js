(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_notification_compose-mail_compose-mail_module_ts"],{

/***/ 26486:
/*!********************************************************************************!*\
  !*** ./src/app/pages/notification/compose-mail/compose-mail-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComposeMailPageRoutingModule": function() { return /* binding */ ComposeMailPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _compose_mail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose-mail.page */ 64294);




const routes = [
    {
        path: '',
        component: _compose_mail_page__WEBPACK_IMPORTED_MODULE_0__.ComposeMailPage
    }
];
let ComposeMailPageRoutingModule = class ComposeMailPageRoutingModule {
};
ComposeMailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComposeMailPageRoutingModule);



/***/ }),

/***/ 71099:
/*!************************************************************************!*\
  !*** ./src/app/pages/notification/compose-mail/compose-mail.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComposeMailPageModule": function() { return /* binding */ ComposeMailPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _compose_mail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose-mail-routing.module */ 26486);
/* harmony import */ var _compose_mail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose-mail.page */ 64294);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let ComposeMailPageModule = class ComposeMailPageModule {
};
ComposeMailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _compose_mail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComposeMailPageRoutingModule
        ],
        declarations: [_compose_mail_page__WEBPACK_IMPORTED_MODULE_1__.ComposeMailPage]
    })
], ComposeMailPageModule);



/***/ }),

/***/ 64294:
/*!**********************************************************************!*\
  !*** ./src/app/pages/notification/compose-mail/compose-mail.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComposeMailPage": function() { return /* binding */ ComposeMailPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_compose_mail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./compose-mail.page.html */ 67827);
/* harmony import */ var _compose_mail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose-mail.page.scss */ 109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let ComposeMailPage = class ComposeMailPage {
    constructor(toastController) {
        this.toastController = toastController;
        // Variable end
        this.model = {};
        this.template = [
            {
                id: 1,
                name: 'Template 1',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Template 2', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'Template 3',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 4,
                name: 'Template 4',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            {
                id: 5,
                name: 'Custom',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
        this.mailType = [
            {
                id: 1,
                name: 'Single',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Multiple', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
        ];
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
    }
    ngOnInit() {
    }
    onChange(_item, _identifier) {
        console.log("dropdown selected item >", _item);
        console.log("dropdown selected _identifier >", _identifier);
        if (_identifier == 'mailType') {
            this.mailtype = _item;
        }
        else if (_identifier == 'mailTemplate') {
            if (_item !== 'Custom') {
                this.mailBody = 'Your template is here';
            }
            else {
                this.mailBody = '';
            }
        }
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
ComposeMailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
ComposeMailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-compose-mail',
        template: _raw_loader_compose_mail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_compose_mail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ComposeMailPage);



/***/ }),

/***/ 109:
/*!************************************************************************!*\
  !*** ./src/app/pages/notification/compose-mail/compose-mail.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-md {\n  padding: 0.53rem 1.3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvc2UtbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtBQUNKIiwiZmlsZSI6ImNvbXBvc2UtbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW1kIHtcbiAgICBwYWRkaW5nOiAuNTNyZW0gMS4zcmVtICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ 67827:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/compose-mail/compose-mail.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"form-layout\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Compose Mail\n                  </div>\n                  <div class=\"card-header-action\">\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-wrapper\">\n                  <ion-grid>\n                    <ion-row>\n                      <!-- Choose mail type -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Mail type</mat-label>\n                            <mat-select [(ngModel)]=\"model.selectedmail\" name=\"mail\">\n                              <mat-option *ngFor=\"let mail of mailType\" [value]=\"mail.id\">\n                                {{mail.name}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- From -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>From</mat-label>\n                            <input matInput placeholder=\"From\" type=\"text\" [(ngModel)]=\"model.form\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Mail To -->\n                      <ion-col *ngIf=\"mailtype == 'Single'\" size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>To</mat-label>\n                            <input matInput placeholder=\"To\" type=\"text\" [(ngModel)]=\"model.to\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Mail Copy -->\n                      <ion-col *ngIf=\"mailtype\" size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Copy</mat-label>\n                            <input matInput placeholder=\"Copy\" type=\"text\" [(ngModel)]=\"model.copy\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      \n                      <!-- Mail Bcc -->\n                      <ion-col *ngIf=\"mailtype\" size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Bcc</mat-label>\n                            <input matInput placeholder=\"Bcc\" type=\"text\" [(ngModel)]=\"model.bcc\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Institute -->\n                      <ion-col *ngIf=\"mailtype == 'Multiple'\" size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Institute</mat-label>\n                            <mat-select [(ngModel)]=\"model.selectedinstitute\" name=\"institute\">\n                              <mat-option *ngFor=\"let institute of institutes\" [value]=\"institute.id\">\n                                {{institute.name}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Course -->\n                      <ion-col  size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Courses</mat-label>\n                            <mat-select [(ngModel)]=\"model.selectedCourses\" name=\"Courses\">\n                              <mat-option *ngFor=\"let Courses of courseItems\" [value]=\"Courses.id\">\n                                {{Courses.name}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Sessions -->\n                      <ion-col  size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Sessions</mat-label>\n                            <mat-select [(ngModel)]=\"model.selectedsession\" name=\"session\">\n                              <mat-option *ngFor=\"let Sessions of sessionItems\" [value]=\"Sessions.id\">\n                                {{Sessions.name}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Batchs -->\n                      <ion-col  size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Batchs</mat-label>\n                            <mat-select [(ngModel)]=\"model.selectedbatch\" name=\"batch\">\n                              <mat-option *ngFor=\"let batch of batchItems\" [value]=\"batch.id\">\n                                {{batch.name}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Mail Subject -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Subject</mat-label>\n                            <input matInput placeholder=\"Subject\" type=\"text\" [(ngModel)]=\"model.subject\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Choose mail template -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Choose Template</mat-label>\n                            <mat-select [(ngModel)]=\"model.selectedtemplate\" name=\"temp\">\n                              <mat-option *ngFor=\"let temp of template\" [value]=\"temp.id\">\n                                {{temp.name}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Mail Body -->\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                        <div class=\"form-item\">\n                          <ion-label>Mail Body</ion-label>\n                          <div class=\"text-editor\">\n                            <tinymce name=\"description\" [(ngModel)]=\"mailBody\"></tinymce>\n                          </div>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <div>\n                      <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" mat-stroked-button>Cancel</button>\n                      <button class=\"fill-btn btn-md\" (click)=\"presentToast()\" mat-stroked-button [routerLink]=\"['/', 'sent-mail']\">Save</button>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notification_compose-mail_compose-mail_module_ts-es2015.js.map