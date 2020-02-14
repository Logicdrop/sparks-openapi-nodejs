import { CacheRequestValue } from './cacheRequestValue';
export declare class CacheRequest {
    'key'?: string;
    'value'?: CacheRequestValue;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
