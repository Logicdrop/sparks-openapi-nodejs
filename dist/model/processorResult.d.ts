export declare class ProcessorResult {
    'duration'?: number;
    'activations'?: number;
    'exception'?: boolean;
    'error'?: string;
    'properties'?: {
        [key: string]: object;
    };
    'results'?: {
        [key: string]: object;
    };
    'messages'?: Array<string>;
    'matches'?: Array<string>;
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
