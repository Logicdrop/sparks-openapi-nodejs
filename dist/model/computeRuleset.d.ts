import { RuleType } from './ruleType';
export declare class ComputeRuleset {
    'id'?: string;
    'name'?: string;
    'client'?: string;
    'project'?: string;
    'artifact'?: string;
    'version'?: string;
    'build'?: number;
    'url'?: string;
    'source'?: string;
    '_package'?: string;
    'identity'?: boolean;
    'stateless'?: boolean;
    'description'?: string;
    'created'?: Date;
    'modified'?: Date;
    'tags'?: Array<string>;
    'properties'?: {
        [key: string]: object;
    };
    'imports'?: Array<string>;
    'globals'?: {
        [key: string]: string;
    };
    'types'?: Array<RuleType>;
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
