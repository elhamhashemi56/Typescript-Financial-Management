import { Invoice } from "./classes/Invoice.js";
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
