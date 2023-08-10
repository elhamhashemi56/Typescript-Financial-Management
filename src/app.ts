import { Invoice } from "./classes/Invoice.js";
import { ListTamplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { Hasformatter } from "./interfaces/Hasformatter";

const form=document.querySelector("form")!
const type = document.querySelector("#type") as HTMLSelectElement
const tofrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

const ul=document.querySelector("ul")!
const list=new ListTamplate(ul)

form.addEventListener("submit",(e:Event)=>{
    e.preventDefault()

    let valuesTuples:[string,string,number]
    valuesTuples=[tofrom.value,details.value,amount.valueAsNumber]

    let doc:Hasformatter
    if(type.value === "bill"){
        // doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber)
        //Alternative mit Tuples
        doc=new Invoice(...valuesTuples)
    }else{
        //doc=new Payment(tofrom.value,details.value,amount.valueAsNumber)
        doc=new Payment(...valuesTuples)
    }


    list.render(doc,type.value,"end")

//    console.log(doc.format());
   
    
})






