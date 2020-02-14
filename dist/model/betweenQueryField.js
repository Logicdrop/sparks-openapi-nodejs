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
var BetweenQueryField = (function (_super) {
    __extends(BetweenQueryField, _super);
    function BetweenQueryField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BetweenQueryField.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(BetweenQueryField.attributeTypeMap);
    };
    BetweenQueryField.discriminator = undefined;
    BetweenQueryField.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "object"
        },
        {
            "name": "max",
            "baseName": "max",
            "type": "object"
        }
    ];
    return BetweenQueryField;
}(criteriaQueryField_1.CriteriaQueryField));
exports.BetweenQueryField = BetweenQueryField;
//# sourceMappingURL=betweenQueryField.js.map