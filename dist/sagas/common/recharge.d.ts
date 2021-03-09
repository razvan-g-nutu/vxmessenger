import { Action } from "redux-actions";
import { IPayload } from '../../redux/interfaces';
export declare const rechargeExternal: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const rechargeFromChat: (instanceId: string, payload?: number | undefined) => Action<IPayload<number>>;
export declare const rechargeFromChatSuccess: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const rechargeFromChatFail: (instanceId: string, payload?: any) => Action<IPayload<any>>;
/**
 * this can be used to see whether the recharge from chat succeeded or failed.
 * E.g.
 * const {result, error} = yield call(getResultOfRechargeFromChatSaga);
 */
export declare const getResultOfRechargeFromChatSaga: ({ payload }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").RaceEffect<import("redux-saga/effects").TakeEffect>, any, unknown>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
