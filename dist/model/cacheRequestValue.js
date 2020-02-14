"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CacheRequestValue = (function () {
    function CacheRequestValue() {
    }
    CacheRequestValue.getAttributeTypeMap = function () {
        return CacheRequestValue.attributeTypeMap;
    };
    CacheRequestValue.discriminator = undefined;
    CacheRequestValue.attributeTypeMap = [
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }
    ];
    return CacheRequestValue;
}());
exports.CacheRequestValue = CacheRequestValue;
//# sourceMappingURL=cacheRequestValue.js.map