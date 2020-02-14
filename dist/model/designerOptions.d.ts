export declare class DesignerOptions {
    'debug'?: boolean;
    'threshold'?: number;
    'content'?: boolean;
    'tracing'?: boolean;
    'expand'?: boolean;
    'dictionary'?: boolean;
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
