(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_license_license-list_license-list_module_ts"],{

/***/ 8459:
/*!***************************************************************************!*\
  !*** ./src/app/pages/license/license-list/license-list-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenseListPageRoutingModule": function() { return /* binding */ LicenseListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _license_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./license-list.page */ 48107);




const routes = [
    {
        path: '',
        component: _license_list_page__WEBPACK_IMPORTED_MODULE_0__.LicenseListPage
    }
];
let LicenseListPageRoutingModule = class LicenseListPageRoutingModule {
};
LicenseListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LicenseListPageRoutingModule);



/***/ }),

/***/ 23316:
/*!*******************************************************************!*\
  !*** ./src/app/pages/license/license-list/license-list.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenseListPageModule": function() { return /* binding */ LicenseListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _license_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./license-list-routing.module */ 8459);
/* harmony import */ var _license_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./license-list.page */ 48107);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let LicenseListPageModule = class LicenseListPageModule {
};
LicenseListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _license_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.LicenseListPageRoutingModule
        ],
        declarations: [_license_list_page__WEBPACK_IMPORTED_MODULE_1__.LicenseListPage]
    })
], LicenseListPageModule);



/***/ }),

/***/ 48107:
/*!*****************************************************************!*\
  !*** ./src/app/pages/license/license-list/license-list.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenseListPage": function() { return /* binding */ LicenseListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_license_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./license-list.page.html */ 85045);
/* harmony import */ var _license_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./license-list.page.scss */ 53913);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal/modal.page */ 58167);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);









let LicenseListPage = class LicenseListPage {
    constructor(toastController, modalController, alertController, plt, http, commonUtils // common functionlity come here
    ) {
        this.toastController = toastController;
        this.modalController = modalController;
        this.alertController = alertController;
        this.plt = plt;
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
                column_name: "lcName",
                display_name: "License Name",
                sortingButtonName: ""
            }, {
                column_name: "lcCreatDate",
                display_name: "Creation Date",
                sortingButtonName: ""
            }, {
                column_name: "lcValidityNum",
                display_name: "Validity Number",
                sortingButtonName: ""
            }, {
                column_name: "lcValidityType",
                display_name: "Validity   Type",
                sortingButtonName: ""
            }, {
                column_name: "instituteEntity.instName",
                display_name: "Institute",
                sortingButtonName: ""
            }, {
                column_name: "lcEndDate",
                display_name: "Expiry Date",
                sortingButtonName: ""
            }, {
                column_name: "lcStype",
                display_name: "Server Type",
                sortingButtonName: ""
            }, {
                column_name: "lcStatus",
                display_name: "Status",
                sortingButtonName: ""
            }
        ];
        /*----------------Table list data start----------------*/
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
    commonFunction() {
        // table list data url name
        this.listing_url = 'license/list';
        this.onRefresh();
        // delete api
        this.deleteApi = 'emailTemplate/delete/';
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
        let api = _listUrl + '/' + _pageNo + '/' + _displayRecord + '/' + _sortColumnName + '/' + _sortOrderName + '/0?keyword=' + _searchTerm;
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
        this.sortColumnName = 'lcId';
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
    /*----------------Table list data end----------------*/
    presentToast(_msg, _type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: _msg,
                duration: 2000,
                cssClass: "my-tost-custom-class" + _type,
            });
            toast.present();
        });
    }
    // ..... Restore licence modal start ......
    RestoreLicenceOpenModal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('_identifier >>', _identifier);
            let changePassword_modal;
            changePassword_modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__.ModalPage,
                cssClass: 'mymodalClass small',
                componentProps: {
                    identifier: _identifier,
                    modalForm_item: _item,
                    modalForm_array: _items
                }
            });
            // modal data back to Component
            changePassword_modal.onDidDismiss()
                .then((getdata) => {
                console.log('getdata >>>>>>>>>>>', getdata);
                this.presentToast('License Restored', 'success');
                if (getdata.data == 'submitClose') {
                    /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
                }
            });
            return yield changePassword_modal.present();
        });
    }
    // Restore licence modal end 
    // ..... EndLicence modal start ......
    EndLicenceOpenModal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('_identifier >>', _identifier);
            let changePassword_modal;
            changePassword_modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__.ModalPage,
                cssClass: 'mymodalClass small',
                componentProps: {
                    identifier: _identifier,
                    modalForm_item: _item,
                    modalForm_array: _items
                }
            });
            // modal data back to Component
            changePassword_modal.onDidDismiss()
                .then((getdata) => {
                console.log('getdata >>>>>>>>>>>', getdata);
                this.presentToast('License Ended', 'success');
                if (getdata.data == 'submitClose') {
                    /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
                }
            });
            return yield changePassword_modal.present();
        });
    }
    // EndLicence modal end 
    // .....  Renew licence modal start ......
    RenewLicenceOpenModal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('_identifier >>', _identifier);
            let RenewLicence_Modal;
            RenewLicence_Modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__.ModalPage,
                cssClass: 'mymodalClass small',
                componentProps: {
                    identifier: _identifier,
                    modalForm_item: _item,
                    modalForm_array: _items
                }
            });
            // modal data back to Component
            RenewLicence_Modal.onDidDismiss()
                .then((getdata) => {
                console.log('getdata >>>>>>>>>>>', getdata);
                this.presentToast('License Renewed', 'success');
                if (getdata.data == 'submitClose') {
                    /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
                }
            });
            return yield RenewLicence_Modal.present();
        });
    }
    //  Renew licence modal end 
    // ..... SuspendLicence modal start ......
    SuspendLicenceOpenModal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('_identifier >>', _identifier);
            let RenewLicence_Modal;
            RenewLicence_Modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__.ModalPage,
                cssClass: 'mymodalClass small',
                componentProps: {
                    identifier: _identifier,
                    modalForm_item: _item,
                    modalForm_array: _items
                }
            });
            // modal data back to Component
            RenewLicence_Modal.onDidDismiss()
                .then((getdata) => {
                console.log('getdata >>>>>>>>>>>', getdata);
                if (getdata.data == 'submitClose' && getdata.role == '200') {
                    this.onRefresh();
                }
            });
            return yield RenewLicence_Modal.present();
        });
    }
    // SuspendLicence modal end    
    // ..... extandLicence modal start ......
    ExtendLicenceOpenModal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('_identifier >>', _identifier);
            let RenewLicence_Modal;
            RenewLicence_Modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__.ModalPage,
                cssClass: 'mymodalClass small',
                componentProps: {
                    identifier: _identifier,
                    modalForm_item: _item,
                    modalForm_array: _items
                }
            });
            // modal data back to Component
            RenewLicence_Modal.onDidDismiss()
                .then((getdata) => {
                console.log('getdata >>>>>>>>>>>', getdata);
                this.presentToast('License Extended', 'success');
                if (getdata.data == 'submitClose') {
                    /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
                }
            });
            return yield RenewLicence_Modal.present();
        });
    }
    // extandLicence modal end     
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
        else if (_identifier == 'sendMail') {
            status = 'Email sending.....';
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
        else if (_identifier == 'generate') {
            status = 'License generated';
            type = 'success';
            this.presentToast(status, type);
        }
        this.isListLoading = false;
    }
};
LicenseListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__.CommonUtils }
];
LicenseListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-license-list',
        template: _raw_loader_license_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_license_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LicenseListPage);



/***/ }),

/***/ 53913:
/*!*******************************************************************!*\
  !*** ./src/app/pages/license/license-list/license-list.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWNlbnNlLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 85045:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/license/license-list/license-list.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"table-listing\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    License List\n                  </div>\n                  <div class=\"card-header-action\">\n                    <button class=\"border-btn success\" [routerLink]=\"['/', 'add-license', 'add', 'id']\" mat-stroked-button>\n                      <mat-icon>add_circle_outline</mat-icon>\n                      Add License\n                    </button>\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"table-header\">\n                  <div class=\"records-wrapper\">\n                    <ion-item class=\"record\">\n                      <span>Records: </span>\n                      <mat-form-field>\n                        <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\n                          <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">{{record.displayValue}}</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </ion-item>\n                  </div>\n                  <div class=\"search-wrapper\">\n                    <ion-searchbar showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search item ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\n                  </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th class=\"ion-text-start\">\n                                    <div>\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ion-text-start\">\n                                  <div>\n                                      <ion-checkbox color=\"primary\"></ion-checkbox>\n                                  </div>\n                                </th>\n                                <th *ngFor=\"let th of tableHeaderData\" (click)=\"isSortTableHeader(tableHeaderData, th)\" class=\"ion-text-center\">\n                                  <div>\n                                    {{th.display_name}}\n                                    <mat-icon *ngIf=\"th.sortingButtonName == ''\">import_export</mat-icon>\n                                    <mat-icon *ngIf=\"th.sortingButtonName == 'ASC'\">expand_less</mat-icon>\n                                    <mat-icon *ngIf=\"th.sortingButtonName == 'DESC'\">expand_more</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div class=\"ion-justify-content-center\">\n                                    Actions\n                                  </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                          <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\n                            <td colspan=\"100\">\n                              Data is loading...\n                            </td>\n                          </tr>\n                          <tr [hidden]=\"isListLoading\" *ngIf=\"tableData?.data.length == 0\" class=\"loading-table-data\">\n                            <td colspan=\"100\">\n                              No data found\n                            </td>\n                          </tr>\n                          <tr *ngFor=\"let item of tableData?.data; let i = index\" [hidden]=\"isListLoading\" >\n                            <td>{{i + 1}}</td>\n                            <td>\n                              <ion-checkbox color=\"primary\"></ion-checkbox>\n                            </td>\n                            <td>\n                              {{item?.lcName}}\n                            </td>\n                            <td>\n                             {{item?.lcCreatDate}}\n                            </td>\n                            <td>\n                              {{item?.lcValidityNum}}\n                            </td>\n                            <td>\n                              {{item?.lcValidityType}}\n                            </td>\n                             <td>\n                              {{item?.instituteEntity?.instName}}\n                            </td>\n                            <td>\n                             {{item?.lcCreatDate}}\n                            </td>\n                            <td>\n                              {{item?.lcStype}}\n                            </td>\n                            <td>\n                              <div class=\"status success\">\n                                {{item?.lcStatus}}\n                              </div>\n                            </td>\n\n                            <td>\n                              <div class=\"action ion-text-center\">\n                                <ion-button matTooltip=\"Edit\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" [routerLink]=\"['/', 'add-license', 'edit', item.lcId ]\">\n                                  <mat-icon>edit</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Generate Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"clickActionBtn('', 'generate')\">\n                                    <mat-icon>done_all</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Suspend Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"SuspendLicenceOpenModal('suspend_licence_modal', item.lcId, '');\">\n                                    <mat-icon>report_off</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Restore Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"RestoreLicenceOpenModal('restore_licence_modal', get_user_dtls, '');\">\n                                    <mat-icon>restore</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Payment\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" >\n                                  <mat-icon>payments</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"End Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"EndLicenceOpenModal('end_licence_modal', get_user_dtls, '');\">\n                                  <mat-icon>remove_done</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Renew Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"RenewLicenceOpenModal('renew_licence_modal', get_user_dtls, '');\">\n                                  <mat-icon>loop</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Extend Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"ExtendLicenceOpenModal('extend_licence_modal', get_user_dtls, '');\">\n                                  <mat-icon>format_line_spacing</mat-icon>\n                                </ion-button>\n                              </div>\n                            </td>\n                          </tr>\n                        </tbody>\n                    </table>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <!-- <div class=\"action\">\n                    <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                        <mat-icon>refresh</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Send certificate\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'sendMail')\">\n                      <mat-icon>attach_email</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Enable\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                        <mat-icon>visibility</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Disable\" matTooltipPosition=\"above\" size=\"small\" color=\"medium\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                        <mat-icon>visibility_off</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Download certificate\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                      <mat-icon>card_giftcard</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                        <mat-icon>delete</mat-icon>\n                    </ion-button>\n                  </div> -->\n                  <div class=\"action\">\n                    <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"onRefresh()\">\n                      <mat-icon>refresh</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Payment\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\"  [routerLink]=\"['/', 'add-subscription-package']\">\n                      <mat-icon>payments</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Generate Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"success\">\n                        <mat-icon>done_all</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Suspend Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\">\n                        <mat-icon>report_off</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Restore Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\">\n                        <mat-icon>restore</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"End Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\">\n                      <mat-icon>remove_done</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Renew Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\">\n                      <mat-icon>loop</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Extend Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\">\n                      <mat-icon>format_line_spacing</mat-icon>\n                    </ion-button>\n                  </div>\n                  <div>\n                    <ul class=\"pagination\">\n                        <li (click)=\"setPage(0)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- First -->\n                              <ion-icon name=\"play-skip-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li (click)=\"setPage(tableData.currentPage - 1)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Previous -->\n                              <ion-icon name=\"caret-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li>\n                            Page <a>1</a> of 10\n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li (click)=\"setPage(tableData.currentPage + 1)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Next -->\n                              <ion-icon name=\"caret-forward\"></ion-icon>\n                            </a>\n                        </li>\n                        <li (click)=\"setPage(tableData.totalPage)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Last -->\n                              <ion-icon name=\"play-skip-forward\"></ion-icon>\n                            </a>\n                        </li>\n                    </ul>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_license_license-list_license-list_module_ts-es2015.js.map