// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ConversationIn } from '../models/ConversationIn';
import { ConversationOut } from '../models/ConversationOut';
import { FileOut } from '../models/FileOut';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { MessageIn } from '../models/MessageIn';
import { UserIn } from '../models/UserIn';
import { UserOut } from '../models/UserOut';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create Conversation
     * @param conversationIn 
     */
    public async createConversationCreateConversationPost(conversationIn: ConversationIn, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'conversationIn' is not null or undefined
        if (conversationIn === null || conversationIn === undefined) {
            throw new RequiredError("DefaultApi", "createConversationCreateConversationPost", "conversationIn");
        }


        // Path Params
        const localVarPath = '/create_conversation';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(conversationIn, "ConversationIn", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create User
     * @param userIn 
     */
    public async createUserCreateUserPost(userIn: UserIn, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userIn' is not null or undefined
        if (userIn === null || userIn === undefined) {
            throw new RequiredError("DefaultApi", "createUserCreateUserPost", "userIn");
        }


        // Path Params
        const localVarPath = '/create_user';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userIn, "UserIn", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get All Files
     */
    public async getAllFilesFileListGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/file_list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Conversation
     * @param conversationId 
     */
    public async getConversationGetConversationGet(conversationId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError("DefaultApi", "getConversationGetConversationGet", "conversationId");
        }


        // Path Params
        const localVarPath = '/get_conversation';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (conversationId !== undefined) {
            requestContext.setQueryParam("conversation_id", ObjectSerializer.serialize(conversationId, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Messages
     * @param conversationId 
     */
    public async getMessagesMessagesGet(conversationId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError("DefaultApi", "getMessagesMessagesGet", "conversationId");
        }


        // Path Params
        const localVarPath = '/messages';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (conversationId !== undefined) {
            requestContext.setQueryParam("conversation_id", ObjectSerializer.serialize(conversationId, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get User
     */
    public async getUserGetUsersGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/get_users';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update Conversation
     * @param userId 
     * @param conversationId 
     * @param messageIn 
     */
    public async updateConversationUpdateConversationPost(userId: number, conversationId: number, messageIn: MessageIn, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "updateConversationUpdateConversationPost", "userId");
        }


        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError("DefaultApi", "updateConversationUpdateConversationPost", "conversationId");
        }


        // verify required parameter 'messageIn' is not null or undefined
        if (messageIn === null || messageIn === undefined) {
            throw new RequiredError("DefaultApi", "updateConversationUpdateConversationPost", "messageIn");
        }


        // Path Params
        const localVarPath = '/update_conversation';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (userId !== undefined) {
            requestContext.setQueryParam("user_id", ObjectSerializer.serialize(userId, "number", ""));
        }

        // Query Params
        if (conversationId !== undefined) {
            requestContext.setQueryParam("conversation_id", ObjectSerializer.serialize(conversationId, "number", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(messageIn, "MessageIn", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createConversationCreateConversationPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createConversationCreateConversationPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createUserCreateUserPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createUserCreateUserPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllFilesFileListGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllFilesFileListGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<FileOut> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<FileOut> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<FileOut>", ""
            ) as Array<FileOut>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<FileOut> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<FileOut>", ""
            ) as Array<FileOut>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConversationGetConversationGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConversationGetConversationGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConversationOut >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConversationOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConversationOut", ""
            ) as ConversationOut;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConversationOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConversationOut", ""
            ) as ConversationOut;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMessagesMessagesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMessagesMessagesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserGetUsersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUserGetUsersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<UserOut> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<UserOut> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<UserOut>", ""
            ) as Array<UserOut>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<UserOut> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<UserOut>", ""
            ) as Array<UserOut>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateConversationUpdateConversationPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateConversationUpdateConversationPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
