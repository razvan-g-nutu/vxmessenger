import { ITranslation, VideoChatType } from '../../../redux/store';
interface IProps {
    translation: ITranslation;
    isGiftButtonVisible: boolean;
    isToyButtonVisible: boolean;
    hasImageUpload: boolean;
    buttonsVisibility: {
        liveChat: boolean;
        privateChat: boolean;
        cam2Cam: boolean;
    };
    toggleGiftSection: () => void;
    toggleToySection: () => void;
    closeMessenger: () => void;
    switchVideoChatMode: (type: VideoChatType) => () => void;
    toggleCam2Cam: () => void;
    requestImageUpload: () => void;
}
declare const MobileMenu: (props: IProps) => JSX.Element;
export default MobileMenu;
