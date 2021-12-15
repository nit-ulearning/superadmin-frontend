import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'add-security',
    loadChildren: () => import('./pages/settings/add-security/add-security.module').then( m => m.AddSecurityPageModule)
  },
  {
    path: 'security-list',
    loadChildren: () => import('./pages/settings/security-list/security-list.module').then( m => m.SecurityListPageModule)
  },
  {
    path: 'add-subscription-package',
    loadChildren: () => import('./pages/subscription/add-subscription-package/add-subscription-package.module').then( m => m.AddSubscriptionPackagePageModule)
  },
  {
    path: 'subscription-package-list',
    loadChildren: () => import('./pages/subscription/subscription-package-list/subscription-package-list.module').then( m => m.SubscriptionPackageListPageModule)
  },
  {
    path: 'add-license',
    loadChildren: () => import('./pages/license/add-license/add-license.module').then( m => m.AddLicensePageModule)
  },
  {
    path: 'license-list',
    loadChildren: () => import('./pages/license/license-list/license-list.module').then( m => m.LicenseListPageModule)
  },
  {
    path: 'license-view',
    loadChildren: () => import('./pages/license/license-view/license-view.module').then( m => m.LicenseViewPageModule)
  },
  {
    path: 'notification-list',
    loadChildren: () => import('./pages/notification/notification-list/notification-list.module').then( m => m.NotificationListPageModule)
  },
  {
    path: 'add-payment',
    loadChildren: () => import('./pages/payment/add-payment/add-payment.module').then( m => m.AddPaymentPageModule)
  },
  {
    path: 'payment-list',
    loadChildren: () => import('./pages/payment/payment-list/payment-list.module').then( m => m.PaymentListPageModule)
  },
  {
    path: 'email-notification-list',
    loadChildren: () => import('./pages/notification/email-notification-list/email-notification-list.module').then( m => m.EmailNotificationListPageModule)
  },
  {
    path: 'sms-notification-list',
    loadChildren: () => import('./pages/notification/sms-notification-list/sms-notification-list.module').then( m => m.SmsNotificationListPageModule)
  },
  {
    path: 'add-email-notification',
    loadChildren: () => import('./pages/notification/add-email-notification/add-email-notification.module').then( m => m.AddEmailNotificationPageModule)
  },
  {
    path: 'add-sms-notification',
    loadChildren: () => import('./pages/notification/add-sms-notification/add-sms-notification.module').then( m => m.AddSmsNotificationPageModule)
  },
  {
    path: 'admin-list',
    loadChildren: () => import('./pages/tracking/admin-list/admin-list.module').then( m => m.AdminListPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./pages/tracking/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'tracking-view',
    loadChildren: () => import('./pages/tracking/tracking-view/tracking-view.module').then( m => m.TrackingViewPageModule)
  },
  {
    path: 'approved-notification',
    loadChildren: () => import('./pages/notification/approved-notification/approved-notification.module').then( m => m.ApprovedNotificationPageModule)
  },
  {
    path: 'rejected-notification',
    loadChildren: () => import('./pages/notification/rejected-notification/rejected-notification.module').then( m => m.RejectedNotificationPageModule)
  },
  {
    path: 'compose-mail',
    loadChildren: () => import('./pages/notification/compose-mail/compose-mail.module').then( m => m.ComposeMailPageModule)
  },
  {
    path: 'sent-mail',
    loadChildren: () => import('./pages/notification/sent-mail/sent-mail.module').then( m => m.SentMailPageModule)
  },
  {
    path: 'received-mail',
    loadChildren: () => import('./pages/notification/received-mail/received-mail.module').then( m => m.ReceivedMailPageModule)
  },
  {
    path: 'compose-sms',
    loadChildren: () => import('./pages/notification/compose-sms/compose-sms.module').then( m => m.ComposeSmsPageModule)
  },
  {
    path: 'sent-sms',
    loadChildren: () => import('./pages/notification/sent-sms/sent-sms.module').then( m => m.SentSmsPageModule)
  },
  {
    path: 'tracking-list',
    loadChildren: () => import('./pages/tracking/tracking-list/tracking-list.module').then( m => m.TrackingListPageModule)
  },
  {
    path: 'payment-details',
    loadChildren: () => import('./pages/payment/payment-details/payment-details.module').then( m => m.PaymentDetailsPageModule)
  },
  {
    path: 'due-payment',
    loadChildren: () => import('./pages/payment/due-payment/due-payment.module').then( m => m.DuePaymentPageModule)
  },
  {
    path: 'exam-tracking',
    loadChildren: () => import('./pages/tracking/exam-tracking/exam-tracking.module').then( m => m.ExamTrackingPageModule)
  },
  {
    path: 'package-tracking',
    loadChildren: () => import('./pages/tracking/package-tracking/package-tracking.module').then( m => m.PackageTrackingPageModule)
  },
  {
    path: 'exam-list',
    loadChildren: () => import('./pages/tracking/exam-list/exam-list.module').then( m => m.ExamListPageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./pages/tracking/user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
  {
    path: 'package-details',
    loadChildren: () => import('./pages/tracking/package-details/package-details.module').then( m => m.PackageDetailsPageModule)
  },
  {
    path: 'manage-banners',
    loadChildren: () => import('./pages/settings/manage-banners/manage-banners.module').then( m => m.ManageBannersPageModule)
  },
  {
    path: 'add-banners',
    loadChildren: () => import('./pages/settings/add-banners/add-banners.module').then( m => m.AddBannersPageModule)
  },
  {
    path: 'manage-gallery',
    loadChildren: () => import('./pages/settings/manage-gallery/manage-gallery.module').then( m => m.ManageGalleryPageModule)
  },
  {
    path: 'add-gallery',
    loadChildren: () => import('./pages/settings/add-gallery/add-gallery.module').then( m => m.AddGalleryPageModule)
  },
  {
    path: 'manage-links',
    loadChildren: () => import('./pages/settings/manage-links/manage-links.module').then( m => m.ManageLinksPageModule)
  },
  {
    path: 'add-links',
    loadChildren: () => import('./pages/settings/add-links/add-links.module').then( m => m.AddLinksPageModule)
  },
  {
    path: 'manage-website',
    loadChildren: () => import('./pages/settings/manage-website/manage-website.module').then( m => m.ManageWebsitePageModule)
  },
  {
    path: 'add-website-details',
    loadChildren: () => import('./pages/settings/add-website-details/add-website-details.module').then( m => m.AddWebsiteDetailsPageModule)
  },
  {
    path: 'view-website-details',
    loadChildren: () => import('./pages/settings/view-website-details/view-website-details.module').then( m => m.ViewWebsiteDetailsPageModule)
  },
  {
    path: 'package-tracking-list',
    loadChildren: () => import('./pages/tracking/package-tracking-list/package-tracking-list.module').then( m => m.PackageTrackingListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
