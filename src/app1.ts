import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { Hasformatter } from "./interfaces/Hasformatter";
// The DOM $ Type Casting
// DOM = Document Object Models


const anchor=document.querySelector("a")!
// ! das heißt, wie sind sicher dass,a tag im unser document gibt
console.log(anchor.href);


const form=document.querySelector("form")!
console.log(form.children);

const aa=document.querySelector(".new-item-form") as HTMLElement
console.log(aa);

const type = document.querySelector("#type") as HTMLSelectElement
const tofrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener("submit",(e:Event)=>{
    e.preventDefault()

    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
    
})
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

let invOne=new Invoice("ali","work to web site",290)
let invTwo=new Invoice("sina","cover",300)

console.log(invOne);
console.log(invTwo);
console.log(invOne.format());
console.log(invTwo.format());

let invoices: Invoice []=[]
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices);

invOne.client="sahar"
// invOne.details="ssss" //das geht nicht da, details hast acess type auf privat
// invOne.amount=444     //das geht nicht da, amount hast acess type auf readonly

//####################################################
//Modules
//Ein Modulsystem in TypeScript hilft uns, unseren Code besser zu organisieren, so wie man Dinge in verschiedene Schubladen legt.
// Für Modules zu verwenden, sollen wir :
//1: in tsconfig =>  "module": "es2015", 
//                   "target": "es6",  
//2: im HTML datei sollen wir type="module" hinzufügen
//   <script type="module" src='./sandbox.js'></script>

//#####################################################
//Interfaces
// Klassen (Classes) sind für Struktur und Verhalten. Sie können Eigenschaften und Methoden haben und können Instanzen erstellen.
// Schnittstellen (Interfaces) sind nur für Struktur. Sie definieren, wie Daten aussehen sollten, aber haben keine Implementierung von Methoden oder Eigenschaften.

interface isPerson{
    name:string;
    age:number;
    speak(a:string):void;
    spend(a:number) : number
}

let me : isPerson ={
    name:"ali",
    age:22,
    speak(text:string){
        console.log(text);
        
    },
    spend(amount:number){
        console.log("I spend",amount);
        return amount
        
    }
}

console.log(me);

const greeting=(person:isPerson)=>{
    console.log("hallo",person.name);
    
}

greeting(me)

//#######################################################
//Classes with Interfaces

let docOne:Hasformatter
let docTwo:Hasformatter

docOne=new Invoice("ali","work to web site",290)
docTwo=new Payment("sina","cover",300)

let docs:Hasformatter[]=[]
docs.push(docOne)
docs.push(docTwo)
console.log(docs);

//################################################
//Gerenics

// const UID=(obj:object)=>{
const UID=<T extends object>(obj:T)=>{
// این خط یعنی همه چیز را دریافت کن ولی فقط از نوع آبجکت باشد ولی هر آبجکتی که میخواهد باشد
    let randomNum=Math.floor(Math.random()*100)
    return {...obj,randomNum}
}

const docThree=UID({name:"elham",age:45})
console.log(docThree);
console.log(docThree.name);

// another example for interface with generic

interface Resource <T> {
    uid:number;
    resourcerName:string;
    data:T
}

const docEins:Resource <object> ={
    uid:22,
    resourcerName:"sara",
    data:{name:"ddddd"}
}

console.log(docEins.data);

//############################################################
//Enum

interface Resource2 <T> {
    uid:number;
    resourcerType:number;
    data:T
}

enum ResourcerType {PERSON,BOOK,VIDEO}

const docZwei:Resource2 <object> ={
    uid:1,
    // resourcerType:1,
    resourcerType:ResourcerType.PERSON,
    data:{name:"ali"}
}

const docDrei:Resource2 <object> ={
    uid:2,
    //resourcerType:2,
    resourcerType:ResourcerType.BOOK,
    data:{teile:"welt"}
}

console.log(docZwei,docDrei);



