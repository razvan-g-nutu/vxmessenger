import { Action } from 'redux-actions';
import types from './types';
import { IPayload } from '../../redux/interfaces';
export declare const requestChat: (instanceId: string, payload?: types.SubActionType | undefined) => Action<IPayload<types.SubActionType>>;
export declare const receiveChat: (instanceId: string, payload?: types.IChatResponse | undefined) => Action<IPayload<types.IChatResponse>>;
export declare const requestChatSaga: ({ payload }: Action<IPayload<types.SubActionType>>) => Generator<import("redux-saga/effects").SelectEffect, void, string>;
export declare const receiveChatSaga: ({ payload }: Action<IPayload<types.IChatResponse>>) => Generator<import("redux-saga/effects").PutEffect<Action<IPayload<any>>>, void, unknown>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
