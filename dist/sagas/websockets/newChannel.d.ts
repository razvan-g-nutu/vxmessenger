import { Action } from 'redux-actions';
import { CMDP_NEWCHANNEL_RESPONSE } from 'vxcontrol-client-lib';
import { IPayload } from '../../redux/interfaces';
import { IPartner } from '../../redux/store';
export declare const requestNewChannel: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const onReceiveNewChannel: (instanceId: string, payload?: CMDP_NEWCHANNEL_RESPONSE | undefined) => Action<IPayload<CMDP_NEWCHANNEL_RESPONSE>>;
/** Sends through websocket the data for creating a new channel */
export declare const requestNewChannelSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").SelectEffect, void, IPartner>;
/** If creating a new channel is successful, save the channelId into the Redux store */
export declare const receiveNewChannelSaga: ({ payload }: Action<IPayload<CMDP_NEWCHANNEL_RESPONSE>>) => Generator<import("redux-saga/effects").PutEffect<Action<IPayload<string>>>, void, unknown>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
