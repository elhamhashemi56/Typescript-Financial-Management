"use strict";
const chara = "elham";
console.log("name", chara);
const inputs = document.querySelectorAll("input");
console.log("inputs", inputs);
inputs.forEach(item => {
    console.log("item", item);
});
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(1));
//Array
let names = ["hanna", "ali", "sina"];
//names=20
// names[1]=23
// names.push(35)
names[0] = "anna";
names.push("sara");
//objekts
let person = {
    name: "Ali",
    age: 21,
    isMale: true
};
// person.name=33
// person.nam="shiva"
person.name = "sara";
console.log(person);
//explicit types
let fName;
fName = "ali";
let age;
age = 20;
let temp;
temp = 13;
//temp=true
let array1 = [];
array1.push(12);
//array1[0]="WW"
array1[0] = 13;
let arrayMix = [];
arrayMix[0] = "ali";
arrayMix[1] = false;
let personOne;
personOne = {
    name: "ali",
    age: 11
};
let personTwo;
//type of any
let name1;
let age1;
name1 = 25;
age1 = "ali";
let mixed = [];
mixed.push("ali");
mixed.push(3);
console.log(mixed);
// Functions Basic
let greet;
greet = (fName) => {
    console.log("hello", fName);
};
greet("elham");
let add = (a, b, c = 0) => {
    return a + b;
};
console.log(add(12, 5));
// c=0 : das heißt, 3the Argument kann sein aber nicht muss 
add(3, 4, 6);
