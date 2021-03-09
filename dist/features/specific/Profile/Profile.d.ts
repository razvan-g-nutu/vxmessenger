import { IChat, ITranslation } from '../../../redux/store';
interface IProps {
    chat?: IChat;
    motto: string;
    isVideochatOpen: boolean;
    hasModelProfilePicture?: boolean;
    hasModelPictureInProfile: boolean;
    translation: ITranslation;
    onClickProfilePicture: () => any;
}
declare const Profile: (props: IProps) => JSX.Element;
export default Profile;
