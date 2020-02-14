export declare class ArtifactReference {
    'id'?: string;
    'artifact'?: string;
    'version'?: string;
    'name'?: string;
    'path'?: string;
    'url'?: string;
    'description'?: string;
    'tags'?: Array<string>;
    'properties'?: {
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
