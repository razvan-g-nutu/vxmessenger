import { Action } from 'redux-actions';
import { CMDP_LOGIN_RESPONSE, SupportedLanguage } from 'vxcontrol-client-lib';
import types from "./types";
import { IPayload } from '../../redux/interfaces';
export declare const RECEIVE_LOGIN: string;
export declare const requestLogin: (instanceId: string, payload?: string | undefined) => Action<IPayload<string>>;
export declare const onReceiveLogin: (instanceId: string, payload?: CMDP_LOGIN_RESPONSE | undefined) => Action<IPayload<CMDP_LOGIN_RESPONSE>>;
/** Receives user's webtoken through which the login session will be created */
export declare const requestLoginSaga: ({ payload }: Action<IPayload<string>>) => Generator<import("redux-saga/effects").SelectEffect, void, SupportedLanguage>;
/**
 * If login is successful, it saves the sessionID nad inventory gifts in the Redux store.
 * Afterwards, it starts the NOOP heartbeat communication.
 */
export declare const receiveLoginSaga: ({ payload }: Action<IPayload<CMDP_LOGIN_RESPONSE>>) => Generator<import("redux-saga/effects").PutEffect<Action<IPayload<string>>> | import("redux-saga/effects").PutEffect<Action<IPayload<number>>> | import("redux-saga/effects").PutEffect<Action<IPayload<boolean>>> | import("redux-saga/effects").PutEffect<Action<IPayload<types.IInventoryGift[]>>> | import("redux-saga/effects").PutEffect<Action<IPayload<import("../../redux/store").IAutoRecharge>>> | import("redux-saga/effects").PutEffect<Action<IPayload<import("../../redux/store").IChatFeatures>>> | import("redux-saga/effects").PutEffect<Action<IPayload<import("../../redux/store").IOneClickRecharge>>>, void, unknown>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
