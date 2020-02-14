"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessorRequest = (function () {
    function ProcessorRequest() {
    }
    ProcessorRequest.getAttributeTypeMap = function () {
        return ProcessorRequest.attributeTypeMap;
    };
    ProcessorRequest.discriminator = undefined;
    ProcessorRequest.attributeTypeMap = [
        {
            "name": "project",
            "baseName": "project",
            "type": "string"
        },
        {
            "name": "ruleset",
            "baseName": "ruleset",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<{ [key: string]: object; }>"
        },
        {
            "name": "outputs",
            "baseName": "outputs",
            "type": "Array<string>"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "ComputeOptions"
        }
    ];
    return ProcessorRequest;
}());
exports.ProcessorRequest = ProcessorRequest;
//# sourceMappingURL=processorRequest.js.map