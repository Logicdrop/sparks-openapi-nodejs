"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScaffoldRequest = (function () {
    function ScaffoldRequest() {
    }
    ScaffoldRequest.getAttributeTypeMap = function () {
        return ScaffoldRequest.attributeTypeMap;
    };
    ScaffoldRequest.discriminator = undefined;
    ScaffoldRequest.attributeTypeMap = [
        {
            "name": "template",
            "baseName": "template",
            "type": "string"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        }
    ];
    return ScaffoldRequest;
}());
exports.ScaffoldRequest = ScaffoldRequest;
//# sourceMappingURL=scaffoldRequest.js.map