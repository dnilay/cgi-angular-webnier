import {CD} from "./CD";
export class SpecialEditionCD extends CD
{
    constructor(_cdId:number,_cdName:string,private features:string) {

        super(_cdId,_cdName);
    }


    displayCDDetails(): string {
        return super.displayCDDetails()+" Features: "+this.features;
    }

    public sayHi():string
    {
        return "welcome to special edition cd";
    }
}
