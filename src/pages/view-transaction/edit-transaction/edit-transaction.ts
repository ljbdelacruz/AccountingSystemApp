import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {Transactions} from './../../../objects/user';

@Component({
  selector: 'modal-edit-transaction',
  templateUrl: 'edit-transaction.html'
})
export class EditTransactionModal {

  nTrans:Transactions={id:0, description:'', amount:0, type:"", from:'', to:'', date:{month:0, day:0, year:0}};
  trans:Transactions;
  constructor(private navParams:NavParams, private vc:ViewController) {
    this.trans=this.navParams.data;
    this.nTrans.description=this.trans.description;
    this.nTrans.amount=this.trans.amount;
    this.nTrans.type=this.trans.type;
    this.nTrans.from=this.trans.from;
    this.nTrans.to=this.trans.to;
  }
  OnSave(){
    this.trans.description=this.nTrans.description;
    this.trans.amount=this.nTrans.amount;
    this.trans.type=this.nTrans.type;
    this.trans.from=this.nTrans.from;
    this.trans.to=this.nTrans.to;
    this.vc.dismiss(true);
  }
  OnClose(){
    this.vc.dismiss(false);
  }
}
