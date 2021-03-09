import { Action } from "redux-actions";
import { IPayload } from "../../redux/interfaces";
export declare const pauseChat: (instanceId: string, payload?: any) => Action<IPayload<any>>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
