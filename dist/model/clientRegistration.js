"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientRegistration = (function () {
    function ClientRegistration() {
    }
    ClientRegistration.getAttributeTypeMap = function () {
        return ClientRegistration.attributeTypeMap;
    };
    ClientRegistration.discriminator = undefined;
    ClientRegistration.attributeTypeMap = [
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string"
        },
        {
            "name": "clientName",
            "baseName": "clientName",
            "type": "string"
        },
        {
            "name": "couponCode",
            "baseName": "couponCode",
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
            "name": "subscriberId",
            "baseName": "subscriberId",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "picture",
            "baseName": "picture",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "string"
        },
        {
            "name": "metaEmployees",
            "baseName": "metaEmployees",
            "type": "string"
        },
        {
            "name": "metaRole",
            "baseName": "metaRole",
            "type": "string"
        },
        {
            "name": "metaChallenge",
            "baseName": "metaChallenge",
            "type": "string"
        },
        {
            "name": "address1",
            "baseName": "address1",
            "type": "string"
        },
        {
            "name": "address2",
            "baseName": "address2",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "stripeCustomerId",
            "baseName": "stripeCustomerId",
            "type": "string"
        },
        {
            "name": "stripeSubscriptionId",
            "baseName": "stripeSubscriptionId",
            "type": "string"
        }
    ];
    return ClientRegistration;
}());
exports.ClientRegistration = ClientRegistration;
//# sourceMappingURL=clientRegistration.js.map