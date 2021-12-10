(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_settings_view-website-details_view-website-details_module_ts"],{

/***/ 61325:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/settings/view-website-details/view-website-details-routing.module.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewWebsiteDetailsPageRoutingModule": function() { return /* binding */ ViewWebsiteDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _view_website_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-website-details.page */ 97804);




const routes = [
    {
        path: '',
        component: _view_website_details_page__WEBPACK_IMPORTED_MODULE_0__.ViewWebsiteDetailsPage
    }
];
let ViewWebsiteDetailsPageRoutingModule = class ViewWebsiteDetailsPageRoutingModule {
};
ViewWebsiteDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewWebsiteDetailsPageRoutingModule);



/***/ }),

/***/ 31604:
/*!************************************************************************************!*\
  !*** ./src/app/pages/settings/view-website-details/view-website-details.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewWebsiteDetailsPageModule": function() { return /* binding */ ViewWebsiteDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _view_website_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-website-details-routing.module */ 61325);
/* harmony import */ var _view_website_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-website-details.page */ 97804);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let ViewWebsiteDetailsPageModule = class ViewWebsiteDetailsPageModule {
};
ViewWebsiteDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _view_website_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewWebsiteDetailsPageRoutingModule
        ],
        declarations: [_view_website_details_page__WEBPACK_IMPORTED_MODULE_1__.ViewWebsiteDetailsPage]
    })
], ViewWebsiteDetailsPageModule);



/***/ }),

/***/ 97804:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/settings/view-website-details/view-website-details.page.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewWebsiteDetailsPage": function() { return /* binding */ ViewWebsiteDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_view_website_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./view-website-details.page.html */ 73507);
/* harmony import */ var _view_website_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-website-details.page.scss */ 2755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let ViewWebsiteDetailsPage = class ViewWebsiteDetailsPage {
    constructor(toastController) {
        this.toastController = toastController;
        // Variables start
        this.statusChange = true;
        this.isListLoading = false;
        this.skeleton = [
            {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        ];
        this.gaugeType = "arch";
        this.gaugeValue = 50;
        this.gaugeLabel = "Questions";
        this.gaugeAppendText = "%";
        this.gaugethick = 10;
        this.gaugeanimate = true;
        this.gaugeduration = 1000;
        this.gaugeforegroundColor = "#f83245";
        this.chartOptions = {
            series: [76, 67, 61, 90],
            chart: {
                height: 390,
                type: "radialBar"
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: "30%",
                        background: "transparent",
                        image: undefined
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            show: false
                        }
                    }
                }
            },
            colors: ["#fc7f03", "#fcdb03", "#03d7fc", "#fc03ba"],
            labels: ["Mobile", "Desktop", "Mobile Network", "Broadband"],
            legend: {
                show: true,
                floating: true,
                fontSize: "16px",
                position: "left",
                offsetX: 50,
                offsetY: 10,
                labels: {
                    useSeriesColors: true
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
                },
                itemMargin: {
                    horizontal: 3
                }
            },
        };
        this.chartOptions2 = {
            series: [75],
            chart: {
                height: 350,
                type: "radialBar",
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 225,
                    hollow: {
                        margin: 0,
                        size: "70%",
                        background: "#fff",
                        image: undefined,
                        position: "front",
                        dropShadow: {
                            enabled: true,
                            top: 3,
                            left: 0,
                            blur: 4,
                            opacity: 0.24
                        }
                    },
                    track: {
                        background: "#fff",
                        strokeWidth: "67%",
                        margin: 0,
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: "#888",
                            fontSize: "17px"
                        },
                        value: {
                            formatter: function (val) {
                                return parseInt(val.toString(), 10).toString();
                            },
                            color: "#111",
                            fontSize: "36px",
                            show: true
                        }
                    }
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "horizontal",
                    shadeIntensity: 0.5,
                    gradientToColors: ["#fc1803"],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            stroke: {
                lineCap: "round"
            },
            labels: ["Percent"]
        };
    }
    // Variables end
    ngOnInit() {
    }
    presentToast(_msg, _type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: _msg,
                duration: 2000,
                cssClass: "my-tost-custom-class" + _type,
            });
            toast.present();
        });
    }
    clickActionBtn(_value, _identifier) {
        let status;
        let type;
        this.isListLoading = true;
        if (_identifier == 'status') {
            if (_value == true) {
                this.statusChange = false;
                status = 'Your status is disable';
                type = 'info';
            }
            else {
                this.statusChange = true;
                status = 'Your status is enable';
                type = 'success';
            }
            console.log('statusChange', this.statusChange);
            this.presentToast(status, type);
        }
        else if (_identifier == 'delete') {
            status = 'Deleted successfully';
            type = 'success';
            this.presentToast(status, type);
        }
        else if (_identifier == 'edit') {
            status = 'Your data is editable';
            type = 'success';
            this.presentToast(status, type);
        }
        else if (_identifier == 'pdf') {
            status = 'Downloading PDF file';
            type = 'success';
            this.presentToast(status, type);
        }
        else if (_identifier == 'excel') {
            status = 'Downloading Excel file';
            type = 'success';
            this.presentToast(status, type);
        }
        else if (_identifier == 'refresh') {
            status = 'Data refreshing...';
            type = 'success';
            this.presentToast(status, type);
        }
        this.isListLoading = false;
    }
};
ViewWebsiteDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
ViewWebsiteDetailsPage.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ["chart",] }]
};
ViewWebsiteDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-view-website-details',
        template: _raw_loader_view_website_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_view_website_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ViewWebsiteDetailsPage);



/***/ }),

/***/ 2755:
/*!************************************************************************************!*\
  !*** ./src/app/pages/settings/view-website-details/view-website-details.page.scss ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXdlYnNpdGUtZGV0YWlscy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 73507:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/view-website-details/view-website-details.page.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"card-outer\">\n        <div class=\"card card-box\">\n          <div class=\"card-header\">\n            <div class=\"card-header-tittle\">\n              Database Details\n            </div>\n            <div class=\"card-header-action\">\n              <mat-icon>source</mat-icon>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"view-data\">\n              <ion-grid>\n                <ion-row class=\"border\">\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                    <div class=\"view-element\">\n                      <span class=\"text-tittle\">Host Name :</span>\n                      <span class=\"text-content\">25</span>\n                    </div>\n                  </ion-col>\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                    <div class=\"view-element\">\n                      <span class=\"text-tittle\">Port Name :</span>\n                      <span class=\"text-content\">100</span>\n                    </div>\n                  </ion-col>\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                    <div class=\"view-element\">\n                      <span class=\"text-tittle\">User Name :</span>\n                      <span class=\"text-content\">3</span>\n                    </div>\n                  </ion-col>\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                    <div class=\"view-element\">\n                      <span class=\"text-tittle\">Password :</span>\n                      <span class=\"text-content\">9</span>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </div>\n        </div>\n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n            <div class=\"status-spiner\">\n              <div class=\"card-outer\">\n                <div class=\"card card-box\">\n                  <div class=\"card-header noBorder\">\n                    <div class=\"card-header-tittle\">\n                      <b>Chart Of Device Activity</b>\n                    </div>\n                    <div class=\"card-header-action\">\n                      <!-- <mat-icon>badge</mat-icon> -->\n                    </div>\n                  </div>\n                  <div class=\"card-body ion-text-center\">\n                    <div id=\"chart\">\n                      <apx-chart\n                        [series]=\"chartOptions.series\"\n                        [chart]=\"chartOptions.chart\"\n                        [plotOptions]=\"chartOptions.plotOptions\"\n                        [labels]=\"chartOptions.labels\"\n                        [legend]=\"chartOptions.legend\"\n                        [colors]=\"chartOptions.colors\"\n                      ></apx-chart>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n          <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n            <div class=\"status-spiner\">\n              <div class=\"card-outer\">\n                <div class=\"card card-box\">\n                  <div class=\"card-header noBorder\">\n                    <div class=\"card-header-tittle\">\n                      <b>Database Storage</b>\n                    </div>\n                    <div class=\"card-header-action\">\n                      <!-- <mat-icon>badge</mat-icon> -->\n                    </div>\n                  </div>\n                  <div class=\"card-body ion-text-center\">\n                    <div id=\"card\">\n                      <div id=\"chart\">\n                        <apx-chart\n                          [series]=\"chartOptions2.series\"\n                          [chart]=\"chartOptions2.chart\"\n                          [plotOptions]=\"chartOptions2.plotOptions\"\n                          [labels]=\"chartOptions2.labels\"\n                          [stroke]=\"chartOptions2.stroke\"\n                          [fill]=\"chartOptions2.fill\"\n                        ></apx-chart>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div class=\"card-outer\">\n        <div class=\"card card-box\">\n          <div class=\"card-header\">\n            <div class=\"card-header-tittle\">\n              Server Details\n            </div>\n            <div class=\"card-header-action\">\n              <mat-icon>http</mat-icon>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"view-data\">\n              <ion-grid>\n                <ion-row class=\"border\">\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                    <div class=\"view-element\">\n                      <span class=\"text-tittle\">Server Name :</span>\n                      <span class=\"text-content\">5</span>\n                    </div>\n                  </ion-col>\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                    <div class=\"view-element\">\n                      <span class=\"text-tittle\">Server DNS :</span>\n                      <span class=\"text-content\">5</span>\n                    </div>\n                  </ion-col>\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                    <div class=\"view-element\">\n                      <span class=\"text-tittle\">Server Host :</span>\n                      <span class=\"text-content\">7</span>\n                    </div>\n                  </ion-col>\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                    <div class=\"view-element\">\n                      <span class=\"text-tittle\">Server Port :</span>\n                      <span class=\"text-content\">21</span>\n                    </div>\n                  </ion-col>\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                    <div class=\"view-element\">\n                      <span class=\"text-tittle\">Server Username :</span>\n                      <span class=\"text-content\">\t00:07:03</span>\n                    </div>\n                  </ion-col>\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                    <div class=\"view-element\">\n                      <span class=\"text-tittle\">Server Password :</span>\n                      <span class=\"text-content\">00:16</span>\n                    </div>\n                  </ion-col>\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                    <div class=\"view-element\">\n                      <span class=\"text-tittle\">Loadbalancer Details :</span>\n                      <span class=\"text-content\">\t4</span>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_view-website-details_view-website-details_module_ts-es2015.js.map