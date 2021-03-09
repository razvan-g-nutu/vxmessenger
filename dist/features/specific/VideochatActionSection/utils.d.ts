import { IContainerProps as IProps } from "./types";
export declare const toggleFullscreen: (props: IProps) => () => void;
export declare const toggleMobileMenu: (props: IProps) => () => void;
export declare const hideInitialMutedHint: (props: IProps) => () => void;
export declare const reloadPlayer: (props: IProps) => () => void;
export declare const toggleSound: (props: IProps) => () => void;
export declare const setVolume: (props: IProps) => (volume: number) => void;
