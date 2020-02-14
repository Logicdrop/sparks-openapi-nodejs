"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DesignRulesRequest = (function () {
    function DesignRulesRequest() {
    }
    DesignRulesRequest.getAttributeTypeMap = function () {
        return DesignRulesRequest.attributeTypeMap;
    };
    DesignRulesRequest.discriminator = undefined;
    DesignRulesRequest.attributeTypeMap = [
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
            "type": "DesignerOptions"
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<string>"
        },
        {
            "name": "assertions",
            "baseName": "assertions",
            "type": "Array<Assertion>"
        }
    ];
    return DesignRulesRequest;
}());
exports.DesignRulesRequest = DesignRulesRequest;
//# sourceMappingURL=designRulesRequest.js.map