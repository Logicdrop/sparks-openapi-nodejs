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
var EmailServicesApiApiKeys;
(function (EmailServicesApiApiKeys) {
    EmailServicesApiApiKeys[EmailServicesApiApiKeys["api"] = 0] = "api";
})(EmailServicesApiApiKeys = exports.EmailServicesApiApiKeys || (exports.EmailServicesApiApiKeys = {}));
var EmailServicesApi = (function () {
    function EmailServicesApi(oAuth, basePath) {
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
    Object.defineProperty(EmailServicesApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailServicesApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    EmailServicesApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    EmailServicesApi.prototype.setApiKey = function (key, value) {
        this.authentications[EmailServicesApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(EmailServicesApi.prototype, "oAuth", {
        set: function (oAuth) {
            this.authentications.oauth2 = oAuth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailServicesApi.prototype, "tokenUrl", {
        set: function (tokenUrl) {
            this.authentications.oauth2.tokenUrl = tokenUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailServicesApi.prototype, "clientId", {
        set: function (clientId) {
            this.authentications.oauth2.clientId = clientId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailServicesApi.prototype, "clientSecret", {
        set: function (clientSecret) {
            this.authentications.oauth2.clientSecret = clientSecret;
        },
        enumerable: true,
        configurable: true
    });
    EmailServicesApi.prototype.sendEmail = function (client, emailMessage, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/email/{client}'
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
                    throw new Error('Required parameter client was null or undefined when calling sendEmail.');
                }
                if (emailMessage === null || emailMessage === undefined) {
                    throw new Error('Required parameter emailMessage was null or undefined when calling sendEmail.');
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
                    body: models_1.ObjectSerializer.serialize(emailMessage, "EmailMessage")
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
                                    body = models_1.ObjectSerializer.deserialize(body, "EmailResult");
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
    EmailServicesApi.prototype.sendWithAttachment = function (client, emailWithAttachment, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/email/{client}/send'
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
                    throw new Error('Required parameter client was null or undefined when calling sendWithAttachment.');
                }
                if (emailWithAttachment === null || emailWithAttachment === undefined) {
                    throw new Error('Required parameter emailWithAttachment was null or undefined when calling sendWithAttachment.');
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
                    body: models_1.ObjectSerializer.serialize(emailWithAttachment, "EmailWithAttachment")
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
                                    body = models_1.ObjectSerializer.deserialize(body, "EmailResult");
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
    return EmailServicesApi;
}());
exports.EmailServicesApi = EmailServicesApi;
//# sourceMappingURL=emailServicesApi.js.map