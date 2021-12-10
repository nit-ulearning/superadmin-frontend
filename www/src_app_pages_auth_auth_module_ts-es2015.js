(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_auth_auth_module_ts"],{

/***/ 20794:
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": function() { return /* binding */ AuthPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page */ 66739);




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ 6621:
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": function() { return /* binding */ AuthPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 20794);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page */ 66739);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let AuthPageModule = class AuthPageModule {
};
AuthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_1__.AuthPage]
    })
], AuthPageModule);



/***/ }),

/***/ 66739:
/*!*****************************************!*\
  !*** ./src/app/pages/auth/auth.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPage": function() { return /* binding */ AuthPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./auth.page.html */ 91286);
/* harmony import */ var _auth_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.scss */ 54010);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal.page */ 58167);












let AuthPage = class AuthPage {
    constructor(menuCtrl, authService, router, loadingController, http, alertCtrl, commonUtils, modalController, appComponent) {
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.router = router;
        this.loadingController = loadingController;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.commonUtils = commonUtils;
        this.modalController = modalController;
        this.appComponent = appComponent;
        this.main_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl;
        this.file_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.fileUrl;
        this.hide = true;
        this.isLoading = false;
        this.isLogin = true;
    }
    ngOnInit() {
        // menu hide
        this.menuCtrl.enable(false);
        this.formSubmitSubscribe = this.authService.globalparamsData.subscribe(res => {
            console.log('authService', res);
            if (res && res != null && res != undefined && res != '') {
                if (res.token != undefined) {
                    this.router.navigateByUrl('/dashboard');
                }
            }
        });
        // get Site Info
        this.formSubmitSubscribe = this.commonUtils.getSiteInfoObservable.subscribe(res => {
            this.siteInfo = res;
        });
    }
    ionViewWillEnter() {
        // get Site Info
        this.formSubmitSubscribe = this.commonUtils.getSiteInfoObservable.subscribe(res => {
            this.siteInfo = res;
        });
        /* this.site_path = window.location.pathname;
        this.site_href = window.location.href;
        this.site_href_split = window.location.href.split('/')[1];
        this.site_path_split = window.location.pathname.split('/')[1]; */
        // this.appComponent.userInfoData();
        // menu hide
        this.menuCtrl.enable(false);
        this.formSubmitSubscribe = this.authService.globalparamsData.subscribe(res => {
            if (res && res != null && res != undefined && res != '') {
                if (res.token != undefined) {
                    this.router.navigateByUrl('/dashboard');
                }
            }
        });
    }
    onSwitchAuthMode() {
        this.isLogin = !this.isLogin;
    }
    //---------------- login form submit start-----------------
    onSubmitForm(form) {
        this.isLoading = true;
        console.log('form >>', form.value);
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        if (this.isLogin) {
            // login server data send
        }
        else {
            // signup server data send
        }
        this.authenticate(form, form.value);
        // form.reset();
    }
    // authenticate function
    authenticate(_form, form_data) {
        this.isLoading = true;
        this.loadingController
            .create({ keyboardClose: true, message: 'Logging in...' })
            .then(loadingEl => {
            loadingEl.present();
            let authObs;
            if (this.isLogin) {
                authObs = this.authService.login('login/superAdminLogin', form_data, '');
                console.log('###########>>>', authObs);
                console.log('######form_data#####>>>', form_data);
            }
            else {
                // authObs = this.authService.signup(email, password);
            }
            console.log('authenticate@@', authObs);
            console.log('authenticate...........');
            this.formSubmitSubscribe = authObs.subscribe(resData => {
                console.log('resData =============))))))))))))))>', resData);
                if (resData.status == 200) {
                    console.log('user Type =============))))))))))))))>', resData);
                    /* this.userTypes = this.commonUtils.userTypes;
                    console.log('user Type =============))))))))))))))>', this.userTypes); */
                    // this.appComponent.userInfoData();
                    // this.appComponent.initializeApp();
                    /* if(resData.return_data.user_type == 'group'){
                      this.router.navigateByUrl('/dashboard');
                    }else{
                      this.router.navigateByUrl('/transaction-list');
    
                    } */
                    this.router.navigateByUrl('/dashboard');
                    this.commonUtils.presentToast('success', resData.message);
                    /* setTimeout(() => {
                      // user menu call
                      this.appComponent.userInfoData();
                    }, 10); */
                    setTimeout(() => {
                        _form.reset();
                        loadingEl.dismiss();
                    }, 2000);
                }
                else {
                    loadingEl.dismiss();
                    this.commonUtils.presentToast('error', resData.message);
                }
                // console.log("data login after resData ++++++>", resData);
                this.isLoading = false;
                // loadingEl.dismiss();
                // this.router.navigateByUrl('/places/tabs/discover');
            }, errRes => {
                loadingEl.dismiss();
            });
        });
    }
    // login form submit end
    showAlert(message) {
        this.alertCtrl
            .create({
            header: 'Authentication failed',
            message: message,
            buttons: ['Okay']
        })
            .then(alertEl => alertEl.present());
    }
    // ..... resetPasswordOpenModal start ......
    resetPasswordOpenModal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('_identifier >>', _identifier);
            let profileDetails_modal;
            profileDetails_modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__.ModalPage,
                cssClass: 'mymodalClass password',
                componentProps: {
                    identifier: _identifier,
                    modalForm_item: _item,
                    modalForm_array: _items
                }
            });
            // modal data back to Component
            profileDetails_modal.onDidDismiss()
                .then((getdata) => {
                console.log('getdata >>>>>>>>>>>', getdata);
                if (getdata.data == 'submitClose') {
                }
            });
            return yield profileDetails_modal.present();
        });
    }
    // resetPasswordOpenModal end 
    // ----------- destroy subscription start ---------
    ngOnDestroy() {
        if (this.formSubmitSubscribe !== undefined) {
            this.formSubmitSubscribe.unsubscribe();
        }
    }
};
AuthPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__.CommonUtils },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent }
];
AuthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-auth',
        template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AuthPage);



/***/ }),

/***/ 54010:
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 91286:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"login-view\">\n  <div class=\"login-page\">\n    <div class=\"login-wrapper\">\n      <div class=\"login-inner\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size-md=\"12\" size-xs=\"12\" size-sm=\"12\" size-lg=\"6\">\n              <div class=\"login-form\">\n                <div class=\"form-inner\">\n                  <div class=\"form-header\">\n                    <div class=\"form-header-top\">\n                      <p>Welcome To</p>\n                    </div>\n                    <div class=\"form-header-middle\">\n                      <img src=\"assets/images/logo.png\">\n                    </div>\n                    <div class=\"form-header-bottom\">\n                      <p>\n                        Login in to get in the moment updates on the things that interest you.\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"form-body\">\n                    <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(loginForm)\" (keyup.enter)=\"onSubmitForm(loginForm)\">\n                      <mat-form-field appearance=\"outline\">\n                        <mat-icon matPrefix>person</mat-icon>\n                        <mat-label>Username</mat-label>\n                        <input matInput placeholder=\"Username\" ngModel\n                        type=\"text\"\n                        name=\"userName\"\n                        required\n                        clearInput>\n                      </mat-form-field>\n                      <mat-form-field appearance=\"outline\">\n                        <mat-icon matPrefix>lock</mat-icon>\n                        <mat-label>Password</mat-label>\n                        <input matInput [type]=\"hide ? 'password' : 'text'\" ngModel\n                        name=\"password\"\n                        required\n                        minlenth=\"2\"\n                        #passwordCtrl=\"ngModel\"\n                        clearInput>\n                        <span mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </span>\n                      </mat-form-field>\n                      <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"signInBtn\" mat-raised-button>Sign In</button>\n                    </form>\n                  </div>\n                  <p class=\"forgotpassword\">\n                    <a [routerLink]=\"['/forgotpassword']\">Forgot Password</a></p>\n                  <div class=\"form-footer\">\n                    <!-- <p class=\"notice\">\n                      Don't have an account? \n                      <span>Sign Up Now</span>\n                    </p> -->\n                    <p class=\"devider\"><span>OR</span></p>\n                    <div class=\"social-icons\">\n                      <p>Continue with social media</p>\n                      <div class=\"social-buttons\">\n                        <button mat-mini-fab class=\"facebook\">\n                          <ion-icon name=\"logo-facebook\"></ion-icon>\n                        </button>\n                        <button mat-mini-fab class=\"twitter\">\n                          <ion-icon name=\"logo-twitter\"></ion-icon>\n                        </button>\n                        <button mat-mini-fab class=\"google\">\n                          <ion-icon name=\"logo-google\"></ion-icon>\n                        </button>\n                        <button mat-mini-fab class=\"linkedin\">\n                          <ion-icon name=\"logo-linkedin\"></ion-icon>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size-md=\"12\" size-xs=\"12\" size-sm=\"12\" size-lg=\"6\">\n              <div class=\"login-bg\">\n                <div class=\"powered-by\">\n                  <img src=\"assets/images/company-logo.png\">\n                  <p>A complete product of Technosoft Software Solution</p>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_auth_module_ts-es2015.js.map