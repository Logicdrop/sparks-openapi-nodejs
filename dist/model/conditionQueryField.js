"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var criteriaQueryField_1 = require("./criteriaQueryField");
var ConditionQueryField = (function (_super) {
    __extends(ConditionQueryField, _super);
    function ConditionQueryField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConditionQueryField.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ConditionQueryField.attributeTypeMap);
    };
    ConditionQueryField.discriminator = undefined;
    ConditionQueryField.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "object"
        }
    ];
    return ConditionQueryField;
}(criteriaQueryField_1.CriteriaQueryField));
exports.ConditionQueryField = ConditionQueryField;
//# sourceMappingURL=conditionQueryField.js.map