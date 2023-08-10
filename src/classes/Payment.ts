import { Hasformatter } from "../interfaces/Hasformatter";

export class Payment implements Hasformatter {
   
    constructor(
        public seller:string,
        private details:string,
        readonly amount:number
    ){}

    format(){
        return `${this.seller} creditor  ${this.amount} for ${this.details} `
    }

   
}