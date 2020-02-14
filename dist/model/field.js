"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Field = (function () {
    function Field() {
    }
    Field.getAttributeTypeMap = function () {
        return Field.attributeTypeMap;
    };
    Field.discriminator = undefined;
    Field.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "display",
            "baseName": "display",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "defaultValue",
            "baseName": "defaultValue",
            "type": "object"
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Field.TypeEnum"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "Field.ModeEnum"
        },
        {
            "name": "mapping",
            "baseName": "mapping",
            "type": "string"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "number"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "boolean"
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "boolean"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "visible",
            "baseName": "visible",
            "type": "boolean"
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean"
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "number"
        },
        {
            "name": "max",
            "baseName": "max",
            "type": "number"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "children",
            "baseName": "children",
            "type": "Array<Field>"
        }
    ];
    return Field;
}());
exports.Field = Field;
(function (Field) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["STRING"] = 'STRING'] = "STRING";
        TypeEnum[TypeEnum["INTEGER"] = 'INTEGER'] = "INTEGER";
        TypeEnum[TypeEnum["DOUBLE"] = 'DOUBLE'] = "DOUBLE";
        TypeEnum[TypeEnum["DECIMAL"] = 'DECIMAL'] = "DECIMAL";
        TypeEnum[TypeEnum["BOOLEAN"] = 'BOOLEAN'] = "BOOLEAN";
        TypeEnum[TypeEnum["OBJECT"] = 'OBJECT'] = "OBJECT";
        TypeEnum[TypeEnum["DATE"] = 'DATE'] = "DATE";
        TypeEnum[TypeEnum["DATETIME"] = 'DATE_TIME'] = "DATETIME";
        TypeEnum[TypeEnum["TIME"] = 'TIME'] = "TIME";
        TypeEnum[TypeEnum["LIST"] = 'LIST'] = "LIST";
        TypeEnum[TypeEnum["SET"] = 'SET'] = "SET";
        TypeEnum[TypeEnum["MAP"] = 'MAP'] = "MAP";
    })(TypeEnum = Field.TypeEnum || (Field.TypeEnum = {}));
    var ModeEnum;
    (function (ModeEnum) {
        ModeEnum[ModeEnum["READONLY"] = 'READ_ONLY'] = "READONLY";
        ModeEnum[ModeEnum["READWRITE"] = 'READ_WRITE'] = "READWRITE";
        ModeEnum[ModeEnum["WRITEONLY"] = 'WRITE_ONLY'] = "WRITEONLY";
    })(ModeEnum = Field.ModeEnum || (Field.ModeEnum = {}));
})(Field = exports.Field || (exports.Field = {}));
exports.Field = Field;
//# sourceMappingURL=field.js.map