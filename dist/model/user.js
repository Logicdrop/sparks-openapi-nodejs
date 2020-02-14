"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User() {
    }
    User.getAttributeTypeMap = function () {
        return User.attributeTypeMap;
    };
    User.discriminator = undefined;
    User.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "picture",
            "baseName": "picture",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "inviteCode",
            "baseName": "inviteCode",
            "type": "string"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<string>"
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "Array<string>"
        },
        {
            "name": "client",
            "baseName": "client",
            "type": "string"
        }
    ];
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map