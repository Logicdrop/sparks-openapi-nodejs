"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuerySource = (function () {
    function QuerySource() {
    }
    QuerySource.getAttributeTypeMap = function () {
        return QuerySource.attributeTypeMap;
    };
    QuerySource.discriminator = undefined;
    QuerySource.attributeTypeMap = [
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<QueryParameter>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "ignoreNulls",
            "baseName": "ignoreNulls",
            "type": "boolean"
        },
        {
            "name": "ignoreCase",
            "baseName": "ignoreCase",
            "type": "boolean"
        },
        {
            "name": "debug",
            "baseName": "debug",
            "type": "boolean"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "exclude",
            "baseName": "exclude",
            "type": "boolean"
        },
        {
            "name": "expects",
            "baseName": "expects",
            "type": "string"
        },
        {
            "name": "projections",
            "baseName": "projections",
            "type": "Array<string>"
        },
        {
            "name": "ordering",
            "baseName": "ordering",
            "type": "Array<OrderedQueryField>"
        },
        {
            "name": "criteria",
            "baseName": "criteria",
            "type": "Array<CriteriaQueryFieldObject>"
        }
    ];
    return QuerySource;
}());
exports.QuerySource = QuerySource;
//# sourceMappingURL=querySource.js.map