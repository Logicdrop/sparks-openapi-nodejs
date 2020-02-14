"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContainerResponse = (function () {
    function ContainerResponse() {
    }
    ContainerResponse.getAttributeTypeMap = function () {
        return ContainerResponse.attributeTypeMap;
    };
    ContainerResponse.discriminator = undefined;
    ContainerResponse.attributeTypeMap = [
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
            "name": "version",
            "baseName": "version",
            "type": "string"
        },
        {
            "name": "uptime",
            "baseName": "uptime",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ContainerResponse.StatusEnum"
        }
    ];
    return ContainerResponse;
}());
exports.ContainerResponse = ContainerResponse;
(function (ContainerResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["RUNNING"] = 'RUNNING'] = "RUNNING";
        StatusEnum[StatusEnum["STOPPED"] = 'STOPPED'] = "STOPPED";
        StatusEnum[StatusEnum["ERROR"] = 'ERROR'] = "ERROR";
    })(StatusEnum = ContainerResponse.StatusEnum || (ContainerResponse.StatusEnum = {}));
})(ContainerResponse = exports.ContainerResponse || (exports.ContainerResponse = {}));
exports.ContainerResponse = ContainerResponse;
//# sourceMappingURL=containerResponse.js.map