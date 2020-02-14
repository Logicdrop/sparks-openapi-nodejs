"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MultipartRequest = (function () {
    function MultipartRequest() {
    }
    MultipartRequest.getAttributeTypeMap = function () {
        return MultipartRequest.attributeTypeMap;
    };
    MultipartRequest.discriminator = undefined;
    MultipartRequest.attributeTypeMap = [
        {
            "name": "file",
            "baseName": "file",
            "type": "RequestFile"
        }
    ];
    return MultipartRequest;
}());
exports.MultipartRequest = MultipartRequest;
//# sourceMappingURL=multipartRequest.js.map