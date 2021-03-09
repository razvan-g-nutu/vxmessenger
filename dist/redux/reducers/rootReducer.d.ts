import { Action } from "redux-actions";
import IStore from "../store";
import { IPayload } from "../interfaces";
export declare const initializeMessengerInstance: (instanceId: string, payload?: string | undefined) => Action<IPayload<string>>;
/**
 * The root reducer has the responsability of mapping the desired messenger
 * instance with the received action and alter the data in a pure function.
 */
declare const rootReducer: (store: IStore | undefined, action: Action<IPayload<any>>) => IStore;
export default rootReducer;
