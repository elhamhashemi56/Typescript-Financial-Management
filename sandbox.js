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
