import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Transactions} from './../../../objects/user';
import {UserInfo, UserService} from './../../../services/user';

@Component({
  selector: 'page-add-transaction',
  templateUrl: 'add-transaction.html'
})
export class AddTransactionPage {
  myDescription:string;
  myAmount:number=0;
  type:string;
  from:string;
  to:string;
  transaction:Transactions={id:0, description:'', amount:0, type:'', from:'', to:'', date:{month:0, day:0, year:0} };
  constructor(public navCtrl: NavController, public navParams: NavParams, private selected:UserInfo, private user:UserService){
  }

  OnSave(){
    if(this.myDescription != '' && this.myAmount > 0 && this.type != "" && this.from != "" && this.to != ""){
      this.transaction.id=(this.selected.GetTransactionLength() <= 0) ? 0 : this.selected.selectedLedger.transactions[this.selected.GetTransactionLength()-1].id+1;
      this.transaction.description=this.myDescription;
      this.transaction.amount=this.myAmount;
      this.transaction.type=this.type;
      this.transaction.from=this.from;
      this.transaction.to=this.to;
      this.transaction.date=this.user.GetCurrentDate();
      this.selected.AddTransaction(this.transaction);
      //updates the information from cash
      this.user.UpdateInformation(this.selected.selectedLedger);
      this.navCtrl.pop();
    }
  }
  OnClose(){
      this.navCtrl.pop();
  }
}
