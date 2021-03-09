import { ITranslation } from '../../../redux/store';
interface IProps {
    hasEmoticons: boolean;
    hasImageUpload: boolean;
    shouldShowTipping: boolean;
    isResponsive?: boolean;
    isDropDownOpen?: boolean;
    isGiftSectionOpen: boolean;
    isToySectionOpen: boolean;
    hasToyControl: boolean;
    isGiftButtonVisible?: boolean;
    isEmoticonSectionOpen: boolean;
    translation: ITranslation;
    onGiftClick: () => void;
    onEmoticonClick: () => void;
    onToyClick: () => void;
    onTipClick?: () => void;
    requestImageUpload: () => void;
}
declare const MessageSectionButtons: (props: IProps) => JSX.Element;
export default MessageSectionButtons;
