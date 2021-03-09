import IStore, { IFeatures } from "../store";
export declare const getFeatures: (store: IStore, instanceId: string | undefined) => IFeatures;
/**
 * @return {boolean} if true preloader text is hidden
 */
export declare const hasPreloaderPaymentText: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger has the "favorite" feature active
 */
export declare const hasFavoriteFeature: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger has the "contact note" feature active
 */
export declare const hasContactNoteFeature: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger has "gifts" feature active
 */
export declare const hasGiftsFeature: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger has the toy control feature active
 */
export declare const hasToyControlFeature: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger has the "exit pop-ups" feature active
 * (means that the exit informational pop-ups displayed are the default ones implemented in vxmessenger)
 * Useful when the platform intends to display its own customized exit pop-ups
 */
export declare const hasExitPopups: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger has the "modelProfilePicture" feature active
 */
export declare const hasModelProfilePicture: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger has the "modelMotto" feature active
 */
export declare const hasModelMotto: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger has the "modelName" feature active
 */
export declare const hasModelName: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger has the "cam2Cam" feature active
 */
export declare const hasCam2Cam: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger has the "voyeur" feature active
 */
export declare const hasVoyeur: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger has the "privateChat" feature active
 */
export declare const hasPrivateChat: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger has the "closeButton" feature active
 */
export declare const hasCloseButton: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger has the fullscreen feature active. If not we will never
 * render the fullscreen button in the videochat container.
 */
export declare const hasFullscreen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger has the emoticons button rendered (functionality such as
 * using the shortcut in the textbox to transform the text into emoticon will be kept).
 */
export declare const hasEmoticons: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the client will have the ability to upload an image
 */
export declare const hasImageUploadFeature: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the arrow for sending the message to the model on click will be rendered
 */
export declare const hasSendMessageButton: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the history messages sections from the chatbox will be opened from the start
 */
export declare const hasHistorySectionsOpened: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} true if the messenger will contain the past conversation between the client and the model
 */
export declare const hasHistoryMessages: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
export declare const hasMessagesGrouped: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
export declare const hasGroupChatIndicator: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @returns {boolean} true if messenger's header is visit-x
 * custom containing only messages info.
 */
export declare const isMessageTypeHeader: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @returns {boolean} true if the parent platform has configured the messenger
 * to enable the client the functionality of sending audio messages
 */
export declare const hasAudioMessageFeature: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean | undefined, (res: IFeatures) => boolean | undefined>;
/**
 * @returns {boolean} true if the parent platform has configured the messenger
 * to render the name of the client in the message bubble when the stream
 * is in group chat mode
 */
export declare const hasClientName: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean | undefined, (res: IFeatures) => boolean | undefined>;
/**
 * @returns {boolean} true if the parent platform has configured the messenger
 * to render the fullscreen layout when the messenger has a stream active
 * inside a landscape container (width > height)
 */
export declare const hasFullscreenLayoutOnLandscape: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean | undefined, (res: IFeatures) => boolean | undefined>;
/**
 * @return {boolean} if true, when clicking outisde the messenger, we will trigger our custom logic
 */
export declare const hasBehaviorOnClickOutside: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} if the parent platforn has configured the messenger to have
 * the tipping features enabled - both custom tipping when a stream is active and
 * the anonymous tip when starting a voyeur chat
 */
export declare const hasTips: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IFeatures) => boolean>;
/**
 * @return {boolean} if true, censored content will be shown
 */
export declare const getShowCensoredContent: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean | undefined, (res: IFeatures) => boolean | undefined>;
