import { Action } from "redux-actions";
import { IPayload } from "../../redux";
import { IPreferenceActionPayload } from "../../redux/interfaces";
export declare const setPreferenceSaga: ({ payload: { instanceId, value } }: Action<IPayload<IPreferenceActionPayload>>) => Generator<never, void, unknown>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
