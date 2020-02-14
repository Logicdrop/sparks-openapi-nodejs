"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Template = (function () {
    function Template() {
    }
    Template.getAttributeTypeMap = function () {
        return Template.attributeTypeMap;
    };
    Template.discriminator = undefined;
    Template.attributeTypeMap = [
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
            "name": "template",
            "baseName": "template",
            "type": "string"
        }
    ];
    return Template;
}());
exports.Template = Template;
//# sourceMappingURL=template.js.map