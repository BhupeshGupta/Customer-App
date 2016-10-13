import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { StockDetailsPage } from './stock-details/stock-details';
@Component({
  templateUrl: 'stock-history.html'
})
export class StockHistoryPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.icons = [];  
    this.items = [];
  }
  itemTapped(event) {
    this.navCtrl.push(StockDetailsPage);
  }
}
