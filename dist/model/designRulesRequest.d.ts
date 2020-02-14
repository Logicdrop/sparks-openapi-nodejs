import { Assertion } from './assertion';
import { DesignerOptions } from './designerOptions';
export declare class DesignRulesRequest {
    'project'?: string;
    'ruleset'?: string;
    'version'?: string;
    'properties'?: {
        [key: string]: object;
    };
    'inputs'?: Array<{
        [key: string]: object;
    }>;
    'outputs'?: Array<string>;
    'options'?: DesignerOptions;
    'rules'?: Array<string>;
    'assertions'?: Array<Assertion>;
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
