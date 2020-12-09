import {CD} from "./CD";

export class InternationalCD extends CD {
    constructor(_cdId: number, _cdName: string, private _language: string) {
        super(_cdId, _cdName);
    }
    get language(): string {
        return this._language;
    }

    set language(value: string) {
        this._language = value;
    }


    //method over-ridding
    displayCDDetails(): string {
        return super.displayCDDetails()+"Language is: "+this._language;
    }
}
