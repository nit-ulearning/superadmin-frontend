import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, Platform,ModalController, ToastController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-institute-view',
  templateUrl: './institute-view.page.html',
  styleUrls: ['./institute-view.page.scss'],
})
export class InstituteViewPage implements OnInit {
  statusChange = true;
  isListLoading = false;
  listing_url;
  view_url;
  instView;
  parms_action_id;
  addlen;
  skeleton = [
    {},{},{},{},{},{},{},{},{},{},
  ]
  private InstView_get:Subscription;
   constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private plt: Platform,
    private http : HttpClient,
    private commonUtils: CommonUtils, // common functionlity come here
    private router: Router,
    private activatedRoute : ActivatedRoute,
    ) 
    { }

  ngOnInit() {
    this.commonFunction();
  }
  commonFunction(){

    // view data
    this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("parms_action_id", this.parms_action_id); 
    this.view_url = 'institute/view/'+this.parms_action_id;

     this.getInst();
  }
  // getTemplatefor start
  getInst()
  {
    console.log("HHH");
    this.InstView_get = this.http.get(this.view_url).subscribe(
        (res:any) => {
          this.instView = res; 
          console.log("All Values",this.instView);
          console.log("All Values",this.instView.instituteAddress.length);
          this.addlen = this.instView.instituteAddress.length;
        },
        errRes => {
           console.log("Get template for  >", errRes);  
        }
      );
    
  }
}
