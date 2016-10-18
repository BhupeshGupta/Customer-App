import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-communication-detail-page',
  templateUrl: 'communication-detail-page.html'
})
export class CommunicationDetailPage {
 
  fname;
  lname;
  cmn_post;
  cmn_phone;
  email;
  cmn_dep;
  description;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.fname = this.navParams.get('item').fname;
    this.lname = this.navParams.get('item').lname;
    this.cmn_post = this.navParams.get('item').cmn_post;
    this.cmn_phone = this.navParams.get('item').cmn_name;
    this.email = this.navParams.get('item').email;
    this.cmn_dep = this.navParams.get('item').cmn_dep;
    this.description = this.navParams.get('item').description;
  }
 
}
