"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UpdateDataRequest = (function () {
    function UpdateDataRequest() {
    }
    UpdateDataRequest.getAttributeTypeMap = function () {
        return UpdateDataRequest.attributeTypeMap;
    };
    UpdateDataRequest.discriminator = undefined;
    UpdateDataRequest.attributeTypeMap = [
        {
            "name": "ids",
            "baseName": "ids",
            "type": "Array<string>"
        },
        {
            "name": "skipNulls",
            "baseName": "skipNulls",
            "type": "boolean"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "{ [key: string]: object; }"
        }
    ];
    return UpdateDataRequest;
}());
exports.UpdateDataRequest = UpdateDataRequest;
//# sourceMappingURL=updateDataRequest.js.map