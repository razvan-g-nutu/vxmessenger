import { ITranslation } from '../../../redux/store';
interface IProps {
    isResponsive: boolean;
    isEmoticonSectionOpen: boolean;
    isGiftSectionOpen: boolean;
    isToySectionOpen: boolean;
    translation: ITranslation;
    emoticonClick: (emoticon: string) => () => void;
    giftClick: (gift: string) => () => void;
}
declare const SymbolSection: (props: IProps) => JSX.Element;
export default SymbolSection;
