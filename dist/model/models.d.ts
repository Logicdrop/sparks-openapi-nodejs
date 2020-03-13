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
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    tokenUrl: string;
    clientId: string;
    clientSecret: string;
    username: string;
    password: string;
    private accessToken;
    private accessTokenExpiration;
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void>;
    private obtainToken;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
