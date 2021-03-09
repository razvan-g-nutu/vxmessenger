import { Action } from "redux-actions";
import { IPayload } from '../../redux/interfaces';
export declare const closeFullScreenSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").PutEffect<Action<IPayload<any>>>, void, unknown>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
