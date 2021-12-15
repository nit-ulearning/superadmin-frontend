import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHeaderComponent } from '../common-component/common-header/common-header.component';
// Material module start
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
// Material module end
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgSelectModule } from '@ng-select/ng-select'; // angular dropdown
import { CommonFooterComponent } from '../common-component/common-footer/common-footer.component';
import { NgxTinymceModule } from 'ngx-tinymce';
import { IonicModule } from '@ionic/angular';
import { NgxGaugeModule } from 'ngx-gauge';
@NgModule({
  declarations: [
    CommonHeaderComponent, //header component share
    CommonFooterComponent, //footer component share
  ],
  imports: [
    CommonModule,
    IonicModule,
    // Material module start
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatButtonModule,
    MatRippleModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // Material module end
    NgApexchartsModule,
    NgxGaugeModule,
    NgSelectModule, // angular dropdown
    NgxTinymceModule.forRoot({
      baseURL: '//cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.0/',
    }),
  ],
  exports: [
    CommonHeaderComponent, //header component share
    CommonFooterComponent, //footer component share
    // Material module start
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatButtonModule,
    MatRippleModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // Material module end
    NgApexchartsModule,
    NgxGaugeModule,
    NgSelectModule, // angular dropdown
    NgxTinymceModule,
  ]
})
export class SharedModule { }
