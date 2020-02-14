"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueryParameter = (function () {
    function QueryParameter() {
    }
    QueryParameter.getAttributeTypeMap = function () {
        return QueryParameter.attributeTypeMap;
    };
    QueryParameter.discriminator = undefined;
    QueryParameter.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "string"
        }
    ];
    return QueryParameter;
}());
exports.QueryParameter = QueryParameter;
//# sourceMappingURL=queryParameter.js.map