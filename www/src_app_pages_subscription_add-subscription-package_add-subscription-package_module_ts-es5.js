(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_subscription_add-subscription-package_add-subscription-package_module_ts"], {
    /***/
    40343:
    /*!********************************************************************************************************!*\
      !*** ./src/app/pages/subscription/add-subscription-package/add-subscription-package-routing.module.ts ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSubscriptionPackagePageRoutingModule": function AddSubscriptionPackagePageRoutingModule() {
          return (
            /* binding */
            _AddSubscriptionPackagePageRoutingModule
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


      var _add_subscription_package_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-subscription-package.page */
      28738);

      var routes = [{
        path: '',
        component: _add_subscription_package_page__WEBPACK_IMPORTED_MODULE_0__.AddSubscriptionPackagePage
      }];

      var _AddSubscriptionPackagePageRoutingModule = function AddSubscriptionPackagePageRoutingModule() {
        _classCallCheck(this, AddSubscriptionPackagePageRoutingModule);
      };

      _AddSubscriptionPackagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddSubscriptionPackagePageRoutingModule);
      /***/
    },

    /***/
    30765:
    /*!************************************************************************************************!*\
      !*** ./src/app/pages/subscription/add-subscription-package/add-subscription-package.module.ts ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSubscriptionPackagePageModule": function AddSubscriptionPackagePageModule() {
          return (
            /* binding */
            _AddSubscriptionPackagePageModule
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


      var _add_subscription_package_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-subscription-package-routing.module */
      40343);
      /* harmony import */


      var _add_subscription_package_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-subscription-package.page */
      28738);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _AddSubscriptionPackagePageModule = function AddSubscriptionPackagePageModule() {
        _classCallCheck(this, AddSubscriptionPackagePageModule);
      };

      _AddSubscriptionPackagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _add_subscription_package_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddSubscriptionPackagePageRoutingModule],
        declarations: [_add_subscription_package_page__WEBPACK_IMPORTED_MODULE_1__.AddSubscriptionPackagePage]
      })], _AddSubscriptionPackagePageModule);
      /***/
    },

    /***/
    28738:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/subscription/add-subscription-package/add-subscription-package.page.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSubscriptionPackagePage": function AddSubscriptionPackagePage() {
          return (
            /* binding */
            _AddSubscriptionPackagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_subscription_package_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-subscription-package.page.html */
      5318);
      /* harmony import */


      var _add_subscription_package_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-subscription-package.page.scss */
      39877);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);

      var _AddSubscriptionPackagePage = /*#__PURE__*/function () {
        // Variables end
        function AddSubscriptionPackagePage(toastController, menuCtrl, http, commonUtils, // common functionlity come here
        router, activatedRoute) {
          _classCallCheck(this, AddSubscriptionPackagePage);

          this.toastController = toastController;
          this.menuCtrl = menuCtrl;
          this.http = http;
          this.commonUtils = commonUtils;
          this.router = router;
          this.activatedRoute = activatedRoute; // Variables start

          this.model = {};
          this.validity = [{
            id: 1,
            name: 'Years',
            avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
          }, {
            id: 2,
            name: 'Months',
            avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15'
          }, {
            id: 3,
            name: 'Days',
            avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
          }];
          this.editLoading = false;
          this.instEdit = false; // End date calculation end
          // ======================== form submit start ===================

          this.formLoading = false;
        }

        _createClass(AddSubscriptionPackagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonFunction();
          }
        }, {
          key: "commonFunction",
          value: function commonFunction() {
            // get active url name
            this.commonUtils.getPathNameFun(this.router.url.split('/')[1]);
            this.parms_action_name = this.activatedRoute.snapshot.paramMap.get('action');
            this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
            this.getInstituteList_api = "institute/getlist";
            this.getInstituteList();
            console.log('parms_action_name', this.parms_action_name);
            console.log('parms_action_id', this.parms_action_id); // edit api

            if (this.parms_action_name == 'edit') {
              this.editApi = 'package/view/' + this.parms_action_id; // init call

              this.init();
              this.editForm_api = 'package/update/' + this.parms_action_id;
            } // form_api Api


            this.form_api = 'package/add';
          }
        }, {
          key: "getInstituteList",
          value: function getInstituteList() {
            var _this = this;

            console.log("HHH");
            this.getInstitutes = this.http.get(this.getInstituteList_api).subscribe(function (res) {
              console.log("Get template for  >", res[0].etAction);
              console.log("Get template for length", res.length);
              _this.institutes = res;
              console.log("Get template for length", _this.institutes);
            }, function (errRes) {
              console.log("Get template for  >", errRes);
            });
          }
        }, {
          key: "ngsel",
          value: function ngsel(value) {
            console.log("select", value);
          } // ---------- init start ----------

        }, {
          key: "init",
          value: function init() {
            var _this2 = this;

            if (this.parms_action_name == 'edit') {
              this.instEdit = true;
              this.actionHeaderText = 'Edit';
              this.editLoading = true; //edit data call

              this.editDataSubscribe = this.http.get(this.editApi).subscribe(function (res) {
                _this2.editLoading = false;
                console.log("Edit data  res >", res);
                _this2.model = {
                  pkName: res.packageData.pkName,
                  pkFname: res.packageData.pkFname,
                  pkNusers: res.packageData.pkNusers,
                  pkValidityType: res.packageData.pkValidityType,
                  pkValidityNum: res.packageData.pkValidityNum,
                  pkComment: res.packageData.pkComment,
                  instId: res.packageData.instId,
                  pkCdate: res.packageData.pkCdate
                };
                _this2.model.chkdurationyear = moment__WEBPACK_IMPORTED_MODULE_2__(res.packageData.pkCdate).format('YYYY-MM-DD');
                console.log('this.model.creatDate', _this2.model); // edit data

                _this2.allEditData = res;
                console.log('this.allEditData', _this2.allEditData);
                console.log('this.allEditData', _this2.model);
              }, function (errRes) {
                // this.selectLoadingDepend = false;
                _this2.editLoading = false;
              });
            } else {
              this.actionHeaderText = 'Add';
            }
          } // ---------- init end ----------

        }, {
          key: "presentToast",
          value: function presentToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'Your data have been saved.',
                        duration: 2000,
                        cssClass: "my-tost-custom-classsuccess"
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
          } // Date format change start

        }, {
          key: "createDate",
          value: function createDate(_date) {
            console.log('_date', _date);
            this.model.lcCreatDate = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY/MM/DD');
            console.log('model.lcCreatDate', this.model.lcCreatDate);
            this.model.lcValidityType = '';
            this.model.lcValidityNum = '';
            this.model.lcEndDate = '';
          }
        }, {
          key: "endDateCalculate",
          value: function endDateCalculate(_identifier, _value) {
            console.log('_identifier', _identifier);
            console.log('_value', _value);
            console.log('this.model.lcCreatDate', this.model.lcCreatDate);

            if (_identifier == 'validity') {
              this.licValidity = _value;
            } else if (_identifier == 'duration') {
              this.licDuration = _value;
            }

            console.log('licValidity', this.licValidity);
            console.log('licDuration', this.licDuration);

            if (this.licValidity && this.licDuration) {
              var createDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.model.lcCreatDate).format('DD/MM/YYYY'); // ----- original date format convert start -----

              var myFormatDate = createDate.split(" ")[0].split("/");

              var _mynewdate = myFormatDate[2] + "-" + myFormatDate[1] + "-" + myFormatDate[0]; // original date format convert end


              console.log('myFormatDate', myFormatDate);
              console.log('_mynewdate', _mynewdate); //---- set day + count add start----

              this.selectCycleDate = new Date(_mynewdate); // this.selectCycleDate.setDate( this.selectCycleDate.getDate() + 3 );

              if (this.licValidity == 'Years') {
                this.selectCycleDate.setDate(this.selectCycleDate.getDate() + parseInt(this.licDuration) * 365);
              } else if (this.licValidity == 'Months') {
                this.selectCycleDate.setDate(this.selectCycleDate.getDate() + parseInt(this.licDuration) * 30);
              } else if (this.licValidity == 'Days') {
                this.selectCycleDate.setDate(this.selectCycleDate.getDate() + parseInt(this.licDuration));
              } // alert('this.date >'+this.selectCycleDate);


              this.model.lcEndDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.selectCycleDate).format('YYYY/MM/DD');
              console.log('this.model.lcEndDate', this.model.lcEndDate); //---- set day + count add end----
            }
          }
        }, {
          key: "onSubmitForm",
          value: function onSubmitForm(form) {
            var _this3 = this;

            console.log("add form submit >", form.value);
            this.formLoading = true;
            var formValue = form.value;
            this.model.lcCreatDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.model.lcCreatDate).format('YYYY/MM/DD');
            console.log('model.lcCreatDate', this.model.lcCreatDate);
            this.model.lcEndDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.model.lcEndDate).format('YYYY/MM/DD');
            console.log('model.lcEndDate', this.model.lcEndDate); // formValue.append('lcCreatDate', this.model.lcCreatDate);
            // formValue.append('lcEndDate', this.model.lcEndDate);

            console.log('formValue', formValue); // get form value

            var fd = new FormData();

            for (var val in form.value) {
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
              this.formSubmitSubscribe = this.http.put(this.editForm_api, form.value).subscribe(function (response) {
                _this3.formLoading = false;
                console.log("add form response >", response);

                if (response.status == 200) {
                  _this3.commonUtils.presentToast('success', response.message);

                  _this3.router.navigateByUrl('/subscription-package-list');

                  form.reset();
                } else {
                  _this3.commonUtils.presentToast('error', response.message);
                }
              }, function (errRes) {
                _this3.formLoading = false;
              });
            } else if (this.parms_action_name == 'add') {
              this.formSubmitSubscribe = this.http.post(this.form_api, form.value).subscribe(function (response) {
                _this3.formLoading = false;
                console.log("add form response >", response);

                if (response.status == 200) {
                  _this3.commonUtils.presentToast('success', response.message);

                  _this3.router.navigateByUrl('/subscription-package-list');

                  form.reset();
                } else {
                  _this3.commonUtils.presentToast('error', response.message);
                }
              }, function (errRes) {
                _this3.formLoading = false;
              });
            }
          } // form submit end
          // Date format change start

        }, {
          key: "changeDateFormat",
          value: function changeDateFormat(_identifier, _date) {
            console.log('_date', _date);
            console.log('_identifier', _identifier);

            if (_identifier == 'startDate') {
              this.model.pkCdate = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY/MM/DD');
            }
          } // Date format change end
          // Disable date field start

        }, {
          key: "disableDate",
          value: function disableDate() {
            return false;
          } // Disable date field end
          // ----------- destroy subscription start ---------

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formSubmitSubscribe !== undefined) {
              this.formSubmitSubscribe.unsubscribe();
            }

            if (this.editDataSubscribe !== undefined) {
              this.editDataSubscribe.unsubscribe();
            }
          }
        }]);

        return AddSubscriptionPackagePage;
      }();

      _AddSubscriptionPackagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__.CommonUtils
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }];
      };

      _AddSubscriptionPackagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-subscription-package',
        template: _raw_loader_add_subscription_package_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_subscription_package_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddSubscriptionPackagePage);
      /***/
    },

    /***/
    39877:
    /*!************************************************************************************************!*\
      !*** ./src/app/pages/subscription/add-subscription-package/add-subscription-package.page.scss ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-md {\n  padding: 0.53rem 1.3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdWJzY3JpcHRpb24tcGFja2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtBQUNKIiwiZmlsZSI6ImFkZC1zdWJzY3JpcHRpb24tcGFja2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW1kIHtcbiAgICBwYWRkaW5nOiAuNTNyZW0gMS4zcmVtICFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    },

    /***/
    5318:
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/subscription/add-subscription-package/add-subscription-package.page.html ***!
      \**************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"form-layout\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n            <form #addPackageForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(addPackageForm)\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                      Package {{parms_action_name}}\n                  </div>\n                  <div class=\"card-header-action\">\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-wrapper\">\n                  <ion-grid>\n                    <ion-row>\n                      <!-- Package Name -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Package Name</mat-label>\n                            <input matInput placeholder=\"Package Name\" required type=\"text\" name=\"pkName\" [(ngModel)]=\"model.pkName\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n\n                      <!-- Package Full Name -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Package Full Name</mat-label>\n                            <input matInput placeholder=\"Package Full Name\" required type=\"text\" name=\"pkFname\" [(ngModel)]=\"model.pkFname\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- No. of users -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                         <mat-form-field appearance=\"outline\">\n                            <mat-label>No. of users</mat-label>\n                            <input matInput placeholder=\"No. of users\" type=\"number\" required name=\"pkNusers\" [(ngModel)]=\"model.pkNusers\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Institute -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\" [ngClass]=\"{ 'readOnly' : instEdit }\">\n                        <div class=\"form-item\">\n                          <mat-label>Institutes</mat-label>\n                          <ng-select [items]=\"institutes\" \n                                   bindLabel=\"instName\" \n                                   name=\"instId\"\n                                   placeholder=\"Select Institutes\"\n                                   bindValue=\"instId\" \n                                   [(ngModel)]=\"model.instId\"\n                                   (change)=\"ngsel(model.instId)\"\n                                   [ngClass]=\"{ 'readOnly' : instEdit }\"\n                                   required>\n                          </ng-select>\n                          <!-- </mat-form-field> -->\n                        </div>\n                      </ion-col>\n                      \n\n                      <!-- Validity -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                            <mat-label>Validity</mat-label>\n                            <ng-select [items]=\"validity\" \n                                   bindLabel=\"name\" \n                                   name=\"pkValidityType\"\n                                   placeholder=\"Select Validity\"\n                                   bindValue=\"name\" \n                                   [(ngModel)]=\"model.pkValidityType\"\n                                   (change)=\"ngsel(model.pkValidityType)\"\n                                   required >\n                          </ng-select>\n                        </div>\n                      </ion-col>\n\n                      <!-- Duration -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Duration</mat-label>\n                            <input matInput placeholder=\"Duration\" required type=\"number\" name=\"pkValidityNum\" [(ngModel)]=\"model.pkValidityNum\">\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Start Date -->\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <!-- <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                            <mat-label>Start Date</mat-label>\n                            <input matInput [matDatepicker]=\"dob\" name=\"durationyear\" [(ngModel)]=\"model.durationyear\">\n                            <mat-datepicker-toggle matSuffix [for]=\"dob\"></mat-datepicker-toggle>\n                            <mat-datepicker touchUi #dob></mat-datepicker>\n                          </mat-form-field> -->\n\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Start Date</mat-label>\n                            <input (change)=\"changeDateFormat('startDate', model.chkdurationyear)\" onkeydown=\"return false\" matInput placeholder=\"Start Date\" type=\"date\" name=\"chkdurationyear\" [(ngModel)]=\"model.chkdurationyear\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Hidden -->\n                      <input type=\"hidden\" name=\"pkCdate\" [(ngModel)]=\"model.pkCdate\" required>\n                      <!-- Remarks -->\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Remarks</mat-label>\n                            <textarea matInput name=\"pkComment\" [(ngModel)]=\"model.pkComment\" required></textarea>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                <div>\n                    <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" mat-stroked-button>Cancel</button>\n                    <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" [disabled]=\"!addPackageForm.valid || formLoading\">\n                      <ion-spinner *ngIf=\"formLoading\" name=\"crescent\"></ion-spinner> \n                      Save\n                    </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_subscription_add-subscription-package_add-subscription-package_module_ts-es5.js.map