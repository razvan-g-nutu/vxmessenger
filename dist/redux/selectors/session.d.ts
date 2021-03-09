import IStore from "../store";
export declare const getSession: (store: IStore, instanceId: string | undefined) => import("../store").ISession;
/**
 * @return {string} id of the video chat session
 */
export declare const getSessionId: import("reselect").OutputParametricSelector<IStore, string | undefined, string, (res: import("../store").ISession) => string>;
/**
 * @return {Currency} the active currency received from the init response. For VXPages we have Credits, for others, euro or dollar
 */
export declare const getCurrency: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").ICurrency, (res: import("../store").ISession) => import("../store").ICurrency>;
/**
 * @return {IChat | undefined} - structure containing identifiers used to create a vchat-core instance
 */
export declare const getChat: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IChat | undefined, (res: import("../store").ISession) => import("../store").IChat | undefined>;
/**
 * @return {IChat | undefined} - structure containing identifiers from the parent platform
 * in order to create a vchat-core instance
 */
export declare const getExternallyProvidedChat: import("reselect").OutputParametricSelector<IStore, string | undefined, {
    clientId: string | undefined;
    server: string | undefined;
    externallyProvided: boolean;
}, (res: import("../store").ISession) => {
    clientId: string | undefined;
    server: string | undefined;
    externallyProvided: boolean;
}>;
/**
 * @return {string | undefined} - returns chatId of the chat session
 */
export declare const getChatId: import("reselect").OutputParametricSelector<IStore, string | undefined, string | undefined, (res: import("../store").IChat | undefined) => string | undefined>;
/**
 * @return {boolean} - true if chat (conf) was provided by the external platform
 */
export declare const isChatExternallyProvided: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: import("../store").ISession) => boolean>;
/**
 * @return {ChatFeatures} - flags about different messenger features that could be activated or not
 */
export declare const getChatFeatures: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IChatFeatures, (res: import("../store").ISession) => import("../store").IChatFeatures>;
/**
 * @return {boolean} - true if the user has not been yet charged and he is not a VIP
 */
export declare const isNotChargedNorVip: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: import("../store").IChatFeatures) => boolean>;
/**
 * @return {boolean} if the client has free messages for this model
 */
export declare const hasFreePlatformChatDuration: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: import("../store").IChatFeatures) => boolean>;
/**
 * @deprecated - use getTranslatedGifts instead
 * @return {IGift[]} - list of gifts
 */
export declare const getGifts: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IGift[], (res: import("../store").ISession) => import("../store").IGift[]>;
export declare const getActiveGifts: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IGift[], (res: import("../store").IGift[]) => import("../store").IGift[]>;
/**
 * @return {GiftCategory[]} - list of gift categories
 */
export declare const getGiftCategories: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IGiftCategory[], (res: import("../store").ISession) => import("../store").IGiftCategory[]>;
/**
 * @return {number} - the last amount recharged by the user into his balance
 */
export declare const getLastRechargedAmount: import("reselect").OutputParametricSelector<IStore, string | undefined, number | {
    value: number;
    currency: string;
}, (res: import("../store").ISession) => number | {
    value: number;
    currency: string;
}>;
/**
 * @return {OneClickRecharge} - details about one click recharge feature
 * (possibility to add some predefined amounts to his balance with a single click)
 * being available for the logged in user
 */
export declare const getOneClickRecharge: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IOneClickRecharge, (res: import("../store").ISession) => import("../store").IOneClickRecharge>;
/**
 * @return {boolean} - true if one click recharge is avialable for the current logged in user
 */
export declare const isOneClickRechargeAvailable: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: import("../store").IOneClickRecharge) => boolean>;
/**
 * @return {number[]} - list of predefined amounts for one click recharge feature
 * (empty if that feature is not available)
 */
export declare const getOneClickRechargeAmounts: import("reselect").OutputParametricSelector<IStore, string | undefined, number[], (res: import("../store").IOneClickRecharge) => number[]>;
/**
 * @return {number | undefined} - default chosen amount for one click recharge feature;
 * undefined if one click recharge is not available
 */
export declare const getOneClickRechargeDefaultAmount: import("reselect").OutputParametricSelector<IStore, string | undefined, number | undefined, (res: import("../store").IOneClickRecharge) => number | undefined>;
/**
 * @return {string} - JWT web token used to authenticate a user
 */
export declare const getWebtoken: import("reselect").OutputParametricSelector<IStore, string | undefined, string, (res: import("../store").ISession) => string>;
/**
 * @return {string} - string containing the channel identifier, in the form of
 * <user_platform_id>.<user_id>-<model_platforn_id>.<model_id>
 */
export declare const getChannelId: import("reselect").OutputParametricSelector<IStore, string | undefined, string, (res: import("../store").ISession) => string>;
export declare const getUploadMediaUrl: import("reselect").OutputParametricSelector<IStore, string | undefined, string | undefined, (res: import("../store").ISession) => string | undefined>;
/**
 * @return {boolean} - true if the user can send message without being charged for that
 */
export declare const hasFreePlatformMessages: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: import("../store").ISession) => boolean>;
