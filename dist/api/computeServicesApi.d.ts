/// <reference types="node" />
import http = require('http');
import { ArtifactResponse } from '../model/artifactResponse';
import { ComputeRule } from '../model/computeRule';
import { ComputeRuleset } from '../model/computeRuleset';
import { ContainerResponse } from '../model/containerResponse';
import { DataResponse } from '../model/dataResponse';
import { DeleteArtifactRequest } from '../model/deleteArtifactRequest';
import { DeleteDataRequest } from '../model/deleteDataRequest';
import { DesignRulesRequest } from '../model/designRulesRequest';
import { DesignerResult } from '../model/designerResult';
import { GenerateRulesRequest } from '../model/generateRulesRequest';
import { ProcessorRequest } from '../model/processorRequest';
import { ProcessorResult } from '../model/processorResult';
import { RuleContainer } from '../model/ruleContainer';
import { UpdateArtifactRequest } from '../model/updateArtifactRequest';
import { UpdateRulesetResponse } from '../model/updateRulesetResponse';
import { UploadResponse } from '../model/uploadResponse';
import { Authentication } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';
import { RequestFile } from './apis';
export declare enum ComputeServicesApiApiKeys {
    api = 0
}
export declare class ComputeServicesApi {
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
    setApiKey(key: ComputeServicesApiApiKeys, value: string): void;
    oAuth: OAuth;
    tokenUrl: string;
    clientId: string;
    clientSecret: string;
    debugRules(client: string, designRulesRequest: DesignRulesRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: DesignerResult;
    }>;
    deleteRule(client: string, project: string, artifact: string, id: string, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: DataResponse;
    }>;
    deleteRules(client: string, project: string, artifact: string, deleteDataRequest: DeleteDataRequest, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: DataResponse;
    }>;
    deleteRuleset(client: string, project: string, artifact: string, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    deleteRulesets(client: string, project: string, deleteArtifactRequest: DeleteArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    executeRules(client: string, processorRequest: ProcessorRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ProcessorResult;
    }>;
    generateRules(client: string, generateRulesRequest: GenerateRulesRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    generateRuleset(client: string, project: string, artifact: string, v?: string, type?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    getRule(client: string, project: string, artifact: string, id: string, v?: string, view?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ComputeRule;
    }>;
    getRuleset(client: string, project: string, artifact: string, v?: string, view?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ComputeRuleset;
    }>;
    getRulesetContent(client: string, project: string, artifact: string, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    getRulesetExample(client: string, project: string, artifact: string, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    listContainers(client: string, project?: string, ruleset?: string, status?: 'running' | 'stopped', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ContainerResponse;
    }>;
    listRules(client: string, project: string, artifact: string, v?: string, criteria?: string, type?: 'any' | 'guided' | 'user', fields?: Array<string>, value?: string, view?: Array<string>, filter?: Array<string>, order?: Array<string>, tags?: Array<string>, ignoreCase?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<ComputeRule>;
    }>;
    listRulesByKey(client: string, project: string, artifact: string, key: string, value: string, v?: string, view?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<ComputeRule>;
    }>;
    listRulesets(client: string, project: string, view?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<ComputeRuleset>;
    }>;
    manageContainer(client: string, action: 'start' | 'stop' | 'update' | 'rebuild' | 'remove' | 'restart', ruleContainer: RuleContainer, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: RuleContainer;
    }>;
    saveRule(client: string, project: string, artifact: string, computeRule: ComputeRule, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ComputeRule;
    }>;
    saveRuleset(client: string, project: string, computeRuleset: ComputeRuleset, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ComputeRuleset;
    }>;
    updateRuleset(client: string, project: string, updateArtifactRequest: UpdateArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    updateRulesetContentFile(client: string, project: string, artifact: string, v?: string, file?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: UpdateRulesetResponse;
    }>;
    updateRulesetContentText(client: string, project: string, artifact: string, v?: string, body?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: UpdateRulesetResponse;
    }>;
    updateRulesetExample(client: string, project: string, artifact: string, v?: string, body?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: UpdateRulesetResponse;
    }>;
    updateRulesets(client: string, project: string, updateArtifactRequest: UpdateArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    uploadWorkbook(client: string, project: string, artifact: string, v?: string, merge?: boolean, file?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: UploadResponse;
    }>;
}
