"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExternalSource = (function () {
    function ExternalSource() {
    }
    ExternalSource.getAttributeTypeMap = function () {
        return ExternalSource.attributeTypeMap;
    };
    ExternalSource.discriminator = undefined;
    ExternalSource.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "client",
            "baseName": "client",
            "type": "string"
        }
    ];
    return ExternalSource;
}());
exports.ExternalSource = ExternalSource;
//# sourceMappingURL=externalSource.js.map