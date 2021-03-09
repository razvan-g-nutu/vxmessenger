import { SupportedLanguage } from 'vxcontrol-client-lib';
import IStore, { IChat, IContactNote, ICountdownWarning, IGift, IGiftPage, IMessage, IMessenger, IModalContent, ISession, IUser, IVideochat, IWindowSectionState, VideoChatType } from '../store';
/**
 * Get a list with all the instance ids contained in the store
 * @param store
 */
export declare const getInstanceIds: (store: IStore) => string[];
/**
 * Get instanceId of the instance being in full screen (if any)
 * @param store
 * @return {string | undefined}
 */
export declare const getFullScreenInstance: (store: IStore) => string | undefined;
/**
 * Get the list of bundles with the translated names
 * @return {GiftBundle[]}
 */
export declare const getGiftBundles: import("reselect").OutputParametricSelector<IStore, string | undefined, {
    name: string;
    id: number;
    imageUrl: string;
    active: boolean;
    gifts: import("../store").IBundleGift[];
    price: number;
    translations: import("../store").IGiftTranslation[];
}[], (res1: ISession, res2: SupportedLanguage) => {
    name: string;
    id: number;
    imageUrl: string;
    active: boolean;
    gifts: import("../store").IBundleGift[];
    price: number;
    translations: import("../store").IGiftTranslation[];
}[]>;
/**
 * A JOIN between gift categories, bundles and simple gifts from the INIT request
 */
export declare const getGiftPages: import("reselect").OutputParametricSelector<IStore, string | undefined, IGiftPage[], (res1: ISession, res2: SupportedLanguage, res3: import("../store").ITranslation) => IGiftPage[]>;
/**
 * If messenger is for content partner, we will remove the gifts option.
 * If the messenger is not for content partners, but no gifts come from our request,
 * we will remove the gifts option.
 */
export declare const isGiftButtonVisible: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: IGiftPage[], res2: boolean) => boolean>;
/**
 * Gift's name is translated based on user's chosen language
 */
export declare const getTranslatedGifts: import("reselect").OutputParametricSelector<IStore, string | undefined, {
    name: string;
    id: number;
    active: boolean;
    categoryId: number;
    imageUrl: string;
    initialQuantity?: number | undefined;
    currentQuantity?: number | undefined;
    initialPrice?: number | undefined;
    price: number;
    translations: import("../store").IGiftTranslation[];
}[], (res1: IGift[], res2: SupportedLanguage) => {
    name: string;
    id: number;
    active: boolean;
    categoryId: number;
    imageUrl: string;
    initialQuantity?: number | undefined;
    currentQuantity?: number | undefined;
    initialPrice?: number | undefined;
    price: number;
    translations: import("../store").IGiftTranslation[];
}[]>;
/**
 * @return { ICountdownWarning | undefined } - data about the countdown warning,
 * announcing that after a certain amount of seconds,
 * a major event (usually out of money) would likely to stop the video stream
 */
export declare const getCountdownWarning: import("reselect").OutputParametricSelector<IStore, string | undefined, false | ICountdownWarning | undefined, (res1: IWindowSectionState, res2: VideoChatType | undefined, res3: boolean) => false | ICountdownWarning | undefined>;
/**
 * @return {boolean} - returns true if countdown warning is open
 */
export declare const isCountdownWarningOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: false | ICountdownWarning | undefined) => boolean>;
/**
 * @return {boolean} - true if the video chat mode is spending money
 * (and implicitly makes the video time limit decrease)
 */
export declare const isVideoChatInSpendingMode: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: VideoChatType | undefined) => boolean>;
/**
 * @return {boolean} true if the user can interact with the model
 * (send text, images, emoticons and/ or gifts)
 */
export declare const isInteractive: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean, res4: number, res5: boolean) => boolean>;
/**
 * @return {boolean} true if the emoticons section is open
 */
export declare const isEmoticonSectionOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: IWindowSectionState) => boolean>;
/**
 * @return {boolean} true if the gifts section is open
 */
export declare const isGiftSectionOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: IWindowSectionState) => boolean>;
/**
 * @return {boolean} true if the user can initiate a regular video chat session
 */
export declare const canInitiateLiveChat: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: VideoChatType | undefined, res2: boolean, res3: boolean) => boolean>;
/**
 * @return {boolean} true if the user can initiate a live preview video chat session
 */
export declare const canInitiateLivePreview: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: VideoChatType | undefined, res2: boolean, res3: boolean, res4: boolean) => boolean>;
/**
 * @return {boolean} true if the user can initiate a private video chat session
 */
export declare const canInitiatePrivateChat: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: VideoChatType | undefined, res2: boolean, res3: boolean, res4: boolean, res5: boolean, res6: boolean) => boolean>;
/**
 * @return {boolean} true if the user can initiate a voyeur video chat session
 */
export declare const canInitiateVoyeurChat: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: VideoChatType | undefined, res2: boolean, res3: boolean, res4: boolean) => boolean>;
/**
 * @return {boolean} true if the user can initiate a voyeur video chat session,
 * but with a model being currently in a private chat with someone else
 */
export declare const canInitiateVoyeurToPrivateChat: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean) => boolean>;
/**
 * @return {boolean} true if the user can initiate a cam-to-cam session
 */
export declare const canInitiateCam2Cam: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean, res4: boolean, res5: boolean, res6: VideoChatType | undefined) => boolean>;
/**
 * @return {boolean} true if any action button is to be rendered
 */
export declare const hasActionButtons: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean, res4: boolean, res5: boolean) => boolean>;
/**
 * @return {boolean} - true if the motto should be rendered
 * (when the model is offline or during a non-fullscreen videochat)
 */
export declare const shouldRenderMotto: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean, res4: boolean) => boolean>;
/**
 * @returns {boolean} true if the action section should be rendered and the messenger
 * is not opened in mobile. In this case, the action section will be part of the model's
 * profile section.
 */
export declare const hasActionSectionInProfile: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: boolean) => boolean>;
/**
 * @returns {boolean} true if the action section should be rendered and the messenger
 * is opened in mobile, without an active stream.
 * In this case, the action section will be rendered under the texbox
 */
export declare const hasActionSectionUnderTextbox: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean) => boolean>;
/**
 * @returns {boolean} true if the action section should be rendered inside the
 * responsive dropdown (as the last option) when the messenger is opened in
 * mobile with an active videochat stream.
 */
export declare const hasActionSectionInDropDown: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean) => boolean>;
/**
 * @return {boolean} - true if the user offline information dialog should be rendered
 * (only if the user is offline and is in a videochat)
 */
export declare const shouldRenderUserOfflineInformation: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean) => boolean>;
/**
 * @return {boolean} - true if an exiting chat information dialog should be displayed
 */
export declare const shouldRenderExitingInformationDialog: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean) => boolean>;
/**
 * @return {boolean} - true if the messenger should be closed
 * (usually when clicking outside of it)
 */
export declare const shouldCloseMessenger: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: IModalContent, res4: IContactNote, res5: boolean | undefined, res6: boolean, res7: boolean) => boolean>;
/**
 * @return {boolean} - true if the contact note can be rendered.
 * This implies that the messenger is not on fullscreen mode and
 * has this feature from the parent platform.
 */
export declare const hasContactNote: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean) => boolean>;
export declare const hasFavorite: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean) => boolean>;
/**
 * @return {boolean} = true if we should lift chatbox;
 * occurs when we are in fullscreen and we have a countdown warning open
 */
export declare const shouldLiftChatbox: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean) => boolean>;
/**
 *  @return {boolean} true if the cam2cam popup for age-verification-system should be displayed
 */
export declare const shouldRenderAVSCam2CamPopup: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean, res4: VideoChatType | undefined) => boolean>;
/**
 *  @return {boolean} - true for mobile devices which are in the videochat mode
 *  and for android devices which are in messenger mode and have their height less than maxHeightBlurEditor
 */
export declare const shouldCloseMobileKeyboard: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: boolean) => boolean>;
/**
 * Active messages as they should be displayed on the messenger
 * @return {IMessage[]}
 */
export declare const getActiveMessages: import("reselect").OutputParametricSelector<IStore, string | undefined, IMessage[], (res1: IMessage[], res2: boolean, res3: IChat | undefined) => IMessage[]>;
/**
 * @return {boolean} - true if the client has any type of free messages for this model:
 * free messages for the entire platform or free messages for this specific model.
 */
export declare const hasFreeMessages: import("reselect").OutputParametricSelector<IStore, string | undefined, number | boolean, (res1: boolean, res2: number) => number | boolean>;
/**
 * @return {boolean} - true if the client has any free livechat time for this model:
 * free livechat time for the entire platform or free livechat time for this specific model
 */
export declare const hasFreeChatDuration: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean) => boolean>;
/**
 *  @return {boolean} - true if we should render profile picture in the profile component
 */
export declare const hasModelPictureInProfile: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean) => boolean>;
/**
 *  @return {boolean} - true if we should display the anonymous tip
 */
export declare const shouldOpenAnonymousTipPrompt: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean) => boolean>;
export declare const hasToyControl: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: VideoChatType | undefined, res3: boolean) => boolean>;
/**
 * @return {boolean} true if we should render the toy control icon as
 * one of our message section buttons - this should happen in fullscren and in mobile
 */
export declare const hasToyControlButton: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean) => boolean>;
/**
 * @return {boolean} true if we should render only the toy section header, which will contain
 * only some informative text and it on click will open the entire toy section.
 */
export declare const shouldRenderToySectionHeader: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean) => boolean>;
/**
 *  @return {boolean} - true if the tip feature should be offered to the user
 */
export declare const shouldShowTipping: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean) => boolean>;
export declare const shouldShowHistory: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean) => boolean>;
/**
 * @return {boolean} true if the client can upload images
 */
export declare const hasImageUpload: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean) => boolean>;
/**
 * @return {boolean} true if the user can send audio messages
 */
export declare const hasAudioMessages: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean | undefined, res2: boolean) => boolean>;
/**
 * @return true if any message section functionality is configured on true from
 * the parent platform: send message arrow, gifts, emoticons or image upload.
 */
export declare const shouldDisplayMessageSectionButtons: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean, res4: boolean, res5: boolean) => boolean>;
/**
 * @return true if the send message arrow has been configured on true from the parent platform,
 * but all the other message section features are on false (gifts, emoticons and image upload).
 */
export declare const hasOnlySendButton: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean, res4: boolean) => boolean>;
export declare const isConsecutiveGroupMessage: (id: string) => import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IMessage[]) => boolean>;
export declare const isLastConsecutiveGroupMessage: (id: string) => import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IMessage[]) => boolean>;
export declare const isSoloMessage: (id: string) => import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IMessage[]) => boolean>;
export declare const getMentionOptions: import("reselect").OutputParametricSelector<IStore, string | undefined, string[], (res1: string[], res2: string, res3: boolean) => string[]>;
export declare const isMentionSectionOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: IMessenger, res2: boolean, res3: boolean) => boolean>;
/**
 * @return {boolean} true if all the user prompts and sections are closed
 */
export declare const areAllPopUpsClosed: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: IMessenger, res2: boolean, res3: boolean, res4: boolean, res5: boolean) => boolean>;
export declare const shouldUseDropdownAnimation: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean, res3: boolean, res4: boolean, res5: boolean) => boolean>;
/**
 * @return {number} client side volume setting
 */
export declare const getClientVolume: import("reselect").OutputParametricSelector<IStore, string | undefined, number, (res1: IUser, res2: IVideochat) => number>;
