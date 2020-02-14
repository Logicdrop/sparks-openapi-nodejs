export declare class ClientRegistration {
    'subscription': string;
    'clientName': string;
    'couponCode'?: string;
    'referrer'?: string;
    'campaign'?: string;
    'subscriberId'?: string;
    'email'?: string;
    'picture'?: string;
    'name'?: string;
    'companyName'?: string;
    'metaEmployees'?: string;
    'metaRole'?: string;
    'metaChallenge'?: string;
    'address1'?: string;
    'address2'?: string;
    'city'?: string;
    'state'?: string;
    'postalCode'?: string;
    'country'?: string;
    'phoneNumber'?: string;
    'stripeCustomerId'?: string;
    'stripeSubscriptionId'?: string;
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
