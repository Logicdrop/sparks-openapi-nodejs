"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DesignerOptions = (function () {
    function DesignerOptions() {
    }
    DesignerOptions.getAttributeTypeMap = function () {
        return DesignerOptions.attributeTypeMap;
    };
    DesignerOptions.discriminator = undefined;
    DesignerOptions.attributeTypeMap = [
        {
            "name": "debug",
            "baseName": "debug",
            "type": "boolean"
        },
        {
            "name": "threshold",
            "baseName": "threshold",
            "type": "number"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "boolean"
        },
        {
            "name": "tracing",
            "baseName": "tracing",
            "type": "boolean"
        },
        {
            "name": "expand",
            "baseName": "expand",
            "type": "boolean"
        },
        {
            "name": "dictionary",
            "baseName": "dictionary",
            "type": "boolean"
        }
    ];
    return DesignerOptions;
}());
exports.DesignerOptions = DesignerOptions;
//# sourceMappingURL=designerOptions.js.map