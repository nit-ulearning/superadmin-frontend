(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_settings_add-security_add-security_module_ts"],{

/***/ 69956:
/*!****************************************************************************!*\
  !*** ./src/app/pages/settings/add-security/add-security-routing.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSecurityPageRoutingModule": function() { return /* binding */ AddSecurityPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_security_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-security.page */ 17174);




const routes = [
    {
        path: '',
        component: _add_security_page__WEBPACK_IMPORTED_MODULE_0__.AddSecurityPage
    }
];
let AddSecurityPageRoutingModule = class AddSecurityPageRoutingModule {
};
AddSecurityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddSecurityPageRoutingModule);



/***/ }),

/***/ 70662:
/*!********************************************************************!*\
  !*** ./src/app/pages/settings/add-security/add-security.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSecurityPageModule": function() { return /* binding */ AddSecurityPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_security_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-security-routing.module */ 69956);
/* harmony import */ var _add_security_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-security.page */ 17174);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let AddSecurityPageModule = class AddSecurityPageModule {
};
AddSecurityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _add_security_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddSecurityPageRoutingModule
        ],
        declarations: [_add_security_page__WEBPACK_IMPORTED_MODULE_1__.AddSecurityPage]
    })
], AddSecurityPageModule);



/***/ }),

/***/ 17174:
/*!******************************************************************!*\
  !*** ./src/app/pages/settings/add-security/add-security.page.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSecurityPage": function() { return /* binding */ AddSecurityPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_security_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-security.page.html */ 3179);
/* harmony import */ var _add_security_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-security.page.scss */ 17738);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);









let AddSecurityPage = class AddSecurityPage {
    // Variables end
    constructor(toastController, menuCtrl, http, commonUtils, // common functionlity come here
    router, activatedRoute) {
        this.toastController = toastController;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.commonUtils = commonUtils;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.model = {};
        this.adrType = "institute";
        this.country = [
            {
                id: 1,
                name: 'India',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Africa', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'USA',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 4,
                name: 'CANADA',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
        this.countryCode = [
            {
                id: 1,
                name: '+91',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: '+12', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: '+96',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 4,
                name: '+85',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
        this.state = [
            {
                id: 1,
                name: 'West Bengal',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Tripura', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'Bihar',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 4,
                name: 'Tamil Nadu',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
        this.city = [
            {
                id: 1,
                name: 'Kolkata',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Pune', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'Mumbai',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 4,
                name: 'Chennai',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
        this.district = [
            {
                id: 1,
                name: 'Howrah',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Hooghly', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'Bardhawan',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 4,
                name: 'Birbhum',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
        this.taluka = [
            {
                id: 1,
                name: 'Taluka 1',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
            { id: 2, name: 'Taluka 2', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
            {
                id: 3,
                name: 'Taluka 3',
                avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
            },
            {
                id: 4,
                name: 'Taluka 4',
                avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
            },
        ];
        this.selectedCity = this.city[0].name;
        this.selectedState = this.state[0].name;
        this.selectedCountry = this.country[0].name;
        this.editLoading = false;
        this.hide = true;
        this.hide2 = true;
        this.imageSrc = '';
        // Date format change end
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
        console.log('parms_action_name', this.parms_action_name);
        console.log('parms_action_id', this.parms_action_id);
        this.model.amdDob = moment__WEBPACK_IMPORTED_MODULE_2__('2021/10/02').format('YYYY-MM-DD');
        console.log('this.model.amdDob', this.model.amdDob);
        // edit api
        if (this.parms_action_name == 'edit') {
            this.editApi = 'institute/view/' + this.parms_action_id;
            // init call
            this.init();
            this.editForm_api = 'institute/update/' + this.parms_action_id;
        }
        else if (this.parms_action_name == 'add') {
            this.model.instMnumCode = '+91';
            this.model.amdMnumCode = '+91';
            // form_api Api
            this.form_api = 'institute/add';
        }
    }
    // Auto genarate password start
    passwordGenarate(_userName) {
        if (_userName && this.parms_action_name == 'add') {
            var randomstring = Math.random().toString(36).slice(-10);
            this.model.amdPassword = randomstring;
            this.model.amdCnfPassword = randomstring;
        }
        else if (!_userName && this.parms_action_name == 'add') {
            this.model.amdPassword = '';
            this.model.amdCnfPassword = '';
        }
    }
    // Auto genarate password end
    // ---------- init start ----------
    init() {
        if (this.parms_action_name == 'edit') {
            this.actionHeaderText = 'Edit';
            this.editLoading = true;
            //edit data call
            this.editDataSubscribe = this.http.get(this.editApi).subscribe((res) => {
                this.editLoading = false;
                console.log("Edit data  res >", res);
                this.model = {
                    adrCity: res.instituteAddress[0].adrCity,
                    adrCountry: res.instituteAddress[0].adrCountry,
                    adrDistrict: res.instituteAddress[0].adrDistrict,
                    adrLine1: res.instituteAddress[0].adrLine1,
                    adrLine2: res.instituteAddress[0].adrLine2,
                    adrPincode: res.instituteAddress[0].adrPincode,
                    adrState: res.instituteAddress[0].adrState,
                    adrTaluka: res.instituteAddress[0].adrTaluka,
                    adrType: res.instituteAddress[0].adrType,
                    adrId: res.instituteAddress[0].adrId,
                    amdCnfPassword: res.instituteAdmin[0].amdPassword,
                    amdEmail: res.instituteAdmin[0].amdEmail,
                    amdFname: res.instituteAdmin[0].amdFname,
                    amdLname: res.instituteAdmin[0].amdLname,
                    amdMnum: res.instituteAdmin[0].amdMnum,
                    amdPassword: res.instituteAdmin[0].amdPassword,
                    amdPpic: res.instituteAdmin[0].amdPpic,
                    amdUsername: res.instituteAdmin[0].amdUsername,
                    amdDob: res.instituteAdmin[0].amdDob,
                    amdId: res.instituteAdmin[0].amdId,
                    instEmail: res.instEmail,
                    instGstNum: res.instGstNum,
                    instLogo: res.instLogo,
                    instCnum: res.instCnum,
                    instName: res.instName,
                    instPanNum: res.instPanNum,
                    instWebsite: res.instWebsite,
                    instEndDate: res.instEndDate,
                    isntRegDate: res.isntRegDate,
                    instMnum: res.instMnum,
                    instId: res.instId,
                };
                this.model.chkAmdDob = moment__WEBPACK_IMPORTED_MODULE_2__(res.instituteAdmin[0].amdDob).format('YYYY-MM-DD');
                this.model.chkRegDate = moment__WEBPACK_IMPORTED_MODULE_2__(res.isntRegDate).format('YYYY-MM-DD');
                this.model.chkEstDate = moment__WEBPACK_IMPORTED_MODULE_2__(res.instEndDate).format('YYYY-MM-DD');
                console.log('this.model.amdDob', this.model.amdDob);
                console.log('this.model.isntRegDate', this.model.isntRegDate);
                console.log('this.model.instEndDate', this.model.instEndDate);
                this.model.instMnumCode = res.instMnum.slice(0, 3);
                this.model.instMnumPh = res.instMnum.slice(3);
                this.model.amdMnumCode = res.instituteAdmin[0].amdMnum.slice(0, 3);
                this.model.amdMnumPh = res.instituteAdmin[0].amdMnum.slice(3);
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
    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        let reader = e.target;
        this.imageSrc = reader.result;
        console.log(this.imageSrc);
        this.model.instLogo = this.imageSrc;
    }
    // ---------Mobile number code add---------
    mobileNumberCode(_identifier, _purpose, _value) {
        if (_identifier == 'onrMobileNumber') {
            let code = this.model.amdMnumCode;
            let number = this.model.amdMnumPh;
            if (_purpose == 'numberCode') {
                code = _value;
            }
            else if (_purpose == 'number') {
                number = _value;
            }
            console.log('mobile No:', code + number);
            this.model.amdMnum = code + number;
        }
        else if (_identifier == 'instMobileNumber') {
            let code = this.model.instMnumCode;
            let number = this.model.instMnumPh;
            if (_purpose == 'numberCode') {
                code = _value;
            }
            else if (_purpose == 'number') {
                number = _value;
            }
            console.log('mobile No:', code + number);
            this.model.instMnum = code + number;
        }
    }
    // ---------Mobile number code end---------
    // Date format change start
    changeDateFormat(_identifier, _date) {
        console.log('_date', _date);
        console.log('_identifier', _identifier);
        if (_identifier == 'registrationDate') {
            this.model.isntRegDate = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY/MM/DD');
        }
        else if (_identifier == 'establishmentDate') {
            this.model.instEndDate = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY/MM/DD');
        }
        else if (_identifier == 'dateOfBirth') {
            this.model.amdDob = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY/MM/DD');
        }
        console.log('model.isntRegDate', this.model.isntRegDate);
    }
    onSubmitForm(form) {
        console.log("add form submit >", form.value);
        this.formLoading = true;
        let formValue = form.value;
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
        console.log('value >>>', fd);
        if (!form.valid) {
            return;
        }
        console.log('Updateing....', this.parms_action_name);
        if (this.parms_action_name == 'edit') {
            console.log('Updateing....');
            this.formSubmitSubscribe = this.http.put(this.editForm_api, form.value).subscribe((response) => {
                this.formLoading = false;
                console.log("add form response >", response);
                if (response.status == 200) {
                    this.commonUtils.presentToast('success', response.message);
                    this.router.navigateByUrl('/security-list');
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
                    this.router.navigateByUrl('/security-list');
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
    ngsel(value) {
        console.log('Select >>>', value);
    }
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
AddSecurityPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__.CommonUtils },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
AddSecurityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-security',
        template: _raw_loader_add_security_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_security_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddSecurityPage);



/***/ }),

/***/ 17738:
/*!********************************************************************!*\
  !*** ./src/app/pages/settings/add-security/add-security.page.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-md {\n  padding: 0.53rem 1.3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zZWN1cml0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtBQUNKIiwiZmlsZSI6ImFkZC1zZWN1cml0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW1kIHtcbiAgICBwYWRkaW5nOiAuNTNyZW0gMS4zcmVtICFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ 3179:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/add-security/add-security.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"form-layout\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n            <form #addInstForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(addInstForm)\" [mustMatch]=\"['amdPassword', 'amdCnfPassword']\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                      Institute {{parms_action_name}}\n                  </div>\n                  <div class=\"card-header-action\">\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-wrapper\">\n                  <ion-grid>\n                    <p class=\"form-heading\">Institute Details</p>\n                    <ion-row>\n                      <!-- Hidden -->\n                      <input type=\"hidden\" name=\"amdPpic\" [(ngModel)]=\"imageSrc\">\n                      <input type=\"hidden\" name=\"adrType\" [(ngModel)]=\"adrType\" required>\n                      <input type=\"hidden\" name=\"amdEmail\" [(ngModel)]=\"model.instEmail\" required>\n                      <input *ngIf=\"parms_action_name == 'edit'\" type=\"hidden\" name=\"instId\" [(ngModel)]=\"model.instId\" required>\n                      <input *ngIf=\"parms_action_name == 'edit'\" type=\"hidden\" name=\"adrId\" [(ngModel)]=\"model.adrId\" required>\n                      <input *ngIf=\"parms_action_name == 'edit'\" type=\"hidden\" name=\"amdId\" [(ngModel)]=\"model.amdId\" required>\n                      <!-- Institute Name -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Institute Name</mat-label>\n                            <input matInput placeholder=\"Institute Name\" name=\"instName\" [(ngModel)]=\"model.instName\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Registration Date -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Registration Date</mat-label>\n                            <input (change)=\"changeDateFormat('registrationDate', model.chkRegDate)\" (keydown)=\"disableDate()\" matInput placeholder=\"Registration Date\" type=\"date\" name=\"chkRegDate\" [(ngModel)]=\"model.chkRegDate\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Hidden -->\n                      <input type=\"hidden\" name=\"isntRegDate\" [(ngModel)]=\"model.isntRegDate\" required>\n                      <!-- Establishment Date -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Establishment Date</mat-label>\n                            <input (change)=\"changeDateFormat('establishmentDate', model.chkEstDate)\" (keydown)=\"disableDate()\" matInput placeholder=\"Establishment Date\" type=\"date\" name=\"chkEstDate\" [(ngModel)]=\"model.chkEstDate\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Hidden -->\n                      <input type=\"hidden\" name=\"instEndDate\" [(ngModel)]=\"model.instEndDate\" required>\n                      <!-- Website/Domain Name -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Website/Domain Name </mat-label>\n                            <input matInput placeholder=\"Website/Domain Name\" name=\"instWebsite\" [(ngModel)]=\"model.instWebsite\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Email address -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Email Address </mat-label>\n                            <input matInput placeholder=\"Email Address\" name=\"instEmail\" type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" email clearInput [(ngModel)]=\"model.instEmail\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Contact number -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Contact Number </mat-label>\n                            <input matInput placeholder=\"Contact Number\" minlength=\"5\" maxlength=\"20\" name=\"instCnum\" [(ngModel)]=\"model.instCnum\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Mobile number -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field  appearance=\"outline\" class=\"customnumber\">\n                            <mat-label>Mobile number</mat-label>\n                            <span matPrefix>\n                              <select class=\"countrycode\" placeholder=\"Select State\" name=\"instMnumCode\" [(ngModel)]=\"model.instMnumCode\" (change)=\"mobileNumberCode('instMobileNumber', 'numberCode', model.instMnumCode)\" required>\n                                <option *ngFor=\"let item of countryCode\" [value]=\"item.name\">\n                                  {{item.name}}\n                                </option>\n                              </select>\n                            </span>\n                            <input type=\"text\" matInput placeholder=\"Mobile Number\" name=\"instMnumPh\" minlength=\"5\" maxlength=\"20\" [(ngModel)]=\"model.instMnumPh\" (change)=\"mobileNumberCode('instMobileNumber', 'number', model.instMnumPh)\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Hidden -->\n                      <input type=\"hidden\" name=\"instMnum\" [(ngModel)]=\"model.instMnum\" required>\n\n                      <!-- GSTIN / UIN No -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>GSTIN / UIN No </mat-label>\n                            <input matInput placeholder=\"GSTIN / UIN No\" name=\"instGstNum\" minlength=\"15\" maxlength=\"15\" [(ngModel)]=\"model.instGstNum\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- PAN No -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>PAN No </mat-label>\n                            <input matInput placeholder=\"PAN No\" name=\"instPanNum\" minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"model.instPanNum\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Institute Logo -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-label>Institute Logo</ion-label>\n                          <div class=\"custom-file\">\n                            <input class=\"custom-file-input\" id=\"singleFileUpload\" type=\"file\" name=\"imageUrl\" accept=\"image/*\" (change)=\"handleInputChange($event)\">\n                            <label class=\"custom-file-label\" for=\"singleFileUpload\">Choose file</label>\n                            <img [src]=\"imageSrc\" style=\"max-width:300px;max-height:300px\"/>\n                          </div>\n                        </div>\n                      </ion-col>\n                      <!-- Hidden -->\n                      <input type=\"hidden\" name=\"instLogo\" [(ngModel)]=\"model.instLogo\">\n                    </ion-row>\n                    <p class=\"form-heading\">Owner Details</p>\n                    <ion-row>\n                      <!-- Owner Name -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>First Name </mat-label>\n                            <input matInput placeholder=\"Owner Name\" name=\"amdFname\" [(ngModel)]=\"model.amdFname\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Owner Name -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Last Name </mat-label>\n                            <input matInput placeholder=\"Owner Name\" name=\"amdLname\" [(ngModel)]=\"model.amdLname\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Date of Birth -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Date of Birth</mat-label>\n                            <input (change)=\"changeDateFormat('dateOfBirth', model.chkAmdDob)\" (keydown)=\"disableDate()\" matInput placeholder=\"Date of Birth\" type=\"date\" name=\"chkAmdDob\" [(ngModel)]=\"model.chkAmdDob\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Hidden -->\n                      <input type=\"hidden\" name=\"amdDob\" [(ngModel)]=\"model.amdDob\" required>\n                      <!-- Owner Mobile number -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field  appearance=\"outline\" class=\"customnumber\">\n                            <mat-label>Mobile number</mat-label>\n                            <span matPrefix>\n                              <select class=\"countrycode\" placeholder=\"Select State\" name=\"amdMnumCode\" [(ngModel)]=\"model.amdMnumCode\" (change)=\"mobileNumberCode('onrMobileNumber', 'numberCode', model.amdMnumCode)\" required>\n                                <option *ngFor=\"let item of countryCode\" [value]=\"item.name\">\n                                  {{item.name}}\n                                </option>\n                              </select>\n                            </span>\n                            <input type=\"text\" matInput placeholder=\"Mobile Number\" name=\"amdMnumPh\" minlength=\"5\" maxlength=\"20\" [(ngModel)]=\"model.amdMnumPh\" (change)=\"mobileNumberCode('onrMobileNumber', 'number', model.amdMnumPh)\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Hidden -->\n                      <input type=\"hidden\" name=\"amdMnum\" [(ngModel)]=\"model.amdMnum\" required>\n                      <!-- Address Line 1 -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Address Line 1 </mat-label>\n                            <input matInput placeholder=\"Address Line 1\" name=\"adrLine1\" [(ngModel)]=\"model.adrLine1\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Address Line 2 -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Address Line 2</mat-label>\n                            <input matInput placeholder=\"Address Line 2\" name=\"adrLine2\" [(ngModel)]=\"model.adrLine2\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Country -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item ngsel\">\n                          <ng-select [items]=\"country\" \n                                   bindLabel=\"name\" \n                                   name=\"adrCountry\"\n                                   placeholder=\"Select Country\"\n                                   bindValue=\"id\" \n                                   [(ngModel)]=\"model.adrCountry\"\n                                   (change)=\"ngsel(model.adrCountry)\"\n                                   required>\n                          </ng-select>\n                          <label>Country </label>\n                        </div>\n                      </ion-col>\n                      <!-- State -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item ngsel\">\n                          <ng-select [items]=\"state\" \n                                   bindLabel=\"name\" \n                                   name=\"adrState\"\n                                   placeholder=\"Select State\"\n                                   bindValue=\"id\" \n                                   [(ngModel)]=\"model.adrState\"\n                                   (change)=\"ngsel(model.adrState)\"\n                                   required>\n                          </ng-select>\n                          <label>State</label>\n                        </div>\n                      </ion-col>\n                      <!-- District -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item ngsel\">\n                          <ng-select [items]=\"district\" \n                                   bindLabel=\"name\" \n                                   name=\"adrDistrict\"\n                                   placeholder=\"Select District\"\n                                   bindValue=\"id\" \n                                   [(ngModel)]=\"model.adrDistrict\"\n                                   (change)=\"ngsel(model.adrDistrict)\"\n                                   required>\n                          </ng-select>\n                          <label>District </label>\n                        </div>\n                      </ion-col>\n                      <!-- Taluka -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item ngsel\">\n                          <!-- <mat-form-field appearance=\"outline\">\n                            <mat-label>Taluka</mat-label>\n                            <mat-select name=\"adrTaluka\" [(ngModel)]=\"model.adrTaluka\">\n                              <mat-option *ngFor=\"let item of taluka\" [value]=\"item.id\">\n                                {{item.name}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field> -->\n                         \n                          <ng-select [items]=\"district\" \n                                   bindLabel=\"name\" \n                                   name=\"adrTaluka\"\n                                   placeholder=\"Select Taluka\"\n                                   bindValue=\"id\" \n                                   [(ngModel)]=\"model.adrTaluka\"\n                                   (change)=\"ngsel(model.adrTaluka)\"\n                                   required>\n                          </ng-select> \n                          <label>Taluka </label>\n                        </div>\n                      </ion-col>\n                      <!-- City -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item ngsel\">\n                          \n                          <ng-select [items]=\"city\" \n                                   bindLabel=\"name\" \n                                   name=\"adrCity\"\n                                   placeholder=\"Select Taluka\"\n                                   bindValue=\"id\" \n                                   [(ngModel)]=\"model.adrCity\"\n                                   (change)=\"ngsel(model.adrCity)\"\n                                   required>\n                          </ng-select>\n                          <label>City </label>\n                        </div>\n                      </ion-col>\n                      <!-- Pin Code -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\" >\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Pin Code </mat-label>\n                            <input matInput placeholder=\"Pin Code\" name=\"adrPincode\" minlength=\"6\" maxlength=\"6\" [(ngModel)]=\"model.adrPincode\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                    <p class=\"form-heading\">Login Details</p>\n                    <ion-row>\n                      <!-- User Name -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>User Name </mat-label>\n                            <input matInput placeholder=\"User Name\" (change)=\"passwordGenarate(model.amdUsername)\" name=\"amdUsername\" [(ngModel)]=\"model.amdUsername\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Password -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Password</mat-label>\n                            <input matInput [type]=\"hide ? 'password' : 'text'\" ngModel\n                            name=\"amdPassword\"\n                            [(ngModel)]=\"model.amdPassword\"\n                            required\n                            placeholder=\"Password\"\n                            minlenth=\"2\"\n                            #passwordCtrl=\"ngModel\"\n                            clearInput>\n                            <span mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                              <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                            </span>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Confirm Password -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Confirm Password</mat-label>\n                            <input matInput [type]=\"hide2 ? 'password' : 'text'\" ngModel\n                            name=\"amdCnfPassword\"\n                            [(ngModel)]=\"model.amdCnfPassword\"\n                            required\n                            placeholder=\"Confirm Password\"\n                            minlenth=\"2\"\n                            #passwordCtrl=\"ngModel\"\n                            clearInput>\n                            <span mat-icon-button matSuffix (click)=\"hide2 = !hide2\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide2\">\n                              <mat-icon>{{hide2 ? 'visibility_off' : 'visibility'}}</mat-icon>\n                            </span>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                <div>\n                    <button class=\"border-btn danger btn-md\" type=\"reset\" [routerLink]=\"['/', 'security-list']\" style=\"margin-right: 10px;\" mat-stroked-button>Cancel</button>\n                    <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" [disabled]=\"!addInstForm.valid || formLoading\">\n                      <ion-spinner *ngIf=\"formLoading\" name=\"crescent\"></ion-spinner> \n                      Save\n                    </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_add-security_add-security_module_ts-es2015.js.map