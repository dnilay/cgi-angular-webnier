export class Shop
{
    private _shopId:number;
    private _shopName:string;

    constructor(shopId: number, shopName: string) {
        this._shopId = shopId;
        this._shopName = shopName;
    }


    get shopId(): number {
        return this._shopId;
    }

    set shopId(value: number) {
        this._shopId = value;
    }

    get shopName(): string {
        return this._shopName;
    }

    set shopName(value: string) {
        this._shopName = value;
    }
}
