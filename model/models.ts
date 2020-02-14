export * from './artifactReference';
export * from './artifactResponse';
export * from './assertion';
export * from './betweenQueryField';
export * from './betweenQueryFieldAllOf';
export * from './bundle';
export * from './cacheRequest';
export * from './cacheRequestValue';
export * from './cacheResult';
export * from './client';
export * from './clientRegistration';
export * from './clientSettings';
export * from './computeOptions';
export * from './computeRule';
export * from './computeRuleset';
export * from './conditionQueryField';
export * from './conditionQueryFieldAllOf';
export * from './containerResponse';
export * from './criteriaQueryField';
export * from './criteriaQueryFieldObject';
export * from './dataResponse';
export * from './dataResult';
export * from './dataset';
export * from './deleteArtifactRequest';
export * from './deleteDataRequest';
export * from './designRulesRequest';
export * from './designerEvent';
export * from './designerOptions';
export * from './designerResult';
export * from './emailMessage';
export * from './emailResult';
export * from './emailWithAttachment';
export * from './externalSource';
export * from './field';
export * from './fileResult';
export * from './generateRulesRequest';
export * from './identityApplication';
export * from './identityMessage';
export * from './identityUser';
export * from './multipartRequest';
export * from './operationRequest';
export * from './operationResponse';
export * from './operationTargetResponse';
export * from './orderedQueryField';
export * from './processorRequest';
export * from './processorResult';
export * from './project';
export * from './propertyDefinition';
export * from './queryExecuteRequest';
export * from './queryParameter';
export * from './querySource';
export * from './ruleContainer';
export * from './ruleEventData';
export * from './ruleType';
export * from './saveContentRequest';
export * from './scaffoldRequest';
export * from './scaffoldResult';
export * from './schema';
export * from './subscription';
export * from './subscriptionDiscount';
export * from './template';
export * from './updateArtifactRequest';
export * from './updateDataRequest';
export * from './updateRulesetResponse';
export * from './uploadResponse';
export * from './user';
export * from './userData';
export * from './userQuery';
export * from './userRegistration';

import localVarRequest = require('request');

import { ArtifactReference } from './artifactReference';
import { ArtifactResponse } from './artifactResponse';
import { Assertion } from './assertion';
import { BetweenQueryField } from './betweenQueryField';
import { BetweenQueryFieldAllOf } from './betweenQueryFieldAllOf';
import { Bundle } from './bundle';
import { CacheRequest } from './cacheRequest';
import { CacheRequestValue } from './cacheRequestValue';
import { CacheResult } from './cacheResult';
import { Client } from './client';
import { ClientRegistration } from './clientRegistration';
import { ClientSettings } from './clientSettings';
import { ComputeOptions } from './computeOptions';
import { ComputeRule } from './computeRule';
import { ComputeRuleset } from './computeRuleset';
import { ConditionQueryField } from './conditionQueryField';
import { ConditionQueryFieldAllOf } from './conditionQueryFieldAllOf';
import { ContainerResponse } from './containerResponse';
import { CriteriaQueryField } from './criteriaQueryField';
import { CriteriaQueryFieldObject } from './criteriaQueryFieldObject';
import { DataResponse } from './dataResponse';
import { DataResult } from './dataResult';
import { Dataset } from './dataset';
import { DeleteArtifactRequest } from './deleteArtifactRequest';
import { DeleteDataRequest } from './deleteDataRequest';
import { DesignRulesRequest } from './designRulesRequest';
import { DesignerEvent } from './designerEvent';
import { DesignerOptions } from './designerOptions';
import { DesignerResult } from './designerResult';
import { EmailMessage } from './emailMessage';
import { EmailResult } from './emailResult';
import { EmailWithAttachment } from './emailWithAttachment';
import { ExternalSource } from './externalSource';
import { Field } from './field';
import { FileResult } from './fileResult';
import { GenerateRulesRequest } from './generateRulesRequest';
import { IdentityApplication } from './identityApplication';
import { IdentityMessage } from './identityMessage';
import { IdentityUser } from './identityUser';
import { MultipartRequest } from './multipartRequest';
import { OperationRequest } from './operationRequest';
import { OperationResponse } from './operationResponse';
import { OperationTargetResponse } from './operationTargetResponse';
import { OrderedQueryField } from './orderedQueryField';
import { ProcessorRequest } from './processorRequest';
import { ProcessorResult } from './processorResult';
import { Project } from './project';
import { PropertyDefinition } from './propertyDefinition';
import { QueryExecuteRequest } from './queryExecuteRequest';
import { QueryParameter } from './queryParameter';
import { QuerySource } from './querySource';
import { RuleContainer } from './ruleContainer';
import { RuleEventData } from './ruleEventData';
import { RuleType } from './ruleType';
import { SaveContentRequest } from './saveContentRequest';
import { ScaffoldRequest } from './scaffoldRequest';
import { ScaffoldResult } from './scaffoldResult';
import { Schema } from './schema';
import { Subscription } from './subscription';
import { SubscriptionDiscount } from './subscriptionDiscount';
import { Template } from './template';
import { UpdateArtifactRequest } from './updateArtifactRequest';
import { UpdateDataRequest } from './updateDataRequest';
import { UpdateRulesetResponse } from './updateRulesetResponse';
import { UploadResponse } from './uploadResponse';
import { User } from './user';
import { UserData } from './userData';
import { UserQuery } from './userQuery';
import { UserRegistration } from './userRegistration';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "Assertion.ShouldEnum": Assertion.ShouldEnum,
        "Assertion.StatusEnum": Assertion.StatusEnum,
        "ContainerResponse.StatusEnum": ContainerResponse.StatusEnum,
        "DesignerEvent.EventEnum": DesignerEvent.EventEnum,
        "Field.TypeEnum": Field.TypeEnum,
        "Field.ModeEnum": Field.ModeEnum,
        "OperationResponse.StatusEnum": OperationResponse.StatusEnum,
        "PropertyDefinition.TypeEnum": PropertyDefinition.TypeEnum,
        "RuleContainer.StatusEnum": RuleContainer.StatusEnum,
}

let typeMap: {[index: string]: any} = {
    "ArtifactReference": ArtifactReference,
    "ArtifactResponse": ArtifactResponse,
    "Assertion": Assertion,
    "BetweenQueryField": BetweenQueryField,
    "BetweenQueryFieldAllOf": BetweenQueryFieldAllOf,
    "Bundle": Bundle,
    "CacheRequest": CacheRequest,
    "CacheRequestValue": CacheRequestValue,
    "CacheResult": CacheResult,
    "Client": Client,
    "ClientRegistration": ClientRegistration,
    "ClientSettings": ClientSettings,
    "ComputeOptions": ComputeOptions,
    "ComputeRule": ComputeRule,
    "ComputeRuleset": ComputeRuleset,
    "ConditionQueryField": ConditionQueryField,
    "ConditionQueryFieldAllOf": ConditionQueryFieldAllOf,
    "ContainerResponse": ContainerResponse,
    "CriteriaQueryField": CriteriaQueryField,
    "CriteriaQueryFieldObject": CriteriaQueryFieldObject,
    "DataResponse": DataResponse,
    "DataResult": DataResult,
    "Dataset": Dataset,
    "DeleteArtifactRequest": DeleteArtifactRequest,
    "DeleteDataRequest": DeleteDataRequest,
    "DesignRulesRequest": DesignRulesRequest,
    "DesignerEvent": DesignerEvent,
    "DesignerOptions": DesignerOptions,
    "DesignerResult": DesignerResult,
    "EmailMessage": EmailMessage,
    "EmailResult": EmailResult,
    "EmailWithAttachment": EmailWithAttachment,
    "ExternalSource": ExternalSource,
    "Field": Field,
    "FileResult": FileResult,
    "GenerateRulesRequest": GenerateRulesRequest,
    "IdentityApplication": IdentityApplication,
    "IdentityMessage": IdentityMessage,
    "IdentityUser": IdentityUser,
    "MultipartRequest": MultipartRequest,
    "OperationRequest": OperationRequest,
    "OperationResponse": OperationResponse,
    "OperationTargetResponse": OperationTargetResponse,
    "OrderedQueryField": OrderedQueryField,
    "ProcessorRequest": ProcessorRequest,
    "ProcessorResult": ProcessorResult,
    "Project": Project,
    "PropertyDefinition": PropertyDefinition,
    "QueryExecuteRequest": QueryExecuteRequest,
    "QueryParameter": QueryParameter,
    "QuerySource": QuerySource,
    "RuleContainer": RuleContainer,
    "RuleEventData": RuleEventData,
    "RuleType": RuleType,
    "SaveContentRequest": SaveContentRequest,
    "ScaffoldRequest": ScaffoldRequest,
    "ScaffoldResult": ScaffoldResult,
    "Schema": Schema,
    "Subscription": Subscription,
    "SubscriptionDiscount": SubscriptionDiscount,
    "Template": Template,
    "UpdateArtifactRequest": UpdateArtifactRequest,
    "UpdateDataRequest": UpdateDataRequest,
    "UpdateRulesetResponse": UpdateRulesetResponse,
    "UploadResponse": UploadResponse,
    "User": User,
    "UserData": UserData,
    "UserQuery": UserQuery,
    "UserRegistration": UserRegistration,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public tokenUrl: string = '';
    public clientId: string = '';
    public clientSecret: string = '';
    
    private accessToken: string = '';
    private accessTokenExpiration: number = 0;

    async applyToRequest(requestOptions: localVarRequest.Options) {
        const token = await this.obtainToken();
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + token;
        }
    }
    
    private async obtainToken() {
      if (!this.accessToken || (this.accessTokenExpiration && new Date().getTime() >= this.accessTokenExpiration)) {

        const url = `https://${this.clientId}:${this.clientSecret}@${this.tokenUrl}?grant_type=client_credentials`;
        // const url = this.tokenUrl + `?grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`;

        let result: any = await (new Promise((resolve, reject) => {
          localVarRequest.post(url, { json: true }, (err, res, body) => {
            if (body) {
              resolve(body);
            }
            else {
              reject(new Error('Could not get Sparks API token.'));
            }
          });
        }));

        this.accessToken = result && result.access_token;
        // set expiration to one minute before
        this.accessTokenExpiration =
          new Date().getTime() +
          (result ? result.expires_in * 1000 : 0) -
          60000;
      }
      return this.accessToken;
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}