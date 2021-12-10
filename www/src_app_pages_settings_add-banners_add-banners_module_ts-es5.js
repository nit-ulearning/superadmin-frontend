(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_settings_add-banners_add-banners_module_ts"], {
    /***/
    9350:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/settings/add-banners/add-banners-routing.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddBannersPageRoutingModule": function AddBannersPageRoutingModule() {
          return (
            /* binding */
            _AddBannersPageRoutingModule
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


      var _add_banners_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-banners.page */
      11501);

      var routes = [{
        path: '',
        component: _add_banners_page__WEBPACK_IMPORTED_MODULE_0__.AddBannersPage
      }];

      var _AddBannersPageRoutingModule = function AddBannersPageRoutingModule() {
        _classCallCheck(this, AddBannersPageRoutingModule);
      };

      _AddBannersPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddBannersPageRoutingModule);
      /***/
    },

    /***/
    85201:
    /*!******************************************************************!*\
      !*** ./src/app/pages/settings/add-banners/add-banners.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddBannersPageModule": function AddBannersPageModule() {
          return (
            /* binding */
            _AddBannersPageModule
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


      var _add_banners_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-banners-routing.module */
      9350);
      /* harmony import */


      var _add_banners_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-banners.page */
      11501);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _AddBannersPageModule = function AddBannersPageModule() {
        _classCallCheck(this, AddBannersPageModule);
      };

      _AddBannersPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _add_banners_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddBannersPageRoutingModule],
        declarations: [_add_banners_page__WEBPACK_IMPORTED_MODULE_1__.AddBannersPage]
      })], _AddBannersPageModule);
      /***/
    },

    /***/
    11501:
    /*!****************************************************************!*\
      !*** ./src/app/pages/settings/add-banners/add-banners.page.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddBannersPage": function AddBannersPage() {
          return (
            /* binding */
            _AddBannersPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_banners_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-banners.page.html */
      15549);
      /* harmony import */


      var _add_banners_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-banners.page.scss */
      51386);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _AddBannersPage = /*#__PURE__*/function () {
        function AddBannersPage(toastController) {
          _classCallCheck(this, AddBannersPage);

          this.toastController = toastController;
          this.institute = [{
            id: 1,
            name: 'Lalit Tutorial',
            avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
          }, {
            id: 2,
            name: 'IEM',
            avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15'
          }, {
            id: 3,
            name: 'Techno India',
            avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
          }, {
            id: 4,
            name: 'JIS',
            avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
          }];
          this.selectedinstitute = this.institute[0].name;
        }

        _createClass(AddBannersPage, [{
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

        return AddBannersPage;
      }();

      _AddBannersPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
        }];
      };

      _AddBannersPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-banners',
        template: _raw_loader_add_banners_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_banners_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddBannersPage);
      /***/
    },

    /***/
    51386:
    /*!******************************************************************!*\
      !*** ./src/app/pages/settings/add-banners/add-banners.page.scss ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYmFubmVycy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    15549:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/add-banners/add-banners.page.html ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"form-layout\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                      Banner Add\n                  </div>\n                  <div class=\"card-header-action\">\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-wrapper\">\n                  <ion-grid>\n                    <ion-row>\n                      <!-- Institute -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>Institutes</ion-label>\n                          <ng-select #select \n                            [items]=\"institute\"\n                            placeholder=\"Please Select Institutes\"\n                            [searchable]=\"true\" \n                            [(ngModel)]=\"selectedinstitute\" \n                            bindLabel=\"name\" \n                            bindValue=\"name\">\n                          </ng-select>\n                        </div>\n                      </ion-col>\n                      <!-- Banner Image -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>Banner Image</ion-label>\n                          <div class=\"custom-file\">\n                            <input class=\"custom-file-input\" id=\"singleFileUpload\" type=\"file\">\n                            <label class=\"custom-file-label\" for=\"singleFileUpload\">Choose file</label>\n                          </div>\n                        </div>\n                      </ion-col>\n                      <!-- Banner Tittle -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>Banner Tittle</ion-label>\n                          <ion-input name=\"name\" type=\"text\"></ion-input>\n                        </div>\n                      </ion-col>\n                      <!-- Banner Description -->\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                        <div class=\"form-item\">\n                          <ion-label>Banner Description</ion-label>\n                          <ion-textarea></ion-textarea>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <div>\n                      <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" mat-stroked-button>Cancel</button>\n                      <button class=\"fill-btn btn-md\" (click)=\"presentToast()\" mat-stroked-button [routerLink]=\"['/', 'security-list']\">Save</button>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_settings_add-banners_add-banners_module_ts-es5.js.map