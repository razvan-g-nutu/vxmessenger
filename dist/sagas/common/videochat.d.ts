import { Action } from 'redux-actions';
import { IPayload } from '../../redux/interfaces';
import { VideoChatType } from '../../redux/store';
export declare const CANCEL_STARTING_VIDEOCHAT_TYPE: string;
export declare const onTextMutedUpdated: (instanceId: string, payload?: boolean | undefined) => Action<IPayload<boolean>>;
export declare const startVideoChatType: (instanceId: string, payload?: VideoChatType | undefined) => Action<IPayload<VideoChatType>>;
export declare const resumeExistingVideochat: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const resumePreviousVideochat: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const resumeInitialVideochat: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const switchVoyeurPrivate2Voyeur: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const switchVoyeur2LiveChat: (instanceId: string, payload?: string | undefined) => Action<IPayload<string | undefined>>;
export declare const displaySystemToyMessage: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const createVideoChatPlayer: (instanceId: string, payload?: HTMLElement | undefined) => Action<IPayload<HTMLElement>>;
export declare const publishVideoChatPlayer: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const stopVideoChatPlayer: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const closeVideoChatPlayer: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const requestSendTip: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const requestSendAnonymousTip: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const cancelStartingVideoChatType: (instanceId: string, payload?: VideoChatType | undefined) => Action<IPayload<VideoChatType>>;
/** Action which stop the player and the streams, but don't close the video chat mode */
export declare const stopVideoChat: (instanceId: string, payload?: boolean | undefined) => Action<IPayload<boolean | undefined>>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
