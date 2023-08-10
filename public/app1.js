import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
// The DOM $ Type Casting
// DOM = Document Object Models
const anchor = document.querySelector("a");
// ! das heißt, wie sind sicher dass,a tag im unser document gibt
console.log(anchor.href);
const form = document.querySelector("form");
console.log(form.children);
const aa = document.querySelector(".new-item-form");
console.log(aa);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
//############################################
//Classes
//public - private - readonly
// class Invoice {
//     // client: string;
//     // details: string;
//     // amount: number;
//     // constructor (c:string , d:string , a:number){
//     //     this.client=c;
//     //     this.details=d;
//     //     this.amount=a;
//     // }
//     //das ist eine alternative für class create.wir können properties einfach im constractor definieren aber mussen with access type auch gleichzeitig definieren.
//     constructor(
//         public client:string,
//         private details:string,
//         readonly amount:number
//     ){}
//     format(){
//         return `${this.client} owes ${this.amount} for ${this.details} `
//     }
// }
let invOne = new Invoice("ali", "work to web site", 290);
let invTwo = new Invoice("sina", "cover", 300);
console.log(invOne);
console.log(invTwo);
console.log(invOne.format());
console.log(invTwo.format());
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invOne.client = "sahar";
let me = {
    name: "ali",
    age: 22,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spend", amount);
        return amount;
    }
};
console.log(me);
const greeting = (person) => {
    console.log("hallo", person.name);
};
greeting(me);
//#######################################################
//Classes with Interfaces
let docOne;
let docTwo;
docOne = new Invoice("ali", "work to web site", 290);
docTwo = new Payment("sina", "cover", 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
//################################################
//Gerenics
// const UID=(obj:object)=>{
const UID = (obj) => {
    // این خط یعنی همه چیز را دریافت کن ولی فقط از نوع آبجکت باشد ولی هر آبجکتی که میخواهد باشد
    let randomNum = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { randomNum });
};
const docThree = UID({ name: "elham", age: 45 });
console.log(docThree);
console.log(docThree.name);
const docEins = {
    uid: 22,
    resourcerName: "sara",
    data: { name: "ddddd" }
};
console.log(docEins.data);
var ResourcerType;
(function (ResourcerType) {
    ResourcerType[ResourcerType["PERSON"] = 0] = "PERSON";
    ResourcerType[ResourcerType["BOOK"] = 1] = "BOOK";
    ResourcerType[ResourcerType["VIDEO"] = 2] = "VIDEO";
})(ResourcerType || (ResourcerType = {}));
const docZwei = {
    uid: 1,
    // resourcerType:1,
    resourcerType: ResourcerType.PERSON,
    data: { name: "ali" }
};
const docDrei = {
    uid: 2,
    //resourcerType:2,
    resourcerType: ResourcerType.BOOK,
    data: { teile: "welt" }
};
console.log(docZwei, docDrei);
//##################################################
//Tuples
// bei Tuples sollen wir für jede index im array ein type definieren.
let arr = ["elham", 22, true];
arr[0] = 44;
arr = [33, "sara"];
let arrTup = ["ali", 33, false];
console.log(arrTup);
