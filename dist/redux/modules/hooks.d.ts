import { Action } from "redux-actions";
import { IHooks, HooksArguments } from "../store";
export interface IHookPayload {
    name: keyof IHooks;
    args: any[];
}
export declare const SET_HOOKS: string;
export declare const setHooks: (instanceId: string, payload?: IHookPayload | undefined) => Action<import("../interfaces").IPayload<IHookPayload>>;
/** Reducers */
declare const hooks: import("redux-actions").ReduxCompatibleReducer<HooksArguments, HooksArguments>;
export default hooks;
