import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ConversationIn } from '../models/ConversationIn';
import { ConversationOut } from '../models/ConversationOut';
import { FileOut } from '../models/FileOut';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { MessageIn } from '../models/MessageIn';
import { Role } from '../models/Role';
import { UserIn } from '../models/UserIn';
import { UserOut } from '../models/UserOut';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiCreateConversationCreateConversationPostRequest {
    /**
     * 
     * @type ConversationIn
     * @memberof DefaultApicreateConversationCreateConversationPost
     */
    conversationIn: ConversationIn
}

export interface DefaultApiCreateUserCreateUserPostRequest {
    /**
     * 
     * @type UserIn
     * @memberof DefaultApicreateUserCreateUserPost
     */
    userIn: UserIn
}

export interface DefaultApiGetAllFilesFileListGetRequest {
}

export interface DefaultApiGetConversationGetConversationGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApigetConversationGetConversationGet
     */
    conversationId: number
}

export interface DefaultApiGetMessagesMessagesGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApigetMessagesMessagesGet
     */
    conversationId: number
}

export interface DefaultApiGetUserGetUsersGetRequest {
}

export interface DefaultApiUpdateConversationUpdateConversationPostRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApiupdateConversationUpdateConversationPost
     */
    userId: number
    /**
     * 
     * @type number
     * @memberof DefaultApiupdateConversationUpdateConversationPost
     */
    conversationId: number
    /**
     * 
     * @type MessageIn
     * @memberof DefaultApiupdateConversationUpdateConversationPost
     */
    messageIn: MessageIn
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Conversation
     * @param param the request object
     */
    public createConversationCreateConversationPostWithHttpInfo(param: DefaultApiCreateConversationCreateConversationPostRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createConversationCreateConversationPostWithHttpInfo(param.conversationIn,  options).toPromise();
    }

    /**
     * Create Conversation
     * @param param the request object
     */
    public createConversationCreateConversationPost(param: DefaultApiCreateConversationCreateConversationPostRequest, options?: Configuration): Promise<void> {
        return this.api.createConversationCreateConversationPost(param.conversationIn,  options).toPromise();
    }

    /**
     * Create User
     * @param param the request object
     */
    public createUserCreateUserPostWithHttpInfo(param: DefaultApiCreateUserCreateUserPostRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createUserCreateUserPostWithHttpInfo(param.userIn,  options).toPromise();
    }

    /**
     * Create User
     * @param param the request object
     */
    public createUserCreateUserPost(param: DefaultApiCreateUserCreateUserPostRequest, options?: Configuration): Promise<void> {
        return this.api.createUserCreateUserPost(param.userIn,  options).toPromise();
    }

    /**
     * Get All Files
     * @param param the request object
     */
    public getAllFilesFileListGetWithHttpInfo(param: DefaultApiGetAllFilesFileListGetRequest = {}, options?: Configuration): Promise<HttpInfo<Array<FileOut>>> {
        return this.api.getAllFilesFileListGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get All Files
     * @param param the request object
     */
    public getAllFilesFileListGet(param: DefaultApiGetAllFilesFileListGetRequest = {}, options?: Configuration): Promise<Array<FileOut>> {
        return this.api.getAllFilesFileListGet( options).toPromise();
    }

    /**
     * Get Conversation
     * @param param the request object
     */
    public getConversationGetConversationGetWithHttpInfo(param: DefaultApiGetConversationGetConversationGetRequest, options?: Configuration): Promise<HttpInfo<ConversationOut>> {
        return this.api.getConversationGetConversationGetWithHttpInfo(param.conversationId,  options).toPromise();
    }

    /**
     * Get Conversation
     * @param param the request object
     */
    public getConversationGetConversationGet(param: DefaultApiGetConversationGetConversationGetRequest, options?: Configuration): Promise<ConversationOut> {
        return this.api.getConversationGetConversationGet(param.conversationId,  options).toPromise();
    }

    /**
     * Get Messages
     * @param param the request object
     */
    public getMessagesMessagesGetWithHttpInfo(param: DefaultApiGetMessagesMessagesGetRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getMessagesMessagesGetWithHttpInfo(param.conversationId,  options).toPromise();
    }

    /**
     * Get Messages
     * @param param the request object
     */
    public getMessagesMessagesGet(param: DefaultApiGetMessagesMessagesGetRequest, options?: Configuration): Promise<void> {
        return this.api.getMessagesMessagesGet(param.conversationId,  options).toPromise();
    }

    /**
     * Get User
     * @param param the request object
     */
    public getUserGetUsersGetWithHttpInfo(param: DefaultApiGetUserGetUsersGetRequest = {}, options?: Configuration): Promise<HttpInfo<Array<UserOut>>> {
        return this.api.getUserGetUsersGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get User
     * @param param the request object
     */
    public getUserGetUsersGet(param: DefaultApiGetUserGetUsersGetRequest = {}, options?: Configuration): Promise<Array<UserOut>> {
        return this.api.getUserGetUsersGet( options).toPromise();
    }

    /**
     * Update Conversation
     * @param param the request object
     */
    public updateConversationUpdateConversationPostWithHttpInfo(param: DefaultApiUpdateConversationUpdateConversationPostRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateConversationUpdateConversationPostWithHttpInfo(param.userId, param.conversationId, param.messageIn,  options).toPromise();
    }

    /**
     * Update Conversation
     * @param param the request object
     */
    public updateConversationUpdateConversationPost(param: DefaultApiUpdateConversationUpdateConversationPostRequest, options?: Configuration): Promise<void> {
        return this.api.updateConversationUpdateConversationPost(param.userId, param.conversationId, param.messageIn,  options).toPromise();
    }

}
