import { IResolution } from "../redux/store";
export interface IViewProviderProps {
    isMobile: boolean;
    isVideoChat: boolean;
    isFullscreen: boolean;
    isKeyboard: boolean;
    isPortrait: boolean;
    isLandscape: boolean;
    containerWidth: number;
    containerHeight: number;
    originalVideoChatWidth: number;
    originalVideoChatHeight: number;
    videoChatRatio: number;
    videoChatWidth: number;
    videoChatHeight: number;
    videoChatOptimalWidth: number;
    videoChatOptimalHeight: number;
    messengerVideoModeWidth: number;
    messengerVideoModeHeight: number;
    shouldRenderOnlyVideochat: boolean;
    hasActionButtons: boolean;
    switchToPortraitWidth: number;
}
export interface IViewHandlerProps {
    containerWidth: number;
    containerHeight: number;
    isLandscape: boolean;
    isFullscreen: boolean;
    isKeyboard: boolean;
    isVideoChat: boolean;
    resolution?: IResolution;
    shouldRenderOnlyVideochat: boolean;
    hasActionButtons: boolean;
    switchToPortraitWidth: number;
}
