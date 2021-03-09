import { Action } from 'redux-actions';
import { CMDC_CMSG } from 'vxcontrol-client-lib';
import { IPayload } from '../../redux/interfaces';
import { IOnMessagePayload } from '../../services/types';
import { IMessage, ISession, IToyOption, ITranslation } from '../../redux/store';
interface IReceiveToyMessagePayload {
    option: IToyOption;
    message: IMessage;
}
export declare const requestSendMessage: (instanceId: string, payload?: string | IToyOption | undefined) => Action<IPayload<string | IToyOption>>;
export declare const requestSendVibrationMessage: (instanceId: string, payload?: IToyOption | undefined) => Action<IPayload<IToyOption>>;
export declare const requestSendAudioMessage: (instanceId: string, payload?: Blob | undefined) => Action<IPayload<Blob>>;
export declare const receiveMessageFromChat: (instanceId: string, payload?: IOnMessagePayload | undefined) => Action<IPayload<IOnMessagePayload>>;
export declare const receiveMessageFromNoop: (instanceId: string, payload?: CMDC_CMSG | undefined) => Action<IPayload<CMDC_CMSG>>;
export declare const receiveToyMessage: (instanceId: string, payload?: IReceiveToyMessagePayload | undefined) => Action<IPayload<IReceiveToyMessagePayload>>;
export declare const receiveSendMessage: (instanceId: string, payload?: CMDC_CMSG | undefined) => Action<IPayload<CMDC_CMSG>>;
export declare const resendFailedMessages: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const receiveMessageFromChatSaga: ({ payload }: Action<IPayload<IOnMessagePayload>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<IMessage>>> | import("redux-saga/effects").PutEffect<Action<IPayload<import("../../redux/modules/messenger").IImageLoadedPayload>>>, void, unknown>;
/**
 * Receives the response after sending a message and,
 * if it is successful, the message is saved in the Redux store.
 */
export declare const receiveSendMessageSaga: ({ payload }: Action<IPayload<CMDC_CMSG>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<import("../../redux/store").IActionResponse>>> | import("redux-saga/effects").PutEffect<Action<IPayload<IMessage>>> | import("redux-saga/effects").PutEffect<Action<IPayload<IReceiveToyMessagePayload>>> | import("redux-saga/effects").PutEffect<Action<IPayload<import("../../redux/modules/messenger").IImageLoadedPayload>>>, void, (ISession & ITranslation & false & IMessage) | (ISession & ITranslation & true & IMessage)>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
