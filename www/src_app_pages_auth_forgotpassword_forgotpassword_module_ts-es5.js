(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_auth_forgotpassword_forgotpassword_module_ts"], {
    /***/
    75404:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/auth/forgotpassword/forgotpassword-routing.module.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotpasswordPageRoutingModule": function ForgotpasswordPageRoutingModule() {
          return (
            /* binding */
            _ForgotpasswordPageRoutingModule
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


      var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgotpassword.page */
      22833);

      var routes = [{
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__.ForgotpasswordPage
      }];

      var _ForgotpasswordPageRoutingModule = function ForgotpasswordPageRoutingModule() {
        _classCallCheck(this, ForgotpasswordPageRoutingModule);
      };

      _ForgotpasswordPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ForgotpasswordPageRoutingModule);
      /***/
    },

    /***/
    3272:
    /*!********************************************************************!*\
      !*** ./src/app/pages/auth/forgotpassword/forgotpassword.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotpasswordPageModule": function ForgotpasswordPageModule() {
          return (
            /* binding */
            _ForgotpasswordPageModule
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


      var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgotpassword-routing.module */
      75404);
      /* harmony import */


      var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgotpassword.page */
      22833);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _ForgotpasswordPageModule = function ForgotpasswordPageModule() {
        _classCallCheck(this, ForgotpasswordPageModule);
      };

      _ForgotpasswordPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotpasswordPageRoutingModule],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__.ForgotpasswordPage]
      })], _ForgotpasswordPageModule);
      /***/
    },

    /***/
    22833:
    /*!******************************************************************!*\
      !*** ./src/app/pages/auth/forgotpassword/forgotpassword.page.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotpasswordPage": function ForgotpasswordPage() {
          return (
            /* binding */
            _ForgotpasswordPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./forgotpassword.page.html */
      30295);
      /* harmony import */


      var _forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgotpassword.page.scss */
      37007);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);

      var _ForgotpasswordPage = /*#__PURE__*/function () {
        function ForgotpasswordPage(menuCtrl, http, commonUtils) {
          _classCallCheck(this, ForgotpasswordPage);

          this.menuCtrl = menuCtrl;
          this.http = http;
          this.commonUtils = commonUtils;
          this.isDisabled = true;
          this.hide = true;
          this.model = {}; // ---------- getOtpCode fetch start ----------

          this.otpLoading = false;
        }

        _createClass(ForgotpasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonFunction();
          }
        }, {
          key: "commonFunction",
          value: function commonFunction() {
            // Get Otp Api
            this.getOtpApi = 'login/mailForgotPasswordLink';
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuCtrl.enable(false);
          }
        }, {
          key: "getOtpCode",
          value: function getOtpCode(_email) {
            var _this = this;

            console.log('Email', _email);
            this.otpLoading = true; //edit data call

            this.getOtpDataSubscribe = this.http.get(this.getOtpApi + '/' + _email).subscribe(function (res) {
              _this.otpLoading = false;
              console.log("Edit data  res >", res);

              if (res.status == 200) {
                _this.commonUtils.presentToast('success', res.message);
              } else {
                _this.commonUtils.presentToast('error', res.message);
              }
            }, function (errRes) {
              // this.selectLoadingDepend = false;
              _this.otpLoading = false;
            });
          } // ---------- getOtpCode fetch end ----------
          // ----------- destroy subscription start ---------

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formSubmitSubscribe !== undefined) {
              this.formSubmitSubscribe.unsubscribe();
            }

            if (this.getOtpDataSubscribe !== undefined) {
              this.getOtpDataSubscribe.unsubscribe();
            }
          }
        }]);

        return ForgotpasswordPage;
      }();

      _ForgotpasswordPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils
        }];
      };

      _ForgotpasswordPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forgotpassword',
        template: _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ForgotpasswordPage);
      /***/
    },

    /***/
    37007:
    /*!********************************************************************!*\
      !*** ./src/app/pages/auth/forgotpassword/forgotpassword.page.scss ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    30295:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgotpassword/forgotpassword.page.html ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"login-view\">\n  <div class=\"login-page\">\n    <div class=\"login-wrapper\">\n      <div class=\"login-inner\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size-md=\"12\" size-xs=\"12\" size-sm=\"12\" size-lg=\"6\">\n              <div class=\"login-form\">\n                <div class=\"form-inner\">\n                  <div class=\"form-header\">\n                    <div class=\"form-header-top\">\n                      <!-- <p>Welcome To</p> -->\n                    </div>\n                    <div class=\"form-header-middle\">\n                      <img src=\"assets/images/logo.png\">\n                    </div>\n                    <div class=\"form-header-bottom\">\n                      <p class=\"bigFont\">\n                        <!-- Login in to get in the moment updates on the things that interest you. -->\n                        Forgot Password\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"form-body\">\n                    <form #forgetPasswordForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(forgetPasswordForm)\" (keyup.enter)=\"onSubmitForm(forgetPasswordForm)\">\n                      <mat-form-field appearance=\"outline\">\n                        <mat-icon matPrefix>email</mat-icon>\n                        <mat-label>Email</mat-label>\n                        <input matInput placeholder=\"Enter your email\" [(ngModel)]=\"model.forgotEmail\"\n                        name=\"email\"\n                        required\n                        email\n                        type=\"email\"\n                        pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n                        #emailCtrl=\"ngModel\"\n                        clearInput>\n                      </mat-form-field>\n                    \n                      <button class=\"signInBtn\" mat-raised-button (click)=\"getOtpCode(model.forgotEmail)\"\n                      [disabled]=\"!forgetPasswordForm.valid || otpLoading\">\n                        <ion-spinner *ngIf=\"otpLoading\" name=\"crescent\"></ion-spinner> \n                        Get Link\n                      </button>\n                    </form>\n                  </div>\n                  <p class=\"forgotpassword\">\n                    <a [routerLink]=\"['../']\">Login</a></p>\n                  <div class=\"form-footer\">\n                    <!-- <p class=\"notice\">\n                      Don't have an account? \n                      <span>Sign Up Now</span>\n                    </p> -->\n                    <p class=\"devider\"><span>OR</span></p>\n                    <div class=\"social-icons\">\n                      <p>Continue with social media</p>\n                      <div class=\"social-buttons\">\n                        <button mat-mini-fab class=\"facebook\">\n                          <ion-icon name=\"logo-facebook\"></ion-icon>\n                        </button>\n                        <button mat-mini-fab class=\"twitter\">\n                          <ion-icon name=\"logo-twitter\"></ion-icon>\n                        </button>\n                        <button mat-mini-fab class=\"google\">\n                          <ion-icon name=\"logo-google\"></ion-icon>\n                        </button>\n                        <button mat-mini-fab class=\"linkedin\">\n                          <ion-icon name=\"logo-linkedin\"></ion-icon>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size-md=\"12\" size-xs=\"12\" size-sm=\"12\" size-lg=\"6\">\n              <div class=\"login-bg\">\n                <div class=\"powered-by\">\n                  <img src=\"assets/images/company-logo.png\">\n                  <p>A complete product of Technosoft Software Solution</p>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_auth_forgotpassword_forgotpassword_module_ts-es5.js.map