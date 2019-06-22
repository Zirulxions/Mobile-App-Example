import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  data: any;

  ngOnInit() {
    var date = new Date();
    console.log(date);
    this.data = date;
  }

  reloadData(event){
    var date = new Date();
    console.log(date);
    this.data = date;
  }

}
