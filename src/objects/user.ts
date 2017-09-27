import {MyDate} from './MyDate.object';

export class Ledger{
    id:number;
    title:string;
    cash:number;
    bank:number;
    transactions:Transactions[]
    isSelected:boolean;
    date:MyDate;
}

export class Transactions{
    id:number;
    description:string;
    amount:number;
    type:string;
    from:string;
    to:string;
    date:MyDate;
}
export class Users{
    user_id:number;
    username:string;
}
