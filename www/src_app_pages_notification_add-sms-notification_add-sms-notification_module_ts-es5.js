(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_notification_add-sms-notification_add-sms-notification_module_ts"], {
    /***/
    3876:
    /*!************************************************************************************************!*\
      !*** ./src/app/pages/notification/add-sms-notification/add-sms-notification-routing.module.ts ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSmsNotificationPageRoutingModule": function AddSmsNotificationPageRoutingModule() {
          return (
            /* binding */
            _AddSmsNotificationPageRoutingModule
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


      var _add_sms_notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-sms-notification.page */
      7307);

      var routes = [{
        path: '',
        component: _add_sms_notification_page__WEBPACK_IMPORTED_MODULE_0__.AddSmsNotificationPage
      }];

      var _AddSmsNotificationPageRoutingModule = function AddSmsNotificationPageRoutingModule() {
        _classCallCheck(this, AddSmsNotificationPageRoutingModule);
      };

      _AddSmsNotificationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddSmsNotificationPageRoutingModule);
      /***/
    },

    /***/
    25524:
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/notification/add-sms-notification/add-sms-notification.module.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSmsNotificationPageModule": function AddSmsNotificationPageModule() {
          return (
            /* binding */
            _AddSmsNotificationPageModule
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


      var _add_sms_notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-sms-notification-routing.module */
      3876);
      /* harmony import */


      var _add_sms_notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-sms-notification.page */
      7307);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _AddSmsNotificationPageModule = function AddSmsNotificationPageModule() {
        _classCallCheck(this, AddSmsNotificationPageModule);
      };

      _AddSmsNotificationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _add_sms_notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddSmsNotificationPageRoutingModule],
        declarations: [_add_sms_notification_page__WEBPACK_IMPORTED_MODULE_1__.AddSmsNotificationPage]
      })], _AddSmsNotificationPageModule);
      /***/
    },

    /***/
    7307:
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/notification/add-sms-notification/add-sms-notification.page.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSmsNotificationPage": function AddSmsNotificationPage() {
          return (
            /* binding */
            _AddSmsNotificationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_sms_notification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-sms-notification.page.html */
      97442);
      /* harmony import */


      var _add_sms_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-sms-notification.page.scss */
      82388);
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

      var _AddSmsNotificationPage = /*#__PURE__*/function () {
        function AddSmsNotificationPage(toastController, modalController, http, commonUtils, // common functionlity come here
        router, activatedRoute) {
          _classCallCheck(this, AddSmsNotificationPage);

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
          this.headerIds = [{
            id: 1,
            name: 'DLT ID'
          }];
          this.setDefaults = [{
            id: 0,
            name: 'Not Default'
          }, {
            id: 1,
            name: 'Default'
          }];
          this.selectFieldVariable = [{
            id: '##Number##',
            name: 'Number'
          }, {
            id: '##Name##',
            name: 'Name'
          }, {
            id: '##Class##',
            name: 'Class'
          }, {
            id: '##Roll##',
            name: 'Roll'
          }];
          this.selectedCity = this.cities[0].name;
          this.selectedHeader = this.headerIds[0].name;
          this.selectedType = this.setDefaults[0].name;
        }

        _createClass(AddSmsNotificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonFunction();
          } // getTemplatefor start

        }, {
          key: "getTemplatefor",
          value: function getTemplatefor() {
            var _this = this;

            console.log("HHH");
            this.templateforSMS_get = this.http.get(this.getTemplateForSMS_api).subscribe(function (res) {
              console.log("Get template for  >", res[0].etAction);
              console.log("Get template for length", res.length);
              _this.templates = res;
              console.log("Get template for length", _this.templates);
            }, function (errRes) {
              console.log("Get template for  >", errRes);
            });
          } // getTemplatefor end
          // commonFunction start 

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
            this.getTemplateForSMS_api = 'smsTemplate/smsFor/list'; // this.getTemplatefor();
            // edit api

            if (this.parms_action_name == 'edit') {
              this.editApi = 'smsTemplate/list/' + this.parms_action_id; // init call

              this.init();
              this.editForm_api = 'smsTemplate/update/' + this.parms_action_id;
            } // form_api Api


            this.form_api = 'smsTemplate/add';
          } // commonFunction end
          // ---------- init start ----------

        }, {
          key: "init",
          value: function init() {
            var _this2 = this;

            if (this.parms_action_name == 'edit') {
              this.editLoading = true; //edit data call

              this.editDataSubscribe = this.http.get(this.editApi).subscribe(function (res) {
                console.log("stAction >", res.stAction, _this2.templates);

                for (var i = 0; i < _this2.templates.length; i++) {
                  if (res.stAction == _this2.templates[i].stName) {
                    console.log("Match >", res.stAction, "Templates >", _this2.templates[i].stName);
                    _this2.selectdTag = _this2.templates[i].stTags;
                  }
                }

                _this2.editLoading = false;
                console.log("Edit data  res >", res.return_data);
                _this2.model = {
                  stAction: res.stAction,
                  stName: res.stName,
                  stTempId: res.stTempId,
                  setDefault: res.setDefault,
                  isPrimary: res.isPrimary,
                  stSubject: res.stSubject,
                  stBody: res.stBody
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

                  _this3.router.navigateByUrl('/sms-notification-list');

                  form.reset();
                } else {
                  _this3.commonUtils.presentToast('error', response.message);
                }
              }, function (errRes) {
                _this3.formLoading = false;
                console.log("errRes", errRes);
              });
            } else if (this.parms_action_name == 'add') {
              this.formSubmitSubscribe = this.http.post(this.form_api, form.value).subscribe(function (response) {
                _this3.formLoading = false;
                console.log("add form response >", response);

                if (response.status == 200) {
                  _this3.commonUtils.presentToast('success', response.message);

                  _this3.router.navigateByUrl('/sms-notification-list');

                  form.reset();
                } else {
                  _this3.commonUtils.presentToast('error', response.message);
                }
              }, function (errRes) {
                _this3.formLoading = false;
              });
            }
          } // on submit end
          // AddTemplate start

        }, {
          key: "AddSmsTemplate",
          value: function AddSmsTemplate(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var changePassword_modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
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
                      changePassword_modal = _context.sent;
                      // modal data back to Component
                      changePassword_modal.onDidDismiss().then(function (getdata) {
                        console.log('getdata >>>>>>>>>>>', getdata); // this.presentToast('Package End', 'success');

                        if (getdata.data == 'submitClose') {
                          /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
                        }
                      });
                      _context.next = 6;
                      return changePassword_modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // AddTemplate end
          // choseHeader start

        }, {
          key: "choseHeader",
          value: function choseHeader(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var changePassword_modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('_identifier >>', _identifier);
                      _context2.next = 3;
                      return this.modalController.create({
                        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__.ModalPage,
                        cssClass: 'mymodalClass small',
                        componentProps: {
                          identifier: _identifier,
                          modalForm_item: _item,
                          modalForm_array: _items
                        }
                      });

                    case 3:
                      changePassword_modal = _context2.sent;
                      // modal data back to Component
                      changePassword_modal.onDidDismiss().then(function (getdata) {
                        console.log('getdata >>>>>>>>>>>', getdata); // this.presentToast('Package End', 'success');

                        if (getdata.data == 'submitClose') {
                          /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
                        }
                      });
                      _context2.next = 7;
                      return changePassword_modal.present();

                    case 7:
                      return _context2.abrupt("return", _context2.sent);

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // choseHeader end
          // addSmsDefault start

        }, {
          key: "addSmsDefault",
          value: function addSmsDefault(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var changePassword_modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('_identifier >>', _identifier);
                      _context3.next = 3;
                      return this.modalController.create({
                        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__.ModalPage,
                        cssClass: 'mymodalClass small',
                        componentProps: {
                          identifier: _identifier,
                          modalForm_item: _item,
                          modalForm_array: _items
                        }
                      });

                    case 3:
                      changePassword_modal = _context3.sent;
                      // modal data back to Component
                      changePassword_modal.onDidDismiss().then(function (getdata) {
                        console.log('getdata >>>>>>>>>>>', getdata); // this.presentToast('Package End', 'success');

                        if (getdata.data == 'submitClose') {
                          /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
                        }
                      });
                      _context3.next = 7;
                      return changePassword_modal.present();

                    case 7:
                      return _context3.abrupt("return", _context3.sent);

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // addSmsDefault end 

        }, {
          key: "selectTemplates",
          value: function selectTemplates(_data) {
            console.log('_data>>', _data);
            this.selectdTag = _data;
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        message: 'Your data have been saved.',
                        duration: 2000,
                        cssClass: "my-tost-custom-classsuccess"
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // Get selectFieldForMsg start

        }, {
          key: "selectFieldForMsg",
          value: function selectFieldForMsg(_value) {
            console.log('_value', _value);

            if (!this.model.stBody) {
              this.model.stBody = _value;
            } else {
              this.model.stBody = this.postionBeforeValue + _value + this.postionAfterValue;
            }

            console.log('this.model.stBody', this.model.stBody);
          }
        }, {
          key: "getCursorPosition",
          value: function getCursorPosition(oField, _value) {
            console.log('_value', _value);

            if (oField.selectionStart || oField.selectionStart == '0') {
              console.log('oField.selectionStart', oField.selectionStart);
              this.postionBeforeValue = _value.slice(0, oField.selectionStart);
              this.postionAfterValue = _value.slice(oField.selectionStart);
              console.log('postionBeforeValue', this.postionBeforeValue);
              console.log('postionAfterValue', this.postionAfterValue);
            }
          } // getCursorPosition end
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

        return AddSmsNotificationPage;
      }();

      _AddSmsNotificationPage.ctorParameters = function () {
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

      _AddSmsNotificationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-sms-notification',
        template: _raw_loader_add_sms_notification_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_sms_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddSmsNotificationPage);
      /***/
    },

    /***/
    82388:
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/notification/add-sms-notification/add-sms-notification.page.scss ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-md {\n  padding: 0.53rem 1.3rem !important;\n}\n\ntextarea {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zbXMtbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUoiLCJmaWxlIjoiYWRkLXNtcy1ub3RpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1tZCB7XG4gICAgcGFkZGluZzogLjUzcmVtIDEuM3JlbSAhaW1wb3J0YW50O1xufVxudGV4dGFyZWEge1xuICAgIGhlaWdodDogMTUwcHg7XG59Il19 */";
      /***/
    },

    /***/
    97442:
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/add-sms-notification/add-sms-notification.page.html ***!
      \******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"form-layout\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n            <form #addSmsnoticForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(addSmsnoticForm)\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    SMS Template {{parms_action_name}}\n                  </div>\n                  <div class=\"card-header-action\">\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-wrapper\">\n                  <ion-grid>\n                    <ion-row>\n                       <!-- Template For -->\n                       <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item ngsel\">\n                         <!--  <ion-badge class=\"pillBtn\" color=\"primary\" (click)=\"AddSmsTemplate('AddSmsTemplate_modal', get_user_dtls, '');\">\n                            <ion-icon name=\"add-outline\"></ion-icon>\n                            Add\n                          </ion-badge> -->\n                         <!--  <mat-form-field appearance=\"outline\">\n                            <mat-label>Template For </mat-label>\n                            <mat-select [(value)]=\"selectedTemplate\" [(ngModel)]=\"model.stAction\" name=\"stAction\" required>\n                              <mat-option (click)=\"selectTemplates(template.stTags)\" [value]=\"template.stName\" *ngFor=\"let template of templates\">{{ template.stName }}</mat-option>\n                            </mat-select>\n                          </mat-form-field> -->\n                           \n                          <ng-select [items]=\"Templates\" \n                                   bindLabel=\"etAction\" \n                                   name=\"etAction\"\n                                   placeholder=\"Select Template For\"\n                                   bindValue=\"etAction\" \n                                   [(ngModel)]=\"model.etAction\"\n                                   (change)=\"selectTemplates(model.etAction)\">\n                          </ng-select>\n                          <label>Template For</label>\n                        </div>\n                      </ion-col>\n                      <!-- Template name -->\n                      <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Template Name </mat-label>\n                            <input matInput placeholder=\"Template Name\" type=\"text\" name=\"stName\" [(ngModel)]=\"model.stName\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Chose Header Id -->\n                      <!-- <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <ion-badge class=\"pillBtn\" color=\"primary\" (click)=\"choseHeader('choseHeader_modal', get_user_dtls, '');\">\n                            <ion-icon name=\"add-outline\"></ion-icon>\n                            Add\n                          </ion-badge>\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Chose Header Id </mat-label>\n                            <mat-select [(value)]=\"selectedHeader\" [(ngModel)]=\"model.stTempId\" name=\"stTempId\">\n                              <mat-option [value]=\"headerId.name\" *ngFor=\"let headerId of headerIds\">{{ headerId.name }}</mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </div>\n                      </ion-col> -->\n                      <!-- Set Default -->\n                      <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item ngsel\">\n                         <!--  <ion-badge class=\"pillBtn\" color=\"primary\"  (click)=\"addSmsDefault('add_Sms_default_modal', get_user_dtls, '');\">\n                            <ion-icon name=\"add-outline\"></ion-icon>\n                            Add\n                          </ion-badge> -->\n                          \n                          <ng-select [items]=\"setDefaults\" \n                                   bindLabel=\"name\" \n                                   name=\"isPrimary\"\n                                   placeholder=\"Select Set Default\"\n                                   bindValue=\"id\" \n                                   [(ngModel)]=\"model.isPrimary\"\n                                   (change)=\"ngsel(model.isPrimary)\">\n                          </ng-select>\n                          <label>Set Default</label>\n                        </div>\n                      </ion-col>\n                      <!-- Template name -->\n                      <ion-col size-xs=\"12\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\">\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Template Id </mat-label>\n                            <input matInput placeholder=\"Header\" type=\"text\" name=\"stSubject\" [(ngModel)]=\"model.stSubject\" required>\n                          </mat-form-field>\n                        </div>\n                      </ion-col>\n                      <!-- Useable tag -->\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\" *ngIf=\"selectdTag\">\n                        <div class=\"card-outer\">\n                          <div class=\"card card-box\">\n                            <div class=\"card-header\">\n                              <div class=\"card-header-tittle\">\n                                Useable tags for template body:\n                              </div>\n                            </div>\n                            <div class=\"card-body\">\n                              {{selectdTag}}\n                            </div>\n                          </div>\n                        </div>\n                      </ion-col>\n                      <!-- Template Description -->\n                      <!-- <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                        <div class=\"form-item\">\n                          <ion-label>Template Body </ion-label>\n                          <div class=\"text-editor\">\n                            <tinymce  name=\"stBody\" [(ngModel)]=\"model.stBody\" required></tinymce>\n                          </div>\n                        </div>\n                      </ion-col> -->\n                    </ion-row>\n                    <ion-row>\n                      <!-- Message Text -->\n                      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                        <div class=\"form-item ngsel\">\n                           <ng-select [items]=\"selectFieldVariable\" \n                                    bindLabel=\"name\" \n                                    name=\"msgVariable\"\n                                    placeholder=\"Select field\"\n                                    bindValue=\"id\" \n                                    [(ngModel)]=\"model.msgVariable\"\n                                    (change)=\"selectFieldForMsg(model.msgVariable)\">\n                           </ng-select>\n                           <label>Select field</label>\n                         </div>\n                        <div class=\"form-item\">\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>Message Text</mat-label>\n                            <textarea #msgText (click)=\"getCursorPosition(msgText, model.stBody)\" (keyup)=\"getCursorPosition(msgText, model.stBody)\" matInput name=\"stBody\" [(ngModel)]=\"model.stBody\" required></textarea>\n                          </mat-form-field>\n                        </div>\n                        <p *ngIf=\"model.stBody\" class=\"informationTxt\"><span>{{model?.stBody?.length}}</span> Characters Used.  |  Count <span>{{model?.stBody?.length / 120  | number: '1.0-0'}}</span></p> \n                      </ion-col>\n                      <!-- Message view -->\n                      <ion-col *ngIf=\"model.stBody\" size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\n                        <div class=\"msgViewBox\">\n                          <p class=\"msgHeading\">Message view</p>\n                          <p class=\"msgBody\">{{model?.stBody}}</p>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <div>\n                      <button class=\"border-btn danger btn-md\" type=\"reset\" [routerLink]=\"['/', 'sms-notification-list']\" style=\"margin-right: 10px;\" mat-stroked-button>Cancel</button>\n                      <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" [disabled]=\"!addSmsnoticForm.valid || formLoading\">\n                      <ion-spinner *ngIf=\"formLoading\" name=\"crescent\"></ion-spinner>\n                      Save\n                      </button>\n                  </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_notification_add-sms-notification_add-sms-notification_module_ts-es5.js.map