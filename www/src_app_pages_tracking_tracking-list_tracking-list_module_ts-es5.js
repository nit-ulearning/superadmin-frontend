(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_tracking_tracking-list_tracking-list_module_ts"], {
    /***/
    22265:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/tracking/tracking-list/tracking-list-routing.module.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingListPageRoutingModule": function TrackingListPageRoutingModule() {
          return (
            /* binding */
            _TrackingListPageRoutingModule
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


      var _tracking_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tracking-list.page */
      79052);

      var routes = [{
        path: '',
        component: _tracking_list_page__WEBPACK_IMPORTED_MODULE_0__.TrackingListPage
      }];

      var _TrackingListPageRoutingModule = function TrackingListPageRoutingModule() {
        _classCallCheck(this, TrackingListPageRoutingModule);
      };

      _TrackingListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TrackingListPageRoutingModule);
      /***/
    },

    /***/
    60089:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/tracking/tracking-list/tracking-list.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingListPageModule": function TrackingListPageModule() {
          return (
            /* binding */
            _TrackingListPageModule
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


      var _tracking_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tracking-list-routing.module */
      22265);
      /* harmony import */


      var _tracking_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tracking-list.page */
      79052);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _TrackingListPageModule = function TrackingListPageModule() {
        _classCallCheck(this, TrackingListPageModule);
      };

      _TrackingListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _tracking_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrackingListPageRoutingModule],
        declarations: [_tracking_list_page__WEBPACK_IMPORTED_MODULE_1__.TrackingListPage]
      })], _TrackingListPageModule);
      /***/
    },

    /***/
    79052:
    /*!********************************************************************!*\
      !*** ./src/app/pages/tracking/tracking-list/tracking-list.page.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingListPage": function TrackingListPage() {
          return (
            /* binding */
            _TrackingListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tracking_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tracking-list.page.html */
      44683);
      /* harmony import */


      var _tracking_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tracking-list.page.scss */
      3713);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _TrackingListPage = /*#__PURE__*/function () {
        // Variables end
        function TrackingListPage(toastController) {
          _classCallCheck(this, TrackingListPage);

          this.toastController = toastController; // Variables start

          this.statusChange = true;
          this.isListLoading = false;
          this.skeleton = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
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
          var today = new Date();
          var month = today.getMonth();
          var year = today.getFullYear();
          this.campaignOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(new Date(year, month, 13)),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(new Date(year, month, 16))
          });
        }

        _createClass(TrackingListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentToast",
          value: function presentToast(_msg, _type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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

        return TrackingListPage;
      }();

      _TrackingListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
        }];
      };

      _TrackingListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tracking-list',
        template: _raw_loader_tracking_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tracking_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TrackingListPage);
      /***/
    },

    /***/
    3713:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/tracking/tracking-list/tracking-list.page.scss ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFja2luZy1saXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    44683:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/tracking-list/tracking-list.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"table-listing\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Exam List\n                  </div>\n                  <div class=\"card-header-action\">\n                    \n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"advance-search\">\n                  <div class=\"advance-search-inner\">\n                    <div class=\"form-layout\">\n                      <div class=\"form-wrapper\">\n                        <ion-grid>\n                          <ion-row>\n                            <!-- Exam Date range -->\n                            <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\n                              <div class=\"form-item\">\n                                <ion-label>Exam Date range</ion-label>\n                                <div class=\"input-field mat-datePicker\">\n                                    <mat-date-range-input [rangePicker]=\"picker\">\n                                      <input matStartDate placeholder=\"Start date\">\n                                      <input matEndDate placeholder=\"End date\">\n                                    </mat-date-range-input>\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                    <mat-date-range-picker #picker></mat-date-range-picker>\n                                </div>\n                              </div>\n                            </ion-col>\n                            <!-- Institute -->\n                            <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\n                              <div class=\"form-item\">\n                                <ion-label>Institutes</ion-label>\n                                <ng-select \n                                  #select \n                                  [items]=\"institute\"\n                                  placeholder=\"Please Select Institutes\"\n                                  [searchable]=\"false\" \n                                  [(ngModel)]=\"selectedinstitute\" \n                                  bindLabel=\"name\" \n                                  bindValue=\"name\">\n                                  <ng-template ng-header-tmp>\n                                      <input style=\"width: 100%; line-height: 24px\" type=\"text\" />\n                                  </ng-template>\n                                </ng-select>\n                              </div>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"table-header\">\n                  <div class=\"records-wrapper\">\n                    <ion-item class=\"record\">\n                      <span>Records: </span>\n                      <mat-form-field>\n                        <mat-select value=\"10\">\n                          <mat-option value=\"10\">10</mat-option>\n                          <mat-option value=\"25\">25</mat-option>\n                          <mat-option value=\"50\">50</mat-option>\n                          <mat-option value=\"100\">100</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </ion-item>\n                  </div>\n                  <div class=\"search-wrapper\">\n                    <ion-searchbar showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search item ....\"></ion-searchbar>\n                  </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th class=\"ion-text-start\">\n                                    <div>\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ion-text-start\">\n                                  <div>\n                                      <ion-checkbox color=\"primary\"></ion-checkbox>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Institutes Name\n                                      <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Current exam date\n                                      <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    CONTACT NUMBER\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    EMAIL ADDRESS\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div class=\"ion-justify-content-center\">\n                                    Actions\n                                  </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                          <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\n                            <td colspan=\"100\">\n                              Data is loading...\n                            </td>\n                          </tr>\n                          <tr  [hidden]=\"isListLoading\" *ngFor=\"let item of skeleton; let i = index\">\n                            <td>1</td>\n                            <td>\n                              <ion-checkbox color=\"primary\"></ion-checkbox>\n                            </td>\n                            <td>\n                              <ion-item class=\"name-box\">\n                                <ion-avatar slot=\"start\">\n                                  <img src=\"assets/images/lalit.jpeg\">\n                                </ion-avatar>\n                                <ion-label>\n                                  <h2 class=\"userName\">Lalit Tutorial</h2>\n                                  <h3 class=\"userRole\">Mumbai</h3>\n                                </ion-label>\n                              </ion-item>\n                            </td>\n                            <td>\n                              8/18/2021\n                            </td>\n                            <td>\n                              +91 91258 96558\n                            </td>\n                            <td>\n                              subhajit@ulearn.in\n                            </td>\n                            <td>\n                              <div class=\"action ion-text-center\">\n                                <ion-button matTooltip=\"View\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" [routerLink]=\"['/', 'tracking-view']\">\n                                  <mat-icon>view_in_ar</mat-icon>\n                                </ion-button>\n                              </div>\n                            </td>\n                          </tr>\n                        </tbody>\n                    </table>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"action\">\n                  <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                      <mat-icon>refresh</mat-icon>\n                  </ion-button>\n                </div>\n                <div>\n                  <ul class=\"pagination\">\n                      <li class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\n                          <a>\n                            <!-- First -->\n                            <ion-icon name=\"play-skip-back\"></ion-icon>\n                          </a>\n                      </li>\n                      <li class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\n                          <a>\n                            <!-- Previous -->\n                            <ion-icon name=\"caret-back\"></ion-icon>\n                          </a>\n                      </li>\n                      <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                      <li>\n                          Page <a>1</a> of 10\n                      </li>\n                      <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                      <li class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\n                          <a>\n                            <!-- Next -->\n                            <ion-icon name=\"caret-forward\"></ion-icon>\n                          </a>\n                      </li>\n                      <li class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\n                          <a>\n                            <!-- Last -->\n                            <ion-icon name=\"play-skip-forward\"></ion-icon>\n                          </a>\n                      </li>\n                  </ul>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tracking_tracking-list_tracking-list_module_ts-es5.js.map