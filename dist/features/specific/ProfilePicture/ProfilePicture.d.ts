interface IProps {
    picture: string;
    isOnline: boolean;
    hasOnProfileClick: boolean;
    hasModelProfilePicture?: boolean;
    isContactNoteOpen: boolean;
    tooltipText?: string;
    onClick?: () => void;
}
declare const ProfilePicture: (props: IProps) => JSX.Element;
export default ProfilePicture;
