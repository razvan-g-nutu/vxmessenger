import { Action } from 'redux-actions';
import { CMDP_INIT_RESPONSE } from 'vxcontrol-client-lib';
import { IPayload } from '../../redux/interfaces';
import { ICurrency, IEmoticon, IGiftCategory } from '../../redux/store';
export declare const REQUEST_INIT: string;
export declare const RECEIVE_INIT: string;
export declare const requestInit: (instanceId: string, payload?: any) => Action<IPayload<any>>;
declare const onReceiveInit: (instanceId: string, payload?: CMDP_INIT_RESPONSE | undefined) => Action<IPayload<CMDP_INIT_RESPONSE>>;
/** We receive the default gifts and the gift categories in which the gifts are organized */
declare const receiveInitSaga: ({ payload }: Action<IPayload<CMDP_INIT_RESPONSE>>) => Generator<import("redux-saga/effects").PutEffect<Action<IPayload<string>>> | import("redux-saga/effects").PutEffect<Action<IPayload<import("../../redux/store").Translations>>> | import("redux-saga/effects").PutEffect<Action<IPayload<IGiftCategory[]>>> | import("redux-saga/effects").PutEffect<Action<IPayload<IEmoticon[]>>> | import("redux-saga/effects").PutEffect<Action<IPayload<ICurrency>>>, void, unknown>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export { onReceiveInit, receiveInitSaga };
export default watchSagas;
