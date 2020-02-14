"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UploadResponse = (function () {
    function UploadResponse() {
    }
    UploadResponse.getAttributeTypeMap = function () {
        return UploadResponse.attributeTypeMap;
    };
    UploadResponse.discriminator = undefined;
    UploadResponse.attributeTypeMap = [
        {
            "name": "project",
            "baseName": "project",
            "type": "string"
        },
        {
            "name": "artifact",
            "baseName": "artifact",
            "type": "string"
        },
        {
            "name": "records",
            "baseName": "records",
            "type": "number"
        },
        {
            "name": "filenames",
            "baseName": "filenames",
            "type": "Array<string>"
        }
    ];
    return UploadResponse;
}());
exports.UploadResponse = UploadResponse;
//# sourceMappingURL=uploadResponse.js.map