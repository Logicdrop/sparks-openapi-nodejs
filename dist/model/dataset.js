"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dataset = (function () {
    function Dataset() {
    }
    Dataset.getAttributeTypeMap = function () {
        return Dataset.attributeTypeMap;
    };
    Dataset.discriminator = undefined;
    Dataset.attributeTypeMap = [
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
            "name": "client",
            "baseName": "client",
            "type": "string"
        },
        {
            "name": "project",
            "baseName": "project",
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
            "name": "build",
            "baseName": "build",
            "type": "number"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "external",
            "baseName": "external",
            "type": "boolean"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "modified",
            "baseName": "modified",
            "type": "Date"
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
            "type": "object"
        }
    ];
    return Dataset;
}());
exports.Dataset = Dataset;
//# sourceMappingURL=dataset.js.map