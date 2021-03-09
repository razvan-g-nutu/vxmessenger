import { Action } from 'redux-actions';
import { CMDC_CHANNEL, CMDP_GETCHANNELS_RESPONSE } from 'vxcontrol-client-lib';
import { IPayload } from '../../redux/interfaces';
import { IPartner } from '../../redux/store';
export declare const RECEIVE_CHANNELS: string;
export declare const requestChannel: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const onReceiveChannels: (instanceId: string, payload?: CMDP_GETCHANNELS_RESPONSE | undefined) => Action<IPayload<CMDP_GETCHANNELS_RESPONSE>>;
export declare const receiveChannelUpdate: (instanceId: string, payload?: CMDC_CHANNEL | undefined) => Action<IPayload<CMDC_CHANNEL>>;
export declare const requestChannelSeen: (instanceId: string, payload?: string | undefined) => Action<IPayload<string>>;
/**
 * It takes the sessionID from the store and sends the data
 * for receiving a certain partner's channel of communication.
 */
export declare const requestChannelSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").SelectEffect, void, IPartner>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
