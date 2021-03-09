import { Action } from "redux-actions";
import { IPlatformProps } from "../store";
export declare const setPlatformProps: (instanceId: string, payload?: IPlatformProps | undefined) => Action<import("../interfaces").IPayload<IPlatformProps>>;
declare const platformProps: import("redux-actions").ReduxCompatibleReducer<IPlatformProps | null, IPlatformProps | null>;
export default platformProps;
