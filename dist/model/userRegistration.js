"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRegistration = (function () {
    function UserRegistration() {
    }
    UserRegistration.getAttributeTypeMap = function () {
        return UserRegistration.attributeTypeMap;
    };
    UserRegistration.discriminator = undefined;
    UserRegistration.attributeTypeMap = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "referrer",
            "baseName": "referrer",
            "type": "string"
        },
        {
            "name": "campaign",
            "baseName": "campaign",
            "type": "string"
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "string"
        }
    ];
    return UserRegistration;
}());
exports.UserRegistration = UserRegistration;
//# sourceMappingURL=userRegistration.js.map