export declare class UploadResponse {
    'project'?: string;
    'artifact'?: string;
    'records'?: number;
    'filenames'?: Array<string>;
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
