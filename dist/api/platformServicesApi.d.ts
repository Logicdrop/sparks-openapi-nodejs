/// <reference types="node" />
import http = require('http');
import { OperationRequest } from '../model/operationRequest';
import { OperationResponse } from '../model/operationResponse';
import { OperationTargetResponse } from '../model/operationTargetResponse';
import { Authentication } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';
export declare enum PlatformServicesApiApiKeys {
    api = 0
}
export declare class PlatformServicesApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'jwt': HttpBasicAuth;
        'api': ApiKeyAuth;
        'oauth2': OAuth;
    };
    constructor(oAuth?: OAuth);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PlatformServicesApiApiKeys, value: string): void;
    oAuth: OAuth;
    tokenUrl: string;
    clientId: string;
    clientSecret: string;
    listManagedServices(service: string, operationRequest: OperationRequest, data?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<OperationTargetResponse>;
    }>;
    manageService(service: string, operationRequest: OperationRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: OperationResponse;
    }>;
    platformInfo(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
