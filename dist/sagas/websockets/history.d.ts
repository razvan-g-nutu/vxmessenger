import { Action } from 'redux-actions';
import { CMDP_GETHISTORY_RESPONSE } from 'vxcontrol-client-lib';
import { IPayload } from '../../redux/interfaces';
import { IMessage, IMessenger, ISession } from '../../redux/store';
export declare const requestHistory: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const onReceiveHistory: (instanceId: string, payload?: CMDP_GETHISTORY_RESPONSE | undefined) => Action<IPayload<CMDP_GETHISTORY_RESPONSE>>;
export declare const insertMessagesToStore: (instanceId: string, payload?: IMessage[] | undefined) => Action<IPayload<IMessage[]>>;
/** Request the list of history messages from the current channel */
export declare const requestHistorySaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").SelectEffect, void, ISession & IMessage[]>;
/** Receive the last 50 history messages and map them to our structure */
export declare const receiveHistorySaga: ({ payload }: Action<IPayload<CMDP_GETHISTORY_RESPONSE>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<IMessage[]>>>, void, IMessenger>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
