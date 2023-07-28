const chara="elham"
console.log("name",chara);

const inputs=document.querySelectorAll("input")
console.log("inputs",inputs);

inputs.forEach(item=>{
    console.log("item",item);
    
})

const circ=(diameter:number)=>{
    return diameter * Math.PI
}

console.log(circ(1))

//Array

let names=["hanna","ali","sina"]

//names=20
// names[1]=23
// names.push(35)

names[0]="anna"
names.push("sara")

//objekts

let person={
    name:"Ali",
    age:21,
    isMale:true
}


// person.name=33
// person.nam="shiva"

person.name="sara"
console.log(person);
