import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import {Ledger} from './../../../objects/user';
import {UserService} from './../../../services/user';
@Component({
  selector: 'modal-edit-ledgers',
  templateUrl: 'edit-ledger.html'
})
export class EditLedgerModal {
  nTransact:Ledger={id:0, title:'', cash:0, bank:0, transactions:[], isSelected:false, date:{month:0, day:0, year:0}};
  transact:Ledger;
  constructor(private viewCtrl:ViewController, private navParams:NavParams, private user:UserService) {
    this.transact=this.navParams.data;
    //deep copying object 
    this.nTransact={id:this.transact.id, title:this.transact.title, cash:this.transact.cash, bank:this.transact.bank, transactions:this.transact.transactions, isSelected:this.transact.isSelected, date:{month:0, day:0, year:0}};
  }
  OnSave(){
    this.transact.title=this.nTransact.title;
    this.viewCtrl.dismiss();
  }
  OnClose(){
    this.viewCtrl.dismiss();
  }
}
