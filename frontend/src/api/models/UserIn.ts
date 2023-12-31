/**
 * Custom title
 * Here\'s a longer description of the custom **OpenAPI** schema
 *
 * OpenAPI spec version: 2.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Role } from '../models/Role';
import { HttpFile } from '../http/http';

export class UserIn {
    'username': string;
    'password': string;
    'role': Role;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "Role",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserIn.attributeTypeMap;
    }

    public constructor() {
    }
}



