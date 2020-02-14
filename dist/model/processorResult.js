"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessorResult = (function () {
    function ProcessorResult() {
    }
    ProcessorResult.getAttributeTypeMap = function () {
        return ProcessorResult.attributeTypeMap;
    };
    ProcessorResult.discriminator = undefined;
    ProcessorResult.attributeTypeMap = [
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
            "name": "results",
            "baseName": "results",
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
        }
    ];
    return ProcessorResult;
}());
exports.ProcessorResult = ProcessorResult;
//# sourceMappingURL=processorResult.js.map