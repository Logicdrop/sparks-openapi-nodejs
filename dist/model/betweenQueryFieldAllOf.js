"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BetweenQueryFieldAllOf = (function () {
    function BetweenQueryFieldAllOf() {
    }
    BetweenQueryFieldAllOf.getAttributeTypeMap = function () {
        return BetweenQueryFieldAllOf.attributeTypeMap;
    };
    BetweenQueryFieldAllOf.discriminator = undefined;
    BetweenQueryFieldAllOf.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "object"
        },
        {
            "name": "max",
            "baseName": "max",
            "type": "object"
        }
    ];
    return BetweenQueryFieldAllOf;
}());
exports.BetweenQueryFieldAllOf = BetweenQueryFieldAllOf;
//# sourceMappingURL=betweenQueryFieldAllOf.js.map