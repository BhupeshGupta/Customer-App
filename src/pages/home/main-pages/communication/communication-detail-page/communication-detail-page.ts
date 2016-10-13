import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-communication-detail-page',
  templateUrl: 'communication-detail-page.html'
})
export class CommunicationDetailPage {
 
  name;
  cmn_post;
  cmn_phone;
  email;
  cmn_dep;
  description;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.name = this.navParams.get('item').name;
    this.cmn_post = this.navParams.get('cmn_post').cmn_post;
    this.cmn_phone = this.navParams.get('cmn_phone').cmn_name;
    this.email = this.navParams.get('email').email;
    this.cmn_dep = this.navParams.get('cmn_dep').cmn_dep;
    this.description = this.navParams.get('item').description;
  }
 
}
