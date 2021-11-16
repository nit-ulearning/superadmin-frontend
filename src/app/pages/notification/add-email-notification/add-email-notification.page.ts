import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page';

@Component({
  selector: 'app-add-email-notification',
  templateUrl: './add-email-notification.page.html',
  styleUrls: ['./add-email-notification.page.scss'],
})
export class AddEmailNotificationPage implements OnInit {
  model: any = {};
  cities = [
    {
        id: 1,
        name: 'Vilnius',
        avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
    { id: 2, name: 'Kaunas', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
    {
        id: 3,
        name: 'Pavilnys',
        avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
    },
    {
        id: 4,
        name: 'Siauliai',
        avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
  ];
  Template = [
    {value: 'Select Template', viewValue: 'Select Template'},
    {value: 'SMS-IN', viewValue: 'SMS-IN'},
    {value: 'Holiday', viewValue: 'Holiday'},
    {value: 'SMS-OUT', viewValue: 'SMS-OUT'},
    {value: 'ABSENT', viewValue: 'ABSENT'},

  ];
  setDefault=[
    {value: 'Not Default', viewValue: 'Not Default'},
    {value: 'Default', viewValue: 'Default'}
  ]
  selectedCity = this.cities[0].name;
  selectedType = this.setDefault[0].value;
  selectedTemplate = this.Template[0].value;
  constructor(
    public toastController: ToastController,
    private modalController : ModalController,
  ) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your data have been saved.',
      duration: 2000,
      cssClass:"my-tost-custom-classsuccess",
    });
    toast.present();
  }
  // AddTemplate start
  async AddTemplate(_identifier, _item, _items) {
    // console.log('_identifier >>', _identifier);
    let changePassword_modal;
    changePassword_modal = await this.modalController.create({
      component: ModalPage,
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
      // this.presentToast('Package End', 'success');
      if(getdata.data == 'submitClose'){
        /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
      }

    });

    return await changePassword_modal.present();
  }
  // AddTemplate end
   // AddTemplate start
   async AddDefault(_identifier, _item, _items) {
    // console.log('_identifier >>', _identifier);
    let changePassword_modal;
    changePassword_modal = await this.modalController.create({
      component: ModalPage,
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
      // this.presentToast('Package End', 'success');
      if(getdata.data == 'submitClose'){
        /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
      }

    });

    return await changePassword_modal.present();
  }
  // AddTemplate end 
}