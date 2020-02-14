import { SubscriptionDiscount } from './subscriptionDiscount';
export declare class Subscription {
    'paymentId'?: string;
    'productId'?: string;
    'term'?: Date;
    'productName'?: string;
    'productTier'?: string;
    'autoPay'?: boolean;
    'paymentAmount'?: number;
    'paymentTerm'?: string;
    'paymentCurrency'?: string;
    'id'?: string;
    'ccLast4'?: string;
    'ccExpiration'?: string;
    'company'?: string;
    'name'?: string;
    'address1'?: string;
    'address2'?: string;
    'city'?: string;
    'state'?: string;
    'postalCode'?: string;
    'country'?: string;
    'contactPhone'?: string;
    'contactEmail'?: string;
    'modules'?: Array<string>;
    'limits'?: {
        [key: string]: number;
    };
    'discounts'?: Array<SubscriptionDiscount>;
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
