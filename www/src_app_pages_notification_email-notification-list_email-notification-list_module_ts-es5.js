(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_notification_email-notification-list_email-notification-list_module_ts"], {
    /***/
    62973:
    /*!******************************************************************************************************!*\
      !*** ./src/app/pages/notification/email-notification-list/email-notification-list-routing.module.ts ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailNotificationListPageRoutingModule": function EmailNotificationListPageRoutingModule() {
          return (
            /* binding */
            _EmailNotificationListPageRoutingModule
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


      var _email_notification_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./email-notification-list.page */
      39969);

      var routes = [{
        path: '',
        component: _email_notification_list_page__WEBPACK_IMPORTED_MODULE_0__.EmailNotificationListPage
      }];

      var _EmailNotificationListPageRoutingModule = function EmailNotificationListPageRoutingModule() {
        _classCallCheck(this, EmailNotificationListPageRoutingModule);
      };

      _EmailNotificationListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EmailNotificationListPageRoutingModule);
      /***/
    },

    /***/
    47325:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/notification/email-notification-list/email-notification-list.module.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailNotificationListPageModule": function EmailNotificationListPageModule() {
          return (
            /* binding */
            _EmailNotificationListPageModule
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


      var _email_notification_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./email-notification-list-routing.module */
      62973);
      /* harmony import */


      var _email_notification_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-notification-list.page */
      39969);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _EmailNotificationListPageModule = function EmailNotificationListPageModule() {
        _classCallCheck(this, EmailNotificationListPageModule);
      };

      _EmailNotificationListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _email_notification_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailNotificationListPageRoutingModule],
        declarations: [_email_notification_list_page__WEBPACK_IMPORTED_MODULE_1__.EmailNotificationListPage]
      })], _EmailNotificationListPageModule);
      /***/
    },

    /***/
    39969:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/notification/email-notification-list/email-notification-list.page.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailNotificationListPage": function EmailNotificationListPage() {
          return (
            /* binding */
            _EmailNotificationListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_email_notification_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./email-notification-list.page.html */
      34915);
      /* harmony import */


      var _email_notification_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-notification-list.page.scss */
      10162);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);

      var _EmailNotificationListPage = /*#__PURE__*/function () {
        function EmailNotificationListPage(toastController, alertController, plt, http, commonUtils // common functionlity come here
        ) {
          _classCallCheck(this, EmailNotificationListPage);

          this.toastController = toastController;
          this.alertController = alertController;
          this.plt = plt;
          this.http = http;
          this.commonUtils = commonUtils; // Variables start

          this.statusChange = true;
          this.isListLoading = false;
          this.skeleton = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
          this.sortColumnName = '';
          this.sortOrderName = '';
          this.deleteLoading = false;
          this.tableHeaderData = [{
            column_name: "etAction",
            display_name: "Template For",
            sortingButtonName: ""
          }, {
            column_name: "etName",
            display_name: "Template Name",
            sortingButtonName: ""
          }, {
            column_name: "etType",
            display_name: "Status",
            sortingButtonName: ""
          }]; // Aleart end

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


        _createClass(EmailNotificationListPage, [{
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
            this.listing_url = 'emailTemplate/getAll/template';
            this.onRefresh(); // delete api

            this.deleteApi = 'emailTemplate/delete/';
            this.setprimaryapi = 'emailTemplate/delete/';
            this.unsetprimaryapi = 'emailTemplate/delete/';
          }
        }, {
          key: "presentToast",
          value: function presentToast(_msg, _type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
          }
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
            }

            this.isListLoading = false;
          } // Aleart start

        }, {
          key: "presentAlert",
          value: function presentAlert(_identifier, _id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var messages, headers, alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('_identifier', _identifier);
                      console.log('_id', _id);

                      if (_identifier == 'delete') {
                        headers = "Delete";
                        messages = "Are you sure want to delete this item?";
                      } else if (_identifier == 'unsetprimary') {
                        headers = "Unset Primary";
                        messages = "Are you want to change unset primary from this?";
                      } else if (_identifier == 'setprimary') {
                        headers = "Set Primary";
                        messages = "Are you want to change primary from this?";
                      }

                      _context2.next = 5;
                      return this.alertController.create({
                        cssClass: 'aleart-popupBox',
                        header: headers,
                        message: messages,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'popup-cancel-btn',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Okay',
                          cssClass: 'popup-ok-btn',
                          handler: function handler() {
                            console.log('Confirm Okay');

                            if (_identifier == 'delete') {
                              _this.deleteData(_id);
                            } else if (_identifier == 'unsetprimary') {
                              _this.unsetprimary(_id);
                            } else if (_identifier == 'setprimary') {
                              _this.setprimary(_id);
                            }
                          }
                        }]
                      });

                    case 5:
                      alert = _context2.sent;
                      _context2.next = 8;
                      return alert.present();

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
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
            var _this2 = this;

            this.isListLoading = true;
            var api = _listUrl + '/' + _pageNo + '/' + _displayRecord + '/' + _sortColumnName + '/' + _sortOrderName + '/0?keyword=' + _searchTerm;
            this.tableListSubscribe = this.http.get(api).subscribe(function (res) {
              _this2.isListLoading = false;
              console.log('res', res);
              _this2.tableData = res;
            }, function (errRes) {
              // this.selectLoadingDepend = false;
              _this2.isListLoading = false;
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
            this.sortColumnName = 'etId';
            this.sortOrderName = 'DESC';
            this.searchTerm = ''; // table data call

            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Referesh end
          // Delete start

        }, {
          key: "deleteData",
          value: function deleteData(_id) {
            var _this3 = this;

            console.log('id>>', _id);
            this.deleteLoading = true;
            this.deleteDataSubscribe = this.http["delete"](this.deleteApi + _id).subscribe(function (res) {
              _this3.deleteLoading = false;
              console.log("Edit data  res >", res.return_data);

              if (res.status == 200) {
                _this3.commonUtils.presentToast('success', res.message);

                _this3.onRefresh();
              } else {
                _this3.commonUtils.presentToast('error', res.message);
              }
            }, function (errRes) {
              // this.selectLoadingDepend = false;
              _this3.deleteLoading = false;
            });
          } // Delete end
          // unsetprimaryDataSubscribe start

        }, {
          key: "unsetprimary",
          value: function unsetprimary(_id) {
            var _this4 = this;

            console.log('id>>', _id);
            this.deleteLoading = true;
            this.unsetprimaryDataSubscribe = this.http["delete"](this.unsetprimaryapi + _id).subscribe(function (res) {
              _this4.deleteLoading = false;
              console.log("Edit data  res >", res.return_data);

              if (res.status == 200) {
                _this4.commonUtils.presentToast('success', res.message);

                _this4.onRefresh();
              } else {
                _this4.commonUtils.presentToast('error', res.message);
              }
            }, function (errRes) {
              // this.selectLoadingDepend = false;
              _this4.deleteLoading = false;
            });
          } // unsetprimaryDataSubscribe end
          // setprimaryDataSubscribe start

        }, {
          key: "setprimary",
          value: function setprimary(_id) {
            var _this5 = this;

            console.log('id>>', _id);
            this.deleteLoading = true;
            this.setprimaryDataSubscribe = this.http["delete"](this.setprimaryapi + _id).subscribe(function (res) {
              _this5.deleteLoading = false;
              console.log("Edit data  res >", res.return_data);

              if (res.status == 200) {
                _this5.commonUtils.presentToast('success', res.message);

                _this5.onRefresh();
              } else {
                _this5.commonUtils.presentToast('error', res.message);
              }
            }, function (errRes) {
              // this.selectLoadingDepend = false;
              _this5.deleteLoading = false;
            });
          } // setprimaryDataSubscribe end

          /*----------------Table list data end----------------*/
          // ----------- destroy subscription start ---------

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.tableListSubscribe !== undefined) {
              this.tableListSubscribe.unsubscribe();
            }

            if (this.deleteDataSubscribe !== undefined) {
              this.deleteDataSubscribe.unsubscribe();
            }
          }
        }]);

        return EmailNotificationListPage;
      }();

      _EmailNotificationListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils
        }];
      };

      _EmailNotificationListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-email-notification-list',
        template: _raw_loader_email_notification_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_email_notification_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EmailNotificationListPage);
      /***/
    },

    /***/
    10162:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/notification/email-notification-list/email-notification-list.page.scss ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1ub3RpZmljYXRpb24tbGlzdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    34915:
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/email-notification-list/email-notification-list.page.html ***!
      \************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\n<common-header></common-header>\n\n<ion-content>\n  <div class=\"page-body\">\n    <div class=\"page-wrapper\">\n      <div class=\"table-listing\">\n        <div class=\"card-outer\">\n          <div class=\"card card-box\">\n              <div class=\"card-header\">\n                  <div class=\"card-header-tittle\">\n                    Email Template List\n                  </div>\n                  <div class=\"card-header-action\">\n                    <button class=\"border-btn success\" [routerLink]=\"['/', 'add-email-notification', 'add', 'id']\" mat-stroked-button>\n                      <mat-icon>add_circle_outline</mat-icon>\n                      Add Template\n                    </button>\n                  </div>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"table-header\">\n                  <div class=\"records-wrapper\">\n                    <ion-item class=\"record\">\n                      <span>Records: </span>\n                      <mat-form-field>\n                        <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\n                          <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">\n                            {{record.displayValue}}\n                          </mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </ion-item>\n                  </div>\n                  <div class=\"search-wrapper\">\n                    <ion-searchbar showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search item ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\n                  </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th class=\"ion-text-start\">\n                                    <div>\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ion-text-start\">\n                                  <div>\n                                      <ion-checkbox color=\"primary\"></ion-checkbox>\n                                  </div>\n                                </th>\n                                <th *ngFor=\"let th of tableHeaderData\" (click)=\"isSortTableHeader(tableHeaderData, th)\" class=\"ion-text-center\">\n                                  <div>\n                                    {{th.display_name}}\n                                    <mat-icon *ngIf=\"th.sortingButtonName == ''\">import_export</mat-icon>\n                                    <mat-icon *ngIf=\"th.sortingButtonName == 'ASC'\">expand_less</mat-icon>\n                                    <mat-icon *ngIf=\"th.sortingButtonName == 'DESC'\">expand_more</mat-icon>\n                                  </div>\n                                </th>\n                                <th class=\"ion-text-center\">\n                                  <div class=\"ion-justify-content-center\">\n                                    Actions\n                                  </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                          <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\n                            <td colspan=\"100\">\n                              Data is loading...\n                            </td>\n                          </tr>\n                          <tr [hidden]=\"isListLoading\" *ngIf=\"tableData?.data.length == 0\" class=\"loading-table-data\">\n                            <td colspan=\"100\">\n                              No data found\n                            </td>\n                          </tr>\n                          <tr [hidden]=\"isListLoading\" *ngFor=\"let item of tableData?.data; let i = index\">\n                            <td>{{i + 1}}</td>\n                            <td>\n                              <ion-checkbox color=\"primary\"></ion-checkbox>\n                            </td>\n                            <td>\n                              {{item?.etAction}}\n                            </td>\n                            <td>\n                              {{item?.etName}}\n                            </td>\n                            <td>\n                              {{item?.etType}}\n                            </td>\n                            <td>\n                              <div class=\"action ion-text-center\">\n                                <ion-button matTooltip=\"Edit\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" [routerLink]=\"['/', 'add-email-notification', 'edit', item.etId ]\">\n                                  <mat-icon>edit</mat-icon>\n                                </ion-button>\n                                <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"presentAlert('delete', item.etId)\">\n                                    <mat-icon>delete</mat-icon>\n                                </ion-button>\n                                <ion-button  *ngIf=\"item?.isPrimary == 1\" matTooltip=\"Unset form Primary\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"presentAlert('unsetprimary', item.etId)\">\n                                  <mat-icon>visibility</mat-icon>\n                                </ion-button>\n                                <ion-button *ngIf=\"item?.isPrimary == 0\" matTooltip=\"Set Primary\" matTooltipPosition=\"above\" size=\"small\" color=\"medium\" (click)=\"presentAlert('setprimary', item.etId)\">\n                                    <mat-icon>visibility_off</mat-icon>\n                                </ion-button>\n                              </div>\n                            </td>\n                          </tr>\n                        </tbody>\n                    </table>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                  <div class=\"action\">\n                    <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"onRefresh()\">\n                        <mat-icon>refresh</mat-icon>\n                    </ion-button>\n                    <!-- <ion-button matTooltip=\"Enable\" matTooltipPosition=\"above\" size=\"small\" color=\"success\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                        <mat-icon>visibility</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Disable\" matTooltipPosition=\"above\" size=\"small\" color=\"medium\" (click)=\"clickActionBtn(statusChange, 'status')\">\n                        <mat-icon>visibility_off</mat-icon>\n                    </ion-button>\n                    <ion-button matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"presentAlert()\">\n                        <mat-icon>delete</mat-icon>\n                    </ion-button> -->\n                  </div>\n                  <div>\n                    <ul class=\"pagination\">\n                        <li (click)=\"setPage(0)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- First -->\n                              <ion-icon name=\"play-skip-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li (click)=\"setPage(tableData.currentPage - 1)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Previous -->\n                              <ion-icon name=\"caret-back\"></ion-icon>\n                            </a>\n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li>\n                          Page <a>{{ tableData?.currentPage + 1 }}</a> of {{ tableData?.totalPage + 1 }} \n                        </li>\n                        <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\n                        <li (click)=\"setPage(tableData.currentPage + 1)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Next -->\n                              <ion-icon name=\"caret-forward\"></ion-icon>\n                            </a>\n                        </li>\n                        <li (click)=\"setPage(tableData.totalPage)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\n                            <a>\n                              <!-- Last -->\n                              <ion-icon name=\"play-skip-forward\"></ion-icon>\n                            </a>\n                        </li>\n                    </ul>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- common footer show -->\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_notification_email-notification-list_email-notification-list_module_ts-es5.js.map