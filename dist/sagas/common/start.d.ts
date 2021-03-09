import { Action } from "redux-actions";
import { IPayload } from "../../redux/interfaces";
import { IChat, IErrorTranslation, IPartner, VideoChatType } from "../../redux/store";
/**
 * we are assuming that the partner will be set
 * only when different than its store's counterpart
 * @param action
 */
export declare const setPartnerSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<any>>> | import("redux-saga/effects").RaceEffect<import("redux-saga/effects").TakeEffect | import("redux-saga/effects").CallEffect<true>> | import("redux-saga/effects").RaceEffect<import("redux-saga/effects").TakeEffect | import("redux-saga/effects").AllEffect<import("redux-saga/effects").TakeEffect>>, void, IPartner & {
    timeout: any;
} & IErrorTranslation & {
    success: any;
}>;
export declare const setInitialVideoChatTypeSaga: ({ payload }: Action<IPayload<VideoChatType>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<any>>> | import("redux-saga/effects").TakeEffect, void, IChat>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
