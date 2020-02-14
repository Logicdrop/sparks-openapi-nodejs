export declare class Assertion {
    'property'?: string;
    'should'?: Assertion.ShouldEnum;
    'expect'?: object;
    'message'?: string;
    'status'?: Assertion.StatusEnum;
    'enabled'?: boolean;
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
export declare namespace Assertion {
    enum ShouldEnum {
        EQUAL,
        NOTEQUAL
    }
    enum StatusEnum {
        PASS,
        FAIL
    }
}
