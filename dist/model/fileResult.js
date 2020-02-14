"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileResult = (function () {
    function FileResult() {
    }
    FileResult.getAttributeTypeMap = function () {
        return FileResult.attributeTypeMap;
    };
    FileResult.discriminator = undefined;
    FileResult.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date"
        },
        {
            "name": "extension",
            "baseName": "extension",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "folders",
            "baseName": "folders",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        }
    ];
    return FileResult;
}());
exports.FileResult = FileResult;
//# sourceMappingURL=fileResult.js.map