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
var ContentServicesApiApiKeys;
(function (ContentServicesApiApiKeys) {
    ContentServicesApiApiKeys[ContentServicesApiApiKeys["api"] = 0] = "api";
})(ContentServicesApiApiKeys = exports.ContentServicesApiApiKeys || (exports.ContentServicesApiApiKeys = {}));
var ContentServicesApi = (function () {
    function ContentServicesApi(oAuth, basePath) {
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
    Object.defineProperty(ContentServicesApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentServicesApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    ContentServicesApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    ContentServicesApi.prototype.setApiKey = function (key, value) {
        this.authentications[ContentServicesApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(ContentServicesApi.prototype, "oAuth", {
        set: function (oAuth) {
            this.authentications.oauth2 = oAuth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentServicesApi.prototype, "tokenUrl", {
        set: function (tokenUrl) {
            this.authentications.oauth2.tokenUrl = tokenUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentServicesApi.prototype, "clientId", {
        set: function (clientId) {
            this.authentications.oauth2.clientId = clientId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentServicesApi.prototype, "clientSecret", {
        set: function (clientSecret) {
            this.authentications.oauth2.clientSecret = clientSecret;
        },
        enumerable: true,
        configurable: true
    });
    ContentServicesApi.prototype.deleteContent = function (client, folders, filename, extension, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/content/{client}/{folders}/{filename}.{extension}'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
                    .replace('{' + 'folders' + '}', encodeURIComponent(String(folders)))
                    .replace('{' + 'filename' + '}', encodeURIComponent(String(filename)))
                    .replace('{' + 'extension' + '}', encodeURIComponent(String(extension)));
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
                    throw new Error('Required parameter client was null or undefined when calling deleteContent.');
                }
                if (folders === null || folders === undefined) {
                    throw new Error('Required parameter folders was null or undefined when calling deleteContent.');
                }
                if (filename === null || filename === undefined) {
                    throw new Error('Required parameter filename was null or undefined when calling deleteContent.');
                }
                if (extension === null || extension === undefined) {
                    throw new Error('Required parameter extension was null or undefined when calling deleteContent.');
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
                                    body = models_1.ObjectSerializer.deserialize(body, "Array<FileResult>");
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
    ContentServicesApi.prototype.deletePrivateContent = function (client, folders, filename, extension, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/content/{client}/private/{folders}/{filename}.{extension}'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
                    .replace('{' + 'folders' + '}', encodeURIComponent(String(folders)))
                    .replace('{' + 'filename' + '}', encodeURIComponent(String(filename)))
                    .replace('{' + 'extension' + '}', encodeURIComponent(String(extension)));
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
                    throw new Error('Required parameter client was null or undefined when calling deletePrivateContent.');
                }
                if (folders === null || folders === undefined) {
                    throw new Error('Required parameter folders was null or undefined when calling deletePrivateContent.');
                }
                if (filename === null || filename === undefined) {
                    throw new Error('Required parameter filename was null or undefined when calling deletePrivateContent.');
                }
                if (extension === null || extension === undefined) {
                    throw new Error('Required parameter extension was null or undefined when calling deletePrivateContent.');
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
                                    body = models_1.ObjectSerializer.deserialize(body, "Array<FileResult>");
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
    ContentServicesApi.prototype.getContent = function (client, folders, filename, extension, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/content/{client}/{folders}/{filename}.{extension}'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
                    .replace('{' + 'folders' + '}', encodeURIComponent(String(folders)))
                    .replace('{' + 'filename' + '}', encodeURIComponent(String(filename)))
                    .replace('{' + 'extension' + '}', encodeURIComponent(String(extension)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/octet-stream'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (client === null || client === undefined) {
                    throw new Error('Required parameter client was null or undefined when calling getContent.');
                }
                if (folders === null || folders === undefined) {
                    throw new Error('Required parameter folders was null or undefined when calling getContent.');
                }
                if (filename === null || filename === undefined) {
                    throw new Error('Required parameter filename was null or undefined when calling getContent.');
                }
                if (extension === null || extension === undefined) {
                    throw new Error('Required parameter extension was null or undefined when calling getContent.');
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
    ContentServicesApi.prototype.getPrivateContent = function (client, folders, filename, extension, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/content/{client}/private/{folders}/{filename}.{extension}'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
                    .replace('{' + 'folders' + '}', encodeURIComponent(String(folders)))
                    .replace('{' + 'filename' + '}', encodeURIComponent(String(filename)))
                    .replace('{' + 'extension' + '}', encodeURIComponent(String(extension)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/octet-stream'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (client === null || client === undefined) {
                    throw new Error('Required parameter client was null or undefined when calling getPrivateContent.');
                }
                if (folders === null || folders === undefined) {
                    throw new Error('Required parameter folders was null or undefined when calling getPrivateContent.');
                }
                if (filename === null || filename === undefined) {
                    throw new Error('Required parameter filename was null or undefined when calling getPrivateContent.');
                }
                if (extension === null || extension === undefined) {
                    throw new Error('Required parameter extension was null or undefined when calling getPrivateContent.');
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
    ContentServicesApi.prototype.getSignedToken = function (client, folders, filename, extension, expires, _public, upload, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/content/{client}/signed/{folders}/{filename}.{extension}'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
                    .replace('{' + 'folders' + '}', encodeURIComponent(String(folders)))
                    .replace('{' + 'filename' + '}', encodeURIComponent(String(filename)))
                    .replace('{' + 'extension' + '}', encodeURIComponent(String(extension)));
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
                    throw new Error('Required parameter client was null or undefined when calling getSignedToken.');
                }
                if (folders === null || folders === undefined) {
                    throw new Error('Required parameter folders was null or undefined when calling getSignedToken.');
                }
                if (filename === null || filename === undefined) {
                    throw new Error('Required parameter filename was null or undefined when calling getSignedToken.');
                }
                if (extension === null || extension === undefined) {
                    throw new Error('Required parameter extension was null or undefined when calling getSignedToken.');
                }
                if (expires !== undefined) {
                    localVarQueryParameters['expires'] = models_1.ObjectSerializer.serialize(expires, "string");
                }
                if (_public !== undefined) {
                    localVarQueryParameters['public'] = models_1.ObjectSerializer.serialize(_public, "string");
                }
                if (upload !== undefined) {
                    localVarQueryParameters['upload'] = models_1.ObjectSerializer.serialize(upload, "string");
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
                                    body = models_1.ObjectSerializer.deserialize(body, "FileResult");
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
    ContentServicesApi.prototype.listContent = function (client, folders, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/content/{client}/{folders}'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
                    .replace('{' + 'folders' + '}', encodeURIComponent(String(folders)));
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
                    throw new Error('Required parameter client was null or undefined when calling listContent.');
                }
                if (folders === null || folders === undefined) {
                    throw new Error('Required parameter folders was null or undefined when calling listContent.');
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
                                    body = models_1.ObjectSerializer.deserialize(body, "Array<FileResult>");
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
    ContentServicesApi.prototype.listPrivateContent = function (client, folders, recursive, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/content/{client}/private/{folders}'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
                    .replace('{' + 'folders' + '}', encodeURIComponent(String(folders)));
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
                    throw new Error('Required parameter client was null or undefined when calling listPrivateContent.');
                }
                if (folders === null || folders === undefined) {
                    throw new Error('Required parameter folders was null or undefined when calling listPrivateContent.');
                }
                if (recursive !== undefined) {
                    localVarQueryParameters['recursive'] = models_1.ObjectSerializer.serialize(recursive, "string");
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
                                    body = models_1.ObjectSerializer.deserialize(body, "Array<FileResult>");
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
    ContentServicesApi.prototype.uploadContent = function (client, folders, explode, unique, file, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, newfile, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/content/{client}/{folders}/upload'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
                    .replace('{' + 'folders' + '}', encodeURIComponent(String(folders)));
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
                    throw new Error('Required parameter client was null or undefined when calling uploadContent.');
                }
                if (folders === null || folders === undefined) {
                    throw new Error('Required parameter folders was null or undefined when calling uploadContent.');
                }
                if (explode !== undefined) {
                    localVarQueryParameters['explode'] = models_1.ObjectSerializer.serialize(explode, "string");
                }
                if (unique !== undefined) {
                    localVarQueryParameters['unique'] = models_1.ObjectSerializer.serialize(unique, "string");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                if (file !== undefined) {
                    newfile = file;
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
                                    body = models_1.ObjectSerializer.deserialize(body, "Array<FileResult>");
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
    ContentServicesApi.prototype.uploadPrivateContent = function (client, folders, explode, unique, file, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, newfile, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/content/{client}/private/{folders}/upload'
                    .replace('{' + 'client' + '}', encodeURIComponent(String(client)))
                    .replace('{' + 'folders' + '}', encodeURIComponent(String(folders)));
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
                    throw new Error('Required parameter client was null or undefined when calling uploadPrivateContent.');
                }
                if (folders === null || folders === undefined) {
                    throw new Error('Required parameter folders was null or undefined when calling uploadPrivateContent.');
                }
                if (explode !== undefined) {
                    localVarQueryParameters['explode'] = models_1.ObjectSerializer.serialize(explode, "string");
                }
                if (unique !== undefined) {
                    localVarQueryParameters['unique'] = models_1.ObjectSerializer.serialize(unique, "string");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                if (file !== undefined) {
                    newfile = file;
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
                                    body = models_1.ObjectSerializer.deserialize(body, "Array<FileResult>");
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
    return ContentServicesApi;
}());
exports.ContentServicesApi = ContentServicesApi;
//# sourceMappingURL=contentServicesApi.js.map