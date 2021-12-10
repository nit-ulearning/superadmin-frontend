(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_settings_add-website-details_add-website-details_module_ts"], {
    /***/
    61491:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/settings/add-website-details/add-website-details-routing.module.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddWebsiteDetailsPageRoutingModule": function AddWebsiteDetailsPageRoutingModule() {
          return (
            /* binding */
            _AddWebsiteDetailsPageRoutingModule
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


      var _add_website_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-website-details.page */
      31796);

      var routes = [{
        path: '',
        component: _add_website_details_page__WEBPACK_IMPORTED_MODULE_0__.AddWebsiteDetailsPage
      }];

      var _AddWebsiteDetailsPageRoutingModule = function AddWebsiteDetailsPageRoutingModule() {
        _classCallCheck(this, AddWebsiteDetailsPageRoutingModule);
      };

      _AddWebsiteDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddWebsiteDetailsPageRoutingModule);
      /***/
    },

    /***/
    4569:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/settings/add-website-details/add-website-details.module.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddWebsiteDetailsPageModule": function AddWebsiteDetailsPageModule() {
          return (
            /* binding */
            _AddWebsiteDetailsPageModule
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


      var _add_website_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-website-details-routing.module */
      61491);
      /* harmony import */


      var _add_website_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-website-details.page */
      31796);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _AddWebsiteDetailsPageModule = function AddWebsiteDetailsPageModule() {
        _classCallCheck(this, AddWebsiteDetailsPageModule);
      };

      _AddWebsiteDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _add_website_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddWebsiteDetailsPageRoutingModule],
        declarations: [_add_website_details_page__WEBPACK_IMPORTED_MODULE_1__.AddWebsiteDetailsPage]
      })], _AddWebsiteDetailsPageModule);
      /***/
    },

    /***/
    31796:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/settings/add-website-details/add-website-details.page.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddWebsiteDetailsPage": function AddWebsiteDetailsPage() {
          return (
            /* binding */
            _AddWebsiteDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_website_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-website-details.page.html */
      1280);
      /* harmony import */


      var _add_website_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-website-details.page.scss */
      91547);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _AddWebsiteDetailsPage = /*#__PURE__*/function () {
        function AddWebsiteDetailsPage(toastController) {
          _classCallCheck(this, AddWebsiteDetailsPage);

          this.toastController = toastController;
          this.country = [{
            id: 1,
            name: 'India',
            avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
          }, {
            id: 2,
            name: 'Africa',
            avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15'
          }, {
            id: 3,
            name: 'USA',
            avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
          }, {
            id: 4,
            name: 'CANADA',
            avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
          }];
          this.state = [{
            id: 1,
            name: 'West Bengal',
            avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
          }, {
            id: 2,
            name: 'Tripura',
            avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15'
          }, {
            id: 3,
            name: 'Bihar',
            avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
          }, {
            id: 4,
            name: 'Tamil Nadu',
            avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
          }];
          this.city = [{
            id: 1,
            name: 'Kolkata',
            avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
          }, {
            id: 2,
            name: 'Pune',
            avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15'
          }, {
            id: 3,
            name: 'Mumbai',
            avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
          }, {
            id: 4,
            name: 'Chennai',
            avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
          }];
          this.selectedCity = this.city[0].name;
          this.selectedState = this.state[0].name;
          this.selectedCountry = this.country[0].name;
        }

        _createClass(AddWebsiteDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentToast",
          value: function presentToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'Your data have been saved.',
                        duration: 2000,
                        cssClass: "my-tost-custom-classsuccess"
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AddWebsiteDetailsPage;
      }();

      _AddWebsiteDetailsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
        }];
      };

      _AddWebsiteDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-website-details',
        template: _raw_loader_add_website_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_website_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddWebsiteDetailsPage);
      /***/
    },

    /***/
    91547:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/settings/add-website-details/add-website-details.page.scss ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtd2Vic2l0ZS1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    1280:
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/add-website-details/add-website-details.page.html ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"form-layout\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                      Add Configuration\n                  </div>\n                  <div class=\"card-header-action\">\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-wrapper\">\n                  <ion-grid>\n                    <ion-row>\n                      <!-- DB Host Name -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>DB Host Name</ion-label>\n                          <ion-input name=\"name\" type=\"text\"></ion-input>\n                        </div>\n                      </ion-col>\n                      <!-- DB Port Name -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>DB Port Name</ion-label>\n                          <ion-input name=\"name\" type=\"text\"></ion-input>\n                        </div>\n                      </ion-col>\n                      <!-- DB Server Name -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>DB Server Name</ion-label>\n                          <ion-input name=\"name\" type=\"text\"></ion-input>\n                        </div>\n                      </ion-col>\n                      <!-- DB User Name -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>DB User Name</ion-label>\n                          <ion-input name=\"name\" type=\"text\"></ion-input>\n                        </div>\n                      </ion-col>\n                      <!-- DB Password-->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>DB Password</ion-label>\n                          <ion-input name=\"name\" type=\"password\"></ion-input>\n                        </div>\n                      </ion-col>\n                      <!-- Server DNS -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>Server DNS</ion-label>\n                          <ion-input name=\"name\" type=\"email\"></ion-input>\n                        </div>\n                      </ion-col>\n                      <!-- Server Host -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>Server Host</ion-label>\n                          <ion-input name=\"name\" type=\"text\"></ion-input>\n                        </div>\n                      </ion-col>\n                      <!-- Server Port -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>Server Port</ion-label>\n                          <ion-input name=\"name\" type=\"text\"></ion-input>\n                        </div>\n                      </ion-col>\n                      <!-- Server User Name -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>Server User Name</ion-label>\n                          <ion-input name=\"name\" type=\"text\"></ion-input>\n                        </div>\n                      </ion-col>\n                      <!-- Server Password -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>Server Password</ion-label>\n                          <ion-input name=\"name\" type=\"text\"></ion-input>\n                        </div>\n                      </ion-col>\n                      <!-- Load Balancer Details -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>Load Balancer Details</ion-label>\n                          <ion-input name=\"name\" type=\"text\"></ion-input>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <div>\n                      <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" mat-stroked-button>Cancel</button>\n                      <button class=\"fill-btn btn-md\" (click)=\"presentToast()\" mat-stroked-button [routerLink]=\"['/', 'security-list']\">Save</button>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_settings_add-website-details_add-website-details_module_ts-es5.js.map