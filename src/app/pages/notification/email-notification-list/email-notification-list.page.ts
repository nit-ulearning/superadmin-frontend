import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-email-notification-list',
  templateUrl: './email-notification-list.page.html',
  styleUrls: ['./email-notification-list.page.scss'],
})
export class EmailNotificationListPage implements OnInit {

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
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

  // Delete aleart start
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'aleart-popupBox',
      header: 'Delete',
      message: 'Are you sure want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'popup-cancel-btn',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          cssClass: 'popup-ok-btn',
          handler: () => {
            console.log('Confirm Okay');
            this.clickActionBtn('', 'delete');
          }
        }
      ]
    });

    await alert.present();
  }
  // Delete aleart end

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
    }
    this.isListLoading = false;
  }


}
