import { Action } from "redux-actions";
import { IPayload } from "../redux";
export declare const takePattern: (actionType: string, instanceId: string) => (action: Action<IPayload<any>>) => boolean;
