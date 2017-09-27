import {Ledger, Transactions} from './../objects/user';
export class Filter{
    constructor(){}
    Filter(trans:Transactions[], type:number):Transactions[]{
        switch(type){
            case 1:
                return this.FilterByDateAscending(trans);
            case 2:
                return this.FilterByID(trans, 2);
            case 3:
                return this.FilterByID(trans, 3);
        }
        return null;
    }
    FilterByDateAscending(trans:Transactions[]):Transactions[]{
        var nTrans:Transactions[]=[]; 
        nTrans = trans.sort((n1, n2)=>{
            if(n1.date.year > n2.date.year){
                if(n1.date.month > n2.date.month){
                    if(n1.date.day > n2.date.day){
                        return 1;
                    }
                    return -1;
                }
                return -1
            }
            return 0;
        });
        return nTrans;
    }
    FilterByID(trans:Transactions[], filterType:number):Transactions[]{
        var nTrans:Transactions[]=[]; 
        switch(filterType){
            case 2:
                    nTrans = trans.sort((n1, n2)=>{
                        if(n1.date.year > n2.date.year){
                            if(n1.date.month > n2.date.month){
                                if(n1.date.day > n2.date.day){
                                    return 1;
                                }
                                return -1;
                            }
                            return -1
                        }
                        return 0;
                    });
                break;
            case 3:
                    nTrans = trans.sort((n1, n2)=>{
                        if(n1.date.year < n2.date.year){
                            if(n1.date.month < n2.date.month){
                                if(n1.date.day < n2.date.day){
                                    return -1;
                                }
                                return 1;
                            }
                            return 1;
                        }
                        return 0;
                    });
                break;
        }
        return nTrans;
    }
}
class MyMath{
    static IsN1GreaterN2(n1:number, n2:number){
        return (n1 > n2) ? true : false;
    }
}