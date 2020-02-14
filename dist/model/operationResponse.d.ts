export declare class OperationResponse {
    'action'?: string;
    'status'?: OperationResponse.StatusEnum;
    'message'?: string;
    'size'?: number;
    'result'?: object;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace OperationResponse {
    enum StatusEnum {
        OK,
        Created,
        Accepted,
        NoContent,
        ResetContent,
        PartialContent,
        MovedPermanently,
        Found,
        SeeOther,
        NotModified,
        UseProxy,
        TemporaryRedirect,
        BadRequest,
        Unauthorized,
        PaymentRequired,
        Forbidden,
        NotFound,
        MethodNotAllowed,
        NotAcceptable,
        ProxyAuthenticationRequired,
        RequestTimeout,
        Conflict,
        Gone,
        LengthRequired,
        PreconditionFailed,
        RequestEntityTooLarge,
        RequestURITooLong,
        UnsupportedMediaType,
        RequestedRangeNotSatisfiable,
        ExpectationFailed,
        PreconditionRequired,
        TooManyRequests,
        RequestHeaderFieldsTooLarge,
        InternalServerError,
        NotImplemented,
        BadGateway,
        ServiceUnavailable,
        GatewayTimeout,
        HTTPVersionNotSupported,
        NetworkAuthenticationRequired
    }
}
