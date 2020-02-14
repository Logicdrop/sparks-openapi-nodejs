"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IdentityUser = (function () {
    function IdentityUser() {
    }
    IdentityUser.getAttributeTypeMap = function () {
        return IdentityUser.attributeTypeMap;
    };
    IdentityUser.discriminator = undefined;
    IdentityUser.attributeTypeMap = [
        {
            "name": "subscriberId",
            "baseName": "subscriberId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "picture",
            "baseName": "picture",
            "type": "string"
        },
        {
            "name": "verified",
            "baseName": "verified",
            "type": "boolean"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "{ [key: string]: object; }"
        }
    ];
    return IdentityUser;
}());
exports.IdentityUser = IdentityUser;
//# sourceMappingURL=identityUser.js.map