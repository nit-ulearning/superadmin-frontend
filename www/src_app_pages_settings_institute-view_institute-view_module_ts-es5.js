(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_settings_institute-view_institute-view_module_ts"], {
    /***/
    61110:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/settings/institute-view/institute-view-routing.module.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InstituteViewPageRoutingModule": function InstituteViewPageRoutingModule() {
          return (
            /* binding */
            _InstituteViewPageRoutingModule
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


      var _institute_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./institute-view.page */
      6637);

      var routes = [{
        path: '',
        component: _institute_view_page__WEBPACK_IMPORTED_MODULE_0__.InstituteViewPage
      }];

      var _InstituteViewPageRoutingModule = function InstituteViewPageRoutingModule() {
        _classCallCheck(this, InstituteViewPageRoutingModule);
      };

      _InstituteViewPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _InstituteViewPageRoutingModule);
      /***/
    },

    /***/
    92992:
    /*!************************************************************************!*\
      !*** ./src/app/pages/settings/institute-view/institute-view.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InstituteViewPageModule": function InstituteViewPageModule() {
          return (
            /* binding */
            _InstituteViewPageModule
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


      var _institute_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./institute-view-routing.module */
      61110);
      /* harmony import */


      var _institute_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./institute-view.page */
      6637);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _InstituteViewPageModule = function InstituteViewPageModule() {
        _classCallCheck(this, InstituteViewPageModule);
      };

      _InstituteViewPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _institute_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.InstituteViewPageRoutingModule],
        declarations: [_institute_view_page__WEBPACK_IMPORTED_MODULE_1__.InstituteViewPage]
      })], _InstituteViewPageModule);
      /***/
    },

    /***/
    6637:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/settings/institute-view/institute-view.page.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InstituteViewPage": function InstituteViewPage() {
          return (
            /* binding */
            _InstituteViewPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_institute_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./institute-view.page.html */
      89841);
      /* harmony import */


      var _institute_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./institute-view.page.scss */
      96313);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _InstituteViewPage = /*#__PURE__*/function () {
        function InstituteViewPage(toastController, alertController, plt, http, commonUtils, // common functionlity come here
        router, activatedRoute) {
          _classCallCheck(this, InstituteViewPage);

          this.toastController = toastController;
          this.alertController = alertController;
          this.plt = plt;
          this.http = http;
          this.commonUtils = commonUtils;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.statusChange = true;
          this.isListLoading = false;
          this.skeleton = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
        }

        _createClass(InstituteViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonFunction();
          }
        }, {
          key: "commonFunction",
          value: function commonFunction() {
            // view data
            this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
            console.log("parms_action_id", this.parms_action_id);
            this.view_url = 'institute/view/' + this.parms_action_id;
            this.getInst();
          } // getTemplatefor start

        }, {
          key: "getInst",
          value: function getInst() {
            var _this = this;

            console.log("HHH");
            this.InstView_get = this.http.get(this.view_url).subscribe(function (res) {
              _this.instView = res;
              console.log("All Values", _this.instView);
              console.log("All Values", _this.instView.instituteAddress.length);
              _this.addlen = _this.instView.instituteAddress.length;
            }, function (errRes) {
              console.log("Get template for  >", errRes);
            });
          }
        }]);

        return InstituteViewPage;
      }();

      _InstituteViewPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform
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

      _InstituteViewPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-institute-view',
        template: _raw_loader_institute_view_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_institute_view_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InstituteViewPage);
      /***/
    },

    /***/
    96313:
    /*!************************************************************************!*\
      !*** ./src/app/pages/settings/institute-view/institute-view.page.scss ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0aXR1dGUtdmlldy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    89841:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/institute-view/institute-view.page.html ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"form-layout\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Institute View\n                  </div>\n                  <div class=\"card-header-action\">\n                    <img *ngIf=\"instView?.instLogo\" class=\"ListingLogo\" src=\"{{instView?.instLogo}}\" alt=\"logo\">\n                    <img *ngIf=\"!instView?.instLogo\" class=\"ListingLogo\" src=\"assets/images/noimage.jpg\" alt=\"logo\">\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">Institute Name: <span class=\"\">{{instView?.instName}}</span></p>\n\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">Registration Date: <span>{{instView?.isntRegDate}}</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">Establishment Date: <span>{{instView?.instEndDate}}</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">Website/Domain Name: <span>{{instView?.instWebsite}}</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">Institute Email: <span>{{instView?.instEmail}}</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">Institute Contact Number: <span>{{instView?.instCnum}}</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">Institute Mobile Number: <span>{{instView?.instMnum}}</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">GSTIN / UIN No: <span>{{instView?.instGstNum}}</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">PAN Number: <span>{{instView?.instPanNum}}</span></p>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row class=\"mar-top\">\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">Owner Name: <span class=\"name\">{{instView?.instituteAdmin[0].amdFname}} {{instView?.instituteAdmin[0].amdLname}}</span></p>\n\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">Date of Birth: <span>{{instView?.instituteAdmin[0].amdDob}}</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">Mobile Number: <span>{{instView?.instituteAdmin[0].amdMnum}}</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">Address Line 1:<span>{{instView?.instituteAddress[0].adrLine1}}</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">Address Line 2: <span>{{instView?.instituteAddress[0].adrLine2}}</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">Country:<span>India</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <!-- <p class=\"information-title\">State:<span>{{instView?.instName}}</span></p> -->\n                      <p class=\"information-title\">State:<span>West Bengal</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <!-- <p class=\"information-title\">District: <span>{{instView?.instName}}</span></p> -->\n                      <p class=\"information-title\">District: <span>Howrah</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                     <!--  <p class=\"information-title\">City:<span>{{instView?.instName}}</span></p> -->\n                     <p class=\"information-title\">City:<span>Howrah</span></p>\n                    </ion-col>\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\n                      <p class=\"information-title\">Pincode: <span>711401</span></p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n                <!-- License List start -->\n                <div class=\"table-listing margin-top\">\n                  <div class=\"card-outer\">\n                    <div class=\"card card-box\">\n                        <div class=\"card-header\">\n                            <div class=\"card-header-tittle\">\n                              License List\n                            </div>\n                            <div class=\"card-header-action\">\n                              <button class=\"border-btn success\" [routerLink]=\"['/','add-license', 'add', 'id']\"  mat-stroked-button>\n                                <mat-icon>add_circle_outline</mat-icon>\n                                Add License\n                              </button>\n                            </div>\n                        </div>\n                        <div class=\"card-body\">\n                          <!-- <div class=\"table-header\">\n                            <div class=\"records-wrapper\">\n                              <ion-item class=\"record\">\n                                <span>Records: </span>\n                                <mat-form-field>\n                                  <mat-select value=\"10\">\n                                    <mat-option value=\"10\">10</mat-option>\n                                    <mat-option value=\"25\">25</mat-option>\n                                    <mat-option value=\"50\">50</mat-option>\n                                    <mat-option value=\"100\">100</mat-option>\n                                  </mat-select>\n                                </mat-form-field>\n                              </ion-item>\n                            </div>\n                            <div class=\"search-wrapper\">\n                              <ion-searchbar showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search item ....\"></ion-searchbar>\n                            </div>\n                          </div> -->\n                          <div class=\"table-responsive\">\n                              <table class=\"table\">\n                                  <thead>\n                                      <tr>\n                                          <th class=\"ion-text-start\">\n                                              <div>\n                                                  #\n                                              </div>\n                                          </th>\n                                          <th class=\"ion-text-start\">\n                                            <div>\n                                                <ion-checkbox color=\"primary\"></ion-checkbox>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              Institute\n                                              <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              Creation Date\n                                              <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              Validity\n                                              <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              Numbers\n                                              <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              Expiry Date\n                                              <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              Server Type\n                                              <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              Status\n                                              <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div class=\"ion-justify-content-center\">\n                                              Actions\n                                            </div>\n                                          </th>\n                                      </tr>\n                                  </thead>\n                                  <tbody>\n                                    <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\n                                      <td colspan=\"100\">\n                                        Data is loading...\n                                      </td>\n                                    </tr>\n                                    <tr  [hidden]=\"isListLoading\" *ngFor=\"let item of skeleton; let i = index\">\n                                      <td>1</td>\n                                      <td>\n                                        <ion-checkbox color=\"primary\"></ion-checkbox>\n                                      </td>\n                                      <td>\n                                        Lalit Tutorial\n                                      </td>\n                                      <td>\n                                        03/07/2021\n                                      </td>\n                                      <td>\n                                        Years\n                                      </td>\n                                      <td>\n                                        2\n                                      </td>\n                                      <td>\n                                        03/07/2021\n                                      </td>\n                                      <td>\n                                        Own AWS\n                                      </td>\n                                      <td>\n                                        <div class=\"status success\">\n                                          Active\n                                        </div>\n                                      </td>\n                                      <td>\n                                        <div class=\"action ion-text-center\">\n                                          <ion-button matTooltip=\"Payment\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'edit')\" [routerLink]=\"['/', 'add-subscription-package']\">\n                                            <mat-icon>payments</mat-icon>\n                                          </ion-button>\n                                          <ion-button matTooltip=\"Generate Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"clickActionBtn('', 'delete')\">\n                                              <mat-icon>done_all</mat-icon>\n                                          </ion-button>\n                                          <ion-button matTooltip=\"Suspend Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                                              <mat-icon>report_off</mat-icon>\n                                          </ion-button>\n                                          <ion-button matTooltip=\"Restore Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'excel')\">\n                                              <mat-icon>restore</mat-icon>\n                                          </ion-button>\n                                          <ion-button matTooltip=\"End Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'excel')\">\n                                            <mat-icon>remove_done</mat-icon>\n                                          </ion-button>\n                                          <ion-button matTooltip=\"Renew Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'excel')\">\n                                            <mat-icon>loop</mat-icon>\n                                          </ion-button>\n                                          <ion-button matTooltip=\"Extend Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'excel')\">\n                                            <mat-icon>format_line_spacing</mat-icon>\n                                          </ion-button>\n                                        </div>\n                                      </td>\n                                    </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                        </div>\n                        <!-- <div class=\"card-footer\">\n                            <div class=\"action\">\n                              <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                                  <mat-icon>refresh</mat-icon>\n                              </ion-button>\n                              <ion-button matTooltip=\"Send certificate\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'sendMail')\">\n                                <mat-icon>attach_email</mat-icon>\n                              </ion-button>\n                              <ion-button matTooltip=\"Enable\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                                  <mat-icon>visibility</mat-icon>\n                              </ion-button>\n                              <ion-button matTooltip=\"Disable\" matTooltipPosition=\"above\" size=\"small\" color=\"medium\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                                  <mat-icon>visibility_off</mat-icon>\n                              </ion-button>\n                              <ion-button matTooltip=\"Download certificate\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                                <mat-icon>card_giftcard</mat-icon>\n                              </ion-button>\n                              <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                                  <mat-icon>delete</mat-icon>\n                              </ion-button>\n                            </div>\n                            <div>\n                              <ul class=\"pagination\">\n                                  <li class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\n                                      <a>\n                                        First\n                                        <ion-icon name=\"play-skip-back\"></ion-icon>\n                                      </a>\n                                  </li>\n                                  <li class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\n                                      <a>\n                                        Previous\n                                        <ion-icon name=\"caret-back\"></ion-icon>\n                                      </a>\n                                  </li>\n                                  <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                                  <li>\n                                      Page <a>1</a> of 10\n                                  </li>\n                                  <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                                  <li class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\n                                      <a>\n                                        Next\n                                        <ion-icon name=\"caret-forward\"></ion-icon>\n                                      </a>\n                                  </li>\n                                  <li class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\n                                      <a>\n                                        Last\n                                        <ion-icon name=\"play-skip-forward\"></ion-icon>\n                                      </a>\n                                  </li>\n                              </ul>\n                            </div>\n                        </div> -->\n                    </div>\n                  </div>\n                </div>\n                <!-- License List end -->\n                <!-- Package List start -->\n                <div class=\"table-listing margin-top\">\n                  <div class=\"card-outer\">\n                    <div class=\"card card-box\">\n                        <div class=\"card-header\">\n                            <div class=\"card-header-tittle\">\n                                Package List\n                            </div>\n                            <div class=\"card-header-action\">\n                              <button class=\"border-btn success\" [routerLink]=\"['/','add-subscription-package', 'add', 'id']\" mat-stroked-button>\n                                <mat-icon>add_circle_outline</mat-icon>\n                                Add Package\n                              </button>\n                            </div>\n                        </div>\n                        <div class=\"card-body\">\n                          <!-- <div class=\"table-header\">\n                            <div class=\"records-wrapper\">\n                              <ion-item class=\"record\">\n                                <span>Records: </span>\n                                <mat-form-field>\n                                  <mat-select value=\"10\">\n                                    <mat-option value=\"10\">10</mat-option>\n                                    <mat-option value=\"25\">25</mat-option>\n                                    <mat-option value=\"50\">50</mat-option>\n                                    <mat-option value=\"100\">100</mat-option>\n                                  </mat-select>\n                                </mat-form-field>\n                              </ion-item>\n                            </div>\n                            <div class=\"search-wrapper\">\n                              <ion-searchbar showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search item ....\"></ion-searchbar>\n                            </div>\n                          </div> -->\n                          <div class=\"table-responsive\">\n                              <table class=\"table\">\n                                  <thead>\n                                      <tr>\n                                          <th class=\"ion-text-start\">\n                                              <div>\n                                                  #\n                                              </div>\n                                          </th>\n                                          <th class=\"ion-text-start\">\n                                            <div>\n                                                <ion-checkbox color=\"primary\"></ion-checkbox>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              Institute\n                                                <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              Request Date\n                                              <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              Package\n                                              <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              No. of Users\n                                              <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              Request Type\n                                              <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              Request By\n                                              <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              Remarks\n                                              <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div>\n                                              Status\n                                              <mat-icon>import_export</mat-icon>\n                                            </div>\n                                          </th>\n                                          <th class=\"ion-text-center\">\n                                            <div class=\"ion-justify-content-center\">\n                                              Actions\n                                            </div>\n                                          </th>\n                                      </tr>\n                                  </thead>\n                                  <tbody>\n                                    <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\n                                      <td colspan=\"100\">\n                                        Data is loading...\n                                      </td>\n                                    </tr>\n                                    <tr  [hidden]=\"isListLoading\" *ngFor=\"let item of skeleton; let i = index\">\n                                      <td>1</td>\n                                      <td>\n                                        <ion-checkbox color=\"primary\"></ion-checkbox>\n                                      </td>\n                                      <td>\n                                        Lalit Tutorial\n                                      </td>\n                                      <td>\n                                        03/07/2021\n                                      </td>\n                                      <td>\n                                        REG10020211009\n                                      </td>\n                                      <td>\n                                        100\n                                      </td>\n                                      <td>\n                                        New Package\n                                      </td>\n                                      <td>\n                                        Admin\n                                      </td>\n                                      <td>\n                                        Remark 1\n                                      </td>\n                                      <td>\n                                        <div class=\"status success\">\n                                          Active\n                                        </div>\n                                      </td>\n                                      <td>\n                                        <div class=\"action ion-text-center\">\n                                          <ion-button matTooltip=\"Payment\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'edit')\" [routerLink]=\"['/', 'add-subscription-package']\">\n                                              <mat-icon>payments</mat-icon>\n                                          </ion-button>\n                                          <ion-button matTooltip=\"Approve\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"clickActionBtn('', 'delete')\">\n                                              <mat-icon>done_all</mat-icon>\n                                          </ion-button>\n                                          <ion-button matTooltip=\"Suspend\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                                              <mat-icon>report_off</mat-icon>\n                                          </ion-button>\n                                          <ion-button matTooltip=\"Restore\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'excel')\">\n                                              <mat-icon>restore</mat-icon>\n                                          </ion-button>\n                                          <ion-button matTooltip=\"End\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'excel')\">\n                                            <mat-icon>remove_done</mat-icon>\n                                          </ion-button>\n                                        </div>\n                                      </td>\n                                    </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                        </div>\n                        <!-- <div class=\"card-footer\">\n                            <div class=\"action\">\n                              <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                                  <mat-icon>refresh</mat-icon>\n                              </ion-button>\n                              <ion-button matTooltip=\"Enable\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                                  <mat-icon>visibility</mat-icon>\n                              </ion-button>\n                              <ion-button matTooltip=\"Disable\" matTooltipPosition=\"above\" size=\"small\" color=\"medium\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                                  <mat-icon>visibility_off</mat-icon>\n                              </ion-button>\n                              <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                                  <mat-icon>delete</mat-icon>\n                              </ion-button>\n                            </div>\n                            <div>\n                              <ul class=\"pagination\">\n                                  <li class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\n                                      <a>\n                                        First\n                                        <ion-icon name=\"play-skip-back\"></ion-icon>\n                                      </a>\n                                  </li>\n                                  <li class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\n                                      <a>\n                                        Previous\n                                        <ion-icon name=\"caret-back\"></ion-icon>\n                                      </a>\n                                  </li>\n                                  <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                                  <li>\n                                      Page <a>1</a> of 10\n                                  </li>\n                                  <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                                  <li class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\n                                      <a>\n                                        Next\n                                        <ion-icon name=\"caret-forward\"></ion-icon>\n                                      </a>\n                                  </li>\n                                  <li class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\n                                      <a>\n                                        Last\n                                        <ion-icon name=\"play-skip-forward\"></ion-icon>\n                                      </a>\n                                  </li>\n                              </ul>\n                            </div>\n                        </div> -->\n                    </div>\n                  </div>\n                </div>\n                <!--  Package List end -->\n              </div>\n              \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_settings_institute-view_institute-view_module_ts-es5.js.map