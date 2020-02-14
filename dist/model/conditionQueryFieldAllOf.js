"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConditionQueryFieldAllOf = (function () {
    function ConditionQueryFieldAllOf() {
    }
    ConditionQueryFieldAllOf.getAttributeTypeMap = function () {
        return ConditionQueryFieldAllOf.attributeTypeMap;
    };
    ConditionQueryFieldAllOf.discriminator = undefined;
    ConditionQueryFieldAllOf.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "object"
        }
    ];
    return ConditionQueryFieldAllOf;
}());
exports.ConditionQueryFieldAllOf = ConditionQueryFieldAllOf;
//# sourceMappingURL=conditionQueryFieldAllOf.js.map