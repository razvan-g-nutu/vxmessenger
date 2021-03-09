import { Action } from 'redux-actions';
import { CMDP_GETONLINESTATE_RESPONSE } from 'vxcontrol-client-lib';
import { IPayload } from '../../redux/interfaces';
import { ISession } from '../../redux/store';
export declare const RECEIVE_ONLINE_STATE: string;
declare const requestOnlineState: (instanceId: string, payload?: any) => Action<IPayload<any>>;
declare const onReceiveOnlineState: (instanceId: string, payload?: CMDP_GETONLINESTATE_RESPONSE | undefined) => Action<IPayload<CMDP_GETONLINESTATE_RESPONSE>>;
/** Saga for sending the online state request */
declare const requestOnlineStateSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").SelectEffect, void, ISession>;
/**
 * Saga to deal with the model's online state we get from the backend
 */
declare const receiveOnlineStateSaga: ({ payload }: Action<IPayload<CMDP_GETONLINESTATE_RESPONSE>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<boolean>>> | import("redux-saga/effects").PutEffect<Action<IPayload<import("../../redux/store").IOnlineState>>>, void, unknown>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export { requestOnlineState, onReceiveOnlineState, requestOnlineStateSaga, receiveOnlineStateSaga };
export default watchSagas;
