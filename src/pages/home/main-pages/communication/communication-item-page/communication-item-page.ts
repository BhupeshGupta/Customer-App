import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
 
@Component({
  selector: 'page-add-communication-page',
  templateUrl: 'communication-item-page.html'
})
export class CommunicationItemPage {
 
  name;
  cmn_post;
  cmn_phone;
  email;
  cmn_dep;
  description;    
    
    
    
  constructor(public navCtrl: NavController, public view: ViewController) {
 
  }
 
  saveItem(){
 
    let newItem = {
      name: this.name,
      cmn_post: this.cmn_post,
      cmn_phone: this.cmn_phone,
      email: this.email,
      cmn_dep: this.cmn_dep,
      description: this.description
    };
 
    this.view.dismiss(newItem);
 
  }
 
  close(){
    this.view.dismiss();
  }
 
}