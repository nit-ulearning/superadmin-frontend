import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';

@Component({
  selector: 'app-security-list',
  templateUrl: './security-list.page.html',
  styleUrls: ['./security-list.page.scss'],
})
export class SecurityListPage implements OnInit {
  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private plt: Platform,
    private http : HttpClient,
    private commonUtils: CommonUtils // common functionlity come here
  ) { }

  // Variables start
  statusChange = true;
  isListLoading = false;
  skeleton = [
    {},{},{},{},{},{},{},{},{},{},
  ]
  listing_url;
  api_parms;
  pageNo;
  sortColumnName = '';
  sortOrderName = '';
  tableData;

  tableHeaderData = [
    {
      column_name: "instName",
      display_name: "Institute Name",
      sortingButtonName: ""
    },{
      column_name: "instAmdObj.amdUsername",
      display_name: "User Name",
      sortingButtonName: ""
    },{
      column_name: "isntRegDate",
      display_name: "Registration Date",
      sortingButtonName: ""
    },{
      column_name: "instEmail",
      display_name: "Email Address",
      sortingButtonName: ""
    },{
      column_name: "instMnum",
      display_name: "Mobile Number",
      sortingButtonName: ""
    },{
      column_name: "instWebsite",
      display_name: "Institute Website",
      sortingButtonName: ""
    },
  ];

  private tableListSubscribe: Subscription;
  // Variables end

  ngOnInit() {
    this.commonFunction();
  }

  ionViewWillEnter() {
    this.commonFunction();
  }

  commonFunction(){

    // table list data url name
    this.listing_url = 'institute/list';
    this.onRefresh();
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
    }
    this.isListLoading = false;
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

  /*----------------Table list data start----------------*/
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
      let api = _listUrl+'/'+_pageNo+'/'+_displayRecord+'/'+_sortColumnName+'/'+_sortOrderName+'/0?keyword='+ _searchTerm;
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
      this.sortColumnName = 'instId';
      this.sortOrderName = 'DESC';
      this.searchTerm = '';
      // table data call
      this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Referesh end

  /*----------------Table list data end----------------*/

  

  // ----------- destroy subscription start ---------
  ngOnDestroy() {
    if(this.tableListSubscribe !== undefined){
      this.tableListSubscribe.unsubscribe();
    }

  }

}
