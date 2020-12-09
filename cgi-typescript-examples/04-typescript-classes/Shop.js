"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shop = /** @class */ (function () {
    function Shop(shopId, shopName) {
        this._shopId = shopId;
        this._shopName = shopName;
    }
    Object.defineProperty(Shop.prototype, "shopId", {
        get: function () {
            return this._shopId;
        },
        set: function (value) {
            this._shopId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shop.prototype, "shopName", {
        get: function () {
            return this._shopName;
        },
        set: function (value) {
            this._shopName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Shop;
}());
exports.Shop = Shop;
