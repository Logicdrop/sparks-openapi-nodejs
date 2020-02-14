"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CriteriaQueryField = (function () {
    function CriteriaQueryField() {
    }
    CriteriaQueryField.getAttributeTypeMap = function () {
        return CriteriaQueryField.attributeTypeMap;
    };
    CriteriaQueryField.discriminator = "type";
    CriteriaQueryField.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }
    ];
    return CriteriaQueryField;
}());
exports.CriteriaQueryField = CriteriaQueryField;
//# sourceMappingURL=criteriaQueryField.js.map