import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
import * as moment from 'moment';

@Component({
  selector: 'app-add-license',
  templateUrl: './add-license.page.html',
  styleUrls: ['./add-license.page.scss'],
})
export class AddLicensePage implements OnInit {
  // Variables start
  model: any = {};
  institutes = [
    {
        id: 43,
        name: 'Lalit Tutorial',
        avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
    { id: 46, name: 'IEM', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
    {
        id: 48,
        name: 'Techno India',
        avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
    },
    {
        id: 4,
        name: 'JIS',
        avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
  ];

  validity = [
    {
        id: 1,
        name: 'Years',
        avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
    { id: 2, name: 'Months', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
    {
        id: 3,
        name: 'Days',
        avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
    },
  ];

  licenseType = [
    {
        id: 1,
        name: 'Online',
        avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
    { id: 2, name: 'Offline', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
  ];

  serverType = [
    {
        id: 1,
        name: 'AWS Shared',
        avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
    { id: 2, name: 'Mysql', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
  ];

  paymentType = [
    {
        id: 1,
        name: 'Quarterly',
        avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
    { id: 2, name: 'Half Yearly', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
    {
        id: 3,
        name: 'Annualy',
        avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
    },
  ];

  licenseFor = [
    {
        id: 1,
        name: 'Online users',
        avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
    { id: 2, name: 'Offline users', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
  ];

  selectedinstitute = this.institutes[0].name;
  selectedPaymentType = this.paymentType[0].name;
  selectedLicenseFor = this.licenseFor[0].name;

  parms_action_name;
  parms_action_id;
  form_api;
  private formSubmitSubscribe: Subscription;
  // Variables end

  constructor(
    public toastController: ToastController,
    public menuCtrl: MenuController,
    private http : HttpClient,
    private commonUtils: CommonUtils, // common functionlity come here
    private router: Router,
    private activatedRoute : ActivatedRoute,
  ) { }

  ngOnInit() {
    this.commonFunction();
  }

  commonFunction(){
    // get active url name
    this.commonUtils.getPathNameFun(this.router.url.split('/')[1]);
    this.parms_action_name = this.activatedRoute.snapshot.paramMap.get('action');
    this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');

    console.log('parms_action_name', this.parms_action_name);
    console.log('parms_action_id', this.parms_action_id);
    


    // form_api Api
    this.form_api = 'license/add';
  }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your data have been saved.',
      duration: 2000,
      cssClass:"my-tost-custom-classsuccess",
    });
    toast.present();
  }

  // Date format change start
  createDate(_date){
    console.log('_date', _date);
    
    this.model.lcCreatDate = moment(_date).format('YYYY/MM/DD');
    console.log('model.lcCreatDate', this.model.lcCreatDate);
  }
  endDate(_date){
    console.log('_date', _date);
    
    this.model.lcEndDate = moment(_date).format('YYYY/MM/DD');
    console.log('model.lcEndDate', this.model.lcEndDate);
  }
  // Date format change end

  // End date calculation start
  selectCycleDate;
  endDateCalculate(_identifier, _value){
    console.log('_identifier', _identifier);
    console.log('_value', _value);
    console.log('this.model.lcCreatDate', this.model.lcCreatDate);

    let validity;
    let duration;
    if(_identifier == 'validity'){
      validity = _value;
    }else if(_identifier == 'duration'){
      duration = _value;
    }
    
    // ----- original date format convert start -----
    let myFormatDate = this.model.lcCreatDate.split(" ")[0].split("/");
    let _mynewdate = myFormatDate[2] + "-" + myFormatDate[1] + "-" + myFormatDate[0];
    // original date format convert end

    console.log('myFormatDate', myFormatDate);
    console.log('_mynewdate', _mynewdate);
    

    //---- set day + count add start----
    this.selectCycleDate = new Date(_mynewdate);
    // this.selectCycleDate.setDate( this.selectCycleDate.getDate() + 3 );
    this.selectCycleDate.setDate( this.selectCycleDate.getDate() + parseInt(duration ));
    // alert('this.date >'+this.selectCycleDate);

    this.model.end_date = moment(this.selectCycleDate).format('YYYY/MM/DD');

    console.log('this.model.end_date', this.model.end_date);
    

  //---- set day + count add end----
    
  }
  // End date calculation end

  // ======================== form submit start ===================
  formLoading = false;
  onSubmitForm(form:NgForm){
    console.log("add form submit >", form.value);
    this.formLoading = true;

    let formValue = form.value;

    this.model.lcCreatDate = moment(this.model.lcCreatDate).format('YYYY/MM/DD');
    console.log('model.lcCreatDate', this.model.lcCreatDate);

    this.model.lcEndDate = moment(this.model.lcEndDate).format('YYYY/MM/DD');
    console.log('model.lcEndDate', this.model.lcEndDate);

    // formValue.append('lcCreatDate', this.model.lcCreatDate);
    // formValue.append('lcEndDate', this.model.lcEndDate);
    

    console.log('formValue', formValue);
    

    // get form value
    let fd = new FormData();
    for (let val in form.value) {
      if(form.value[val] == undefined){
        form.value[val] = '';
      }
      fd.append(val, form.value[val]);
    };

    console.log('value >', fd);

    if(!form.valid){
      return;
    }

    this.formSubmitSubscribe = this.http.post(this.form_api, form.value).subscribe(
      (response:any) => {
        this.formLoading = false;
        console.log("add form response >", response);

        if(response.status == 200){
          this.commonUtils.presentToast('success', response.message);
          this.router.navigateByUrl('/auth');
          form.reset();
        }else {
          this.commonUtils.presentToast('error', response.message);
        }
      },
      errRes => {
        this.formLoading = false;
      }
    );

  }
  // form submit end
  

  // ----------- destroy subscription start ---------
  ngOnDestroy() {
    if(this.formSubmitSubscribe !== undefined){
      this.formSubmitSubscribe.unsubscribe();
    }
  }
  // destroy subscription end

}
