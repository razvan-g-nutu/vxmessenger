export interface IWindowBoxProps {
    isOpen: boolean;
    isResponsive: boolean;
    children?: any;
    customCloseIcon?: JSX.Element;
    title?: string | JSX.Element;
    isWindowForUserPrompt?: boolean;
    hideHeader?: boolean;
    isFullScreen: boolean;
    shouldUseDropdownAnimation: boolean;
    handleClose: () => void;
}
declare const WindowBox: (props: IWindowBoxProps) => JSX.Element;
export default WindowBox;
