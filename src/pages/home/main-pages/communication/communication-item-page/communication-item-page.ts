import { Component } from '@angular/core';
import { NavController, ViewController,NavParams } from 'ionic-angular';
import { Data } from '../../../../../providers/data';
 
@Component({
  selector: 'communication',
  templateUrl: 'communication-item-page.html'
})
export class CommunicationItemPage {
    
//     public item = {
//      fname: '',
//      lname: '',
//      cmn_post: '',
//      cmn_phone: '',
//      email: '',
//      cmn_dep: '',
//      description: ''  
//    
//     }
  constructor(public navCtrl: NavController, public view: ViewController,public navParams: NavParams,public dataService: Data) {
      this.item = navParams.get('item');
 
  }
 
  saveItem(){
 
    let newItem = {
      fname: this.fname,
      lname: this.lname,
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