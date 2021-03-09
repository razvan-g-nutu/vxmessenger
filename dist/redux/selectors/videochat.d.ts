import IStore, { VideochatInformationType, VideoChatType, IVideochat } from "../store";
export declare const getVideoChat: (store: IStore, instanceId: string | undefined) => IVideochat;
/**
 * @return {VideochatInformationType | undefined} - type of the informational pop-up to be displayed
 * when the video stream is interrupted for various reasons
 */
export declare const getInformationType: import("reselect").OutputParametricSelector<IStore, string | undefined, VideochatInformationType | undefined, (res: IVideochat) => VideochatInformationType | undefined>;
/**
 * @return {boolean} - true if the current information type to be displayed when the stream ends
 * is implying that the messenger itself will be closed as well
 */
export declare const isExitingInformationType: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IVideochat) => boolean>;
/**
 * @return {PreChatInformationType | undefined} - type of the informational pop-up to be displayed
 * before the video stream is actually started
 */
export declare const getPreChatInformationType: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").PreChatInformationType | undefined, (res: IVideochat) => import("../store").PreChatInformationType | undefined>;
/**
 * @return {IResolution | undefined} - suggested width and height of the video stream, obtained from the API
 */
export declare const getInitialResolution: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IResolution | undefined, (res: IVideochat) => import("../store").IResolution | undefined>;
/**
 * @return {IQualityBoundaries} - details about the qualities of the video stream, to be feed to the video player
 */
export declare const getVideoChatQualityBoundaries: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IQualityBoundaries, (res: IVideochat) => import("../store").IQualityBoundaries>;
/**
 * @return {VideoChatType | undefined} - type of the started video stream
 */
export declare const getVideoChatType: import("reselect").OutputParametricSelector<IStore, string | undefined, VideoChatType | undefined, (res: IVideochat) => VideoChatType | undefined>;
/**
 * @return {boolean} - true if video chat is in live chat mode
 */
export declare const isVideoChatInLiveChatMode: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: VideoChatType | undefined) => boolean>;
/**
 * @return {boolean} - true if video chat is in free chat mode
 */
export declare const isVideoChatInFreeChatMode: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: VideoChatType | undefined) => boolean>;
/**
 * @return {boolean} - true if video chat is in preview mode
 */
export declare const isVideoChatInPreviewMode: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: VideoChatType | undefined) => boolean>;
/**
 * @return {boolean} - true if video chat is in free mode (the client has free duration chat)
 */
export declare const isVideoChatInFreeMode: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: VideoChatType | undefined) => boolean>;
/**
 * @return {boolean} - true if the videochat type is preview or freechat, in order
 * to render the continue with livechat dialog when the free seconds have been consumed.
 */
export declare const shouldDisplayContinueWithLiveChat: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean) => boolean>;
/**
 * @return {boolean} - true if video chat is in voyeur mode
 */
export declare const isVideoChatInVoyeurMode: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: VideoChatType | undefined) => boolean>;
/**
 * @return {boolean} - true if video chat is in group chat mode
 */
export declare const isVideoChatInGroupMode: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: VideoChatType | undefined) => boolean>;
/**
 * @return {boolean} - true if video chat is in voyeur mode,
 * but with a model currently being in a private chat with someone else
 */
export declare const isVideoChatInVoyeurPrivateMode: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: VideoChatType | undefined) => boolean>;
/**
 * @return {VideoChatType | undefined} - type of the last successfully started video stream
 */
export declare const getLastSuccessfulVideoChatType: import("reselect").OutputParametricSelector<IStore, string | undefined, VideoChatType | undefined, (res: IVideochat) => VideoChatType | undefined>;
/**
 * @return {VideoChatType | undefined} - type of the video chat session to be automatically started
 */
export declare const getInitialVideoChatType: import("reselect").OutputParametricSelector<IStore, string | undefined, VideoChatType | undefined, (res: IVideochat) => VideoChatType | undefined>;
/**
 * @return {boolean} true if the model cannot be heard
 */
export declare const getVideoChatIsMutedByModel: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IVideochat) => boolean>;
/**
 * @return {boolean} true if the client muted the audio stream
 */
export declare const getVideoChatIsMutedByClient: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IVideochat) => boolean>;
/**
 * @return {boolean} true if the video chat is initially muted due to browser's restrictions
 */
export declare const displayVolumeAsInitiallyMuted: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean | undefined, (res: IVideochat) => boolean | undefined>;
/**
 * @return {boolean} true to display the hint for initially muted button due to browser's restrictions
 */
export declare const isInitiallyMutedHintDisplayed: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean | undefined, (res: IVideochat) => boolean | undefined>;
/**
 * @return {boolean} true if cam to cam feature was activated or not
 * (user turned on his web cam and send video stream to the model)
 */
export declare const isCam2CamActive: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IVideochat) => boolean>;
/**
 * @return {boolean} true if the cam2cam feature is enabled
 */
export declare const isCam2CamEnabled: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IVideochat) => boolean>;
/**
 * @return {boolean} true if cam to cam video area is minimized
 * (usually because of overall video available area being to small)
 */
export declare const isCam2CamMinimized: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IVideochat) => boolean>;
/**
 * @return {ICameraDevice[]} list of available cameras on the current device
 */
export declare const getCam2CamCameras: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").ICameraDevice[], (res: IVideochat) => import("../store").ICameraDevice[]>;
/**
 * @return {ICameraDevice | null} selected camera (if more that one are available) to be used for the cam2cam
 */
export declare const getCam2CamSelectedCamera: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").ICameraDevice | null | undefined, (res: IVideochat) => import("../store").ICameraDevice | null | undefined>;
/**
 * @return {boolean} true if the messenger is in full screen mode
 */
export declare const isFullScreen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IVideochat) => boolean>;
/**
 * @return {boolean} true if the video chat mode is open
 */
export declare const isVideoChatOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IVideochat) => boolean>;
/**
 * @return {number} available time in seconds (correlated with the actual available money)
 * before video chat is turned off
 */
export declare const getVideoChatTimeLeft: import("reselect").OutputParametricSelector<IStore, string | undefined, number, (res: IVideochat) => number>;
/**
 * @return {boolean} true if the available time left is under a critical threshold
 */
export declare const isVideoChatTimeLeftBelowThreshold: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean | undefined, (res: IVideochat) => boolean | undefined>;
/**
 * @return {number} available time in seconds for the video chat session,
 * got in the previous notification from the API
 */
export declare const getVideoChatPreviousTimeLeft: import("reselect").OutputParametricSelector<IStore, string | undefined, number | undefined, (res: IVideochat) => number | undefined>;
/**
 * @return {number} initial time in seconds to send messages to the model,
 * after a live preview session has ended
 */
export declare const getLivePreviewTextTimeLimit: import("reselect").OutputParametricSelector<IStore, string | undefined, number, (res: IVideochat) => number>;
/**
 * @return {number} available left time (in seconds) to send messages to the model,
 * after a live preview session has ended
 */
export declare const getLivePreviewTextTimeLeft: import("reselect").OutputParametricSelector<IStore, string | undefined, number, (res: IVideochat) => number>;
/**
 * @return {boolean} - whether pre-chat information dialog should be displayed or not
 */
export declare const shouldRenderPreChatInformationDialog: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean | undefined, (res: IVideochat) => boolean | undefined>;
/**
 * @return {boolean} - Whether chat information dialog can be displayed or not.
 * This means that a minimum set of requirements is fulfilled in order to display the informational pop up
 */
export declare const canRenderInformationDialog: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IVideochat) => boolean>;
/**
 * @return {boolean} true if a regular chat information dialog should be displayed
 */
export declare const shouldRenderRegularInformationDialog: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean) => boolean>;
/**
 * @return {boolean} - true if  the (video) session is starting - this logic
 * will not apply for self-streaming (age verification scenario)
 */
export declare const isStarting: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IVideochat) => boolean>;
/**
 * @return {boolean} - true if the vide stream is playing
 */
export declare const isPlaying: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IVideochat) => boolean>;
/**
 * Display or not the messenger section during a video session
 * @return {boolean}
 */
export declare const shouldRenderOnlyVideochat: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IVideochat) => boolean>;
/**
 * @return {boolean} - true if the drop-down menu for mobile devices is open
 */
export declare const isMobileMenuOpen: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean | undefined, (res: IVideochat) => boolean | undefined>;
/**
 * @return {ExitEvent} - the last exiting error for video chat
 */
export declare const getExitEvent: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").IExitEvent | undefined, (res: IVideochat) => import("../store").IExitEvent | undefined>;
/**
 * @return {boolean} true if the messenger was open in AVS (age-verification-system) mode;
 */
export declare const isInAVSMode: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: VideoChatType | undefined) => boolean>;
/**
 * @return {boolean} - true if  the (video) pre-loader should be rendered;
 * Note: it should be rendered if videochat is open, video is not playing, not avs mode
 * and there is no information dialog
 */
export declare const shouldRenderPreloader: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: boolean, res2: boolean) => boolean>;
export declare const resumeChatTimestamp: import("reselect").OutputParametricSelector<IStore, string | undefined, Date | undefined, (res: IVideochat) => Date | undefined>;
export declare const isMobileLandscape: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: boolean) => boolean>;
export declare const shouldHideVideochatControls: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res1: IVideochat, res2: boolean) => boolean>;
/** Number of participants in a group chat */
export declare const getGroupChatParticipantsNumber: import("reselect").OutputParametricSelector<IStore, string | undefined, number, (res: IVideochat) => number>;
/** The list of group chat participants withing a group chat sessions */
export declare const getGroupChatParticipants: import("reselect").OutputParametricSelector<IStore, string | undefined, string[], (res: IVideochat) => string[]>;
/** Client's name/alies used for starting a group chat session */
export declare const getGroupChatClientName: import("reselect").OutputParametricSelector<IStore, string | undefined, string, (res: IVideochat) => string>;
/**
 * @return {boolean} true if the number of participants in a group chat should be displayed
 */
export declare const shouldRenderGroupChatParticipants: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IVideochat) => boolean>;
/**
 * @return {boolean} true if video stream is restricted by autoplay policies
 */
export declare const isAutoplayRestricted: import("reselect").OutputParametricSelector<IStore, string | undefined, boolean, (res: IVideochat) => boolean>;
