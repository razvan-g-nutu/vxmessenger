import { IGetChatInstanceSagaResult } from "../chat";
import { VideoChatType } from "../../../redux/store";
export interface IPreChecksResult {
    isSuccessful: boolean;
    chat?: IGetChatInstanceSagaResult;
}
/**
 * Saga doing necessary pre-checks before starting a video chat
 * @param videoChatType
 * @return {IPreChecksResult}
 */
declare const precheckSaga: (instanceId: string, videoChatType: VideoChatType, requestNewConfig: boolean) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").CallEffect<void> | import("redux-saga/effects").CallEffect<{
    chatConf: {
        error: any;
        result?: undefined;
    };
    chatInstance?: undefined;
} | {
    chatConf: {
        result: import("../../../redux/store").IChat;
        error?: undefined;
    };
    chatInstance: import("../../../services/types").PromiseResult<import("vchat-core/dist/chat").Chat, any>;
}> | import("redux-saga/effects").CallEffect<boolean>, {
    isSuccessful: boolean;
    chat?: undefined;
} | {
    isSuccessful: boolean;
    chat: IGetChatInstanceSagaResult;
}, (false & IGetChatInstanceSagaResult) | (true & IGetChatInstanceSagaResult)>;
export default precheckSaga;
