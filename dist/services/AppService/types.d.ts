/**
 * Hook for when the client clicks on model's profile picture or name
 */
import { ExitCode } from "../ChatService/types";
import { VideoChatType } from "../..";
export declare type IClickProfile = () => void;
export declare type IClickImage = (imageUrl: string) => void;
/**
 * Hook for when the client closes the messenger on purpose
 * (so we exclude error situations in which we should close the messenger)
 */
export declare type IClickExit = (code?: ExitCode, message?: string) => void;
/**
 * Hook triggered when the client will try an action that request a money
 * amount that he does not have in his balance. Therefore, an recharge action
 * will be performed by the parent platform.
 */
export declare type IRecharge = () => void;
/**
 * The parent platform should be informed if the messenger is in an
 * active videochat or not - maybe to apply different behaviors to the
 * user interface. When closing it, we may send the chatId value for feedback.
 */
export declare type IVideoChatAction = (isVideoChatOpen: boolean, chatId?: string) => void;
/**
 * The parent platform should be informed if the messenger is displaying
 * an exit popup - maybe to apply different behaviors to the
 * user interface
 */
export declare type IExitPopupAction = (isExitPopupOpen: boolean) => void;
/**
 * Hook for when the client is demanded to verify its age status
 * (fsk has value 16 or 18) based on model's actions
 */
export declare type IAgeVerification = () => void;
export declare type IOnModelStatusChange = (isOnline: boolean) => void;
/**
 * Returns the model's supported streams, which as value
 * is a subset of [Livechat, Preview, Voyeur]
 */
export declare type IOnSupportedVideoChatTypes = (videoChatTypes: VideoChatType[]) => void;
/**
 * Hook to be called if the chat config (clientId + server) provided by the platform are not usable
 */
export declare type IOnFailedChatConfig = (error: any) => void;
export declare type IBecomeVIP = () => void;
/**
 * Hook to be called if the web token provided by the platform is not usable (anymore)
 */
export declare type IOnFailedWebToken = (error?: any) => void;
export interface IPreferenceStore {
    getPreference: (preferenceName: PreferenceName) => boolean | number | undefined;
    setPreference: (preferenceName: PreferenceName, value: boolean | number, instanceId?: string) => void;
}
export declare enum PreferenceName {
    VolumeLevel = "VolumeLevel",
    ShouldIncreaseMessageFontSize = "ShouldIncreaseMessageFontSize"
}
