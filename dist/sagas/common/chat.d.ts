import { RESULT } from "vxcontrol-client-lib";
import types from "../websockets/types";
import { IChat } from "../../redux/store";
import { PromiseResult } from "../../services/types";
import { CoreChat } from "../../services/ChatService/types";
export declare const onReceiveChatError: (instanceId: string, payload?: RESULT | undefined) => import("redux-actions").Action<import("../../redux/interfaces").IPayload<RESULT>>;
export interface IGetChatInstanceSagaResult {
    chatConf: {
        /** Chat configuration we're getting from CMDP_QUERYBACKEND */
        result?: IChat;
        /** Error got while trying to get a chat configuration */
        error?: RESULT | true;
    };
    chatInstance?: {
        result?: CoreChat;
        /** Error got while trying to initialize a CoreChat instance (the one of vchat-core) */
        error?: any;
    };
}
export declare const getChatInstanceSaga: (requestNewConfig: boolean, instanceId: string, type?: types.SubActionType) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<import("redux-actions").Action<import("../../redux/interfaces").IPayload<any>>> | import("redux-saga/effects").CallEffect<any>, {
    chatConf: {
        error: any;
        result?: undefined;
    };
    chatInstance?: undefined;
} | {
    chatConf: {
        result: IChat;
        error?: undefined;
    };
    chatInstance: PromiseResult<CoreChat, any>;
}, IChat & {
    error: any;
} & PromiseResult<CoreChat, any> & {
    error: any;
}>;
