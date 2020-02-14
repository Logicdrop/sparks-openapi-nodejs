export declare class EmailResult {
    'id'?: string;
    'subject'?: string;
    'created'?: Date;
    'sent'?: Date;
    'success'?: boolean;
    'message'?: string;
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
