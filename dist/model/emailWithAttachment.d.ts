import { EmailMessage } from './emailMessage';
import { RequestFile } from "../api";
export declare class EmailWithAttachment {
    'message'?: EmailMessage;
    'attachment'?: RequestFile;
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
