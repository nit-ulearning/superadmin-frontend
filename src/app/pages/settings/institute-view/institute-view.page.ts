import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institute-view',
  templateUrl: './institute-view.page.html',
  styleUrls: ['./institute-view.page.scss'],
})
export class InstituteViewPage implements OnInit {
  statusChange = true;
  isListLoading = false;
  skeleton = [
    {},{},{},{},{},{},{},{},{},{},
  ]
  constructor() { }

  ngOnInit() {
  }

}
