import { Hasformatter } from "../interfaces/Hasformatter";

export class Invoice implements Hasformatter {
   
    constructor(
        public client:string,
        private details:string,
        readonly amount:number
    ){}

    format(){
        return `${this.client} owes ${this.amount} for ${this.details} `
    }

   
}