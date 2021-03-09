import { Action } from "redux-actions";
import { IFeatures } from "../store";
export declare const setFeatures: (instanceId: string, payload?: IFeatures | undefined) => Action<import("../interfaces").IPayload<IFeatures>>;
declare const features: import("redux-actions").ReduxCompatibleReducer<IFeatures, IFeatures>;
export default features;
