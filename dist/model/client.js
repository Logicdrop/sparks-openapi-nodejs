"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = (function () {
    function Client() {
    }
    Client.getAttributeTypeMap = function () {
        return Client.attributeTypeMap;
    };
    Client.discriminator = undefined;
    Client.attributeTypeMap = [
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
            "name": "configs",
            "baseName": "configs",
            "type": "{ [key: string]: ClientSettings; }"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "security",
            "baseName": "security",
            "type": "{ [key: string]: ClientSettings; }"
        },
        {
            "name": "subscriptions",
            "baseName": "subscriptions",
            "type": "Array<Subscription>"
        }
    ];
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map