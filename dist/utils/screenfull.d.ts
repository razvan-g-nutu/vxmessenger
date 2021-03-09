/** Check if the window is in fullscreen mode */
export declare const isFullscreen: () => boolean;
/** Toggle the fullscreen status for a certain HTML element */
export declare const toggle: (element: Element | undefined) => void;
/** Exit window's fullscreen state */
export declare const exit: () => void;
/** You can configurate a hook that will be called when the fullscreen state changes */
export declare const onChange: (func: (args: any) => void) => void;
