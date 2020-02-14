export declare class ContainerResponse {
    'display'?: string;
    'description'?: string;
    'client'?: string;
    'project'?: string;
    'ruleset'?: string;
    'version'?: string;
    'uptime'?: string;
    'status'?: ContainerResponse.StatusEnum;
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
export declare namespace ContainerResponse {
    enum StatusEnum {
        RUNNING,
        STOPPED,
        ERROR
    }
}
