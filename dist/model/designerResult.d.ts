import { Assertion } from './assertion';
import { DesignerEvent } from './designerEvent';
export declare class DesignerResult {
    'timestamp'?: string;
    'duration'?: number;
    'activations'?: number;
    'exception'?: boolean;
    'error'?: string;
    'properties'?: {
        [key: string]: object;
    };
    'assertions'?: Array<Assertion>;
    'results'?: {
        [key: string]: object;
    };
    'dictionary'?: {
        [key: string]: object;
    };
    'messages'?: Array<string>;
    'matches'?: Array<string>;
    'events'?: Array<DesignerEvent>;
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
