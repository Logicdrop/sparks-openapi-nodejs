export declare class UpdateArtifactRequest {
    'ids': Array<string>;
    'name'?: string;
    'description'?: string;
    'tags'?: Array<string>;
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
