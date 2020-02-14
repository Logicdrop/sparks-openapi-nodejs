"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueryExecuteRequest = (function () {
    function QueryExecuteRequest() {
    }
    QueryExecuteRequest.getAttributeTypeMap = function () {
        return QueryExecuteRequest.attributeTypeMap;
    };
    QueryExecuteRequest.discriminator = undefined;
    QueryExecuteRequest.attributeTypeMap = [
        {
            "name": "query",
            "baseName": "query",
            "type": "QuerySource"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "{ [key: string]: string; }"
        }
    ];
    return QueryExecuteRequest;
}());
exports.QueryExecuteRequest = QueryExecuteRequest;
//# sourceMappingURL=queryExecuteRequest.js.map