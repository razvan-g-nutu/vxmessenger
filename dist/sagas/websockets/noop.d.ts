import { Action } from 'redux-actions';
import { CMDP_NOOP_RESPONSE } from 'vxcontrol-client-lib';
import { IPayload } from '../../redux/interfaces';
export declare const RECEIVE_NOOP: string;
export declare const onReceiveNoop: (instanceId: string, payload?: CMDP_NOOP_RESPONSE | undefined) => Action<IPayload<CMDP_NOOP_RESPONSE>>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
