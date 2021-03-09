import { Action } from "redux-actions";
import { CMDP_QUERYBACKEND } from "vxcontrol-client-lib";
import { IPayload } from '../../redux/interfaces';
export declare const onReceiveQueryBackend: (instanceId: string, payload?: CMDP_QUERYBACKEND | undefined) => Action<IPayload<CMDP_QUERYBACKEND>>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
