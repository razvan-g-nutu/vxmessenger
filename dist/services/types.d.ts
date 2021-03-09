import { MessageContentType, MessageDirection, MsgType } from "../redux/store";
declare type PromiseKeys = 'result' | 'error';
export declare type PromiseResult<R, E> = {
    [key in PromiseKeys]?: R | E;
};
export declare enum PrivateChatInvitationAnswer {
    no = "no",
    yes = "yes"
}
export declare type OK_RESULT = 'OK';
export declare const OK_RESULT_VALUE = "OK";
export interface IOnMessagePayload {
    key?: string;
    text: string;
    imgSrc?: string;
    msgType?: MsgType;
    imgSrcSet?: string;
    imgWidth?: string;
    imgHeight?: string;
    audioSrc?: string;
    contentType?: MessageContentType;
    direction?: MessageDirection;
    /**
     * This property will have a value only when the messenger is opened
     * in group chat mode and will contain the alias from other senders.
     * This value will not contain the name of the current user or model.
     */
    username?: string;
}
export interface IHost {
    name: string;
    imageSrc: string;
}
export {};
