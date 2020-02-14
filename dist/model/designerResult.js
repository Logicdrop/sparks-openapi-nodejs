"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DesignerResult = (function () {
    function DesignerResult() {
    }
    DesignerResult.getAttributeTypeMap = function () {
        return DesignerResult.attributeTypeMap;
    };
    DesignerResult.discriminator = undefined;
    DesignerResult.attributeTypeMap = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "activations",
            "baseName": "activations",
            "type": "number"
        },
        {
            "name": "exception",
            "baseName": "exception",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "assertions",
            "baseName": "assertions",
            "type": "Array<Assertion>"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "dictionary",
            "baseName": "dictionary",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<string>"
        },
        {
            "name": "matches",
            "baseName": "matches",
            "type": "Array<string>"
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<DesignerEvent>"
        }
    ];
    return DesignerResult;
}());
exports.DesignerResult = DesignerResult;
//# sourceMappingURL=designerResult.js.map