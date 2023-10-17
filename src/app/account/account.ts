import { Transaction } from "./Transaction";

export class Account{
    constructor(id:number,contact:number,name:string,
        adress: string,email:string,password:number,balance:number, transactions:Transaction[],loggedIn:boolean){
        this.id=id;
        this.contact=contact;
        this.name=name;
        this.adress=adress;
        this.password=password;
        this.balance=balance;
        this.email=email;
        this.transactions=transactions;
       this.loggedIn=loggedIn
    }
    id:number
    contact:number;
    name:string;
    adress:string;
    email:string;
    password:number;
    balance:number;
    loggedIn:boolean;
    transactions:Transaction[];
 }