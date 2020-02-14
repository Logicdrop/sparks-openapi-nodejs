export declare class EmailMessage {
    'project'?: string;
    'template'?: string;
    'version'?: string;
    'from'?: string;
    'replyTo'?: string;
    'to'?: Array<string>;
    'cc'?: Array<string>;
    'bcc'?: Array<string>;
    'priority'?: number;
    'subject'?: string;
    'body'?: string;
    'properties'?: {
        [key: string]: object;
    };
    'attachments'?: {
        [key: string]: string;
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
