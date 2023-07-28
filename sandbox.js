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
