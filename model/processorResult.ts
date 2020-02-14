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

export class ProcessorResult {
    'duration'?: number;
    'activations'?: number;
    'exception'?: boolean;
    'error'?: string;
    'properties'?: { [key: string]: object; };
    'results'?: { [key: string]: object; };
    'messages'?: Array<string>;
    'matches'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "activations",
            "baseName": "activations",
            "type": "number"
        },
        {
            "name": "exception",
            "baseName": "exception",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<string>"
        },
        {
            "name": "matches",
            "baseName": "matches",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ProcessorResult.attributeTypeMap;
    }
}

