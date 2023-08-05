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

//type of any

let name1:any
let age1:any

name1=25
age1="ali"

let mixed:any[]=[]
mixed.push("ali")
mixed.push(3)

console.log(mixed);

// Functions Basic

let greet:Function 
greet=(fName:string)=>{
    console.log("hello",fName);
    
}

greet("elham")

let add=(a:number,b:number, c=0):number=>{
    return a+b
}

console.log(add(12,5));
// c=0 : das heißt, 3the Argument kann sein aber nicht muss 
add(3,4,6)

// Type Aliases

type s= string
type n= number
type sn= string | number
type snb= string | number | boolean
type arrayType=(sn)
type objectType={
    name:string,
    age:number
}


let fName3:s
fName3="ali"
console.log(fName3);

let array2:(sn)[]=[]
let array3:arrayType[]=[]
array2[1]=45
array3.push("salam")
console.log(array3);

let user:objectType
user={name:"ali",age:23}
user.name="hasan"


let sayHello=(fName:s , age:n)=>{
    console.log(`Hallo ${fName}. du bist ${age} years old.`);
    
}
sayHello("Lili",22)


let greet2=(user:objectType)=>{
    console.log(`hello ${user.name}`);
    
}

greet2({name:"sara",age:30})



