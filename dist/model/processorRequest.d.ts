import { ComputeOptions } from './computeOptions';
export declare class ProcessorRequest {
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
    'options'?: ComputeOptions;
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
