import { Action } from "redux-actions";
import { IPayload } from '../../redux/interfaces';
export declare const requestPurchaseGiftBundles: (instanceId: string, payload?: string | undefined) => Action<IPayload<string>>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
