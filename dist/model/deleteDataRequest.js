"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeleteDataRequest = (function () {
    function DeleteDataRequest() {
    }
    DeleteDataRequest.getAttributeTypeMap = function () {
        return DeleteDataRequest.attributeTypeMap;
    };
    DeleteDataRequest.discriminator = undefined;
    DeleteDataRequest.attributeTypeMap = [
        {
            "name": "ids",
            "baseName": "ids",
            "type": "Array<string>"
        },
        {
            "name": "purge",
            "baseName": "purge",
            "type": "boolean"
        }
    ];
    return DeleteDataRequest;
}());
exports.DeleteDataRequest = DeleteDataRequest;
//# sourceMappingURL=deleteDataRequest.js.map