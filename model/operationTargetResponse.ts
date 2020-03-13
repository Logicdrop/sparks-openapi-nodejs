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

import { RequestFile } from "../api";

export class OperationTargetResponse {
    /**
    * Source to perform action on
    */
    'origin'?: string;
    /**
    * Action or target
    */
    'target'?: string;
    /**
    * Size (number of records, bytes, etc.
    */
    'size'?: number;
    /**
    * Resulting properties
    */
    'properties'?: { [key: string]: object; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "origin",
            "baseName": "origin",
            "type": "string"
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        }    ];

    static getAttributeTypeMap() {
        return OperationTargetResponse.attributeTypeMap;
    }
}

