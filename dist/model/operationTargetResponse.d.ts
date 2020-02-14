export declare class OperationTargetResponse {
    'origin'?: string;
    'target'?: string;
    'size'?: number;
    'properties'?: {
        [key: string]: object;
    };
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
