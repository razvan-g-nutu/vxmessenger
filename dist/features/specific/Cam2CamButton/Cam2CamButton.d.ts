import { ITranslation } from '../../../redux/store';
export interface IProps {
    translation: ITranslation;
    isSelected: boolean;
    shouldDisplayIcon?: boolean;
    updateBrowserLink?: string;
    isForActionSection?: boolean;
    onClick: () => any;
}
declare const Cam2CamButton: (props: IProps) => JSX.Element;
export default Cam2CamButton;
