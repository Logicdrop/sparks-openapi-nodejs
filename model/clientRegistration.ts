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

import { RequestFile } from "../api";

export class ClientRegistration {
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

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string"
        },
        {
            "name": "clientName",
            "baseName": "clientName",
            "type": "string"
        },
        {
            "name": "couponCode",
            "baseName": "couponCode",
            "type": "string"
        },
        {
            "name": "referrer",
            "baseName": "referrer",
            "type": "string"
        },
        {
            "name": "campaign",
            "baseName": "campaign",
            "type": "string"
        },
        {
            "name": "subscriberId",
            "baseName": "subscriberId",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "picture",
            "baseName": "picture",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "string"
        },
        {
            "name": "metaEmployees",
            "baseName": "metaEmployees",
            "type": "string"
        },
        {
            "name": "metaRole",
            "baseName": "metaRole",
            "type": "string"
        },
        {
            "name": "metaChallenge",
            "baseName": "metaChallenge",
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
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "stripeCustomerId",
            "baseName": "stripeCustomerId",
            "type": "string"
        },
        {
            "name": "stripeSubscriptionId",
            "baseName": "stripeSubscriptionId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ClientRegistration.attributeTypeMap;
    }
}

