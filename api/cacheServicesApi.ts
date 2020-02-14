/**
 * Sparks OpenAPI
 * Generated documentation for the Logicdrop Sparks API and OpenAPI clients.  Logicdrop Sparks lets users build rules, analyze data, and automate documents.  Use it to make decisions faster, generate documents better, and learn from your data.  ### Documentation - [User Documentation](https://docs.logicdrop.com)  ### Modules - [Sparks Compute](https://docs.logicdrop.com/rules/introduction) - [Sparks Decision Tables](https://docs.logicdrop.com/rules/authoring-decision-tables) - [Sparks Documents](https://docs.logicdrop.com/documents/introduction)  ### Clients - [OpenAPI Clients](https://docs.logicdrop.com/development/sample-clients)  ### Security - [Authorizing API Requests](https://docs.logicdrop.com/development/authorization) 
 *
 * The version of the OpenAPI document: v_VERSION_._BUILD_
 * Contact: support@logicdrop.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { CacheRequest } from '../model/cacheRequest';
import { CacheResult } from '../model/cacheResult';
import { UserData } from '../model/userData';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.staging.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum CacheServicesApiApiKeys {
    api,
}

export class CacheServicesApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'jwt': new HttpBasicAuth(),
        'api': new ApiKeyAuth('header', 'X-Logicdrop-ApiKey'),
        'oauth2': new OAuth(),
    }

    constructor(oAuth?: OAuth);
    constructor(oAuth: OAuth, basePath?: string) {
        if (oAuth) {
            this.oAuth = oAuth;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: CacheServicesApiApiKeys, value: string) {
        (this.authentications as any)[CacheServicesApiApiKeys[key]].apiKey = value;
    }
    set oAuth(oAuth: OAuth) {
        this.authentications.oauth2 = oAuth;
    }

    set tokenUrl(tokenUrl: string) {
        this.authentications.oauth2.tokenUrl = tokenUrl;
    }    
    
    set clientId(clientId: string) {
        this.authentications.oauth2.clientId = clientId;
    }   
    
    set clientSecret(clientSecret: string) {
        this.authentications.oauth2.clientSecret = clientSecret;
    }   

    /**
     * Evict cache entry
     * @summary Evict cache entry
     * @param client Client name
     * @param cache Cache name
     * @param key Entry key
     */
    public async evictEntry (client: string, cache: string, key: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: UserData;  }> {
        const localVarPath = this.basePath + '/caches/{client}/{cache}/{key}'
            .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
            .replace('{' + 'cache' + '}', encodeURIComponent(String(cache)))
            .replace('{' + 'key' + '}', encodeURIComponent(String(key)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'client' is not null or undefined
        if (client === null || client === undefined) {
            throw new Error('Required parameter client was null or undefined when calling evictEntry.');
        }

        // verify required parameter 'cache' is not null or undefined
        if (cache === null || cache === undefined) {
            throw new Error('Required parameter cache was null or undefined when calling evictEntry.');
        }

        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling evictEntry.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();

        authenticationPromise = authenticationPromise.then(async () => await this.authentications.oauth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: UserData;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "UserData");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Clear the cache
     * @summary Flush cache
     * @param client Client name
     * @param cache Cache name
     */
    public async flushCache (client: string, cache: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: CacheResult;  }> {
        const localVarPath = this.basePath + '/caches/{client}/{cache}'
            .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
            .replace('{' + 'cache' + '}', encodeURIComponent(String(cache)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'client' is not null or undefined
        if (client === null || client === undefined) {
            throw new Error('Required parameter client was null or undefined when calling flushCache.');
        }

        // verify required parameter 'cache' is not null or undefined
        if (cache === null || cache === undefined) {
            throw new Error('Required parameter cache was null or undefined when calling flushCache.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();

        authenticationPromise = authenticationPromise.then(async () => await this.authentications.oauth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: CacheResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CacheResult");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * List cache entries
     * @summary List cache entries
     * @param client Client name
     * @param cache Cache name
     */
    public async getEntries (client: string, cache: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: UserData;  }> {
        const localVarPath = this.basePath + '/caches/{client}/{cache}'
            .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
            .replace('{' + 'cache' + '}', encodeURIComponent(String(cache)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'client' is not null or undefined
        if (client === null || client === undefined) {
            throw new Error('Required parameter client was null or undefined when calling getEntries.');
        }

        // verify required parameter 'cache' is not null or undefined
        if (cache === null || cache === undefined) {
            throw new Error('Required parameter cache was null or undefined when calling getEntries.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();

        authenticationPromise = authenticationPromise.then(async () => await this.authentications.oauth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: UserData;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "UserData");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get cache entry
     * @summary Get cache entry
     * @param client Client name
     * @param cache Cache name
     * @param key Entry key
     */
    public async getEntry (client: string, cache: string, key: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: UserData;  }> {
        const localVarPath = this.basePath + '/caches/{client}/{cache}/{key}'
            .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
            .replace('{' + 'cache' + '}', encodeURIComponent(String(cache)))
            .replace('{' + 'key' + '}', encodeURIComponent(String(key)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'client' is not null or undefined
        if (client === null || client === undefined) {
            throw new Error('Required parameter client was null or undefined when calling getEntry.');
        }

        // verify required parameter 'cache' is not null or undefined
        if (cache === null || cache === undefined) {
            throw new Error('Required parameter cache was null or undefined when calling getEntry.');
        }

        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling getEntry.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();

        authenticationPromise = authenticationPromise.then(async () => await this.authentications.oauth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: UserData;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "UserData");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get caches using optional simple filters
     * @summary List caches
     * @param client Client name
     * @param local Include near or local caches
     */
    public async listCaches (client: string, local?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<CacheResult>;  }> {
        const localVarPath = this.basePath + '/caches/{client}'
            .replace('{' + 'client' + '}', encodeURIComponent(String(client)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'client' is not null or undefined
        if (client === null || client === undefined) {
            throw new Error('Required parameter client was null or undefined when calling listCaches.');
        }

        if (local !== undefined) {
            localVarQueryParameters['local'] = ObjectSerializer.serialize(local, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();

        authenticationPromise = authenticationPromise.then(async () => await this.authentications.oauth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: Array<CacheResult>;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Array<CacheResult>");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Put cache entry
     * @summary Put cache entry
     * @param client Client name
     * @param cache Cache name
     * @param cacheRequest Cache Entry
     */
    public async putEntry (client: string, cache: string, cacheRequest: CacheRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: UserData;  }> {
        const localVarPath = this.basePath + '/caches/{client}/{cache}'
            .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
            .replace('{' + 'cache' + '}', encodeURIComponent(String(cache)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'client' is not null or undefined
        if (client === null || client === undefined) {
            throw new Error('Required parameter client was null or undefined when calling putEntry.');
        }

        // verify required parameter 'cache' is not null or undefined
        if (cache === null || cache === undefined) {
            throw new Error('Required parameter cache was null or undefined when calling putEntry.');
        }

        // verify required parameter 'cacheRequest' is not null or undefined
        if (cacheRequest === null || cacheRequest === undefined) {
            throw new Error('Required parameter cacheRequest was null or undefined when calling putEntry.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(cacheRequest, "CacheRequest")
        };

        let authenticationPromise = Promise.resolve();

        authenticationPromise = authenticationPromise.then(async () => await this.authentications.oauth2.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.ClientResponse; body: UserData;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "UserData");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
