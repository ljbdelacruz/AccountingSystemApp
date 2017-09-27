import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import {AddTransactionPage} from './add-transaction/add-transaction';
import {Ledger, Transactions} from './../../objects/user';
import {UserInfo, UserService} from './../../services/user';
import {EditTransactionModal} from './edit-transaction/edit-transaction';
@Component({
  selector: 'page-view-transaction',
  templateUrl: 'view-transaction.html'
})
export class ViewTransactionPage {
  bank:number;
  hand:number;
  filterType:string="";
  isFiltered:boolean = false;
  //from is where will this expense/savings will be increase/deduct
  //type determines wether its increase/decrease
  transactions:Transactions[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private selected:UserInfo, private user:UserService, private modalCtrl:ModalController, private alertCtrl:AlertController) {
  }
  ionViewDidEnter(){
    if(this.selected.selectedLedger != null){
      this.hand=this.selected.selectedLedger.cash;
      this.bank=this.selected.selectedLedger.bank;
      this.transactions=this.selected.selectedLedger.transactions;
    }else{
      this.bank=0;
      this.hand=0;
      this.transactions=[];
    }
  }
  OnAddTransaction(){
    this.navCtrl.push(AddTransactionPage);
  }
  OnEditTransaction(item:Transactions){
    const modal=this.modalCtrl.create(EditTransactionModal, item);
    modal.present();
    modal.onDidDismiss((isUpdated:boolean)=>{
      if(isUpdated==true){
        this.UpdateData();
      }
    })
  }
  OnFilter(){
   alert("Filter");
   alert(this.isFiltered);
   alert(this.filterType);   
   if(this.filterType == 'date' && this.isFiltered==true){
     alert("Date Filtered");
     this.selected.FilterTransactions(this.selected.selectedLedger.transactions);
   } 
  }
  OnDeleteTransaction(item:Transactions, index:number){
    console.log(index);
    const salert=this.alertCtrl.create({
        title:'Delete Record',
        subTitle:'If You delete this record you will not be able to access it. is it ok?',
        buttons:[
                {
                  text:'Ok',
                  handler:()=>{
                    this.selected.RemoveTransaction(item, index);
                    this.UpdateData();
                  }
                },
                {
                  text:'Cancel'
                }
                ]
        });
        salert.present();
  }
  itemSelected(item){
    alert(item.description);
  }
  UpdateData(){
      this.user.UpdateInformation(this.selected.selectedLedger);
      this.hand=this.selected.selectedLedger.cash;
      this.bank=this.selected.selectedLedger.bank;
  }
}
