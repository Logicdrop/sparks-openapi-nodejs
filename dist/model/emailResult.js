"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailResult = (function () {
    function EmailResult() {
    }
    EmailResult.getAttributeTypeMap = function () {
        return EmailResult.attributeTypeMap;
    };
    EmailResult.discriminator = undefined;
    EmailResult.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "sent",
            "baseName": "sent",
            "type": "Date"
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
    return EmailResult;
}());
exports.EmailResult = EmailResult;
//# sourceMappingURL=emailResult.js.map