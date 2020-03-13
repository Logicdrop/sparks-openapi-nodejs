/// <reference types="node" />
export * from './adminServicesApi';
import { AdminServicesApi } from './adminServicesApi';
export * from './cacheServicesApi';
import { CacheServicesApi } from './cacheServicesApi';
export * from './clientServicesApi';
import { ClientServicesApi } from './clientServicesApi';
export * from './computeServicesApi';
import { ComputeServicesApi } from './computeServicesApi';
export * from './contentServicesApi';
import { ContentServicesApi } from './contentServicesApi';
export * from './dataServicesApi';
import { DataServicesApi } from './dataServicesApi';
export * from './emailServicesApi';
import { EmailServicesApi } from './emailServicesApi';
export * from './kioskServicesApi';
import { KioskServicesApi } from './kioskServicesApi';
export * from './officeServicesApi';
import { OfficeServicesApi } from './officeServicesApi';
export * from './packageServicesApi';
import { PackageServicesApi } from './packageServicesApi';
export * from './platformServicesApi';
import { PlatformServicesApi } from './platformServicesApi';
export * from './projectServicesApi';
import { ProjectServicesApi } from './projectServicesApi';
export * from './queryServicesApi';
import { QueryServicesApi } from './queryServicesApi';
export * from './schemaServicesApi';
import { SchemaServicesApi } from './schemaServicesApi';
export * from './templateServicesApi';
import { TemplateServicesApi } from './templateServicesApi';
import * as fs from 'fs';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.ClientResponse;
    body: any;
    statusCode?: number | undefined;
    constructor(response: http.ClientResponse, body: any, statusCode?: number | undefined);
}
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare const APIS: (typeof AdminServicesApi | typeof CacheServicesApi | typeof ClientServicesApi | typeof ComputeServicesApi | typeof ContentServicesApi | typeof DataServicesApi | typeof EmailServicesApi | typeof KioskServicesApi | typeof OfficeServicesApi | typeof PackageServicesApi | typeof PlatformServicesApi | typeof ProjectServicesApi | typeof QueryServicesApi | typeof SchemaServicesApi | typeof TemplateServicesApi)[];
