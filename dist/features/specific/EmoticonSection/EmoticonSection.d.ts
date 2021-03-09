import { IEmoticon, ITranslation } from '../../../redux/store';
export interface IEmoticonSectionProps {
    isOpen: boolean;
    translation: ITranslation;
    isResponsive?: boolean;
    emoticons: IEmoticon[];
    closeEmoticonSection: () => any;
    emoticonClick: (emoticon: string) => () => void;
}
declare const EmoticonSection: (props: IEmoticonSectionProps) => JSX.Element;
export default EmoticonSection;
