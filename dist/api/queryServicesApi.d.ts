/// <reference types="node" />
import http = require('http');
import { ArtifactResponse } from '../model/artifactResponse';
import { DeleteArtifactRequest } from '../model/deleteArtifactRequest';
import { QueryExecuteRequest } from '../model/queryExecuteRequest';
import { UpdateArtifactRequest } from '../model/updateArtifactRequest';
import { UserQuery } from '../model/userQuery';
import { Authentication } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';
export declare enum QueryServicesApiApiKeys {
    api = 0
}
export declare class QueryServicesApi {
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
    setApiKey(key: QueryServicesApiApiKeys, value: string): void;
    oAuth: OAuth;
    tokenUrl: string;
    clientId: string;
    clientSecret: string;
    deleteQueries(client: string, project: string, deleteArtifactRequest: DeleteArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    deleteQuery(client: string, project: string, artifact: string, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    executeQuery(client: string, queryExecuteRequest: QueryExecuteRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: object;
    }>;
    getQuery(client: string, project: string, artifact: string, v?: string, view?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: UserQuery;
    }>;
    listQueries(client: string, project: string, view?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<UserQuery>;
    }>;
    runQuery(client: string, project: string, artifact: string, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: object;
    }>;
    saveQuery(client: string, project: string, userQuery: UserQuery, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: UserQuery;
    }>;
    updateQueries(client: string, project: string, updateArtifactRequest: UpdateArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    updateQuery(client: string, project: string, updateArtifactRequest: UpdateArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
}
