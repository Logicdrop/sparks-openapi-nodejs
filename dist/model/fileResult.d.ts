export declare class FileResult {
    'name'?: string;
    'path'?: string;
    'date'?: Date;
    'extension'?: string;
    'type'?: string;
    'size'?: number;
    'filename'?: string;
    'folders'?: string;
    'source'?: string;
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
