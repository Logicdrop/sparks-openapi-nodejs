export declare class Project {
    'id'?: string;
    'name'?: string;
    'client'?: string;
    'artifact'?: string;
    'version'?: string;
    'url'?: string;
    'description'?: string;
    'created'?: Date;
    'modified'?: Date;
    'tags'?: Array<string>;
    'properties'?: {
        [key: string]: object;
    };
    'user'?: string;
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
