"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropertyDefinition = (function () {
    function PropertyDefinition() {
    }
    PropertyDefinition.getAttributeTypeMap = function () {
        return PropertyDefinition.attributeTypeMap;
    };
    PropertyDefinition.discriminator = undefined;
    PropertyDefinition.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PropertyDefinition.TypeEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "boolean"
        }
    ];
    return PropertyDefinition;
}());
exports.PropertyDefinition = PropertyDefinition;
(function (PropertyDefinition) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["String"] = 'String'] = "String";
        TypeEnum[TypeEnum["Integer"] = 'Integer'] = "Integer";
        TypeEnum[TypeEnum["Double"] = 'Double'] = "Double";
        TypeEnum[TypeEnum["Set"] = 'Set'] = "Set";
        TypeEnum[TypeEnum["List"] = 'List'] = "List";
        TypeEnum[TypeEnum["Map"] = 'Map'] = "Map";
    })(TypeEnum = PropertyDefinition.TypeEnum || (PropertyDefinition.TypeEnum = {}));
})(PropertyDefinition = exports.PropertyDefinition || (exports.PropertyDefinition = {}));
exports.PropertyDefinition = PropertyDefinition;
//# sourceMappingURL=propertyDefinition.js.map