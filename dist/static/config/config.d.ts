import { IEmoticon, ITipOption } from "../../redux/store";
/**
 * Interface for our configs to be communicated from the smart component
 * (Container) to the dumb component as the presentational component should have
 * no knowledge of the config concept
 */
export interface ISpecialGiftPages {
    inventoryGiftId: number;
    giftBundlesId: number;
}
/** This limitations are used for validations or contextual behaviors for the messenger */
export declare const limitations: {
    fileUpload: {
        minSize: number;
        acceptedFileFormats: string[];
    };
    maxNumberOfMessages: {
        onGettingHistory: number;
        onFullscreen: number;
    };
};
/**
 * Class name for the entire VXMessenger enclosing DOM node
 */
export declare const messengerClassName = "vx-messenger";
/**
 * Attribute name for the messenger's HTML element containing the associated instanceId
 */
export declare const messengerInstanceIdAttribute = "data-instance-id";
/**
 * Image URL is an HTTP endpoint for uploading images on the CDN.
 * Others are for the websocket communication.
 */
export declare const endpoints: {
    imageUpload: string;
};
export declare const profilePictureSizes: {
    small: number;
    big: number;
    extraSmall: number;
};
export declare const customMentionPictureSize = 25;
/**
 * Sizes for rendering the player or messenger within various views (contexts).
 * Values are in percentage (contain "percentage" in their name) or pixels.
 */
export declare const viewSizes: {
    maxButtonWidthInFullscreen: number;
    /**
     * When maxButtonWithoutIconWidth is reached, buttons from ActionSection
     * will have text with the description;
     */
    maxButtonWithoutIconWidth: number;
    defaultButtonWidth: number;
    defaultButtonWidthOnVideo: number;
    voyeurCamButtonWidth: number;
    imageLoaderSize: number;
    chatboxSectionMaxWidth: number;
    cam2camMinimizeWidth: number;
    cam2camMinimizeHeight: number;
    cam2camMobileFrameWidth: number;
    cam2camDesktopFrameWidth: number;
    /** Messenger */
    messengerWidthPercentage: number;
    messengerPortraitMinHeight: number;
    messageSectionMaxWidth: number;
    messengerLoaderSize: number;
    /** Videochat */
    videoChatWidthPercentage: number;
    videoChatControlsHeight: number;
    switchToPortraitWidth: number;
    /** Fullscreen is only for videochat */
    fullScreen: {
        topBarHeight: number;
        bottomBarHeight: number;
        chatBoxBottomOffset: number;
    };
    /** Countdown Waring */
    countdownWarning: {
        height: number;
    };
    /** Mobile when landscape */
    mobile: {
        topBarHeight: number;
        bottomBarHeight: number;
        bottomBarMaxHeight: number;
        bottomActionButtonsBarHeight: number;
    };
    minHeaderHeight: number;
    minMessageSectionHeight: number;
    minVideochatHeight: number;
    actionSectionButton: number;
};
/** Default values for creating a player instance */
export declare const ChatSettings: {
    BAD_CONN_MAX_RESOLUTION: number;
    BAD_CONN_MAX_RESOLUTION_DESKTOP: number;
    BAD_CONN_TIMEOUT_WAITING: number;
    HLS_NATIVE_RECOVER_TIMEOUT: number;
    MAX_ATTEMPTS: number;
    MAX_ATTEMPTS_CHAT_START: number;
    MAX_ATTEMPTS_CHAT_START_PREVIEW: number;
    MIN_DURATION_FOR_CHAT_EXIT: number;
    TIMEOUT_CONNECTION_WARNING: number;
    TIMEOUT_FLASH_DETECTION: number;
    TIMEOUT_FLASH_INIT: number;
    TIMEOUT_RETRY_STREAM_START: number;
    TIMEOUT_RETRY_CHAT_START: number;
    TIMEOUT_VOLUME_BUTTON_HINT: number;
};
/** These values are in seconds */
export declare const videoChatTimeLimits: {
    anonymousTip: number;
    liveChatStartWarning: number;
};
/** Number of seconds after the messenger version will be hidden */
export declare const versionDisplayDuration = 5;
/**
 * The value (statistically determined) of the most common recharged value
 * 5000 = 50.00 Euros
 */
export declare const mostCommonRechargeValue = 5000;
/**
 * They are treated as gift pages and should have an id as when
 * we click on the tab's header - to set our gift page active
 */
export declare const specialGiftPages: ISpecialGiftPages;
export declare const defaultUserKey = "888888";
/**
 * Max height for devices for which we hide keyboard(blur editor)
 * only in messenger mode, we always hide keyboard in videochat mode
 */
export declare const maxHeightToHideMobileKeyboard = 620;
export declare const initialVideoResolution: {
    width: number;
    height: number;
};
export declare const defaultEmoticons: IEmoticon[];
/**
 * value is in seconds
 */
export declare const popupsTransitionTime: number;
export declare const defaultTipOption: ITipOption;
/** value in pixels for width & height of the image associated with a tip */
export declare const tipImageSize: number;
/**
 * number of seconds to wait for an improvement before displaying to the user
 * a message about low quality connection
 */
export declare const waitUntilReportingBadConnection: number;
export declare const maxTextCharLimit = 1000;
/**
 * TODO - in future implementations to be removed from code and used
 * from the INIT request of vxcontrol-client-lib
 */
export declare const rollbarAccessToken = "e4f40ec28c1e490387d8f3b5a5adc058";
export declare const censoredContentImage = "https://premium.vxcdn.org/u/1804898/g/866176/p/7261718/640.jpg?8170-5a3a6e08ddb3a850";
