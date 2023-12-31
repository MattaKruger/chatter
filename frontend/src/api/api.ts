/* tslint:disable */
/* eslint-disable */
/**
 * Custom title
 * Here\'s a longer description of the custom **OpenAPI** schema
 *
 * The version of the OpenAPI document: 2.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface AgentIn
 */
export interface AgentIn {
    /**
     * 
     * @type {string}
     * @memberof AgentIn
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof AgentIn
     */
    'prompt': string;
    /**
     * 
     * @type {string}
     * @memberof AgentIn
     */
    'model'?: string;
    /**
     * 
     * @type {number}
     * @memberof AgentIn
     */
    'conversation_id': number;
}
/**
 * 
 * @export
 * @interface AgentOut
 */
export interface AgentOut {
    /**
     * 
     * @type {string}
     * @memberof AgentOut
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof AgentOut
     */
    'prompt': string;
    /**
     * 
     * @type {string}
     * @memberof AgentOut
     */
    'model'?: string;
    /**
     * 
     * @type {number}
     * @memberof AgentOut
     */
    'conversation_id': number;
    /**
     * 
     * @type {number}
     * @memberof AgentOut
     */
    'agent_id': number;
}
/**
 * 
 * @export
 * @interface ConversationIn
 */
export interface ConversationIn {
    /**
     * 
     * @type {string}
     * @memberof ConversationIn
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ConversationIn
     */
    'created_at'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConversationIn
     */
    'updated_at': string | null;
}
/**
 * 
 * @export
 * @interface ConversationOut
 */
export interface ConversationOut {
    /**
     * 
     * @type {string}
     * @memberof ConversationOut
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ConversationOut
     */
    'created_at'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConversationOut
     */
    'updated_at': string | null;
    /**
     * 
     * @type {number}
     * @memberof ConversationOut
     */
    'conversation_id': number;
}
/**
 * 
 * @export
 * @interface FileOut
 */
export interface FileOut {
    /**
     * 
     * @type {number}
     * @memberof FileOut
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof FileOut
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    'detail'?: Array<ValidationError>;
}
/**
 * 
 * @export
 * @interface MessageIn
 */
export interface MessageIn {
    /**
     * 
     * @type {number}
     * @memberof MessageIn
     */
    'conversation_id': number;
    /**
     * 
     * @type {string}
     * @memberof MessageIn
     */
    'content': string;
    /**
     * 
     * @type {string}
     * @memberof MessageIn
     */
    'timestamp'?: string;
    /**
     * 
     * @type {number}
     * @memberof MessageIn
     */
    'user_id': number;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const Role = {
    Admin: 'admin',
    Default: 'default'
} as const;

export type Role = typeof Role[keyof typeof Role];


/**
 * 
 * @export
 * @interface UserIn
 */
export interface UserIn {
    /**
     * 
     * @type {string}
     * @memberof UserIn
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof UserIn
     */
    'password': string;
    /**
     * 
     * @type {Role}
     * @memberof UserIn
     */
    'role': Role;
}


/**
 * 
 * @export
 * @interface UserOut
 */
export interface UserOut {
    /**
     * 
     * @type {string}
     * @memberof UserOut
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof UserOut
     */
    'password': string;
    /**
     * 
     * @type {Role}
     * @memberof UserOut
     */
    'role': Role;
    /**
     * 
     * @type {number}
     * @memberof UserOut
     */
    'user_id': number;
}


/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {Array<ValidationErrorLocInner>}
     * @memberof ValidationError
     */
    'loc': Array<ValidationErrorLocInner>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'msg': string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'type': string;
}
/**
 * 
 * @export
 * @interface ValidationErrorLocInner
 */
export interface ValidationErrorLocInner {
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Agent
         * @param {AgentIn} agentIn 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAgentCreateAgentPost: async (agentIn: AgentIn, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'agentIn' is not null or undefined
            assertParamExists('createAgentCreateAgentPost', 'agentIn', agentIn)
            const localVarPath = `/create_agent`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(agentIn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create Conversation
         * @param {ConversationIn} conversationIn 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConversationCreateConversationPost: async (conversationIn: ConversationIn, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'conversationIn' is not null or undefined
            assertParamExists('createConversationCreateConversationPost', 'conversationIn', conversationIn)
            const localVarPath = `/create_conversation`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(conversationIn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create User
         * @param {UserIn} userIn 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUserCreateUserPost: async (userIn: UserIn, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userIn' is not null or undefined
            assertParamExists('createUserCreateUserPost', 'userIn', userIn)
            const localVarPath = `/create_user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userIn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Agents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAgentsGetAgentsPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/get_agents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get All Files
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllFilesFileListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/file_list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Conversation
         * @param {number} conversationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConversationGetConversationGet: async (conversationId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'conversationId' is not null or undefined
            assertParamExists('getConversationGetConversationGet', 'conversationId', conversationId)
            const localVarPath = `/get_conversation`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (conversationId !== undefined) {
                localVarQueryParameter['conversation_id'] = conversationId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Messages
         * @param {number} conversationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMessagesMessagesGet: async (conversationId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'conversationId' is not null or undefined
            assertParamExists('getMessagesMessagesGet', 'conversationId', conversationId)
            const localVarPath = `/messages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (conversationId !== undefined) {
                localVarQueryParameter['conversation_id'] = conversationId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserGetUsersGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/get_users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Conversation
         * @param {number} userId 
         * @param {number} conversationId 
         * @param {MessageIn} messageIn 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConversationUpdateConversationPost: async (userId: number, conversationId: number, messageIn: MessageIn, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateConversationUpdateConversationPost', 'userId', userId)
            // verify required parameter 'conversationId' is not null or undefined
            assertParamExists('updateConversationUpdateConversationPost', 'conversationId', conversationId)
            // verify required parameter 'messageIn' is not null or undefined
            assertParamExists('updateConversationUpdateConversationPost', 'messageIn', messageIn)
            const localVarPath = `/update_conversation`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }

            if (conversationId !== undefined) {
                localVarQueryParameter['conversation_id'] = conversationId;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(messageIn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Agent
         * @param {AgentIn} agentIn 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAgentCreateAgentPost(agentIn: AgentIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAgentCreateAgentPost(agentIn, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.createAgentCreateAgentPost']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Create Conversation
         * @param {ConversationIn} conversationIn 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createConversationCreateConversationPost(conversationIn: ConversationIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createConversationCreateConversationPost(conversationIn, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.createConversationCreateConversationPost']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Create User
         * @param {UserIn} userIn 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUserCreateUserPost(userIn: UserIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUserCreateUserPost(userIn, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.createUserCreateUserPost']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get Agents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAgentsGetAgentsPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AgentOut>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAgentsGetAgentsPost(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.getAgentsGetAgentsPost']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get All Files
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllFilesFileListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FileOut>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllFilesFileListGet(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.getAllFilesFileListGet']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get Conversation
         * @param {number} conversationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConversationGetConversationGet(conversationId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConversationOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConversationGetConversationGet(conversationId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.getConversationGetConversationGet']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get Messages
         * @param {number} conversationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMessagesMessagesGet(conversationId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMessagesMessagesGet(conversationId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.getMessagesMessagesGet']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserGetUsersGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserOut>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserGetUsersGet(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.getUserGetUsersGet']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Update Conversation
         * @param {number} userId 
         * @param {number} conversationId 
         * @param {MessageIn} messageIn 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateConversationUpdateConversationPost(userId: number, conversationId: number, messageIn: MessageIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateConversationUpdateConversationPost(userId, conversationId, messageIn, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.updateConversationUpdateConversationPost']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Agent
         * @param {AgentIn} agentIn 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAgentCreateAgentPost(agentIn: AgentIn, options?: any): AxiosPromise<void> {
            return localVarFp.createAgentCreateAgentPost(agentIn, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create Conversation
         * @param {ConversationIn} conversationIn 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConversationCreateConversationPost(conversationIn: ConversationIn, options?: any): AxiosPromise<void> {
            return localVarFp.createConversationCreateConversationPost(conversationIn, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create User
         * @param {UserIn} userIn 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUserCreateUserPost(userIn: UserIn, options?: any): AxiosPromise<void> {
            return localVarFp.createUserCreateUserPost(userIn, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Agents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAgentsGetAgentsPost(options?: any): AxiosPromise<Array<AgentOut>> {
            return localVarFp.getAgentsGetAgentsPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get All Files
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllFilesFileListGet(options?: any): AxiosPromise<Array<FileOut>> {
            return localVarFp.getAllFilesFileListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Conversation
         * @param {number} conversationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConversationGetConversationGet(conversationId: number, options?: any): AxiosPromise<ConversationOut> {
            return localVarFp.getConversationGetConversationGet(conversationId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Messages
         * @param {number} conversationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMessagesMessagesGet(conversationId: number, options?: any): AxiosPromise<void> {
            return localVarFp.getMessagesMessagesGet(conversationId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserGetUsersGet(options?: any): AxiosPromise<Array<UserOut>> {
            return localVarFp.getUserGetUsersGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Conversation
         * @param {number} userId 
         * @param {number} conversationId 
         * @param {MessageIn} messageIn 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConversationUpdateConversationPost(userId: number, conversationId: number, messageIn: MessageIn, options?: any): AxiosPromise<void> {
            return localVarFp.updateConversationUpdateConversationPost(userId, conversationId, messageIn, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - interface
 * @export
 * @interface DefaultApi
 */
export interface DefaultApiInterface {
    /**
     * 
     * @summary Create Agent
     * @param {AgentIn} agentIn 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    createAgentCreateAgentPost(agentIn: AgentIn, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @summary Create Conversation
     * @param {ConversationIn} conversationIn 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    createConversationCreateConversationPost(conversationIn: ConversationIn, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @summary Create User
     * @param {UserIn} userIn 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    createUserCreateUserPost(userIn: UserIn, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @summary Get Agents
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getAgentsGetAgentsPost(options?: AxiosRequestConfig): AxiosPromise<Array<AgentOut>>;

    /**
     * 
     * @summary Get All Files
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getAllFilesFileListGet(options?: AxiosRequestConfig): AxiosPromise<Array<FileOut>>;

    /**
     * 
     * @summary Get Conversation
     * @param {number} conversationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getConversationGetConversationGet(conversationId: number, options?: AxiosRequestConfig): AxiosPromise<ConversationOut>;

    /**
     * 
     * @summary Get Messages
     * @param {number} conversationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getMessagesMessagesGet(conversationId: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @summary Get User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getUserGetUsersGet(options?: AxiosRequestConfig): AxiosPromise<Array<UserOut>>;

    /**
     * 
     * @summary Update Conversation
     * @param {number} userId 
     * @param {number} conversationId 
     * @param {MessageIn} messageIn 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    updateConversationUpdateConversationPost(userId: number, conversationId: number, messageIn: MessageIn, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     * 
     * @summary Create Agent
     * @param {AgentIn} agentIn 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public createAgentCreateAgentPost(agentIn: AgentIn, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).createAgentCreateAgentPost(agentIn, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create Conversation
     * @param {ConversationIn} conversationIn 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public createConversationCreateConversationPost(conversationIn: ConversationIn, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).createConversationCreateConversationPost(conversationIn, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create User
     * @param {UserIn} userIn 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public createUserCreateUserPost(userIn: UserIn, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).createUserCreateUserPost(userIn, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Agents
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getAgentsGetAgentsPost(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getAgentsGetAgentsPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get All Files
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getAllFilesFileListGet(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getAllFilesFileListGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Conversation
     * @param {number} conversationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getConversationGetConversationGet(conversationId: number, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getConversationGetConversationGet(conversationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Messages
     * @param {number} conversationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getMessagesMessagesGet(conversationId: number, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getMessagesMessagesGet(conversationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getUserGetUsersGet(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getUserGetUsersGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Conversation
     * @param {number} userId 
     * @param {number} conversationId 
     * @param {MessageIn} messageIn 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public updateConversationUpdateConversationPost(userId: number, conversationId: number, messageIn: MessageIn, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).updateConversationUpdateConversationPost(userId, conversationId, messageIn, options).then((request) => request(this.axios, this.basePath));
    }
}



