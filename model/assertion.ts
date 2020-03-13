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

/**
* Assertions to apply
*/
export class Assertion {
    /**
    * Attribute to test
    */
    'property'?: string;
    /**
    * Test to perform
    */
    'should'?: Assertion.ShouldEnum;
    /**
    * Expected result
    */
    'expect'?: object;
    /**
    * Response
    */
    'message'?: string;
    /**
    * Status of the assertion
    */
    'status'?: Assertion.StatusEnum;
    /**
    * Enabled?
    */
    'enabled'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "property",
            "baseName": "property",
            "type": "string"
        },
        {
            "name": "should",
            "baseName": "should",
            "type": "Assertion.ShouldEnum"
        },
        {
            "name": "expect",
            "baseName": "expect",
            "type": "object"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Assertion.StatusEnum"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Assertion.attributeTypeMap;
    }
}

export namespace Assertion {
    export enum ShouldEnum {
        EQUAL = <any> 'EQUAL',
        NOTEQUAL = <any> 'NOT_EQUAL'
    }
    export enum StatusEnum {
        PASS = <any> 'PASS',
        FAIL = <any> 'FAIL'
    }
}
