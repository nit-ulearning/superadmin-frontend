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
  ];
  deleteApi;
  api_parms;
  pageNo;
  sortColumnName = '';
  sortOrderName = '';
  tableData;
  deleteLoading = false;
  tableValueType;
  tableHeaderData = [
    {
      column_name: "lcName",
      display_name: "License Name",
      sortingButtonName: ""
    },{
      column_name: "lcCreatDate",
      display_name: "Creation Date",
      sortingButtonName: ""
    },{
      column_name: "lcValidityNum",
      display_name: "Validity Number",
      sortingButtonName: ""
    },{
      column_name: "lcValidityType",
      display_name: "Validity   Type",
      sortingButtonName: ""
    },{
      column_name: "instituteEntity.instName",
      display_name: "Institute",
      sortingButtonName: ""
    },{
      column_name: "lcEndDate",
      display_name: "Expiry Date",
      sortingButtonName: ""
    },{
      column_name: "lcStype",
      display_name: "Server Type",
      sortingButtonName: ""
    },{
      column_name: "lcStatus",
      display_name: "Status",
      sortingButtonName: ""
    }
  ];
  private tableListSubscribe: Subscription;
  private deleteDataSubscribe: Subscription;
  // Variables end
  private InstView_get:Subscription;
  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private plt: Platform,
    private http : HttpClient,
    private commonUtils: CommonUtils, // common functionlity come here
    private router: Router,
    private activatedRoute : ActivatedRoute,
  ){ }

  ngOnInit() {
    this.commonFunction();
  }
  commonFunction(){

    // view data
    this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("parms_action_id", this.parms_action_id); 
    this.view_url = 'institute/view/'+this.parms_action_id;

    this.getInst();

    // table list data url name
    this.listing_url = 'license/getlist';
    this.onRefresh();

    // delete api
    this.deleteApi = 'emailTemplate/delete/';
  }
  // getTemplatefor start
  getInst(){
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

  /*----------------Table list data start----------------*/
    // Display records start
    displayRecord = '10';
    displayRecords = [
      { id : '1', displayValue: '10'},
      { id : '2', displayValue: '25'},
      { id : '3', displayValue: '50'},
      { id : '4', displayValue: '100'},
      { id : '5', displayValue: '0'}
    ];
    displayRecordChange(_record) {
      console.log('_record', _record);
      
      this.displayRecord = _record;
      this.pageNo = 0;
      this.onListDate(this.listing_url, this.pageNo, _record, this.sortColumnName, this.sortOrderName, this.tableValueType, this.searchTerm);
    }
    // Display records end

    // List data start
    onListDate(_listUrl, _pageNo, _displayRecord, _sortColumnName, _sortOrderName, _tableValueType, _searchTerm){
      this.isListLoading = true;
      let api = _listUrl+'/'+this.parms_action_id+'/'+_pageNo+'/'+_displayRecord+'/'+_sortColumnName+'/'+_sortOrderName+'/'+_tableValueType;
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
      this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.tableValueType, this.searchTerm);
      
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

      this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.tableValueType, this.searchTerm);
    }
    // Sorting end

    // Search start
    searchTerm:string = '';
    searchList(event){
      this.searchTerm = event.target.value;

      console.log('this.searchTerm', this.searchTerm);
      
      this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.tableValueType, this.searchTerm);
    }
    // Search end

    // Referesh start
    onRefresh(){
      this.pageNo = 0;
      this.sortColumnName = 'lcId';
      this.sortOrderName = 'DESC';
      this.searchTerm = '';
      this.tableValueType = '0';
      // table data call
      this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.tableValueType, this.searchTerm);
    }
    // Referesh end

    // Delete start
    deleteData(_id){
      console.log('id>>', _id);
      let sentValues = {'instId': _id};
      this.deleteLoading = true;
      this.deleteDataSubscribe = this.http.put(this.deleteApi, sentValues).subscribe(
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

    // Deleted or not start
    deletedOrNot(ev: any) {
      console.log('Segment changed', ev);
      this.tableValueType = ev.detail.value;
      this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.tableValueType, this.searchTerm);
    }
    // Deleted or not end

  /*----------------Table list data end----------------*/
}
