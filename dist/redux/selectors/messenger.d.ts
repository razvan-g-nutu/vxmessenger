import IStore, { IMessage, IMessenger, IQuestion, LoadingStatus } from "../store";
export declare const getMessenger: (store: IStore, instanceId: string | undefined) => IMessenger;
/**
 * @return {WindowSectionState} - a slice of the store keeping status for:
 * - emoticons section - if it is open or not
 * - gift section - if it is open or not
 * - user prompts - those sliding areas asking for refill, verifying age, sending tip, etc
 * - countdown warnings - countdown watch warnings, like: running out of money, running out of time
 */
export declare const getWindowToggleState: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IWindowSectionState, (res: IMessenger) => import("../store").IWindowSectionState>;
/**
 * @return {Question[]} - a slice of the store keeping status of the user prompts
 * (those sliding areas asking for balance refill, verifying age, sending tip, etc)
 */
export declare const getUserPrompts: import("reselect").OutputParametricSelector<IStore, string | undefined, IQuestion[], (res: import("../store").IWindowSectionState) => IQuestion[]>;
export declare const hasLoadAccountUserPrompts: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IQuestion[]) => boolean>;
export declare const hasSendTipPromptOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IQuestion[]) => boolean>;
/**
 * @return {ActionResponse | undefined} action response
 * (sliding element informing about success or failure of a certain API request
 */
export declare const getActionResponse: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IActionResponse | undefined, (res: IMessenger) => import("../store").IActionResponse | undefined>;
/**
 * @return {IMessage[]} - messages to be displayed in the messenging area
 */
export declare const getMessages: import("reselect").OutputParametricSelector<IStore, string | undefined, IMessage[], (res: IMessenger) => IMessage[]>;
/**
 * @return {IMessage} - message to meet the condition(s) of provided predicate
 */
export declare const findMessage: (predicate: (message: IMessage) => boolean) => import("reselect").OutputParametricSelector<IStore, string | undefined, IMessage | undefined, (res: IMessage[]) => IMessage | undefined>;
/**
 * @return {string[]} - messages not sent because token has expired
 */
export declare const getFailedMessages: import("reselect").OutputParametricSelector<IStore, string | undefined, string[], (res: IMessenger) => string[]>;
/**
 * @return {}boolean} true if failed messages should be sent again
 */
export declare const shouldResendFailedMessages: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean | undefined, (res: IMessenger) => boolean | undefined>;
/**
 * @return {IEmoticon[]} - list of available emoticons obtained either from the back end APIs or the default list
 */
export declare const getEmoticons: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IEmoticon[], (res: IMessenger) => import("../store").IEmoticon[]>;
export declare const getModalContent: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IModalContent, (res: IMessenger) => import("../store").IModalContent>;
/**
 * @return {LoadingStatus} the messenger loading status with details about how the loading process ended
 * (with success or failure)
 */
export declare const getMessengerLoadingStatus: import("reselect").OutputParametricSelector<IStore, string | undefined, LoadingStatus, (res: IMessenger) => LoadingStatus>;
/**
 * @return {boolean} true if the messenger is still loading
 */
export declare const isMessengerLoading: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: LoadingStatus) => boolean>;
/**
 * @return {boolean} true if the messenger is open
 */
export declare const isOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IMessenger) => boolean>;
/**
 * @return {IContactNote} - text note about the current model and if the contact note editor is open or not
 */
export declare const getContactNote: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IContactNote, (res: IMessenger) => import("../store").IContactNote>;
/**
 * @return {boolean} true if the contact note section is open
 */
export declare const isContactNoteOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: import("../store").IContactNote) => boolean>;
/**
 * @return {boolean} true if the model has attached a note about her
 */
export declare const hasContactNoteText: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: import("../store").IContactNote) => boolean>;
/**
 * @return {boolean} - true if the user can write text messages to a model
 */
export declare const isTextEnabled: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IMessenger) => boolean>;
/**
 * @return {boolean} - true if currently there is an user prompt displayed on the screen
 */
export declare const isAnyUserPromptOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IQuestion[]) => boolean>;
/**
 * @return {boolean} - true if currently there is a displayed user prompt asking for close chat confirmation
 */
export declare const isCloseChatUserPromptOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IQuestion[]) => boolean>;
/**
 * @return {boolean} true if drop down menu is open
 */
export declare const isDropDownMenuOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: import("../store").IWindowSectionState) => boolean>;
/**
 * @return {boolean} true if the toy section is open
 */
export declare const isToySectionOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: import("../store").IWindowSectionState) => boolean>;
/**
 * @return {boolean} true if the box displaying the messenger's version is open
 */
export declare const isVersionOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: import("../store").IWindowSectionState) => boolean>;
/**
 * @return {boolean} - true if draft.js editor is working on the current browser or os
 */
export declare const hasEditor: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean | undefined, (res: IMessenger) => boolean | undefined>;
/**
 * @returns {string/undefined} - returns active gift or undefined if there is none selected
 */
export declare const getActiveGift: import("reselect").OutputParametricSelector<IStore, string | undefined, string | undefined, (res: IMessenger) => string | undefined>;
/**
 * @returns {string/undefined} - returns active emoticon or undefined if there is none selected
 */
export declare const getActiveEmoticon: import("reselect").OutputParametricSelector<IStore, string | undefined, string | undefined, (res: IMessenger) => string | undefined>;
/**
 * @returns {string/undefined} - returns active mention or undefined if there is none selected
 */
export declare const getActiveMention: import("reselect").OutputParametricSelector<IStore, string | undefined, string | undefined, (res: IMessenger) => string | undefined>;
/**
 * @return {StoredEditorState} current store of the editor (containing text, emoticons, gifts)
 */
export declare const getEditorState: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IStoredEditorState, (res: IMessenger) => import("../store").IStoredEditorState>;
/**
 * @return {boolean} - true if there any user prompts open
 */
export declare const areAnyUserPromptsOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: import("../store").IWindowSectionState) => boolean>;
/**
 * @return {boolean} - true if the messenger is in responsive mode
 */
export declare const isResponsive: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IMessenger) => boolean>;
/**
 * return {boolean} true if the image upload dialog was requested to appear
 */
export declare const wasRequestedAnImageUpload: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: import("../store").IWindowSectionState) => boolean>;
/**
 * return {boolean} true if the anonymous tip is open
 */
export declare const isTipPromptOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IQuestion[]) => boolean>;
/**
 * @return {IToyOptions[]} if the model has activated the toy control feature and the client
 * is in an active LIVECHAT, the client will have acces to the toy section, where
 * he has multiple vibration options from which to choose. It returns these choices.
 */
export declare const getToyOptions: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IToyOption[], (res: IMessenger) => import("../store").IToyOption[]>;
/**
 * @return {IToyOption} the active toy option if there is one
 */
export declare const getActiveToyOption: import("reselect").OutputParametricSelector<IStore, string | undefined, number | import("../store").IToyOption | (<U>(callbackfn: (value: import("../store").IToyOption, index: number, array: import("../store").IToyOption[]) => U, thisArg?: any) => U[]) | {
    <S extends import("../store").IToyOption>(callbackfn: (value: import("../store").IToyOption, index: number, array: import("../store").IToyOption[]) => value is S, thisArg?: any): S[];
    (callbackfn: (value: import("../store").IToyOption, index: number, array: import("../store").IToyOption[]) => unknown, thisArg?: any): import("../store").IToyOption[];
} | (() => string) | (() => string) | (() => import("../store").IToyOption | undefined) | ((...items: import("../store").IToyOption[]) => number) | {
    (...items: ConcatArray<import("../store").IToyOption>[]): import("../store").IToyOption[];
    (...items: (import("../store").IToyOption | ConcatArray<import("../store").IToyOption>)[]): import("../store").IToyOption[];
} | ((separator?: string | undefined) => string) | (() => import("../store").IToyOption[]) | (() => import("../store").IToyOption | undefined) | ((start?: number | undefined, end?: number | undefined) => import("../store").IToyOption[]) | ((compareFn?: ((a: import("../store").IToyOption, b: import("../store").IToyOption) => number) | undefined) => import("../store").IToyOption[]) | {
    (start: number, deleteCount?: number | undefined): import("../store").IToyOption[];
    (start: number, deleteCount: number, ...items: import("../store").IToyOption[]): import("../store").IToyOption[];
} | ((...items: import("../store").IToyOption[]) => number) | ((searchElement: import("../store").IToyOption, fromIndex?: number | undefined) => number) | ((searchElement: import("../store").IToyOption, fromIndex?: number | undefined) => number) | ((callbackfn: (value: import("../store").IToyOption, index: number, array: import("../store").IToyOption[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: import("../store").IToyOption, index: number, array: import("../store").IToyOption[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: import("../store").IToyOption, index: number, array: import("../store").IToyOption[]) => void, thisArg?: any) => void) | {
    (callbackfn: (previousValue: import("../store").IToyOption, currentValue: import("../store").IToyOption, currentIndex: number, array: import("../store").IToyOption[]) => import("../store").IToyOption): import("../store").IToyOption;
    (callbackfn: (previousValue: import("../store").IToyOption, currentValue: import("../store").IToyOption, currentIndex: number, array: import("../store").IToyOption[]) => import("../store").IToyOption, initialValue: import("../store").IToyOption): import("../store").IToyOption;
    <U_1>(callbackfn: (previousValue: U_1, currentValue: import("../store").IToyOption, currentIndex: number, array: import("../store").IToyOption[]) => U_1, initialValue: U_1): U_1;
} | {
    (callbackfn: (previousValue: import("../store").IToyOption, currentValue: import("../store").IToyOption, currentIndex: number, array: import("../store").IToyOption[]) => import("../store").IToyOption): import("../store").IToyOption;
    (callbackfn: (previousValue: import("../store").IToyOption, currentValue: import("../store").IToyOption, currentIndex: number, array: import("../store").IToyOption[]) => import("../store").IToyOption, initialValue: import("../store").IToyOption): import("../store").IToyOption;
    <U_2>(callbackfn: (previousValue: U_2, currentValue: import("../store").IToyOption, currentIndex: number, array: import("../store").IToyOption[]) => U_2, initialValue: U_2): U_2;
} | {
    <S_1 extends import("../store").IToyOption>(predicate: (this: void, value: import("../store").IToyOption, index: number, obj: import("../store").IToyOption[]) => value is S_1, thisArg?: any): S_1 | undefined;
    (predicate: (value: import("../store").IToyOption, index: number, obj: import("../store").IToyOption[]) => unknown, thisArg?: any): import("../store").IToyOption | undefined;
} | ((predicate: (value: import("../store").IToyOption, index: number, obj: import("../store").IToyOption[]) => unknown, thisArg?: any) => number) | ((value: import("../store").IToyOption, start?: number | undefined, end?: number | undefined) => import("../store").IToyOption[]) | ((target: number, start: number, end?: number | undefined) => import("../store").IToyOption[]) | (() => IterableIterator<[number, import("../store").IToyOption]>) | (() => IterableIterator<number>) | (() => IterableIterator<import("../store").IToyOption>) | ((searchElement: import("../store").IToyOption, fromIndex?: number | undefined) => boolean) | undefined, (res: IMessenger) => number | import("../store").IToyOption | (<U>(callbackfn: (value: import("../store").IToyOption, index: number, array: import("../store").IToyOption[]) => U, thisArg?: any) => U[]) | {
    <S extends import("../store").IToyOption>(callbackfn: (value: import("../store").IToyOption, index: number, array: import("../store").IToyOption[]) => value is S, thisArg?: any): S[];
    (callbackfn: (value: import("../store").IToyOption, index: number, array: import("../store").IToyOption[]) => unknown, thisArg?: any): import("../store").IToyOption[];
} | (() => string) | (() => string) | (() => import("../store").IToyOption | undefined) | ((...items: import("../store").IToyOption[]) => number) | {
    (...items: ConcatArray<import("../store").IToyOption>[]): import("../store").IToyOption[];
    (...items: (import("../store").IToyOption | ConcatArray<import("../store").IToyOption>)[]): import("../store").IToyOption[];
} | ((separator?: string | undefined) => string) | (() => import("../store").IToyOption[]) | (() => import("../store").IToyOption | undefined) | ((start?: number | undefined, end?: number | undefined) => import("../store").IToyOption[]) | ((compareFn?: ((a: import("../store").IToyOption, b: import("../store").IToyOption) => number) | undefined) => import("../store").IToyOption[]) | {
    (start: number, deleteCount?: number | undefined): import("../store").IToyOption[];
    (start: number, deleteCount: number, ...items: import("../store").IToyOption[]): import("../store").IToyOption[];
} | ((...items: import("../store").IToyOption[]) => number) | ((searchElement: import("../store").IToyOption, fromIndex?: number | undefined) => number) | ((searchElement: import("../store").IToyOption, fromIndex?: number | undefined) => number) | ((callbackfn: (value: import("../store").IToyOption, index: number, array: import("../store").IToyOption[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: import("../store").IToyOption, index: number, array: import("../store").IToyOption[]) => unknown, thisArg?: any) => boolean) | ((callbackfn: (value: import("../store").IToyOption, index: number, array: import("../store").IToyOption[]) => void, thisArg?: any) => void) | {
    (callbackfn: (previousValue: import("../store").IToyOption, currentValue: import("../store").IToyOption, currentIndex: number, array: import("../store").IToyOption[]) => import("../store").IToyOption): import("../store").IToyOption;
    (callbackfn: (previousValue: import("../store").IToyOption, currentValue: import("../store").IToyOption, currentIndex: number, array: import("../store").IToyOption[]) => import("../store").IToyOption, initialValue: import("../store").IToyOption): import("../store").IToyOption;
    <U_1>(callbackfn: (previousValue: U_1, currentValue: import("../store").IToyOption, currentIndex: number, array: import("../store").IToyOption[]) => U_1, initialValue: U_1): U_1;
} | {
    (callbackfn: (previousValue: import("../store").IToyOption, currentValue: import("../store").IToyOption, currentIndex: number, array: import("../store").IToyOption[]) => import("../store").IToyOption): import("../store").IToyOption;
    (callbackfn: (previousValue: import("../store").IToyOption, currentValue: import("../store").IToyOption, currentIndex: number, array: import("../store").IToyOption[]) => import("../store").IToyOption, initialValue: import("../store").IToyOption): import("../store").IToyOption;
    <U_2>(callbackfn: (previousValue: U_2, currentValue: import("../store").IToyOption, currentIndex: number, array: import("../store").IToyOption[]) => U_2, initialValue: U_2): U_2;
} | {
    <S_1 extends import("../store").IToyOption>(predicate: (this: void, value: import("../store").IToyOption, index: number, obj: import("../store").IToyOption[]) => value is S_1, thisArg?: any): S_1 | undefined;
    (predicate: (value: import("../store").IToyOption, index: number, obj: import("../store").IToyOption[]) => unknown, thisArg?: any): import("../store").IToyOption | undefined;
} | ((predicate: (value: import("../store").IToyOption, index: number, obj: import("../store").IToyOption[]) => unknown, thisArg?: any) => number) | ((value: import("../store").IToyOption, start?: number | undefined, end?: number | undefined) => import("../store").IToyOption[]) | ((target: number, start: number, end?: number | undefined) => import("../store").IToyOption[]) | (() => IterableIterator<[number, import("../store").IToyOption]>) | (() => IterableIterator<number>) | (() => IterableIterator<import("../store").IToyOption>) | ((searchElement: import("../store").IToyOption, fromIndex?: number | undefined) => boolean) | undefined>;
/**
 * @return {boolean} true if any section is open
 */
export declare const isAnySectionOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: import("../store").IWindowSectionState) => boolean>;
/**
 * @return {boolean} true id we have any user prompt open when
 * the messenger is rendered in a responsive context
 */
export declare const areAnyPromptsOpenInResponsiveMode: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: IMessenger, res2: boolean) => boolean>;
export declare const getLastMessage: import("reselect").OutputParametricSelector<IStore, string | undefined, IMessage, (res: IMessage[]) => IMessage>;
export declare const isAnyTextInEditor: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IMessenger) => boolean>;
export declare const getShouldSendMessage: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IMessenger) => boolean>;
export declare const getSecondsElapsed: import("reselect").OutputParametricSelector<IStore, string | undefined, number, (res: IMessenger) => number>;
export declare const isRecording: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IMessenger) => boolean>;
/**
 * @return {boolean} true if the microphone is enabled by user.
 */
export declare const isMicEnabled: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IMessenger) => boolean>;
/**
 * Returns a list of colors, which will be used only in group chat mode
 * for rendering the username for other clients' messages.
 */
export declare const getGroupChatColors: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IGroupChatColor[], (res: IMessenger) => import("../store").IGroupChatColor[]>;
export declare const getMentionQuery: import("reselect").OutputParametricSelector<IStore, string | undefined, string, (res: IMessenger) => string>;
/**
 * return focused option in mentions section
 */
export declare const getFocusedMentionOption: import("reselect").OutputParametricSelector<IStore, string | undefined, string | undefined, (res: IMessenger) => string | undefined>;
export declare const shouldDisplayCustomMentionSection: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IMessenger) => boolean>;
