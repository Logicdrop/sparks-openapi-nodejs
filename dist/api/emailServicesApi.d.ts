/// <reference types="node" />
import http = require('http');
import { EmailMessage } from '../model/emailMessage';
import { EmailResult } from '../model/emailResult';
import { EmailWithAttachment } from '../model/emailWithAttachment';
import { Authentication } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';
export declare enum EmailServicesApiApiKeys {
    api = 0
}
export declare class EmailServicesApi {
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
    setApiKey(key: EmailServicesApiApiKeys, value: string): void;
    oAuth: OAuth;
    tokenUrl: string;
    clientId: string;
    clientSecret: string;
    sendEmail(client: string, emailMessage: EmailMessage, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: EmailResult;
    }>;
    sendWithAttachment(client: string, emailWithAttachment: EmailWithAttachment, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: EmailResult;
    }>;
}
