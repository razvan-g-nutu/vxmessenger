import * as React from 'react';
import { ChatConfig, ExitCode } from "../services/ChatService/types";
import { CMDC_CMSG, MessageParams, OnlineStateType, SupportedLanguage } from 'vxcontrol-client-lib';
import { IChatResponse } from '../sagas/websockets/types/types';
import { IChat, IEmoticon, IGift, IGiftPage, IGiftTranslation, IGroupChatColor, IGroupMessage, IMessage, IOnlineState, IPlatformProps, IResolution, ISession, IToyControlTranslation, IToyOption, PreChatInformationType, QuestionType, Translations, VideochatInformationType } from '../redux/store';
import { MessengerSpecificErrorCodes, VXControlCodes } from "../static/constants/errorCodes";
import { IPreferenceStore } from "../services/AppService/types";
export declare const InstanceContext: React.Context<string>;
export declare const CHAR_BEHIND_GIFTS = "\u3000";
export declare const versionNumber: string;
/**
 * Convert the emoticon code got from the back end into the special character which can be inserted into HTML
 * @param code
 */
export declare const emoticonCodeToPrintableChar: (code: string) => string;
export declare const itemToRegex: (item: string) => string;
export declare const getEmoticonsRegexp: (emoticons: IEmoticon[]) => string;
export declare const getEmoticonsPattern: (emoticons: IEmoticon[]) => string;
export declare const getEmoticonsShortcuts: (emoticons: IEmoticon[]) => string[];
export declare const getGiftEncoding: (gift: IGift) => string;
export declare const getGiftDecoded: (id: string) => number;
export declare const getRegexForMessage: (specialChars: string[]) => string;
/**
 * Get the CSS class to be used for an emoticon
 * @param emoticon
 */
export declare const getEmoticonClass: (emoticon: IEmoticon) => "emoticon-background" | "emoticon";
export declare const getSpecialCharactersRegex: (emoticons: IEmoticon[], giftIcons?: string[], mentions?: string[]) => RegExp;
/**
 * Get the translated name for gift's name
 * @param gift IGift interface for the concept of gift
 * @param language SupportedLanguage interface, for instance: "en", "de"
 */
export declare const getTranslatedGiftName: (gift: IGift, language: SupportedLanguage) => string;
export declare const findEmoticonWithRegex: (text: any, pattern: any, callback: any) => void;
/**
 * Being given a translated template and a key: value dictionary,
 * it replaces all '{key}' occurrences in template with the actual provided values
 * @param translation
 * @param values
 */
export declare const translationWithValues: (translation: string, values: {
    [key: string]: string | number | undefined;
}) => string;
/**
 * Return the timestamp based on the value and time unit (days/weeks/month)
 */
export declare const getTimestamp: (value: number | Date, timeUnit?: "days" | "weeks" | "month" | undefined) => number;
export declare const getSimplifiedDate: (date: string) => string;
export declare const checkIfMessageIsConsecutive: (messages: IMessage[], id: string) => boolean;
export declare const checkIfMessageIsLastConsecutive: (messages: IMessage[], id: string) => boolean;
export declare const checkIfMessageIsSolo: (messages: IMessage[], id: string) => boolean;
/**
 * Return the array of timestamps for all the groups from the chat box
 */
export declare const getGroupTimestamps: () => {
    [key: string]: number;
};
export declare const getOrganizedMessages: (messages: IMessage[], currentChatId?: string | undefined) => {
    [index: string]: (IMessage | IGroupMessage)[];
};
export declare const isGroupMessage: (message: IMessage | IGroupMessage) => boolean;
export declare const getTimestampForMessage: (dateCreated: string) => number;
/**
 * Timestamp for today, returns the timestamp for it
 */
export declare const getTodayTimestamp: () => number;
/**
 * Returns timestamp in which the value is framing in. The default is the
 * largest timestamp possible - six months.
 */
export declare const getGroupTimestampForMessage: (value: number) => number;
/**
 * Format a number to have two decimals; useful for money amounts
 * @param value
 */
export declare const withTwoDecimals: (value: number) => string;
/**
 * Deep diff between two object, using lodash; useful for debugging purposes
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
export declare const getDifference: (object: any, base: any) => any;
/**
 * Reconcile the existing messages with the ones we got when calling websockets for history
 * @param existingMessages
 * @param historyCommands
 * @param recentMessagesMaxLimit
 * @return messages to be added, if any
 */
export declare const reconcileMessages: (existingMessages: IMessage[], historyCommands: CMDC_CMSG[], recentMessagesMaxLimit: number, gifts: IGift[]) => IMessage[];
export declare const hashify: (object: any) => string;
export declare const isMobilePhone: (isMobile: boolean, isTablet: boolean) => boolean;
/** This function works only on Android devices */
export declare const isMobileOrientationLandscape: (isTablet?: boolean) => boolean;
/** It may apply for both gifts and toy options */
export declare const encodeForChatCommunication: (item: IGift | IToyOption) => string;
/**
 * Replaces the gifts encodings (based on their channel of communication) with our
 * base64.encode(giftId) and return the new message to be stored in Redux.
 *
 * @param gifts - the array with all the active gifts that maybe were set
 * @param message the text sent
 * @param isFromChat a flag to apply the correct decoding of the message
 */
export declare const getReceivedTextMessage: (gifts: IGift[], message: string | undefined, isFromChat: boolean) => string;
/**
 * Replaces the gifts with their encoding based on the channel of communication
 * and returns the new modified message to be sent to the model.
 * @param gifts
 * @param message
 * @param useChat
 */
export declare const getTextMessageToSend: (gifts: IGift[], message: string, useChat: boolean) => string;
/** Returns the array of gift ids from a message text in their correct order */
export declare const getGiftsFromMessage: (gifts: IGift[], message: string) => number[];
/** A JOIN between giftCategories and gifts coming from the INIT request */
export declare const getGiftPages: (session: ISession, language: SupportedLanguage, bundleTabTitle: string) => IGiftPage[];
export declare const getOnlineStateFromResponseParams: (params: OnlineStateType) => IOnlineState;
/**
 * When in Fullscreen mode the last 3 messages should descrease in opacity
 */
export declare const messageOpacity: (length: number, position: number, isFullscreen?: boolean) => number;
export declare const getChatConfig: (chat: IChat, messengerProperties: IPlatformProps) => ChatConfig;
export declare const getResolutionFromChatResponse: (chatResponse: IChatResponse) => IResolution;
export declare const getChatFromChatResponse: (chatResponse: IChatResponse) => IChat;
export declare const getDateCreatedForMessage: (time: string) => string;
export declare const getShouldDisplayIcon: (shouldDisplayIcon?: boolean | undefined) => boolean;
export declare const getPreselectedOneClickAmount: (amounts: number[], expectedAmount?: number) => number;
/**
 * Get the containing DOM node for the entire VXMessenger;
 * Caveat: it assumes that only one messenger is open at a certain moment
 * FUTURE TODO: try to get the node in a more Reactful way;
 * currently having troubles with styled-components and React Ref
 */
export declare const getMessengerNode: (instanceId: string) => Element | undefined;
export declare const getWindowDimensions: () => IResolution;
export declare const isMessageFromChat: (message: MessageParams) => boolean;
export declare const isOutOfMoneyInformationDialog: (informationType: VideochatInformationType) => boolean;
export declare const isLoadAccountUserPrompt: (userPromptType: QuestionType) => boolean;
/**
 * Get the desired value based on the current language.
 */
export declare const getValueByLanguage: (language: string, values?: typeof SupportedLanguage) => any;
/**
 * Get the translation based on the current language.
 */
export declare const getTranslation: (language: SupportedLanguage, storedTranslations: Translations) => import("../redux/store").ITranslation;
/**
 * Get the name translated for different back-end item's based on the current language
 * (examples: gift's name, gift bundle's name or toy control option's name)
 */
export declare const getItemTranslation: (language: SupportedLanguage, translations: IGiftTranslation[]) => IGiftTranslation;
/**
 * Checks if the chat was reseted before/20 minutes ago;
 */
export declare const shouldResetChat: (timestamp: Date) => boolean;
/**
 * Counts the clicks number, if intervalBetweenClicks is reached clickCouter is reseted.
 */
export declare const clickCounter: (intervalBetweenClicks: number) => {
    onClick: () => void;
    getClickCount: () => number;
};
/**
 * Used to calculate the delay of transition group for user prompts
 * we need 2xtimeInSeconds. Because it needs to wait timeInSeconds before the transition
 * and timeInSeconds to execute de transition
 */
export declare const getTransitionTimeInMilliseconds: (timeInSeconds: number) => number;
/**
 * It verifies if the hook given as param has been configured by the parent platform
 */
export declare const hasHookConfigured: (hook: any) => boolean;
/**
 * After replacing all gifts with just one character and emoticons with the length
 * of their shortcut, we will check if the message exceeds the text max limit set in config.
 * @param text
 */
export declare const hasExceededTextLimit: (text: string) => boolean;
/**
 * If the message is NOT of type TOY, we will return it unaltered.
 * If the message is of type TOY, we will update some properties.
 */
export declare const convertToToyMessage: (message: IMessage, toyOption: IToyOption, translation: IToyControlTranslation) => IMessage;
export declare const getCameraCloseButton: () => HTMLElement;
export declare const getFormattedDuration: (duration: number) => string;
export declare const queryString: (params: any) => string;
/**
 * Being given an error code, it returns the type of the Pre-Chat Information Dialog to be displayed,
 * or undefined if none should be displayed
 * @param code
 */
export declare const getPrechatByErrorCode: (code: ExitCode | VXControlCodes | MessengerSpecificErrorCodes) => PreChatInformationType | undefined;
/**
 * Renders the color with which the username should be renderd during
 * a group chat mode. It will return the color with fewest active usernames.
 * @param colors all the group chat colors available for usage
 */
export declare const getColorForUsername: (colors: IGroupChatColor[], username?: string | undefined) => string;
export declare const shouldOpenMentionSection: (participants: string[], query: string, isMentionSectionOpen: boolean) => boolean;
export declare const hasActiveMentions: (participants: string[], query: string) => boolean;
export declare const computeMessageFontSize: (shouldIncreaseMessageFontSize: any, fontSize: any) => string;
export declare const defaultPreferenceStore: IPreferenceStore;
