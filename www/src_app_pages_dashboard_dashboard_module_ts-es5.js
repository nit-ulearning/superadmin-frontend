(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"], {
    /***/
    99366:
    /*!*************************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPageRoutingModule": function DashboardPageRoutingModule() {
          return (
            /* binding */
            _DashboardPageRoutingModule
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


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.page */
      76446);

      var routes = [{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
      }];

      var _DashboardPageRoutingModule = function DashboardPageRoutingModule() {
        _classCallCheck(this, DashboardPageRoutingModule);
      };

      _DashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DashboardPageRoutingModule);
      /***/
    },

    /***/
    71659:
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPageModule": function DashboardPageModule() {
          return (
            /* binding */
            _DashboardPageModule
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


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      99366);
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.page */
      76446);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _DashboardPageModule = function DashboardPageModule() {
        _classCallCheck(this, DashboardPageModule);
      };

      _DashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
      })], _DashboardPageModule);
      /***/
    },

    /***/
    76446:
    /*!***************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPage": function DashboardPage() {
          return (
            /* binding */
            _DashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./dashboard.page.html */
      60419);
      /* harmony import */


      var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.page.scss */
      24494);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _DashboardPage = /*#__PURE__*/function () {
        function DashboardPage(menuCtrl) {
          _classCallCheck(this, DashboardPage);

          this.menuCtrl = menuCtrl;
          this.chartOptions = {
            series: [{
              name: "series1",
              data: [31, 40, 28, 51, 42, 109, 100]
            }, {
              name: "series2",
              data: [11, 32, 45, 32, 34, 52, 41]
            }],
            chart: {
              height: 350,
              type: "area"
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: "smooth"
            },
            xaxis: {
              type: "datetime",
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: "dd/MM/yy HH:mm"
              }
            }
          };
          this.chartOption = {
            series: [{
              name: "Website Blog",
              type: "column",
              data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            }, {
              name: "Social Media",
              type: "line",
              data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            }],
            chart: {
              height: 350,
              type: "line"
            },
            stroke: {
              width: [0, 4]
            },
            title: {
              text: "Traffic Sources"
            },
            dataLabels: {
              enabled: true,
              enabledOnSeries: [1]
            },
            labels: ["01 Jan 2001", "02 Jan 2001", "03 Jan 2001", "04 Jan 2001", "05 Jan 2001", "06 Jan 2001", "07 Jan 2001", "08 Jan 2001", "09 Jan 2001", "10 Jan 2001", "11 Jan 2001", "12 Jan 2001"],
            xaxis: {
              type: "datetime"
            },
            yaxis: [{
              title: {
                text: "Website Blog"
              }
            }, {
              opposite: true,
              title: {
                text: "Social Media"
              }
            }]
          };
        }

        _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuCtrl.enable(true);
          }
        }, {
          key: "generateData",
          value: function generateData(baseval, count, yrange) {
            var i = 0;
            var series = [];

            while (i < count) {
              var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
              var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
              var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
              series.push([x, y, z]);
              baseval += 86400000;
              i++;
            }

            return series;
          }
        }]);

        return DashboardPage;
      }();

      _DashboardPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController
        }];
      };

      _DashboardPage.propDecorators = {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
          args: ["chart"]
        }]
      };
      _DashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DashboardPage);
      /***/
    },

    /***/
    24494:
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    60419:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n    <div class=\"page-body\">\n        <div class=\"page-wrapper\">\n            <div class=\"note-section\">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\n                            <div class=\"note-item card-outer note-box-primary\">\n                                <div class=\"card card-box\">\n                                    <div class=\"top\">\n                                        <div class=\"icon\">\n                                            <mat-icon>keyboard</mat-icon>\n                                        </div>\n                                        <div class=\"text\">Orders</div>\n                                    </div>\n                                    <div class=\"middle\">\n                                        <mat-icon>arrow_downward</mat-icon>\n                                        <div>$3,485</div>\n                                    </div>\n                                    <div class=\"bottom\"><b>+36%</b> from last month</div>\n                                </div>\n                            </div>             \n                        </ion-col>\n                        <ion-col n-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\n                            <div class=\"note-item card-outer note-box-success\">\n                                <div class=\"card card-box\">\n                                    <div class=\"top\">\n                                        <div class=\"icon\">\n                                            <mat-icon>description</mat-icon>\n                                        </div>\n                                        <div class=\"text\">Reports</div>\n                                    </div>\n                                    <div class=\"middle\">\n                                        <mat-icon>arrow_upward</mat-icon>\n                                        <div>436</div>\n                                    </div>\n                                    <div class=\"bottom\"><b>+65%</b> from last month</div>\n                                </div>\n                            </div>             \n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\n                            <div class=\"note-item card-outer note-box-danger\">\n                                <div class=\"card card-box\">\n                                    <div class=\"top\">\n                                        <div class=\"icon\">\n                                            <mat-icon>person</mat-icon>\n                                        </div>\n                                        <div class=\"text\">Customers</div>\n                                    </div>\n                                    <div class=\"middle\">\n                                        <mat-icon>arrow_downward</mat-icon>\n                                        <div>4867</div>\n                                    </div>\n                                    <div class=\"bottom\"><b>+22%</b> from last month</div>\n                                </div>\n                            </div>             \n                        </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\n                            <div class=\"note-item card-outer note-box-warning \">\n                                <div class=\"card card-box\">\n                                    <div class=\"top\">\n                                        <div class=\"icon\">\n                                            <mat-icon>keyboard</mat-icon>\n                                        </div>\n                                        <div class=\"text\">Sales</div>\n                                    </div>\n                                    <div class=\"middle\">\n                                        <mat-icon>arrow_upward</mat-icon>\n                                        <div>433</div>\n                                    </div>\n                                    <div class=\"bottom\"><b>+32%</b> from last month</div>\n                                </div>\n                            </div>             \n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n            <ion-grid>\n                <ion-row>\n                    <ion-col size-md=\"6\" size-lg=\"6\">\n                        <div class=\"card-outer chart-box\">\n                            <div class=\"card card-box\">\n                                <div class=\"card-header\">\n                                    <div class=\"card-header-tittle\">\n                                        <h6>Sales statistics</h6>\n                                    </div>\n                                    <div class=\"card-header-action\">\n                                        <mat-icon>stacked_line_chart</mat-icon>\n                                    </div>\n                                </div>\n                                <div class=\"card-body\">\n                                    <div id=\"chart\">\n                                        <apx-chart\n                                          [series]=\"chartOptions.series\"\n                                          [chart]=\"chartOptions.chart\"\n                                          [xaxis]=\"chartOptions.xaxis\"\n                                          [stroke]=\"chartOptions.stroke\"\n                                          [tooltip]=\"chartOptions.tooltip\"\n                                          [dataLabels]=\"chartOptions.dataLabels\"\n                                        ></apx-chart>\n                                    `</div>\n                                    <div class=\"chart-segment\">\n                                        <ion-segment value=\"lastWeek\">\n                                            <ion-segment-button value=\"lastWeek\">\n                                              <ion-label>Last Week</ion-label>\n                                            </ion-segment-button>\n                                            <ion-segment-button value=\"lastMonth\">\n                                              <ion-label>Last Month</ion-label>\n                                            </ion-segment-button>\n                                            <ion-segment-button value=\"lastYear\">\n                                              <ion-label>Last Year</ion-label>\n                                            </ion-segment-button>\n                                        </ion-segment>\n                                    </div>\n                                    <div class=\"chart-details\">\n                                        <ion-row>\n                                            <ion-col size-md=\"12\" size-lg=\"6\">\n                                                <div class=\"chart-details-item\">\n                                                    <div class=\"chart-details-header\">\n                                                        <div class=\"text-bold\">Orders</div>\n                                                        <div class=\"text-bold\" style=\"color: #F64545;\">345</div>\n                                                    </div>\n                                                    <div class=\"chart-details-body\">\n                                                        <div class=\"progress-wrapper\">\n                                                            <div class=\"progress-bar progress-bar-width complete\" style=\"width: 90%;\" data-progress-bar-percent=\"100\">\n                                                              <div class=\"progress-bar-anim\">90%</div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"chart-details-header chart-details-footer\">\n                                                        <div>Target</div>\n                                                        <div>100%</div>\n                                                    </div>\n                                                </div>\n                                            </ion-col>\n                                            <ion-col size-md=\"12\" size-lg=\"6\">\n                                                <div class=\"chart-details-item\">\n                                                    <div class=\"chart-details-header\">\n                                                        <div class=\"text-bold\">Customers</div>\n                                                        <div class=\"text-bold\" style=\"color: #F4772E;\">433</div>\n                                                    </div>\n                                                    <div class=\"chart-details-body\">\n                                                        <div class=\"progress-wrapper\">\n                                                            <div class=\"progress-bar progress-bar-width complete\" style=\"width: 90%;\" data-progress-bar-percent=\"100\">\n                                                              <div class=\"progress-bar-anim\">90%</div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"chart-details-header chart-details-footer\">\n                                                        <div>Target</div>\n                                                        <div>100%</div>\n                                                    </div>\n                                                </div>\n                                            </ion-col>\n                                        </ion-row>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ion-col>\n                    <ion-col size-md=\"6\" size-lg=\"6\">\n                        <div class=\"card-outer chart-box\">\n                            <div class=\"card card-box\">\n                                <div class=\"card-header\">\n                                    <div class=\"card-header-tittle\">\n                                        <h6>Sales statistics</h6>\n                                    </div>\n                                    <div class=\"card-header-action\">\n                                        <mat-icon>stacked_line_chart</mat-icon>\n                                    </div>\n                                </div>\n                                <div class=\"card-body\">\n                                    <div id=\"chart\">\n                                        <apx-chart\n                                          [series]=\"chartOption.series\"\n                                          [chart]=\"chartOption.chart\"\n                                          [yaxis]=\"chartOption.yaxis\"\n                                          [xaxis]=\"chartOption.xaxis\"\n                                          [labels]=\"chartOption.labels\"\n                                          [stroke]=\"chartOption.stroke\"\n                                          [title]=\"chartOption.title\"\n                                          [dataLabels]=\"chartOption.dataLabels\"\n                                          [fill]=\"chartOption.fill\"\n                                          [tooltip]=\"chartOption.tooltip\"\n                                        ></apx-chart>\n                                    </div>\n                                    <div class=\"chart-segment\">\n                                        <ion-segment value=\"lastWeek\">\n                                            <ion-segment-button value=\"lastWeek\">\n                                              <ion-label>Last Week</ion-label>\n                                            </ion-segment-button>\n                                            <ion-segment-button value=\"lastMonth\">\n                                              <ion-label>Last Month</ion-label>\n                                            </ion-segment-button>\n                                            <ion-segment-button value=\"lastYear\">\n                                              <ion-label>Last Year</ion-label>\n                                            </ion-segment-button>\n                                        </ion-segment>\n                                    </div>\n                                    <div class=\"chart-details\">\n                                        <ion-row>\n                                            <ion-col size-md=\"12\" size-lg=\"6\">\n                                                <div class=\"chart-details-item\">\n                                                    <div class=\"chart-details-header\">\n                                                        <div class=\"text-bold\">Orders</div>\n                                                        <div class=\"text-bold\" style=\"color: #59CA44;\">345</div>\n                                                    </div>\n                                                    <div class=\"chart-details-body\">\n                                                        <div class=\"progress-wrapper\">\n                                                            <div class=\"progress-bar progress-bar-width complete\" style=\"width: 90%;\" data-progress-bar-percent=\"100\">\n                                                              <div class=\"progress-bar-anim\">90%</div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"chart-details-header chart-details-footer\">\n                                                        <div>Target</div>\n                                                        <div>100%</div>\n                                                    </div>\n                                                </div>\n                                            </ion-col>\n                                            <ion-col size-md=\"12\" size-lg=\"6\">\n                                                <div class=\"chart-details-item\">\n                                                    <div class=\"chart-details-header\">\n                                                        <div class=\"text-bold\">Customers</div>\n                                                        <div class=\"text-bold\" style=\"color: #32C5DB;\">433</div>\n                                                    </div>\n                                                    <div class=\"chart-details-body\">\n                                                        <div class=\"progress-wrapper\">\n                                                            <div class=\"progress-bar progress-bar-width complete\" style=\"width: 90%;\" data-progress-bar-percent=\"100\">\n                                                              <div class=\"progress-bar-anim\">90%</div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"chart-details-header chart-details-footer\">\n                                                        <div>Target</div>\n                                                        <div>100%</div>\n                                                    </div>\n                                                </div>\n                                            </ion-col>\n                                        </ion-row>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col size-md=\"6\" size-lg=\"12\">\n                        <div class=\"card-outer\">\n                            <div class=\"card card-box\">\n                                <div class=\"card-header\">\n                                    <div class=\"card-header-tittle\">\n                                        Employees status \n                                    </div>\n                                    <div class=\"card-header-action\">\n                                        <mat-icon>settings</mat-icon>\n                                    </div>\n                                </div>\n                                <div class=\"card-body\">\n                                    <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th class=\"ion-text-start\">#</th>\n                                                    <th class=\"ion-text-start\">Name</th>\n                                                    <th class=\"ion-text-center\">Status</th>\n                                                    <th class=\"ion-text-center\">Progress</th>\n                                                    <th class=\"ion-text-center\">Actions</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>12</td>\n                                                    <td>\n                                                        <ion-item class=\"name-box\">\n                                                            <ion-avatar slot=\"start\">\n                                                              <img src=\"assets/images/avatar1.jpg\">\n                                                            </ion-avatar>\n                                                            <ion-label>\n                                                              <h2 class=\"userName\">Shanelle Wynn</h2>\n                                                              <h3 class=\"userRole\">UI Engineer, Apple Inc.</h3>\n                                                            </ion-label>\n                                                        </ion-item>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"status warning\">\n                                                            Pending\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"progress-wrapper\">\n                                                            <div class=\"progress-bar progress-bar-width warning\" style=\"width: 60%;\" data-progress-bar-percent=\"100\">\n                                                              <div class=\"progress-bar-anim\">60%</div>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"action ion-text-center\">\n                                                            <button mat-flat-button color=\"primary\">\n                                                                <mat-icon>tune</mat-icon>\n                                                            </button>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>12</td>\n                                                    <td>\n                                                        <ion-item class=\"name-box\">\n                                                            <ion-avatar slot=\"start\">\n                                                              <img src=\"assets/images/avatar2.jpg\">\n                                                            </ion-avatar>\n                                                            <ion-label>\n                                                              <h2 class=\"userName\">Shanelle Wynn</h2>\n                                                              <h3 class=\"userRole\">UI Engineer, Apple Inc.</h3>\n                                                            </ion-label>\n                                                        </ion-item>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"status warning\">\n                                                            Pending\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"progress-wrapper\">\n                                                            <div class=\"progress-bar progress-bar-width warning\" style=\"width: 60%;\" data-progress-bar-percent=\"100\">\n                                                              <div class=\"progress-bar-anim\">60%</div>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"action ion-text-center\">\n                                                            <button mat-flat-button color=\"primary\">\n                                                                <mat-icon>tune</mat-icon>\n                                                            </button>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>13</td>\n                                                    <td>\n                                                        <ion-item class=\"name-box\">\n                                                            <ion-avatar slot=\"start\">\n                                                              <img src=\"assets/images/avatar3.jpg\">\n                                                            </ion-avatar>\n                                                            <ion-label>\n                                                              <h2 class=\"userName\">Regan Norris</h2>\n                                                              <h3 class=\"userRole\">Senior Project Manager</h3>\n                                                            </ion-label>\n                                                        </ion-item>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"status danger\">\n                                                            failed\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"progress-wrapper\">\n                                                            <div class=\"progress-bar progress-bar-width danger\" style=\"width: 20%;\" data-progress-bar-percent=\"100\">\n                                                              <div class=\"progress-bar-anim\">20%</div>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"action ion-text-center\">\n                                                            <button mat-flat-button color=\"primary\">\n                                                                <mat-icon>tune</mat-icon>\n                                                            </button>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>33</td>\n                                                    <td>\n                                                        <ion-item class=\"name-box\">\n                                                            <ion-avatar slot=\"start\">\n                                                              <img src=\"assets/images/people-1.jpg\">\n                                                            </ion-avatar>\n                                                            <ion-label>\n                                                              <h2 class=\"userName\">Beck Simpson</h2>\n                                                              <h3 class=\"userRole\">Frontend Developer</h3>\n                                                            </ion-label>\n                                                        </ion-item>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"status success\">\n                                                            Complete\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"progress-wrapper\">\n                                                            <div class=\"progress-bar progress-bar-width complete\" style=\"width: 90%;\" data-progress-bar-percent=\"100\">\n                                                              <div class=\"progress-bar-anim\">90%</div>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                    <td>\n                                                        <div class=\"action ion-text-center\">\n                                                            <button mat-flat-button color=\"primary\">\n                                                                <mat-icon>tune</mat-icon>\n                                                            </button>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                                <div class=\"card-footer\">\n                                    <button class=\"border-btn danger\" mat-stroked-button>Delete</button>\n                                    <div>\n                                        <button class=\"border-btn\" mat-stroked-button style=\"margin-right: 10px;\">View all</button>\n                                        <button class=\"fill-btn\" mat-stroked-button>Add new entry</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts-es5.js.map