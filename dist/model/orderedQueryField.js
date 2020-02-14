"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderedQueryField = (function () {
    function OrderedQueryField() {
    }
    OrderedQueryField.getAttributeTypeMap = function () {
        return OrderedQueryField.attributeTypeMap;
    };
    OrderedQueryField.discriminator = undefined;
    OrderedQueryField.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "descending",
            "baseName": "descending",
            "type": "boolean"
        }
    ];
    return OrderedQueryField;
}());
exports.OrderedQueryField = OrderedQueryField;
//# sourceMappingURL=orderedQueryField.js.map