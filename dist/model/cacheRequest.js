"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CacheRequest = (function () {
    function CacheRequest() {
    }
    CacheRequest.getAttributeTypeMap = function () {
        return CacheRequest.attributeTypeMap;
    };
    CacheRequest.discriminator = undefined;
    CacheRequest.attributeTypeMap = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "CacheRequestValue"
        }
    ];
    return CacheRequest;
}());
exports.CacheRequest = CacheRequest;
//# sourceMappingURL=cacheRequest.js.map