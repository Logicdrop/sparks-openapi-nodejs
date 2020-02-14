"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription = (function () {
    function Subscription() {
    }
    Subscription.getAttributeTypeMap = function () {
        return Subscription.attributeTypeMap;
    };
    Subscription.discriminator = undefined;
    Subscription.attributeTypeMap = [
        {
            "name": "paymentId",
            "baseName": "paymentId",
            "type": "string"
        },
        {
            "name": "productId",
            "baseName": "productId",
            "type": "string"
        },
        {
            "name": "term",
            "baseName": "term",
            "type": "Date"
        },
        {
            "name": "productName",
            "baseName": "productName",
            "type": "string"
        },
        {
            "name": "productTier",
            "baseName": "productTier",
            "type": "string"
        },
        {
            "name": "autoPay",
            "baseName": "autoPay",
            "type": "boolean"
        },
        {
            "name": "paymentAmount",
            "baseName": "paymentAmount",
            "type": "number"
        },
        {
            "name": "paymentTerm",
            "baseName": "paymentTerm",
            "type": "string"
        },
        {
            "name": "paymentCurrency",
            "baseName": "paymentCurrency",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "ccLast4",
            "baseName": "ccLast4",
            "type": "string"
        },
        {
            "name": "ccExpiration",
            "baseName": "ccExpiration",
            "type": "string"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
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
            "name": "contactPhone",
            "baseName": "contactPhone",
            "type": "string"
        },
        {
            "name": "contactEmail",
            "baseName": "contactEmail",
            "type": "string"
        },
        {
            "name": "modules",
            "baseName": "modules",
            "type": "Array<string>"
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "{ [key: string]: number; }"
        },
        {
            "name": "discounts",
            "baseName": "discounts",
            "type": "Array<SubscriptionDiscount>"
        }
    ];
    return Subscription;
}());
exports.Subscription = Subscription;
//# sourceMappingURL=subscription.js.map