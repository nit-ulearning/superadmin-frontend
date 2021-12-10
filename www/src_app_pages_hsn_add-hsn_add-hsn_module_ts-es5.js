(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_hsn_add-hsn_add-hsn_module_ts"], {
    /***/
    94702:
    /*!*************************************************************!*\
      !*** ./src/app/pages/hsn/add-hsn/add-hsn-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddHsnPageRoutingModule": function AddHsnPageRoutingModule() {
          return (
            /* binding */
            _AddHsnPageRoutingModule
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


      var _add_hsn_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-hsn.page */
      84399);

      var routes = [{
        path: '',
        component: _add_hsn_page__WEBPACK_IMPORTED_MODULE_0__.AddHsnPage
      }];

      var _AddHsnPageRoutingModule = function AddHsnPageRoutingModule() {
        _classCallCheck(this, AddHsnPageRoutingModule);
      };

      _AddHsnPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddHsnPageRoutingModule);
      /***/
    },

    /***/
    67271:
    /*!*****************************************************!*\
      !*** ./src/app/pages/hsn/add-hsn/add-hsn.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddHsnPageModule": function AddHsnPageModule() {
          return (
            /* binding */
            _AddHsnPageModule
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


      var _add_hsn_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-hsn-routing.module */
      94702);
      /* harmony import */


      var _add_hsn_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-hsn.page */
      84399);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _AddHsnPageModule = function AddHsnPageModule() {
        _classCallCheck(this, AddHsnPageModule);
      };

      _AddHsnPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _add_hsn_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddHsnPageRoutingModule],
        declarations: [_add_hsn_page__WEBPACK_IMPORTED_MODULE_1__.AddHsnPage]
      })], _AddHsnPageModule);
      /***/
    },

    /***/
    84399:
    /*!***************************************************!*\
      !*** ./src/app/pages/hsn/add-hsn/add-hsn.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddHsnPage": function AddHsnPage() {
          return (
            /* binding */
            _AddHsnPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_hsn_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-hsn.page.html */
      74809);
      /* harmony import */


      var _add_hsn_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-hsn.page.scss */
      75244);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _AddHsnPage = /*#__PURE__*/function () {
        // selectedserviceType = this.serviceType[0].value;
        function AddHsnPage(toastController) {
          _classCallCheck(this, AddHsnPage);

          this.toastController = toastController;
          this.model = {};
          this.cities = [{
            id: 1,
            name: 'Vilnius',
            avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
          }, {
            id: 2,
            name: 'Kaunas',
            avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15'
          }, {
            id: 3,
            name: 'Pavilnys',
            avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
          }, {
            id: 4,
            name: 'Siauliai',
            avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
          }];
          this.serviceType = [// {value: 'Select Service Type', viewValue: 'Select Service Type'},
          {
            value: 'Package',
            viewValue: 'Package'
          }, {
            value: 'Licence',
            viewValue: 'Licence'
          }];
          this.setDefault = [{
            value: 'Not Default',
            viewValue: 'Not Default'
          }, {
            value: 'Default',
            viewValue: 'Default'
          }];
        }

        _createClass(AddHsnPage, [{
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

        return AddHsnPage;
      }();

      _AddHsnPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
        }];
      };

      _AddHsnPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-hsn',
        template: _raw_loader_add_hsn_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_hsn_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddHsnPage);
      /***/
    },

    /***/
    75244:
    /*!*****************************************************!*\
      !*** ./src/app/pages/hsn/add-hsn/add-hsn.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaHNuLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    74809:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hsn/add-hsn/add-hsn.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"form-layout\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Add HSN / SAC Number\n                  </div>\n                  <div class=\"card-header-action\">\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-wrapper\">\n                  <ion-grid>\n                    <ion-row>\n                       <!-- HSN / SAC Number -->\n                       <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>HSN / SAC Number</mat-label>\n                            <input matInput placeholder=\"HSN / SAC Number\" type=\"text\" [(ngModel)]=\"model.hsnNumber\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                       <!-- Description -->\n                       <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Description</mat-label>\n                            <input matInput placeholder=\"Description\" type=\"text\" [(ngModel)]=\"model.description\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Template For -->\n                      <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Select Service Type</mat-label>\n                            <mat-select [(value)]=\"selectedserviceType\">\n                              <mat-option [value]=\"option.value\" *ngFor=\"let option of serviceType\">{{ option.viewValue }}</mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                     <!-- SGST Percentage -->\n                     <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                      <div class=\"form-item\">\n                        <mat-form-field appearance=\"outline\">\n                          <mat-label>SGST Percentage</mat-label>\n                          <input matInput placeholder=\"SGST Percentage\" type=\"text\" [(ngModel)]=\"model.sgst\">\n                        </mat-form-field>\n                      </div>\n                    </ion-col>\n                       <!-- CGST Percentage -->\n                       <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>CGST Percentage</mat-label>\n                            <input matInput placeholder=\"CGST Percentage\" type=\"text\" [(ngModel)]=\"model.cgst\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                       <!-- IGST Percentage -->\n                       <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>IGST Percentage</mat-label>\n                            <input matInput placeholder=\"IGST Percentage\" type=\"text\" [(ngModel)]=\"model.igst\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Template Description -->\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                        <div class=\"form-item\">\n                          <ion-label>Template Body</ion-label>\n                          <div class=\"text-editor\">\n                            <tinymce name=\"description\" ></tinymce>\n                          </div>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                    <p class=\"informationTxt\">You have <span>100</span> characters left.</p>\n                  </ion-grid>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <div>\n                      <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" mat-stroked-button>Cancel</button>\n                      <button class=\"fill-btn btn-md\" (click)=\"presentToast()\" mat-stroked-button [routerLink]=\"['/', 'email-notification-list']\">Save</button>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_hsn_add-hsn_add-hsn_module_ts-es5.js.map