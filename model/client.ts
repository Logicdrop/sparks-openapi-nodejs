/**
 * Sparks OpenAPI
 * Generated documentation for the Logicdrop Sparks API and OpenAPI clients.  Logicdrop Sparks lets users build rules, analyze data, and automate documents.  Use it to make decisions faster, generate documents better, and learn from your data.  ### Documentation - [User Documentation](https://docs.logicdrop.com)  ### Modules - [Sparks Compute](https://docs.logicdrop.com/rules/introduction) - [Sparks Decision Tables](https://docs.logicdrop.com/rules/authoring-decision-tables) - [Sparks Documents](https://docs.logicdrop.com/documents/introduction)  ### Clients - [OpenAPI Clients](https://docs.logicdrop.com/development/sample-clients)  ### Security - [Authorizing API Requests](https://docs.logicdrop.com/development/authorization) 
 *
 * The version of the OpenAPI document: v_VERSION_, build# _BUILD_
 * Contact: support@logicdrop.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ClientSettings } from './clientSettings';
import { Subscription } from './subscription';
import { RequestFile } from "../api";

export class Client {
    'id'?: string;
    'name'?: string;
    'configs'?: { [key: string]: ClientSettings; };
    'enabled'?: boolean;
    'properties'?: { [key: string]: object; };
    'security'?: { [key: string]: ClientSettings; };
    'subscriptions'?: Array<Subscription>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "configs",
            "baseName": "configs",
            "type": "{ [key: string]: ClientSettings; }"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "security",
            "baseName": "security",
            "type": "{ [key: string]: ClientSettings; }"
        },
        {
            "name": "subscriptions",
            "baseName": "subscriptions",
            "type": "Array<Subscription>"
        }    ];

    static getAttributeTypeMap() {
        return Client.attributeTypeMap;
    }
}

