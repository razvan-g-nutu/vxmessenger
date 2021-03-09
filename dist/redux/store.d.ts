import { IAgeVerification, IClickExit, IClickProfile, IOnModelStatusChange, IOnFailedChatConfig, IOnFailedWebToken, IOnSupportedVideoChatTypes, IRecharge, IVideoChatAction, IExitPopupAction, IBecomeVIP, IPreferenceStore, PreferenceName, IClickImage } from "../services/AppService/types";
import { ExitCode } from "../services/ChatService/types";
import { IPartialTheme, ITheme } from "../themes";
import { SupportedLanguage } from "vxcontrol-client-lib";
interface IStore {
    [key: string]: IData;
}
export interface IData {
    session: ISession;
    messenger: IMessenger;
    user: IUser;
    model: IModel;
    videochat: IVideochat;
    features: IFeatures;
    options: IOptions;
    platformProps: IPlatformProps | null;
    hooks: HooksArguments;
}
export interface ISession {
    /** The token comes as props for the main component and is used in all requests */
    webtoken: string;
    /** After logging in, a session is created */
    sessionID: string;
    /** The channel between a client and a model. When sending a message for the first time, an ID will be created */
    channelId: string;
    /** Active gifts */
    gifts: IGift[];
    /** Active gift categories sorted ASC by their id */
    giftCategories: IGiftCategory[];
    /** The client can buy gift bundles, which will increase the gifts quantity */
    giftBundles: IBundle[];
    /** The client can initialize a chat with the model (livechat, videochat and so no) */
    chat?: IChat;
    autoRecharge: IAutoRecharge;
    oneClickRecharge: IOneClickRecharge;
    lastChargedAmount?: number;
    chatFeatures: IChatFeatures;
    /** This value represents the free messages (platform-wide), which can be used with any model */
    freeMessages: number;
    currency: ICurrency;
    uploadMediaUrl?: string;
}
export interface ICurrency {
    name: CurrencyName | "";
    symbol: string;
}
export interface IEmoticon {
    text: string;
    code: string;
    position?: string;
}
export interface IFeatures {
    hasFavorite: boolean;
    hasGifts: boolean;
    hasTips: boolean;
    hasEmoticons: boolean;
    hasToyControl: boolean;
    hasImageUpload: boolean;
    hasGroupChatIndicator: boolean;
    hasSendMessageButton: boolean;
    hasContactNote: boolean;
    hasExitPopups: boolean;
    hasModelProfilePicture: boolean;
    hasModelName: boolean;
    hasModelMotto: boolean;
    hasCam2Cam: boolean;
    hasVoyeur: boolean;
    hasPrivateChat: boolean;
    hasCloseButton: boolean;
    hasFullscreen: boolean;
    hasHistorySectionsOpened: boolean;
    hasHistoryMessages: boolean;
    hasMessagesGrouped: boolean;
    hasPreloaderPaymentText: boolean;
    hasBehaviorOnClickOutside: boolean;
    isMessageTypeHeader?: boolean;
    hasAudioMessages?: boolean;
    hasGroupChatClientName?: boolean;
    hasFullscreenLayoutOnLandscape?: boolean;
    hasProductionDebugEnabled?: boolean;
    showCensoredContent?: boolean;
}
export interface IOptions {
    tip?: ITipOption;
    preloader?: string;
    analyticsKey?: string;
    updateBrowserLink?: string;
    switchToPortraitWidth?: number;
    initialVideochatVolume?: number;
    censoredContentImage?: string;
}
export interface ITipOption {
    value: number;
    currency: ICurrency;
    imageUrl?: string;
}
export interface IBundle {
    id: number;
    name: string;
    imageUrl: string;
    active: boolean;
    gifts: IBundleGift[];
    price: number;
    translations: IGiftTranslation[];
}
export interface IBundleGift {
    quantity: number;
    gift: {
        id: number;
    };
}
export interface IChatFeatures {
    freeChatDuration: number;
    livePreviewDurationText: number;
    livePreviewDurationVideo: number;
}
export interface IGiftCategory {
    id: number;
    name: string;
    active: boolean;
    translations: IGiftTranslation[];
}
export interface IGiftTranslation {
    name: string;
    language: SupportedLanguage;
    value: string;
}
export interface IAutoRecharge {
    available: boolean;
    amount: number | null;
}
export interface IOneClickRecharge {
    available: boolean;
    defaultAmount: number | null;
    amounts: number[];
}
export interface IChat {
    chatId?: string;
    clientId: string;
    server: string;
    externallyProvided?: boolean;
}
export interface IModel {
    partner: IPartner;
    profilePicture: string;
    name: string;
    motto: string;
    isFavorite: boolean;
    isOnline: boolean;
    onlineState?: Partial<IOnlineState>;
    prices: IModelPrices;
    /** Represents the free messages that the client has with this specific model */
    freeMessages: number;
    /** Represents the free seconds during a livechat that the client has with this specific model */
    freeChatDuration: number;
}
export interface IModelPrices {
    messagePrice: number;
    videoChatPrice: number;
    voyeurChatPrice: number;
}
export interface IPartner {
    /** The ID from the model's platform - for instance, vx-models */
    id: string;
    /** The ID for the model */
    key: string;
}
export interface IOnlineState {
    supportsChat: boolean;
    supportsPrivateChat: boolean;
    supportsSoftChat: boolean;
    supportsPreviewChat: boolean;
    supportsVoyeurChat: boolean;
    supportsVoyeurToPrivateChat: boolean;
    supportsToyControl: boolean;
    supportsTip?: boolean;
}
export interface IUser {
    language: SupportedLanguage;
    translations: Translations;
    preferences: IPreferences;
    isVip: boolean;
    isOnline?: boolean;
    userKey?: string;
}
export interface IPreferences {
    [PreferenceName.ShouldIncreaseMessageFontSize]: boolean;
    [PreferenceName.VolumeLevel]: number;
}
export declare type Translations = {
    [key in SupportedLanguage]: ITranslation;
};
export interface IMessenger {
    actionResponse?: IActionResponse;
    contactNote: IContactNote;
    audioMessage: {
        isMicEnabled: boolean;
        shouldSendMessage: boolean;
        isRecording: boolean;
        secondsElapsed: number;
    };
    messages: IMessage[];
    shouldResendFailedMessages?: boolean;
    failedMessages: string[];
    emoticons: IEmoticon[];
    toyOptions: IToyOption[];
    activeSymbols: IActiveSymbol;
    windowToggleState: IWindowSectionState;
    modalContent: IModalContent;
    loadingStatus: LoadingStatus;
    mentionQuery: string;
    isTextEnabled: boolean;
    isOpen: boolean;
    isResponsive: boolean;
    isMentionSectionOpen: boolean;
    shouldDisplayCustomMentionSection: boolean;
    focusedMentionOption?: string;
    hasEditor?: boolean;
    editorState: IStoredEditorState;
    groupChatColors: IGroupChatColor[];
}
export interface IGroupChatColor {
    color: string;
    users: string[];
}
export interface IToyOption {
    id: number;
    categoryId: number;
    duration: number | null;
    imageUrl: string;
    imageUrlDeactivated: string;
    imageUrlWhite: string;
    intensity: number | null;
    name: string;
    price: number;
    unlockedBy: number[];
    translations: IGiftTranslation[];
    active: boolean;
    random: boolean;
    isPlaying?: boolean;
    hasTooltipOpen?: boolean;
}
export interface IStoredEditorState {
    text: string;
    gifts: IGift[];
}
export interface IContactNote {
    isOpen: boolean;
    text: string;
}
export interface ICameraDevice extends MediaDeviceInfo {
    isFront?: boolean;
    isBack?: boolean;
}
export interface IVideochat {
    informationType?: VideochatInformationType;
    preChatInformationType?: PreChatInformationType;
    isFullscreen: boolean;
    qualityBoundaries: IQualityBoundaries;
    type?: VideoChatType;
    lastSuccessfulType?: VideoChatType;
    initialVideoChatType?: VideoChatType;
    cam2Cam: ICam2Cam;
    isMutedByModel: boolean;
    isMutedByClient: boolean;
    isInitiallyMuted?: boolean;
    isInitiallyMutedHintDisplayed?: boolean;
    isMobileMenuOpen?: boolean;
    shouldRenderOnlyVideochat: boolean;
    shouldHideVideochatControls: boolean;
    resumeChatTimestamp?: Date;
    /**
     *  We check if the player is open - no matter its state of playing
     */
    isOpen: boolean;
    /**
     * We check if the player is opened and currently playing,
     * which excludes pause state or other inactive states of the player.
     */
    isPlaying: boolean;
    initialResolution?: IResolution;
    timeLeft: number;
    isTimeLeftBelowThreshold?: boolean;
    previousTimeLeft?: number;
    livePreviewTimeLeft: number;
    livePreviewTextTimeLimit: number;
    livePreviewTextTimeLeft: number;
    isGroupChat?: boolean;
    groupChatParticipants: string[];
    groupChatClientName: string;
    exitEvent?: IExitEvent;
    /**
     * this is a flag we're getting from vchat-core, saying that the inited chat is in voyeur mode
     */
    isInVoyeurMode?: boolean;
    isAutoplayRestricted?: boolean;
}
export interface IActiveSymbol {
    gift?: string;
    emoticon?: string;
    mention?: string;
}
export interface IExitEvent {
    exitCode: ExitCode | number;
    exitMessage?: string;
}
export interface ICam2Cam {
    isEnabled: boolean;
    isActive: boolean;
    isMinimized: boolean;
    cameras: ICameraDevice[];
    selectedCameraId?: string;
}
export interface IResolution {
    width: number;
    height: number;
}
export interface IWindowSectionState {
    isEmoticonSectionOpen: boolean;
    isGiftSectionOpen: boolean;
    isToySectionOpen: boolean;
    isDropDownOpen: boolean;
    userPrompts: IQuestion[];
    countdownWarning?: ICountdownWarning;
    isVersionOpen: boolean;
    requestImageUpload?: boolean;
}
export interface IActionResponse {
    text: string;
    type: ActionResponseType;
}
export interface IMessage {
    id: string;
    content: any;
    messageKey: string;
    direction: MessageDirection;
    contentType?: MessageContentType;
    dateCreated: string;
    isDeleted?: boolean;
    modalContent?: IModalContent;
    isNew?: boolean;
    isFromHistory?: boolean;
    isOnLoading?: boolean;
    isSystem: boolean;
    chatId?: string;
    msgType?: MsgType;
    toy?: IToyMessageInfo;
    audioSrc?: string;
    /**
     * This property will have a value only when the messenger is opened
     * in group chat mode and will contain the alias from other senders.
     * This value will not contain the name of the current user or model.
     */
    username?: string;
    /**
     * This property will have a value only when the messenger is opened
     * in group and mode and will contain the color for rendering the username
     * from ther senders or model's name.
     */
    usernameColor?: string;
}
export interface IToyMessageInfo {
    text: string;
    activeImage?: string;
    inactiveImage?: string;
    isActive?: boolean;
    isDefault?: boolean;
}
export interface IGroupMessage {
    dateCreated: string;
    messages: IMessage[];
}
export interface IGift {
    id: number;
    active: boolean;
    categoryId: number;
    name: string;
    imageUrl: string;
    /**
     * When the LOGIN request comes with the quantities, they are
     * stored as initial quantities and updated just when the client
     * sends the message with the contained gifts.
     */
    initialQuantity?: number;
    /**
     * Current quantities are the dynamic values when the customer
     * affects visually the gifts quantities (adding or removing gifts in any way).
     * They will be the calculated as the initialQuantity minus the quantity present in editor.
     */
    currentQuantity?: number;
    /**
     * Bundles will have an initial price for the reduce price feeling
     * to the customer when opening the bundle gifts page. It will share
     * the same currency from the gift object, so we will hold here only its value.
     */
    initialPrice?: number;
    price: number;
    translations: IGiftTranslation[];
}
/**
 * Hooks implemented from the parent platform on certain messenger's events.
 */
export interface IHooks {
    onClickProfile?: IClickProfile;
    onClickImage?: IClickImage;
    onExit?: IClickExit;
    onRecharge?: IRecharge;
    onVideoChatAction?: IVideoChatAction;
    onExitPopupAction?: IExitPopupAction;
    onAgeVerification?: IAgeVerification;
    onModelStatusChange?: IOnModelStatusChange;
    onSupportedVideoChatTypes?: IOnSupportedVideoChatTypes;
    onFailedChatConfig?: IOnFailedChatConfig;
    onFailedWebToken?: IOnFailedWebToken;
    onBecomeVIP?: IBecomeVIP;
}
export declare type HooksArguments = {
    [key in keyof IHooks]: any;
};
/**
 * The messenger will use the vxcontrol api for a fully-feature version
 */
export interface IConnectionWithToken {
    webToken: string;
    partner: IPartner;
    userKey?: string;
}
/**
 * The messenger will use only the vchat-core for an only-chat feature version
 */
export interface IConnectionWithChat {
    clientId: string;
    server: string;
}
export declare type IConnection = IConnectionWithToken | IConnectionWithChat;
/**
 * Properties set by the parent platform for the messenger to render
 */
export interface IPlatformProps {
    /**
     * Unique identification key for the configured messenger's instance.
     */
    id?: string;
    /**
     * How the user will connect for using the messenger: with webtoken for
     * fully-feature messenger or with clientId and server for chat-feature version
     */
    connection: IConnection;
    /**
     * The messenger will start directly in a stream type set by the parent platform
     */
    initialVideoChatType?: VideoChatType;
    /**
     * The parent platform can set on or off some implemented features from the messenger
     */
    features?: Partial<IFeatures>;
    /** The parent platform can access different special option features */
    options?: IOptions;
    /**
     * Messenger's language set by the parent platform
     */
    language: string;
    /**
     * Event-based behaviors implemented by the parent platform
     */
    hooks?: IHooks;
    /**
     * The rendering properties: font and colors
     */
    theme?: ITheme | IPartialTheme;
    /**
     * The custom implementation for preferences
     */
    preferenceStore?: IPreferenceStore;
}
export interface IGiftPage {
    id: number;
    name: string;
    gifts: IGift[];
    translations: IGiftTranslation[];
}
export interface IQualityBoundaries {
    low: number;
    medium: number;
    good: number;
}
export interface IQuestion {
    type: QuestionType;
    payload?: {
        modelName?: string;
        defaultRecharge?: number;
        privateChatText?: string;
        amounts?: number[];
        defaultAmount?: number;
        text?: string;
    };
}
export interface ICountdownWarning {
    type: CountdownWarningType;
    time: number;
}
export declare enum QuestionType {
    /** Load account user prompts */
    LOAD_ACCOUNT = "LOAD_ACCOUNT",
    LOAD_ACCOUNT_ONE_CLICK = "LOAD_ACCOUNT_ONE_CLICK",
    LOAD_ACCOUNT_AUTO_RECHARGE = "LOAD_ACCOUNT_AUTO_RECHARGE",
    /** YES/NO user prompts on different situations */
    VERIFY_AGE = "VERIFY_AGE",
    SPY_PRIVATE_CHAT = "SPY_PRIVATE_CHAT",
    CLOSE_CHAT = "CLOSE_CHAT",
    INVITE_PRIVATE_CHAT = "INVITE_PRIVATE_CHAT",
    /** Tip user prompts */
    SEND_TIP = "SEND_TIP",
    SEND_ANONYMOUS_TIP = "SEND_ANONYMOUS_TIP",
    /** Select camera */
    CHOOSE_CAMERA = "CHOOSE_CAMERA"
}
export declare enum ActionResponseType {
    SUCCESSFUL = "SUCCESSFUL",
    ERROR = "ERROR",
    WARNING = "WARNING"
}
export declare enum CountdownWarningType {
    OUT_OF_BALANCE = "OUT_OF_BALANCE",
    ONE_CLICK_OUT_OF_BALANCE = "ONE_CLICK_OUT_OF_BALANCE"
}
export declare enum KnownAnswerType {
    YES = "YES",
    NO = "NO",
    OK = "OK"
}
export declare type AnswerType = KnownAnswerType | number;
/** Helper enums */
export declare enum MessageDirection {
    in = "in",
    out = "out",
    none = "none"
}
export declare enum MessageContentType {
    TEXT = "TEXT\"",
    IMAGE_URL = "IMAGE_URL",
    IMAGE = "IMAGE",
    AUDIO = "AUDIO"
}
export declare enum VideochatInformationType {
    OFFLINE_CONNECTION = "OFFLINE_CONNECTION",
    ERROR_OCCURRED = "ERROR_OCCURRED",
    VERIFY_AGE = "VERIFY_AGE",
    PREVIEW_JUST_FINISHED = "PREVIEW_JUST_FINISHED",
    OUT_OF_MONEY = "OUT_OF_MONEY",
    OUT_OF_MONEY_ONE_CLICK_RECHARGE = "OUT_OF_MONEY_ONE_CLICK_RECHARGE",
    THANK_YOU = "THANK_YOU",
    THANK_YOU_ONE_CLICK_RECHARGE = "THANK_YOU_ONE_CLICK_RECHARGE",
    LIVECHAT_SESSION_ENDED = "LIVECHAT_SESSION_ENDED",
    EJECTED = "EJECTED",
    HOST_OFFLINE = "HOST_OFFLINE",
    PRIVATE_CHAT = "PRIVATE_CHAT",
    VOICECALL_ENDED = "VOICECALL_ENDED",
    TEXTTIMELIMIT = "ExitCode.TEXTTIMELIMIT"
}
export declare enum PreChatInformationType {
    LIMIT_REACHED = "LIMIT_REACHED",
    PRIVATE_CHAT = "PRIVATE_CHAT",
    PRIVATE_CHAT_CAN_SPY = "PRIVATE_CHAT_CAN_SPY",
    VERIFY_AGE = "VERIFY_AGE",
    CHARGE_ACCOUNT_OR_VIP = "CHARGE_ACCOUNT_OR_VIP",
    NOT_AVAILABLE = "NOT_AVAILABLE",
    HOST_OFFLINE = "HOST_OFFLINE",
    GUEST_OFFLINE = "GUEST_OFFLINE",
    CONNECTION_ERROR = "CONNECTION_ERROR"
}
export declare enum VideoChatType {
    LIVECHAT = "LIVECHAT",
    FREECHAT = "FREECHAT",
    LIVE_PREVIEW = "LIVE_PREVIEW",
    VOYEUR_CHAT = "VOYEUR_CHAT",
    VOYEUR_PRIVATE_CHAT = "VOYEUR_PRIVATE_CHAT",
    PRIVATE_CHAT = "PRIVATE_CHAT",
    CAM2CAM = "CAM2CAM",
    NO_DOWNSTREAM = "NO_DOWNSTREAM",
    GROUP_CHAT = "GROUP_CHAT",
    CONTENT_PARTNERS_CHAT = "CONTENT_PARTNERS_CHAT"
}
export declare enum LoadingStatus {
    NONE = "NONE",
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}
export declare enum CurrencyName {
    Euro = "EUR",
    Dollar = "DOL",
    Credits = "VOC"
}
export interface IErrorTranslation {
    error: string;
    noCamera: string;
    initFail: string;
    textLimit: string;
}
export interface IWarningTranslation {
    connectionPoor: string;
}
export interface IModalContent {
    imgSrc: string;
    imgSrcSet?: string;
    imgWidth?: string;
    imgHeight?: string;
}
export interface IToyControlTranslation {
    highTooltipText: string;
    highTooltipTitle: string;
    lovenseAvailable: string;
    lovenseFinished: string;
    lovenseStartedMessage: string;
    lovenseVibrating: string;
    maximumToyDuration: string;
    randomTooltipText: string;
    randomTooltipTitle: string;
    toyControl: string;
    toyDescription: string;
    toyDuration: string;
    toyIntensityHigh: string;
    toyIntensityLow: string;
    toyIntensityMedium: string;
    toyIntensityRandom: string;
    toyLearnMore: string;
}
/** Translation interface */
export interface ITranslation {
    chat: {
        actionMute: string;
        actionUnmute: string;
        actorWaiting: string;
        adultContentInfo: string;
        autoRecharge: string;
        avsNeeded: string;
        billingStart: string;
        btnChargeNow: string;
        browserOutdated: string;
        browserOutdatedTagLine: string;
        browserOutdatedHrefText: string;
        camToCam: string;
        charge: string;
        chargeNow: string;
        chargeSuccess: string;
        chatStarted: string;
        checkConnection: string;
        chooseCamera: string;
        closeConfirmation1: string;
        closeConfirmation2: string;
        continue: string;
        enterFullscreen: string;
        exit: string;
        exitLoad: string;
        exitLoadAgain: string;
        freeChatEndHeadline: string;
        freeConnection: string;
        hint: string;
        insertEmoticons: string;
        interrupted: string;
        isMuted: string;
        invitePrivateChat: string;
        leaveFullscreen: string;
        liveChat: string;
        livePreview: string;
        lowBalance: string;
        members: string;
        groupChat: {
            mentionHeaderPartOne: string;
            singleMember: string;
            mentionHeaderPartOneSingle: string;
            mentionHeaderPartTwo: string;
            members: string;
        };
        needAvs: string;
        noMoney: string;
        popup: {
            avs: string;
            ended: string;
            kicked: string;
            offline1: string;
            offline2: string;
            offline3: string;
            /**
             * @deprecated - not used anymore, connection error is not anymore displayed just for a Live Preview session
             * "videoConnection will be used instead
             */
            previewConnection: string;
            previewDisabled: string;
            previewLimit: string;
            privateCam: string;
            privateChat1: string;
            privateChat2: string;
            recharge: string;
            reconnect: string;
            videoConnection: string;
            vip: string;
            voicecall: string;
        };
        previewEndCountdown: string;
        previewEndHeadline: string;
        previewEndText: string;
        privateChat: string;
        sendGift: string;
        sendImage: string;
        softchat: string;
        softChatWait: string;
        startVoyeur: string;
        stopLiveChat: string;
        timeLimit: string;
        tipAmount: string;
        tipFail: string;
        tipOk: string;
        tip1: string;
        tip2: string;
        tip3: string;
        tip4: string;
        tooltipNoVolume1: string;
        tooltipNoVolume2: string;
        tooltipPreview: string;
        tooltipVideochat: string;
        tooltipVoyeur: string;
        toyControl: IToyControlTranslation;
        verifyAge: string;
        vipLivePreview: string;
        vipPreviewStarted: string;
        voyeur: string;
        voyeurCam: string;
        voyeurTip1: string;
        voyeurTip2: string;
        voyeurTip3: string;
        voyeurTip4: string;
        voyeurTipFail: string;
        voyeurTipOk: string;
        voyeurToSingleInfo: string;
    };
    common: {
        advertised: string;
        all: string;
        archive: string;
        archived: string;
        cancel: string;
        close: string;
        done: string;
        edit: string;
        gift: string;
        gifts: string;
        hint: string;
        header: {
            messageFrom: string;
            lastMessageOn: string;
        };
        giftBundles: string;
        bundleBuy: string;
        bundles: string;
        contains: string;
        bundleBuySuccess: string;
        bundleInfo: string;
        bundlesReducedPrice: string;
        imageUploadFail: string;
        imageUploadOk: string;
        networkoff: string;
        no: string;
        none: string;
        notNow: string;
        notes: string;
        off: string;
        ok: string;
        on: string;
        onehour: string;
        paymentSuccess: string;
        perMinute: string;
        read: string;
        regularcustomer: string;
        reload: string;
        save: string;
        seconds: string;
        sure: string;
        thankYou: string;
        title: string;
        titlemessage: string;
        titlemessages: string;
        unarchive: string;
        userinfos: string;
        yes: string;
        yesterday: string;
    };
    error: IErrorTranslation;
    warning: IWarningTranslation;
    message: {
        delete: string;
        deleteConfirmation: string;
        selectEmoticon: string;
        send: string;
        sendGifts: string;
        sendImage: string;
        sendNow: string;
        write: string;
        writeFree: string;
        writePrice: string;
        menuSendGift: string;
        menuSendMoney: string;
        menuSendPhotos: string;
        menuSendEmoticon: string;
        sendAudioMessage: string;
    };
    user: {
        addFavorite: string;
        addNote: string;
        becomeVIP: string;
        boughtGifts: string;
        boughtGiftsHeading: string;
        noMoney: string;
        removeFavorite: string;
        stock: string;
        verifyAge: string;
        vip: string;
        visitProfile: string;
        youAreOffline: string;
        yourNote: string;
        yourStock: string;
    };
    avs: {
        hint: string;
        requestAccess: string;
        allowAccess: string;
    };
}
export declare const enum MsgType {
    SYSTEM = "sys",
    CHAT = "chat",
    MESSENGER = "msn",
    TOY = "toy",
    MAIL = "mail"
}
export default IStore;
