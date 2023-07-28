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
