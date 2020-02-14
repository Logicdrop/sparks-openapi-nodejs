/**
 * Sparks OpenAPI
 * Generated documentation for the Logicdrop Sparks API and OpenAPI clients.  Logicdrop Sparks lets users build rules, analyze data, and automate documents.  Use it to make decisions faster, generate documents better, and learn from your data.  ### Documentation - [User Documentation](https://docs.logicdrop.com)  ### Modules - [Sparks Compute](https://docs.logicdrop.com/rules/introduction) - [Sparks Decision Tables](https://docs.logicdrop.com/rules/authoring-decision-tables) - [Sparks Documents](https://docs.logicdrop.com/documents/introduction)  ### Clients - [OpenAPI Clients](https://docs.logicdrop.com/development/sample-clients)  ### Security - [Authorizing API Requests](https://docs.logicdrop.com/development/authorization) 
 *
 * The version of the OpenAPI document: v_VERSION_._BUILD_
 * Contact: support@logicdrop.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SubscriptionDiscount } from './subscriptionDiscount';
import { RequestFile } from "../api";

export class Subscription {
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
    'limits'?: { [key: string]: number; };
    'discounts'?: Array<SubscriptionDiscount>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentId",
            "baseName": "paymentId",
            "type": "string"
        },
        {
            "name": "productId",
            "baseName": "productId",
            "type": "string"
        },
        {
            "name": "term",
            "baseName": "term",
            "type": "Date"
        },
        {
            "name": "productName",
            "baseName": "productName",
            "type": "string"
        },
        {
            "name": "productTier",
            "baseName": "productTier",
            "type": "string"
        },
        {
            "name": "autoPay",
            "baseName": "autoPay",
            "type": "boolean"
        },
        {
            "name": "paymentAmount",
            "baseName": "paymentAmount",
            "type": "number"
        },
        {
            "name": "paymentTerm",
            "baseName": "paymentTerm",
            "type": "string"
        },
        {
            "name": "paymentCurrency",
            "baseName": "paymentCurrency",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "ccLast4",
            "baseName": "ccLast4",
            "type": "string"
        },
        {
            "name": "ccExpiration",
            "baseName": "ccExpiration",
            "type": "string"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "address1",
            "baseName": "address1",
            "type": "string"
        },
        {
            "name": "address2",
            "baseName": "address2",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "contactPhone",
            "baseName": "contactPhone",
            "type": "string"
        },
        {
            "name": "contactEmail",
            "baseName": "contactEmail",
            "type": "string"
        },
        {
            "name": "modules",
            "baseName": "modules",
            "type": "Array<string>"
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "{ [key: string]: number; }"
        },
        {
            "name": "discounts",
            "baseName": "discounts",
            "type": "Array<SubscriptionDiscount>"
        }    ];

    static getAttributeTypeMap() {
        return Subscription.attributeTypeMap;
    }
}
