class Item
{

    private a:number;
    //this constructor will create three private variable and assign the value of local variable to it
    constructor(private _itemNumber: number, private _itemName: string, private _itemPrice: number) {


    }
    public displayDetails():string
    {
        return `${this._itemNumber} ${this._itemName} ${this._itemPrice}`;
    }


    get iNumber(): number {
        return this._itemNumber;
    }

    set iNumber(value: number) {
        this._itemNumber = value;
    }

    get iName(): string {
        return this._itemName;
    }

    set iName(value: string) {
        this._itemName = value;
    }

    get iPrice(): number {
        return this._itemPrice;
    }

    set iPrice(value: number) {
        this._itemPrice = value;
    }
}

let myItem = new Item(1,'PC',20000);
console.log(myItem.displayDetails());
//calling setter
myItem.iPrice=29000;
myItem.iNumber=2;
myItem.iName='Laptop';
//calling getter
console.log(myItem.iName);
console.log(myItem.iNumber);
console.log(myItem.iPrice);
this.a=300;
console.log(this.a);



