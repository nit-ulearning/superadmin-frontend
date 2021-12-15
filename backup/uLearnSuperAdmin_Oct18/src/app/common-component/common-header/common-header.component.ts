import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {

  showSearch: boolean = false;
  constructor(
    private navCtrl : NavController,
  ) { }

  ngOnInit() {}

  showSearchBox(_item) {
    console.log('showSearch>>', this.showSearch);
    if(this.showSearch == false) {
      this.showSearch = true;
    }else{
      this.showSearch = false;
    }
  }

  // Goto page start
  goToPage(_url, _item){
    console.log('goToPage _url >', _url);
    console.log('goToPage _item >', _item);
    // this.router.navigateByUrl(_url);

    this.navCtrl.navigateRoot(_url);
  }

}
