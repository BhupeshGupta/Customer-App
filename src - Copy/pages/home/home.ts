import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform, Nav,ViewController} from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { StockHistoryPage } from './main-pages/stock-history/stock-history';
import { PrefrencesPage } from './main-pages/prefrences/prefrences';
import { AccountsPage } from './main-pages/accounts/accounts';
import { AnalyticsPage } from './main-pages/analytics/analytics';
import { NotificationsPage } from './main-pages/notifications/notifications';
import { CompanyDetailPage } from './company/company-detail/company-detail';
import { EmailPage } from './company/email/email';
import { MainPage } from './main-pages/main-pages';
import { CommunicationPage } from './main-pages/communication/communication';
@Component({
	templateUrl: 'home.html'
})

export class HomePage {
	@ViewChild(Nav) nav: Nav;
    rootPage: any = MainPage;
    public comp={ companyName:"abc",emailId:"abc@gmail.com"};
    name: string;
    pages: Array<{title: string, component: any,icon: string}>;
    company: Array<{title: string, component: any, icon: string}>;
  
	constructor(private navController: NavController, private navParams: NavParams,public platform: Platform) {
       this.initializeApp();
        this.name = "Company Name";
        this.pages = [
          { icon: 'fa fa-history' ,title: 'Stock-history', component: StockHistoryPage,},
          { icon: 'fa fa-cogs' , title: 'Prefrences', component: PrefrencesPage},
          { icon: 'fa fa-user' ,title: 'Accounts', component: AccountsPage },
          { icon: 'fa fa-line-chart', title: 'Analytics', component: AnalyticsPage,  },
          { icon: 'fa fa-bell-o' , title: 'Notifications', component: NotificationsPage},
          { icon: 'fa fa-bell-o' , title: 'Communication', component: CommunicationPage}
        ];
        this.company = [
          { icon: 'fa fa-building' ,title: 'Company Name', component: CompanyDetailPage},
          { icon: 'fa fa fa-envelope-o' ,title: 'Email', component: EmailPage}
        ];
	}	
  
    initializeApp() {
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        StatusBar.styleDefault();
      });
    }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}


// pop
class PopoverPage {

  constructor(public viewCtrl: ViewController) { }

  close() {
    this.viewCtrl.dismiss();
  }
}


export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) { }

  presentPopover(event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }
}
