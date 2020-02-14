"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RuleType = (function () {
    function RuleType() {
    }
    RuleType.getAttributeTypeMap = function () {
        return RuleType.attributeTypeMap;
    };
    RuleType.discriminator = undefined;
    RuleType.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<PropertyDefinition>"
        }
    ];
    return RuleType;
}());
exports.RuleType = RuleType;
//# sourceMappingURL=ruleType.js.map