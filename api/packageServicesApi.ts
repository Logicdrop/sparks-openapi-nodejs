/**
 * Sparks OpenAPI
 * Generated documentation for the Logicdrop Sparks API and OpenAPI clients.  Logicdrop Sparks lets users build rules, analyze data, and automate documents.  Use it to make decisions faster, generate documents better, and learn from your data.  ### Documentation - [User Documentation](https://docs.logicdrop.com)  ### Modules - [Sparks Compute](https://docs.logicdrop.com/rules/introduction) - [Sparks Decision Tables](https://docs.logicdrop.com/rules/authoring-decision-tables) - [Sparks Documents](https://docs.logicdrop.com/documents/introduction)  ### Clients - [OpenAPI Clients](https://docs.logicdrop.com/development/sample-clients)  ### Security - [Authorizing API Requests](https://docs.logicdrop.com/development/authorization) 
 *
 * The version of the OpenAPI document: v_VERSION_, build# _BUILD_
 * Contact: support@logicdrop.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { ArtifactResponse } from '../model/artifactResponse';
import { Bundle } from '../model/bundle';
import { ScaffoldRequest } from '../model/scaffoldRequest';
import { ScaffoldResult } from '../model/scaffoldResult';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.staging.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum PackageServicesApiApiKeys {
    api,
}

export class PackageServicesApi {
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

    public setApiKey(key: PackageServicesApiApiKeys, value: string) {
        (this.authentications as any)[PackageServicesApiApiKeys[key]].apiKey = value;
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
     * Delete package
     * @summary Delete package
     * @param client Client name
     * @param _package Package name
     */
    public async deletePackage (client: string, _package: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: ArtifactResponse;  }> {
        const localVarPath = this.basePath + '/packages/{client}/{package}'
            .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
            .replace('{' + 'package' + '}', encodeURIComponent(String(_package)));
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
            throw new Error('Required parameter client was null or undefined when calling deletePackage.');
        }

        // verify required parameter '_package' is not null or undefined
        if (_package === null || _package === undefined) {
            throw new Error('Required parameter _package was null or undefined when calling deletePackage.');
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
            return new Promise<{ response: http.ClientResponse; body: ArtifactResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ArtifactResponse");
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
     * Get package
     * @summary Get package
     * @param client Client name
     * @param _package Package name
     */
    public async getPackage (client: string, _package: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Bundle;  }> {
        const localVarPath = this.basePath + '/packages/{client}/{package}'
            .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
            .replace('{' + 'package' + '}', encodeURIComponent(String(_package)));
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
            throw new Error('Required parameter client was null or undefined when calling getPackage.');
        }

        // verify required parameter '_package' is not null or undefined
        if (_package === null || _package === undefined) {
            throw new Error('Required parameter _package was null or undefined when calling getPackage.');
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
            return new Promise<{ response: http.ClientResponse; body: Bundle;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Bundle");
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
     * Get packages
     * @summary List packages
     * @param client Client name
     */
    public async listPackages (client: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<Bundle>;  }> {
        const localVarPath = this.basePath + '/packages/{client}'
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
            throw new Error('Required parameter client was null or undefined when calling listPackages.');
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
            return new Promise<{ response: http.ClientResponse; body: Array<Bundle>;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Array<Bundle>");
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
     * Scaffold project
     * @summary Scaffold project
     * @param client Client name
     * @param scaffoldRequest Scaffold request
     */
    public async scaffoldProject (client: string, scaffoldRequest: ScaffoldRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: ScaffoldResult;  }> {
        const localVarPath = this.basePath + '/packages/{client}/scaffold'
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
            throw new Error('Required parameter client was null or undefined when calling scaffoldProject.');
        }

        // verify required parameter 'scaffoldRequest' is not null or undefined
        if (scaffoldRequest === null || scaffoldRequest === undefined) {
            throw new Error('Required parameter scaffoldRequest was null or undefined when calling scaffoldProject.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(scaffoldRequest, "ScaffoldRequest")
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
            return new Promise<{ response: http.ClientResponse; body: ScaffoldResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ScaffoldResult");
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
     * Upload packages(s)
     * @summary Upload packages
     * @param client Client name
     * @param file File
     */
    public async uploadPackage (client: string, file?: RequestFile, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<Bundle>;  }> {
        const localVarPath = this.basePath + '/packages/{client}'
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
            throw new Error('Required parameter client was null or undefined when calling uploadPackage.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        if (file !== undefined) {
            const newfile: any = file;

            localVarFormParams['file'] = {
                value: newfile.buffer,
                options: {
                    filename: newfile.originalname,
                    contentType: newfile.mimetype,
                    encoding: newfile.encoding
                }
            };
        }
        localVarUseFormData = true;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
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
            return new Promise<{ response: http.ClientResponse; body: Array<Bundle>;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Array<Bundle>");
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
