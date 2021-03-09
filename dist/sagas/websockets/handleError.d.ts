import { Action } from 'redux-actions';
import { IRESPONSE } from 'vxcontrol-client-lib';
import { IPayload } from '../../redux/interfaces';
/** Actions */
export declare const RECEIVE_ERROR: string;
/** Action Creators */
export declare const onReceiveError: (instanceId: string, payload?: IRESPONSE | undefined) => Action<IPayload<IRESPONSE>>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
