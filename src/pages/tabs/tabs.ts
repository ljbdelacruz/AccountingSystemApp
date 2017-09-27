import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ViewTransactionPage} from './../view-transaction/view-transaction';
import {LedgersPage} from './../ledgers/ledgers';
import {DashboardsPage} from './../dashboards/dashboards';
import {DatabaseServices} from './../../services/dbHandler';
import {UserService} from './../../services/user';
/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit, OnDestroy {
  dashboard=DashboardsPage;
  ledgers=LedgersPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private user:UserService, private database :DatabaseServices) {
   }
  ngOnInit(){
    this.user.ledges=this.database.ledgers;
  }
  ngOnDestroy(){
    alert("Destroy");
  }
}
