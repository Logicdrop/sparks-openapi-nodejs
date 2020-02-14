"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArtifactReference = (function () {
    function ArtifactReference() {
    }
    ArtifactReference.getAttributeTypeMap = function () {
        return ArtifactReference.attributeTypeMap;
    };
    ArtifactReference.discriminator = undefined;
    ArtifactReference.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "artifact",
            "baseName": "artifact",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        }
    ];
    return ArtifactReference;
}());
exports.ArtifactReference = ArtifactReference;
//# sourceMappingURL=artifactReference.js.map