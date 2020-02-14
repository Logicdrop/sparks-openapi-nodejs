/// <reference types="node" />
import http = require('http');
import { ArtifactReference } from '../model/artifactReference';
import { ArtifactResponse } from '../model/artifactResponse';
import { DeleteArtifactRequest } from '../model/deleteArtifactRequest';
import { Project } from '../model/project';
import { UpdateArtifactRequest } from '../model/updateArtifactRequest';
import { Authentication } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';
export declare enum ProjectServicesApiApiKeys {
    api = 0
}
export declare class ProjectServicesApi {
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
    setApiKey(key: ProjectServicesApiApiKeys, value: string): void;
    oAuth: OAuth;
    tokenUrl: string;
    clientId: string;
    clientSecret: string;
    deleteProject(client: string, project: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: DeleteArtifactRequest;
    }>;
    deleteProjects(client: string, deleteArtifactRequest: DeleteArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    getProject(client: string, project: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Project;
    }>;
    listProjects(client: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<Project>;
    }>;
    listReferences(client: string, project: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<ArtifactReference>;
    }>;
    saveProject(client: string, model: Project, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Project;
    }>;
    updateProject(client: string, updateArtifactRequest: UpdateArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    updateProjects(client: string, updateArtifactRequest: UpdateArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
}
