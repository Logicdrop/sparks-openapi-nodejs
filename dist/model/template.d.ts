export declare class Template {
    'id'?: string;
    'name'?: string;
    'client'?: string;
    'project'?: string;
    'artifact'?: string;
    'version'?: string;
    'build'?: number;
    'url'?: string;
    'description'?: string;
    'created'?: Date;
    'modified'?: Date;
    'tags'?: Array<string>;
    'properties'?: {
        [key: string]: object;
    };
    'template'?: string;
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
