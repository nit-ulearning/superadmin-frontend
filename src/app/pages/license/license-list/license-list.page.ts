import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.page.html',
  styleUrls: ['./license-list.page.scss'],
})
export class LicenseListPage implements OnInit {
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
// ..... Restore licence modal start ......
async RestoreLicenceOpenModal(_identifier, _item, _items) {
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
this.presentToast('License Restored', 'success');
if(getdata.data == 'submitClose'){
  /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
}

});

return await changePassword_modal.present();
}
// Restore licence modal end 
// ..... EndLicence modal start ......
async EndLicenceOpenModal(_identifier, _item, _items) {
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
  this.presentToast('License Ended', 'success');
  if(getdata.data == 'submitClose'){
    /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
  }

  });

  return await changePassword_modal.present();
}
// EndLicence modal end 
// .....  Renew licence modal start ......
async RenewLicenceOpenModal(_identifier, _item, _items) {
  // console.log('_identifier >>', _identifier);
let RenewLicence_Modal;
RenewLicence_Modal = await this.modalController.create({
  component: ModalPage,
  cssClass: 'mymodalClass small',
  componentProps: { 
    identifier: _identifier,
    modalForm_item: _item,
    modalForm_array: _items
  }
});
  
// modal data back to Component
RenewLicence_Modal.onDidDismiss()
.then((getdata) => {
  console.log('getdata >>>>>>>>>>>', getdata);
  this.presentToast('License Renewed', 'success');
  if(getdata.data == 'submitClose'){
    /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
  }

  });

  return await RenewLicence_Modal.present();
}
//  Renew licence modal end 
// ..... SuspendLicence modal start ......
async SuspendLicenceOpenModal(_identifier, _item, _items) {
  // console.log('_identifier >>', _identifier);
let RenewLicence_Modal;
RenewLicence_Modal = await this.modalController.create({
  component: ModalPage,
  cssClass: 'mymodalClass small',
  componentProps: { 
    identifier: _identifier,
    modalForm_item: _item,
    modalForm_array: _items
  }
});
  
// modal data back to Component
RenewLicence_Modal.onDidDismiss()
.then((getdata) => {
  console.log('getdata >>>>>>>>>>>', getdata);
  this.presentToast('License Suspend', 'success');
  if(getdata.data == 'submitClose'){
    /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
  }

  });

  return await RenewLicence_Modal.present();
}
// SuspendLicence modal end    
// ..... extandLicence modal start ......
async ExtendLicenceOpenModal(_identifier, _item, _items) {
  // console.log('_identifier >>', _identifier);
let RenewLicence_Modal;
RenewLicence_Modal = await this.modalController.create({
  component: ModalPage,
  cssClass: 'mymodalClass small',
  componentProps: { 
    identifier: _identifier,
    modalForm_item: _item,
    modalForm_array: _items
  }
});
  
// modal data back to Component
RenewLicence_Modal.onDidDismiss()
.then((getdata) => {
  console.log('getdata >>>>>>>>>>>', getdata);
  this.presentToast('License Extended', 'success');
  if(getdata.data == 'submitClose'){
    /* this.onListData(this.listing_url, this.displayRecord, this.pageNo, this.api_parms, this.searchTerm, this.cherecterSearchTerm, this.sortColumnName, this.sortOrderName, this.advanceSearchParms, this.urlIdentifire);  */
  }

  });

  return await RenewLicence_Modal.present();
}
// extandLicence modal end     
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
    }else if(_identifier == 'sendMail') {
      status = 'Email sending.....';
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
    }else if(_identifier == 'generate') {
      status = 'License generated';
      type = 'success'
      this.presentToast(status, type);
    }
    this.isListLoading = false;
  }

}
