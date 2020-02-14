"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OperationRequest = (function () {
    function OperationRequest() {
    }
    OperationRequest.getAttributeTypeMap = function () {
        return OperationRequest.attributeTypeMap;
    };
    OperationRequest.discriminator = undefined;
    OperationRequest.attributeTypeMap = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "{ [key: string]: object; }"
        }
    ];
    return OperationRequest;
}());
exports.OperationRequest = OperationRequest;
//# sourceMappingURL=operationRequest.js.map