import { Action } from "redux-actions";
import { AnswerType, IActionResponse, ICountdownWarning, IEmoticon, IGroupChatColor, IMessage, IMessenger, IModalContent, IQuestion, IStoredEditorState, IToyOption, LoadingStatus, QuestionType } from "../store";
export interface IImageLoadedPayload {
    messageKey: string;
    imgSrc: string;
    imgSrcSet?: string;
    imgWidth?: string;
    imgHeight?: string;
}
export interface IAnswerUserPromptPayload {
    question: IQuestion;
    answer: AnswerType;
}
export interface ISetHasTooltipPayload {
    id: number;
    hasTooltip: boolean;
}
export declare const OPEN_MESSENGER: string;
export declare const CLOSE_MESSENGER: string;
export declare const SET_SHOULD_SEND_MESSAGE: string;
export declare const SET_SECONDS_ELAPSED: string;
export declare const SET_IS_RECORDING_AUDIO_MESSAGE: string;
export declare const SET_IS_MIC_ENABLED: string;
export declare const ADD_MESSAGE: string;
export declare const INSERT_ALL_MESSAGES: string;
export declare const UPDATE_MESSAGE: string;
export declare const REMOVE_ALL_MESSAGES: string;
export declare const REMOVE_MESSAGE: string;
export declare const UPDATE_IMAGE_MESSAGE_WHEN_LOADED: string;
export declare const ADD_FAILED_MESSAGE: string;
export declare const CLEAR_FAILED_MESSAGES: string;
export declare const SET_SHOULD_RESEND_FAILED_MESSAGES: string;
export declare const SET_ACTIVE_GIFT: string;
export declare const SET_ACTIVE_EMOTICON: string;
export declare const SET_ACTIVE_MENTION: string;
export declare const SET_FOCUSED_MENTION_OPTION: string;
export declare const RESET_FOCUSED_MENTION_OPTION: string;
export declare const RESET_SYMBOLS: string;
export declare const SET_EMOTICONS: string;
export declare const SET_MODAL_CONTENT: string;
export declare const RESET_MODAL_CONTENT: string;
export declare const SET_ACTION_RESPONSE: string;
export declare const RESET_ACTION_RESPONSE: string;
export declare const SET_IS_RESPONSIVE: string;
export declare const OPEN_CONTACT_NOTE: string;
export declare const OPEN_EMOTICON_SECTION: string;
export declare const CLOSE_EMOTICON_SECTION: string;
export declare const OPEN_GIFT_SECTION: string;
export declare const CLOSE_GIFT_SECTION: string;
export declare const OPEN_TOY_SECTION: string;
export declare const CLOSE_TOY_SECTION: string;
export declare const TOGGLE_TOY_SECTION: string;
export declare const OPEN_MENTION_SECTION: string;
export declare const CLOSE_MENTION_SECTION: string;
export declare const ADD_MENTION: string;
export declare const OPEN_USER_PROMPT_SECTION: string;
export declare const CLOSE_USER_PROMPT_SECTION: string;
export declare const RESET_USER_PROMPTS: string;
export declare const ANSWER_USER_PROMPT_SECTION: string;
export declare const OPEN_COUNTDOWN_WARNING: string;
export declare const CLOSE_COUNTDOWN_WARNING: string;
export declare const CLOSE_SECTIONS: string;
export declare const TOGGLE_DROP_DOWN: string;
export declare const CLOSE_DROP_DOWN: string;
export declare const SET_MESSENGER_LOADING_STATUS: string;
export declare const OPEN_VERSION: string;
export declare const CLOSE_VERSION: string;
export declare const SET_STORED_EDITOR_STATE: string;
export declare const REQUEST_IMAGE_UPLOAD: string;
export declare const RESET_IMAGE_UPLOAD_STATUS: string;
export declare const ACTIVATE_TOY_OPTION: string;
export declare const openMessenger: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const closeMessenger: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const addMessage: (instanceId: string, payload?: IMessage | undefined) => Action<import("../interfaces").IPayload<IMessage>>;
export declare const setMentionQuery: (instanceId: string, payload?: string | undefined) => Action<import("../interfaces").IPayload<string>>;
/**
 * Stop the loading animation and update the id from the database
 * @param messageKey message's id from the database
 * @param imgSrc message's imgSrc from the database
 */
export declare const updateImageMessageWhenLoaded: (instanceId: string, payload?: IImageLoadedPayload | undefined) => Action<import("../interfaces").IPayload<IImageLoadedPayload>>;
/**
 * DON'T USE THIS ACTION CREATOR - use insertAllMessagesToStore, which
 * will apply some intermediate formatting before adding to store.
 * @param payload
 */
export declare const insertAllMessages: (instanceId: string, payload?: IMessage[] | undefined) => Action<import("../interfaces").IPayload<IMessage[]>>;
export declare const removeAllMessages: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const updateMessage: (instanceId: string, payload?: IMessage | undefined) => Action<import("../interfaces").IPayload<IMessage>>;
export declare const removeMessage: (instanceId: string, payload?: string | undefined) => Action<import("../interfaces").IPayload<string>>;
export declare const setShouldSendMessage: (instanceId: string, payload?: boolean | undefined) => Action<import("../interfaces").IPayload<boolean>>;
export declare const setSecondsElapsed: (instanceId: string, payload?: number | undefined) => Action<import("../interfaces").IPayload<number>>;
export declare const setIsRecordingAudioMessage: (instanceId: string, payload?: boolean | undefined) => Action<import("../interfaces").IPayload<boolean>>;
export declare const setIsMicEnabled: (instanceId: string, payload?: boolean | undefined) => Action<import("../interfaces").IPayload<boolean>>;
export declare const addFailedMessage: (instanceId: string, payload?: string | undefined) => Action<import("../interfaces").IPayload<string>>;
export declare const clearFailedMessages: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const setShouldResendFailedMessages: (instanceId: string, payload?: boolean | undefined) => Action<import("../interfaces").IPayload<boolean>>;
export declare const setEmoticons: (instanceId: string, payload?: IEmoticon[] | undefined) => Action<import("../interfaces").IPayload<IEmoticon[]>>;
export declare const setIsTextEnabled: (instanceId: string, payload?: boolean | undefined) => Action<import("../interfaces").IPayload<boolean>>;
export declare const setModalContent: (instanceId: string, payload?: IModalContent | undefined) => Action<import("../interfaces").IPayload<IModalContent>>;
export declare const resetModalContent: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const setActionResponse: (instanceId: string, payload?: IActionResponse | undefined) => Action<import("../interfaces").IPayload<IActionResponse>>;
export declare const resetActionResponse: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const openContactNote: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const closeContactNote: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const setContactNote: (instanceId: string, payload?: string | undefined) => Action<import("../interfaces").IPayload<string>>;
export declare const resetContactNote: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const openEmoticonSection: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const closeEmoticonSection: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const openGiftSection: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const closeGiftSection: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const toggleToySection: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const openToySection: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const closeToySection: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const openMentionSection: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const closeMentionSection: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const addMention: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const toggleDropDown: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const closeDropDown: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const openUserPromptSection: (instanceId: string, payload?: IQuestion | undefined) => Action<import("../interfaces").IPayload<IQuestion>>;
export declare const closeUserPromptSection: (instanceId: string, payload?: QuestionType | undefined) => Action<import("../interfaces").IPayload<QuestionType>>;
export declare const openCountdownWarning: (instanceId: string, payload?: ICountdownWarning | undefined) => Action<import("../interfaces").IPayload<ICountdownWarning>>;
export declare const closeCountdownWarning: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const resetUserPrompts: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const answerUserPromptSection: (instanceId: string, payload?: IAnswerUserPromptPayload | undefined) => Action<import("../interfaces").IPayload<IAnswerUserPromptPayload>>;
export declare const closeSections: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const setMessengerLoadingStatus: (instanceId: string, payload?: LoadingStatus | undefined) => Action<import("../interfaces").IPayload<LoadingStatus>>;
export declare const setHasEditor: (instanceId: string, payload?: boolean | undefined) => Action<import("../interfaces").IPayload<boolean>>;
export declare const setIsResponsive: (instanceId: string, payload?: boolean | undefined) => Action<import("../interfaces").IPayload<boolean>>;
export declare const openVersion: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const closeVersion: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const setActiveGift: (instanceId: string, payload?: string | undefined) => Action<import("../interfaces").IPayload<string>>;
export declare const setActiveEmoticon: (instanceId: string, payload?: string | undefined) => Action<import("../interfaces").IPayload<string>>;
export declare const setActiveMention: (instanceId: string, payload?: string | undefined) => Action<import("../interfaces").IPayload<string>>;
export declare const setFocusedMentionOption: (instanceId: string, payload?: string | undefined) => Action<import("../interfaces").IPayload<string>>;
export declare const resetFocusedMentionOption: (instanceId: string, payload?: string | undefined) => Action<import("../interfaces").IPayload<string>>;
export declare const resetSymbols: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const setStoredEditorState: (instanceId: string, payload?: IStoredEditorState | undefined) => Action<import("../interfaces").IPayload<IStoredEditorState>>;
export declare const requestImageUpload: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const resetImageUploadStatus: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const closeLoadAccountUserPrompts: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const setToyOptions: (instanceId: string, payload?: IToyOption[] | undefined) => Action<import("../interfaces").IPayload<IToyOption[]>>;
export declare const activateToyOption: (instanceId: string, payload?: number | undefined) => Action<import("../interfaces").IPayload<number>>;
export declare const inactivateToyOption: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const inactivateToyMessage: (instanceId: string, payload?: string | undefined) => Action<import("../interfaces").IPayload<string>>;
export declare const setHasTooltipOpen: (instanceId: string, payload?: ISetHasTooltipPayload | undefined) => Action<import("../interfaces").IPayload<ISetHasTooltipPayload>>;
export declare const closeToyOptionTooltip: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
export declare const setGroupChatColors: (instanceId: string, payload?: IGroupChatColor[] | undefined) => Action<import("../interfaces").IPayload<IGroupChatColor[]>>;
export declare const resetEditorState: (instanceId: string, payload?: any) => Action<import("../interfaces").IPayload<any>>;
declare const messenger: import("redux-actions").ReduxCompatibleReducer<IMessenger, IMessenger>;
export default messenger;
