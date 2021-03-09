import { Action } from "redux-actions";
import { IPayload } from "../../redux/interfaces";
export declare const videoChatLimitSaga: (action: Action<IPayload<any>>) => Generator<import("redux-saga/effects").ForkEffect<void>, void, unknown>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
