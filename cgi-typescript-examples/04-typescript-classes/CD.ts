export class CD {
    constructor(private _cdID: number, private _cdName: string,) {
    }

    get cdID(): number {
        return this._cdID;
    }

    set cdID(value: number) {
        this._cdID = value;
    }

    get cdName(): string {
        return this._cdName;
    }

    set cdName(value: string) {
        this._cdName = value;
    }

    public displayCDDetails(): string {
        return `${this._cdID} ${this._cdName}`;
    }

}
