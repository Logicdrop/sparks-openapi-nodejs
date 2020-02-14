export declare class IdentityApplication {
    'id'?: string;
    'name'?: string;
    'roles'?: Array<string>;
    'secret'?: string;
    'allowedOrigins'?: Array<string>;
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
