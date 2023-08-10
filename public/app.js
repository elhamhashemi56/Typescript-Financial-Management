import { Invoice } from "./classes/Invoice.js";
import { ListTamplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector("form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTamplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valuesTuples;
    valuesTuples = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "bill") {
        // doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber)
        //Alternative mit Tuples
        doc = new Invoice(...valuesTuples);
    }
    else {
        //doc=new Payment(tofrom.value,details.value,amount.valueAsNumber)
        doc = new Payment(...valuesTuples);
    }
    list.render(doc, type.value, "end");
    //    console.log(doc.format());
});
