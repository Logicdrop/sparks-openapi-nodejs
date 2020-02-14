"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IdentityMessage = (function () {
    function IdentityMessage() {
    }
    IdentityMessage.getAttributeTypeMap = function () {
        return IdentityMessage.attributeTypeMap;
    };
    IdentityMessage.discriminator = undefined;
    IdentityMessage.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "object"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }
    ];
    return IdentityMessage;
}());
exports.IdentityMessage = IdentityMessage;
//# sourceMappingURL=identityMessage.js.map