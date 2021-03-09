import { ITranslation } from '../../../redux/store';
interface IProps {
    seconds: number;
    shouldDisplayIcon?: boolean;
    isForActionSection?: boolean;
    translation: ITranslation;
    onClick: () => void;
}
declare const LiveChatPreviewButton: (props: IProps) => JSX.Element;
export default LiveChatPreviewButton;
