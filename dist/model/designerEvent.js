"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DesignerEvent = (function () {
    function DesignerEvent() {
    }
    DesignerEvent.getAttributeTypeMap = function () {
        return DesignerEvent.attributeTypeMap;
    };
    DesignerEvent.discriminator = undefined;
    DesignerEvent.attributeTypeMap = [
        {
            "name": "event",
            "baseName": "event",
            "type": "DesignerEvent.EventEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "rule",
            "baseName": "rule",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "row",
            "baseName": "row",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number"
        },
        {
            "name": "triggers",
            "baseName": "triggers",
            "type": "Array<object>"
        },
        {
            "name": "current",
            "baseName": "current",
            "type": "RuleEventData"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "RuleEventData"
        }
    ];
    return DesignerEvent;
}());
exports.DesignerEvent = DesignerEvent;
(function (DesignerEvent) {
    var EventEnum;
    (function (EventEnum) {
        EventEnum[EventEnum["INSERT"] = 'INSERT'] = "INSERT";
        EventEnum[EventEnum["DELETE"] = 'DELETE'] = "DELETE";
        EventEnum[EventEnum["UPDATE"] = 'UPDATE'] = "UPDATE";
        EventEnum[EventEnum["BEFOREMATCH"] = 'BEFORE_MATCH'] = "BEFOREMATCH";
        EventEnum[EventEnum["AFTERMATCH"] = 'AFTER_MATCH'] = "AFTERMATCH";
        EventEnum[EventEnum["MATCHCREATED"] = 'MATCH_CREATED'] = "MATCHCREATED";
        EventEnum[EventEnum["MATCHCANCELLED"] = 'MATCH_CANCELLED'] = "MATCHCANCELLED";
    })(EventEnum = DesignerEvent.EventEnum || (DesignerEvent.EventEnum = {}));
})(DesignerEvent = exports.DesignerEvent || (exports.DesignerEvent = {}));
exports.DesignerEvent = DesignerEvent;
//# sourceMappingURL=designerEvent.js.map