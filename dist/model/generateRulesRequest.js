"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenerateRulesRequest = (function () {
    function GenerateRulesRequest() {
    }
    GenerateRulesRequest.getAttributeTypeMap = function () {
        return GenerateRulesRequest.attributeTypeMap;
    };
    GenerateRulesRequest.discriminator = undefined;
    GenerateRulesRequest.attributeTypeMap = [
        {
            "name": "ruleset",
            "baseName": "ruleset",
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
            "name": "content",
            "baseName": "content",
            "type": "boolean"
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<string>"
        }
    ];
    return GenerateRulesRequest;
}());
exports.GenerateRulesRequest = GenerateRulesRequest;
//# sourceMappingURL=generateRulesRequest.js.map