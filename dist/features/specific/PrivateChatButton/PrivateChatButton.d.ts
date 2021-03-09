import { ITranslation } from '../../../redux/store';
interface IProps {
    shouldDisplayIcon?: boolean;
    isForActionSection?: boolean;
    translation: ITranslation;
    onClick: () => void;
}
declare const PrivateChatButton: (props: IProps) => JSX.Element;
export default PrivateChatButton;
