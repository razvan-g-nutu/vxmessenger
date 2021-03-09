import { IBundle, IGift, IGiftCategory, IMessage, IToyOption } from "../redux/store";
export declare const gifts: IGift[];
export declare const giftCategories: IGiftCategory[];
export declare const giftBundles: IBundle[];
export declare const imageMessages: IMessage[];
export declare const imageUrlMessages: IMessage[];
export declare const usualMessages: IMessage[];
export declare const sixMessagesForFullscreen: IMessage[];
export declare const profilePicture = "https://premium.vxcdn.org/u/4795720/s/737089/p/8093723/140.jpg?8299-2c7a0d9be653783a";
export declare const toyOptions: IToyOption[];
export declare const livechatStartedMessages: IMessage[];
export declare const cameras: {
    deviceId: string;
    label: string;
    isFront?: boolean | undefined;
    isBack?: boolean | undefined;
    groupId: string;
    kind: MediaDeviceKind;
    toJSON(): any;
}[];
export declare const mobileCameras: {
    deviceId: string;
    label: string;
    isFront?: boolean | undefined;
    isBack?: boolean | undefined;
    groupId: string;
    kind: MediaDeviceKind;
    toJSON(): any;
}[];
export declare const mobileCamerasOneCameraEmbedded: {
    deviceId: string;
    label: string;
    isFront?: boolean | undefined;
    isBack?: boolean | undefined;
    groupId: string;
    kind: MediaDeviceKind;
    toJSON(): any;
}[];
