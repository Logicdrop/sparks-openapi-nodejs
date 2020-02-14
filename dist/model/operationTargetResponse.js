"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OperationTargetResponse = (function () {
    function OperationTargetResponse() {
    }
    OperationTargetResponse.getAttributeTypeMap = function () {
        return OperationTargetResponse.attributeTypeMap;
    };
    OperationTargetResponse.discriminator = undefined;
    OperationTargetResponse.attributeTypeMap = [
        {
            "name": "origin",
            "baseName": "origin",
            "type": "string"
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        }
    ];
    return OperationTargetResponse;
}());
exports.OperationTargetResponse = OperationTargetResponse;
//# sourceMappingURL=operationTargetResponse.js.map