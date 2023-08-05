"use strict";
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
