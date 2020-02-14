export declare class User {
    'id'?: string;
    'email'?: string;
    'name'?: string;
    'picture'?: string;
    'enabled'?: boolean;
    'inviteCode'?: string;
    'roles'?: Array<string>;
    'permissions'?: Array<string>;
    'client'?: string;
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
