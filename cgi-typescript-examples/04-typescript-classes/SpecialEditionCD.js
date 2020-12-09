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
var SpecialEditionCD = /** @class */ (function (_super) {
    __extends(SpecialEditionCD, _super);
    function SpecialEditionCD(_cdId, _cdName, features) {
        var _this = _super.call(this, _cdId, _cdName) || this;
        _this.features = features;
        return _this;
    }
    SpecialEditionCD.prototype.displayCDDetails = function () {
        return _super.prototype.displayCDDetails.call(this) + " Features: " + this.features;
    };
    return SpecialEditionCD;
}(CD_1.CD));
exports.SpecialEditionCD = SpecialEditionCD;
