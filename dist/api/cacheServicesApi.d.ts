/// <reference types="node" />
import http = require('http');
import { CacheRequest } from '../model/cacheRequest';
import { CacheResult } from '../model/cacheResult';
import { UserData } from '../model/userData';
import { Authentication } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';
export declare enum CacheServicesApiApiKeys {
    api = 0
}
export declare class CacheServicesApi {
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
    setApiKey(key: CacheServicesApiApiKeys, value: string): void;
    oAuth: OAuth;
    tokenUrl: string;
    clientId: string;
    clientSecret: string;
    evictEntry(client: string, cache: string, key: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: UserData;
    }>;
    flushCache(client: string, cache: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: CacheResult;
    }>;
    getEntries(client: string, cache: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: UserData;
    }>;
    getEntry(client: string, cache: string, key: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: UserData;
    }>;
    listCaches(client: string, local?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<CacheResult>;
    }>;
    putEntry(client: string, cache: string, cacheRequest: CacheRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: UserData;
    }>;
}
