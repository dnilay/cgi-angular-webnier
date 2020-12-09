"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var Shop_1 = require("./Shop");
var theCustomer = new Customer_1.Customer('John', 'Doe');
console.log(theCustomer.firstName);
var myShop = new Shop_1.Shop(100, 'demo name');
console.log(myShop.shopName);
