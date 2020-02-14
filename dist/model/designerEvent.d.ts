import { RuleEventData } from './ruleEventData';
export declare class DesignerEvent {
    'event'?: DesignerEvent.EventEnum;
    'type'?: string;
    'message'?: string;
    'rule'?: string;
    'path'?: string;
    'name'?: string;
    'source'?: string;
    'row'?: number;
    'id'?: string;
    'timestamp'?: number;
    'triggers'?: Array<object>;
    'current'?: RuleEventData;
    'previous'?: RuleEventData;
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
export declare namespace DesignerEvent {
    enum EventEnum {
        INSERT,
        DELETE,
        UPDATE,
        BEFOREMATCH,
        AFTERMATCH,
        MATCHCREATED,
        MATCHCANCELLED
    }
}
