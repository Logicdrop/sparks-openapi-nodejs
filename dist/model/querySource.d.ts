import { CriteriaQueryFieldObject } from './criteriaQueryFieldObject';
import { OrderedQueryField } from './orderedQueryField';
import { QueryParameter } from './queryParameter';
export declare class QuerySource {
    'properties'?: {
        [key: string]: object;
    };
    'parameters'?: Array<QueryParameter>;
    'name'?: string;
    'source'?: string;
    'ignoreNulls'?: boolean;
    'ignoreCase'?: boolean;
    'debug'?: boolean;
    'limit'?: number;
    'exclude'?: boolean;
    'expects'?: string;
    'projections'?: Array<string>;
    'ordering'?: Array<OrderedQueryField>;
    'criteria'?: Array<CriteriaQueryFieldObject>;
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
