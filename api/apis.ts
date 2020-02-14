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
export * from './securityServicesApi';
import { SecurityServicesApi } from './securityServicesApi';
export * from './templateServicesApi';
import { TemplateServicesApi } from './templateServicesApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.ClientResponse, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [AdminServicesApi, CacheServicesApi, ClientServicesApi, ComputeServicesApi, ContentServicesApi, DataServicesApi, EmailServicesApi, KioskServicesApi, OfficeServicesApi, PackageServicesApi, PlatformServicesApi, ProjectServicesApi, QueryServicesApi, SchemaServicesApi, SecurityServicesApi, TemplateServicesApi];
