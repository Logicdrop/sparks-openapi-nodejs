export declare class UpdateDataRequest {
    'ids': Array<string>;
    'skipNulls'?: boolean;
    'properties'?: {
        [key: string]: object;
    };
    'content'?: {
        [key: string]: object;
    };
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
