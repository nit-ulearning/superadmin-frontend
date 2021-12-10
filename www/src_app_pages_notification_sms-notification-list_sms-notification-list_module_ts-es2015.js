(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_notification_sms-notification-list_sms-notification-list_module_ts"],{

/***/ 19706:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/notification/sms-notification-list/sms-notification-list-routing.module.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmsNotificationListPageRoutingModule": function() { return /* binding */ SmsNotificationListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sms_notification_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sms-notification-list.page */ 71544);




const routes = [
    {
        path: '',
        component: _sms_notification_list_page__WEBPACK_IMPORTED_MODULE_0__.SmsNotificationListPage
    }
];
let SmsNotificationListPageRoutingModule = class SmsNotificationListPageRoutingModule {
};
SmsNotificationListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SmsNotificationListPageRoutingModule);



/***/ }),

/***/ 80211:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/notification/sms-notification-list/sms-notification-list.module.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmsNotificationListPageModule": function() { return /* binding */ SmsNotificationListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sms_notification_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sms-notification-list-routing.module */ 19706);
/* harmony import */ var _sms_notification_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sms-notification-list.page */ 71544);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let SmsNotificationListPageModule = class SmsNotificationListPageModule {
};
SmsNotificationListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _sms_notification_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SmsNotificationListPageRoutingModule
        ],
        declarations: [_sms_notification_list_page__WEBPACK_IMPORTED_MODULE_1__.SmsNotificationListPage]
    })
], SmsNotificationListPageModule);



/***/ }),

/***/ 71544:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/notification/sms-notification-list/sms-notification-list.page.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmsNotificationListPage": function() { return /* binding */ SmsNotificationListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sms_notification_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sms-notification-list.page.html */ 70650);
/* harmony import */ var _sms_notification_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sms-notification-list.page.scss */ 84617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);







let SmsNotificationListPage = class SmsNotificationListPage {
    constructor(toastController, alertController, modalController, http, commonUtils) {
        this.toastController = toastController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.http = http;
        this.commonUtils = commonUtils;
        // Variables start
        this.statusChange = true;
        this.isListLoading = false;
        this.sortColumnName = '';
        this.sortOrderName = '';
        this.deleteLoading = false;
        this.tableHeaderData = [
            {
                column_name: "stAction",
                display_name: "Template For",
                sortingButtonName: ""
            }, {
                column_name: "stName",
                display_name: "SMS Name",
                sortingButtonName: ""
            }, {
                column_name: "stType",
                display_name: "Status",
                sortingButtonName: ""
            }
        ];
        // Display records start
        this.displayRecord = '10';
        this.displayRecords = [
            { id: '1', displayValue: '10' },
            { id: '2', displayValue: '25' },
            { id: '3', displayValue: '50' },
            { id: '4', displayValue: '100' },
            { id: '5', displayValue: '200' }
        ];
        // Sorting end
        // Search start
        this.searchTerm = '';
    }
    // Variables end
    ngOnInit() {
        this.commonFunction();
    }
    ionViewWillEnter() {
        this.commonFunction();
    }
    displayRecordChange(_record) {
        console.log('_record', _record);
        this.displayRecord = _record;
        this.onListDate(this.listing_url, this.pageNo, _record, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Display records end
    // List data start
    onListDate(_listUrl, _pageNo, _displayRecord, _sortColumnName, _sortOrderName, _searchTerm) {
        this.isListLoading = true;
        let api = _listUrl + '/' + _pageNo + '/' + _displayRecord + '/' + _sortColumnName + '/' + _sortOrderName + '?keyword=' + _searchTerm;
        this.tableListSubscribe = this.http.get(api).subscribe((res) => {
            this.isListLoading = false;
            console.log('res', res);
            this.tableData = res;
        }, errRes => {
            // this.selectLoadingDepend = false;
            this.isListLoading = false;
        });
    }
    // List data end
    // Pagination start
    setPage(page) {
        console.log('page', page);
        console.log("page");
        this.pageNo = page;
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Pagination end
    // Sorting start
    isSortTableHeader(_tableHeaderData, _headerItem) {
        console.log('_tableHeaderData', _tableHeaderData);
        console.log('_headerItem', _headerItem);
        // all field reset first
        _tableHeaderData.forEach((val) => {
            val.sortingButtonName = '';
        });
        _headerItem.orederShow = !_headerItem.orederShow;
        if (_headerItem.orederShow) {
            _headerItem.sortingButtonName = "ASC";
        }
        else {
            _headerItem.sortingButtonName = "DESC";
        }
        this.sortColumnName = _headerItem.column_name;
        this.sortOrderName = _headerItem.sortingButtonName;
        console.log('this.sortColumnName', this.sortColumnName);
        console.log('this.sortOrderName', this.sortOrderName);
        console.log('_tableHeaderData>>', _tableHeaderData);
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    searchList(event) {
        this.searchTerm = event.target.value;
        console.log('this.searchTerm', this.searchTerm);
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Search end
    // Referesh start
    onRefresh() {
        this.pageNo = 0;
        this.sortColumnName = 'stId';
        this.sortOrderName = 'DESC';
        this.searchTerm = '';
        // table data call
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Referesh end
    // Delete start
    deleteData(_id) {
        console.log('id>>', _id);
        this.deleteLoading = true;
        this.deleteDataSubscribe = this.http.delete(this.deleteApi + _id).subscribe((res) => {
            this.deleteLoading = false;
            console.log("Edit data  res >", res.return_data);
            if (res.status == 200) {
                this.commonUtils.presentToast('success', res.message);
                this.onRefresh();
            }
            else {
                this.commonUtils.presentToast('error', res.message);
            }
        }, errRes => {
            // this.selectLoadingDepend = false;
            this.deleteLoading = false;
        });
    }
    // Delete end
    // unsetprimaryDataSubscribe start
    unsetprimary(_id) {
        console.log('id>>', _id);
        this.deleteLoading = true;
        this.unsetprimaryDataSubscribe = this.http.delete(this.unsetprimaryapi + _id).subscribe((res) => {
            this.deleteLoading = false;
            console.log("Edit data  res >", res.return_data);
            if (res.status == 200) {
                this.commonUtils.presentToast('success', res.message);
                this.onRefresh();
            }
            else {
                this.commonUtils.presentToast('error', res.message);
            }
        }, errRes => {
            // this.selectLoadingDepend = false;
            this.deleteLoading = false;
        });
    }
    // unsetprimaryDataSubscribe end
    // setprimaryDataSubscribe start
    setprimary(_id) {
        console.log('id>>', _id);
        this.deleteLoading = true;
        this.setprimaryDataSubscribe = this.http.delete(this.setprimaryapi + _id).subscribe((res) => {
            this.deleteLoading = false;
            console.log("Edit data  res >", res.return_data);
            if (res.status == 200) {
                this.commonUtils.presentToast('success', res.message);
                this.onRefresh();
            }
            else {
                this.commonUtils.presentToast('error', res.message);
            }
        }, errRes => {
            // this.selectLoadingDepend = false;
            this.deleteLoading = false;
        });
    }
    // setprimaryDataSubscribe end
    // getTemplateList start
    // getSMSTemplateList()
    // {
    //   console.log("HHH");
    //   this.getSMSTemplateListing = this.http.get(this.getTemplateList_api).subscribe(
    //       (res:any) => {
    //         console.log("Get template for  >", res);
    //         this.skeleton = res; 
    //         console.log("Get template for length",this.skeleton);
    //       },
    //       errRes => {
    //          console.log("Get template for  >", errRes);  
    //       }
    //     );    
    // }
    commonFunction() {
        this.listing_url = 'smsTemplate/list';
        this.onRefresh();
        // delete api
        this.deleteApi = 'smsTemplate/delete/';
        this.setprimaryapi = 'smsTemplate/delete/';
        this.unsetprimaryapi = 'smsTemplate/delete/';
    }
    // getTemplateList end
    // Delete aleart start
    presentAlert(_identifier, _id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let messages, headers;
            if (_identifier == 'delete') {
                headers = "Delete";
                messages = "Are you sure want to delete this item?";
            }
            else if (_identifier == 'unsetprimary') {
                headers = "Unset Primary";
                messages = "Are you want to change unset primary from this?";
            }
            else if (_identifier == 'setprimary') {
                headers = "Set Primary";
                messages = "Are you want to change primary from this?";
            }
            const alert = yield this.alertController.create({
                cssClass: 'aleart-popupBox',
                header: headers,
                message: messages,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'popup-cancel-btn',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        cssClass: 'popup-ok-btn',
                        handler: () => {
                            console.log('Confirm Okay');
                            // this.clickActionBtn('', 'delete');
                            // this.deleteData(_id);
                            if (_identifier == 'delete') {
                                this.deleteData(_id);
                            }
                            else if (_identifier == 'unsetprimary') {
                                this.unsetprimary(_id);
                            }
                            else if (_identifier == 'setprimary') {
                                this.setprimary(_id);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Delete aleart end
    presentToast(_msg, _type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
SmsNotificationListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils }
];
SmsNotificationListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sms-notification-list',
        template: _raw_loader_sms_notification_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sms_notification_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SmsNotificationListPage);



/***/ }),

/***/ 84617:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/notification/sms-notification-list/sms-notification-list.page.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbXMtbm90aWZpY2F0aW9uLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 70650:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/sms-notification-list/sms-notification-list.page.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"table-listing\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    SMS Template List\n                  </div>\n                  <div class=\"card-header-action\">\n                    <button class=\"border-btn success\" [routerLink]=\"['/', 'add-sms-notification', 'add', 'id']\" mat-stroked-button>\n                      <mat-icon>add_circle_outline</mat-icon>\n                      Add Template\n                    </button>\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"table-header\">\n                  <div class=\"records-wrapper\">\n                    <ion-item class=\"record\">\n                      <span>Records: </span>\n                      <mat-form-field>\n                        <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\n                          <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">\n                            {{record.displayValue}}\n                          </mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </ion-item>\n                  </div>\n                  <div class=\"search-wrapper\">\n                    <ion-searchbar showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search item ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\n                  </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th class=\"ion-text-start\">\n                                    <div>\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ion-text-start\">\n                                  <div>\n                                      <ion-checkbox color=\"primary\"></ion-checkbox>\n                                  </div>\n                                </th>\n                                <th *ngFor=\"let th of tableHeaderData\" (click)=\"isSortTableHeader(tableHeaderData, th)\" class=\"ion-text-center\">\n                                  <div>\n                                    {{th.display_name}}\n                                    <mat-icon *ngIf=\"th.sortingButtonName == ''\">import_export</mat-icon>\n                                    <mat-icon *ngIf=\"th.sortingButtonName == 'ASC'\">expand_less</mat-icon>\n                                    <mat-icon *ngIf=\"th.sortingButtonName == 'DESC'\">expand_more</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div class=\"ion-justify-content-center\">\n                                    Actions\n                                  </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                          <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\n                            <td colspan=\"100\">\n                              Data is loading...\n                            </td>\n                          </tr>\n                          <tr [hidden]=\"isListLoading\" *ngIf=\"tableData?.data.length == 0\" class=\"loading-table-data\">\n                            <td colspan=\"100\">\n                              No data found\n                            </td>\n                          </tr>\n                          <tr [hidden]=\"isListLoading\" *ngFor=\"let item of tableData?.data; let i = index\">\n                            <td>{{i + 1}}</td>\n                            <td>\n                              <ion-checkbox color=\"primary\"></ion-checkbox>\n                            </td>\n                            <td>\n                              {{item?.stAction}}\n                            </td>\n                            <td>\n                              {{item?.stName}}\n                            </td>\n                            <td>\n                              {{item?.stType}}\n                            </td>\n                            <td>\n                              <div class=\"action ion-text-center\">\n                                <ion-button [ngClass]=\"{'readOnly': item?.stType == 'DEFAULT'}\" matTooltip=\"Edit\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" [routerLink]=\"['/', 'add-sms-notification', 'edit', item.stId ]\">\n                                  <mat-icon>edit</mat-icon>\n                                </ion-button>\n                                <ion-button [ngClass]=\"{'readOnly': item?.stType == 'DEFAULT'}\" matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"presentAlert('delete', item.stId)\">\n                                    <mat-icon>delete</mat-icon>\n                                </ion-button>\n                               <ion-button  *ngIf=\"item?.isPrimary == 1\" matTooltip=\"Unset form Primary\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"presentAlert('unsetprimary', item.stId)\">\n                                  <mat-icon>visibility</mat-icon>\n                                </ion-button>\n                                <ion-button *ngIf=\"item?.isPrimary == 0\" matTooltip=\"Set Primary\" matTooltipPosition=\"above\" size=\"small\" color=\"medium\" (click)=\"presentAlert('setprimary', item.stId)\">\n                                    <mat-icon>visibility_off</mat-icon>\n                                </ion-button>\n                              </div>\n                            </td>\n                          </tr>\n                        </tbody>\n                    </table>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <div class=\"action\">\n                    <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"onRefresh()\">\n                        <mat-icon>refresh</mat-icon>\n                    </ion-button>\n                    <!-- <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"presentAlert()\">\n                        <mat-icon>delete</mat-icon>\n                    </ion-button> -->\n                  </div>\n                  <div>\n                    <ul class=\"pagination\">\n                        <li (click)=\"setPage(0)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- First -->\n                              <ion-icon name=\"play-skip-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li (click)=\"setPage(tableData.currentPage - 1)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Previous -->\n                              <ion-icon name=\"caret-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li>\n                             Page <a>{{ tableData?.currentPage + 1 }}</a> of {{ tableData?.totalPage + 1 }} \n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li (click)=\"setPage(tableData.currentPage + 1)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Next -->\n                              <ion-icon name=\"caret-forward\"></ion-icon>\n                            </a>\n                        </li>\n                        <li (click)=\"setPage(tableData.totalPage)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Last -->\n                              <ion-icon name=\"play-skip-forward\"></ion-icon>\n                            </a>\n                        </li>\n                    </ul>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notification_sms-notification-list_sms-notification-list_module_ts-es2015.js.map