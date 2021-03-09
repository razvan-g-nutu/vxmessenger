interface IProps {
    isResponsive: boolean;
    isFullscreen: boolean;
    isDropDownOpen: boolean;
    isAnySectionOpen: boolean;
    hasActionSectionInDropDown: boolean;
    areAnyPromptsOpenInResponsiveMode: boolean;
    areAllPopUpsClosed: boolean;
    isGiftSectionOpen: boolean;
    isEmoticonSectionOpen: boolean;
    shouldUseDropdownAnimation: boolean;
}
declare const MessageSectionPopups: (props: IProps) => JSX.Element;
export default MessageSectionPopups;
