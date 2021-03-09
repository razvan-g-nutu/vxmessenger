export declare const QUERYSINGLE = "querysingle";
/** Dollar's id is always going to be 171 (static value in the database) */
export declare const dollarGiftStaticData: {
    id: number;
    name: string;
};
export declare enum BackenPayloadTypes {
    guest = "guest",
    channel = "channel"
}
/**
 * Reset interval for resetting the chat connection
 * Note: value is in minutes;
 */
export declare const resetChatInterval: number;
/**
 * The value is in miliseconds.
 */
export declare const loginWaitingTime = 5000;
/**
 * Reset interval for hiding the videochat controls
 */
export declare const shouldHideVideoChatControlsTimeoutTime = 10000;
/** The value is in miliseconds */
export declare const intervalBetweenClicks = 1000;
export declare const clickCountLimit: number;
/** The value is in pixels */
export declare const emoticonSize: {
    large: number;
    small: number;
};
/** Line separator inside a message */
export declare const MESSAGE_LINE_SEPARATOR = "\n";
/** The value is in pixels */
export declare const TOY_MESSAGE_SIZE = 40;
/** The value is in pixels */
export declare const TOY_SECTION_HEIGHT = 240;
export declare const ESC_KEY_CODE = 27;
export declare const ENTER_KEY_CODE = 13;
export declare const ARROW_UP_KEY_CODE = 38;
export declare const ARROW_DOWN_KEY_CODE = 40;
export declare const creditsDeprecatedName = "Credits";
/** The value is in pixels */
export declare const receivedMessageAndImageWrapperMarginLeft = 20;
/** The value is in pixels */
export declare const receivedMessageAndImageWrapperPaddingRight = 8;
export declare const mentionSpecialCharacter = "@";
export declare const messageFontSizePercentage = 25;
export declare const defaultInstanceId = "defaultId";
