import { ACTION } from 'vxcontrol-client-lib';
import { IAutoRecharge, IChatFeatures, IOneClickRecharge, MsgType } from "../../../redux/store";
export interface ISuploadPicRequest {
    action: ACTION.CMDP_SUPLOADPIC;
    sessionID: string;
    channelId: string;
    messageKey: string;
    webtoken: string;
    format: "json";
}
export interface ILoginGuestResponse {
    boughtMessengerGifts: IInventoryGift[];
    autoRecharge: IAutoRecharge;
    oneClickRecharge: IOneClickRecharge;
    chatFeatures: IChatFeatures;
    vip: boolean;
    freeMessagesCount?: number;
    messagePrice: number;
    messages: {
        freeCount: number;
    };
}
export interface IChatResponse {
    chatId: string;
    clientId: string;
    server: string;
    width: number;
    height: number;
}
export interface IInventoryGift {
    quantity: number;
    gift: {
        id: number;
    };
}
export interface IErrorResponse {
    result: {
        code: number;
        reason: string;
    };
}
export interface IAnonymousTip {
    amount: number;
    giftId: number;
}
export interface ISetChannelInfo {
    note?: string;
    isFavorite?: boolean;
}
/** Enums */
export declare enum ONLINE_STATE_VALUES {
    ON = "true",
    OFF = "false"
}
/** Helper enum */
export declare const enum SubActionType {
    STARTVIDEOCHAT = "STARTVIDEOCHAT",
    STARTFREECHAT = "STARTFREECHAT",
    STARTLIVEPREVIEW = "STARTLIVEPREVIEW",
    STARTVOYEURCHAT = "STARTVOYEURCHAT",
    STARTVOYEUR2SCHAT = "STARTVOYEUR2SCHAT"
}
export declare const messageTypes: {
    [key: string]: MsgType;
};
