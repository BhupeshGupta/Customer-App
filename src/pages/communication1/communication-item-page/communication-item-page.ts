import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
 
@Component({
  selector: 'page-add-communication-page',
  templateUrl: 'communication-item-page.html'
})
export class CommunicationItemPage {
 
  title;
  description;
 
  constructor(public navCtrl: NavController, public view: ViewController) {
 
  }
 
  saveItem(){
 
    let newItem = {
      title: this.title,
      description: this.description
    };
 
    this.view.dismiss(newItem);
 
  }
 
  close(){
    this.view.dismiss();
  }
 
}