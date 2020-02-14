import { CriteriaQueryField } from './criteriaQueryField';
export declare class BetweenQueryField extends CriteriaQueryField {
    'name'?: string;
    'min'?: object;
    'max'?: object;
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
