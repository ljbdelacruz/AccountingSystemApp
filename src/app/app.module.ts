import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {AngularFireModule} from 'angularfire2';

import { MyApp } from './app.component';
import {ViewTransactionPage} from './../pages/view-transaction/view-transaction';
import {AddTransactionPage} from './../pages/view-transaction/add-transaction/add-transaction';
import {LedgersPage} from './../pages/ledgers/ledgers';
import {AddLedgerPage} from './../pages/ledgers/add-ledger/add-ledger';
import {DashboardsPage} from './../pages/dashboards/dashboards';
import {TabsPage} from './../pages/tabs/tabs';
import {UserService, UserInfo} from './../services/user';
import {Filter} from './../services/filter';
/*Modals*/
import {EditLedgerModal} from './../pages/ledgers/edit-ledger/edit-ledger';
import {EditTransactionModal} from './../pages/view-transaction/edit-transaction/edit-transaction';
import {Storage} from '@ionic/storage';
import {DatabaseServices} from './../services/dbHandler';

/*Services*/
import {AlertControllerService} from './../services/alertController.service';


export const firebaseConfig={
    apiKey: "AIzaSyCAsqQ6w0Gb412EIzT_McYyt-6Gflmx9JM",
    authDomain: "accouting-system-software.firebaseapp.com",
    databaseURL: "https://accouting-system-software.firebaseio.com",
    storageBucket: "accouting-system-software.appspot.com",
    messagingSenderId: "528814504050"
};
@NgModule({
  declarations: [
    MyApp,
    ViewTransactionPage,
    AddTransactionPage,
    LedgersPage,
    AddLedgerPage,
    DashboardsPage,
    TabsPage,
    /*Modals*/
    EditLedgerModal,
    EditTransactionModal
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ViewTransactionPage,
    AddTransactionPage,
    LedgersPage,
    AddLedgerPage,
    DashboardsPage,
    TabsPage,
    EditLedgerModal,
    EditTransactionModal
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
              UserInfo, UserService, Storage, DatabaseServices, Filter, AlertControllerService]
  })
export class AppModule {
  
}
