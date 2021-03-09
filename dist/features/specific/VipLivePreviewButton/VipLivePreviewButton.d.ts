import { ITranslation } from '../../../redux/store';
interface IProps {
    seconds: number;
    translation: ITranslation;
    shouldDisplayIcon?: boolean;
    isForActionSection?: boolean;
    onClick: () => void;
}
declare const VipLivePreviewButton: (props: IProps) => JSX.Element;
export default VipLivePreviewButton;
