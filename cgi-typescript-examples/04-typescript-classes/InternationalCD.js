"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CD_1 = require("./CD");
var InternationalCD = /** @class */ (function (_super) {
    __extends(InternationalCD, _super);
    function InternationalCD(_cdId, _cdName, _language) {
        var _this = _super.call(this, _cdId, _cdName) || this;
        _this._language = _language;
        return _this;
    }
    Object.defineProperty(InternationalCD.prototype, "language", {
        get: function () {
            return this._language;
        },
        set: function (value) {
            this._language = value;
        },
        enumerable: true,
        configurable: true
    });
    //method over-ridding
    InternationalCD.prototype.displayCDDetails = function () {
        return _super.prototype.displayCDDetails.call(this) + "Language is: " + this._language;
    };
    return InternationalCD;
}(CD_1.CD));
exports.InternationalCD = InternationalCD;
