"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComputeOptions = (function () {
    function ComputeOptions() {
    }
    ComputeOptions.getAttributeTypeMap = function () {
        return ComputeOptions.attributeTypeMap;
    };
    ComputeOptions.discriminator = undefined;
    ComputeOptions.attributeTypeMap = [
        {
            "name": "debug",
            "baseName": "debug",
            "type": "boolean"
        },
        {
            "name": "threshold",
            "baseName": "threshold",
            "type": "number"
        }
    ];
    return ComputeOptions;
}());
exports.ComputeOptions = ComputeOptions;
//# sourceMappingURL=computeOptions.js.map