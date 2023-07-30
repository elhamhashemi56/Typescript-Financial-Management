var chara = "elham";
console.log("name", chara);
var inputs = document.querySelectorAll("input");
console.log("inputs", inputs);
inputs.forEach(function (item) {
    console.log("item", item);
});
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(1));
//Array
var names = ["hanna", "ali", "sina"];
//names=20
// names[1]=23
// names.push(35)
names[0] = "anna";
names.push("sara");
//objekts
var person = {
    name: "Ali",
    age: 21,
    isMale: true
};
// person.name=33
// person.nam="shiva"
person.name = "sara";
console.log(person);
//explicit types
var fName;
fName = "ali";
var age;
age = 20;
var temp;
temp = 13;
//temp=true
var array1 = [];
array1.push(12);
//array1[0]="WW"
array1[0] = 13;
var arrayMix = [];
arrayMix[0] = "ali";
arrayMix[1] = false;
var personOne;
personOne = {
    name: "ali",
    age: 11
};
var personTwo;
//type of any
var name1;
var age1;
name1 = 25;
age1 = "ali";
var mixed = [];
mixed.push("ali");
mixed.push(3);
