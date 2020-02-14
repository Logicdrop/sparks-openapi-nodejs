export declare class PropertyDefinition {
    'name'?: string;
    'type'?: PropertyDefinition.TypeEnum;
    'value'?: string;
    'key'?: boolean;
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
export declare namespace PropertyDefinition {
    enum TypeEnum {
        String,
        Integer,
        Double,
        Set,
        List,
        Map
    }
}
