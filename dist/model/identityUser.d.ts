export declare class IdentityUser {
    'subscriberId'?: string;
    'name'?: string;
    'email'?: string;
    'phone'?: string;
    'picture'?: string;
    'verified'?: boolean;
    'details'?: {
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
