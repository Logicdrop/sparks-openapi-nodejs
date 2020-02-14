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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./artifactReference"));
__export(require("./artifactResponse"));
__export(require("./assertion"));
__export(require("./betweenQueryField"));
__export(require("./betweenQueryFieldAllOf"));
__export(require("./bundle"));
__export(require("./cacheRequest"));
__export(require("./cacheRequestValue"));
__export(require("./cacheResult"));
__export(require("./client"));
__export(require("./clientRegistration"));
__export(require("./clientSettings"));
__export(require("./computeOptions"));
__export(require("./computeRule"));
__export(require("./computeRuleset"));
__export(require("./conditionQueryField"));
__export(require("./conditionQueryFieldAllOf"));
__export(require("./containerResponse"));
__export(require("./criteriaQueryField"));
__export(require("./criteriaQueryFieldObject"));
__export(require("./dataResponse"));
__export(require("./dataResult"));
__export(require("./dataset"));
__export(require("./deleteArtifactRequest"));
__export(require("./deleteDataRequest"));
__export(require("./designRulesRequest"));
__export(require("./designerEvent"));
__export(require("./designerOptions"));
__export(require("./designerResult"));
__export(require("./emailMessage"));
__export(require("./emailResult"));
__export(require("./emailWithAttachment"));
__export(require("./externalSource"));
__export(require("./field"));
__export(require("./fileResult"));
__export(require("./generateRulesRequest"));
__export(require("./identityApplication"));
__export(require("./identityMessage"));
__export(require("./identityUser"));
__export(require("./multipartRequest"));
__export(require("./operationRequest"));
__export(require("./operationResponse"));
__export(require("./operationTargetResponse"));
__export(require("./orderedQueryField"));
__export(require("./processorRequest"));
__export(require("./processorResult"));
__export(require("./project"));
__export(require("./propertyDefinition"));
__export(require("./queryExecuteRequest"));
__export(require("./queryParameter"));
__export(require("./querySource"));
__export(require("./ruleContainer"));
__export(require("./ruleEventData"));
__export(require("./ruleType"));
__export(require("./saveContentRequest"));
__export(require("./scaffoldRequest"));
__export(require("./scaffoldResult"));
__export(require("./schema"));
__export(require("./subscription"));
__export(require("./subscriptionDiscount"));
__export(require("./template"));
__export(require("./updateArtifactRequest"));
__export(require("./updateDataRequest"));
__export(require("./updateRulesetResponse"));
__export(require("./uploadResponse"));
__export(require("./user"));
__export(require("./userData"));
__export(require("./userQuery"));
__export(require("./userRegistration"));
var localVarRequest = require("request");
var artifactReference_1 = require("./artifactReference");
var artifactResponse_1 = require("./artifactResponse");
var assertion_1 = require("./assertion");
var betweenQueryField_1 = require("./betweenQueryField");
var betweenQueryFieldAllOf_1 = require("./betweenQueryFieldAllOf");
var bundle_1 = require("./bundle");
var cacheRequest_1 = require("./cacheRequest");
var cacheRequestValue_1 = require("./cacheRequestValue");
var cacheResult_1 = require("./cacheResult");
var client_1 = require("./client");
var clientRegistration_1 = require("./clientRegistration");
var clientSettings_1 = require("./clientSettings");
var computeOptions_1 = require("./computeOptions");
var computeRule_1 = require("./computeRule");
var computeRuleset_1 = require("./computeRuleset");
var conditionQueryField_1 = require("./conditionQueryField");
var conditionQueryFieldAllOf_1 = require("./conditionQueryFieldAllOf");
var containerResponse_1 = require("./containerResponse");
var criteriaQueryField_1 = require("./criteriaQueryField");
var criteriaQueryFieldObject_1 = require("./criteriaQueryFieldObject");
var dataResponse_1 = require("./dataResponse");
var dataResult_1 = require("./dataResult");
var dataset_1 = require("./dataset");
var deleteArtifactRequest_1 = require("./deleteArtifactRequest");
var deleteDataRequest_1 = require("./deleteDataRequest");
var designRulesRequest_1 = require("./designRulesRequest");
var designerEvent_1 = require("./designerEvent");
var designerOptions_1 = require("./designerOptions");
var designerResult_1 = require("./designerResult");
var emailMessage_1 = require("./emailMessage");
var emailResult_1 = require("./emailResult");
var emailWithAttachment_1 = require("./emailWithAttachment");
var externalSource_1 = require("./externalSource");
var field_1 = require("./field");
var fileResult_1 = require("./fileResult");
var generateRulesRequest_1 = require("./generateRulesRequest");
var identityApplication_1 = require("./identityApplication");
var identityMessage_1 = require("./identityMessage");
var identityUser_1 = require("./identityUser");
var multipartRequest_1 = require("./multipartRequest");
var operationRequest_1 = require("./operationRequest");
var operationResponse_1 = require("./operationResponse");
var operationTargetResponse_1 = require("./operationTargetResponse");
var orderedQueryField_1 = require("./orderedQueryField");
var processorRequest_1 = require("./processorRequest");
var processorResult_1 = require("./processorResult");
var project_1 = require("./project");
var propertyDefinition_1 = require("./propertyDefinition");
var queryExecuteRequest_1 = require("./queryExecuteRequest");
var queryParameter_1 = require("./queryParameter");
var querySource_1 = require("./querySource");
var ruleContainer_1 = require("./ruleContainer");
var ruleEventData_1 = require("./ruleEventData");
var ruleType_1 = require("./ruleType");
var saveContentRequest_1 = require("./saveContentRequest");
var scaffoldRequest_1 = require("./scaffoldRequest");
var scaffoldResult_1 = require("./scaffoldResult");
var schema_1 = require("./schema");
var subscription_1 = require("./subscription");
var subscriptionDiscount_1 = require("./subscriptionDiscount");
var template_1 = require("./template");
var updateArtifactRequest_1 = require("./updateArtifactRequest");
var updateDataRequest_1 = require("./updateDataRequest");
var updateRulesetResponse_1 = require("./updateRulesetResponse");
var uploadResponse_1 = require("./uploadResponse");
var user_1 = require("./user");
var userData_1 = require("./userData");
var userQuery_1 = require("./userQuery");
var userRegistration_1 = require("./userRegistration");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "Assertion.ShouldEnum": assertion_1.Assertion.ShouldEnum,
    "Assertion.StatusEnum": assertion_1.Assertion.StatusEnum,
    "ContainerResponse.StatusEnum": containerResponse_1.ContainerResponse.StatusEnum,
    "DesignerEvent.EventEnum": designerEvent_1.DesignerEvent.EventEnum,
    "Field.TypeEnum": field_1.Field.TypeEnum,
    "Field.ModeEnum": field_1.Field.ModeEnum,
    "OperationResponse.StatusEnum": operationResponse_1.OperationResponse.StatusEnum,
    "PropertyDefinition.TypeEnum": propertyDefinition_1.PropertyDefinition.TypeEnum,
    "RuleContainer.StatusEnum": ruleContainer_1.RuleContainer.StatusEnum,
};
var typeMap = {
    "ArtifactReference": artifactReference_1.ArtifactReference,
    "ArtifactResponse": artifactResponse_1.ArtifactResponse,
    "Assertion": assertion_1.Assertion,
    "BetweenQueryField": betweenQueryField_1.BetweenQueryField,
    "BetweenQueryFieldAllOf": betweenQueryFieldAllOf_1.BetweenQueryFieldAllOf,
    "Bundle": bundle_1.Bundle,
    "CacheRequest": cacheRequest_1.CacheRequest,
    "CacheRequestValue": cacheRequestValue_1.CacheRequestValue,
    "CacheResult": cacheResult_1.CacheResult,
    "Client": client_1.Client,
    "ClientRegistration": clientRegistration_1.ClientRegistration,
    "ClientSettings": clientSettings_1.ClientSettings,
    "ComputeOptions": computeOptions_1.ComputeOptions,
    "ComputeRule": computeRule_1.ComputeRule,
    "ComputeRuleset": computeRuleset_1.ComputeRuleset,
    "ConditionQueryField": conditionQueryField_1.ConditionQueryField,
    "ConditionQueryFieldAllOf": conditionQueryFieldAllOf_1.ConditionQueryFieldAllOf,
    "ContainerResponse": containerResponse_1.ContainerResponse,
    "CriteriaQueryField": criteriaQueryField_1.CriteriaQueryField,
    "CriteriaQueryFieldObject": criteriaQueryFieldObject_1.CriteriaQueryFieldObject,
    "DataResponse": dataResponse_1.DataResponse,
    "DataResult": dataResult_1.DataResult,
    "Dataset": dataset_1.Dataset,
    "DeleteArtifactRequest": deleteArtifactRequest_1.DeleteArtifactRequest,
    "DeleteDataRequest": deleteDataRequest_1.DeleteDataRequest,
    "DesignRulesRequest": designRulesRequest_1.DesignRulesRequest,
    "DesignerEvent": designerEvent_1.DesignerEvent,
    "DesignerOptions": designerOptions_1.DesignerOptions,
    "DesignerResult": designerResult_1.DesignerResult,
    "EmailMessage": emailMessage_1.EmailMessage,
    "EmailResult": emailResult_1.EmailResult,
    "EmailWithAttachment": emailWithAttachment_1.EmailWithAttachment,
    "ExternalSource": externalSource_1.ExternalSource,
    "Field": field_1.Field,
    "FileResult": fileResult_1.FileResult,
    "GenerateRulesRequest": generateRulesRequest_1.GenerateRulesRequest,
    "IdentityApplication": identityApplication_1.IdentityApplication,
    "IdentityMessage": identityMessage_1.IdentityMessage,
    "IdentityUser": identityUser_1.IdentityUser,
    "MultipartRequest": multipartRequest_1.MultipartRequest,
    "OperationRequest": operationRequest_1.OperationRequest,
    "OperationResponse": operationResponse_1.OperationResponse,
    "OperationTargetResponse": operationTargetResponse_1.OperationTargetResponse,
    "OrderedQueryField": orderedQueryField_1.OrderedQueryField,
    "ProcessorRequest": processorRequest_1.ProcessorRequest,
    "ProcessorResult": processorResult_1.ProcessorResult,
    "Project": project_1.Project,
    "PropertyDefinition": propertyDefinition_1.PropertyDefinition,
    "QueryExecuteRequest": queryExecuteRequest_1.QueryExecuteRequest,
    "QueryParameter": queryParameter_1.QueryParameter,
    "QuerySource": querySource_1.QuerySource,
    "RuleContainer": ruleContainer_1.RuleContainer,
    "RuleEventData": ruleEventData_1.RuleEventData,
    "RuleType": ruleType_1.RuleType,
    "SaveContentRequest": saveContentRequest_1.SaveContentRequest,
    "ScaffoldRequest": scaffoldRequest_1.ScaffoldRequest,
    "ScaffoldResult": scaffoldResult_1.ScaffoldResult,
    "Schema": schema_1.Schema,
    "Subscription": subscription_1.Subscription,
    "SubscriptionDiscount": subscriptionDiscount_1.SubscriptionDiscount,
    "Template": template_1.Template,
    "UpdateArtifactRequest": updateArtifactRequest_1.UpdateArtifactRequest,
    "UpdateDataRequest": updateDataRequest_1.UpdateDataRequest,
    "UpdateRulesetResponse": updateRulesetResponse_1.UpdateRulesetResponse,
    "UploadResponse": uploadResponse_1.UploadResponse,
    "User": user_1.User,
    "UserData": userData_1.UserData,
    "UserQuery": userQuery_1.UserQuery,
    "UserRegistration": userRegistration_1.UserRegistration,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
        this.tokenUrl = '';
        this.clientId = '';
        this.clientSecret = '';
        this.accessToken = '';
        this.accessTokenExpiration = 0;
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.obtainToken()];
                    case 1:
                        token = _a.sent();
                        if (requestOptions && requestOptions.headers) {
                            requestOptions.headers["Authorization"] = "Bearer " + token;
                        }
                        return [2];
                }
            });
        });
    };
    OAuth.prototype.obtainToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.accessToken || (this.accessTokenExpiration && new Date().getTime() >= this.accessTokenExpiration))) return [3, 2];
                        url_1 = "https://" + this.clientId + ":" + this.clientSecret + "@" + this.tokenUrl + "?grant_type=client_credentials";
                        return [4, (new Promise(function (resolve, reject) {
                                localVarRequest.post(url_1, { json: true }, function (err, res, body) {
                                    if (body) {
                                        resolve(body);
                                    }
                                    else {
                                        reject(new Error('Could not get Sparks API token.'));
                                    }
                                });
                            }))];
                    case 1:
                        result = _a.sent();
                        this.accessToken = result && result.access_token;
                        this.accessTokenExpiration =
                            new Date().getTime() +
                                (result ? result.expires_in * 1000 : 0) -
                                60000;
                        _a.label = 2;
                    case 2: return [2, this.accessToken];
                }
            });
        });
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map