import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Create Conversation
     * @param conversationIn 
     */
    public createConversationCreateConversationPostWithHttpInfo(conversationIn: ConversationIn, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createConversationCreateConversationPost(conversationIn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConversationCreateConversationPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Conversation
     * @param conversationIn 
     */
    public createConversationCreateConversationPost(conversationIn: ConversationIn, _options?: Configuration): Observable<void> {
        return this.createConversationCreateConversationPostWithHttpInfo(conversationIn, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create User
     * @param userIn 
     */
    public createUserCreateUserPostWithHttpInfo(userIn: UserIn, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createUserCreateUserPost(userIn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createUserCreateUserPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create User
     * @param userIn 
     */
    public createUserCreateUserPost(userIn: UserIn, _options?: Configuration): Observable<void> {
        return this.createUserCreateUserPostWithHttpInfo(userIn, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get All Files
     */
    public getAllFilesFileListGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<FileOut>>> {
        const requestContextPromise = this.requestFactory.getAllFilesFileListGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllFilesFileListGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get All Files
     */
    public getAllFilesFileListGet(_options?: Configuration): Observable<Array<FileOut>> {
        return this.getAllFilesFileListGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<FileOut>>) => apiResponse.data));
    }

    /**
     * Get Conversation
     * @param conversationId 
     */
    public getConversationGetConversationGetWithHttpInfo(conversationId: number, _options?: Configuration): Observable<HttpInfo<ConversationOut>> {
        const requestContextPromise = this.requestFactory.getConversationGetConversationGet(conversationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConversationGetConversationGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Conversation
     * @param conversationId 
     */
    public getConversationGetConversationGet(conversationId: number, _options?: Configuration): Observable<ConversationOut> {
        return this.getConversationGetConversationGetWithHttpInfo(conversationId, _options).pipe(map((apiResponse: HttpInfo<ConversationOut>) => apiResponse.data));
    }

    /**
     * Get Messages
     * @param conversationId 
     */
    public getMessagesMessagesGetWithHttpInfo(conversationId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getMessagesMessagesGet(conversationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMessagesMessagesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Messages
     * @param conversationId 
     */
    public getMessagesMessagesGet(conversationId: number, _options?: Configuration): Observable<void> {
        return this.getMessagesMessagesGetWithHttpInfo(conversationId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get User
     */
    public getUserGetUsersGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<UserOut>>> {
        const requestContextPromise = this.requestFactory.getUserGetUsersGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserGetUsersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get User
     */
    public getUserGetUsersGet(_options?: Configuration): Observable<Array<UserOut>> {
        return this.getUserGetUsersGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<UserOut>>) => apiResponse.data));
    }

    /**
     * Update Conversation
     * @param userId 
     * @param conversationId 
     * @param messageIn 
     */
    public updateConversationUpdateConversationPostWithHttpInfo(userId: number, conversationId: number, messageIn: MessageIn, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateConversationUpdateConversationPost(userId, conversationId, messageIn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateConversationUpdateConversationPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Conversation
     * @param userId 
     * @param conversationId 
     * @param messageIn 
     */
    public updateConversationUpdateConversationPost(userId: number, conversationId: number, messageIn: MessageIn, _options?: Configuration): Observable<void> {
        return this.updateConversationUpdateConversationPostWithHttpInfo(userId, conversationId, messageIn, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
