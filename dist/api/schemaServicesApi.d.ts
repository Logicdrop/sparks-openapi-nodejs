/// <reference types="node" />
import http = require('http');
import { ArtifactResponse } from '../model/artifactResponse';
import { DeleteArtifactRequest } from '../model/deleteArtifactRequest';
import { Schema } from '../model/schema';
import { UpdateArtifactRequest } from '../model/updateArtifactRequest';
import { Authentication } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';
export declare enum SchemaServicesApiApiKeys {
    api = 0
}
export declare class SchemaServicesApi {
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
    setApiKey(key: SchemaServicesApiApiKeys, value: string): void;
    oAuth: OAuth;
    tokenUrl: string;
    clientId: string;
    clientSecret: string;
    deleteSchema(client: string, project: string, artifact: string, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    deleteSchemas(client: string, project: string, deleteArtifactRequest: DeleteArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    getSchema(client: string, project: string, artifact: string, v?: string, view?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Schema;
    }>;
    listSchemas(client: string, project: string, view?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<Schema>;
    }>;
    saveSchema(client: string, project: string, schema: Schema, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Schema;
    }>;
    updateSchema(client: string, project: string, updateArtifactRequest: UpdateArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    updateSchemas(client: string, project: string, updateArtifactRequest: UpdateArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
}
