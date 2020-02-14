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
var UserData = (function (_super) {
    __extends(UserData, _super);
    function UserData() {
    }
    UserData.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(UserData.attributeTypeMap);
    };
    UserData.discriminator = undefined;
    UserData.attributeTypeMap = [
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }
    ];
    return UserData;
}(null));
exports.UserData = UserData;
//# sourceMappingURL=userData.js.map