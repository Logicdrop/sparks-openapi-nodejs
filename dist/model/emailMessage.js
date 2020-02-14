"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailMessage = (function () {
    function EmailMessage() {
    }
    EmailMessage.getAttributeTypeMap = function () {
        return EmailMessage.attributeTypeMap;
    };
    EmailMessage.discriminator = undefined;
    EmailMessage.attributeTypeMap = [
        {
            "name": "project",
            "baseName": "project",
            "type": "string"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "string"
        },
        {
            "name": "replyTo",
            "baseName": "replyTo",
            "type": "string"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<string>"
        },
        {
            "name": "cc",
            "baseName": "cc",
            "type": "Array<string>"
        },
        {
            "name": "bcc",
            "baseName": "bcc",
            "type": "Array<string>"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "{ [key: string]: string; }"
        }
    ];
    return EmailMessage;
}());
exports.EmailMessage = EmailMessage;
//# sourceMappingURL=emailMessage.js.map