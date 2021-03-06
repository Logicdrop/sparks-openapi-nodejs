import { CriteriaQueryField } from './criteriaQueryField';
export declare class ConditionQueryField extends CriteriaQueryField {
    'name'?: string;
    'operator'?: string;
    'value'?: object;
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
