"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RuleContainer = (function () {
    function RuleContainer() {
    }
    RuleContainer.getAttributeTypeMap = function () {
        return RuleContainer.attributeTypeMap;
    };
    RuleContainer.discriminator = undefined;
    RuleContainer.attributeTypeMap = [
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
            "name": "ruleset",
            "baseName": "ruleset",
            "type": "string"
        },
        {
            "name": "display",
            "baseName": "display",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "RuleContainer.StatusEnum"
        },
        {
            "name": "published",
            "baseName": "published",
            "type": "Date"
        },
        {
            "name": "stopped",
            "baseName": "stopped",
            "type": "Date"
        },
        {
            "name": "uptime",
            "baseName": "uptime",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }
    ];
    return RuleContainer;
}());
exports.RuleContainer = RuleContainer;
(function (RuleContainer) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["RUNNING"] = 'RUNNING'] = "RUNNING";
        StatusEnum[StatusEnum["STOPPED"] = 'STOPPED'] = "STOPPED";
        StatusEnum[StatusEnum["ERROR"] = 'ERROR'] = "ERROR";
    })(StatusEnum = RuleContainer.StatusEnum || (RuleContainer.StatusEnum = {}));
})(RuleContainer = exports.RuleContainer || (exports.RuleContainer = {}));
exports.RuleContainer = RuleContainer;
//# sourceMappingURL=ruleContainer.js.map