"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var localVarRequest = require("request");
var models_1 = require("../model/models");
var models_2 = require("../model/models");
var apis_1 = require("./apis");
var defaultBasePath = 'https://api.staging.com';
var ClientServicesApiApiKeys;
(function (ClientServicesApiApiKeys) {
    ClientServicesApiApiKeys[ClientServicesApiApiKeys["api"] = 0] = "api";
})(ClientServicesApiApiKeys = exports.ClientServicesApiApiKeys || (exports.ClientServicesApiApiKeys = {}));
var ClientServicesApi = (function () {
    function ClientServicesApi(oAuth, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'jwt': new models_2.HttpBasicAuth(),
            'api': new models_2.ApiKeyAuth('header', 'X-Logicdrop-ApiKey'),
            'oauth2': new models_2.OAuth(),
        };
        if (oAuth) {
            this.oAuth = oAuth;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(ClientServicesApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientServicesApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    ClientServicesApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    ClientServicesApi.prototype.setApiKey = function (key, value) {
        this.authentications[ClientServicesApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(ClientServicesApi.prototype, "oAuth", {
        set: function (oAuth) {
            this.authentications.oauth2 = oAuth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientServicesApi.prototype, "tokenUrl", {
        set: function (tokenUrl) {
            this.authentications.oauth2.tokenUrl = tokenUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientServicesApi.prototype, "clientId", {
        set: function (clientId) {
            this.authentications.oauth2.clientId = clientId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientServicesApi.prototype, "clientSecret", {
        set: function (clientSecret) {
            this.authentications.oauth2.clientSecret = clientSecret;
        },
        enumerable: true,
        configurable: true
    });
    ClientServicesApi.prototype.createApplication = function (client, identityApplication, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/clients/{client}/applications'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (client === null || client === undefined) {
                    throw new Error('Required parameter client was null or undefined when calling createApplication.');
                }
                if (identityApplication === null || identityApplication === undefined) {
                    throw new Error('Required parameter identityApplication was null or undefined when calling createApplication.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PUT',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(identityApplication, "IdentityApplication")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.authentications.oauth2.applyToRequest(localVarRequestOptions)];
                        case 1: return [2, _a.sent()];
                    }
                }); }); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "IdentityApplication");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    ClientServicesApi.prototype.deleteApplication = function (client, id, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/clients/{client}/applications/{id}'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (client === null || client === undefined) {
                    throw new Error('Required parameter client was null or undefined when calling deleteApplication.');
                }
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling deleteApplication.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.authentications.oauth2.applyToRequest(localVarRequestOptions)];
                        case 1: return [2, _a.sent()];
                    }
                }); }); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "Client");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    ClientServicesApi.prototype.deleteClient = function (client, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/clients/{client}'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (client === null || client === undefined) {
                    throw new Error('Required parameter client was null or undefined when calling deleteClient.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.authentications.oauth2.applyToRequest(localVarRequestOptions)];
                        case 1: return [2, _a.sent()];
                    }
                }); }); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "DataResult");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    ClientServicesApi.prototype.deleteUser = function (client, email, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/clients/{client}/users'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (client === null || client === undefined) {
                    throw new Error('Required parameter client was null or undefined when calling deleteUser.');
                }
                if (email === null || email === undefined) {
                    throw new Error('Required parameter email was null or undefined when calling deleteUser.');
                }
                if (email !== undefined) {
                    localVarQueryParameters['email'] = models_1.ObjectSerializer.serialize(email, "string");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.authentications.oauth2.applyToRequest(localVarRequestOptions)];
                        case 1: return [2, _a.sent()];
                    }
                }); }); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "Client");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    ClientServicesApi.prototype.getClient = function (client, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/clients/{client}'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (client === null || client === undefined) {
                    throw new Error('Required parameter client was null or undefined when calling getClient.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.authentications.oauth2.applyToRequest(localVarRequestOptions)];
                        case 1: return [2, _a.sent()];
                    }
                }); }); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "Client");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    ClientServicesApi.prototype.getSecret = function (client, id, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/clients/{client}/applications/{id}'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (client === null || client === undefined) {
                    throw new Error('Required parameter client was null or undefined when calling getSecret.');
                }
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling getSecret.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.authentications.oauth2.applyToRequest(localVarRequestOptions)];
                        case 1: return [2, _a.sent()];
                    }
                }); }); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "string");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    ClientServicesApi.prototype.inviteUser = function (client, user, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/clients/{client}/users/invite'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (client === null || client === undefined) {
                    throw new Error('Required parameter client was null or undefined when calling inviteUser.');
                }
                if (user === null || user === undefined) {
                    throw new Error('Required parameter user was null or undefined when calling inviteUser.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(user, "User")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.authentications.oauth2.applyToRequest(localVarRequestOptions)];
                        case 1: return [2, _a.sent()];
                    }
                }); }); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "Client");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    ClientServicesApi.prototype.listApplications = function (client, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/clients/{client}/applications'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (client === null || client === undefined) {
                    throw new Error('Required parameter client was null or undefined when calling listApplications.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.authentications.oauth2.applyToRequest(localVarRequestOptions)];
                        case 1: return [2, _a.sent()];
                    }
                }); }); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "Array<IdentityApplication>");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    ClientServicesApi.prototype.listUsers = function (client, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/clients/{client}/users'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (client === null || client === undefined) {
                    throw new Error('Required parameter client was null or undefined when calling listUsers.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.authentications.oauth2.applyToRequest(localVarRequestOptions)];
                        case 1: return [2, _a.sent()];
                    }
                }); }); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "Array<Client>");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    ClientServicesApi.prototype.rotateSecret = function (client, id, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/clients/{client}/applications/{id}/rotate'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                localVarFormParams = {};
                if (client === null || client === undefined) {
                    throw new Error('Required parameter client was null or undefined when calling rotateSecret.');
                }
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling rotateSecret.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.authentications.oauth2.applyToRequest(localVarRequestOptions)];
                        case 1: return [2, _a.sent()];
                    }
                }); }); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    ClientServicesApi.prototype.updateClient = function (client, model, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/clients/{client}'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (client === null || client === undefined) {
                    throw new Error('Required parameter client was null or undefined when calling updateClient.');
                }
                if (model === null || model === undefined) {
                    throw new Error('Required parameter model was null or undefined when calling updateClient.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(model, "Client")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.authentications.oauth2.applyToRequest(localVarRequestOptions)];
                        case 1: return [2, _a.sent()];
                    }
                }); }); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "Client");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    ClientServicesApi.prototype.updateUser = function (client, email, user, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/clients/{client}/users'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (client === null || client === undefined) {
                    throw new Error('Required parameter client was null or undefined when calling updateUser.');
                }
                if (email === null || email === undefined) {
                    throw new Error('Required parameter email was null or undefined when calling updateUser.');
                }
                if (user === null || user === undefined) {
                    throw new Error('Required parameter user was null or undefined when calling updateUser.');
                }
                if (email !== undefined) {
                    localVarQueryParameters['email'] = models_1.ObjectSerializer.serialize(email, "string");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(user, "User")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.authentications.oauth2.applyToRequest(localVarRequestOptions)];
                        case 1: return [2, _a.sent()];
                    }
                }); }); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "User");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    return ClientServicesApi;
}());
exports.ClientServicesApi = ClientServicesApi;
//# sourceMappingURL=clientServicesApi.js.map