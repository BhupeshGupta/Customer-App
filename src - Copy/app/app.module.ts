import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { HomePage2 } from '../pages/home2/home2';
import { MainPage } from '../pages/home/main-pages/main-pages';
import { AccountsPage } from '../pages/home/main-pages/accounts/accounts';
import { ItemDetailsPage } from '../pages/home/main-pages/item-details/item-details';
import { StockHistoryPage } from '../pages/home/main-pages/stock-history/stock-history';
import { PrefrencesPage } from '../pages/home/main-pages/prefrences/prefrences';
import { AnalyticsPage } from '../pages/home/main-pages/analytics/analytics';
import { NotificationsPage } from '../pages/home/main-pages/notifications/notifications';
import { CompanyDetailPage } from '../pages/home/company/company-detail/company-detail';
import { EmailPage } from '../pages/home/company/email/email';
import { StockDetailsPage } from '../pages/home/main-pages/stock-history/stock-details/stock-details';
import { CommunicationPage } from '../pages/home/main-pages/communication/communication';
import { CommunicationDetails } from '../pages/home/main-pages/communication/communication-details/communication-details';
import { AddItemPage } from '../pages/home2/add-item-page/add-item-page';
import { ItemDetailPage } from '../pages/home2/item-detail-page/item-detail-page';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
	LoginPage,
    HomePage,
    HomePage2,
    MainPage,
    AccountsPage,
    ItemDetailsPage,
    StockHistoryPage,
    PrefrencesPage,
    AnalyticsPage,
    NotificationsPage,
    CompanyDetailPage,
    EmailPage,
    StockDetailsPage,
    CommunicationPage,
    CommunicationDetails,
    AddItemPage,
    ItemDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	LoginPage,
    HomePage,
    HomePage2,
    MainPage,
    AccountsPage,
    ItemDetailsPage,
    StockHistoryPage,
    PrefrencesPage,
    AnalyticsPage,
    NotificationsPage,
    CompanyDetailPage,
    EmailPage,
    StockDetailsPage,
    CommunicationPage,
    CommunicationDetails,
    AddItemPage,
    ItemDetailPage
  ],
  providers: [Storage, Data]
})
export class AppModule {}
