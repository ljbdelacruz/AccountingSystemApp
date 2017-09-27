import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {UserService} from './../../../services/user';
import {Ledger} from './../../../objects/user';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'page-add-ledgers',
  templateUrl: 'add-ledger.html'
})
export class AddLedgerPage {
  ntitle:string="Untitled";
  constructor(public navCtrl: NavController, public navParams: NavParams, private users:UserService) {
  }
  OnAddLedger(){
    const ledger:Ledger={id:(this.users.ledges.length <= 0) ? 0 : this.users.ledges[this.users.ledges.length-1].id+1, title:this.ntitle, bank:0, cash:0, transactions:[], isSelected:false, date:this.users.GetCurrentDate()}
    this.users.PushNewLedges(ledger);
    this.navCtrl.pop();
  }
}
