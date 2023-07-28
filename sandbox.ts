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


//explicit types

let fName:string
fName="ali"

let age:number
age=20

let temp:string | number
temp=13
//temp=true

let array1:number[]=[]
array1.push(12)
//array1[0]="WW"
array1[0]=13

let arrayMix:(number|string|boolean)[]=[]
arrayMix[0]="ali"
arrayMix[1]=false

let personOne:object
personOne={
    name:"ali",
    age:11
}

let personTwo:{
    name:string,
    age:number,
    isMale:boolean
}