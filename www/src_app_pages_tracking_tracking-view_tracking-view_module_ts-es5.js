(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_tracking_tracking-view_tracking-view_module_ts"], {
    /***/
    46590:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/tracking/tracking-view/tracking-view-routing.module.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingViewPageRoutingModule": function TrackingViewPageRoutingModule() {
          return (
            /* binding */
            _TrackingViewPageRoutingModule
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


      var _tracking_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tracking-view.page */
      43648);

      var routes = [{
        path: '',
        component: _tracking_view_page__WEBPACK_IMPORTED_MODULE_0__.TrackingViewPage
      }];

      var _TrackingViewPageRoutingModule = function TrackingViewPageRoutingModule() {
        _classCallCheck(this, TrackingViewPageRoutingModule);
      };

      _TrackingViewPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TrackingViewPageRoutingModule);
      /***/
    },

    /***/
    75063:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/tracking/tracking-view/tracking-view.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingViewPageModule": function TrackingViewPageModule() {
          return (
            /* binding */
            _TrackingViewPageModule
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


      var _tracking_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tracking-view-routing.module */
      46590);
      /* harmony import */


      var _tracking_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tracking-view.page */
      43648);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _TrackingViewPageModule = function TrackingViewPageModule() {
        _classCallCheck(this, TrackingViewPageModule);
      };

      _TrackingViewPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _tracking_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrackingViewPageRoutingModule],
        declarations: [_tracking_view_page__WEBPACK_IMPORTED_MODULE_1__.TrackingViewPage]
      })], _TrackingViewPageModule);
      /***/
    },

    /***/
    43648:
    /*!********************************************************************!*\
      !*** ./src/app/pages/tracking/tracking-view/tracking-view.page.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackingViewPage": function TrackingViewPage() {
          return (
            /* binding */
            _TrackingViewPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tracking_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tracking-view.page.html */
      36874);
      /* harmony import */


      var _tracking_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tracking-view.page.scss */
      34130);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _TrackingViewPage = /*#__PURE__*/function () {
        function TrackingViewPage(toastController) {
          _classCallCheck(this, TrackingViewPage);

          this.toastController = toastController; // Variables start

          this.statusChange = true;
          this.isListLoading = false;
          this.skeleton = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
          this.gaugeType = "arch";
          this.gaugeValue = 50;
          this.gaugeLabel = "Questions";
          this.gaugeAppendText = "%";
          this.gaugethick = 10;
          this.gaugeanimate = true;
          this.gaugeduration = 1000;
          this.gaugeforegroundColor = "#f83245";
          this.chartOptions = {
            series: [21, 9, 5],
            chart: {
              width: 360,
              type: "pie"
            },
            labels: ["Marks Obtained", "Marks Deducted", "Marks Left"],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: "bottom"
                }
              }
            }]
          };
          this.chartOptions2 = {
            series: [{
              name: "Best",
              data: [44, 55, 57]
            }, {
              name: "Average",
              data: [76, 85, 101]
            }, {
              name: "Worst",
              data: [35, 41, 36]
            }],
            chart: {
              type: "bar",
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: "55%"
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ["transparent"]
            },
            xaxis: {
              categories: ["Correct", "Inorrect", "Unattempted"]
            },
            yaxis: {
              title: {
                text: "$ (thousands)"
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function formatter(val) {
                  return "$ " + val + " thousands";
                }
              }
            }
          };
        } // Variables end


        _createClass(TrackingViewPage, [{
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

        return TrackingViewPage;
      }();

      _TrackingViewPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
        }];
      };

      _TrackingViewPage.propDecorators = {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
          args: ["chart"]
        }]
      };
      _TrackingViewPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tracking-view',
        template: _raw_loader_tracking_view_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tracking_view_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TrackingViewPage);
      /***/
    },

    /***/
    34130:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/tracking/tracking-view/tracking-view.page.scss ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFja2luZy12aWV3LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    36874:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/tracking-view/tracking-view.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n            <div class=\"card-outer\">\n              <div class=\"card card-box\">\n                <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Exam Details\n                  </div>\n                  <div class=\"card-header-action\">\n                    <mat-icon>history_edu</mat-icon>\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"view-data\">\n                    <ion-grid>\n                      <ion-row>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"3\"  size-lg=\"3\">\n                          <div class=\"view-element\">\n                            <mat-icon class=\"colorLime\">note_alt</mat-icon>\n                            <span class=\"text-tittle\">Exam Name :</span>\n                            <span class=\"text-content\">Civil Services</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"3\"  size-lg=\"3\">\n                          <div class=\"view-element\">\n                            <mat-icon class=\"colorBlue\">today</mat-icon>\n                            <span class=\"text-tittle\">Exam Date :</span>\n                            <span class=\"text-content\">26/04/2021</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"3\"  size-lg=\"3\">\n                          <div class=\"view-element\">\n                            <mat-icon class=\"colorRed\">money</mat-icon>\n                            <span class=\"text-tittle\">Total Marks :</span>\n                            <span class=\"text-content\">100</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"3\"  size-lg=\"3\">\n                          <div class=\"view-element\">\n                            <mat-icon class=\"colorLightBlue\">pending_actions</mat-icon>\n                            <span class=\"text-tittle\">Total Time :</span>\n                            <span class=\"text-content\">2 Hour's</span>\n                          </div>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n          <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"8\"  size-lg=\"8\">\n            <div class=\"card-outer\">\n              <div class=\"card card-box\">\n                <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Student Details\n                  </div>\n                  <div class=\"card-header-action\">\n                    <mat-icon>badge</mat-icon>\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"view-data\">\n                    <ion-grid>\n                      <ion-row class=\"border\">\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <mat-icon class=\"colorCyan\">person</mat-icon>\n                            <span class=\"text-tittle\">Name :</span>\n                            <span class=\"text-content\">Ahadul Islam</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <mat-icon class=\"colorBlue\">phone_iphone</mat-icon>\n                            <span class=\"text-tittle\">Mobile :</span>\n                            <span class=\"text-content\">+91 90957 12589</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <mat-icon class=\"colorRed\">mail</mat-icon>\n                            <span class=\"text-tittle\">Email :</span>\n                            <span class=\"text-content\">ahadul@ulearn.com</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <mat-icon class=\"colorLightBlue\">admin_panel_settings</mat-icon>\n                            <span class=\"text-tittle\">User Name :</span>\n                            <span class=\"text-content\">ahadul101</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <mat-icon class=\"colorMaroon\">verified</mat-icon>\n                            <span class=\"text-tittle\">Emp No :</span>\n                            <span class=\"text-content\">10000511020205</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <mat-icon class=\"colorLightGreen\">my_location</mat-icon>\n                            <span class=\"text-tittle\">Address :</span>\n                            <span class=\"text-content\">148/2, Dunlop</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <mat-icon class=\"colorLime\">room</mat-icon>\n                            <span class=\"text-tittle\">City :</span>\n                            <span class=\"text-content\">Kolkata</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <mat-icon class=\"colorOlive\">explore</mat-icon>\n                            <span class=\"text-tittle\">State :</span>\n                            <span class=\"text-content\">West Bengal</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <mat-icon class=\"colorOrange\">public</mat-icon>\n                            <span class=\"text-tittle\">Country :</span>\n                            <span class=\"text-content\">India</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <mat-icon class=\"colorMaroon\">pin_drop</mat-icon>\n                            <span class=\"text-tittle\">Pin :</span>\n                            <span class=\"text-content\">700108</span>\n                          </div>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n\n          <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\">\n            <div class=\"status-spiner\">\n              <div class=\"card-outer\">\n                <div class=\"card card-box\">\n                  <div class=\"card-header noBorder\">\n                    <div class=\"card-header-tittle\">\n                      <b>Exam Status</b>\n                    </div>\n                    <div class=\"card-header-action\">\n                      <!-- <mat-icon>badge</mat-icon> -->\n                    </div>\n                  </div>\n                  <div class=\"card-body ion-text-center\">\n                    <ngx-gauge [type]=\"gaugeType\" \n                        [value]=\"gaugeValue\" \n                        [label]=\"gaugeLabel\"\n                        [thick] = \"gaugethick\"  \n                        [foregroundColor] = \"gaugeforegroundColor\"\n                        [animate] = \"gaugeanimate\"\n                        [duration] = \"gaugeduration\"\n                        [append]=\"gaugeAppendText\">\n                    </ngx-gauge>\n                  </div>\n                  <div class=\"card-footer noBorder\">\n                    <div class=\"spiner-badge\">\n                      <div class=\"badge-item\">\n                        <span class=\"badge-name\">Complete</span>\n                        <span class=\"badge complete\"></span>\n                      </div>\n                      <div class=\"badge-item\">\n                        <span class=\"badge incomplete\"></span>\n                        <span class=\"badge-name\">Incomplete</span>\n                        \n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n\n          <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"8\"  size-lg=\"8\">\n            <div class=\"card-outer\">\n              <div class=\"card card-box\">\n                <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Exam Summary\n                  </div>\n                  <div class=\"card-header-action\">\n                    <mat-icon>assignment</mat-icon>\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"view-data\">\n                    <ion-grid>\n                      <ion-row class=\"border\">\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <span class=\"text-tittle\">Total Questions :</span>\n                            <span class=\"text-content\">25</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <span class=\"text-tittle\">Full Marks :</span>\n                            <span class=\"text-content\">100</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <span class=\"text-tittle\">Correct Response :</span>\n                            <span class=\"text-content\">3</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <span class=\"text-tittle\">Marks Obtained :</span>\n                            <span class=\"text-content\">9</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <span class=\"text-tittle\">Incorrect Response :</span>\n                            <span class=\"text-content\">5</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <span class=\"text-tittle\">Marks Deducted :</span>\n                            <span class=\"text-content\">5</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <span class=\"text-tittle\">Unattempted Response :</span>\n                            <span class=\"text-content\">7</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <span class=\"text-tittle\">Marks Left :</span>\n                            <span class=\"text-content\">21</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <span class=\"text-tittle\">Total Time Spent (in Hr:Min:Sec) :</span>\n                            <span class=\"text-content\">\t00:07:03</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <span class=\"text-tittle\">Average Time per Question (in Min:Sec) :</span>\n                            <span class=\"text-content\">00:16</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <span class=\"text-tittle\">Result of Marks :</span>\n                            <span class=\"text-content\">\t4</span>\n                          </div>\n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                          <div class=\"view-element\">\n                            <span class=\"text-tittle\">Percentage :</span>\n                            <span class=\"text-content\">\t5.33</span>\n                          </div>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n\n          <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\">\n            <div class=\"status-spiner\">\n              <div class=\"card-outer\">\n                <div class=\"card card-box\">\n                  <div class=\"card-header noBorder\">\n                    <div class=\"card-header-tittle\">\n                      <b>Chart of Marks Deviation Calculation</b>\n                    </div>\n                    <div class=\"card-header-action\">\n                      <!-- <mat-icon>badge</mat-icon> -->\n                    </div>\n                  </div>\n                  <div class=\"card-body ion-text-center\">\n                    <div id=\"chart\">\n                      <apx-chart\n                        [series]=\"chartOptions.series\"\n                        [chart]=\"chartOptions.chart\"\n                        [labels]=\"chartOptions.labels\"\n                        [responsive]=\"chartOptions.responsive\"\n                      ></apx-chart>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div class=\"ordinary-table\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Speed Accuracy\n                  </div>\n                  <div class=\"card-header-action\">\n                    <mat-icon>speed</mat-icon>\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"ordinary-table-inner\">\n                  <table>\n                    <thead>\n                      <tr>\n                        <th>#</th>\n                        <th>Average Time (in Min:Sec)</th>\n                        <th>Best Time (in Min:Sec)</th>\n                        <th>Worst Time (in Min:Sec)</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td><b>Correct Response</b></td>\n                        <td>00:01</td>\n                        <td>00:01</td>\n                        <td>\t00:01</td>\n                      </tr>\n                      <tr>\n                        <td><b>Inorrect Response</b></td>\n                        <td>00:30</td>\n                        <td>00:01</td>\n                        <td>02:08</td>\n                      </tr>\n                      <tr>\n                        <td><b>Unattempted Response</b></td>\n                        <td>00:36</td>\n                        <td>00:01</td>\n                        <td>02:42</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n            <div class=\"status-spiner\">\n              <div class=\"card-outer\">\n                <div class=\"card card-box\">\n                  <div class=\"card-header noBorder\">\n                    <div class=\"card-header-tittle\">\n                      <b>CHART OF TIME TAKEN PER QUESTION</b>\n                    </div>\n                    <div class=\"card-header-action\">\n                      <!-- <mat-icon>badge</mat-icon> -->\n                    </div>\n                  </div>\n                  <div class=\"card-body ion-text-center\">\n                    <div id=\"chart\">\n                      <apx-chart\n                        [series]=\"chartOptions2.series\"\n                        [chart]=\"chartOptions2.chart\"\n                        [dataLabels]=\"chartOptions2.dataLabels\"\n                        [plotOptions]=\"chartOptions2.plotOptions\"\n                        [yaxis]=\"chartOptions2.yaxis\"\n                        [legend]=\"chartOptions2.legend\"\n                        [fill]=\"chartOptions2.fill\"\n                        [stroke]=\"chartOptions2.stroke\"\n                        [tooltip]=\"chartOptions2.tooltip\"\n                        [xaxis]=\"chartOptions2.xaxis\"\n                      ></apx-chart>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div class=\"table-listing\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Questions lists\n                  </div>\n                  <div class=\"card-header-action\">\n                    <!-- <button class=\"border-btn success\" [routerLink]=\"['/', 'add-payment']\" mat-stroked-button>\n                      <mat-icon>add_circle_outline</mat-icon>\n                      Add Payment\n                    </button> -->\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"table-header\">\n                  <div class=\"records-wrapper\">\n                    <ion-item class=\"record\">\n                      <span>Records: </span>\n                      <mat-form-field>\n                        <mat-select value=\"10\">\n                          <mat-option value=\"10\">10</mat-option>\n                          <mat-option value=\"25\">25</mat-option>\n                          <mat-option value=\"50\">50</mat-option>\n                          <mat-option value=\"100\">100</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </ion-item>\n                  </div>\n                  <div class=\"search-wrapper\">\n                    <ion-searchbar showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search item ....\"></ion-searchbar>\n                  </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th class=\"ion-text-start\">\n                                    <div>\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ion-text-start\">\n                                  <div>\n                                      <ion-checkbox color=\"primary\"></ion-checkbox>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Question\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Answer\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Correct Answer\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Time Spent\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Marks\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Device Type\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Network Name\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Network Location\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Network IP\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Download Speed\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Upload Speed\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div>\n                                    Status\n                                    <mat-icon>import_export</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div class=\"ion-justify-content-center\">\n                                    Actions\n                                  </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                          <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\n                            <td colspan=\"100\">\n                              Data is loading...\n                            </td>\n                          </tr>\n                          <tr  [hidden]=\"isListLoading\" *ngFor=\"let item of skeleton; let i = index\">\n                            <td>1</td>\n                            <td>\n                              <ion-checkbox color=\"primary\"></ion-checkbox>\n                            </td>\n                            <td>\n                              Question 1\n                            </td>\n                            <td>\n                              Answer 1\n                            </td>\n                            <td>\n                              Correct answer 1\n                            </td>\n                            <td>\n                              02:42\n                            </td>\n                            <td>\n                              10\n                            </td>\n                            <td>\n                              Mobile\n                            </td>\n                            <td>\n                              Vodafone\n                            </td>\n                            <td>\n                              Kolkata\n                            </td>\n                            <td>\n                              192.108.20.01\n                            </td>\n                            <td>\n                              8.63 MBPS\n                            </td>\n                            <td>\n                              3.65 MBPS\n                            </td>\n                            <td>\n                              <div class=\"status warning\">\n                                Pending\n                              </div>\n                            </td>\n                            <td>\n                              <div class=\"action ion-text-center\">\n                                <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                                    <mat-icon>delete</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Download pdf\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                                  <mat-icon>picture_as_pdf</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Download excel\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'excel')\">\n                                    <mat-icon>description</mat-icon>\n                                </ion-button>\n                              </div>\n                            </td>\n                          </tr>\n                        </tbody>\n                    </table>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <div class=\"action\">\n                    <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                        <mat-icon>refresh</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                        <mat-icon>delete</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Download pdf\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                      <mat-icon>picture_as_pdf</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Download excel\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'excel')\">\n                        <mat-icon>description</mat-icon>\n                    </ion-button>\n                  </div>\n                  <div>\n                    <ul class=\"pagination\">\n                        <li class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- First -->\n                              <ion-icon name=\"play-skip-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Previous -->\n                              <ion-icon name=\"caret-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li>\n                            Page <a>1</a> of 10\n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Next -->\n                              <ion-icon name=\"caret-forward\"></ion-icon>\n                            </a>\n                        </li>\n                        <li class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Last -->\n                              <ion-icon name=\"play-skip-forward\"></ion-icon>\n                            </a>\n                        </li>\n                    </ul>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tracking_tracking-view_tracking-view_module_ts-es5.js.map