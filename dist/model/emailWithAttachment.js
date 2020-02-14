"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailWithAttachment = (function () {
    function EmailWithAttachment() {
    }
    EmailWithAttachment.getAttributeTypeMap = function () {
        return EmailWithAttachment.attributeTypeMap;
    };
    EmailWithAttachment.discriminator = undefined;
    EmailWithAttachment.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "EmailMessage"
        },
        {
            "name": "attachment",
            "baseName": "attachment",
            "type": "RequestFile"
        }
    ];
    return EmailWithAttachment;
}());
exports.EmailWithAttachment = EmailWithAttachment;
//# sourceMappingURL=emailWithAttachment.js.map