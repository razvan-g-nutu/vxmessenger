export declare enum MessengerSpecificErrorCodes {
    GUEST_OFFLINE = 100001
}
/**
 * Result codes returned by vxcontrol-client-lib
 */
export declare enum VXControlCodes {
    /** Error when performing a messenger action (like sending a gift or purchasing a gift bundle) */
    NO_CREDIT_MESSENGER = 4141,
    /** Error when performing a videochat action (like starting a livechat session) */
    NO_CREDIT_VIDEOCHAT = 6106,
    SUCCESS_EXIT_CODE = 2000,
    INVALID_PARAMETER = 5001,
    UNKNOWN_ERROR = 6001,
    INVALID_WEB_TOKEN = 6002,
    MODEL_IS_OFFLINE = 6403,
    SOFT_CHAT = 6601,
    PREVIEW_LIMIT_EXCEEDED = 6401,
    MODEL_IS_IN_PRIVATE_CHAT = 6906
}
