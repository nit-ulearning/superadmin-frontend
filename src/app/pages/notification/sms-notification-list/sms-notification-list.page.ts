import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController,AlertController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
@Component({
  selector: 'app-sms-notification-list',
  templateUrl: './sms-notification-list.page.html',
  styleUrls: ['./sms-notification-list.page.scss'],
})
export class SmsNotificationListPage implements OnInit {

  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private modalController : ModalController,
    private http : HttpClient,
    private commonUtils: CommonUtils, // common functionlity come here
  ) { }

  // Variables start
  statusChange = true;
  isListLoading = false;
  listing_url;
  tableData;
  pageNo;
  sortColumnName = '';
  sortOrderName = '';
  deleteApi;
  deleteLoading = false;
  setprimaryapi;
  unsetprimaryapi;
  tableHeaderData = [
    {
      column_name: "stAction",
      display_name: "Template For",
      sortingButtonName: ""
    },{
      column_name: "stName",
      display_name: "SMS Name",
      sortingButtonName: ""
    },{
      column_name: "stType",
      display_name: "Status",
      sortingButtonName: ""
    }
  ];
  private getSMSTemplateListing :Subscription;
  private tableListSubscribe: Subscription;
  private deleteDataSubscribe: Subscription;
  private unsetprimaryDataSubscribe:Subscription;
  private setprimaryDataSubscribe:Subscription;
  // Variables end

  ngOnInit() {
    this.commonFunction();
  }

  ionViewWillEnter() {
    this.commonFunction();
  }
  
   // Display records start
    displayRecord = '10';
    displayRecords = [
        { id : '1', displayValue: '10'},
        { id : '2', displayValue: '25'},
        { id : '3', displayValue: '50'},
        { id : '4', displayValue: '100'},
        { id : '5', displayValue: '200'}
    ];
    displayRecordChange(_record) {
      console.log('_record', _record);
      
      this.displayRecord = _record;

      this.onListDate(this.listing_url, this.pageNo, _record, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Display records end
     // List data start
    onListDate(_listUrl, _pageNo, _displayRecord, _sortColumnName, _sortOrderName, _searchTerm){
      this.isListLoading = true;
      let api = _listUrl+'/'+_pageNo+'/'+_displayRecord+'/'+_sortColumnName+'/'+_sortOrderName+'?keyword='+ _searchTerm;
      this.tableListSubscribe = this.http.get(api).subscribe(
        (res:any) => {
          this.isListLoading = false;
          console.log('res', res);
          this.tableData = res;
        },
        errRes => {
          // this.selectLoadingDepend = false;
          this.isListLoading = false;
        }
      );
    }
    // List data end
    // Pagination start
      setPage(page: number) {
        console.log('page', page);
        console.log("page");
        
        this.pageNo = page;
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
        
      }
    // Pagination end

    // Sorting start
    isSortTableHeader(_tableHeaderData,  _headerItem ){
      console.log('_tableHeaderData', _tableHeaderData);
      console.log('_headerItem', _headerItem);

      // all field reset first
      _tableHeaderData.forEach((val) => {
        val.sortingButtonName = ''
      })

      _headerItem.orederShow = !_headerItem.orederShow;
      if(_headerItem.orederShow) {
        _headerItem.sortingButtonName = "ASC";
      }else
      {
        _headerItem.sortingButtonName = "DESC";
      }

      this.sortColumnName = _headerItem.column_name;
      this.sortOrderName = _headerItem.sortingButtonName;

      console.log('this.sortColumnName', this.sortColumnName);
      console.log('this.sortOrderName', this.sortOrderName);
      console.log('_tableHeaderData>>', _tableHeaderData);

      this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Sorting end

     // Search start
      searchTerm:string = '';
      searchList(event){
        this.searchTerm = event.target.value;

        console.log('this.searchTerm', this.searchTerm);
        
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
      }
    // Search end

    // Referesh start
    onRefresh(){
      this.pageNo = 0;
      this.sortColumnName = 'stId';
      this.sortOrderName = 'DESC';
      this.searchTerm = '';
      // table data call
      this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Referesh end

    // Delete start
    deleteData(_id){
      console.log('id>>', _id);
      
      this.deleteLoading = true;
      this.deleteDataSubscribe = this.http.delete(this.deleteApi+_id).subscribe(
        (res:any) => {
          this.deleteLoading = false;
          console.log("Edit data  res >", res.return_data);
          if(res.status == 200){
            this.commonUtils.presentToast('success', res.message);
            this.onRefresh();
          }else {
            this.commonUtils.presentToast('error', res.message);
          }
        },
        errRes => {
          // this.selectLoadingDepend = false;
          this.deleteLoading = false;
        }
      );
    }
    // Delete end
    // unsetprimaryDataSubscribe start
    unsetprimary(_id)
    {
      console.log('id>>', _id);
      
      this.deleteLoading = true;
      this.unsetprimaryDataSubscribe = this.http.delete(this.unsetprimaryapi+_id).subscribe(
        (res:any) => {
          this.deleteLoading = false;
          console.log("Edit data  res >", res.return_data);
          if(res.status == 200){
            this.commonUtils.presentToast('success', res.message);
            this.onRefresh();
          }else {
            this.commonUtils.presentToast('error', res.message);
          }
        },
        errRes => {
          // this.selectLoadingDepend = false;
          this.deleteLoading = false;
        }
      );
    }
    // unsetprimaryDataSubscribe end
    // setprimaryDataSubscribe start
    setprimary(_id)
    {
      console.log('id>>', _id);
      
      this.deleteLoading = true;
      this.setprimaryDataSubscribe = this.http.delete(this.setprimaryapi+_id).subscribe(
        (res:any) => {
          this.deleteLoading = false;
          console.log("Edit data  res >", res.return_data);
          if(res.status == 200){
            this.commonUtils.presentToast('success', res.message);
            this.onRefresh();
          }else {
            this.commonUtils.presentToast('error', res.message);
          }
        },
        errRes => {
          // this.selectLoadingDepend = false;
          this.deleteLoading = false;
        }
      );
    }
    // setprimaryDataSubscribe end
    // getTemplateList start
  // getSMSTemplateList()
  // {
  //   console.log("HHH");
  //   this.getSMSTemplateListing = this.http.get(this.getTemplateList_api).subscribe(
  //       (res:any) => {
  //         console.log("Get template for  >", res);
  //         this.skeleton = res; 
  //         console.log("Get template for length",this.skeleton);

  //       },
  //       errRes => {
  //          console.log("Get template for  >", errRes);  
  //       }
  //     );    
  // }
   commonFunction(){
    this.listing_url = 'smsTemplate/list';
     this.onRefresh();
       // delete api
    this.deleteApi = 'smsTemplate/delete/';
    this.setprimaryapi = 'smsTemplate/delete/';
    this.unsetprimaryapi = 'smsTemplate/delete/';
  }
  // getTemplateList end
  // Delete aleart start
  async presentAlert(_identifier, _id) {

     let messages,headers;

     if(_identifier == 'delete')
    {
      headers = "Delete"
      messages = "Are you sure want to delete this item?";
    }
    else if(_identifier == 'unsetprimary')
    {
      headers = "Unset Primary"
      messages = "Are you want to change unset primary from this?";
    }
    else if(_identifier == 'setprimary')
    {
      headers = "Set Primary"
      messages = "Are you want to change primary from this?";
    }
    const alert = await this.alertController.create({
      cssClass: 'aleart-popupBox',
      header: headers,
      message: messages,
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
            // this.clickActionBtn('', 'delete');
             // this.deleteData(_id);
             if(_identifier == 'delete'){
              this.deleteData(_id);
            }
            else if(_identifier == 'unsetprimary'){
              this.unsetprimary(_id);
            }
            else if(_identifier == 'setprimary'){
              this.setprimary(_id);
            }
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
