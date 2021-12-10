(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_license_license-list_license-list_module_ts"], {
    /***/
    8459:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/license/license-list/license-list-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LicenseListPageRoutingModule": function LicenseListPageRoutingModule() {
          return (
            /* binding */
            _LicenseListPageRoutingModule
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


      var _license_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./license-list.page */
      48107);

      var routes = [{
        path: '',
        component: _license_list_page__WEBPACK_IMPORTED_MODULE_0__.LicenseListPage
      }];

      var _LicenseListPageRoutingModule = function LicenseListPageRoutingModule() {
        _classCallCheck(this, LicenseListPageRoutingModule);
      };

      _LicenseListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LicenseListPageRoutingModule);
      /***/
    },

    /***/
    23316:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/license/license-list/license-list.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LicenseListPageModule": function LicenseListPageModule() {
          return (
            /* binding */
            _LicenseListPageModule
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


      var _license_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./license-list-routing.module */
      8459);
      /* harmony import */


      var _license_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./license-list.page */
      48107);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _LicenseListPageModule = function LicenseListPageModule() {
        _classCallCheck(this, LicenseListPageModule);
      };

      _LicenseListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _license_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.LicenseListPageRoutingModule],
        declarations: [_license_list_page__WEBPACK_IMPORTED_MODULE_1__.LicenseListPage]
      })], _LicenseListPageModule);
      /***/
    },

    /***/
    48107:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/license/license-list/license-list.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LicenseListPage": function LicenseListPage() {
          return (
            /* binding */
            _LicenseListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_license_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./license-list.page.html */
      85045);
      /* harmony import */


      var _license_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./license-list.page.scss */
      53913);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../modal/modal.page */
      58167);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);

      var _LicenseListPage = /*#__PURE__*/function () {
        function LicenseListPage(toastController, modalController, alertController, plt, http, commonUtils // common functionlity come here
        ) {
          _classCallCheck(this, LicenseListPage);

          this.toastController = toastController;
          this.modalController = modalController;
          this.alertController = alertController;
          this.plt = plt;
          this.http = http;
          this.commonUtils = commonUtils; // Variables start

          this.statusChange = true;
          this.isListLoading = false;
          this.sortColumnName = '';
          this.sortOrderName = '';
          this.deleteLoading = false;
          this.tableHeaderData = [{
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
          }];
          /*----------------Table list data start----------------*/
          // Display records start

          this.displayRecord = '10';
          this.displayRecords = [{
            id: '1',
            displayValue: '10'
          }, {
            id: '2',
            displayValue: '25'
          }, {
            id: '3',
            displayValue: '50'
          }, {
            id: '4',
            displayValue: '100'
          }, {
            id: '5',
            displayValue: '200'
          }]; // Sorting end
          // Search start

          this.searchTerm = '';
        } // Variables end


        _createClass(LicenseListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonFunction();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.commonFunction();
          }
        }, {
          key: "commonFunction",
          value: function commonFunction() {
            // table list data url name
            this.listing_url = 'license/list';
            this.onRefresh(); // delete api

            this.deleteApi = 'emailTemplate/delete/';
          }
        }, {
          key: "displayRecordChange",
          value: function displayRecordChange(_record) {
            console.log('_record', _record);
            this.displayRecord = _record;
            this.onListDate(this.listing_url, this.pageNo, _record, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Display records end
          // List data start

        }, {
          key: "onListDate",
          value: function onListDate(_listUrl, _pageNo, _displayRecord, _sortColumnName, _sortOrderName, _searchTerm) {
            var _this = this;

            this.isListLoading = true;
            var api = _listUrl + '/' + _pageNo + '/' + _displayRecord + '/' + _sortColumnName + '/' + _sortOrderName + '/0?keyword=' + _searchTerm;
            this.tableListSubscribe = this.http.get(api).subscribe(function (res) {
              _this.isListLoading = false;
              console.log('res', res);
              _this.tableData = res;
            }, function (errRes) {
              // this.selectLoadingDepend = false;
              _this.isListLoading = false;
            });
          } // List data end
          // Pagination start

        }, {
          key: "setPage",
          value: function setPage(page) {
            console.log('page', page);
            this.pageNo = page;
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Pagination end
          // Sorting start

        }, {
          key: "isSortTableHeader",
          value: function isSortTableHeader(_tableHeaderData, _headerItem) {
            console.log('_tableHeaderData', _tableHeaderData);
            console.log('_headerItem', _headerItem); // all field reset first

            _tableHeaderData.forEach(function (val) {
              val.sortingButtonName = '';
            });

            _headerItem.orederShow = !_headerItem.orederShow;

            if (_headerItem.orederShow) {
              _headerItem.sortingButtonName = "ASC";
            } else {
              _headerItem.sortingButtonName = "DESC";
            }

            this.sortColumnName = _headerItem.column_name;
            this.sortOrderName = _headerItem.sortingButtonName;
            console.log('this.sortColumnName', this.sortColumnName);
            console.log('this.sortOrderName', this.sortOrderName);
            console.log('_tableHeaderData>>', _tableHeaderData);
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          }
        }, {
          key: "searchList",
          value: function searchList(event) {
            this.searchTerm = event.target.value;
            console.log('this.searchTerm', this.searchTerm);
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Search end
          // Referesh start

        }, {
          key: "onRefresh",
          value: function onRefresh() {
            this.pageNo = 0;
            this.sortColumnName = 'lcId';
            this.sortOrderName = 'DESC';
            this.searchTerm = ''; // table data call

            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Referesh end
          // Delete start

        }, {
          key: "deleteData",
          value: function deleteData(_id) {
            var _this2 = this;

            console.log('id>>', _id);
            this.deleteLoading = true;
            this.deleteDataSubscribe = this.http["delete"](this.deleteApi + _id).subscribe(function (res) {
              _this2.deleteLoading = false;
              console.log("Edit data  res >", res.return_data);

              if (res.status == 200) {
                _this2.commonUtils.presentToast('success', res.message);

                _this2.onRefresh();
              } else {
                _this2.commonUtils.presentToast('error', res.message);
              }
            }, function (errRes) {
              // this.selectLoadingDepend = false;
              _this2.deleteLoading = false;
            });
          } // Delete end

          /*----------------Table list data end----------------*/

        }, {
          key: "presentToast",
          value: function presentToast(_msg, _type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
          } // ..... Restore licence modal start ......

        }, {
          key: "RestoreLicenceOpenModal",
          value: function RestoreLicenceOpenModal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

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
                        console.log('getdata >>>>>>>>>>>', getdata);

                        _this3.presentToast('License Restored', 'success');

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
          } // Restore licence modal end 
          // ..... EndLicence modal start ......

        }, {
          key: "EndLicenceOpenModal",
          value: function EndLicenceOpenModal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var changePassword_modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
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
                      changePassword_modal = _context3.sent;
                      // modal data back to Component
                      changePassword_modal.onDidDismiss().then(function (getdata) {
                        console.log('getdata >>>>>>>>>>>', getdata);

                        _this4.presentToast('License Ended', 'success');

                        if (getdata.data == 'submitClose') {
                          /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
                        }
                      });
                      _context3.next = 6;
                      return changePassword_modal.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // EndLicence modal end 
          // .....  Renew licence modal start ......

        }, {
          key: "RenewLicenceOpenModal",
          value: function RenewLicenceOpenModal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this5 = this;

              var RenewLicence_Modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
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
                      RenewLicence_Modal = _context4.sent;
                      // modal data back to Component
                      RenewLicence_Modal.onDidDismiss().then(function (getdata) {
                        console.log('getdata >>>>>>>>>>>', getdata);

                        _this5.presentToast('License Renewed', 'success');

                        if (getdata.data == 'submitClose') {
                          /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
                        }
                      });
                      _context4.next = 6;
                      return RenewLicence_Modal.present();

                    case 6:
                      return _context4.abrupt("return", _context4.sent);

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } //  Renew licence modal end 
          // ..... SuspendLicence modal start ......

        }, {
          key: "SuspendLicenceOpenModal",
          value: function SuspendLicenceOpenModal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              var RenewLicence_Modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
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
                      RenewLicence_Modal = _context5.sent;
                      // modal data back to Component
                      RenewLicence_Modal.onDidDismiss().then(function (getdata) {
                        console.log('getdata >>>>>>>>>>>', getdata);

                        if (getdata.data == 'submitClose' && getdata.role == '200') {
                          _this6.onRefresh();
                        }
                      });
                      _context5.next = 6;
                      return RenewLicence_Modal.present();

                    case 6:
                      return _context5.abrupt("return", _context5.sent);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // SuspendLicence modal end    
          // ..... extandLicence modal start ......

        }, {
          key: "ExtendLicenceOpenModal",
          value: function ExtendLicenceOpenModal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this7 = this;

              var RenewLicence_Modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
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
                      RenewLicence_Modal = _context6.sent;
                      // modal data back to Component
                      RenewLicence_Modal.onDidDismiss().then(function (getdata) {
                        console.log('getdata >>>>>>>>>>>', getdata);

                        _this7.presentToast('License Extended', 'success');

                        if (getdata.data == 'submitClose') {
                          /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
                        }
                      });
                      _context6.next = 6;
                      return RenewLicence_Modal.present();

                    case 6:
                      return _context6.abrupt("return", _context6.sent);

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } // extandLicence modal end     

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
            } else if (_identifier == 'sendMail') {
              status = 'Email sending.....';
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
            } else if (_identifier == 'generate') {
              status = 'License generated';
              type = 'success';
              this.presentToast(status, type);
            }

            this.isListLoading = false;
          }
        }]);

        return LicenseListPage;
      }();

      _LicenseListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__.CommonUtils
        }];
      };

      _LicenseListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-license-list',
        template: _raw_loader_license_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_license_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LicenseListPage);
      /***/
    },

    /***/
    53913:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/license/license-list/license-list.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWNlbnNlLWxpc3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    85045:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/license/license-list/license-list.page.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"table-listing\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    License List\n                  </div>\n                  <div class=\"card-header-action\">\n                    <button class=\"border-btn success\" [routerLink]=\"['/', 'add-license', 'add', 'id']\" mat-stroked-button>\n                      <mat-icon>add_circle_outline</mat-icon>\n                      Add License\n                    </button>\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"table-header\">\n                  <div class=\"records-wrapper\">\n                    <ion-item class=\"record\">\n                      <span>Records: </span>\n                      <mat-form-field>\n                        <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\n                          <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">{{record.displayValue}}</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </ion-item>\n                  </div>\n                  <div class=\"search-wrapper\">\n                    <ion-searchbar showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search item ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\n                  </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th class=\"ion-text-start\">\n                                    <div>\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ion-text-start\">\n                                  <div>\n                                      <ion-checkbox color=\"primary\"></ion-checkbox>\n                                  </div>\n                                </th>\n                                <th *ngFor=\"let th of tableHeaderData\" (click)=\"isSortTableHeader(tableHeaderData, th)\" class=\"ion-text-center\">\n                                  <div>\n                                    {{th.display_name}}\n                                    <mat-icon *ngIf=\"th.sortingButtonName == ''\">import_export</mat-icon>\n                                    <mat-icon *ngIf=\"th.sortingButtonName == 'ASC'\">expand_less</mat-icon>\n                                    <mat-icon *ngIf=\"th.sortingButtonName == 'DESC'\">expand_more</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div class=\"ion-justify-content-center\">\n                                    Actions\n                                  </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                          <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\n                            <td colspan=\"100\">\n                              Data is loading...\n                            </td>\n                          </tr>\n                          <tr [hidden]=\"isListLoading\" *ngIf=\"tableData?.data.length == 0\" class=\"loading-table-data\">\n                            <td colspan=\"100\">\n                              No data found\n                            </td>\n                          </tr>\n                          <tr *ngFor=\"let item of tableData?.data; let i = index\" [hidden]=\"isListLoading\" >\n                            <td>{{i + 1}}</td>\n                            <td>\n                              <ion-checkbox color=\"primary\"></ion-checkbox>\n                            </td>\n                            <td>\n                              {{item?.lcName}}\n                            </td>\n                            <td>\n                             {{item?.lcCreatDate}}\n                            </td>\n                            <td>\n                              {{item?.lcValidityNum}}\n                            </td>\n                            <td>\n                              {{item?.lcValidityType}}\n                            </td>\n                             <td>\n                              {{item?.instituteEntity?.instName}}\n                            </td>\n                            <td>\n                             {{item?.lcCreatDate}}\n                            </td>\n                            <td>\n                              {{item?.lcStype}}\n                            </td>\n                            <td>\n                              <div class=\"status success\">\n                                {{item?.lcStatus}}\n                              </div>\n                            </td>\n\n                            <td>\n                              <div class=\"action ion-text-center\">\n                                <ion-button matTooltip=\"Edit\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" [routerLink]=\"['/', 'add-license', 'edit', item.lcId ]\">\n                                  <mat-icon>edit</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Generate Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"clickActionBtn('', 'generate')\">\n                                    <mat-icon>done_all</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Suspend Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"SuspendLicenceOpenModal('suspend_licence_modal', item.lcId, '');\">\n                                    <mat-icon>report_off</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Restore Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"RestoreLicenceOpenModal('restore_licence_modal', get_user_dtls, '');\">\n                                    <mat-icon>restore</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Payment\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" >\n                                  <mat-icon>payments</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"End Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"EndLicenceOpenModal('end_licence_modal', get_user_dtls, '');\">\n                                  <mat-icon>remove_done</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Renew Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"RenewLicenceOpenModal('renew_licence_modal', get_user_dtls, '');\">\n                                  <mat-icon>loop</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Extend Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"ExtendLicenceOpenModal('extend_licence_modal', get_user_dtls, '');\">\n                                  <mat-icon>format_line_spacing</mat-icon>\n                                </ion-button>\n                              </div>\n                            </td>\n                          </tr>\n                        </tbody>\n                    </table>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <!-- <div class=\"action\">\n                    <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"clickActionBtn('', 'refresh')\">\n                        <mat-icon>refresh</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Send certificate\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\" (click)=\"clickActionBtn('', 'sendMail')\">\n                      <mat-icon>attach_email</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Enable\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                        <mat-icon>visibility</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Disable\" matTooltipPosition=\"above\" size=\"small\" color=\"medium\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                        <mat-icon>visibility_off</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Download certificate\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\" (click)=\"clickActionBtn('', 'pdf')\">\n                      <mat-icon>card_giftcard</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"clickActionBtn('', 'delete')\">\n                        <mat-icon>delete</mat-icon>\n                    </ion-button>\n                  </div> -->\n                  <div class=\"action\">\n                    <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"onRefresh()\">\n                      <mat-icon>refresh</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Payment\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\"  [routerLink]=\"['/', 'add-subscription-package']\">\n                      <mat-icon>payments</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Generate Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"success\">\n                        <mat-icon>done_all</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Suspend Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\">\n                        <mat-icon>report_off</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Restore Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\">\n                        <mat-icon>restore</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"End Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\">\n                      <mat-icon>remove_done</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Renew Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"warning\">\n                      <mat-icon>loop</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Extend Lic.\" matTooltipPosition=\"above\" size=\"small\" color=\"tertiary\">\n                      <mat-icon>format_line_spacing</mat-icon>\n                    </ion-button>\n                  </div>\n                  <div>\n                    <ul class=\"pagination\">\n                        <li (click)=\"setPage(0)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- First -->\n                              <ion-icon name=\"play-skip-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li (click)=\"setPage(tableData.currentPage - 1)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Previous -->\n                              <ion-icon name=\"caret-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li>\n                            Page <a>1</a> of 10\n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li (click)=\"setPage(tableData.currentPage + 1)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Next -->\n                              <ion-icon name=\"caret-forward\"></ion-icon>\n                            </a>\n                        </li>\n                        <li (click)=\"setPage(tableData.totalPage)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Last -->\n                              <ion-icon name=\"play-skip-forward\"></ion-icon>\n                            </a>\n                        </li>\n                    </ul>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_license_license-list_license-list_module_ts-es5.js.map