"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Assertion = (function () {
    function Assertion() {
    }
    Assertion.getAttributeTypeMap = function () {
        return Assertion.attributeTypeMap;
    };
    Assertion.discriminator = undefined;
    Assertion.attributeTypeMap = [
        {
            "name": "property",
            "baseName": "property",
            "type": "string"
        },
        {
            "name": "should",
            "baseName": "should",
            "type": "Assertion.ShouldEnum"
        },
        {
            "name": "expect",
            "baseName": "expect",
            "type": "object"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Assertion.StatusEnum"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        }
    ];
    return Assertion;
}());
exports.Assertion = Assertion;
(function (Assertion) {
    var ShouldEnum;
    (function (ShouldEnum) {
        ShouldEnum[ShouldEnum["EQUAL"] = 'EQUAL'] = "EQUAL";
        ShouldEnum[ShouldEnum["NOTEQUAL"] = 'NOT_EQUAL'] = "NOTEQUAL";
    })(ShouldEnum = Assertion.ShouldEnum || (Assertion.ShouldEnum = {}));
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["PASS"] = 'PASS'] = "PASS";
        StatusEnum[StatusEnum["FAIL"] = 'FAIL'] = "FAIL";
    })(StatusEnum = Assertion.StatusEnum || (Assertion.StatusEnum = {}));
})(Assertion = exports.Assertion || (exports.Assertion = {}));
exports.Assertion = Assertion;
//# sourceMappingURL=assertion.js.map