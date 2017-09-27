import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import {AddLedgerPage} from './add-ledger/add-ledger';
import {UserService, UserInfo} from './../../services/user';
import {Ledger, Transactions} from './../../objects/user';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2';
/*Modal*/
import {EditLedgerModal} from './edit-ledger/edit-ledger';
import {DatabaseServices} from './../../services/dbHandler';
import {Storage} from '@ionic/storage';
/*Objects*/
import {AlertControllerViewModel} from './../../objects/AlertControllerViewModel.object';
/*Services*/
import {AlertControllerService} from './../../services/alertController.service';

/*
  Generated class for the Ledgers page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ledgers',
  templateUrl: 'ledgers.html'
})
export class LedgersPage {
  selectedLedger:Ledger={id:0, title:'', cash:0, bank:0, transactions:[], isSelected:false, date:{month:0, day:0, year:0}};
  ledgers:Ledger[];
  usersList:FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private modalCtrl:ModalController,
              private user:UserService, 
              private selected:UserInfo,
              private alertCtrl:AlertController, 
              private database:DatabaseServices, 
              private store:Storage,
              public af:AngularFireDatabase,
              /*Services*/
              public alertDisplay:AlertControllerService){
        store.get('Ledgers').then((val:Ledger[])=>{
            this.user.ledges=(val !=null)?val:[]
            this.ledgers=this.user.ledges;
        });
  }
  OnGoToAddLedgerPage(){
    this.navCtrl.push(AddLedgerPage);
  }
  GetSelectedLedger(ledg:Ledger){
    this.selectedLedger=ledg;
    this.selectedLedger.isSelected=true;
    this.selected.selectedLedger=this.selectedLedger;
    this.navCtrl.parent.select(1);
  }
  OnDeleteLedger(ledg:Ledger, index:number){
    const vmDisplay=new AlertControllerViewModel("Delete Report Sheet", 
    "You will not be able to access it if You Remove this Item is it ok?", 
    "Cancel", 
    "Confirm");
      const salert=this.alertDisplay.Create(function(){
        console.log("Confirm");
      }.bind(this),function(){
        console.log("Cancel");
      }.bind(this),vmDisplay);
       salert.present();
  }
  OnEditLedger(item:Ledger, index:number){
    const ledge=this.modalCtrl.create(EditLedgerModal, item);
    ledge.present();
  }
  OnSaveChanges(){
    this.database.StoreData(this.user.ledges);
  }
}
