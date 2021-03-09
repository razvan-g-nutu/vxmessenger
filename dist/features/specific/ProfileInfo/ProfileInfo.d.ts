import { ITranslation } from '../../../redux/store';
interface IProps {
    children?: any;
    hasFavorite: boolean;
    hasContactNote: boolean;
    hasModelName: boolean;
    hasModelProfilePicture: boolean;
    modelName: string;
    tooltipText: string;
    shouldRenderMotto: boolean;
    hasActionSectionInProfile: boolean;
    hasProfileClickHover: boolean;
    isModelOnline: boolean;
    translation: ITranslation;
    onClickTitle: () => void;
}
declare const ProfileInfo: (props: IProps) => JSX.Element;
export default ProfileInfo;
