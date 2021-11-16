import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page';

@Component({
  selector: 'app-subscription-package-list',
  templateUrl: './subscription-package-list.page.html',
  styleUrls: ['./subscription-package-list.page.scss'],
})
export class SubscriptionPackageListPage implements OnInit {
  constructor(
    public toastController: ToastController,
    private modalController : ModalController,
  ) { }

  // Variables start
  statusChange = true;
  isListLoading = false;
  skeleton = [
    {},{},{},{},{},{},{},{},{},{},
  ]
  // Variables end

  ngOnInit() {
  }

  async presentToast(_msg, _type) {
    const toast = await this.toastController.create({
      message: _msg,
      duration: 2000,
      cssClass:"my-tost-custom-class" +_type,
    });
    toast.present();
  }

  clickActionBtn(_value, _identifier) {
    let status;
    let type;
    this.isListLoading = true;
    if(_identifier == 'status') {
      
      if(_value == true) {
        this.statusChange = false;
        status = 'Your status is disable';
        type = 'info'
      }else {
        this.statusChange = true;
        status = 'Your status is enable';
        type = 'success'
      }

      console.log('statusChange', this.statusChange);
      this.presentToast(status, type);
    }else if(_identifier == 'delete') {
      status = 'Deleted successfully';
      type = 'success'
      this.presentToast(status, type);
    }else if(_identifier == 'edit') {
      status = 'Your data is editable';
      type = 'success'
      this.presentToast(status, type);
    }else if(_identifier == 'pdf') {
      status = 'Downloading PDF file';
      type = 'success'
      this.presentToast(status, type);
    }else if(_identifier == 'excel') {
      status = 'Downloading Excel file';
      type = 'success'
      this.presentToast(status, type);
    }else if(_identifier == 'refresh') {
      status = 'Data refreshing...';
      type = 'success'
      this.presentToast(status, type);
    }else if(_identifier == 'approve') {
      status = 'Package Approved';
      type = 'success'
      this.presentToast(status, type);
    }
    this.isListLoading = false;
  }

  // ..... suspend package modal start ......
  async suspendPackageOpenModal(_identifier, _item, _items) {
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
      this.presentToast('Package Suspend', 'success');
      if(getdata.data == 'submitClose'){
        /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
      }

    });

    return await changePassword_modal.present();
  }
  // suspend package modal end 

    // ..... Restore package modal start ......
    async RestorePackageOpenModal(_identifier, _item, _items) {
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
        this.presentToast('Package Restored', 'success');
        if(getdata.data == 'submitClose'){
          /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
        }
  
      });
  
      return await changePassword_modal.present();
    }
    // Restore package modal end 
  // ..... Restore package modal start ......
  async EndPackageOpenModal(_identifier, _item, _items) {
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
      this.presentToast('Package End', 'success');
      if(getdata.data == 'submitClose'){
        /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
      }

    });

    return await changePassword_modal.present();
  }
  // Restore package modal end   

}
