"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OperationResponse = (function () {
    function OperationResponse() {
    }
    OperationResponse.getAttributeTypeMap = function () {
        return OperationResponse.attributeTypeMap;
    };
    OperationResponse.discriminator = undefined;
    OperationResponse.attributeTypeMap = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OperationResponse.StatusEnum"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "object"
        }
    ];
    return OperationResponse;
}());
exports.OperationResponse = OperationResponse;
(function (OperationResponse) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["OK"] = 'OK'] = "OK";
        StatusEnum[StatusEnum["Created"] = 'Created'] = "Created";
        StatusEnum[StatusEnum["Accepted"] = 'Accepted'] = "Accepted";
        StatusEnum[StatusEnum["NoContent"] = 'No Content'] = "NoContent";
        StatusEnum[StatusEnum["ResetContent"] = 'Reset Content'] = "ResetContent";
        StatusEnum[StatusEnum["PartialContent"] = 'Partial Content'] = "PartialContent";
        StatusEnum[StatusEnum["MovedPermanently"] = 'Moved Permanently'] = "MovedPermanently";
        StatusEnum[StatusEnum["Found"] = 'Found'] = "Found";
        StatusEnum[StatusEnum["SeeOther"] = 'See Other'] = "SeeOther";
        StatusEnum[StatusEnum["NotModified"] = 'Not Modified'] = "NotModified";
        StatusEnum[StatusEnum["UseProxy"] = 'Use Proxy'] = "UseProxy";
        StatusEnum[StatusEnum["TemporaryRedirect"] = 'Temporary Redirect'] = "TemporaryRedirect";
        StatusEnum[StatusEnum["BadRequest"] = 'Bad Request'] = "BadRequest";
        StatusEnum[StatusEnum["Unauthorized"] = 'Unauthorized'] = "Unauthorized";
        StatusEnum[StatusEnum["PaymentRequired"] = 'Payment Required'] = "PaymentRequired";
        StatusEnum[StatusEnum["Forbidden"] = 'Forbidden'] = "Forbidden";
        StatusEnum[StatusEnum["NotFound"] = 'Not Found'] = "NotFound";
        StatusEnum[StatusEnum["MethodNotAllowed"] = 'Method Not Allowed'] = "MethodNotAllowed";
        StatusEnum[StatusEnum["NotAcceptable"] = 'Not Acceptable'] = "NotAcceptable";
        StatusEnum[StatusEnum["ProxyAuthenticationRequired"] = 'Proxy Authentication Required'] = "ProxyAuthenticationRequired";
        StatusEnum[StatusEnum["RequestTimeout"] = 'Request Timeout'] = "RequestTimeout";
        StatusEnum[StatusEnum["Conflict"] = 'Conflict'] = "Conflict";
        StatusEnum[StatusEnum["Gone"] = 'Gone'] = "Gone";
        StatusEnum[StatusEnum["LengthRequired"] = 'Length Required'] = "LengthRequired";
        StatusEnum[StatusEnum["PreconditionFailed"] = 'Precondition Failed'] = "PreconditionFailed";
        StatusEnum[StatusEnum["RequestEntityTooLarge"] = 'Request Entity Too Large'] = "RequestEntityTooLarge";
        StatusEnum[StatusEnum["RequestURITooLong"] = 'Request-URI Too Long'] = "RequestURITooLong";
        StatusEnum[StatusEnum["UnsupportedMediaType"] = 'Unsupported Media Type'] = "UnsupportedMediaType";
        StatusEnum[StatusEnum["RequestedRangeNotSatisfiable"] = 'Requested Range Not Satisfiable'] = "RequestedRangeNotSatisfiable";
        StatusEnum[StatusEnum["ExpectationFailed"] = 'Expectation Failed'] = "ExpectationFailed";
        StatusEnum[StatusEnum["PreconditionRequired"] = 'Precondition Required'] = "PreconditionRequired";
        StatusEnum[StatusEnum["TooManyRequests"] = 'Too Many Requests'] = "TooManyRequests";
        StatusEnum[StatusEnum["RequestHeaderFieldsTooLarge"] = 'Request Header Fields Too Large'] = "RequestHeaderFieldsTooLarge";
        StatusEnum[StatusEnum["InternalServerError"] = 'Internal Server Error'] = "InternalServerError";
        StatusEnum[StatusEnum["NotImplemented"] = 'Not Implemented'] = "NotImplemented";
        StatusEnum[StatusEnum["BadGateway"] = 'Bad Gateway'] = "BadGateway";
        StatusEnum[StatusEnum["ServiceUnavailable"] = 'Service Unavailable'] = "ServiceUnavailable";
        StatusEnum[StatusEnum["GatewayTimeout"] = 'Gateway Timeout'] = "GatewayTimeout";
        StatusEnum[StatusEnum["HTTPVersionNotSupported"] = 'HTTP Version Not Supported'] = "HTTPVersionNotSupported";
        StatusEnum[StatusEnum["NetworkAuthenticationRequired"] = 'Network Authentication Required'] = "NetworkAuthenticationRequired";
    })(StatusEnum = OperationResponse.StatusEnum || (OperationResponse.StatusEnum = {}));
})(OperationResponse = exports.OperationResponse || (exports.OperationResponse = {}));
exports.OperationResponse = OperationResponse;
//# sourceMappingURL=operationResponse.js.map