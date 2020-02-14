"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IdentityApplication = (function () {
    function IdentityApplication() {
    }
    IdentityApplication.getAttributeTypeMap = function () {
        return IdentityApplication.attributeTypeMap;
    };
    IdentityApplication.discriminator = undefined;
    IdentityApplication.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<string>"
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "string"
        },
        {
            "name": "allowedOrigins",
            "baseName": "allowedOrigins",
            "type": "Array<string>"
        }
    ];
    return IdentityApplication;
}());
exports.IdentityApplication = IdentityApplication;
//# sourceMappingURL=identityApplication.js.map