/// <reference types="node" />
import http = require('http');
import { ArtifactResponse } from '../model/artifactResponse';
import { DataResponse } from '../model/dataResponse';
import { Dataset } from '../model/dataset';
import { DeleteArtifactRequest } from '../model/deleteArtifactRequest';
import { DeleteDataRequest } from '../model/deleteDataRequest';
import { ExternalSource } from '../model/externalSource';
import { SaveContentRequest } from '../model/saveContentRequest';
import { UpdateArtifactRequest } from '../model/updateArtifactRequest';
import { UpdateDataRequest } from '../model/updateDataRequest';
import { UploadResponse } from '../model/uploadResponse';
import { UserData } from '../model/userData';
import { Authentication } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';
import { RequestFile } from './apis';
export declare enum DataServicesApiApiKeys {
    api = 0
}
export declare class DataServicesApi {
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
    setApiKey(key: DataServicesApiApiKeys, value: string): void;
    oAuth: OAuth;
    tokenUrl: string;
    clientId: string;
    clientSecret: string;
    deleteDataset(client: string, project: string, artifact: string, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    deleteDatasets(client: string, project: string, deleteArtifactRequest: DeleteArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    deleteRecord(client: string, project: string, artifact: string, id: string, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: DataResponse;
    }>;
    deleteRecords(client: string, project: string, artifact: string, deleteDataRequest: DeleteDataRequest, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: DataResponse;
    }>;
    getDataset(client: string, project: string, artifact: string, v?: string, view?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Dataset;
    }>;
    getDatasetContent(client: string, project: string, artifact: string, v?: string, view?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: object;
    }>;
    getRecord(client: string, project: string, artifact: string, id: string, v?: string, view?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: UserData;
    }>;
    listDatasets(client: string, project: string, view?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<Dataset>;
    }>;
    listRecords(client: string, project: string, artifact: string, v?: string, criteria?: string, fields?: Array<string>, value?: string, view?: Array<string>, filter?: Array<string>, order?: Array<string>, tags?: Array<string>, ignoreCase?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<UserData>;
    }>;
    listRecordsByKey(client: string, project: string, artifact: string, key: string, value: string, v?: string, view?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<UserData>;
    }>;
    listSources(client: string, check?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<ExternalSource>;
    }>;
    saveDataset(client: string, project: string, dataset: Dataset, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Dataset;
    }>;
    saveDatasetContent(client: string, project: string, artifact: string, saveContentRequest: SaveContentRequest, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: object;
    }>;
    saveRecord(client: string, project: string, artifact: string, requestBody: {
        [key: string]: object;
    }, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: UserData;
    }>;
    updateDataset(client: string, project: string, updateArtifactRequest: UpdateArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    updateDatasetContent(client: string, project: string, artifact: string, updateDataRequest: UpdateDataRequest, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: object;
    }>;
    updateDatasetContentAt(client: string, project: string, artifact: string, index: string, updateDataRequest: UpdateDataRequest, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: object;
    }>;
    updateDatasets(client: string, project: string, updateArtifactRequest: UpdateArtifactRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: ArtifactResponse;
    }>;
    updateRecords(client: string, project: string, artifact: string, updateDataRequest: UpdateDataRequest, v?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: DataResponse;
    }>;
    uploadDataset(client: string, project: string, artifact: string, identity: string, v?: string, external?: string, file?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: UploadResponse;
    }>;
}
