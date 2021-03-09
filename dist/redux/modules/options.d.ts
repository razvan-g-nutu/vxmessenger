import { Action } from "redux-actions";
import { IOptions } from "../store";
export declare const SET_OPTIONS: string;
export declare const setOptions: (instanceId: string, payload?: IOptions | undefined) => Action<import("../interfaces").IPayload<IOptions>>;
declare const options: import("redux-actions").ReduxCompatibleReducer<IOptions, IOptions>;
export default options;
