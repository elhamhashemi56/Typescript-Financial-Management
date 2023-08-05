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
//##############################################################
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
//##############################################################
//type of any
let name1;
let age1;
name1 = 25;
age1 = "ali";
let mixed = [];
mixed.push("ali");
mixed.push(3);
console.log(mixed);
//##############################################################
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
let fName3;
fName3 = "ali";
console.log(fName3);
let array2 = [];
let array3 = [];
array2[1] = 45;
array3.push("salam");
console.log(array3);
let user;
user = { name: "ali", age: 23 };
user.name = "hasan";
let sayHello = (fName, age) => {
    console.log(`Hallo ${fName}. du bist ${age} years old.`);
};
sayHello("Lili", 22);
let greet2 = (user) => {
    console.log(`hello ${user.name}`);
};
greet2({ name: "sara", age: 30 });
//##############################################################
//Function Signatures
let greet3;
greet3 = (name, age) => {
    console.log("my name ist", name, "und my age ist:", age);
};
greet3("Elham", 46);
let calc;
calc = (num1, num2, action) => {
    if (action === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
console.log(calc(6, 3, "add"));
//let person2:(obj:{name:s,age:n})=> void
let person2;
person2 = (obj) => {
    console.log("my name is:", obj.name);
};
person2({ name: "sasan", age: 11 });
//##############################################################
