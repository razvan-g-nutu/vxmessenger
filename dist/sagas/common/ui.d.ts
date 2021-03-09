import { Action } from "redux-actions";
import { IPayload } from '../../redux/interfaces';
import { VideochatInformationType, VideoChatType } from '../../redux/store';
export declare const CLICK_CLOSE_MESSENGER_BUTTON: string;
export declare const DISPLAY_CONTINUE_WITH_LIVECHAT: string;
export declare const CLOSE_PRECHAT_DIALOG: string;
export declare const ACCEPT_TO_SPY_FROM_PRECHAT_DIALOG: string;
export declare const displayContinueWithLiveChatDialog: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const clickCloseMessengerButton: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const closePrechatDialog: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const acceptToSpyFromPrechatDialog: (instanceId: string, payload?: any) => Action<IPayload<any>>;
export declare const triggerCloseMessengerSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<any>>>, void, unknown>;
export declare const displayContinueWithLiveChatDialogSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<any>>> | import("redux-saga/effects").CallEffect<true>, void, never>;
export declare const displayUserOfflineMessageSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<any>>>, void, unknown>;
export declare const triggerPreChatInformationSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").PutEffect<Action<IPayload<any>>>, void, unknown>;
export declare const reactToInformationDialogSaga: ({ payload }: Action<IPayload<VideochatInformationType>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<any>>>, void, unknown>;
export declare const triggerClickCloseButtonSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<any>>>, void, unknown>;
export declare const triggerOpenCloseVideoChatSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").TakeEffect, void, {
    payload: {
        value: any;
    };
}>;
export declare const openVersionSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").PutEffect<Action<IPayload<any>>> | import("redux-saga/effects").CallEffect<true>, void, unknown>;
/** We receive a flag, with which we can see if the model is muted  */
export declare const initiallyMutedSaga: ({ payload }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").PutEffect<Action<IPayload<any>>> | import("redux-saga/effects").CallEffect<true>, void, unknown>;
export declare const closePrechatDialogSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<Action<IPayload<any>>>, void, VideoChatType>;
export declare const acceptToSpyFromPrechatDialogSaga: ({ payload: { instanceId } }: Action<IPayload<any>>) => Generator<import("redux-saga/effects").PutEffect<Action<IPayload<boolean | undefined>>> | import("redux-saga/effects").PutEffect<Action<IPayload<VideoChatType>>>, void, unknown>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
