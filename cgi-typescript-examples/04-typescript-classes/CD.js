"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CD = /** @class */ (function () {
    function CD(_cdID, _cdName) {
        this._cdID = _cdID;
        this._cdName = _cdName;
    }
    Object.defineProperty(CD.prototype, "cdID", {
        get: function () {
            return this._cdID;
        },
        set: function (value) {
            this._cdID = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CD.prototype, "cdName", {
        get: function () {
            return this._cdName;
        },
        set: function (value) {
            this._cdName = value;
        },
        enumerable: true,
        configurable: true
    });
    CD.prototype.displayCDDetails = function () {
        return this._cdID + " " + this._cdName;
    };
    return CD;
}());
exports.CD = CD;
