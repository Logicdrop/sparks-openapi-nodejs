export declare class RuleContainer {
    'client'?: string;
    'project'?: string;
    'ruleset'?: string;
    'display'?: string;
    'version'?: string;
    'description'?: string;
    'status'?: RuleContainer.StatusEnum;
    'published'?: Date;
    'stopped'?: Date;
    'uptime'?: string;
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
export declare namespace RuleContainer {
    enum StatusEnum {
        RUNNING,
        STOPPED,
        ERROR
    }
}
