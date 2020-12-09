"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpecialEditionCD_1 = require("./SpecialEditionCD");
var CD_1 = require("./CD");
var InternationalCD_1 = require("./InternationalCD");
//dynamic method dispatching
var cd = new SpecialEditionCD_1.SpecialEditionCD(1, 'Spider Man Return', 'VR');
console.log(cd.displayCDDetails());
cd = new CD_1.CD(2, 'Game Of Throne');
console.log(cd.displayCDDetails());
cd = new InternationalCD_1.InternationalCD(3, 'Spider Man 3', 'French');
console.log(cd.displayCDDetails());
