import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageGalleryPage } from './manage-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: ManageGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageGalleryPageRoutingModule {}
