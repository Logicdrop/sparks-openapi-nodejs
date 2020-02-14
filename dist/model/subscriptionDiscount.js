"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SubscriptionDiscount = (function () {
    function SubscriptionDiscount() {
    }
    SubscriptionDiscount.getAttributeTypeMap = function () {
        return SubscriptionDiscount.attributeTypeMap;
    };
    SubscriptionDiscount.discriminator = undefined;
    SubscriptionDiscount.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return SubscriptionDiscount;
}());
exports.SubscriptionDiscount = SubscriptionDiscount;
//# sourceMappingURL=subscriptionDiscount.js.map