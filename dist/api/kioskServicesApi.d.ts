/// <reference types="node" />
import http = require('http');
import { Client } from '../model/client';
import { ClientRegistration } from '../model/clientRegistration';
import { ClientSettings } from '../model/clientSettings';
import { IdentityMessage } from '../model/identityMessage';
import { IdentityUser } from '../model/identityUser';
import { User } from '../model/user';
import { UserRegistration } from '../model/userRegistration';
import { Authentication } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';
export declare enum KioskServicesApiApiKeys {
    api = 0
}
export declare class KioskServicesApi {
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
    setApiKey(key: KioskServicesApiApiKeys, value: string): void;
    oAuth: OAuth;
    tokenUrl: string;
    clientId: string;
    clientSecret: string;
    checkAvailability(name: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: boolean;
    }>;
    getUserInfo(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ClientSettings;
    }>;
    getUserProfile(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: IdentityUser;
    }>;
    redeem(token: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: User;
    }>;
    registerClient(clientRegistration: ClientRegistration, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Client;
    }>;
    registerUser(userRegistration: UserRegistration, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: IdentityMessage;
    }>;
}
