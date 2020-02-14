export declare class Field {
    'name'?: string;
    'display'?: string;
    'description'?: string;
    'defaultValue'?: object;
    'format'?: string;
    'type'?: Field.TypeEnum;
    'mode'?: Field.ModeEnum;
    'mapping'?: string;
    'order'?: number;
    'key'?: boolean;
    'index'?: boolean;
    'enabled'?: boolean;
    'visible'?: boolean;
    'required'?: boolean;
    'min'?: number;
    'max'?: number;
    'properties'?: {
        [key: string]: object;
    };
    'children'?: Array<Field>;
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
export declare namespace Field {
    enum TypeEnum {
        STRING,
        INTEGER,
        DOUBLE,
        DECIMAL,
        BOOLEAN,
        OBJECT,
        DATE,
        DATETIME,
        TIME,
        LIST,
        SET,
        MAP
    }
    enum ModeEnum {
        READONLY,
        READWRITE,
        WRITEONLY
    }
}
