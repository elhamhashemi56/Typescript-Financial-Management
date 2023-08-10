import { Hasformatter } from "../interfaces/Hasformatter";

export class ListTamplate {
    constructor(private container:HTMLUListElement){}

    render(item:Hasformatter, headeing:string, pos:"start" | "end"){
      
        const li= document.createElement("li")
        const h4= document.createElement("h4")
        const p = document.createElement("p")

        h4.innerText=headeing
        li.append(h4)
        
        p.innerText=item.format()
        li.append(p)

        if(pos === "start"){
            this.container.prepend(li)
        }else{
            this.container.append(li)
        }
    }
     
}