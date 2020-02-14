export declare class Dataset {
    'id'?: string;
    'name'?: string;
    'client'?: string;
    'project'?: string;
    'artifact'?: string;
    'version'?: string;
    'build'?: number;
    'url'?: string;
    'external'?: boolean;
    'source'?: string;
    'identity'?: string;
    'description'?: string;
    'created'?: Date;
    'modified'?: Date;
    'tags'?: Array<string>;
    'properties'?: {
        [key: string]: object;
    };
    'content'?: object;
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
