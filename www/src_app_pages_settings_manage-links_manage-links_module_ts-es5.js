(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_settings_manage-links_manage-links_module_ts"], {
    /***/
    15430:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/settings/manage-links/manage-links-routing.module.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ManageLinksPageRoutingModule": function ManageLinksPageRoutingModule() {
          return (
            /* binding */
            _ManageLinksPageRoutingModule
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


      var _manage_links_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./manage-links.page */
      27876);

      var routes = [{
        path: '',
        component: _manage_links_page__WEBPACK_IMPORTED_MODULE_0__.ManageLinksPage
      }];

      var _ManageLinksPageRoutingModule = function ManageLinksPageRoutingModule() {
        _classCallCheck(this, ManageLinksPageRoutingModule);
      };

      _ManageLinksPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ManageLinksPageRoutingModule);
      /***/
    },

    /***/
    31643:
    /*!********************************************************************!*\
      !*** ./src/app/pages/settings/manage-links/manage-links.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ManageLinksPageModule": function ManageLinksPageModule() {
          return (
            /* binding */
            _ManageLinksPageModule
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


      var _manage_links_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./manage-links-routing.module */
      15430);
      /* harmony import */


      var _manage_links_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./manage-links.page */
      27876);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _ManageLinksPageModule = function ManageLinksPageModule() {
        _classCallCheck(this, ManageLinksPageModule);
      };

      _ManageLinksPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _manage_links_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageLinksPageRoutingModule],
        declarations: [_manage_links_page__WEBPACK_IMPORTED_MODULE_1__.ManageLinksPage]
      })], _ManageLinksPageModule);
      /***/
    },

    /***/
    27876:
    /*!******************************************************************!*\
      !*** ./src/app/pages/settings/manage-links/manage-links.page.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ManageLinksPage": function ManageLinksPage() {
          return (
            /* binding */
            _ManageLinksPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_manage_links_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./manage-links.page.html */
      51437);
      /* harmony import */


      var _manage_links_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./manage-links.page.scss */
      98048);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ManageLinksPage = /*#__PURE__*/function () {
        function ManageLinksPage(toastController) {
          _classCallCheck(this, ManageLinksPage);

          this.toastController = toastController; // Variables start

          this.statusChange = true;
          this.isListLoading = false;
          this.skeleton = [{}, {}, {}, {}, {}];
          this.gaugeType = "arch";
          this.gaugeValue = 50;
          this.gaugeLabel = "Questions";
          this.gaugeAppendText = "%";
          this.gaugethick = 10;
          this.gaugeanimate = true;
          this.gaugeduration = 1000;
          this.gaugeforegroundColor = "#f83245";
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
        } // Variables end


        _createClass(ManageLinksPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentToast",
          value: function presentToast(_msg, _type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: _msg,
                        duration: 2000,
                        cssClass: "my-tost-custom-class" + _type
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
        }, {
          key: "clickActionBtn",
          value: function clickActionBtn(_value, _identifier) {
            var status;
            var type;
            this.isListLoading = true;

            if (_identifier == 'status') {
              if (_value == true) {
                this.statusChange = false;
                status = 'Your status is disable';
                type = 'info';
              } else {
                this.statusChange = true;
                status = 'Your status is enable';
                type = 'success';
              }

              console.log('statusChange', this.statusChange);
              this.presentToast(status, type);
            } else if (_identifier == 'delete') {
              status = 'Deleted successfully';
              type = 'success';
              this.presentToast(status, type);
            } else if (_identifier == 'edit') {
              status = 'Your data is editable';
              type = 'success';
              this.presentToast(status, type);
            } else if (_identifier == 'pdf') {
              status = 'Downloading PDF file';
              type = 'success';
              this.presentToast(status, type);
            } else if (_identifier == 'excel') {
              status = 'Downloading Excel file';
              type = 'success';
              this.presentToast(status, type);
            } else if (_identifier == 'refresh') {
              status = 'Data refreshing...';
              type = 'success';
              this.presentToast(status, type);
            }

            this.isListLoading = false;
          }
        }]);

        return ManageLinksPage;
      }();

      _ManageLinksPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
        }];
      };

      _ManageLinksPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-manage-links',
        template: _raw_loader_manage_links_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_manage_links_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ManageLinksPage);
      /***/
    },

    /***/
    98048:
    /*!********************************************************************!*\
      !*** ./src/app/pages/settings/manage-links/manage-links.page.scss ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtbGlua3MucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    51437:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/manage-links/manage-links.page.html ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"box-table-header\">\n        <div class=\"search-module\">\n          <div class=\"form-layout\">\n            <div class=\"form-wrapper\">\n              <div class=\"form-item\">\n                <ion-label>Institutes</ion-label>\n                <ng-select #select \n                  [items]=\"institute\"\n                  placeholder=\"Please Select Institutes\"\n                  [searchable]=\"true\" \n                  [(ngModel)]=\"selectedinstitute\" \n                  bindLabel=\"name\" \n                  bindValue=\"name\">\n                </ng-select>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"button-module\">\n          <button class=\"border-btn success\" [routerLink]=\"['/', 'add-links']\" mat-stroked-button>\n            <mat-icon>add_circle_outline</mat-icon>\n            Add Link\n          </button>\n        </div>\n      </div>\n\n      <div class=\"card-outer\">\n        <div class=\"card card-box\">\n          <div class=\"card-header\">\n            <div class=\"card-header-tittle\">\n              Social Link Lists\n            </div>\n            <div class=\"card-header-action\">\n              <mat-icon>connect_without_contact</mat-icon>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\">\n                  <div class=\"view-data\">\n                    <div class=\"card-outer\">\n                      <div class=\"card card-box\">\n                        <div class=\"card-body\">\n                          <ion-item>\n                            <ion-avatar slot=\"start\">\n                              <img src=\"assets/icon/facebook.png\">\n                            </ion-avatar>\n                            <ion-label>\n                              <h3>Facebook</h3>\n                              <p>https://www.facebook.com/</p>\n                              <div class=\"action\">\n                                <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                                    <mat-icon>edit</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Enable\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                                    <mat-icon>visibility</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                                    <mat-icon>delete</mat-icon>\n                                </ion-button>\n                              </div>\n                            </ion-label>\n                          </ion-item>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </ion-col>\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\">\n                  <div class=\"view-data\">\n                    <div class=\"card-outer\">\n                      <div class=\"card card-box\">\n                        <div class=\"card-body\">\n                          <ion-item>\n                            <ion-avatar slot=\"start\">\n                              <img src=\"assets/icon/instagram.png\">\n                            </ion-avatar>\n                            <ion-label>\n                              <h3>Instagram</h3>\n                              <p>https://www.instagram.com/</p>\n                              <div class=\"action\">\n                                <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                                    <mat-icon>edit</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Enable\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                                    <mat-icon>visibility</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                                    <mat-icon>delete</mat-icon>\n                                </ion-button>\n                              </div>\n                            </ion-label>\n                          </ion-item>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </ion-col>\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\">\n                  <div class=\"view-data\">\n                    <div class=\"card-outer\">\n                      <div class=\"card card-box\">\n                        <div class=\"card-body\">\n                          <ion-item>\n                            <ion-avatar slot=\"start\">\n                              <img src=\"assets/icon/linkedin.png\">\n                            </ion-avatar>\n                            <ion-label>\n                              <h3>Linkedin</h3>\n                              <p>https://www.linkedin.com/</p>\n                              <div class=\"action\">\n                                <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                                    <mat-icon>edit</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Enable\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                                    <mat-icon>visibility</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                                    <mat-icon>delete</mat-icon>\n                                </ion-button>\n                              </div>\n                            </ion-label>\n                          </ion-item>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </ion-col>\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\">\n                  <div class=\"view-data\">\n                    <div class=\"card-outer\">\n                      <div class=\"card card-box\">\n                        <div class=\"card-body\">\n                          <ion-item>\n                            <ion-avatar slot=\"start\">\n                              <img src=\"assets/icon/twitter.png\">\n                            </ion-avatar>\n                            <ion-label>\n                              <h3>Twitter</h3>\n                              <p>https://www.twitter.com/</p>\n                              <div class=\"action\">\n                                <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                                    <mat-icon>edit</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Enable\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                                    <mat-icon>visibility</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                                    <mat-icon>delete</mat-icon>\n                                </ion-button>\n                              </div>\n                            </ion-label>\n                          </ion-item>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </ion-col>\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\">\n                  <div class=\"view-data\">\n                    <div class=\"card-outer\">\n                      <div class=\"card card-box\">\n                        <div class=\"card-body\">\n                          <ion-item>\n                            <ion-avatar slot=\"start\">\n                              <img src=\"assets/icon/youtube.png\">\n                            </ion-avatar>\n                            <ion-label>\n                              <h3>Youtube</h3>\n                              <p>https://www.youtube.com/</p>\n                              <div class=\"action\">\n                                <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                                    <mat-icon>edit</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Enable\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                                    <mat-icon>visibility</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                                    <mat-icon>delete</mat-icon>\n                                </ion-button>\n                              </div>\n                            </ion-label>\n                          </ion-item>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_settings_manage-links_manage-links_module_ts-es5.js.map