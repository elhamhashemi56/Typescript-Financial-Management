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

class Invoice {
    client: string;
    details: string;
    amount: number;
    
    constructor (c:string , d:string , a:number){
        this.client=c;
        this.details=d;
        this.amount=a;
    }

    format(){
        return `${this.client} owes ${this.amount} for ${this.details} `
    }

   
}

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


