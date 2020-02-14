export declare class ComputeRule {
    'id'?: string;
    'name'?: string;
    'client'?: string;
    'project'?: string;
    'version'?: string;
    'build'?: number;
    'url'?: string;
    'agendaGroup'?: string;
    'activationGroup'?: string;
    'ruleflowGroup'?: string;
    'noLoop'?: boolean;
    'lockOnActive'?: boolean;
    'enabled'?: boolean;
    'log'?: boolean;
    'ruleset'?: string;
    'description'?: string;
    'created'?: Date;
    'modified'?: Date;
    'tags'?: Array<string>;
    'properties'?: {
        [key: string]: object;
    };
    'salience'?: number;
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
