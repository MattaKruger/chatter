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

import { HttpFile } from '../http/http';

export class ConversationOut {
    'name': string;
    'createdAt'?: Date | null;
    'updatedAt': Date | null;
    'conversationId': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "conversationId",
            "baseName": "conversation_id",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConversationOut.attributeTypeMap;
    }

    public constructor() {
    }
}

