"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComputeRuleset = (function () {
    function ComputeRuleset() {
    }
    ComputeRuleset.getAttributeTypeMap = function () {
        return ComputeRuleset.attributeTypeMap;
    };
    ComputeRuleset.discriminator = undefined;
    ComputeRuleset.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "client",
            "baseName": "client",
            "type": "string"
        },
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
            "name": "version",
            "baseName": "version",
            "type": "string"
        },
        {
            "name": "build",
            "baseName": "build",
            "type": "number"
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
            "name": "_package",
            "baseName": "package",
            "type": "string"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "boolean"
        },
        {
            "name": "stateless",
            "baseName": "stateless",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "modified",
            "baseName": "modified",
            "type": "Date"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "imports",
            "baseName": "imports",
            "type": "Array<string>"
        },
        {
            "name": "globals",
            "baseName": "globals",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "types",
            "baseName": "types",
            "type": "Array<RuleType>"
        }
    ];
    return ComputeRuleset;
}());
exports.ComputeRuleset = ComputeRuleset;
//# sourceMappingURL=computeRuleset.js.map