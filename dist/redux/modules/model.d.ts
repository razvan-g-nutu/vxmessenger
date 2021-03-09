import { Action } from "redux-actions";
import { IModel, IPartner, IOnlineState, IModelPrices } from "../store";
export declare const SET_PARTNER: string;
export declare const RESET_MODEL: string;
export declare const SET_FAVORITE: string;
export declare const SET_MODEL_NAME: string;
export declare const RESET_MODEL_NAME: string;
export declare const SET_MOTTO: string;
export declare const RESET_MOTTO: string;
export declare const SET_MODEL_PRICES: string;
export declare const SET_MESSAGE_PRICE: string;
export declare const SET_PROFILE_PICTURE: string;
export declare const RESET_PROFILE_PICTURE: string;
export declare const SET_MODEL_ONLINE_STATE: string;
export declare const SET_IS_ONLINE: string;
export declare const SET_CHAT_ABILITY: string;
export declare const SET_LIVE_PREVIEW_ABILITY: string;
export declare const SET_PRIVATE_CHAT_ABILITY: string;
export declare const SET_TIP_ABILITY: string;
export declare const SET_FREE_MESSAGES: string;
export declare const SET_FREE_CHAT_DURATION: string;
export declare const RESET_FREE_CHAT_DURATION: string;
export declare const resetModel: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const setPartner: (instanceId: string, payload?: IPartner | undefined) => Action<import("../interfaces").IPayload<IPartner | undefined>>;
export declare const setProfilePicture: (instanceId: string, payload?: string | undefined) => Action<import("../interfaces").IPayload<string>>;
export declare const resetProfilePicture: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const setModelName: (instanceId: string, payload?: string | undefined) => Action<import("../interfaces").IPayload<string>>;
export declare const resetModelName: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const setModelPrices: (instanceId: string, payload?: IModelPrices | undefined) => Action<import("../interfaces").IPayload<IModelPrices>>;
export declare const setMessagePrice: (instanceId: string, payload?: number | undefined) => Action<import("../interfaces").IPayload<number>>;
export declare const setFavorite: (instanceId: string, payload?: boolean | undefined) => Action<import("../interfaces").IPayload<boolean>>;
export declare const setMotto: (instanceId: string, payload?: string | undefined) => Action<import("../interfaces").IPayload<string>>;
export declare const resetMotto: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const setModelOnlineState: (instanceId: string, payload?: IOnlineState | undefined) => Action<import("../interfaces").IPayload<IOnlineState>>;
export declare const setIsOnline: (instanceId: string, payload?: boolean | undefined) => Action<import("../interfaces").IPayload<boolean>>;
export declare const setChatAbility: (instanceId: string, payload?: boolean | undefined) => Action<import("../interfaces").IPayload<boolean>>;
export declare const setLivePreviewAbility: (instanceId: string, payload?: boolean | undefined) => Action<import("../interfaces").IPayload<boolean>>;
export declare const setPrivateChatAbility: (instanceId: string, payload?: boolean | undefined) => Action<import("../interfaces").IPayload<boolean>>;
export declare const setTipAbility: (instanceId: string, payload?: boolean | undefined) => Action<import("../interfaces").IPayload<boolean>>;
export declare const setFreeModelMessages: (instanceId: string, payload?: number | undefined) => Action<import("../interfaces").IPayload<number>>;
export declare const setModelFreeChatDuration: (instanceId: string, payload?: number | undefined) => Action<import("../interfaces").IPayload<number>>;
export declare const resetModelFreeChatDuration: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
declare const model: import("redux-actions").ReduxCompatibleReducer<IModel, IModel>;
export default model;
