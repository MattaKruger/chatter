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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Conversation
     * @param conversationIn 
     */
    public createConversationCreateConversationPostWithHttpInfo(conversationIn: ConversationIn, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createConversationCreateConversationPostWithHttpInfo(conversationIn, _options);
        return result.toPromise();
    }

    /**
     * Create Conversation
     * @param conversationIn 
     */
    public createConversationCreateConversationPost(conversationIn: ConversationIn, _options?: Configuration): Promise<void> {
        const result = this.api.createConversationCreateConversationPost(conversationIn, _options);
        return result.toPromise();
    }

    /**
     * Create User
     * @param userIn 
     */
    public createUserCreateUserPostWithHttpInfo(userIn: UserIn, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createUserCreateUserPostWithHttpInfo(userIn, _options);
        return result.toPromise();
    }

    /**
     * Create User
     * @param userIn 
     */
    public createUserCreateUserPost(userIn: UserIn, _options?: Configuration): Promise<void> {
        const result = this.api.createUserCreateUserPost(userIn, _options);
        return result.toPromise();
    }

    /**
     * Get All Files
     */
    public getAllFilesFileListGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<FileOut>>> {
        const result = this.api.getAllFilesFileListGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get All Files
     */
    public getAllFilesFileListGet(_options?: Configuration): Promise<Array<FileOut>> {
        const result = this.api.getAllFilesFileListGet(_options);
        return result.toPromise();
    }

    /**
     * Get Conversation
     * @param conversationId 
     */
    public getConversationGetConversationGetWithHttpInfo(conversationId: number, _options?: Configuration): Promise<HttpInfo<ConversationOut>> {
        const result = this.api.getConversationGetConversationGetWithHttpInfo(conversationId, _options);
        return result.toPromise();
    }

    /**
     * Get Conversation
     * @param conversationId 
     */
    public getConversationGetConversationGet(conversationId: number, _options?: Configuration): Promise<ConversationOut> {
        const result = this.api.getConversationGetConversationGet(conversationId, _options);
        return result.toPromise();
    }

    /**
     * Get Messages
     * @param conversationId 
     */
    public getMessagesMessagesGetWithHttpInfo(conversationId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getMessagesMessagesGetWithHttpInfo(conversationId, _options);
        return result.toPromise();
    }

    /**
     * Get Messages
     * @param conversationId 
     */
    public getMessagesMessagesGet(conversationId: number, _options?: Configuration): Promise<void> {
        const result = this.api.getMessagesMessagesGet(conversationId, _options);
        return result.toPromise();
    }

    /**
     * Get User
     */
    public getUserGetUsersGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<UserOut>>> {
        const result = this.api.getUserGetUsersGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get User
     */
    public getUserGetUsersGet(_options?: Configuration): Promise<Array<UserOut>> {
        const result = this.api.getUserGetUsersGet(_options);
        return result.toPromise();
    }

    /**
     * Update Conversation
     * @param userId 
     * @param conversationId 
     * @param messageIn 
     */
    public updateConversationUpdateConversationPostWithHttpInfo(userId: number, conversationId: number, messageIn: MessageIn, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateConversationUpdateConversationPostWithHttpInfo(userId, conversationId, messageIn, _options);
        return result.toPromise();
    }

    /**
     * Update Conversation
     * @param userId 
     * @param conversationId 
     * @param messageIn 
     */
    public updateConversationUpdateConversationPost(userId: number, conversationId: number, messageIn: MessageIn, _options?: Configuration): Promise<void> {
        const result = this.api.updateConversationUpdateConversationPost(userId, conversationId, messageIn, _options);
        return result.toPromise();
    }


}



