import { Action } from "redux-actions";
import { IPayload } from "../../../redux/interfaces";
export declare enum AdjustCam2CamType {
    MINIMIZE = 0,
    MAXIMIZE = 1
}
export declare const toggleCam2Cam: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const minimizeCam2Cam: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const maximizeCam2Cam: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const startCam2CamSaga: (instanceId: string, width?: number | undefined) => Generator<import("redux-saga/effects").SelectEffect, void, unknown>;
export declare const stopCam2CamSaga: (instanceId: string) => Generator<import("redux-saga/effects").PutEffect<Action<IPayload<any>>>, void, unknown>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
