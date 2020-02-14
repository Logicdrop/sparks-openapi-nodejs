"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UpdateArtifactRequest = (function () {
    function UpdateArtifactRequest() {
    }
    UpdateArtifactRequest.getAttributeTypeMap = function () {
        return UpdateArtifactRequest.attributeTypeMap;
    };
    UpdateArtifactRequest.discriminator = undefined;
    UpdateArtifactRequest.attributeTypeMap = [
        {
            "name": "ids",
            "baseName": "ids",
            "type": "Array<string>"
        },
        {
            "name": "name",
            "baseName": "name",
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
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "{ [key: string]: object; }"
        }
    ];
    return UpdateArtifactRequest;
}());
exports.UpdateArtifactRequest = UpdateArtifactRequest;
//# sourceMappingURL=updateArtifactRequest.js.map