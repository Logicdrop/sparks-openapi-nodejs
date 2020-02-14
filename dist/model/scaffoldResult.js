"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScaffoldResult = (function () {
    function ScaffoldResult() {
    }
    ScaffoldResult.getAttributeTypeMap = function () {
        return ScaffoldResult.attributeTypeMap;
    };
    ScaffoldResult.discriminator = undefined;
    ScaffoldResult.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<string>"
        }
    ];
    return ScaffoldResult;
}());
exports.ScaffoldResult = ScaffoldResult;
//# sourceMappingURL=scaffoldResult.js.map