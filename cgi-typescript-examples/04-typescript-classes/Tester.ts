import {SpecialEditionCD} from "./SpecialEditionCD";
import {CD} from "./CD";
import {InternationalCD} from "./InternationalCD";
//dynamic method dispatching
let cd: CD =new SpecialEditionCD(1,'Spider Man Return','VR');
console.log(cd.displayCDDetails());
//will show compilation error because sayHi is not available in CD class/overridden
//console.log(cd.sayHi());
cd=new CD(2,'Game Of Throne');
console.log(cd.displayCDDetails());
cd=new InternationalCD(3,'Spider Man 3 ','French');
console.log(cd.displayCDDetails());
