(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_license_add-license_add-license_module_ts"],{

/***/ 76940:
/*!*************************************************************************!*\
  !*** ./src/app/pages/license/add-license/add-license-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLicensePageRoutingModule": function() { return /* binding */ AddLicensePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_license_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-license.page */ 45689);




const routes = [
    {
        path: '',
        component: _add_license_page__WEBPACK_IMPORTED_MODULE_0__.AddLicensePage
    }
];
let AddLicensePageRoutingModule = class AddLicensePageRoutingModule {
};
AddLicensePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddLicensePageRoutingModule);



/***/ }),

/***/ 36501:
/*!*****************************************************************!*\
  !*** ./src/app/pages/license/add-license/add-license.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLicensePageModule": function() { return /* binding */ AddLicensePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_license_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-license-routing.module */ 76940);
/* harmony import */ var _add_license_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-license.page */ 45689);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let AddLicensePageModule = class AddLicensePageModule {
};
AddLicensePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _add_license_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddLicensePageRoutingModule
        ],
        declarations: [_add_license_page__WEBPACK_IMPORTED_MODULE_1__.AddLicensePage]
    })
], AddLicensePageModule);



/***/ }),

/***/ 45689:
/*!***************************************************************!*\
  !*** ./src/app/pages/license/add-license/add-license.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLicensePage": function() { return /* binding */ AddLicensePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_license_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-license.page.html */ 35489);
/* harmony import */ var _add_license_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-license.page.scss */ 36582);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);









let AddLicensePage = class AddLicensePage {
    // Variables end
    constructor(toastController, menuCtrl, http, commonUtils, // common functionlity come here
    router, activatedRoute) {
        this.toastController = toastController;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.commonUtils = commonUtils;
        this.router = router;
        this.activatedRoute = activatedRoute;
        // Variables start
        this.model = {};
        this.institutes = [
            {
                id: 19,
                name: 'Lalit Tutorial',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 20, name: 'IEM', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 21,
                name: 'Techno India',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 22,
                name: 'JIS',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
        this.validity = [
            {
                id: 1,
                name: 'Years',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Months', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'Days',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
        ];
        this.licenseType = [
            {
                id: 1,
                name: 'Online',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Offline', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
        ];
        this.serverType = [
            {
                id: 1,
                name: 'AWS Shared',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Mysql', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
        ];
        this.paymentType = [
            {
                id: 1,
                name: 'Quarterly',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Half Yearly', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'Annualy',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
        ];
        this.licenseFor = [
            {
                id: 1,
                name: 'Online users',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Offline users', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
        ];
        this.selectedinstitute = this.institutes[0].name;
        this.selectedPaymentType = this.paymentType[0].name;
        this.selectedLicenseFor = this.licenseFor[0].name;
        this.editLoading = false;
        // End date calculation end
        // ======================== form submit start ===================
        this.formLoading = false;
    }
    ngOnInit() {
        this.commonFunction();
    }
    commonFunction() {
        // get active url name
        this.commonUtils.getPathNameFun(this.router.url.split('/')[1]);
        this.parms_action_name = this.activatedRoute.snapshot.paramMap.get('action');
        this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getInstituteList_api = "institute/getlist";
        this.getInstituteList();
        console.log('parms_action_name', this.parms_action_name);
        console.log('parms_action_id', this.parms_action_id);
        // edit api
        if (this.parms_action_name == 'edit') {
            this.editApi = 'license/view/' + this.parms_action_id;
            // init call
            this.init();
            this.editForm_api = 'license/update/' + this.parms_action_id;
        }
        // form_api Api
        this.form_api = 'license/add';
    }
    ngsel(value) {
        // this.instId = value;
    }
    getInstituteList() {
        console.log("HHH");
        this.getInstitutes = this.http.get(this.getInstituteList_api).subscribe((res) => {
            console.log("Get template for  >", res[0].etAction);
            console.log("Get template for length", res.length);
            this.institutes = res;
            console.log("Get template for length", this.institutes);
        }, errRes => {
            console.log("Get template for  >", errRes);
        });
    }
    // ---------- init start ----------
    init() {
        if (this.parms_action_name == 'edit') {
            this.actionHeaderText = 'Edit';
            this.editLoading = true;
            //edit data call
            this.editDataSubscribe = this.http.get(this.editApi).subscribe((res) => {
                this.editLoading = false;
                console.log("Edit data  res >", res.return_data);
                this.model = {
                    lcName: res.lcName,
                    lcCreatDate: res.lcCreatDate,
                    instId: res.instId,
                    lcType: res.lcType,
                    lcStype: res.lcStype,
                    lcValidityType: res.lcValidityType,
                    lcValidityNum: res.lcValidityNum,
                    lcEndDate: res.lcEndDate,
                    lcComment: res.lcComment,
                };
                // this.ngsel(this.model.instId);
                this.model.creatDate = moment__WEBPACK_IMPORTED_MODULE_3__(res.lcCreatDate).format('YYYY-MM-DD');
                console.log('this.model.creatDate', this.model);
                // edit data
                this.allEditData = res;
                console.log('this.allEditData', this.allEditData);
            }, errRes => {
                // this.selectLoadingDepend = false;
                this.editLoading = false;
            });
        }
        else {
            this.actionHeaderText = 'Add';
        }
    }
    // ---------- init end ----------
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Your data have been saved.',
                duration: 2000,
                cssClass: "my-tost-custom-classsuccess",
            });
            toast.present();
        });
    }
    // Date format change start
    createDate(_date) {
        console.log('_date', _date);
        this.model.lcCreatDate = moment__WEBPACK_IMPORTED_MODULE_3__(_date).format('YYYY/MM/DD');
        console.log('model.lcCreatDate', this.model.lcCreatDate);
        this.model.lcValidityType = '';
        this.model.lcValidityNum = '';
        this.model.lcEndDate = '';
    }
    endDateCalculate(_identifier, _value) {
        console.log('_identifier', _identifier);
        console.log('_value', _value);
        console.log('this.model.lcCreatDate', this.model.lcCreatDate);
        if (_identifier == 'validity') {
            this.licValidity = _value;
        }
        else if (_identifier == 'duration') {
            this.licDuration = _value;
        }
        console.log('licValidity', this.licValidity);
        console.log('licDuration', this.licDuration);
        if (this.licValidity && this.licDuration) {
            let createDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.model.lcCreatDate).format('DD/MM/YYYY');
            // ----- original date format convert start -----
            let myFormatDate = createDate.split(" ")[0].split("/");
            let _mynewdate = myFormatDate[2] + "-" + myFormatDate[1] + "-" + myFormatDate[0];
            // original date format convert end
            console.log('myFormatDate', myFormatDate);
            console.log('_mynewdate', _mynewdate);
            //---- set day + count add start----
            this.selectCycleDate = new Date(_mynewdate);
            // this.selectCycleDate.setDate( this.selectCycleDate.getDate() + 3 );
            if (this.licValidity == 'Years') {
                this.selectCycleDate.setDate(this.selectCycleDate.getDate() + (parseInt(this.licDuration) * 365));
            }
            else if (this.licValidity == 'Months') {
                this.selectCycleDate.setDate(this.selectCycleDate.getDate() + (parseInt(this.licDuration) * 30));
            }
            else if (this.licValidity == 'Days') {
                this.selectCycleDate.setDate(this.selectCycleDate.getDate() + parseInt(this.licDuration));
            }
            // alert('this.date >'+this.selectCycleDate);
            this.model.lcEndDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.selectCycleDate).format('YYYY/MM/DD');
            console.log('this.model.lcEndDate', this.model.lcEndDate);
            //---- set day + count add end----
        }
    }
    onSubmitForm(form) {
        console.log("add form submit >", form.value);
        this.formLoading = true;
        let formValue = form.value;
        this.model.lcCreatDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.model.lcCreatDate).format('YYYY/MM/DD');
        console.log('model.lcCreatDate', this.model.lcCreatDate);
        this.model.lcEndDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.model.lcEndDate).format('YYYY/MM/DD');
        console.log('model.lcEndDate', this.model.lcEndDate);
        // formValue.append('lcCreatDate', this.model.lcCreatDate);
        // formValue.append('lcEndDate', this.model.lcEndDate);
        console.log('formValue', formValue);
        // get form value
        let fd = new FormData();
        for (let val in form.value) {
            if (form.value[val] == undefined) {
                form.value[val] = '';
            }
            fd.append(val, form.value[val]);
        }
        ;
        console.log('value >', fd);
        if (!form.valid) {
            return;
        }
        if (this.parms_action_name == 'edit') {
            this.formSubmitSubscribe = this.http.put(this.editForm_api, form.value).subscribe((response) => {
                this.formLoading = false;
                console.log("add form response >", response);
                if (response.status == 200) {
                    this.commonUtils.presentToast('success', response.message);
                    this.router.navigateByUrl('/license-list');
                    form.reset();
                }
                else {
                    this.commonUtils.presentToast('error', response.message);
                }
            }, errRes => {
                this.formLoading = false;
            });
        }
        else if (this.parms_action_name == 'add') {
            this.formSubmitSubscribe = this.http.post(this.form_api, form.value).subscribe((response) => {
                this.formLoading = false;
                console.log("add form response >", response);
                if (response.status == 200) {
                    this.commonUtils.presentToast('success', response.message);
                    this.router.navigateByUrl('/license-list');
                    form.reset();
                }
                else {
                    this.commonUtils.presentToast('error', response.message);
                }
            }, errRes => {
                this.formLoading = false;
            });
        }
    }
    // form submit end
    // Disable date field start
    disableDate() {
        return false;
    }
    // Disable date field end
    // ----------- destroy subscription start ---------
    ngOnDestroy() {
        if (this.formSubmitSubscribe !== undefined) {
            this.formSubmitSubscribe.unsubscribe();
        }
        if (this.editDataSubscribe !== undefined) {
            this.editDataSubscribe.unsubscribe();
        }
    }
};
AddLicensePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
AddLicensePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-license',
        template: _raw_loader_add_license_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_license_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddLicensePage);



/***/ }),

/***/ 36582:
/*!*****************************************************************!*\
  !*** ./src/app/pages/license/add-license/add-license.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-md {\n  padding: 0.53rem 1.3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1saWNlbnNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLWxpY2Vuc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1tZCB7XG4gICAgcGFkZGluZzogLjUzcmVtIDEuM3JlbSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ 35489:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/license/add-license/add-license.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"form-layout\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n            <form #addLicenseForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(addLicenseForm)\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    License {{parms_action_name}}\n                  </div>\n                  <div class=\"card-header-action\">\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-wrapper\">\n                  <ion-grid>\n                    <ion-row>\n                      <!-- Name -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Name</mat-label>\n                            <input matInput placeholder=\"Name\" type=\"text\" name=\"lcName\" [(ngModel)]=\"model.lcName\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Creation Date -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Creation Date</mat-label>\n                            <input matInput placeholder=\"Creation Date\" (keydown)=\"disableDate()\" type=\"date\" name=\"creatDate\" [(ngModel)]=\"model.creatDate\" required (change)=\"createDate(model.creatDate)\">\n                          </mat-form-field>\n\n                          <!-- <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                            <mat-label>Creation Date <sup class=\"requiredSup\">*</sup></mat-label>\n                            <input required matInput [matDatepicker]=\"dob\" name=\"creatDate\" [(ngModel)]=\"model.creatDate\" (dateChange)=\"createDate(model.creatDate)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"dob\"></mat-datepicker-toggle>\n                            <mat-datepicker touchUi #dob></mat-datepicker>\n                          </mat-form-field> -->\n                        </div>\n                      </ion-col>\n                      <input type=\"hidden\" name=\"lcCreatDate\" [(ngModel)]=\"model.lcCreatDate\">\n                       <!-- Duration -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Duration</mat-label>\n                            <input required matInput placeholder=\"Duration\" type=\"number\" name=\"lcValidityNum\" [(ngModel)]=\"model.lcValidityNum\" (change)=\"endDateCalculate('duration',model.lcValidityNum);\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Institute -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item ngsel\">\n                          \n                          <ng-select [items]=\"institutes\" \n                                   bindLabel=\"instName\" \n                                   placeholder=\"Select Institute\"\n                                   name=\"instId\"\n                                   bindValue=\"instId\" \n                                   [(ngModel)]=\"model.instId\"\n                                   (change)=\"ngsel(model.instId)\"\n                                   required>\n                          </ng-select>\n                          <label>Select Institute</label>\n                        </div>\n                      </ion-col>\n\n                      <!-- License Type -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item  ngsel\">\n                          \n                          <ng-select [items]=\"licenseType\" \n                                   bindLabel=\"name\" \n                                   name=\"lcType\"\n                                   placeholder=\"Select License Type\"\n                                   bindValue=\"name\" \n                                   [(ngModel)]=\"model.lcType\"\n                                   (change)=\"ngsel(model.lcType)\"\n                                   required>\n                          </ng-select>\n                          <label>License Type</label>\n                        </div>\n                      </ion-col>\n\n                      <!-- Server Type -->\n                      <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item ngsel\">\n                          \n                          <ng-select [items]=\"serverType\" \n                                   bindLabel=\"name\" \n                                   name=\"lcStype\"\n                                   placeholder=\"Select Server Type\"\n                                   bindValue=\"name\" \n                                   [(ngModel)]=\"model.lcStype\"\n                                   (change)=\"ngsel(model.lcStype)\"\n                                   required>\n                          </ng-select>\n                          <label>Server Type</label>\n                        </div>\n                      </ion-col>\n\n                      <!-- Validity -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item ngsel\">\n                          <!-- <mat-form-field appearance=\"outline\">\n                            <mat-label>Validity</mat-label>\n                            <mat-select required [(ngModel)]=\"model.lcValidityType\" name=\"lcValidityType\" (selectionChange)=\"endDateCalculate('validity',model.lcValidityType);\">\n                              <mat-option *ngFor=\"let item of validity\" [value]=\"item.name\">\n                                {{item.name}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field> -->\n                          \n                          <ng-select [items]=\"validity\" \n                                   bindLabel=\"name\" \n                                   name=\"lcValidityType\"\n                                   placeholder=\"Select Validity\"\n                                   bindValue=\"name\" \n                                   [(ngModel)]=\"model.lcValidityType\"\n                                   (change)=\"endDateCalculate('validity',model.lcValidityType);\"\n                                   required>\n                          </ng-select>\n                          <label>Validity</label>\n                        </div>\n                      </ion-col>\n                     <!-- End date -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item readOnly\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>End Date</mat-label>\n                            <input required matInput placeholder=\"Name\" type=\"text\" name=\"lcEndDate\" [(ngModel)]=\"model.lcEndDate\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Remarks -->\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Remarks</mat-label>\n                            <textarea matInput name=\"lcComment\" [(ngModel)]=\"model.lcComment\"></textarea>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <div>\n                      <button class=\"border-btn danger btn-md\" type=\"reset\" [routerLink]=\"['/', 'license-list']\" style=\"margin-right: 10px;\" mat-stroked-button>Cancel</button>\n                      <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" [disabled]=\"!addLicenseForm.valid || formLoading\">\n                        <ion-spinner *ngIf=\"formLoading\" name=\"crescent\"></ion-spinner> \n                        Save\n                      </button>\n                  </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_license_add-license_add-license_module_ts-es2015.js.map