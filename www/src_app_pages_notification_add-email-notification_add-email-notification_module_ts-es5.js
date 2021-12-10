(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_notification_add-email-notification_add-email-notification_module_ts"], {
    /***/
    81807:
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/notification/add-email-notification/add-email-notification-routing.module.ts ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddEmailNotificationPageRoutingModule": function AddEmailNotificationPageRoutingModule() {
          return (
            /* binding */
            _AddEmailNotificationPageRoutingModule
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


      var _add_email_notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-email-notification.page */
      69372);

      var routes = [{
        path: '',
        component: _add_email_notification_page__WEBPACK_IMPORTED_MODULE_0__.AddEmailNotificationPage
      }];

      var _AddEmailNotificationPageRoutingModule = function AddEmailNotificationPageRoutingModule() {
        _classCallCheck(this, AddEmailNotificationPageRoutingModule);
      };

      _AddEmailNotificationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddEmailNotificationPageRoutingModule);
      /***/
    },

    /***/
    50178:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/notification/add-email-notification/add-email-notification.module.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddEmailNotificationPageModule": function AddEmailNotificationPageModule() {
          return (
            /* binding */
            _AddEmailNotificationPageModule
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


      var _add_email_notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-email-notification-routing.module */
      81807);
      /* harmony import */


      var _add_email_notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-email-notification.page */
      69372);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _AddEmailNotificationPageModule = function AddEmailNotificationPageModule() {
        _classCallCheck(this, AddEmailNotificationPageModule);
      };

      _AddEmailNotificationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _add_email_notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddEmailNotificationPageRoutingModule],
        declarations: [_add_email_notification_page__WEBPACK_IMPORTED_MODULE_1__.AddEmailNotificationPage]
      })], _AddEmailNotificationPageModule);
      /***/
    },

    /***/
    69372:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/notification/add-email-notification/add-email-notification.page.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddEmailNotificationPage": function AddEmailNotificationPage() {
          return (
            /* binding */
            _AddEmailNotificationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_email_notification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-email-notification.page.html */
      28538);
      /* harmony import */


      var _add_email_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-email-notification.page.scss */
      94257);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../modal/modal.page */
      58167);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AddEmailNotificationPage = /*#__PURE__*/function () {
        // selectedCity = this.cities[0].name;
        // selectedType = this.setDefaults[1].name;
        // selectedTemplate = this.Templates[1].name;
        function AddEmailNotificationPage(toastController, modalController, http, commonUtils, // common functionlity come here
        router, activatedRoute) {
          _classCallCheck(this, AddEmailNotificationPage);

          this.toastController = toastController;
          this.modalController = modalController;
          this.http = http;
          this.commonUtils = commonUtils;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.model = {};
          this.editLoading = false;
          this.formLoading = false;
          this.cities = [{
            id: 1,
            name: 'Vilnius',
            avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
          }, {
            id: 2,
            name: 'Kaunas',
            avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15'
          }, {
            id: 3,
            name: 'Pavilnys',
            avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
          }, {
            id: 4,
            name: 'Siauliai',
            avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
          }];
          this.Templates = [];
          this.setDefaults = [{
            id: 0,
            name: 'Not Default'
          }, {
            id: 1,
            name: 'Default'
          }];
        }

        _createClass(AddEmailNotificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonFunction();
          } // getTemplatefor start

        }, {
          key: "getTemplatefor",
          value: function getTemplatefor() {
            var _this = this;

            console.log("HHH");
            this.templatefor_get = this.http.get(this.getTemplateFor_api).subscribe(function (res) {
              console.log("Get template for  >", res[0].etAction);
              console.log("Get template for length", res.length);
              _this.Templates = res;
              console.log("Get template for length", _this.Templates);
            }, function (errRes) {
              console.log("Get template for  >", errRes);
            });
          } // getTemplatefor end

        }, {
          key: "ngsel",
          value: function ngsel(value) {
            console.log("select", value);
          } // commonFunction start 

        }, {
          key: "commonFunction",
          value: function commonFunction() {
            // get active url name
            this.commonUtils.getPathNameFun(this.router.url.split('/')[1]);
            var x = this.commonUtils.getPathNameFun(this.router.url.split('/')[1]);
            console.log(this.router.url);
            this.parms_action_name = this.activatedRoute.snapshot.paramMap.get('action');
            this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
            console.log('parms_action_name', this.parms_action_name);
            console.log('parms_action_id', this.parms_action_id);
            this.getTemplateFor_api = 'emailTemplate/getAll/template_for';
            this.getTemplatefor(); // edit api

            if (this.parms_action_name == 'edit') {
              this.editApi = 'emailTemplate/viewTemplate/' + this.parms_action_id; // init call

              this.init();
              this.editForm_api = 'emailTemplate/update/' + this.parms_action_id;
            } // form_api Api


            this.form_api = 'emailTemplate/add';
          } // commonFunction end
          // ---------- init start ----------

        }, {
          key: "init",
          value: function init() {
            var _this2 = this;

            if (this.parms_action_name == 'edit') {
              this.editLoading = true; //edit data call

              this.editDataSubscribe = this.http.get(this.editApi).subscribe(function (res) {
                // console.log("Match >", res.etAction); 
                for (var i = 0; i < _this2.Templates.length; i++) {
                  if (res.etAction == _this2.Templates[i].etAction) {
                    console.log("Match >", res.etAction);
                    console.log("Templates >", _this2.Templates[i].etTags);
                    _this2.selectdTag = _this2.Templates[i].etTags;
                  }
                }

                _this2.editLoading = false;
                console.log("Edit data  res >", res.return_data);
                _this2.model = {
                  etAction: res.etAction,
                  etName: res.etName,
                  etSubject: res.etSubject,
                  isPrimary: res.isPrimary,
                  etBody: res.etBody,
                  etType: res.etType
                }; // edit data

                _this2.allEditData = res;
                console.log('this.allEditData', _this2.allEditData);
              }, function (errRes) {
                // this.selectLoadingDepend = false;
                _this2.editLoading = false;
              });
            } else {
              this.actionHeaderText = 'Add';
            }
          } // ---------- init end ----------
          // --------on submit start----------

        }, {
          key: "onSubmitForm",
          value: function onSubmitForm(form) {
            var _this3 = this;

            this.formLoading = true;
            var formValue = form.value;
            console.log(form.value); // / get form value

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

                  _this3.router.navigateByUrl('/email-notification-list');

                  console.log("response", response);
                  form.reset();
                } else {
                  _this3.commonUtils.presentToast('error', response.message);

                  console.log("response", response);
                }

                console.log("response", response);
              }, function (errRes) {
                _this3.formLoading = false;
                console.log("errResbb", errRes);
              });
            } else if (this.parms_action_name == 'add') {
              this.formSubmitSubscribe = this.http.post(this.form_api, form.value).subscribe(function (response) {
                _this3.formLoading = false;
                console.log("add form response >", response);

                if (response.status == 200) {
                  _this3.commonUtils.presentToast('success', response.message);

                  _this3.router.navigateByUrl('/email-notification-list');

                  form.reset();
                } else {
                  _this3.commonUtils.presentToast('error', response.message);
                }
              }, function (errRes) {
                _this3.formLoading = false;
              });
            }
          } // on submit end

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
          } // AddTemplate start

        }, {
          key: "AddTemplate",
          value: function AddTemplate(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var changePassword_modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__.ModalPage,
                        cssClass: 'mymodalClass small',
                        componentProps: {
                          identifier: _identifier,
                          modalForm_item: _item,
                          modalForm_array: _items
                        }
                      });

                    case 2:
                      changePassword_modal = _context2.sent;
                      // modal data back to Component
                      changePassword_modal.onDidDismiss().then(function (getdata) {
                        console.log('getdata >>>>>>>>>>>', getdata); // this.presentToast('Package End', 'success');

                        if (getdata.data == 'submitClose') {
                          /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
                        }
                      });
                      _context2.next = 6;
                      return changePassword_modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // AddTemplate end

        }, {
          key: "selectTemplates",
          value: function selectTemplates(_data) {
            console.log('_data>>', _data);
            this.selectdTag = _data; // this.Templates

            console.log("this.Templates ", this.Templates);
          } // ----------- destroy subscription start ---------

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

        return AddEmailNotificationPage;
      }();

      _AddEmailNotificationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
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

      _AddEmailNotificationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-email-notification',
        template: _raw_loader_add_email_notification_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_email_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddEmailNotificationPage);
      /***/
    },

    /***/
    94257:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/notification/add-email-notification/add-email-notification.page.scss ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-md {\n  padding: 0.53rem 1.3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lbWFpbC1ub3RpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7QUFDSiIsImZpbGUiOiJhZGQtZW1haWwtbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tbWQge1xuICAgIHBhZGRpbmc6IC41M3JlbSAxLjNyZW0gIWltcG9ydGFudDtcbn0iXX0= */";
      /***/
    },

    /***/
    28538:
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/add-email-notification/add-email-notification.page.html ***!
      \**********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"form-layout\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n            <form #addEmailnoticForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(addEmailnoticForm)\" >\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Email Template {{parms_action_name}}\n                  </div>\n                  <div class=\"card-header-action\">\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-wrapper\">\n                  <ion-grid>\n                    <ion-row>\n                      <!-- Template For -->\n                      <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item ngsel\">\n                        <!--<ion-badge class=\"pillBtn\" color=\"primary\" (click)=\"AddTemplate('AddTemplate_modal', get_user_dtls, '');\">\n                            <ion-icon name=\"add-outline\"></ion-icon>\n                            Add\n                          </ion-badge>\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Template For </mat-label>\n                            <mat-select [(value)]=\"selectedTemplate\" [(ngModel)]=\"model.etAction\" name=\"etAction\" required>\n                              <mat-option (click)=\"selectTemplates(template.etTags)\" [value]=\"template.etAction\" *ngFor=\"let template of Templates\">{{ template.etAction }}</mat-option>\n                            </mat-select>\n                          </mat-form-field> -->\n                          \n                          <ng-select [ngClass]=\"{'readOnly': model?.etType == 'DEFAULT'}\" [items]=\"Templates\" \n                                   bindLabel=\"etAction\" \n                                   name=\"etAction\"\n                                   bindValue=\"etAction\" \n                                   [(ngModel)]=\"model.etAction\"\n                                   (change)=\"selectTemplates(Templates.etTags)\">\n                          </ng-select>\n                          <label>Template For</label>\n                        </div>\n                      </ion-col>\n                      <!-- Template name -->\n                      <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\" [ngClass]=\"{'readOnly': model?.etType == 'DEFAULT'}\">\n                            <mat-label>Template Name </mat-label>\n                            <input matInput placeholder=\"Template Name\" name=\"etName\" type=\"text\" [(ngModel)]=\"model.etName\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                       <!-- Subject -->\n                       <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\" [ngClass]=\"{'readOnly': model?.etType == 'DEFAULT'}\">\n                            <mat-label>Subject </mat-label>\n                            <input matInput placeholder=\"Subject\" name=\"etSubject\" type=\"text\" [(ngModel)]=\"model.etSubject\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Set Default -->\n                      <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item ngsel\">\n                          \n                          <ng-select [items]=\"setDefaults\" \n                                   bindLabel=\"name\" \n                                   name=\"isPrimary\"\n                                   placeholder=\"Select Set Default\"\n                                   bindValue=\"id\" \n                                   [(ngModel)]=\"model.isPrimary\"\n                                   (change)=\"ngsel(model.isPrimary)\"\n                                   required>\n                          </ng-select>\n                          <label>Set Default</label>\n                        </div>\n                      </ion-col>\n                      <!-- Useable tag -->\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\" *ngIf=\"selectdTag\">\n                        <div class=\"card-outer\">\n                          <div class=\"card card-box\">\n                            <div class=\"card-header\">\n                              <div class=\"card-header-tittle\">\n                                Useable tags for template body:\n                              </div>\n                            </div>\n                            <div class=\"card-body\">\n                              {{selectdTag}}\n                            </div>\n                          </div>\n                        </div>\n                      </ion-col>\n                      <!-- Template Description -->\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                        <div class=\"form-item\">\n                          <ion-label>Template Body </ion-label>\n                          <div class=\"text-editor\">\n                            <tinymce [ngClass]=\"{'readOnly': model?.etType == 'DEFAULT'}\" #msgText (click)=\"getCursorPosition(msgText, model.etBody)\" (keyup)=\"getCursorPosition(msgText, model.etBody)\" name=\"etBody\" type=\"text\" [(ngModel)]=\"model.etBody\" required></tinymce>\n                          </div>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <div>\n                      <button class=\"border-btn danger btn-md\" type=\"reset\" [routerLink]=\"['/', 'email-notification-list']\" style=\"margin-right: 10px;\" mat-stroked-button>Cancel</button>\n                      <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" [disabled]=\"!addEmailnoticForm.valid || formLoading\">\n                        <ion-spinner *ngIf=\"formLoading\" name=\"crescent\"></ion-spinner>\n                        Save\n                      </button>\n                  </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_notification_add-email-notification_add-email-notification_module_ts-es5.js.map