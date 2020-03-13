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

import { Assertion } from './assertion';
import { DesignerEvent } from './designerEvent';
import { RequestFile } from "../api";

export class DesignerResult {
    /**
    * Timestamp
    */
    'timestamp'?: string;
    'duration'?: number;
    'activations'?: number;
    'exception'?: boolean;
    'error'?: string;
    'properties'?: { [key: string]: object; };
    /**
    * Assertion results
    */
    'assertions'?: Array<Assertion>;
    'results'?: { [key: string]: object; };
    /**
    * Flattened data
    */
    'dictionary'?: { [key: string]: object; };
    'messages'?: Array<string>;
    'matches'?: Array<string>;
    /**
    * Events
    */
    'events'?: Array<DesignerEvent>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string"
        },
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
            "name": "assertions",
            "baseName": "assertions",
            "type": "Array<Assertion>"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "dictionary",
            "baseName": "dictionary",
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
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<DesignerEvent>"
        }    ];

    static getAttributeTypeMap() {
        return DesignerResult.attributeTypeMap;
    }
}

