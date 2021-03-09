import { Action } from 'redux-actions';
import { ICOMMAND } from 'vxcontrol-client-lib';
import { IPayload } from '../../redux/interfaces';
export declare const RECEIVE_GET_CHANNEL_INFO: string;
export declare const requestGetChannelInfo: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const requestSetContactNote: (instanceId: string, payload?: string | undefined) => Action<IPayload<string>>;
export declare const requestSetFavorite: (instanceId: string, payload?: boolean | undefined) => Action<IPayload<boolean>>;
export declare const onReceiveGetChannelInfo: (instanceId: string, payload?: ICOMMAND | undefined) => Action<IPayload<ICOMMAND>>;
export declare const onReceiveSetChannelInfo: (instanceId: string, payload?: ICOMMAND | undefined) => Action<IPayload<ICOMMAND>>;
/** Mapping sagas to actions */
declare const watchAll: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchAll;
