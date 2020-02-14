export declare class UserRegistration {
    'email': string;
    'password': string;
    'firstName'?: string;
    'lastName'?: string;
    'referrer'?: string;
    'campaign'?: string;
    'plan'?: string;
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
