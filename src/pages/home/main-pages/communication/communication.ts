import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { CommunicationItemPage } from './communication-item-page/communication-item-page'
import { CommunicationDetailPage } from './communication-detail-page/communication-detail-page';
import { Data } from '../../../../providers/data';
 
@Component({
  selector: 'page-communication',
  templateUrl: 'communication.html'
})
export class CommunicationPage {
 
  public items = [];
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
 
    this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = JSON.parse(todos); 
      }
 
    });
 
  }
 
  ionViewDidLoad(){
 
  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(CommunicationItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
 
  viewItem(item){
    this.navCtrl.push(CommunicationDetailPage, {
      item: item
    });
  }
    removeItem(item){
    let index = this.items.indexOf(item);

    if(index > -1){
      this.items.splice(index, 1);
    }
}

  
 
}