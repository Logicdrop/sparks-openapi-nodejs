"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UpdateRulesetResponse = (function () {
    function UpdateRulesetResponse() {
    }
    UpdateRulesetResponse.getAttributeTypeMap = function () {
        return UpdateRulesetResponse.attributeTypeMap;
    };
    UpdateRulesetResponse.discriminator = undefined;
    UpdateRulesetResponse.attributeTypeMap = [
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
            "name": "records",
            "baseName": "records",
            "type": "number"
        },
        {
            "name": "filenames",
            "baseName": "filenames",
            "type": "Array<string>"
        }
    ];
    return UpdateRulesetResponse;
}());
exports.UpdateRulesetResponse = UpdateRulesetResponse;
//# sourceMappingURL=updateRulesetResponse.js.map