import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {ViewTransactionPage} from './../view-transaction/view-transaction';
import {LedgersPage} from './../ledgers/ledgers';
import {UserInfo} from './../../services/user';
import {Ledger} from './../../objects/user';
/*
  Generated class for the Dashboards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboards',
  templateUrl: 'dashboards.html'
})
export class DashboardsPage {
  onHandCash:number;
  bankCash:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private selected:UserInfo, private alertCtrl:AlertController) {
  }
  OnGoToViewTransaction(){
    this.navCtrl.push(ViewTransactionPage, {selectedLedger:Ledger});
  }
  OnGoToLedgers(){
    this.navCtrl.push(LedgersPage);
  }
  ionViewDidEnter(){
      if(this.selected.selectedLedger == null){
        const alert=this.alertCtrl.create({
        title:'Warning',
        subTitle:'Please Select A Expense Sheet Before Going to Dashboard',
        buttons:[
                {
                  text:'Ok',
                  handler:()=>{
                    this.navCtrl.parent.select(0);
                  }
                }]
        });
        alert.present();
      }
      this.onHandCash=(this.selected.selectedLedger != null)?this.selected.selectedLedger.cash : 0;
      this.bankCash=(this.selected.selectedLedger != null)?this.selected.selectedLedger.bank : 0;
  }
}
