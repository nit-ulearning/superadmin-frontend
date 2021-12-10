(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth/auth.guard */ 26525);




const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/dashboard.module */ 71659)).then(m => m.DashboardPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/auth.module */ 6621)).then(m => m.AuthPageModule)
    },
    {
        path: 'add-security/:action/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_add-security_add-security_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/add-security/add-security.module */ 70662)).then(m => m.AddSecurityPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'security-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_security-list_security-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/security-list/security-list.module */ 30429)).then(m => m.SecurityListPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'add-subscription-package/:action/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_subscription_add-subscription-package_add-subscription-package_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/subscription/add-subscription-package/add-subscription-package.module */ 30765)).then(m => m.AddSubscriptionPackagePageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'subscription-package-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_subscription_subscription-package-list_subscription-package-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/subscription/subscription-package-list/subscription-package-list.module */ 6455)).then(m => m.SubscriptionPackageListPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'add-license/:action/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_license_add-license_add-license_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/license/add-license/add-license.module */ 36501)).then(m => m.AddLicensePageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'license-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_license_license-list_license-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/license/license-list/license-list.module */ 23316)).then(m => m.LicenseListPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'license-view',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_license_license-view_license-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/license/license-view/license-view.module */ 51614)).then(m => m.LicenseViewPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'notification-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_notification-list_notification-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/notification-list/notification-list.module */ 52616)).then(m => m.NotificationListPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'add-payment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment_add-payment_add-payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment/add-payment/add-payment.module */ 86757)).then(m => m.AddPaymentPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'payment-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment_payment-list_payment-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment/payment-list/payment-list.module */ 57079)).then(m => m.PaymentListPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'email-notification-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_email-notification-list_email-notification-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/email-notification-list/email-notification-list.module */ 47325)).then(m => m.EmailNotificationListPageModule),
        // canLoad: [AuthGuard]                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    },
    {
        path: 'sms-notification-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_sms-notification-list_sms-notification-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/sms-notification-list/sms-notification-list.module */ 80211)).then(m => m.SmsNotificationListPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'add-email-notification/:action/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_add-email-notification_add-email-notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/add-email-notification/add-email-notification.module */ 50178)).then(m => m.AddEmailNotificationPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'add-sms-notification/:action/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_add-sms-notification_add-sms-notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/add-sms-notification/add-sms-notification.module */ 25524)).then(m => m.AddSmsNotificationPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'admin-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tracking_admin-list_admin-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tracking/admin-list/admin-list.module */ 69846)).then(m => m.AdminListPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'user-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tracking_user-list_user-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tracking/user-list/user-list.module */ 55961)).then(m => m.UserListPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'tracking-view',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tracking_tracking-view_tracking-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tracking/tracking-view/tracking-view.module */ 75063)).then(m => m.TrackingViewPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'approved-notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_approved-notification_approved-notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/approved-notification/approved-notification.module */ 59203)).then(m => m.ApprovedNotificationPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'rejected-notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_rejected-notification_rejected-notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/rejected-notification/rejected-notification.module */ 97114)).then(m => m.RejectedNotificationPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'compose-mail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_compose-mail_compose-mail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/compose-mail/compose-mail.module */ 71099)).then(m => m.ComposeMailPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'sent-mail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_sent-mail_sent-mail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/sent-mail/sent-mail.module */ 88356)).then(m => m.SentMailPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'received-mail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_received-mail_received-mail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/received-mail/received-mail.module */ 44775)).then(m => m.ReceivedMailPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'compose-sms',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_compose-sms_compose-sms_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/compose-sms/compose-sms.module */ 85828)).then(m => m.ComposeSmsPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'sent-sms',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_sent-sms_sent-sms_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/sent-sms/sent-sms.module */ 97429)).then(m => m.SentSmsPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'tracking-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tracking_tracking-list_tracking-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tracking/tracking-list/tracking-list.module */ 60089)).then(m => m.TrackingListPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'payment-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment_payment-details_payment-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment/payment-details/payment-details.module */ 89956)).then(m => m.PaymentDetailsPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'due-payment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment_due-payment_due-payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment/due-payment/due-payment.module */ 14209)).then(m => m.DuePaymentPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'exam-tracking',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tracking_exam-tracking_exam-tracking_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tracking/exam-tracking/exam-tracking.module */ 13456)).then(m => m.ExamTrackingPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'package-tracking',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tracking_package-tracking_package-tracking_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tracking/package-tracking/package-tracking.module */ 36274)).then(m => m.PackageTrackingPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'exam-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tracking_exam-list_exam-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tracking/exam-list/exam-list.module */ 95786)).then(m => m.ExamListPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'user-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tracking_user-details_user-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tracking/user-details/user-details.module */ 75459)).then(m => m.UserDetailsPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'package-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tracking_package-details_package-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tracking/package-details/package-details.module */ 41182)).then(m => m.PackageDetailsPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'manage-banners',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_manage-banners_manage-banners_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/manage-banners/manage-banners.module */ 15276)).then(m => m.ManageBannersPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'add-banners',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_add-banners_add-banners_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/add-banners/add-banners.module */ 85201)).then(m => m.AddBannersPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'manage-gallery',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_manage-gallery_manage-gallery_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/manage-gallery/manage-gallery.module */ 93050)).then(m => m.ManageGalleryPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'add-gallery',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_add-gallery_add-gallery_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/add-gallery/add-gallery.module */ 20266)).then(m => m.AddGalleryPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'manage-links',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_manage-links_manage-links_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/manage-links/manage-links.module */ 31643)).then(m => m.ManageLinksPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'add-links',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_add-links_add-links_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/add-links/add-links.module */ 95401)).then(m => m.AddLinksPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'manage-website',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_manage-website_manage-website_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/manage-website/manage-website.module */ 43521)).then(m => m.ManageWebsitePageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'add-website-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_add-website-details_add-website-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/add-website-details/add-website-details.module */ 4569)).then(m => m.AddWebsiteDetailsPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'view-website-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_view-website-details_view-website-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/view-website-details/view-website-details.module */ 31604)).then(m => m.ViewWebsiteDetailsPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'package-tracking-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tracking_package-tracking-list_package-tracking-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tracking/package-tracking-list/package-tracking-list.module */ 21806)).then(m => m.PackageTrackingListPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'institute-view/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_institute-view_institute-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/institute-view/institute-view.module */ 92992)).then(m => m.InstituteViewPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'add-hsn',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_hsn_add-hsn_add-hsn_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/hsn/add-hsn/add-hsn.module */ 67271)).then(m => m.AddHsnPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'hsn-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_hsn_hsn-list_hsn-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/hsn/hsn-list/hsn-list.module */ 350)).then(m => m.HsnListPageModule),
        // canLoad: [AuthGuard] 
    },
    {
        path: 'forgotpassword',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_forgotpassword_forgotpassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/forgotpassword/forgotpassword.module */ 3272)).then(m => m.ForgotpasswordPageModule)
    },
    {
        path: 'resetpassword/:action/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_resetpassword_resetpassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/resetpassword/resetpassword.module */ 38221)).then(m => m.ResetpasswordPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth/auth.service */ 51228);
/* harmony import */ var _services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/common-utils/common-utils */ 83914);











let AppComponent = class AppComponent {
    constructor(platform, activatedRoute, http, authService, menuCtrl, renderer, router, commonUtils, // common functionlity come here
    _document //use for fabicon
    ) {
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.renderer = renderer;
        this.router = router;
        this.commonUtils = commonUtils;
        this._document = _document;
        this.main_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl;
        this.file_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.fileUrl;
        this.menuPages = [];
        this.menuPages2 = [];
        this.isActive = false;
        this.toggle = false;
        this.onSiteInformation();
    }
    toggleMenu(_item) {
        console.log('', this.toggle);
        if (_item == false) {
            this.toggle = true;
            // this.menuCtrl.enable(true);
        }
        else {
            this.toggle = false;
            // this.menuCtrl.enable(false);
        }
    }
    ngOnInit() {
        // User detailsls get
        this.authService.globalparamsData.subscribe(res => {
            console.log('User detailsls get>>', res);
            if (res != null || res != undefined) {
                this.get_user_dtls = res;
                console.log('this.get_user_dtls aaa11 >>>>>>>>>>', this.get_user_dtls);
            }
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            // user data call
            this.userInfoData();
            // ----get current active url name start---
            this.activatedRoute.url.subscribe(activeUrl => {
                this.url_name = window.location.pathname;
                console.log('this.url_name app.componet.ts @@@>>', this.url_name.split('/')[1]);
            });
            //get current active url name end
            // observable data for all page url name get
            this.commonUtils.pagePathNameAnywhereObsv.subscribe(pathRes => {
                // console.log('common utility path page url name #### @@@@@@@ >>', pathRes);
                this.url_path_name = pathRes;
            });
        });
    }
    userInfoData() {
        // console.log('main componenttttttttttttttttttttttttttttttttttttttttttttttttttttttttt');
        this.menuPages = [];
        this.userInfodDataLoading = false;
        this.authService.globalparamsData.subscribe(res => {
            console.log('componet.ts Toke store >>>>>>>>>>>>>>>111', res);
            this.menuPages = [];
        });
    }
    closeModal() {
        console.log('Clicked');
        // this.menuCtrl.enable(false);
        this.menuCtrl.toggle();
    }
    onSiteInformation() {
        // console.log('this.url_name app.componet.ts  pathname @@@>>',  window.location.pathname);
        this.site_path = window.location.pathname;
        this.site_href = window.location.href;
        this.site_href_split = window.location.href.split('/')[1];
        this.site_path_split = window.location.pathname.split('/')[1];
        // server print reasult///////
        /* site_path > /ci/xcelero/online/
        site_href > https://demo.rnjcs.in/ci/xcelero/online/#/auth
        site_href_split >
        site_path_split > ci  */
        const parsedUrl = new URL(window.location.href);
        const baseUrl = parsedUrl.hostname;
        //console.log('parsedUrl> ', parsedUrl);
        console.log('baseUrl> ', baseUrl); // this will print http://example.com or http://localhost:4200
        if (baseUrl == 'localhost' || baseUrl == '192.168.1.218') {
            this.site_url_name = 'https://www.marketing-crm.bongtechsolutions.com/';
        }
        else {
            this.site_url_name = window.location.href;
        }
        this.siteInfoLoading = true;
        // initializeApp
        this.initializeApp();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2 },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__.CommonUtils },
    { type: HTMLDocument //use for fabicon
        , decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT,] }] }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _pages_modal_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/modal/modal.module */ 89399);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_interceptors_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/interceptors/interceptor */ 82411);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-http-loader */ 30871);

















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.IonicStorageModule.forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _pages_modal_modal_module__WEBPACK_IMPORTED_MODULE_3__.ModalPageModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
            ng_http_loader__WEBPACK_IMPORTED_MODULE_13__.NgHttpLoaderModule.forRoot(),
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__.HashLocationStrategy },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
                useClass: _services_interceptors_interceptor__WEBPACK_IMPORTED_MODULE_4__.InterceptorProvider,
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA
        ]
    })
], AppModule);



/***/ }),

/***/ 1604:
/*!***************************************************************************!*\
  !*** ./src/app/common-component/common-footer/common-footer.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonFooterComponent": function() { return /* binding */ CommonFooterComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_common_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./common-footer.component.html */ 79818);
/* harmony import */ var _common_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-footer.component.scss */ 54965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let CommonFooterComponent = class CommonFooterComponent {
    constructor() { }
    ngOnInit() { }
};
CommonFooterComponent.ctorParameters = () => [];
CommonFooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'common-footer',
        template: _raw_loader_common_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_common_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommonFooterComponent);



/***/ }),

/***/ 81090:
/*!***************************************************************************!*\
  !*** ./src/app/common-component/common-header/common-header.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonHeaderComponent": function() { return /* binding */ CommonHeaderComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_common_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./common-header.component.html */ 88477);
/* harmony import */ var _common_header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-header.component.scss */ 75325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/modal/modal.page */ 58167);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);








let CommonHeaderComponent = class CommonHeaderComponent {
    constructor(navCtrl, menuCtrl, authService, modalController, storage) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.modalController = modalController;
        this.storage = storage;
        this.showSearch = false;
    }
    ngOnInit() {
        this.menuCtrl.enable(true);
        this.commonFunction();
    }
    commonFunction() {
        // User detailsls get
        this.authService.globalparamsData.subscribe(res => {
            if (res != null || res != undefined) {
                this.storeDate = res;
                console.log('User store data >>>>>>>>>>', this.storeDate);
            }
        });
    }
    //======================= logout functionlity start ==============
    logout() {
        this.storage.clear().then(() => {
            console.log('all stroage data cleared');
            window.location.reload(); //working
        });
        // this._globalparamsData = null;
    }
    // logout functionlity end
    // ..... Restore licence modal start ......
    changePassword(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('_identifier >>', _identifier);
            let changePassword_modal;
            changePassword_modal = yield this.modalController.create({
                component: src_app_pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_2__.ModalPage,
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
                if (getdata.data == 'submitClose') {
                    /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
                }
            });
            return yield changePassword_modal.present();
        });
    }
    // Restore licence modal end 
    showSearchBox(_item) {
        console.log('showSearch>>', this.showSearch);
        if (this.showSearch == false) {
            this.showSearch = true;
        }
        else {
            this.showSearch = false;
        }
    }
    // Goto page start
    goToPage(_url, _item) {
        console.log('goToPage _url >', _url);
        console.log('goToPage _item >', _item);
        // this.router.navigateByUrl(_url);
        this.navCtrl.navigateRoot(_url);
    }
};
CommonHeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage }
];
CommonHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'common-header',
        template: _raw_loader_common_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_common_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommonHeaderComponent);



/***/ }),

/***/ 86580:
/*!****************************************************!*\
  !*** ./src/app/directives/must-match.directive.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MustMatchDirective": function() { return /* binding */ MustMatchDirective; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _must_match_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./must-match.validator */ 24467);
var MustMatchDirective_1;




let MustMatchDirective = MustMatchDirective_1 = class MustMatchDirective {
    constructor() {
        this.mustMatch = [];
    }
    validate(formGroup) {
        return (0,_must_match_validator__WEBPACK_IMPORTED_MODULE_0__.MustMatch)(this.mustMatch[0], this.mustMatch[1])(formGroup);
    }
};
MustMatchDirective.propDecorators = {
    mustMatch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['mustMatch',] }]
};
MustMatchDirective = MustMatchDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
        selector: '[mustMatch]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS, useExisting: MustMatchDirective_1, multi: true }]
    })
], MustMatchDirective);



/***/ }),

/***/ 24467:
/*!****************************************************!*\
  !*** ./src/app/directives/must-match.validator.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MustMatch": function() { return /* binding */ MustMatch; }
/* harmony export */ });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
            return null;
        }
        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ 9378:
/*!*****************************************************!*\
  !*** ./src/app/pages/modal/modal-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPageRoutingModule": function() { return /* binding */ ModalPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.page */ 58167);




const routes = [
    {
        path: '',
        component: _modal_page__WEBPACK_IMPORTED_MODULE_0__.ModalPage
    }
];
let ModalPageRoutingModule = class ModalPageRoutingModule {
};
ModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalPageRoutingModule);



/***/ }),

/***/ 89399:
/*!*********************************************!*\
  !*** ./src/app/pages/modal/modal.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPageModule": function() { return /* binding */ ModalPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-routing.module */ 9378);
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.page */ 58167);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let ModalPageModule = class ModalPageModule {
};
ModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalPageRoutingModule
        ],
        declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_1__.ModalPage]
    })
], ModalPageModule);



/***/ }),

/***/ 58167:
/*!*******************************************!*\
  !*** ./src/app/pages/modal/modal.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPage": function() { return /* binding */ ModalPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal.page.html */ 11610);
/* harmony import */ var _modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.page.scss */ 85773);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);











let ModalPage = class ModalPage {
    constructor(navParams, modalController, http, authService, router, commonUtils) {
        this.navParams = navParams;
        this.modalController = modalController;
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.commonUtils = commonUtils;
        // Variable start
        this.main_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl;
        this.file_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.fileUrl;
        this.hide = true;
        this.hide2 = true;
        this.hide3 = true;
        this.model = {};
        this.Validity = [
            { value: 'Years', viewValue: 'Years' },
            { value: 'Months', viewValue: 'Months' },
            { value: 'Days', viewValue: 'Days' },
        ];
        // view data fetch end
        // =================== Form submit start =======================
        // for License Suspension start
        this.formLoading = false;
    }
    ngOnInit() {
        this.get_identifier = this.navParams.get('identifier');
        this.get_item = this.navParams.get('modalForm_item');
        this.get_array = this.navParams.get('modalForm_array');
        console.log('get_identifier', this.get_identifier);
        console.log('get_item', this.get_item);
        console.log('get_array', this.get_array);
        if (this.get_identifier == 'suspend_package_modal') {
            this.heder_title = 'Package Suspend';
            this.form_api = 'package/suspended/' + this.get_item;
        }
        else if (this.get_identifier == 'restore_package_modal') {
            this.heder_title = 'Package Restore';
        }
        else if (this.get_identifier == 'end_package_modal') {
            this.heder_title = 'Package End';
        }
        else if (this.get_identifier == 'restore_licence_modal') {
            this.heder_title = 'Licence Restore';
        }
        else if (this.get_identifier == 'end_licence_modal') {
            this.heder_title = 'Licence  Expiry';
        }
        else if (this.get_identifier == 'renew_licence_modal') {
            this.heder_title = 'Licence  Renewal';
        }
        else if (this.get_identifier == 'suspend_licence_modal') {
            this.heder_title = 'Licence  Suspension';
            this.form_api = 'license/suspend/' + this.get_item;
        }
        else if (this.get_identifier == 'extend_licence_modal') {
            this.heder_title = 'Licence  Extension';
        }
        else if (this.get_identifier == 'changepassword_modal') {
            this.heder_title = 'Change Your Password';
            this.form_api = 'login/changePassword';
        }
        else if (this.get_identifier == 'AddTemplate_modal') {
            this.heder_title = 'Add Template For';
        }
        else if (this.get_identifier == 'AddDefault_modal') {
            this.heder_title = 'Add Set Default';
        }
        else if (this.get_identifier == 'AddSmsTemplate_modal') {
            this.heder_title = 'Add Template For';
        }
        else if (this.get_identifier == 'choseHeader_modal') {
            this.heder_title = 'Add Header Id';
        }
        else if (this.get_identifier == 'add_Sms_default_modal') {
            this.heder_title = 'Add Set Default';
        }
    }
    // ================== view data fetch start =====================
    viewPageData() {
        console.log();
        this.viewLoadData = true;
        this.dashboardDataSubscribe = this.http.post(this.listing_view_url, '').subscribe((res) => {
            this.viewLoadData = false;
            console.log("view data  res -------------------->", res);
            this.viewData = res;
        }, errRes => {
            this.viewLoadData = false;
        });
    }
    onSubmitForm(form) {
        console.log("add form submit >", form.value);
        this.formLoading = true;
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
        this.formSubmitSubscribe = this.http.post(this.form_api, form.value).subscribe((response) => {
            this.formLoading = false;
            console.log("add form response >", response);
            if (response.status == 200) {
                this.commonUtils.presentToast('success', response.message);
                // this.get_array.push(response);
                form.reset();
                this.modalController.dismiss('submitClose', response.status);
            }
            else {
                this.commonUtils.presentToast('warning', response.message);
            }
        }, errRes => {
            this.formLoading = false;
        });
    }
    // package Suspension start
    // package Suspension end
    // for License Suspension start
    // close modal
    closeModal() {
        // this.modalController.dismiss(this.arrayList);
        this.modalController.dismiss();
    }
    // Date format change start
    changeDateFormat(_identifier, _date) {
        console.log('_date', _date);
        console.log('_identifier', _identifier);
        if (_identifier == 'licSusDate') {
            this.model.llEdate = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY/MM/DD');
        }
        else if (_identifier == 'plSusDate') {
            this.model.plAdate = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY/MM/DD');
        }
        console.log('model.llEdate', this.model.llEdate);
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__.CommonUtils }
];
ModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-modal',
        template: _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalPage);



/***/ }),

/***/ 22904:
/*!****************************************!*\
  !*** ./src/app/pipe/safe-html.pipe.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeHtmlPipe": function() { return /* binding */ SafeHtmlPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer }
];
SafeHtmlPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({ name: 'safeHtml' })
], SafeHtmlPipe);



/***/ }),

/***/ 26525:
/*!*********************************************!*\
  !*** ./src/app/services/auth/auth.guard.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 51228);
/* harmony import */ var _common_utils_common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-utils/common-utils */ 83914);







/* tslint:disable */
let AuthGuard = class AuthGuard {
    constructor(authService, router, commonUtils) {
        this.authService = authService;
        this.router = router;
        this.commonUtils = commonUtils;
    }
    canLoad(route, segments) {
        /* if(!this.authService.globalparamsData.){
          this.router.navigateByUrl('/auth');
        }
        // console.log("this.authService.userIsAuthenticate >", this.authService.userIsAuthenticate);
        // return true; observable return boolean value true or false
        return this.authService.userIsAuthenticate; */
        return this.authService.globalparamsData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(isAuthenticated => {
            if (!isAuthenticated) {
                // console.log('when auto login >');
                return this.authService.autoLogin();
            }
            else {
                // console.log('when menually login >');
                /* this.commonUtils.menuDataobservable.subscribe(menuData =>{
                  menuData.forEach(element => {
                    element.pages.forEach(element2 => {
                   console.log('menu data gurd >>>>>>>>>>>>>>>>>>>>>>>>> element2', element2.type.split('/')[1]);
                  this.commonUtils.pagePathNameAnywhereObsv.subscribe(pathRes => {
                    // console.log(' url name #### >>', pathRes);
                    if(element2.type.split('/')[1] == pathRes){
                      // console.log('founddddddddddddddddddddddddddddddddddddddddddddddddd');
                      return of(!!isAuthenticated); //(!!) means true or false (boolean value)
                    }else{
                      // console.log('not tt  founddddddddddddddddddddddddddddddddddddddddddddddddd');
                      return of(!!isAuthenticated); //(!!) means true or false (boolean value)
                    }
                  });
                    });
                  });
                }); */
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(!!isAuthenticated); //(!!) means true or false (boolean value)
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(isAuthenticated => {
            // console.log('isAuthenticated gurd ##################### 222', isAuthenticated);
            if (!isAuthenticated) {
                this.router.navigateByUrl('/auth');
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _common_utils_common_utils__WEBPACK_IMPORTED_MODULE_1__.CommonUtils }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
    // CanLoad is need for befor module loaded it check auth true or false
], AuthGuard);



/***/ }),

/***/ 51228:
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 69412);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _common_utils_common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-utils/common-utils */ 83914);











const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
const API_MASTER = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiMaster;
/* tslint:disable */
let AuthService = class AuthService {
    constructor(storage, plt, http, router, location, commonUtils) {
        this.storage = storage;
        this.plt = plt;
        this.http = http;
        this.router = router;
        this.location = location;
        this.commonUtils = commonUtils;
        // private _globalparamsData = null;
        this._globalparamsData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    // get token session master as observable
    get globalparamsData() {
        return this._globalparamsData.asObservable();
    }
    // get token session master as a non observable
    getTokenSessionMaster() {
        return this._globalparamsData.value;
    }
    //================== auto login start ===================
    autoLogin() {
        // stroage data get
        console.log('autoLogin>>', this.storage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.storage.get('setStroageGlobalParamsData')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(storData => {
            console.log('storData @@@@@@@>>>>>', storData);
            if (!storData || !storData.token) {
                return null;
            }
            const storeauth = {
                'token': storData.token,
                'username': storData.username,
                'uid': storData.uid
            };
            return storeauth;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(storeauthtication => {
            if (storeauthtication) {
                this._globalparamsData.next(storeauthtication);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(userLog => {
            // console.log("auto login map userLog >>>", userLog);
            return !!userLog; //return true/false(boolen value)
        }));
    }
    // auto login end
    // ================= login service call start ==================
    login(_url, _data, _siteInfo) {
        return this.http.post(`${_url}`, _data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(this.setGlobalParams.bind(this)) //use for response value send
        );
    }
    // ---setGlobalParams function defination----
    setGlobalParams(resData) {
        console.log('..................set 11 >', resData);
        if (resData.status > 200) {
            this.commonUtils.presentToast('success', resData.message);
            // window.location.reload();
        }
        this._globalparamsData.next({
            'token': resData.token,
            'username': resData.username,
            'uid': resData.uid
        });
        // stroage
        this.storeAuthData(resData);
    }
    //--- storeAuthData function defination---
    storeAuthData(_data) {
        console.log('data>>>>>>>>>>>>>>>>>>>>>>>>', _data);
        // set stroage data
        this.storage.set('setStroageGlobalParamsData', {
            'token': _data.token,
            'username': _data.username,
            'uid': _data.uid,
        });
        // Plugins.Storage.set({ key: 'authData', value: data });
    }
    //login service call end
    //======================= logout functionlity start ==============
    logout() {
        this.storage.clear().then(() => {
            console.log('all stroage data cleared');
            this.router.navigateByUrl('/auth');
            this._globalparamsData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
            /* this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
            }; */
            // location.reload();
            // window.location.replace('/auth');
            // location.reload();
            window.location.reload(); //working
        });
        // this._globalparamsData = null;
    }
};
AuthService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location },
    { type: _common_utils_common_utils__WEBPACK_IMPORTED_MODULE_1__.CommonUtils }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 83914:
/*!*******************************************************!*\
  !*** ./src/app/services/common-utils/common-utils.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonUtils": function() { return /* binding */ CommonUtils; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pagination/pagination.service */ 38783);








/* tslint:disable */
let CommonUtils = class CommonUtils {
    constructor(http, storage, pagerService, toastController) {
        this.http = http;
        this.storage = storage;
        this.pagerService = pagerService;
        this.toastController = toastController;
        //----------- group login click identifire data get start ------------
        this._groupLoginClickableIdentifire = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        // group login click identifire data get  end
        //----------- group login data get start ------------
        this._groupLoginClickableData = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        // group login data get  end
        //----------- site inforamation  start ------------
        this._siteInfoCheck = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        // site inforamation  end
        //----------- user type start ------------
        this._userTypeCheck = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        // user type end
        //--------- menu data fetch start ---------------
        this._menudata = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        // menu data fetch end
        //--------- menu permission fetch start ---------------
        this._menuPermission = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        // menu permission fetch end
        // -----get url name all component start----
        this._pagepathName = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        /* return this.http.post<{name:string}>('https://...json',{
            value,
            id:null
            })

            .pipe(
            switchMap(resData => {
                console.log('resData *********** 1111111111 >', this.tickets);
                generateId = resData.name; //id set
                return this.tickets;
            }),

            take(1),
            
            tap(ticketss => {
                console.log('resData *********** 222222222 >', this.tickets);
                // console.log('ticketss *********** >', ticketss);
                value.id = generateId; //id get
                this._tickets.next(ticketss.concat(value));
                // ticketss.push(value);
            })
        ) */
        // -----get url name all component end----
        // ----add and remove item (+ -) start-----
        //Add more functions
        this.addToItem = function (items) {
            items.push({});
        };
        //Remove more functions
        this.removeToItem = function (index, event, items, action, isDefault) {
            event.preventDefault();
            if (items.length == 1 && isDefault && action == 'edit')
                return;
            //items remove
            items.splice(index, 1);
        };
        // add and remove item (+ -)end
        // ================= display page record start =========================
        this.displayRecord = '10';
        this.displayRecords = [
            { id: '1', displayValue: '10' },
            { id: '2', displayValue: '25' },
            { id: '3', displayValue: '50' },
            { id: '4', displayValue: '100' },
            { id: '5', displayValue: '200' }
        ];
        this._itemsHeader = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        // pager object
        this.pager = {};
        this._items = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        // click edit item update end
        // ===================== getlist data Fetch start ===================
        this._getList = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    }
    get groupLoginIdentifireObservable() {
        return this._groupLoginClickableIdentifire.asObservable();
    }
    onClickGroupIdentifire(data) {
        this._groupLoginClickableIdentifire.next(data);
    }
    get groupLoginClickDataObservable() {
        return this._groupLoginClickableData.asObservable();
    }
    onClickGroupItemData(data) {
        this._groupLoginClickableData.next(data);
    }
    get getSiteInfoObservable() {
        return this._siteInfoCheck.asObservable();
    }
    setSiteInfo(type) {
        // console.log('setSiteInfo SERVICE >>>>>>>>',type);
        this._siteInfoCheck.next(type);
    }
    get getUserTypeObservable() {
        return this._userTypeCheck.asObservable();
    }
    setUserType(type) {
        this._userTypeCheck.next(type);
    }
    get menuDataobservable() {
        return this._menudata.asObservable();
    }
    getMenudataService(path) {
        this._menudata.next(path);
    }
    get menuPermissionObservable() {
        return this._menuPermission.asObservable();
    }
    menuPermissionService(data) {
        this._menuPermission.next(data);
    }
    get pagePathNameAnywhereObsv() {
        return this._pagepathName.asObservable();
    }
    getPathNameFun(path) {
        this._pagepathName.next(path);
    }
    // display page record end
    // ====================== tost message start ==================
    presentToast(_type, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                animated: true,
                translucent: true,
                position: "top",
                duration: 4000,
                cssClass: "my-tost-custom-class" + _type,
            });
            toast.present();
        });
    }
    get itemsHeaderData() {
        // return [...this._itemsHeader];
        return this._itemsHeader.asObservable();
    }
    headerListData(_getUrl) {
        this.items_header_data = []; //blank array items will be push
        // table header column selection
        this.tableHeaderData = [];
        this.tableheaderDropdownChecked = [];
        return this.http.get(`${_getUrl}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resData) => {
            if (resData.return_status > 0 && resData.return_data.length > 0) {
                for (const key in resData.return_data) {
                    if (resData.return_data.hasOwnProperty(key)) {
                        this.items_header_data.push(resData.return_data[key]);
                    }
                }
            }
            else {
                // infinite scroll complite
                // event.target.complete();
            }
            // ---- array filter by display and default array item start ---
            this.items_header_data.forEach((val, ind) => {
                // dropdown show item
                if (val.is_display == 1) {
                    if (this.tableHeaderData.indexOf(val.column_name) === -1) {
                        this.tableHeaderData.push(val);
                    }
                }
                // dropdown checked item
                if (val.is_default == 1) {
                    if (this.tableheaderDropdownChecked.indexOf(val.column_name) === -1) {
                        this.tableheaderDropdownChecked.push(val);
                    }
                }
            });
            // copy array header data to new array
            this.tableHeaderDataDropdown = this.tableHeaderData.map((item) => item);
            // array filter by display and default array item end
            return [this.tableHeaderData, this.tableheaderDropdownChecked, this.tableHeaderDataDropdown];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(itmArry => {
            // console.log('itmArry >>>>>>>>>>', itmArry);
            this._itemsHeader.next(itmArry[0]); //update observable data
        }));
    }
    get itemsData() {
        // return [...this._items];
        return this._items.asObservable();
    }
    //(api_url, display_record, page, apiParms, search, cherecterSearch,  orderBy, order, advanceSearch, identifire)
    fetchList(_getUrl, _per_page_showItem, _page, _api_parms, _search, _cherecterSearch, _orderBy, _order, _advanceSearch, _identifire) {
        let apiParameters = '';
        let advanceSearchParams = '';
        let onlySearch;
        // search
        if (_search === undefined || _search === null || _search == '') {
            onlySearch = '';
        }
        else {
            onlySearch = _search;
        }
        // advance search
        let formData = new FormData();
        let other_data = _advanceSearch;
        if (other_data !== undefined && other_data !== null && other_data !== '') {
            for (var item in other_data) {
                if (other_data[item] == undefined) {
                    other_data[item] = '';
                }
                advanceSearchParams = advanceSearchParams + '&' + item + '=' + other_data[item];
            }
        }
        // api parameters
        let other_data_parms = _api_parms;
        if (other_data_parms !== undefined && other_data_parms !== null && other_data_parms !== '') {
            for (var itemP in other_data_parms) {
                if (other_data_parms[itemP] == undefined) {
                    other_data_parms[itemP] = '';
                }
                apiParameters = apiParameters + '&' + itemP + '=' + other_data_parms[itemP];
            }
        }
        this.items_data = []; //blank array items will be push
        return this.http.get(`${_getUrl}?per_page=${_per_page_showItem}&page=${_page}${apiParameters}&search=${_search}&sortbychar=${_cherecterSearch}&orderby=${_orderBy}&order=${_order}${advanceSearchParams}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resData) => {
            this.items_data = [];
            console.log('listing link call .................resData =>', resData);
            if (resData.return_status > 0 && resData.return_data.data.length > 0) {
                for (const key in resData.return_data.data) {
                    if (resData.return_data.data.hasOwnProperty(key)) {
                        this.items_data.push(resData.return_data.data[key]);
                    }
                }
                this.listAllResData = resData.return_data;
                console.log('listing common serveice aaaaaaaaaaaaaa >>>>>', resData.return_data);
            }
            // console.log('listing common serveice 111 >>>>>', resData.return_data);
            if (resData.return_status > 0 && resData.return_data.total == '0') {
                // console.log('listing common serveice bbbbbbbbbbbbb >>>>>', resData.return_data);
                this.listAllResData = resData.return_data;
            }
            if (resData.return_status > 0) {
                return [this.items_data, this.listAllResData];
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(itmArry => {
            // console.log('itmArry >----------------------->', itmArry);
            if (itmArry) {
                this._items.next(itmArry);
                this._items.complete();
            }
            // this._items.complete();
        }));
    }
    clickEditDataFun(_data) {
        this.clickEditData = _data;
        console.log("_data.principle >", _data.principle);
    }
    get getListData() {
        // return [...this._getList];
        return this._getList.asObservable();
    }
    getlistCommon(_getUrl) {
        return this.http.get(`${_getUrl}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resData) => {
            if (resData.return_status > 0) {
                return resData.return_data;
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(itmArry => {
            this._getList.next(itmArry);
        }));
    }
    // getlist data Fetch end
    // ===================== select checkbox get value start ===================
    onCheckboxSelectCommon(option, event, _getItemsArry, _allselectModel, _itemcheckClick, _checkedList) {
        if (event.target.checked) {
            if (_checkedList.indexOf(option.id) === -1) {
                _checkedList.push(option.id);
            }
        }
        else {
            for (let i = 0; i < _getItemsArry.length; i++) {
                if (_checkedList[i] == option.id) {
                    _checkedList.splice(i, 1);
                }
            }
        }
        if (_getItemsArry.length <= _checkedList.length) {
            _allselectModel = true;
            console.log('length 4');
        }
        else {
            console.log('length 0');
            _allselectModel = false;
            _itemcheckClick = true;
        }
        return [_checkedList, _allselectModel];
        // console.log('checked item >>', this.checkedList);
    }
    // select checkbog get value end
    // =================all checkbox value selected start====================
    allSelectItemCommon(event, _getItemsArry, _itemcheckClick, _checkedList) {
        if (event.target.checked) {
            _itemcheckClick = false;
            // console.log('check item selkectedddddddddddddd');
            for (let i = 0; i < _getItemsArry.length; i++) {
                // if(this.checkedList.includes(this.items[i].id) === false)
                if (_checkedList.indexOf(_getItemsArry[i].id) === -1 && _getItemsArry[i].id !== null) {
                    _checkedList.push(_getItemsArry[i].id);
                    _getItemsArry[i].isSelected = true;
                }
            }
        }
        else if (_itemcheckClick == false) {
            // console.log('not check item selectionnnnnnnnnnn')
            _checkedList = [];
            for (let i = 0; i < _getItemsArry.length; i++) {
                if (_checkedList.indexOf(_getItemsArry[i].id) === -1) {
                    _getItemsArry[i].isSelected = false;
                }
            }
        }
        return _checkedList;
        // console.log('checked item @@ >>', _checkedList);
    }
};
CommonUtils.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__.PaginationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
CommonUtils = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], CommonUtils);



/***/ }),

/***/ 82411:
/*!******************************************************!*\
  !*** ./src/app/services/interceptors/interceptor.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterceptorProvider": function() { return /* binding */ InterceptorProvider; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 51228);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-utils/common-utils */ 83914);











const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
const API_MASTER = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiMaster;
/* tslint:disable */
let InterceptorProvider = class InterceptorProvider {
    constructor(router, toastController, storage, authService, commonUtils, alertController, http) {
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.authService = authService;
        this.commonUtils = commonUtils;
        this.alertController = alertController;
        this.http = http;
        this.isparams = false;
        this.authToken = '';
        // private _globalparamsData = null;
        this._globalparamsData = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    }
    // get token session master as observable
    get globalparamsData() {
        return this._globalparamsData.asObservable();
    }
    // get token session master as a non observable
    getTokenSessionMaster() {
        return this._globalparamsData.value;
    }
    intercept(request, next) {
        let authorization;
        // Keeps the original request params. as a new HttpParams
        let newParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams({ fromString: request.params.toString() });
        let get_global_params = this.authService.getTokenSessionMaster();
        console.log('get_global_params intercepter >>>>>>>>>>>>>>>>', get_global_params);
        if (get_global_params != null && get_global_params.master == undefined) {
            get_global_params.master = API_MASTER;
        }
        if (get_global_params != null && get_global_params.token !== undefined && get_global_params.session !== undefined && get_global_params.master !== undefined) {
            // newParams = newParams.append('token', get_global_params.token);
            // newParams = newParams.append('session', get_global_params.session);
            // newParams = newParams.append('master', get_global_params.master); 
        }
        console.log('newParams >>>>>>>', get_global_params);
        if (get_global_params == null || get_global_params.token == null) {
            authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZXZlbG9wZXIubml0c29sdXRpb25AZ21haWwuY29tIiwiZXhwIjoxNjQwMjQzOTEzLCJpYXQiOjE2Mzg5NDc5MTN9.6hSaTuOPd29nPxBb1ekf5E62BgrZvfCzb521VpN3pTM';
            console.log('appkey false');
        }
        else {
            authorization = 'Bearer ' + get_global_params.token;
        }
        // Clone the request with params instead of setParams
        const requestClone = request.clone({
            url: `${API_URL}/${request.url}`,
            setHeaders: {
                'Authorization': authorization,
            }
        });
        // return next.handle(requestClone);
        return next.handle(requestClone).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((event) => {
            let eventUrl;
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse) {
                if (event.body.return_status == 0) {
                    //this.router.navigateByUrl('/auth');
                    // this.authService.logout();
                    this.commonUtils.presentToast('error', event.body.message);
                }
                //token expire check
                if (event.body.return_token_expire) {
                    //this.router.navigateByUrl('/auth');
                    this.authService.logout();
                }
                //show return_message
                if (!event.body.return_token_expire) {
                    // this.commonUtils.presentToast('info', event.body.return_message);
                }
            }
            return event;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            // this.router.navigateByUrl('/auth');
            console.log("interceptor error handeller >>", error);
            if (error.status === 0) {
                this.commonUtils.presentToast('error', 'Please Check Your Network Connection!');
                /* this.router.navigateByUrl('/auth');
                console.log('<< please check your network connection! >>'); */
            }
            else if (error.status === 404) {
                this.commonUtils.presentToast('error', 'Could not sign you up, please try again');
            }
            else if (error.status === 500) {
                this.commonUtils.presentToast('error', 'Token not valid');
                // this.authService.logout();
                /* this.commonUtils.presentToast('success', 'Internal Server Error');
                this.commonUtils.presentToast('info', 'Internal Server Error'); */
            }
            else if (error.status === 401) {
                this.commonUtils.presentToast('error', 'Could not sign you up, please try again');
                this.authService.logout();
                this.router.navigateByUrl('/auth');
            }
            else {
                this.commonUtils.presentToast('error', error.error.messagee);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error);
        }));
    }
    // reload alert
    logoutAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const reload = yield this.alertController.create({
                header: 'Logout',
                message: 'Do you want to logout from other devices?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'popup-cancel-btn',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        cssClass: 'popup-ok-btn',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield reload.present();
        });
    }
    // reload page end
    /* async presentToast(msg) {
      const toast = await this.toastController.create({
        message: msg,
        showCloseButton: true,
        animated:true,
        cssClass:"my-tost-custom-class",
        translucent: true,
        duration: 2000
      });
      toast.present();
    } */
    // ----------- destroy subscription start ---------
    ngOnDestroy() {
        if (this.logoutDataSubscribe !== undefined) {
            this.logoutDataSubscribe.unsubscribe();
        }
    }
};
InterceptorProvider.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
InterceptorProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)()
], InterceptorProvider);



/***/ }),

/***/ 38783:
/*!***********************************************************!*\
  !*** ./src/app/services/pagination/pagination.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationService": function() { return /* binding */ PaginationService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let PaginationService = class PaginationService {
    constructor() { }
    getPager(totalItems, currentPage, pageSize) {
        /* console.log('pagination totalItems >', totalItems);
        console.log('pagination currentPage >', currentPage);
        console.log('pagination pageSize >', pageSize); */
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        let startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
};
PaginationService.ctorParameters = () => [];
PaginationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], PaginationService);



/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _common_component_common_header_common_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-component/common-header/common-header.component */ 81090);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ 70346);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-apexcharts */ 34256);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _common_component_common_footer_common_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-component/common-footer/common-footer.component */ 1604);
/* harmony import */ var ngx_tinymce__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-tinymce */ 16354);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-gauge */ 71161);
/* harmony import */ var _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipe/safe-html.pipe */ 22904);
/* harmony import */ var _directives_must_match_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/must-match.directive */ 86580);




// Material module start












// Material module end

 // angular dropdown






let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _common_component_common_header_common_header_component__WEBPACK_IMPORTED_MODULE_0__.CommonHeaderComponent,
            _common_component_common_footer_common_footer_component__WEBPACK_IMPORTED_MODULE_1__.CommonFooterComponent,
            _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeHtmlPipe,
            _directives_must_match_directive__WEBPACK_IMPORTED_MODULE_3__.MustMatchDirective
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            // Material module start
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRippleModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatNativeDateModule,
            // Material module end
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__.NgApexchartsModule,
            ngx_gauge__WEBPACK_IMPORTED_MODULE_21__.NgxGaugeModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgSelectModule,
            ngx_tinymce__WEBPACK_IMPORTED_MODULE_23__.NgxTinymceModule.forRoot({
                baseURL: '//cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.0/',
            }),
        ],
        exports: [
            _common_component_common_header_common_header_component__WEBPACK_IMPORTED_MODULE_0__.CommonHeaderComponent,
            _common_component_common_footer_common_footer_component__WEBPACK_IMPORTED_MODULE_1__.CommonFooterComponent,
            // Material module start
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRippleModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatNativeDateModule,
            // Material module end
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__.NgApexchartsModule,
            ngx_gauge__WEBPACK_IMPORTED_MODULE_21__.NgxGaugeModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgSelectModule,
            ngx_tinymce__WEBPACK_IMPORTED_MODULE_23__.NgxTinymceModule,
            _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeHtmlPipe,
            _directives_must_match_directive__WEBPACK_IMPORTED_MODULE_3__.MustMatchDirective
        ]
    })
], SharedModule);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiMaster: '1',
    apiUrl: 'http://65.1.66.115:8085/dev',
    fileUrl: 'http://65.1.66.115:8085/dev'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		86030,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 26431,
	"./af.js": 26431,
	"./ar": 81286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 43160,
	"./ar-ly.js": 43160,
	"./ar-ma": 62551,
	"./ar-ma.js": 62551,
	"./ar-sa": 79989,
	"./ar-sa.js": 79989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 81286,
	"./az": 15887,
	"./az.js": 15887,
	"./be": 14572,
	"./be.js": 14572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 93344,
	"./bm.js": 93344,
	"./bn": 58985,
	"./bn-bd": 83990,
	"./bn-bd.js": 83990,
	"./bn.js": 58985,
	"./bo": 94391,
	"./bo.js": 94391,
	"./br": 46728,
	"./br.js": 46728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 41043,
	"./ca.js": 41043,
	"./cs": 70420,
	"./cs.js": 70420,
	"./cv": 33513,
	"./cv.js": 33513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 47978,
	"./da.js": 47978,
	"./de": 46061,
	"./de-at": 25204,
	"./de-at.js": 25204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 46061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-au": 25724,
	"./en-au.js": 25724,
	"./en-ca": 10525,
	"./en-ca.js": 10525,
	"./en-gb": 52847,
	"./en-gb.js": 52847,
	"./en-ie": 67216,
	"./en-ie.js": 67216,
	"./en-il": 39305,
	"./en-il.js": 39305,
	"./en-in": 73364,
	"./en-in.js": 73364,
	"./en-nz": 79130,
	"./en-nz.js": 79130,
	"./en-sg": 11161,
	"./en-sg.js": 11161,
	"./eo": 50802,
	"./eo.js": 50802,
	"./es": 40328,
	"./es-do": 45551,
	"./es-do.js": 45551,
	"./es-mx": 75615,
	"./es-mx.js": 75615,
	"./es-us": 64790,
	"./es-us.js": 64790,
	"./es.js": 40328,
	"./et": 96389,
	"./et.js": 96389,
	"./eu": 52961,
	"./eu.js": 52961,
	"./fa": 26151,
	"./fa.js": 26151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fil": 58898,
	"./fil.js": 58898,
	"./fo": 37779,
	"./fo.js": 37779,
	"./fr": 28174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 38867,
	"./fr-ch.js": 38867,
	"./fr.js": 28174,
	"./fy": 50452,
	"./fy.js": 50452,
	"./ga": 45014,
	"./ga.js": 45014,
	"./gd": 74127,
	"./gd.js": 74127,
	"./gl": 72124,
	"./gl.js": 72124,
	"./gom-deva": 6444,
	"./gom-deva.js": 6444,
	"./gom-latn": 37953,
	"./gom-latn.js": 37953,
	"./gu": 76604,
	"./gu.js": 76604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 74235,
	"./hi.js": 74235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 37735,
	"./hu.js": 37735,
	"./hy-am": 90402,
	"./hy-am.js": 90402,
	"./id": 59187,
	"./id.js": 59187,
	"./is": 30536,
	"./is.js": 30536,
	"./it": 35007,
	"./it-ch": 94667,
	"./it-ch.js": 94667,
	"./it.js": 35007,
	"./ja": 62093,
	"./ja.js": 62093,
	"./jv": 80059,
	"./jv.js": 80059,
	"./ka": 66870,
	"./ka.js": 66870,
	"./kk": 80880,
	"./kk.js": 80880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 68785,
	"./kn.js": 68785,
	"./ko": 21721,
	"./ko.js": 21721,
	"./ku": 37851,
	"./ku.js": 37851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 40346,
	"./lb.js": 40346,
	"./lo": 93002,
	"./lo.js": 93002,
	"./lt": 64035,
	"./lt.js": 64035,
	"./lv": 56927,
	"./lv.js": 56927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 94173,
	"./mi.js": 94173,
	"./mk": 86320,
	"./mk.js": 86320,
	"./ml": 11705,
	"./ml.js": 11705,
	"./mn": 31062,
	"./mn.js": 31062,
	"./mr": 92805,
	"./mr.js": 92805,
	"./ms": 11341,
	"./ms-my": 59900,
	"./ms-my.js": 59900,
	"./ms.js": 11341,
	"./mt": 37734,
	"./mt.js": 37734,
	"./my": 19034,
	"./my.js": 19034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 46495,
	"./ne.js": 46495,
	"./nl": 70673,
	"./nl-be": 76272,
	"./nl-be.js": 76272,
	"./nl.js": 70673,
	"./nn": 72486,
	"./nn.js": 72486,
	"./oc-lnc": 46219,
	"./oc-lnc.js": 46219,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 78444,
	"./pl.js": 78444,
	"./pt": 53170,
	"./pt-br": 66117,
	"./pt-br.js": 66117,
	"./pt.js": 53170,
	"./ro": 96587,
	"./ro.js": 96587,
	"./ru": 39264,
	"./ru.js": 39264,
	"./sd": 42135,
	"./sd.js": 42135,
	"./se": 95366,
	"./se.js": 95366,
	"./si": 93379,
	"./si.js": 93379,
	"./sk": 46143,
	"./sk.js": 46143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 21082,
	"./sq.js": 21082,
	"./sr": 91621,
	"./sr-cyrl": 98963,
	"./sr-cyrl.js": 98963,
	"./sr.js": 91621,
	"./ss": 41404,
	"./ss.js": 41404,
	"./sv": 55685,
	"./sv.js": 55685,
	"./sw": 3872,
	"./sw.js": 3872,
	"./ta": 54106,
	"./ta.js": 54106,
	"./te": 39204,
	"./te.js": 39204,
	"./tet": 83692,
	"./tet.js": 83692,
	"./tg": 86361,
	"./tg.js": 86361,
	"./th": 31735,
	"./th.js": 31735,
	"./tk": 1568,
	"./tk.js": 1568,
	"./tl-ph": 96129,
	"./tl-ph.js": 96129,
	"./tlh": 13759,
	"./tlh.js": 13759,
	"./tr": 81644,
	"./tr.js": 81644,
	"./tzl": 90875,
	"./tzl.js": 90875,
	"./tzm": 16878,
	"./tzm-latn": 11041,
	"./tzm-latn.js": 11041,
	"./tzm.js": 16878,
	"./ug-cn": 74357,
	"./ug-cn.js": 74357,
	"./uk": 74810,
	"./uk.js": 74810,
	"./ur": 86794,
	"./ur.js": 86794,
	"./uz": 28966,
	"./uz-latn": 77959,
	"./uz-latn.js": 77959,
	"./uz.js": 28966,
	"./vi": 35386,
	"./vi.js": 35386,
	"./x-pseudo": 23156,
	"./x-pseudo.js": 23156,
	"./yo": 68028,
	"./yo.js": 68028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 89380,
	"./zh-hk.js": 89380,
	"./zh-mo": 60874,
	"./zh-mo.js": 60874,
	"./zh-tw": 96508,
	"./zh-tw.js": 96508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu.md ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid #d7d8da;\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdFLG1CQUFBO0VBQ0Esc0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7O0VBRUUsa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGdDQUFBO0VBQUEsMkRBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLCtCQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtBQVBGOztBQVVBO0VBQ0Usc0JBQUE7QUFQRjs7QUFVQTtFQUNFLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFVQTtFQUNFLCtCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7QUFQRjs7QUFVQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFSRjs7QUFXQTtFQUNFLGlDQUFBO0FBUkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLy8gLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC8vIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */");

/***/ }),

/***/ 54965:
/*!*****************************************************************************!*\
  !*** ./src/app/common-component/common-footer/common-footer.component.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer .footer-wrapper {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 10px;\n  justify-content: center;\n}\nion-footer .footer-wrapper div {\n  margin: 0px 24px;\n  color: #40436a;\n  font-weight: 500;\n}\nion-footer .footer-wrapper div img {\n  width: 200px;\n}\n@media screen and (max-width: 768px) {\n  ion-footer .footer-wrapper {\n    display: flex;\n    text-align: center;\n    align-items: center;\n    padding: 0;\n  }\n  ion-footer .footer-wrapper div {\n    margin: 8px 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQVI7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ1o7QUFBWTtFQUNJLFlBQUE7QUFFaEI7QUFLQTtFQUVRO0lBQ0ksYUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VBSFY7RUFJVTtJQUNJLGdCQUFBO0VBRmQ7QUFDRiIsImZpbGUiOiJjb21tb24tZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciB7XG4gICAgLmZvb3Rlci13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBkaXYge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDA0MzZhO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBhcHVyYmEgc3R5bGUgc3RhcnRcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICBpb24tZm9vdGVyIHtcbiAgICAgICAgLmZvb3Rlci13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 75325:
/*!*****************************************************************************!*\
  !*** ./src/app/common-component/common-header/common-header.component.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tb24taGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 85773:
/*!*********************************************!*\
  !*** ./src/app/pages/modal/modal.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Livvic:wght@300&display=swap\");\nion-content {\n  --background-color: #fff !important;\n  --background: #fff;\n  border: 2px solid #2F8FC3;\n}\n.closeBtn {\n  font-size: 20px;\n  color: #fff;\n  margin-right: 20px;\n  cursor: pointer;\n}\n.modal-header {\n  background-color: #2F8FC3;\n}\n.modal-header .modal-inner {\n  display: flex;\n}\n.modal-header .modal-inner ion-button {\n  margin-right: 20px;\n  width: 40px;\n  --padding-start: 6px;\n  --padding-end: 6px;\n  --border-radius: 50%;\n  height: 40px;\n  --background: transparent;\n}\n.modal-header .modal-inner ion-title {\n  font-family: \"Livvic\", sans-serif;\n  font-weight: 600;\n  color: #fff !important;\n  letter-spacing: 0.3px;\n}\n.mat-form-field-outline {\n  border-radius: 50px;\n}\n.modal-footer {\n  position: fixed;\n  bottom: 0;\n}\n.modal-footer .footer-inner {\n  display: flex;\n  justify-content: end;\n  padding: 10px 20px;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  background: #fff;\n  border: 2px solid #2F8FC3;\n  border-top: 1px dotted #2F8FC3;\n}\n.scroll-y::part(background) {\n  background: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvRkFBQTtBQUNSO0VBRUksbUNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFFQTtFQUVJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUo7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7QUFFUjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBR1o7QUFBUTtFQUNJLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBRVo7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7QUFDQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0FBRUo7QUFESTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUVBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQUVSO0FBRUE7RUFFSSwyQkFBQTtBQUFKIiwiZmlsZSI6Im1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpdnZpYzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbmlvbi1jb250ZW50XG57XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyRjhGQzM7XG59XG4uY2xvc2VCdG5cbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tb2RhbC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjhGQzM7XG4gICAgLm1vZGFsLWlubmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNnB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNnB4O1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGl2dmljJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4zcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4ubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5tb2RhbC1mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgLmZvb3Rlci1pbm5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgLy8gYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjMkY4RkMzO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMkY4RkMzO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICMyRjhGQzM7XG4gICAgICAgIFxuICAgIH1cbn1cbi5zY3JvbGwteTo6cGFydChiYWNrZ3JvdW5kKVxue1xuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuIl19 */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\" [ngClass]=\"{ 'toggle-menu': toggle == true}\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" class=\"main-side-menu\">\n      <ion-header>\n        <ion-toolbar >\n          <ion-title>\n            <div class=\"header_logo\">\n              <img class=\"logo-1stpart\" src=\"assets/images/favIcon.png\" alt=\"logo\">\n              <span class=\"site-name\">\n                <img src=\"assets/images/logo_2nd.png\" alt=\"logo\">\n              </span>\n              <mat-icon (click)=\"toggleMenu(toggle)\">double_arrow</mat-icon>\n            </div>\n          </ion-title>\n          \n        </ion-toolbar>\n        <mat-icon class=\"toggle-btn\" (click)=\"toggleMenu(toggle)\">menu_open</mat-icon>\n      </ion-header>\n      <ion-content class=\"menu-list-box\">\n        <mat-accordion>\n          <!-- Multiple menu start -->\n          <mat-expansion-panel class=\"noSubMenu\" #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" [routerLink]=\"['/','dashboard']\">\n            <mat-expansion-panel-header class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\n              <mat-panel-title>\n                <mat-icon>dashboard</mat-icon>\n                Dashboard \n              </mat-panel-title>\n            </mat-expansion-panel-header>\n          </mat-expansion-panel>\n          <!-- Multiple menu end -->\n\n          <mat-expansion-panel  #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <mat-expansion-panel-header class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\n              <mat-panel-title>\n                <mat-icon>account_balance</mat-icon>\n                Institute\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <ion-list>\n              <ion-menu-toggle auto-hide=\"false\">\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','security-list']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    List Institute \n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','add-security', 'add', 'id']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Add Institute \n                  </ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n            </ion-list>\n\n          </mat-expansion-panel>\n          <mat-expansion-panel  #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <mat-expansion-panel-header class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\n              <mat-panel-title>\n                <mat-icon>loyalty</mat-icon>\n                Package\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <ion-list>\n              <ion-menu-toggle auto-hide=\"false\">\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','subscription-package-list']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Package List \n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','add-subscription-package', 'add', 'id']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Add Package\n                  </ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n            </ion-list>\n\n          </mat-expansion-panel>\n          <mat-expansion-panel  #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <mat-expansion-panel-header class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\n              <mat-panel-title>\n                <mat-icon>local_police</mat-icon>\n                License\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <ion-list>\n              <ion-menu-toggle auto-hide=\"false\">\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','license-list']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Institute License List \n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','add-license', 'add', 'id']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Add Institute License\n                  </ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n            </ion-list>\n          </mat-expansion-panel>\n          <mat-expansion-panel  #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <mat-expansion-panel-header class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\n              <mat-panel-title>\n                <mat-icon>tag</mat-icon>\n                HSN Number\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <ion-list>\n              <ion-menu-toggle auto-hide=\"false\">\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','hsn-list']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    HSN List \n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','add-hsn']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Add HSN\n                  </ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n            </ion-list>\n          </mat-expansion-panel>\n          <mat-expansion-panel  #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <mat-expansion-panel-header class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\n              <mat-panel-title>\n                <mat-icon>notifications_active</mat-icon>\n                Notification\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <ion-list>\n              <ion-menu-toggle auto-hide=\"false\">\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','notification-list']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    New Notification \n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','approved-notification']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Approved Notification \n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','rejected-notification']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Rejected Notification \n                  </ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n            </ion-list>\n\n          </mat-expansion-panel>\n          <mat-expansion-panel  #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <mat-expansion-panel-header class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\n              <mat-panel-title>\n                <mat-icon>mark_as_unread</mat-icon>\n                Email Template\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <ion-list>\n              <ion-menu-toggle auto-hide=\"false\">\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','add-email-notification', 'add', 'id']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Add email template\n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','email-notification-list']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Email template list\n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','compose-mail']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Compose mail \n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','sent-mail']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Sent mail\n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','received-mail']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Received mail\n                  </ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n            </ion-list>\n\n          </mat-expansion-panel>\n\n          <mat-expansion-panel  #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <mat-expansion-panel-header class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\n              <mat-panel-title>\n                <mat-icon>sms</mat-icon>\n                SMS Template\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <ion-list>\n              <ion-menu-toggle auto-hide=\"false\">\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','add-sms-notification', 'add', 'id']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Add SMS template\n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','sms-notification-list']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    SMS template list\n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','compose-sms']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Compose SMS \n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','sent-sms']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Sent SMS\n                  </ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n            </ion-list>\n\n          </mat-expansion-panel>\n          <mat-expansion-panel  #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <mat-expansion-panel-header class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\n              <mat-panel-title>\n                <mat-icon>payments</mat-icon>\n                Payment\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <ion-list>\n              <ion-menu-toggle auto-hide=\"false\">\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','payment-list']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Payment / History \n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','due-payment']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Due Payment\n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','add-payment']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Add Payment\n                  </ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n            </ion-list>\n\n          </mat-expansion-panel>\n\n          <mat-expansion-panel  #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <mat-expansion-panel-header class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\n              <mat-panel-title>\n                <mat-icon>insights</mat-icon>\n                Tracking\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <ion-list>\n              <ion-menu-toggle auto-hide=\"false\">\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','exam-tracking']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Exam Tracking\n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','user-list']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    User Tracking\n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','package-tracking']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Package Tracking\n                  </ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n            </ion-list>\n\n          </mat-expansion-panel>\n\n          <mat-expansion-panel  #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n            <mat-expansion-panel-header class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\n              <mat-panel-title>\n                <mat-icon>settings</mat-icon>\n                Settings\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <ion-list>\n              <ion-menu-toggle auto-hide=\"false\">\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','manage-banners']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Manage Banners \n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','manage-gallery']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Manage Photo Gallery\n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','manage-links']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Manage Links \n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"sub-item\" [routerLink]=\"['/','manage-website']\" routerLinkActive=\"router-link-active\" routerDirection=\"root\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <ion-label>\n                    Website Configuration\n                  </ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n            </ion-list>\n\n          </mat-expansion-panel>\n        </mat-accordion>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\">\n      <ng-http-loader></ng-http-loader>\n    </ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ 79818:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/common-footer/common-footer.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-footer>\n  <div class=\"footer-wrapper\">\n    <div>A complete product of </div>\n    <div>\n      <img src=\"assets/images/company-logo.png\">\n    </div>\n    <div>Technosoft Software Solution</div>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ 88477:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/common-header/common-header.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"main-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> \n      <ion-menu-button auto-hide=\"true\" ></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" class=\"search-panel header-btn\" [ngClass]=\"{ 'active': showSearch == true}\">\n      <input class=\"search-box\" type=\"search\">\n      <button mat-button (click)=\"showSearchBox(showSearch)\">\n        <mat-icon *ngIf=\"!showSearch\">search</mat-icon>\n        <mat-icon *ngIf=\"showSearch\">close</mat-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" class=\"notification-panel header-btn\">\n      <button matBadge=\"8\" matBadgePosition=\"before\" mat-button [matMenuTriggerFor]=\"notification\">\n        <mat-icon>notifications_none</mat-icon>\n      </button>\n      <mat-menu #notification=\"matMenu\" xPosition=\"before\" backdropClass=\"matMenuDropdown\">\n        <div class=\"notification-box\">\n          <div class=\"notification-list\">\n            <div class=\"notification-item\">\n              <div class=\"notification-item-offset\">9:25</div>\n              <div class=\"notification-item-content\">\n                <div class=\"notification-item-icon\"></div>\n                <p class=\"notification-heading\">1991</p>\n                <p class=\"notification-content\">\n                  The World Wide Web goes live with its first web page. \n                </p>\n              </div>\n            </div>\n            <div class=\"notification-item\">\n              <div class=\"notification-item-offset\">9:25</div>\n              <div class=\"notification-item-content\">\n                <div class=\"notification-item-icon\"></div>\n                <p class=\"notification-heading\">1991</p>\n                <p class=\"notification-content\">\n                  The World Wide Web goes live with its first web page. \n                </p>\n                <div class=\"multiAvater\">\n                  <div class=\"avater-icon-wrapper\">\n                    <div class=\"avater-icon\">\n                      <img src=\"assets/images/avatar1.jpg\">\n                    </div>\n                  </div>\n                  <div class=\"avater-icon-wrapper\">\n                    <div class=\"avater-icon\">\n                      <img src=\"assets/images/avatar2.jpg\">\n                    </div>\n                  </div>\n                  <div class=\"avater-icon-wrapper\">\n                    <div class=\"avater-icon\">\n                      <img src=\"assets/images/avatar3.jpg\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"notification-item\">\n              <div class=\"notification-item-offset\">9:25</div>\n              <div class=\"notification-item-content\">\n                <div class=\"notification-item-icon\"></div>\n                <p class=\"notification-heading\">1991</p>\n                <p class=\"notification-content\">\n                  The World Wide Web goes live with its first web page. \n                </p>\n                <div class=\"notification-img\">\n                  <div class=\"notification-img-item\">\n                    <img src=\"assets/images/people-1.jpg\">\n                  </div>\n                  <div class=\"notification-img-item\">\n                    <img src=\"assets/images/people-3.jpg\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"notification-item\">\n              <div class=\"notification-item-offset\">9:25</div>\n              <div class=\"notification-item-content\">\n                <div class=\"notification-item-icon\"></div>\n                <p class=\"notification-heading\">1991</p>\n                <p class=\"notification-content\">\n                  The World Wide Web goes live with its first web page. \n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </mat-menu>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <div class=\"profile-box\">\n        <button mat-button [matMenuTriggerFor]=\"profile\">\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"assets/images/noimage.jpg\">\n            </ion-avatar>\n            <ion-label>\n              <h2 class=\"userName\">{{storeDate?.username}}</h2>\n              <h3 class=\"userRole\">Super admin</h3>\n            </ion-label>\n          </ion-item>\n        </button>\n        <mat-menu #profile=\"matMenu\" xPosition=\"before\" backdropClass=\"matMenuDropdown\">\n          <ul class=\"dropdown-box\">\n            <li class=\"box-item profile-option\">\n              <ul>\n                <li class=\"option-header\">\n                  <p>Profile options</p>\n                </li>\n                <li><ion-label>My Account</ion-label></li>\n                <li (click)=\"changePassword('changepassword_modal', storeDate?.username, '');\"><ion-label>Change Password</ion-label></li>\n                <li><ion-label>Profile settings</ion-label></li>\n                <li><ion-label>Active tasks</ion-label></li>\n                <li (click)=\"logout()\"><ion-label>Logout</ion-label></li>\n              </ul>\n            </li>\n            <li class=\"box-item\">\n                <div class=\"revenue-box\">\n                  <div class=\"revenue-icon\">\n                    <ion-icon name=\"bar-chart-outline\"></ion-icon>\n                  </div>\n                  <div class=\"revenue-content\">\n                    <b>$9,693</b>\n                    <span>revenue</span>\n                  </div>\n                </div>\n            </li>\n            <li class=\"box-item\">\n              <div class=\"social-icons\">\n                <button class=\"facebook\" mat-button>\n                  <ion-icon name=\"logo-facebook\"></ion-icon>\n                </button>\n                <button class=\"dribbble\" mat-button>\n                  <ion-icon name=\"logo-dribbble\"></ion-icon>\n                </button>\n                <button class=\"twitter\" mat-button>\n                  <ion-icon name=\"logo-twitter\"></ion-icon>\n                </button>\n              </div>\n            </li>\n          </ul>\n        </mat-menu>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ 11610:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/modal.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"modal-header\">\n  <ion-toolbar>\n    <div class=\"modal-inner\">\n      <ion-title>{{heder_title}}</ion-title>\n      <!-- <ion-button (click)=\"closeModal()\"> -->\n        <ion-icon class=\"closeBtn\" slot=\"icon-only\" (click)=\"closeModal()\" name=\"close-circle-outline\"></ion-icon>\n      <!-- </ion-button> -->\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"common-modal-body\">\n    <div class=\"modal-wrapper\">\n      <!-- changepassword start -->\n      <div class=\"changepassword\" *ngIf=\"get_identifier == 'changepassword_modal'\">\n        <div class=\"form-layout\">\n          <div class=\"form-wrapper\">\n            <ion-grid>\n              <form #changePasswordForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(changePasswordForm)\" [mustMatch]=\"['password', 'confirm_password']\" novalidate>\n                <ion-row>\n                  <input type=\"hidden\" name=\"userName\" [(ngModel)]=\"get_item\" required>\n                  <!-- Enter old password -->\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                    <div class=\"form-item\">\n                      <mat-form-field appearance=\"outline\">\n                        <mat-label>Enter old password</mat-label>\n                        <input matInput name=\"oldPass\" [(ngModel)]=\"model.oldPass\" type=\"text\" required>\n                      </mat-form-field>\n                    </div>\n                  </ion-col>\n                  <!-- Enter new password -->\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                    <div class=\"form-item\">\n                      <mat-form-field appearance=\"outline\">\n                        <!-- <mat-icon matPrefix>lock</mat-icon> -->\n                        <mat-label>Enter new password</mat-label>\n                        <input matInput [type]=\"hide2 ? 'password' : 'text'\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" required>\n                        <button mat-icon-button matSuffix (click)=\"hide2 = !hide2\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide2\">\n                          <mat-icon>{{hide2 ? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </button>\n                      </mat-form-field>\n                    </div>\n                  </ion-col>\n                    <!-- Enter conform password -->\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                    <div class=\"form-item\">\n                      <mat-form-field appearance=\"outline\">\n                        <!-- <mat-icon matPrefix>lock</mat-icon> -->\n                        <mat-label>Enter conform password</mat-label>\n                        <input matInput [type]=\"hide3 ? 'password' : 'text'\" name=\"newPass\" #confirmPassword=\"ngModel\" [(ngModel)]=\"model.newPass\" required>\n                        <button mat-icon-button matSuffix (click)=\"hide3 = !hide3\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide3\">\n                          <mat-icon>{{hide3 ? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </button>\n                      </mat-form-field>\n                    </div>\n                  </ion-col>\n                </ion-row>\n                <ion-footer class=\"modal-footer\">\n                    <div class=\"footer-inner\">\n                      <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" (click)=\"closeModal()\" mat-stroked-button>Cancel</button>\n                      <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" [disabled]=\"!changePasswordForm.valid || formLoading\">\n                        <ion-spinner *ngIf=\"formLoading\" name=\"crescent\"></ion-spinner>\n                        Save\n                      </button>\n                    </div>\n                </ion-footer>\n              </form>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n      <!-- changepassword end --> \n\n      <!-- *******Package start**** -->\n      <!-- Suspend package start -->\n      <div class=\"suspendPackage\" *ngIf=\"get_identifier == 'suspend_package_modal'\">\n        <div class=\"form-layout\">\n          <div class=\"form-wrapper\">\n            <ion-grid>\n              <form #suspendPackageForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(suspendPackageForm)\" novalidate>\n                <ion-row>\n                  <!-- Date -->\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                    <div class=\"form-item\">\n                      <mat-form-field appearance=\"outline\">\n                        <mat-label>Date</mat-label>\n                        <input (change)=\"changeDateFormat('plSusDate', model.plSusDate)\" matInput placeholder=\"Date of Birth\" type=\"date\" name=\"plSusDate\" [(ngModel)]=\"model.plSusDate\" required>\n                      </mat-form-field>\n                    </div>\n                  </ion-col>\n                  <!-- Hidden -->\n                  <input type=\"hidden\" name=\"plAdate\" [(ngModel)]=\"model.plAdate\" required>\n                  <!-- Remarks -->\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                    <div class=\"form-item\">\n                      <mat-form-field appearance=\"outline\">\n                        <mat-label>Remarks</mat-label>\n                        <textarea rows=\"5\" matInput name=\"plComment\" [(ngModel)]=\"model.plComment\"></textarea>\n                      </mat-form-field>\n                    </div>\n                  </ion-col>\n                </ion-row>\n                <ion-footer class=\"modal-footer\">\n                  <div class=\"footer-inner\">\n                    <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" (click)=\"closeModal()\" mat-stroked-button>Cancel</button>\n                    <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" [disabled]=\"!suspendPackageForm.valid || formLoading\">\n                      <ion-spinner *ngIf=\"formLoading\" name=\"crescent\"></ion-spinner>\n                      Save\n                    </button>\n                  </div>\n                </ion-footer>\n              </form>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n      <!-- Suspend package end -->\n      <!-- Restore package start -->\n      <div class=\"restorePackage\" *ngIf=\"get_identifier == 'restore_package_modal'\">\n        <div class=\"form-layout\">\n          <div class=\"form-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <!-- Date -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                      <mat-label>Date</mat-label>\n                      <input matInput [matDatepicker]=\"dob\">\n                      <mat-datepicker-toggle matSuffix [for]=\"dob\"></mat-datepicker-toggle>\n                      <mat-datepicker touchUi #dob></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n                <!-- Remarks -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>Remarks</mat-label>\n                      <textarea rows=\"5\" matInput></textarea>\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-footer class=\"modal-footer\">\n                <div class=\"footer-inner\">\n                  <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" (click)=\"closeModal()\" mat-stroked-button>Cancel</button>\n                  <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" (click)=\"closeModal()\">Save</button>\n                </div>\n              </ion-footer>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n      <!-- Restore package end -->\n      <!-- end package start -->\n      <div class=\"endPackage\" *ngIf=\"get_identifier == 'end_package_modal'\">\n        <div class=\"form-layout\">\n          <div class=\"form-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <!-- Date -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                      <mat-label>Date</mat-label>\n                      <input matInput [matDatepicker]=\"dob\">\n                      <mat-datepicker-toggle matSuffix [for]=\"dob\"></mat-datepicker-toggle>\n                      <mat-datepicker touchUi #dob></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n                <!-- Remarks -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>Remarks</mat-label>\n                      <textarea rows=\"5\" matInput></textarea>\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-footer class=\"modal-footer\">\n                <div class=\"footer-inner\">\n                  <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" (click)=\"closeModal()\" mat-stroked-button>Cancel</button>\n                  <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" (click)=\"closeModal()\">Save</button>\n                </div>\n              </ion-footer>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n      <!-- end package end -->\n      <!-- *******Package end**** -->\n\n      <!-- *******Licence start**** -->\n      <!-- Restore Licence start -->\n      <div class=\"restoreLicence\" *ngIf=\"get_identifier == 'restore_licence_modal'\">\n        <div class=\"form-layout\">\n          <div class=\"form-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <!-- Date -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                      <mat-label>Date</mat-label>\n                      <input matInput [matDatepicker]=\"dob\">\n                      <mat-datepicker-toggle matSuffix [for]=\"dob\"></mat-datepicker-toggle>\n                      <mat-datepicker touchUi #dob></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n                <!-- Remarks -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>Remarks</mat-label>\n                      <textarea rows=\"5\" matInput></textarea>\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-footer class=\"modal-footer\">\n                <div class=\"footer-inner\">\n                  <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" (click)=\"closeModal()\" mat-stroked-button>Cancel</button>\n                  <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" (click)=\"closeModal()\">Save</button>\n                </div>\n              </ion-footer>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n      <!-- Restore Licence end -->\n      <!-- renew Licence start -->\n      <div class=\"renewLicence\" *ngIf=\"get_identifier == 'renew_licence_modal'\">\n        <div class=\"form-layout\">\n          <div class=\"form-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <!-- Date -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                      <mat-label>Date</mat-label>\n                      <input matInput [matDatepicker]=\"dob\">\n                      <mat-datepicker-toggle matSuffix [for]=\"dob\"></mat-datepicker-toggle>\n                      <mat-datepicker touchUi #dob></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n                <!-- End Date -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                      <mat-label>End Date</mat-label>\n                      <input matInput [matDatepicker]=\"endDate\">\n                      <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n                      <mat-datepicker touchUi #endDate></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n                <!-- Validity -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>Validity</mat-label>\n                      <mat-select [(value)]=\"selectedValidity\">\n                        <mat-option [value]=\"option.value\" *ngFor=\"let option of Validity\">{{ option.viewValue }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n                <!-- How many's (Numbers) -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>How many's (Numbers)</mat-label>\n                      <input matInput placeholder=\"How many's (Numbers)\" type=\"number\" [(ngModel)]=\"model.numbers\">\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n                <!-- Remarks -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>Remarks</mat-label>\n                      <textarea rows=\"5\" matInput></textarea>\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-footer class=\"modal-footer\">\n                <div class=\"footer-inner\">\n                  <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" (click)=\"closeModal()\" mat-stroked-button>Cancel</button>\n                  <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" (click)=\"closeModal()\">Save</button>\n                </div>\n              </ion-footer>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n      <!-- renew Licence end -->\n      <!-- end Licence start -->\n      <div class=\"endLicence\" *ngIf=\"get_identifier == 'end_licence_modal'\">\n        <div class=\"form-layout\">\n          <div class=\"form-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <!-- Date -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                      <mat-label>Date</mat-label>\n                      <input matInput [matDatepicker]=\"dob\">\n                      <mat-datepicker-toggle matSuffix [for]=\"dob\"></mat-datepicker-toggle>\n                      <mat-datepicker touchUi #dob></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n                <!-- Remarks -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>Remarks</mat-label>\n                      <textarea rows=\"5\" matInput></textarea>\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-footer class=\"modal-footer\">\n                <div class=\"footer-inner\">\n                  <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" (click)=\"closeModal()\" mat-stroked-button>Cancel</button>\n                  <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" (click)=\"closeModal()\">Save</button>\n                </div>\n              </ion-footer>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n      <!-- end Licence end -->  \n      <!-- suspend Licence start -->\n      <div class=\"suspendLicence\" *ngIf=\"get_identifier == 'suspend_licence_modal'\">\n        <div class=\"form-layout\">\n          <div class=\"form-wrapper\">\n            <ion-grid>\n              <form #suspendLicenseForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(suspendLicenseForm)\" novalidate>\n                <ion-row>\n                  <!-- Date -->\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                    <div class=\"form-item\">\n                      <mat-form-field appearance=\"outline\">\n                        <mat-label>Date</mat-label>\n                        <input (change)=\"changeDateFormat('licSusDate', model.licSusDate)\" matInput placeholder=\"Date of Birth\" type=\"date\" name=\"licSusDate\" [(ngModel)]=\"model.licSusDate\" required>\n                      </mat-form-field>\n                    </div>\n                  </ion-col>\n                  <!-- Hidden -->\n                  <input type=\"hidden\" name=\"llEdate\" [(ngModel)]=\"model.llEdate\" required>\n                  <!-- Remarks -->\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                    <div class=\"form-item\">\n                      <mat-form-field appearance=\"outline\">\n                        <mat-label>Remarks</mat-label>\n                        <textarea rows=\"5\" matInput name=\"llComment\" [(ngModel)]=\"model.llComment\"></textarea>\n                      </mat-form-field>\n                    </div>\n                  </ion-col>\n                </ion-row>\n                <ion-footer class=\"modal-footer\">\n                  <div class=\"footer-inner\">\n                    <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" (click)=\"closeModal()\" mat-stroked-button>Cancel</button>\n                    <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" [disabled]=\"!suspendLicenseForm.valid || formLoading\">\n                      <ion-spinner *ngIf=\"formLoading\" name=\"crescent\"></ion-spinner>\n                      Save\n                    </button>\n                  </div>\n                </ion-footer>\n              </form>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n      <!-- suspend Licence end --> \n      <!-- extend Licence start -->\n      <div class=\"extendLicence\" *ngIf=\"get_identifier == 'extend_licence_modal'\">\n        <div class=\"form-layout\">\n          <div class=\"form-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <!-- Date -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                      <mat-label>Date</mat-label>\n                      <input matInput [matDatepicker]=\"dob\">\n                      <mat-datepicker-toggle matSuffix [for]=\"dob\"></mat-datepicker-toggle>\n                      <mat-datepicker touchUi #dob></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n                <!-- How many's (Numbers) -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>No. of Days</mat-label>\n                      <input matInput placeholder=\"No. of Days\" type=\"number\" [(ngModel)]=\"model.days\">\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n                <!-- Remarks -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>Remarks</mat-label>\n                      <textarea rows=\"5\" matInput></textarea>\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-footer class=\"modal-footer\">\n                <div class=\"footer-inner\">\n                  <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" (click)=\"closeModal()\" mat-stroked-button>Cancel</button>\n                  <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" (click)=\"closeModal()\">Save</button>\n                </div>\n              </ion-footer>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n      <!-- extend Licence end -->  \n      <!-- *******Licencelist end**** -->\n      <!-- Template for start -->\n      <div class=\"templatefor\" *ngIf=\"get_identifier == 'AddTemplate_modal'\">\n        <div class=\"form-layout\">\n          <div class=\"form-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <!-- Remarks -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>Template For</mat-label>\n                      <input type=\"text\" matInput />\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-footer class=\"modal-footer\">\n                <div class=\"footer-inner\">\n                  <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" (click)=\"closeModal()\" mat-stroked-button>Cancel</button>\n                  <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" (click)=\"closeModal()\">Save</button>\n                </div>\n              </ion-footer>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n      <!-- Template for end -->\n      <!-- set DEfault start -->\n      <div class=\"templatefor\" *ngIf=\"get_identifier == 'AddDefault_modal'\">\n        <div class=\"form-layout\">\n          <div class=\"form-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <!-- Remarks -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>Set Default</mat-label>\n                      <input type=\"text\" matInput />\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-footer class=\"modal-footer\">\n                <div class=\"footer-inner\">\n                  <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" (click)=\"closeModal()\" mat-stroked-button>Cancel</button>\n                  <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" (click)=\"closeModal()\">Save</button>\n                </div>\n              </ion-footer>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n      <!-- set DEfault end -->\n      <!-- Add Sms Template start -->\n      <div class=\"templatefor\" *ngIf=\"get_identifier == 'AddSmsTemplate_modal'\">\n        <div class=\"form-layout\">\n          <div class=\"form-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <!-- Remarks -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>Template For</mat-label>\n                      <input type=\"text\" matInput />\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-footer class=\"modal-footer\">\n                <div class=\"footer-inner\">\n                  <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" (click)=\"closeModal()\" mat-stroked-button>Cancel</button>\n                  <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" (click)=\"closeModal()\">Save</button>\n                </div>\n              </ion-footer>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n      <!-- Add Sms Template end -->\n\n      <!-- Add Header ID start -->\n      <div class=\"templatefor\" *ngIf=\"get_identifier == 'choseHeader_modal'\">\n        <div class=\"form-layout\">\n          <div class=\"form-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <!-- Remarks -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>Enter Header Id</mat-label>\n                      <input type=\"text\" matInput />\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-footer class=\"modal-footer\">\n                <div class=\"footer-inner\">\n                  <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" (click)=\"closeModal()\" mat-stroked-button>Cancel</button>\n                  <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" (click)=\"closeModal()\">Save</button>\n                </div>\n              </ion-footer>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n      <!-- Add Header ID end -->\n       <!--set Default start -->\n      <div class=\"templatefor\" *ngIf=\"get_identifier == 'add_Sms_default_modal'\">\n        <div class=\"form-layout\">\n          <div class=\"form-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <!-- Remarks -->\n                <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\n                  <div class=\"form-item\">\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>Set Default</mat-label>\n                      <input type=\"text\" matInput />\n                    </mat-form-field>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-footer class=\"modal-footer\">\n                <div class=\"footer-inner\">\n                  <button class=\"border-btn danger btn-md\" style=\"margin-right: 10px;\" (click)=\"closeModal()\" mat-stroked-button>Cancel</button>\n                  <button class=\"fill-btn btn-md\" mat-stroked-button type=\"submit\" (click)=\"closeModal()\">Save</button>\n                </div>\n              </ion-footer>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n      <!-- set Default end -->\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map