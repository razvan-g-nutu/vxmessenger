import { Action } from 'redux-actions';
import { IPayload } from '../../redux/interfaces';
import { IGetChatInstanceSagaResult } from "./chat";
import { IAnswerUserPromptPayload } from "../../redux/modules/messenger";
import { AnswerType, ICameraDevice, QuestionType, ICountdownWarning } from '../../redux/store';
export interface IOpenLoadAccountPayload {
    warning?: ICountdownWarning;
    answer?: AnswerType;
}
export declare const OPEN_CLOSE_CHAT_PROMPT: string;
export declare const OPEN_PRIVATE_CHAT_PROMPT: string;
export declare const OPEN_SPY_PRIVATE_CHAT_PROMPT: string;
export declare const OPEN_LOAD_ACCOUNT_ONE_CLICK_PROMPT: string;
export declare const OPEN_ANONYMOUS_TIP_PROMPT: string;
export declare const OPEN_TIP_PROMPT: string;
export declare const OPEN_VERIFY_AGE_PROMPT: string;
export declare const CLOSE_ALL_USER_PROMPTS: string;
export declare const OPEN_CHOOSE_CAMERA_PROMPT: string;
export declare const closeAllUserPrompts: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const openCloseChatPrompt: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const openPrivateChatPrompt: (instanceId: string, payload?: string | undefined) => Action<IPayload<string>>;
export declare const openSpyPrivateChatPrompt: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const openLoadAccountOneClickPrompt: (instanceId: string, payload?: IOpenLoadAccountPayload | undefined) => Action<IPayload<IOpenLoadAccountPayload>>;
export declare const openAnonymousTipPrompt: (instanceId: string, payload?: string | undefined) => Action<IPayload<string | undefined>>;
export declare const openTipPrompt: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const openVerifyAgePrompt: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const openChooseCameraPrompt: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const openPromptSaga: ({ type, payload }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<any>>> | import("redux-saga/effects").CallEffect<true>, void, unknown>;
export declare const dealWithAnswerSaga: ({ payload }: Action<IPayload<IAnswerUserPromptPayload>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<any>>> | import("redux-saga/effects").CallEffect<{
    chatConf: {
        error: any;
        result?: undefined;
    };
    chatInstance?: undefined;
} | {
    chatConf: {
        result: import("../../redux/store").IChat;
        error?: undefined;
    };
    chatInstance: import("../../services/types").PromiseResult<import("vchat-core").Chat, any>;
}>, void, IGetChatInstanceSagaResult>;
export declare const setSelectedCameraSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").CallEffect<true> | import("redux-saga/effects").PutEffect<Action<IPayload<QuestionType>>>, void, ICameraDevice>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
