import { PropertyDefinition } from './propertyDefinition';
export declare class RuleType {
    'name'?: string;
    'properties'?: Array<PropertyDefinition>;
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
