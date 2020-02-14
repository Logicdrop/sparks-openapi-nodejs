import { ClientSettings } from './clientSettings';
import { Subscription } from './subscription';
export declare class Client {
    'id'?: string;
    'name'?: string;
    'configs'?: {
        [key: string]: ClientSettings;
    };
    'enabled'?: boolean;
    'properties'?: {
        [key: string]: object;
    };
    'security'?: {
        [key: string]: ClientSettings;
    };
    'subscriptions'?: Array<Subscription>;
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
