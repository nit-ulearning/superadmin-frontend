(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_auth_resetpassword_resetpassword_module_ts"], {
    /***/
    63232:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/auth/resetpassword/resetpassword-routing.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetpasswordPageRoutingModule": function ResetpasswordPageRoutingModule() {
          return (
            /* binding */
            _ResetpasswordPageRoutingModule
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


      var _resetpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./resetpassword.page */
      11788);

      var routes = [{
        path: '',
        component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_0__.ResetpasswordPage
      }];

      var _ResetpasswordPageRoutingModule = function ResetpasswordPageRoutingModule() {
        _classCallCheck(this, ResetpasswordPageRoutingModule);
      };

      _ResetpasswordPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ResetpasswordPageRoutingModule);
      /***/
    },

    /***/
    38221:
    /*!******************************************************************!*\
      !*** ./src/app/pages/auth/resetpassword/resetpassword.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetpasswordPageModule": function ResetpasswordPageModule() {
          return (
            /* binding */
            _ResetpasswordPageModule
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


      var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./resetpassword-routing.module */
      63232);
      /* harmony import */


      var _resetpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./resetpassword.page */
      11788);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _ResetpasswordPageModule = function ResetpasswordPageModule() {
        _classCallCheck(this, ResetpasswordPageModule);
      };

      _ResetpasswordPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetpasswordPageRoutingModule],
        declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_1__.ResetpasswordPage]
      })], _ResetpasswordPageModule);
      /***/
    },

    /***/
    11788:
    /*!****************************************************************!*\
      !*** ./src/app/pages/auth/resetpassword/resetpassword.page.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetpasswordPage": function ResetpasswordPage() {
          return (
            /* binding */
            _ResetpasswordPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_resetpassword_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./resetpassword.page.html */
      20628);
      /* harmony import */


      var _resetpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./resetpassword.page.scss */
      28347);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);

      var _ResetpasswordPage = /*#__PURE__*/function () {
        function ResetpasswordPage(menuCtrl, http, commonUtils, // common functionlity come here
        router, activatedRoute) {
          _classCallCheck(this, ResetpasswordPage);

          this.menuCtrl = menuCtrl;
          this.http = http;
          this.commonUtils = commonUtils;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.isDisabled = true;
          this.hide = true;
          this.model = {};
          this.hide2 = true;
          this.hide3 = true; // ======================== form submit start ===================

          this.formLoading = false;
        }

        _createClass(ResetpasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonFunction();
          }
        }, {
          key: "commonFunction",
          value: function commonFunction() {
            // get active url name
            this.commonUtils.getPathNameFun(this.router.url.split('/')[1]);
            this.parms_action_name = this.activatedRoute.snapshot.paramMap.get('action');
            this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
            console.log('parms_action_name', this.parms_action_name);
            console.log('parms_action_id', this.parms_action_id); // form_api Api

            this.form_api = 'login/resetPassword/' + this.parms_action_name + '/' + this.parms_action_id;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuCtrl.enable(false);
          }
        }, {
          key: "onSubmitForm",
          value: function onSubmitForm(form) {
            var _this = this;

            console.log("add form submit >", form.value);
            this.formLoading = true; // get form value

            var fd = new FormData();

            for (var val in form.value) {
              if (form.value[val] == undefined) {
                form.value[val] = '';
              }

              fd.append(val, form.value[val]);
            }

            ;
            console.log('value >', fd);

            if (!form.valid) {
              return;
            }

            this.formSubmitSubscribe = this.http.post(this.form_api, form.value).subscribe(function (response) {
              _this.formLoading = false;
              console.log("add form response >", response);

              if (response.status == 200) {
                _this.commonUtils.presentToast('success', response.message);

                _this.router.navigateByUrl('/auth');

                form.reset();
              } else {
                _this.commonUtils.presentToast('error', response.message);
              }
            }, function (errRes) {
              _this.formLoading = false;
            });
          } // form submit end
          // ----------- destroy subscription start ---------

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formSubmitSubscribe !== undefined) {
              this.formSubmitSubscribe.unsubscribe();
            }
          }
        }]);

        return ResetpasswordPage;
      }();

      _ResetpasswordPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }];
      };

      _ResetpasswordPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-resetpassword',
        template: _raw_loader_resetpassword_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_resetpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ResetpasswordPage);
      /***/
    },

    /***/
    28347:
    /*!******************************************************************!*\
      !*** ./src/app/pages/auth/resetpassword/resetpassword.page.scss ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldHBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    20628:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/resetpassword/resetpassword.page.html ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"login-view\">\n  <div class=\"login-page\">\n    <div class=\"login-wrapper\">\n      <div class=\"login-inner\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size-md=\"12\" size-xs=\"12\" size-sm=\"12\" size-lg=\"6\">\n              <div class=\"login-form\">\n                <div class=\"form-inner\">\n                  <div class=\"form-header\">\n                    <div class=\"form-header-top\">\n                      <!-- <p>Welcome To</p> -->\n                    </div>\n                    <div class=\"form-header-middle\">\n                      <img src=\"assets/images/logo.png\">\n                    </div>\n                    <div class=\"form-header-bottom\">\n                      <p class=\"bigFont\">\n                        <!-- Login in to get in the moment updates on the things that interest you. -->\n                        Reset Password\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"form-body no\">\n                    <form #resetPasswordForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(resetPasswordForm)\" (keyup.enter)=\"onSubmitForm(resetPasswordForm)\" [mustMatch]=\"['password', 'newPass']\">\n                      <mat-form-field appearance=\"outline\">\n                        <mat-icon matPrefix>lock</mat-icon>\n                        <mat-label>Enter new password</mat-label>\n                        <input matInput [type]=\"hide2 ? 'password' : 'text'\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" required>\n                        <span mat-icon-button matSuffix (click)=\"hide2 = !hide2\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide2\">\n                          <mat-icon>{{hide2 ? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </span>\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\">\n                        <mat-icon matPrefix>key</mat-icon>\n                        <mat-label>Enter conform password</mat-label>\n                        <input matInput [type]=\"hide3 ? 'password' : 'text'\" name=\"newPass\" #confirmPassword=\"ngModel\" [(ngModel)]=\"model.newPass\" required>\n                        <span mat-icon-button matSuffix (click)=\"hide3 = !hide3\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide3\">\n                          <mat-icon>{{hide3 ? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </span>\n                      </mat-form-field>\n                    \n                      <button class=\"signInBtn\" mat-raised-button type=\"submit\"\n                      [disabled]=\"!resetPasswordForm.valid || formLoading\">\n                        <ion-spinner *ngIf=\"formLoading\" name=\"crescent\"></ion-spinner> \n                        Reset\n                      </button>\n                    </form>\n                  </div>\n                  <p class=\"forgotpassword\">\n                    <a [routerLink]=\"['/auth']\">Login</a></p>\n                  <div class=\"form-footer\">\n                    <!-- <p class=\"notice\">\n                      Don't have an account? \n                      <span>Sign Up Now</span>\n                    </p> -->\n                    <p class=\"devider\"><span>OR</span></p>\n                    <div class=\"social-icons\">\n                      <p>Continue with social media</p>\n                      <div class=\"social-buttons\">\n                        <button mat-mini-fab class=\"facebook\">\n                          <ion-icon name=\"logo-facebook\"></ion-icon>\n                        </button>\n                        <button mat-mini-fab class=\"twitter\">\n                          <ion-icon name=\"logo-twitter\"></ion-icon>\n                        </button>\n                        <button mat-mini-fab class=\"google\">\n                          <ion-icon name=\"logo-google\"></ion-icon>\n                        </button>\n                        <button mat-mini-fab class=\"linkedin\">\n                          <ion-icon name=\"logo-linkedin\"></ion-icon>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size-md=\"12\" size-xs=\"12\" size-sm=\"12\" size-lg=\"6\">\n              <div class=\"login-bg\">\n                <div class=\"powered-by\">\n                  <img src=\"assets/images/company-logo.png\">\n                  <p>A complete product of Technosoft Software Solution</p>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_auth_resetpassword_resetpassword_module_ts-es5.js.map