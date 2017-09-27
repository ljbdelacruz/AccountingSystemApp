import {Injectable} from '@angular/core';
import {DatabaseServices} from './dbHandler';
import {Ledger, Transactions} from './../objects/user';
import {MyDate} from './../objects/MyDate.object';
import {Filter} from './filter';
@Injectable()
export class UserService{
    //ledges:Ledger[]=[{id:0, title:'Lainel Expense Report', cash:1000, bank:0, transactions:[{id:0, description:'Withdrawal', amount:1000, type:'savings', from:'bank', to:'cash'}], isSelected:false}];
    ledges:Ledger[]=[];
    isSuccessProcess:Boolean = false;
    constructor(private filter:Filter){
    }
    PushNewLedges(l:Ledger){
        this.ledges.push(l);
    }
    UpdateLedger(ledg:Ledger, index:number){
        this.ledges[index]=ledg;
    }
    removeLedger(ledg:Ledger, index:number){
        this.ledges.splice(index, 1);
    }
    GetLedgers(){
        return this.ledges;
    }
    UpdateInformation(ledge:Ledger){
        ledge.cash=0.0;
        ledge.bank=0.0;
        for(var i=0;i<ledge.transactions.length;i++){
            var item:Transactions=ledge.transactions[i];
            if(item.to == 'bank' && item.from=='cash'){
                ledge.cash=(ledge.cash! <= 0) ? (ledge.cash + Number(item.amount)) : ledge.cash!;
                ledge.cash-=Number(item.amount);
                ledge.bank+=Number(item.amount);
            }else if(item.to=='cash' && item.from == 'bank'){
                ledge.bank=(ledge.bank <= 0) ? (ledge.bank+Number(item.amount)) : ledge.bank;
                ledge.bank-=Number(item.amount);
                ledge.cash+=Number(item.amount);
            }else if(item.to=='cash' && item.from == 'cash'){
                ledge.cash+=Number(item.amount);
            }else if(item.to=='bank' && item.from == 'bank'){
                ledge.bank+=Number(item.amount);
            }else if(item.to=='other' && item.from == 'cash'){
                ledge.cash-=Number(item.amount);
            }else if(item.to=='other' && item.from == 'bank'){
                ledge.bank-=Number(item.amount);
            }
        }
    }
    SetLedgers(ledg:Ledger[]){
        this.ledges=ledg;
    }
    GetCurrentDate():MyDate{
        var cDate:MyDate={month:0, day:0, year:0};
        var dateParts=(new Date().toLocaleDateString()).split("/");
        cDate.month=+(dateParts[0]);
        cDate.day=+(dateParts[1]);
        cDate.year=+(dateParts[2]);
        return cDate;
    }
}
@Injectable()
export class UserInfo{
    public selectedLedger:Ledger = null;
    constructor(private filter:Filter){
    }
    SetSelectedLedger(ledg){
        this.selectedLedger=ledg;
    }
    AddTransaction(trans:Transactions){
        this.selectedLedger.transactions.push(trans);
    }
    RemoveTransaction(trans:Transactions, index:number){
        this.selectedLedger.transactions.splice(index, 1);
    }
    GetTransactionLength(){
        return this.selectedLedger.transactions.length;
    }
    FilterTransactions(trans:Transactions[]){
        var temp:Transactions[]=this.filter.Filter(trans, 1);
    }

}
