import {Storage} from '@ionic/storage';
import {Injectable} from '@angular/core';
import {Ledger, Users} from './../objects/user';
import {UserService} from './user';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2';
@Injectable()
export class DatabaseServices{
    ledgers:Ledger[]=[];
    constructor(private storage:Storage, private af:AngularFireDatabase){
        this.GetDataLedgers();
    }
    StoreData(data:Ledger[]){
        this.storage.ready().then(()=>{
            this.storage.set('Ledgers', data).then(()=>{
                alert("Finished Saving");
            });
        })
    }
    GetDataLedgers(){
        this.storage.get('Ledgers').then((val:Ledger[])=>{
            this.ledgers=(val !=null)?val:[];
        });
    }
    GetDataFromFireBase(table):any{
        var temp=[];
        this.af.list(table).subscribe(l=>{
            console.log(l);
          return l;
        });
    }


}

