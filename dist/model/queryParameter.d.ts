export declare class QueryParameter {
    'name'?: string;
    'type'?: string;
    'required'?: boolean;
    'value'?: string;
    '_default'?: string;
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
