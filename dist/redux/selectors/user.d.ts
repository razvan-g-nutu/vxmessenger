import IStore, { IUser, ITranslation } from "../store";
export declare const getUser: (store: IStore, instanceId: string | undefined) => IUser;
/**
 * @return {ITranslation} - an object containing all translation for the current language
 */
export declare const getTranslation: import("reselect").OutputParametricSelector<IStore, string | undefined, ITranslation, (res: IUser) => ITranslation>;
/**
 * We will take only the texts for error contexts
 */
export declare const getTranslationForErrors: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IErrorTranslation, (res: ITranslation) => import("../store").IErrorTranslation>;
/**
 * @return {number} client side volume setting, but not considering the muting flag
 */
export declare const getNotMutedClientVolume: import("reselect").OutputParametricSelector<IStore, string | undefined, number, (res: IUser) => number>;
/**
 * @return {SupportedLanguage} - current selected language; at this moment, only en, de and es are supported
 */
export declare const getLanguage: import("reselect").OutputParametricSelector<IStore, string | undefined, import("vxcontrol-client-lib").SupportedLanguage, (res: IUser) => import("vxcontrol-client-lib").SupportedLanguage>;
/**
 * @return {string | undefined} - current user key, provided by the hosting platform
 */
export declare const getUserKey: import("reselect").OutputParametricSelector<IStore, string | undefined, string | undefined, (res: IUser) => string | undefined>;
/**
 * @return {boolean} - true if the current user is currently online
 */
export declare const isUserOnline: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IUser) => boolean>;
/**
 * @return {boolean} - true if the user is currently offline (disconnected)
 */
export declare const isUserOffline: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IUser) => boolean>;
/**
 * @return {boolean} - true if the user's account is a VIP one
 */
export declare const isVip: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IUser) => boolean>;
/**
 * @return {boolean} shouldIncreaseMessageFontSize preference
 */
export declare const getShouldIncreaseMessageFontSize: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IUser) => boolean>;
