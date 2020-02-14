export declare class GenerateRulesRequest {
    'ruleset'?: string;
    'project'?: string;
    'version'?: string;
    'content'?: boolean;
    'rules': Array<string>;
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
