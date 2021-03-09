import { Action } from "redux-actions";
import { IPayload } from "../../redux/interfaces";
interface IPlayerErrorPayload {
    level: number;
    error: any;
}
export declare const playError: (instanceId: string, payload?: IPlayerErrorPayload | undefined) => Action<IPayload<IPlayerErrorPayload>>;
export declare const playErrorSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<any>>>, void, unknown>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
