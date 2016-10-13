import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-communication-detail-page',
  templateUrl: 'communication-detail-page.html'
})
export class CommunicationDetailPage {
 
  title;
  description;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }
 
}
