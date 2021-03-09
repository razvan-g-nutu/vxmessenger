import IStore, { IModel } from "../store";
export declare const getModel: (store: IStore, instanceId: string | undefined) => IModel;
/**
 * @return {string} a string containing the motto of the model
 */
export declare const getModelMotto: import("reselect").OutputParametricSelector<IStore, string | undefined, string, (res: IModel) => string>;
/**
 * @return {string} - model's name
 */
export declare const getModelName: import("reselect").OutputParametricSelector<IStore, string | undefined, string, (res: IModel) => string>;
/**
 * @return {string} - link to model's picture
 */
export declare const getModelProfilePicture: import("reselect").OutputParametricSelector<IStore, string | undefined, string, (res: IModel) => string>;
/**
 * @return {boolean} - true if current model was marked as favorite
 */
export declare const isModelFavorite: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IModel) => boolean>;
/**
 * @return {Partner} a structure identifying the chat partner (aka. model)
 */
export declare const getPartner: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IPartner, (res: IModel) => import("../store").IPartner>;
/**
 * @return {IOnlineState} a structure with all online state flags;
 * useful especially when wants to see if it was set yet or not
 */
export declare const getOnlineState: import("reselect").OutputParametricSelector<IStore, string | undefined, Partial<import("../store").IOnlineState> | undefined, (res: IModel) => Partial<import("../store").IOnlineState> | undefined>;
/**
 * @return {boolean} - true if the model is online
 */
export declare const isModelOnline: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IModel) => boolean>;
/**
 * @return {boolean} - true if the model is allowing a regular video chat session
 */
export declare const isModelSupportingChat: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IModel) => boolean>;
/**
 * @return {boolean} true if the model is currently in a private chat session
 */
export declare const isModelInPrivateChat: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IModel) => boolean>;
/**
 * @return {boolean} true if the model is allowing a private video chat session
 */
export declare const isModelSupportingPrivateChat: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IModel) => boolean>;
/**
 * @return {boolean} true if the model is allowing a soft chat session
 * (model is currently doing a soft show, appropriate for people under 18
 */
export declare const isModelSupportingSoftChat: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IModel) => boolean>;
/**
 * @return {boolean} true if the model is allowing a short preview video session
 */
export declare const isModelSupportingPreviewChat: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IModel) => boolean>;
/**
 * @return {boolean} true if the model is allowing a voyeur video chat session
 * (user can watch, but cannot interact with the model)
 */
export declare const isModelSupportingVoyeurChat: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IModel) => boolean>;
/**
 * @return {boolean} true if the model has toy control support activated
 */
export declare const isModelSupportingToyControl: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IModel) => boolean>;
/**
 * @return {boolean} true if the model is allowing a voyeur video chat session
 * even if she is in a private chat with someone else
 */
export declare const isModelSupportingVoyeurToPrivateChat: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IModel) => boolean>;
/**
 * @return {boolean} true if the model can receive tips
 */
export declare const isModelSupportingTip: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IModel) => boolean>;
/**
 * @return {number} - price and currency per minute of regular video chat
 */
export declare const getLiveChatPrice: import("reselect").OutputParametricSelector<IStore, string | undefined, number, (res: IModel) => number>;
/**
 * @return {number} - price and currency per minute of voyeur video chat
 */
export declare const getVoyeurCamPrice: import("reselect").OutputParametricSelector<IStore, string | undefined, number, (res: IModel) => number>;
/**
 * @return {boolean} - if we receive any price from the back-end
 */
export declare const hasPrices: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IModel) => boolean>;
/**
 * @return {number} - price and currency per message sent (when not in a video session)
 */
export declare const getMessagePrice: import("reselect").OutputParametricSelector<IStore, string | undefined, number, (res: IModel) => number>;
/**
 * @return {number} representing the free messages between the client and this specific model
 */
export declare const hasFreeModelMessages: import("reselect").OutputParametricSelector<IStore, string | undefined, number, (res: IModel) => number>;
/**
 * @return {boolean} true if the client has free stream time for this specific model
 */
export declare const hasFreeModelChatDuration: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IModel) => boolean>;
/**
 * @return {number} returns the number of free seconds between the client and this specific model
 */
export declare const getFreeModelChatDuration: import("reselect").OutputParametricSelector<IStore, string | undefined, number, (res: IModel) => number>;
