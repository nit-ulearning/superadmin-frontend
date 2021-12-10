(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_auth_auth_module_ts"], {
    /***/
    20794:
    /*!***************************************************!*\
      !*** ./src/app/pages/auth/auth-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthPageRoutingModule": function AuthPageRoutingModule() {
          return (
            /* binding */
            _AuthPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.page */
      66739);

      var routes = [{
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage
      }];

      var _AuthPageRoutingModule = function AuthPageRoutingModule() {
        _classCallCheck(this, AuthPageRoutingModule);
      };

      _AuthPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AuthPageRoutingModule);
      /***/
    },

    /***/
    6621:
    /*!*******************************************!*\
      !*** ./src/app/pages/auth/auth.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthPageModule": function AuthPageModule() {
          return (
            /* binding */
            _AuthPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth-routing.module */
      20794);
      /* harmony import */


      var _auth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.page */
      66739);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _AuthPageModule = function AuthPageModule() {
        _classCallCheck(this, AuthPageModule);
      };

      _AuthPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_1__.AuthPage]
      })], _AuthPageModule);
      /***/
    },

    /***/
    66739:
    /*!*****************************************!*\
      !*** ./src/app/pages/auth/auth.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthPage": function AuthPage() {
          return (
            /* binding */
            _AuthPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./auth.page.html */
      91286);
      /* harmony import */


      var _auth_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.page.scss */
      54010);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/app.component */
      55041);
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      51228);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modal/modal.page */
      58167);

      var _AuthPage = /*#__PURE__*/function () {
        function AuthPage(menuCtrl, authService, router, loadingController, http, alertCtrl, commonUtils, modalController, appComponent) {
          _classCallCheck(this, AuthPage);

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

        _createClass(AuthPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // menu hide
            this.menuCtrl.enable(false);
            this.formSubmitSubscribe = this.authService.globalparamsData.subscribe(function (res) {
              console.log('authService', res);

              if (res && res != null && res != undefined && res != '') {
                if (res.token != undefined) {
                  _this.router.navigateByUrl('/dashboard');
                }
              }
            }); // get Site Info

            this.formSubmitSubscribe = this.commonUtils.getSiteInfoObservable.subscribe(function (res) {
              _this.siteInfo = res;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            // get Site Info
            this.formSubmitSubscribe = this.commonUtils.getSiteInfoObservable.subscribe(function (res) {
              _this2.siteInfo = res;
            });
            /* this.site_path = window.location.pathname;
            this.site_href = window.location.href;
            this.site_href_split = window.location.href.split('/')[1];
            this.site_path_split = window.location.pathname.split('/')[1]; */
            // this.appComponent.userInfoData();
            // menu hide

            this.menuCtrl.enable(false);
            this.formSubmitSubscribe = this.authService.globalparamsData.subscribe(function (res) {
              if (res && res != null && res != undefined && res != '') {
                if (res.token != undefined) {
                  _this2.router.navigateByUrl('/dashboard');
                }
              }
            });
          }
        }, {
          key: "onSwitchAuthMode",
          value: function onSwitchAuthMode() {
            this.isLogin = !this.isLogin;
          } //---------------- login form submit start-----------------

        }, {
          key: "onSubmitForm",
          value: function onSubmitForm(form) {
            this.isLoading = true;
            console.log('form >>', form.value);

            if (!form.valid) {
              return;
            }

            var email = form.value.email;
            var password = form.value.password;

            if (this.isLogin) {// login server data send
            } else {// signup server data send
              }

            this.authenticate(form, form.value); // form.reset();
          } // authenticate function

        }, {
          key: "authenticate",
          value: function authenticate(_form, form_data) {
            var _this3 = this;

            this.isLoading = true;
            this.loadingController.create({
              keyboardClose: true,
              message: 'Logging in...'
            }).then(function (loadingEl) {
              loadingEl.present();
              var authObs;

              if (_this3.isLogin) {
                authObs = _this3.authService.login('login/superAdminLogin', form_data, '');
                console.log('###########>>>', authObs);
                console.log('######form_data#####>>>', form_data);
              } else {// authObs = this.authService.signup(email, password);
              }

              console.log('authenticate@@', authObs);
              console.log('authenticate...........');
              _this3.formSubmitSubscribe = authObs.subscribe(function (resData) {
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

                  _this3.router.navigateByUrl('/dashboard');

                  _this3.commonUtils.presentToast('success', resData.message);
                  /* setTimeout(() => {
                    // user menu call
                    this.appComponent.userInfoData();
                  }, 10); */


                  setTimeout(function () {
                    _form.reset();

                    loadingEl.dismiss();
                  }, 2000);
                } else {
                  loadingEl.dismiss();

                  _this3.commonUtils.presentToast('error', resData.message);
                } // console.log("data login after resData ++++++>", resData);


                _this3.isLoading = false; // loadingEl.dismiss();
                // this.router.navigateByUrl('/places/tabs/discover');
              }, function (errRes) {
                loadingEl.dismiss();
              });
            });
          } // login form submit end

        }, {
          key: "showAlert",
          value: function showAlert(message) {
            this.alertCtrl.create({
              header: 'Authentication failed',
              message: message,
              buttons: ['Okay']
            }).then(function (alertEl) {
              return alertEl.present();
            });
          } // ..... resetPasswordOpenModal start ......

        }, {
          key: "resetPasswordOpenModal",
          value: function resetPasswordOpenModal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var profileDetails_modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__.ModalPage,
                        cssClass: 'mymodalClass password',
                        componentProps: {
                          identifier: _identifier,
                          modalForm_item: _item,
                          modalForm_array: _items
                        }
                      });

                    case 2:
                      profileDetails_modal = _context.sent;
                      // modal data back to Component
                      profileDetails_modal.onDidDismiss().then(function (getdata) {
                        console.log('getdata >>>>>>>>>>>', getdata);

                        if (getdata.data == 'submitClose') {}
                      });
                      _context.next = 6;
                      return profileDetails_modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // resetPasswordOpenModal end 
          // ----------- destroy subscription start ---------

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formSubmitSubscribe !== undefined) {
              this.formSubmitSubscribe.unsubscribe();
            }
          }
        }]);

        return AuthPage;
      }();

      _AuthPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__.CommonUtils
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: src_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent
        }];
      };

      _AuthPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-auth',
        template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AuthPage);
      /***/
    },

    /***/
    54010:
    /*!*******************************************!*\
      !*** ./src/app/pages/auth/auth.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    91286:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"login-view\">\n  <div class=\"login-page\">\n    <div class=\"login-wrapper\">\n      <div class=\"login-inner\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size-md=\"12\" size-xs=\"12\" size-sm=\"12\" size-lg=\"6\">\n              <div class=\"login-form\">\n                <div class=\"form-inner\">\n                  <div class=\"form-header\">\n                    <div class=\"form-header-top\">\n                      <p>Welcome To</p>\n                    </div>\n                    <div class=\"form-header-middle\">\n                      <img src=\"assets/images/logo.png\">\n                    </div>\n                    <div class=\"form-header-bottom\">\n                      <p>\n                        Login in to get in the moment updates on the things that interest you.\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"form-body\">\n                    <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(loginForm)\" (keyup.enter)=\"onSubmitForm(loginForm)\">\n                      <mat-form-field appearance=\"outline\">\n                        <mat-icon matPrefix>person</mat-icon>\n                        <mat-label>Username</mat-label>\n                        <input matInput placeholder=\"Username\" ngModel\n                        type=\"text\"\n                        name=\"userName\"\n                        required\n                        clearInput>\n                      </mat-form-field>\n                      <mat-form-field appearance=\"outline\">\n                        <mat-icon matPrefix>lock</mat-icon>\n                        <mat-label>Password</mat-label>\n                        <input matInput [type]=\"hide ? 'password' : 'text'\" ngModel\n                        name=\"password\"\n                        required\n                        minlenth=\"2\"\n                        #passwordCtrl=\"ngModel\"\n                        clearInput>\n                        <span mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </span>\n                      </mat-form-field>\n                      <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"signInBtn\" mat-raised-button>Sign In</button>\n                    </form>\n                  </div>\n                  <p class=\"forgotpassword\">\n                    <a [routerLink]=\"['/forgotpassword']\">Forgot Password</a></p>\n                  <div class=\"form-footer\">\n                    <!-- <p class=\"notice\">\n                      Don't have an account? \n                      <span>Sign Up Now</span>\n                    </p> -->\n                    <p class=\"devider\"><span>OR</span></p>\n                    <div class=\"social-icons\">\n                      <p>Continue with social media</p>\n                      <div class=\"social-buttons\">\n                        <button mat-mini-fab class=\"facebook\">\n                          <ion-icon name=\"logo-facebook\"></ion-icon>\n                        </button>\n                        <button mat-mini-fab class=\"twitter\">\n                          <ion-icon name=\"logo-twitter\"></ion-icon>\n                        </button>\n                        <button mat-mini-fab class=\"google\">\n                          <ion-icon name=\"logo-google\"></ion-icon>\n                        </button>\n                        <button mat-mini-fab class=\"linkedin\">\n                          <ion-icon name=\"logo-linkedin\"></ion-icon>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size-md=\"12\" size-xs=\"12\" size-sm=\"12\" size-lg=\"6\">\n              <div class=\"login-bg\">\n                <div class=\"powered-by\">\n                  <img src=\"assets/images/company-logo.png\">\n                  <p>A complete product of Technosoft Software Solution</p>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_auth_auth_module_ts-es5.js.map