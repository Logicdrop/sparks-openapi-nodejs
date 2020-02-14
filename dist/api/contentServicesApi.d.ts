/// <reference types="node" />
import http = require('http');
import { FileResult } from '../model/fileResult';
import { Authentication } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';
import { RequestFile } from './apis';
export declare enum ContentServicesApiApiKeys {
    api = 0
}
export declare class ContentServicesApi {
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
    setApiKey(key: ContentServicesApiApiKeys, value: string): void;
    oAuth: OAuth;
    tokenUrl: string;
    clientId: string;
    clientSecret: string;
    deleteContent(client: string, folders: string, filename: string, extension: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<FileResult>;
    }>;
    deletePrivateContent(client: string, folders: string, filename: string, extension: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<FileResult>;
    }>;
    getContent(client: string, folders: string, filename: string, extension: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    getPrivateContent(client: string, folders: string, filename: string, extension: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    getSignedToken(client: string, folders: string, filename: string, extension: string, expires?: string, _public?: string, upload?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: FileResult;
    }>;
    listContent(client: string, folders: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<FileResult>;
    }>;
    listPrivateContent(client: string, folders: string, recursive?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<FileResult>;
    }>;
    uploadContent(client: string, folders: string, explode?: string, unique?: string, file?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<FileResult>;
    }>;
    uploadPrivateContent(client: string, folders: string, explode?: string, unique?: string, file?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<FileResult>;
    }>;
}
