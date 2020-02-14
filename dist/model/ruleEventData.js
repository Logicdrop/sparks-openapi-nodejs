"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RuleEventData = (function () {
    function RuleEventData() {
    }
    RuleEventData.getAttributeTypeMap = function () {
        return RuleEventData.attributeTypeMap;
    };
    RuleEventData.discriminator = undefined;
    RuleEventData.attributeTypeMap = [
        {
            "name": "fact",
            "baseName": "fact",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "object"
        }
    ];
    return RuleEventData;
}());
exports.RuleEventData = RuleEventData;
//# sourceMappingURL=ruleEventData.js.map