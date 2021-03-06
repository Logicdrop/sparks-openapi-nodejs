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

import { ComputeOptions } from './computeOptions';
import { RequestFile } from "../api";

export class ProcessorRequest {
    /**
    * Project name
    */
    'project'?: string;
    /**
    * Ruleset name
    */
    'ruleset'?: string;
    /**
    * Ruleset version
    */
    'version'?: string;
    /**
    * User properties
    */
    'properties'?: { [key: string]: object; };
    /**
    * Inputs to process
    */
    'inputs'?: Array<{ [key: string]: object; }>;
    /**
    * Outputs to return (by name)
    */
    'outputs'?: Array<string>;
    'options'?: ComputeOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "project",
            "baseName": "project",
            "type": "string"
        },
        {
            "name": "ruleset",
            "baseName": "ruleset",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<{ [key: string]: object; }>"
        },
        {
            "name": "outputs",
            "baseName": "outputs",
            "type": "Array<string>"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "ComputeOptions"
        }    ];

    static getAttributeTypeMap() {
        return ProcessorRequest.attributeTypeMap;
    }
}

