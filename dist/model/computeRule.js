"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComputeRule = (function () {
    function ComputeRule() {
    }
    ComputeRule.getAttributeTypeMap = function () {
        return ComputeRule.attributeTypeMap;
    };
    ComputeRule.discriminator = undefined;
    ComputeRule.attributeTypeMap = [
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
            "name": "agendaGroup",
            "baseName": "agendaGroup",
            "type": "string"
        },
        {
            "name": "activationGroup",
            "baseName": "activationGroup",
            "type": "string"
        },
        {
            "name": "ruleflowGroup",
            "baseName": "ruleflowGroup",
            "type": "string"
        },
        {
            "name": "noLoop",
            "baseName": "noLoop",
            "type": "boolean"
        },
        {
            "name": "lockOnActive",
            "baseName": "lockOnActive",
            "type": "boolean"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "log",
            "baseName": "log",
            "type": "boolean"
        },
        {
            "name": "ruleset",
            "baseName": "ruleset",
            "type": "string"
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
            "name": "salience",
            "baseName": "salience",
            "type": "number"
        }
    ];
    return ComputeRule;
}());
exports.ComputeRule = ComputeRule;
//# sourceMappingURL=computeRule.js.map